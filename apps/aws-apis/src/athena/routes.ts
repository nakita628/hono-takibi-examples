import { createRoute, z } from '@hono/zod-openapi'

type StringType = string

type LongType = number

const LongSchema: z.ZodType<LongType> = z.int().openapi('Long')

const StringSchema: z.ZodType<StringType> = z.string().openapi('String')

const QueryStagePlanNodeSchema: z.ZodType<QueryStagePlanNodeType> = z
  .lazy(() =>
    z
      .object({
        Name: StringSchema.and(
          z
            .any()
            .openapi({
              description:
                'Name of the query stage plan that describes the operation this stage is performing as part of query execution.',
            }),
        ).exactOptional(),
        Identifier: StringSchema.and(
          z
            .any()
            .openapi({
              description:
                'Information about the operation this query stage plan node is performing.',
            }),
        ).exactOptional(),
        Children: QueryStagePlanNodesSchema.and(
          z
            .any()
            .openapi({
              description:
                'Stage plan information such as name, identifier, sub plans, and remote sources of child plan nodes/',
            }),
        ).exactOptional(),
        RemoteSources: StringListSchema.and(
          z.any().openapi({ description: 'Source plan node IDs.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Stage plan information such as name, identifier, sub plans, and remote sources.',
        required: [],
      }),
  )
  .openapi('QueryStagePlanNode')

const QueryStagesSchema: z.ZodType<QueryStagesType> = z
  .lazy(() => z.array(QueryStageSchema))
  .openapi('QueryStages')

type QueryStageType = {
  StageId?: z.infer<typeof LongSchema> & { [key: string]: unknown }
  State?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  OutputBytes?: z.infer<typeof LongSchema> & { [key: string]: unknown }
  OutputRows?: z.infer<typeof LongSchema> & { [key: string]: unknown }
  InputBytes?: z.infer<typeof LongSchema> & { [key: string]: unknown }
  InputRows?: z.infer<typeof LongSchema> & { [key: string]: unknown }
  ExecutionTime?: z.infer<typeof LongSchema> & { [key: string]: unknown }
  QueryStagePlan?: z.infer<typeof QueryStagePlanNodeSchema> & { [key: string]: unknown }
  SubStages?: z.infer<typeof QueryStagesSchema> & { [key: string]: unknown }
}

const QueryStagePlanNodesSchema: z.ZodType<QueryStagePlanNodesType> = z
  .lazy(() => z.array(QueryStagePlanNodeSchema))
  .openapi('QueryStagePlanNodes')

type StringListType = z.infer<typeof StringSchema>[]

const StringListSchema: z.ZodType<StringListType> = z.array(StringSchema).openapi('StringList')

type QueryStagePlanNodeType = {
  Name?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  Identifier?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  Children?: z.infer<typeof QueryStagePlanNodesSchema> & { [key: string]: unknown }
  RemoteSources?: z.infer<typeof StringListSchema> & { [key: string]: unknown }
}

const QueryStageSchema: z.ZodType<QueryStageType> = z
  .lazy(() =>
    z
      .object({
        StageId: LongSchema.and(
          z.any().openapi({ description: 'The identifier for a stage.' }),
        ).exactOptional(),
        State: StringSchema.and(
          z.any().openapi({ description: 'State of the stage after query execution.' }),
        ).exactOptional(),
        OutputBytes: LongSchema.and(
          z
            .any()
            .openapi({ description: 'The number of bytes output from the stage after execution.' }),
        ).exactOptional(),
        OutputRows: LongSchema.and(
          z
            .any()
            .openapi({ description: 'The number of rows output from the stage after execution.' }),
        ).exactOptional(),
        InputBytes: LongSchema.and(
          z
            .any()
            .openapi({ description: 'The number of bytes input into the stage for execution.' }),
        ).exactOptional(),
        InputRows: LongSchema.and(
          z
            .any()
            .openapi({ description: 'The number of rows input into the stage for execution.' }),
        ).exactOptional(),
        ExecutionTime: LongSchema.and(
          z.any().openapi({ description: 'Time taken to execute this stage.' }),
        ).exactOptional(),
        QueryStagePlan: QueryStagePlanNodeSchema.and(
          z
            .any()
            .openapi({
              description:
                'Stage plan information such as name, identifier, sub plans, and source stages.',
            }),
        ).exactOptional(),
        SubStages: QueryStagesSchema.and(
          z
            .any()
            .openapi({
              description: 'List of sub query stages that form this stage execution plan.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Stage statistics such as input and output rows and bytes, execution time and stage state. This information also includes substages and the query stage plan.',
        required: [],
      }),
  )
  .openapi('QueryStage')

type QueryStagesType = z.infer<typeof QueryStageSchema>[]

type QueryStagePlanNodesType = z.infer<typeof QueryStagePlanNodeSchema>[]

const NameStringSchema = z.string().min(1).max(128).openapi('NameString')

const DescriptionStringSchema = z.string().min(1).max(1024).openapi('DescriptionString')

const DatabaseStringSchema = z.string().min(1).max(255).openapi('DatabaseString')

const QueryStringSchema = z.string().min(1).max(262144).openapi('QueryString')

const NamedQueryIdSchema = z.string().regex(/\S+/).min(1).max(128).openapi('NamedQueryId')

const WorkGroupNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9._-]{1,128}/)
  .openapi('WorkGroupName')

const NamedQuerySchema = z
  .object({
    Name: NameStringSchema.and(z.any().openapi({ description: 'The query name.' })),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'The query description.' }),
    ).exactOptional(),
    Database: DatabaseStringSchema.and(
      z.any().openapi({ description: 'The database to which the query belongs.' }),
    ),
    QueryString: QueryStringSchema.and(
      z.any().openapi({ description: 'The SQL statements that make up the query.' }),
    ),
    NamedQueryId: NamedQueryIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the query.' }),
    ).exactOptional(),
    WorkGroup: WorkGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the workgroup that contains the named query.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Database', 'QueryString'],
    description:
      'A query, where <code>QueryString</code> contains the SQL statements that make up the query.',
  })
  .openapi('NamedQuery')

const NamedQueryListSchema = z.array(NamedQuerySchema).openapi('NamedQueryList')

const ErrorCodeSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi({
    description:
      'The error code returned when the query execution failed to process, or when the processing request for the named query failed.',
  })
  .openapi('ErrorCode')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const UnprocessedNamedQueryIdSchema = z
  .object({
    NamedQueryId: NamedQueryIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the named query.' }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error code returned when the processing request for the named query failed, if applicable.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error message returned when the processing request for the named query failed, if applicable.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a named query ID that could not be processed.',
    required: [],
  })
  .openapi('UnprocessedNamedQueryId')

const UnprocessedNamedQueryIdListSchema = z
  .array(UnprocessedNamedQueryIdSchema)
  .openapi('UnprocessedNamedQueryIdList')

const BatchGetNamedQueryOutputSchema = z
  .object({
    NamedQueries: NamedQueryListSchema.and(
      z.any().openapi({ description: 'Information about the named query IDs submitted.' }),
    ).exactOptional(),
    UnprocessedNamedQueryIds: UnprocessedNamedQueryIdListSchema.and(
      z.any().openapi({ description: 'Information about provided query IDs.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetNamedQueryOutput')

const NamedQueryIdListSchema = z
  .array(NamedQueryIdSchema)
  .min(1)
  .max(50)
  .openapi('NamedQueryIdList')

const BatchGetNamedQueryInputSchema = z
  .object({
    NamedQueryIds: NamedQueryIdListSchema.and(
      z.any().openapi({ description: 'An array of query IDs.' }),
    ),
  })
  .openapi({
    required: ['NamedQueryIds'],
    title: 'BatchGetNamedQueryInput',
    description: 'Contains an array of named query IDs.',
  })
  .openapi('BatchGetNamedQueryInput')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const StatementNameSchema = z
  .string()
  .regex(/[a-zA-Z_][a-zA-Z0-9_@:]{1,256}/)
  .min(1)
  .max(256)
  .openapi('StatementName')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const PreparedStatementSchema = z
  .object({
    StatementName: StatementNameSchema.and(
      z.any().openapi({ description: 'The name of the prepared statement.' }),
    ).exactOptional(),
    QueryStatement: QueryStringSchema.and(
      z.any().openapi({ description: 'The query string for the prepared statement.' }),
    ).exactOptional(),
    WorkGroupName: WorkGroupNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the workgroup to which the prepared statement belongs.',
        }),
    ).exactOptional(),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'The description of the prepared statement.' }),
    ).exactOptional(),
    LastModifiedTime: DateSchema.and(
      z.any().openapi({ description: 'The last modified time of the prepared statement.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A prepared SQL statement for use with Athena.', required: [] })
  .openapi('PreparedStatement')

const PreparedStatementDetailsListSchema = z
  .array(PreparedStatementSchema)
  .openapi('PreparedStatementDetailsList')

const UnprocessedPreparedStatementNameSchema = z
  .object({
    StatementName: StatementNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a prepared statement that could not be returned due to an error.',
        }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error code returned when the request for the prepared statement failed.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The error message containing the reason why the prepared statement could not be returned. The following error messages are possible:</p> <ul> <li> <p> <code>INVALID_INPUT</code> - The name of the prepared statement that was provided is not valid (for example, the name is too long).</p> </li> <li> <p> <code>STATEMENT_NOT_FOUND</code> - A prepared statement with the name provided could not be found.</p> </li> <li> <p> <code>UNAUTHORIZED</code> - The requester does not have permission to access the workgroup that contains the prepared statement.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The name of a prepared statement that could not be returned.',
    required: [],
  })
  .openapi('UnprocessedPreparedStatementName')

const UnprocessedPreparedStatementNameListSchema = z
  .array(UnprocessedPreparedStatementNameSchema)
  .openapi('UnprocessedPreparedStatementNameList')

const BatchGetPreparedStatementOutputSchema = z
  .object({
    PreparedStatements: PreparedStatementDetailsListSchema.and(
      z.any().openapi({ description: 'The list of prepared statements returned.' }),
    ).exactOptional(),
    UnprocessedPreparedStatementNames: UnprocessedPreparedStatementNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of one or more prepared statements that were requested but could not be returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetPreparedStatementOutput')

const PreparedStatementNameListSchema = z
  .array(StatementNameSchema)
  .openapi('PreparedStatementNameList')

const BatchGetPreparedStatementInputSchema = z
  .object({
    PreparedStatementNames: PreparedStatementNameListSchema.and(
      z.any().openapi({ description: 'A list of prepared statement names to return.' }),
    ),
    WorkGroup: WorkGroupNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the workgroup to which the prepared statements belong.',
        }),
    ),
  })
  .openapi({
    required: ['PreparedStatementNames', 'WorkGroup'],
    title: 'BatchGetPreparedStatementInput',
  })
  .openapi('BatchGetPreparedStatementInput')

const QueryExecutionIdSchema = z.string().regex(/\S+/).min(1).max(128).openapi('QueryExecutionId')

const StatementTypeSchema = z.enum(['DDL', 'DML', 'UTILITY']).openapi('StatementType')

const ResultOutputLocationSchema = z.string().openapi('ResultOutputLocation')

const EncryptionOptionSchema = z.enum(['SSE_S3', 'SSE_KMS', 'CSE_KMS']).openapi('EncryptionOption')

const EncryptionConfigurationSchema = z
  .object({
    EncryptionOption: EncryptionOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (<code>SSE_S3</code>), server-side encryption with KMS-managed keys (<code>SSE_KMS</code>), or client-side encryption with KMS-managed keys (<code>CSE_KMS</code>) is used.</p> <p>If a query runs in a workgroup and the workgroup overrides client-side settings, then the workgroup's setting for encryption is used. It specifies whether query results must be encrypted, for all queries that run in this workgroup. </p>",
        }),
    ),
    KmsKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For <code>SSE_KMS</code> and <code>CSE_KMS</code>, this is the KMS key ARN or ID.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EncryptionOption'],
    description:
      'If query and calculation results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and key information.',
  })
  .openapi('EncryptionConfiguration')

const AwsAccountIdSchema = z
  .string()
  .regex(/^[0-9]+$/)
  .length(12)
  .openapi('AwsAccountId')

const S3AclOptionSchema = z.literal('BUCKET_OWNER_FULL_CONTROL').openapi('S3AclOption')

const AclConfigurationSchema = z
  .object({
    S3AclOption: S3AclOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 canned ACL that Athena should specify when storing query results. Currently the only supported canned ACL is <code>BUCKET_OWNER_FULL_CONTROL</code>. If a query runs in a workgroup and the workgroup overrides client-side settings, then the Amazon S3 canned ACL specified in the workgroup\'s settings is used for all queries that run in the workgroup. For more information about Amazon S3 canned ACLs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl">Canned ACL</a> in the <i>Amazon S3 User Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: ['S3AclOption'],
    description:
      'Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. When Athena stores query results in Amazon S3, the canned ACL is set with the <code>x-amz-acl</code> request header. For more information about S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html#object-ownership-overview">Object Ownership settings</a> in the <i>Amazon S3 User Guide</i>.',
  })
  .openapi('AclConfiguration')

const ResultConfigurationSchema = z
  .object({
    OutputLocation: ResultOutputLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location in Amazon S3 where your query and calculation results are stored, such as <code>s3://path/to/query/bucket/</code>. To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using <a>WorkGroupConfiguration</a>. If none of them is set, Athena issues an error that no output location is provided. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and output files</a>. If workgroup settings override client-side settings, then the query uses the settings specified for the workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.',
        }),
    ).exactOptional(),
    EncryptionConfiguration: EncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'If query and calculation results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and key information. This is a client-side setting. If workgroup settings override client-side settings, then the query uses the encryption configuration that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a> and <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.',
        }),
    ).exactOptional(),
    ExpectedBucketOwner: AwsAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Web Services account ID that you expect to be the owner of the Amazon S3 bucket specified by <a>ResultConfiguration$OutputLocation</a>. If set, Athena uses the value for <code>ExpectedBucketOwner</code> when it makes Amazon S3 calls to your specified output location. If the <code>ExpectedBucketOwner</code> Amazon Web Services account ID does not match the actual owner of the Amazon S3 bucket, the call fails with a permissions error.</p> <p>This is a client-side setting. If workgroup settings override client-side settings, then the query uses the <code>ExpectedBucketOwner</code> setting that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a> and <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>',
        }),
    ).exactOptional(),
    AclConfiguration: AclConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. Currently the only supported canned ACL is <code>BUCKET_OWNER_FULL_CONTROL</code>. This is a client-side setting. If workgroup settings override client-side settings, then the query uses the ACL configuration that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. For more information, see <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a> and <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The location in Amazon S3 where query and calculation results are stored and the encryption option, if any, used for query and calculation results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.',
    required: [],
  })
  .openapi('ResultConfiguration')

const BooleanSchema = z.boolean().openapi('Boolean')

const AgeSchema = z.int().min(0).max(10080).openapi('Age')

const ResultReuseByAgeConfigurationSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if previous query results can be reused when the query is run; otherwise, false. The default is false.',
        }),
    ),
    MaxAgeInMinutes: AgeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies, in minutes, the maximum age of a previous query result that Athena should consider for reuse. The default is 60.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled'],
    description:
      'Specifies whether previous query results are reused, and if so, their maximum age.',
  })
  .openapi('ResultReuseByAgeConfiguration')

const ResultReuseConfigurationSchema = z
  .object({
    ResultReuseByAgeConfiguration: ResultReuseByAgeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether previous query results are reused, and if so, their maximum age.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the query result reuse behavior for the query.',
    required: [],
  })
  .openapi('ResultReuseConfiguration')

const CatalogNameStringSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('CatalogNameString')

const QueryExecutionContextSchema = z
  .object({
    Database: DatabaseStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the database used in the query execution. The database must exist in the catalog.',
        }),
    ).exactOptional(),
    Catalog: CatalogNameStringSchema.and(
      z.any().openapi({ description: 'The name of the data catalog used in the query execution.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The database and data catalog context in which the query execution occurs.',
    required: [],
  })
  .openapi('QueryExecutionContext')

const QueryExecutionStateSchema = z
  .enum(['QUEUED', 'RUNNING', 'SUCCEEDED', 'FAILED', 'CANCELLED'])
  .openapi('QueryExecutionState')

const ErrorCategorySchema = z.int().min(1).max(3).openapi('ErrorCategory')

const ErrorTypeSchema = z.int().min(0).max(9999).openapi('ErrorType')

const AthenaErrorSchema = z
  .object({
    ErrorCategory: ErrorCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An integer value that specifies the category of a query failure error. The following list shows the category for each integer value.</p> <p> <b>1</b> - System</p> <p> <b>2</b> - User</p> <p> <b>3</b> - Other</p>',
        }),
    ).exactOptional(),
    ErrorType: ErrorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer value that provides specific information about an Athena query error. For the meaning of specific values, see the <a href="https://docs.aws.amazon.com/athena/latest/ug/error-reference.html#error-reference-error-type-reference">Error Type Reference</a> in the <i>Amazon Athena User Guide</i>.',
        }),
    ).exactOptional(),
    Retryable: BooleanSchema.and(
      z.any().openapi({ description: 'True if the query might succeed if resubmitted.' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'Contains a short description of the error that occurred.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about an Athena query error. The <code>AthenaError</code> feature provides standardized error information to help you understand failed queries and take steps after a query failure occurs. <code>AthenaError</code> includes an <code>ErrorCategory</code> field that specifies whether the cause of the failed query is due to system error, user error, or other error.',
    required: [],
  })
  .openapi('AthenaError')

const QueryExecutionStatusSchema = z
  .object({
    State: QueryExecutionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of query execution. <code>QUEUED</code> indicates that the query has been submitted to the service, and Athena will execute the query as soon as resources are available. <code>RUNNING</code> indicates that the query is in execution phase. <code>SUCCEEDED</code> indicates that the query completed without errors. <code>FAILED</code> indicates that the query experienced an error and did not complete processing. <code>CANCELLED</code> indicates that a user input interrupted query execution.</p> <note> <p>Athena automatically retries your queries in cases of certain transient errors. As a result, you may see the query state transition from <code>RUNNING</code> or <code>FAILED</code> to <code>QUEUED</code>. </p> </note>',
        }),
    ).exactOptional(),
    StateChangeReason: StringSchema.and(
      z.any().openapi({ description: 'Further detail about the status of the query.' }),
    ).exactOptional(),
    SubmissionDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the query was submitted.' }),
    ).exactOptional(),
    CompletionDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the query completed.' }),
    ).exactOptional(),
    AthenaError: AthenaErrorSchema.and(
      z.any().openapi({ description: 'Provides information about an Athena query error.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The completion date, current state, submission time, and state change reason (if applicable) for the query execution.',
    required: [],
  })
  .openapi('QueryExecutionStatus')

const ResultReuseInformationSchema = z
  .object({
    ReusedPreviousResult: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if a previous query result was reused; false if the result was generated from a new run of the query.',
        }),
    ),
  })
  .openapi({
    required: ['ReusedPreviousResult'],
    description: 'Contains information about whether the result of a previous query was reused.',
  })
  .openapi('ResultReuseInformation')

const QueryExecutionStatisticsSchema = z
  .object({
    EngineExecutionTimeInMillis: LongSchema.and(
      z
        .any()
        .openapi({ description: 'The number of milliseconds that the query took to execute.' }),
    ).exactOptional(),
    DataScannedInBytes: LongSchema.and(
      z.any().openapi({ description: 'The number of bytes in the data that was queried.' }),
    ).exactOptional(),
    DataManifestLocation: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location and file name of a data manifest file. The manifest file is saved to the Athena query results location in Amazon S3. The manifest file tracks files that the query wrote to Amazon S3. If the query fails, the manifest file also tracks files that the query intended to write. The manifest is useful for identifying orphaned files resulting from a failed query. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with Query Results, Output Files, and Query History</a> in the <i>Amazon Athena User Guide</i>.',
        }),
    ).exactOptional(),
    TotalExecutionTimeInMillis: LongSchema.and(
      z
        .any()
        .openapi({ description: 'The number of milliseconds that Athena took to run the query.' }),
    ).exactOptional(),
    QueryQueueTimeInMillis: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of milliseconds that the query was in your query queue waiting for resources. Note that if transient errors occur, Athena might automatically add the query back to the queue.',
        }),
    ).exactOptional(),
    QueryPlanningTimeInMillis: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of milliseconds that Athena took to plan the query processing flow. This includes the time spent retrieving table partitions from the data source. Note that because the query engine performs the query planning, query planning time is a subset of engine processing time.',
        }),
    ).exactOptional(),
    ServiceProcessingTimeInMillis: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of milliseconds that Athena took to finalize and publish the query results after the query engine finished running the query.',
        }),
    ).exactOptional(),
    ResultReuseInformation: ResultReuseInformationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about whether previous query results were reused for the query.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The amount of data scanned during the query execution and the amount of time that it took to execute, and the type of statement that was run.',
    required: [],
  })
  .openapi('QueryExecutionStatistics')

const EngineVersionSchema = z
  .object({
    SelectedEngineVersion: NameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The engine version requested by the user. Possible values are determined by the output of <code>ListEngineVersions</code>, including AUTO. The default is AUTO.',
        }),
    ).exactOptional(),
    EffectiveEngineVersion: NameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Read only. The engine version on which the query runs. If the user requests a valid engine version other than Auto, the effective engine version is the same as the engine version that the user requested. If the user requests Auto, the effective engine version is chosen by Athena. When a request to update the engine version is made by a <code>CreateWorkGroup</code> or <code>UpdateWorkGroup</code> operation, the <code>EffectiveEngineVersion</code> field is ignored.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Athena engine version for running queries, or the PySpark engine version for running sessions.',
    required: [],
  })
  .openapi('EngineVersion')

const ExecutionParameterSchema = z.string().min(1).max(1024).openapi('ExecutionParameter')

const ExecutionParametersSchema = z
  .array(ExecutionParameterSchema)
  .min(1)
  .openapi('ExecutionParameters')

const QueryExecutionSchema = z
  .object({
    QueryExecutionId: QueryExecutionIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for each query execution.' }),
    ).exactOptional(),
    Query: QueryStringSchema.and(
      z.any().openapi({ description: 'The SQL query statements which the query execution ran.' }),
    ).exactOptional(),
    StatementType: StatementTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of query statement that was run. <code>DDL</code> indicates DDL query statements. <code>DML</code> indicates DML (Data Manipulation Language) query statements, such as <code>CREATE TABLE AS SELECT</code>. <code>UTILITY</code> indicates query statements other than DDL and DML, such as <code>SHOW CREATE TABLE</code>, or <code>DESCRIBE TABLE</code>.',
        }),
    ).exactOptional(),
    ResultConfiguration: ResultConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location in Amazon S3 where query and calculation results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the location for the query results and the encryption configuration that are specified for the workgroup.',
        }),
    ).exactOptional(),
    ResultReuseConfiguration: ResultReuseConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the query result reuse behavior that was used for the query.',
        }),
    ).exactOptional(),
    QueryExecutionContext: QueryExecutionContextSchema.and(
      z.any().openapi({ description: 'The database in which the query execution occurred.' }),
    ).exactOptional(),
    Status: QueryExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The completion date, current state, submission time, and state change reason (if applicable) for the query execution.',
        }),
    ).exactOptional(),
    Statistics: QueryExecutionStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Query execution statistics, such as the amount of data scanned, the amount of time that the query took to process, and the type of statement that was run.',
        }),
    ).exactOptional(),
    WorkGroup: WorkGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the workgroup in which the query ran.' }),
    ).exactOptional(),
    EngineVersion: EngineVersionSchema.and(
      z.any().openapi({ description: 'The engine version that executed the query.' }),
    ).exactOptional(),
    ExecutionParameters: ExecutionParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of values for the parameters in a query. The values are applied sequentially to the parameters in the query in the order in which the parameters occur. The list of parameters is not returned in the response.',
        }),
    ).exactOptional(),
    SubstatementType: StringSchema.and(
      z.any().openapi({ description: 'The kind of query statement that was run.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a single instance of a query execution.',
    required: [],
  })
  .openapi('QueryExecution')

const QueryExecutionListSchema = z.array(QueryExecutionSchema).openapi('QueryExecutionList')

const UnprocessedQueryExecutionIdSchema = z
  .object({
    QueryExecutionId: QueryExecutionIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the query execution.' }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error code returned when the query execution failed to process, if applicable.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error message returned when the query execution failed to process, if applicable.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a query execution that failed to process.', required: [] })
  .openapi('UnprocessedQueryExecutionId')

const UnprocessedQueryExecutionIdListSchema = z
  .array(UnprocessedQueryExecutionIdSchema)
  .openapi('UnprocessedQueryExecutionIdList')

const BatchGetQueryExecutionOutputSchema = z
  .object({
    QueryExecutions: QueryExecutionListSchema.and(
      z.any().openapi({ description: 'Information about a query execution.' }),
    ).exactOptional(),
    UnprocessedQueryExecutionIds: UnprocessedQueryExecutionIdListSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the query executions that failed to run.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetQueryExecutionOutput')

const QueryExecutionIdListSchema = z
  .array(QueryExecutionIdSchema)
  .min(1)
  .max(50)
  .openapi('QueryExecutionIdList')

const BatchGetQueryExecutionInputSchema = z
  .object({
    QueryExecutionIds: QueryExecutionIdListSchema.and(
      z.any().openapi({ description: 'An array of query execution IDs.' }),
    ),
  })
  .openapi({
    required: ['QueryExecutionIds'],
    title: 'BatchGetQueryExecutionInput',
    description: 'Contains an array of query execution IDs.',
  })
  .openapi('BatchGetQueryExecutionInput')

const CancelCapacityReservationOutputSchema = z
  .object({})
  .openapi('CancelCapacityReservationOutput')

const CapacityReservationNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9._-]+/)
  .min(1)
  .max(128)
  .openapi('CapacityReservationName')

const CancelCapacityReservationInputSchema = z
  .object({
    Name: CapacityReservationNameSchema.and(
      z.any().openapi({ description: 'The name of the capacity reservation to cancel.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'CancelCapacityReservationInput' })
  .openapi('CancelCapacityReservationInput')

const CreateCapacityReservationOutputSchema = z
  .object({})
  .openapi('CreateCapacityReservationOutput')

const TargetDpusIntegerSchema = z.int().min(24).openapi('TargetDpusInteger')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'A tag key. The tag key length is from 1 to 128 Unicode characters in UTF-8. You can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys are case-sensitive and must be unique per resource. ',
        }),
    ).exactOptional(),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'A tag value. The tag value length is from 0 to 256 Unicode characters in UTF-8. You can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag values are case-sensitive. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A label that you assign to a resource. Athena resources include workgroups, data catalogs, and capacity reservations. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena resources by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter the resources in your account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas. ',
    required: [],
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const CreateCapacityReservationInputSchema = z
  .object({
    TargetDpus: TargetDpusIntegerSchema.and(
      z.any().openapi({ description: 'The number of requested data processing units.' }),
    ),
    Name: CapacityReservationNameSchema.and(
      z.any().openapi({ description: 'The name of the capacity reservation to create.' }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags for the capacity reservation.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['TargetDpus', 'Name'], title: 'CreateCapacityReservationInput' })
  .openapi('CreateCapacityReservationInput')

const CreateDataCatalogOutputSchema = z.object({}).openapi('CreateDataCatalogOutput')

const DataCatalogTypeSchema = z.enum(['LAMBDA', 'GLUE', 'HIVE']).openapi('DataCatalogType')

const ParametersMapValueSchema = z.string().max(51200).openapi('ParametersMapValue')

const ParametersMapSchema = z.record(z.string(), ParametersMapValueSchema).openapi('ParametersMap')

const CreateDataCatalogInputSchema = z
  .object({
    Name: CatalogNameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the data catalog to create. The catalog name must be unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign, or hyphen characters. The remainder of the length constraint of 256 is reserved for use by Athena.',
        }),
    ),
    Type: DataCatalogTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of data catalog to create: <code>LAMBDA</code> for a federated catalog, <code>HIVE</code> for an external hive metastore, or <code>GLUE</code> for an Glue Data Catalog.',
        }),
    ),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'A description of the data catalog to be created.' }),
    ).exactOptional(),
    Parameters: ParametersMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the Lambda function or functions to use for creating the data catalog. This is a mapping whose values depend on the catalog type. </p> <ul> <li> <p>For the <code>HIVE</code> data catalog type, use the following syntax. The <code>metadata-function</code> parameter is required. <code>The sdk-version</code> parameter is optional and defaults to the currently supported version.</p> <p> <code>metadata-function=<i>lambda_arn</i>, sdk-version=<i>version_number</i> </code> </p> </li> <li> <p>For the <code>LAMBDA</code> data catalog type, use one of the following sets of required parameters, but not both.</p> <ul> <li> <p>If you have one Lambda function that processes metadata and another for reading the actual data, use the following syntax. Both parameters are required.</p> <p> <code>metadata-function=<i>lambda_arn</i>, record-function=<i>lambda_arn</i> </code> </p> </li> <li> <p> If you have a composite Lambda function that processes both metadata and data, use the following syntax to specify your Lambda function.</p> <p> <code>function=<i>lambda_arn</i> </code> </p> </li> </ul> </li> <li> <p>The <code>GLUE</code> type takes a catalog ID parameter and is required. The <code> <i>catalog_id</i> </code> is the account ID of the Amazon Web Services account to which the Glue Data Catalog belongs.</p> <p> <code>catalog-id=<i>catalog_id</i> </code> </p> <ul> <li> <p>The <code>GLUE</code> data catalog type also applies to the default <code>AwsDataCatalog</code> that already exists in your account, of which you can have only one and cannot modify.</p> </li> <li> <p>Queries that specify a Glue Data Catalog other than the default <code>AwsDataCatalog</code> must be run on Athena engine version 2.</p> </li> <li> <p>In Regions where Athena engine version 2 is not available, creating new Glue data catalogs results in an <code>INVALID_INPUT</code> error.</p> </li> </ul> </li> </ul>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of comma separated tags to add to the data catalog that is created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'Type'], title: 'CreateDataCatalogInput' })
  .openapi('CreateDataCatalogInput')

const CreateNamedQueryOutputSchema = z
  .object({
    NamedQueryId: NamedQueryIdSchema.and(
      z.any().openapi({ description: 'The unique ID of the query.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateNamedQueryOutput')

const IdempotencyTokenSchema = z.string().min(32).max(128).openapi('IdempotencyToken')

const CreateNamedQueryInputSchema = z
  .object({
    Name: NameStringSchema.and(z.any().openapi({ description: 'The query name.' })),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'The query description.' }),
    ).exactOptional(),
    Database: DatabaseStringSchema.and(
      z.any().openapi({ description: 'The database to which the query belongs.' }),
    ),
    QueryString: QueryStringSchema.and(
      z.any().openapi({ description: 'The contents of the query with all query statements.' }),
    ),
    ClientRequestToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique case-sensitive string used to ensure the request to create the query is idempotent (executes only once). If another <code>CreateNamedQuery</code> request is received, the same response is returned and another query is not created. If a parameter has changed, for example, the <code>QueryString</code>, an error is returned.</p> <important> <p>This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for users. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.</p> </important>',
        }),
    ).exactOptional(),
    WorkGroup: WorkGroupNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the workgroup in which the named query is being created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'Database', 'QueryString'], title: 'CreateNamedQueryInput' })
  .openapi('CreateNamedQueryInput')

const NotebookIdSchema = z
  .string()
  .regex(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/)
  .min(1)
  .max(36)
  .openapi('NotebookId')

const CreateNotebookOutputSchema = z
  .object({
    NotebookId: NotebookIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the notebook.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateNotebookOutput')

const NotebookNameSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]\\+' })
  .openapi('NotebookName')

const ClientRequestTokenSchema = z
  .string()
  .regex(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/)
  .min(1)
  .max(36)
  .openapi('ClientRequestToken')

const CreateNotebookInputSchema = z
  .object({
    WorkGroup: WorkGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Spark enabled workgroup in which the notebook will be created.',
        }),
    ),
    Name: NotebookNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the <code>ipynb</code> file to be created in the Spark workgroup, without the <code>.ipynb</code> extension.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique case-sensitive string used to ensure the request to create the notebook is idempotent (executes only once).</p> <important> <p>This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['WorkGroup', 'Name'], title: 'CreateNotebookInput' })
  .openapi('CreateNotebookInput')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const CreatePreparedStatementOutputSchema = z.object({}).openapi('CreatePreparedStatementOutput')

const CreatePreparedStatementInputSchema = z
  .object({
    StatementName: StatementNameSchema.and(
      z.any().openapi({ description: 'The name of the prepared statement.' }),
    ),
    WorkGroup: WorkGroupNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the workgroup to which the prepared statement belongs.',
        }),
    ),
    QueryStatement: QueryStringSchema.and(
      z.any().openapi({ description: 'The query string for the prepared statement.' }),
    ),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'The description of the prepared statement.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StatementName', 'WorkGroup', 'QueryStatement'],
    title: 'CreatePreparedStatementInput',
  })
  .openapi('CreatePreparedStatementInput')

const AuthTokenSchema = z.string().max(2048).openapi('AuthToken')

const CreatePresignedNotebookUrlResponseSchema = z
  .object({
    NotebookUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the notebook. The URL includes the authentication token and notebook file name and points directly to the opened notebook.',
        }),
    ),
    AuthToken: AuthTokenSchema.and(
      z.any().openapi({ description: 'The authentication token for the notebook.' }),
    ),
    AuthTokenExpirationTime: LongSchema.and(
      z.any().openapi({ description: 'The UTC epoch time when the authentication token expires.' }),
    ),
  })
  .openapi({ required: ['NotebookUrl', 'AuthToken', 'AuthTokenExpirationTime'] })
  .openapi('CreatePresignedNotebookUrlResponse')

const SessionIdSchema = z.string().min(1).max(256).openapi('SessionId')

const CreatePresignedNotebookUrlRequestSchema = z
  .object({ SessionId: SessionIdSchema.and(z.any().openapi({ description: 'The session ID.' })) })
  .openapi({ required: ['SessionId'], title: 'CreatePresignedNotebookUrlRequest' })
  .openapi('CreatePresignedNotebookUrlRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const CreateWorkGroupOutputSchema = z.object({}).openapi('CreateWorkGroupOutput')

const BoxedBooleanSchema = z.boolean().openapi('BoxedBoolean')

const BytesScannedCutoffValueSchema = z.int().min(10000000).openapi('BytesScannedCutoffValue')

const RoleArnSchema = z
  .string()
  .regex(/^arn:aws[a-z\-]*:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+$/)
  .min(20)
  .max(2048)
  .openapi('RoleArn')

const KmsKeySchema = z
  .string()
  .regex(
    /^arn:aws[a-z\-]*:kms:([a-z0-9\-]+):\d{12}:key\/?[a-zA-Z_0-9+=,.@\-_\/]+$|^arn:aws[a-z\-]*:kms:([a-z0-9\-]+):\d{12}:alias\/?[a-zA-Z_0-9+=,.@\-_\/]+$|^alias\/[a-zA-Z0-9\/_-]+$|[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/,
  )
  .min(1)
  .max(2048)
  .openapi('KmsKey')

const CustomerContentEncryptionConfigurationSchema = z
  .object({
    KmsKey: KmsKeySchema.and(
      z
        .any()
        .openapi({
          description: "The KMS key that is used to encrypt the user's data stores in Athena.",
        }),
    ),
  })
  .openapi({
    required: ['KmsKey'],
    description:
      "Specifies the KMS key that is used to encrypt the user's data stores in Athena. This setting does not apply to Athena SQL workgroups.",
  })
  .openapi('CustomerContentEncryptionConfiguration')

const WorkGroupConfigurationSchema = z
  .object({
    ResultConfiguration: ResultConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for the workgroup, which includes the location in Amazon S3 where query and calculation results are stored and the encryption option, if any, used for query and calculation results. To run the query, you must specify the query results location using one of the ways: either in the workgroup using this setting, or for individual queries (client-side), using <a>ResultConfiguration$OutputLocation</a>. If none of them is set, Athena issues an error that no output location is provided. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and output files</a>.',
        }),
    ).exactOptional(),
    EnforceWorkGroupConfiguration: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.',
        }),
    ).exactOptional(),
    PublishCloudWatchMetricsEnabled: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.',
        }),
    ).exactOptional(),
    BytesScannedCutoffPerQuery: BytesScannedCutoffValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.',
        }),
    ).exactOptional(),
    RequesterPaysEnabled: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to <code>true</code>, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to <code>false</code>, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. The default is <code>false</code>. For more information about Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays Buckets</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.',
        }),
    ).exactOptional(),
    EngineVersion: EngineVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The engine version that all queries running on the workgroup use. Queries on the <code>AmazonAthenaPreviewFunctionality</code> workgroup run on the preview engine regardless of this setting.',
        }),
    ).exactOptional(),
    AdditionalConfiguration: NameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a user defined JSON string that is passed to the notebook engine.',
        }),
    ).exactOptional(),
    ExecutionRole: RoleArnSchema.and(
      z
        .any()
        .openapi({ description: "Role used in a session for accessing the user's resources." }),
    ).exactOptional(),
    CustomerContentEncryptionConfiguration: CustomerContentEncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the KMS key that is used to encrypt the user's data stores in Athena. This setting does not apply to Athena SQL workgroups.",
        }),
    ).exactOptional(),
    EnableMinimumEncryptionConfiguration: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Enforces a minimal level of encryption for the workgroup for query and calculation results that are written to Amazon S3. When enabled, workgroup users can set encryption only to the minimum level set by the administrator or higher when they submit queries.</p> <p>The <code>EnforceWorkGroupConfiguration</code> setting takes precedence over the <code>EnableMinimumEncryptionConfiguration</code> flag. This means that if <code>EnforceWorkGroupConfiguration</code> is true, the <code>EnableMinimumEncryptionConfiguration</code> flag is ignored, and the workgroup configuration for encryption is used.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration of the workgroup, which includes the location in Amazon S3 where query and calculation results are stored, the encryption option, if any, used for query and calculation results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. ',
    required: [],
  })
  .openapi('WorkGroupConfiguration')

const WorkGroupDescriptionStringSchema = z
  .string()
  .min(0)
  .max(1024)
  .openapi('WorkGroupDescriptionString')

const CreateWorkGroupInputSchema = z
  .object({
    Name: WorkGroupNameSchema.and(z.any().openapi({ description: 'The workgroup name.' })),
    Configuration: WorkGroupConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "Contains configuration information for creating an Athena SQL workgroup or Spark enabled Athena workgroup. Athena SQL workgroup configuration includes the location in Amazon S3 where query and calculation results are stored, the encryption configuration, if any, used for encrypting query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, the limit for the amount of bytes scanned (cutoff) per query, if it is specified, and whether workgroup's settings (specified with <code>EnforceWorkGroupConfiguration</code>) in the <code>WorkGroupConfiguration</code> override client-side settings. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.",
        }),
    ).exactOptional(),
    Description: WorkGroupDescriptionStringSchema.and(
      z.any().openapi({ description: 'The workgroup description.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of comma separated tags to add to the workgroup that is created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateWorkGroupInput' })
  .openapi('CreateWorkGroupInput')

const DeleteCapacityReservationOutputSchema = z
  .object({})
  .openapi('DeleteCapacityReservationOutput')

const DeleteCapacityReservationInputSchema = z
  .object({
    Name: CapacityReservationNameSchema.and(
      z.any().openapi({ description: 'The name of the capacity reservation to delete.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeleteCapacityReservationInput' })
  .openapi('DeleteCapacityReservationInput')

const DeleteDataCatalogOutputSchema = z.object({}).openapi('DeleteDataCatalogOutput')

const DeleteDataCatalogInputSchema = z
  .object({
    Name: CatalogNameStringSchema.and(
      z.any().openapi({ description: 'The name of the data catalog to delete.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeleteDataCatalogInput' })
  .openapi('DeleteDataCatalogInput')

const DeleteNamedQueryOutputSchema = z.object({}).openapi('DeleteNamedQueryOutput')

const DeleteNamedQueryInputSchema = z
  .object({
    NamedQueryId: NamedQueryIdSchema.and(
      z.any().openapi({ description: 'The unique ID of the query to delete.' }),
    ),
  })
  .openapi({ required: ['NamedQueryId'], title: 'DeleteNamedQueryInput' })
  .openapi('DeleteNamedQueryInput')

const DeleteNotebookOutputSchema = z.object({}).openapi('DeleteNotebookOutput')

const DeleteNotebookInputSchema = z
  .object({
    NotebookId: NotebookIdSchema.and(
      z.any().openapi({ description: 'The ID of the notebook to delete.' }),
    ),
  })
  .openapi({ required: ['NotebookId'], title: 'DeleteNotebookInput' })
  .openapi('DeleteNotebookInput')

const DeletePreparedStatementOutputSchema = z.object({}).openapi('DeletePreparedStatementOutput')

const DeletePreparedStatementInputSchema = z
  .object({
    StatementName: StatementNameSchema.and(
      z.any().openapi({ description: 'The name of the prepared statement to delete.' }),
    ),
    WorkGroup: WorkGroupNameSchema.and(
      z
        .any()
        .openapi({ description: 'The workgroup to which the statement to be deleted belongs.' }),
    ),
  })
  .openapi({ required: ['StatementName', 'WorkGroup'], title: 'DeletePreparedStatementInput' })
  .openapi('DeletePreparedStatementInput')

const DeleteWorkGroupOutputSchema = z.object({}).openapi('DeleteWorkGroupOutput')

const DeleteWorkGroupInputSchema = z
  .object({
    WorkGroup: WorkGroupNameSchema.and(
      z.any().openapi({ description: 'The unique name of the workgroup to delete.' }),
    ),
    RecursiveDeleteOption: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The option to delete the workgroup and its contents even if the workgroup contains any named queries, query executions, or notebooks.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['WorkGroup'], title: 'DeleteWorkGroupInput' })
  .openapi('DeleteWorkGroupInput')

const NotebookTypeSchema = z.literal('IPYNB').openapi('NotebookType')

const NotebookMetadataSchema = z
  .object({
    NotebookId: NotebookIdSchema.and(
      z.any().openapi({ description: 'The notebook ID.' }),
    ).exactOptional(),
    Name: NotebookNameSchema.and(
      z.any().openapi({ description: 'The name of the notebook.' }),
    ).exactOptional(),
    WorkGroup: WorkGroupNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Spark enabled workgroup to which the notebook belongs.',
        }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z.any().openapi({ description: 'The time when the notebook was created.' }),
    ).exactOptional(),
    Type: NotebookTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of notebook. Currently, the only valid type is <code>IPYNB</code>.',
        }),
    ).exactOptional(),
    LastModifiedTime: DateSchema.and(
      z.any().openapi({ description: 'The time when the notebook was last modified.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains metadata for notebook, including the notebook name, ID, workgroup, and time created.',
    required: [],
  })
  .openapi('NotebookMetadata')

const PayloadSchema = z.string().min(1).max(10485760).openapi('Payload')

const ExportNotebookOutputSchema = z
  .object({
    NotebookMetadata: NotebookMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The notebook metadata, including notebook ID, notebook name, and workgroup name.',
        }),
    ).exactOptional(),
    Payload: PayloadSchema.and(
      z.any().openapi({ description: 'The content of the exported notebook.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportNotebookOutput')

const ExportNotebookInputSchema = z
  .object({
    NotebookId: NotebookIdSchema.and(
      z.any().openapi({ description: 'The ID of the notebook to export.' }),
    ),
  })
  .openapi({ required: ['NotebookId'], title: 'ExportNotebookInput' })
  .openapi('ExportNotebookInput')

const CalculationExecutionIdSchema = z.string().min(1).max(36).openapi('CalculationExecutionId')

const S3UriSchema = z
  .string()
  .regex(/^(https|s3|S3):\/\/([^\/]+)\/?(.*)$/)
  .max(1024)
  .openapi('S3Uri')

const CalculationExecutionStateSchema = z
  .enum([
    'CREATING',
    'CREATED',
    'QUEUED',
    'RUNNING',
    'CANCELING',
    'CANCELED',
    'COMPLETED',
    'FAILED',
  ])
  .openapi('CalculationExecutionState')

const CalculationStatusSchema = z
  .object({
    SubmissionDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time the calculation was submitted for processing.',
        }),
    ).exactOptional(),
    CompletionDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time the calculation completed processing.' }),
    ).exactOptional(),
    State: CalculationExecutionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the calculation execution. A description of each state follows.</p> <p> <code>CREATING</code> - The calculation is in the process of being created.</p> <p> <code>CREATED</code> - The calculation has been created and is ready to run.</p> <p> <code>QUEUED</code> - The calculation has been queued for processing.</p> <p> <code>RUNNING</code> - The calculation is running.</p> <p> <code>CANCELING</code> - A request to cancel the calculation has been received and the system is working to stop it.</p> <p> <code>CANCELED</code> - The calculation is no longer running as the result of a cancel request.</p> <p> <code>COMPLETED</code> - The calculation has completed without error.</p> <p> <code>FAILED</code> - The calculation failed and is no longer running.</p>',
        }),
    ).exactOptional(),
    StateChangeReason: DescriptionStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason for the calculation state change (for example, the calculation was canceled because the session was terminated).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about the status of a notebook calculation.',
    required: [],
  })
  .openapi('CalculationStatus')

const CalculationStatisticsSchema = z
  .object({
    DpuExecutionInMillis: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data processing unit execution time in milliseconds for the calculation.',
        }),
    ).exactOptional(),
    Progress: DescriptionStringSchema.and(
      z.any().openapi({ description: 'The progress of the calculation.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains statistics for a notebook calculation.', required: [] })
  .openapi('CalculationStatistics')

const CalculationResultTypeSchema = z
  .string()
  .regex(/\w+\/[-+.\w]+/)
  .min(1)
  .max(256)
  .openapi('CalculationResultType')

const CalculationResultSchema = z
  .object({
    StdOutS3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 location of the <code>stdout</code> file for the calculation.',
        }),
    ).exactOptional(),
    StdErrorS3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 location of the <code>stderr</code> error messages file for the calculation.',
        }),
    ).exactOptional(),
    ResultS3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon S3 location of the folder for the calculation results.',
        }),
    ).exactOptional(),
    ResultType: CalculationResultTypeSchema.and(
      z.any().openapi({ description: 'The data format of the calculation result.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about an application-specific calculation result.',
    required: [],
  })
  .openapi('CalculationResult')

const GetCalculationExecutionResponseSchema = z
  .object({
    CalculationExecutionId: CalculationExecutionIdSchema.and(
      z.any().openapi({ description: 'The calculation execution UUID.' }),
    ).exactOptional(),
    SessionId: SessionIdSchema.and(
      z.any().openapi({ description: 'The session ID that the calculation ran in.' }),
    ).exactOptional(),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'The description of the calculation execution.' }),
    ).exactOptional(),
    WorkingDirectory: S3UriSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon S3 location in which calculation results are stored.',
        }),
    ).exactOptional(),
    Status: CalculationStatusSchema.and(
      z.any().openapi({ description: 'Contains information about the status of the calculation.' }),
    ).exactOptional(),
    Statistics: CalculationStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the data processing unit (DPU) execution time and progress. This field is populated only when statistics are available.',
        }),
    ).exactOptional(),
    Result: CalculationResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains result information. This field is populated only if the calculation is completed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCalculationExecutionResponse')

const GetCalculationExecutionRequestSchema = z
  .object({
    CalculationExecutionId: CalculationExecutionIdSchema.and(
      z.any().openapi({ description: 'The calculation execution UUID.' }),
    ),
  })
  .openapi({ required: ['CalculationExecutionId'], title: 'GetCalculationExecutionRequest' })
  .openapi('GetCalculationExecutionRequest')

const CodeBlockSchema = z.string().max(68000).openapi('CodeBlock')

const GetCalculationExecutionCodeResponseSchema = z
  .object({
    CodeBlock: CodeBlockSchema.and(
      z
        .any()
        .openapi({ description: 'The unencrypted code that was executed for the calculation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCalculationExecutionCodeResponse')

const GetCalculationExecutionCodeRequestSchema = z
  .object({
    CalculationExecutionId: CalculationExecutionIdSchema.and(
      z.any().openapi({ description: 'The calculation execution UUID.' }),
    ),
  })
  .openapi({ required: ['CalculationExecutionId'], title: 'GetCalculationExecutionCodeRequest' })
  .openapi('GetCalculationExecutionCodeRequest')

const GetCalculationExecutionStatusResponseSchema = z
  .object({
    Status: CalculationStatusSchema.and(
      z
        .any()
        .openapi({ description: 'Contains information about the calculation execution status.' }),
    ).exactOptional(),
    Statistics: CalculationStatisticsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains information about the DPU execution time and progress.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCalculationExecutionStatusResponse')

const GetCalculationExecutionStatusRequestSchema = z
  .object({
    CalculationExecutionId: CalculationExecutionIdSchema.and(
      z.any().openapi({ description: 'The calculation execution UUID.' }),
    ),
  })
  .openapi({ required: ['CalculationExecutionId'], title: 'GetCalculationExecutionStatusRequest' })
  .openapi('GetCalculationExecutionStatusRequest')

const WorkGroupNamesListSchema = z.array(WorkGroupNameSchema).openapi('WorkGroupNamesList')

const CapacityAssignmentSchema = z
  .object({
    WorkGroupNames: WorkGroupNamesListSchema.and(
      z.any().openapi({ description: 'The list of workgroup names for the capacity assignment.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A mapping between one or more workgroups and a capacity reservation.',
    required: [],
  })
  .openapi('CapacityAssignment')

const CapacityAssignmentsListSchema = z
  .array(CapacityAssignmentSchema)
  .openapi('CapacityAssignmentsList')

const CapacityAssignmentConfigurationSchema = z
  .object({
    CapacityReservationName: CapacityReservationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the reservation that the capacity assignment configuration is for.',
        }),
    ).exactOptional(),
    CapacityAssignments: CapacityAssignmentsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of assignments that make up the capacity assignment configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Assigns Athena workgroups (and hence their queries) to capacity reservations. A capacity reservation can have only one capacity assignment configuration, but the capacity assignment configuration can be made up of multiple individual assignments. Each assignment specifies how Athena queries can consume capacity from the capacity reservation that their workgroup is mapped to.',
    required: [],
  })
  .openapi('CapacityAssignmentConfiguration')

const GetCapacityAssignmentConfigurationOutputSchema = z
  .object({
    CapacityAssignmentConfiguration: CapacityAssignmentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The requested capacity assignment configuration for the specified capacity reservation.',
        }),
    ),
  })
  .openapi({ required: ['CapacityAssignmentConfiguration'] })
  .openapi('GetCapacityAssignmentConfigurationOutput')

const GetCapacityAssignmentConfigurationInputSchema = z
  .object({
    CapacityReservationName: CapacityReservationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the capacity reservation to retrieve the capacity assignment configuration for.',
        }),
    ),
  })
  .openapi({
    required: ['CapacityReservationName'],
    title: 'GetCapacityAssignmentConfigurationInput',
  })
  .openapi('GetCapacityAssignmentConfigurationInput')

const CapacityReservationStatusSchema = z
  .enum(['PENDING', 'ACTIVE', 'CANCELLING', 'CANCELLED', 'FAILED', 'UPDATE_PENDING'])
  .openapi('CapacityReservationStatus')

const AllocatedDpusIntegerSchema = z.int().min(0).openapi('AllocatedDpusInteger')

const CapacityAllocationStatusSchema = z
  .enum(['PENDING', 'SUCCEEDED', 'FAILED'])
  .openapi('CapacityAllocationStatus')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const CapacityAllocationSchema = z
  .object({
    Status: CapacityAllocationStatusSchema.and(
      z.any().openapi({ description: 'The status of the capacity allocation.' }),
    ),
    StatusMessage: StringSchema.and(
      z.any().openapi({ description: 'The status message of the capacity allocation.' }),
    ).exactOptional(),
    RequestTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the capacity allocation was requested.' }),
    ),
    RequestCompletionTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time when the capacity allocation request was completed.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Status', 'RequestTime'],
    description:
      'Contains the submission time of a single allocation request for a capacity reservation and the most recent status of the attempted allocation.',
  })
  .openapi('CapacityAllocation')

const CapacityReservationSchema = z
  .object({
    Name: CapacityReservationNameSchema.and(
      z.any().openapi({ description: 'The name of the capacity reservation.' }),
    ),
    Status: CapacityReservationStatusSchema.and(
      z.any().openapi({ description: 'The status of the capacity reservation.' }),
    ),
    TargetDpus: TargetDpusIntegerSchema.and(
      z.any().openapi({ description: 'The number of data processing units requested.' }),
    ),
    AllocatedDpus: AllocatedDpusIntegerSchema.and(
      z.any().openapi({ description: 'The number of data processing units currently allocated.' }),
    ),
    LastAllocation: CapacityAllocationSchema.exactOptional(),
    LastSuccessfulAllocationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time of the most recent capacity allocation that succeeded.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time in UTC epoch millis when the capacity reservation was created.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Status', 'TargetDpus', 'AllocatedDpus', 'CreationTime'],
    description:
      'A reservation for a specified number of data processing units (DPUs). When a reservation is initially created, it has no DPUs. Athena allocates DPUs until the allocated amount equals the requested amount.',
  })
  .openapi('CapacityReservation')

const GetCapacityReservationOutputSchema = z
  .object({
    CapacityReservation: CapacityReservationSchema.and(
      z.any().openapi({ description: 'The requested capacity reservation structure.' }),
    ),
  })
  .openapi({ required: ['CapacityReservation'] })
  .openapi('GetCapacityReservationOutput')

const GetCapacityReservationInputSchema = z
  .object({
    Name: CapacityReservationNameSchema.and(
      z.any().openapi({ description: 'The name of the capacity reservation.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'GetCapacityReservationInput' })
  .openapi('GetCapacityReservationInput')

const DataCatalogSchema = z
  .object({
    Name: CatalogNameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the data catalog. The catalog name must be unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign, or hyphen characters. The remainder of the length constraint of 256 is reserved for use by Athena.',
        }),
    ),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'An optional description of the data catalog.' }),
    ).exactOptional(),
    Type: DataCatalogTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of data catalog to create: <code>LAMBDA</code> for a federated catalog, <code>HIVE</code> for an external hive metastore, or <code>GLUE</code> for an Glue Data Catalog.',
        }),
    ),
    Parameters: ParametersMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the Lambda function or functions to use for the data catalog. This is a mapping whose values depend on the catalog type. </p> <ul> <li> <p>For the <code>HIVE</code> data catalog type, use the following syntax. The <code>metadata-function</code> parameter is required. <code>The sdk-version</code> parameter is optional and defaults to the currently supported version.</p> <p> <code>metadata-function=<i>lambda_arn</i>, sdk-version=<i>version_number</i> </code> </p> </li> <li> <p>For the <code>LAMBDA</code> data catalog type, use one of the following sets of required parameters, but not both.</p> <ul> <li> <p>If you have one Lambda function that processes metadata and another for reading the actual data, use the following syntax. Both parameters are required.</p> <p> <code>metadata-function=<i>lambda_arn</i>, record-function=<i>lambda_arn</i> </code> </p> </li> <li> <p> If you have a composite Lambda function that processes both metadata and data, use the following syntax to specify your Lambda function.</p> <p> <code>function=<i>lambda_arn</i> </code> </p> </li> </ul> </li> <li> <p>The <code>GLUE</code> type takes a catalog ID parameter and is required. The <code> <i>catalog_id</i> </code> is the account ID of the Amazon Web Services account to which the Glue catalog belongs.</p> <p> <code>catalog-id=<i>catalog_id</i> </code> </p> <ul> <li> <p>The <code>GLUE</code> data catalog type also applies to the default <code>AwsDataCatalog</code> that already exists in your account, of which you can have only one and cannot modify.</p> </li> <li> <p>Queries that specify a Glue Data Catalog other than the default <code>AwsDataCatalog</code> must be run on Athena engine version 2.</p> </li> </ul> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Type'],
    description:
      '<p>Contains information about a data catalog in an Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note>',
  })
  .openapi('DataCatalog')

const GetDataCatalogOutputSchema = z
  .object({
    DataCatalog: DataCatalogSchema.and(
      z.any().openapi({ description: 'The data catalog returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDataCatalogOutput')

const GetDataCatalogInputSchema = z
  .object({
    Name: CatalogNameStringSchema.and(
      z.any().openapi({ description: 'The name of the data catalog to return.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'GetDataCatalogInput' })
  .openapi('GetDataCatalogInput')

const DatabaseSchema = z
  .object({
    Name: NameStringSchema.and(z.any().openapi({ description: 'The name of the database.' })),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'An optional description of the database.' }),
    ).exactOptional(),
    Parameters: ParametersMapSchema.and(
      z.any().openapi({ description: 'A set of custom key/value pairs.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description: 'Contains metadata information for a database in a data catalog.',
  })
  .openapi('Database')

const GetDatabaseOutputSchema = z
  .object({
    Database: DatabaseSchema.and(
      z.any().openapi({ description: 'The database returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDatabaseOutput')

const GetDatabaseInputSchema = z
  .object({
    CatalogName: CatalogNameStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the data catalog that contains the database to return.',
        }),
    ),
    DatabaseName: NameStringSchema.and(
      z.any().openapi({ description: 'The name of the database to return.' }),
    ),
  })
  .openapi({ required: ['CatalogName', 'DatabaseName'], title: 'GetDatabaseInput' })
  .openapi('GetDatabaseInput')

const MetadataExceptionSchema = z.any().openapi('MetadataException')

const GetNamedQueryOutputSchema = z
  .object({
    NamedQuery: NamedQuerySchema.and(
      z.any().openapi({ description: 'Information about the query.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetNamedQueryOutput')

const GetNamedQueryInputSchema = z
  .object({
    NamedQueryId: NamedQueryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique ID of the query. Use <a>ListNamedQueries</a> to get query IDs.',
        }),
    ),
  })
  .openapi({ required: ['NamedQueryId'], title: 'GetNamedQueryInput' })
  .openapi('GetNamedQueryInput')

const GetNotebookMetadataOutputSchema = z
  .object({
    NotebookMetadata: NotebookMetadataSchema.and(
      z
        .any()
        .openapi({ description: 'The metadata that is returned for the specified notebook ID.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetNotebookMetadataOutput')

const GetNotebookMetadataInputSchema = z
  .object({
    NotebookId: NotebookIdSchema.and(
      z.any().openapi({ description: 'The ID of the notebook whose metadata is to be retrieved.' }),
    ),
  })
  .openapi({ required: ['NotebookId'], title: 'GetNotebookMetadataInput' })
  .openapi('GetNotebookMetadataInput')

const GetPreparedStatementOutputSchema = z
  .object({
    PreparedStatement: PreparedStatementSchema.and(
      z.any().openapi({ description: 'The name of the prepared statement that was retrieved.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPreparedStatementOutput')

const GetPreparedStatementInputSchema = z
  .object({
    StatementName: StatementNameSchema.and(
      z.any().openapi({ description: 'The name of the prepared statement to retrieve.' }),
    ),
    WorkGroup: WorkGroupNameSchema.and(
      z
        .any()
        .openapi({ description: 'The workgroup to which the statement to be retrieved belongs.' }),
    ),
  })
  .openapi({ required: ['StatementName', 'WorkGroup'], title: 'GetPreparedStatementInput' })
  .openapi('GetPreparedStatementInput')

const GetQueryExecutionOutputSchema = z
  .object({
    QueryExecution: QueryExecutionSchema.and(
      z.any().openapi({ description: 'Information about the query execution.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetQueryExecutionOutput')

const GetQueryExecutionInputSchema = z
  .object({
    QueryExecutionId: QueryExecutionIdSchema.and(
      z.any().openapi({ description: 'The unique ID of the query execution.' }),
    ),
  })
  .openapi({ required: ['QueryExecutionId'], title: 'GetQueryExecutionInput' })
  .openapi('GetQueryExecutionInput')

const DatumStringSchema = z.string().openapi('DatumString')

const DatumSchema = z
  .object({
    VarCharValue: DatumStringSchema.and(
      z.any().openapi({ description: 'The value of the datum.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A piece of data (a field in the table).', required: [] })
  .openapi('Datum')

const DatumListSchema = z.array(DatumSchema).openapi('DatumList')

const RowSchema = z
  .object({
    Data: DatumListSchema.and(
      z.any().openapi({ description: 'The data that populates a row in a query result table.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The rows that make up a query result table.', required: [] })
  .openapi('Row')

const RowListSchema = z.array(RowSchema).openapi('RowList')

const IntegerSchema = z.int().openapi('Integer')

const ColumnNullableSchema = z.enum(['NOT_NULL', 'NULLABLE', 'UNKNOWN']).openapi('ColumnNullable')

const ColumnInfoSchema = z
  .object({
    CatalogName: StringSchema.and(
      z.any().openapi({ description: 'The catalog to which the query results belong.' }),
    ).exactOptional(),
    SchemaName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The schema name (database name) to which the query results belong.',
        }),
    ).exactOptional(),
    TableName: StringSchema.and(
      z.any().openapi({ description: 'The table name for the query results.' }),
    ).exactOptional(),
    Name: StringSchema.and(z.any().openapi({ description: 'The name of the column.' })),
    Label: StringSchema.and(z.any().openapi({ description: 'A column label.' })).exactOptional(),
    Type: StringSchema.and(z.any().openapi({ description: 'The data type of the column.' })),
    Precision: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'For <code>DECIMAL</code> data types, specifies the total number of digits, up to 38. For performance reasons, we recommend up to 18 digits.',
        }),
    ).exactOptional(),
    Scale: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'For <code>DECIMAL</code> data types, specifies the total number of digits in the fractional part of the value. Defaults to 0.',
        }),
    ).exactOptional(),
    Nullable: ColumnNullableSchema.and(
      z.any().openapi({ description: "Indicates the column's nullable status." }),
    ).exactOptional(),
    CaseSensitive: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether values in the column are case-sensitive.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Type'],
    description: 'Information about the columns in a query execution result.',
  })
  .openapi('ColumnInfo')

const ColumnInfoListSchema = z.array(ColumnInfoSchema).openapi('ColumnInfoList')

const ResultSetMetadataSchema = z
  .object({
    ColumnInfo: ColumnInfoListSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the columns returned in a query result metadata.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The metadata that describes the column structure and data types of a table of query results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>.',
    required: [],
  })
  .openapi('ResultSetMetadata')

const ResultSetSchema = z
  .object({
    Rows: RowListSchema.and(
      z.any().openapi({ description: 'The rows in the table.' }),
    ).exactOptional(),
    ResultSetMetadata: ResultSetMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata that describes the column structure and data types of a table of query results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The metadata and rows that make up a query result set. The metadata describes the column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>.',
    required: [],
  })
  .openapi('ResultSet')

const TokenSchema = z.string().min(1).max(1024).openapi('Token')

const GetQueryResultsOutputSchema = z
  .object({
    UpdateCount: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of rows inserted with a <code>CREATE TABLE AS SELECT</code> statement. ',
        }),
    ).exactOptional(),
    ResultSet: ResultSetSchema.and(
      z.any().openapi({ description: 'The results of the query execution.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetQueryResultsOutput')

const MaxQueryResultsSchema = z.int().min(1).max(1000).openapi('MaxQueryResults')

const GetQueryResultsInputSchema = z
  .object({
    QueryExecutionId: QueryExecutionIdSchema.and(
      z.any().openapi({ description: 'The unique ID of the query execution.' }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
    MaxResults: MaxQueryResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results (rows) to return in this request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['QueryExecutionId'], title: 'GetQueryResultsInput' })
  .openapi('GetQueryResultsInput')

const QueryRuntimeStatisticsTimelineSchema = z
  .object({
    QueryQueueTimeInMillis: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of milliseconds that the query was in your query queue waiting for resources. Note that if transient errors occur, Athena might automatically add the query back to the queue.',
        }),
    ).exactOptional(),
    QueryPlanningTimeInMillis: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of milliseconds that Athena took to plan the query processing flow. This includes the time spent retrieving table partitions from the data source. Note that because the query engine performs the query planning, query planning time is a subset of engine processing time.',
        }),
    ).exactOptional(),
    EngineExecutionTimeInMillis: LongSchema.and(
      z
        .any()
        .openapi({ description: 'The number of milliseconds that the query took to execute.' }),
    ).exactOptional(),
    ServiceProcessingTimeInMillis: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of milliseconds that Athena took to finalize and publish the query results after the query engine finished running the query.',
        }),
    ).exactOptional(),
    TotalExecutionTimeInMillis: LongSchema.and(
      z
        .any()
        .openapi({ description: 'The number of milliseconds that Athena took to run the query.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Timeline statistics such as query queue time, planning time, execution time, service processing time, and total execution time.',
    required: [],
  })
  .openapi('QueryRuntimeStatisticsTimeline')

const QueryRuntimeStatisticsRowsSchema = z
  .object({
    InputRows: LongSchema.and(
      z.any().openapi({ description: 'The number of rows read to execute the query.' }),
    ).exactOptional(),
    InputBytes: LongSchema.and(
      z.any().openapi({ description: 'The number of bytes read to execute the query.' }),
    ).exactOptional(),
    OutputBytes: LongSchema.and(
      z.any().openapi({ description: 'The number of bytes returned by the query.' }),
    ).exactOptional(),
    OutputRows: LongSchema.and(
      z.any().openapi({ description: 'The number of rows returned by the query.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Statistics such as input rows and bytes read by the query, rows and bytes output by the query, and the number of rows written by the query.',
    required: [],
  })
  .openapi('QueryRuntimeStatisticsRows')

const QueryRuntimeStatisticsSchema = z
  .object({
    Timeline: QueryRuntimeStatisticsTimelineSchema.exactOptional(),
    Rows: QueryRuntimeStatisticsRowsSchema.exactOptional(),
    OutputStage: QueryStageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Stage statistics such as input and output rows and bytes, execution time, and stage state. This information also includes substages and the query stage plan.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The query execution timeline, statistics on input and output rows and bytes, and the different query stages that form the query execution plan.',
    required: [],
  })
  .openapi('QueryRuntimeStatistics')

const GetQueryRuntimeStatisticsOutputSchema = z
  .object({
    QueryRuntimeStatistics: QueryRuntimeStatisticsSchema.and(
      z.any().openapi({ description: 'Runtime statistics about the query execution.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetQueryRuntimeStatisticsOutput')

const GetQueryRuntimeStatisticsInputSchema = z
  .object({
    QueryExecutionId: QueryExecutionIdSchema.and(
      z.any().openapi({ description: 'The unique ID of the query execution.' }),
    ),
  })
  .openapi({ required: ['QueryExecutionId'], title: 'GetQueryRuntimeStatisticsInput' })
  .openapi('GetQueryRuntimeStatisticsInput')

const CoordinatorDpuSizeSchema = z.int().min(1).max(1).openapi('CoordinatorDpuSize')

const MaxConcurrentDpusSchema = z.int().min(2).max(5000).openapi('MaxConcurrentDpus')

const DefaultExecutorDpuSizeSchema = z.int().min(1).max(1).openapi('DefaultExecutorDpuSize')

const EngineConfigurationSchema = z
  .object({
    CoordinatorDpuSize: CoordinatorDpuSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of DPUs to use for the coordinator. A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.',
        }),
    ).exactOptional(),
    MaxConcurrentDpus: MaxConcurrentDpusSchema.and(
      z.any().openapi({ description: 'The maximum number of DPUs that can run concurrently.' }),
    ),
    DefaultExecutorDpuSize: DefaultExecutorDpuSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default number of DPUs to use for executors. An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.',
        }),
    ).exactOptional(),
    AdditionalConfigs: ParametersMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains additional notebook engine <code>MAP&lt;string, string&gt;</code> parameter mappings in the form of key-value pairs. To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the <a>StartSessionRequest$NotebookVersion</a> field, and then add a key named <code>NotebookId</code> to <code>AdditionalConfigs</code> that has the value of the Athena notebook ID.',
        }),
    ).exactOptional(),
    SparkProperties: ParametersMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MaxConcurrentDpus'],
    description:
      'Contains data processing unit (DPU) configuration settings and parameter mappings for a notebook engine.',
  })
  .openapi('EngineConfiguration')

const SessionConfigurationSchema = z
  .object({
    ExecutionRole: RoleArnSchema.and(
      z.any().openapi({ description: 'The ARN of the execution role used for the session.' }),
    ).exactOptional(),
    WorkingDirectory: ResultOutputLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon S3 location that stores information for the notebook.',
        }),
    ).exactOptional(),
    IdleTimeoutSeconds: LongSchema.and(
      z.any().openapi({ description: 'The idle timeout in seconds for the session.' }),
    ).exactOptional(),
    EncryptionConfiguration: EncryptionConfigurationSchema.exactOptional(),
  })
  .openapi({ description: 'Contains session configuration information.', required: [] })
  .openapi('SessionConfiguration')

const SessionStateSchema = z
  .enum(['CREATING', 'CREATED', 'IDLE', 'BUSY', 'TERMINATING', 'TERMINATED', 'DEGRADED', 'FAILED'])
  .openapi('SessionState')

const SessionStatusSchema = z
  .object({
    StartDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the session started.' }),
    ).exactOptional(),
    LastModifiedDateTime: DateSchema.and(
      z
        .any()
        .openapi({ description: 'The most recent date and time that the session was modified.' }),
    ).exactOptional(),
    EndDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the session ended.' }),
    ).exactOptional(),
    IdleSinceDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time starting at which the session became idle. Can be empty if the session is not currently idle.',
        }),
    ).exactOptional(),
    State: SessionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the session. A description of each state follows.</p> <p> <code>CREATING</code> - The session is being started, including acquiring resources.</p> <p> <code>CREATED</code> - The session has been started.</p> <p> <code>IDLE</code> - The session is able to accept a calculation.</p> <p> <code>BUSY</code> - The session is processing another task and is unable to accept a calculation.</p> <p> <code>TERMINATING</code> - The session is in the process of shutting down.</p> <p> <code>TERMINATED</code> - The session and its resources are no longer running.</p> <p> <code>DEGRADED</code> - The session has no healthy coordinators.</p> <p> <code>FAILED</code> - Due to a failure, the session and its resources are no longer running.</p>',
        }),
    ).exactOptional(),
    StateChangeReason: DescriptionStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason for the session state change (for example, canceled because the session was terminated).',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about the status of a session.', required: [] })
  .openapi('SessionStatus')

const SessionStatisticsSchema = z
  .object({
    DpuExecutionInMillis: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The data processing unit execution time for a session in milliseconds.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains statistics for a session.', required: [] })
  .openapi('SessionStatistics')

const GetSessionResponseSchema = z
  .object({
    SessionId: SessionIdSchema.and(
      z.any().openapi({ description: 'The session ID.' }),
    ).exactOptional(),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'The session description.' }),
    ).exactOptional(),
    WorkGroup: WorkGroupNameSchema.and(
      z.any().openapi({ description: 'The workgroup to which the session belongs.' }),
    ).exactOptional(),
    EngineVersion: NameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The engine version used by the session (for example, <code>PySpark engine version 3</code>). You can get a list of engine versions by calling <a>ListEngineVersions</a>.',
        }),
    ).exactOptional(),
    EngineConfiguration: EngineConfigurationSchema.and(
      z.any().openapi({ description: 'Contains engine configuration information like DPU usage.' }),
    ).exactOptional(),
    NotebookVersion: NameStringSchema.and(
      z.any().openapi({ description: 'The notebook version.' }),
    ).exactOptional(),
    SessionConfiguration: SessionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the workgroup configuration information used by the session.',
        }),
    ).exactOptional(),
    Status: SessionStatusSchema.and(
      z.any().openapi({ description: 'Contains information about the status of the session.' }),
    ).exactOptional(),
    Statistics: SessionStatisticsSchema.and(
      z.any().openapi({ description: 'Contains the DPU execution time.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSessionResponse')

const GetSessionRequestSchema = z
  .object({ SessionId: SessionIdSchema.and(z.any().openapi({ description: 'The session ID.' })) })
  .openapi({ required: ['SessionId'], title: 'GetSessionRequest' })
  .openapi('GetSessionRequest')

const GetSessionStatusResponseSchema = z
  .object({
    SessionId: SessionIdSchema.and(
      z.any().openapi({ description: 'The session ID.' }),
    ).exactOptional(),
    Status: SessionStatusSchema.and(
      z.any().openapi({ description: 'Contains information about the status of the session.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSessionStatusResponse')

const GetSessionStatusRequestSchema = z
  .object({ SessionId: SessionIdSchema.and(z.any().openapi({ description: 'The session ID.' })) })
  .openapi({ required: ['SessionId'], title: 'GetSessionStatusRequest' })
  .openapi('GetSessionStatusRequest')

const TableTypeStringSchema = z.string().max(255).openapi('TableTypeString')

const TypeStringSchema = z
  .string()
  .min(0)
  .max(4096)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('TypeString')

const CommentStringSchema = z
  .string()
  .min(0)
  .max(255)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('CommentString')

const ColumnSchema = z
  .object({
    Name: NameStringSchema.and(z.any().openapi({ description: 'The name of the column.' })),
    Type: TypeStringSchema.and(
      z.any().openapi({ description: 'The data type of the column.' }),
    ).exactOptional(),
    Comment: CommentStringSchema.and(
      z.any().openapi({ description: 'Optional information about the column.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], description: 'Contains metadata for a column in a table.' })
  .openapi('Column')

const ColumnListSchema = z.array(ColumnSchema).openapi('ColumnList')

const TableMetadataSchema = z
  .object({
    Name: NameStringSchema.and(z.any().openapi({ description: 'The name of the table.' })),
    CreateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the table was created.' }),
    ).exactOptional(),
    LastAccessTime: TimestampSchema.and(
      z.any().openapi({ description: 'The last time the table was accessed.' }),
    ).exactOptional(),
    TableType: TableTypeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of table. In Athena, only <code>EXTERNAL_TABLE</code> is supported.',
        }),
    ).exactOptional(),
    Columns: ColumnListSchema.and(
      z.any().openapi({ description: 'A list of the columns in the table.' }),
    ).exactOptional(),
    PartitionKeys: ColumnListSchema.and(
      z.any().openapi({ description: 'A list of the partition keys in the table.' }),
    ).exactOptional(),
    Parameters: ParametersMapSchema.and(
      z.any().openapi({ description: 'A set of custom key/value pairs for table properties.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], description: 'Contains metadata for a table.' })
  .openapi('TableMetadata')

const GetTableMetadataOutputSchema = z
  .object({
    TableMetadata: TableMetadataSchema.and(
      z.any().openapi({ description: 'An object that contains table metadata.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTableMetadataOutput')

const GetTableMetadataInputSchema = z
  .object({
    CatalogName: CatalogNameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the data catalog that contains the database and table metadata to return.',
        }),
    ),
    DatabaseName: NameStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the database that contains the table metadata to return.',
        }),
    ),
    TableName: NameStringSchema.and(
      z.any().openapi({ description: 'The name of the table for which metadata is returned.' }),
    ),
  })
  .openapi({
    required: ['CatalogName', 'DatabaseName', 'TableName'],
    title: 'GetTableMetadataInput',
  })
  .openapi('GetTableMetadataInput')

const WorkGroupStateSchema = z.enum(['ENABLED', 'DISABLED']).openapi('WorkGroupState')

const WorkGroupSchema = z
  .object({
    Name: WorkGroupNameSchema.and(z.any().openapi({ description: 'The workgroup name.' })),
    State: WorkGroupStateSchema.and(
      z.any().openapi({ description: 'The state of the workgroup: ENABLED or DISABLED.' }),
    ).exactOptional(),
    Configuration: WorkGroupConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of the workgroup, which includes the location in Amazon S3 where query and calculation results are stored, the encryption configuration, if any, used for query and calculation results; whether the Amazon CloudWatch Metrics are enabled for the workgroup; whether workgroup settings override client-side settings; and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.',
        }),
    ).exactOptional(),
    Description: WorkGroupDescriptionStringSchema.and(
      z.any().openapi({ description: 'The workgroup description.' }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time the workgroup was created.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description:
      'A workgroup, which contains a name, description, creation time, state, and other configuration, listed under <a>WorkGroup$Configuration</a>. Each workgroup enables you to isolate queries for you or your group of users from other queries in the same account, to configure the query results location and the encryption configuration (known as workgroup settings), to enable sending query metrics to Amazon CloudWatch, and to establish per-query data usage control limits for all queries in a workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.',
  })
  .openapi('WorkGroup')

const GetWorkGroupOutputSchema = z
  .object({
    WorkGroup: WorkGroupSchema.and(
      z.any().openapi({ description: 'Information about the workgroup.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWorkGroupOutput')

const GetWorkGroupInputSchema = z
  .object({
    WorkGroup: WorkGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the workgroup.' }),
    ),
  })
  .openapi({ required: ['WorkGroup'], title: 'GetWorkGroupInput' })
  .openapi('GetWorkGroupInput')

const ImportNotebookOutputSchema = z
  .object({
    NotebookId: NotebookIdSchema.and(
      z.any().openapi({ description: 'The ID assigned to the imported notebook.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportNotebookOutput')

const ImportNotebookInputSchema = z
  .object({
    WorkGroup: WorkGroupNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Spark enabled workgroup to import the notebook to.',
        }),
    ),
    Name: NotebookNameSchema.and(
      z.any().openapi({ description: 'The name of the notebook to import.' }),
    ),
    Payload: PayloadSchema.and(
      z.any().openapi({ description: 'The notebook content to be imported.' }),
    ),
    Type: NotebookTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The notebook content type. Currently, the only valid type is <code>IPYNB</code>.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique case-sensitive string used to ensure the request to import the notebook is idempotent (executes only once).</p> <important> <p>This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['WorkGroup', 'Name', 'Payload', 'Type'], title: 'ImportNotebookInput' })
  .openapi('ImportNotebookInput')

const SupportedDPUSizeListSchema = z.array(IntegerSchema).openapi('SupportedDPUSizeList')

const ApplicationDPUSizesSchema = z
  .object({
    ApplicationRuntimeId: NameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the supported application runtime (for example, <code>Athena notebook version 1</code>).',
        }),
    ).exactOptional(),
    SupportedDPUSizes: SupportedDPUSizeListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of the supported DPU sizes that the application runtime supports.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the application runtime IDs and their supported DPU sizes.',
    required: [],
  })
  .openapi('ApplicationDPUSizes')

const ApplicationDPUSizesListSchema = z
  .array(ApplicationDPUSizesSchema)
  .openapi('ApplicationDPUSizesList')

const ListApplicationDPUSizesOutputSchema = z
  .object({
    ApplicationDPUSizes: ApplicationDPUSizesListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of the supported DPU sizes that the application runtime supports.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListApplicationDPUSizesOutput')

const MaxApplicationDPUSizesCountSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('MaxApplicationDPUSizesCount')

const ListApplicationDPUSizesInputSchema = z
  .object({
    MaxResults: MaxApplicationDPUSizesCountSchema.and(
      z.any().openapi({ description: 'Specifies the maximum number of results to return.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListApplicationDPUSizesInput', required: [] })
  .openapi('ListApplicationDPUSizesInput')

const SessionManagerTokenSchema = z.string().max(2048).openapi('SessionManagerToken')

const CalculationSummarySchema = z
  .object({
    CalculationExecutionId: CalculationExecutionIdSchema.and(
      z.any().openapi({ description: 'The calculation execution UUID.' }),
    ).exactOptional(),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'A description of the calculation.' }),
    ).exactOptional(),
    Status: CalculationStatusSchema.and(
      z.any().openapi({ description: 'Contains information about the status of the calculation.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information for a notebook calculation.', required: [] })
  .openapi('CalculationSummary')

const CalculationsListSchema = z
  .array(CalculationSummarySchema)
  .min(0)
  .max(100)
  .openapi('CalculationsList')

const ListCalculationExecutionsResponseSchema = z
  .object({
    NextToken: SessionManagerTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
    Calculations: CalculationsListSchema.and(
      z.any().openapi({ description: 'A list of <a>CalculationSummary</a> objects.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCalculationExecutionsResponse')

const MaxCalculationsCountSchema = z.int().min(1).max(100).openapi('MaxCalculationsCount')

const ListCalculationExecutionsRequestSchema = z
  .object({
    SessionId: SessionIdSchema.and(z.any().openapi({ description: 'The session ID.' })),
    StateFilter: CalculationExecutionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A filter for a specific calculation execution state. A description of each state follows.</p> <p> <code>CREATING</code> - The calculation is in the process of being created.</p> <p> <code>CREATED</code> - The calculation has been created and is ready to run.</p> <p> <code>QUEUED</code> - The calculation has been queued for processing.</p> <p> <code>RUNNING</code> - The calculation is running.</p> <p> <code>CANCELING</code> - A request to cancel the calculation has been received and the system is working to stop it.</p> <p> <code>CANCELED</code> - The calculation is no longer running as the result of a cancel request.</p> <p> <code>COMPLETED</code> - The calculation has completed without error.</p> <p> <code>FAILED</code> - The calculation failed and is no longer running.</p>',
        }),
    ).exactOptional(),
    MaxResults: MaxCalculationsCountSchema.and(
      z.any().openapi({ description: 'The maximum number of calculation executions to return.' }),
    ).exactOptional(),
    NextToken: SessionManagerTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SessionId'], title: 'ListCalculationExecutionsRequest' })
  .openapi('ListCalculationExecutionsRequest')

const CapacityReservationsListSchema = z
  .array(CapacityReservationSchema)
  .openapi('CapacityReservationsList')

const ListCapacityReservationsOutputSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call.',
        }),
    ).exactOptional(),
    CapacityReservations: CapacityReservationsListSchema.and(
      z.any().openapi({ description: 'The capacity reservations for the current account.' }),
    ),
  })
  .openapi({ required: ['CapacityReservations'] })
  .openapi('ListCapacityReservationsOutput')

const MaxCapacityReservationsCountSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('MaxCapacityReservationsCount')

const ListCapacityReservationsInputSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated.',
        }),
    ).exactOptional(),
    MaxResults: MaxCapacityReservationsCountSchema.and(
      z.any().openapi({ description: 'Specifies the maximum number of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListCapacityReservationsInput', required: [] })
  .openapi('ListCapacityReservationsInput')

const DataCatalogSummarySchema = z
  .object({
    CatalogName: CatalogNameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the data catalog. The catalog name is unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign, or hyphen characters. The remainder of the length constraint of 256 is reserved for use by Athena.',
        }),
    ).exactOptional(),
    Type: DataCatalogTypeSchema.and(
      z.any().openapi({ description: 'The data catalog type.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The summary information for the data catalog, which includes its name and type.',
    required: [],
  })
  .openapi('DataCatalogSummary')

const DataCatalogSummaryListSchema = z
  .array(DataCatalogSummarySchema)
  .openapi('DataCatalogSummaryList')

const ListDataCatalogsOutputSchema = z
  .object({
    DataCatalogsSummary: DataCatalogSummaryListSchema.and(
      z.any().openapi({ description: 'A summary list of data catalogs.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDataCatalogsOutput')

const MaxDataCatalogsCountSchema = z.int().min(2).max(50).openapi('MaxDataCatalogsCount')

const ListDataCatalogsInputSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call.',
        }),
    ).exactOptional(),
    MaxResults: MaxDataCatalogsCountSchema.and(
      z.any().openapi({ description: 'Specifies the maximum number of data catalogs to return.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDataCatalogsInput', required: [] })
  .openapi('ListDataCatalogsInput')

const DatabaseListSchema = z.array(DatabaseSchema).openapi('DatabaseList')

const ListDatabasesOutputSchema = z
  .object({
    DatabaseList: DatabaseListSchema.and(
      z.any().openapi({ description: 'A list of databases from a data catalog.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDatabasesOutput')

const MaxDatabasesCountSchema = z.int().min(1).max(50).openapi('MaxDatabasesCount')

const ListDatabasesInputSchema = z
  .object({
    CatalogName: CatalogNameStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the data catalog that contains the databases to return.',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
    MaxResults: MaxDatabasesCountSchema.and(
      z.any().openapi({ description: 'Specifies the maximum number of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['CatalogName'], title: 'ListDatabasesInput' })
  .openapi('ListDatabasesInput')

const EngineVersionsListSchema = z
  .array(EngineVersionSchema)
  .min(0)
  .max(10)
  .openapi('EngineVersionsList')

const ListEngineVersionsOutputSchema = z
  .object({
    EngineVersions: EngineVersionsListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of engine versions that are available to choose from.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEngineVersionsOutput')

const MaxEngineVersionsCountSchema = z.int().min(1).max(10).openapi('MaxEngineVersionsCount')

const ListEngineVersionsInputSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
    MaxResults: MaxEngineVersionsCountSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of engine versions to return in this request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEngineVersionsInput', required: [] })
  .openapi('ListEngineVersionsInput')

const ExecutorIdSchema = z.string().regex(/.*/).max(100000).openapi('ExecutorId')

const ExecutorTypeSchema = z.enum(['COORDINATOR', 'GATEWAY', 'WORKER']).openapi('ExecutorType')

const ExecutorStateSchema = z
  .enum(['CREATING', 'CREATED', 'REGISTERED', 'TERMINATING', 'TERMINATED', 'FAILED'])
  .openapi('ExecutorState')

const ExecutorsSummarySchema = z
  .object({
    ExecutorId: ExecutorIdSchema.and(z.any().openapi({ description: 'The UUID of the executor.' })),
    ExecutorType: ExecutorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of executor used for the application (<code>COORDINATOR</code>, <code>GATEWAY</code>, or <code>WORKER</code>).',
        }),
    ).exactOptional(),
    StartDateTime: LongSchema.and(
      z.any().openapi({ description: 'The date and time that the executor started.' }),
    ).exactOptional(),
    TerminationDateTime: LongSchema.and(
      z.any().openapi({ description: 'The date and time that the executor was terminated.' }),
    ).exactOptional(),
    ExecutorState: ExecutorStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The processing state of the executor. A description of each state follows.</p> <p> <code>CREATING</code> - The executor is being started, including acquiring resources.</p> <p> <code>CREATED</code> - The executor has been started.</p> <p> <code>REGISTERED</code> - The executor has been registered.</p> <p> <code>TERMINATING</code> - The executor is in the process of shutting down.</p> <p> <code>TERMINATED</code> - The executor is no longer running.</p> <p> <code>FAILED</code> - Due to a failure, the executor is no longer running.</p>',
        }),
    ).exactOptional(),
    ExecutorSize: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The smallest unit of compute that a session can request from Athena. Size is measured in data processing unit (DPU) values, a relative measure of processing power.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ExecutorId'],
    description: 'Contains summary information about an executor.',
  })
  .openapi('ExecutorsSummary')

const ExecutorsSummaryListSchema = z.array(ExecutorsSummarySchema).openapi('ExecutorsSummaryList')

const ListExecutorsResponseSchema = z
  .object({
    SessionId: SessionIdSchema.and(z.any().openapi({ description: 'The session ID.' })),
    NextToken: SessionManagerTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
    ExecutorsSummary: ExecutorsSummaryListSchema.and(
      z.any().openapi({ description: 'Contains summary information about the executor.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['SessionId'] })
  .openapi('ListExecutorsResponse')

const MaxListExecutorsCountSchema = z.int().min(1).max(100).openapi('MaxListExecutorsCount')

const ListExecutorsRequestSchema = z
  .object({
    SessionId: SessionIdSchema.and(z.any().openapi({ description: 'The session ID.' })),
    ExecutorStateFilter: ExecutorStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A filter for a specific executor state. A description of each state follows.</p> <p> <code>CREATING</code> - The executor is being started, including acquiring resources.</p> <p> <code>CREATED</code> - The executor has been started.</p> <p> <code>REGISTERED</code> - The executor has been registered.</p> <p> <code>TERMINATING</code> - The executor is in the process of shutting down.</p> <p> <code>TERMINATED</code> - The executor is no longer running.</p> <p> <code>FAILED</code> - Due to a failure, the executor is no longer running.</p>',
        }),
    ).exactOptional(),
    MaxResults: MaxListExecutorsCountSchema.and(
      z.any().openapi({ description: 'The maximum number of executors to return.' }),
    ).exactOptional(),
    NextToken: SessionManagerTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SessionId'], title: 'ListExecutorsRequest' })
  .openapi('ListExecutorsRequest')

const ListNamedQueriesOutputSchema = z
  .object({
    NamedQueryIds: NamedQueryIdListSchema.and(
      z.any().openapi({ description: 'The list of unique query IDs.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListNamedQueriesOutput')

const MaxNamedQueriesCountSchema = z.int().min(0).max(50).openapi('MaxNamedQueriesCount')

const ListNamedQueriesInputSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
    MaxResults: MaxNamedQueriesCountSchema.and(
      z.any().openapi({ description: 'The maximum number of queries to return in this request.' }),
    ).exactOptional(),
    WorkGroup: WorkGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the workgroup from which the named queries are being returned. If a workgroup is not specified, the saved queries for the primary workgroup are returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListNamedQueriesInput', required: [] })
  .openapi('ListNamedQueriesInput')

const NotebookMetadataArraySchema = z.array(NotebookMetadataSchema).openapi('NotebookMetadataArray')

const ListNotebookMetadataOutputSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
    NotebookMetadataList: NotebookMetadataArraySchema.and(
      z
        .any()
        .openapi({ description: 'The list of notebook metadata for the specified workgroup.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListNotebookMetadataOutput')

const FilterDefinitionSchema = z
  .object({
    Name: NotebookNameSchema.and(
      z.any().openapi({ description: 'The name of the notebook to search for.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A string for searching notebook names.', required: [] })
  .openapi('FilterDefinition')

const MaxNotebooksCountSchema = z.int().min(1).max(50).openapi('MaxNotebooksCount')

const ListNotebookMetadataInputSchema = z
  .object({
    Filters: FilterDefinitionSchema.and(
      z.any().openapi({ description: 'Search filter string.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated.',
        }),
    ).exactOptional(),
    MaxResults: MaxNotebooksCountSchema.and(
      z.any().openapi({ description: 'Specifies the maximum number of results to return.' }),
    ).exactOptional(),
    WorkGroup: WorkGroupNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Spark enabled workgroup to retrieve notebook metadata for.',
        }),
    ),
  })
  .openapi({ required: ['WorkGroup'], title: 'ListNotebookMetadataInput' })
  .openapi('ListNotebookMetadataInput')

const NotebookSessionSummarySchema = z
  .object({
    SessionId: SessionIdSchema.and(
      z.any().openapi({ description: 'The notebook session ID.' }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z.any().openapi({ description: 'The time when the notebook session was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the notebook session ID and notebook session creation time.',
    required: [],
  })
  .openapi('NotebookSessionSummary')

const NotebookSessionsListSchema = z
  .array(NotebookSessionSummarySchema)
  .min(0)
  .max(10)
  .openapi({ description: 'A list of notebook sessions.' })
  .openapi('NotebookSessionsList')

const ListNotebookSessionsResponseSchema = z
  .object({
    NotebookSessionsList: NotebookSessionsListSchema.and(
      z.any().openapi({ description: 'A list of the sessions belonging to the notebook.' }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['NotebookSessionsList'] })
  .openapi('ListNotebookSessionsResponse')

const MaxSessionsCountSchema = z.int().min(1).max(100).openapi('MaxSessionsCount')

const ListNotebookSessionsRequestSchema = z
  .object({
    NotebookId: NotebookIdSchema.and(
      z.any().openapi({ description: 'The ID of the notebook to list sessions for.' }),
    ),
    MaxResults: MaxSessionsCountSchema.and(
      z.any().openapi({ description: 'The maximum number of notebook sessions to return.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['NotebookId'], title: 'ListNotebookSessionsRequest' })
  .openapi('ListNotebookSessionsRequest')

const PreparedStatementSummarySchema = z
  .object({
    StatementName: StatementNameSchema.and(
      z.any().openapi({ description: 'The name of the prepared statement.' }),
    ).exactOptional(),
    LastModifiedTime: DateSchema.and(
      z.any().openapi({ description: 'The last modified time of the prepared statement.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The name and last modified time of the prepared statement.',
    required: [],
  })
  .openapi('PreparedStatementSummary')

const PreparedStatementsListSchema = z
  .array(PreparedStatementSummarySchema)
  .min(0)
  .max(50)
  .openapi('PreparedStatementsList')

const ListPreparedStatementsOutputSchema = z
  .object({
    PreparedStatements: PreparedStatementsListSchema.and(
      z.any().openapi({ description: 'The list of prepared statements for the workgroup.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPreparedStatementsOutput')

const MaxPreparedStatementsCountSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('MaxPreparedStatementsCount')

const ListPreparedStatementsInputSchema = z
  .object({
    WorkGroup: WorkGroupNameSchema.and(
      z.any().openapi({ description: 'The workgroup to list the prepared statements for.' }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
    MaxResults: MaxPreparedStatementsCountSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in this request.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['WorkGroup'], title: 'ListPreparedStatementsInput' })
  .openapi('ListPreparedStatementsInput')

const ListQueryExecutionsOutputSchema = z
  .object({
    QueryExecutionIds: QueryExecutionIdListSchema.and(
      z
        .any()
        .openapi({ description: 'The unique IDs of each query execution as an array of strings.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token to be used by the next request if this request is truncated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListQueryExecutionsOutput')

const MaxQueryExecutionsCountSchema = z.int().min(0).max(50).openapi('MaxQueryExecutionsCount')

const ListQueryExecutionsInputSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
    MaxResults: MaxQueryExecutionsCountSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of query executions to return in this request.',
        }),
    ).exactOptional(),
    WorkGroup: WorkGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the workgroup from which queries are being returned. If a workgroup is not specified, a list of available query execution IDs for the queries in the primary workgroup is returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListQueryExecutionsInput', required: [] })
  .openapi('ListQueryExecutionsInput')

const SessionSummarySchema = z
  .object({
    SessionId: SessionIdSchema.and(
      z.any().openapi({ description: 'The session ID.' }),
    ).exactOptional(),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'The session description.' }),
    ).exactOptional(),
    EngineVersion: EngineVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The engine version used by the session (for example, <code>PySpark engine version 3</code>).',
        }),
    ).exactOptional(),
    NotebookVersion: NameStringSchema.and(
      z.any().openapi({ description: 'The notebook version.' }),
    ).exactOptional(),
    Status: SessionStatusSchema.and(
      z.any().openapi({ description: 'Contains information about the session status.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains summary information about a session.', required: [] })
  .openapi('SessionSummary')

const SessionsListSchema = z.array(SessionSummarySchema).min(0).max(100).openapi('SessionsList')

const ListSessionsResponseSchema = z
  .object({
    NextToken: SessionManagerTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
    Sessions: SessionsListSchema.and(
      z.any().openapi({ description: 'A list of sessions.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSessionsResponse')

const ListSessionsRequestSchema = z
  .object({
    WorkGroup: WorkGroupNameSchema.and(
      z.any().openapi({ description: 'The workgroup to which the session belongs.' }),
    ),
    StateFilter: SessionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A filter for a specific session state. A description of each state follows.</p> <p> <code>CREATING</code> - The session is being started, including acquiring resources.</p> <p> <code>CREATED</code> - The session has been started.</p> <p> <code>IDLE</code> - The session is able to accept a calculation.</p> <p> <code>BUSY</code> - The session is processing another task and is unable to accept a calculation.</p> <p> <code>TERMINATING</code> - The session is in the process of shutting down.</p> <p> <code>TERMINATED</code> - The session and its resources are no longer running.</p> <p> <code>DEGRADED</code> - The session has no healthy coordinators.</p> <p> <code>FAILED</code> - Due to a failure, the session and its resources are no longer running.</p>',
        }),
    ).exactOptional(),
    MaxResults: MaxSessionsCountSchema.and(
      z.any().openapi({ description: 'The maximum number of sessions to return.' }),
    ).exactOptional(),
    NextToken: SessionManagerTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['WorkGroup'], title: 'ListSessionsRequest' })
  .openapi('ListSessionsRequest')

const TableMetadataListSchema = z.array(TableMetadataSchema).openapi('TableMetadataList')

const ListTableMetadataOutputSchema = z
  .object({
    TableMetadataList: TableMetadataListSchema.and(
      z.any().openapi({ description: 'A list of table metadata.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTableMetadataOutput')

const ExpressionStringSchema = z.string().min(0).max(256).openapi('ExpressionString')

const MaxTableMetadataCountSchema = z.int().min(1).max(50).openapi('MaxTableMetadataCount')

const ListTableMetadataInputSchema = z
  .object({
    CatalogName: CatalogNameStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the data catalog for which table metadata should be returned.',
        }),
    ),
    DatabaseName: NameStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the database for which table metadata should be returned.',
        }),
    ),
    Expression: ExpressionStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A regex filter that pattern-matches table names. If no expression is supplied, metadata for all tables are listed.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call.',
        }),
    ).exactOptional(),
    MaxResults: MaxTableMetadataCountSchema.and(
      z.any().openapi({ description: 'Specifies the maximum number of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['CatalogName', 'DatabaseName'], title: 'ListTableMetadataInput' })
  .openapi('ListTableMetadataInput')

const ListTagsForResourceOutputSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The list of tags associated with the specified resource.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token to be used by the next request if this request is truncated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceOutput')

const AmazonResourceNameSchema = z.string().min(1).max(1011).openapi('AmazonResourceName')

const MaxTagsCountSchema = z.int().min(75).openapi('MaxTagsCount')

const ListTagsForResourceInputSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'Lists the tags for the resource with the specified ARN.' }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results for this request, where the request lists the tags for the resource with the specified ARN.',
        }),
    ).exactOptional(),
    MaxResults: MaxTagsCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to be returned per request that lists the tags for the resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceInput' })
  .openapi('ListTagsForResourceInput')

const WorkGroupSummarySchema = z
  .object({
    Name: WorkGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the workgroup.' }),
    ).exactOptional(),
    State: WorkGroupStateSchema.and(
      z.any().openapi({ description: 'The state of the workgroup.' }),
    ).exactOptional(),
    Description: WorkGroupDescriptionStringSchema.and(
      z.any().openapi({ description: 'The workgroup description.' }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z.any().openapi({ description: 'The workgroup creation date and time.' }),
    ).exactOptional(),
    EngineVersion: EngineVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The engine version setting for all queries on the workgroup. Queries on the <code>AmazonAthenaPreviewFunctionality</code> workgroup run on the preview engine regardless of this setting.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The summary information for the workgroup, which includes its name, state, description, and the date and time it was created.',
    required: [],
  })
  .openapi('WorkGroupSummary')

const WorkGroupsListSchema = z
  .array(WorkGroupSummarySchema)
  .min(0)
  .max(50)
  .openapi('WorkGroupsList')

const ListWorkGroupsOutputSchema = z
  .object({
    WorkGroups: WorkGroupsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a>WorkGroupSummary</a> objects that include the names, descriptions, creation times, and states for each workgroup.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWorkGroupsOutput')

const MaxWorkGroupsCountSchema = z.int().min(1).max(50).openapi('MaxWorkGroupsCount')

const ListWorkGroupsInputSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the <code>NextToken</code> from the response object of the previous page call.',
        }),
    ).exactOptional(),
    MaxResults: MaxWorkGroupsCountSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of workgroups to return in this request.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListWorkGroupsInput', required: [] })
  .openapi('ListWorkGroupsInput')

const PutCapacityAssignmentConfigurationOutputSchema = z
  .object({})
  .openapi('PutCapacityAssignmentConfigurationOutput')

const PutCapacityAssignmentConfigurationInputSchema = z
  .object({
    CapacityReservationName: CapacityReservationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the capacity reservation to put a capacity assignment configuration for.',
        }),
    ),
    CapacityAssignments: CapacityAssignmentsListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of assignments for the capacity assignment configuration.',
        }),
    ),
  })
  .openapi({
    required: ['CapacityReservationName', 'CapacityAssignments'],
    title: 'PutCapacityAssignmentConfigurationInput',
  })
  .openapi('PutCapacityAssignmentConfigurationInput')

const StartCalculationExecutionResponseSchema = z
  .object({
    CalculationExecutionId: CalculationExecutionIdSchema.and(
      z.any().openapi({ description: 'The calculation execution UUID.' }),
    ).exactOptional(),
    State: CalculationExecutionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <code>CREATING</code> - The calculation is in the process of being created.</p> <p> <code>CREATED</code> - The calculation has been created and is ready to run.</p> <p> <code>QUEUED</code> - The calculation has been queued for processing.</p> <p> <code>RUNNING</code> - The calculation is running.</p> <p> <code>CANCELING</code> - A request to cancel the calculation has been received and the system is working to stop it.</p> <p> <code>CANCELED</code> - The calculation is no longer running as the result of a cancel request.</p> <p> <code>COMPLETED</code> - The calculation has completed without error.</p> <p> <code>FAILED</code> - The calculation failed and is no longer running.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartCalculationExecutionResponse')

const CalculationConfigurationSchema = z
  .object({
    CodeBlock: CodeBlockSchema.and(
      z.any().openapi({ description: 'A string that contains the code for the calculation.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains configuration information for the calculation.', required: [] })
  .openapi('CalculationConfiguration')

const StartCalculationExecutionRequestSchema = z
  .object({
    SessionId: SessionIdSchema.and(z.any().openapi({ description: 'The session ID.' })),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'A description of the calculation.' }),
    ).exactOptional(),
    CalculationConfiguration: CalculationConfigurationSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'Contains configuration information for the calculation.Kepler Post GA Tasks : https://sim.amazon.com/issues/ATHENA-39828',
        }),
    ).exactOptional(),
    CodeBlock: CodeBlockSchema.and(
      z.any().openapi({ description: 'A string that contains the code of the calculation.' }),
    ).exactOptional(),
    ClientRequestToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique case-sensitive string used to ensure the request to create the calculation is idempotent (executes only once). If another <code>StartCalculationExecutionRequest</code> is received, the same response is returned and another calculation is not created. If a parameter has changed, an error is returned.</p> <important> <p>This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for users. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SessionId'], title: 'StartCalculationExecutionRequest' })
  .openapi('StartCalculationExecutionRequest')

const StartQueryExecutionOutputSchema = z
  .object({
    QueryExecutionId: QueryExecutionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique ID of the query that ran as a result of this request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartQueryExecutionOutput')

const StartQueryExecutionInputSchema = z
  .object({
    QueryString: QueryStringSchema.and(
      z.any().openapi({ description: 'The SQL query statements to be executed.' }),
    ),
    ClientRequestToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique case-sensitive string used to ensure the request to create the query is idempotent (executes only once). If another <code>StartQueryExecution</code> request is received, the same response is returned and another query is not created. If a parameter has changed, for example, the <code>QueryString</code>, an error is returned.</p> <important> <p>This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for users. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.</p> </important>',
        }),
    ).exactOptional(),
    QueryExecutionContext: QueryExecutionContextSchema.and(
      z.any().openapi({ description: 'The database within which the query executes.' }),
    ).exactOptional(),
    ResultConfiguration: ResultConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies information about where and how to save the results of the query execution. If the query runs in a workgroup, then workgroup's settings may override query settings. This affects the query results location. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.",
        }),
    ).exactOptional(),
    WorkGroup: WorkGroupNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the workgroup in which the query is being started.' }),
    ).exactOptional(),
    ExecutionParameters: ExecutionParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of values for the parameters in a query. The values are applied sequentially to the parameters in the query in the order in which the parameters occur.',
        }),
    ).exactOptional(),
    ResultReuseConfiguration: ResultReuseConfigurationSchema.and(
      z.any().openapi({ description: 'Specifies the query result reuse behavior for the query.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['QueryString'], title: 'StartQueryExecutionInput' })
  .openapi('StartQueryExecutionInput')

const StartSessionResponseSchema = z
  .object({
    SessionId: SessionIdSchema.and(
      z.any().openapi({ description: 'The session ID.' }),
    ).exactOptional(),
    State: SessionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the session. A description of each state follows.</p> <p> <code>CREATING</code> - The session is being started, including acquiring resources.</p> <p> <code>CREATED</code> - The session has been started.</p> <p> <code>IDLE</code> - The session is able to accept a calculation.</p> <p> <code>BUSY</code> - The session is processing another task and is unable to accept a calculation.</p> <p> <code>TERMINATING</code> - The session is in the process of shutting down.</p> <p> <code>TERMINATED</code> - The session and its resources are no longer running.</p> <p> <code>DEGRADED</code> - The session has no healthy coordinators.</p> <p> <code>FAILED</code> - Due to a failure, the session and its resources are no longer running.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartSessionResponse')

const SessionIdleTimeoutInMinutesSchema = z
  .int()
  .min(1)
  .max(480)
  .openapi('SessionIdleTimeoutInMinutes')

const StartSessionRequestSchema = z
  .object({
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'The session description.' }),
    ).exactOptional(),
    WorkGroup: WorkGroupNameSchema.and(
      z.any().openapi({ description: 'The workgroup to which the session belongs.' }),
    ),
    EngineConfiguration: EngineConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains engine data processing unit (DPU) configuration settings and parameter mappings.',
        }),
    ),
    NotebookVersion: NameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The notebook version. This value is supplied automatically for notebook sessions in the Athena console and is not required for programmatic session access. The only valid notebook version is <code>Athena notebook version 1</code>. If you specify a value for <code>NotebookVersion</code>, you must also specify a value for <code>NotebookId</code>. See <a>EngineConfiguration$AdditionalConfigs</a>.',
        }),
    ).exactOptional(),
    SessionIdleTimeoutInMinutes: SessionIdleTimeoutInMinutesSchema.and(
      z.any().openapi({ description: 'The idle timeout in minutes for the session.' }),
    ).exactOptional(),
    ClientRequestToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique case-sensitive string used to ensure the request to create the session is idempotent (executes only once). If another <code>StartSessionRequest</code> is received, the same response is returned and another session is not created. If a parameter has changed, an error is returned.</p> <important> <p>This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for users. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['WorkGroup', 'EngineConfiguration'], title: 'StartSessionRequest' })
  .openapi('StartSessionRequest')

const SessionAlreadyExistsExceptionSchema = z.any().openapi('SessionAlreadyExistsException')

const StopCalculationExecutionResponseSchema = z
  .object({
    State: CalculationExecutionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <code>CREATING</code> - The calculation is in the process of being created.</p> <p> <code>CREATED</code> - The calculation has been created and is ready to run.</p> <p> <code>QUEUED</code> - The calculation has been queued for processing.</p> <p> <code>RUNNING</code> - The calculation is running.</p> <p> <code>CANCELING</code> - A request to cancel the calculation has been received and the system is working to stop it.</p> <p> <code>CANCELED</code> - The calculation is no longer running as the result of a cancel request.</p> <p> <code>COMPLETED</code> - The calculation has completed without error.</p> <p> <code>FAILED</code> - The calculation failed and is no longer running.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopCalculationExecutionResponse')

const StopCalculationExecutionRequestSchema = z
  .object({
    CalculationExecutionId: CalculationExecutionIdSchema.and(
      z.any().openapi({ description: 'The calculation execution UUID.' }),
    ),
  })
  .openapi({ required: ['CalculationExecutionId'], title: 'StopCalculationExecutionRequest' })
  .openapi('StopCalculationExecutionRequest')

const StopQueryExecutionOutputSchema = z.object({}).openapi('StopQueryExecutionOutput')

const StopQueryExecutionInputSchema = z
  .object({
    QueryExecutionId: QueryExecutionIdSchema.and(
      z.any().openapi({ description: 'The unique ID of the query execution to stop.' }),
    ),
  })
  .openapi({ required: ['QueryExecutionId'], title: 'StopQueryExecutionInput' })
  .openapi('StopQueryExecutionInput')

const TagResourceOutputSchema = z.object({}).openapi('TagResourceOutput')

const TagResourceInputSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the ARN of the Athena resource to which tags are to be added.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of one or more tags, separated by commas, to be added to an Athena resource.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const TerminateSessionResponseSchema = z
  .object({
    State: SessionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the session. A description of each state follows.</p> <p> <code>CREATING</code> - The session is being started, including acquiring resources.</p> <p> <code>CREATED</code> - The session has been started.</p> <p> <code>IDLE</code> - The session is able to accept a calculation.</p> <p> <code>BUSY</code> - The session is processing another task and is unable to accept a calculation.</p> <p> <code>TERMINATING</code> - The session is in the process of shutting down.</p> <p> <code>TERMINATED</code> - The session and its resources are no longer running.</p> <p> <code>DEGRADED</code> - The session has no healthy coordinators.</p> <p> <code>FAILED</code> - Due to a failure, the session and its resources are no longer running.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TerminateSessionResponse')

const TerminateSessionRequestSchema = z
  .object({ SessionId: SessionIdSchema.and(z.any().openapi({ description: 'The session ID.' })) })
  .openapi({ required: ['SessionId'], title: 'TerminateSessionRequest' })
  .openapi('TerminateSessionRequest')

const UntagResourceOutputSchema = z.object({}).openapi('UntagResourceOutput')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const UntagResourceInputSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the ARN of the resource from which tags are to be removed.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A comma-separated list of one or more tag keys whose tags are to be removed from the specified resource.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

const UpdateCapacityReservationOutputSchema = z
  .object({})
  .openapi('UpdateCapacityReservationOutput')

const UpdateCapacityReservationInputSchema = z
  .object({
    TargetDpus: TargetDpusIntegerSchema.and(
      z.any().openapi({ description: 'The new number of requested data processing units.' }),
    ),
    Name: CapacityReservationNameSchema.and(
      z.any().openapi({ description: 'The name of the capacity reservation.' }),
    ),
  })
  .openapi({ required: ['TargetDpus', 'Name'], title: 'UpdateCapacityReservationInput' })
  .openapi('UpdateCapacityReservationInput')

const UpdateDataCatalogOutputSchema = z.object({}).openapi('UpdateDataCatalogOutput')

const UpdateDataCatalogInputSchema = z
  .object({
    Name: CatalogNameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the data catalog to update. The catalog name must be unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign, or hyphen characters. The remainder of the length constraint of 256 is reserved for use by Athena.',
        }),
    ),
    Type: DataCatalogTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the type of data catalog to update. Specify <code>LAMBDA</code> for a federated catalog, <code>HIVE</code> for an external hive metastore, or <code>GLUE</code> for an Glue Data Catalog.',
        }),
    ),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'New or modified text that describes the data catalog.' }),
    ).exactOptional(),
    Parameters: ParametersMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the Lambda function or functions to use for updating the data catalog. This is a mapping whose values depend on the catalog type. </p> <ul> <li> <p>For the <code>HIVE</code> data catalog type, use the following syntax. The <code>metadata-function</code> parameter is required. <code>The sdk-version</code> parameter is optional and defaults to the currently supported version.</p> <p> <code>metadata-function=<i>lambda_arn</i>, sdk-version=<i>version_number</i> </code> </p> </li> <li> <p>For the <code>LAMBDA</code> data catalog type, use one of the following sets of required parameters, but not both.</p> <ul> <li> <p>If you have one Lambda function that processes metadata and another for reading the actual data, use the following syntax. Both parameters are required.</p> <p> <code>metadata-function=<i>lambda_arn</i>, record-function=<i>lambda_arn</i> </code> </p> </li> <li> <p> If you have a composite Lambda function that processes both metadata and data, use the following syntax to specify your Lambda function.</p> <p> <code>function=<i>lambda_arn</i> </code> </p> </li> </ul> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'Type'], title: 'UpdateDataCatalogInput' })
  .openapi('UpdateDataCatalogInput')

const UpdateNamedQueryOutputSchema = z.object({}).openapi('UpdateNamedQueryOutput')

const NamedQueryDescriptionStringSchema = z
  .string()
  .min(0)
  .max(1024)
  .openapi('NamedQueryDescriptionString')

const UpdateNamedQueryInputSchema = z
  .object({
    NamedQueryId: NamedQueryIdSchema.and(
      z.any().openapi({ description: 'The unique identifier (UUID) of the query.' }),
    ),
    Name: NameStringSchema.and(z.any().openapi({ description: 'The name of the query.' })),
    Description: NamedQueryDescriptionStringSchema.and(
      z.any().openapi({ description: 'The query description.' }),
    ).exactOptional(),
    QueryString: QueryStringSchema.and(
      z.any().openapi({ description: 'The contents of the query with all query statements.' }),
    ),
  })
  .openapi({ required: ['NamedQueryId', 'Name', 'QueryString'], title: 'UpdateNamedQueryInput' })
  .openapi('UpdateNamedQueryInput')

const UpdateNotebookOutputSchema = z.object({}).openapi('UpdateNotebookOutput')

const UpdateNotebookInputSchema = z
  .object({
    NotebookId: NotebookIdSchema.and(
      z.any().openapi({ description: 'The ID of the notebook to update.' }),
    ),
    Payload: PayloadSchema.and(
      z.any().openapi({ description: 'The updated content for the notebook.' }),
    ),
    Type: NotebookTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The notebook content type. Currently, the only valid type is <code>IPYNB</code>.',
        }),
    ),
    SessionId: SessionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The active notebook session ID. Required if the notebook has an active session.',
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique case-sensitive string used to ensure the request to create the notebook is idempotent (executes only once).</p> <important> <p>This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['NotebookId', 'Payload', 'Type'], title: 'UpdateNotebookInput' })
  .openapi('UpdateNotebookInput')

const UpdateNotebookMetadataOutputSchema = z.object({}).openapi('UpdateNotebookMetadataOutput')

const UpdateNotebookMetadataInputSchema = z
  .object({
    NotebookId: NotebookIdSchema.and(
      z.any().openapi({ description: 'The ID of the notebook to update the metadata for.' }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique case-sensitive string used to ensure the request to create the notebook is idempotent (executes only once).</p> <important> <p>This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.</p> </important>',
        }),
    ).exactOptional(),
    Name: NotebookNameSchema.and(
      z.any().openapi({ description: 'The name to update the notebook to.' }),
    ),
  })
  .openapi({ required: ['NotebookId', 'Name'], title: 'UpdateNotebookMetadataInput' })
  .openapi('UpdateNotebookMetadataInput')

const UpdatePreparedStatementOutputSchema = z.object({}).openapi('UpdatePreparedStatementOutput')

const UpdatePreparedStatementInputSchema = z
  .object({
    StatementName: StatementNameSchema.and(
      z.any().openapi({ description: 'The name of the prepared statement.' }),
    ),
    WorkGroup: WorkGroupNameSchema.and(
      z.any().openapi({ description: 'The workgroup for the prepared statement.' }),
    ),
    QueryStatement: QueryStringSchema.and(
      z.any().openapi({ description: 'The query string for the prepared statement.' }),
    ),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'The description of the prepared statement.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StatementName', 'WorkGroup', 'QueryStatement'],
    title: 'UpdatePreparedStatementInput',
  })
  .openapi('UpdatePreparedStatementInput')

const UpdateWorkGroupOutputSchema = z.object({}).openapi('UpdateWorkGroupOutput')

const ResultConfigurationUpdatesSchema = z
  .object({
    OutputLocation: ResultOutputLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location in Amazon S3 where your query and calculation results are stored, such as <code>s3://path/to/query/bucket/</code>. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and output files</a>. If workgroup settings override client-side settings, then the query uses the location for the query results and the encryption configuration that are specified for the workgroup. The "workgroup settings override" is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.',
        }),
    ).exactOptional(),
    RemoveOutputLocation: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to "true", indicates that the previously-specified query results location (also known as a client-side setting) for queries in this workgroup should be ignored and set to null. If set to "false" or not set, and a value is present in the <code>OutputLocation</code> in <code>ResultConfigurationUpdates</code> (the client-side setting), the <code>OutputLocation</code> in the workgroup\'s <code>ResultConfiguration</code> will be updated with the new value. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.',
        }),
    ).exactOptional(),
    EncryptionConfiguration: EncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The encryption configuration for query and calculation results.',
        }),
    ).exactOptional(),
    RemoveEncryptionConfiguration: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to "true", indicates that the previously-specified encryption configuration (also known as the client-side setting) for queries in this workgroup should be ignored and set to null. If set to "false" or not set, and a value is present in the <code>EncryptionConfiguration</code> in <code>ResultConfigurationUpdates</code> (the client-side setting), the <code>EncryptionConfiguration</code> in the workgroup\'s <code>ResultConfiguration</code> will be updated with the new value. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.',
        }),
    ).exactOptional(),
    ExpectedBucketOwner: AwsAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Web Services account ID that you expect to be the owner of the Amazon S3 bucket specified by <a>ResultConfiguration$OutputLocation</a>. If set, Athena uses the value for <code>ExpectedBucketOwner</code> when it makes Amazon S3 calls to your specified output location. If the <code>ExpectedBucketOwner</code> Amazon Web Services account ID does not match the actual owner of the Amazon S3 bucket, the call fails with a permissions error.</p> <p>If workgroup settings override client-side settings, then the query uses the <code>ExpectedBucketOwner</code> setting that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a> and <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>',
        }),
    ).exactOptional(),
    RemoveExpectedBucketOwner: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to "true", removes the Amazon Web Services account ID previously specified for <a>ResultConfiguration$ExpectedBucketOwner</a>. If set to "false" or not set, and a value is present in the <code>ExpectedBucketOwner</code> in <code>ResultConfigurationUpdates</code> (the client-side setting), the <code>ExpectedBucketOwner</code> in the workgroup\'s <code>ResultConfiguration</code> is updated with the new value. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.',
        }),
    ).exactOptional(),
    AclConfiguration: AclConfigurationSchema.and(
      z.any().openapi({ description: 'The ACL configuration for the query results.' }),
    ).exactOptional(),
    RemoveAclConfiguration: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to <code>true</code>, indicates that the previously-specified ACL configuration for queries in this workgroup should be ignored and set to null. If set to <code>false</code> or not set, and a value is present in the <code>AclConfiguration</code> of <code>ResultConfigurationUpdates</code>, the <code>AclConfiguration</code> in the workgroup\'s <code>ResultConfiguration</code> is updated with the new value. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The information about the updates in the query results, such as output location and encryption configuration for the query results.',
    required: [],
  })
  .openapi('ResultConfigurationUpdates')

const WorkGroupConfigurationUpdatesSchema = z
  .object({
    EnforceWorkGroupConfiguration: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to "true", the settings for the workgroup override client-side settings. If set to "false" client-side settings are used. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.',
        }),
    ).exactOptional(),
    ResultConfigurationUpdates: ResultConfigurationUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The result configuration information about the queries in this workgroup that will be updated. Includes the updated results location and an updated option for encrypting query results.',
        }),
    ).exactOptional(),
    PublishCloudWatchMetricsEnabled: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether this workgroup enables publishing metrics to Amazon CloudWatch.',
        }),
    ).exactOptional(),
    BytesScannedCutoffPerQuery: BytesScannedCutoffValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The upper limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.',
        }),
    ).exactOptional(),
    RemoveBytesScannedCutoffPerQuery: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates that the data usage control limit per query is removed. <a>WorkGroupConfiguration$BytesScannedCutoffPerQuery</a> ',
        }),
    ).exactOptional(),
    RequesterPaysEnabled: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to <code>true</code>, allows members assigned to a workgroup to specify Amazon S3 Requester Pays buckets in queries. If set to <code>false</code>, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. The default is <code>false</code>. For more information about Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays Buckets</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.',
        }),
    ).exactOptional(),
    EngineVersion: EngineVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The engine version requested when a workgroup is updated. After the update, all queries on the workgroup run on the requested engine version. If no value was previously set, the default is Auto. Queries on the <code>AmazonAthenaPreviewFunctionality</code> workgroup run on the preview engine regardless of this setting.',
        }),
    ).exactOptional(),
    RemoveCustomerContentEncryptionConfiguration: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Removes content encryption configuration from an Apache Spark-enabled Athena workgroup.',
        }),
    ).exactOptional(),
    AdditionalConfiguration: NameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a user defined string in JSON format for a Spark-enabled workgroup.',
        }),
    ).exactOptional(),
    ExecutionRole: RoleArnSchema.and(
      z.any().openapi({ description: 'Contains the ARN of the execution role for the workgroup' }),
    ).exactOptional(),
    CustomerContentEncryptionConfiguration:
      CustomerContentEncryptionConfigurationSchema.exactOptional(),
    EnableMinimumEncryptionConfiguration: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Enforces a minimal level of encryption for the workgroup for query and calculation results that are written to Amazon S3. When enabled, workgroup users can set encryption only to the minimum level set by the administrator or higher when they submit queries. This setting does not apply to Spark-enabled workgroups.</p> <p>The <code>EnforceWorkGroupConfiguration</code> setting takes precedence over the <code>EnableMinimumEncryptionConfiguration</code> flag. This means that if <code>EnforceWorkGroupConfiguration</code> is true, the <code>EnableMinimumEncryptionConfiguration</code> flag is ignored, and the workgroup configuration for encryption is used.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query and calculation results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.',
    required: [],
  })
  .openapi('WorkGroupConfigurationUpdates')

const UpdateWorkGroupInputSchema = z
  .object({
    WorkGroup: WorkGroupNameSchema.and(
      z.any().openapi({ description: 'The specified workgroup that will be updated.' }),
    ),
    Description: WorkGroupDescriptionStringSchema.and(
      z.any().openapi({ description: 'The workgroup description.' }),
    ).exactOptional(),
    ConfigurationUpdates: WorkGroupConfigurationUpdatesSchema.and(
      z
        .any()
        .openapi({ description: 'Contains configuration updates for an Athena SQL workgroup.' }),
    ).exactOptional(),
    State: WorkGroupStateSchema.and(
      z
        .any()
        .openapi({
          description: 'The workgroup state that will be updated for the given workgroup.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['WorkGroup'], title: 'UpdateWorkGroupInput' })
  .openapi('UpdateWorkGroupInput')

const KeyStringSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('KeyString')

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

export const postXAmzTargetAmazonAthenaBatchGetNamedQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.BatchGetNamedQuery',
  description:
    'Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of query execution IDs.',
  operationId: 'BatchGetNamedQuery',
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
        .literal('AmazonAthena.BatchGetNamedQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.BatchGetNamedQuery'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetNamedQueryInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetNamedQueryOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaBatchGetPreparedStatementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement',
  description:
    'Returns the details of a single prepared statement or a list of up to 256 prepared statements for the array of prepared statement names that you provide. Requires you to have access to the workgroup to which the prepared statements belong. If a prepared statement cannot be retrieved for the name specified, the statement is listed in <code>UnprocessedPreparedStatementNames</code>.',
  operationId: 'BatchGetPreparedStatement',
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
        .literal('AmazonAthena.BatchGetPreparedStatement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.BatchGetPreparedStatement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetPreparedStatementInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetPreparedStatementOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaBatchGetQueryExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.BatchGetQueryExecution',
  description:
    'Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details about named queries.',
  operationId: 'BatchGetQueryExecution',
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
        .literal('AmazonAthena.BatchGetQueryExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.BatchGetQueryExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetQueryExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetQueryExecutionOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaCancelCapacityReservationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.CancelCapacityReservation',
  description:
    'Cancels the capacity reservation with the specified name. Cancelled reservations remain in your account and will be deleted 45 days after cancellation. During the 45 days, you cannot re-purpose or reuse a reservation that has been cancelled, but you can refer to its tags and view it for historical reference. ',
  operationId: 'CancelCapacityReservation',
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
        .literal('AmazonAthena.CancelCapacityReservation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.CancelCapacityReservation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelCapacityReservationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelCapacityReservationOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaCreateCapacityReservationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.CreateCapacityReservation',
  description:
    'Creates a capacity reservation with the specified name and number of requested data processing units.',
  operationId: 'CreateCapacityReservation',
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
        .literal('AmazonAthena.CreateCapacityReservation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.CreateCapacityReservation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateCapacityReservationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCapacityReservationOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaCreateDataCatalogRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.CreateDataCatalog',
  description:
    'Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account.',
  operationId: 'CreateDataCatalog',
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
        .literal('AmazonAthena.CreateDataCatalog')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.CreateDataCatalog'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDataCatalogInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDataCatalogOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaCreateNamedQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.CreateNamedQuery',
  description:
    '<p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>',
  operationId: 'CreateNamedQuery',
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
        .literal('AmazonAthena.CreateNamedQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.CreateNamedQuery'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateNamedQueryInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateNamedQueryOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaCreateNotebookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.CreateNotebook',
  description:
    'Creates an empty <code>ipynb</code> file in the specified Apache Spark enabled workgroup. Throws an error if a file in the workgroup with the same name already exists.',
  operationId: 'CreateNotebook',
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
        .literal('AmazonAthena.CreateNotebook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.CreateNotebook'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateNotebookInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateNotebookOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaCreatePreparedStatementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.CreatePreparedStatement',
  description: 'Creates a prepared statement for use with SQL queries in Athena.',
  operationId: 'CreatePreparedStatement',
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
        .literal('AmazonAthena.CreatePreparedStatement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.CreatePreparedStatement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePreparedStatementInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePreparedStatementOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaCreatePresignedNotebookUrlRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl',
  description:
    'Gets an authentication token and the URL at which the notebook can be accessed. During programmatic access, <code>CreatePresignedNotebookUrl</code> must be called every 10 minutes to refresh the authentication token. For information about granting programmatic access, see <a href="https://docs.aws.amazon.com/athena/latest/ug/setting-up.html#setting-up-grant-programmatic-access">Grant programmatic access</a>.',
  operationId: 'CreatePresignedNotebookUrl',
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
        .literal('AmazonAthena.CreatePresignedNotebookUrl')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.CreatePresignedNotebookUrl'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePresignedNotebookUrlRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePresignedNotebookUrlResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaCreateWorkGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.CreateWorkGroup',
  description:
    'Creates a workgroup with the specified name. A workgroup can be an Apache Spark enabled workgroup or an Athena SQL workgroup.',
  operationId: 'CreateWorkGroup',
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
        .literal('AmazonAthena.CreateWorkGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.CreateWorkGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWorkGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWorkGroupOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaDeleteCapacityReservationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.DeleteCapacityReservation',
  description:
    'Deletes a cancelled capacity reservation. A reservation must be cancelled before it can be deleted. A deleted reservation is immediately removed from your account and can no longer be referenced, including by its ARN. A deleted reservation cannot be called by <code>GetCapacityReservation</code>, and deleted reservations do not appear in the output of <code>ListCapacityReservations</code>.',
  operationId: 'DeleteCapacityReservation',
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
        .literal('AmazonAthena.DeleteCapacityReservation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.DeleteCapacityReservation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteCapacityReservationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteCapacityReservationOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaDeleteDataCatalogRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.DeleteDataCatalog',
  description: 'Deletes a data catalog.',
  operationId: 'DeleteDataCatalog',
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
        .literal('AmazonAthena.DeleteDataCatalog')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.DeleteDataCatalog'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDataCatalogInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDataCatalogOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaDeleteNamedQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.DeleteNamedQuery',
  description:
    '<p>Deletes the named query if you have access to the workgroup in which the query was saved.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>',
  operationId: 'DeleteNamedQuery',
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
        .literal('AmazonAthena.DeleteNamedQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.DeleteNamedQuery'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteNamedQueryInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteNamedQueryOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaDeleteNotebookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.DeleteNotebook',
  description: 'Deletes the specified notebook.',
  operationId: 'DeleteNotebook',
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
        .literal('AmazonAthena.DeleteNotebook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.DeleteNotebook'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteNotebookInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteNotebookOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaDeletePreparedStatementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.DeletePreparedStatement',
  description:
    'Deletes the prepared statement with the specified name from the specified workgroup.',
  operationId: 'DeletePreparedStatement',
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
        .literal('AmazonAthena.DeletePreparedStatement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.DeletePreparedStatement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePreparedStatementInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePreparedStatementOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaDeleteWorkGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.DeleteWorkGroup',
  description:
    'Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.',
  operationId: 'DeleteWorkGroup',
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
        .literal('AmazonAthena.DeleteWorkGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.DeleteWorkGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteWorkGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteWorkGroupOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaExportNotebookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ExportNotebook',
  description: 'Exports the specified notebook and its metadata.',
  operationId: 'ExportNotebook',
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
        .literal('AmazonAthena.ExportNotebook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ExportNotebook'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ExportNotebookInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExportNotebookOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetCalculationExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetCalculationExecution',
  description: 'Describes a previously submitted calculation execution.',
  operationId: 'GetCalculationExecution',
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
        .literal('AmazonAthena.GetCalculationExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetCalculationExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCalculationExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCalculationExecutionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetCalculationExecutionCodeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode',
  description: 'Retrieves the unencrypted code that was executed for the calculation.',
  operationId: 'GetCalculationExecutionCode',
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
        .literal('AmazonAthena.GetCalculationExecutionCode')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetCalculationExecutionCode'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCalculationExecutionCodeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCalculationExecutionCodeResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetCalculationExecutionStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus',
  description: 'Gets the status of a current calculation.',
  operationId: 'GetCalculationExecutionStatus',
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
        .literal('AmazonAthena.GetCalculationExecutionStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetCalculationExecutionStatus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCalculationExecutionStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCalculationExecutionStatusResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration',
  description:
    'Gets the capacity assignment configuration for a capacity reservation, if one exists.',
  operationId: 'GetCapacityAssignmentConfiguration',
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
        .literal('AmazonAthena.GetCapacityAssignmentConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetCapacityAssignmentConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCapacityAssignmentConfigurationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCapacityAssignmentConfigurationOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetCapacityReservationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetCapacityReservation',
  description: 'Returns information about the capacity reservation with the specified name.',
  operationId: 'GetCapacityReservation',
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
        .literal('AmazonAthena.GetCapacityReservation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetCapacityReservation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCapacityReservationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCapacityReservationOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetDataCatalogRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetDataCatalog',
  description: 'Returns the specified data catalog.',
  operationId: 'GetDataCatalog',
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
        .literal('AmazonAthena.GetDataCatalog')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetDataCatalog'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDataCatalogInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDataCatalogOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetDatabaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetDatabase',
  description: 'Returns a database object for the specified database and data catalog.',
  operationId: 'GetDatabase',
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
        .literal('AmazonAthena.GetDatabase')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetDatabase'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetDatabaseInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDatabaseOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'MetadataException',
      content: { 'application/json': { schema: MetadataExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetNamedQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetNamedQuery',
  description:
    'Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.',
  operationId: 'GetNamedQuery',
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
        .literal('AmazonAthena.GetNamedQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetNamedQuery'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetNamedQueryInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetNamedQueryOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetNotebookMetadataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetNotebookMetadata',
  description: 'Retrieves notebook metadata for the specified notebook ID.',
  operationId: 'GetNotebookMetadata',
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
        .literal('AmazonAthena.GetNotebookMetadata')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetNotebookMetadata'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetNotebookMetadataInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetNotebookMetadataOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetPreparedStatementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetPreparedStatement',
  description:
    'Retrieves the prepared statement with the specified name from the specified workgroup.',
  operationId: 'GetPreparedStatement',
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
        .literal('AmazonAthena.GetPreparedStatement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetPreparedStatement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetPreparedStatementInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPreparedStatementOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetQueryExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetQueryExecution',
  description:
    'Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.',
  operationId: 'GetQueryExecution',
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
        .literal('AmazonAthena.GetQueryExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetQueryExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetQueryExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetQueryExecutionOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetQueryResultsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetQueryResults',
  description:
    '<p>Streams the results of a single query execution specified by <code>QueryExecutionId</code> from the Athena query results location in Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and output files</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p> <p>To stream query results successfully, the IAM principal with permission to call <code>GetQueryResults</code> also must have permissions to the Amazon S3 <code>GetObject</code> action for the Athena query results location.</p> <important> <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for the query results location are able to retrieve query results from Amazon S3 even if permission to the <code>GetQueryResults</code> action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied.</p> </important>',
  operationId: 'GetQueryResults',
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
        .literal('AmazonAthena.GetQueryResults')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetQueryResults'] },
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
      content: { 'application/json': { schema: GetQueryResultsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetQueryResultsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetQueryRuntimeStatisticsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics',
  description:
    'Returns query execution runtime statistics related to a single execution of a query if you have access to the workgroup in which the query ran. Query execution runtime statistics are returned only when <a>QueryExecutionStatus$State</a> is in a SUCCEEDED or FAILED state. Stage-level input and output row count and data size statistics are not shown when a query has row-level filters defined in Lake Formation.',
  operationId: 'GetQueryRuntimeStatistics',
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
        .literal('AmazonAthena.GetQueryRuntimeStatistics')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetQueryRuntimeStatistics'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetQueryRuntimeStatisticsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetQueryRuntimeStatisticsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetSessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetSession',
  description:
    'Gets the full details of a previously created session, including the session status and configuration.',
  operationId: 'GetSession',
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
        .literal('AmazonAthena.GetSession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetSession'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetSessionRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSessionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetSessionStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetSessionStatus',
  description: 'Gets the current status of a session.',
  operationId: 'GetSessionStatus',
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
        .literal('AmazonAthena.GetSessionStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetSessionStatus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetSessionStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSessionStatusResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetTableMetadataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetTableMetadata',
  description: 'Returns table metadata for the specified catalog, database, and table.',
  operationId: 'GetTableMetadata',
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
        .literal('AmazonAthena.GetTableMetadata')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetTableMetadata'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetTableMetadataInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTableMetadataOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'MetadataException',
      content: { 'application/json': { schema: MetadataExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaGetWorkGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.GetWorkGroup',
  description: 'Returns information about the workgroup with the specified name.',
  operationId: 'GetWorkGroup',
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
        .literal('AmazonAthena.GetWorkGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.GetWorkGroup'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetWorkGroupInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWorkGroupOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaImportNotebookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ImportNotebook',
  description:
    'Imports a single <code>ipynb</code> file to a Spark enabled workgroup. The maximum file size that can be imported is 10 megabytes. If an <code>ipynb</code> file with the same name already exists in the workgroup, throws an error.',
  operationId: 'ImportNotebook',
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
        .literal('AmazonAthena.ImportNotebook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ImportNotebook'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ImportNotebookInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportNotebookOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListApplicationDPUSizesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes',
  description:
    'Returns the supported DPU sizes for the supported application runtimes (for example, <code>Athena notebook version 1</code>). ',
  operationId: 'ListApplicationDPUSizes',
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
        .literal('AmazonAthena.ListApplicationDPUSizes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListApplicationDPUSizes'] },
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
      content: { 'application/json': { schema: ListApplicationDPUSizesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListApplicationDPUSizesOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListCalculationExecutionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListCalculationExecutions',
  description:
    'Lists the calculations that have been submitted to a session in descending order. Newer calculations are listed first; older calculations are listed later.',
  operationId: 'ListCalculationExecutions',
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
        .literal('AmazonAthena.ListCalculationExecutions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListCalculationExecutions'] },
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
      content: { 'application/json': { schema: ListCalculationExecutionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCalculationExecutionsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListCapacityReservationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListCapacityReservations',
  description: 'Lists the capacity reservations for the current account.',
  operationId: 'ListCapacityReservations',
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
        .literal('AmazonAthena.ListCapacityReservations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListCapacityReservations'] },
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
      content: { 'application/json': { schema: ListCapacityReservationsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCapacityReservationsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListDataCatalogsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListDataCatalogs',
  description:
    '<p>Lists the data catalogs in the current Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note>',
  operationId: 'ListDataCatalogs',
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
        .literal('AmazonAthena.ListDataCatalogs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListDataCatalogs'] },
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
      content: { 'application/json': { schema: ListDataCatalogsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDataCatalogsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListDatabasesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListDatabases',
  description: 'Lists the databases in the specified data catalog.',
  operationId: 'ListDatabases',
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
        .literal('AmazonAthena.ListDatabases')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListDatabases'] },
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
    body: { content: { 'application/json': { schema: ListDatabasesInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatabasesOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'MetadataException',
      content: { 'application/json': { schema: MetadataExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListEngineVersionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListEngineVersions',
  description:
    'Returns a list of engine versions that are available to choose from, including the Auto option.',
  operationId: 'ListEngineVersions',
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
        .literal('AmazonAthena.ListEngineVersions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListEngineVersions'] },
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
      content: { 'application/json': { schema: ListEngineVersionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEngineVersionsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListExecutorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListExecutors',
  description:
    'Lists, in descending order, the executors that joined a session. Newer executors are listed first; older executors are listed later. The result can be optionally filtered by state.',
  operationId: 'ListExecutors',
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
        .literal('AmazonAthena.ListExecutors')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListExecutors'] },
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
      content: { 'application/json': { schema: ListExecutorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListExecutorsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListNamedQueriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListNamedQueries',
  description:
    '<p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>',
  operationId: 'ListNamedQueries',
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
        .literal('AmazonAthena.ListNamedQueries')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListNamedQueries'] },
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
      content: { 'application/json': { schema: ListNamedQueriesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListNamedQueriesOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListNotebookMetadataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListNotebookMetadata',
  description: 'Displays the notebook files for the specified workgroup in paginated format.',
  operationId: 'ListNotebookMetadata',
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
        .literal('AmazonAthena.ListNotebookMetadata')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListNotebookMetadata'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListNotebookMetadataInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListNotebookMetadataOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListNotebookSessionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListNotebookSessions',
  description:
    'Lists, in descending order, the sessions that have been created in a notebook that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code> or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.',
  operationId: 'ListNotebookSessions',
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
        .literal('AmazonAthena.ListNotebookSessions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListNotebookSessions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListNotebookSessionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListNotebookSessionsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListPreparedStatementsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListPreparedStatements',
  description: 'Lists the prepared statements in the specified workgroup.',
  operationId: 'ListPreparedStatements',
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
        .literal('AmazonAthena.ListPreparedStatements')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListPreparedStatements'] },
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
      content: { 'application/json': { schema: ListPreparedStatementsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPreparedStatementsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListQueryExecutionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListQueryExecutions',
  description:
    '<p>Provides a list of available query execution IDs for the queries in the specified workgroup. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>',
  operationId: 'ListQueryExecutions',
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
        .literal('AmazonAthena.ListQueryExecutions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListQueryExecutions'] },
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
      content: { 'application/json': { schema: ListQueryExecutionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListQueryExecutionsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListSessionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListSessions',
  description:
    'Lists the sessions in a workgroup that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code>, or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.',
  operationId: 'ListSessions',
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
        .literal('AmazonAthena.ListSessions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListSessions'] },
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
      content: { 'application/json': { schema: ListSessionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSessionsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListTableMetadataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListTableMetadata',
  description: 'Lists the metadata for the tables in the specified data catalog database.',
  operationId: 'ListTableMetadata',
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
        .literal('AmazonAthena.ListTableMetadata')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListTableMetadata'] },
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
      content: { 'application/json': { schema: ListTableMetadataInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTableMetadataOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'MetadataException',
      content: { 'application/json': { schema: MetadataExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListTagsForResource',
  description: 'Lists the tags associated with an Athena resource.',
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
        .literal('AmazonAthena.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListTagsForResource'] },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaListWorkGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.ListWorkGroups',
  description: 'Lists available workgroups for the account.',
  operationId: 'ListWorkGroups',
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
        .literal('AmazonAthena.ListWorkGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.ListWorkGroups'] },
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
      content: { 'application/json': { schema: ListWorkGroupsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWorkGroupsOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaPutCapacityAssignmentConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration',
  description:
    'Puts a new capacity assignment configuration for a specified capacity reservation. If a capacity assignment configuration already exists for the capacity reservation, replaces the existing capacity assignment configuration.',
  operationId: 'PutCapacityAssignmentConfiguration',
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
        .literal('AmazonAthena.PutCapacityAssignmentConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.PutCapacityAssignmentConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutCapacityAssignmentConfigurationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutCapacityAssignmentConfigurationOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaStartCalculationExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.StartCalculationExecution',
  description:
    'Submits calculations for execution within a session. You can supply the code to run as an inline code block within the request.',
  operationId: 'StartCalculationExecution',
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
        .literal('AmazonAthena.StartCalculationExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.StartCalculationExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartCalculationExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartCalculationExecutionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaStartQueryExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.StartQueryExecution',
  description:
    'Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires <a>GetDataCatalog</a> permission to the catalog. For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.',
  operationId: 'StartQueryExecution',
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
        .literal('AmazonAthena.StartQueryExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.StartQueryExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartQueryExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartQueryExecutionOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaStartSessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.StartSession',
  description:
    'Creates a session for running calculations within a workgroup. The session is ready when it reaches an <code>IDLE</code> state.',
  operationId: 'StartSession',
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
        .literal('AmazonAthena.StartSession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.StartSession'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartSessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartSessionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'SessionAlreadyExistsException',
      content: { 'application/json': { schema: SessionAlreadyExistsExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaStopCalculationExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.StopCalculationExecution',
  description:
    '<p>Requests the cancellation of a calculation. A <code>StopCalculationExecution</code> call on a calculation that is already in a terminal state (for example, <code>STOPPED</code>, <code>FAILED</code>, or <code>COMPLETED</code>) succeeds but has no effect.</p> <note> <p>Cancelling a calculation is done on a best effort basis. If a calculation cannot be cancelled, you can be charged for its completion. If you are concerned about being charged for a calculation that cannot be cancelled, consider terminating the session in which the calculation is running.</p> </note>',
  operationId: 'StopCalculationExecution',
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
        .literal('AmazonAthena.StopCalculationExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.StopCalculationExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopCalculationExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopCalculationExecutionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaStopQueryExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.StopQueryExecution',
  description:
    '<p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>',
  operationId: 'StopQueryExecution',
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
        .literal('AmazonAthena.StopQueryExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.StopQueryExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopQueryExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopQueryExecutionOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.TagResource',
  description:
    'Adds one or more tags to an Athena resource. A tag is a label that you assign to a resource. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups, data catalogs, or capacity reservations by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter the resources in your account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.',
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
        .literal('AmazonAthena.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaTerminateSessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.TerminateSession',
  description:
    'Terminates an active session. A <code>TerminateSession</code> call on a session that is already inactive (for example, in a <code>FAILED</code>, <code>TERMINATED</code> or <code>TERMINATING</code> state) succeeds but has no effect. Calculations running in the session when <code>TerminateSession</code> is called are forcefully stopped, but may display as <code>FAILED</code> instead of <code>STOPPED</code>.',
  operationId: 'TerminateSession',
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
        .literal('AmazonAthena.TerminateSession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.TerminateSession'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TerminateSessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TerminateSessionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.UntagResource',
  description: 'Removes one or more tags from an Athena resource.',
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
        .literal('AmazonAthena.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.UntagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UntagResourceInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaUpdateCapacityReservationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.UpdateCapacityReservation',
  description:
    'Updates the number of requested data processing units for the capacity reservation with the specified name.',
  operationId: 'UpdateCapacityReservation',
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
        .literal('AmazonAthena.UpdateCapacityReservation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.UpdateCapacityReservation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateCapacityReservationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateCapacityReservationOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaUpdateDataCatalogRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.UpdateDataCatalog',
  description: 'Updates the data catalog that has the specified name.',
  operationId: 'UpdateDataCatalog',
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
        .literal('AmazonAthena.UpdateDataCatalog')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.UpdateDataCatalog'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDataCatalogInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDataCatalogOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaUpdateNamedQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.UpdateNamedQuery',
  description: 'Updates a <a>NamedQuery</a> object. The database or workgroup cannot be updated.',
  operationId: 'UpdateNamedQuery',
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
        .literal('AmazonAthena.UpdateNamedQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.UpdateNamedQuery'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateNamedQueryInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateNamedQueryOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaUpdateNotebookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.UpdateNotebook',
  description: 'Updates the contents of a Spark notebook.',
  operationId: 'UpdateNotebook',
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
        .literal('AmazonAthena.UpdateNotebook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.UpdateNotebook'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateNotebookInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateNotebookOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaUpdateNotebookMetadataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata',
  description: 'Updates the metadata for a notebook.',
  operationId: 'UpdateNotebookMetadata',
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
        .literal('AmazonAthena.UpdateNotebookMetadata')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.UpdateNotebookMetadata'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateNotebookMetadataInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateNotebookMetadataOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaUpdatePreparedStatementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.UpdatePreparedStatement',
  description: 'Updates a prepared statement.',
  operationId: 'UpdatePreparedStatement',
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
        .literal('AmazonAthena.UpdatePreparedStatement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.UpdatePreparedStatement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePreparedStatementInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePreparedStatementOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonAthenaUpdateWorkGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonAthena.UpdateWorkGroup',
  description:
    "Updates the workgroup with the specified name. The workgroup's name cannot be changed. Only <code>ConfigurationUpdates</code> can be specified.",
  operationId: 'UpdateWorkGroup',
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
        .literal('AmazonAthena.UpdateWorkGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonAthena.UpdateWorkGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateWorkGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateWorkGroupOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})
