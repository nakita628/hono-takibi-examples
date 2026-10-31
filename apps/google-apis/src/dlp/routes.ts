import { createRoute, z } from '@hono/zod-openapi'

const GooglePrivacyDlpV2TransformationConfigSchema = z
  .object({
    deidentifyTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'De-identify template. If this template is specified, it will serve as the default de-identify template. This template cannot contain `record_transformations` since it can be used for unstructured content such as free-form text files. If this template is not set, a default `ReplaceWithInfoTypeConfig` will be used to de-identify unstructured content.',
      }),
    imageRedactTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Image redact template. If this template is specified, it will serve as the de-identify template for images. If this template is not set, all findings in the image will be redacted with a black box.',
      }),
    structuredDeidentifyTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Structured de-identify template. If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables. If this template is not set but the `deidentify_template` is set, then `deidentify_template` will also apply to the structured content. If neither template is set, a default `ReplaceWithInfoTypeConfig` will be used to de-identify structured content.',
      }),
  })
  .openapi({
    description:
      'User specified templates and configs for how to deidentify structured, unstructures, and image files. User must provide either a unstructured deidentify template or at least one redact image config.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2TransformationConfig')

const GooglePrivacyDlpV2BigQueryTableSchema = z
  .object({
    datasetId: z.string().exactOptional().openapi({ description: 'Dataset ID of the table.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.',
      }),
    tableId: z.string().exactOptional().openapi({ description: 'Name of the table.' }),
  })
  .openapi({
    description:
      'Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2BigQueryTable')

const GooglePrivacyDlpV2TransformationDetailsStorageConfigSchema = z
  .object({
    table: GooglePrivacyDlpV2BigQueryTableSchema.exactOptional().openapi({
      description:
        'The BigQuery table in which to store the output. This may be an existing table or in a new table in an existing dataset. If table_id is not set a new one will be generated for you with the following format: dlp_googleapis_transformation_details_yyyy_mm_dd_[dlp_job_id]. Pacific time zone will be used for generating the date details.',
    }),
  })
  .openapi({ description: 'Config for storing transformation details.', required: [] })
  .openapi('GooglePrivacyDlpV2TransformationDetailsStorageConfig')

const GooglePrivacyDlpV2DeidentifySchema = z
  .object({
    cloudStorageOutput: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. User settable Cloud Storage bucket and folders to store de-identified files. This field must be set for cloud storage deidentification. The output Cloud Storage bucket must be different from the input bucket. De-identified files will overwrite files in the output path. Form of: gs://bucket/folder/ or gs://bucket',
      }),
    fileTypesToTransform: z
      .array(
        z.enum([
          'FILE_TYPE_UNSPECIFIED',
          'BINARY_FILE',
          'TEXT_FILE',
          'IMAGE',
          'WORD',
          'PDF',
          'AVRO',
          'CSV',
          'TSV',
          'POWERPOINT',
          'EXCEL',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "List of user-specified file type groups to transform. If specified, only the files with these filetypes will be transformed. If empty, all supported files will be transformed. Supported types may be automatically added over time. If a file type is set in this field that isn't supported by the Deidentify action then the job will fail and will not be successfully created/started. Currently the only filetypes supported are: IMAGES, TEXT_FILES, CSV, TSV.",
      }),
    transformationConfig: GooglePrivacyDlpV2TransformationConfigSchema.exactOptional().openapi({
      description:
        'User specified deidentify templates and configs for structured, unstructured, and image files.',
    }),
    transformationDetailsStorageConfig:
      GooglePrivacyDlpV2TransformationDetailsStorageConfigSchema.exactOptional().openapi({
        description:
          'Config for storing transformation details. This is separate from the de-identified content, and contains metadata about the successful transformations and/or failures that occurred while de-identifying. This needs to be set in order for users to access information about the status of each transformation (see TransformationDetails message for more information about what is noted).',
      }),
  })
  .openapi({
    description:
      'Create a de-identified copy of the requested table or files. A TransformationDetail will be created for each transformation. If any rows in BigQuery are skipped during de-identification (transformation errors or row size exceeds BigQuery insert API limits) they are placed in the failure output table. If the original row exceeds the BigQuery insert API limit it will be truncated when written to the failure output table. The failure output table can be set in the action.deidentify.output.big_query_output.deidentified_failure_output_table field, if no table is set, a table will be automatically created in the same project and dataset as the original table. Compatible with: Inspect',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2Deidentify')

const GooglePrivacyDlpV2JobNotificationEmailsSchema = z
  .object({})
  .openapi({
    description:
      'Sends an email when the job completes. The email goes to IAM project owners and technical [Essential Contacts](https://cloud.google.com/resource-manager/docs/managing-notification-contacts).',
  })
  .openapi('GooglePrivacyDlpV2JobNotificationEmails')

const GooglePrivacyDlpV2PublishToPubSubSchema = z
  .object({
    topic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}.',
      }),
  })
  .openapi({
    description:
      "Publish a message into a given Pub/Sub topic when DlpJob has completed. The message contains a single field, `DlpJobName`, which is equal to the finished job's [`DlpJob.name`](https://cloud.google.com/dlp/docs/reference/rest/v2/projects.dlpJobs#DlpJob). Compatible with: Inspect, Risk",
    required: [],
  })
  .openapi('GooglePrivacyDlpV2PublishToPubSub')

const GooglePrivacyDlpV2PublishFindingsToCloudDataCatalogSchema = z
  .object({})
  .openapi({
    description:
      'Publish findings of a DlpJob to Data Catalog. In Data Catalog, tag templates are applied to the resource that Cloud DLP scanned. Data Catalog tag templates are stored in the same project and region where the BigQuery table exists. For Cloud DLP to create and apply the tag template, the Cloud DLP service agent must have the `roles/datacatalog.tagTemplateOwner` permission on the project. The tag template contains fields summarizing the results of the DlpJob. Any field values previously written by another DlpJob are deleted. InfoType naming patterns are strictly enforced when using this feature. Findings are persisted in Data Catalog storage and are governed by service-specific policies for Data Catalog. For more information, see [Service Specific Terms](https://cloud.google.com/terms/service-terms). Only a single instance of this action can be specified. This action is allowed only if all resources being scanned are BigQuery tables. Compatible with: Inspect',
  })
  .openapi('GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog')

const GooglePrivacyDlpV2PublishSummaryToCsccSchema = z
  .object({})
  .openapi({
    description:
      'Publish the result summary of a DlpJob to [Security Command Center](https://cloud.google.com/security-command-center). This action is available for only projects that belong to an organization. This action publishes the count of finding instances and their infoTypes. The summary of findings are persisted in Security Command Center and are governed by [service-specific policies for Security Command Center](https://cloud.google.com/terms/service-terms). Only a single instance of this action can be specified. Compatible with: Inspect',
  })
  .openapi('GooglePrivacyDlpV2PublishSummaryToCscc')

const GooglePrivacyDlpV2PublishToStackdriverSchema = z
  .object({})
  .openapi({
    description:
      "Enable Stackdriver metric dlp.googleapis.com/finding_count. This will publish a metric to stack driver on each infotype requested and how many findings were found for it. CustomDetectors will be bucketed as 'Custom' under the Stackdriver label 'info_type'.",
  })
  .openapi('GooglePrivacyDlpV2PublishToStackdriver')

const GooglePrivacyDlpV2OutputStorageConfigSchema = z
  .object({
    outputSchema: z
      .enum([
        'OUTPUT_SCHEMA_UNSPECIFIED',
        'BASIC_COLUMNS',
        'GCS_COLUMNS',
        'DATASTORE_COLUMNS',
        'BIG_QUERY_COLUMNS',
        'ALL_COLUMNS',
      ])
      .exactOptional()
      .openapi({
        description:
          'Schema used for writing the findings for Inspect jobs. This field is only used for Inspect and must be unspecified for Risk jobs. Columns are derived from the `Finding` object. If appending to an existing table, any columns from the predefined schema that are missing will be added. No columns in the existing table will be deleted. If unspecified, then all available columns will be used for a new table or an (existing) table with no schema, and no changes will be made to an existing table that has a schema. Only for use with external storage.',
      }),
    table: GooglePrivacyDlpV2BigQueryTableSchema.exactOptional().openapi({
      description:
        'Store findings in an existing table or a new table in an existing dataset. If table_id is not set a new one will be generated for you with the following format: dlp_googleapis_yyyy_mm_dd_[dlp_job_id]. Pacific time zone will be used for generating the date details. For Inspect, each column in an existing output table must have the same name, type, and mode of a field in the `Finding` object. For Risk, an existing output table should be the output of a previous Risk analysis job run on the same source table, with the same privacy metric and quasi-identifiers. Risk jobs that analyze the same table but compute a different privacy metric, or use different sets of quasi-identifiers, cannot store their results in the same table.',
    }),
  })
  .openapi({ description: 'Cloud repository for storing output.', required: [] })
  .openapi('GooglePrivacyDlpV2OutputStorageConfig')

const GooglePrivacyDlpV2SaveFindingsSchema = z
  .object({
    outputConfig: GooglePrivacyDlpV2OutputStorageConfigSchema.exactOptional().openapi({
      description: 'Location to store findings outside of DLP.',
    }),
  })
  .openapi({
    description:
      'If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2SaveFindings')

const GooglePrivacyDlpV2ActionSchema = z
  .object({
    deidentify: GooglePrivacyDlpV2DeidentifySchema.exactOptional().openapi({
      description: 'Create a de-identified copy of the input data.',
    }),
    jobNotificationEmails: GooglePrivacyDlpV2JobNotificationEmailsSchema.exactOptional().openapi({
      description:
        'Sends an email when the job completes. The email goes to IAM project owners and technical [Essential Contacts](https://cloud.google.com/resource-manager/docs/managing-notification-contacts).',
    }),
    pubSub: GooglePrivacyDlpV2PublishToPubSubSchema.exactOptional().openapi({
      description: 'Publish a notification to a Pub/Sub topic.',
    }),
    publishFindingsToCloudDataCatalog:
      GooglePrivacyDlpV2PublishFindingsToCloudDataCatalogSchema.exactOptional().openapi({
        description: 'Publish findings to Cloud Datahub.',
      }),
    publishSummaryToCscc: GooglePrivacyDlpV2PublishSummaryToCsccSchema.exactOptional().openapi({
      description: 'Publish summary to Cloud Security Command Center (Alpha).',
    }),
    publishToStackdriver: GooglePrivacyDlpV2PublishToStackdriverSchema.exactOptional().openapi({
      description: 'Enable Stackdriver metric dlp.googleapis.com/finding_count.',
    }),
    saveFindings: GooglePrivacyDlpV2SaveFindingsSchema.exactOptional().openapi({
      description: 'Save resulting findings in a provided location.',
    }),
  })
  .openapi({
    description:
      'A task to execute on the completion of a job. See https://cloud.google.com/dlp/docs/concepts-actions to learn more.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2Action')

const GooglePrivacyDlpV2DeidentifyDataSourceStatsSchema = z
  .object({
    transformationCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of successfully applied transformations.' }),
    transformationErrorCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of errors encountered while trying to apply transformations.',
      }),
    transformedBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total size in bytes that were transformed in some way.' }),
  })
  .openapi({ description: 'Summary of what was modified during a transformation.', required: [] })
  .openapi('GooglePrivacyDlpV2DeidentifyDataSourceStats')

const GooglePrivacyDlpV2AllInfoTypesSchema = z
  .object({})
  .openapi({ description: 'Apply transformation to all findings.' })
  .openapi('GooglePrivacyDlpV2AllInfoTypes')

const GooglePrivacyDlpV2AllTextSchema = z
  .object({})
  .openapi({ description: 'Apply to all text.' })
  .openapi('GooglePrivacyDlpV2AllText')

const GooglePrivacyDlpV2ColorSchema = z
  .object({
    blue: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of blue in the color as a value in the interval [0, 1].',
      }),
    green: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of green in the color as a value in the interval [0, 1].',
      }),
    red: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of red in the color as a value in the interval [0, 1].',
      }),
  })
  .openapi({ description: 'Represents a color in the RGB color space.', required: [] })
  .openapi('GooglePrivacyDlpV2Color')

const GooglePrivacyDlpV2InfoTypeSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$_-]{1,64}`.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional version name for this InfoType.' }),
  })
  .openapi({ description: 'Type of information detected by the API.', required: [] })
  .openapi('GooglePrivacyDlpV2InfoType')

const GooglePrivacyDlpV2SelectedInfoTypesSchema = z
  .object({
    infoTypes: z
      .array(GooglePrivacyDlpV2InfoTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. InfoTypes to apply the transformation to. Required. Provided InfoType must be unique within the ImageTransformations message.',
      }),
  })
  .openapi({ description: 'Apply transformation to the selected info_types.', required: [] })
  .openapi('GooglePrivacyDlpV2SelectedInfoTypes')

const GooglePrivacyDlpV2ImageTransformationSchema = z
  .object({
    allInfoTypes: GooglePrivacyDlpV2AllInfoTypesSchema.exactOptional().openapi({
      description:
        "Apply transformation to all findings not specified in other ImageTransformation's selected_info_types. Only one instance is allowed within the ImageTransformations message.",
    }),
    allText: GooglePrivacyDlpV2AllTextSchema.exactOptional().openapi({
      description:
        "Apply transformation to all text that doesn't match an infoType. Only one instance is allowed within the ImageTransformations message.",
    }),
    redactionColor: GooglePrivacyDlpV2ColorSchema.exactOptional().openapi({
      description:
        'The color to use when redacting content from an image. If not specified, the default is black.',
    }),
    selectedInfoTypes: GooglePrivacyDlpV2SelectedInfoTypesSchema.exactOptional().openapi({
      description: 'Apply transformation to the selected info_types.',
    }),
  })
  .openapi({
    description: 'Configuration for determining how redaction of images should occur.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2ImageTransformation')

const GooglePrivacyDlpV2ImageTransformationsSchema = z
  .object({ transforms: z.array(GooglePrivacyDlpV2ImageTransformationSchema).exactOptional() })
  .openapi({ description: 'A type of transformation that is applied over images.', required: [] })
  .openapi('GooglePrivacyDlpV2ImageTransformations')

const GoogleTypeDateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('GoogleTypeDate')

const GoogleTypeTimeOfDaySchema = z
  .object({
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minutes of hour of day. Must be from 0 to 59.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.',
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.',
      }),
  })
  .openapi({
    description:
      'Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.',
    required: [],
  })
  .openapi('GoogleTypeTimeOfDay')

const GooglePrivacyDlpV2ValueSchema = z
  .object({
    booleanValue: z.boolean().exactOptional().openapi({ description: 'boolean' }),
    dateValue: GoogleTypeDateSchema.exactOptional().openapi({ description: 'date' }),
    dayOfWeekValue: z
      .enum([
        'DAY_OF_WEEK_UNSPECIFIED',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
      ])
      .exactOptional()
      .openapi({ description: 'day of week' }),
    floatValue: z.float64().exactOptional().openapi({ description: 'float' }),
    integerValue: z.string().exactOptional().openapi({ description: 'integer' }),
    stringValue: z.string().exactOptional().openapi({ description: 'string' }),
    timeValue: GoogleTypeTimeOfDaySchema.exactOptional().openapi({ description: 'time of day' }),
    timestampValue: z.string().exactOptional().openapi({ description: 'timestamp' }),
  })
  .openapi({
    description:
      "Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data.",
    required: [],
  })
  .openapi('GooglePrivacyDlpV2Value')

const GooglePrivacyDlpV2BucketSchema = z
  .object({
    max: GooglePrivacyDlpV2ValueSchema.exactOptional().openapi({
      description: 'Upper bound of the range, exclusive; type must match min.',
    }),
    min: GooglePrivacyDlpV2ValueSchema.exactOptional().openapi({
      description: 'Lower bound of the range, inclusive. Type should be the same as max if used.',
    }),
    replacementValue: GooglePrivacyDlpV2ValueSchema.exactOptional().openapi({
      description: 'Required. Replacement value for this bucket.',
    }),
  })
  .openapi({
    description: 'Bucket is represented as a range, along with replacement values.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2Bucket')

const GooglePrivacyDlpV2BucketingConfigSchema = z
  .object({
    buckets: z
      .array(GooglePrivacyDlpV2BucketSchema)
      .exactOptional()
      .openapi({ description: 'Set of buckets. Ranges must be non-overlapping.' }),
  })
  .openapi({
    description:
      'Generalization function that buckets values based on ranges. The ranges and replacement values are dynamically provided by the user for custom behavior, such as 1-30 -> LOW 31-65 -> MEDIUM 66-100 -> HIGH This can be used on data of type: number, long, string, timestamp. If the bound `Value` type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2BucketingConfig')

const GooglePrivacyDlpV2CharsToIgnoreSchema = z
  .object({
    charactersToSkip: z
      .string()
      .exactOptional()
      .openapi({ description: 'Characters to not transform when masking.' }),
    commonCharactersToIgnore: z
      .enum([
        'COMMON_CHARS_TO_IGNORE_UNSPECIFIED',
        'NUMERIC',
        'ALPHA_UPPER_CASE',
        'ALPHA_LOWER_CASE',
        'PUNCTUATION',
        'WHITESPACE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Common characters to not transform when masking. Useful to avoid removing punctuation.',
      }),
  })
  .openapi({
    description:
      'Characters to skip when doing deidentification of a value. These will be left alone and skipped.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2CharsToIgnore')

const GooglePrivacyDlpV2CharacterMaskConfigSchema = z
  .object({
    charactersToIgnore: z
      .array(GooglePrivacyDlpV2CharsToIgnoreSchema)
      .exactOptional()
      .openapi({
        description:
          'When masking a string, items in this list will be skipped when replacing characters. For example, if the input string is `555-555-5555` and you instruct Cloud DLP to skip `-` and mask 5 characters with `*`, Cloud DLP returns `***-**5-5555`.',
      }),
    maskingCharacter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Character to use to mask the sensitive values—for example, `*` for an alphabetic string such as a name, or `0` for a numeric string such as ZIP code or credit card number. This string must have a length of 1. If not supplied, this value defaults to `*` for strings, and `0` for digits.',
      }),
    numberToMask: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of characters to mask. If not set, all matching chars will be masked. Skipped characters do not count towards this tally. If `number_to_mask` is negative, this denotes inverse masking. Cloud DLP masks all but a number of characters. For example, suppose you have the following values: - `masking_character` is `*` - `number_to_mask` is `-4` - `reverse_order` is `false` - `CharsToIgnore` includes `-` - Input string is `1234-5678-9012-3456` The resulting de-identified string is `****-****-****-3456`. Cloud DLP masks all but the last four characters. If `reverse_order` is `true`, all but the first four characters are masked as `1234-****-****-****`.',
      }),
    reverseOrder: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Mask characters in reverse order. For example, if `masking_character` is `0`, `number_to_mask` is `14`, and `reverse_order` is `false`, then the input string `1234-5678-9012-3456` is masked as `00000000000000-3456`. If `masking_character` is `*`, `number_to_mask` is `3`, and `reverse_order` is `true`, then the string `12345` is masked as `12***`.',
      }),
  })
  .openapi({
    description:
      "Partially mask a string by replacing a given number of characters with a fixed character. Masking can start from the beginning or end of the string. This can be used on data of any type (numbers, longs, and so on) and when de-identifying structured data we'll attempt to preserve the original data's type. (This allows you to take a long like 123 and modify it to a string like **3.",
    required: [],
  })
  .openapi('GooglePrivacyDlpV2CharacterMaskConfig')

const GooglePrivacyDlpV2FieldIdSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name describing the field.' }),
  })
  .openapi({
    description: 'General identifier of a data field in a storage service.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2FieldId')

const GooglePrivacyDlpV2KmsWrappedCryptoKeySchema = z
  .object({
    cryptoKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The resource name of the KMS CryptoKey to use for unwrapping.',
      }),
    wrappedKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The wrapped data crypto key.' }),
  })
  .openapi({
    description:
      'Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. Authorization requires the following IAM permissions when sending a request to perform a crypto transformation using a KMS-wrapped crypto key: dlp.kms.encrypt For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key). Note: When you use Cloud KMS for cryptographic operations, [charges apply](https://cloud.google.com/kms/pricing).',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2KmsWrappedCryptoKey')

const GooglePrivacyDlpV2TransientCryptoKeySchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).',
      }),
  })
  .openapi({
    description:
      'Use this to have a random data crypto key generated. It will be discarded after the request finishes.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2TransientCryptoKey')

const GooglePrivacyDlpV2UnwrappedCryptoKeySchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'Required. A 128/192/256 bit key.' }),
  })
  .openapi({
    description:
      'Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2UnwrappedCryptoKey')

const GooglePrivacyDlpV2CryptoKeySchema = z
  .object({
    kmsWrapped: GooglePrivacyDlpV2KmsWrappedCryptoKeySchema.exactOptional().openapi({
      description: 'Key wrapped using Cloud KMS',
    }),
    transient: GooglePrivacyDlpV2TransientCryptoKeySchema.exactOptional().openapi({
      description: 'Transient crypto key',
    }),
    unwrapped: GooglePrivacyDlpV2UnwrappedCryptoKeySchema.exactOptional().openapi({
      description: 'Unwrapped crypto key',
    }),
  })
  .openapi({
    description:
      'This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2CryptoKey')

const GooglePrivacyDlpV2CryptoDeterministicConfigSchema = z
  .object({
    context: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description:
        'A context may be used for higher security and maintaining referential integrity such that the same identifier in two different contexts will be given a distinct surrogate. The context is appended to plaintext value being encrypted. On decryption the provided context is validated against the value used during encryption. If a context was provided during encryption, same context must be provided during decryption as well. If the context is not set, plaintext would be used as is for encryption. If the context is set but: 1. there is no record present when transforming a given value or 2. the field is not present when transforming a given value, plaintext would be used as is for encryption. Note that case (1) is expected when an `InfoTypeTransformation` is applied to both structured and unstructured `ContentItem`s.',
    }),
    cryptoKey: GooglePrivacyDlpV2CryptoKeySchema.exactOptional().openapi({
      description:
        'The key used by the encryption function. For deterministic encryption using AES-SIV, the provided key is internally expanded to 64 bytes prior to use.',
    }),
    surrogateInfoType: GooglePrivacyDlpV2InfoTypeSchema.exactOptional().openapi({
      description:
        "The custom info type to annotate the surrogate with. This annotation will be applied to the surrogate by prefixing it with the name of the custom info type followed by the number of characters comprising the surrogate. The following scheme defines the format: {info type name}({surrogate character count}):{surrogate} For example, if the name of custom info type is 'MY_TOKEN_INFO_TYPE' and the surrogate is 'abc', the full replacement value will be: 'MY_TOKEN_INFO_TYPE(3):abc' This annotation identifies the surrogate when inspecting content using the custom info type 'Surrogate'. This facilitates reversal of the surrogate when it occurs in free text. Note: For record transformations where the entire cell in a table is being transformed, surrogates are not mandatory. Surrogates are used to denote the location of the token and are necessary for re-identification in free form text. In order for inspection to work properly, the name of this info type must not occur naturally anywhere in your data; otherwise, inspection may either - reverse a surrogate that does not correspond to an actual identifier - be unable to parse the surrogate and result in an error Therefore, choose your custom info type name carefully after considering what your data looks like. One way to select a name that has a high chance of yielding reliable detection is to include one or more unicode characters that are highly improbable to exist in your data. For example, assuming your data is entered from a regular ASCII keyboard, the symbol with the hex code point 29DD might be used like so: ⧝MY_TOKEN_TYPE.",
    }),
  })
  .openapi({
    description:
      'Pseudonymization method that generates deterministic encryption for the given input. Outputs a base64 encoded representation of the encrypted output. Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2CryptoDeterministicConfig')

const GooglePrivacyDlpV2CryptoHashConfigSchema = z
  .object({
    cryptoKey: GooglePrivacyDlpV2CryptoKeySchema.exactOptional().openapi({
      description: 'The key used by the hash function.',
    }),
  })
  .openapi({
    description:
      'Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. The key size must be either 32 or 64 bytes. Outputs a base64 encoded representation of the hashed output (for example, L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=). Currently, only string and integer values can be hashed. See https://cloud.google.com/dlp/docs/pseudonymization to learn more.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2CryptoHashConfig')

const GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigSchema = z
  .object({
    commonAlphabet: z
      .enum([
        'FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED',
        'NUMERIC',
        'HEXADECIMAL',
        'UPPER_CASE_ALPHA_NUMERIC',
        'ALPHA_NUMERIC',
      ])
      .exactOptional()
      .openapi({ description: 'Common alphabets.' }),
    context: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description:
        "The 'tweak', a context may be used for higher security since the same identifier in two different contexts won't be given the same surrogate. If the context is not set, a default tweak will be used. If the context is set but: 1. there is no record present when transforming a given value or 1. the field is not present when transforming a given value, a default tweak will be used. Note that case (1) is expected when an `InfoTypeTransformation` is applied to both structured and unstructured `ContentItem`s. Currently, the referenced field may be of value type integer or string. The tweak is constructed as a sequence of bytes in big endian byte order such that: - a 64 bit integer is encoded followed by a single byte of value 1 - a string is encoded in UTF-8 format followed by a single byte of value 2",
    }),
    cryptoKey: GooglePrivacyDlpV2CryptoKeySchema.exactOptional().openapi({
      description: 'Required. The key used by the encryption algorithm.',
    }),
    customAlphabet: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range [2, 95]. This must be encoded as ASCII. The order of characters does not matter. The full list of allowed characters is: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ~`!@#$%^&*()_-+={[}]|\\:;"\'<,>.?/',
      }),
    radix: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The native way to select the alphabet. Must be in the range [2, 95].',
      }),
    surrogateInfoType: GooglePrivacyDlpV2InfoTypeSchema.exactOptional().openapi({
      description:
        "The custom infoType to annotate the surrogate with. This annotation will be applied to the surrogate by prefixing it with the name of the custom infoType followed by the number of characters comprising the surrogate. The following scheme defines the format: info_type_name(surrogate_character_count):surrogate For example, if the name of custom infoType is 'MY_TOKEN_INFO_TYPE' and the surrogate is 'abc', the full replacement value will be: 'MY_TOKEN_INFO_TYPE(3):abc' This annotation identifies the surrogate when inspecting content using the custom infoType [`SurrogateType`](https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#surrogatetype). This facilitates reversal of the surrogate when it occurs in free text. In order for inspection to work properly, the name of this infoType must not occur naturally anywhere in your data; otherwise, inspection may find a surrogate that does not correspond to an actual identifier. Therefore, choose your custom infoType name carefully after considering what your data looks like. One way to select a name that has a high chance of yielding reliable detection is to include one or more unicode characters that are highly improbable to exist in your data. For example, assuming your data is entered from a regular ASCII keyboard, the symbol with the hex code point 29DD might be used like so: ⧝MY_TOKEN_TYPE",
    }),
  })
  .openapi({
    description:
      'Replaces an identifier with a surrogate using Format Preserving Encryption (FPE) with the FFX mode of operation; however when used in the `ReidentifyContent` API method, it serves the opposite function by reversing the surrogate back into the original identifier. The identifier must be encoded as ASCII. For a given crypto key and context, the same identifier will be replaced with the same surrogate. Identifiers must be at least two characters long. In the case that the identifier is the empty string, it will be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn more. Note: We recommend using CryptoDeterministicConfig for all use cases which do not require preserving the input alphabet space and size, plus warrant referential integrity.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig')

const GooglePrivacyDlpV2DateShiftConfigSchema = z
  .object({
    context: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description:
        'Points to the field that contains the context, for example, an entity id. If set, must also set cryptoKey. If set, shift will be consistent for the given context.',
    }),
    cryptoKey: GooglePrivacyDlpV2CryptoKeySchema.exactOptional().openapi({
      description:
        'Causes the shift to be computed based on this key and the context. This results in the same shift for the same context and crypto_key. If set, must also set context. Can only be applied to table items.',
    }),
    lowerBoundDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. For example, -5 means shift date to at most 5 days back in the past.',
      }),
    upperBoundDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction. For example, 3 means shift date to at most 3 days into the future.',
      }),
  })
  .openapi({
    description:
      'Shifts dates by random number of days, with option to be consistent for the same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting to learn more.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2DateShiftConfig')

const GooglePrivacyDlpV2FixedSizeBucketingConfigSchema = z
  .object({
    bucketSize: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. Size of each bucket (except for minimum and maximum buckets). So if `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works.',
      }),
    lowerBound: GooglePrivacyDlpV2ValueSchema.exactOptional().openapi({
      description:
        'Required. Lower bound value of buckets. All values less than `lower_bound` are grouped together into a single bucket; for example if `lower_bound` = 10, then all values less than 10 are replaced with the value "-10".',
    }),
    upperBound: GooglePrivacyDlpV2ValueSchema.exactOptional().openapi({
      description:
        'Required. Upper bound value of buckets. All values greater than upper_bound are grouped together into a single bucket; for example if `upper_bound` = 89, then all values greater than 89 are replaced with the value "89+".',
    }),
  })
  .openapi({
    description:
      'Buckets values based on fixed size ranges. The Bucketing transformation can provide all of this functionality, but requires more configuration. This message is provided as a convenience to the user for simple bucketing strategies. The transformed value will be a hyphenated string of {lower_bound}-{upper_bound}. For example, if lower_bound = 10 and upper_bound = 20, all values that are within this bucket will be replaced with "10-20". This can be used on data of type: double, long. If the bound Value type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2FixedSizeBucketingConfig')

const GooglePrivacyDlpV2RedactConfigSchema = z
  .object({})
  .openapi({
    description:
      "Redact a given value. For example, if used with an `InfoTypeTransformation` transforming PHONE_NUMBER, and input 'My phone number is 206-555-0123', the output would be 'My phone number is '.",
  })
  .openapi('GooglePrivacyDlpV2RedactConfig')

const GooglePrivacyDlpV2ReplaceValueConfigSchema = z
  .object({
    newValue: GooglePrivacyDlpV2ValueSchema.exactOptional().openapi({
      description: 'Value to replace it with.',
    }),
  })
  .openapi({ description: 'Replace each input value with a given `Value`.', required: [] })
  .openapi('GooglePrivacyDlpV2ReplaceValueConfig')

const GooglePrivacyDlpV2WordListSchema = z
  .object({
    words: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required]',
      }),
  })
  .openapi({
    description: 'Message defining a list of words or phrases to search for in the data.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2WordList')

const GooglePrivacyDlpV2ReplaceDictionaryConfigSchema = z
  .object({
    wordList: GooglePrivacyDlpV2WordListSchema.exactOptional().openapi({
      description:
        'A list of words to select from for random replacement. The [limits](https://cloud.google.com/dlp/limits) page contains details about the size limits of dictionaries.',
    }),
  })
  .openapi({
    description: 'Replace each input value with a value randomly selected from the dictionary.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2ReplaceDictionaryConfig')

const GooglePrivacyDlpV2ReplaceWithInfoTypeConfigSchema = z
  .object({})
  .openapi({ description: 'Replace each matching finding with the name of the info_type.' })
  .openapi('GooglePrivacyDlpV2ReplaceWithInfoTypeConfig')

const GooglePrivacyDlpV2TimePartConfigSchema = z
  .object({
    partToExtract: z
      .enum([
        'TIME_PART_UNSPECIFIED',
        'YEAR',
        'MONTH',
        'DAY_OF_MONTH',
        'DAY_OF_WEEK',
        'WEEK_OF_YEAR',
        'HOUR_OF_DAY',
      ])
      .exactOptional()
      .openapi({ description: 'The part of the time to keep.' }),
  })
  .openapi({
    description:
      'For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a portion of the value.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2TimePartConfig')

const GooglePrivacyDlpV2PrimitiveTransformationSchema = z
  .object({
    bucketingConfig: GooglePrivacyDlpV2BucketingConfigSchema.exactOptional().openapi({
      description: 'Bucketing',
    }),
    characterMaskConfig: GooglePrivacyDlpV2CharacterMaskConfigSchema.exactOptional().openapi({
      description: 'Mask',
    }),
    cryptoDeterministicConfig:
      GooglePrivacyDlpV2CryptoDeterministicConfigSchema.exactOptional().openapi({
        description: 'Deterministic Crypto',
      }),
    cryptoHashConfig: GooglePrivacyDlpV2CryptoHashConfigSchema.exactOptional().openapi({
      description: 'Crypto',
    }),
    cryptoReplaceFfxFpeConfig:
      GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigSchema.exactOptional().openapi({
        description: 'Ffx-Fpe',
      }),
    dateShiftConfig: GooglePrivacyDlpV2DateShiftConfigSchema.exactOptional().openapi({
      description: 'Date Shift',
    }),
    fixedSizeBucketingConfig:
      GooglePrivacyDlpV2FixedSizeBucketingConfigSchema.exactOptional().openapi({
        description: 'Fixed size bucketing',
      }),
    redactConfig: GooglePrivacyDlpV2RedactConfigSchema.exactOptional().openapi({
      description: 'Redact',
    }),
    replaceConfig: GooglePrivacyDlpV2ReplaceValueConfigSchema.exactOptional().openapi({
      description: 'Replace with a specified value.',
    }),
    replaceDictionaryConfig:
      GooglePrivacyDlpV2ReplaceDictionaryConfigSchema.exactOptional().openapi({
        description: 'Replace with a value randomly drawn (with replacement) from a dictionary.',
      }),
    replaceWithInfoTypeConfig:
      GooglePrivacyDlpV2ReplaceWithInfoTypeConfigSchema.exactOptional().openapi({
        description: 'Replace with infotype',
      }),
    timePartConfig: GooglePrivacyDlpV2TimePartConfigSchema.exactOptional().openapi({
      description: 'Time extraction',
    }),
  })
  .openapi({ description: 'A rule for transforming a value.', required: [] })
  .openapi('GooglePrivacyDlpV2PrimitiveTransformation')

const GooglePrivacyDlpV2InfoTypeTransformationSchema = z
  .object({
    infoTypes: z
      .array(GooglePrivacyDlpV2InfoTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'InfoTypes to apply the transformation to. An empty list will cause this transformation to apply to all findings that correspond to infoTypes that were requested in `InspectConfig`.',
      }),
    primitiveTransformation:
      GooglePrivacyDlpV2PrimitiveTransformationSchema.exactOptional().openapi({
        description: 'Required. Primitive transformation to apply to the infoType.',
      }),
  })
  .openapi({
    description: 'A transformation to apply to text that is identified as a specific info_type.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2InfoTypeTransformation')

const GooglePrivacyDlpV2InfoTypeTransformationsSchema = z
  .object({
    transformations: z
      .array(GooglePrivacyDlpV2InfoTypeTransformationSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Transformation for each infoType. Cannot specify more than one for a given infoType.',
      }),
  })
  .openapi({
    description:
      'A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2InfoTypeTransformations')

const GooglePrivacyDlpV2ConditionSchema = z
  .object({
    field: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description: 'Required. Field within the record this condition is evaluated against.',
    }),
    operator: z
      .enum([
        'RELATIONAL_OPERATOR_UNSPECIFIED',
        'EQUAL_TO',
        'NOT_EQUAL_TO',
        'GREATER_THAN',
        'LESS_THAN',
        'GREATER_THAN_OR_EQUALS',
        'LESS_THAN_OR_EQUALS',
        'EXISTS',
      ])
      .exactOptional()
      .openapi({
        description: 'Required. Operator used to compare the field or infoType to the value.',
      }),
    value: GooglePrivacyDlpV2ValueSchema.exactOptional().openapi({
      description: 'Value to compare against. [Mandatory, except for `EXISTS` tests.]',
    }),
  })
  .openapi({
    description:
      "The field type of `value` and `field` do not need to match to be considered equal, but not all comparisons are possible. EQUAL_TO and NOT_EQUAL_TO attempt to compare even with incompatible types, but all other comparisons are invalid with incompatible types. A `value` of type: - `string` can be compared against all other types - `boolean` can only be compared against other booleans - `integer` can be compared against doubles or a string if the string value can be parsed as an integer. - `double` can be compared against integers or a string if the string can be parsed as a double. - `Timestamp` can be compared against strings in RFC 3339 date string format. - `TimeOfDay` can be compared against timestamps and strings in the format of 'HH:mm:ss'. If we fail to compare do to type mismatch, a warning will be given and the condition will evaluate to false.",
    required: [],
  })
  .openapi('GooglePrivacyDlpV2Condition')

const GooglePrivacyDlpV2ConditionsSchema = z
  .object({
    conditions: z
      .array(GooglePrivacyDlpV2ConditionSchema)
      .exactOptional()
      .openapi({ description: 'A collection of conditions.' }),
  })
  .openapi({ description: 'A collection of conditions.', required: [] })
  .openapi('GooglePrivacyDlpV2Conditions')

const GooglePrivacyDlpV2ExpressionsSchema = z
  .object({
    conditions: GooglePrivacyDlpV2ConditionsSchema.exactOptional().openapi({
      description: 'Conditions to apply to the expression.',
    }),
    logicalOperator: z
      .enum(['LOGICAL_OPERATOR_UNSPECIFIED', 'AND'])
      .exactOptional()
      .openapi({
        description:
          'The operator to apply to the result of conditions. Default and currently only supported value is `AND`.',
      }),
  })
  .openapi({
    description: 'An expression, consisting of an operator and conditions.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2Expressions')

const GooglePrivacyDlpV2RecordConditionSchema = z
  .object({
    expressions: GooglePrivacyDlpV2ExpressionsSchema.exactOptional().openapi({
      description: 'An expression.',
    }),
  })
  .openapi({
    description:
      'A condition for determining whether a transformation should be applied to a field.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2RecordCondition')

const GooglePrivacyDlpV2FieldTransformationSchema = z
  .object({
    condition: GooglePrivacyDlpV2RecordConditionSchema.exactOptional().openapi({
      description:
        'Only apply the transformation if the condition evaluates to true for the given `RecordCondition`. The conditions are allowed to reference fields that are not used in the actual transformation. Example Use Cases: - Apply a different bucket transformation to an age column if the zip code column for the same record is within a specific range. - Redact a field if the date of birth field is greater than 85.',
    }),
    fields: z
      .array(GooglePrivacyDlpV2FieldIdSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Input field(s) to apply the transformation to. When you have columns that reference their position within a list, omit the index from the FieldId. FieldId name matching ignores the index. For example, instead of "contact.nums[0].type", use "contact.nums.type".',
      }),
    infoTypeTransformations:
      GooglePrivacyDlpV2InfoTypeTransformationsSchema.exactOptional().openapi({
        description:
          'Treat the contents of the field as free text, and selectively transform content that matches an `InfoType`.',
      }),
    primitiveTransformation:
      GooglePrivacyDlpV2PrimitiveTransformationSchema.exactOptional().openapi({
        description: 'Apply the transformation to the entire field.',
      }),
  })
  .openapi({ description: 'The transformation to apply to the field.', required: [] })
  .openapi('GooglePrivacyDlpV2FieldTransformation')

const GooglePrivacyDlpV2RecordSuppressionSchema = z
  .object({
    condition: GooglePrivacyDlpV2RecordConditionSchema.exactOptional().openapi({
      description:
        'A condition that when it evaluates to true will result in the record being evaluated to be suppressed from the transformed content.',
    }),
  })
  .openapi({
    description: 'Configuration to suppress records whose suppression conditions evaluate to true.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2RecordSuppression')

const GooglePrivacyDlpV2RecordTransformationsSchema = z
  .object({
    fieldTransformations: z
      .array(GooglePrivacyDlpV2FieldTransformationSchema)
      .exactOptional()
      .openapi({ description: 'Transform the record by applying various field transformations.' }),
    recordSuppressions: z
      .array(GooglePrivacyDlpV2RecordSuppressionSchema)
      .exactOptional()
      .openapi({
        description:
          'Configuration defining which records get suppressed entirely. Records that match any suppression rule are omitted from the output.',
      }),
  })
  .openapi({
    description: 'A type of transformation that is applied over structured data such as a table.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2RecordTransformations')

const GooglePrivacyDlpV2LeaveUntransformedSchema = z
  .object({})
  .openapi({
    description:
      'Skips the data without modifying it if the requested transformation would cause an error. For example, if a `DateShift` transformation were applied an an IP address, this mode would leave the IP address unchanged in the response.',
  })
  .openapi('GooglePrivacyDlpV2LeaveUntransformed')

const GooglePrivacyDlpV2ThrowErrorSchema = z
  .object({})
  .openapi({
    description: 'Throw an error and fail the request when a transformation error occurs.',
  })
  .openapi('GooglePrivacyDlpV2ThrowError')

const GooglePrivacyDlpV2TransformationErrorHandlingSchema = z
  .object({
    leaveUntransformed: GooglePrivacyDlpV2LeaveUntransformedSchema.exactOptional().openapi({
      description: 'Ignore errors',
    }),
    throwError: GooglePrivacyDlpV2ThrowErrorSchema.exactOptional().openapi({
      description: 'Throw an error',
    }),
  })
  .openapi({
    description:
      'How to handle transformation errors during de-identification. A transformation error occurs when the requested transformation is incompatible with the data. For example, trying to de-identify an IP address using a `DateShift` transformation would result in a transformation error, since date info cannot be extracted from an IP address. Information about any incompatible transformations, and how they were handled, is returned in the response as part of the `TransformationOverviews`.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2TransformationErrorHandling')

const GooglePrivacyDlpV2DeidentifyConfigSchema = z
  .object({
    imageTransformations: GooglePrivacyDlpV2ImageTransformationsSchema.exactOptional().openapi({
      description: 'Treat the dataset as an image and redact.',
    }),
    infoTypeTransformations:
      GooglePrivacyDlpV2InfoTypeTransformationsSchema.exactOptional().openapi({
        description:
          'Treat the dataset as free-form text and apply the same free text transformation everywhere.',
      }),
    recordTransformations: GooglePrivacyDlpV2RecordTransformationsSchema.exactOptional().openapi({
      description:
        'Treat the dataset as structured. Transformations can be applied to specific locations within structured datasets, such as transforming a column within a table.',
    }),
    transformationErrorHandling:
      GooglePrivacyDlpV2TransformationErrorHandlingSchema.exactOptional().openapi({
        description:
          'Mode for handling transformation errors. If left unspecified, the default mode is `TransformationErrorHandling.ThrowError`.',
      }),
  })
  .openapi({
    description: 'The configuration that controls how the data will change.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2DeidentifyConfig')

const GooglePrivacyDlpV2DeidentifyTemplateSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The creation timestamp of an inspectTemplate.',
        readOnly: true,
      }),
    deidentifyConfig: GooglePrivacyDlpV2DeidentifyConfigSchema.exactOptional().openapi({
      description: 'The core content of the template.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Short description (max 256 chars).' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name (max 256 chars).' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID`',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The last update timestamp of an inspectTemplate.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2DeidentifyTemplate')

const GooglePrivacyDlpV2RequestedDeidentifyOptionsSchema = z
  .object({
    snapshotDeidentifyTemplate: GooglePrivacyDlpV2DeidentifyTemplateSchema.exactOptional().openapi({
      description:
        'Snapshot of the state of the DeidentifyTemplate from the Deidentify action at the time this job was run.',
    }),
    snapshotImageRedactTemplate: GooglePrivacyDlpV2DeidentifyTemplateSchema.exactOptional().openapi(
      {
        description:
          'Snapshot of the state of the image redact DeidentifyTemplate from the Deidentify action at the time this job was run.',
      },
    ),
    snapshotStructuredDeidentifyTemplate:
      GooglePrivacyDlpV2DeidentifyTemplateSchema.exactOptional().openapi({
        description:
          'Snapshot of the state of the structured DeidentifyTemplate from the Deidentify action at the time this job was run.',
      }),
  })
  .openapi({ description: 'De-id options.', required: [] })
  .openapi('GooglePrivacyDlpV2RequestedDeidentifyOptions')

const GooglePrivacyDlpV2DeidentifyDataSourceDetailsSchema = z
  .object({
    deidentifyStats: GooglePrivacyDlpV2DeidentifyDataSourceStatsSchema.exactOptional().openapi({
      description: 'Stats about de-identification.',
    }),
    requestedOptions: GooglePrivacyDlpV2RequestedDeidentifyOptionsSchema.exactOptional().openapi({
      description: 'De-identification config used for the request.',
    }),
  })
  .openapi({ description: 'The results of a Deidentify action from an Inspect job.', required: [] })
  .openapi('GooglePrivacyDlpV2DeidentifyDataSourceDetails')

const GooglePrivacyDlpV2ActionDetailsSchema = z
  .object({
    deidentifyDetails: GooglePrivacyDlpV2DeidentifyDataSourceDetailsSchema.exactOptional().openapi({
      description: 'Outcome of a de-identification action.',
    }),
  })
  .openapi({ description: 'The results of an Action.', required: [] })
  .openapi('GooglePrivacyDlpV2ActionDetails')

const GooglePrivacyDlpV2ActivateJobTriggerRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for ActivateJobTrigger.' })
  .openapi('GooglePrivacyDlpV2ActivateJobTriggerRequest')

const GooglePrivacyDlpV2ValueFrequencySchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'How many times the value is contained in the field.' }),
    value: GooglePrivacyDlpV2ValueSchema.exactOptional().openapi({
      description: 'A value contained in the field in question.',
    }),
  })
  .openapi({ description: 'A value of a field, including its frequency.', required: [] })
  .openapi('GooglePrivacyDlpV2ValueFrequency')

const GooglePrivacyDlpV2CategoricalStatsHistogramBucketSchema = z
  .object({
    bucketSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total number of values in this bucket.' }),
    bucketValueCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total number of distinct values in this bucket.' }),
    bucketValues: z
      .array(GooglePrivacyDlpV2ValueFrequencySchema)
      .exactOptional()
      .openapi({
        description:
          'Sample of value frequencies in this bucket. The total number of values returned per bucket is capped at 20.',
      }),
    valueFrequencyLowerBound: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lower bound on the value frequency of the values in this bucket.' }),
    valueFrequencyUpperBound: z
      .string()
      .exactOptional()
      .openapi({ description: 'Upper bound on the value frequency of the values in this bucket.' }),
  })
  .openapi({ description: 'Histogram of value frequencies in the column.', required: [] })
  .openapi('GooglePrivacyDlpV2CategoricalStatsHistogramBucket')

const GooglePrivacyDlpV2CategoricalStatsResultSchema = z
  .object({
    valueFrequencyHistogramBuckets: z
      .array(GooglePrivacyDlpV2CategoricalStatsHistogramBucketSchema)
      .exactOptional()
      .openapi({ description: 'Histogram of value frequencies in the column.' }),
  })
  .openapi({ description: 'Result of the categorical stats computation.', required: [] })
  .openapi('GooglePrivacyDlpV2CategoricalStatsResult')

const GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValuesSchema = z
  .object({
    estimatedProbability: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The estimated probability that a given individual sharing these quasi-identifier values is in the dataset. This value, typically called δ, is the ratio between the number of records in the dataset with these quasi-identifier values, and the total number of individuals (inside *and* outside the dataset) with these quasi-identifier values. For example, if there are 15 individuals in the dataset who share the same quasi-identifier values, and an estimated 100 people in the entire population with these values, then δ is 0.15.',
      }),
    quasiIdsValues: z
      .array(GooglePrivacyDlpV2ValueSchema)
      .exactOptional()
      .openapi({ description: 'The quasi-identifier values.' }),
  })
  .openapi({ description: 'A tuple of values for the quasi-identifier columns.', required: [] })
  .openapi('GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues')

const GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucketSchema = z
  .object({
    bucketSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of records within these probability bounds.' }),
    bucketValueCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Total number of distinct quasi-identifier tuple values in this bucket.',
      }),
    bucketValues: z
      .array(GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValuesSchema)
      .exactOptional()
      .openapi({
        description:
          'Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20.',
      }),
    maxProbability: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Always greater than or equal to min_probability.' }),
    minProbability: z.float64().exactOptional().openapi({ description: 'Between 0 and 1.' }),
  })
  .openapi({
    description:
      'A DeltaPresenceEstimationHistogramBucket message with the following values: min_probability: 0.1 max_probability: 0.2 frequency: 42 means that there are 42 records for which δ is in [0.1, 0.2). An important particular case is when min_probability = max_probability = 1: then, every individual who shares this quasi-identifier combination is in the dataset.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket')

const GooglePrivacyDlpV2DeltaPresenceEstimationResultSchema = z
  .object({
    deltaPresenceEstimationHistogram: z
      .array(GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucketSchema)
      .exactOptional()
      .openapi({
        description:
          "The intervals [min_probability, max_probability) do not overlap. If a value doesn't correspond to any such interval, the associated frequency is zero. For example, the following records: {min_probability: 0, max_probability: 0.1, frequency: 17} {min_probability: 0.2, max_probability: 0.3, frequency: 42} {min_probability: 0.3, max_probability: 0.4, frequency: 99} mean that there are no record with an estimated probability in [0.1, 0.2) nor larger or equal to 0.4.",
      }),
  })
  .openapi({
    description:
      'Result of the δ-presence computation. Note that these results are an estimation, not exact values.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2DeltaPresenceEstimationResult')

const GooglePrivacyDlpV2KAnonymityEquivalenceClassSchema = z
  .object({
    equivalenceClassSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Size of the equivalence class, for example number of rows with the above set of values.',
      }),
    quasiIdsValues: z
      .array(GooglePrivacyDlpV2ValueSchema)
      .exactOptional()
      .openapi({
        description:
          'Set of values defining the equivalence class. One value per quasi-identifier column in the original KAnonymity metric message. The order is always the same as the original request.',
      }),
  })
  .openapi({
    description: "The set of columns' values that share the same ldiversity value",
    required: [],
  })
  .openapi('GooglePrivacyDlpV2KAnonymityEquivalenceClass')

const GooglePrivacyDlpV2KAnonymityHistogramBucketSchema = z
  .object({
    bucketSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total number of equivalence classes in this bucket.' }),
    bucketValueCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total number of distinct equivalence classes in this bucket.' }),
    bucketValues: z
      .array(GooglePrivacyDlpV2KAnonymityEquivalenceClassSchema)
      .exactOptional()
      .openapi({
        description:
          'Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20.',
      }),
    equivalenceClassSizeLowerBound: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Lower bound on the size of the equivalence classes in this bucket.',
      }),
    equivalenceClassSizeUpperBound: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Upper bound on the size of the equivalence classes in this bucket.',
      }),
  })
  .openapi({ description: 'Histogram of k-anonymity equivalence classes.', required: [] })
  .openapi('GooglePrivacyDlpV2KAnonymityHistogramBucket')

const GooglePrivacyDlpV2KAnonymityResultSchema = z
  .object({
    equivalenceClassHistogramBuckets: z
      .array(GooglePrivacyDlpV2KAnonymityHistogramBucketSchema)
      .exactOptional()
      .openapi({ description: 'Histogram of k-anonymity equivalence classes.' }),
  })
  .openapi({ description: 'Result of the k-anonymity computation.', required: [] })
  .openapi('GooglePrivacyDlpV2KAnonymityResult')

const GooglePrivacyDlpV2KMapEstimationQuasiIdValuesSchema = z
  .object({
    estimatedAnonymity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The estimated anonymity for these quasi-identifier values.' }),
    quasiIdsValues: z
      .array(GooglePrivacyDlpV2ValueSchema)
      .exactOptional()
      .openapi({ description: 'The quasi-identifier values.' }),
  })
  .openapi({ description: 'A tuple of values for the quasi-identifier columns.', required: [] })
  .openapi('GooglePrivacyDlpV2KMapEstimationQuasiIdValues')

const GooglePrivacyDlpV2KMapEstimationHistogramBucketSchema = z
  .object({
    bucketSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of records within these anonymity bounds.' }),
    bucketValueCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Total number of distinct quasi-identifier tuple values in this bucket.',
      }),
    bucketValues: z
      .array(GooglePrivacyDlpV2KMapEstimationQuasiIdValuesSchema)
      .exactOptional()
      .openapi({
        description:
          'Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20.',
      }),
    maxAnonymity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Always greater than or equal to min_anonymity.' }),
    minAnonymity: z.string().exactOptional().openapi({ description: 'Always positive.' }),
  })
  .openapi({
    description:
      'A KMapEstimationHistogramBucket message with the following values: min_anonymity: 3 max_anonymity: 5 frequency: 42 means that there are 42 records whose quasi-identifier values correspond to 3, 4 or 5 people in the overlying population. An important particular case is when min_anonymity = max_anonymity = 1: the frequency field then corresponds to the number of uniquely identifiable records.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2KMapEstimationHistogramBucket')

const GooglePrivacyDlpV2KMapEstimationResultSchema = z
  .object({
    kMapEstimationHistogram: z
      .array(GooglePrivacyDlpV2KMapEstimationHistogramBucketSchema)
      .exactOptional()
      .openapi({
        description:
          "The intervals [min_anonymity, max_anonymity] do not overlap. If a value doesn't correspond to any such interval, the associated frequency is zero. For example, the following records: {min_anonymity: 1, max_anonymity: 1, frequency: 17} {min_anonymity: 2, max_anonymity: 3, frequency: 42} {min_anonymity: 5, max_anonymity: 10, frequency: 99} mean that there are no record with an estimated anonymity of 4, 5, or larger than 10.",
      }),
  })
  .openapi({
    description:
      'Result of the reidentifiability analysis. Note that these results are an estimation, not exact values.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2KMapEstimationResult')

const GooglePrivacyDlpV2LDiversityEquivalenceClassSchema = z
  .object({
    equivalenceClassSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'Size of the k-anonymity equivalence class.' }),
    numDistinctSensitiveValues: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of distinct sensitive values in this equivalence class.' }),
    quasiIdsValues: z
      .array(GooglePrivacyDlpV2ValueSchema)
      .exactOptional()
      .openapi({
        description:
          'Quasi-identifier values defining the k-anonymity equivalence class. The order is always the same as the original request.',
      }),
    topSensitiveValues: z
      .array(GooglePrivacyDlpV2ValueFrequencySchema)
      .exactOptional()
      .openapi({ description: 'Estimated frequencies of top sensitive values.' }),
  })
  .openapi({
    description: "The set of columns' values that share the same ldiversity value.",
    required: [],
  })
  .openapi('GooglePrivacyDlpV2LDiversityEquivalenceClass')

const GooglePrivacyDlpV2LDiversityHistogramBucketSchema = z
  .object({
    bucketSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total number of equivalence classes in this bucket.' }),
    bucketValueCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total number of distinct equivalence classes in this bucket.' }),
    bucketValues: z
      .array(GooglePrivacyDlpV2LDiversityEquivalenceClassSchema)
      .exactOptional()
      .openapi({
        description:
          'Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20.',
      }),
    sensitiveValueFrequencyLowerBound: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Lower bound on the sensitive value frequencies of the equivalence classes in this bucket.',
      }),
    sensitiveValueFrequencyUpperBound: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Upper bound on the sensitive value frequencies of the equivalence classes in this bucket.',
      }),
  })
  .openapi({
    description: 'Histogram of l-diversity equivalence class sensitive value frequencies.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2LDiversityHistogramBucket')

const GooglePrivacyDlpV2LDiversityResultSchema = z
  .object({
    sensitiveValueFrequencyHistogramBuckets: z
      .array(GooglePrivacyDlpV2LDiversityHistogramBucketSchema)
      .exactOptional()
      .openapi({
        description: 'Histogram of l-diversity equivalence class sensitive value frequencies.',
      }),
  })
  .openapi({ description: 'Result of the l-diversity computation.', required: [] })
  .openapi('GooglePrivacyDlpV2LDiversityResult')

const GooglePrivacyDlpV2NumericalStatsResultSchema = z
  .object({
    maxValue: GooglePrivacyDlpV2ValueSchema.exactOptional().openapi({
      description: 'Maximum value appearing in the column.',
    }),
    minValue: GooglePrivacyDlpV2ValueSchema.exactOptional().openapi({
      description: 'Minimum value appearing in the column.',
    }),
    quantileValues: z
      .array(GooglePrivacyDlpV2ValueSchema)
      .exactOptional()
      .openapi({
        description:
          'List of 99 values that partition the set of field values into 100 equal sized buckets.',
      }),
  })
  .openapi({ description: 'Result of the numerical stats computation.', required: [] })
  .openapi('GooglePrivacyDlpV2NumericalStatsResult')

const GooglePrivacyDlpV2CategoricalStatsConfigSchema = z
  .object({
    field: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description:
        'Field to compute categorical stats on. All column types are supported except for arrays and structs. However, it may be more informative to use NumericalStats when the field type is supported, depending on the data.',
    }),
  })
  .openapi({
    description:
      'Compute numerical stats over an individual column, including number of distinct values and value count distribution.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2CategoricalStatsConfig')

const GooglePrivacyDlpV2QuasiIdentifierFieldSchema = z
  .object({
    customTag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below).',
      }),
    field: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description: 'Identifies the column.',
    }),
  })
  .openapi({
    description:
      'A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2QuasiIdentifierField')

const GooglePrivacyDlpV2StatisticalTableSchema = z
  .object({
    quasiIds: z
      .array(GooglePrivacyDlpV2QuasiIdentifierFieldSchema)
      .exactOptional()
      .openapi({ description: 'Required. Quasi-identifier columns.' }),
    relativeFrequency: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description:
        'Required. The relative frequency column must contain a floating-point number between 0 and 1 (inclusive). Null values are assumed to be zero.',
    }),
    table: GooglePrivacyDlpV2BigQueryTableSchema.exactOptional().openapi({
      description: 'Required. Auxiliary table location.',
    }),
  })
  .openapi({
    description:
      'An auxiliary table containing statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2StatisticalTable')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

const GooglePrivacyDlpV2QuasiIdSchema = z
  .object({
    customTag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below).',
      }),
    field: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description: 'Required. Identifies the column.',
    }),
    inferred: GoogleProtobufEmptySchema.exactOptional().openapi({
      description:
        'If no semantic tag is indicated, we infer the statistical model from the distribution of values in the input data',
    }),
    infoType: GooglePrivacyDlpV2InfoTypeSchema.exactOptional().openapi({
      description:
        'A column can be tagged with a InfoType to use the relevant public dataset as a statistical model of population, if available. We currently support US ZIP codes, region codes, ages and genders. To programmatically obtain the list of supported InfoTypes, use ListInfoTypes with the supported_by=RISK_ANALYSIS filter.',
    }),
  })
  .openapi({ description: 'A column with a semantic tag attached.', required: [] })
  .openapi('GooglePrivacyDlpV2QuasiId')

const GooglePrivacyDlpV2DeltaPresenceEstimationConfigSchema = z
  .object({
    auxiliaryTables: z
      .array(GooglePrivacyDlpV2StatisticalTableSchema)
      .exactOptional()
      .openapi({
        description:
          'Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers field must appear in exactly one field of one auxiliary table.',
      }),
    quasiIds: z
      .array(GooglePrivacyDlpV2QuasiIdSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Fields considered to be quasi-identifiers. No two fields can have the same tag.',
      }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code.',
      }),
  })
  .openapi({
    description:
      'δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2DeltaPresenceEstimationConfig')

const GooglePrivacyDlpV2EntityIdSchema = z
  .object({
    field: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description: 'Composite key indicating which field contains the entity identifier.',
    }),
  })
  .openapi({
    description:
      'An entity in a dataset is a field or set of fields that correspond to a single person. For example, in medical records the `EntityId` might be a patient identifier, or for financial records it might be an account identifier. This message is used when generalizations or analysis must take into account that multiple rows correspond to the same entity.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2EntityId')

const GooglePrivacyDlpV2KAnonymityConfigSchema = z
  .object({
    entityId: GooglePrivacyDlpV2EntityIdSchema.exactOptional().openapi({
      description:
        'Message indicating that multiple rows might be associated to a single individual. If the same entity_id is associated to multiple quasi-identifier tuples over distinct rows, we consider the entire collection of tuples as the composite quasi-identifier. This collection is a multiset: the order in which the different tuples appear in the dataset is ignored, but their frequency is taken into account. Important note: a maximum of 1000 rows can be associated to a single entity ID. If more rows are associated with the same entity ID, some might be ignored.',
    }),
    quasiIds: z
      .array(GooglePrivacyDlpV2FieldIdSchema)
      .exactOptional()
      .openapi({
        description:
          'Set of fields to compute k-anonymity over. When multiple fields are specified, they are considered a single composite key. Structs and repeated data types are not supported; however, nested fields are supported so long as they are not structs themselves or nested within a repeated field.',
      }),
  })
  .openapi({
    description: 'k-anonymity metric, used for analysis of reidentification risk.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2KAnonymityConfig')

const GooglePrivacyDlpV2QuasiIdFieldSchema = z
  .object({
    customTag: z.string().exactOptional().openapi({ description: 'A auxiliary field.' }),
    field: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description: 'Identifies the column.',
    }),
  })
  .openapi({
    description:
      'A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2QuasiIdField')

const GooglePrivacyDlpV2AuxiliaryTableSchema = z
  .object({
    quasiIds: z
      .array(GooglePrivacyDlpV2QuasiIdFieldSchema)
      .exactOptional()
      .openapi({ description: 'Required. Quasi-identifier columns.' }),
    relativeFrequency: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description:
        'Required. The relative frequency column must contain a floating-point number between 0 and 1 (inclusive). Null values are assumed to be zero.',
    }),
    table: GooglePrivacyDlpV2BigQueryTableSchema.exactOptional().openapi({
      description: 'Required. Auxiliary table location.',
    }),
  })
  .openapi({
    description:
      'An auxiliary table contains statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2AuxiliaryTable')

const GooglePrivacyDlpV2TaggedFieldSchema = z
  .object({
    customTag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below).',
      }),
    field: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description: 'Required. Identifies the column.',
    }),
    inferred: GoogleProtobufEmptySchema.exactOptional().openapi({
      description:
        'If no semantic tag is indicated, we infer the statistical model from the distribution of values in the input data',
    }),
    infoType: GooglePrivacyDlpV2InfoTypeSchema.exactOptional().openapi({
      description:
        'A column can be tagged with a InfoType to use the relevant public dataset as a statistical model of population, if available. We currently support US ZIP codes, region codes, ages and genders. To programmatically obtain the list of supported InfoTypes, use ListInfoTypes with the supported_by=RISK_ANALYSIS filter.',
    }),
  })
  .openapi({ description: 'A column with a semantic tag attached.', required: [] })
  .openapi('GooglePrivacyDlpV2TaggedField')

const GooglePrivacyDlpV2KMapEstimationConfigSchema = z
  .object({
    auxiliaryTables: z
      .array(GooglePrivacyDlpV2AuxiliaryTableSchema)
      .exactOptional()
      .openapi({
        description:
          'Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers column must appear in exactly one column of one auxiliary table.',
      }),
    quasiIds: z
      .array(GooglePrivacyDlpV2TaggedFieldSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Fields considered to be quasi-identifiers. No two columns can have the same tag.',
      }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code.',
      }),
  })
  .openapi({
    description:
      'Reidentifiability metric. This corresponds to a risk model similar to what is called "journalist risk" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2KMapEstimationConfig')

const GooglePrivacyDlpV2LDiversityConfigSchema = z
  .object({
    quasiIds: z
      .array(GooglePrivacyDlpV2FieldIdSchema)
      .exactOptional()
      .openapi({
        description:
          'Set of quasi-identifiers indicating how equivalence classes are defined for the l-diversity computation. When multiple fields are specified, they are considered a single composite key.',
      }),
    sensitiveAttribute: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description: 'Sensitive field for computing the l-value.',
    }),
  })
  .openapi({
    description: 'l-diversity metric, used for analysis of reidentification risk.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2LDiversityConfig')

const GooglePrivacyDlpV2NumericalStatsConfigSchema = z
  .object({
    field: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description:
        'Field to compute numerical stats on. Supported types are integer, float, date, datetime, timestamp, time.',
    }),
  })
  .openapi({
    description:
      'Compute numerical stats over an individual column, including min, max, and quantiles.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2NumericalStatsConfig')

const GooglePrivacyDlpV2PrivacyMetricSchema = z
  .object({
    categoricalStatsConfig: GooglePrivacyDlpV2CategoricalStatsConfigSchema.exactOptional().openapi({
      description: 'Categorical stats',
    }),
    deltaPresenceEstimationConfig:
      GooglePrivacyDlpV2DeltaPresenceEstimationConfigSchema.exactOptional().openapi({
        description: 'delta-presence',
      }),
    kAnonymityConfig: GooglePrivacyDlpV2KAnonymityConfigSchema.exactOptional().openapi({
      description: 'K-anonymity',
    }),
    kMapEstimationConfig: GooglePrivacyDlpV2KMapEstimationConfigSchema.exactOptional().openapi({
      description: 'k-map',
    }),
    lDiversityConfig: GooglePrivacyDlpV2LDiversityConfigSchema.exactOptional().openapi({
      description: 'l-diversity',
    }),
    numericalStatsConfig: GooglePrivacyDlpV2NumericalStatsConfigSchema.exactOptional().openapi({
      description: 'Numerical stats',
    }),
  })
  .openapi({
    description: 'Privacy metric to compute for reidentification risk analysis.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2PrivacyMetric')

const GooglePrivacyDlpV2RiskAnalysisJobConfigSchema = z
  .object({
    actions: z
      .array(GooglePrivacyDlpV2ActionSchema)
      .exactOptional()
      .openapi({
        description:
          'Actions to execute at the completion of the job. Are executed in the order provided.',
      }),
    privacyMetric: GooglePrivacyDlpV2PrivacyMetricSchema.exactOptional().openapi({
      description: 'Privacy metric to compute.',
    }),
    sourceTable: GooglePrivacyDlpV2BigQueryTableSchema.exactOptional().openapi({
      description: 'Input dataset to compute metrics over.',
    }),
  })
  .openapi({
    description:
      'Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2RiskAnalysisJobConfig')

const GooglePrivacyDlpV2RequestedRiskAnalysisOptionsSchema = z
  .object({
    jobConfig: GooglePrivacyDlpV2RiskAnalysisJobConfigSchema.exactOptional().openapi({
      description: 'The job config for the risk job.',
    }),
  })
  .openapi({ description: 'Risk analysis options.', required: [] })
  .openapi('GooglePrivacyDlpV2RequestedRiskAnalysisOptions')

const GooglePrivacyDlpV2AnalyzeDataSourceRiskDetailsSchema = z
  .object({
    categoricalStatsResult: GooglePrivacyDlpV2CategoricalStatsResultSchema.exactOptional().openapi({
      description: 'Categorical stats result',
    }),
    deltaPresenceEstimationResult:
      GooglePrivacyDlpV2DeltaPresenceEstimationResultSchema.exactOptional().openapi({
        description: 'Delta-presence result',
      }),
    kAnonymityResult: GooglePrivacyDlpV2KAnonymityResultSchema.exactOptional().openapi({
      description: 'K-anonymity result',
    }),
    kMapEstimationResult: GooglePrivacyDlpV2KMapEstimationResultSchema.exactOptional().openapi({
      description: 'K-map result',
    }),
    lDiversityResult: GooglePrivacyDlpV2LDiversityResultSchema.exactOptional().openapi({
      description: 'L-divesity result',
    }),
    numericalStatsResult: GooglePrivacyDlpV2NumericalStatsResultSchema.exactOptional().openapi({
      description: 'Numerical stats result',
    }),
    requestedOptions: GooglePrivacyDlpV2RequestedRiskAnalysisOptionsSchema.exactOptional().openapi({
      description: 'The configuration used for this job.',
    }),
    requestedPrivacyMetric: GooglePrivacyDlpV2PrivacyMetricSchema.exactOptional().openapi({
      description: 'Privacy metric to compute.',
    }),
    requestedSourceTable: GooglePrivacyDlpV2BigQueryTableSchema.exactOptional().openapi({
      description: 'Input dataset to compute metrics over.',
    }),
  })
  .openapi({ description: 'Result of a risk analysis operation request.', required: [] })
  .openapi('GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails')

const GooglePrivacyDlpV2BigQueryFieldSchema = z
  .object({
    field: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description: 'Designated field in the BigQuery table.',
    }),
    table: GooglePrivacyDlpV2BigQueryTableSchema.exactOptional().openapi({
      description: 'Source table of the field.',
    }),
  })
  .openapi({ description: 'Message defining a field of a BigQuery table.', required: [] })
  .openapi('GooglePrivacyDlpV2BigQueryField')

const GooglePrivacyDlpV2BigQueryKeySchema = z
  .object({
    rowNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Row number inferred at the time the table was scanned. This value is nondeterministic, cannot be queried, and may be null for inspection jobs. To locate findings within a table, specify `inspect_job.storage_config.big_query_options.identifying_fields` in `CreateDlpJobRequest`.',
      }),
    tableReference: GooglePrivacyDlpV2BigQueryTableSchema.exactOptional().openapi({
      description: 'Complete BigQuery table reference.',
    }),
  })
  .openapi({ description: 'Row key for identifying a record in BigQuery table.', required: [] })
  .openapi('GooglePrivacyDlpV2BigQueryKey')

const GooglePrivacyDlpV2BigQueryOptionsSchema = z
  .object({
    excludedFields: z
      .array(GooglePrivacyDlpV2FieldIdSchema)
      .exactOptional()
      .openapi({
        description:
          'References to fields excluded from scanning. This allows you to skip inspection of entire columns which you know have no findings.',
      }),
    identifyingFields: z
      .array(GooglePrivacyDlpV2FieldIdSchema)
      .exactOptional()
      .openapi({
        description:
          'Table fields that may uniquely identify a row within the table. When `actions.saveFindings.outputConfig.table` is specified, the values of columns specified here are available in the output table under `location.content_locations.record_location.record_key.id_values`. Nested fields such as `person.birthdate.year` are allowed.',
      }),
    includedFields: z
      .array(GooglePrivacyDlpV2FieldIdSchema)
      .exactOptional()
      .openapi({ description: 'Limit scanning only to these fields.' }),
    rowsLimit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted. If not set, or if set to 0, all rows will be scanned. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig.',
      }),
    rowsLimitPercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig.',
      }),
    sampleMethod: z.enum(['SAMPLE_METHOD_UNSPECIFIED', 'TOP', 'RANDOM_START']).exactOptional(),
    tableReference: GooglePrivacyDlpV2BigQueryTableSchema.exactOptional().openapi({
      description: 'Complete BigQuery table reference.',
    }),
  })
  .openapi({ description: 'Options defining BigQuery table and row identifiers.', required: [] })
  .openapi('GooglePrivacyDlpV2BigQueryOptions')

const GooglePrivacyDlpV2BoundingBoxSchema = z
  .object({
    height: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Height of the bounding box in pixels.' }),
    left: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Left coordinate of the bounding box. (0,0) is upper left.' }),
    top: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Top coordinate of the bounding box. (0,0) is upper left.' }),
    width: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Width of the bounding box in pixels.' }),
  })
  .openapi({
    description: 'Bounding box encompassing detected text within an image.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2BoundingBox')

const GooglePrivacyDlpV2ByteContentItemSchema = z
  .object({
    data: z.string().exactOptional().openapi({ description: 'Content data to inspect or redact.' }),
    type: z
      .enum([
        'BYTES_TYPE_UNSPECIFIED',
        'IMAGE',
        'IMAGE_JPEG',
        'IMAGE_BMP',
        'IMAGE_PNG',
        'IMAGE_SVG',
        'TEXT_UTF8',
        'WORD_DOCUMENT',
        'PDF',
        'POWERPOINT_DOCUMENT',
        'EXCEL_DOCUMENT',
        'AVRO',
        'CSV',
        'TSV',
      ])
      .exactOptional()
      .openapi({
        description: 'The type of data stored in the bytes string. Default will be TEXT_UTF8.',
      }),
  })
  .openapi({ description: 'Container for bytes to inspect or redact.', required: [] })
  .openapi('GooglePrivacyDlpV2ByteContentItem')

const GooglePrivacyDlpV2CancelDlpJobRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for canceling a DLP job.' })
  .openapi('GooglePrivacyDlpV2CancelDlpJobRequest')

const GooglePrivacyDlpV2CloudStorageFileSetSchema = z
  .object({
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The url, in the format `gs:///`. Trailing wildcard in the path is allowed.',
      }),
  })
  .openapi({ description: 'Message representing a set of files in Cloud Storage.', required: [] })
  .openapi('GooglePrivacyDlpV2CloudStorageFileSet')

const GooglePrivacyDlpV2CloudStorageRegexFileSetSchema = z
  .object({
    bucketName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of a Cloud Storage bucket. Required.' }),
    excludeRegex: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of regular expressions matching file paths to exclude. All files in the bucket that match at least one of these regular expressions will be excluded from the scan. Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub.',
      }),
    includeRegex: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of regular expressions matching file paths to include. All files in the bucket that match at least one of these regular expressions will be included in the set of files, except for those that also match an item in `exclude_regex`. Leaving this field empty will match all files by default (this is equivalent to including `.*` in the list). Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub.',
      }),
  })
  .openapi({
    description:
      'Message representing a set of files in a Cloud Storage bucket. Regular expressions are used to allow fine-grained control over which files in the bucket to include. Included files are those that match at least one item in `include_regex` and do not match any items in `exclude_regex`. Note that a file that matches items from both lists will _not_ be included. For a match to occur, the entire file path (i.e., everything in the url after the bucket name) must match the regular expression. For example, given the input `{bucket_name: "mybucket", include_regex: ["directory1/.*"], exclude_regex: ["directory1/excluded.*"]}`: * `gs://mybucket/directory1/myfile` will be included * `gs://mybucket/directory1/directory2/myfile` will be included (`.*` matches across `/`) * `gs://mybucket/directory0/directory1/myfile` will _not_ be included (the full path doesn\'t match any items in `include_regex`) * `gs://mybucket/directory1/excludedfile` will _not_ be included (the path matches an item in `exclude_regex`) If `include_regex` is left empty, it will match all files by default (this is equivalent to setting `include_regex: [".*"]`). Some other common use cases: * `{bucket_name: "mybucket", exclude_regex: [".*\\.pdf"]}` will include all files in `mybucket` except for .pdf files * `{bucket_name: "mybucket", include_regex: ["directory/[^/]+"]}` will include all files directly under `gs://mybucket/directory/`, without matching across `/`',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2CloudStorageRegexFileSet')

const GooglePrivacyDlpV2FileSetSchema = z
  .object({
    regexFileSet: GooglePrivacyDlpV2CloudStorageRegexFileSetSchema.exactOptional().openapi({
      description:
        'The regex-filtered set of files to scan. Exactly one of `url` or `regex_file_set` must be set.',
    }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Storage url of the file(s) to scan, in the format `gs:///`. Trailing wildcard in the path is allowed. If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned non-recursively (content in sub-directories will not be scanned). This means that `gs://mybucket/` is equivalent to `gs://mybucket/*`, and `gs://mybucket/directory/` is equivalent to `gs://mybucket/directory/*`. Exactly one of `url` or `regex_file_set` must be set.',
      }),
  })
  .openapi({ description: 'Set of files to scan.', required: [] })
  .openapi('GooglePrivacyDlpV2FileSet')

const GooglePrivacyDlpV2CloudStorageOptionsSchema = z
  .object({
    bytesLimitPerFile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Max number of bytes to scan from a file. If a scanned file's size is bigger than this value then the rest of the bytes are omitted. Only one of bytes_limit_per_file and bytes_limit_per_file_percent can be specified. Cannot be set if de-identification is requested.",
      }),
    bytesLimitPerFilePercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Max percentage of bytes to scan from a file. The rest are omitted. The number of bytes scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of bytes_limit_per_file and bytes_limit_per_file_percent can be specified. Cannot be set if de-identification is requested.',
      }),
    fileSet: GooglePrivacyDlpV2FileSetSchema.exactOptional().openapi({
      description: 'The set of one or more files to scan.',
    }),
    fileTypes: z
      .array(
        z.enum([
          'FILE_TYPE_UNSPECIFIED',
          'BINARY_FILE',
          'TEXT_FILE',
          'IMAGE',
          'WORD',
          'PDF',
          'AVRO',
          'CSV',
          'TSV',
          'POWERPOINT',
          'EXCEL',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "List of file type groups to include in the scan. If empty, all files are scanned and available data format processors are applied. In addition, the binary content of the selected files is always scanned as well. Images are scanned only as binary if the specified region does not support image inspection and no file_types were specified. Image inspection is restricted to 'global', 'us', 'asia', and 'europe'.",
      }),
    filesLimitPercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Limits the number of files to scan to this percentage of the input FileSet. Number of files scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0.',
      }),
    sampleMethod: z.enum(['SAMPLE_METHOD_UNSPECIFIED', 'TOP', 'RANDOM_START']).exactOptional(),
  })
  .openapi({
    description: 'Options defining a file or a set of files within a Cloud Storage bucket.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2CloudStorageOptions')

const GooglePrivacyDlpV2CloudStoragePathSchema = z
  .object({
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt',
      }),
  })
  .openapi({
    description: 'Message representing a single file or path in Cloud Storage.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2CloudStoragePath')

const GooglePrivacyDlpV2ContainerSchema = z
  .object({
    fullPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A string representation of the full container name. Examples: - BigQuery: 'Project:DataSetId.TableId' - Cloud Storage: 'gs://Bucket/folders/filename.txt'",
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Project where the finding was found. Can be different from the project that owns the finding.',
      }),
    relativePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The rest of the path after the root. Examples: - For BigQuery table `project_id:dataset_id.table_id`, the relative path is `table_id` - For Cloud Storage file `gs://bucket/folder/filename.txt`, the relative path is `folder/filename.txt`',
      }),
    rootPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The root of the container. Examples: - For BigQuery table `project_id:dataset_id.table_id`, the root is `dataset_id` - For Cloud Storage file `gs://bucket/folder/filename.txt`, the root is `gs://bucket`',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Container type, for example BigQuery or Cloud Storage.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Findings container modification timestamp, if applicable. For Cloud Storage, this field contains the last file modification timestamp. For a BigQuery table, this field contains the last_modified_time property. For Datastore, this field isn't populated.",
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Findings container version, if available ("generation" for Cloud Storage).',
      }),
  })
  .openapi({
    description:
      'Represents a container that may contain DLP findings. Examples of a container include a file, table, or database record.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2Container')

const GooglePrivacyDlpV2RowSchema = z
  .object({
    values: z
      .array(GooglePrivacyDlpV2ValueSchema)
      .exactOptional()
      .openapi({ description: 'Individual cells.' }),
  })
  .openapi({ description: 'Values of the row.', required: [] })
  .openapi('GooglePrivacyDlpV2Row')

const GooglePrivacyDlpV2TableSchema = z
  .object({
    headers: z
      .array(GooglePrivacyDlpV2FieldIdSchema)
      .exactOptional()
      .openapi({ description: 'Headers of the table.' }),
    rows: z
      .array(GooglePrivacyDlpV2RowSchema)
      .exactOptional()
      .openapi({ description: 'Rows of the table.' }),
  })
  .openapi({
    description:
      'Structured content to inspect. Up to 50,000 `Value`s per request allowed. See https://cloud.google.com/dlp/docs/inspecting-structured-text#inspecting_a_table to learn more.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2Table')

const GooglePrivacyDlpV2ContentItemSchema = z
  .object({
    byteItem: GooglePrivacyDlpV2ByteContentItemSchema.exactOptional().openapi({
      description: 'Content data to inspect or redact. Replaces `type` and `data`.',
    }),
    table: GooglePrivacyDlpV2TableSchema.exactOptional().openapi({
      description:
        'Structured content for inspection. See https://cloud.google.com/dlp/docs/inspecting-text#inspecting_a_table to learn more.',
    }),
    value: z.string().exactOptional().openapi({ description: 'String data to inspect or redact.' }),
  })
  .openapi({ required: [] })
  .openapi('GooglePrivacyDlpV2ContentItem')

const GooglePrivacyDlpV2DocumentLocationSchema = z
  .object({
    fileOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Offset of the line, from the beginning of the file, where the finding is located.',
      }),
  })
  .openapi({ description: 'Location of a finding within a document.', required: [] })
  .openapi('GooglePrivacyDlpV2DocumentLocation')

const GooglePrivacyDlpV2ImageLocationSchema = z
  .object({
    boundingBoxes: z
      .array(GooglePrivacyDlpV2BoundingBoxSchema)
      .exactOptional()
      .openapi({
        description: 'Bounding boxes locating the pixels within the image containing the finding.',
      }),
  })
  .openapi({ description: 'Location of the finding within an image.', required: [] })
  .openapi('GooglePrivacyDlpV2ImageLocation')

const GooglePrivacyDlpV2StorageMetadataLabelSchema = z
  .object({ key: z.string().exactOptional() })
  .openapi({
    description: 'Storage metadata label to indicate which metadata entry contains findings.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2StorageMetadataLabel')

const GooglePrivacyDlpV2MetadataLocationSchema = z
  .object({
    storageLabel: GooglePrivacyDlpV2StorageMetadataLabelSchema.exactOptional().openapi({
      description: 'Storage metadata.',
    }),
    type: z
      .enum(['METADATATYPE_UNSPECIFIED', 'STORAGE_METADATA'])
      .exactOptional()
      .openapi({ description: 'Type of metadata containing the finding.' }),
  })
  .openapi({ description: 'Metadata Location', required: [] })
  .openapi('GooglePrivacyDlpV2MetadataLocation')

const GooglePrivacyDlpV2PartitionIdSchema = z
  .object({
    namespaceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If not empty, the ID of the namespace to which the entities belong.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the project to which the entities belong.' }),
  })
  .openapi({
    description:
      'Datastore partition ID. A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2PartitionId')

const GooglePrivacyDlpV2PathElementSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kind of the entity. A kind matching regex `__.*__` is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be `""`.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the entity. A name matching regex `__.*__` is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be `""`.',
      }),
  })
  .openapi({
    description:
      'A (kind, ID/name) pair used to construct a key path. If either name or ID is set, the element is complete. If neither is set, the element is incomplete.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2PathElement')

const GooglePrivacyDlpV2KeySchema = z
  .object({
    partitionId: GooglePrivacyDlpV2PartitionIdSchema.exactOptional().openapi({
      description:
        'Entities are partitioned into subsets, currently identified by a project ID and namespace ID. Queries are scoped to a single partition.',
    }),
    path: z
      .array(GooglePrivacyDlpV2PathElementSchema)
      .exactOptional()
      .openapi({
        description:
          "The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a _root entity_, the second element identifies a _child_ of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element's _ancestors_. A path can never be empty, and a path can have at most 100 elements.",
      }),
  })
  .openapi({
    description:
      "A unique identifier for a Datastore entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.",
    required: [],
  })
  .openapi('GooglePrivacyDlpV2Key')

const GooglePrivacyDlpV2DatastoreKeySchema = z
  .object({
    entityKey: GooglePrivacyDlpV2KeySchema.exactOptional().openapi({
      description: 'Datastore entity key.',
    }),
  })
  .openapi({ description: 'Record key for a finding in Cloud Datastore.', required: [] })
  .openapi('GooglePrivacyDlpV2DatastoreKey')

const GooglePrivacyDlpV2RecordKeySchema = z
  .object({
    bigQueryKey: GooglePrivacyDlpV2BigQueryKeySchema.exactOptional(),
    datastoreKey: GooglePrivacyDlpV2DatastoreKeySchema.exactOptional(),
    idValues: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Values of identifying columns in the given row. Order of values matches the order of `identifying_fields` specified in the scanning request.',
      }),
  })
  .openapi({
    description: 'Message for a unique key indicating a record that contains a finding.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2RecordKey')

const GooglePrivacyDlpV2TableLocationSchema = z
  .object({
    rowIndex: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The zero-based index of the row where the finding is located. Only populated for resources that have a natural ordering, not BigQuery. In BigQuery, to identify the row a finding came from, populate BigQueryOptions.identifying_fields with your primary key column names and when you store the findings the value of those columns will be stored inside of Finding.',
      }),
  })
  .openapi({ description: 'Location of a finding within a table.', required: [] })
  .openapi('GooglePrivacyDlpV2TableLocation')

const GooglePrivacyDlpV2RecordLocationSchema = z
  .object({
    fieldId: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description: 'Field id of the field containing the finding.',
    }),
    recordKey: GooglePrivacyDlpV2RecordKeySchema.exactOptional().openapi({
      description: 'Key of the finding.',
    }),
    tableLocation: GooglePrivacyDlpV2TableLocationSchema.exactOptional().openapi({
      description: 'Location within a `ContentItem.Table`.',
    }),
  })
  .openapi({ description: 'Location of a finding within a row or record.', required: [] })
  .openapi('GooglePrivacyDlpV2RecordLocation')

const GooglePrivacyDlpV2ContentLocationSchema = z
  .object({
    containerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the container where the finding is located. The top level name is the source file name or table name. Names of some common storage containers are formatted as follows: * BigQuery tables: `{project_id}:{dataset_id}.{table_id}` * Cloud Storage files: `gs://{bucket}/{path}` * Datastore namespace: {namespace} Nested names could be absent if the embedded object has no string identifier (for example, an image contained within a document).',
      }),
    containerTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Finding container modification timestamp, if applicable. For Cloud Storage, this field contains the last file modification timestamp. For a BigQuery table, this field contains the last_modified_time property. For Datastore, this field isn't populated.",
      }),
    containerVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Finding container version, if available ("generation" for Cloud Storage).',
      }),
    documentLocation: GooglePrivacyDlpV2DocumentLocationSchema.exactOptional().openapi({
      description: 'Location data for document files.',
    }),
    imageLocation: GooglePrivacyDlpV2ImageLocationSchema.exactOptional().openapi({
      description: "Location within an image's pixels.",
    }),
    metadataLocation: GooglePrivacyDlpV2MetadataLocationSchema.exactOptional().openapi({
      description: 'Location within the metadata for inspected content.',
    }),
    recordLocation: GooglePrivacyDlpV2RecordLocationSchema.exactOptional().openapi({
      description: 'Location within a row or record of a database table.',
    }),
  })
  .openapi({
    description:
      'Precise location of the finding within a document, record, image, or metadata container.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2ContentLocation')

const GooglePrivacyDlpV2CreateDeidentifyTemplateRequestSchema = z
  .object({
    deidentifyTemplate: GooglePrivacyDlpV2DeidentifyTemplateSchema.exactOptional().openapi({
      description: 'Required. The DeidentifyTemplate to create.',
    }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field has no effect.' }),
    templateId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.',
      }),
  })
  .openapi({ description: 'Request message for CreateDeidentifyTemplate.', required: [] })
  .openapi('GooglePrivacyDlpV2CreateDeidentifyTemplateRequest')

const GooglePrivacyDlpV2RegexSchema = z
  .object({
    groupIndexes: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.',
      }),
    pattern: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.',
      }),
  })
  .openapi({ description: 'Message defining a custom regular expression.', required: [] })
  .openapi('GooglePrivacyDlpV2Regex')

const GooglePrivacyDlpV2LikelihoodAdjustmentSchema = z
  .object({
    fixedLikelihood: z
      .enum([
        'LIKELIHOOD_UNSPECIFIED',
        'VERY_UNLIKELY',
        'UNLIKELY',
        'POSSIBLE',
        'LIKELY',
        'VERY_LIKELY',
      ])
      .exactOptional()
      .openapi({ description: 'Set the likelihood of a finding to a fixed value.' }),
    relativeLikelihood: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Increase or decrease the likelihood by the specified number of levels. For example, if a finding would be `POSSIBLE` without the detection rule and `relative_likelihood` is 1, then it is upgraded to `LIKELY`, while a value of -1 would downgrade it to `UNLIKELY`. Likelihood may never drop below `VERY_UNLIKELY` or exceed `VERY_LIKELY`, so applying an adjustment of 1 followed by an adjustment of -1 when base likelihood is `VERY_LIKELY` will result in a final likelihood of `LIKELY`.',
      }),
  })
  .openapi({
    description:
      'Message for specifying an adjustment to the likelihood of a finding as part of a detection rule.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2LikelihoodAdjustment')

const GooglePrivacyDlpV2ProximitySchema = z
  .object({
    windowAfter: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of characters after the finding to consider.' }),
    windowBefore: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of characters before the finding to consider. For tabular data, if you want to modify the likelihood of an entire column of findngs, set this to 1. For more information, see [Hotword example: Set the match likelihood of a table column] (https://cloud.google.com/dlp/docs/creating-custom-infotypes-likelihood#match-column-values).',
      }),
  })
  .openapi({
    description: 'Message for specifying a window around a finding to apply a detection rule.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2Proximity')

const GooglePrivacyDlpV2HotwordRuleSchema = z
  .object({
    hotwordRegex: GooglePrivacyDlpV2RegexSchema.exactOptional().openapi({
      description: 'Regular expression pattern defining what qualifies as a hotword.',
    }),
    likelihoodAdjustment: GooglePrivacyDlpV2LikelihoodAdjustmentSchema.exactOptional().openapi({
      description: 'Likelihood adjustment to apply to all matching findings.',
    }),
    proximity: GooglePrivacyDlpV2ProximitySchema.exactOptional().openapi({
      description:
        'Range of characters within which the entire hotword must reside. The total length of the window cannot exceed 1000 characters. The finding itself will be included in the window, so that hotwords can be used to match substrings of the finding itself. Suppose you want Cloud DLP to promote the likelihood of the phone number regex "\\(\\d{3}\\) \\d{3}-\\d{4}" if the area code is known to be the area code of a company\'s office. In this case, use the hotword regex "\\(xxx\\)", where "xxx" is the area code in question. For tabular data, if you want to modify the likelihood of an entire column of findngs, see [Hotword example: Set the match likelihood of a table column] (https://cloud.google.com/dlp/docs/creating-custom-infotypes-likelihood#match-column-values).',
    }),
  })
  .openapi({
    description:
      'The rule that adjusts the likelihood of findings within a certain proximity of hotwords.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2HotwordRule')

const GooglePrivacyDlpV2DetectionRuleSchema = z
  .object({
    hotwordRule: GooglePrivacyDlpV2HotwordRuleSchema.exactOptional().openapi({
      description: 'Hotword-based detection rule.',
    }),
  })
  .openapi({
    description:
      'Deprecated; use `InspectionRuleSet` instead. Rule for modifying a `CustomInfoType` to alter behavior under certain circumstances, depending on the specific details of the rule. Not supported for the `surrogate_type` custom infoType.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2DetectionRule')

const GooglePrivacyDlpV2DictionarySchema = z
  .object({
    cloudStoragePath: GooglePrivacyDlpV2CloudStoragePathSchema.exactOptional().openapi({
      description:
        'Newline-delimited file of words in Cloud Storage. Only a single file is accepted.',
    }),
    wordList: GooglePrivacyDlpV2WordListSchema.exactOptional().openapi({
      description: 'List of words or phrases to search for.',
    }),
  })
  .openapi({
    description:
      'Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles. Dictionary words are case-insensitive and all characters other than letters and digits in the unicode [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane) will be replaced with whitespace when scanning for matches, so the dictionary phrase "Sam Johnson" will match all three phrases "sam johnson", "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word "jen" will match the first three letters of the text "jen123" but will return no matches for "jennifer". Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The [limits](https://cloud.google.com/dlp/limits) page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using `LargeCustomDictionaryConfig` in the `StoredInfoType` API.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2Dictionary')

const GooglePrivacyDlpV2StoredTypeSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp indicating when the version of the `StoredInfoType` used for inspection was created. Output-only field, populated by the system.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the requested `StoredInfoType`, for example `organizations/433245324/storedInfoTypes/432452342` or `projects/project-id/storedInfoTypes/432452342`.',
      }),
  })
  .openapi({ description: 'A reference to a StoredInfoType to use with scanning.', required: [] })
  .openapi('GooglePrivacyDlpV2StoredType')

const GooglePrivacyDlpV2SurrogateTypeSchema = z
  .object({})
  .openapi({
    description:
      'Message for detecting output from deidentification transformations such as [`CryptoReplaceFfxFpeConfig`](https://cloud.google.com/dlp/docs/reference/rest/v2/organizations.deidentifyTemplates#cryptoreplaceffxfpeconfig). These types of transformations are those that perform pseudonymization, thereby producing a "surrogate" as output. This should be used in conjunction with a field on the transformation such as `surrogate_info_type`. This CustomInfoType does not support the use of `detection_rules`.',
  })
  .openapi('GooglePrivacyDlpV2SurrogateType')

const GooglePrivacyDlpV2CustomInfoTypeSchema = z
  .object({
    detectionRules: z
      .array(GooglePrivacyDlpV2DetectionRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'Set of detection rules to apply to all findings of this CustomInfoType. Rules are applied in order that they are specified. Not supported for the `surrogate_type` CustomInfoType.',
      }),
    dictionary: GooglePrivacyDlpV2DictionarySchema.exactOptional().openapi({
      description: 'A list of phrases to detect as a CustomInfoType.',
    }),
    exclusionType: z
      .enum(['EXCLUSION_TYPE_UNSPECIFIED', 'EXCLUSION_TYPE_EXCLUDE'])
      .exactOptional()
      .openapi({
        description:
          'If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching.',
      }),
    infoType: GooglePrivacyDlpV2InfoTypeSchema.exactOptional().openapi({
      description:
        'CustomInfoType can either be a new infoType, or an extension of built-in infoType, when the name matches one of existing infoTypes and that infoType is specified in `InspectContent.info_types` field. Specifying the latter adds findings to the one detected by the system. If built-in info type is not specified in `InspectContent.info_types` list then the name is treated as a custom info type.',
    }),
    likelihood: z
      .enum([
        'LIKELIHOOD_UNSPECIFIED',
        'VERY_UNLIKELY',
        'UNLIKELY',
        'POSSIBLE',
        'LIKELY',
        'VERY_LIKELY',
      ])
      .exactOptional()
      .openapi({
        description:
          'Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria specified by the rule. Defaults to `VERY_LIKELY` if not specified.',
      }),
    regex: GooglePrivacyDlpV2RegexSchema.exactOptional().openapi({
      description: 'Regular expression based CustomInfoType.',
    }),
    storedType: GooglePrivacyDlpV2StoredTypeSchema.exactOptional().openapi({
      description:
        'Load an existing `StoredInfoType` resource for use in `InspectDataSource`. Not currently supported in `InspectContent`.',
    }),
    surrogateType: GooglePrivacyDlpV2SurrogateTypeSchema.exactOptional().openapi({
      description:
        'Message for detecting output from deidentification transformations that support reversing.',
    }),
  })
  .openapi({
    description:
      'Custom information type provided by the user. Used to find domain-specific sensitive information configurable to the data in question.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2CustomInfoType')

const GooglePrivacyDlpV2InfoTypeLimitSchema = z
  .object({
    infoType: GooglePrivacyDlpV2InfoTypeSchema.exactOptional().openapi({
      description:
        'Type of information the findings limit applies to. Only one limit per info_type should be provided. If InfoTypeLimit does not have an info_type, the DLP API applies the limit against all info_types that are found but not specified in another InfoTypeLimit.',
    }),
    maxFindings: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Max findings limit for the given infoType.' }),
  })
  .openapi({
    description:
      'Max findings configuration per infoType, per content item or long running DlpJob.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2InfoTypeLimit')

const GooglePrivacyDlpV2FindingLimitsSchema = z
  .object({
    maxFindingsPerInfoType: z
      .array(GooglePrivacyDlpV2InfoTypeLimitSchema)
      .exactOptional()
      .openapi({ description: 'Configuration of findings limit given for specified infoTypes.' }),
    maxFindingsPerItem: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Max number of findings that are returned for each item scanned. When set within an InspectContentRequest, this field is ignored. This value isn't a hard limit. If the number of findings for an item reaches this limit, the inspection of that item ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns for the item can be multiple times higher than this value.",
      }),
    maxFindingsPerRequest: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Max number of findings that are returned per request or job. If you set this field in an InspectContentRequest, the resulting maximum value is the value that you set or 3,000, whichever is lower. This value isn't a hard limit. If an inspection reaches this limit, the inspection ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns can be multiple times higher than this value.",
      }),
  })
  .openapi({
    description:
      "Configuration to control the number of findings returned for inspection. This is not used for de-identification or data profiling. When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in RedactImage requests. Otherwise, Cloud DLP returns an error.",
    required: [],
  })
  .openapi('GooglePrivacyDlpV2FindingLimits')

const GooglePrivacyDlpV2ExcludeByHotwordSchema = z
  .object({
    hotwordRegex: GooglePrivacyDlpV2RegexSchema.exactOptional().openapi({
      description: 'Regular expression pattern defining what qualifies as a hotword.',
    }),
    proximity: GooglePrivacyDlpV2ProximitySchema.exactOptional().openapi({
      description:
        'Range of characters within which the entire hotword must reside. The total length of the window cannot exceed 1000 characters. The windowBefore property in proximity should be set to 1 if the hotword needs to be included in a column header.',
    }),
  })
  .openapi({
    description:
      'The rule to exclude findings based on a hotword. For record inspection of tables, column names are considered hotwords. An example of this is to exclude a finding if it belongs to a BigQuery column that matches a specific pattern.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2ExcludeByHotword')

const GooglePrivacyDlpV2ExcludeInfoTypesSchema = z
  .object({
    infoTypes: z
      .array(GooglePrivacyDlpV2InfoTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'InfoType list in ExclusionRule rule drops a finding when it overlaps or contained within with a finding of an infoType from this list. For example, for `InspectionRuleSet.info_types` containing "PHONE_NUMBER"` and `exclusion_rule` containing `exclude_info_types.info_types` with "EMAIL_ADDRESS" the phone number findings are dropped if they overlap with EMAIL_ADDRESS finding. That leads to "555-222-2222@example.org" to generate only a single finding, namely email address.',
      }),
  })
  .openapi({ description: 'List of excluded infoTypes.', required: [] })
  .openapi('GooglePrivacyDlpV2ExcludeInfoTypes')

const GooglePrivacyDlpV2ExclusionRuleSchema = z
  .object({
    dictionary: GooglePrivacyDlpV2DictionarySchema.exactOptional().openapi({
      description: 'Dictionary which defines the rule.',
    }),
    excludeByHotword: GooglePrivacyDlpV2ExcludeByHotwordSchema.exactOptional().openapi({
      description:
        'Drop if the hotword rule is contained in the proximate context. For tabular data, the context includes the column name.',
    }),
    excludeInfoTypes: GooglePrivacyDlpV2ExcludeInfoTypesSchema.exactOptional().openapi({
      description: 'Set of infoTypes for which findings would affect this rule.',
    }),
    matchingType: z
      .enum([
        'MATCHING_TYPE_UNSPECIFIED',
        'MATCHING_TYPE_FULL_MATCH',
        'MATCHING_TYPE_PARTIAL_MATCH',
        'MATCHING_TYPE_INVERSE_MATCH',
      ])
      .exactOptional()
      .openapi({
        description: 'How the rule is applied, see MatchingType documentation for details.',
      }),
    regex: GooglePrivacyDlpV2RegexSchema.exactOptional().openapi({
      description: 'Regular expression which defines the rule.',
    }),
  })
  .openapi({
    description:
      'The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2ExclusionRule')

const GooglePrivacyDlpV2InspectionRuleSchema = z
  .object({
    exclusionRule: GooglePrivacyDlpV2ExclusionRuleSchema.exactOptional().openapi({
      description: 'Exclusion rule.',
    }),
    hotwordRule: GooglePrivacyDlpV2HotwordRuleSchema.exactOptional().openapi({
      description: 'Hotword-based detection rule.',
    }),
  })
  .openapi({
    description:
      'A single inspection rule to be applied to infoTypes, specified in `InspectionRuleSet`.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2InspectionRule')

const GooglePrivacyDlpV2InspectionRuleSetSchema = z
  .object({
    infoTypes: z
      .array(GooglePrivacyDlpV2InfoTypeSchema)
      .exactOptional()
      .openapi({ description: 'List of infoTypes this rule set is applied to.' }),
    rules: z
      .array(GooglePrivacyDlpV2InspectionRuleSchema)
      .exactOptional()
      .openapi({
        description: 'Set of rules to be applied to infoTypes. The rules are applied in order.',
      }),
  })
  .openapi({
    description:
      'Rule set for modifying a set of infoTypes to alter behavior under certain circumstances, depending on the specific details of the rules within the set.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2InspectionRuleSet')

const GooglePrivacyDlpV2InspectConfigSchema = z
  .object({
    contentOptions: z
      .array(z.enum(['CONTENT_UNSPECIFIED', 'CONTENT_TEXT', 'CONTENT_IMAGE']))
      .exactOptional()
      .openapi({ description: 'Deprecated and unused.' }),
    customInfoTypes: z
      .array(GooglePrivacyDlpV2CustomInfoTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'CustomInfoTypes provided by the user. See https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more.',
      }),
    excludeInfoTypes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, excludes type information of the findings. This is not used for data profiling.',
      }),
    includeQuote: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, a contextual quote from the data that triggered a finding is included in the response; see Finding.quote. This is not used for data profiling.',
      }),
    infoTypes: z
      .array(GooglePrivacyDlpV2InfoTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'Restricts what info_types to look for. The values must correspond to InfoType values returned by ListInfoTypes or listed at https://cloud.google.com/dlp/docs/infotypes-reference. When no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. If you need precise control and predictability as to what detectors are run you should specify specific InfoTypes listed in the reference, otherwise a default list will be used, which may change over time.',
      }),
    limits: GooglePrivacyDlpV2FindingLimitsSchema.exactOptional().openapi({
      description:
        "Configuration to control the number of findings returned. This is not used for data profiling. When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in RedactImage requests. Otherwise, Cloud DLP returns an error. When set within an InspectJobConfig, the specified maximum values aren't hard limits. If an inspection job reaches these limits, the job ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns can be multiple times higher than these maximum values.",
    }),
    minLikelihood: z
      .enum([
        'LIKELIHOOD_UNSPECIFIED',
        'VERY_UNLIKELY',
        'UNLIKELY',
        'POSSIBLE',
        'LIKELY',
        'VERY_LIKELY',
      ])
      .exactOptional()
      .openapi({
        description:
          'Only returns findings equal or above this threshold. The default is POSSIBLE. See https://cloud.google.com/dlp/docs/likelihood to learn more.',
      }),
    ruleSet: z
      .array(GooglePrivacyDlpV2InspectionRuleSetSchema)
      .exactOptional()
      .openapi({
        description:
          'Set of rules to apply to the findings for this InspectConfig. Exclusion rules, contained in the set are executed in the end, other rules are executed in the order they are specified for each info type.',
      }),
  })
  .openapi({
    description:
      'Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2InspectConfig')

const GooglePrivacyDlpV2KindExpressionSchema = z
  .object({ name: z.string().exactOptional().openapi({ description: 'The name of the kind.' }) })
  .openapi({ description: 'A representation of a Datastore kind.', required: [] })
  .openapi('GooglePrivacyDlpV2KindExpression')

const GooglePrivacyDlpV2DatastoreOptionsSchema = z
  .object({
    kind: GooglePrivacyDlpV2KindExpressionSchema.exactOptional().openapi({
      description: 'The kind to process.',
    }),
    partitionId: GooglePrivacyDlpV2PartitionIdSchema.exactOptional().openapi({
      description:
        'A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty.',
    }),
  })
  .openapi({
    description: 'Options defining a data set within Google Cloud Datastore.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2DatastoreOptions')

const GooglePrivacyDlpV2TableOptionsSchema = z
  .object({
    identifyingFields: z
      .array(GooglePrivacyDlpV2FieldIdSchema)
      .exactOptional()
      .openapi({
        description:
          "The columns that are the primary keys for table objects included in ContentItem. A copy of this cell's value will stored alongside alongside each finding so that the finding can be traced to the specific row it came from. No more than 3 may be provided.",
      }),
  })
  .openapi({
    description: 'Instructions regarding the table content being inspected.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2TableOptions')

const GooglePrivacyDlpV2HybridOptionsSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short description of where the data is coming from. Will be stored once in the job. 256 max length.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'To organize findings, these labels will be added to each finding. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"`',
      }),
    requiredFindingLabelKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "These are labels that each inspection request must include within their 'finding_labels' map. Request may contain others, but any missing one of these will be rejected. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. No more than 10 keys can be required.",
      }),
    tableOptions: GooglePrivacyDlpV2TableOptionsSchema.exactOptional().openapi({
      description:
        'If the container is a table, additional information to make findings meaningful such as the columns that are primary keys.',
    }),
  })
  .openapi({
    description:
      'Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2HybridOptions')

const GooglePrivacyDlpV2TimespanConfigSchema = z
  .object({
    enableAutoPopulationOfTimespanConfig: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When the job is started by a JobTrigger we will automatically figure out a valid start_time to avoid scanning files that have not been modified since the last time the JobTrigger executed. This will be based on the time of the execution of the last run of the JobTrigger or the timespan end_time used in the last run of the JobTrigger.',
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Exclude files, tables, or rows newer than this value. If not set, no upper time limit is applied.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Exclude files, tables, or rows older than this value. If not set, no lower time limit is applied.',
      }),
    timestampField: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description:
        'Specification of the field containing the timestamp of scanned items. Used for data sources like Datastore and BigQuery. *For BigQuery* If this value is not specified and the table was modified between the given start and end times, the entire table will be scanned. If this value is specified, then rows are filtered based on the given start and end times. Rows with a `NULL` value in the provided BigQuery column are skipped. Valid data types of the provided BigQuery column are: `INTEGER`, `DATE`, `TIMESTAMP`, and `DATETIME`. If your BigQuery table is [partitioned at ingestion time](https://cloud.google.com/bigquery/docs/partitioned-tables#ingestion_time), you can use any of the following pseudo-columns as your timestamp field. When used with Cloud DLP, these pseudo-column names are case sensitive. - _PARTITIONTIME - _PARTITIONDATE - _PARTITION_LOAD_TIME *For Datastore* If this value is specified, then entities are filtered based on the given start and end times. If an entity does not contain the provided timestamp property or contains empty or invalid values, then it is included. Valid data types of the provided timestamp property are: `TIMESTAMP`. See the [known issue](https://cloud.google.com/dlp/docs/known-issues#bq-timespan) related to this operation.',
    }),
  })
  .openapi({
    description:
      'Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Cloud Storage and BigQuery.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2TimespanConfig')

const GooglePrivacyDlpV2StorageConfigSchema = z
  .object({
    bigQueryOptions: GooglePrivacyDlpV2BigQueryOptionsSchema.exactOptional().openapi({
      description: 'BigQuery options.',
    }),
    cloudStorageOptions: GooglePrivacyDlpV2CloudStorageOptionsSchema.exactOptional().openapi({
      description: 'Cloud Storage options.',
    }),
    datastoreOptions: GooglePrivacyDlpV2DatastoreOptionsSchema.exactOptional().openapi({
      description: 'Google Cloud Datastore options.',
    }),
    hybridOptions: GooglePrivacyDlpV2HybridOptionsSchema.exactOptional().openapi({
      description: 'Hybrid inspection options.',
    }),
    timespanConfig: GooglePrivacyDlpV2TimespanConfigSchema.exactOptional(),
  })
  .openapi({ description: 'Shared message indicating Cloud storage type.', required: [] })
  .openapi('GooglePrivacyDlpV2StorageConfig')

const GooglePrivacyDlpV2InspectJobConfigSchema = z
  .object({
    actions: z
      .array(GooglePrivacyDlpV2ActionSchema)
      .exactOptional()
      .openapi({ description: 'Actions to execute at the completion of the job.' }),
    inspectConfig: GooglePrivacyDlpV2InspectConfigSchema.exactOptional().openapi({
      description: 'How and what to scan for.',
    }),
    inspectTemplateName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template.',
      }),
    storageConfig: GooglePrivacyDlpV2StorageConfigSchema.exactOptional().openapi({
      description: 'The data to scan.',
    }),
  })
  .openapi({ description: 'Controls what and how to inspect for findings.', required: [] })
  .openapi('GooglePrivacyDlpV2InspectJobConfig')

const GooglePrivacyDlpV2CreateDlpJobRequestSchema = z
  .object({
    inspectJob: GooglePrivacyDlpV2InspectJobConfigSchema.exactOptional().openapi({
      description: 'An inspection job scans a storage repository for InfoTypes.',
    }),
    jobId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The job id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field has no effect.' }),
    riskJob: GooglePrivacyDlpV2RiskAnalysisJobConfigSchema.exactOptional().openapi({
      description:
        'A risk analysis job calculates re-identification risk metrics for a BigQuery table.',
    }),
  })
  .openapi({
    description:
      'Request message for CreateDlpJobRequest. Used to initiate long running jobs such as calculating risk metrics or inspecting Google Cloud Storage.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2CreateDlpJobRequest')

const GooglePrivacyDlpV2InspectTemplateSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The creation timestamp of an inspectTemplate.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Short description (max 256 chars).' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name (max 256 chars).' }),
    inspectConfig: GooglePrivacyDlpV2InspectConfigSchema.exactOptional().openapi({
      description: 'The core content of the template. Configuration of the scanning process.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`;',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The last update timestamp of an inspectTemplate.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2InspectTemplate')

const GooglePrivacyDlpV2CreateInspectTemplateRequestSchema = z
  .object({
    inspectTemplate: GooglePrivacyDlpV2InspectTemplateSchema.exactOptional().openapi({
      description: 'Required. The InspectTemplate to create.',
    }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field has no effect.' }),
    templateId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.',
      }),
  })
  .openapi({ description: 'Request message for CreateInspectTemplate.', required: [] })
  .openapi('GooglePrivacyDlpV2CreateInspectTemplateRequest')

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
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('GoogleRpcStatus')

const GooglePrivacyDlpV2ErrorSchema = z
  .object({
    details: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'Detailed error codes and messages.',
    }),
    timestamps: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The times the error occurred.' }),
  })
  .openapi({
    description:
      'Details information about an error encountered during job execution or the results of an unsuccessful activation of the JobTrigger.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2Error')

const GooglePrivacyDlpV2ManualSchema = z
  .object({})
  .openapi({
    description: 'Job trigger option for hybrid jobs. Jobs must be manually created and finished.',
  })
  .openapi('GooglePrivacyDlpV2Manual')

const GooglePrivacyDlpV2ScheduleSchema = z
  .object({
    recurrencePeriodDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'With this option a job is started on a regular periodic basis. For example: every day (86400 seconds). A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs. This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days.',
      }),
  })
  .openapi({ description: 'Schedule for inspect job triggers.', required: [] })
  .openapi('GooglePrivacyDlpV2Schedule')

const GooglePrivacyDlpV2TriggerSchema = z
  .object({
    manual: GooglePrivacyDlpV2ManualSchema.exactOptional().openapi({
      description: 'For use with hybrid jobs. Jobs must be manually created and finished.',
    }),
    schedule: GooglePrivacyDlpV2ScheduleSchema.exactOptional().openapi({
      description: 'Create a job on a repeating basis based on the elapse of time.',
    }),
  })
  .openapi({ description: 'What event needs to occur for a new job to be started.', required: [] })
  .openapi('GooglePrivacyDlpV2Trigger')

const GooglePrivacyDlpV2JobTriggerSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The creation timestamp of a triggeredJob.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'User provided description (max 256 chars)' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name (max 100 chars)' }),
    errors: z
      .array(GooglePrivacyDlpV2ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. A stream of errors encountered when the trigger was activated. Repeated errors may result in the JobTrigger automatically being paused. Will return the last 100 errors. Whenever the JobTrigger is modified this list will be cleared.',
        readOnly: true,
      }),
    inspectJob: GooglePrivacyDlpV2InspectJobConfigSchema.exactOptional().openapi({
      description: 'For inspect jobs, a snapshot of the configuration.',
    }),
    lastRunTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp of the last time this trigger executed.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique resource name for the triggeredJob, assigned by the service when the triggeredJob is created, for example `projects/dlp-test-project/jobTriggers/53234423`.',
      }),
    status: z
      .enum(['STATUS_UNSPECIFIED', 'HEALTHY', 'PAUSED', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'Required. A status for this trigger.' }),
    triggers: z
      .array(GooglePrivacyDlpV2TriggerSchema)
      .exactOptional()
      .openapi({
        description:
          "A list of triggers which will be OR'ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object.",
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The last update timestamp of a triggeredJob.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2JobTrigger')

const GooglePrivacyDlpV2CreateJobTriggerRequestSchema = z
  .object({
    jobTrigger: GooglePrivacyDlpV2JobTriggerSchema.exactOptional().openapi({
      description: 'Required. The JobTrigger to create.',
    }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field has no effect.' }),
    triggerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The trigger id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.',
      }),
  })
  .openapi({ description: 'Request message for CreateJobTrigger.', required: [] })
  .openapi('GooglePrivacyDlpV2CreateJobTriggerRequest')

const GooglePrivacyDlpV2LargeCustomDictionaryConfigSchema = z
  .object({
    bigQueryField: GooglePrivacyDlpV2BigQueryFieldSchema.exactOptional().openapi({
      description: 'Field in a BigQuery table where each cell represents a dictionary phrase.',
    }),
    cloudStorageFileSet: GooglePrivacyDlpV2CloudStorageFileSetSchema.exactOptional().openapi({
      description: 'Set of files containing newline-delimited lists of dictionary phrases.',
    }),
    outputPath: GooglePrivacyDlpV2CloudStoragePathSchema.exactOptional().openapi({
      description:
        'Location to store dictionary artifacts in Cloud Storage. These files will only be accessible by project owners and the DLP API. If any of these artifacts are modified, the dictionary is considered invalid and can no longer be used.',
    }),
  })
  .openapi({
    description:
      'Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/dlp/limits) page. The artifacts of dictionary creation are stored in the specified Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2LargeCustomDictionaryConfig')

const GooglePrivacyDlpV2StoredInfoTypeConfigSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the StoredInfoType (max 256 characters).' }),
    dictionary: GooglePrivacyDlpV2DictionarySchema.exactOptional().openapi({
      description: 'Store dictionary-based CustomInfoType.',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name of the StoredInfoType (max 256 characters).' }),
    largeCustomDictionary:
      GooglePrivacyDlpV2LargeCustomDictionaryConfigSchema.exactOptional().openapi({
        description: 'StoredInfoType where findings are defined by a dictionary of phrases.',
      }),
    regex: GooglePrivacyDlpV2RegexSchema.exactOptional().openapi({
      description: 'Store regular expression-based StoredInfoType.',
    }),
  })
  .openapi({
    description:
      'Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2StoredInfoTypeConfig')

const GooglePrivacyDlpV2CreateStoredInfoTypeRequestSchema = z
  .object({
    config: GooglePrivacyDlpV2StoredInfoTypeConfigSchema.exactOptional().openapi({
      description: 'Required. Configuration of the storedInfoType to create.',
    }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field has no effect.' }),
    storedInfoTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.',
      }),
  })
  .openapi({ description: 'Request message for CreateStoredInfoType.', required: [] })
  .openapi('GooglePrivacyDlpV2CreateStoredInfoTypeRequest')

const GooglePrivacyDlpV2ExportSchema = z
  .object({
    profileTable: GooglePrivacyDlpV2BigQueryTableSchema.exactOptional().openapi({
      description:
        'Store all table and column profiles in an existing table or a new table in an existing dataset. Each re-generation will result in a new row in BigQuery.',
    }),
  })
  .openapi({
    description:
      'If set, the detailed data profiles will be persisted to the location of your choice whenever updated.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2Export')

const GooglePrivacyDlpV2PubSubConditionSchema = z
  .object({
    minimumRiskScore: z
      .enum(['PROFILE_SCORE_BUCKET_UNSPECIFIED', 'HIGH', 'MEDIUM_OR_HIGH'])
      .exactOptional()
      .openapi({ description: 'The minimum data risk score that triggers the condition.' }),
    minimumSensitivityScore: z
      .enum(['PROFILE_SCORE_BUCKET_UNSPECIFIED', 'HIGH', 'MEDIUM_OR_HIGH'])
      .exactOptional()
      .openapi({ description: 'The minimum sensitivity level that triggers the condition.' }),
  })
  .openapi({ description: 'A condition consisting of a value.', required: [] })
  .openapi('GooglePrivacyDlpV2PubSubCondition')

const GooglePrivacyDlpV2PubSubExpressionsSchema = z
  .object({
    conditions: z
      .array(GooglePrivacyDlpV2PubSubConditionSchema)
      .exactOptional()
      .openapi({ description: 'Conditions to apply to the expression.' }),
    logicalOperator: z
      .enum(['LOGICAL_OPERATOR_UNSPECIFIED', 'OR', 'AND'])
      .exactOptional()
      .openapi({ description: 'The operator to apply to the collection of conditions.' }),
  })
  .openapi({
    description: 'An expression, consisting of an operator and conditions.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2PubSubExpressions')

const GooglePrivacyDlpV2DataProfilePubSubConditionSchema = z
  .object({
    expressions: GooglePrivacyDlpV2PubSubExpressionsSchema.exactOptional().openapi({
      description: 'An expression.',
    }),
  })
  .openapi({
    description: 'A condition for determining whether a Pub/Sub should be triggered.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2DataProfilePubSubCondition')

const GooglePrivacyDlpV2PubSubNotificationSchema = z
  .object({
    detailOfMessage: z
      .enum(['DETAIL_LEVEL_UNSPECIFIED', 'TABLE_PROFILE', 'RESOURCE_NAME'])
      .exactOptional()
      .openapi({
        description:
          'How much data to include in the Pub/Sub message. If the user wishes to limit the size of the message, they can use resource_name and fetch the profile fields they wish to. Per table profile (not per column).',
      }),
    event: z
      .enum([
        'EVENT_TYPE_UNSPECIFIED',
        'NEW_PROFILE',
        'CHANGED_PROFILE',
        'SCORE_INCREASED',
        'ERROR_CHANGED',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of event that triggers a Pub/Sub. At most one `PubSubNotification` per EventType is permitted.',
      }),
    pubsubCondition: GooglePrivacyDlpV2DataProfilePubSubConditionSchema.exactOptional().openapi({
      description: 'Conditions (e.g., data risk or sensitivity level) for triggering a Pub/Sub.',
    }),
    topic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cloud Pub/Sub topic to send notifications to. Format is projects/{project}/topics/{topic}.',
      }),
  })
  .openapi({
    description:
      'Send a Pub/Sub message into the given Pub/Sub topic to connect other systems to data profile generation. The message payload data will be the byte serialization of `DataProfilePubSubMessage`.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2PubSubNotification')

const GooglePrivacyDlpV2DataProfileActionSchema = z
  .object({
    exportData: GooglePrivacyDlpV2ExportSchema.exactOptional().openapi({
      description: 'Export data profiles into a provided location.',
    }),
    pubSubNotification: GooglePrivacyDlpV2PubSubNotificationSchema.exactOptional().openapi({
      description: 'Publish a message into the Pub/Sub topic.',
    }),
  })
  .openapi({
    description: 'A task to execute when a data profile has been generated.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2DataProfileAction')

const GooglePrivacyDlpV2DataProfileLocationSchema = z
  .object({
    folderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the Folder within an organization to scan.' }),
    organizationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of an organization to scan.' }),
  })
  .openapi({ description: 'The data that will be profiled.', required: [] })
  .openapi('GooglePrivacyDlpV2DataProfileLocation')

const GooglePrivacyDlpV2DataProfileJobConfigSchema = z
  .object({
    dataProfileActions: z
      .array(GooglePrivacyDlpV2DataProfileActionSchema)
      .exactOptional()
      .openapi({ description: 'Actions to execute at the completion of the job.' }),
    inspectTemplates: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Detection logic for profile generation. Not all template features are used by profiles. FindingLimits, include_quote and exclude_info_types have no impact on data profiling. Multiple templates may be provided if there is data in multiple regions. At most one template must be specified per-region (including "global"). Each region is scanned using the applicable template. If no region-specific template is specified, but a "global" template is specified, it will be copied to that region and used instead. If no global or region-specific template is provided for a region with data, that region\'s data will not be scanned. For more information, see https://cloud.google.com/dlp/docs/data-profiles#data_residency.',
      }),
    location: GooglePrivacyDlpV2DataProfileLocationSchema.exactOptional().openapi({
      description: 'The data to scan.',
    }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The project that will run the scan. The DLP service account that exists within this project must have access to all resources that are profiled, and the Cloud DLP API must be enabled.',
      }),
  })
  .openapi({
    description:
      'Configuration for setting up a job to scan resources for profile generation. Only one data profile configuration may exist per organization, folder, or project. The generated data profiles are retained according to the [data retention policy] (https://cloud.google.com/dlp/docs/data-profiles#retention).',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2DataProfileJobConfig')

const GooglePrivacyDlpV2DataProfileConfigSnapshotSchema = z
  .object({
    dataProfileJob: GooglePrivacyDlpV2DataProfileJobConfigSchema.exactOptional().openapi({
      description: 'A copy of the configuration used to generate this profile.',
    }),
    inspectConfig: GooglePrivacyDlpV2InspectConfigSchema.exactOptional().openapi({
      description:
        'A copy of the inspection config used to generate this profile. This is a copy of the inspect_template specified in `DataProfileJobConfig`.',
    }),
  })
  .openapi({
    description: 'Snapshot of the configurations used to generate the profile.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2DataProfileConfigSnapshot')

const GooglePrivacyDlpV2DataRiskLevelSchema = z
  .object({
    score: z
      .enum(['RISK_SCORE_UNSPECIFIED', 'RISK_LOW', 'RISK_MODERATE', 'RISK_HIGH'])
      .exactOptional()
      .openapi({ description: 'The score applied to the resource.' }),
  })
  .openapi({
    description:
      'Score is a summary of all elements in the data profile. A higher number means more risk.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2DataRiskLevel')

const GooglePrivacyDlpV2OtherInfoTypeSummarySchema = z
  .object({
    estimatedPrevalence: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Approximate percentage of non-null rows that contained data detected by this infotype.',
      }),
    infoType: GooglePrivacyDlpV2InfoTypeSchema.exactOptional().openapi({
      description: 'The other infoType.',
    }),
  })
  .openapi({
    description: 'Infotype details for other infoTypes found within a column.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2OtherInfoTypeSummary')

const GooglePrivacyDlpV2InfoTypeSummarySchema = z
  .object({
    estimatedPrevalence: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Not populated for predicted infotypes.' }),
    infoType: GooglePrivacyDlpV2InfoTypeSchema.exactOptional().openapi({
      description: 'The infoType.',
    }),
  })
  .openapi({ description: 'The infoType details for this column.', required: [] })
  .openapi('GooglePrivacyDlpV2InfoTypeSummary')

const GooglePrivacyDlpV2ProfileStatusSchema = z
  .object({
    status: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'Profiling status code and optional message',
    }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the profile generation status was updated' }),
  })
  .openapi({ required: [] })
  .openapi('GooglePrivacyDlpV2ProfileStatus')

const GooglePrivacyDlpV2SensitivityScoreSchema = z
  .object({
    score: z
      .enum([
        'SENSITIVITY_SCORE_UNSPECIFIED',
        'SENSITIVITY_LOW',
        'SENSITIVITY_MODERATE',
        'SENSITIVITY_HIGH',
      ])
      .exactOptional()
      .openapi({ description: 'The score applied to the resource.' }),
  })
  .openapi({
    description:
      'Score is a summary of all elements in the data profile. A higher number means more sensitive.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2SensitivityScore')

const GooglePrivacyDlpV2TableDataProfileSchema = z
  .object({
    configSnapshot: GooglePrivacyDlpV2DataProfileConfigSnapshotSchema.exactOptional().openapi({
      description: 'The snapshot of the configurations used to generate the profile.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the table was created.' }),
    dataRiskLevel: GooglePrivacyDlpV2DataRiskLevelSchema.exactOptional().openapi({
      description: 'The data risk level of this table.',
    }),
    datasetId: z.string().exactOptional().openapi({ description: 'The BigQuery dataset ID.' }),
    datasetLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The BigQuery location where the dataset's data is stored. See https://cloud.google.com/bigquery/docs/locations for supported locations.",
      }),
    datasetProjectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The GCP project ID that owns the BigQuery dataset.' }),
    encryptionStatus: z
      .enum([
        'ENCRYPTION_STATUS_UNSPECIFIED',
        'ENCRYPTION_GOOGLE_MANAGED',
        'ENCRYPTION_CUSTOMER_MANAGED',
      ])
      .exactOptional()
      .openapi({ description: 'How the table is encrypted.' }),
    expirationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The time when this table expires.' }),
    failedColumnCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of columns skipped in the table because of an error.' }),
    fullResource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the table. https://cloud.google.com/apis/design/resource_names#full_resource_name',
      }),
    lastModifiedTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when this table was last modified' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the profile.' }),
    otherInfoTypes: z
      .array(GooglePrivacyDlpV2OtherInfoTypeSummarySchema)
      .exactOptional()
      .openapi({ description: "Other infoTypes found in this table's data." }),
    predictedInfoTypes: z
      .array(GooglePrivacyDlpV2InfoTypeSummarySchema)
      .exactOptional()
      .openapi({ description: "The infoTypes predicted from this table's data." }),
    profileLastGenerated: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last time the profile was generated.' }),
    profileStatus: GooglePrivacyDlpV2ProfileStatusSchema.exactOptional().openapi({
      description:
        'Success or error status from the most recent profile generation attempt. May be empty if the profile is still being generated.',
    }),
    projectDataProfile: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resource name to the project data profile for this table.' }),
    resourceLabels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'The labels applied to the resource at the time the profile was generated.',
      }),
    resourceVisibility: z
      .enum([
        'RESOURCE_VISIBILITY_UNSPECIFIED',
        'RESOURCE_VISIBILITY_PUBLIC',
        'RESOURCE_VISIBILITY_RESTRICTED',
      ])
      .exactOptional()
      .openapi({ description: 'How broadly a resource has been shared.' }),
    rowCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of rows in the table when the profile was generated. This will not be populated for BigLake tables.',
      }),
    scannedColumnCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of columns profiled in the table.' }),
    sensitivityScore: GooglePrivacyDlpV2SensitivityScoreSchema.exactOptional().openapi({
      description: 'The sensitivity score of this table.',
    }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'RUNNING', 'DONE'])
      .exactOptional()
      .openapi({ description: 'State of a profile.' }),
    tableId: z.string().exactOptional().openapi({ description: 'The BigQuery table ID.' }),
    tableSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The size of the table when the profile was generated.' }),
  })
  .openapi({ description: 'The profile for a scanned table.', required: [] })
  .openapi('GooglePrivacyDlpV2TableDataProfile')

const GooglePrivacyDlpV2DataProfilePubSubMessageSchema = z
  .object({
    event: z
      .enum([
        'EVENT_TYPE_UNSPECIFIED',
        'NEW_PROFILE',
        'CHANGED_PROFILE',
        'SCORE_INCREASED',
        'ERROR_CHANGED',
      ])
      .exactOptional()
      .openapi({ description: 'The event that caused the Pub/Sub message to be sent.' }),
    profile: GooglePrivacyDlpV2TableDataProfileSchema.exactOptional().openapi({
      description:
        'If `DetailLevel` is `TABLE_PROFILE` this will be fully populated. Otherwise, if `DetailLevel` is `RESOURCE_NAME`, then only `name` and `full_resource` will be populated.',
    }),
  })
  .openapi({
    description:
      'Pub/Sub topic message for a DataProfileAction.PubSubNotification event. To receive a message of protocol buffer schema type, convert the message data to an object of this proto class.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2DataProfilePubSubMessage')

const GooglePrivacyDlpV2TimeZoneSchema = z
  .object({
    offsetMinutes: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Set only if the offset can be determined. Positive for time ahead of UTC. E.g. For "UTC-9", this value is -540.',
      }),
  })
  .openapi({ description: 'Time zone of the date time object.', required: [] })
  .openapi('GooglePrivacyDlpV2TimeZone')

const GooglePrivacyDlpV2DateTimeSchema = z
  .object({
    date: GoogleTypeDateSchema.exactOptional().openapi({
      description: 'One or more of the following must be set. Must be a valid date or time value.',
    }),
    dayOfWeek: z
      .enum([
        'DAY_OF_WEEK_UNSPECIFIED',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
      ])
      .exactOptional()
      .openapi({ description: 'Day of week' }),
    time: GoogleTypeTimeOfDaySchema.exactOptional().openapi({ description: 'Time of day' }),
    timeZone: GooglePrivacyDlpV2TimeZoneSchema.exactOptional().openapi({
      description: 'Time zone',
    }),
  })
  .openapi({
    description: 'Message for a date time object. e.g. 2018-01-01, 5th August.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2DateTime')

const GooglePrivacyDlpV2DeidentifyContentRequestSchema = z
  .object({
    deidentifyConfig: GooglePrivacyDlpV2DeidentifyConfigSchema.exactOptional().openapi({
      description:
        'Configuration for the de-identification of the content item. Items specified here will override the template referenced by the deidentify_template_name argument.',
    }),
    deidentifyTemplateName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Template to use. Any configuration directly specified in deidentify_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.',
      }),
    inspectConfig: GooglePrivacyDlpV2InspectConfigSchema.exactOptional().openapi({
      description:
        'Configuration for the inspector. Items specified here will override the template referenced by the inspect_template_name argument.',
    }),
    inspectTemplateName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.',
      }),
    item: GooglePrivacyDlpV2ContentItemSchema.exactOptional().openapi({
      description:
        'The item to de-identify. Will be treated as text. This value must be of type Table if your deidentify_config is a RecordTransformations object.',
    }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field has no effect.' }),
  })
  .openapi({ description: 'Request to de-identify a ContentItem.', required: [] })
  .openapi('GooglePrivacyDlpV2DeidentifyContentRequest')

const GooglePrivacyDlpV2SummaryResultSchema = z
  .object({
    code: z
      .enum(['TRANSFORMATION_RESULT_CODE_UNSPECIFIED', 'SUCCESS', 'ERROR'])
      .exactOptional()
      .openapi({ description: 'Outcome of the transformation.' }),
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of transformations counted by this result.' }),
    details: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A place for warnings or errors to show up if a transformation didn't work as expected.",
      }),
  })
  .openapi({
    description:
      'A collection that informs the user the number of times a particular `TransformationResultCode` and error details occurred.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2SummaryResult')

const GooglePrivacyDlpV2TransformationSummarySchema = z
  .object({
    field: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description: 'Set if the transformation was limited to a specific FieldId.',
    }),
    fieldTransformations: z
      .array(GooglePrivacyDlpV2FieldTransformationSchema)
      .exactOptional()
      .openapi({
        description:
          'The field transformation that was applied. If multiple field transformations are requested for a single field, this list will contain all of them; otherwise, only one is supplied.',
      }),
    infoType: GooglePrivacyDlpV2InfoTypeSchema.exactOptional().openapi({
      description: 'Set if the transformation was limited to a specific InfoType.',
    }),
    recordSuppress: GooglePrivacyDlpV2RecordSuppressionSchema.exactOptional().openapi({
      description: 'The specific suppression option these stats apply to.',
    }),
    results: z
      .array(GooglePrivacyDlpV2SummaryResultSchema)
      .exactOptional()
      .openapi({
        description: 'Collection of all transformations that took place or had an error.',
      }),
    transformation: GooglePrivacyDlpV2PrimitiveTransformationSchema.exactOptional().openapi({
      description: 'The specific transformation these stats apply to.',
    }),
    transformedBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total size in bytes that were transformed in some way.' }),
  })
  .openapi({
    description:
      "Summary of a single transformation. Only one of 'transformation', 'field_transformation', or 'record_suppress' will be set.",
    required: [],
  })
  .openapi('GooglePrivacyDlpV2TransformationSummary')

const GooglePrivacyDlpV2TransformationOverviewSchema = z
  .object({
    transformationSummaries: z
      .array(GooglePrivacyDlpV2TransformationSummarySchema)
      .exactOptional()
      .openapi({ description: 'Transformations applied to the dataset.' }),
    transformedBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total size in bytes that were transformed in some way.' }),
  })
  .openapi({ description: 'Overview of the modifications that occurred.', required: [] })
  .openapi('GooglePrivacyDlpV2TransformationOverview')

const GooglePrivacyDlpV2DeidentifyContentResponseSchema = z
  .object({
    item: GooglePrivacyDlpV2ContentItemSchema.exactOptional().openapi({
      description: 'The de-identified item.',
    }),
    overview: GooglePrivacyDlpV2TransformationOverviewSchema.exactOptional().openapi({
      description: 'An overview of the changes that were made on the `item`.',
    }),
  })
  .openapi({ description: 'Results of de-identifying a ContentItem.', required: [] })
  .openapi('GooglePrivacyDlpV2DeidentifyContentResponse')

const GooglePrivacyDlpV2RequestedOptionsSchema = z
  .object({
    jobConfig: GooglePrivacyDlpV2InspectJobConfigSchema.exactOptional().openapi({
      description: 'Inspect config.',
    }),
    snapshotInspectTemplate: GooglePrivacyDlpV2InspectTemplateSchema.exactOptional().openapi({
      description:
        'If run with an InspectTemplate, a snapshot of its state at the time of this run.',
    }),
  })
  .openapi({ description: 'Snapshot of the inspection configuration.', required: [] })
  .openapi('GooglePrivacyDlpV2RequestedOptions')

const GooglePrivacyDlpV2HybridInspectStatisticsSchema = z
  .object({
    abortedCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of hybrid inspection requests aborted because the job ran out of quota or was ended before they could be processed.',
      }),
    pendingCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of hybrid requests currently being processed. Only populated when called via method `getDlpJob`. A burst of traffic may cause hybrid inspect requests to be enqueued. Processing will take place as quickly as possible, but resource limitations may impact how long a request is enqueued for.',
      }),
    processedCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of hybrid inspection requests processed within this job.',
      }),
  })
  .openapi({
    description: 'Statistics related to processing hybrid inspect requests.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2HybridInspectStatistics')

const GooglePrivacyDlpV2InfoTypeStatsSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of findings for this infoType.' }),
    infoType: GooglePrivacyDlpV2InfoTypeSchema.exactOptional().openapi({
      description: 'The type of finding this stat is for.',
    }),
  })
  .openapi({ description: 'Statistics regarding a specific InfoType.', required: [] })
  .openapi('GooglePrivacyDlpV2InfoTypeStats')

const GooglePrivacyDlpV2ResultSchema = z
  .object({
    hybridStats: GooglePrivacyDlpV2HybridInspectStatisticsSchema.exactOptional().openapi({
      description: 'Statistics related to the processing of hybrid inspect.',
    }),
    infoTypeStats: z
      .array(GooglePrivacyDlpV2InfoTypeStatsSchema)
      .exactOptional()
      .openapi({
        description:
          'Statistics of how many instances of each info type were found during inspect job.',
      }),
    processedBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total size in bytes that were processed.' }),
    totalEstimatedBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Estimate of the number of bytes to process.' }),
  })
  .openapi({
    description: 'All result fields mentioned below are updated while the job is processing.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2Result')

const GooglePrivacyDlpV2InspectDataSourceDetailsSchema = z
  .object({
    requestedOptions: GooglePrivacyDlpV2RequestedOptionsSchema.exactOptional().openapi({
      description: 'The configuration used for this job.',
    }),
    result: GooglePrivacyDlpV2ResultSchema.exactOptional().openapi({
      description: 'A summary of the outcome of this inspection job.',
    }),
  })
  .openapi({ description: 'The results of an inspect DataSource job.', required: [] })
  .openapi('GooglePrivacyDlpV2InspectDataSourceDetails')

const GooglePrivacyDlpV2DlpJobSchema = z
  .object({
    actionDetails: z
      .array(GooglePrivacyDlpV2ActionDetailsSchema)
      .exactOptional()
      .openapi({ description: 'Events that should occur after the job has completed.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the job was created.' }),
    endTime: z.string().exactOptional().openapi({ description: 'Time when the job finished.' }),
    errors: z
      .array(GooglePrivacyDlpV2ErrorSchema)
      .exactOptional()
      .openapi({ description: 'A stream of errors encountered running the job.' }),
    inspectDetails: GooglePrivacyDlpV2InspectDataSourceDetailsSchema.exactOptional().openapi({
      description: 'Results from inspecting a data source.',
    }),
    jobTriggerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If created by a job trigger, the resource name of the trigger that instantiated the job.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The server-assigned name.' }),
    riskDetails: GooglePrivacyDlpV2AnalyzeDataSourceRiskDetailsSchema.exactOptional().openapi({
      description: 'Results from analyzing risk of a data source.',
    }),
    startTime: z.string().exactOptional().openapi({ description: 'Time when the job started.' }),
    state: z
      .enum(['JOB_STATE_UNSPECIFIED', 'PENDING', 'RUNNING', 'DONE', 'CANCELED', 'FAILED', 'ACTIVE'])
      .exactOptional()
      .openapi({ description: 'State of a job.' }),
    type: z
      .enum(['DLP_JOB_TYPE_UNSPECIFIED', 'INSPECT_JOB', 'RISK_ANALYSIS_JOB'])
      .exactOptional()
      .openapi({ description: 'The type of job.' }),
  })
  .openapi({ description: 'Combines all of the information about a DLP job.', required: [] })
  .openapi('GooglePrivacyDlpV2DlpJob')

const GooglePrivacyDlpV2RangeSchema = z
  .object({
    end: z
      .string()
      .exactOptional()
      .openapi({ description: 'Index of the last character of the range (exclusive).' }),
    start: z
      .string()
      .exactOptional()
      .openapi({ description: 'Index of the first character of the range (inclusive).' }),
  })
  .openapi({ description: 'Generic half-open interval [start, end)', required: [] })
  .openapi('GooglePrivacyDlpV2Range')

const GooglePrivacyDlpV2LocationSchema = z
  .object({
    byteRange: GooglePrivacyDlpV2RangeSchema.exactOptional().openapi({
      description:
        "Zero-based byte offsets delimiting the finding. These are relative to the finding's containing element. Note that when the content is not textual, this references the UTF-8 encoded textual representation of the content. Omitted if content is an image.",
    }),
    codepointRange: GooglePrivacyDlpV2RangeSchema.exactOptional().openapi({
      description:
        "Unicode character offsets delimiting the finding. These are relative to the finding's containing element. Provided when the content is text.",
    }),
    container: GooglePrivacyDlpV2ContainerSchema.exactOptional().openapi({
      description: 'Information about the container where this finding occurred, if available.',
    }),
    contentLocations: z
      .array(GooglePrivacyDlpV2ContentLocationSchema)
      .exactOptional()
      .openapi({
        description:
          'List of nested objects pointing to the precise location of the finding within the file or record.',
      }),
  })
  .openapi({ description: 'Specifies the location of the finding.', required: [] })
  .openapi('GooglePrivacyDlpV2Location')

const GooglePrivacyDlpV2QuoteInfoSchema = z
  .object({
    dateTime: GooglePrivacyDlpV2DateTimeSchema.exactOptional().openapi({
      description: 'The date time indicated by the quote.',
    }),
  })
  .openapi({
    description: 'Message for infoType-dependent details parsed from quote.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2QuoteInfo')

const GooglePrivacyDlpV2FindingSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp when finding was detected.' }),
    findingId: z.string().exactOptional().openapi({ description: 'The unique finding id.' }),
    infoType: GooglePrivacyDlpV2InfoTypeSchema.exactOptional().openapi({
      description:
        'The type of content that might have been found. Provided if `excluded_types` is false.',
    }),
    jobCreateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the job started that produced this finding.' }),
    jobName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The job that stored the finding.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The labels associated with this `Finding`. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"`',
      }),
    likelihood: z
      .enum([
        'LIKELIHOOD_UNSPECIFIED',
        'VERY_UNLIKELY',
        'UNLIKELY',
        'POSSIBLE',
        'LIKELY',
        'VERY_LIKELY',
      ])
      .exactOptional()
      .openapi({ description: 'Confidence of how likely it is that the `info_type` is correct.' }),
    location: GooglePrivacyDlpV2LocationSchema.exactOptional().openapi({
      description: 'Where the content was found.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name in format projects/{project}/locations/{location}/findings/{finding} Populated only when viewing persisted findings.',
      }),
    quote: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The content that was found. Even if the content is not textual, it may be converted to a textual representation here. Provided if `include_quote` is true and the finding is less than or equal to 4096 bytes long. If the finding exceeds 4096 bytes in length, the quote may be omitted.',
      }),
    quoteInfo: GooglePrivacyDlpV2QuoteInfoSchema.exactOptional().openapi({
      description:
        'Contains data parsed from quotes. Only populated if include_quote was set to true and a supported infoType was requested. Currently supported infoTypes: DATE, DATE_OF_BIRTH and TIME.',
    }),
    resourceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The job that stored the finding.' }),
    triggerName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Job trigger name, if applicable, for this finding.' }),
  })
  .openapi({ description: 'Represents a piece of potentially sensitive content.', required: [] })
  .openapi('GooglePrivacyDlpV2Finding')

const GooglePrivacyDlpV2FinishDlpJobRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for finishing a DLP hybrid job.' })
  .openapi('GooglePrivacyDlpV2FinishDlpJobRequest')

const GooglePrivacyDlpV2HybridFindingDetailsSchema = z
  .object({
    containerDetails: GooglePrivacyDlpV2ContainerSchema.exactOptional().openapi({
      description: 'Details about the container where the content being inspected is from.',
    }),
    fileOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Offset in bytes of the line, from the beginning of the file, where the finding is located. Populate if the item being scanned is only part of a bigger item, such as a shard of a file and you want to track the absolute position of the finding.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Labels to represent user provided metadata about the data being inspected. If configured by the job, some key values may be required. The labels associated with `Finding`\'s produced by hybrid inspection. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"`',
      }),
    rowOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Offset of the row for tables. Populate if the row(s) being scanned are part of a bigger dataset and you want to keep track of their absolute position.',
      }),
    tableOptions: GooglePrivacyDlpV2TableOptionsSchema.exactOptional().openapi({
      description:
        'If the container is a table, additional information to make findings meaningful such as the columns that are primary keys. If not known ahead of time, can also be set within each inspect hybrid call and the two will be merged. Note that identifying_fields will only be stored to BigQuery, and only if the BigQuery action has been included.',
    }),
  })
  .openapi({
    description: 'Populate to associate additional data with each finding.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2HybridFindingDetails')

const GooglePrivacyDlpV2HybridContentItemSchema = z
  .object({
    findingDetails: GooglePrivacyDlpV2HybridFindingDetailsSchema.exactOptional().openapi({
      description: 'Supplementary information that will be added to each finding.',
    }),
    item: GooglePrivacyDlpV2ContentItemSchema.exactOptional().openapi({
      description: 'The item to inspect.',
    }),
  })
  .openapi({
    description:
      'An individual hybrid item to inspect. Will be stored temporarily during processing.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2HybridContentItem')

const GooglePrivacyDlpV2HybridInspectDlpJobRequestSchema = z
  .object({
    hybridItem: GooglePrivacyDlpV2HybridContentItemSchema.exactOptional().openapi({
      description: 'The item to inspect.',
    }),
  })
  .openapi({
    description: 'Request to search for potentially sensitive info in a custom location.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2HybridInspectDlpJobRequest')

const GooglePrivacyDlpV2HybridInspectJobTriggerRequestSchema = z
  .object({
    hybridItem: GooglePrivacyDlpV2HybridContentItemSchema.exactOptional().openapi({
      description: 'The item to inspect.',
    }),
  })
  .openapi({
    description: 'Request to search for potentially sensitive info in a custom location.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2HybridInspectJobTriggerRequest')

const GooglePrivacyDlpV2HybridInspectResponseSchema = z
  .object({})
  .openapi({ description: 'Quota exceeded errors will be thrown once quota has been met.' })
  .openapi('GooglePrivacyDlpV2HybridInspectResponse')

const GooglePrivacyDlpV2ImageRedactionConfigSchema = z
  .object({
    infoType: GooglePrivacyDlpV2InfoTypeSchema.exactOptional().openapi({
      description:
        'Only one per info_type should be provided per request. If not specified, and redact_all_text is false, the DLP API will redact all text that it matches against all info_types that are found, but not specified in another ImageRedactionConfig.',
    }),
    redactAllText: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, all text found in the image, regardless whether it matches an info_type, is redacted. Only one should be provided.',
      }),
    redactionColor: GooglePrivacyDlpV2ColorSchema.exactOptional().openapi({
      description:
        'The color to use when redacting content from an image. If not specified, the default is black.',
    }),
  })
  .openapi({
    description: 'Configuration for determining how redaction of images should occur.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2ImageRedactionConfig')

const GooglePrivacyDlpV2InfoTypeCategorySchema = z
  .object({
    industryCategory: z
      .enum(['INDUSTRY_UNSPECIFIED', 'FINANCE', 'HEALTH', 'TELECOMMUNICATIONS'])
      .exactOptional()
      .openapi({
        description: 'The group of relevant businesses where this infoType is commonly used',
      }),
    locationCategory: z
      .enum([
        'LOCATION_UNSPECIFIED',
        'GLOBAL',
        'ARGENTINA',
        'AUSTRALIA',
        'BELGIUM',
        'BRAZIL',
        'CANADA',
        'CHILE',
        'CHINA',
        'COLOMBIA',
        'CROATIA',
        'DENMARK',
        'FRANCE',
        'FINLAND',
        'GERMANY',
        'HONG_KONG',
        'INDIA',
        'INDONESIA',
        'IRELAND',
        'ISRAEL',
        'ITALY',
        'JAPAN',
        'KOREA',
        'MEXICO',
        'NEW_ZEALAND',
        'THE_NETHERLANDS',
        'NORWAY',
        'PARAGUAY',
        'PERU',
        'POLAND',
        'PORTUGAL',
        'SINGAPORE',
        'SOUTH_AFRICA',
        'SPAIN',
        'SWEDEN',
        'TAIWAN',
        'THAILAND',
        'TURKEY',
        'UNITED_KINGDOM',
        'UNITED_STATES',
        'URUGUAY',
        'VENEZUELA',
        'INTERNAL',
      ])
      .exactOptional()
      .openapi({
        description:
          'The region or country that issued the ID or document represented by the infoType.',
      }),
    typeCategory: z
      .enum([
        'TYPE_UNSPECIFIED',
        'PII',
        'SPII',
        'DEMOGRAPHIC',
        'CREDENTIAL',
        'GOVERNMENT_ID',
        'DOCUMENT',
        'CONTEXTUAL_INFORMATION',
      ])
      .exactOptional()
      .openapi({ description: 'The class of identifiers where this infoType belongs' }),
  })
  .openapi({
    description:
      'Classification of infoTypes to organize them according to geographic location, industry, and data type.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2InfoTypeCategory')

const GooglePrivacyDlpV2VersionDescriptionSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Description of the version.' }),
    version: z.string().exactOptional().openapi({ description: 'Name of the version' }),
  })
  .openapi({ description: 'Details about each available version for an infotype.', required: [] })
  .openapi('GooglePrivacyDlpV2VersionDescription')

const GooglePrivacyDlpV2InfoTypeDescriptionSchema = z
  .object({
    categories: z
      .array(GooglePrivacyDlpV2InfoTypeCategorySchema)
      .exactOptional()
      .openapi({ description: 'The category of the infoType.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description of the infotype. Translated when language is provided in the request.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human readable form of the infoType name.' }),
    name: z.string().exactOptional().openapi({ description: 'Internal name of the infoType.' }),
    sensitivityScore: GooglePrivacyDlpV2SensitivityScoreSchema.exactOptional().openapi({
      description: 'The default sensitivity of the infoType.',
    }),
    supportedBy: z
      .array(z.enum(['ENUM_TYPE_UNSPECIFIED', 'INSPECT', 'RISK_ANALYSIS']))
      .exactOptional()
      .openapi({ description: 'Which parts of the API supports this InfoType.' }),
    versions: z
      .array(GooglePrivacyDlpV2VersionDescriptionSchema)
      .exactOptional()
      .openapi({ description: 'A list of available versions for the infotype.' }),
  })
  .openapi({ description: 'InfoType description.', required: [] })
  .openapi('GooglePrivacyDlpV2InfoTypeDescription')

const GooglePrivacyDlpV2InspectContentRequestSchema = z
  .object({
    inspectConfig: GooglePrivacyDlpV2InspectConfigSchema.exactOptional().openapi({
      description:
        'Configuration for the inspector. What specified here will override the template referenced by the inspect_template_name argument.',
    }),
    inspectTemplateName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.',
      }),
    item: GooglePrivacyDlpV2ContentItemSchema.exactOptional().openapi({
      description: 'The item to inspect.',
    }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field has no effect.' }),
  })
  .openapi({
    description: 'Request to search for potentially sensitive info in a ContentItem.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2InspectContentRequest')

const GooglePrivacyDlpV2InspectResultSchema = z
  .object({
    findings: z
      .array(GooglePrivacyDlpV2FindingSchema)
      .exactOptional()
      .openapi({ description: 'List of findings for an item.' }),
    findingsTruncated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, then this item might have more findings than were returned, and the findings returned are an arbitrary subset of all findings. The findings list might be truncated because the input items were too large, or because the server reached the maximum amount of resources allowed for a single API call. For best results, divide the input into smaller batches.',
      }),
  })
  .openapi({ description: 'All the findings for a single scanned item.', required: [] })
  .openapi('GooglePrivacyDlpV2InspectResult')

const GooglePrivacyDlpV2InspectContentResponseSchema = z
  .object({
    result: GooglePrivacyDlpV2InspectResultSchema.exactOptional().openapi({
      description: 'The findings.',
    }),
  })
  .openapi({ description: 'Results of inspecting an item.', required: [] })
  .openapi('GooglePrivacyDlpV2InspectContentResponse')

const GooglePrivacyDlpV2LargeCustomDictionaryStatsSchema = z
  .object({
    approxNumPhrases: z
      .string()
      .exactOptional()
      .openapi({ description: 'Approximate number of distinct phrases in the dictionary.' }),
  })
  .openapi({ description: 'Summary statistics of a custom dictionary.', required: [] })
  .openapi('GooglePrivacyDlpV2LargeCustomDictionaryStats')

const GooglePrivacyDlpV2ListDeidentifyTemplatesResponseSchema = z
  .object({
    deidentifyTemplates: z
      .array(GooglePrivacyDlpV2DeidentifyTemplateSchema)
      .exactOptional()
      .openapi({
        description:
          'List of deidentify templates, up to page_size in ListDeidentifyTemplatesRequest.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the next page is available then the next page token to be used in following ListDeidentifyTemplates request.',
      }),
  })
  .openapi({ description: 'Response message for ListDeidentifyTemplates.', required: [] })
  .openapi('GooglePrivacyDlpV2ListDeidentifyTemplatesResponse')

const GooglePrivacyDlpV2ListDlpJobsResponseSchema = z
  .object({
    jobs: z
      .array(GooglePrivacyDlpV2DlpJobSchema)
      .exactOptional()
      .openapi({
        description: 'A list of DlpJobs that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for listing DLP jobs.', required: [] })
  .openapi('GooglePrivacyDlpV2ListDlpJobsResponse')

const GooglePrivacyDlpV2ListInfoTypesResponseSchema = z
  .object({
    infoTypes: z
      .array(GooglePrivacyDlpV2InfoTypeDescriptionSchema)
      .exactOptional()
      .openapi({ description: 'Set of sensitive infoTypes.' }),
  })
  .openapi({ description: 'Response to the ListInfoTypes request.', required: [] })
  .openapi('GooglePrivacyDlpV2ListInfoTypesResponse')

const GooglePrivacyDlpV2ListInspectTemplatesResponseSchema = z
  .object({
    inspectTemplates: z
      .array(GooglePrivacyDlpV2InspectTemplateSchema)
      .exactOptional()
      .openapi({
        description: 'List of inspectTemplates, up to page_size in ListInspectTemplatesRequest.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the next page is available then the next page token to be used in following ListInspectTemplates request.',
      }),
  })
  .openapi({ description: 'Response message for ListInspectTemplates.', required: [] })
  .openapi('GooglePrivacyDlpV2ListInspectTemplatesResponse')

const GooglePrivacyDlpV2ListJobTriggersResponseSchema = z
  .object({
    jobTriggers: z
      .array(GooglePrivacyDlpV2JobTriggerSchema)
      .exactOptional()
      .openapi({
        description: 'List of triggeredJobs, up to page_size in ListJobTriggersRequest.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the next page is available then the next page token to be used in following ListJobTriggers request.',
      }),
  })
  .openapi({ description: 'Response message for ListJobTriggers.', required: [] })
  .openapi('GooglePrivacyDlpV2ListJobTriggersResponse')

const GooglePrivacyDlpV2StoredInfoTypeStatsSchema = z
  .object({
    largeCustomDictionary:
      GooglePrivacyDlpV2LargeCustomDictionaryStatsSchema.exactOptional().openapi({
        description: 'StoredInfoType where findings are defined by a dictionary of phrases.',
      }),
  })
  .openapi({ description: 'Statistics for a StoredInfoType.', required: [] })
  .openapi('GooglePrivacyDlpV2StoredInfoTypeStats')

const GooglePrivacyDlpV2StoredInfoTypeVersionSchema = z
  .object({
    config: GooglePrivacyDlpV2StoredInfoTypeConfigSchema.exactOptional().openapi({
      description: 'StoredInfoType configuration.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Create timestamp of the version. Read-only, determined by the system when the version is created.',
      }),
    errors: z
      .array(GooglePrivacyDlpV2ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          "Errors that occurred when creating this storedInfoType version, or anomalies detected in the storedInfoType data that render it unusable. Only the five most recent errors will be displayed, with the most recent error appearing first. For example, some of the data for stored custom dictionaries is put in the user's Cloud Storage bucket, and if this data is modified or deleted by the user or another system, the dictionary becomes invalid. If any errors occur, fix the problem indicated by the error message and use the UpdateStoredInfoType API method to create another version of the storedInfoType to continue using it, reusing the same `config` if it was not the source of the error.",
      }),
    state: z
      .enum(['STORED_INFO_TYPE_STATE_UNSPECIFIED', 'PENDING', 'READY', 'FAILED', 'INVALID'])
      .exactOptional()
      .openapi({
        description:
          'Stored info type version state. Read-only, updated by the system during dictionary creation.',
      }),
    stats: GooglePrivacyDlpV2StoredInfoTypeStatsSchema.exactOptional().openapi({
      description: 'Statistics about this storedInfoType version.',
    }),
  })
  .openapi({
    description:
      'Version of a StoredInfoType, including the configuration used to build it, create timestamp, and current state.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2StoredInfoTypeVersion')

const GooglePrivacyDlpV2StoredInfoTypeSchema = z
  .object({
    currentVersion: GooglePrivacyDlpV2StoredInfoTypeVersionSchema.exactOptional().openapi({
      description: 'Current version of the stored info type.',
    }),
    name: z.string().exactOptional().openapi({ description: 'Resource name.' }),
    pendingVersions: z
      .array(GooglePrivacyDlpV2StoredInfoTypeVersionSchema)
      .exactOptional()
      .openapi({
        description: 'Pending versions of the stored info type. Empty if no versions are pending.',
      }),
  })
  .openapi({
    description:
      'StoredInfoType resource message that contains information about the current version and any pending updates.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2StoredInfoType')

const GooglePrivacyDlpV2ListStoredInfoTypesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the next page is available then the next page token to be used in following ListStoredInfoTypes request.',
      }),
    storedInfoTypes: z
      .array(GooglePrivacyDlpV2StoredInfoTypeSchema)
      .exactOptional()
      .openapi({
        description: 'List of storedInfoTypes, up to page_size in ListStoredInfoTypesRequest.',
      }),
  })
  .openapi({ description: 'Response message for ListStoredInfoTypes.', required: [] })
  .openapi('GooglePrivacyDlpV2ListStoredInfoTypesResponse')

const GooglePrivacyDlpV2RecordTransformationSchema = z
  .object({
    containerTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Findings container modification timestamp, if applicable.' }),
    containerVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Container version, if available ("generation" for Cloud Storage).',
      }),
    fieldId: GooglePrivacyDlpV2FieldIdSchema.exactOptional().openapi({
      description: 'For record transformations, provide a field.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GooglePrivacyDlpV2RecordTransformation')

const GooglePrivacyDlpV2RedactImageRequestSchema = z
  .object({
    byteItem: GooglePrivacyDlpV2ByteContentItemSchema.exactOptional().openapi({
      description: 'The content must be PNG, JPEG, SVG or BMP.',
    }),
    imageRedactionConfigs: z
      .array(GooglePrivacyDlpV2ImageRedactionConfigSchema)
      .exactOptional()
      .openapi({
        description: 'The configuration for specifying what content to redact from images.',
      }),
    includeFindings: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the response should include findings along with the redacted image.',
      }),
    inspectConfig: GooglePrivacyDlpV2InspectConfigSchema.exactOptional().openapi({
      description: 'Configuration for the inspector.',
    }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field has no effect.' }),
  })
  .openapi({
    description:
      'Request to search for potentially sensitive info in an image and redact it by covering it with a colored rectangle.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2RedactImageRequest')

const GooglePrivacyDlpV2RedactImageResponseSchema = z
  .object({
    extractedText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If an image was being inspected and the InspectConfig's include_quote was set to true, then this field will include all text, if any, that was found in the image.",
      }),
    inspectResult: GooglePrivacyDlpV2InspectResultSchema.exactOptional().openapi({
      description: 'The findings. Populated when include_findings in the request is true.',
    }),
    redactedImage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The redacted image. The type will be the same as the original image.',
      }),
  })
  .openapi({ description: 'Results of redacting an image.', required: [] })
  .openapi('GooglePrivacyDlpV2RedactImageResponse')

const GooglePrivacyDlpV2ReidentifyContentRequestSchema = z
  .object({
    inspectConfig: GooglePrivacyDlpV2InspectConfigSchema.exactOptional().openapi({
      description: 'Configuration for the inspector.',
    }),
    inspectTemplateName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Template to use. Any configuration directly specified in `inspect_config` will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.',
      }),
    item: GooglePrivacyDlpV2ContentItemSchema.exactOptional().openapi({
      description: 'The item to re-identify. Will be treated as text.',
    }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field has no effect.' }),
    reidentifyConfig: GooglePrivacyDlpV2DeidentifyConfigSchema.exactOptional().openapi({
      description:
        'Configuration for the re-identification of the content item. This field shares the same proto message type that is used for de-identification, however its usage here is for the reversal of the previous de-identification. Re-identification is performed by examining the transformations used to de-identify the items and executing the reverse. This requires that only reversible transformations be provided here. The reversible transformations are: - `CryptoDeterministicConfig` - `CryptoReplaceFfxFpeConfig`',
    }),
    reidentifyTemplateName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Template to use. References an instance of `DeidentifyTemplate`. Any configuration directly specified in `reidentify_config` or `inspect_config` will override those set in the template. The `DeidentifyTemplate` used must include only reversible transformations. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.',
      }),
  })
  .openapi({ description: 'Request to re-identify an item.', required: [] })
  .openapi('GooglePrivacyDlpV2ReidentifyContentRequest')

const GooglePrivacyDlpV2ReidentifyContentResponseSchema = z
  .object({
    item: GooglePrivacyDlpV2ContentItemSchema.exactOptional().openapi({
      description: 'The re-identified item.',
    }),
    overview: GooglePrivacyDlpV2TransformationOverviewSchema.exactOptional().openapi({
      description: 'An overview of the changes that were made to the `item`.',
    }),
  })
  .openapi({ description: 'Results of re-identifying an item.', required: [] })
  .openapi('GooglePrivacyDlpV2ReidentifyContentResponse')

const GooglePrivacyDlpV2TransformationDescriptionSchema = z
  .object({
    condition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A human-readable string representation of the `RecordCondition` corresponding to this transformation. Set if a `RecordCondition` was used to determine whether or not to apply this transformation. Examples: * (age_field > 85) * (age_field <= 18) * (zip_field exists) * (zip_field == 01234) && (city_field != "Springville") * (zip_field == 01234) && (age_field <= 18) && (city_field exists)',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A description of the transformation. This is empty for a RECORD_SUPPRESSION, or is the output of calling toString() on the `PrimitiveTransformation` protocol buffer message for any other type of transformation.',
      }),
    infoType: GooglePrivacyDlpV2InfoTypeSchema.exactOptional().openapi({
      description: 'Set if the transformation was limited to a specific `InfoType`.',
    }),
    type: z
      .enum([
        'TRANSFORMATION_TYPE_UNSPECIFIED',
        'RECORD_SUPPRESSION',
        'REPLACE_VALUE',
        'REPLACE_DICTIONARY',
        'REDACT',
        'CHARACTER_MASK',
        'CRYPTO_REPLACE_FFX_FPE',
        'FIXED_SIZE_BUCKETING',
        'BUCKETING',
        'REPLACE_WITH_INFO_TYPE',
        'TIME_PART',
        'CRYPTO_HASH',
        'DATE_SHIFT',
        'CRYPTO_DETERMINISTIC_CONFIG',
        'REDACT_IMAGE',
      ])
      .exactOptional()
      .openapi({ description: 'The transformation type.' }),
  })
  .openapi({
    description: 'A flattened description of a `PrimitiveTransformation` or `RecordSuppression`.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2TransformationDescription')

const GooglePrivacyDlpV2TransformationResultStatusSchema = z
  .object({
    details: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'Detailed error codes and messages',
    }),
    resultStatusType: z
      .enum([
        'STATE_TYPE_UNSPECIFIED',
        'INVALID_TRANSFORM',
        'BIGQUERY_MAX_ROW_SIZE_EXCEEDED',
        'METADATA_UNRETRIEVABLE',
        'SUCCESS',
      ])
      .exactOptional()
      .openapi({
        description:
          'Transformation result status type, this will be either SUCCESS, or it will be the reason for why the transformation was not completely successful.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GooglePrivacyDlpV2TransformationResultStatus')

const GooglePrivacyDlpV2TransformationLocationSchema = z
  .object({
    containerType: z
      .enum([
        'TRANSFORM_UNKNOWN_CONTAINER',
        'TRANSFORM_BODY',
        'TRANSFORM_METADATA',
        'TRANSFORM_TABLE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Information about the functionality of the container where this finding occurred, if available.',
      }),
    findingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For infotype transformations, link to the corresponding findings ID so that location information does not need to be duplicated. Each findings ID correlates to an entry in the findings output table, this table only gets created when users specify to save findings (add the save findings action to the request).',
      }),
    recordTransformation: GooglePrivacyDlpV2RecordTransformationSchema.exactOptional().openapi({
      description: 'For record transformations, provide a field and container information.',
    }),
  })
  .openapi({ description: 'Specifies the location of a transformation.', required: [] })
  .openapi('GooglePrivacyDlpV2TransformationLocation')

const GooglePrivacyDlpV2TransformationDetailsSchema = z
  .object({
    containerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The top level name of the container where the transformation is located (this will be the source file name or table name).',
      }),
    resourceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the job that completed the transformation.' }),
    statusDetails: GooglePrivacyDlpV2TransformationResultStatusSchema.exactOptional().openapi({
      description:
        'Status of the transformation, if transformation was not successful, this will specify what caused it to fail, otherwise it will show that the transformation was successful.',
    }),
    transformation: z
      .array(GooglePrivacyDlpV2TransformationDescriptionSchema)
      .exactOptional()
      .openapi({
        description:
          'Description of transformation. This would only contain more than one element if there were multiple matching transformations and which one to apply was ambiguous. Not set for states that contain no transformation, currently only state that contains no transformation is TransformationResultStateType.METADATA_UNRETRIEVABLE.',
      }),
    transformationLocation: GooglePrivacyDlpV2TransformationLocationSchema.exactOptional().openapi({
      description: 'The precise location of the transformed content in the original container.',
    }),
    transformedBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of bytes that were transformed. If transformation was unsuccessful or did not take place because there was no content to transform, this will be zero.',
      }),
  })
  .openapi({
    description:
      'Details about a single transformation. This object contains a description of the transformation, information about whether the transformation was successfully applied, and the precise location where the transformation occurred. These details are stored in a user-specified BigQuery table.',
    required: [],
  })
  .openapi('GooglePrivacyDlpV2TransformationDetails')

const GooglePrivacyDlpV2UpdateDeidentifyTemplateRequestSchema = z
  .object({
    deidentifyTemplate: GooglePrivacyDlpV2DeidentifyTemplateSchema.exactOptional().openapi({
      description: 'New DeidentifyTemplate value.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mask to control which fields get updated.' }),
  })
  .openapi({ description: 'Request message for UpdateDeidentifyTemplate.', required: [] })
  .openapi('GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest')

const GooglePrivacyDlpV2UpdateInspectTemplateRequestSchema = z
  .object({
    inspectTemplate: GooglePrivacyDlpV2InspectTemplateSchema.exactOptional().openapi({
      description: 'New InspectTemplate value.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mask to control which fields get updated.' }),
  })
  .openapi({ description: 'Request message for UpdateInspectTemplate.', required: [] })
  .openapi('GooglePrivacyDlpV2UpdateInspectTemplateRequest')

const GooglePrivacyDlpV2UpdateJobTriggerRequestSchema = z
  .object({
    jobTrigger: GooglePrivacyDlpV2JobTriggerSchema.exactOptional().openapi({
      description: 'New JobTrigger value.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mask to control which fields get updated.' }),
  })
  .openapi({ description: 'Request message for UpdateJobTrigger.', required: [] })
  .openapi('GooglePrivacyDlpV2UpdateJobTriggerRequest')

const GooglePrivacyDlpV2UpdateStoredInfoTypeRequestSchema = z
  .object({
    config: GooglePrivacyDlpV2StoredInfoTypeConfigSchema.exactOptional().openapi({
      description:
        'Updated configuration for the storedInfoType. If not provided, a new version of the storedInfoType will be created with the existing configuration.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mask to control which fields get updated.' }),
  })
  .openapi({ description: 'Request message for UpdateStoredInfoType.', required: [] })
  .openapi('GooglePrivacyDlpV2UpdateStoredInfoTypeRequest')

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

export const getV2InfoTypesRoute = createRoute({
  method: 'get',
  path: '/v2/infoTypes',
  tags: ['infoTypes'],
  description:
    'Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.',
  operationId: 'dlp.infoTypes.list',
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
              'filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated. This field has no effect.',
            in: 'query',
            name: 'locationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The parent resource name. The format of this value is as follows: locations/ LOCATION_ID',
            in: 'query',
            name: 'parent',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GooglePrivacyDlpV2ListInfoTypesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2NameRoute = createRoute({
  method: 'get',
  path: '/v2/{name}',
  tags: ['projects'],
  description:
    'Gets a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.',
  operationId: 'dlp.projects.storedInfoTypes.get',
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
              'Required. Resource name of the organization and storedInfoType to be read, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.',
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
      content: { 'application/json': { schema: GooglePrivacyDlpV2StoredInfoTypeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV2NameRoute = createRoute({
  method: 'delete',
  path: '/v2/{name}',
  tags: ['projects'],
  description:
    'Deletes a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.',
  operationId: 'dlp.projects.storedInfoTypes.delete',
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
              'Required. Resource name of the organization and storedInfoType to be deleted, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.',
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
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV2NameRoute = createRoute({
  method: 'patch',
  path: '/v2/{name}',
  tags: ['projects'],
  description:
    'Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.',
  operationId: 'dlp.projects.storedInfoTypes.patch',
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
              'Required. Resource name of organization and storedInfoType to be updated, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GooglePrivacyDlpV2UpdateStoredInfoTypeRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GooglePrivacyDlpV2StoredInfoTypeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameActivateRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:activate',
  tags: ['projects'],
  description:
    'Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.',
  operationId: 'dlp.projects.locations.jobTriggers.activate',
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
              'Required. Resource name of the trigger to activate, for example `projects/dlp-test-project/jobTriggers/53234423`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GooglePrivacyDlpV2ActivateJobTriggerRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GooglePrivacyDlpV2DlpJobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameCancelRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:cancel',
  tags: ['projects'],
  description:
    'Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.',
  operationId: 'dlp.projects.locations.dlpJobs.cancel',
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
            description: 'Required. The name of the DlpJob resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GooglePrivacyDlpV2CancelDlpJobRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameFinishRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:finish',
  tags: ['projects'],
  description:
    'Finish a running hybrid DlpJob. Triggers the finalization steps and running of any enabled actions that have not yet run.',
  operationId: 'dlp.projects.locations.dlpJobs.finish',
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
            description: 'Required. The name of the DlpJob resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GooglePrivacyDlpV2FinishDlpJobRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameHybridInspectRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:hybridInspect',
  tags: ['projects'],
  description:
    'Inspect hybrid content and store findings to a trigger. The inspection will be processed asynchronously. To review the findings monitor the jobs within the trigger.',
  operationId: 'dlp.projects.locations.jobTriggers.hybridInspect',
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
              'Required. Resource name of the trigger to execute a hybrid inspect on, for example `projects/dlp-test-project/jobTriggers/53234423`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GooglePrivacyDlpV2HybridInspectJobTriggerRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GooglePrivacyDlpV2HybridInspectResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentContentDeidentifyRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/content:deidentify',
  tags: ['projects'],
  description:
    'De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.',
  operationId: 'dlp.projects.locations.content.deidentify',
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
              'Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GooglePrivacyDlpV2DeidentifyContentRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GooglePrivacyDlpV2DeidentifyContentResponseSchema },
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

export const postV2ParentContentInspectRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/content:inspect',
  tags: ['projects'],
  description:
    'Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images and https://cloud.google.com/dlp/docs/inspecting-text,',
  operationId: 'dlp.projects.locations.content.inspect',
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
              'Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GooglePrivacyDlpV2InspectContentRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GooglePrivacyDlpV2InspectContentResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentContentReidentifyRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/content:reidentify',
  tags: ['projects'],
  description:
    'Re-identifies content that has been de-identified. See https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.',
  operationId: 'dlp.projects.locations.content.reidentify',
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
              'Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GooglePrivacyDlpV2ReidentifyContentRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GooglePrivacyDlpV2ReidentifyContentResponseSchema },
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

export const getV2ParentDeidentifyTemplatesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/deidentifyTemplates',
  tags: ['projects'],
  description:
    'Lists DeidentifyTemplates. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.',
  operationId: 'dlp.projects.locations.deidentifyTemplates.list',
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
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated. This field has no effect.',
            in: 'query',
            name: 'locationId',
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
              "Comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name.",
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
              'Size of the page, can be limited by the server. If zero server returns a page of max size 100.',
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
              'Page token to continue retrieval. Comes from previous call to `ListDeidentifyTemplates`.',
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
              'Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3',
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
        'application/json': { schema: GooglePrivacyDlpV2ListDeidentifyTemplatesResponseSchema },
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

export const postV2ParentDeidentifyTemplatesRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/deidentifyTemplates',
  tags: ['projects'],
  description:
    'Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.',
  operationId: 'dlp.projects.locations.deidentifyTemplates.create',
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
              'Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GooglePrivacyDlpV2CreateDeidentifyTemplateRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GooglePrivacyDlpV2DeidentifyTemplateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentDlpJobsRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/dlpJobs',
  tags: ['projects'],
  description:
    'Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.',
  operationId: 'dlp.projects.locations.dlpJobs.list',
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
              "Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect jobs: - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - `trigger_name` - The name of the trigger that created the job. - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * Supported fields for risk analysis jobs: - `state` - RUNNING|CANCELED|FINISHED|FAILED - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * The operator must be `=` or `!=`. Examples: * inspected_storage = cloud_storage AND state = done * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = done OR state = canceled) * end_time > \\\"2017-12-12T00:00:00+00:00\\\" The length of this field should be no more than 500 characters.",
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated. This field has no effect.',
            in: 'query',
            name: 'locationId',
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
              "Comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant. Example: `name asc, end_time asc, create_time desc` Supported fields are: - `create_time`: corresponds to the time the job was created. - `end_time`: corresponds to the time the job ended. - `name`: corresponds to the job's name. - `state`: corresponds to `state`",
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
      type: z
        .enum(['DLP_JOB_TYPE_UNSPECIFIED', 'INSPECT_JOB', 'RISK_ANALYSIS_JOB'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The type of job. Defaults to `DlpJobType.INSPECT`',
            in: 'query',
            name: 'type',
            schema: {
              enum: ['DLP_JOB_TYPE_UNSPECIFIED', 'INSPECT_JOB', 'RISK_ANALYSIS_JOB'],
              type: 'string',
            },
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
              'Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3',
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
      content: { 'application/json': { schema: GooglePrivacyDlpV2ListDlpJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentDlpJobsRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/dlpJobs',
  tags: ['projects'],
  description:
    'Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.',
  operationId: 'dlp.projects.locations.dlpJobs.create',
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
              'Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GooglePrivacyDlpV2CreateDlpJobRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GooglePrivacyDlpV2DlpJobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentImageRedactRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/image:redact',
  tags: ['projects'],
  description:
    'Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.',
  operationId: 'dlp.projects.locations.image.redact',
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
              'Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GooglePrivacyDlpV2RedactImageRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GooglePrivacyDlpV2RedactImageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentInfoTypesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/infoTypes',
  tags: ['locations'],
  description:
    'Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.',
  operationId: 'dlp.locations.infoTypes.list',
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
              'filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated. This field has no effect.',
            in: 'query',
            name: 'locationId',
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
              'The parent resource name. The format of this value is as follows: locations/ LOCATION_ID',
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
      content: { 'application/json': { schema: GooglePrivacyDlpV2ListInfoTypesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentInspectTemplatesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/inspectTemplates',
  tags: ['projects'],
  description:
    'Lists InspectTemplates. See https://cloud.google.com/dlp/docs/creating-templates to learn more.',
  operationId: 'dlp.projects.locations.inspectTemplates.list',
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
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated. This field has no effect.',
            in: 'query',
            name: 'locationId',
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
              "Comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name.",
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
              'Size of the page, can be limited by the server. If zero server returns a page of max size 100.',
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
              'Page token to continue retrieval. Comes from previous call to `ListInspectTemplates`.',
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
              'Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3',
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
        'application/json': { schema: GooglePrivacyDlpV2ListInspectTemplatesResponseSchema },
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

export const postV2ParentInspectTemplatesRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/inspectTemplates',
  tags: ['projects'],
  description:
    'Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates to learn more.',
  operationId: 'dlp.projects.locations.inspectTemplates.create',
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
              'Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GooglePrivacyDlpV2CreateInspectTemplateRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GooglePrivacyDlpV2InspectTemplateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentJobTriggersRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/jobTriggers',
  tags: ['projects'],
  description:
    'Lists job triggers. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.',
  operationId: 'dlp.projects.locations.jobTriggers.list',
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
              "Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect triggers: - `status` - HEALTHY|PAUSED|CANCELLED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - 'last_run_time` - RFC 3339 formatted timestamp, surrounded by quotation marks. Nanoseconds are ignored. - 'error_count' - Number of errors that have occurred while running. * The operator must be `=` or `!=` for status and inspected_storage. Examples: * inspected_storage = cloud_storage AND status = HEALTHY * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = PAUSED OR state = HEALTHY) * last_run_time > \\\"2017-12-12T00:00:00+00:00\\\" The length of this field should be no more than 500 characters.",
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated. This field has no effect.',
            in: 'query',
            name: 'locationId',
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
              "Comma separated list of triggeredJob fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the JobTrigger was created. - `update_time`: corresponds to the time the JobTrigger was last updated. - `last_run_time`: corresponds to the last time the JobTrigger ran. - `name`: corresponds to the JobTrigger's name. - `display_name`: corresponds to the JobTrigger's display name. - `status`: corresponds to JobTrigger's status.",
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
            description: 'Size of the page, can be limited by a server.',
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
              'Page token to continue retrieval. Comes from previous call to ListJobTriggers. `order_by` field must not change for subsequent calls.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .enum(['DLP_JOB_TYPE_UNSPECIFIED', 'INSPECT_JOB', 'RISK_ANALYSIS_JOB'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The type of jobs. Will use `DlpJobType.INSPECT` if not set.',
            in: 'query',
            name: 'type',
            schema: {
              enum: ['DLP_JOB_TYPE_UNSPECIFIED', 'INSPECT_JOB', 'RISK_ANALYSIS_JOB'],
              type: 'string',
            },
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
              'Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3',
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
      content: { 'application/json': { schema: GooglePrivacyDlpV2ListJobTriggersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentJobTriggersRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/jobTriggers',
  tags: ['projects'],
  description:
    'Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.',
  operationId: 'dlp.projects.locations.jobTriggers.create',
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
              'Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GooglePrivacyDlpV2CreateJobTriggerRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GooglePrivacyDlpV2JobTriggerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentStoredInfoTypesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/storedInfoTypes',
  tags: ['projects'],
  description:
    'Lists stored infoTypes. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.',
  operationId: 'dlp.projects.storedInfoTypes.list',
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
      locationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated. This field has no effect.',
            in: 'query',
            name: 'locationId',
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
              "Comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant. Example: `name asc, display_name, create_time desc` Supported fields are: - `create_time`: corresponds to the time the most recent version of the resource was created. - `state`: corresponds to the state of the resource. - `name`: corresponds to resource name. - `display_name`: corresponds to info type's display name.",
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
              'Size of the page, can be limited by the server. If zero server returns a page of max size 100.',
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
              'Page token to continue retrieval. Comes from previous call to `ListStoredInfoTypes`.',
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
              'Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3',
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
        'application/json': { schema: GooglePrivacyDlpV2ListStoredInfoTypesResponseSchema },
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

export const postV2ParentStoredInfoTypesRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/storedInfoTypes',
  tags: ['projects'],
  description:
    'Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.',
  operationId: 'dlp.projects.storedInfoTypes.create',
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
              'Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GooglePrivacyDlpV2CreateStoredInfoTypeRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GooglePrivacyDlpV2StoredInfoTypeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
