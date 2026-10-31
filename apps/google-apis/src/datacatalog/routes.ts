import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecSchema = z
  .object({
    type: z
      .enum([
        'LOOKER_COLUMN_TYPE_UNSPECIFIED',
        'DIMENSION',
        'DIMENSION_GROUP',
        'FILTER',
        'MEASURE',
        'PARAMETER',
      ])
      .exactOptional()
      .openapi({ description: 'Looker specific column type of this column.' }),
  })
  .openapi({ description: 'Column info specific to Looker System.', required: [] })
  .openapi('GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec')

type GoogleCloudDatacatalogV1ColumnSchemaType = {
  column?: string
  defaultValue?: string
  description?: string
  gcRule?: string
  highestIndexingType?:
    | 'INDEXING_TYPE_UNSPECIFIED'
    | 'INDEXING_TYPE_NONE'
    | 'INDEXING_TYPE_NON_UNIQUE'
    | 'INDEXING_TYPE_UNIQUE'
    | 'INDEXING_TYPE_PRIMARY_KEY'
  lookerColumnSpec?: z.infer<typeof GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecSchema>
  mode?: string
  ordinalPosition?: number
  subcolumns?: GoogleCloudDatacatalogV1ColumnSchemaType[]
  type?: string
}

type GoogleCloudDatacatalogV1beta1ColumnSchemaType = {
  column?: string
  description?: string
  mode?: string
  subcolumns?: GoogleCloudDatacatalogV1beta1ColumnSchemaType[]
  type?: string
}

type GoogleCloudDatacatalogV1beta1SerializedPolicyTagType = {
  childPolicyTags?: GoogleCloudDatacatalogV1beta1SerializedPolicyTagType[]
  description?: string
  displayName?: string
  policyTag?: string
}

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

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const GetPolicyOptionsSchema = z
  .object({
    requestedPolicyVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({ description: 'Encapsulates settings provided to GetIamPolicy.', required: [] })
  .openapi('GetPolicyOptions')

const GetIamPolicyRequestSchema = z
  .object({
    options: GetPolicyOptionsSchema.exactOptional().openapi({
      description:
        'OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.',
    }),
  })
  .openapi({ description: 'Request message for `GetIamPolicy` method.', required: [] })
  .openapi('GetIamPolicyRequest')

const GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecSchema = z
  .object({
    database: z.string().exactOptional().openapi({ description: 'Database name.' }),
    instanceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Cloud SQL instance ID in the format of `project:location:instance`.',
      }),
    type: z
      .enum(['DATABASE_TYPE_UNSPECIFIED', 'POSTGRES', 'MYSQL'])
      .exactOptional()
      .openapi({ description: 'Type of the Cloud SQL database.' }),
  })
  .openapi({
    description: 'Specification for the BigQuery connection to a Cloud SQL instance.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec')

const GoogleCloudDatacatalogV1BigQueryConnectionSpecSchema = z
  .object({
    cloudSql: GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecSchema.exactOptional().openapi({
      description: 'Specification for the BigQuery connection to a Cloud SQL instance.',
    }),
    connectionType: z
      .enum(['CONNECTION_TYPE_UNSPECIFIED', 'CLOUD_SQL'])
      .exactOptional()
      .openapi({ description: 'The type of the BigQuery connection.' }),
    hasCredential: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if there are credentials attached to the BigQuery connection; false otherwise.',
      }),
  })
  .openapi({ description: 'Specification for the BigQuery connection.', required: [] })
  .openapi('GoogleCloudDatacatalogV1BigQueryConnectionSpec')

const GoogleCloudDatacatalogV1BigQueryDateShardedSpecSchema = z
  .object({
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The Data Catalog resource name of the dataset entry the current table belongs to. For example: `projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}`.',
        readOnly: true,
      }),
    latestShardResource: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. BigQuery resource name of the latest shard.',
        readOnly: true,
      }),
    shardCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Total number of shards.', readOnly: true }),
    tablePrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The table name prefix of the shards. The name of any given shard is `[table_prefix]YYYYMMDD`. For example, for the `MyTable20180101` shard, the `table_prefix` is `MyTable`.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding).',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1BigQueryDateShardedSpec')

const GoogleCloudDatacatalogV1BigQueryRoutineSpecSchema = z
  .object({
    importedLibraries: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Paths of the imported libraries.' }),
  })
  .openapi({ description: 'Fields specific for BigQuery routines.', required: [] })
  .openapi('GoogleCloudDatacatalogV1BigQueryRoutineSpec')

const GoogleCloudDatacatalogV1TableSpecSchema = z
  .object({
    groupedEntry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. If the table is date-sharded, that is, it matches the `[prefix]YYYYMMDD` name pattern, this field is the Data Catalog resource name of the date-sharded grouped entry. For example: `projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}`. Otherwise, `grouped_entry` is empty.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Normal BigQuery table specification.', required: [] })
  .openapi('GoogleCloudDatacatalogV1TableSpec')

const GoogleCloudDatacatalogV1ViewSpecSchema = z
  .object({
    viewQuery: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The query that defines the table view.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Table view specification.', required: [] })
  .openapi('GoogleCloudDatacatalogV1ViewSpec')

const GoogleCloudDatacatalogV1BigQueryTableSpecSchema = z
  .object({
    tableSourceType: z
      .enum([
        'TABLE_SOURCE_TYPE_UNSPECIFIED',
        'BIGQUERY_VIEW',
        'BIGQUERY_TABLE',
        'BIGQUERY_MATERIALIZED_VIEW',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The table source type.', readOnly: true }),
    tableSpec: GoogleCloudDatacatalogV1TableSpecSchema.exactOptional().openapi({
      description:
        'Specification of a BigQuery table. Populated only if the `table_source_type` is `BIGQUERY_TABLE`.',
    }),
    viewSpec: GoogleCloudDatacatalogV1ViewSpecSchema.exactOptional().openapi({
      description:
        'Table view specification. Populated only if the `table_source_type` is `BIGQUERY_VIEW`.',
    }),
  })
  .openapi({ description: 'Describes a BigQuery table.', required: [] })
  .openapi('GoogleCloudDatacatalogV1BigQueryTableSpec')

const GoogleCloudDatacatalogV1ContactsPersonSchema = z
  .object({
    designation: z
      .string()
      .exactOptional()
      .openapi({ description: 'Designation of the person, for example, Data Steward.' }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Email of the person in the format of `john.doe@xyz`, ``, or `John Doe`.',
      }),
  })
  .openapi({ description: 'A contact person for the entry.', required: [] })
  .openapi('GoogleCloudDatacatalogV1ContactsPerson')

const GoogleCloudDatacatalogV1ContactsSchema = z
  .object({
    people: z
      .array(GoogleCloudDatacatalogV1ContactsPersonSchema)
      .exactOptional()
      .openapi({ description: 'The list of contact people for the entry.' }),
  })
  .openapi({ description: 'Contact people for the entry.', required: [] })
  .openapi('GoogleCloudDatacatalogV1Contacts')

const GoogleCloudDatacatalogV1EntryOverviewSchema = z
  .object({
    overview: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Entry overview with support for rich text. The overview must only contain Unicode characters, and should be formatted using HTML. The maximum length is 10 MiB as this value holds HTML descriptions including encoded images. The maximum length of the text without images is 100 KiB.',
      }),
  })
  .openapi({
    description: 'Entry overview fields for rich text descriptions of entries.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1EntryOverview')

const GoogleCloudDatacatalogV1BusinessContextSchema = z
  .object({
    contacts: GoogleCloudDatacatalogV1ContactsSchema.exactOptional().openapi({
      description: 'Contact people for the entry.',
    }),
    entryOverview: GoogleCloudDatacatalogV1EntryOverviewSchema.exactOptional().openapi({
      description: 'Entry overview fields for rich text descriptions of entries.',
    }),
  })
  .openapi({ description: 'Business Context of the entry.', required: [] })
  .openapi('GoogleCloudDatacatalogV1BusinessContext')

const GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpecSchema = z
  .object({
    displayName: z.string().exactOptional().openapi({ description: 'Name of the cluster.' }),
    linkedResource: z
      .string()
      .exactOptional()
      .openapi({ description: 'A link back to the parent resource, in this case Instance.' }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Location of the cluster, typically a Cloud zone.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the resource. For a cluster this would be "CLUSTER".' }),
  })
  .openapi({
    description: 'Spec that applies to clusters of an Instance of Cloud Bigtable.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec')

const GoogleCloudDatacatalogV1CloudBigtableInstanceSpecSchema = z
  .object({
    cloudBigtableClusterSpecs: z
      .array(GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpecSchema)
      .exactOptional()
      .openapi({ description: 'The list of clusters for the Instance.' }),
  })
  .openapi({
    description:
      'Specification that applies to Instance entries that are part of `CLOUD_BIGTABLE` system. (user_specified_type)',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1CloudBigtableInstanceSpec')

const GoogleCloudDatacatalogV1CloudBigtableSystemSpecSchema = z
  .object({
    instanceDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display name of the Instance. This is user specified and different from the resource name.',
      }),
  })
  .openapi({
    description:
      'Specification that applies to all entries that are part of `CLOUD_BIGTABLE` system (user_specified_type)',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1CloudBigtableSystemSpec')

const GoogleCloudDatacatalogV1ColumnSchemaSchema: z.ZodType<GoogleCloudDatacatalogV1ColumnSchemaType> =
  z
    .lazy(() =>
      z
        .object({
          column: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Required. Name of the column. Must be a UTF-8 string without dots (.). The maximum size is 64 bytes.',
            }),
          defaultValue: z
            .string()
            .exactOptional()
            .openapi({ description: 'Optional. Default value for the column.' }),
          description: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Optional. Description of the column. Default value is an empty string. The description must be a UTF-8 string with the maximum size of 2000 bytes.',
            }),
          gcRule: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Optional. Garbage collection policy for the column or column family. Applies to systems like Cloud Bigtable.',
            }),
          highestIndexingType: z
            .enum([
              'INDEXING_TYPE_UNSPECIFIED',
              'INDEXING_TYPE_NONE',
              'INDEXING_TYPE_NON_UNIQUE',
              'INDEXING_TYPE_UNIQUE',
              'INDEXING_TYPE_PRIMARY_KEY',
            ])
            .exactOptional()
            .openapi({ description: 'Optional. Most important inclusion of this column.' }),
          lookerColumnSpec:
            GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecSchema.exactOptional().openapi({
              description: 'Looker specific column info of this column.',
            }),
          mode: z
            .string()
            .exactOptional()
            .openapi({
              description:
                "Optional. A column's mode indicates whether values in this column are required, nullable, or repeated. Only `NULLABLE`, `REQUIRED`, and `REPEATED` values are supported. Default mode is `NULLABLE`.",
            }),
          ordinalPosition: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Optional. Ordinal position' }),
          subcolumns: z
            .array(GoogleCloudDatacatalogV1ColumnSchemaSchema)
            .exactOptional()
            .openapi({
              description:
                'Optional. Schema of sub-columns. A column can have zero or more sub-columns.',
            }),
          type: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Required. Type of the column. Must be a UTF-8 string with the maximum size of 128 bytes.',
            }),
        })
        .openapi({
          description: 'A column within a schema. Columns can be nested inside other columns.',
          required: [],
        }),
    )
    .openapi('GoogleCloudDatacatalogV1ColumnSchema')

const GoogleCloudDatacatalogV1CommonUsageStatsSchema = z
  .object({
    viewCount: z.string().exactOptional().openapi({ description: 'View count in source system.' }),
  })
  .openapi({
    description: "Common statistics on the entry's usage. They can be set on any system.",
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1CommonUsageStats')

const GoogleCloudDatacatalogV1StoragePropertiesSchema = z
  .object({
    filePattern: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Patterns to identify a set of files for this fileset. Examples of a valid `file_pattern`: * `gs://bucket_name/dir/*`: matches all files in the `bucket_name/dir` directory * `gs://bucket_name/dir/**`: matches all files in the `bucket_name/dir` and all subdirectories recursively * `gs://bucket_name/file*`: matches files prefixed by `file` in `bucket_name` * `gs://bucket_name/??.txt`: matches files with two characters followed by `.txt` in `bucket_name` * `gs://bucket_name/[aeiou].txt`: matches files that contain a single vowel character followed by `.txt` in `bucket_name` * `gs://bucket_name/[a-m].txt`: matches files that contain `a`, `b`, ... or `m` followed by `.txt` in `bucket_name` * `gs://bucket_name/a/*/b`: matches all files in `bucket_name` that match the `a/*/b` pattern, such as `a/c/b`, `a/d/b` * `gs://another_bucket/a.txt`: matches `gs://another_bucket/a.txt`',
      }),
    fileType: z
      .string()
      .exactOptional()
      .openapi({ description: 'File type in MIME format, for example, `text/plain`.' }),
  })
  .openapi({ description: 'Details the properties of the underlying storage.', required: [] })
  .openapi('GoogleCloudDatacatalogV1StorageProperties')

const GoogleCloudDatacatalogV1DataSourceSchema = z
  .object({
    resource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full name of a resource as defined by the service. For example: `//bigquery.googleapis.com/projects/{PROJECT_ID}/locations/{LOCATION}/datasets/{DATASET_ID}/tables/{TABLE_ID}`',
      }),
    service: z
      .enum(['SERVICE_UNSPECIFIED', 'CLOUD_STORAGE', 'BIGQUERY'])
      .exactOptional()
      .openapi({ description: 'Service that physically stores the data.' }),
    sourceEntry: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Data Catalog entry name, if applicable.',
        readOnly: true,
      }),
    storageProperties: GoogleCloudDatacatalogV1StoragePropertiesSchema.exactOptional().openapi({
      description: 'Detailed properties of the underlying storage.',
    }),
  })
  .openapi({ description: 'Physical location of an entry.', required: [] })
  .openapi('GoogleCloudDatacatalogV1DataSource')

const GoogleCloudDatacatalogV1DataSourceConnectionSpecSchema = z
  .object({
    bigqueryConnectionSpec:
      GoogleCloudDatacatalogV1BigQueryConnectionSpecSchema.exactOptional().openapi({
        description: 'Output only. Fields specific to BigQuery connections.',
      }),
  })
  .openapi({
    description:
      'Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type. Only one of internal specs can be set at the time, and cannot be changed later.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1DataSourceConnectionSpec')

const GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecSchema = z
  .object({
    baseTable: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of a singular table this view reflects one to one.' }),
    sqlQuery: z
      .string()
      .exactOptional()
      .openapi({ description: 'SQL query used to generate this view.' }),
    viewType: z
      .enum(['VIEW_TYPE_UNSPECIFIED', 'STANDARD_VIEW', 'MATERIALIZED_VIEW'])
      .exactOptional()
      .openapi({ description: 'Type of this view.' }),
  })
  .openapi({ description: 'Specification that applies to database view.', required: [] })
  .openapi('GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec')

const GoogleCloudDatacatalogV1PhysicalSchemaAvroSchemaSchema = z
  .object({
    text: z.string().exactOptional().openapi({ description: 'JSON source of the Avro schema.' }),
  })
  .openapi({ description: 'Schema in Avro JSON format.', required: [] })
  .openapi('GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema')

const GoogleCloudDatacatalogV1PhysicalSchemaCsvSchemaSchema = z
  .object({})
  .openapi({ description: 'Marks a CSV-encoded data source.' })
  .openapi('GoogleCloudDatacatalogV1PhysicalSchemaCsvSchema')

const GoogleCloudDatacatalogV1PhysicalSchemaOrcSchemaSchema = z
  .object({})
  .openapi({ description: 'Marks an ORC-encoded data source.' })
  .openapi('GoogleCloudDatacatalogV1PhysicalSchemaOrcSchema')

const GoogleCloudDatacatalogV1PhysicalSchemaParquetSchemaSchema = z
  .object({})
  .openapi({ description: 'Marks a Parquet-encoded data source.' })
  .openapi('GoogleCloudDatacatalogV1PhysicalSchemaParquetSchema')

const GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchemaSchema = z
  .object({
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Protocol buffer source of the schema.' }),
  })
  .openapi({ description: 'Schema in protocol buffer format.', required: [] })
  .openapi('GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema')

const GoogleCloudDatacatalogV1PhysicalSchemaThriftSchemaSchema = z
  .object({
    text: z.string().exactOptional().openapi({ description: 'Thrift IDL source of the schema.' }),
  })
  .openapi({ description: 'Schema in Thrift format.', required: [] })
  .openapi('GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema')

const GoogleCloudDatacatalogV1PhysicalSchemaSchema = z
  .object({
    avro: GoogleCloudDatacatalogV1PhysicalSchemaAvroSchemaSchema.exactOptional().openapi({
      description: 'Schema in Avro JSON format.',
    }),
    csv: GoogleCloudDatacatalogV1PhysicalSchemaCsvSchemaSchema.exactOptional().openapi({
      description: 'Marks a CSV-encoded data source.',
    }),
    orc: GoogleCloudDatacatalogV1PhysicalSchemaOrcSchemaSchema.exactOptional().openapi({
      description: 'Marks an ORC-encoded data source.',
    }),
    parquet: GoogleCloudDatacatalogV1PhysicalSchemaParquetSchemaSchema.exactOptional().openapi({
      description: 'Marks a Parquet-encoded data source.',
    }),
    protobuf: GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchemaSchema.exactOptional().openapi({
      description: 'Schema in protocol buffer format.',
    }),
    thrift: GoogleCloudDatacatalogV1PhysicalSchemaThriftSchemaSchema.exactOptional().openapi({
      description: 'Schema in Thrift format.',
    }),
  })
  .openapi({
    description:
      'Native schema used by a resource represented as an entry. Used by query engines for deserializing and parsing source data.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1PhysicalSchema')

const GoogleCloudDatacatalogV1DataplexSpecSchema = z
  .object({
    asset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fully qualified resource name of an asset in Dataplex, to which the underlying data source (Cloud Storage bucket or BigQuery dataset) of the entity is attached.',
      }),
    compressionFormat: z
      .string()
      .exactOptional()
      .openapi({ description: 'Compression format of the data, e.g., zip, gzip etc.' }),
    dataFormat: GoogleCloudDatacatalogV1PhysicalSchemaSchema.exactOptional().openapi({
      description: 'Format of the data.',
    }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Project ID of the underlying Cloud Storage or BigQuery data. Note that this may not be the same project as the correspondingly Dataplex lake / zone / asset.',
      }),
  })
  .openapi({ description: 'Common Dataplex fields.', required: [] })
  .openapi('GoogleCloudDatacatalogV1DataplexSpec')

const GoogleCloudDatacatalogV1DataplexExternalTableSchema = z
  .object({
    dataCatalogEntry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the Data Catalog entry representing the external table.' }),
    fullyQualifiedName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Fully qualified name (FQN) of the external table.' }),
    googleCloudResource: z
      .string()
      .exactOptional()
      .openapi({ description: 'Google Cloud resource name of the external table.' }),
    system: z
      .enum([
        'INTEGRATED_SYSTEM_UNSPECIFIED',
        'BIGQUERY',
        'CLOUD_PUBSUB',
        'DATAPROC_METASTORE',
        'DATAPLEX',
        'CLOUD_SPANNER',
        'CLOUD_BIGTABLE',
        'CLOUD_SQL',
        'LOOKER',
      ])
      .exactOptional()
      .openapi({ description: 'Service in which the external table is registered.' }),
  })
  .openapi({
    description:
      'External table registered by Dataplex. Dataplex publishes data discovered from an asset into multiple other systems (BigQuery, DPMS) in form of tables. We call them "external tables". External tables are also synced into the Data Catalog. This message contains pointers to those external tables (fully qualified name, resource name et cetera) within the Data Catalog.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1DataplexExternalTable')

const GoogleCloudDatacatalogV1DataplexTableSpecSchema = z
  .object({
    dataplexSpec: GoogleCloudDatacatalogV1DataplexSpecSchema.exactOptional().openapi({
      description: 'Common Dataplex fields.',
    }),
    externalTables: z
      .array(GoogleCloudDatacatalogV1DataplexExternalTableSchema)
      .exactOptional()
      .openapi({
        description:
          'List of external tables registered by Dataplex in other systems based on the same underlying data. External tables allow to query this data in those systems.',
      }),
    userManaged: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the table schema is managed by the user or not.' }),
  })
  .openapi({ description: 'Entry specification for a Dataplex table.', required: [] })
  .openapi('GoogleCloudDatacatalogV1DataplexTableSpec')

const GoogleCloudDatacatalogV1DatabaseTableSpecSchema = z
  .object({
    databaseViewSpec:
      GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecSchema.exactOptional().openapi({
        description:
          'Spec what aplies to tables that are actually views. Not set for "real" tables.',
      }),
    dataplexTable: GoogleCloudDatacatalogV1DataplexTableSpecSchema.exactOptional().openapi({
      description:
        'Output only. Fields specific to a Dataplex table and present only in the Dataplex table entries.',
      readOnly: true,
    }),
    type: z
      .enum(['TABLE_TYPE_UNSPECIFIED', 'NATIVE', 'EXTERNAL'])
      .exactOptional()
      .openapi({ description: 'Type of this table.' }),
  })
  .openapi({
    description:
      'Specification that applies to a table resource. Valid only for entries with the `TABLE` type.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1DatabaseTableSpec')

const GoogleCloudDatacatalogV1DataplexFilesetSpecSchema = z
  .object({
    dataplexSpec: GoogleCloudDatacatalogV1DataplexSpecSchema.exactOptional().openapi({
      description: 'Common Dataplex fields.',
    }),
  })
  .openapi({ description: 'Entry specyfication for a Dataplex fileset.', required: [] })
  .openapi('GoogleCloudDatacatalogV1DataplexFilesetSpec')

const GoogleCloudDatacatalogV1TagFieldEnumValueSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the enum value.' }),
  })
  .openapi({ description: 'An enum value.', required: [] })
  .openapi('GoogleCloudDatacatalogV1TagFieldEnumValue')

const GoogleCloudDatacatalogV1TagFieldSchema = z
  .object({
    boolValue: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The value of a tag field with a boolean type.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The display name of this field.', readOnly: true }),
    doubleValue: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The value of a tag field with a double type.' }),
    enumValue: GoogleCloudDatacatalogV1TagFieldEnumValueSchema.exactOptional().openapi({
      description:
        'The value of a tag field with an enum type. This value must be one of the allowed values listed in this enum.',
    }),
    order: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Output only. The order of this field with respect to other fields in this tag. Can be set by Tag. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag don't have to be sequential.",
        readOnly: true,
      }),
    richtextValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of a tag field with a rich text type. The maximum length is 10 MiB as this value holds HTML descriptions including encoded images. The maximum length of the text without images is 100 KiB.',
      }),
    stringValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of a tag field with a string type. The maximum length is 2000 UTF-8 characters.',
      }),
    timestampValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of a tag field with a timestamp type.' }),
  })
  .openapi({
    description: 'Contains the value and additional information on a field within a Tag.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1TagField')

const GoogleCloudDatacatalogV1TagSchema = z
  .object({
    column: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resources like entry can have schemas associated with them. This scope allows you to attach tags to an individual column based on that schema. To attach a tag to a nested column, separate column names with a dot (`.`). Example: `column.nested_column`.',
      }),
    fields: z
      .record(z.string(), GoogleCloudDatacatalogV1TagFieldSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Maps the ID of a tag field to its value and additional information about that field. Tag template defines valid field IDs. A tag must have at least 1 field and at most 500 fields.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name.',
      }),
    template: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of the tag template this tag uses. Example: `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE_ID}` This field cannot be modified after creation.',
      }),
    templateDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the tag template.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1Tag')

const GoogleCloudDatacatalogV1FilesetSpecSchema = z
  .object({
    dataplexFileset: GoogleCloudDatacatalogV1DataplexFilesetSpecSchema.exactOptional().openapi({
      description:
        'Fields specific to a Dataplex fileset and present only in the Dataplex fileset entries.',
    }),
  })
  .openapi({
    description:
      "Specification that applies to a fileset. Valid only for entries with the 'FILESET' type.",
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1FilesetSpec')

const GoogleCloudDatacatalogV1SystemTimestampsSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Creation timestamp of the resource within the given system.' }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Expiration timestamp of the resource within the given system. Currently only applicable to BigQuery resources.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp of the last modification of the resource or its metadata within a given system. Note: Depending on the source system, not every modification updates this timestamp. For example, BigQuery timestamps every metadata modification but not data or permission changes.',
      }),
  })
  .openapi({
    description: 'Timestamps associated with this resource in a particular system.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1SystemTimestamps')

const GoogleCloudDatacatalogV1GcsFileSpecSchema = z
  .object({
    filePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Full file path. Example: `gs://bucket_name/a/b.txt`.' }),
    gcsTimestamps: GoogleCloudDatacatalogV1SystemTimestampsSchema.exactOptional().openapi({
      description:
        'Output only. Creation, modification, and expiration timestamps of a Cloud Storage file.',
      readOnly: true,
    }),
    sizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. File size in bytes.', readOnly: true }),
  })
  .openapi({ description: 'Specification of a single file in Cloud Storage.', required: [] })
  .openapi('GoogleCloudDatacatalogV1GcsFileSpec')

const GoogleCloudDatacatalogV1GcsFilesetSpecSchema = z
  .object({
    filePatterns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. Patterns to identify a set of files in Google Cloud Storage. For more information, see [Wildcard Names] (https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames). Note: Currently, bucket wildcards are not supported. Examples of valid `file_patterns`: * `gs://bucket_name/dir/*`: matches all files in `bucket_name/dir` directory * `gs://bucket_name/dir/**`: matches all files in `bucket_name/dir` and all subdirectories * `gs://bucket_name/file*`: matches files prefixed by `file` in `bucket_name` * `gs://bucket_name/??.txt`: matches files with two characters followed by `.txt` in `bucket_name` * `gs://bucket_name/[aeiou].txt`: matches files that contain a single vowel character followed by `.txt` in `bucket_name` * `gs://bucket_name/[a-m].txt`: matches files that contain `a`, `b`, ... or `m` followed by `.txt` in `bucket_name` * `gs://bucket_name/a/*/b`: matches all files in `bucket_name` that match the `a/*/b` pattern, such as `a/c/b`, `a/d/b` * `gs://another_bucket/a.txt`: matches `gs://another_bucket/a.txt` You can combine wildcards to match complex sets of files, for example: `gs://bucket_name/[a-m]??.j*g`',
      }),
    sampleGcsFileSpecs: z
      .array(GoogleCloudDatacatalogV1GcsFileSpecSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Sample files contained in this fileset, not all files contained in this fileset are represented here.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Describes a Cloud Storage fileset entry.', required: [] })
  .openapi('GoogleCloudDatacatalogV1GcsFilesetSpec')

const GoogleCloudDatacatalogV1LookerSystemSpecSchema = z
  .object({
    parentInstanceDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the parent Looker Instance. Empty if it does not exist.' }),
    parentInstanceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the parent Looker Instance. Empty if it does not exist. Example value: `someinstance.looker.com`',
      }),
    parentModelDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the parent Model. Empty if it does not exist.' }),
    parentModelId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the parent Model. Empty if it does not exist.' }),
    parentViewDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the parent View. Empty if it does not exist.' }),
    parentViewId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the parent View. Empty if it does not exist.' }),
  })
  .openapi({
    description:
      'Specification that applies to entries that are part `LOOKER` system (user_specified_type)',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1LookerSystemSpec')

const GoogleCloudDatacatalogV1PersonalDetailsSchema = z
  .object({
    starTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Set if the entry is starred; unset otherwise.' }),
    starred: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the entry is starred by the user; false otherwise.' }),
  })
  .openapi({
    description: 'Entry metadata relevant only to the user and private to them.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1PersonalDetails')

const GoogleCloudDatacatalogV1RoutineSpecArgumentSchema = z
  .object({
    mode: z
      .enum(['MODE_UNSPECIFIED', 'IN', 'OUT', 'INOUT'])
      .exactOptional()
      .openapi({ description: 'Specifies whether the argument is input or output.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the argument. A return argument of a function might not have a name.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of the argument. The exact value depends on the source system and the language.',
      }),
  })
  .openapi({
    description: 'Input or output argument of a function or stored procedure.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1RoutineSpecArgument')

const GoogleCloudDatacatalogV1RoutineSpecSchema = z
  .object({
    bigqueryRoutineSpec: GoogleCloudDatacatalogV1BigQueryRoutineSpecSchema.exactOptional().openapi({
      description: 'Fields specific for BigQuery routines.',
    }),
    definitionBody: z.string().exactOptional().openapi({ description: 'The body of the routine.' }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language the routine is written in. The exact value depends on the source system. For BigQuery routines, possible values are: * `SQL` * `JAVASCRIPT`',
      }),
    returnType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Return type of the argument. The exact value depends on the source system and the language.',
      }),
    routineArguments: z
      .array(GoogleCloudDatacatalogV1RoutineSpecArgumentSchema)
      .exactOptional()
      .openapi({ description: 'Arguments of the routine.' }),
    routineType: z
      .enum(['ROUTINE_TYPE_UNSPECIFIED', 'SCALAR_FUNCTION', 'PROCEDURE'])
      .exactOptional()
      .openapi({ description: 'The type of the routine.' }),
  })
  .openapi({
    description:
      'Specification that applies to a routine. Valid only for entries with the `ROUTINE` type.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1RoutineSpec')

const GoogleCloudDatacatalogV1SchemaSchema = z
  .object({
    columns: z
      .array(GoogleCloudDatacatalogV1ColumnSchemaSchema)
      .exactOptional()
      .openapi({
        description:
          'The unified GoogleSQL-like schema of columns. The overall maximum number of columns and nested columns is 10,000. The maximum nested depth is 15 levels.',
      }),
  })
  .openapi({
    description: 'Represents a schema, for example, a BigQuery, GoogleSQL, or Avro schema.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1Schema')

const GoogleCloudDatacatalogV1ServiceSpecSchema = z
  .object({
    cloudBigtableInstanceSpec:
      GoogleCloudDatacatalogV1CloudBigtableInstanceSpecSchema.exactOptional().openapi({
        description: 'Specification that applies to Instance entries of `CLOUD_BIGTABLE` system.',
      }),
  })
  .openapi({
    description:
      'Specification that applies to a Service resource. Valid only for entries with the `SERVICE` type.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1ServiceSpec')

const GoogleCloudDatacatalogV1SqlDatabaseSystemSpecSchema = z
  .object({
    databaseVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Version of the database engine.' }),
    instanceHost: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Host of the SQL database enum InstanceHost { UNDEFINED = 0; SELF_HOSTED = 1; CLOUD_SQL = 2; AMAZON_RDS = 3; AZURE_SQL = 4; } Host of the enclousing database instance.',
      }),
    sqlEngine: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SQL Database Engine. enum SqlEngine { UNDEFINED = 0; MY_SQL = 1; POSTGRE_SQL = 2; SQL_SERVER = 3; } Engine of the enclosing database instance.',
      }),
  })
  .openapi({
    description:
      'Specification that applies to entries that are part `SQL_DATABASE` system (user_specified_type)',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1SqlDatabaseSystemSpec')

const GoogleCloudDatacatalogV1UsageStatsSchema = z
  .object({
    totalCancellations: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The number of cancelled attempts to use the underlying entry.' }),
    totalCompletions: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The number of successful uses of the underlying entry.' }),
    totalExecutionTimeForCompletionsMillis: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Total time spent only on successful uses, in milliseconds.' }),
    totalFailures: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The number of failed attempts to use the underlying entry.' }),
  })
  .openapi({
    description:
      "Detailed statistics on the entry's usage. Usage statistics have the following limitations: - Only BigQuery tables have them. - They only include BigQuery query jobs. - They might be underestimated because wildcard table references are not yet counted. For more information, see [Querying multiple tables using a wildcard table] (https://cloud.google.com/bigquery/docs/querying-wildcard-tables)",
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1UsageStats')

const GoogleCloudDatacatalogV1UsageSignalSchema = z
  .object({
    commonUsageWithinTimeRange: z
      .record(z.string(), GoogleCloudDatacatalogV1CommonUsageStatsSchema)
      .exactOptional()
      .openapi({
        description:
          'Common usage statistics over each of the predefined time ranges. Supported time ranges are `{"24H", "7D", "30D", "Lifetime"}`.',
      }),
    favoriteCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Favorite count in the source system.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end timestamp of the duration of usage statistics.' }),
    usageWithinTimeRange: z
      .record(z.string(), GoogleCloudDatacatalogV1UsageStatsSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. BigQuery usage statistics over each of the predefined time ranges. Supported time ranges are `{"24H", "7D", "30D"}`.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1UsageSignal')

const GoogleCloudDatacatalogV1EntrySchema = z
  .object({
    bigqueryDateShardedSpec:
      GoogleCloudDatacatalogV1BigQueryDateShardedSpecSchema.exactOptional().openapi({
        description:
          'Output only. Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding).',
        readOnly: true,
      }),
    bigqueryTableSpec: GoogleCloudDatacatalogV1BigQueryTableSpecSchema.exactOptional().openapi({
      description:
        'Output only. Specification that applies to a BigQuery table. Valid only for entries with the `TABLE` type.',
      readOnly: true,
    }),
    businessContext: GoogleCloudDatacatalogV1BusinessContextSchema.exactOptional().openapi({
      description: 'Business Context of the entry. Not supported for BigQuery datasets',
    }),
    cloudBigtableSystemSpec:
      GoogleCloudDatacatalogV1CloudBigtableSystemSpecSchema.exactOptional().openapi({
        description:
          'Specification that applies to Cloud Bigtable system. Only settable when `integrated_system` is equal to `CLOUD_BIGTABLE`',
      }),
    dataSource: GoogleCloudDatacatalogV1DataSourceSchema.exactOptional().openapi({
      description: 'Output only. Physical location of the entry.',
      readOnly: true,
    }),
    dataSourceConnectionSpec:
      GoogleCloudDatacatalogV1DataSourceConnectionSpecSchema.exactOptional().openapi({
        description:
          'Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type.',
      }),
    databaseTableSpec: GoogleCloudDatacatalogV1DatabaseTableSpecSchema.exactOptional().openapi({
      description:
        'Specification that applies to a table resource. Valid only for entries with the `TABLE` or `EXPLORE` type.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Entry description that can consist of several sentences or paragraphs that describe entry contents. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). The maximum size is 2000 bytes when encoded in UTF-8. Default value is an empty string.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display name of an entry. The maximum size is 500 bytes when encoded in UTF-8. Default value is an empty string.',
      }),
    filesetSpec: GoogleCloudDatacatalogV1FilesetSpecSchema.exactOptional().openapi({
      description:
        'Specification that applies to a fileset resource. Valid only for entries with the `FILESET` type.',
    }),
    fullyQualifiedName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Fully Qualified Name (FQN)](https://cloud.google.com//data-catalog/docs/fully-qualified-names) of the resource. Set automatically for entries representing resources from synced systems. Settable only during creation, and read-only later. Can be used for search and lookup of the entries. ',
      }),
    gcsFilesetSpec: GoogleCloudDatacatalogV1GcsFilesetSpecSchema.exactOptional().openapi({
      description:
        'Specification that applies to a Cloud Storage fileset. Valid only for entries with the `FILESET` type.',
    }),
    integratedSystem: z
      .enum([
        'INTEGRATED_SYSTEM_UNSPECIFIED',
        'BIGQUERY',
        'CLOUD_PUBSUB',
        'DATAPROC_METASTORE',
        'DATAPLEX',
        'CLOUD_SPANNER',
        'CLOUD_BIGTABLE',
        'CLOUD_SQL',
        'LOOKER',
      ])
      .exactOptional()
      .openapi({
        description:
          "Output only. Indicates the entry's source system that Data Catalog integrates with, such as BigQuery, Pub/Sub, or Dataproc Metastore.",
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cloud labels attached to the entry. In Data Catalog, you can create and modify labels attached only to custom entries. Synced entries have unmodifiable labels that come from the source system.',
      }),
    linkedResource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: `//bigquery.googleapis.com/projects/{PROJECT_ID}/datasets/{DATASET_ID}/tables/{TABLE_ID}` Output only when the entry is one of the types in the `EntryType` enum. For entries with a `user_specified_type`, this field is optional and defaults to an empty string. The resource string must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), periods (.), colons (:), slashes (/), dashes (-), and hashes (#). The maximum size is 200 bytes when encoded in UTF-8.',
      }),
    lookerSystemSpec: GoogleCloudDatacatalogV1LookerSystemSpecSchema.exactOptional().openapi({
      description:
        'Specification that applies to Looker sysstem. Only settable when `user_specified_system` is equal to `LOOKER`',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of an entry in URL format. Note: The entry itself and its child resources might not be stored in the location specified in its name.',
        readOnly: true,
      }),
    personalDetails: GoogleCloudDatacatalogV1PersonalDetailsSchema.exactOptional().openapi({
      description:
        'Output only. Additional information related to the entry. Private to the current user.',
      readOnly: true,
    }),
    routineSpec: GoogleCloudDatacatalogV1RoutineSpecSchema.exactOptional().openapi({
      description:
        'Specification that applies to a user-defined function or procedure. Valid only for entries with the `ROUTINE` type.',
    }),
    schema: GoogleCloudDatacatalogV1SchemaSchema.exactOptional().openapi({
      description: 'Schema of the entry. An entry might not have any schema attached to it.',
    }),
    serviceSpec: GoogleCloudDatacatalogV1ServiceSpecSchema.exactOptional().openapi({
      description: 'Specification that applies to a Service resource.',
    }),
    sourceSystemTimestamps: GoogleCloudDatacatalogV1SystemTimestampsSchema.exactOptional().openapi({
      description:
        'Timestamps from the underlying resource, not from the Data Catalog entry. Output only when the entry has a system listed in the `IntegratedSystem` enum. For entries with `user_specified_system`, this field is optional and defaults to an empty timestamp.',
    }),
    sqlDatabaseSystemSpec:
      GoogleCloudDatacatalogV1SqlDatabaseSystemSpecSchema.exactOptional().openapi({
        description:
          'Specification that applies to a relational database system. Only settable when `user_specified_system` is equal to `SQL_DATABASE`',
      }),
    type: z
      .enum([
        'ENTRY_TYPE_UNSPECIFIED',
        'TABLE',
        'MODEL',
        'DATA_STREAM',
        'FILESET',
        'CLUSTER',
        'DATABASE',
        'DATA_SOURCE_CONNECTION',
        'ROUTINE',
        'LAKE',
        'ZONE',
        'SERVICE',
        'DATABASE_SCHEMA',
        'DASHBOARD',
        'EXPLORE',
        'LOOK',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of the entry. Only used for entries with types listed in the `EntryType` enum. Currently, only `FILESET` enum value is allowed. All other entries created in Data Catalog must use the `user_specified_type`.',
      }),
    usageSignal: GoogleCloudDatacatalogV1UsageSignalSchema.exactOptional().openapi({
      description: 'Resource usage statistics.',
    }),
    userSpecifiedSystem: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the entry's source system that Data Catalog doesn't automatically integrate with. The `user_specified_system` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long.",
      }),
    userSpecifiedType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Custom entry type that doesn't match any of the values allowed for input and listed in the `EntryType` enum. When creating an entry, first check the type values in the enum. If there are no appropriate types for the new entry, provide a custom value, for example, `my_special_type`. The `user_specified_type` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long.",
      }),
  })
  .openapi({
    description:
      'Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1Entry')

const GoogleCloudDatacatalogV1TaggedEntrySchema = z
  .object({
    absentTags: z
      .array(GoogleCloudDatacatalogV1TagSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Tags that should be deleted from the Data Catalog. Caller should populate template name and column only.',
      }),
    presentTags: z
      .array(GoogleCloudDatacatalogV1TagSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Tags that should be ingested into the Data Catalog. Caller should populate template name, column and fields.',
      }),
    v1Entry: GoogleCloudDatacatalogV1EntrySchema.exactOptional().openapi({
      description: 'Non-encrypted Data Catalog v1 Entry.',
    }),
  })
  .openapi({
    description:
      'Wrapper containing Entry and information about Tags that should and should not be attached to it.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1TaggedEntry')

const GoogleCloudDatacatalogV1DumpItemSchema = z
  .object({
    taggedEntry: GoogleCloudDatacatalogV1TaggedEntrySchema.exactOptional().openapi({
      description: 'Entry and its tags.',
    }),
  })
  .openapi({ description: 'Wrapper for any item that can be contained in the dump.', required: [] })
  .openapi('GoogleCloudDatacatalogV1DumpItem')

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

const GoogleCloudDatacatalogV1ImportEntriesMetadataSchema = z
  .object({
    errors: z
      .array(StatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Partial errors that are encountered during the ImportEntries operation. There is no guarantee that all the encountered errors are reported. However, if no errors are reported, it means that no errors were encountered.',
      }),
    state: z
      .enum([
        'IMPORT_STATE_UNSPECIFIED',
        'IMPORT_QUEUED',
        'IMPORT_IN_PROGRESS',
        'IMPORT_DONE',
        'IMPORT_OBSOLETE',
      ])
      .exactOptional()
      .openapi({ description: 'State of the import operation.' }),
  })
  .openapi({
    description: 'Metadata message for long-running operation returned by the ImportEntries.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1ImportEntriesMetadata')

const GoogleCloudDatacatalogV1ImportEntriesResponseSchema = z
  .object({
    deletedEntriesCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of entries deleted as a result of import operation.' }),
    upsertedEntriesCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cumulative number of entries created and entries updated as a result of import operation.',
      }),
  })
  .openapi({
    description: 'Response message for long-running operation returned by the ImportEntries.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1ImportEntriesResponse')

const GoogleCloudDatacatalogV1ReconcileTagsMetadataSchema = z
  .object({
    errors: z
      .record(z.string(), StatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Maps the name of each tagged column (or empty string for a sole entry) to tagging operation status.',
      }),
    state: z
      .enum([
        'RECONCILIATION_STATE_UNSPECIFIED',
        'RECONCILIATION_QUEUED',
        'RECONCILIATION_IN_PROGRESS',
        'RECONCILIATION_DONE',
      ])
      .exactOptional()
      .openapi({ description: 'State of the reconciliation operation.' }),
  })
  .openapi({
    description: 'Long-running operation metadata message returned by the ReconcileTags.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1ReconcileTagsMetadata')

const GoogleCloudDatacatalogV1ReconcileTagsResponseSchema = z
  .object({
    createdTagsCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of tags created in the request.' }),
    deletedTagsCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of tags deleted in the request.' }),
    updatedTagsCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of tags updated in the request.' }),
  })
  .openapi({
    description: 'Long-running operation response message returned by ReconcileTags.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1ReconcileTagsResponse')

const GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpecSchema = z
  .object({
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The Data Catalog resource name of the dataset entry the current table belongs to, for example, `projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}`.',
        readOnly: true,
      }),
    shardCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Total number of shards.', readOnly: true }),
    tablePrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The table name prefix of the shards. The name of any given shard is `[table_prefix]YYYYMMDD`, for example, for shard `MyTable20180101`, the `table_prefix` is `MyTable`.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Spec for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec')

const GoogleCloudDatacatalogV1beta1TableSpecSchema = z
  .object({
    groupedEntry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. If the table is a dated shard, i.e., with name pattern `[prefix]YYYYMMDD`, `grouped_entry` is the Data Catalog resource name of the date sharded grouped entry, for example, `projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}`. Otherwise, `grouped_entry` is empty.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Normal BigQuery table spec.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1TableSpec')

const GoogleCloudDatacatalogV1beta1ViewSpecSchema = z
  .object({
    viewQuery: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The query that defines the table view.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Table view specification.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1ViewSpec')

const GoogleCloudDatacatalogV1beta1BigQueryTableSpecSchema = z
  .object({
    tableSourceType: z
      .enum([
        'TABLE_SOURCE_TYPE_UNSPECIFIED',
        'BIGQUERY_VIEW',
        'BIGQUERY_TABLE',
        'BIGQUERY_MATERIALIZED_VIEW',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The table source type.', readOnly: true }),
    tableSpec: GoogleCloudDatacatalogV1beta1TableSpecSchema.exactOptional().openapi({
      description:
        'Spec of a BigQuery table. This field should only be populated if `table_source_type` is `BIGQUERY_TABLE`.',
    }),
    viewSpec: GoogleCloudDatacatalogV1beta1ViewSpecSchema.exactOptional().openapi({
      description:
        'Table view specification. This field should only be populated if `table_source_type` is `BIGQUERY_VIEW`.',
    }),
  })
  .openapi({ description: 'Describes a BigQuery table.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1BigQueryTableSpec')

const GoogleCloudDatacatalogV1beta1ColumnSchemaSchema: z.ZodType<GoogleCloudDatacatalogV1beta1ColumnSchemaType> =
  z
    .lazy(() =>
      z
        .object({
          column: z
            .string()
            .exactOptional()
            .openapi({ description: 'Required. Name of the column.' }),
          description: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Optional. Description of the column. Default value is an empty string.',
            }),
          mode: z
            .string()
            .exactOptional()
            .openapi({
              description:
                "Optional. A column's mode indicates whether the values in this column are required, nullable, etc. Only `NULLABLE`, `REQUIRED` and `REPEATED` are supported. Default mode is `NULLABLE`.",
            }),
          subcolumns: z
            .array(GoogleCloudDatacatalogV1beta1ColumnSchemaSchema)
            .exactOptional()
            .openapi({
              description:
                'Optional. Schema of sub-columns. A column can have zero or more sub-columns.',
            }),
          type: z
            .string()
            .exactOptional()
            .openapi({ description: 'Required. Type of the column.' }),
        })
        .openapi({
          description:
            'Representation of a column within a schema. Columns could be nested inside other columns.',
          required: [],
        }),
    )
    .openapi('GoogleCloudDatacatalogV1beta1ColumnSchema')

const GoogleCloudDatacatalogV1beta1SystemTimestampsSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time of the resource within the given system.' }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The expiration time of the resource within the given system. Currently only apllicable to BigQuery resources.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last-modified time of the resource within the given system.' }),
  })
  .openapi({
    description: 'Timestamps about this resource according to a particular system.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1SystemTimestamps')

const GoogleCloudDatacatalogV1beta1GcsFileSpecSchema = z
  .object({
    filePath: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The full file path. Example: `gs://bucket_name/a/b.txt`.',
      }),
    gcsTimestamps: GoogleCloudDatacatalogV1beta1SystemTimestampsSchema.exactOptional().openapi({
      description: 'Output only. Timestamps about the Cloud Storage file.',
      readOnly: true,
    }),
    sizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The size of the file, in bytes.', readOnly: true }),
  })
  .openapi({ description: 'Specifications of a single file in Cloud Storage.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1GcsFileSpec')

const GoogleCloudDatacatalogV1beta1GcsFilesetSpecSchema = z
  .object({
    filePatterns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. Patterns to identify a set of files in Google Cloud Storage. See [Cloud Storage documentation](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames) for more information. Note that bucket wildcards are currently not supported. Examples of valid file_patterns: * `gs://bucket_name/dir/*`: matches all files within `bucket_name/dir` directory. * `gs://bucket_name/dir/**`: matches all files in `bucket_name/dir` spanning all subdirectories. * `gs://bucket_name/file*`: matches files prefixed by `file` in `bucket_name` * `gs://bucket_name/??.txt`: matches files with two characters followed by `.txt` in `bucket_name` * `gs://bucket_name/[aeiou].txt`: matches files that contain a single vowel character followed by `.txt` in `bucket_name` * `gs://bucket_name/[a-m].txt`: matches files that contain `a`, `b`, ... or `m` followed by `.txt` in `bucket_name` * `gs://bucket_name/a/*/b`: matches all files in `bucket_name` that match `a/*/b` pattern, such as `a/c/b`, `a/d/b` * `gs://another_bucket/a.txt`: matches `gs://another_bucket/a.txt` You can combine wildcards to provide more powerful matches, for example: * `gs://bucket_name/[a-m]??.j*g`',
      }),
    sampleGcsFileSpecs: z
      .array(GoogleCloudDatacatalogV1beta1GcsFileSpecSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Sample files contained in this fileset, not all files contained in this fileset are represented here.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Describes a Cloud Storage fileset entry.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1GcsFilesetSpec')

const GoogleCloudDatacatalogV1beta1SchemaSchema = z
  .object({
    columns: z
      .array(GoogleCloudDatacatalogV1beta1ColumnSchemaSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Schema of columns. A maximum of 10,000 columns and sub-columns can be specified.',
      }),
  })
  .openapi({
    description: 'Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema).',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1Schema')

const GoogleCloudDatacatalogV1beta1UsageStatsSchema = z
  .object({
    totalCancellations: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The number of times that the underlying entry was attempted to be used but was cancelled by the user.',
      }),
    totalCompletions: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The number of times that the underlying entry was successfully used.',
      }),
    totalExecutionTimeForCompletionsMillis: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Total time spent (in milliseconds) during uses the resulted in completions.',
      }),
    totalFailures: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The number of times that the underlying entry was attempted to be used but failed.',
      }),
  })
  .openapi({
    description:
      "Detailed counts on the entry's usage. Caveats: - Only BigQuery tables have usage stats - The usage stats only include BigQuery query jobs - The usage stats might be underestimated, e.g. wildcard table references are not yet counted in usage computation https://cloud.google.com/bigquery/docs/querying-wildcard-tables",
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1UsageStats')

const GoogleCloudDatacatalogV1beta1UsageSignalSchema = z
  .object({
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of the end of the usage statistics duration.' }),
    usageWithinTimeRange: z
      .record(z.string(), GoogleCloudDatacatalogV1beta1UsageStatsSchema)
      .exactOptional()
      .openapi({
        description:
          'Usage statistics over each of the pre-defined time ranges, supported strings for time ranges are {"24H", "7D", "30D"}.',
      }),
  })
  .openapi({
    description: 'The set of all usage signals that we store in Data Catalog.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1UsageSignal')

const GoogleCloudDatacatalogV1beta1EntrySchema = z
  .object({
    bigqueryDateShardedSpec:
      GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpecSchema.exactOptional().openapi({
        description:
          'Specification for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding.',
      }),
    bigqueryTableSpec: GoogleCloudDatacatalogV1beta1BigQueryTableSpecSchema.exactOptional().openapi(
      {
        description:
          'Specification that applies to a BigQuery table. This is only valid on entries of type `TABLE`.',
      },
    ),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Entry description, which can consist of several sentences or paragraphs that describe entry contents. Default value is an empty string.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display information such as title and description. A short name to identify the entry, for example, "Analytics Data - Jan 2011". Default value is an empty string.',
      }),
    gcsFilesetSpec: GoogleCloudDatacatalogV1beta1GcsFilesetSpecSchema.exactOptional().openapi({
      description:
        'Specification that applies to a Cloud Storage fileset. This is only valid on entries of type FILESET.',
    }),
    integratedSystem: z
      .enum(['INTEGRATED_SYSTEM_UNSPECIFIED', 'BIGQUERY', 'CLOUD_PUBSUB'])
      .exactOptional()
      .openapi({
        description:
          "Output only. This field indicates the entry's source system that Data Catalog integrates with, such as BigQuery or Pub/Sub.",
        readOnly: true,
      }),
    linkedResource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [full name of the resource](https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId Output only when Entry is of type in the EntryType enum. For entries with user_specified_type, this field is optional and defaults to an empty string.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The Data Catalog resource name of the entry in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Entry and its child resources may not actually be stored in the location in this name.',
        readOnly: true,
      }),
    schema: GoogleCloudDatacatalogV1beta1SchemaSchema.exactOptional().openapi({
      description: 'Schema of the entry. An entry might not have any schema attached to it.',
    }),
    sourceSystemTimestamps:
      GoogleCloudDatacatalogV1beta1SystemTimestampsSchema.exactOptional().openapi({
        description:
          'Output only. Timestamps about the underlying resource, not about this Data Catalog entry. Output only when Entry is of type in the EntryType enum. For entries with user_specified_type, this field is optional and defaults to an empty timestamp.',
        readOnly: true,
      }),
    type: z
      .enum(['ENTRY_TYPE_UNSPECIFIED', 'TABLE', 'MODEL', 'DATA_STREAM', 'FILESET'])
      .exactOptional()
      .openapi({
        description:
          'The type of the entry. Only used for Entries with types in the EntryType enum.',
      }),
    usageSignal: GoogleCloudDatacatalogV1beta1UsageSignalSchema.exactOptional().openapi({
      description: 'Output only. Statistics on the usage level of the resource.',
      readOnly: true,
    }),
    userSpecifiedSystem: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This field indicates the entry's source system that Data Catalog does not integrate with. `user_specified_system` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.",
      }),
    userSpecifiedType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Entry type if it does not fit any of the input-allowed values listed in `EntryType` enum above. When creating an entry, users should check the enum values first, if nothing matches the entry to be created, then provide a custom value, for example "my_special_type". `user_specified_type` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long. Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use `user_specified_type`.',
      }),
  })
  .openapi({
    description:
      'Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1Entry')

const GoogleCloudDatacatalogV1beta1EntryGroupSchema = z
  .object({
    dataCatalogTimestamps:
      GoogleCloudDatacatalogV1beta1SystemTimestampsSchema.exactOptional().openapi({
        description:
          'Output only. Timestamps about this EntryGroup. Default value is empty timestamps.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Entry group description, which can consist of several sentences or paragraphs that describe entry group contents. Default value is an empty string.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short name to identify the entry group, for example, "analytics data - jan 2011". Default value is an empty string.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the entry group in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this EntryGroup and its child resources may not actually be stored in the location in this name.',
      }),
  })
  .openapi({
    description:
      'EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1EntryGroup')

const GoogleCloudDatacatalogV1beta1SerializedPolicyTagSchema: z.ZodType<GoogleCloudDatacatalogV1beta1SerializedPolicyTagType> =
  z
    .lazy(() =>
      z
        .object({
          childPolicyTags: z
            .array(GoogleCloudDatacatalogV1beta1SerializedPolicyTagSchema)
            .exactOptional()
            .openapi({ description: 'Children of the policy tag if any.' }),
          description: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Description of the serialized policy tag. The length of the description is limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description.',
            }),
          displayName: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Required. Display name of the policy tag. Max 200 bytes when encoded in UTF-8.',
            }),
          policyTag: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Resource name of the policy tag. This field will be ignored when calling ImportTaxonomies.',
            }),
        })
        .openapi({
          description: 'Message representing one policy tag when exported as a nested proto.',
          required: [],
        }),
    )
    .openapi('GoogleCloudDatacatalogV1beta1SerializedPolicyTag')

const GoogleCloudDatacatalogV1beta1SerializedTaxonomySchema = z
  .object({
    activatedPolicyTypes: z
      .array(z.enum(['POLICY_TYPE_UNSPECIFIED', 'FINE_GRAINED_ACCESS_CONTROL']))
      .exactOptional()
      .openapi({ description: 'A list of policy types that are activated for a taxonomy.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description of the serialized taxonomy. The length of the description is limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Display name of the taxonomy. Max 200 bytes when encoded in UTF-8.',
      }),
    policyTags: z
      .array(GoogleCloudDatacatalogV1beta1SerializedPolicyTagSchema)
      .exactOptional()
      .openapi({ description: 'Top level policy tags associated with the taxonomy if any.' }),
  })
  .openapi({
    description:
      'Message capturing a taxonomy and its policy tag hierarchy as a nested proto. Used for taxonomy import/export and mutation.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1SerializedTaxonomy')

const GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponseSchema = z
  .object({
    taxonomies: z
      .array(GoogleCloudDatacatalogV1beta1SerializedTaxonomySchema)
      .exactOptional()
      .openapi({ description: 'List of taxonomies and policy tags in a tree structure.' }),
  })
  .openapi({ description: 'Response message for ExportTaxonomies.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse')

const GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValueSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The display name of the enum value. Must not be an empty string.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue')

const GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeSchema = z
  .object({
    allowedValues: z
      .array(GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValueSchema)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1FieldTypeEnumType')

const GoogleCloudDatacatalogV1beta1FieldTypeSchema = z
  .object({
    enumType: GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeSchema.exactOptional().openapi({
      description: 'Represents an enum type.',
    }),
    primitiveType: z
      .enum(['PRIMITIVE_TYPE_UNSPECIFIED', 'DOUBLE', 'STRING', 'BOOL', 'TIMESTAMP'])
      .exactOptional()
      .openapi({ description: 'Represents primitive types - string, bool etc.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1FieldType')

const GoogleCloudDatacatalogV1beta1InlineSourceSchema = z
  .object({
    taxonomies: z
      .array(GoogleCloudDatacatalogV1beta1SerializedTaxonomySchema)
      .exactOptional()
      .openapi({ description: 'Required. Taxonomies to be imported.' }),
  })
  .openapi({ description: 'Inline source used for taxonomies import.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1InlineSource')

const GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequestSchema = z
  .object({
    inlineSource: GoogleCloudDatacatalogV1beta1InlineSourceSchema.exactOptional().openapi({
      description: 'Inline source used for taxonomies to be imported.',
    }),
  })
  .openapi({ description: 'Request message for ImportTaxonomies.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest')

const GoogleCloudDatacatalogV1beta1TaxonomyServiceSchema = z
  .object({
    identity: z.string().exactOptional().openapi({ description: 'P4SA Identity of the service.' }),
    name: z
      .enum(['MANAGING_SYSTEM_UNSPECIFIED', 'MANAGING_SYSTEM_DATAPLEX', 'MANAGING_SYSTEM_OTHER'])
      .exactOptional()
      .openapi({ description: 'The Google Cloud service name.' }),
  })
  .openapi({ description: 'The source system of the Taxonomy.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1TaxonomyService')

const GoogleCloudDatacatalogV1beta1TaxonomySchema = z
  .object({
    activatedPolicyTypes: z
      .array(z.enum(['POLICY_TYPE_UNSPECIFIED', 'FINE_GRAINED_ACCESS_CONTROL']))
      .exactOptional()
      .openapi({
        description:
          'Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of this taxonomy. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. User defined name of this taxonomy. It must: contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8. The taxonomy display name must be unique within an organization.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of this taxonomy, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{id}".',
        readOnly: true,
      }),
    policyTagCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of policy tags contained in this taxonomy.',
        readOnly: true,
      }),
    service: GoogleCloudDatacatalogV1beta1TaxonomyServiceSchema.exactOptional().openapi({
      description:
        "Output only. Identity of the service which owns the Taxonomy. This field is only populated when the taxonomy is created by a Google Cloud service. Currently only 'DATAPLEX' is supported.",
      readOnly: true,
    }),
    taxonomyTimestamps: GoogleCloudDatacatalogV1beta1SystemTimestampsSchema.exactOptional().openapi(
      {
        description:
          'Output only. Timestamps about this taxonomy. Only create_time and update_time are used.',
        readOnly: true,
      },
    ),
  })
  .openapi({
    description:
      'A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1Taxonomy')

const GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponseSchema = z
  .object({
    taxonomies: z
      .array(GoogleCloudDatacatalogV1beta1TaxonomySchema)
      .exactOptional()
      .openapi({ description: 'Taxonomies that were imported.' }),
  })
  .openapi({ description: 'Response message for ImportTaxonomies.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse')

const GoogleCloudDatacatalogV1beta1ListEntriesResponseSchema = z
  .object({
    entries: z
      .array(GoogleCloudDatacatalogV1beta1EntrySchema)
      .exactOptional()
      .openapi({ description: 'Entry details.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results. It is set to empty if no items remain in results.',
      }),
  })
  .openapi({ description: 'Response message for ListEntries.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1ListEntriesResponse')

const GoogleCloudDatacatalogV1beta1ListEntryGroupsResponseSchema = z
  .object({
    entryGroups: z
      .array(GoogleCloudDatacatalogV1beta1EntryGroupSchema)
      .exactOptional()
      .openapi({ description: 'EntryGroup details.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results. It is set to empty if no items remain in results.',
      }),
  })
  .openapi({ description: 'Response message for ListEntryGroups.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse')

const GoogleCloudDatacatalogV1beta1PolicyTagSchema = z
  .object({
    childPolicyTags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Resource names of child policy tags of this policy tag.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description of this policy tag. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description. If not set, defaults to an empty description.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. User defined name of this policy tag. It must: be unique within the parent taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of this policy tag, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}".',
        readOnly: true,
      }),
    parentPolicyTag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of this policy tag\'s parent policy tag (e.g. for the "LatLong" policy tag in the example above, this field contains the resource name of the "Geolocation" policy tag). If empty, it means this policy tag is a top level policy tag (e.g. this field is empty for the "Geolocation" policy tag in the example above). If not set, defaults to an empty string.',
      }),
  })
  .openapi({
    description:
      'Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined in a hierarchy. For example, consider the following hierarchy: Geolocation -> (LatLong, City, ZipCode). PolicyTag "Geolocation" contains three child policy tags: "LatLong", "City", and "ZipCode".',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1PolicyTag')

const GoogleCloudDatacatalogV1beta1ListPolicyTagsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token used to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    policyTags: z
      .array(GoogleCloudDatacatalogV1beta1PolicyTagSchema)
      .exactOptional()
      .openapi({ description: 'The policy tags that are in the requested taxonomy.' }),
  })
  .openapi({ description: 'Response message for ListPolicyTags.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse')

const GoogleCloudDatacatalogV1beta1TagFieldEnumValueSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the enum value.' }),
  })
  .openapi({ description: 'Holds an enum value.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1TagFieldEnumValue')

const GoogleCloudDatacatalogV1beta1TagFieldSchema = z
  .object({
    boolValue: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Holds the value for a tag field with boolean type.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The display name of this field.', readOnly: true }),
    doubleValue: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Holds the value for a tag field with double type.' }),
    enumValue: GoogleCloudDatacatalogV1beta1TagFieldEnumValueSchema.exactOptional().openapi({
      description:
        'Holds the value for a tag field with enum type. This value must be one of the allowed values in the definition of this enum.',
    }),
    order: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The order of this field with respect to other fields in this tag. It can be set in Tag. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential.',
        readOnly: true,
      }),
    stringValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Holds the value for a tag field with string type.' }),
    timestampValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Holds the value for a tag field with timestamp type.' }),
  })
  .openapi({
    description: 'Contains the value and supporting information for a field within a Tag.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1TagField')

const GoogleCloudDatacatalogV1beta1TagSchema = z
  .object({
    column: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an individual column based on that schema. For attaching a tag to a nested column, use `.` to separate the column names. Example: * `outer_column.inner_column`',
      }),
    fields: z
      .record(z.string(), GoogleCloudDatacatalogV1beta1TagFieldSchema)
      .exactOptional()
      .openapi({
        description:
          "Required. This maps the ID of a tag field to the value of and additional information about that field. Valid field IDs are defined by the tag's template. A tag must have at least 1 field and at most 500 fields.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the tag in URL format. Example: * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id} where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.',
      }),
    template: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of the tag template that this tag uses. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} This field cannot be modified after creation.',
      }),
    templateDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the tag template.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1Tag')

const GoogleCloudDatacatalogV1beta1ListTagsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results. It is set to empty if no items remain in results.',
      }),
    tags: z
      .array(GoogleCloudDatacatalogV1beta1TagSchema)
      .exactOptional()
      .openapi({ description: 'Tag details.' }),
  })
  .openapi({ description: 'Response message for ListTags.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1ListTagsResponse')

const GoogleCloudDatacatalogV1beta1ListTaxonomiesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token used to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    taxonomies: z
      .array(GoogleCloudDatacatalogV1beta1TaxonomySchema)
      .exactOptional()
      .openapi({ description: 'Taxonomies that the project contains.' }),
  })
  .openapi({ description: 'Response message for ListTaxonomies.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse')

const GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequestSchema = z
  .object({
    newEnumValueDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The new display name of the enum value. For example, `my_new_enum_value`.',
      }),
  })
  .openapi({ description: 'Request message for RenameTagTemplateFieldEnumValue.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest')

const GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequestSchema = z
  .object({
    newTagTemplateFieldId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The new ID of this tag template field. For example, `my_new_field`.',
      }),
  })
  .openapi({ description: 'Request message for RenameTagTemplateField.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest')

const GoogleCloudDatacatalogV1beta1SearchCatalogRequestScopeSchema = z
  .object({
    includeGcpPublicDatasets: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If `true`, include Google Cloud public datasets in the search results. Info on Google Cloud public datasets is available at https://cloud.google.com/public-datasets/. By default, Google Cloud public datasets are excluded.',
      }),
    includeOrgIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of organization IDs to search within. To find your organization ID, follow instructions in https://cloud.google.com/resource-manager/docs/creating-managing-organization.',
      }),
    includeProjectIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of project IDs to search within. To learn more about the distinction between project names/IDs/numbers, go to https://cloud.google.com/docs/overview/#projects.',
      }),
    restrictedLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The list of locations to search within. 1. If empty, search will be performed in all locations; 2. If any of the locations are NOT in the valid locations list, error will be returned; 3. Otherwise, search only the given locations for matching results. Typical usage is to leave this field empty. When a location is unreachable as returned in the `SearchCatalogResponse.unreachable` field, users can repeat the search request with this parameter set to get additional information on the error. Valid locations: * asia-east1 * asia-east2 * asia-northeast1 * asia-northeast2 * asia-northeast3 * asia-south1 * asia-southeast1 * australia-southeast1 * eu * europe-north1 * europe-west1 * europe-west2 * europe-west3 * europe-west4 * europe-west6 * global * northamerica-northeast1 * southamerica-east1 * us * us-central1 * us-east1 * us-east4 * us-west1 * us-west2',
      }),
  })
  .openapi({
    description: 'The criteria that select the subspace used for query matching.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope')

const GoogleCloudDatacatalogV1beta1SearchCatalogRequestSchema = z
  .object({
    orderBy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the ordering of results, currently supported case-sensitive choices are: * `relevance`, only supports descending * `last_modified_timestamp [asc|desc]`, defaults to descending if not specified * `default` that can only be descending If not specified, defaults to `relevance` descending.',
      }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of results in the search page. If <=0 then defaults to 10. Max limit for page_size is 1000. Throws an invalid argument for page_size > 1000.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Pagination token returned in an earlier SearchCatalogResponse.next_page_token, which indicates that this is a continuation of a prior SearchCatalogRequest call, and that the system should return the next page of data. If empty, the first page is returned.',
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The query string in search query syntax. An empty query string will result in all data assets (in the specified scope) that the user has access to. Query strings can be simple as "x" or more qualified as: * name:x * column:x * description:y Note: Query tokens need to have a minimum of 3 characters for substring matching to work correctly. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.',
      }),
    scope: GoogleCloudDatacatalogV1beta1SearchCatalogRequestScopeSchema.exactOptional().openapi({
      description:
        'Required. The scope of this search request. A `scope` that has empty `include_org_ids`, `include_project_ids` AND false `include_gcp_public_datasets` is considered invalid. Data Catalog will return an error in such a case.',
    }),
  })
  .openapi({ description: 'Request message for SearchCatalog.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1SearchCatalogRequest')

const GoogleCloudDatacatalogV1beta1SearchCatalogResultSchema = z
  .object({
    linkedResource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full name of the cloud resource the entry belongs to. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Example: * `//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId`',
      }),
    modifyTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last-modified timestamp of the entry from the managing system.' }),
    relativeResourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relative resource name of the resource in URL format. Examples: * `projects/{project_id}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}` * `projects/{project_id}/tagTemplates/{tag_template_id}`',
      }),
    searchResultSubtype: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Sub-type of the search result. This is a dot-delimited description of the resource\'s full type, and is the same as the value callers would provide in the "type" search facet. Examples: `entry.table`, `entry.dataStream`, `tagTemplate`.',
      }),
    searchResultType: z
      .enum(['SEARCH_RESULT_TYPE_UNSPECIFIED', 'ENTRY', 'TAG_TEMPLATE', 'ENTRY_GROUP'])
      .exactOptional()
      .openapi({
        description:
          'Type of the search result. This field can be used to determine which Get method to call to fetch the full resource.',
      }),
  })
  .openapi({
    description:
      'A result that appears in the response of a search request. Each result captures details of one entry that matches the search.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1SearchCatalogResult')

const GoogleCloudDatacatalogV1beta1SearchCatalogResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token that can be used to retrieve the next page of results.' }),
    results: z
      .array(GoogleCloudDatacatalogV1beta1SearchCatalogResultSchema)
      .exactOptional()
      .openapi({ description: 'Search results.' }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The approximate total number of entries matched by the query.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Unreachable locations. Search result does not include data from those locations. Users can get additional information on the error by repeating the search request with a more restrictive parameter -- setting the value for `SearchDataCatalogRequest.scope.restricted_locations`.',
      }),
  })
  .openapi({ description: 'Response message for SearchCatalog.', required: [] })
  .openapi('GoogleCloudDatacatalogV1beta1SearchCatalogResponse')

const GoogleCloudDatacatalogV1beta1TagTemplateFieldSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description for this field. Defaults to an empty string.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name for this field. Defaults to an empty string.' }),
    isRequired: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this is a required field. Defaults to false.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the tag template field in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template}/fields/{field} Note that this TagTemplateField may not actually be stored in the location in this name.',
        readOnly: true,
      }),
    order: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The order of this field with respect to other fields in this tag template. A higher value indicates a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential.',
      }),
    type: GoogleCloudDatacatalogV1beta1FieldTypeSchema.exactOptional().openapi({
      description: 'Required. The type of value this tag field can contain.',
    }),
  })
  .openapi({
    description: 'The template for an individual field within a tag template.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1TagTemplateField')

const GoogleCloudDatacatalogV1beta1TagTemplateSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name for this template. Defaults to an empty string.' }),
    fields: z
      .record(z.string(), GoogleCloudDatacatalogV1beta1TagTemplateFieldSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Map of tag template field IDs to the settings for the field. This map is an exhaustive list of the allowed fields. This map must contain at least one field and at most 500 fields. The keys to this map are tag template field IDs. Field IDs can contain letters (both uppercase and lowercase), numbers (0-9) and underscores (_). Field IDs must be at least 1 character long and at most 64 characters long. Field IDs must start with a letter or underscore.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the tag template in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} Note that this TagTemplate and its child resources may not actually be stored in the location in this name.',
      }),
  })
  .openapi({
    description:
      'A tag template defines a tag, which can have one or more typed fields. The template is used to create and attach the tag to Google Cloud resources. [Tag template roles](https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. See, for example, the [TagTemplate User](https://cloud.google.com/data-catalog/docs/how-to/template-user) role, which includes permission to use the tag template to tag resources.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogV1beta1TagTemplate')

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

export const postV1beta1CatalogSearchRoute = createRoute({
  method: 'post',
  path: '/v1beta1/catalog:search',
  tags: ['catalog'],
  description:
    'Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.',
  operationId: 'datacatalog.catalog.search',
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
    body: {
      content: {
        'application/json': { schema: GoogleCloudDatacatalogV1beta1SearchCatalogRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatacatalogV1beta1SearchCatalogResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1EntriesLookupRoute = createRoute({
  method: 'get',
  path: '/v1beta1/entries:lookup',
  tags: ['entries'],
  description:
    'Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.',
  operationId: 'datacatalog.entries.lookup',
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
      linkedResource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The full name of the Google Cloud Platform resource the Data Catalog entry represents. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Full names are case-sensitive. Examples: * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId * //pubsub.googleapis.com/projects/projectId/topics/topicId',
            in: 'query',
            name: 'linkedResource',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sqlResource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The SQL name of the entry. SQL names are case-sensitive. Examples: * `pubsub.project_id.topic_id` * ``pubsub.project_id.`topic.id.with.dots` `` * `bigquery.table.project_id.dataset_id.table_id` * `bigquery.dataset.project_id.dataset_id` * `datacatalog.entry.project_id.location_id.entry_group_id.entry_id` `*_id`s should satisfy the standard SQL rules for identifiers. https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical.',
            in: 'query',
            name: 'sqlResource',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1EntrySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Gets a policy tag.',
  operationId: 'datacatalog.projects.locations.taxonomies.policyTags.get',
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
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The fields to return. If not set or empty, all fields are returned.',
            in: 'query',
            name: 'readMask',
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
            description: 'Required. Resource name of the requested policy tag.',
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
      content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1PolicyTagSchema } },
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
  description: 'Deletes a policy tag. Also deletes all of its descendant policy tags.',
  operationId: 'datacatalog.projects.locations.taxonomies.policyTags.delete',
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
              'Required. Currently, this field must always be set to `true`. This confirms the deletion of this field from any tags using this field. `force = false` will be supported in the future.',
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
            description:
              'Required. Resource name of the policy tag to be deleted. All of its descendant policy tags will also be deleted.',
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
  description: 'Updates a policy tag.',
  operationId: 'datacatalog.projects.locations.taxonomies.policyTags.patch',
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
              'The update mask applies to the resource. Only display_name, description and parent_policy_tag can be updated and thus can be listed in the mask. If update_mask is not provided, all allowed fields (i.e. display_name, description and parent) will be updated. For more information including the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update.',
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
            description:
              'Output only. Resource name of this policy tag, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}".',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1PolicyTagSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1PolicyTagSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameRenameRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:rename',
  tags: ['projects'],
  description:
    'Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.',
  operationId: 'datacatalog.projects.locations.tagTemplates.fields.enumValues.rename',
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
            description:
              'Required. The name of the enum field value. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}/enumValues/{enum_value_display_name}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatacatalogV1beta1TagTemplateFieldSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentEntriesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/entries',
  tags: ['projects'],
  description: 'Lists entries.',
  operationId: 'datacatalog.projects.locations.entryGroups.entries.list',
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
              'The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`.',
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
              'Token that specifies which page is requested. If empty, the first page is returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The fields to return for each Entry. If not set or empty, all fields are returned. For example, setting read_mask to contain only one path "name" will cause ListEntries to return a list of Entries with only "name" field.',
            in: 'query',
            name: 'readMask',
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
              'Required. The name of the entry group that contains the entries, which can be provided in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}',
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
      content: {
        'application/json': { schema: GoogleCloudDatacatalogV1beta1ListEntriesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentEntriesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/entries',
  tags: ['projects'],
  description:
    "Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.",
  operationId: 'datacatalog.projects.locations.entryGroups.entries.create',
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
      entryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The id of the entry to create.',
            in: 'query',
            name: 'entryId',
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
              'Required. The name of the entry group this entry is in. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this Entry and its child resources may not actually be stored in the location in this name.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1EntrySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1EntrySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentEntryGroupsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/entryGroups',
  tags: ['projects'],
  description: 'Lists entry groups.',
  operationId: 'datacatalog.projects.locations.entryGroups.list',
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
              'Optional. The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`.',
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
              'Optional. Token that specifies which page is requested. If empty, the first page is returned.',
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
              'Required. The name of the location that contains the entry groups, which can be provided in URL format. Example: * projects/{project_id}/locations/{location}',
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
      content: {
        'application/json': { schema: GoogleCloudDatacatalogV1beta1ListEntryGroupsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentEntryGroupsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/entryGroups',
  tags: ['projects'],
  description:
    'A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).',
  operationId: 'datacatalog.projects.locations.entryGroups.create',
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
      entryGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The id of the entry group to create. The id must begin with a letter or underscore, contain only English letters, numbers and underscores, and be at most 64 characters.',
            in: 'query',
            name: 'entryGroupId',
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
              'Required. The name of the project this entry group is in. Example: * projects/{project_id}/locations/{location} Note that this EntryGroup and its child resources may not actually be stored in the location in this name.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1EntryGroupSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1EntryGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentFieldsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/fields',
  tags: ['projects'],
  description:
    'Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).',
  operationId: 'datacatalog.projects.locations.tagTemplates.fields.create',
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
      tagTemplateFieldId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The ID of the tag template field to create. Field ids can contain letters (both uppercase and lowercase), numbers (0-9), underscores (_) and dashes (-). Field IDs must be at least 1 character long and at most 128 characters long. Field IDs must also be unique within their template.',
            in: 'query',
            name: 'tagTemplateFieldId',
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
              'Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions). Example: * projects/{project_id}/locations/us-central1/tagTemplates/{tag_template_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDatacatalogV1beta1TagTemplateFieldSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatacatalogV1beta1TagTemplateFieldSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentPolicyTagsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/policyTags',
  tags: ['projects'],
  description: 'Lists all policy tags in a taxonomy.',
  operationId: 'datacatalog.projects.locations.taxonomies.policyTags.list',
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
              'The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50.',
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
              'The next_page_token value returned from a previous List request, if any. If not set, defaults to an empty string.',
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
            description: 'Required. Resource name of the taxonomy to list the policy tags of.',
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
      content: {
        'application/json': { schema: GoogleCloudDatacatalogV1beta1ListPolicyTagsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentPolicyTagsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/policyTags',
  tags: ['projects'],
  description: 'Creates a policy tag in the specified taxonomy.',
  operationId: 'datacatalog.projects.locations.taxonomies.policyTags.create',
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
              'Required. Resource name of the taxonomy that the policy tag will belong to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1PolicyTagSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1PolicyTagSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentTagTemplatesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/tagTemplates',
  tags: ['projects'],
  description:
    'Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).',
  operationId: 'datacatalog.projects.locations.tagTemplates.create',
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
      tagTemplateId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The id of the tag template to create.',
            in: 'query',
            name: 'tagTemplateId',
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
              'Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions. Example: * projects/{project_id}/locations/us-central1',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1TagTemplateSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1TagTemplateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentTagsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/tags',
  tags: ['projects'],
  description: 'Lists tags assigned to an Entry. The columns in the response are lowercased.',
  operationId: 'datacatalog.projects.locations.entryGroups.tags.list',
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
            description: 'The maximum number of tags to return. Default is 10. Max limit is 1000.',
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
              'Token that specifies which page is requested. If empty, the first page is returned.',
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
              'Required. The name of the Data Catalog resource to list the tags of. The resource could be an Entry or an EntryGroup. Examples: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}',
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
      content: {
        'application/json': { schema: GoogleCloudDatacatalogV1beta1ListTagsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentTagsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/tags',
  tags: ['projects'],
  description:
    'Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.',
  operationId: 'datacatalog.projects.locations.entryGroups.tags.create',
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
              'Required. The name of the resource to attach this tag to. Tags can be attached to Entries. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Tag and its child resources may not actually be stored in the location in this name.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1TagSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1TagSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentTaxonomiesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/taxonomies',
  tags: ['projects'],
  description:
    'Lists all taxonomies in a project in a particular location that the caller has permission to view.',
  operationId: 'datacatalog.projects.locations.taxonomies.list',
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
              "Supported field for filter is 'service' and value is 'dataplex'. Eg: service=dataplex.",
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
              'The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50.',
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
              'The next_page_token value returned from a previous list request, if any. If not set, defaults to an empty string.',
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
            description: 'Required. Resource name of the project to list the taxonomies of.',
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
      content: {
        'application/json': { schema: GoogleCloudDatacatalogV1beta1ListTaxonomiesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentTaxonomiesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/taxonomies',
  tags: ['projects'],
  description: 'Creates a taxonomy in the specified project.',
  operationId: 'datacatalog.projects.locations.taxonomies.create',
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
            description: 'Required. Resource name of the project that the taxonomy will belong to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1TaxonomySchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatacatalogV1beta1TaxonomySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentTaxonomiesExportRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/taxonomies:export',
  tags: ['projects'],
  description:
    'Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.',
  operationId: 'datacatalog.projects.locations.taxonomies.export',
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
      serializedTaxonomies: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Export taxonomies as serialized taxonomies.',
            in: 'query',
            name: 'serializedTaxonomies',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      taxonomies: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Resource names of the taxonomies to be exported.',
            explode: true,
            in: 'query',
            name: 'taxonomies',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
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
              'Required. Resource name of the project that taxonomies to be exported will share.',
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
      content: {
        'application/json': { schema: GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentTaxonomiesImportRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/taxonomies:import',
  tags: ['projects'],
  description:
    'Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.',
  operationId: 'datacatalog.projects.locations.taxonomies.import',
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
              'Required. Resource name of project that the imported taxonomies will belong to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ResourceGetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{resource}:getIamPolicy',
  tags: ['projects'],
  description: 'Gets the IAM policy for a taxonomy or a policy tag.',
  operationId: 'datacatalog.projects.locations.taxonomies.policyTags.getIamPolicy',
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
              'REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetIamPolicyRequestSchema } } },
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
  description: 'Sets the IAM policy for a taxonomy or a policy tag.',
  operationId: 'datacatalog.projects.locations.taxonomies.policyTags.setIamPolicy',
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
  description: 'Returns the permissions that a caller has on the specified taxonomy or policy tag.',
  operationId: 'datacatalog.projects.locations.taxonomies.policyTags.testIamPermissions',
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
