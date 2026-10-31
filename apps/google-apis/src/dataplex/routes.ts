import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudDataplexV1SchemaSchemaFieldSchema: z.ZodType<GoogleCloudDataplexV1SchemaSchemaFieldType> =
  z
    .lazy(() =>
      z
        .object({
          description: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Optional. User friendly field description. Must be less than or equal to 1024 characters.',
            }),
          fields: z
            .array(GoogleCloudDataplexV1SchemaSchemaFieldSchema)
            .exactOptional()
            .openapi({ description: 'Optional. Any nested field for complex types.' }),
          mode: z
            .enum(['MODE_UNSPECIFIED', 'REQUIRED', 'NULLABLE', 'REPEATED'])
            .exactOptional()
            .openapi({ description: 'Required. Additional field semantics.' }),
          name: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Required. The name of the field. Must contain only letters, numbers and underscores, with a maximum length of 767 characters, and must begin with a letter or underscore.',
            }),
          type: z
            .enum([
              'TYPE_UNSPECIFIED',
              'BOOLEAN',
              'BYTE',
              'INT16',
              'INT32',
              'INT64',
              'FLOAT',
              'DOUBLE',
              'DECIMAL',
              'STRING',
              'BINARY',
              'TIMESTAMP',
              'DATE',
              'TIME',
              'RECORD',
              'NULL',
            ])
            .exactOptional()
            .openapi({ description: 'Required. The type of field.' }),
        })
        .openapi({ description: 'Represents a column field within a table schema.', required: [] }),
    )
    .openapi('GoogleCloudDataplexV1SchemaSchemaField')

const GoogleCloudDataplexV1SchemaPartitionFieldSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Partition field name must consist of letters, numbers, and underscores only, with a maximum of length of 256 characters, and must begin with a letter or underscore..',
      }),
    type: z
      .enum([
        'TYPE_UNSPECIFIED',
        'BOOLEAN',
        'BYTE',
        'INT16',
        'INT32',
        'INT64',
        'FLOAT',
        'DOUBLE',
        'DECIMAL',
        'STRING',
        'BINARY',
        'TIMESTAMP',
        'DATE',
        'TIME',
        'RECORD',
        'NULL',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Immutable. The type of field.' }),
  })
  .openapi({
    description:
      "Represents a key field within the entity's partition structure. You could have up to 20 partition fields, but only the first 10 partitions have the filtering ability due to performance consideration. Note: Partition fields are immutable.",
    required: [],
  })
  .openapi('GoogleCloudDataplexV1SchemaPartitionField')

type GoogleCloudDataplexV1SchemaType = {
  fields?: z.infer<typeof GoogleCloudDataplexV1SchemaSchemaFieldSchema>[]
  partitionFields?: z.infer<typeof GoogleCloudDataplexV1SchemaPartitionFieldSchema>[]
  partitionStyle?: 'PARTITION_STYLE_UNSPECIFIED' | 'HIVE_COMPATIBLE'
  userManaged?: boolean
}

type GoogleCloudDataplexV1SchemaSchemaFieldType = {
  description?: string
  fields?: GoogleCloudDataplexV1SchemaSchemaFieldType[]
  mode?: 'MODE_UNSPECIFIED' | 'REQUIRED' | 'NULLABLE' | 'REPEATED'
  name?: string
  type?:
    | 'TYPE_UNSPECIFIED'
    | 'BOOLEAN'
    | 'BYTE'
    | 'INT16'
    | 'INT32'
    | 'INT64'
    | 'FLOAT'
    | 'DOUBLE'
    | 'DECIMAL'
    | 'STRING'
    | 'BINARY'
    | 'TIMESTAMP'
    | 'DATE'
    | 'TIME'
    | 'RECORD'
    | 'NULL'
}

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } ',
  })
  .openapi('Empty')

const GoogleCloudDataplexV1ActionFailedSecurityPolicyApplySchema = z
  .object({
    asset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of one of the assets with failing security policy application. Populated for a lake or zone resource only.',
      }),
  })
  .openapi({
    description:
      'Failed to apply security policy to the managed resource(s) under a lake, zone or an asset. For a lake or zone resource, one or more underlying assets has a failure applying security policy to the associated managed resource.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1ActionFailedSecurityPolicyApply')

const GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchema = z
  .object({
    existingSchema: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The existing and expected schema of the table. The schema is provided as a JSON formatted structure listing columns and data types.',
      }),
    newSchema: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The new and incompatible schema within the table. The schema is provided as a JSON formatted structured listing columns and data types.',
      }),
    sampledDataLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The list of data locations sampled and used for format/schema inference.',
      }),
    schemaChange: z
      .enum(['SCHEMA_CHANGE_UNSPECIFIED', 'INCOMPATIBLE', 'MODIFIED'])
      .exactOptional()
      .openapi({
        description: 'Whether the action relates to a schema that is incompatible or modified.',
      }),
    table: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the table containing invalid data.' }),
  })
  .openapi({
    description: 'Action details for incompatible schemas detected by discovery.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1ActionIncompatibleDataSchema')

const GoogleCloudDataplexV1ActionInvalidDataFormatSchema = z
  .object({
    expectedFormat: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expected data format of the entity.' }),
    newFormat: z
      .string()
      .exactOptional()
      .openapi({ description: 'The new unexpected data format within the entity.' }),
    sampledDataLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The list of data locations sampled and used for format/schema inference.',
      }),
  })
  .openapi({
    description: 'Action details for invalid or unsupported data files detected by discovery.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1ActionInvalidDataFormat')

const GoogleCloudDataplexV1ActionInvalidDataOrganizationSchema = z
  .object({})
  .openapi({ description: 'Action details for invalid data arrangement.' })
  .openapi('GoogleCloudDataplexV1ActionInvalidDataOrganization')

const GoogleCloudDataplexV1ActionInvalidDataPartitionSchema = z
  .object({
    expectedStructure: z
      .enum(['PARTITION_STRUCTURE_UNSPECIFIED', 'CONSISTENT_KEYS', 'HIVE_STYLE_KEYS'])
      .exactOptional()
      .openapi({ description: 'The issue type of InvalidDataPartition.' }),
  })
  .openapi({
    description: 'Action details for invalid or unsupported partitions detected by discovery.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1ActionInvalidDataPartition')

const GoogleCloudDataplexV1ActionMissingDataSchema = z
  .object({})
  .openapi({ description: 'Action details for absence of data detected by discovery.' })
  .openapi('GoogleCloudDataplexV1ActionMissingData')

const GoogleCloudDataplexV1ActionMissingResourceSchema = z
  .object({})
  .openapi({
    description: 'Action details for resource references in assets that cannot be located.',
  })
  .openapi('GoogleCloudDataplexV1ActionMissingResource')

const GoogleCloudDataplexV1ActionUnauthorizedResourceSchema = z
  .object({})
  .openapi({
    description:
      'Action details for unauthorized resource issues raised to indicate that the service account associated with the lake instance is not authorized to access or manage the resource associated with an asset.',
  })
  .openapi('GoogleCloudDataplexV1ActionUnauthorizedResource')

const GoogleCloudDataplexV1ActionSchema = z
  .object({
    asset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.',
        readOnly: true,
      }),
    category: z
      .enum(['CATEGORY_UNSPECIFIED', 'RESOURCE_MANAGEMENT', 'SECURITY_POLICY', 'DATA_DISCOVERY'])
      .exactOptional()
      .openapi({ description: 'The category of issue associated with the action.' }),
    dataLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of data locations associated with this action. Cloud Storage locations are represented as URI paths(E.g. gs://bucket/table1/year=2020/month=Jan/). BigQuery locations refer to resource names(E.g. bigquery.googleapis.com/projects/project-id/datasets/dataset-id).',
      }),
    detectTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time that the issue was detected.' }),
    failedSecurityPolicyApply:
      GoogleCloudDataplexV1ActionFailedSecurityPolicyApplySchema.exactOptional().openapi({
        description: 'Details for issues related to applying security policy.',
      }),
    incompatibleDataSchema:
      GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchema.exactOptional().openapi({
        description: 'Details for issues related to incompatible schemas detected within data.',
      }),
    invalidDataFormat: GoogleCloudDataplexV1ActionInvalidDataFormatSchema.exactOptional().openapi({
      description: 'Details for issues related to invalid or unsupported data formats.',
    }),
    invalidDataOrganization:
      GoogleCloudDataplexV1ActionInvalidDataOrganizationSchema.exactOptional().openapi({
        description: 'Details for issues related to invalid data arrangement.',
      }),
    invalidDataPartition:
      GoogleCloudDataplexV1ActionInvalidDataPartitionSchema.exactOptional().openapi({
        description:
          'Details for issues related to invalid or unsupported data partition structure.',
      }),
    issue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Detailed description of the issue requiring action.' }),
    lake: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.',
        readOnly: true,
      }),
    missingData: GoogleCloudDataplexV1ActionMissingDataSchema.exactOptional().openapi({
      description: 'Details for issues related to absence of data within managed resources.',
    }),
    missingResource: GoogleCloudDataplexV1ActionMissingResourceSchema.exactOptional().openapi({
      description: 'Details for issues related to absence of a managed resource.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the action, of the form: projects/{project}/locations/{location}/lakes/{lake}/actions/{action} projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/actions/{action} projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/assets/{asset}/actions/{action}.',
        readOnly: true,
      }),
    unauthorizedResource:
      GoogleCloudDataplexV1ActionUnauthorizedResourceSchema.exactOptional().openapi({
        description: 'Details for issues related to lack of permissions to access data resources.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Action represents an issue requiring administrator action for resolution.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1Action')

const GoogleCloudDataplexV1AssetDiscoverySpecCsvOptionsSchema = z
  .object({
    delimiter: z
      .string()
      .exactOptional()
      .openapi({
        description: "Optional. The delimiter being used to separate values. This defaults to ','.",
      }),
    disableTypeInference: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.',
      }),
    encoding: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The character encoding of the data. The default is UTF-8.',
      }),
    headerRows: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.',
      }),
  })
  .openapi({ description: 'Describe CSV and similar semi-structured data formats.', required: [] })
  .openapi('GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions')

const GoogleCloudDataplexV1AssetDiscoverySpecJsonOptionsSchema = z
  .object({
    disableTypeInference: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).',
      }),
    encoding: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The character encoding of the data. The default is UTF-8.',
      }),
  })
  .openapi({ description: 'Describe JSON data format.', required: [] })
  .openapi('GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions')

const GoogleCloudDataplexV1AssetDiscoverySpecSchema = z
  .object({
    csvOptions: GoogleCloudDataplexV1AssetDiscoverySpecCsvOptionsSchema.exactOptional().openapi({
      description: 'Optional. Configuration for CSV data.',
    }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. Whether discovery is enabled.' }),
    excludePatterns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.',
      }),
    includePatterns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.',
      }),
    jsonOptions: GoogleCloudDataplexV1AssetDiscoverySpecJsonOptionsSchema.exactOptional().openapi({
      description: 'Optional. Configuration for Json data.',
    }),
    schedule: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *.',
      }),
  })
  .openapi({
    description: 'Settings to manage the metadata discovery and publishing for an asset.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1AssetDiscoverySpec')

const GoogleCloudDataplexV1AssetDiscoveryStatusStatsSchema = z
  .object({
    dataItems: z
      .string()
      .exactOptional()
      .openapi({ description: 'The count of data items within the referenced resource.' }),
    dataSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of stored data bytes within the referenced resource.' }),
    filesets: z
      .string()
      .exactOptional()
      .openapi({ description: 'The count of fileset entities within the referenced resource.' }),
    tables: z
      .string()
      .exactOptional()
      .openapi({ description: 'The count of table entities within the referenced resource.' }),
  })
  .openapi({
    description: 'The aggregated data statistics for the asset reported by discovery.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1AssetDiscoveryStatusStats')

const GoogleCloudDataplexV1AssetDiscoveryStatusSchema = z
  .object({
    lastRunDuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'The duration of the last discovery run.' }),
    lastRunTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The start time of the last discovery run.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional information about the current state.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'SCHEDULED', 'IN_PROGRESS', 'PAUSED', 'DISABLED'])
      .exactOptional()
      .openapi({ description: 'The current status of the discovery feature.' }),
    stats: GoogleCloudDataplexV1AssetDiscoveryStatusStatsSchema.exactOptional().openapi({
      description: 'Data Stats of the asset reported by discovery.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last update time of the status.' }),
  })
  .openapi({ description: 'Status of discovery for an asset.', required: [] })
  .openapi('GoogleCloudDataplexV1AssetDiscoveryStatus')

const GoogleCloudDataplexV1AssetResourceSpecSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Relative name of the cloud resource that contains the data that is being managed within a lake. For example: projects/{project_number}/buckets/{bucket_id} projects/{project_number}/datasets/{dataset_id}',
      }),
    readAccessMode: z
      .enum(['ACCESS_MODE_UNSPECIFIED', 'DIRECT', 'MANAGED'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Determines how read permissions are handled for each asset and their associated tables. Only available to storage buckets assets.',
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'STORAGE_BUCKET', 'BIGQUERY_DATASET'])
      .exactOptional()
      .openapi({ description: 'Required. Immutable. Type of resource.' }),
  })
  .openapi({
    description: 'Identifies the cloud resource that is referenced by this asset.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1AssetResourceSpec')

const GoogleCloudDataplexV1AssetResourceStatusSchema = z
  .object({
    managedAccessIdentity: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Service account associated with the BigQuery Connection.',
        readOnly: true,
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional information about the current state.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'READY', 'ERROR'])
      .exactOptional()
      .openapi({ description: 'The current state of the managed resource.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last update time of the status.' }),
  })
  .openapi({ description: 'Status of the resource referenced by an asset.', required: [] })
  .openapi('GoogleCloudDataplexV1AssetResourceStatus')

const GoogleCloudDataplexV1AssetSecurityStatusSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional information about the current state.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'READY', 'APPLYING', 'ERROR'])
      .exactOptional()
      .openapi({
        description: 'The current state of the security policy applied to the attached resource.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last update time of the status.' }),
  })
  .openapi({
    description:
      'Security policy status of the asset. Data security policy, i.e., readers, writers & owners, should be specified in the lake/zone/asset IAM policy.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1AssetSecurityStatus')

const GoogleCloudDataplexV1AssetSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the asset was created.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Description of the asset.' }),
    discoverySpec: GoogleCloudDataplexV1AssetDiscoverySpecSchema.exactOptional().openapi({
      description:
        'Optional. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone.',
    }),
    discoveryStatus: GoogleCloudDataplexV1AssetDiscoveryStatusSchema.exactOptional().openapi({
      description:
        'Output only. Status of the discovery feature applied to data referenced by this asset.',
      readOnly: true,
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. User friendly display name.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. User defined labels for the asset.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.',
        readOnly: true,
      }),
    resourceSpec: GoogleCloudDataplexV1AssetResourceSpecSchema.exactOptional().openapi({
      description: 'Required. Specification of the resource that is referenced by this asset.',
    }),
    resourceStatus: GoogleCloudDataplexV1AssetResourceStatusSchema.exactOptional().openapi({
      description: 'Output only. Status of the resource referenced by this asset.',
      readOnly: true,
    }),
    securityStatus: GoogleCloudDataplexV1AssetSecurityStatusSchema.exactOptional().openapi({
      description:
        'Output only. Status of the security policy applied to resource referenced by this asset.',
      readOnly: true,
    }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'CREATING', 'DELETING', 'ACTION_REQUIRED'])
      .exactOptional()
      .openapi({ description: 'Output only. Current state of the asset.', readOnly: true }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. System generated globally unique ID for the asset. This ID will be different if the asset is deleted and re-created with the same name.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the asset was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'An asset represents a cloud resource that is being managed within a lake as a member of a zone.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1Asset')

const GoogleCloudDataplexV1AssetStatusSchema = z
  .object({
    activeAssets: z.int32().exactOptional().openapi({ description: 'Number of active assets.' }),
    securityPolicyApplyingAssets: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of assets that are in process of updating the security policy on attached resources.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last update time of the status.' }),
  })
  .openapi({
    description: 'Aggregated status of the underlying assets of a lake or zone.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1AssetStatus')

const GoogleCloudDataplexV1CancelJobRequestSchema = z
  .object({})
  .openapi({ description: 'Cancel task jobs.' })
  .openapi('GoogleCloudDataplexV1CancelJobRequest')

const GoogleCloudDataplexV1ContentNotebookSchema = z
  .object({
    kernelType: z
      .enum(['KERNEL_TYPE_UNSPECIFIED', 'PYTHON3'])
      .exactOptional()
      .openapi({ description: 'Required. Kernel Type of the notebook.' }),
  })
  .openapi({ description: 'Configuration for Notebook content.', required: [] })
  .openapi('GoogleCloudDataplexV1ContentNotebook')

const GoogleCloudDataplexV1ContentSqlScriptSchema = z
  .object({
    engine: z
      .enum(['QUERY_ENGINE_UNSPECIFIED', 'SPARK'])
      .exactOptional()
      .openapi({ description: 'Required. Query Engine to be used for the Sql Query.' }),
  })
  .openapi({ description: 'Configuration for the Sql Script content.', required: [] })
  .openapi('GoogleCloudDataplexV1ContentSqlScript')

const GoogleCloudDataplexV1ContentSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Content creation time.', readOnly: true }),
    dataText: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Content data in string format.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Description of the content.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. User defined labels for the content.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id}',
        readOnly: true,
      }),
    notebook: GoogleCloudDataplexV1ContentNotebookSchema.exactOptional().openapi({
      description: 'Notebook related configurations.',
    }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The path for the Content file, represented as directory structure. Unique within a lake. Limited to alphanumerics, hyphens, underscores, dots and slashes.',
      }),
    sqlScript: GoogleCloudDataplexV1ContentSqlScriptSchema.exactOptional().openapi({
      description: 'Sql Script related configurations.',
    }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. System generated globally unique ID for the content. This ID will be different if the content is deleted and re-created with the same name.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the content was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Content represents a user-visible notebook or a sql script',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1Content')

const GoogleCloudDataplexV1DataAccessSpecSchema = z
  .object({
    readers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The format of strings follows the pattern followed by IAM in the bindings. user:{email}, serviceAccount:{email} group:{email}. The set of principals to be granted reader role on data stored within resources.',
      }),
  })
  .openapi({
    description:
      'DataAccessSpec holds the access control configuration to be enforced on data stored within resources (eg: rows, columns in BigQuery Tables). When associated with data, the data is only accessible to principals explicitly granted access through the DataAccessSpec. Principals with access to the containing resource are not implicitly granted access.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataAccessSpec')

const GoogleCloudDataplexV1ResourceAccessSpecSchema = z
  .object({
    owners: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Optional. The set of principals to be granted owner role on the resource.',
      }),
    readers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The format of strings follows the pattern followed by IAM in the bindings. user:{email}, serviceAccount:{email} group:{email}. The set of principals to be granted reader role on the resource.',
      }),
    writers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Optional. The set of principals to be granted writer role on the resource.',
      }),
  })
  .openapi({
    description:
      'ResourceAccessSpec holds the access control configuration to be enforced on the resources, for example, Cloud Storage bucket, BigQuery dataset, BigQuery table.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1ResourceAccessSpec')

const GoogleCloudDataplexV1DataAttributeSchema = z
  .object({
    attributeCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of child attributes present for this attribute.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the DataAttribute was created.',
        readOnly: true,
      }),
    dataAccessSpec: GoogleCloudDataplexV1DataAccessSpecSchema.exactOptional().openapi({
      description:
        'Optional. Specified when applied to data stored on the resource (eg: rows, columns in BigQuery Tables).',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Description of the DataAttribute.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. User friendly display name.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. User-defined labels for the DataAttribute.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the dataAttribute, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}.',
        readOnly: true,
      }),
    parentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The ID of the parent DataAttribute resource, should belong to the same data taxonomy. Circular dependency in parent chain is not valid. Maximum depth of the hierarchy allowed is 4. a -> b -> c -> d -> e, depth = 4',
      }),
    resourceAccessSpec: GoogleCloudDataplexV1ResourceAccessSpecSchema.exactOptional().openapi({
      description:
        'Optional. Specified when applied to a resource (eg: Cloud Storage bucket, BigQuery dataset, BigQuery table).',
    }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. System generated globally unique ID for the DataAttribute. This ID will be different if the DataAttribute is deleted and re-created with the same name.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the DataAttribute was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Denotes one dataAttribute in a dataTaxonomy, for example, PII. DataAttribute resources can be defined in a hierarchy. A single dataAttribute resource can contain specs of multiple types PII - ResourceAccessSpec : - readers :foo@bar.com - DataAccessSpec : - readers :bar@foo.com ',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataAttribute')

const GoogleCloudDataplexV1DataAttributeBindingPathSchema = z
  .object({
    attributes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. List of attributes to be associated with the path of the resource, provided in the form: projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The name identifier of the path. Nested columns should be of the form: 'address.city'.",
      }),
  })
  .openapi({
    description:
      'Represents a subresource of the given resource, and associated bindings with it. Currently supported subresources are column and partition schema fields within a table.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataAttributeBindingPath')

const GoogleCloudDataplexV1DataAttributeBindingSchema = z
  .object({
    attributes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. List of attributes to be associated with the resource, provided in the form: projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the DataAttributeBinding was created.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Description of the DataAttributeBinding.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. User friendly display name.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Etags must be used when calling the DeleteDataAttributeBinding and the UpdateDataAttributeBinding method.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. User-defined labels for the DataAttributeBinding.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the Data Attribute Binding, of the form: projects/{project_number}/locations/{location}/dataAttributeBindings/{data_attribute_binding_id}',
        readOnly: true,
      }),
    paths: z
      .array(GoogleCloudDataplexV1DataAttributeBindingPathSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. The list of paths for items within the associated resource (eg. columns and partitions within a table) along with attribute bindings.',
      }),
    resource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Immutable. The resource name of the resource that is associated to attributes. Presently, only entity resource is supported in the form: projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity_id} Must belong in the same project and region as the attribute binding, and there can only exist one active binding for a resource.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. System generated globally unique ID for the DataAttributeBinding. This ID will be different if the DataAttributeBinding is deleted and re-created with the same name.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the DataAttributeBinding was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "DataAttributeBinding represents binding of attributes to resources. Eg: Bind 'CustomerInfo' entity with 'PII' attribute.",
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataAttributeBinding')

const GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfoSchema = z
  .object({
    average: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Average of non-null values in the scanned data. NaN, if the field has a NaN.',
      }),
    max: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Maximum of non-null values in the scanned data. NaN, if the field has a NaN.',
      }),
    min: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Minimum of non-null values in the scanned data. NaN, if the field has a NaN.',
      }),
    quartiles: z
      .array(z.float64())
      .exactOptional()
      .openapi({
        description:
          'A quartile divides the number of data points into four parts, or quarters, of more-or-less equal size. Three main quartiles used are: The first quartile (Q1) splits off the lowest 25% of data from the highest 75%. It is also known as the lower or 25th empirical quartile, as 25% of the data is below this point. The second quartile (Q2) is the median of a data set. So, 50% of the data lies below this point. The third quartile (Q3) splits off the highest 25% of data from the lowest 75%. It is known as the upper or 75th empirical quartile, as 75% of the data lies below this point. Here, the quartiles is provided as an ordered list of quartile values for the scanned data, occurring in order Q1, median, Q3.',
      }),
    standardDeviation: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Standard deviation of non-null values in the scanned data. NaN, if the field has a NaN.',
      }),
  })
  .openapi({ description: 'The profile information for a double type field.', required: [] })
  .openapi('GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo')

const GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfoSchema = z
  .object({
    average: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Average of non-null values in the scanned data. NaN, if the field has a NaN.',
      }),
    max: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Maximum of non-null values in the scanned data. NaN, if the field has a NaN.',
      }),
    min: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Minimum of non-null values in the scanned data. NaN, if the field has a NaN.',
      }),
    quartiles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A quartile divides the number of data points into four parts, or quarters, of more-or-less equal size. Three main quartiles used are: The first quartile (Q1) splits off the lowest 25% of data from the highest 75%. It is also known as the lower or 25th empirical quartile, as 25% of the data is below this point. The second quartile (Q2) is the median of a data set. So, 50% of the data lies below this point. The third quartile (Q3) splits off the highest 25% of data from the lowest 75%. It is known as the upper or 75th empirical quartile, as 75% of the data lies below this point. Here, the quartiles is provided as an ordered list of quartile values for the scanned data, occurring in order Q1, median, Q3.',
      }),
    standardDeviation: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Standard deviation of non-null values in the scanned data. NaN, if the field has a NaN.',
      }),
  })
  .openapi({ description: 'The profile information for an integer type field.', required: [] })
  .openapi('GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo')

const GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfoSchema = z
  .object({
    averageLength: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Average length of non-null values in the scanned data.' }),
    maxLength: z
      .string()
      .exactOptional()
      .openapi({ description: 'Maximum length of non-null values in the scanned data.' }),
    minLength: z
      .string()
      .exactOptional()
      .openapi({ description: 'Minimum length of non-null values in the scanned data.' }),
  })
  .openapi({ description: 'The profile information for a string type field.', required: [] })
  .openapi('GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo')

const GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValueSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of the corresponding value in the scanned data.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'String value of a top N non-null value.' }),
  })
  .openapi({ description: 'Top N non-null values in the scanned data.', required: [] })
  .openapi('GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue')

const GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoSchema = z
  .object({
    distinctRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Ratio of rows with distinct values against total scanned rows. Not available for complex non-groupable field type RECORD and fields with REPEATABLE mode.',
      }),
    doubleProfile:
      GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfoSchema.exactOptional().openapi(
        { description: 'Double type field information.' },
      ),
    integerProfile:
      GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfoSchema.exactOptional().openapi(
        { description: 'Integer type field information.' },
      ),
    nullRatio: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Ratio of rows with null value against total scanned rows.' }),
    stringProfile:
      GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfoSchema.exactOptional().openapi(
        { description: 'String type field information.' },
      ),
    topNValues: z
      .array(GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValueSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of top N non-null values and number of times they occur in the scanned data. N is 10 or equal to the number of distinct values in the field, whichever is smaller. Not available for complex non-groupable field type RECORD and fields with REPEATABLE mode.',
      }),
  })
  .openapi({ description: 'The profile information for each field type.', required: [] })
  .openapi('GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo')

const GoogleCloudDataplexV1DataProfileResultProfileFieldSchema = z
  .object({
    mode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The mode of the field. Possible values include: REQUIRED, if it is a required field. NULLABLE, if it is an optional field. REPEATED, if it is a repeated field.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the field.' }),
    profile:
      GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoSchema.exactOptional().openapi({
        description: 'Profile information for the corresponding field.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The data type retrieved from the schema of the data source. For instance, for a BigQuery native table, it is the BigQuery Table Schema (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#tablefieldschema). For a Dataplex Entity, it is the Entity Schema (https://cloud.google.com/dataplex/docs/reference/rpc/google.cloud.dataplex.v1#type_3).',
      }),
  })
  .openapi({ description: 'A field within a table.', required: [] })
  .openapi('GoogleCloudDataplexV1DataProfileResultProfileField')

const GoogleCloudDataplexV1DataProfileResultProfileSchema = z
  .object({
    fields: z
      .array(GoogleCloudDataplexV1DataProfileResultProfileFieldSchema)
      .exactOptional()
      .openapi({
        description: 'List of fields with structural and profile information for each field.',
      }),
  })
  .openapi({
    description: 'Contains name, type, mode and field type specific profile information.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataProfileResultProfile')

const GoogleCloudDataplexV1ScannedDataIncrementalFieldSchema = z
  .object({
    end: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value that marks the end of the range.' }),
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The field that contains values which monotonically increases over time (e.g. a timestamp column).',
      }),
    start: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value that marks the start of the range.' }),
  })
  .openapi({
    description: 'A data range denoted by a pair of start/end values of a field.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1ScannedDataIncrementalField')

const GoogleCloudDataplexV1ScannedDataSchema = z
  .object({
    incrementalField:
      GoogleCloudDataplexV1ScannedDataIncrementalFieldSchema.exactOptional().openapi({
        description: 'The range denoted by values of an incremental field',
      }),
  })
  .openapi({
    description: 'The data scanned during processing (e.g. in incremental DataScan)',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1ScannedData')

const GoogleCloudDataplexV1DataProfileResultSchema = z
  .object({
    profile: GoogleCloudDataplexV1DataProfileResultProfileSchema.exactOptional().openapi({
      description: 'The profile information per field.',
    }),
    rowCount: z.string().exactOptional().openapi({ description: 'The count of rows scanned.' }),
    scannedData: GoogleCloudDataplexV1ScannedDataSchema.exactOptional().openapi({
      description: 'The data scanned for this result.',
    }),
  })
  .openapi({
    description:
      'DataProfileResult defines the output of DataProfileScan. Each field of the table will have field type specific profile result.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataProfileResult')

const GoogleCloudDataplexV1DataProfileSpecSchema = z
  .object({})
  .openapi({ description: 'DataProfileScan related setting.' })
  .openapi('GoogleCloudDataplexV1DataProfileSpec')

const GoogleCloudDataplexV1DataQualityDimensionResultSchema = z
  .object({
    passed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the dimension passed or failed.' }),
  })
  .openapi({
    description:
      'DataQualityDimensionResult provides a more detailed, per-dimension view of the results.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataQualityDimensionResult')

const GoogleCloudDataplexV1DataQualityRuleNonNullExpectationSchema = z
  .object({})
  .openapi({ description: 'Evaluates whether each column value is null.' })
  .openapi('GoogleCloudDataplexV1DataQualityRuleNonNullExpectation')

const GoogleCloudDataplexV1DataQualityRuleRangeExpectationSchema = z
  .object({
    maxValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum column value allowed for a row to pass this validation. At least one of min_value and max_value need to be provided.',
      }),
    minValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The minimum column value allowed for a row to pass this validation. At least one of min_value and max_value need to be provided.',
      }),
    strictMaxEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.Only relevant if a max_value has been defined. Default = false.",
      }),
    strictMinEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.Only relevant if a min_value has been defined. Default = false.",
      }),
  })
  .openapi({
    description: 'Evaluates whether each column value lies between a specified range.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataQualityRuleRangeExpectation')

const GoogleCloudDataplexV1DataQualityRuleRegexExpectationSchema = z
  .object({
    regex: z
      .string()
      .exactOptional()
      .openapi({ description: 'A regular expression the column value is expected to match.' }),
  })
  .openapi({
    description: 'Evaluates whether each column value matches a specified regex.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataQualityRuleRegexExpectation')

const GoogleCloudDataplexV1DataQualityRuleRowConditionExpectationSchema = z
  .object({
    sqlExpression: z.string().exactOptional().openapi({ description: 'The SQL expression.' }),
  })
  .openapi({
    description:
      'Evaluates whether each row passes the specified condition.The SQL expression needs to use BigQuery standard SQL syntax and should produce a boolean value per row as the result.Example: col1 >= 0 AND col2 < 10',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation')

const GoogleCloudDataplexV1DataQualityRuleSetExpectationSchema = z
  .object({
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Expected values for the column value.' }),
  })
  .openapi({
    description: 'Evaluates whether each column value is contained by a specified set.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataQualityRuleSetExpectation')

const GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationSchema = z
  .object({
    maxValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The maximum column statistic value allowed for a row to pass this validation.At least one of min_value and max_value need to be provided.',
      }),
    minValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The minimum column statistic value allowed for a row to pass this validation.At least one of min_value and max_value need to be provided.',
      }),
    statistic: z
      .enum(['STATISTIC_UNDEFINED', 'MEAN', 'MIN', 'MAX'])
      .exactOptional()
      .openapi({ description: 'The aggregate metric to evaluate.' }),
    strictMaxEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.Only relevant if a max_value has been defined. Default = false.",
      }),
    strictMinEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.Only relevant if a min_value has been defined. Default = false.",
      }),
  })
  .openapi({
    description: 'Evaluates whether the column aggregate statistic lies between a specified range.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation')

const GoogleCloudDataplexV1DataQualityRuleTableConditionExpectationSchema = z
  .object({
    sqlExpression: z.string().exactOptional().openapi({ description: 'The SQL expression.' }),
  })
  .openapi({
    description:
      'Evaluates whether the provided expression is true.The SQL expression needs to use BigQuery standard SQL syntax and should produce a scalar boolean result.Example: MIN(col1) >= 0',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation')

const GoogleCloudDataplexV1DataQualityRuleUniquenessExpectationSchema = z
  .object({})
  .openapi({ description: 'Evaluates whether the column has duplicates.' })
  .openapi('GoogleCloudDataplexV1DataQualityRuleUniquenessExpectation')

const GoogleCloudDataplexV1DataQualityRuleSchema = z
  .object({
    column: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The unnested column which this rule is evaluated against.',
      }),
    dimension: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The dimension a rule belongs to. Results are also aggregated at the dimension level. Supported dimensions are "COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY"',
      }),
    ignoreNull: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Rows with null values will automatically fail a rule, unless ignore_null is true. In that case, such null rows are trivially considered passing.Only applicable to ColumnMap rules.',
      }),
    nonNullExpectation:
      GoogleCloudDataplexV1DataQualityRuleNonNullExpectationSchema.exactOptional().openapi({
        description: 'ColumnMap rule which evaluates whether each column value is null.',
      }),
    rangeExpectation:
      GoogleCloudDataplexV1DataQualityRuleRangeExpectationSchema.exactOptional().openapi({
        description:
          'ColumnMap rule which evaluates whether each column value lies between a specified range.',
      }),
    regexExpectation:
      GoogleCloudDataplexV1DataQualityRuleRegexExpectationSchema.exactOptional().openapi({
        description:
          'ColumnMap rule which evaluates whether each column value matches a specified regex.',
      }),
    rowConditionExpectation:
      GoogleCloudDataplexV1DataQualityRuleRowConditionExpectationSchema.exactOptional().openapi({
        description: 'Table rule which evaluates whether each row passes the specified condition.',
      }),
    setExpectation:
      GoogleCloudDataplexV1DataQualityRuleSetExpectationSchema.exactOptional().openapi({
        description:
          'ColumnMap rule which evaluates whether each column value is contained by a specified set.',
      }),
    statisticRangeExpectation:
      GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationSchema.exactOptional().openapi({
        description:
          'ColumnAggregate rule which evaluates whether the column aggregate statistic lies between a specified range.',
      }),
    tableConditionExpectation:
      GoogleCloudDataplexV1DataQualityRuleTableConditionExpectationSchema.exactOptional().openapi({
        description: 'Table rule which evaluates whether the provided expression is true.',
      }),
    threshold: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional. The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of 0.0, 1.0.0 indicates default value (i.e. 1.0).',
      }),
    uniquenessExpectation:
      GoogleCloudDataplexV1DataQualityRuleUniquenessExpectationSchema.exactOptional().openapi({
        description: 'ColumnAggregate rule which evaluates whether the column has duplicates.',
      }),
  })
  .openapi({
    description: 'A rule captures data quality intent about a data source.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataQualityRule')

const GoogleCloudDataplexV1DataQualityRuleResultSchema = z
  .object({
    evaluatedCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of rows a rule was evaluated against. This field is only valid for ColumnMap type rules.Evaluated count can be configured to either include all rows (default) - with null rows automatically failing rule evaluation, or exclude null rows from the evaluated_count, by setting ignore_nulls = true.',
      }),
    failingRowsQuery: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The query to find rows that did not pass this rule. Only applies to ColumnMap and RowCondition rules.',
      }),
    nullCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of rows with null values in the specified column.' }),
    passRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The ratio of passed_count / evaluated_count. This field is only valid for ColumnMap type rules.',
      }),
    passed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the rule passed or failed.' }),
    passedCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of rows which passed a rule evaluation. This field is only valid for ColumnMap type rules.',
      }),
    rule: GoogleCloudDataplexV1DataQualityRuleSchema.exactOptional().openapi({
      description: 'The rule specified in the DataQualitySpec, as is.',
    }),
  })
  .openapi({
    description: 'DataQualityRuleResult provides a more detailed, per-rule view of the results.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataQualityRuleResult')

const GoogleCloudDataplexV1DataQualityResultSchema = z
  .object({
    dimensions: z
      .array(GoogleCloudDataplexV1DataQualityDimensionResultSchema)
      .exactOptional()
      .openapi({ description: 'A list of results at the dimension level.' }),
    passed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Overall data quality result -- true if all rules passed.' }),
    rowCount: z.string().exactOptional().openapi({ description: 'The count of rows processed.' }),
    rules: z
      .array(GoogleCloudDataplexV1DataQualityRuleResultSchema)
      .exactOptional()
      .openapi({ description: 'A list of all the rules in a job, and their results.' }),
    scannedData: GoogleCloudDataplexV1ScannedDataSchema.exactOptional().openapi({
      description: 'The data scanned for this result.',
    }),
  })
  .openapi({ description: 'The output of a DataQualityScan.', required: [] })
  .openapi('GoogleCloudDataplexV1DataQualityResult')

const GoogleCloudDataplexV1DataQualitySpecSchema = z
  .object({
    rules: z
      .array(GoogleCloudDataplexV1DataQualityRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of rules to evaluate against a data source. At least one rule is required.',
      }),
  })
  .openapi({ description: 'DataQualityScan related setting.', required: [] })
  .openapi('GoogleCloudDataplexV1DataQualitySpec')

const GoogleCloudDataplexV1DataSourceSchema = z
  .object({
    entity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The Dataplex entity that represents the data source (e.g. BigQuery table) for DataScan, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}.',
      }),
    resource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The service-qualified full resource name of the cloud resource for a DataScan job to scan against. The field could be: BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan Format: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID',
      }),
  })
  .openapi({ description: 'The data source for DataScan.', required: [] })
  .openapi('GoogleCloudDataplexV1DataSource')

const GoogleCloudDataplexV1TriggerOnDemandSchema = z
  .object({})
  .openapi({ description: 'The scan runs once via RunDataScan API.' })
  .openapi('GoogleCloudDataplexV1TriggerOnDemand')

const GoogleCloudDataplexV1TriggerScheduleSchema = z
  .object({
    cron: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Cron (https://en.wikipedia.org/wiki/Cron) schedule for running scans periodically.To explicitly set a timezone in the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database (wikipedia (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)). For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *.This field is required for Schedule scans.',
      }),
  })
  .openapi({ description: 'The scan is scheduled to run periodically.', required: [] })
  .openapi('GoogleCloudDataplexV1TriggerSchedule')

const GoogleCloudDataplexV1TriggerSchema = z
  .object({
    onDemand: GoogleCloudDataplexV1TriggerOnDemandSchema.exactOptional().openapi({
      description: 'The scan runs once via RunDataScan API.',
    }),
    schedule: GoogleCloudDataplexV1TriggerScheduleSchema.exactOptional().openapi({
      description: 'The scan is scheduled to run periodically.',
    }),
  })
  .openapi({ description: 'DataScan scheduling and trigger settings.', required: [] })
  .openapi('GoogleCloudDataplexV1Trigger')

const GoogleCloudDataplexV1DataScanExecutionSpecSchema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time.If not specified, a data scan will run for all data in the table.',
      }),
    trigger: GoogleCloudDataplexV1TriggerSchema.exactOptional().openapi({
      description:
        'Optional. Spec related to how often and when a scan should be triggered.If not specified, the default is OnDemand, which means the scan will not run until the user calls RunDataScan API.',
    }),
  })
  .openapi({ description: 'DataScan execution settings.', required: [] })
  .openapi('GoogleCloudDataplexV1DataScanExecutionSpec')

const GoogleCloudDataplexV1DataScanExecutionStatusSchema = z
  .object({
    latestJobEndTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the latest DataScanJob ended.' }),
    latestJobStartTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the latest DataScanJob started.' }),
  })
  .openapi({ description: 'Status of the data scan execution.', required: [] })
  .openapi('GoogleCloudDataplexV1DataScanExecutionStatus')

const GoogleCloudDataplexV1DataScanSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the scan was created.', readOnly: true }),
    data: GoogleCloudDataplexV1DataSourceSchema.exactOptional().openapi({
      description: 'Required. The data source for DataScan.',
    }),
    dataProfileResult: GoogleCloudDataplexV1DataProfileResultSchema.exactOptional().openapi({
      description: 'Output only. The result of the data profile scan.',
      readOnly: true,
    }),
    dataProfileSpec: GoogleCloudDataplexV1DataProfileSpecSchema.exactOptional().openapi({
      description: 'DataProfileScan related setting.',
    }),
    dataQualityResult: GoogleCloudDataplexV1DataQualityResultSchema.exactOptional().openapi({
      description: 'Output only. The result of the data quality scan.',
      readOnly: true,
    }),
    dataQualitySpec: GoogleCloudDataplexV1DataQualitySpecSchema.exactOptional().openapi({
      description: 'DataQualityScan related setting.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. Description of the scan. Must be between 1-1024 characters.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. User friendly display name. Must be between 1-256 characters.',
      }),
    executionSpec: GoogleCloudDataplexV1DataScanExecutionSpecSchema.exactOptional().openapi({
      description:
        'Optional. DataScan execution settings.If not specified, the fields in it will use their default values.',
    }),
    executionStatus: GoogleCloudDataplexV1DataScanExecutionStatusSchema.exactOptional().openapi({
      description: 'Output only. Status of the data scan execution.',
      readOnly: true,
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. User-defined labels for the scan.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the scan, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}, where project refers to a project_id or project_number and location_id refers to a GCP region.',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'CREATING', 'DELETING', 'ACTION_REQUIRED'])
      .exactOptional()
      .openapi({ description: 'Output only. Current state of the DataScan.', readOnly: true }),
    type: z
      .enum(['DATA_SCAN_TYPE_UNSPECIFIED', 'DATA_QUALITY', 'DATA_PROFILE'])
      .exactOptional()
      .openapi({ description: 'Output only. The type of DataScan.', readOnly: true }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. System generated globally unique ID for the scan. This ID will be different if the scan is deleted and re-created with the same name.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the scan was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a user-visible job which provides the insights for the related data source.For example: Data Quality: generates queries based on the rules and runs against the data to get data quality check results. Data Profile: analyzes the data in table(s) and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc).',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataScan')

const GoogleCloudDataplexV1DataScanEventDataProfileResultSchema = z
  .object({
    rowCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The count of rows processed in the data scan job.' }),
  })
  .openapi({ description: 'Data profile result for data scan job.', required: [] })
  .openapi('GoogleCloudDataplexV1DataScanEventDataProfileResult')

const GoogleCloudDataplexV1DataScanEventDataQualityResultSchema = z
  .object({
    dimensionPassed: z
      .record(z.string(), z.boolean())
      .exactOptional()
      .openapi({
        description:
          'The result of each dimension for data quality result. The key of the map is the name of the dimension. The value is the bool value depicting whether the dimension result was pass or not.',
      }),
    passed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the data quality result was pass or not.' }),
    rowCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The count of rows processed in the data scan job.' }),
  })
  .openapi({ description: 'Data quality result for data scan job.', required: [] })
  .openapi('GoogleCloudDataplexV1DataScanEventDataQualityResult')

const GoogleCloudDataplexV1DataScanEventSchema = z
  .object({
    dataProfile: GoogleCloudDataplexV1DataScanEventDataProfileResultSchema.exactOptional().openapi({
      description: 'Data profile result for data profile type data scan.',
    }),
    dataQuality: GoogleCloudDataplexV1DataScanEventDataQualityResultSchema.exactOptional().openapi({
      description: 'Data quality result for data quality type data scan.',
    }),
    dataSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'The data source of the data scan' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the data scan job finished.' }),
    jobId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier of the specific data scan job this log entry is for.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The message describing the data scan job event.' }),
    scope: z
      .enum(['SCOPE_UNSPECIFIED', 'FULL', 'INCREMENTAL'])
      .exactOptional()
      .openapi({ description: 'The scope of the data scan (e.g. full, incremental).' }),
    specVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A version identifier of the spec which was used to execute this job.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the data scan job started to run.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'STARTED', 'SUCCEEDED', 'FAILED', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'The status of the data scan job.' }),
    trigger: z
      .enum(['TRIGGER_UNSPECIFIED', 'ON_DEMAND', 'SCHEDULE'])
      .exactOptional()
      .openapi({ description: 'The trigger type of the data scan job.' }),
    type: z
      .enum(['SCAN_TYPE_UNSPECIFIED', 'DATA_PROFILE', 'DATA_QUALITY'])
      .exactOptional()
      .openapi({ description: 'The type of the data scan.' }),
  })
  .openapi({
    description:
      "These messages contain information about the execution of a datascan. The monitored resource is 'DataScan'",
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataScanEvent')

const GoogleCloudDataplexV1DataScanJobSchema = z
  .object({
    dataProfileResult: GoogleCloudDataplexV1DataProfileResultSchema.exactOptional().openapi({
      description: 'Output only. The result of the data profile scan.',
      readOnly: true,
    }),
    dataProfileSpec: GoogleCloudDataplexV1DataProfileSpecSchema.exactOptional().openapi({
      description: 'Output only. DataProfileScan related setting.',
      readOnly: true,
    }),
    dataQualityResult: GoogleCloudDataplexV1DataQualityResultSchema.exactOptional().openapi({
      description: 'Output only. The result of the data quality scan.',
      readOnly: true,
    }),
    dataQualitySpec: GoogleCloudDataplexV1DataQualitySpecSchema.exactOptional().openapi({
      description: 'Output only. DataQualityScan related setting.',
      readOnly: true,
    }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the DataScanJob ended.',
        readOnly: true,
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Additional information about the current state.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the DataScanJob, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}/jobs/{job_id}, where project refers to a project_id or project_number and location_id refers to a GCP region.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the DataScanJob was started.',
        readOnly: true,
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'RUNNING',
        'CANCELING',
        'CANCELLED',
        'SUCCEEDED',
        'FAILED',
        'PENDING',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. Execution state for the DataScanJob.',
        readOnly: true,
      }),
    type: z
      .enum(['DATA_SCAN_TYPE_UNSPECIFIED', 'DATA_QUALITY', 'DATA_PROFILE'])
      .exactOptional()
      .openapi({ description: 'Output only. The type of the parent DataScan.', readOnly: true }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. System generated globally unique ID for the DataScanJob.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A DataScanJob represents an instance of DataScan execution.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataScanJob')

const GoogleCloudDataplexV1DataTaxonomySchema = z
  .object({
    attributeCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of attributes in the DataTaxonomy.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the DataTaxonomy was created.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Description of the DataTaxonomy.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. User friendly display name.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. User-defined labels for the DataTaxonomy.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the DataTaxonomy, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}.',
        readOnly: true,
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. System generated globally unique ID for the dataTaxonomy. This ID will be different if the DataTaxonomy is deleted and re-created with the same name.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the DataTaxonomy was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "DataTaxonomy represents a set of hierarchical DataAttributes resources, grouped with a common theme Eg: 'SensitiveDataTaxonomy' can have attributes to manage PII data. It is defined at project level.",
    required: [],
  })
  .openapi('GoogleCloudDataplexV1DataTaxonomy')

const GoogleCloudDataplexV1DiscoveryEventActionDetailsSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of action. Eg. IncompatibleDataSchema, InvalidDataFormat',
      }),
  })
  .openapi({ description: 'Details about the action.', required: [] })
  .openapi('GoogleCloudDataplexV1DiscoveryEventActionDetails')

const GoogleCloudDataplexV1DiscoveryEventConfigDetailsSchema = z
  .object({
    parameters: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of discovery configuration parameters in effect. The keys are the field paths within DiscoverySpec. Eg. includePatterns, excludePatterns, csvOptions.disableTypeInference, etc.',
      }),
  })
  .openapi({ description: 'Details about configuration events.', required: [] })
  .openapi('GoogleCloudDataplexV1DiscoveryEventConfigDetails')

const GoogleCloudDataplexV1DiscoveryEventEntityDetailsSchema = z
  .object({
    entity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the entity resource. The name is the fully-qualified resource name.',
      }),
    type: z
      .enum(['ENTITY_TYPE_UNSPECIFIED', 'TABLE', 'FILESET'])
      .exactOptional()
      .openapi({ description: 'The type of the entity resource.' }),
  })
  .openapi({ description: 'Details about the entity.', required: [] })
  .openapi('GoogleCloudDataplexV1DiscoveryEventEntityDetails')

const GoogleCloudDataplexV1DiscoveryEventPartitionDetailsSchema = z
  .object({
    entity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name to the containing entity resource. The name is the fully-qualified resource name.',
      }),
    partition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name to the partition resource. The name is the fully-qualified resource name.',
      }),
    sampledDataLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The locations of the data items (e.g., a Cloud Storage objects) sampled for metadata inference.',
      }),
    type: z
      .enum(['ENTITY_TYPE_UNSPECIFIED', 'TABLE', 'FILESET'])
      .exactOptional()
      .openapi({ description: 'The type of the containing entity resource.' }),
  })
  .openapi({ description: 'Details about the partition.', required: [] })
  .openapi('GoogleCloudDataplexV1DiscoveryEventPartitionDetails')

const GoogleCloudDataplexV1DiscoveryEventSchema = z
  .object({
    action: GoogleCloudDataplexV1DiscoveryEventActionDetailsSchema.exactOptional().openapi({
      description: 'Details about the action associated with the event.',
    }),
    assetId: z.string().exactOptional().openapi({ description: 'The id of the associated asset.' }),
    config: GoogleCloudDataplexV1DiscoveryEventConfigDetailsSchema.exactOptional().openapi({
      description: 'Details about discovery configuration in effect.',
    }),
    dataLocation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The data location associated with the event.' }),
    entity: GoogleCloudDataplexV1DiscoveryEventEntityDetailsSchema.exactOptional().openapi({
      description: 'Details about the entity associated with the event.',
    }),
    lakeId: z.string().exactOptional().openapi({ description: 'The id of the associated lake.' }),
    message: z.string().exactOptional().openapi({ description: 'The log message.' }),
    partition: GoogleCloudDataplexV1DiscoveryEventPartitionDetailsSchema.exactOptional().openapi({
      description: 'Details about the partition associated with the event.',
    }),
    type: z
      .enum([
        'EVENT_TYPE_UNSPECIFIED',
        'CONFIG',
        'ENTITY_CREATED',
        'ENTITY_UPDATED',
        'ENTITY_DELETED',
        'PARTITION_CREATED',
        'PARTITION_UPDATED',
        'PARTITION_DELETED',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the event being logged.' }),
    zoneId: z.string().exactOptional().openapi({ description: 'The id of the associated zone.' }),
  })
  .openapi({ description: 'The payload associated with Discovery data processing.', required: [] })
  .openapi('GoogleCloudDataplexV1DiscoveryEvent')

const GoogleCloudDataplexV1StorageAccessSchema = z
  .object({
    read: z
      .enum(['ACCESS_MODE_UNSPECIFIED', 'DIRECT', 'MANAGED'])
      .exactOptional()
      .openapi({
        description:
          'Output only. Describes the read access mechanism of the data. Not user settable.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Describes the access mechanism of the data within its storage location.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1StorageAccess')

const GoogleCloudDataplexV1EntityCompatibilityStatusCompatibilitySchema = z
  .object({
    compatible: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the entity is compatible and can be represented in the metadata store.',
        readOnly: true,
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Provides additional detail if the entity is incompatible with the metadata store.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Provides compatibility information for a specific metadata store.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility')

const GoogleCloudDataplexV1EntityCompatibilityStatusSchema = z
  .object({
    bigquery:
      GoogleCloudDataplexV1EntityCompatibilityStatusCompatibilitySchema.exactOptional().openapi({
        description: 'Output only. Whether this entity is compatible with BigQuery.',
        readOnly: true,
      }),
    hiveMetastore:
      GoogleCloudDataplexV1EntityCompatibilityStatusCompatibilitySchema.exactOptional().openapi({
        description: 'Output only. Whether this entity is compatible with Hive Metastore.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Provides compatibility information for various metadata stores.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1EntityCompatibilityStatus')

const GoogleCloudDataplexV1StorageFormatCsvOptionsSchema = z
  .object({
    delimiter: z
      .string()
      .exactOptional()
      .openapi({
        description: "Optional. The delimiter used to separate values. Defaults to ','.",
      }),
    encoding: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The character encoding of the data. Accepts "US-ASCII", "UTF-8", and "ISO-8859-1". Defaults to UTF-8 if unspecified.',
      }),
    headerRows: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. Defaults to 0.',
      }),
    quote: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The character used to quote column values. Accepts '\"' (double quotation mark) or ''' (single quotation mark). Defaults to '\"' (double quotation mark) if unspecified.",
      }),
  })
  .openapi({ description: 'Describes CSV and similar semi-structured data formats.', required: [] })
  .openapi('GoogleCloudDataplexV1StorageFormatCsvOptions')

const GoogleCloudDataplexV1StorageFormatIcebergOptionsSchema = z
  .object({
    metadataLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The location of where the iceberg metadata is present, must be within the table path',
      }),
  })
  .openapi({ description: 'Describes Iceberg data format.', required: [] })
  .openapi('GoogleCloudDataplexV1StorageFormatIcebergOptions')

const GoogleCloudDataplexV1StorageFormatJsonOptionsSchema = z
  .object({
    encoding: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The character encoding of the data. Accepts "US-ASCII", "UTF-8" and "ISO-8859-1". Defaults to UTF-8 if not specified.',
      }),
  })
  .openapi({ description: 'Describes JSON data format.', required: [] })
  .openapi('GoogleCloudDataplexV1StorageFormatJsonOptions')

const GoogleCloudDataplexV1StorageFormatSchema = z
  .object({
    compressionFormat: z
      .enum(['COMPRESSION_FORMAT_UNSPECIFIED', 'GZIP', 'BZIP2'])
      .exactOptional()
      .openapi({
        description:
          'Optional. The compression type associated with the stored data. If unspecified, the data is uncompressed.',
      }),
    csv: GoogleCloudDataplexV1StorageFormatCsvOptionsSchema.exactOptional().openapi({
      description: 'Optional. Additional information about CSV formatted data.',
    }),
    format: z
      .enum([
        'FORMAT_UNSPECIFIED',
        'PARQUET',
        'AVRO',
        'ORC',
        'CSV',
        'JSON',
        'IMAGE',
        'AUDIO',
        'VIDEO',
        'TEXT',
        'TFRECORD',
        'OTHER',
        'UNKNOWN',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. The data format associated with the stored data, which represents content type values. The value is inferred from mime type.',
        readOnly: true,
      }),
    iceberg: GoogleCloudDataplexV1StorageFormatIcebergOptionsSchema.exactOptional().openapi({
      description: 'Optional. Additional information about iceberg tables.',
    }),
    json: GoogleCloudDataplexV1StorageFormatJsonOptionsSchema.exactOptional().openapi({
      description: 'Optional. Additional information about CSV formatted data.',
    }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The mime type descriptor for the data. Must match the pattern {type}/{subtype}. Supported values: application/x-parquet application/x-avro application/x-orc application/x-tfrecord application/x-parquet+iceberg application/x-avro+iceberg application/x-orc+iceberg application/json application/{subtypes} text/csv text/ image/{image subtype} video/{video subtype} audio/{audio subtype}',
      }),
  })
  .openapi({
    description: 'Describes the format of the data within its storage location.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1StorageFormat')

const GoogleCloudDataplexV1SchemaSchema: z.ZodType<GoogleCloudDataplexV1SchemaType> = z
  .lazy(() =>
    z
      .object({
        fields: z
          .array(GoogleCloudDataplexV1SchemaSchemaFieldSchema)
          .exactOptional()
          .openapi({
            description:
              'Optional. The sequence of fields describing data in table entities. Note: BigQuery SchemaFields are immutable.',
          }),
        partitionFields: z
          .array(GoogleCloudDataplexV1SchemaPartitionFieldSchema)
          .exactOptional()
          .openapi({
            description:
              'Optional. The sequence of fields describing the partition structure in entities. If this field is empty, there are no partitions within the data.',
          }),
        partitionStyle: z
          .enum(['PARTITION_STYLE_UNSPECIFIED', 'HIVE_COMPATIBLE'])
          .exactOptional()
          .openapi({
            description:
              'Optional. The structure of paths containing partition data within the entity.',
          }),
        userManaged: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Required. Set to true if user-managed or false if managed by Dataplex. The default is false (managed by Dataplex). Set to falseto enable Dataplex discovery to update the schema. including new data discovery, schema inference, and schema evolution. Users retain the ability to input and edit the schema. Dataplex treats schema input by the user as though produced by a previous Dataplex discovery operation, and it will evolve the schema and take action based on that treatment. Set to true to fully manage the entity schema. This setting guarantees that Dataplex will not change schema fields.',
          }),
      })
      .openapi({
        description: 'Schema information describing the structure and layout of the data.',
        required: [],
      }),
  )
  .openapi('GoogleCloudDataplexV1Schema')

const GoogleCloudDataplexV1EntitySchema = z
  .object({
    access: GoogleCloudDataplexV1StorageAccessSchema.exactOptional().openapi({
      description: 'Output only. Identifies the access mechanism to the entity. Not user settable.',
      readOnly: true,
    }),
    asset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The ID of the asset associated with the storage location containing the entity data. The entity must be with in the same zone with the asset.',
      }),
    catalogEntry: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of the associated Data Catalog entry.',
        readOnly: true,
      }),
    compatibility: GoogleCloudDataplexV1EntityCompatibilityStatusSchema.exactOptional().openapi({
      description: 'Output only. Metadata stores that the entity is compatible with.',
      readOnly: true,
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the entity was created.',
        readOnly: true,
      }),
    dataPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The storage path of the entity data. For Cloud Storage data, this is the fully-qualified path to the entity, such as gs://bucket/path/to/data. For BigQuery data, this is the name of the table resource, such as projects/project_id/datasets/dataset_id/tables/table_id.',
      }),
    dataPathPattern: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The set of items within the data path constituting the data in the entity, represented as a glob path. Example: gs://bucket/path/to/data/**/*.csv.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. User friendly longer description text. Must be shorter than or equal to 1024 characters.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. Display name must be shorter than or equal to 256 characters.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The etag associated with the entity, which can be retrieved with a GetEntity request. Required for update and delete requests.',
      }),
    format: GoogleCloudDataplexV1StorageFormatSchema.exactOptional().openapi({
      description:
        'Required. Identifies the storage format of the entity data. It does not apply to entities with data stored in BigQuery.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A user-provided entity ID. It is mutable, and will be used as the published table name. Specifying a new ID in an update entity request will override the existing value. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores, and consist of 256 or fewer characters.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the entity, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{id}.',
        readOnly: true,
      }),
    schema: GoogleCloudDataplexV1SchemaSchema.exactOptional().openapi({
      description:
        'Required. The description of the data structure and layout. The schema is not included in list responses. It is only included in SCHEMA and FULL entity views of a GetEntity response.',
    }),
    system: z
      .enum(['STORAGE_SYSTEM_UNSPECIFIED', 'CLOUD_STORAGE', 'BIGQUERY'])
      .exactOptional()
      .openapi({
        description: 'Required. Immutable. Identifies the storage system of the entity data.',
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'TABLE', 'FILESET'])
      .exactOptional()
      .openapi({ description: 'Required. Immutable. The type of entity.' }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. System generated unique ID for the Entity. This ID will be different if the Entity is deleted and re-created with the same name.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the entity was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Represents tables and fileset metadata contained within a zone.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1Entity')

const GoogleCloudDataplexV1EnvironmentEndpointsSchema = z
  .object({
    notebooks: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. URI to serve notebook APIs', readOnly: true }),
    sql: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. URI to serve SQL APIs', readOnly: true }),
  })
  .openapi({
    description: 'URI Endpoints to access sessions associated with the Environment.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1EnvironmentEndpoints')

const GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResourcesSchema = z
  .object({
    diskSizeGb: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Optional. Size in GB of the disk. Default is 100 GB.' }),
    maxNodeCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Max configurable nodes. If max_node_count > node_count, then auto-scaling is enabled.',
      }),
    nodeCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Total number of nodes in the sessions created for this environment.',
      }),
  })
  .openapi({
    description: 'Compute resources associated with the analyze interactive workloads.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources')

const GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntimeSchema = z
  .object({
    imageVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Dataplex Image version.' }),
    javaLibraries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. List of Java jars to be included in the runtime environment. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar',
      }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Spark properties to provide configuration for use in sessions created for this environment. The properties to set on daemon config files. Property keys are specified in prefix:property format. The prefix must be "spark".',
      }),
    pythonPackages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz',
      }),
  })
  .openapi({ description: 'Software Runtime Configuration to run Analyze.', required: [] })
  .openapi('GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime')

const GoogleCloudDataplexV1EnvironmentInfrastructureSpecSchema = z
  .object({
    compute:
      GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResourcesSchema.exactOptional().openapi(
        { description: 'Optional. Compute resources needed for analyze interactive workloads.' },
      ),
    osImage:
      GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntimeSchema.exactOptional().openapi(
        {
          description:
            'Required. Software Runtime Configuration for analyze interactive workloads.',
        },
      ),
  })
  .openapi({
    description: 'Configuration for the underlying infrastructure used to run workloads.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1EnvironmentInfrastructureSpec')

const GoogleCloudDataplexV1EnvironmentSessionSpecSchema = z
  .object({
    enableFastStartup: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If True, this causes sessions to be pre-created and available for faster startup to enable interactive exploration use-cases. This defaults to False to avoid additional billed charges. These can only be set to True for the environment with name set to "default", and with default configuration.',
      }),
    maxIdleDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The idle time configuration of the session. The session will be auto-terminated at the end of this period.',
      }),
  })
  .openapi({
    description: 'Configuration for sessions created for this environment.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1EnvironmentSessionSpec')

const GoogleCloudDataplexV1EnvironmentSessionStatusSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Queries over sessions to mark whether the environment is currently active or not',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Status of sessions created for this environment.', required: [] })
  .openapi('GoogleCloudDataplexV1EnvironmentSessionStatus')

const GoogleCloudDataplexV1EnvironmentSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Environment creation time.', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Description of the environment.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. User friendly display name.' }),
    endpoints: GoogleCloudDataplexV1EnvironmentEndpointsSchema.exactOptional().openapi({
      description: 'Output only. URI Endpoints to access sessions associated with the Environment.',
      readOnly: true,
    }),
    infrastructureSpec:
      GoogleCloudDataplexV1EnvironmentInfrastructureSpecSchema.exactOptional().openapi({
        description: 'Required. Infrastructure specification for the Environment.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. User defined labels for the environment.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the environment, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}',
        readOnly: true,
      }),
    sessionSpec: GoogleCloudDataplexV1EnvironmentSessionSpecSchema.exactOptional().openapi({
      description: 'Optional. Configuration for sessions created for this environment.',
    }),
    sessionStatus: GoogleCloudDataplexV1EnvironmentSessionStatusSchema.exactOptional().openapi({
      description: 'Output only. Status of sessions created for this environment.',
      readOnly: true,
    }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'CREATING', 'DELETING', 'ACTION_REQUIRED'])
      .exactOptional()
      .openapi({ description: 'Output only. Current state of the environment.', readOnly: true }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. System generated globally unique ID for the environment. This ID will be different if the environment is deleted and re-created with the same name.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the environment was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Environment represents a user-visible compute infrastructure for analytics within a lake.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1Environment')

const GoogleCloudDataplexV1JobSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the job ended.', readOnly: true }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Additional information about the current state.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the job, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}/jobs/{job_id}.',
        readOnly: true,
      }),
    retryCount: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of times the job has been retried (excluding the initial attempt).',
        readOnly: true,
      }),
    service: z
      .enum(['SERVICE_UNSPECIFIED', 'DATAPROC'])
      .exactOptional()
      .openapi({
        description: 'Output only. The underlying service running a job.',
        readOnly: true,
      }),
    serviceJob: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The full resource name for the job run under a particular service.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the job was started.', readOnly: true }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'RUNNING',
        'CANCELLING',
        'CANCELLED',
        'SUCCEEDED',
        'FAILED',
        'ABORTED',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Execution state for the job.', readOnly: true }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. System generated globally unique ID for the job.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A job represents an instance of a task.', required: [] })
  .openapi('GoogleCloudDataplexV1Job')

const GoogleCloudDataplexV1JobEventSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the job ended running.' }),
    jobId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique id identifying the job.' }),
    message: z.string().exactOptional().openapi({ description: 'The log message.' }),
    retries: z.int32().exactOptional().openapi({ description: 'The number of retries.' }),
    service: z
      .enum(['SERVICE_UNSPECIFIED', 'DATAPROC'])
      .exactOptional()
      .openapi({ description: 'The service used to execute the job.' }),
    serviceJob: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference to the job within the service.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the job started running.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'SUCCEEDED', 'FAILED', 'CANCELLED', 'ABORTED'])
      .exactOptional()
      .openapi({ description: 'The job state on completion.' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'SPARK', 'NOTEBOOK'])
      .exactOptional()
      .openapi({ description: 'The type of the job.' }),
  })
  .openapi({
    description:
      'The payload associated with Job logs that contains events describing jobs that have run within a Lake.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1JobEvent')

const GoogleCloudDataplexV1LakeMetastoreSchema = z
  .object({
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A relative reference to the Dataproc Metastore (https://cloud.google.com/dataproc-metastore/docs) service associated with the lake: projects/{project_id}/locations/{location_id}/services/{service_id}',
      }),
  })
  .openapi({
    description: 'Settings to manage association of Dataproc Metastore with a lake.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1LakeMetastore')

const GoogleCloudDataplexV1LakeMetastoreStatusSchema = z
  .object({
    endpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the endpoint used to access the Metastore service.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional information about the current status.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'NONE', 'READY', 'UPDATING', 'ERROR'])
      .exactOptional()
      .openapi({ description: 'Current state of association.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last update time of the metastore status of the lake.' }),
  })
  .openapi({
    description: 'Status of Lake and Dataproc Metastore service instance association.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1LakeMetastoreStatus')

const GoogleCloudDataplexV1LakeSchema = z
  .object({
    assetStatus: GoogleCloudDataplexV1AssetStatusSchema.exactOptional().openapi({
      description: 'Output only. Aggregated status of the underlying assets of the lake.',
      readOnly: true,
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the lake was created.', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Description of the lake.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. User friendly display name.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. User-defined labels for the lake.' }),
    metastore: GoogleCloudDataplexV1LakeMetastoreSchema.exactOptional().openapi({
      description:
        'Optional. Settings to manage lake and Dataproc Metastore service instance association.',
    }),
    metastoreStatus: GoogleCloudDataplexV1LakeMetastoreStatusSchema.exactOptional().openapi({
      description: 'Output only. Metastore status of the lake.',
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.',
        readOnly: true,
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Service account associated with this lake. This service account must be authorized to access or operate on resources managed by the lake.',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'CREATING', 'DELETING', 'ACTION_REQUIRED'])
      .exactOptional()
      .openapi({ description: 'Output only. Current state of the lake.', readOnly: true }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. System generated globally unique ID for the lake. This ID will be different if the lake is deleted and re-created with the same name.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the lake was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1Lake')

const GoogleCloudDataplexV1ListActionsResponseSchema = z
  .object({
    actions: z
      .array(GoogleCloudDataplexV1ActionSchema)
      .exactOptional()
      .openapi({ description: 'Actions under the given parent lake/zone/asset.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'List actions response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListActionsResponse')

const GoogleCloudDataplexV1ListAssetsResponseSchema = z
  .object({
    assets: z
      .array(GoogleCloudDataplexV1AssetSchema)
      .exactOptional()
      .openapi({ description: 'Asset under the given parent zone.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'List assets response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListAssetsResponse')

const GoogleCloudDataplexV1ListContentResponseSchema = z
  .object({
    content: z
      .array(GoogleCloudDataplexV1ContentSchema)
      .exactOptional()
      .openapi({ description: 'Content under the given parent lake.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'List content response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListContentResponse')

const GoogleCloudDataplexV1ListDataAttributeBindingsResponseSchema = z
  .object({
    dataAttributeBindings: z
      .array(GoogleCloudDataplexV1DataAttributeBindingSchema)
      .exactOptional()
      .openapi({ description: 'DataAttributeBindings under the given parent Location.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    unreachableLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'List DataAttributeBindings response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListDataAttributeBindingsResponse')

const GoogleCloudDataplexV1ListDataAttributesResponseSchema = z
  .object({
    dataAttributes: z
      .array(GoogleCloudDataplexV1DataAttributeSchema)
      .exactOptional()
      .openapi({ description: 'DataAttributes under the given parent DataTaxonomy.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    unreachableLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'List DataAttributes response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListDataAttributesResponse')

const GoogleCloudDataplexV1ListDataScanJobsResponseSchema = z
  .object({
    dataScanJobs: z
      .array(GoogleCloudDataplexV1DataScanJobSchema)
      .exactOptional()
      .openapi({ description: 'DataScanJobs (BASIC view only) under a given dataScan.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'List DataScanJobs response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListDataScanJobsResponse')

const GoogleCloudDataplexV1ListDataScansResponseSchema = z
  .object({
    dataScans: z
      .array(GoogleCloudDataplexV1DataScanSchema)
      .exactOptional()
      .openapi({ description: 'DataScans (BASIC view only) under the given parent location.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'List dataScans response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListDataScansResponse')

const GoogleCloudDataplexV1ListDataTaxonomiesResponseSchema = z
  .object({
    dataTaxonomies: z
      .array(GoogleCloudDataplexV1DataTaxonomySchema)
      .exactOptional()
      .openapi({ description: 'DataTaxonomies under the given parent location.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    unreachableLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'List DataTaxonomies response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListDataTaxonomiesResponse')

const GoogleCloudDataplexV1ListEntitiesResponseSchema = z
  .object({
    entities: z
      .array(GoogleCloudDataplexV1EntitySchema)
      .exactOptional()
      .openapi({ description: 'Entities in the specified parent zone.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no remaining results in the list.',
      }),
  })
  .openapi({ description: 'List metadata entities response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListEntitiesResponse')

const GoogleCloudDataplexV1ListEnvironmentsResponseSchema = z
  .object({
    environments: z
      .array(GoogleCloudDataplexV1EnvironmentSchema)
      .exactOptional()
      .openapi({ description: 'Environments under the given parent lake.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'List environments response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListEnvironmentsResponse')

const GoogleCloudDataplexV1ListJobsResponseSchema = z
  .object({
    jobs: z
      .array(GoogleCloudDataplexV1JobSchema)
      .exactOptional()
      .openapi({ description: 'Jobs under a given task.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'List jobs response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListJobsResponse')

const GoogleCloudDataplexV1ListLakesResponseSchema = z
  .object({
    lakes: z
      .array(GoogleCloudDataplexV1LakeSchema)
      .exactOptional()
      .openapi({ description: 'Lakes under the given parent location.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    unreachableLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'List lakes response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListLakesResponse')

const GoogleCloudDataplexV1PartitionSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The etag for this partition.' }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The location of the entity data within the partition, for example, gs://bucket/path/to/entity/key1=value1/key2=value2. Or projects//datasets//tables/',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Partition values used in the HTTP URL must be double encoded. For example, url_encode(url_encode(value)) can be used to encode "US:CA/CA#Sunnyvale so that the request URL ends with "/partitions/US%253ACA/CA%2523Sunnyvale". The name field in the response retains the encoded format.',
        readOnly: true,
      }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The set of values representing the partition, which correspond to the partition schema defined in the parent entity.',
      }),
  })
  .openapi({
    description: 'Represents partition metadata contained within entity instances.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1Partition')

const GoogleCloudDataplexV1ListPartitionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no remaining results in the list.',
      }),
    partitions: z
      .array(GoogleCloudDataplexV1PartitionSchema)
      .exactOptional()
      .openapi({ description: 'Partitions under the specified parent entity.' }),
  })
  .openapi({ description: 'List metadata partitions response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListPartitionsResponse')

const GoogleCloudDataplexV1SessionSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Session start time.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}/sessions/{session_id}',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'CREATING', 'DELETING', 'ACTION_REQUIRED'])
      .exactOptional()
      .openapi({ description: 'Output only. State of Session', readOnly: true }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Email of user running the session.', readOnly: true }),
  })
  .openapi({
    description: 'Represents an active analyze session running for a user.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1Session')

const GoogleCloudDataplexV1ListSessionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    sessions: z
      .array(GoogleCloudDataplexV1SessionSchema)
      .exactOptional()
      .openapi({ description: 'Sessions under a given environment.' }),
  })
  .openapi({ description: 'List sessions response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListSessionsResponse')

const GoogleCloudDataplexV1TaskExecutionSpecSchema = z
  .object({
    args: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The arguments to pass to the task. The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${task_id} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument.',
      }),
    kmsKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{location_id}/keyRings/{key-ring-name}/cryptoKeys/{key-name}.',
      }),
    maxJobExecutionLifetime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The maximum duration after which the job execution is expired.',
      }),
    project: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The project in which jobs are run. By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project.',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Service account to use to execute a task. If not provided, the default Compute service account for the project is used.',
      }),
  })
  .openapi({
    description: 'Execution related settings, like retry and service_account.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1TaskExecutionSpec')

const GoogleCloudDataplexV1TaskExecutionStatusSchema = z
  .object({
    latestJob: GoogleCloudDataplexV1JobSchema.exactOptional().openapi({
      description: 'Output only. latest job execution',
      readOnly: true,
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Last update time of the status.', readOnly: true }),
  })
  .openapi({ description: 'Status of the task execution (e.g. Jobs).', required: [] })
  .openapi('GoogleCloudDataplexV1TaskExecutionStatus')

const GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResourcesSchema = z
  .object({
    executorsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Total number of job executors. Executor Count should be between 2 and 100. Default=2',
      }),
    maxExecutorsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Max configurable executors. If max_executors_count > executors_count, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. Default=1000',
      }),
  })
  .openapi({ description: 'Batch compute resources associated with the task.', required: [] })
  .openapi('GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources')

const GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntimeSchema = z
  .object({
    image: z.string().exactOptional().openapi({ description: 'Optional. Container image to use.' }),
    javaJars: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A list of Java JARS to add to the classpath. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar',
      }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Override to common configuration of open source components installed on the Dataproc cluster. The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).',
      }),
    pythonPackages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz',
      }),
  })
  .openapi({
    description: 'Container Image Runtime Configuration used with Batch execution.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime')

const GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetworkSchema = z
  .object({
    network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used.',
      }),
    networkTags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Optional. List of network tags to apply to the job.' }),
    subNetwork: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The Cloud VPC sub-network in which the job is run.' }),
  })
  .openapi({ description: 'Cloud VPC Network used to run the infrastructure.', required: [] })
  .openapi('GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork')

const GoogleCloudDataplexV1TaskInfrastructureSpecSchema = z
  .object({
    batch:
      GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResourcesSchema.exactOptional().openapi(
        { description: 'Compute resources needed for a Task when using Dataproc Serverless.' },
      ),
    containerImage:
      GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntimeSchema.exactOptional().openapi(
        { description: 'Container Image Runtime Configuration.' },
      ),
    vpcNetwork: GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetworkSchema.exactOptional().openapi(
      { description: 'Vpc network.' },
    ),
  })
  .openapi({
    description: 'Configuration for the underlying infrastructure used to run workloads.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1TaskInfrastructureSpec')

const GoogleCloudDataplexV1TaskNotebookTaskConfigSchema = z
  .object({
    archiveUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.',
      }),
    fileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Cloud Storage URIs of files to be placed in the working directory of each executor.',
      }),
    infrastructureSpec: GoogleCloudDataplexV1TaskInfrastructureSpecSchema.exactOptional().openapi({
      description: 'Optional. Infrastructure specification for the execution.',
    }),
    notebook: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).',
      }),
  })
  .openapi({ description: 'Config for running scheduled notebooks.', required: [] })
  .openapi('GoogleCloudDataplexV1TaskNotebookTaskConfig')

const GoogleCloudDataplexV1TaskSparkTaskConfigSchema = z
  .object({
    archiveUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.',
      }),
    fileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Cloud Storage URIs of files to be placed in the working directory of each executor.',
      }),
    infrastructureSpec: GoogleCloudDataplexV1TaskInfrastructureSpecSchema.exactOptional().openapi({
      description: 'Optional. Infrastructure specification for the execution.',
    }),
    mainClass: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).",
      }),
    mainJarFileUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Storage URI of the jar file that contains the main class. The execution args are passed in as a sequence of named process arguments (--key=value).',
      }),
    pythonScriptFile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Gcloud Storage URI of the main Python file to use as the driver. Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).',
      }),
    sqlScript: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The query text. The execution args are used to declare a set of script variables (set key="value";).',
      }),
    sqlScriptFile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A reference to a query file. This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key="value";).',
      }),
  })
  .openapi({ description: 'User-specified config for running a Spark task.', required: [] })
  .openapi('GoogleCloudDataplexV1TaskSparkTaskConfig')

const GoogleCloudDataplexV1TaskTriggerSpecSchema = z
  .object({
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks.',
      }),
    maxRetries: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task.',
      }),
    schedule: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.',
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'ON_DEMAND', 'RECURRING'])
      .exactOptional()
      .openapi({ description: 'Required. Immutable. Trigger type of the user-specified Task.' }),
  })
  .openapi({ description: 'Task scheduling and trigger settings.', required: [] })
  .openapi('GoogleCloudDataplexV1TaskTriggerSpec')

const GoogleCloudDataplexV1TaskSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the task was created.', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Description of the task.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. User friendly display name.' }),
    executionSpec: GoogleCloudDataplexV1TaskExecutionSpecSchema.exactOptional().openapi({
      description: 'Required. Spec related to how a task is executed.',
    }),
    executionStatus: GoogleCloudDataplexV1TaskExecutionStatusSchema.exactOptional().openapi({
      description: 'Output only. Status of the latest task executions.',
      readOnly: true,
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. User-defined labels for the task.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the task, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/ tasks/{task_id}.',
        readOnly: true,
      }),
    notebook: GoogleCloudDataplexV1TaskNotebookTaskConfigSchema.exactOptional().openapi({
      description: 'Config related to running scheduled Notebooks.',
    }),
    spark: GoogleCloudDataplexV1TaskSparkTaskConfigSchema.exactOptional().openapi({
      description: 'Config related to running custom Spark tasks.',
    }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'CREATING', 'DELETING', 'ACTION_REQUIRED'])
      .exactOptional()
      .openapi({ description: 'Output only. Current state of the task.', readOnly: true }),
    triggerSpec: GoogleCloudDataplexV1TaskTriggerSpecSchema.exactOptional().openapi({
      description: 'Required. Spec related to how often and when a task should be triggered.',
    }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. System generated globally unique ID for the task. This ID will be different if the task is deleted and re-created with the same name.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the task was last updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A task represents a user-visible job.', required: [] })
  .openapi('GoogleCloudDataplexV1Task')

const GoogleCloudDataplexV1ListTasksResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    tasks: z
      .array(GoogleCloudDataplexV1TaskSchema)
      .exactOptional()
      .openapi({ description: 'Tasks under the given parent lake.' }),
    unreachableLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'List tasks response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListTasksResponse')

const GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptionsSchema = z
  .object({
    delimiter: z
      .string()
      .exactOptional()
      .openapi({
        description: "Optional. The delimiter being used to separate values. This defaults to ','.",
      }),
    disableTypeInference: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.',
      }),
    encoding: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The character encoding of the data. The default is UTF-8.',
      }),
    headerRows: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.',
      }),
  })
  .openapi({ description: 'Describe CSV and similar semi-structured data formats.', required: [] })
  .openapi('GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions')

const GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptionsSchema = z
  .object({
    disableTypeInference: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).',
      }),
    encoding: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The character encoding of the data. The default is UTF-8.',
      }),
  })
  .openapi({ description: 'Describe JSON data format.', required: [] })
  .openapi('GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions')

const GoogleCloudDataplexV1ZoneDiscoverySpecSchema = z
  .object({
    csvOptions: GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptionsSchema.exactOptional().openapi({
      description: 'Optional. Configuration for CSV data.',
    }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Required. Whether discovery is enabled.' }),
    excludePatterns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.',
      }),
    includePatterns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.',
      }),
    jsonOptions: GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptionsSchema.exactOptional().openapi({
      description: 'Optional. Configuration for Json data.',
    }),
    schedule: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *.',
      }),
  })
  .openapi({
    description: 'Settings to manage the metadata discovery and publishing in a zone.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1ZoneDiscoverySpec')

const GoogleCloudDataplexV1ZoneResourceSpecSchema = z
  .object({
    locationType: z
      .enum(['LOCATION_TYPE_UNSPECIFIED', 'SINGLE_REGION', 'MULTI_REGION'])
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The location type of the resources that are allowed to be attached to the assets within this zone.',
      }),
  })
  .openapi({
    description: 'Settings for resources attached as assets within a zone.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1ZoneResourceSpec')

const GoogleCloudDataplexV1ZoneSchema = z
  .object({
    assetStatus: GoogleCloudDataplexV1AssetStatusSchema.exactOptional().openapi({
      description: 'Output only. Aggregated status of the underlying assets of the zone.',
      readOnly: true,
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the zone was created.', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Description of the zone.' }),
    discoverySpec: GoogleCloudDataplexV1ZoneDiscoverySpecSchema.exactOptional().openapi({
      description: 'Optional. Specification of the discovery feature applied to data in this zone.',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. User friendly display name.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. User defined labels for the zone.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.',
        readOnly: true,
      }),
    resourceSpec: GoogleCloudDataplexV1ZoneResourceSpecSchema.exactOptional().openapi({
      description:
        'Required. Specification of the resources that are referenced by the assets within this zone.',
    }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'CREATING', 'DELETING', 'ACTION_REQUIRED'])
      .exactOptional()
      .openapi({ description: 'Output only. Current state of the zone.', readOnly: true }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'RAW', 'CURATED'])
      .exactOptional()
      .openapi({ description: 'Required. Immutable. The type of the zone.' }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. System generated globally unique ID for the zone. This ID will be different if the zone is deleted and re-created with the same name.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the zone was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.',
    required: [],
  })
  .openapi('GoogleCloudDataplexV1Zone')

const GoogleCloudDataplexV1ListZonesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    zones: z
      .array(GoogleCloudDataplexV1ZoneSchema)
      .exactOptional()
      .openapi({ description: 'Zones under the given parent lake.' }),
  })
  .openapi({ description: 'List zones response.', required: [] })
  .openapi('GoogleCloudDataplexV1ListZonesResponse')

const GoogleCloudDataplexV1OperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. API version used to start the operation.',
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
    requestedCancellation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.',
        readOnly: true,
      }),
    statusMessage: z
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
  .openapi({ description: 'Represents the metadata of a long-running operation.', required: [] })
  .openapi('GoogleCloudDataplexV1OperationMetadata')

const GoogleCloudDataplexV1RunDataScanRequestSchema = z
  .object({})
  .openapi({ description: 'Run DataScan Request' })
  .openapi('GoogleCloudDataplexV1RunDataScanRequest')

const GoogleCloudDataplexV1RunDataScanResponseSchema = z
  .object({
    job: GoogleCloudDataplexV1DataScanJobSchema.exactOptional().openapi({
      description: 'DataScanJob created by RunDataScan request.',
    }),
  })
  .openapi({ description: 'Run DataScan Response.', required: [] })
  .openapi('GoogleCloudDataplexV1RunDataScanResponse')

const GoogleCloudDataplexV1RunTaskRequestSchema = z
  .object({})
  .openapi('GoogleCloudDataplexV1RunTaskRequest')

const GoogleCloudDataplexV1RunTaskResponseSchema = z
  .object({
    job: GoogleCloudDataplexV1JobSchema.exactOptional().openapi({
      description: 'Jobs created by RunTask API.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudDataplexV1RunTaskResponse')

const GoogleCloudDataplexV1SessionEventQueryDetailSchema = z
  .object({
    dataProcessedBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The data processed by the query.' }),
    duration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time taken for execution of the query.' }),
    engine: z
      .enum(['ENGINE_UNSPECIFIED', 'SPARK_SQL', 'BIGQUERY'])
      .exactOptional()
      .openapi({ description: 'Query Execution engine.' }),
    queryId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique Query id identifying the query.' }),
    queryText: z.string().exactOptional().openapi({ description: 'The query text executed.' }),
    resultSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The size of results the query produced.' }),
  })
  .openapi({ description: 'Execution details of the query.', required: [] })
  .openapi('GoogleCloudDataplexV1SessionEventQueryDetail')

const GoogleCloudDataplexV1SessionEventSchema = z
  .object({
    eventSucceeded: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The status of the event.' }),
    fastStartupEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the session is associated with an environment with fast startup enabled, and was created before being assigned to a user.',
      }),
    message: z.string().exactOptional().openapi({ description: 'The log message.' }),
    query: GoogleCloudDataplexV1SessionEventQueryDetailSchema.exactOptional().openapi({
      description: 'The execution details of the query.',
    }),
    sessionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the session.' }),
    type: z
      .enum(['EVENT_TYPE_UNSPECIFIED', 'START', 'STOP', 'QUERY', 'CREATE'])
      .exactOptional()
      .openapi({ description: 'The type of the event.' }),
    unassignedDuration: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The idle duration of a warm pooled session before it is assigned to user.',
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The information about the user that created the session. It will be the email address of the user.',
      }),
  })
  .openapi({
    description:
      "These messages contain information about sessions within an environment. The monitored resource is 'Environment'.",
    required: [],
  })
  .openapi('GoogleCloudDataplexV1SessionEvent')

const GoogleCloudLocationLocationSchema = z
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
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} ',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: "us-east1".' }),
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
          'Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"',
      }),
  })
  .openapi({
    description: 'A resource that represents Google Cloud Platform location.',
    required: [],
  })
  .openapi('GoogleCloudLocationLocation')

const GoogleCloudLocationListLocationsResponseSchema = z
  .object({
    locations: z
      .array(GoogleCloudLocationLocationSchema)
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
  .openapi('GoogleCloudLocationListLocationsResponse')

const GoogleIamV1AuditLogConfigSchema = z
  .object({
    exemptedMembers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.',
      }),
    logType: z
      .enum(['LOG_TYPE_UNSPECIFIED', 'ADMIN_READ', 'DATA_WRITE', 'DATA_READ'])
      .exactOptional()
      .openapi({ description: 'The log type that this config enables.' }),
  })
  .openapi({
    description:
      'Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables \'DATA_READ\' and \'DATA_WRITE\' logging, while exempting jose@example.com from DATA_READ logging.',
    required: [],
  })
  .openapi('GoogleIamV1AuditLogConfig')

const GoogleIamV1AuditConfigSchema = z
  .object({
    auditLogConfigs: z
      .array(GoogleIamV1AuditLogConfigSchema)
      .exactOptional()
      .openapi({ description: 'The configuration for logging of each type of permission.' }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies a service that will be enabled for audit logging. For example, storage.googleapis.com, cloudsql.googleapis.com. allServices is a special value that covers all services.',
      }),
  })
  .openapi({
    description:
      'Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.If there are AuditConfigs for both allServices and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.',
    required: [],
  })
  .openapi('GoogleIamV1AuditConfig')

const GoogleTypeExprSchema = z
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
      'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != \'private\' && document.type != \'internal\'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "\'New message received at \' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.',
    required: [],
  })
  .openapi('GoogleTypeExpr')

const GoogleIamV1BindingSchema = z
  .object({
    condition: GoogleTypeExprSchema.exactOptional().openapi({
      description:
        'The condition that is associated with this binding.If the condition evaluates to true, then this binding applies to the current request.If the condition evaluates to false, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).',
    }),
    members: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the principals requesting access for a Google Cloud resource. members can have the following values: allUsers: A special identifier that represents anyone who is on the internet; with or without a Google account. allAuthenticatedUsers: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. user:{emailid}: An email address that represents a specific Google account. For example, alice@example.com . serviceAccount:{emailid}: An email address that represents a Google service account. For example, my-other-app@appspot.gserviceaccount.com. serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]: An identifier for a Kubernetes service account (https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, my-project.svc.id.goog[my-namespace/my-kubernetes-sa]. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: The G Suite domain (primary) that represents all the users of that domain. For example, google.com or example.com. deleted:user:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a user that has been recently deleted. For example, alice@example.com?uid=123456789012345678901. If the user is recovered, this value reverts to user:{emailid} and the recovered user retains the role in the binding. deleted:serviceAccount:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901. If the service account is undeleted, this value reverts to serviceAccount:{emailid} and the undeleted service account retains the role in the binding. deleted:group:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, admins@example.com?uid=123456789012345678901. If the group is recovered, this value reverts to group:{emailid} and the recovered group retains the role in the binding.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to the list of members, or principals. For example, roles/viewer, roles/editor, or roles/owner.',
      }),
  })
  .openapi({ description: 'Associates members, or principals, with a role.', required: [] })
  .openapi('GoogleIamV1Binding')

const GoogleIamV1PolicySchema = z
  .object({
    auditConfigs: z
      .array(GoogleIamV1AuditConfigSchema)
      .exactOptional()
      .openapi({ description: 'Specifies cloud audit logging configuration for this policy.' }),
    bindings: z
      .array(GoogleIamV1BindingSchema)
      .exactOptional()
      .openapi({
        description:
          'Associates a list of members, or principals, with a role. Optionally, may specify a condition that determines how and when the bindings are applied. Each of the bindings must contain at least one principal.The bindings in a Policy can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the bindings grant 50 different roles to user:alice@example.com, and not to any other principal, then you can add another 1,450 principals to the bindings in the Policy.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({
    description:
      'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('GoogleIamV1Policy')

const GoogleIamV1SetIamPolicyRequestSchema = z
  .object({
    policy: GoogleIamV1PolicySchema.exactOptional().openapi({
      description:
        'REQUIRED: The complete policy to be applied to the resource. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:paths: "bindings, etag"',
      }),
  })
  .openapi({ description: 'Request message for SetIamPolicy method.', required: [] })
  .openapi('GoogleIamV1SetIamPolicyRequest')

const GoogleIamV1TestIamPermissionsRequestSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of permissions to check for the resource. Permissions with wildcards (such as * or storage.*) are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions).',
      }),
  })
  .openapi({ description: 'Request message for TestIamPermissions method.', required: [] })
  .openapi('GoogleIamV1TestIamPermissionsRequest')

const GoogleIamV1TestIamPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A subset of TestPermissionsRequest.permissions that the caller is allowed.',
      }),
  })
  .openapi({ description: 'Response message for TestIamPermissions method.', required: [] })
  .openapi('GoogleIamV1TestIamPermissionsResponse')

const GoogleLongrunningCancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('GoogleLongrunningCancelOperationRequest')

const GoogleRpcStatusSchema = z
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
      'The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('GoogleRpcStatus')

const GoogleLongrunningOperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.',
      }),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
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
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}.',
      }),
    response: z
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
          'The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('GoogleLongrunningOperation')

const GoogleLongrunningListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(GoogleLongrunningOperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('GoogleLongrunningListOperationsResponse')

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

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'dataplex.projects.locations.operations.get',
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
      view: z
        .enum(['ENTITY_VIEW_UNSPECIFIED', 'BASIC', 'SCHEMA', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Used to select the subset of entity information to return. Defaults to BASIC.',
            in: 'query',
            name: 'view',
            schema: {
              enum: ['ENTITY_VIEW_UNSPECIFIED', 'BASIC', 'SCHEMA', 'FULL'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource.',
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
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const putV1NameRoute = createRoute({
  method: 'put',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Update a metadata entity. Only supports full resource update.',
  operationId: 'dataplex.projects.locations.lakes.zones.entities.update',
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
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the request, but do not perform mutations. The default is false.',
            in: 'query',
            name: 'validateOnly',
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
              'Output only. The resource name of the entity, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{id}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDataplexV1EntitySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDataplexV1EntitySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.",
  operationId: 'dataplex.projects.locations.operations.delete',
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
      etag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The etag associated with the partition.',
            in: 'query',
            name: 'etag',
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
            description: 'The name of the operation resource to be deleted.',
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

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Updates an asset resource.',
  operationId: 'dataplex.projects.locations.lakes.zones.assets.patch',
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
            description: 'Required. Mask of fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the request, but do not perform mutations. The default is false.',
            in: 'query',
            name: 'validateOnly',
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
              'Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDataplexV1AssetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'dataplex.projects.locations.list',
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
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).',
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
              'A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.',
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
      content: { 'application/json': { schema: GoogleCloudLocationListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.",
  operationId: 'dataplex.projects.locations.operations.list',
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
            description: 'The standard list filter.',
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
            description: 'The standard list page size.',
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
            description: 'The standard list page token.',
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
            description: "The name of the operation's parent resource.",
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
      content: { 'application/json': { schema: GoogleLongrunningListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.",
  operationId: 'dataplex.projects.locations.operations.cancel',
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
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleLongrunningCancelOperationRequestSchema } },
    },
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

export const postV1NameRunRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:run',
  tags: ['projects'],
  description: 'Run an on demand execution of a Task.',
  operationId: 'dataplex.projects.locations.lakes.tasks.run',
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
              'Required. The resource name of the task: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudDataplexV1RunTaskRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDataplexV1RunTaskResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentActionsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/actions',
  tags: ['projects'],
  description: 'Lists action resources in an asset.',
  operationId: 'dataplex.projects.locations.lakes.zones.assets.actions.list',
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
              'Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. Page token received from a previous ListAssetActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssetActions must match the call that provided the page token.',
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
              'Required. The resource name of the parent asset: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.',
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
      content: { 'application/json': { schema: GoogleCloudDataplexV1ListActionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentAssetsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/assets',
  tags: ['projects'],
  description: 'Lists asset resources in a zone.',
  operationId: 'dataplex.projects.locations.lakes.zones.assets.list',
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
            description: 'Optional. Filter request.',
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
            description: 'Optional. Order by fields for the result.',
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
              'Optional. Maximum number of asset to return. The service may return fewer than this value. If unspecified, at most 10 assets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. Page token received from a previous ListAssets call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssets must match the call that provided the page token.',
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
              'Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.',
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
      content: { 'application/json': { schema: GoogleCloudDataplexV1ListAssetsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentAssetsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/assets',
  tags: ['projects'],
  description: 'Creates an asset resource.',
  operationId: 'dataplex.projects.locations.lakes.zones.assets.create',
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
      assetId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Asset identifier. This ID will be used to generate names such as table names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the zone.',
            in: 'query',
            name: 'assetId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the request, but do not perform mutations. The default is false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
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
              'Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDataplexV1AssetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentAttributesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/attributes',
  tags: ['projects'],
  description: 'Lists Data Attribute resources in a DataTaxonomy.',
  operationId: 'dataplex.projects.locations.dataTaxonomies.attributes.list',
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
            description: 'Optional. Filter request.',
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
            description: 'Optional. Order by fields for the result.',
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
              'Optional. Maximum number of DataAttributes to return. The service may return fewer than this value. If unspecified, at most 10 dataAttributes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. Page token received from a previous ListDataAttributes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataAttributes must match the call that provided the page token.',
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
              'Required. The resource name of the DataTaxonomy: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}',
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
        'application/json': { schema: GoogleCloudDataplexV1ListDataAttributesResponseSchema },
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

export const postV1ParentAttributesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/attributes',
  tags: ['projects'],
  description: 'Create a DataAttribute resource.',
  operationId: 'dataplex.projects.locations.dataTaxonomies.attributes.create',
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
      dataAttributeId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. DataAttribute identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the DataTaxonomy.',
            in: 'query',
            name: 'dataAttributeId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the request, but do not perform mutations. The default is false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
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
              'Required. The resource name of the parent data taxonomy projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDataplexV1DataAttributeSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentContentRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/content',
  tags: ['projects'],
  description: 'List content.',
  operationId: 'dataplex.projects.locations.lakes.content.list',
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
              'Optional. Filter request. Filters are case-sensitive. The following formats are supported:labels.key1 = "value1" labels:key1 type = "NOTEBOOK" type = "SQL_SCRIPT"These restrictions can be coinjoined with AND, OR and NOT conjunctions.',
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
              'Optional. Maximum number of content to return. The service may return fewer than this value. If unspecified, at most 10 content will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. Page token received from a previous ListContent call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListContent must match the call that provided the page token.',
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
              'Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}',
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
      content: { 'application/json': { schema: GoogleCloudDataplexV1ListContentResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentContentRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/content',
  tags: ['projects'],
  description: 'Create a content.',
  operationId: 'dataplex.projects.locations.lakes.content.create',
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
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the request, but do not perform mutations. The default is false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
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
              'Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDataplexV1ContentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDataplexV1ContentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentContentitemsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/contentitems',
  tags: ['projects'],
  description: 'List content.',
  operationId: 'dataplex.projects.locations.lakes.contentitems.list',
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
              'Optional. Filter request. Filters are case-sensitive. The following formats are supported:labels.key1 = "value1" labels:key1 type = "NOTEBOOK" type = "SQL_SCRIPT"These restrictions can be coinjoined with AND, OR and NOT conjunctions.',
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
              'Optional. Maximum number of content to return. The service may return fewer than this value. If unspecified, at most 10 content will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. Page token received from a previous ListContent call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListContent must match the call that provided the page token.',
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
              'Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}',
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
      content: { 'application/json': { schema: GoogleCloudDataplexV1ListContentResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentContentitemsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/contentitems',
  tags: ['projects'],
  description: 'Create a content.',
  operationId: 'dataplex.projects.locations.lakes.contentitems.create',
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
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the request, but do not perform mutations. The default is false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
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
              'Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDataplexV1ContentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDataplexV1ContentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentDataAttributeBindingsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/dataAttributeBindings',
  tags: ['projects'],
  description: 'Lists DataAttributeBinding resources in a project and location.',
  operationId: 'dataplex.projects.locations.dataAttributeBindings.list',
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
              'Optional. Filter request. Filter using resource: filter=resource:"resource-name" Filter using attribute: filter=attributes:"attribute-name" Filter using attribute in paths list: filter=paths.attributes:"attribute-name"',
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
            description: 'Optional. Order by fields for the result.',
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
              'Optional. Maximum number of DataAttributeBindings to return. The service may return fewer than this value. If unspecified, at most 10 DataAttributeBindings will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. Page token received from a previous ListDataAttributeBindings call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataAttributeBindings must match the call that provided the page token.',
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
              'Required. The resource name of the Location: projects/{project_number}/locations/{location_id}',
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
        'application/json': {
          schema: GoogleCloudDataplexV1ListDataAttributeBindingsResponseSchema,
        },
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

export const postV1ParentDataAttributeBindingsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/dataAttributeBindings',
  tags: ['projects'],
  description: 'Create a DataAttributeBinding resource.',
  operationId: 'dataplex.projects.locations.dataAttributeBindings.create',
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
      dataAttributeBindingId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. DataAttributeBinding identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the Location.',
            in: 'query',
            name: 'dataAttributeBindingId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the request, but do not perform mutations. The default is false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
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
              'Required. The resource name of the parent data taxonomy projects/{project_number}/locations/{location_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudDataplexV1DataAttributeBindingSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentDataScansRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/dataScans',
  tags: ['projects'],
  description: 'Lists DataScans.',
  operationId: 'dataplex.projects.locations.dataScans.list',
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
            description: 'Optional. Filter request.',
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
              'Optional. Order by fields (name or create_time) for the result. If not specified, the ordering is undefined.',
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
              'Optional. Maximum number of dataScans to return. The service may return fewer than this value. If unspecified, at most 500 scans will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. Page token received from a previous ListDataScans call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataScans must match the call that provided the page token.',
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
              'Required. The resource name of the parent location: projects/{project}/locations/{location_id} where project refers to a project_id or project_number and location_id refers to a GCP region.',
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
      content: { 'application/json': { schema: GoogleCloudDataplexV1ListDataScansResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentDataScansRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/dataScans',
  tags: ['projects'],
  description: 'Creates a DataScan resource.',
  operationId: 'dataplex.projects.locations.dataScans.create',
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
      dataScanId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter. Must be between 1-63 characters. Must be unique within the customer project / location.',
            in: 'query',
            name: 'dataScanId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the request, but do not perform mutations. The default is false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
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
              'Required. The resource name of the parent location: projects/{project}/locations/{location_id} where project refers to a project_id or project_number and location_id refers to a GCP region.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDataplexV1DataScanSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentDataTaxonomiesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/dataTaxonomies',
  tags: ['projects'],
  description: 'Lists DataTaxonomy resources in a project and location.',
  operationId: 'dataplex.projects.locations.dataTaxonomies.list',
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
            description: 'Optional. Filter request.',
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
            description: 'Optional. Order by fields for the result.',
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
              'Optional. Maximum number of DataTaxonomies to return. The service may return fewer than this value. If unspecified, at most 10 DataTaxonomies will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. Page token received from a previous ListDataTaxonomies call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataTaxonomies must match the call that provided the page token.',
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
              'Required. The resource name of the DataTaxonomy location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a GCP region.',
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
        'application/json': { schema: GoogleCloudDataplexV1ListDataTaxonomiesResponseSchema },
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

export const postV1ParentDataTaxonomiesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/dataTaxonomies',
  tags: ['projects'],
  description: 'Create a DataTaxonomy resource.',
  operationId: 'dataplex.projects.locations.dataTaxonomies.create',
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
      dataTaxonomyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. DataTaxonomy identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the Project.',
            in: 'query',
            name: 'dataTaxonomyId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the request, but do not perform mutations. The default is false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
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
              'Required. The resource name of the data taxonomy location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a GCP region.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDataplexV1DataTaxonomySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentEntitiesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/entities',
  tags: ['projects'],
  description: 'List metadata entities in a zone.',
  operationId: 'dataplex.projects.locations.lakes.zones.entities.list',
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
              'Optional. The following filter parameters can be added to the URL to limit the entities returned by the API: Entity ID: ?filter="id=entityID" Asset ID: ?filter="asset=assetID" Data path ?filter="data_path=gs://my-bucket" Is HIVE compatible: ?filter="hive_compatible=true" Is BigQuery compatible: ?filter="bigquery_compatible=true"',
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
              'Optional. Maximum number of entities to return. The service may return fewer than this value. If unspecified, 100 entities will be returned by default. The maximum value is 500; larger values will will be truncated to 500.',
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
              'Optional. Page token received from a previous ListEntities call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListEntities must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['ENTITY_VIEW_UNSPECIFIED', 'TABLES', 'FILESETS'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Specify the entity view to make a partial list request.',
            in: 'query',
            name: 'view',
            schema: { enum: ['ENTITY_VIEW_UNSPECIFIED', 'TABLES', 'FILESETS'], type: 'string' },
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
              'Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.',
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
      content: { 'application/json': { schema: GoogleCloudDataplexV1ListEntitiesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentEntitiesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/entities',
  tags: ['projects'],
  description: 'Create a metadata entity.',
  operationId: 'dataplex.projects.locations.lakes.zones.entities.create',
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
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the request, but do not perform mutations. The default is false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
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
              'Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDataplexV1EntitySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDataplexV1EntitySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentEnvironmentsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/environments',
  tags: ['projects'],
  description: 'Lists environments under the given lake.',
  operationId: 'dataplex.projects.locations.lakes.environments.list',
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
            description: 'Optional. Filter request.',
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
            description: 'Optional. Order by fields for the result.',
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
              'Optional. Maximum number of environments to return. The service may return fewer than this value. If unspecified, at most 10 environments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. Page token received from a previous ListEnvironments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListEnvironments must match the call that provided the page token.',
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
              'Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}.',
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
        'application/json': { schema: GoogleCloudDataplexV1ListEnvironmentsResponseSchema },
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

export const postV1ParentEnvironmentsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/environments',
  tags: ['projects'],
  description: 'Create an environment resource.',
  operationId: 'dataplex.projects.locations.lakes.environments.create',
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
      environmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Environment identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the lake.',
            in: 'query',
            name: 'environmentId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the request, but do not perform mutations. The default is false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
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
              'Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDataplexV1EnvironmentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentJobsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/jobs',
  tags: ['projects'],
  description: 'Lists Jobs under the given task.',
  operationId: 'dataplex.projects.locations.lakes.tasks.jobs.list',
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
              'Optional. Maximum number of jobs to return. The service may return fewer than this value. If unspecified, at most 10 jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. Page token received from a previous ListJobs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListJobs must match the call that provided the page token.',
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
              'Required. The resource name of the parent environment: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}.',
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
      content: { 'application/json': { schema: GoogleCloudDataplexV1ListJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentLakesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/lakes',
  tags: ['projects'],
  description: 'Lists lake resources in a project and location.',
  operationId: 'dataplex.projects.locations.lakes.list',
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
            description: 'Optional. Filter request.',
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
            description: 'Optional. Order by fields for the result.',
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
              'Optional. Maximum number of Lakes to return. The service may return fewer than this value. If unspecified, at most 10 lakes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. Page token received from a previous ListLakes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListLakes must match the call that provided the page token.',
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
              'Required. The resource name of the lake location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a GCP region.',
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
      content: { 'application/json': { schema: GoogleCloudDataplexV1ListLakesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentLakesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/lakes',
  tags: ['projects'],
  description: 'Creates a lake resource.',
  operationId: 'dataplex.projects.locations.lakes.create',
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
      lakeId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Lake identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the customer project / location.',
            in: 'query',
            name: 'lakeId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the request, but do not perform mutations. The default is false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
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
              'Required. The resource name of the lake location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a GCP region.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDataplexV1LakeSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentPartitionsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/partitions',
  tags: ['projects'],
  description: 'List metadata partitions of an entity.',
  operationId: 'dataplex.projects.locations.lakes.zones.entities.partitions.list',
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
              'Optional. Filter the partitions returned to the caller using a key value pair expression. Supported operators and syntax: logic operators: AND, OR comparison operators: <, >, >=, <= ,=, != LIKE operators: The right hand of a LIKE operator supports "." and "*" for wildcard searches, for example "value1 LIKE ".*oo.*" parenthetical grouping: ( )Sample filter expression: `?filter="key1 < value1 OR key2 > value2"Notes: Keys to the left of operators are case insensitive. Partition results are sorted first by creation time, then by lexicographic order. Up to 20 key value filter pairs are allowed, but due to performance considerations, only the first 10 will be used as a filter.',
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
              'Optional. Maximum number of partitions to return. The service may return fewer than this value. If unspecified, 100 partitions will be returned by default. The maximum page size is 500; larger values will will be truncated to 500.',
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
              'Optional. Page token received from a previous ListPartitions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListPartitions must match the call that provided the page token.',
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
              'Required. The resource name of the parent entity: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}.',
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
        'application/json': { schema: GoogleCloudDataplexV1ListPartitionsResponseSchema },
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

export const postV1ParentPartitionsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/partitions',
  tags: ['projects'],
  description: 'Create a metadata partition.',
  operationId: 'dataplex.projects.locations.lakes.zones.entities.partitions.create',
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
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the request, but do not perform mutations. The default is false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
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
              'Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDataplexV1PartitionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDataplexV1PartitionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentSessionsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/sessions',
  tags: ['projects'],
  description: 'Lists session resources in an environment.',
  operationId: 'dataplex.projects.locations.lakes.environments.sessions.list',
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
              'Optional. Filter request. The following mode filter is supported to return only the sessions belonging to the requester when the mode is USER and return sessions of all the users when the mode is ADMIN. When no filter is sent default to USER mode. NOTE: When the mode is ADMIN, the requester should have dataplex.environments.listAllSessions permission to list all sessions, in absence of the permission, the request fails.mode = ADMIN | USER',
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
              'Optional. Maximum number of sessions to return. The service may return fewer than this value. If unspecified, at most 10 sessions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. Page token received from a previous ListSessions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListSessions must match the call that provided the page token.',
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
              'Required. The resource name of the parent environment: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}.',
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
      content: { 'application/json': { schema: GoogleCloudDataplexV1ListSessionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentTasksRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/tasks',
  tags: ['projects'],
  description: 'Lists tasks under the given lake.',
  operationId: 'dataplex.projects.locations.lakes.tasks.list',
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
            description: 'Optional. Filter request.',
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
            description: 'Optional. Order by fields for the result.',
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
              'Optional. Maximum number of tasks to return. The service may return fewer than this value. If unspecified, at most 10 tasks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token.',
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
              'Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.',
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
      content: { 'application/json': { schema: GoogleCloudDataplexV1ListTasksResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentTasksRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/tasks',
  tags: ['projects'],
  description: 'Creates a task resource within a lake.',
  operationId: 'dataplex.projects.locations.lakes.tasks.create',
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
      taskId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Task identifier.',
            in: 'query',
            name: 'taskId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the request, but do not perform mutations. The default is false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
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
              'Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDataplexV1TaskSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentZonesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/zones',
  tags: ['projects'],
  description: 'Lists zone resources in a lake.',
  operationId: 'dataplex.projects.locations.lakes.zones.list',
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
            description: 'Optional. Filter request.',
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
            description: 'Optional. Order by fields for the result.',
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
              'Optional. Maximum number of zones to return. The service may return fewer than this value. If unspecified, at most 10 zones will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token.',
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
              'Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.',
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
      content: { 'application/json': { schema: GoogleCloudDataplexV1ListZonesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentZonesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/zones',
  tags: ['projects'],
  description: 'Creates a zone resource within a lake.',
  operationId: 'dataplex.projects.locations.lakes.zones.create',
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
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only validate the request, but do not perform mutations. The default is false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      zoneId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Zone identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique across all lakes from all locations in a project. * Must not be one of the reserved IDs (i.e. "default", "global-temp")',
            in: 'query',
            name: 'zoneId',
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
              'Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDataplexV1ZoneSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ResourceGetIamPolicyRoute = createRoute({
  method: 'get',
  path: '/v1/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId: 'dataplex.projects.locations.lakes.zones.assets.getIamPolicy',
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
              'Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).',
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
              'REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
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
      content: { 'application/json': { schema: GoogleIamV1PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1/{resource}:setIamPolicy',
  tags: ['projects'],
  description:
    'Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.',
  operationId: 'dataplex.projects.locations.lakes.zones.assets.setIamPolicy',
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
              'REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleIamV1SetIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleIamV1PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/v1/{resource}:testIamPermissions',
  tags: ['projects'],
  description:
    'Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.',
  operationId: 'dataplex.projects.locations.lakes.zones.assets.testIamPermissions',
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
              'REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleIamV1TestIamPermissionsRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleIamV1TestIamPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
