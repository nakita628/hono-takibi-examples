import { createRoute, z } from '@hono/zod-openapi'

const CatalogResourceSchema = z
  .object({})
  .openapi({ description: 'A structure for the catalog object.' })
  .openapi('CatalogResource')

const CatalogIdStringSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('CatalogIdString')

const NameStringSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('NameString')

const DatabaseResourceSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, it is the account ID of the caller.',
        }),
    ).exactOptional(),
    Name: NameStringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the database resource. Unique to the Data Catalog.' }),
    ),
  })
  .openapi({ required: ['Name'], description: 'A structure for the database object.' })
  .openapi('DatabaseResource')

const TableWildcardSchema = z
  .object({})
  .openapi({ description: 'A wildcard object representing every table under a database.' })
  .openapi('TableWildcard')

const TableResourceSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, it is the account ID of the caller.',
        }),
    ).exactOptional(),
    DatabaseName: NameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the database for the table. Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal. ',
        }),
    ),
    Name: NameStringSchema.and(
      z.any().openapi({ description: 'The name of the table.' }),
    ).exactOptional(),
    TableWildcard: TableWildcardSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A wildcard object representing every table under a database.</p> <p>At least one of <code>TableResource$Name</code> or <code>TableResource$TableWildcard</code> is required.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DatabaseName'],
    description:
      'A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. ',
  })
  .openapi('TableResource')

const ColumnNamesSchema = z.array(NameStringSchema).openapi('ColumnNames')

const ColumnWildcardSchema = z
  .object({
    ExcludedColumnNames: ColumnNamesSchema.and(
      z
        .any()
        .openapi({
          description: 'Excludes column names. Any column with this name will be excluded.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A wildcard object, consisting of an optional list of excluded column names or indexes.',
    required: [],
  })
  .openapi('ColumnWildcard')

const TableWithColumnsResourceSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, it is the account ID of the caller.',
        }),
    ).exactOptional(),
    DatabaseName: NameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the database for the table with columns resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal. ',
        }),
    ),
    Name: NameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the table resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. ',
        }),
    ),
    ColumnNames: ColumnNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of column names for the table. At least one of <code>ColumnNames</code> or <code>ColumnWildcard</code> is required.',
        }),
    ).exactOptional(),
    ColumnWildcard: ColumnWildcardSchema.and(
      z
        .any()
        .openapi({
          description:
            'A wildcard specified by a <code>ColumnWildcard</code> object. At least one of <code>ColumnNames</code> or <code>ColumnWildcard</code> is required.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DatabaseName', 'Name'],
    description:
      '<p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p>',
  })
  .openapi('TableWithColumnsResource')

const ResourceArnStringSchema = z.string().openapi('ResourceArnString')

const DataLocationResourceSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog where the location is registered with Lake Formation. By default, it is the account ID of the caller.',
        }),
    ).exactOptional(),
    ResourceArn: ResourceArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that uniquely identifies the data location resource.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceArn'],
    description:
      'A structure for a data location object where permissions are granted or revoked. ',
  })
  .openapi('DataLocationResource')

const DataCellsFilterResourceSchema = z
  .object({
    TableCatalogId: CatalogIdStringSchema.and(
      z.any().openapi({ description: 'The ID of the catalog to which the table belongs.' }),
    ).exactOptional(),
    DatabaseName: NameStringSchema.and(
      z.any().openapi({ description: 'A database in the Glue Data Catalog.' }),
    ).exactOptional(),
    TableName: NameStringSchema.and(
      z.any().openapi({ description: 'The name of the table.' }),
    ).exactOptional(),
    Name: NameStringSchema.and(
      z.any().openapi({ description: 'The name of the data cells filter. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A structure for a data cells filter resource. ', required: [] })
  .openapi('DataCellsFilterResource')

const LFTagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\*\/=+\-@%]*)$/u)
  .min(0)
  .max(256)
  .openapi('LFTagValue')

const TagValueListSchema = z.array(LFTagValueSchema).min(1).max(50).openapi('TagValueList')

const LFTagKeyResourceSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    TagKey: NameStringSchema.and(z.any().openapi({ description: 'The key-name for the LF-tag.' })),
    TagValues: TagValueListSchema.and(
      z.any().openapi({ description: 'A list of possible values an attribute can take.' }),
    ),
  })
  .openapi({
    required: ['TagKey', 'TagValues'],
    description: 'A structure containing an LF-tag key and values for a resource.',
  })
  .openapi('LFTagKeyResource')

const ResourceTypeSchema = z.enum(['DATABASE', 'TABLE']).openapi('ResourceType')

const LFTagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@%]*)$/u)
  .min(1)
  .max(128)
  .openapi('LFTagKey')

const LFTagSchema = z
  .object({
    TagKey: LFTagKeySchema.and(z.any().openapi({ description: 'The key-name for the LF-tag.' })),
    TagValues: TagValueListSchema.and(
      z.any().openapi({ description: 'A list of possible values an attribute can take.' }),
    ),
  })
  .openapi({
    required: ['TagKey', 'TagValues'],
    description:
      "A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns that do not have the LF-tag 'PII' in tables that have the LF-tag 'Prod'.",
  })
  .openapi('LFTag')

const ExpressionSchema = z.array(LFTagSchema).openapi('Expression')

const LFTagPolicyResourceSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The resource type for which the LF-tag policy applies.' }),
    ),
    Expression: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description: "A list of LF-tag conditions that apply to the resource's LF-tag policy.",
        }),
    ),
  })
  .openapi({
    required: ['ResourceType', 'Expression'],
    description:
      "A structure containing a list of LF-tag conditions that apply to a resource's LF-tag policy.",
  })
  .openapi('LFTagPolicyResource')

type ResourceType = {
  Catalog?: z.infer<typeof CatalogResourceSchema> & { [key: string]: unknown }
  Database?: z.infer<typeof DatabaseResourceSchema> & { [key: string]: unknown }
  Table?: z.infer<typeof TableResourceSchema> & { [key: string]: unknown }
  TableWithColumns?: z.infer<typeof TableWithColumnsResourceSchema> & { [key: string]: unknown }
  DataLocation?: z.infer<typeof DataLocationResourceSchema> & { [key: string]: unknown }
  DataCellsFilter?: z.infer<typeof DataCellsFilterResourceSchema> & { [key: string]: unknown }
  LFTag?: z.infer<typeof LFTagKeyResourceSchema> & { [key: string]: unknown }
  LFTagPolicy?: z.infer<typeof LFTagPolicyResourceSchema> & { [key: string]: unknown }
}

const LFTagPairSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    TagKey: LFTagKeySchema.and(z.any().openapi({ description: 'The key-name for the LF-tag.' })),
    TagValues: TagValueListSchema.and(
      z.any().openapi({ description: 'A list of possible values an attribute can take.' }),
    ),
  })
  .openapi({
    required: ['TagKey', 'TagValues'],
    description: 'A structure containing an LF-tag key-value pair.',
  })
  .openapi('LFTagPair')

const DescriptionStringSchema = z
  .string()
  .min(0)
  .max(2048)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('DescriptionString')

const ErrorDetailSchema = z
  .object({
    ErrorCode: NameStringSchema.and(
      z.any().openapi({ description: 'The code associated with this error.' }),
    ).exactOptional(),
    ErrorMessage: DescriptionStringSchema.and(
      z.any().openapi({ description: 'A message describing the error.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains details about an error.', required: [] })
  .openapi('ErrorDetail')

const LFTagErrorSchema = z
  .object({
    LFTag: LFTagPairSchema.and(
      z.any().openapi({ description: 'The key-name of the LF-tag.' }),
    ).exactOptional(),
    Error: ErrorDetailSchema.and(
      z
        .any()
        .openapi({
          description: 'An error that occurred with the attachment or detachment of the LF-tag.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A structure containing an error related to a <code>TagResource</code> or <code>UnTagResource</code> operation.',
    required: [],
  })
  .openapi('LFTagError')

const LFTagErrorsSchema = z.array(LFTagErrorSchema).openapi('LFTagErrors')

const AddLFTagsToResourceResponseSchema = z
  .object({
    Failures: LFTagErrorsSchema.and(
      z.any().openapi({ description: 'A list of failures to tag the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddLFTagsToResourceResponse')

const EntityNotFoundExceptionSchema = z.any().openapi('EntityNotFoundException')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const InternalServiceExceptionSchema = z.any().openapi('InternalServiceException')

const OperationTimeoutExceptionSchema = z.any().openapi('OperationTimeoutException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const AccessKeyIdStringSchema = z.string().openapi('AccessKeyIdString')

const SecretAccessKeyStringSchema = z.string().openapi('SecretAccessKeyString')

const SessionTokenStringSchema = z.string().openapi('SessionTokenString')

const ExpirationTimestampSchema = z.iso.datetime({ offset: true }).openapi('ExpirationTimestamp')

const AssumeDecoratedRoleWithSAMLResponseSchema = z
  .object({
    AccessKeyId: AccessKeyIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The access key ID for the temporary credentials. (The access key consists of an access key ID and a secret key).',
        }),
    ).exactOptional(),
    SecretAccessKey: SecretAccessKeyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secret key for the temporary credentials. (The access key consists of an access key ID and a secret key).',
        }),
    ).exactOptional(),
    SessionToken: SessionTokenStringSchema.and(
      z.any().openapi({ description: 'The session token for the temporary credentials.' }),
    ).exactOptional(),
    Expiration: ExpirationTimestampSchema.and(
      z.any().openapi({ description: 'The date and time when the temporary credentials expire.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssumeDecoratedRoleWithSAMLResponse')

const IdentifierSchema = z.string().min(1).max(255).openapi('Identifier')

const DataLakePrincipalStringSchema = z.string().min(1).max(255).openapi('DataLakePrincipalString')

const DataLakePrincipalSchema = z
  .object({
    DataLakePrincipalIdentifier: DataLakePrincipalStringSchema.and(
      z.any().openapi({ description: 'An identifier for the Lake Formation principal.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The Lake Formation principal. Supported principals are IAM users or IAM roles.',
    required: [],
  })
  .openapi('DataLakePrincipal')

const ResourceSchema: z.ZodType<ResourceType> = z
  .lazy(() =>
    z
      .object({
        Catalog: CatalogResourceSchema.and(
          z
            .any()
            .openapi({
              description:
                'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
            }),
        ).exactOptional(),
        Database: DatabaseResourceSchema.and(
          z
            .any()
            .openapi({
              description:
                'The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal. ',
            }),
        ).exactOptional(),
        Table: TableResourceSchema.and(
          z
            .any()
            .openapi({
              description:
                'The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. ',
            }),
        ).exactOptional(),
        TableWithColumns: TableWithColumnsResourceSchema.and(
          z
            .any()
            .openapi({
              description:
                'The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.',
            }),
        ).exactOptional(),
        DataLocation: DataLocationResourceSchema.and(
          z
            .any()
            .openapi({
              description:
                'The location of an Amazon S3 path where permissions are granted or revoked. ',
            }),
        ).exactOptional(),
        DataCellsFilter: DataCellsFilterResourceSchema.and(
          z.any().openapi({ description: 'A data cell filter.' }),
        ).exactOptional(),
        LFTag: LFTagKeyResourceSchema.and(
          z.any().openapi({ description: 'The LF-tag key and values attached to a resource.' }),
        ).exactOptional(),
        LFTagPolicy: LFTagPolicyResourceSchema.and(
          z
            .any()
            .openapi({
              description: "A list of LF-tag conditions that define a resource's LF-tag policy.",
            }),
        ).exactOptional(),
      })
      .openapi({ description: 'A structure for the resource.', required: [] }),
  )
  .openapi('Resource')

const PermissionSchema = z
  .enum([
    'ALL',
    'SELECT',
    'ALTER',
    'DROP',
    'DELETE',
    'INSERT',
    'DESCRIBE',
    'CREATE_DATABASE',
    'CREATE_TABLE',
    'DATA_LOCATION_ACCESS',
    'CREATE_TAG',
    'ASSOCIATE',
  ])
  .openapi('Permission')

const PermissionListSchema = z.array(PermissionSchema).openapi('PermissionList')

const BatchPermissionsRequestEntrySchema = z
  .object({
    Id: IdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the batch permissions request entry.' }),
    ),
    Principal: DataLakePrincipalSchema.and(
      z.any().openapi({ description: 'The principal to be granted a permission.' }),
    ).exactOptional(),
    Resource: ResourceSchema.and(
      z
        .any()
        .openapi({
          description: 'The resource to which the principal is to be granted a permission.',
        }),
    ).exactOptional(),
    Permissions: PermissionListSchema.and(
      z.any().openapi({ description: 'The permissions to be granted.' }),
    ).exactOptional(),
    PermissionsWithGrantOption: PermissionListSchema.and(
      z.any().openapi({ description: 'Indicates if the option to pass permissions is granted.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id'],
    description: 'A permission to a resource granted by batch operation to the principal.',
  })
  .openapi('BatchPermissionsRequestEntry')

const BatchPermissionsFailureEntrySchema = z
  .object({
    RequestEntry: BatchPermissionsRequestEntrySchema.and(
      z.any().openapi({ description: 'An identifier for an entry of the batch request.' }),
    ).exactOptional(),
    Error: ErrorDetailSchema.and(
      z
        .any()
        .openapi({ description: 'An error message that applies to the failure of the entry.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A list of failures when performing a batch grant or batch revoke operation.',
    required: [],
  })
  .openapi('BatchPermissionsFailureEntry')

const BatchPermissionsFailureListSchema = z
  .array(BatchPermissionsFailureEntrySchema)
  .openapi('BatchPermissionsFailureList')

const BatchGrantPermissionsResponseSchema = z
  .object({
    Failures: BatchPermissionsFailureListSchema.and(
      z.any().openapi({ description: 'A list of failures to grant permissions to the resources.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGrantPermissionsResponse')

const BatchRevokePermissionsResponseSchema = z
  .object({
    Failures: BatchPermissionsFailureListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of failures to revoke permissions to the resources.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchRevokePermissionsResponse')

const CancelTransactionResponseSchema = z.object({}).openapi('CancelTransactionResponse')

const TransactionCommittedExceptionSchema = z.any().openapi('TransactionCommittedException')

const TransactionCommitInProgressExceptionSchema = z
  .any()
  .openapi('TransactionCommitInProgressException')

const TransactionStatusSchema = z
  .enum(['ACTIVE', 'COMMITTED', 'ABORTED', 'COMMIT_IN_PROGRESS'])
  .openapi('TransactionStatus')

const CommitTransactionResponseSchema = z
  .object({
    TransactionStatus: TransactionStatusSchema.and(
      z.any().openapi({ description: 'The status of the transaction.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CommitTransactionResponse')

const TransactionCanceledExceptionSchema = z.any().openapi('TransactionCanceledException')

const CreateDataCellsFilterResponseSchema = z.object({}).openapi('CreateDataCellsFilterResponse')

const PredicateStringSchema = z
  .string()
  .min(0)
  .max(2048)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('PredicateString')

const AllRowsWildcardSchema = z
  .object({})
  .openapi({ description: 'A structure that you pass to indicate you want all rows in a filter. ' })
  .openapi('AllRowsWildcard')

const RowFilterSchema = z
  .object({
    FilterExpression: PredicateStringSchema.and(
      z.any().openapi({ description: 'A filter expression.' }),
    ).exactOptional(),
    AllRowsWildcard: AllRowsWildcardSchema.and(
      z.any().openapi({ description: 'A wildcard for all rows.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A PartiQL predicate.', required: [] })
  .openapi('RowFilter')

const VersionStringSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('VersionString')

const AlreadyExistsExceptionSchema = z.any().openapi('AlreadyExistsException')

const ResourceNumberLimitExceededExceptionSchema = z
  .any()
  .openapi('ResourceNumberLimitExceededException')

const CreateLFTagResponseSchema = z.object({}).openapi('CreateLFTagResponse')

const DeleteDataCellsFilterResponseSchema = z.object({}).openapi('DeleteDataCellsFilterResponse')

const DeleteLFTagResponseSchema = z.object({}).openapi('DeleteLFTagResponse')

const DeleteObjectsOnCancelResponseSchema = z.object({}).openapi('DeleteObjectsOnCancelResponse')

const URISchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('URI')

const ETagStringSchema = z
  .string()
  .regex(/[\p{L}\p{N}\p{P}]*/u)
  .min(1)
  .max(255)
  .openapi('ETagString')

const VirtualObjectSchema = z
  .object({
    Uri: URISchema.and(
      z.any().openapi({ description: 'The path to the Amazon S3 object. Must start with s3://' }),
    ),
    ETag: ETagStringSchema.and(
      z.any().openapi({ description: 'The ETag of the Amazon S3 object.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Uri'],
    description:
      'An object that defines an Amazon S3 object to be deleted if a transaction cancels, provided that <code>VirtualPut</code> was called before writing the object.',
  })
  .openapi('VirtualObject')

const ResourceNotReadyExceptionSchema = z.any().openapi('ResourceNotReadyException')

const DeregisterResourceResponseSchema = z.object({}).openapi('DeregisterResourceResponse')

const IAMRoleArnSchema = z
  .string()
  .regex(/arn:aws:iam::[0-9]*:role\/.*/)
  .openapi('IAMRoleArn')

const LastModifiedTimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi('LastModifiedTimestamp')

const NullableBooleanSchema = z.boolean().openapi('NullableBoolean')

const ResourceInfoSchema = z
  .object({
    ResourceArn: ResourceArnStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ).exactOptional(),
    RoleArn: IAMRoleArnSchema.and(
      z.any().openapi({ description: 'The IAM role that registered a resource.' }),
    ).exactOptional(),
    LastModified: LastModifiedTimestampSchema.and(
      z.any().openapi({ description: 'The date and time the resource was last modified.' }),
    ).exactOptional(),
    WithFederation: NullableBooleanSchema.and(
      z.any().openapi({ description: 'Whether or not the resource is a federated resource.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure containing information about an Lake Formation resource.',
    required: [],
  })
  .openapi('ResourceInfo')

const DescribeResourceResponseSchema = z
  .object({
    ResourceInfo: ResourceInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'A structure containing information about an Lake Formation resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeResourceResponse')

const TransactionIdStringSchema = z
  .string()
  .regex(/[\p{L}\p{N}\p{P}]*/u)
  .min(1)
  .max(255)
  .openapi('TransactionIdString')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const TransactionDescriptionSchema = z
  .object({
    TransactionId: TransactionIdStringSchema.and(
      z.any().openapi({ description: 'The ID of the transaction.' }),
    ).exactOptional(),
    TransactionStatus: TransactionStatusSchema.and(
      z.any().openapi({ description: 'A status of ACTIVE, COMMITTED, or ABORTED.' }),
    ).exactOptional(),
    TransactionStartTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the transaction started.' }),
    ).exactOptional(),
    TransactionEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when the transaction committed or aborted, if it is not currently active.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that contains information about a transaction.',
    required: [],
  })
  .openapi('TransactionDescription')

const DescribeTransactionResponseSchema = z
  .object({
    TransactionDescription: TransactionDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a <code>TransactionDescription</code> object containing information about the transaction.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeTransactionResponse')

const ExtendTransactionResponseSchema = z.object({}).openapi('ExtendTransactionResponse')

const DataCellsFilterSchema = z
  .object({
    TableCatalogId: CatalogIdStringSchema.and(
      z.any().openapi({ description: 'The ID of the catalog to which the table belongs.' }),
    ),
    DatabaseName: NameStringSchema.and(
      z.any().openapi({ description: 'A database in the Glue Data Catalog.' }),
    ),
    TableName: NameStringSchema.and(z.any().openapi({ description: 'A table in the database.' })),
    Name: NameStringSchema.and(
      z.any().openapi({ description: 'The name given by the user to the data filter cell.' }),
    ),
    RowFilter: RowFilterSchema.and(
      z.any().openapi({ description: 'A PartiQL predicate.' }),
    ).exactOptional(),
    ColumnNames: ColumnNamesSchema.and(
      z.any().openapi({ description: 'A list of column names.' }),
    ).exactOptional(),
    ColumnWildcard: ColumnWildcardSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A wildcard with exclusions.</p> <p>You must specify either a <code>ColumnNames</code> list or the <code>ColumnWildCard</code>. </p>',
        }),
    ).exactOptional(),
    VersionId: VersionStringSchema.and(
      z.any().openapi({ description: 'The ID of the data cells filter version.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TableCatalogId', 'DatabaseName', 'TableName', 'Name'],
    description: 'A structure that describes certain columns on certain rows.',
  })
  .openapi('DataCellsFilter')

const GetDataCellsFilterResponseSchema = z
  .object({
    DataCellsFilter: DataCellsFilterSchema.and(
      z
        .any()
        .openapi({ description: 'A structure that describes certain columns on certain rows.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDataCellsFilterResponse')

const DataLakePrincipalListSchema = z
  .array(DataLakePrincipalSchema)
  .min(0)
  .max(30)
  .openapi('DataLakePrincipalList')

const PrincipalPermissionsSchema = z
  .object({
    Principal: DataLakePrincipalSchema.and(
      z.any().openapi({ description: 'The principal who is granted permissions.' }),
    ).exactOptional(),
    Permissions: PermissionListSchema.and(
      z.any().openapi({ description: 'The permissions that are granted to the principal.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Permissions granted to a principal.', required: [] })
  .openapi('PrincipalPermissions')

const PrincipalPermissionsListSchema = z
  .array(PrincipalPermissionsSchema)
  .openapi('PrincipalPermissionsList')

const ParametersMapValueSchema = z.string().max(512000).openapi('ParametersMapValue')

const ParametersMapSchema = z.record(z.string(), ParametersMapValueSchema).openapi('ParametersMap')

const TrustedResourceOwnersSchema = z.array(CatalogIdStringSchema).openapi('TrustedResourceOwners')

const AuthorizedSessionTagValueListSchema = z
  .array(NameStringSchema)
  .openapi('AuthorizedSessionTagValueList')

const DataLakeSettingsSchema = z
  .object({
    DataLakeAdmins: DataLakePrincipalListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Lake Formation principals. Supported principals are IAM users or IAM roles.',
        }),
    ).exactOptional(),
    CreateDatabaseDefaultPermissions: PrincipalPermissionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether access control on newly created database is managed by Lake Formation permissions or exclusively by IAM permissions.</p> <p>A null value indicates access control by Lake Formation permissions. A value that assigns ALL to IAM_ALLOWED_PRINCIPALS indicates access control by IAM permissions. This is referred to as the setting "Use only IAM access control," and is for backward compatibility with the Glue permission model implemented by IAM permissions.</p> <p>The only permitted values are an empty array or an array that contains a single JSON object that grants ALL to IAM_ALLOWED_PRINCIPALS.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html">Changing the Default Security Settings for Your Data Lake</a>.</p>',
        }),
    ).exactOptional(),
    CreateTableDefaultPermissions: PrincipalPermissionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether access control on newly created table is managed by Lake Formation permissions or exclusively by IAM permissions.</p> <p>A null value indicates access control by Lake Formation permissions. A value that assigns ALL to IAM_ALLOWED_PRINCIPALS indicates access control by IAM permissions. This is referred to as the setting "Use only IAM access control," and is for backward compatibility with the Glue permission model implemented by IAM permissions.</p> <p>The only permitted values are an empty array or an array that contains a single JSON object that grants ALL to IAM_ALLOWED_PRINCIPALS.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html">Changing the Default Security Settings for Your Data Lake</a>.</p>',
        }),
    ).exactOptional(),
    Parameters: ParametersMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A key-value map that provides an additional configuration on your data lake. CrossAccountVersion is the key you can configure in the Parameters field. Accepted values for the CrossAccountVersion key are 1, 2, and 3.',
        }),
    ).exactOptional(),
    TrustedResourceOwners: TrustedResourceOwnersSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of the resource-owning account IDs that the caller's account can use to share their user access details (user ARNs). The user ARNs can be logged in the resource owner's CloudTrail log.</p> <p>You may want to specify this property when you are in a high-trust boundary, such as the same team or company. </p>",
        }),
    ).exactOptional(),
    AllowExternalDataFiltering: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether to allow Amazon EMR clusters to access data managed by Lake Formation. </p> <p>If true, you allow Amazon EMR clusters to access data in Amazon S3 locations that are registered with Lake Formation.</p> <p>If false or null, no Amazon EMR clusters will be able to access data in Amazon S3 locations that are registered with Lake Formation.</p> <p>For more information, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/getting-started-setup.html#emr-switch">(Optional) Allow Data Filtering on Amazon EMR</a>.</p>',
        }),
    ).exactOptional(),
    ExternalDataFilteringAllowList: DataLakePrincipalListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the account IDs of Amazon Web Services accounts with Amazon EMR clusters that are to perform data filtering.&gt;',
        }),
    ).exactOptional(),
    AuthorizedSessionTagValueList: AuthorizedSessionTagValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lake Formation relies on a privileged process secured by Amazon EMR or the third party integrator to tag the user\'s role while assuming it. Lake Formation will publish the acceptable key-value pair, for example key = "LakeFormationTrustedCaller" and value = "TRUE" and the third party integrator must properly tag the temporary security credentials that will be used to call Lake Formation\'s administrative APIs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A structure representing a list of Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.',
    required: [],
  })
  .openapi('DataLakeSettings')

const GetDataLakeSettingsResponseSchema = z
  .object({
    DataLakeSettings: DataLakeSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure representing a list of Lake Formation principals designated as data lake administrators.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDataLakeSettingsResponse')

const RAMResourceShareArnSchema = z.string().openapi('RAMResourceShareArn')

const ResourceShareListSchema = z.array(RAMResourceShareArnSchema).openapi('ResourceShareList')

const DetailsMapSchema = z
  .object({
    ResourceShare: ResourceShareListSchema.and(
      z
        .any()
        .openapi({
          description: 'A resource share ARN for a catalog resource shared through RAM.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A structure containing the additional details to be returned in the <code>AdditionalDetails</code> attribute of <code>PrincipalResourcePermissions</code>.</p> <p>If a catalog resource is shared through Resource Access Manager (RAM), then there will exist a corresponding RAM resource share ARN.</p>',
    required: [],
  })
  .openapi('DetailsMap')

const PrincipalResourcePermissionsSchema = z
  .object({
    Principal: DataLakePrincipalSchema.and(
      z
        .any()
        .openapi({ description: 'The Data Lake principal to be granted or revoked permissions.' }),
    ).exactOptional(),
    Resource: ResourceSchema.and(
      z
        .any()
        .openapi({ description: 'The resource where permissions are to be granted or revoked.' }),
    ).exactOptional(),
    Permissions: PermissionListSchema.and(
      z.any().openapi({ description: 'The permissions to be granted or revoked on the resource.' }),
    ).exactOptional(),
    PermissionsWithGrantOption: PermissionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to grant the ability to grant permissions (as a subset of permissions granted).',
        }),
    ).exactOptional(),
    AdditionalDetails: DetailsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'This attribute can be used to return any additional details of <code>PrincipalResourcePermissions</code>. Currently returns only as a RAM resource share ARN.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The permissions granted or revoked on a resource.', required: [] })
  .openapi('PrincipalResourcePermissions')

const PrincipalResourcePermissionsListSchema = z
  .array(PrincipalResourcePermissionsSchema)
  .openapi('PrincipalResourcePermissionsList')

const TokenSchema = z.string().openapi('Token')

const GetEffectivePermissionsForPathResponseSchema = z
  .object({
    Permissions: PrincipalResourcePermissionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the permissions for the specified table or database resource located at the path in Amazon S3.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A continuation token, if this is not the first call to retrieve this list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEffectivePermissionsForPathResponse')

const GetLFTagResponseSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    TagKey: LFTagKeySchema.and(
      z.any().openapi({ description: 'The key-name for the LF-tag.' }),
    ).exactOptional(),
    TagValues: TagValueListSchema.and(
      z.any().openapi({ description: 'A list of possible values an attribute can take.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLFTagResponse')

const ErrorMessageStringSchema = z.string().openapi('ErrorMessageString')

const QueryStateStringSchema = z
  .enum(['PENDING', 'WORKUNITS_AVAILABLE', 'ERROR', 'FINISHED', 'EXPIRED'])
  .openapi('QueryStateString')

const GetQueryStateResponseSchema = z
  .object({
    Error: ErrorMessageStringSchema.and(
      z.any().openapi({ description: 'An error message when the operation fails.' }),
    ).exactOptional(),
    State: QueryStateStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of a query previously submitted. The possible states are:</p> <ul> <li> <p>PENDING: the query is pending.</p> </li> <li> <p>WORKUNITS_AVAILABLE: some work units are ready for retrieval and execution.</p> </li> <li> <p>FINISHED: the query planning finished successfully, and all work units are ready for retrieval and execution.</p> </li> <li> <p>ERROR: an error occurred with the query, such as an invalid query ID or a backend error.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['State'], description: 'A structure for the output.' })
  .openapi('GetQueryStateResponse')

const NumberOfMillisecondsSchema = z.int().openapi('NumberOfMilliseconds')

const NumberOfBytesSchema = z.int().openapi('NumberOfBytes')

const NumberOfItemsSchema = z.int().openapi('NumberOfItems')

const ExecutionStatisticsSchema = z
  .object({
    AverageExecutionTimeMillis: NumberOfMillisecondsSchema.and(
      z.any().openapi({ description: 'The average time the request took to be executed.' }),
    ).exactOptional(),
    DataScannedBytes: NumberOfBytesSchema.and(
      z.any().openapi({ description: 'The amount of data that was scanned in bytes.' }),
    ).exactOptional(),
    WorkUnitsExecutedCount: NumberOfItemsSchema.and(
      z.any().openapi({ description: 'The number of work units executed.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Statistics related to the processing of a query statement.',
    required: [],
  })
  .openapi('ExecutionStatistics')

const PlanningStatisticsSchema = z
  .object({
    EstimatedDataToScanBytes: NumberOfBytesSchema.and(
      z.any().openapi({ description: 'An estimate of the data that was scanned in bytes.' }),
    ).exactOptional(),
    PlanningTimeMillis: NumberOfMillisecondsSchema.and(
      z.any().openapi({ description: 'The time that it took to process the request.' }),
    ).exactOptional(),
    QueueTimeMillis: NumberOfMillisecondsSchema.and(
      z.any().openapi({ description: 'The time the request was in queue to be processed.' }),
    ).exactOptional(),
    WorkUnitsGeneratedCount: NumberOfItemsSchema.and(
      z.any().openapi({ description: 'The number of work units generated.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Statistics related to the processing of a query statement.',
    required: [],
  })
  .openapi('PlanningStatistics')

const DateTimeSchema = z.iso.datetime({ offset: true }).openapi('DateTime')

const GetQueryStatisticsResponseSchema = z
  .object({
    ExecutionStatistics: ExecutionStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <code>ExecutionStatistics</code> structure containing execution statistics.',
        }),
    ).exactOptional(),
    PlanningStatistics: PlanningStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>PlanningStatistics</code> structure containing query planning statistics.',
        }),
    ).exactOptional(),
    QuerySubmissionTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time that the query was submitted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetQueryStatisticsResponse')

const StatisticsNotReadyYetExceptionSchema = z.any().openapi('StatisticsNotReadyYetException')

const ExpiredExceptionSchema = z.any().openapi('ExpiredException')

const ThrottledExceptionSchema = z.any().openapi('ThrottledException')

const LFTagsListSchema = z.array(LFTagPairSchema).min(1).max(50).openapi('LFTagsList')

const ColumnLFTagSchema = z
  .object({
    Name: NameStringSchema.and(
      z.any().openapi({ description: 'The name of a column resource.' }),
    ).exactOptional(),
    LFTags: LFTagsListSchema.and(
      z.any().openapi({ description: 'The LF-tags attached to a column resource.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A structure containing the name of a column resource and the LF-tags attached to it.',
    required: [],
  })
  .openapi('ColumnLFTag')

const ColumnLFTagsListSchema = z.array(ColumnLFTagSchema).openapi('ColumnLFTagsList')

const GetResourceLFTagsResponseSchema = z
  .object({
    LFTagOnDatabase: LFTagsListSchema.and(
      z.any().openapi({ description: 'A list of LF-tags applied to a database resource.' }),
    ).exactOptional(),
    LFTagsOnTable: LFTagsListSchema.and(
      z.any().openapi({ description: 'A list of LF-tags applied to a table resource.' }),
    ).exactOptional(),
    LFTagsOnColumns: ColumnLFTagsListSchema.and(
      z.any().openapi({ description: 'A list of LF-tags applied to a column resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourceLFTagsResponse')

const GlueEncryptionExceptionSchema = z.any().openapi('GlueEncryptionException')

const PartitionValueStringSchema = z.string().max(1024).openapi('PartitionValueString')

const PartitionValuesListSchema = z
  .array(PartitionValueStringSchema)
  .min(1)
  .max(100)
  .openapi('PartitionValuesList')

const ObjectSizeSchema = z.int().openapi('ObjectSize')

const TableObjectSchema = z
  .object({
    Uri: URISchema.and(
      z.any().openapi({ description: 'The Amazon S3 location of the object.' }),
    ).exactOptional(),
    ETag: ETagStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 ETag of the object. Returned by <code>GetTableObjects</code> for validation and used to identify changes to the underlying data.',
        }),
    ).exactOptional(),
    Size: ObjectSizeSchema.and(
      z.any().openapi({ description: 'The size of the Amazon S3 object in bytes.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies the details of a governed table.', required: [] })
  .openapi('TableObject')

const TableObjectListSchema = z.array(TableObjectSchema).openapi('TableObjectList')

const PartitionObjectsSchema = z
  .object({
    PartitionValues: PartitionValuesListSchema.and(
      z.any().openapi({ description: 'A list of partition values.' }),
    ).exactOptional(),
    Objects: TableObjectListSchema.and(
      z.any().openapi({ description: 'A list of table objects' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure containing a list of partition values and table objects.',
    required: [],
  })
  .openapi('PartitionObjects')

const PartitionedTableObjectsListSchema = z
  .array(PartitionObjectsSchema)
  .openapi('PartitionedTableObjectsList')

const TokenStringSchema = z.string().max(4096).openapi('TokenString')

const GetTableObjectsResponseSchema = z
  .object({
    Objects: PartitionedTableObjectsListSchema.and(
      z.any().openapi({ description: 'A list of objects organized by partition keys.' }),
    ).exactOptional(),
    NextToken: TokenStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A continuation token indicating whether additional data is available.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTableObjectsResponse')

const GetTemporaryGluePartitionCredentialsResponseSchema = z
  .object({
    AccessKeyId: AccessKeyIdStringSchema.and(
      z.any().openapi({ description: 'The access key ID for the temporary credentials.' }),
    ).exactOptional(),
    SecretAccessKey: SecretAccessKeyStringSchema.and(
      z.any().openapi({ description: 'The secret key for the temporary credentials.' }),
    ).exactOptional(),
    SessionToken: SessionTokenStringSchema.and(
      z.any().openapi({ description: 'The session token for the temporary credentials.' }),
    ).exactOptional(),
    Expiration: ExpirationTimestampSchema.and(
      z.any().openapi({ description: 'The date and time when the temporary credentials expire.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTemporaryGluePartitionCredentialsResponse')

const ValueStringSchema = z.string().openapi('ValueString')

const ValueStringListSchema = z.array(ValueStringSchema).min(1).openapi('ValueStringList')

const AuditContextStringSchema = z
  .string()
  .min(0)
  .max(2048)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('AuditContextString')

const PermissionTypeSchema = z
  .enum(['COLUMN_PERMISSION', 'CELL_FILTER_PERMISSION'])
  .openapi('PermissionType')

const PermissionTypeMismatchExceptionSchema = z.any().openapi('PermissionTypeMismatchException')

const GetTemporaryGlueTableCredentialsResponseSchema = z
  .object({
    AccessKeyId: AccessKeyIdStringSchema.and(
      z.any().openapi({ description: 'The access key ID for the temporary credentials.' }),
    ).exactOptional(),
    SecretAccessKey: SecretAccessKeyStringSchema.and(
      z.any().openapi({ description: 'The secret key for the temporary credentials.' }),
    ).exactOptional(),
    SessionToken: SessionTokenStringSchema.and(
      z.any().openapi({ description: 'The session token for the temporary credentials.' }),
    ).exactOptional(),
    Expiration: ExpirationTimestampSchema.and(
      z.any().openapi({ description: 'The date and time when the temporary credentials expire.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTemporaryGlueTableCredentialsResponse')

const ResultStreamSchema = z.string().openapi('ResultStream')

const GetWorkUnitResultsResponseSchema = z
  .object({
    ResultStream: ResultStreamSchema.and(
      z
        .any()
        .openapi({
          description:
            'Rows returned from the <code>GetWorkUnitResults</code> operation as a stream of Apache Arrow v1.0 messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A structure for the output.', required: [] })
  .openapi('GetWorkUnitResultsResponse')

const QueryIdStringSchema = z.string().openapi('QueryIdString')

const WorkUnitIdLongSchema = z.int().openapi('WorkUnitIdLong')

const WorkUnitTokenStringSchema = z.string().openapi('WorkUnitTokenString')

const WorkUnitRangeSchema = z
  .object({
    WorkUnitIdMax: WorkUnitIdLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the maximum work unit ID in the range. The maximum value is inclusive.',
        }),
    ),
    WorkUnitIdMin: WorkUnitIdLongSchema.and(
      z.any().openapi({ description: 'Defines the minimum work unit ID in the range.' }),
    ),
    WorkUnitToken: WorkUnitTokenStringSchema.and(
      z.any().openapi({ description: 'A work token used to query the execution service.' }),
    ),
  })
  .openapi({
    required: ['WorkUnitIdMax', 'WorkUnitIdMin', 'WorkUnitToken'],
    description: 'Defines the valid range of work unit IDs for querying the execution service.',
  })
  .openapi('WorkUnitRange')

const WorkUnitRangeListSchema = z.array(WorkUnitRangeSchema).openapi('WorkUnitRangeList')

const GetWorkUnitsResponseSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.',
        }),
    ).exactOptional(),
    QueryId: QueryIdStringSchema.and(
      z.any().openapi({ description: 'The ID of the plan query operation.' }),
    ),
    WorkUnitRanges: WorkUnitRangeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>WorkUnitRangeList</code> object that specifies the valid range of work unit IDs for querying the execution service.',
        }),
    ),
  })
  .openapi({ required: ['QueryId', 'WorkUnitRanges'], description: 'A structure for the output.' })
  .openapi('GetWorkUnitsResponse')

const WorkUnitsNotReadyYetExceptionSchema = z.any().openapi('WorkUnitsNotReadyYetException')

const GrantPermissionsResponseSchema = z.object({}).openapi('GrantPermissionsResponse')

const DataCellsFilterListSchema = z.array(DataCellsFilterSchema).openapi('DataCellsFilterList')

const ListDataCellsFilterResponseSchema = z
  .object({
    DataCellsFilters: DataCellsFilterListSchema.and(
      z.any().openapi({ description: 'A list of <code>DataCellFilter</code> structures.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A continuation token, if not all requested data cell filters have been returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDataCellsFilterResponse')

const ListLFTagsResponseSchema = z
  .object({
    LFTags: LFTagsListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of LF-tags that the requested has permission to view.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A continuation token, present if the current list segment is not the last.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLFTagsResponse')

const ListPermissionsResponseSchema = z
  .object({
    PrincipalResourcePermissions: PrincipalResourcePermissionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of principals and their permissions on the resource for the specified principal and resource types.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A continuation token, if this is not the first call to retrieve this list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPermissionsResponse')

const ResourceInfoListSchema = z.array(ResourceInfoSchema).openapi('ResourceInfoList')

const ListResourcesResponseSchema = z
  .object({
    ResourceInfoList: ResourceInfoListSchema.and(
      z.any().openapi({ description: 'A summary of the data lake resources.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A continuation token, if this is not the first call to retrieve these resources.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourcesResponse')

const FieldNameStringSchema = z
  .enum(['RESOURCE_ARN', 'ROLE_ARN', 'LAST_MODIFIED'])
  .openapi('FieldNameString')

const ComparisonOperatorSchema = z
  .enum([
    'EQ',
    'NE',
    'LE',
    'LT',
    'GE',
    'GT',
    'CONTAINS',
    'NOT_CONTAINS',
    'BEGINS_WITH',
    'IN',
    'BETWEEN',
  ])
  .openapi('ComparisonOperator')

const StringValueSchema = z.string().openapi('StringValue')

const StringValueListSchema = z.array(StringValueSchema).openapi('StringValueList')

const FilterConditionSchema = z
  .object({
    Field: FieldNameStringSchema.and(
      z.any().openapi({ description: 'The field to filter in the filter condition.' }),
    ).exactOptional(),
    ComparisonOperator: ComparisonOperatorSchema.and(
      z.any().openapi({ description: 'The comparison operator used in the filter condition.' }),
    ).exactOptional(),
    StringValueList: StringValueListSchema.and(
      z
        .any()
        .openapi({ description: 'A string with values used in evaluating the filter condition.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This structure describes the filtering of columns in a table based on a filter condition.',
    required: [],
  })
  .openapi('FilterCondition')

const OptimizerTypeSchema = z
  .enum(['COMPACTION', 'GARBAGE_COLLECTION', 'ALL'])
  .openapi('OptimizerType')

const StorageOptimizerConfigValueSchema = z.string().openapi('StorageOptimizerConfigValue')

const StorageOptimizerConfigSchema = z
  .record(z.string(), StorageOptimizerConfigValueSchema)
  .openapi('StorageOptimizerConfig')

const MessageStringSchema = z.string().openapi('MessageString')

const StorageOptimizerSchema = z
  .object({
    StorageOptimizerType: OptimizerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The specific type of storage optimizer. The supported value is <code>compaction</code>.',
        }),
    ).exactOptional(),
    Config: StorageOptimizerConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of the storage optimizer configuration. Currently contains only one key-value pair: <code>is_enabled</code> indicates true or false for acceleration.',
        }),
    ).exactOptional(),
    ErrorMessage: MessageStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A message that contains information about any error (if present).</p> <p>When an acceleration result has an enabled status, the error message is empty.</p> <p>When an acceleration result has a disabled status, the message describes an error or simply indicates "disabled by the user".</p>',
        }),
    ).exactOptional(),
    Warnings: MessageStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A message that contains information about any warnings (if present).',
        }),
    ).exactOptional(),
    LastRunDetails: MessageStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'When an acceleration result has an enabled status, contains the details of the last job run.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure describing the configuration and details of a storage optimizer.',
    required: [],
  })
  .openapi('StorageOptimizer')

const StorageOptimizerListSchema = z.array(StorageOptimizerSchema).openapi('StorageOptimizerList')

const ListTableStorageOptimizersResponseSchema = z
  .object({
    StorageOptimizerList: StorageOptimizerListSchema.and(
      z.any().openapi({ description: 'A list of the storage optimizers associated with a table.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTableStorageOptimizersResponse')

const TransactionDescriptionListSchema = z
  .array(TransactionDescriptionSchema)
  .openapi('TransactionDescriptionList')

const ListTransactionsResponseSchema = z
  .object({
    Transactions: TransactionDescriptionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of transactions. The record for each transaction is a <code>TransactionDescription</code> object.',
        }),
    ).exactOptional(),
    NextToken: TokenStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A continuation token indicating whether additional data is available.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTransactionsResponse')

const PutDataLakeSettingsResponseSchema = z.object({}).openapi('PutDataLakeSettingsResponse')

const RegisterResourceResponseSchema = z.object({}).openapi('RegisterResourceResponse')

const RemoveLFTagsFromResourceResponseSchema = z
  .object({
    Failures: LFTagErrorsSchema.and(
      z.any().openapi({ description: 'A list of failures to untag a resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RemoveLFTagsFromResourceResponse')

const RevokePermissionsResponseSchema = z.object({}).openapi('RevokePermissionsResponse')

const TaggedDatabaseSchema = z
  .object({
    Database: DatabaseResourceSchema.and(
      z.any().openapi({ description: 'A database that has LF-tags attached to it.' }),
    ).exactOptional(),
    LFTags: LFTagsListSchema.and(
      z.any().openapi({ description: 'A list of LF-tags attached to the database.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure describing a database resource with LF-tags.',
    required: [],
  })
  .openapi('TaggedDatabase')

const DatabaseLFTagsListSchema = z.array(TaggedDatabaseSchema).openapi('DatabaseLFTagsList')

const SearchDatabasesByLFTagsResponseSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A continuation token, present if the current list segment is not the last.',
        }),
    ).exactOptional(),
    DatabaseList: DatabaseLFTagsListSchema.and(
      z.any().openapi({ description: 'A list of databases that meet the LF-tag conditions.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchDatabasesByLFTagsResponse')

const TaggedTableSchema = z
  .object({
    Table: TableResourceSchema.and(
      z.any().openapi({ description: 'A table that has LF-tags attached to it.' }),
    ).exactOptional(),
    LFTagOnDatabase: LFTagsListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of LF-tags attached to the database where the table resides.',
        }),
    ).exactOptional(),
    LFTagsOnTable: LFTagsListSchema.and(
      z.any().openapi({ description: 'A list of LF-tags attached to the table.' }),
    ).exactOptional(),
    LFTagsOnColumns: ColumnLFTagsListSchema.and(
      z.any().openapi({ description: 'A list of LF-tags attached to columns in the table.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A structure describing a table resource with LF-tags.', required: [] })
  .openapi('TaggedTable')

const TableLFTagsListSchema = z.array(TaggedTableSchema).openapi('TableLFTagsList')

const SearchTablesByLFTagsResponseSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A continuation token, present if the current list segment is not the last.',
        }),
    ).exactOptional(),
    TableList: TableLFTagsListSchema.and(
      z.any().openapi({ description: 'A list of tables that meet the LF-tag conditions.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchTablesByLFTagsResponse')

const StartQueryPlanningResponseSchema = z
  .object({
    QueryId: QueryIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the plan query operation can be used to fetch the actual work unit descriptors that are produced as the result of the operation. The ID is also used to get the query state and as an input to the <code>Execute</code> operation.',
        }),
    ),
  })
  .openapi({ required: ['QueryId'], description: 'A structure for the output.' })
  .openapi('StartQueryPlanningResponse')

const QueryPlanningContextDatabaseNameStringSchema = z
  .string()
  .min(1)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('QueryPlanningContextDatabaseNameString')

const StringSchema = z.string().openapi('String')

const QueryParameterMapSchema = z.record(z.string(), StringSchema).openapi('QueryParameterMap')

const StartTransactionResponseSchema = z
  .object({
    TransactionId: TransactionIdStringSchema.and(
      z.any().openapi({ description: 'An opaque identifier for the transaction.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartTransactionResponse')

const UpdateDataCellsFilterResponseSchema = z.object({}).openapi('UpdateDataCellsFilterResponse')

const UpdateLFTagResponseSchema = z.object({}).openapi('UpdateLFTagResponse')

const UpdateResourceResponseSchema = z.object({}).openapi('UpdateResourceResponse')

const UpdateTableObjectsResponseSchema = z.object({}).openapi('UpdateTableObjectsResponse')

const AddObjectInputSchema = z
  .object({
    Uri: URISchema.and(z.any().openapi({ description: 'The Amazon S3 location of the object.' })),
    ETag: ETagStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 ETag of the object. Returned by <code>GetTableObjects</code> for validation and used to identify changes to the underlying data.',
        }),
    ),
    Size: ObjectSizeSchema.and(
      z.any().openapi({ description: 'The size of the Amazon S3 object in bytes.' }),
    ),
    PartitionValues: PartitionValuesListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of partition values for the object. A value must be specified for each partition key associated with the table.</p> <p>The supported data types are integer, long, date(yyyy-MM-dd), timestamp(yyyy-MM-dd HH:mm:ssXXX or yyyy-MM-dd HH:mm:ss"), string and decimal.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Uri', 'ETag', 'Size'],
    description: 'A new object to add to the governed table.',
  })
  .openapi('AddObjectInput')

const DeleteObjectInputSchema = z
  .object({
    Uri: URISchema.and(
      z.any().openapi({ description: 'The Amazon S3 location of the object to delete.' }),
    ),
    ETag: ETagStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 ETag of the object. Returned by <code>GetTableObjects</code> for validation and used to identify changes to the underlying data.',
        }),
    ).exactOptional(),
    PartitionValues: PartitionValuesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of partition values for the object. A value must be specified for each partition key associated with the governed table.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Uri'], description: 'An object to delete from the governed table.' })
  .openapi('DeleteObjectInput')

const WriteOperationSchema = z
  .object({
    AddObject: AddObjectInputSchema.and(
      z.any().openapi({ description: 'A new object to add to the governed table.' }),
    ).exactOptional(),
    DeleteObject: DeleteObjectInputSchema.and(
      z.any().openapi({ description: 'An object to delete from the governed table.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Defines an object to add to or delete from a governed table.',
    required: [],
  })
  .openapi('WriteOperation')

const ResultSchema = z.string().openapi('Result')

const UpdateTableStorageOptimizerResponseSchema = z
  .object({
    Result: ResultSchema.and(
      z
        .any()
        .openapi({ description: 'A response indicating the success of failure of the operation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateTableStorageOptimizerResponse')

const AddLFTagsToResourceRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    Resource: ResourceSchema.and(
      z
        .any()
        .openapi({
          description: 'The database, table, or column resource to which to attach an LF-tag.',
        }),
    ),
    LFTags: LFTagsListSchema.and(
      z.any().openapi({ description: 'The LF-tags to attach to the resource.' }),
    ),
  })
  .openapi({ required: ['Resource', 'LFTags'], title: 'AddLFTagsToResourceRequest' })
  .openapi('AddLFTagsToResourceRequest')

const SAMLAssertionStringSchema = z.string().min(4).max(100000).openapi('SAMLAssertionString')

const IAMSAMLProviderArnSchema = z
  .string()
  .regex(/arn:aws:iam::[0-9]*:saml-provider\/.*/)
  .openapi('IAMSAMLProviderArn')

const CredentialTimeoutDurationSecondIntegerSchema = z
  .int()
  .min(900)
  .max(43200)
  .openapi('CredentialTimeoutDurationSecondInteger')

const AssumeDecoratedRoleWithSAMLRequestSchema = z
  .object({
    SAMLAssertion: SAMLAssertionStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A SAML assertion consisting of an assertion statement for the user who needs temporary credentials. This must match the SAML assertion that was issued to IAM. This must be Base64 encoded.',
        }),
    ),
    RoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The role that represents an IAM principal whose scope down policy allows it to call credential vending APIs such as <code>GetTemporaryTableCredentials</code>. The caller must also have iam:PassRole permission on this role. ',
        }),
    ),
    PrincipalArn: IAMSAMLProviderArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the IdP.',
        }),
    ),
    DurationSeconds: CredentialTimeoutDurationSecondIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time period, between 900 and 43,200 seconds, for the timeout of the temporary credentials.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SAMLAssertion', 'RoleArn', 'PrincipalArn'],
    title: 'AssumeDecoratedRoleWithSAMLRequest',
  })
  .openapi('AssumeDecoratedRoleWithSAMLRequest')

const AuditContextSchema = z
  .object({
    AdditionalAuditContext: AuditContextStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The filter engine can populate the 'AdditionalAuditContext' information with the request ID for you to track. This information will be displayed in CloudTrail log in your account.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure used to include auditing information on the privileged API. ',
    required: [],
  })
  .openapi('AuditContext')

const BatchPermissionsRequestEntryListSchema = z
  .array(BatchPermissionsRequestEntrySchema)
  .openapi('BatchPermissionsRequestEntryList')

const BatchGrantPermissionsRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    Entries: BatchPermissionsRequestEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to 20 entries for resource permissions to be granted by batch operation to the principal.',
        }),
    ),
  })
  .openapi({ required: ['Entries'], title: 'BatchGrantPermissionsRequest' })
  .openapi('BatchGrantPermissionsRequest')

const BatchRevokePermissionsRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    Entries: BatchPermissionsRequestEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to 20 entries for resource permissions to be revoked by batch operation to the principal.',
        }),
    ),
  })
  .openapi({ required: ['Entries'], title: 'BatchRevokePermissionsRequest' })
  .openapi('BatchRevokePermissionsRequest')

const BooleanNullableSchema = z.boolean().openapi('BooleanNullable')

const CancelTransactionRequestSchema = z
  .object({
    TransactionId: TransactionIdStringSchema.and(
      z.any().openapi({ description: 'The transaction to cancel.' }),
    ),
  })
  .openapi({ required: ['TransactionId'], title: 'CancelTransactionRequest' })
  .openapi('CancelTransactionRequest')

const CommitTransactionRequestSchema = z
  .object({
    TransactionId: TransactionIdStringSchema.and(
      z.any().openapi({ description: 'The transaction to commit.' }),
    ),
  })
  .openapi({ required: ['TransactionId'], title: 'CommitTransactionRequest' })
  .openapi('CommitTransactionRequest')

const CreateDataCellsFilterRequestSchema = z
  .object({
    TableData: DataCellsFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>DataCellsFilter</code> structure containing information about the data cells filter.',
        }),
    ),
  })
  .openapi({ required: ['TableData'], title: 'CreateDataCellsFilterRequest' })
  .openapi('CreateDataCellsFilterRequest')

const CreateLFTagRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    TagKey: LFTagKeySchema.and(z.any().openapi({ description: 'The key-name for the LF-tag.' })),
    TagValues: TagValueListSchema.and(
      z.any().openapi({ description: 'A list of possible values an attribute can take.' }),
    ),
  })
  .openapi({ required: ['TagKey', 'TagValues'], title: 'CreateLFTagRequest' })
  .openapi('CreateLFTagRequest')

const DataLakeResourceTypeSchema = z
  .enum([
    'CATALOG',
    'DATABASE',
    'TABLE',
    'DATA_LOCATION',
    'LF_TAG',
    'LF_TAG_POLICY',
    'LF_TAG_POLICY_DATABASE',
    'LF_TAG_POLICY_TABLE',
  ])
  .openapi('DataLakeResourceType')

const DeleteDataCellsFilterRequestSchema = z
  .object({
    TableCatalogId: CatalogIdStringSchema.and(
      z.any().openapi({ description: 'The ID of the catalog to which the table belongs.' }),
    ).exactOptional(),
    DatabaseName: NameStringSchema.and(
      z.any().openapi({ description: 'A database in the Glue Data Catalog.' }),
    ).exactOptional(),
    TableName: NameStringSchema.and(
      z.any().openapi({ description: 'A table in the database.' }),
    ).exactOptional(),
    Name: NameStringSchema.and(
      z.any().openapi({ description: 'The name given by the user to the data filter cell.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeleteDataCellsFilterRequest', required: [] })
  .openapi('DeleteDataCellsFilterRequest')

const DeleteLFTagRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    TagKey: LFTagKeySchema.and(
      z.any().openapi({ description: 'The key-name for the LF-tag to delete.' }),
    ),
  })
  .openapi({ required: ['TagKey'], title: 'DeleteLFTagRequest' })
  .openapi('DeleteLFTagRequest')

const VirtualObjectListSchema = z
  .array(VirtualObjectSchema)
  .min(1)
  .max(100)
  .openapi('VirtualObjectList')

const DeleteObjectsOnCancelRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Glue data catalog that contains the governed table. Defaults to the current account ID.',
        }),
    ).exactOptional(),
    DatabaseName: NameStringSchema.and(
      z.any().openapi({ description: 'The database that contains the governed table.' }),
    ),
    TableName: NameStringSchema.and(
      z.any().openapi({ description: 'The name of the governed table.' }),
    ),
    TransactionId: TransactionIdStringSchema.and(
      z.any().openapi({ description: 'ID of the transaction that the writes occur in.' }),
    ),
    Objects: VirtualObjectListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of VirtualObject structures, which indicates the Amazon S3 objects to be deleted if the transaction cancels.',
        }),
    ),
  })
  .openapi({
    required: ['DatabaseName', 'TableName', 'TransactionId', 'Objects'],
    title: 'DeleteObjectsOnCancelRequest',
  })
  .openapi('DeleteObjectsOnCancelRequest')

const DeregisterResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource that you want to deregister.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'DeregisterResourceRequest' })
  .openapi('DeregisterResourceRequest')

const DescribeResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnStringSchema.and(z.any().openapi({ description: 'The resource ARN.' })),
  })
  .openapi({ required: ['ResourceArn'], title: 'DescribeResourceRequest' })
  .openapi('DescribeResourceRequest')

const DescribeTransactionRequestSchema = z
  .object({
    TransactionId: TransactionIdStringSchema.and(
      z.any().openapi({ description: 'The transaction for which to return status.' }),
    ),
  })
  .openapi({ required: ['TransactionId'], title: 'DescribeTransactionRequest' })
  .openapi('DescribeTransactionRequest')

const ExtendTransactionRequestSchema = z
  .object({
    TransactionId: TransactionIdStringSchema.and(
      z.any().openapi({ description: 'The transaction to extend.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ExtendTransactionRequest', required: [] })
  .openapi('ExtendTransactionRequest')

const FilterConditionListSchema = z
  .array(FilterConditionSchema)
  .min(1)
  .max(20)
  .openapi('FilterConditionList')

const GetDataCellsFilterRequestSchema = z
  .object({
    TableCatalogId: CatalogIdStringSchema.and(
      z.any().openapi({ description: 'The ID of the catalog to which the table belongs.' }),
    ),
    DatabaseName: NameStringSchema.and(
      z.any().openapi({ description: 'A database in the Glue Data Catalog.' }),
    ),
    TableName: NameStringSchema.and(z.any().openapi({ description: 'A table in the database.' })),
    Name: NameStringSchema.and(
      z.any().openapi({ description: 'The name given by the user to the data filter cell.' }),
    ),
  })
  .openapi({
    required: ['TableCatalogId', 'DatabaseName', 'TableName', 'Name'],
    title: 'GetDataCellsFilterRequest',
  })
  .openapi('GetDataCellsFilterRequest')

const GetDataLakeSettingsRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetDataLakeSettingsRequest', required: [] })
  .openapi('GetDataLakeSettingsRequest')

const PageSizeSchema = z.int().min(1).max(1000).openapi('PageSize')

const GetEffectivePermissionsForPathRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    ResourceArn: ResourceArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource for which you want to get permissions.',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A continuation token, if this is not the first call to retrieve this list.',
        }),
    ).exactOptional(),
    MaxResults: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceArn'], title: 'GetEffectivePermissionsForPathRequest' })
  .openapi('GetEffectivePermissionsForPathRequest')

const GetLFTagRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    TagKey: LFTagKeySchema.and(z.any().openapi({ description: 'The key-name for the LF-tag.' })),
  })
  .openapi({ required: ['TagKey'], title: 'GetLFTagRequest' })
  .openapi('GetLFTagRequest')

const GetQueryStateRequestQueryIdStringSchema = z
  .string()
  .length(36)
  .openapi('GetQueryStateRequestQueryIdString')

const GetQueryStateRequestSchema = z
  .object({
    QueryId: GetQueryStateRequestQueryIdStringSchema.and(
      z.any().openapi({ description: 'The ID of the plan query operation.' }),
    ),
  })
  .openapi({ required: ['QueryId'], title: 'GetQueryStateRequest' })
  .openapi('GetQueryStateRequest')

const GetQueryStatisticsRequestQueryIdStringSchema = z
  .string()
  .length(36)
  .openapi('GetQueryStatisticsRequestQueryIdString')

const GetQueryStatisticsRequestSchema = z
  .object({
    QueryId: GetQueryStatisticsRequestQueryIdStringSchema.and(
      z.any().openapi({ description: 'The ID of the plan query operation.' }),
    ),
  })
  .openapi({ required: ['QueryId'], title: 'GetQueryStatisticsRequest' })
  .openapi('GetQueryStatisticsRequest')

const GetResourceLFTagsRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    Resource: ResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The database, table, or column resource for which you want to return LF-tags.',
        }),
    ),
    ShowAssignedLFTags: BooleanNullableSchema.and(
      z.any().openapi({ description: 'Indicates whether to show the assigned LF-tags.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Resource'], title: 'GetResourceLFTagsRequest' })
  .openapi('GetResourceLFTagsRequest')

const GetTableObjectsRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The catalog containing the governed table. Defaults to the caller’s account.',
        }),
    ).exactOptional(),
    DatabaseName: NameStringSchema.and(
      z.any().openapi({ description: 'The database containing the governed table.' }),
    ),
    TableName: NameStringSchema.and(
      z.any().openapi({ description: 'The governed table for which to retrieve objects.' }),
    ),
    TransactionId: TransactionIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The transaction ID at which to read the governed table contents. If this transaction has aborted, an error is returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with <code>QueryAsOfTime</code>.',
        }),
    ).exactOptional(),
    QueryAsOfTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time as of when to read the governed table contents. If not set, the most recent transaction commit time is used. Cannot be specified along with <code>TransactionId</code>.',
        }),
    ).exactOptional(),
    PartitionPredicate: PredicateStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A predicate to filter the objects returned based on the partition keys defined in the governed table.</p> <ul> <li> <p>The comparison operators supported are: =, &gt;, &lt;, &gt;=, &lt;=</p> </li> <li> <p>The logical operators supported are: AND</p> </li> <li> <p>The data types supported are integer, long, date(yyyy-MM-dd), timestamp(yyyy-MM-dd HH:mm:ssXXX or yyyy-MM-dd HH:mm:ss"), string and decimal.</p> </li> </ul>',
        }),
    ).exactOptional(),
    MaxResults: PageSizeSchema.and(
      z.any().openapi({ description: 'Specifies how many values to return in a page.' }),
    ).exactOptional(),
    NextToken: TokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A continuation token if this is not the first call to retrieve these objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DatabaseName', 'TableName'], title: 'GetTableObjectsRequest' })
  .openapi('GetTableObjectsRequest')

const PartitionValueListSchema = z
  .object({
    Values: ValueStringListSchema.and(
      z.any().openapi({ description: 'The list of partition values.' }),
    ),
  })
  .openapi({ required: ['Values'], description: 'Contains a list of values defining partitions.' })
  .openapi('PartitionValueList')

const PermissionTypeListSchema = z
  .array(PermissionTypeSchema)
  .min(1)
  .max(255)
  .openapi('PermissionTypeList')

const GetTemporaryGluePartitionCredentialsRequestSchema = z
  .object({
    TableArn: ResourceArnStringSchema.and(
      z.any().openapi({ description: "The ARN of the partitions' table." }),
    ),
    Partition: PartitionValueListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of partition values identifying a single partition.' }),
    ),
    Permissions: PermissionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).',
        }),
    ).exactOptional(),
    DurationSeconds: CredentialTimeoutDurationSecondIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.',
        }),
    ).exactOptional(),
    AuditContext: AuditContextSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure representing context to access a resource (column names, query ID, etc).',
        }),
    ).exactOptional(),
    SupportedPermissionTypes: PermissionTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of supported permission types for the partition. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.',
        }),
    ),
  })
  .openapi({
    required: ['TableArn', 'Partition', 'SupportedPermissionTypes'],
    title: 'GetTemporaryGluePartitionCredentialsRequest',
  })
  .openapi('GetTemporaryGluePartitionCredentialsRequest')

const GetTemporaryGlueTableCredentialsRequestSchema = z
  .object({
    TableArn: ResourceArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN identifying a table in the Data Catalog for the temporary credentials request.',
        }),
    ),
    Permissions: PermissionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).',
        }),
    ).exactOptional(),
    DurationSeconds: CredentialTimeoutDurationSecondIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.',
        }),
    ).exactOptional(),
    AuditContext: AuditContextSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure representing context to access a resource (column names, query ID, etc).',
        }),
    ).exactOptional(),
    SupportedPermissionTypes: PermissionTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of supported permission types for the table. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.',
        }),
    ),
  })
  .openapi({
    required: ['TableArn', 'SupportedPermissionTypes'],
    title: 'GetTemporaryGlueTableCredentialsRequest',
  })
  .openapi('GetTemporaryGlueTableCredentialsRequest')

const GetWorkUnitResultsRequestQueryIdStringSchema = z
  .string()
  .length(36)
  .openapi('GetWorkUnitResultsRequestQueryIdString')

const GetWorkUnitResultsRequestWorkUnitIdLongSchema = z
  .int()
  .min(0)
  .openapi('GetWorkUnitResultsRequestWorkUnitIdLong')

const SyntheticGetWorkUnitResultsRequestWorkUnitTokenStringSchema = z
  .string()
  .min(1)
  .openapi('SyntheticGetWorkUnitResultsRequestWorkUnitTokenString')

const GetWorkUnitResultsRequestSchema = z
  .object({
    QueryId: GetWorkUnitResultsRequestQueryIdStringSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the plan query operation for which to get results.' }),
    ),
    WorkUnitId: GetWorkUnitResultsRequestWorkUnitIdLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The work unit ID for which to get results. Value generated by enumerating <code>WorkUnitIdMin</code> to <code>WorkUnitIdMax</code> (inclusive) from the <code>WorkUnitRange</code> in the output of <code>GetWorkUnits</code>.',
        }),
    ),
    WorkUnitToken: SyntheticGetWorkUnitResultsRequestWorkUnitTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A work token used to query the execution service. Token output from <code>GetWorkUnits</code>.',
        }),
    ),
  })
  .openapi({
    required: ['QueryId', 'WorkUnitId', 'WorkUnitToken'],
    title: 'GetWorkUnitResultsRequest',
  })
  .openapi('GetWorkUnitResultsRequest')

const IntegerSchema = z.int().openapi('Integer')

const GetWorkUnitsRequestQueryIdStringSchema = z
  .string()
  .length(36)
  .openapi('GetWorkUnitsRequestQueryIdString')

const GetWorkUnitsRequestSchema = z
  .object({
    NextToken: TokenSchema.and(
      z.any().openapi({ description: 'A continuation token, if this is a continuation call.' }),
    ).exactOptional(),
    PageSize: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The size of each page to get in the Amazon Web Services service call. This does not affect the number of items returned in the command's output. Setting a smaller page size results in more calls to the Amazon Web Services service, retrieving fewer items in each call. This can help prevent the Amazon Web Services service calls from timing out.",
        }),
    ).exactOptional(),
    QueryId: GetWorkUnitsRequestQueryIdStringSchema.and(
      z.any().openapi({ description: 'The ID of the plan query operation.' }),
    ),
  })
  .openapi({ required: ['QueryId'], title: 'GetWorkUnitsRequest' })
  .openapi('GetWorkUnitsRequest')

const GrantPermissionsRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    Principal: DataLakePrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The principal to be granted the permissions on the resource. Supported principals are IAM users or IAM roles, and they are defined by their principal type and their ARN.</p> <p>Note that if you define a resource with a particular ARN, then later delete, and recreate a resource with that same ARN, the resource maintains the permissions already granted. </p>',
        }),
    ),
    Resource: ResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource to which permissions are to be granted. Resources in Lake Formation are the Data Catalog, databases, and tables.',
        }),
    ),
    Permissions: PermissionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The permissions granted to the principal on the resource. Lake Formation defines privileges to grant and revoke access to metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. Lake Formation requires that each principal be authorized to perform a specific task on Lake Formation resources. ',
        }),
    ),
    PermissionsWithGrantOption: PermissionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates a list of the granted permissions that the principal may pass to other users. These permissions may only be a subset of the permissions granted in the <code>Privileges</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Principal', 'Resource', 'Permissions'], title: 'GrantPermissionsRequest' })
  .openapi('GrantPermissionsRequest')

const KeyStringSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('KeyString')

const ListDataCellsFilterRequestSchema = z
  .object({
    Table: TableResourceSchema.and(
      z.any().openapi({ description: 'A table in the Glue Data Catalog.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z.any().openapi({ description: 'A continuation token, if this is a continuation call.' }),
    ).exactOptional(),
    MaxResults: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum size of the response.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDataCellsFilterRequest', required: [] })
  .openapi('ListDataCellsFilterRequest')

const ResourceShareTypeSchema = z.enum(['FOREIGN', 'ALL']).openapi('ResourceShareType')

const ListLFTagsRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    ResourceShareType: ResourceShareTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If resource share type is <code>ALL</code>, returns both in-account LF-tags and shared LF-tags that the requester has permission to view. If resource share type is <code>FOREIGN</code>, returns all share LF-tags that the requester can view. If no resource share type is passed, lists LF-tags in the given catalog ID that the requester has permission to view.',
        }),
    ).exactOptional(),
    MaxResults: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A continuation token, if this is not the first call to retrieve this list.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListLFTagsRequest', required: [] })
  .openapi('ListLFTagsRequest')

const TrueFalseStringSchema = z
  .string()
  .min(1)
  .max(5)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('TrueFalseString')

const ListPermissionsRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    Principal: DataLakePrincipalSchema.and(
      z.any().openapi({ description: 'Specifies a principal to filter the permissions returned.' }),
    ).exactOptional(),
    ResourceType: DataLakeResourceTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies a resource type to filter the permissions returned.' }),
    ).exactOptional(),
    Resource: ResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A resource where you will get a list of the principal permissions.</p> <p>This operation does not support getting privileges on a table with columns. Instead, call this operation on the table, and the operation returns the table and the table w columns.</p>',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A continuation token, if this is not the first call to retrieve this list.',
        }),
    ).exactOptional(),
    MaxResults: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
    IncludeRelated: TrueFalseStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates that related permissions should be included in the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPermissionsRequest', required: [] })
  .openapi('ListPermissionsRequest')

const ListResourcesRequestSchema = z
  .object({
    FilterConditionList: FilterConditionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Any applicable row-level and/or column-level filtering conditions for the resources.',
        }),
    ).exactOptional(),
    MaxResults: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of resource results.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A continuation token, if this is not the first call to retrieve these resources.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListResourcesRequest', required: [] })
  .openapi('ListResourcesRequest')

const ListTableStorageOptimizersRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z.any().openapi({ description: 'The Catalog ID of the table.' }),
    ).exactOptional(),
    DatabaseName: NameStringSchema.and(
      z.any().openapi({ description: 'Name of the database where the table is present.' }),
    ),
    TableName: NameStringSchema.and(z.any().openapi({ description: 'Name of the table.' })),
    StorageOptimizerType: OptimizerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The specific type of storage optimizers to list. The supported value is <code>compaction</code>.',
        }),
    ).exactOptional(),
    MaxResults: PageSizeSchema.and(
      z.any().openapi({ description: 'The number of storage optimizers to return on each call.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z.any().openapi({ description: 'A continuation token, if this is a continuation call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['DatabaseName', 'TableName'], title: 'ListTableStorageOptimizersRequest' })
  .openapi('ListTableStorageOptimizersRequest')

const TransactionStatusFilterSchema = z
  .enum(['ALL', 'COMPLETED', 'ACTIVE', 'COMMITTED', 'ABORTED'])
  .openapi('TransactionStatusFilter')

const ListTransactionsRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The catalog for which to list transactions. Defaults to the account ID of the caller.',
        }),
    ).exactOptional(),
    StatusFilter: TransactionStatusFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A filter indicating the status of transactions to return. Options are ALL | COMPLETED | COMMITTED | ABORTED | ACTIVE. The default is <code>ALL</code>.',
        }),
    ).exactOptional(),
    MaxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of transactions to return in a single call.' }),
    ).exactOptional(),
    NextToken: TokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A continuation token if this is not the first call to retrieve transactions.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTransactionsRequest', required: [] })
  .openapi('ListTransactionsRequest')

const PutDataLakeSettingsRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    DataLakeSettings: DataLakeSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure representing a list of Lake Formation principals designated as data lake administrators.',
        }),
    ),
  })
  .openapi({ required: ['DataLakeSettings'], title: 'PutDataLakeSettingsRequest' })
  .openapi('PutDataLakeSettingsRequest')

const QueryPlanningContextSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Data Catalog where the partition in question resides. If none is provided, the Amazon Web Services account ID is used by default.',
        }),
    ).exactOptional(),
    DatabaseName: QueryPlanningContextDatabaseNameStringSchema.and(
      z.any().openapi({ description: 'The database containing the table.' }),
    ),
    QueryAsOfTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.',
        }),
    ).exactOptional(),
    QueryParameters: QueryParameterMapSchema.and(
      z.any().openapi({ description: 'A map consisting of key-value pairs.' }),
    ).exactOptional(),
    TransactionId: TransactionIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The transaction ID at which to read the table contents. If this transaction is not committed, the read will be treated as part of that transaction and will see its writes. If this transaction has aborted, an error will be returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with <code>QueryAsOfTime</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DatabaseName'],
    description: 'A structure containing information about the query plan.',
  })
  .openapi('QueryPlanningContext')

const RegisterResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the resource that you want to register.',
        }),
    ),
    UseServiceLinkedRole: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Designates an Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog. A service-linked role is a unique type of IAM role that is linked directly to Lake Formation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/service-linked-roles.html">Using Service-Linked Roles for Lake Formation</a>.</p>',
        }),
    ).exactOptional(),
    RoleArn: IAMRoleArnSchema.and(
      z.any().openapi({ description: 'The identifier for the role that registers the resource.' }),
    ).exactOptional(),
    WithFederation: NullableBooleanSchema.and(
      z.any().openapi({ description: 'Whether or not the resource is a federated resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceArn'], title: 'RegisterResourceRequest' })
  .openapi('RegisterResourceRequest')

const RemoveLFTagsFromResourceRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    Resource: ResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The database, table, or column resource where you want to remove an LF-tag.',
        }),
    ),
    LFTags: LFTagsListSchema.and(
      z.any().openapi({ description: 'The LF-tags to be removed from the resource.' }),
    ),
  })
  .openapi({ required: ['Resource', 'LFTags'], title: 'RemoveLFTagsFromResourceRequest' })
  .openapi('RemoveLFTagsFromResourceRequest')

const RevokePermissionsRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    Principal: DataLakePrincipalSchema.and(
      z.any().openapi({ description: 'The principal to be revoked permissions on the resource.' }),
    ),
    Resource: ResourceSchema.and(
      z.any().openapi({ description: 'The resource to which permissions are to be revoked.' }),
    ),
    Permissions: PermissionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The permissions revoked to the principal on the resource. For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.',
        }),
    ),
    PermissionsWithGrantOption: PermissionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates a list of permissions for which to revoke the grant option allowing the principal to pass permissions to other principals.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Principal', 'Resource', 'Permissions'],
    title: 'RevokePermissionsRequest',
  })
  .openapi('RevokePermissionsRequest')

const SearchPageSizeSchema = z.int().min(1).max(100).openapi('SearchPageSize')

const SearchDatabasesByLFTagsRequestSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A continuation token, if this is not the first call to retrieve this list.',
        }),
    ).exactOptional(),
    MaxResults: SearchPageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    Expression: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of conditions (<code>LFTag</code> structures) to search for in database resources.',
        }),
    ),
  })
  .openapi({ required: ['Expression'], title: 'SearchDatabasesByLFTagsRequest' })
  .openapi('SearchDatabasesByLFTagsRequest')

const SearchTablesByLFTagsRequestSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A continuation token, if this is not the first call to retrieve this list.',
        }),
    ).exactOptional(),
    MaxResults: SearchPageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    Expression: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of conditions (<code>LFTag</code> structures) to search for in table resources.',
        }),
    ),
  })
  .openapi({ required: ['Expression'], title: 'SearchTablesByLFTagsRequest' })
  .openapi('SearchTablesByLFTagsRequest')

const SyntheticStartQueryPlanningRequestQueryStringSchema = z
  .string()
  .min(1)
  .openapi('SyntheticStartQueryPlanningRequestQueryString')

const StartQueryPlanningRequestSchema = z
  .object({
    QueryPlanningContext: QueryPlanningContextSchema.and(
      z.any().openapi({ description: 'A structure containing information about the query plan.' }),
    ),
    QueryString: SyntheticStartQueryPlanningRequestQueryStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A PartiQL query statement used as an input to the planner service.',
        }),
    ),
  })
  .openapi({
    required: ['QueryPlanningContext', 'QueryString'],
    title: 'StartQueryPlanningRequest',
  })
  .openapi('StartQueryPlanningRequest')

const TransactionTypeSchema = z.enum(['READ_AND_WRITE', 'READ_ONLY']).openapi('TransactionType')

const StartTransactionRequestSchema = z
  .object({
    TransactionType: TransactionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether this transaction should be read only or read and write. Writes made using a read-only transaction ID will be rejected. Read-only transactions do not need to be committed. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'StartTransactionRequest', required: [] })
  .openapi('StartTransactionRequest')

const StorageOptimizerConfigKeySchema = z.string().openapi('StorageOptimizerConfigKey')

const StorageOptimizerConfigMapSchema = z
  .record(z.string(), StorageOptimizerConfigSchema)
  .openapi('StorageOptimizerConfigMap')

const UpdateDataCellsFilterRequestSchema = z
  .object({
    TableData: DataCellsFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>DataCellsFilter</code> structure containing information about the data cells filter.',
        }),
    ),
  })
  .openapi({ required: ['TableData'], title: 'UpdateDataCellsFilterRequest' })
  .openapi('UpdateDataCellsFilterRequest')

const UpdateLFTagRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
        }),
    ).exactOptional(),
    TagKey: LFTagKeySchema.and(
      z
        .any()
        .openapi({ description: 'The key-name for the LF-tag for which to add or delete values.' }),
    ),
    TagValuesToDelete: TagValueListSchema.and(
      z.any().openapi({ description: 'A list of LF-tag values to delete from the LF-tag.' }),
    ).exactOptional(),
    TagValuesToAdd: TagValueListSchema.and(
      z.any().openapi({ description: 'A list of LF-tag values to add from the LF-tag.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['TagKey'], title: 'UpdateLFTagRequest' })
  .openapi('UpdateLFTagRequest')

const UpdateResourceRequestSchema = z
  .object({
    RoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The new role to use for the given resource registered in Lake Formation.',
        }),
    ),
    ResourceArn: ResourceArnStringSchema.and(z.any().openapi({ description: 'The resource ARN.' })),
    WithFederation: NullableBooleanSchema.and(
      z.any().openapi({ description: 'Whether or not the resource is a federated resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['RoleArn', 'ResourceArn'], title: 'UpdateResourceRequest' })
  .openapi('UpdateResourceRequest')

const WriteOperationListSchema = z
  .array(WriteOperationSchema)
  .min(1)
  .max(100)
  .openapi('WriteOperationList')

const UpdateTableObjectsRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The catalog containing the governed table to update. Defaults to the caller’s account ID.',
        }),
    ).exactOptional(),
    DatabaseName: NameStringSchema.and(
      z.any().openapi({ description: 'The database containing the governed table to update.' }),
    ),
    TableName: NameStringSchema.and(
      z.any().openapi({ description: 'The governed table to update.' }),
    ),
    TransactionId: TransactionIdStringSchema.and(
      z.any().openapi({ description: 'The transaction at which to do the write.' }),
    ).exactOptional(),
    WriteOperations: WriteOperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>WriteOperation</code> objects that define an object to add to or delete from the manifest for a governed table.',
        }),
    ),
  })
  .openapi({
    required: ['DatabaseName', 'TableName', 'WriteOperations'],
    title: 'UpdateTableObjectsRequest',
  })
  .openapi('UpdateTableObjectsRequest')

const UpdateTableStorageOptimizerRequestSchema = z
  .object({
    CatalogId: CatalogIdStringSchema.and(
      z.any().openapi({ description: 'The Catalog ID of the table.' }),
    ).exactOptional(),
    DatabaseName: NameStringSchema.and(
      z.any().openapi({ description: 'Name of the database where the table is present.' }),
    ),
    TableName: NameStringSchema.and(
      z
        .any()
        .openapi({ description: 'Name of the table for which to enable the storage optimizer.' }),
    ),
    StorageOptimizerConfig: StorageOptimizerConfigMapSchema.and(
      z
        .any()
        .openapi({ description: 'Name of the table for which to enable the storage optimizer.' }),
    ),
  })
  .openapi({
    required: ['DatabaseName', 'TableName', 'StorageOptimizerConfig'],
    title: 'UpdateTableStorageOptimizerRequest',
  })
  .openapi('UpdateTableStorageOptimizerRequest')

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

export const postAddLFTagsToResourceRoute = createRoute({
  method: 'post',
  path: '/AddLFTagsToResource',
  description: 'Attaches one or more LF-tags to an existing resource.',
  operationId: 'AddLFTagsToResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              Resource: z
                .object({
                  Catalog: CatalogResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                      }),
                  ).exactOptional(),
                  Database: DatabaseResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal. ',
                      }),
                  ).exactOptional(),
                  Table: TableResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. ',
                      }),
                  ).exactOptional(),
                  TableWithColumns: TableWithColumnsResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.',
                      }),
                  ).exactOptional(),
                  DataLocation: DataLocationResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The location of an Amazon S3 path where permissions are granted or revoked. ',
                      }),
                  ).exactOptional(),
                  DataCellsFilter: DataCellsFilterResourceSchema.and(
                    z.any().openapi({ description: 'A data cell filter.' }),
                  ).exactOptional(),
                  LFTag: LFTagKeyResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The LF-tag key and values attached to a resource.',
                      }),
                  ).exactOptional(),
                  LFTagPolicy: LFTagPolicyResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A list of LF-tag conditions that define a resource's LF-tag policy.",
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'A structure for the resource.', required: [] }),
              LFTags: z
                .array(LFTagPairSchema)
                .min(1)
                .max(50)
                .openapi({ description: 'The LF-tags to attach to the resource.' }),
            })
            .openapi({ required: ['Resource', 'LFTags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddLFTagsToResourceResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postAssumeDecoratedRoleWithSAMLRoute = createRoute({
  method: 'post',
  path: '/AssumeDecoratedRoleWithSAML',
  description:
    '<p>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session. </p> <p> This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API <code>GetDataAccess</code>. Therefore, all SAML roles that can be assumed via <code>AssumeDecoratedRoleWithSAML</code> must at a minimum include <code>lakeformation:GetDataAccess</code> in their role policies. A typical IAM policy attached to such a role would look as follows: </p>',
  operationId: 'AssumeDecoratedRoleWithSAML',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SAMLAssertion: z
                .string()
                .min(4)
                .max(100000)
                .openapi({
                  description:
                    'A SAML assertion consisting of an assertion statement for the user who needs temporary credentials. This must match the SAML assertion that was issued to IAM. This must be Base64 encoded.',
                }),
              RoleArn: z
                .string()
                .regex(/arn:aws:iam::[0-9]*:role\/.*/)
                .openapi({
                  description:
                    'The role that represents an IAM principal whose scope down policy allows it to call credential vending APIs such as <code>GetTemporaryTableCredentials</code>. The caller must also have iam:PassRole permission on this role. ',
                }),
              PrincipalArn: z
                .string()
                .regex(/arn:aws:iam::[0-9]*:saml-provider\/.*/)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the IdP.',
                }),
              DurationSeconds: z
                .int()
                .min(900)
                .max(43200)
                .exactOptional()
                .openapi({
                  description:
                    'The time period, between 900 and 43,200 seconds, for the timeout of the temporary credentials.',
                }),
            })
            .openapi({ required: ['SAMLAssertion', 'RoleArn', 'PrincipalArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssumeDecoratedRoleWithSAMLResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postBatchGrantPermissionsRoute = createRoute({
  method: 'post',
  path: '/BatchGrantPermissions',
  description: 'Batch operation to grant permissions to the principal.',
  operationId: 'BatchGrantPermissions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              Entries: z
                .array(BatchPermissionsRequestEntrySchema)
                .openapi({
                  description:
                    'A list of up to 20 entries for resource permissions to be granted by batch operation to the principal.',
                }),
            })
            .openapi({ required: ['Entries'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGrantPermissionsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
  },
})

export const postBatchRevokePermissionsRoute = createRoute({
  method: 'post',
  path: '/BatchRevokePermissions',
  description: 'Batch operation to revoke permissions from the principal.',
  operationId: 'BatchRevokePermissions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              Entries: z
                .array(BatchPermissionsRequestEntrySchema)
                .openapi({
                  description:
                    'A list of up to 20 entries for resource permissions to be revoked by batch operation to the principal.',
                }),
            })
            .openapi({ required: ['Entries'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchRevokePermissionsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
  },
})

export const postCancelTransactionRoute = createRoute({
  method: 'post',
  path: '/CancelTransaction',
  description:
    'Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.',
  operationId: 'CancelTransaction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TransactionId: z
                .string()
                .regex(/[\p{L}\p{N}\p{P}]*/u)
                .min(1)
                .max(255)
                .openapi({ description: 'The transaction to cancel.' }),
            })
            .openapi({ required: ['TransactionId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelTransactionResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    484: {
      description: 'TransactionCommittedException',
      content: { 'application/json': { schema: TransactionCommittedExceptionSchema } },
    },
    485: {
      description: 'TransactionCommitInProgressException',
      content: { 'application/json': { schema: TransactionCommitInProgressExceptionSchema } },
    },
    486: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postCommitTransactionRoute = createRoute({
  method: 'post',
  path: '/CommitTransaction',
  description:
    'Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.',
  operationId: 'CommitTransaction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TransactionId: z
                .string()
                .regex(/[\p{L}\p{N}\p{P}]*/u)
                .min(1)
                .max(255)
                .openapi({ description: 'The transaction to commit.' }),
            })
            .openapi({ required: ['TransactionId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CommitTransactionResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    484: {
      description: 'TransactionCanceledException',
      content: { 'application/json': { schema: TransactionCanceledExceptionSchema } },
    },
    485: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postCreateDataCellsFilterRoute = createRoute({
  method: 'post',
  path: '/CreateDataCellsFilter',
  description:
    'Creates a data cell filter to allow one to grant access to certain columns on certain rows.',
  operationId: 'CreateDataCellsFilter',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TableData: z
                .object({
                  TableCatalogId: CatalogIdStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The ID of the catalog to which the table belongs.',
                      }),
                  ).exactOptional(),
                  DatabaseName: NameStringSchema.and(
                    z.any().openapi({ description: 'A database in the Glue Data Catalog.' }),
                  ).exactOptional(),
                  TableName: NameStringSchema.and(
                    z.any().openapi({ description: 'A table in the database.' }),
                  ).exactOptional(),
                  Name: NameStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The name given by the user to the data filter cell.',
                      }),
                  ).exactOptional(),
                  RowFilter: RowFilterSchema.and(
                    z.any().openapi({ description: 'A PartiQL predicate.' }),
                  ).exactOptional(),
                  ColumnNames: ColumnNamesSchema.and(
                    z.any().openapi({ description: 'A list of column names.' }),
                  ).exactOptional(),
                  ColumnWildcard: ColumnWildcardSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A wildcard with exclusions.</p> <p>You must specify either a <code>ColumnNames</code> list or the <code>ColumnWildCard</code>. </p>',
                      }),
                  ).exactOptional(),
                  VersionId: VersionStringSchema.and(
                    z.any().openapi({ description: 'The ID of the data cells filter version.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'A structure that describes certain columns on certain rows.',
                  required: [],
                }),
            })
            .openapi({ required: ['TableData'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDataCellsFilterResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceNumberLimitExceededException',
      content: { 'application/json': { schema: ResourceNumberLimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    485: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postCreateLFTagRoute = createRoute({
  method: 'post',
  path: '/CreateLFTag',
  description: 'Creates an LF-tag with the specified name and values.',
  operationId: 'CreateLFTag',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              TagKey: z
                .string()
                .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@%]*)$/u)
                .min(1)
                .max(128)
                .openapi({ description: 'The key-name for the LF-tag.' }),
              TagValues: z
                .array(LFTagValueSchema)
                .min(1)
                .max(50)
                .openapi({ description: 'A list of possible values an attribute can take.' }),
            })
            .openapi({ required: ['TagKey', 'TagValues'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLFTagResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'ResourceNumberLimitExceededException',
      content: { 'application/json': { schema: ResourceNumberLimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    484: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postDeleteDataCellsFilterRoute = createRoute({
  method: 'post',
  path: '/DeleteDataCellsFilter',
  description: 'Deletes a data cell filter.',
  operationId: 'DeleteDataCellsFilter',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TableCatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'The ID of the catalog to which the table belongs.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              DatabaseName: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'A database in the Glue Data Catalog.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              TableName: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'A table in the database.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              Name: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'The name given by the user to the data filter cell.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDataCellsFilterResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postDeleteLFTagRoute = createRoute({
  method: 'post',
  path: '/DeleteLFTag',
  description:
    'Deletes the specified LF-tag given a key name. If the input parameter tag key was not found, then the operation will throw an exception. When you delete an LF-tag, the <code>LFTagPolicy</code> attached to the LF-tag becomes invalid. If the deleted LF-tag was still assigned to any resource, the tag policy attach to the deleted LF-tag will no longer be applied to the resource.',
  operationId: 'DeleteLFTag',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              TagKey: z
                .string()
                .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@%]*)$/u)
                .min(1)
                .max(128)
                .openapi({ description: 'The key-name for the LF-tag to delete.' }),
            })
            .openapi({ required: ['TagKey'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLFTagResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postDeleteObjectsOnCancelRoute = createRoute({
  method: 'post',
  path: '/DeleteObjectsOnCancel',
  description:
    '<p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels. </p> <p> The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically call <code>DeleteObjectsOnCancel</code> before writes. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>. </p>',
  operationId: 'DeleteObjectsOnCancel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The Glue data catalog that contains the governed table. Defaults to the current account ID.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              DatabaseName: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'The database that contains the governed table.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              TableName: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'The name of the governed table.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              TransactionId: z
                .string()
                .regex(/[\p{L}\p{N}\p{P}]*/u)
                .min(1)
                .max(255)
                .openapi({ description: 'ID of the transaction that the writes occur in.' }),
              Objects: z
                .array(VirtualObjectSchema)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'A list of VirtualObject structures, which indicates the Amazon S3 objects to be deleted if the transaction cancels.',
                }),
            })
            .openapi({ required: ['DatabaseName', 'TableName', 'TransactionId', 'Objects'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteObjectsOnCancelResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    484: {
      description: 'TransactionCommittedException',
      content: { 'application/json': { schema: TransactionCommittedExceptionSchema } },
    },
    485: {
      description: 'TransactionCanceledException',
      content: { 'application/json': { schema: TransactionCanceledExceptionSchema } },
    },
    486: {
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
    487: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postDeregisterResourceRoute = createRoute({
  method: 'post',
  path: '/DeregisterResource',
  description:
    '<p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>',
  operationId: 'DeregisterResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ResourceArn: z
                .string()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the resource that you want to deregister.',
                }),
            })
            .openapi({ required: ['ResourceArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterResourceResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
  },
})

export const postDescribeResourceRoute = createRoute({
  method: 'post',
  path: '/DescribeResource',
  description:
    'Retrieves the current data access role for the given resource registered in Lake Formation.',
  operationId: 'DescribeResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ ResourceArn: z.string().openapi({ description: 'The resource ARN.' }) })
            .openapi({ required: ['ResourceArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeResourceResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
  },
})

export const postDescribeTransactionRoute = createRoute({
  method: 'post',
  path: '/DescribeTransaction',
  description: 'Returns the details of a single transaction.',
  operationId: 'DescribeTransaction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TransactionId: z
                .string()
                .regex(/[\p{L}\p{N}\p{P}]*/u)
                .min(1)
                .max(255)
                .openapi({ description: 'The transaction for which to return status.' }),
            })
            .openapi({ required: ['TransactionId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTransactionResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
  },
})

export const postExtendTransactionRoute = createRoute({
  method: 'post',
  path: '/ExtendTransaction',
  description:
    '<p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p> <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>',
  operationId: 'ExtendTransaction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TransactionId: z
                .string()
                .regex(/[\p{L}\p{N}\p{P}]*/u)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The transaction to extend.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExtendTransactionResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    484: {
      description: 'TransactionCommittedException',
      content: { 'application/json': { schema: TransactionCommittedExceptionSchema } },
    },
    485: {
      description: 'TransactionCanceledException',
      content: { 'application/json': { schema: TransactionCanceledExceptionSchema } },
    },
    486: {
      description: 'TransactionCommitInProgressException',
      content: { 'application/json': { schema: TransactionCommitInProgressExceptionSchema } },
    },
  },
})

export const postGetDataCellsFilterRoute = createRoute({
  method: 'post',
  path: '/GetDataCellsFilter',
  description: 'Returns a data cells filter.',
  operationId: 'GetDataCellsFilter',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TableCatalogId: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'The ID of the catalog to which the table belongs.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              DatabaseName: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'A database in the Glue Data Catalog.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              TableName: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'A table in the database.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              Name: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'The name given by the user to the data filter cell.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
            })
            .openapi({ required: ['TableCatalogId', 'DatabaseName', 'TableName', 'Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDataCellsFilterResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postGetDataLakeSettingsRoute = createRoute({
  method: 'post',
  path: '/GetDataLakeSettings',
  description:
    'Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. ',
  operationId: 'GetDataLakeSettings',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDataLakeSettingsResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
  },
})

export const postGetEffectivePermissionsForPathRoute = createRoute({
  method: 'post',
  path: '/GetEffectivePermissionsForPath',
  description:
    'Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.',
  operationId: 'GetEffectivePermissionsForPath',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
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
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              ResourceArn: z
                .string()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the resource for which you want to get permissions.',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A continuation token, if this is not the first call to retrieve this list.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to return.' }),
            })
            .openapi({ required: ['ResourceArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEffectivePermissionsForPathResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    482: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postGetLFTagRoute = createRoute({
  method: 'post',
  path: '/GetLFTag',
  description: 'Returns an LF-tag definition.',
  operationId: 'GetLFTag',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              TagKey: z
                .string()
                .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@%]*)$/u)
                .min(1)
                .max(128)
                .openapi({ description: 'The key-name for the LF-tag.' }),
            })
            .openapi({ required: ['TagKey'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLFTagResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postGetQueryStateRoute = createRoute({
  method: 'post',
  path: '/GetQueryState',
  description:
    'Returns the state of a query previously submitted. Clients are expected to poll <code>GetQueryState</code> to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to <code>StartQueryPlanning</code>.',
  operationId: 'GetQueryState',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              QueryId: z
                .string()
                .length(36)
                .openapi({ description: 'The ID of the plan query operation.' }),
            })
            .openapi({ required: ['QueryId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetQueryStateResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postGetQueryStatisticsRoute = createRoute({
  method: 'post',
  path: '/GetQueryStatistics',
  description: 'Retrieves statistics on the planning and execution of a query.',
  operationId: 'GetQueryStatistics',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              QueryId: z
                .string()
                .length(36)
                .openapi({ description: 'The ID of the plan query operation.' }),
            })
            .openapi({ required: ['QueryId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetQueryStatisticsResponseSchema } },
    },
    480: {
      description: 'StatisticsNotReadyYetException',
      content: { 'application/json': { schema: StatisticsNotReadyYetExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ExpiredException',
      content: { 'application/json': { schema: ExpiredExceptionSchema } },
    },
    485: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postGetResourceLFTagsRoute = createRoute({
  method: 'post',
  path: '/GetResourceLFTags',
  description: 'Returns the LF-tags applied to a resource.',
  operationId: 'GetResourceLFTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              Resource: z
                .object({
                  Catalog: CatalogResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                      }),
                  ).exactOptional(),
                  Database: DatabaseResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal. ',
                      }),
                  ).exactOptional(),
                  Table: TableResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. ',
                      }),
                  ).exactOptional(),
                  TableWithColumns: TableWithColumnsResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.',
                      }),
                  ).exactOptional(),
                  DataLocation: DataLocationResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The location of an Amazon S3 path where permissions are granted or revoked. ',
                      }),
                  ).exactOptional(),
                  DataCellsFilter: DataCellsFilterResourceSchema.and(
                    z.any().openapi({ description: 'A data cell filter.' }),
                  ).exactOptional(),
                  LFTag: LFTagKeyResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The LF-tag key and values attached to a resource.',
                      }),
                  ).exactOptional(),
                  LFTagPolicy: LFTagPolicyResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A list of LF-tag conditions that define a resource's LF-tag policy.",
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'A structure for the resource.', required: [] }),
              ShowAssignedLFTags: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates whether to show the assigned LF-tags.' }),
            })
            .openapi({ required: ['Resource'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourceLFTagsResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    484: {
      description: 'GlueEncryptionException',
      content: { 'application/json': { schema: GlueEncryptionExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postGetTableObjectsRoute = createRoute({
  method: 'post',
  path: '/GetTableObjects',
  description:
    'Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.',
  operationId: 'GetTableObjects',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
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
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The catalog containing the governed table. Defaults to the caller’s account.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              DatabaseName: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'The database containing the governed table.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              TableName: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'The governed table for which to retrieve objects.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              TransactionId: z
                .string()
                .regex(/[\p{L}\p{N}\p{P}]*/u)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The transaction ID at which to read the governed table contents. If this transaction has aborted, an error is returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with <code>QueryAsOfTime</code>.',
                }),
              QueryAsOfTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The time as of when to read the governed table contents. If not set, the most recent transaction commit time is used. Cannot be specified along with <code>TransactionId</code>.',
                }),
              PartitionPredicate: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A predicate to filter the objects returned based on the partition keys defined in the governed table.</p> <ul> <li> <p>The comparison operators supported are: =, &gt;, &lt;, &gt;=, &lt;=</p> </li> <li> <p>The logical operators supported are: AND</p> </li> <li> <p>The data types supported are integer, long, date(yyyy-MM-dd), timestamp(yyyy-MM-dd HH:mm:ssXXX or yyyy-MM-dd HH:mm:ss"), string and decimal.</p> </li> </ul>',
                  'x-pattern':
                    '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'Specifies how many values to return in a page.' }),
              NextToken: z
                .string()
                .max(4096)
                .exactOptional()
                .openapi({
                  description:
                    'A continuation token if this is not the first call to retrieve these objects.',
                }),
            })
            .openapi({ required: ['DatabaseName', 'TableName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTableObjectsResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    484: {
      description: 'TransactionCommittedException',
      content: { 'application/json': { schema: TransactionCommittedExceptionSchema } },
    },
    485: {
      description: 'TransactionCanceledException',
      content: { 'application/json': { schema: TransactionCanceledExceptionSchema } },
    },
    486: {
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
  },
})

export const postGetTemporaryGluePartitionCredentialsRoute = createRoute({
  method: 'post',
  path: '/GetTemporaryGluePartitionCredentials',
  description:
    'This API is identical to <code>GetTemporaryTableCredentials</code> except that this is used when the target Data Catalog resource is of type Partition. Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.',
  operationId: 'GetTemporaryGluePartitionCredentials',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TableArn: z.string().openapi({ description: "The ARN of the partitions' table." }),
              Partition: z
                .object({
                  Values: ValueStringListSchema.and(
                    z.any().openapi({ description: 'The list of partition values.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Contains a list of values defining partitions.',
                  required: [],
                }),
              Permissions: z
                .array(PermissionSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).',
                }),
              DurationSeconds: z
                .int()
                .min(900)
                .max(43200)
                .exactOptional()
                .openapi({
                  description:
                    'The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.',
                }),
              AuditContext: z
                .object({
                  AdditionalAuditContext: AuditContextStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The filter engine can populate the 'AdditionalAuditContext' information with the request ID for you to track. This information will be displayed in CloudTrail log in your account.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A structure used to include auditing information on the privileged API. ',
                  required: [],
                }),
              SupportedPermissionTypes: z
                .array(PermissionTypeSchema)
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'A list of supported permission types for the partition. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.',
                }),
            })
            .openapi({ required: ['TableArn', 'Partition', 'SupportedPermissionTypes'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: GetTemporaryGluePartitionCredentialsResponseSchema },
      },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'PermissionTypeMismatchException',
      content: { 'application/json': { schema: PermissionTypeMismatchExceptionSchema } },
    },
  },
})

export const postGetTemporaryGlueTableCredentialsRoute = createRoute({
  method: 'post',
  path: '/GetTemporaryGlueTableCredentials',
  description:
    'Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.',
  operationId: 'GetTemporaryGlueTableCredentials',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TableArn: z
                .string()
                .openapi({
                  description:
                    'The ARN identifying a table in the Data Catalog for the temporary credentials request.',
                }),
              Permissions: z
                .array(PermissionSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).',
                }),
              DurationSeconds: z
                .int()
                .min(900)
                .max(43200)
                .exactOptional()
                .openapi({
                  description:
                    'The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.',
                }),
              AuditContext: z
                .object({
                  AdditionalAuditContext: AuditContextStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The filter engine can populate the 'AdditionalAuditContext' information with the request ID for you to track. This information will be displayed in CloudTrail log in your account.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A structure used to include auditing information on the privileged API. ',
                  required: [],
                }),
              SupportedPermissionTypes: z
                .array(PermissionTypeSchema)
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'A list of supported permission types for the table. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.',
                }),
            })
            .openapi({ required: ['TableArn', 'SupportedPermissionTypes'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTemporaryGlueTableCredentialsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'PermissionTypeMismatchException',
      content: { 'application/json': { schema: PermissionTypeMismatchExceptionSchema } },
    },
  },
})

export const postGetWorkUnitResultsRoute = createRoute({
  method: 'post',
  path: '/GetWorkUnitResults',
  description:
    'Returns the work units resulting from the query. Work units can be executed in any order and in parallel. ',
  operationId: 'GetWorkUnitResults',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              QueryId: z
                .string()
                .length(36)
                .openapi({
                  description: 'The ID of the plan query operation for which to get results.',
                }),
              WorkUnitId: z
                .int()
                .min(0)
                .openapi({
                  description:
                    'The work unit ID for which to get results. Value generated by enumerating <code>WorkUnitIdMin</code> to <code>WorkUnitIdMax</code> (inclusive) from the <code>WorkUnitRange</code> in the output of <code>GetWorkUnits</code>.',
                }),
              WorkUnitToken: z
                .string()
                .min(1)
                .openapi({
                  description:
                    'A work token used to query the execution service. Token output from <code>GetWorkUnits</code>.',
                }),
            })
            .openapi({ required: ['QueryId', 'WorkUnitId', 'WorkUnitToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWorkUnitResultsResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ExpiredException',
      content: { 'application/json': { schema: ExpiredExceptionSchema } },
    },
    484: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postGetWorkUnitsRoute = createRoute({
  method: 'post',
  path: '/GetWorkUnits',
  description:
    'Retrieves the work units generated by the <code>StartQueryPlanning</code> operation.',
  operationId: 'GetWorkUnits',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      PageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
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
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'A continuation token, if this is a continuation call.' }),
              PageSize: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The size of each page to get in the Amazon Web Services service call. This does not affect the number of items returned in the command's output. Setting a smaller page size results in more calls to the Amazon Web Services service, retrieving fewer items in each call. This can help prevent the Amazon Web Services service calls from timing out.",
                }),
              QueryId: z
                .string()
                .length(36)
                .openapi({ description: 'The ID of the plan query operation.' }),
            })
            .openapi({ required: ['QueryId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWorkUnitsResponseSchema } },
    },
    480: {
      description: 'WorkUnitsNotReadyYetException',
      content: { 'application/json': { schema: WorkUnitsNotReadyYetExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ExpiredException',
      content: { 'application/json': { schema: ExpiredExceptionSchema } },
    },
  },
})

export const postGrantPermissionsRoute = createRoute({
  method: 'post',
  path: '/GrantPermissions',
  description:
    '<p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>',
  operationId: 'GrantPermissions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              Principal: z
                .object({
                  DataLakePrincipalIdentifier: DataLakePrincipalStringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'An identifier for the Lake Formation principal.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The Lake Formation principal. Supported principals are IAM users or IAM roles.',
                  required: [],
                }),
              Resource: z
                .object({
                  Catalog: CatalogResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                      }),
                  ).exactOptional(),
                  Database: DatabaseResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal. ',
                      }),
                  ).exactOptional(),
                  Table: TableResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. ',
                      }),
                  ).exactOptional(),
                  TableWithColumns: TableWithColumnsResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.',
                      }),
                  ).exactOptional(),
                  DataLocation: DataLocationResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The location of an Amazon S3 path where permissions are granted or revoked. ',
                      }),
                  ).exactOptional(),
                  DataCellsFilter: DataCellsFilterResourceSchema.and(
                    z.any().openapi({ description: 'A data cell filter.' }),
                  ).exactOptional(),
                  LFTag: LFTagKeyResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The LF-tag key and values attached to a resource.',
                      }),
                  ).exactOptional(),
                  LFTagPolicy: LFTagPolicyResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A list of LF-tag conditions that define a resource's LF-tag policy.",
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'A structure for the resource.', required: [] }),
              Permissions: z
                .array(PermissionSchema)
                .openapi({
                  description:
                    'The permissions granted to the principal on the resource. Lake Formation defines privileges to grant and revoke access to metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. Lake Formation requires that each principal be authorized to perform a specific task on Lake Formation resources. ',
                }),
              PermissionsWithGrantOption: z
                .array(PermissionSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Indicates a list of the granted permissions that the principal may pass to other users. These permissions may only be a subset of the permissions granted in the <code>Privileges</code>.',
                }),
            })
            .openapi({ required: ['Principal', 'Resource', 'Permissions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GrantPermissionsResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postListDataCellsFilterRoute = createRoute({
  method: 'post',
  path: '/ListDataCellsFilter',
  description: 'Lists all the data cell filters on a table.',
  operationId: 'ListDataCellsFilter',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
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
      content: {
        'application/json': {
          schema: z
            .object({
              Table: z
                .object({
                  CatalogId: CatalogIdStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The identifier for the Data Catalog. By default, it is the account ID of the caller.',
                      }),
                  ).exactOptional(),
                  DatabaseName: NameStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the database for the table. Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal. ',
                      }),
                  ).exactOptional(),
                  Name: NameStringSchema.and(
                    z.any().openapi({ description: 'The name of the table.' }),
                  ).exactOptional(),
                  TableWildcard: TableWildcardSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A wildcard object representing every table under a database.</p> <p>At least one of <code>TableResource$Name</code> or <code>TableResource$TableWildcard</code> is required.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. ',
                  required: [],
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'A continuation token, if this is a continuation call.' }),
              MaxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'The maximum size of the response.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDataCellsFilterResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postListLFTagsRoute = createRoute({
  method: 'post',
  path: '/ListLFTags',
  description: 'Lists LF-tags that the requester has permission to view. ',
  operationId: 'ListLFTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
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
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              ResourceShareType: z
                .enum(['FOREIGN', 'ALL'])
                .exactOptional()
                .openapi({
                  description:
                    'If resource share type is <code>ALL</code>, returns both in-account LF-tags and shared LF-tags that the requester has permission to view. If resource share type is <code>FOREIGN</code>, returns all share LF-tags that the requester can view. If no resource share type is passed, lists LF-tags in the given catalog ID that the requester has permission to view.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to return.' }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A continuation token, if this is not the first call to retrieve this list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLFTagsResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postListPermissionsRoute = createRoute({
  method: 'post',
  path: '/ListPermissions',
  description:
    '<p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>',
  operationId: 'ListPermissions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
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
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              Principal: z
                .object({
                  DataLakePrincipalIdentifier: DataLakePrincipalStringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'An identifier for the Lake Formation principal.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The Lake Formation principal. Supported principals are IAM users or IAM roles.',
                  required: [],
                }),
              ResourceType: z
                .enum([
                  'CATALOG',
                  'DATABASE',
                  'TABLE',
                  'DATA_LOCATION',
                  'LF_TAG',
                  'LF_TAG_POLICY',
                  'LF_TAG_POLICY_DATABASE',
                  'LF_TAG_POLICY_TABLE',
                ])
                .exactOptional()
                .openapi({
                  description: 'Specifies a resource type to filter the permissions returned.',
                }),
              Resource: z
                .object({
                  Catalog: CatalogResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                      }),
                  ).exactOptional(),
                  Database: DatabaseResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal. ',
                      }),
                  ).exactOptional(),
                  Table: TableResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. ',
                      }),
                  ).exactOptional(),
                  TableWithColumns: TableWithColumnsResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.',
                      }),
                  ).exactOptional(),
                  DataLocation: DataLocationResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The location of an Amazon S3 path where permissions are granted or revoked. ',
                      }),
                  ).exactOptional(),
                  DataCellsFilter: DataCellsFilterResourceSchema.and(
                    z.any().openapi({ description: 'A data cell filter.' }),
                  ).exactOptional(),
                  LFTag: LFTagKeyResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The LF-tag key and values attached to a resource.',
                      }),
                  ).exactOptional(),
                  LFTagPolicy: LFTagPolicyResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A list of LF-tag conditions that define a resource's LF-tag policy.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'A structure for the resource.', required: [] }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A continuation token, if this is not the first call to retrieve this list.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to return.' }),
              IncludeRelated: z
                .string()
                .min(1)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    'Indicates that related permissions should be included in the results.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPermissionsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postListResourcesRoute = createRoute({
  method: 'post',
  path: '/ListResources',
  description: 'Lists the resources registered to be managed by the Data Catalog.',
  operationId: 'ListResources',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
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
      content: {
        'application/json': {
          schema: z
            .object({
              FilterConditionList: z
                .array(FilterConditionSchema)
                .min(1)
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    'Any applicable row-level and/or column-level filtering conditions for the resources.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'The maximum number of resource results.' }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A continuation token, if this is not the first call to retrieve these resources.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourcesResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
  },
})

export const postListTableStorageOptimizersRoute = createRoute({
  method: 'post',
  path: '/ListTableStorageOptimizers',
  description:
    'Returns the configuration of all storage optimizers associated with a specified table.',
  operationId: 'ListTableStorageOptimizers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
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
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'The Catalog ID of the table.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              DatabaseName: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'Name of the database where the table is present.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              TableName: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'Name of the table.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              StorageOptimizerType: z
                .enum(['COMPACTION', 'GARBAGE_COLLECTION', 'ALL'])
                .exactOptional()
                .openapi({
                  description:
                    'The specific type of storage optimizers to list. The supported value is <code>compaction</code>.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description: 'The number of storage optimizers to return on each call.',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'A continuation token, if this is a continuation call.' }),
            })
            .openapi({ required: ['DatabaseName', 'TableName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTableStorageOptimizersResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postListTransactionsRoute = createRoute({
  method: 'post',
  path: '/ListTransactions',
  description:
    '<p>Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.</p> <p>This operation can help you identify uncommitted transactions or to get information about transactions.</p>',
  operationId: 'ListTransactions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
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
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The catalog for which to list transactions. Defaults to the account ID of the caller.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              StatusFilter: z
                .enum(['ALL', 'COMPLETED', 'ACTIVE', 'COMMITTED', 'ABORTED'])
                .exactOptional()
                .openapi({
                  description:
                    ' A filter indicating the status of transactions to return. Options are ALL | COMPLETED | COMMITTED | ABORTED | ACTIVE. The default is <code>ALL</code>.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of transactions to return in a single call.',
                }),
              NextToken: z
                .string()
                .max(4096)
                .exactOptional()
                .openapi({
                  description:
                    'A continuation token if this is not the first call to retrieve transactions.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTransactionsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
  },
})

export const postPutDataLakeSettingsRoute = createRoute({
  method: 'post',
  path: '/PutDataLakeSettings',
  description:
    '<p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p> <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>',
  operationId: 'PutDataLakeSettings',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              DataLakeSettings: z
                .object({
                  DataLakeAdmins: DataLakePrincipalListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of Lake Formation principals. Supported principals are IAM users or IAM roles.',
                      }),
                  ).exactOptional(),
                  CreateDatabaseDefaultPermissions: PrincipalPermissionsListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specifies whether access control on newly created database is managed by Lake Formation permissions or exclusively by IAM permissions.</p> <p>A null value indicates access control by Lake Formation permissions. A value that assigns ALL to IAM_ALLOWED_PRINCIPALS indicates access control by IAM permissions. This is referred to as the setting "Use only IAM access control," and is for backward compatibility with the Glue permission model implemented by IAM permissions.</p> <p>The only permitted values are an empty array or an array that contains a single JSON object that grants ALL to IAM_ALLOWED_PRINCIPALS.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html">Changing the Default Security Settings for Your Data Lake</a>.</p>',
                      }),
                  ).exactOptional(),
                  CreateTableDefaultPermissions: PrincipalPermissionsListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specifies whether access control on newly created table is managed by Lake Formation permissions or exclusively by IAM permissions.</p> <p>A null value indicates access control by Lake Formation permissions. A value that assigns ALL to IAM_ALLOWED_PRINCIPALS indicates access control by IAM permissions. This is referred to as the setting "Use only IAM access control," and is for backward compatibility with the Glue permission model implemented by IAM permissions.</p> <p>The only permitted values are an empty array or an array that contains a single JSON object that grants ALL to IAM_ALLOWED_PRINCIPALS.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html">Changing the Default Security Settings for Your Data Lake</a>.</p>',
                      }),
                  ).exactOptional(),
                  Parameters: ParametersMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A key-value map that provides an additional configuration on your data lake. CrossAccountVersion is the key you can configure in the Parameters field. Accepted values for the CrossAccountVersion key are 1, 2, and 3.',
                      }),
                  ).exactOptional(),
                  TrustedResourceOwners: TrustedResourceOwnersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>A list of the resource-owning account IDs that the caller's account can use to share their user access details (user ARNs). The user ARNs can be logged in the resource owner's CloudTrail log.</p> <p>You may want to specify this property when you are in a high-trust boundary, such as the same team or company. </p>",
                      }),
                  ).exactOptional(),
                  AllowExternalDataFiltering: NullableBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Whether to allow Amazon EMR clusters to access data managed by Lake Formation. </p> <p>If true, you allow Amazon EMR clusters to access data in Amazon S3 locations that are registered with Lake Formation.</p> <p>If false or null, no Amazon EMR clusters will be able to access data in Amazon S3 locations that are registered with Lake Formation.</p> <p>For more information, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/getting-started-setup.html#emr-switch">(Optional) Allow Data Filtering on Amazon EMR</a>.</p>',
                      }),
                  ).exactOptional(),
                  ExternalDataFilteringAllowList: DataLakePrincipalListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of the account IDs of Amazon Web Services accounts with Amazon EMR clusters that are to perform data filtering.&gt;',
                      }),
                  ).exactOptional(),
                  AuthorizedSessionTagValueList: AuthorizedSessionTagValueListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Lake Formation relies on a privileged process secured by Amazon EMR or the third party integrator to tag the user\'s role while assuming it. Lake Formation will publish the acceptable key-value pair, for example key = "LakeFormationTrustedCaller" and value = "TRUE" and the third party integrator must properly tag the temporary security credentials that will be used to call Lake Formation\'s administrative APIs.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A structure representing a list of Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.',
                  required: [],
                }),
            })
            .openapi({ required: ['DataLakeSettings'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutDataLakeSettingsResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postRegisterResourceRoute = createRoute({
  method: 'post',
  path: '/RegisterResource',
  description:
    '<p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p> <p>The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.</p> <p> <code>ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true</code> </p> <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p> <p> <code>arn:aws:iam::12345:role/my-data-access-role</code> </p>',
  operationId: 'RegisterResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ResourceArn: z
                .string()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the resource that you want to register.',
                }),
              UseServiceLinkedRole: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Designates an Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog. A service-linked role is a unique type of IAM role that is linked directly to Lake Formation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/service-linked-roles.html">Using Service-Linked Roles for Lake Formation</a>.</p>',
                }),
              RoleArn: z
                .string()
                .regex(/arn:aws:iam::[0-9]*:role\/.*/)
                .exactOptional()
                .openapi({
                  description: 'The identifier for the role that registers the resource.',
                }),
              WithFederation: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether or not the resource is a federated resource.' }),
            })
            .openapi({ required: ['ResourceArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterResourceResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    483: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    484: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    485: {
      description: 'ResourceNumberLimitExceededException',
      content: { 'application/json': { schema: ResourceNumberLimitExceededExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postRemoveLFTagsFromResourceRoute = createRoute({
  method: 'post',
  path: '/RemoveLFTagsFromResource',
  description:
    'Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.',
  operationId: 'RemoveLFTagsFromResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              Resource: z
                .object({
                  Catalog: CatalogResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                      }),
                  ).exactOptional(),
                  Database: DatabaseResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal. ',
                      }),
                  ).exactOptional(),
                  Table: TableResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. ',
                      }),
                  ).exactOptional(),
                  TableWithColumns: TableWithColumnsResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.',
                      }),
                  ).exactOptional(),
                  DataLocation: DataLocationResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The location of an Amazon S3 path where permissions are granted or revoked. ',
                      }),
                  ).exactOptional(),
                  DataCellsFilter: DataCellsFilterResourceSchema.and(
                    z.any().openapi({ description: 'A data cell filter.' }),
                  ).exactOptional(),
                  LFTag: LFTagKeyResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The LF-tag key and values attached to a resource.',
                      }),
                  ).exactOptional(),
                  LFTagPolicy: LFTagPolicyResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A list of LF-tag conditions that define a resource's LF-tag policy.",
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'A structure for the resource.', required: [] }),
              LFTags: z
                .array(LFTagPairSchema)
                .min(1)
                .max(50)
                .openapi({ description: 'The LF-tags to be removed from the resource.' }),
            })
            .openapi({ required: ['Resource', 'LFTags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveLFTagsFromResourceResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    484: {
      description: 'GlueEncryptionException',
      content: { 'application/json': { schema: GlueEncryptionExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postRevokePermissionsRoute = createRoute({
  method: 'post',
  path: '/RevokePermissions',
  description:
    'Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.',
  operationId: 'RevokePermissions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              Principal: z
                .object({
                  DataLakePrincipalIdentifier: DataLakePrincipalStringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'An identifier for the Lake Formation principal.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The Lake Formation principal. Supported principals are IAM users or IAM roles.',
                  required: [],
                }),
              Resource: z
                .object({
                  Catalog: CatalogResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                      }),
                  ).exactOptional(),
                  Database: DatabaseResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal. ',
                      }),
                  ).exactOptional(),
                  Table: TableResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. ',
                      }),
                  ).exactOptional(),
                  TableWithColumns: TableWithColumnsResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.',
                      }),
                  ).exactOptional(),
                  DataLocation: DataLocationResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The location of an Amazon S3 path where permissions are granted or revoked. ',
                      }),
                  ).exactOptional(),
                  DataCellsFilter: DataCellsFilterResourceSchema.and(
                    z.any().openapi({ description: 'A data cell filter.' }),
                  ).exactOptional(),
                  LFTag: LFTagKeyResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The LF-tag key and values attached to a resource.',
                      }),
                  ).exactOptional(),
                  LFTagPolicy: LFTagPolicyResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A list of LF-tag conditions that define a resource's LF-tag policy.",
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'A structure for the resource.', required: [] }),
              Permissions: z
                .array(PermissionSchema)
                .openapi({
                  description:
                    'The permissions revoked to the principal on the resource. For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.',
                }),
              PermissionsWithGrantOption: z
                .array(PermissionSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Indicates a list of permissions for which to revoke the grant option allowing the principal to pass permissions to other principals.',
                }),
            })
            .openapi({ required: ['Principal', 'Resource', 'Permissions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RevokePermissionsResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postSearchDatabasesByLFTagsRoute = createRoute({
  method: 'post',
  path: '/SearchDatabasesByLFTags',
  description:
    'This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.',
  operationId: 'SearchDatabasesByLFTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
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
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A continuation token, if this is not the first call to retrieve this list.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to return.' }),
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              Expression: z
                .array(LFTagSchema)
                .openapi({
                  description:
                    'A list of conditions (<code>LFTag</code> structures) to search for in database resources.',
                }),
            })
            .openapi({ required: ['Expression'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchDatabasesByLFTagsResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    484: {
      description: 'GlueEncryptionException',
      content: { 'application/json': { schema: GlueEncryptionExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postSearchTablesByLFTagsRoute = createRoute({
  method: 'post',
  path: '/SearchTablesByLFTags',
  description:
    'This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.',
  operationId: 'SearchTablesByLFTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
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
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A continuation token, if this is not the first call to retrieve this list.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to return.' }),
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              Expression: z
                .array(LFTagSchema)
                .openapi({
                  description:
                    'A list of conditions (<code>LFTag</code> structures) to search for in table resources.',
                }),
            })
            .openapi({ required: ['Expression'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchTablesByLFTagsResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    484: {
      description: 'GlueEncryptionException',
      content: { 'application/json': { schema: GlueEncryptionExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postStartQueryPlanningRoute = createRoute({
  method: 'post',
  path: '/StartQueryPlanning',
  description:
    '<p>Submits a request to process a query statement.</p> <p>This operation generates work units that can be retrieved with the <code>GetWorkUnits</code> operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</p>',
  operationId: 'StartQueryPlanning',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              QueryPlanningContext: z
                .object({
                  CatalogId: CatalogIdStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ID of the Data Catalog where the partition in question resides. If none is provided, the Amazon Web Services account ID is used by default.',
                      }),
                  ).exactOptional(),
                  DatabaseName: QueryPlanningContextDatabaseNameStringSchema.and(
                    z.any().openapi({ description: 'The database containing the table.' }),
                  ).exactOptional(),
                  QueryAsOfTime: TimestampSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.',
                      }),
                  ).exactOptional(),
                  QueryParameters: QueryParameterMapSchema.and(
                    z.any().openapi({ description: 'A map consisting of key-value pairs.' }),
                  ).exactOptional(),
                  TransactionId: TransactionIdStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The transaction ID at which to read the table contents. If this transaction is not committed, the read will be treated as part of that transaction and will see its writes. If this transaction has aborted, an error will be returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with <code>QueryAsOfTime</code>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'A structure containing information about the query plan.',
                  required: [],
                }),
              QueryString: z
                .string()
                .min(1)
                .openapi({
                  description: 'A PartiQL query statement used as an input to the planner service.',
                }),
            })
            .openapi({ required: ['QueryPlanningContext', 'QueryString'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartQueryPlanningResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postStartTransactionRoute = createRoute({
  method: 'post',
  path: '/StartTransaction',
  description:
    'Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.',
  operationId: 'StartTransaction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TransactionType: z
                .enum(['READ_AND_WRITE', 'READ_ONLY'])
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether this transaction should be read only or read and write. Writes made using a read-only transaction ID will be rejected. Read-only transactions do not need to be committed. ',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartTransactionResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
  },
})

export const postUpdateDataCellsFilterRoute = createRoute({
  method: 'post',
  path: '/UpdateDataCellsFilter',
  description: 'Updates a data cell filter.',
  operationId: 'UpdateDataCellsFilter',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TableData: z
                .object({
                  TableCatalogId: CatalogIdStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The ID of the catalog to which the table belongs.',
                      }),
                  ).exactOptional(),
                  DatabaseName: NameStringSchema.and(
                    z.any().openapi({ description: 'A database in the Glue Data Catalog.' }),
                  ).exactOptional(),
                  TableName: NameStringSchema.and(
                    z.any().openapi({ description: 'A table in the database.' }),
                  ).exactOptional(),
                  Name: NameStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The name given by the user to the data filter cell.',
                      }),
                  ).exactOptional(),
                  RowFilter: RowFilterSchema.and(
                    z.any().openapi({ description: 'A PartiQL predicate.' }),
                  ).exactOptional(),
                  ColumnNames: ColumnNamesSchema.and(
                    z.any().openapi({ description: 'A list of column names.' }),
                  ).exactOptional(),
                  ColumnWildcard: ColumnWildcardSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A wildcard with exclusions.</p> <p>You must specify either a <code>ColumnNames</code> list or the <code>ColumnWildCard</code>. </p>',
                      }),
                  ).exactOptional(),
                  VersionId: VersionStringSchema.and(
                    z.any().openapi({ description: 'The ID of the data cells filter version.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'A structure that describes certain columns on certain rows.',
                  required: [],
                }),
            })
            .openapi({ required: ['TableData'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDataCellsFilterResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    484: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postUpdateLFTagRoute = createRoute({
  method: 'post',
  path: '/UpdateLFTag',
  description:
    'Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key\'s value. ',
  operationId: 'UpdateLFTag',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. ',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              TagKey: z
                .string()
                .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@%]*)$/u)
                .min(1)
                .max(128)
                .openapi({
                  description: 'The key-name for the LF-tag for which to add or delete values.',
                }),
              TagValuesToDelete: z
                .array(LFTagValueSchema)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'A list of LF-tag values to delete from the LF-tag.' }),
              TagValuesToAdd: z
                .array(LFTagValueSchema)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'A list of LF-tag values to add from the LF-tag.' }),
            })
            .openapi({ required: ['TagKey'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateLFTagResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postUpdateResourceRoute = createRoute({
  method: 'post',
  path: '/UpdateResource',
  description:
    'Updates the data access role used for vending access to the given (registered) resource in Lake Formation. ',
  operationId: 'UpdateResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              RoleArn: z
                .string()
                .regex(/arn:aws:iam::[0-9]*:role\/.*/)
                .openapi({
                  description:
                    'The new role to use for the given resource registered in Lake Formation.',
                }),
              ResourceArn: z.string().openapi({ description: 'The resource ARN.' }),
              WithFederation: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether or not the resource is a federated resource.' }),
            })
            .openapi({ required: ['RoleArn', 'ResourceArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateResourceResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
  },
})

export const postUpdateTableObjectsRoute = createRoute({
  method: 'post',
  path: '/UpdateTableObjects',
  description:
    'Updates the manifest of Amazon S3 objects that make up the specified governed table.',
  operationId: 'UpdateTableObjects',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The catalog containing the governed table to update. Defaults to the caller’s account ID.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              DatabaseName: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'The database containing the governed table to update.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              TableName: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'The governed table to update.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              TransactionId: z
                .string()
                .regex(/[\p{L}\p{N}\p{P}]*/u)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The transaction at which to do the write.' }),
              WriteOperations: z
                .array(WriteOperationSchema)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'A list of <code>WriteOperation</code> objects that define an object to add to or delete from the manifest for a governed table.',
                }),
            })
            .openapi({ required: ['DatabaseName', 'TableName', 'WriteOperations'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTableObjectsResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'OperationTimeoutException',
      content: { 'application/json': { schema: OperationTimeoutExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    484: {
      description: 'TransactionCommittedException',
      content: { 'application/json': { schema: TransactionCommittedExceptionSchema } },
    },
    485: {
      description: 'TransactionCanceledException',
      content: { 'application/json': { schema: TransactionCanceledExceptionSchema } },
    },
    486: {
      description: 'TransactionCommitInProgressException',
      content: { 'application/json': { schema: TransactionCommitInProgressExceptionSchema } },
    },
    487: {
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
    488: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postUpdateTableStorageOptimizerRoute = createRoute({
  method: 'post',
  path: '/UpdateTableStorageOptimizer',
  description: 'Updates the configuration of the storage optimizers for a table.',
  operationId: 'UpdateTableStorageOptimizer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CatalogId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'The Catalog ID of the table.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              DatabaseName: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'Name of the database where the table is present.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              TableName: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'Name of the table for which to enable the storage optimizer.',
                  'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*',
                }),
              StorageOptimizerConfig: z
                .record(z.string(), StorageOptimizerConfigSchema)
                .openapi({
                  description: 'Name of the table for which to enable the storage optimizer.',
                }),
            })
            .openapi({ required: ['DatabaseName', 'TableName', 'StorageOptimizerConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTableStorageOptimizerResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})
