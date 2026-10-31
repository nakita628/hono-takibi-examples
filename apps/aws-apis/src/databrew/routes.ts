import { createRoute, z } from '@hono/zod-openapi'

const CompressionFormatSchema = z
  .enum(['GZIP', 'LZ4', 'SNAPPY', 'BZIP2', 'DEFLATE', 'LZO', 'BROTLI', 'ZSTD', 'ZLIB'])
  .openapi('CompressionFormat')

const OutputFormatSchema = z
  .enum(['CSV', 'JSON', 'PARQUET', 'GLUEPARQUET', 'AVRO', 'ORC', 'XML', 'TABLEAUHYPER'])
  .openapi('OutputFormat')

const ColumnNameSchema = z.string().min(1).max(255).openapi('ColumnName')

const ColumnNameListSchema = z.array(ColumnNameSchema).max(200).openapi('ColumnNameList')

const BucketSchema = z.string().min(3).max(63).openapi('Bucket')

const KeySchema = z.string().min(1).max(1280).openapi('Key')

const BucketOwnerSchema = z
  .string()
  .regex(/^[0-9]{12}$/)
  .length(12)
  .openapi('BucketOwner')

const S3LocationSchema = z
  .object({
    Bucket: BucketSchema.and(z.any().openapi({ description: 'The Amazon S3 bucket name.' })),
    Key: KeySchema.and(
      z.any().openapi({ description: 'The unique name of the object in the bucket.' }),
    ).exactOptional(),
    BucketOwner: BucketOwnerSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services account ID of the bucket owner.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Bucket'],
    description:
      'Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.',
  })
  .openapi('S3Location')

const OverwriteOutputSchema = z.boolean().openapi('OverwriteOutput')

const DelimiterSchema = z.string().length(1).openapi('Delimiter')

const CsvOutputOptionsSchema = z
  .object({
    Delimiter: DelimiterSchema.and(
      z
        .any()
        .openapi({
          description:
            'A single character that specifies the delimiter used to create CSV job output.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a set of options that define how DataBrew will write a comma-separated value (CSV) file.',
    required: [],
  })
  .openapi('CsvOutputOptions')

const OutputFormatOptionsSchema = z
  .object({
    Csv: CsvOutputOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents a set of options that define the structure of comma-separated value (CSV) job output.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a set of options that define the structure of comma-separated (CSV) job output.',
    required: [],
  })
  .openapi('OutputFormatOptions')

const MaxOutputFilesSchema = z.int().min(1).max(999).openapi('MaxOutputFiles')

type OutputType = {
  CompressionFormat?: z.infer<typeof CompressionFormatSchema> & { [key: string]: unknown }
  Format?: z.infer<typeof OutputFormatSchema> & { [key: string]: unknown }
  PartitionColumns?: z.infer<typeof ColumnNameListSchema> & { [key: string]: unknown }
  Location: z.infer<typeof S3LocationSchema> & { [key: string]: unknown }
  Overwrite?: z.infer<typeof OverwriteOutputSchema> & { [key: string]: unknown }
  FormatOptions?: z.infer<typeof OutputFormatOptionsSchema> & { [key: string]: unknown }
  MaxOutputFiles?: z.infer<typeof MaxOutputFilesSchema> & { [key: string]: unknown }
}

const RecipeNameSchema = z.string().min(1).max(255).openapi('RecipeName')

const ErrorCodeSchema = z
  .string()
  .regex(/^[1-5][0-9][0-9]$/)
  .openapi('ErrorCode')

const RecipeErrorMessageSchema = z.string().openapi('RecipeErrorMessage')

const RecipeVersionSchema = z.string().min(1).max(16).openapi('RecipeVersion')

const RecipeVersionErrorDetailSchema = z
  .object({
    ErrorCode: ErrorCodeSchema.and(
      z.any().openapi({ description: 'The HTTP status code for the error.' }),
    ).exactOptional(),
    ErrorMessage: RecipeErrorMessageSchema.and(
      z.any().openapi({ description: 'The text of the error message.' }),
    ).exactOptional(),
    RecipeVersion: RecipeVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the recipe version associated with this error.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents any errors encountered when attempting to delete multiple recipe versions.',
    required: [],
  })
  .openapi('RecipeVersionErrorDetail')

const RecipeErrorListSchema = z.array(RecipeVersionErrorDetailSchema).openapi('RecipeErrorList')

const BatchDeleteRecipeVersionResponseSchema = z
  .object({
    Name: RecipeNameSchema.and(
      z.any().openapi({ description: 'The name of the recipe that was modified.' }),
    ),
    Errors: RecipeErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Errors, if any, that occurred while attempting to delete the recipe versions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'] })
  .openapi('BatchDeleteRecipeVersionResponse')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const DatasetNameSchema = z.string().min(1).max(255).openapi('DatasetName')

const CreateDatasetResponseSchema = z
  .object({
    Name: DatasetNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset that you created.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('CreateDatasetResponse')

const MultiLineSchema = z.boolean().openapi('MultiLine')

const JsonOptionsSchema = z
  .object({
    MultiLine: MultiLineSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that specifies whether JSON input contains embedded new line characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the JSON-specific options that define how input is to be interpreted by Glue DataBrew.',
    required: [],
  })
  .openapi('JsonOptions')

const SheetNameSchema = z.string().min(1).max(31).openapi('SheetName')

const SheetNameListSchema = z.array(SheetNameSchema).length(1).openapi('SheetNameList')

const SheetIndexSchema = z.int().min(0).max(200).openapi('SheetIndex')

const SheetIndexListSchema = z.array(SheetIndexSchema).length(1).openapi('SheetIndexList')

const HeaderRowSchema = z.boolean().openapi('HeaderRow')

const ExcelOptionsSchema = z
  .object({
    SheetNames: SheetNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more named sheets in the Excel file that will be included in the dataset.',
        }),
    ).exactOptional(),
    SheetIndexes: SheetIndexListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more sheet numbers in the Excel file that will be included in the dataset.',
        }),
    ).exactOptional(),
    HeaderRow: HeaderRowSchema.and(
      z
        .any()
        .openapi({
          description:
            'A variable that specifies whether the first row in the file is parsed as the header. If this value is false, column names are auto-generated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a set of options that define how DataBrew will interpret a Microsoft Excel file when creating a dataset from that file.',
    required: [],
  })
  .openapi('ExcelOptions')

const CsvOptionsSchema = z
  .object({
    Delimiter: DelimiterSchema.and(
      z
        .any()
        .openapi({
          description:
            'A single character that specifies the delimiter being used in the CSV file.',
        }),
    ).exactOptional(),
    HeaderRow: HeaderRowSchema.and(
      z
        .any()
        .openapi({
          description:
            'A variable that specifies whether the first row in the file is parsed as the header. If this value is false, column names are auto-generated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a set of options that define how DataBrew will read a comma-separated value (CSV) file when creating a dataset from that file.',
    required: [],
  })
  .openapi('CsvOptions')

const CatalogIdSchema = z.string().min(1).max(255).openapi('CatalogId')

const DatabaseNameSchema = z.string().min(1).max(255).openapi('DatabaseName')

const TableNameSchema = z.string().min(1).max(255).openapi('TableName')

const DataCatalogInputDefinitionSchema = z
  .object({
    CatalogId: CatalogIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the Amazon Web Services account that holds the Data Catalog that stores the data.',
        }),
    ).exactOptional(),
    DatabaseName: DatabaseNameSchema.and(
      z.any().openapi({ description: 'The name of a database in the Data Catalog.' }),
    ),
    TableName: TableNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a database table in the Data Catalog. This table corresponds to a DataBrew dataset.',
        }),
    ),
    TempDirectory: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents an Amazon location where DataBrew can store intermediate results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DatabaseName', 'TableName'],
    description:
      'Represents how metadata stored in the Glue Data Catalog is defined in a DataBrew dataset. ',
  })
  .openapi('DataCatalogInputDefinition')

const GlueConnectionNameSchema = z.string().min(1).max(255).openapi('GlueConnectionName')

const DatabaseTableNameSchema = z.string().min(1).max(255).openapi('DatabaseTableName')

const QueryStringSchema = z.string().min(1).max(10000).openapi('QueryString')

const DatabaseInputDefinitionSchema = z
  .object({
    GlueConnectionName: GlueConnectionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Glue Connection that stores the connection information for the target database.',
        }),
    ),
    DatabaseTableName: DatabaseTableNameSchema.and(
      z.any().openapi({ description: 'The table within the target database.' }),
    ).exactOptional(),
    TempDirectory: S3LocationSchema.exactOptional(),
    QueryString: QueryStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Custom SQL to run against the provided Glue connection. This SQL will be used as the input for DataBrew projects and jobs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GlueConnectionName'],
    description: 'Connection information for dataset input files stored in a database.',
  })
  .openapi('DatabaseInputDefinition')

const ArnSchema = z.string().min(20).max(2048).openapi('Arn')

const MetadataSchema = z
  .object({
    SourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) associated with the dataset. Currently, DataBrew only supports ARNs from Amazon AppFlow.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains additional resource information needed for specific datasets.',
    required: [],
  })
  .openapi('Metadata')

const ExpressionSchema = z
  .string()
  .regex(/^[<>0-9A-Za-z_.,:)(!= ]+$/)
  .min(4)
  .max(1024)
  .openapi('Expression')

const ConditionValueSchema = z.string().max(1024).openapi('ConditionValue')

const ValuesMapSchema = z.record(z.string(), ConditionValueSchema).openapi('ValuesMap')

const FilterExpressionSchema = z
  .object({
    Expression: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The expression which includes condition names followed by substitution variables, possibly grouped and combined with other conditions. For example, "(starts_with :prefix1 or starts_with :prefix2) and (ends_with :suffix1 or ends_with :suffix2)". Substitution variables should start with \':\' symbol.',
        }),
    ),
    ValuesMap: ValuesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The map of substitution variable names to their values used in this filter expression.',
        }),
    ),
  })
  .openapi({
    required: ['Expression', 'ValuesMap'],
    description:
      'Represents a structure for defining parameter conditions. Supported conditions are described here: <a href="https://docs.aws.amazon.com/databrew/latest/dg/datasets.multiple-files.html#conditions.for.dynamic.datasets">Supported conditions for dynamic datasets</a> in the <i>Glue DataBrew Developer Guide</i>.',
  })
  .openapi('FilterExpression')

const MaxFilesSchema = z.int().min(1).openapi('MaxFiles')

const OrderedBySchema = z.literal('LAST_MODIFIED_DATE').openapi('OrderedBy')

const OrderSchema = z.enum(['DESCENDING', 'ASCENDING']).openapi('Order')

const FilesLimitSchema = z
  .object({
    MaxFiles: MaxFilesSchema.and(
      z.any().openapi({ description: 'The number of Amazon S3 files to select.' }),
    ),
    OrderedBy: OrderedBySchema.and(
      z
        .any()
        .openapi({
          description:
            "A criteria to use for Amazon S3 files sorting before their selection. By default uses LAST_MODIFIED_DATE as a sorting criteria. Currently it's the only allowed value.",
        }),
    ).exactOptional(),
    Order: OrderSchema.and(
      z
        .any()
        .openapi({
          description:
            'A criteria to use for Amazon S3 files sorting before their selection. By default uses DESCENDING order, i.e. most recent files are selected first. Another possible value is ASCENDING.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MaxFiles'],
    description:
      'Represents a limit imposed on number of Amazon S3 files that should be selected for a dataset from a connected Amazon S3 path.',
  })
  .openapi('FilesLimit')

const PathParameterNameSchema = z.string().min(1).max(255).openapi('PathParameterName')

const ParameterTypeSchema = z.enum(['Datetime', 'Number', 'String']).openapi('ParameterType')

const DatetimeFormatSchema = z.string().min(2).max(100).openapi('DatetimeFormat')

const TimezoneOffsetSchema = z
  .string()
  .regex(/^(Z|[-+](\d|\d{2}|\d{2}:?\d{2}))$/)
  .min(1)
  .max(6)
  .openapi('TimezoneOffset')

const LocaleCodeSchema = z
  .string()
  .regex(/^[A-Za-z0-9_\.#@\-]+$/)
  .min(2)
  .max(100)
  .openapi('LocaleCode')

const DatetimeOptionsSchema = z
  .object({
    Format: DatetimeFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required option, that defines the datetime format used for a date parameter in the Amazon S3 path. Should use only supported datetime specifiers and separation characters, all literal a-z or A-Z characters should be escaped with single quotes. E.g. "MM.dd.yyyy-\'at\'-HH:mm".',
        }),
    ),
    TimezoneOffset: TimezoneOffsetSchema.and(
      z
        .any()
        .openapi({
          description:
            "Optional value for a timezone offset of the datetime parameter value in the Amazon S3 path. Shouldn't be used if Format for this parameter includes timezone fields. If no offset specified, UTC is assumed.",
        }),
    ).exactOptional(),
    LocaleCode: LocaleCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional value for a non-US locale code, needed for correct interpretation of some date formats.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Format'],
    description:
      'Represents additional options for correct interpretation of datetime parameters used in the Amazon S3 path of a dataset.',
  })
  .openapi('DatetimeOptions')

const CreateColumnSchema = z.boolean().openapi('CreateColumn')

const DatasetParameterSchema = z
  .object({
    Name: PathParameterNameSchema.and(
      z
        .any()
        .openapi({
          description: "The name of the parameter that is used in the dataset's Amazon S3 path.",
        }),
    ),
    Type: ParameterTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of the dataset parameter, can be one of a 'String', 'Number' or 'Datetime'.",
        }),
    ),
    DatetimeOptions: DatetimeOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional parameter options such as a format and a timezone. Required for datetime parameters.',
        }),
    ).exactOptional(),
    CreateColumn: CreateColumnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional boolean value that defines whether the captured value of this parameter should be used to create a new column in a dataset.',
        }),
    ).exactOptional(),
    Filter: FilterExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The optional filter expression structure to apply additional matching criteria to the parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Type'],
    description:
      'Represents a dataset parameter that defines type and conditions for a parameter in the Amazon S3 path of the dataset.',
  })
  .openapi('DatasetParameter')

const PathParametersMapSchema = z
  .record(z.string(), DatasetParameterSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 10)
  .openapi({
    description:
      'A structure that map names of parameters used in the Amazon S3 path of a dataset to their definitions. A definition includes parameter type and conditions.',
  })
  .openapi('PathParametersMap')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const JobNameSchema = z.string().min(1).max(240).openapi('JobName')

const CreateProfileJobResponseSchema = z
  .object({
    Name: JobNameSchema.and(
      z.any().openapi({ description: 'The name of the job that was created.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('CreateProfileJobResponse')

const StatisticSchema = z
  .string()
  .regex(/^[A-Z\_]+$/)
  .min(1)
  .max(128)
  .openapi('Statistic')

const StatisticListSchema = z.array(StatisticSchema).min(1).openapi('StatisticList')

const ParameterValueSchema = z.string().min(1).max(32768).openapi('ParameterValue')

const ParameterMapSchema = z.record(z.string(), ParameterValueSchema).openapi('ParameterMap')

const StatisticOverrideSchema = z
  .object({
    Statistic: StatisticSchema.and(z.any().openapi({ description: 'The name of an evaluation' })),
    Parameters: ParameterMapSchema.and(
      z
        .any()
        .openapi({ description: 'A map that includes overrides of an evaluation’s parameters.' }),
    ),
  })
  .openapi({
    required: ['Statistic', 'Parameters'],
    description: 'Override of a particular evaluation for a profile job. ',
  })
  .openapi('StatisticOverride')

const StatisticOverrideListSchema = z
  .array(StatisticOverrideSchema)
  .min(1)
  .openapi('StatisticOverrideList')

const StatisticsConfigurationSchema = z
  .object({
    IncludedStatistics: StatisticListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of included evaluations. When the list is undefined, all supported evaluations will be included.',
        }),
    ).exactOptional(),
    Overrides: StatisticOverrideListSchema.and(
      z.any().openapi({ description: 'List of overrides for evaluations.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configuration of evaluations for a profile job. This configuration can be used to select evaluations and override the parameters of selected evaluations. ',
    required: [],
  })
  .openapi('StatisticsConfiguration')

const ColumnSelectorSchema = z
  .object({
    Regex: ColumnNameSchema.and(
      z
        .any()
        .openapi({ description: 'A regular expression for selecting a column from a dataset.' }),
    ).exactOptional(),
    Name: ColumnNameSchema.and(
      z.any().openapi({ description: 'The name of a column from a dataset.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Selector of a column from a dataset for profile job configuration. One selector includes either a column name or a regular expression.',
    required: [],
  })
  .openapi('ColumnSelector')

const ColumnSelectorListSchema = z.array(ColumnSelectorSchema).min(1).openapi('ColumnSelectorList')

const ColumnStatisticsConfigurationSchema = z
  .object({
    Selectors: ColumnSelectorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of column selectors. Selectors can be used to select columns from the dataset. When selectors are undefined, configuration will be applied to all supported columns. ',
        }),
    ).exactOptional(),
    Statistics: StatisticsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration for evaluations. Statistics can be used to select evaluations and override parameters of evaluations. ',
        }),
    ),
  })
  .openapi({
    required: ['Statistics'],
    description:
      'Configuration for column evaluations for a profile job. ColumnStatisticsConfiguration can be used to select evaluations and override parameters of evaluations for particular columns. ',
  })
  .openapi('ColumnStatisticsConfiguration')

const ColumnStatisticsConfigurationListSchema = z
  .array(ColumnStatisticsConfigurationSchema)
  .min(1)
  .openapi('ColumnStatisticsConfigurationList')

const EntityTypeSchema = z
  .string()
  .regex(/^[A-Z_][A-Z\\d_]*$/)
  .min(1)
  .max(128)
  .openapi('EntityType')

const EntityTypeListSchema = z.array(EntityTypeSchema).min(1).openapi('EntityTypeList')

const AllowedStatisticsSchema = z
  .object({
    Statistics: StatisticListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more column statistics to allow for columns that contain detected entities.',
        }),
    ),
  })
  .openapi({
    required: ['Statistics'],
    description:
      'Configuration of statistics that are allowed to be run on columns that contain detected entities. When undefined, no statistics will be computed on columns that contain detected entities.',
  })
  .openapi('AllowedStatistics')

const AllowedStatisticListSchema = z
  .array(AllowedStatisticsSchema)
  .min(1)
  .openapi('AllowedStatisticList')

const EntityDetectorConfigurationSchema = z
  .object({
    EntityTypes: EntityTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Entity types to detect. Can be any of the following:</p> <ul> <li> <p>USA_SSN</p> </li> <li> <p>EMAIL</p> </li> <li> <p>USA_ITIN</p> </li> <li> <p>USA_PASSPORT_NUMBER</p> </li> <li> <p>PHONE_NUMBER</p> </li> <li> <p>USA_DRIVING_LICENSE</p> </li> <li> <p>BANK_ACCOUNT</p> </li> <li> <p>CREDIT_CARD</p> </li> <li> <p>IP_ADDRESS</p> </li> <li> <p>MAC_ADDRESS</p> </li> <li> <p>USA_DEA_NUMBER</p> </li> <li> <p>USA_HCPCS_CODE</p> </li> <li> <p>USA_NATIONAL_PROVIDER_IDENTIFIER</p> </li> <li> <p>USA_NATIONAL_DRUG_CODE</p> </li> <li> <p>USA_HEALTH_INSURANCE_CLAIM_NUMBER</p> </li> <li> <p>USA_MEDICARE_BENEFICIARY_IDENTIFIER</p> </li> <li> <p>USA_CPT_CODE</p> </li> <li> <p>PERSON_NAME</p> </li> <li> <p>DATE</p> </li> </ul> <p>The Entity type group USA_ALL is also supported, and includes all of the above entity types except PERSON_NAME and DATE.</p>',
        }),
    ),
    AllowedStatistics: AllowedStatisticListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration of statistics that are allowed to be run on columns that contain detected entities. When undefined, no statistics will be computed on columns that contain detected entities.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EntityTypes'],
    description:
      'Configuration of entity detection for a profile job. When undefined, entity detection is disabled.',
  })
  .openapi('EntityDetectorConfiguration')

const ValidationModeSchema = z.literal('CHECK_ALL').openapi('ValidationMode')

const ValidationConfigurationSchema = z
  .object({
    RulesetArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the ruleset to be validated in the profile job. The TargetArn of the selected ruleset should be the same as the Amazon Resource Name (ARN) of the dataset that is associated with the profile job.',
        }),
    ),
    ValidationMode: ValidationModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Mode of data quality validation. Default mode is “CHECK_ALL” which verifies all rules defined in the selected ruleset.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RulesetArn'],
    description:
      'Configuration for data quality validation. Used to select the Rulesets and Validation Mode to be used in the profile job. When ValidationConfiguration is null, the profile job will run without data quality validation.',
  })
  .openapi('ValidationConfiguration')

const SampleModeSchema = z.enum(['FULL_DATASET', 'CUSTOM_ROWS']).openapi('SampleMode')

const JobSizeSchema = z.int().openapi('JobSize')

const ProjectNameSchema = z.string().min(1).max(255).openapi('ProjectName')

const CreateProjectResponseSchema = z
  .object({
    Name: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project that you created.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('CreateProjectResponse')

const SampleSizeSchema = z.int().min(1).max(5000).openapi('SampleSize')

const SampleTypeSchema = z.enum(['FIRST_N', 'LAST_N', 'RANDOM']).openapi('SampleType')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const CreateRecipeResponseSchema = z
  .object({
    Name: RecipeNameSchema.and(
      z.any().openapi({ description: 'The name of the recipe that you created.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('CreateRecipeResponse')

const OperationSchema = z
  .string()
  .regex(/^[A-Z\_]+$/)
  .min(1)
  .max(128)
  .openapi('Operation')

const RecipeActionSchema = z
  .object({
    Operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of a valid DataBrew transformation to be performed on the data.',
        }),
    ),
    Parameters: ParameterMapSchema.and(
      z.any().openapi({ description: 'Contextual parameters for the transformation.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Operation'],
    description:
      'Represents a transformation and associated parameters that are used to apply a change to a DataBrew dataset. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipe-actions-reference.html">Recipe actions reference</a>.',
  })
  .openapi('RecipeAction')

const ConditionSchema = z
  .string()
  .regex(/^[A-Z\_]+$/)
  .min(1)
  .max(128)
  .openapi('Condition')

const TargetColumnSchema = z.string().min(1).max(1024).openapi('TargetColumn')

const ConditionExpressionSchema = z
  .object({
    Condition: ConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A specific condition to apply to a recipe action. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipes.html#recipes.structure">Recipe structure</a> in the <i>Glue DataBrew Developer Guide</i>.',
        }),
    ),
    Value: ConditionValueSchema.and(
      z
        .any()
        .openapi({
          description: 'A value that the condition must evaluate to for the condition to succeed.',
        }),
    ).exactOptional(),
    TargetColumn: TargetColumnSchema.and(
      z.any().openapi({ description: 'A column to apply this condition to.' }),
    ),
  })
  .openapi({
    required: ['Condition', 'TargetColumn'],
    description:
      '<p>Represents an individual condition that evaluates to true or false.</p> <p>Conditions are used with recipe actions. The action is only performed for column values where the condition evaluates to true.</p> <p>If a recipe requires more than one condition, then the recipe must specify multiple <code>ConditionExpression</code> elements. Each condition is applied to the rows in a dataset first, before the recipe action is performed.</p>',
  })
  .openapi('ConditionExpression')

const ConditionExpressionListSchema = z
  .array(ConditionExpressionSchema)
  .openapi('ConditionExpressionList')

const RecipeStepSchema = z
  .object({
    Action: RecipeActionSchema.and(
      z.any().openapi({ description: 'The particular action to be performed in the recipe step.' }),
    ),
    ConditionExpressions: ConditionExpressionListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more conditions that must be met for the recipe step to succeed.</p> <note> <p>All of the conditions in the array must be met. In other words, all of the conditions must be combined using a logical AND operation.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Action'],
    description: 'Represents a single step from a DataBrew recipe to be performed.',
  })
  .openapi('RecipeStep')

const CreateRecipeJobResponseSchema = z
  .object({
    Name: JobNameSchema.and(
      z.any().openapi({ description: 'The name of the job that you created.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('CreateRecipeJobResponse')

const OutputSchema: z.ZodType<OutputType> = z
  .lazy(() =>
    z
      .object({
        CompressionFormat: CompressionFormatSchema.and(
          z
            .any()
            .openapi({
              description: 'The compression algorithm used to compress the output text of the job.',
            }),
        ).exactOptional(),
        Format: OutputFormatSchema.and(
          z.any().openapi({ description: 'The data format of the output of the job.' }),
        ).exactOptional(),
        PartitionColumns: ColumnNameListSchema.and(
          z
            .any()
            .openapi({
              description: 'The names of one or more partition columns for the output of the job.',
            }),
        ).exactOptional(),
        Location: S3LocationSchema.and(
          z
            .any()
            .openapi({ description: 'The location in Amazon S3 where the job writes its output.' }),
        ),
        Overwrite: OverwriteOutputSchema.and(
          z
            .any()
            .openapi({
              description:
                'A value that, if true, means that any data in the location specified for output is overwritten with new output.',
            }),
        ).exactOptional(),
        FormatOptions: OutputFormatOptionsSchema.and(
          z
            .any()
            .openapi({
              description: 'Represents options that define how DataBrew formats job output files.',
            }),
        ).exactOptional(),
        MaxOutputFiles: MaxOutputFilesSchema.and(
          z
            .any()
            .openapi({
              description:
                'Maximum number of files to be generated by the job and written to the output folder. For output partitioned by column(s), the MaxOutputFiles value is the maximum number of files per partition.',
            }),
        ).exactOptional(),
      })
      .openapi({
        required: ['Location'],
        description:
          'Represents options that specify how and where in Amazon S3 DataBrew writes the output generated by recipe jobs or profile jobs.',
      }),
  )
  .openapi('Output')

const S3TableOutputOptionsSchema = z
  .object({
    Location: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents an Amazon S3 location (bucket name and object key) where DataBrew can write output from a job.',
        }),
    ),
  })
  .openapi({
    required: ['Location'],
    description:
      'Represents options that specify how and where DataBrew writes the Amazon S3 output generated by recipe jobs.',
  })
  .openapi('S3TableOutputOptions')

const DatabaseTableOutputOptionsSchema = z
  .object({
    TempDirectory: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents an Amazon S3 location (bucket name and object key) where DataBrew can store intermediate results.',
        }),
    ).exactOptional(),
    TableName: DatabaseTableNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A prefix for the name of a table DataBrew will create in the database.',
        }),
    ),
  })
  .openapi({
    required: ['TableName'],
    description:
      'Represents options that specify how and where DataBrew writes the database output generated by recipe jobs.',
  })
  .openapi('DatabaseTableOutputOptions')

const DataCatalogOutputSchema = z
  .object({
    CatalogId: CatalogIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the Amazon Web Services account that holds the Data Catalog that stores the data.',
        }),
    ).exactOptional(),
    DatabaseName: DatabaseNameSchema.and(
      z.any().openapi({ description: 'The name of a database in the Data Catalog.' }),
    ),
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of a table in the Data Catalog.' }),
    ),
    S3Options: S3TableOutputOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents options that specify how and where DataBrew writes the Amazon S3 output generated by recipe jobs.',
        }),
    ).exactOptional(),
    DatabaseOptions: DatabaseTableOutputOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents options that specify how and where DataBrew writes the database output generated by recipe jobs.',
        }),
    ).exactOptional(),
    Overwrite: OverwriteOutputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that, if true, means that any data in the location specified for output is overwritten with new output. Not supported with DatabaseOptions.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DatabaseName', 'TableName'],
    description:
      'Represents options that specify how and where in the Glue Data Catalog DataBrew writes the output generated by recipe jobs.',
  })
  .openapi('DataCatalogOutput')

const DatabaseOutputModeSchema = z.literal('NEW_TABLE').openapi('DatabaseOutputMode')

const DatabaseOutputSchema = z
  .object({
    GlueConnectionName: GlueConnectionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Glue connection that stores the connection information for the target database.',
        }),
    ),
    DatabaseOptions: DatabaseTableOutputOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents options that specify how and where DataBrew writes the database output generated by recipe jobs.',
        }),
    ),
    DatabaseOutputMode: DatabaseOutputModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output mode to write into the database. Currently supported option: NEW_TABLE.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GlueConnectionName', 'DatabaseOptions'],
    description:
      'Represents a JDBC database output object which defines the output destination for a DataBrew recipe job to write into.',
  })
  .openapi('DatabaseOutput')

const RulesetNameSchema = z.string().min(1).max(255).openapi('RulesetName')

const CreateRulesetResponseSchema = z
  .object({
    Name: RulesetNameSchema.and(
      z.any().openapi({ description: 'The unique name of the created ruleset.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('CreateRulesetResponse')

const RuleNameSchema = z.string().min(1).max(128).openapi('RuleName')

const DisabledSchema = z.boolean().openapi('Disabled')

const ThresholdValueSchema = z.float64().min(0).openapi('ThresholdValue')

const ThresholdTypeSchema = z
  .enum(['GREATER_THAN_OR_EQUAL', 'LESS_THAN_OR_EQUAL', 'GREATER_THAN', 'LESS_THAN'])
  .openapi('ThresholdType')

const ThresholdUnitSchema = z.enum(['COUNT', 'PERCENTAGE']).openapi('ThresholdUnit')

const ThresholdSchema = z
  .object({
    Value: ThresholdValueSchema.and(z.any().openapi({ description: 'The value of a threshold.' })),
    Type: ThresholdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of a threshold. Used for comparison of an actual count of rows that satisfy the rule to the threshold value.',
        }),
    ).exactOptional(),
    Unit: ThresholdUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unit of threshold value. Can be either a COUNT or PERCENTAGE of the full sample size used for validation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Value'],
    description:
      'The threshold used with a non-aggregate check expression. The non-aggregate check expression will be applied to each row in a specific column. Then the threshold will be used to determine whether the validation succeeds.',
  })
  .openapi('Threshold')

const RuleSchema = z
  .object({
    Name: RuleNameSchema.and(z.any().openapi({ description: 'The name of the rule.' })),
    Disabled: DisabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that specifies whether the rule is disabled. Once a rule is disabled, a profile job will not validate it during a job run. Default value is false.',
        }),
    ).exactOptional(),
    CheckExpression: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The expression which includes column references, condition names followed by variable references, possibly grouped and combined with other conditions. For example, <code>(:col1 starts_with :prefix1 or :col1 starts_with :prefix2) and (:col1 ends_with :suffix1 or :col1 ends_with :suffix2)</code>. Column and value references are substitution variables that should start with the ':' symbol. Depending on the context, substitution variables' values can be either an actual value or a column name. These values are defined in the SubstitutionMap. If a CheckExpression starts with a column reference, then ColumnSelectors in the rule should be null. If ColumnSelectors has been defined, then there should be no column reference in the left side of a condition, for example, <code>is_between :val1 and :val2</code>.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/databrew/latest/dg/profile.data-quality-available-checks.html\">Available checks</a> </p>",
        }),
    ),
    SubstitutionMap: ValuesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The map of substitution variable names to their values used in a check expression. Variable names should start with a \':\' (colon). Variable values can either be actual values or column names. To differentiate between the two, column names should be enclosed in backticks, for example, <code>":col1": "`Column A`".</code> ',
        }),
    ).exactOptional(),
    Threshold: ThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The threshold used with a non-aggregate check expression. Non-aggregate check expressions will be applied to each row in a specific column, and the threshold will be used to determine whether the validation succeeds.',
        }),
    ).exactOptional(),
    ColumnSelectors: ColumnSelectorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of column selectors. Selectors can be used to select columns using a name or regular expression from the dataset. Rule will be applied to selected columns.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'CheckExpression'],
    description:
      'Represents a single data quality requirement that should be validated in the scope of this dataset.',
  })
  .openapi('Rule')

const ScheduleNameSchema = z.string().min(1).max(255).openapi('ScheduleName')

const CreateScheduleResponseSchema = z
  .object({
    Name: ScheduleNameSchema.and(
      z.any().openapi({ description: 'The name of the schedule that was created.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('CreateScheduleResponse')

const DeleteDatasetResponseSchema = z
  .object({
    Name: DatasetNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset that you deleted.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('DeleteDatasetResponse')

const DeleteJobResponseSchema = z
  .object({
    Name: JobNameSchema.and(
      z.any().openapi({ description: 'The name of the job that you deleted.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('DeleteJobResponse')

const DeleteProjectResponseSchema = z
  .object({
    Name: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project that you deleted.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('DeleteProjectResponse')

const DeleteRecipeVersionResponseSchema = z
  .object({
    Name: RecipeNameSchema.and(
      z.any().openapi({ description: 'The name of the recipe that was deleted.' }),
    ),
    RecipeVersion: RecipeVersionSchema.and(
      z.any().openapi({ description: 'The version of the recipe that was deleted.' }),
    ),
  })
  .openapi({ required: ['Name', 'RecipeVersion'] })
  .openapi('DeleteRecipeVersionResponse')

const DeleteRulesetResponseSchema = z
  .object({
    Name: RulesetNameSchema.and(
      z.any().openapi({ description: 'The name of the deleted ruleset.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('DeleteRulesetResponse')

const DeleteScheduleResponseSchema = z
  .object({
    Name: ScheduleNameSchema.and(
      z.any().openapi({ description: 'The name of the schedule that was deleted.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('DeleteScheduleResponse')

const CreatedBySchema = z.string().openapi('CreatedBy')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const InputFormatSchema = z.enum(['CSV', 'JSON', 'PARQUET', 'EXCEL', 'ORC']).openapi('InputFormat')

const FormatOptionsSchema = z
  .object({
    Json: JsonOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'Options that define how JSON input is to be interpreted by DataBrew.',
        }),
    ).exactOptional(),
    Excel: ExcelOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'Options that define how Excel input is to be interpreted by DataBrew.',
        }),
    ).exactOptional(),
    Csv: CsvOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'Options that define how CSV input is to be interpreted by DataBrew.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.',
    required: [],
  })
  .openapi('FormatOptions')

const InputSchema = z
  .object({
    S3InputDefinition: S3LocationSchema.and(
      z.any().openapi({ description: 'The Amazon S3 location where the data is stored.' }),
    ).exactOptional(),
    DataCatalogInputDefinition: DataCatalogInputDefinitionSchema.and(
      z.any().openapi({ description: 'The Glue Data Catalog parameters for the data.' }),
    ).exactOptional(),
    DatabaseInputDefinition: DatabaseInputDefinitionSchema.and(
      z
        .any()
        .openapi({
          description: 'Connection information for dataset input files stored in a database.',
        }),
    ).exactOptional(),
    Metadata: MetadataSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains additional resource information needed for specific datasets.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.',
    required: [],
  })
  .openapi('Input')

const LastModifiedBySchema = z.string().openapi('LastModifiedBy')

const SourceSchema = z.enum(['S3', 'DATA-CATALOG', 'DATABASE']).openapi('Source')

const PathOptionsSchema = z
  .object({
    LastModifiedDateCondition: FilterExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'If provided, this structure defines a date range for matching Amazon S3 objects based on their LastModifiedDate attribute in Amazon S3.',
        }),
    ).exactOptional(),
    FilesLimit: FilesLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'If provided, this structure imposes a limit on a number of files that should be selected.',
        }),
    ).exactOptional(),
    Parameters: PathParametersMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that maps names of parameters used in the Amazon S3 path of a dataset to their definitions.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset.',
    required: [],
  })
  .openapi('PathOptions')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 200)
  .openapi('TagMap')

const DescribeDatasetResponseSchema = z
  .object({
    CreatedBy: CreatedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier (user name) of the user who created the dataset.',
        }),
    ).exactOptional(),
    CreateDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the dataset was created.' }),
    ).exactOptional(),
    Name: DatasetNameSchema.and(z.any().openapi({ description: 'The name of the dataset.' })),
    Format: InputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file format of a dataset that is created from an Amazon S3 file or folder.',
        }),
    ).exactOptional(),
    FormatOptions: FormatOptionsSchema.exactOptional(),
    Input: InputSchema,
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the dataset was last modified.' }),
    ).exactOptional(),
    LastModifiedBy: LastModifiedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier (user name) of the user who last modified the dataset.',
        }),
    ).exactOptional(),
    Source: SourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the data for this dataset, Amazon S3 or the Glue Data Catalog.',
        }),
    ).exactOptional(),
    PathOptions: PathOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags associated with this dataset.' }),
    ).exactOptional(),
    ResourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the dataset.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'Input'] })
  .openapi('DescribeDatasetResponse')

const EncryptionKeyArnSchema = z.string().min(20).max(2048).openapi('EncryptionKeyArn')

const EncryptionModeSchema = z.enum(['SSE-KMS', 'SSE-S3']).openapi('EncryptionMode')

const JobTypeSchema = z.enum(['PROFILE', 'RECIPE']).openapi('JobType')

const LogSubscriptionSchema = z.enum(['ENABLE', 'DISABLE']).openapi('LogSubscription')

const MaxCapacitySchema = z.int().openapi('MaxCapacity')

const MaxRetriesSchema = z.int().min(0).openapi('MaxRetries')

const OutputListSchema = z.array(OutputSchema).min(1).openapi('OutputList')

const DataCatalogOutputListSchema = z
  .array(DataCatalogOutputSchema)
  .min(1)
  .openapi('DataCatalogOutputList')

const DatabaseOutputListSchema = z.array(DatabaseOutputSchema).min(1).openapi('DatabaseOutputList')

const ProfileConfigurationSchema = z
  .object({
    DatasetStatisticsConfiguration: StatisticsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration for inter-column evaluations. Configuration can be used to select evaluations and override parameters of evaluations. When configuration is undefined, the profile job will run all supported inter-column evaluations. ',
        }),
    ).exactOptional(),
    ProfileColumns: ColumnSelectorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of column selectors. ProfileColumns can be used to select columns from the dataset. When ProfileColumns is undefined, the profile job will profile all supported columns. ',
        }),
    ).exactOptional(),
    ColumnStatisticsConfigurations: ColumnStatisticsConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of configurations for column evaluations. ColumnStatisticsConfigurations are used to select evaluations and override parameters of evaluations for particular columns. When ColumnStatisticsConfigurations is undefined, the profile job will profile all supported columns and run all supported evaluations. ',
        }),
    ).exactOptional(),
    EntityDetectorConfiguration: EntityDetectorConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration of entity detection for a profile job. When undefined, entity detection is disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns. ',
    required: [],
  })
  .openapi('ProfileConfiguration')

const ValidationConfigurationListSchema = z
  .array(ValidationConfigurationSchema)
  .min(1)
  .openapi('ValidationConfigurationList')

const RecipeReferenceSchema = z
  .object({
    Name: RecipeNameSchema.and(z.any().openapi({ description: 'The name of the recipe.' })),
    RecipeVersion: RecipeVersionSchema.and(
      z.any().openapi({ description: 'The identifier for the version for the recipe. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description: 'Represents the name and version of a DataBrew recipe.',
  })
  .openapi('RecipeReference')

const TimeoutSchema = z.int().min(0).openapi('Timeout')

const JobSampleSchema = z
  .object({
    Mode: SampleModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that determines whether the profile job is run on the entire dataset or a specified number of rows. This value must be one of the following:</p> <ul> <li> <p>FULL_DATASET - The profile job is run on the entire dataset.</p> </li> <li> <p>CUSTOM_ROWS - The profile job is run on the number of rows specified in the <code>Size</code> parameter.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Size: JobSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>Size</code> parameter is only required when the mode is CUSTOM_ROWS. The profile job is run on the specified number of rows. The maximum value for size is Long.MAX_VALUE.</p> <p>Long.MAX_VALUE = 9223372036854775807</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a <code>JobSample</code> value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.",
    required: [],
  })
  .openapi('JobSample')

const DescribeJobResponseSchema = z
  .object({
    CreateDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the job was created.' }),
    ).exactOptional(),
    CreatedBy: CreatedBySchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier (user name) of the user associated with the creation of the job.',
        }),
    ).exactOptional(),
    DatasetName: DatasetNameSchema.and(
      z.any().openapi({ description: 'The dataset that the job acts upon.' }),
    ).exactOptional(),
    EncryptionKeyArn: EncryptionKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.',
        }),
    ).exactOptional(),
    EncryptionMode: EncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Name: JobNameSchema.and(z.any().openapi({ description: 'The name of the job.' })),
    Type: JobTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The job type, which must be one of the following:</p> <ul> <li> <p> <code>PROFILE</code> - The job analyzes the dataset to determine its size, data types, data distribution, and more.</p> </li> <li> <p> <code>RECIPE</code> - The job applies one or more transformations to a dataset.</p> </li> </ul>',
        }),
    ).exactOptional(),
    LastModifiedBy: LastModifiedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier (user name) of the user who last modified the job.',
        }),
    ).exactOptional(),
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the job was last modified.' }),
    ).exactOptional(),
    LogSubscription: LogSubscriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether Amazon CloudWatch logging is enabled for this job.',
        }),
    ).exactOptional(),
    MaxCapacity: MaxCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of compute nodes that DataBrew can consume when the job processes data.',
        }),
    ).exactOptional(),
    MaxRetries: MaxRetriesSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of times to retry the job after a job run fails.',
        }),
    ).exactOptional(),
    Outputs: OutputListSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more artifacts that represent the output from running the job.',
        }),
    ).exactOptional(),
    DataCatalogOutputs: DataCatalogOutputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more artifacts that represent the Glue Data Catalog output from running the job.',
        }),
    ).exactOptional(),
    DatabaseOutputs: DatabaseOutputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.',
        }),
    ).exactOptional(),
    ProjectName: ProjectNameSchema.and(
      z.any().openapi({ description: 'The DataBrew project associated with this job.' }),
    ).exactOptional(),
    ProfileConfiguration: ProfileConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration for profile jobs. Used to select columns, do evaluations, and override default parameters of evaluations. When configuration is null, the profile job will run with default settings.',
        }),
    ).exactOptional(),
    ValidationConfigurations: ValidationConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description: 'List of validation configurations that are applied to the profile job.',
        }),
    ).exactOptional(),
    RecipeReference: RecipeReferenceSchema.exactOptional(),
    ResourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the job.' }),
    ).exactOptional(),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags associated with this job.' }),
    ).exactOptional(),
    Timeout: TimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            "The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.",
        }),
    ).exactOptional(),
    JobSample: JobSampleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sample configuration for profile jobs only. Determines the number of rows on which the profile job will be executed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'] })
  .openapi('DescribeJobResponse')

const AttemptSchema = z.int().openapi('Attempt')

const JobRunErrorMessageSchema = z.string().openapi('JobRunErrorMessage')

const ExecutionTimeSchema = z.int().openapi('ExecutionTime')

const JobRunIdSchema = z.string().min(1).max(255).openapi('JobRunId')

const JobRunStateSchema = z
  .enum(['STARTING', 'RUNNING', 'STOPPING', 'STOPPED', 'SUCCEEDED', 'FAILED', 'TIMEOUT'])
  .openapi('JobRunState')

const LogGroupNameSchema = z.string().min(1).max(512).openapi('LogGroupName')

const StartedBySchema = z.string().openapi('StartedBy')

const DescribeJobRunResponseSchema = z
  .object({
    Attempt: AttemptSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of times that DataBrew has attempted to run the job.',
        }),
    ).exactOptional(),
    CompletedOn: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the job completed processing.' }),
    ).exactOptional(),
    DatasetName: DatasetNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset for the job to process.' }),
    ).exactOptional(),
    ErrorMessage: JobRunErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'A message indicating an error (if any) that was encountered when the job ran.',
        }),
    ).exactOptional(),
    ExecutionTime: ExecutionTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time, in seconds, during which the job run consumed resources.',
        }),
    ).exactOptional(),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The name of the job being processed during this run.' }),
    ),
    ProfileConfiguration: ProfileConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration for profile jobs. Used to select columns, do evaluations, and override default parameters of evaluations. When configuration is null, the profile job will run with default settings.',
        }),
    ).exactOptional(),
    ValidationConfigurations: ValidationConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description: 'List of validation configurations that are applied to the profile job.',
        }),
    ).exactOptional(),
    RunId: JobRunIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the job run.' }),
    ).exactOptional(),
    State: JobRunStateSchema.and(
      z.any().openapi({ description: 'The current state of the job run entity itself.' }),
    ).exactOptional(),
    LogSubscription: LogSubscriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'The current status of Amazon CloudWatch logging for the job run.',
        }),
    ).exactOptional(),
    LogGroupName: LogGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an Amazon CloudWatch log group, where the job writes diagnostic messages when it runs.',
        }),
    ).exactOptional(),
    Outputs: OutputListSchema.and(
      z.any().openapi({ description: 'One or more output artifacts from a job run.' }),
    ).exactOptional(),
    DataCatalogOutputs: DataCatalogOutputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more artifacts that represent the Glue Data Catalog output from running the job.',
        }),
    ).exactOptional(),
    DatabaseOutputs: DatabaseOutputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.',
        }),
    ).exactOptional(),
    RecipeReference: RecipeReferenceSchema.exactOptional(),
    StartedBy: StartedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who started the job run.',
        }),
    ).exactOptional(),
    StartedOn: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the job run began.' }),
    ).exactOptional(),
    JobSample: JobSampleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sample configuration for profile jobs only. Determines the number of rows on which the profile job will be executed. If a JobSample value is not provided, the default value will be used. The default value is CUSTOM_ROWS for the mode parameter and 20000 for the size parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobName'] })
  .openapi('DescribeJobRunResponse')

const SampleSchema = z
  .object({
    Size: SampleSizeSchema.and(
      z.any().openapi({ description: 'The number of rows in the sample.' }),
    ).exactOptional(),
    Type: SampleTypeSchema.and(
      z.any().openapi({ description: 'The way in which DataBrew obtains rows from a dataset.' }),
    ),
  })
  .openapi({
    required: ['Type'],
    description:
      'Represents the sample size and sampling type for DataBrew to use for interactive data analysis.',
  })
  .openapi('Sample')

const SessionStatusSchema = z
  .enum([
    'ASSIGNED',
    'FAILED',
    'INITIALIZING',
    'PROVISIONING',
    'READY',
    'RECYCLING',
    'ROTATING',
    'TERMINATED',
    'TERMINATING',
    'UPDATING',
  ])
  .openapi('SessionStatus')

const OpenedBySchema = z.string().openapi('OpenedBy')

const DescribeProjectResponseSchema = z
  .object({
    CreateDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the project was created.' }),
    ).exactOptional(),
    CreatedBy: CreatedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier (user name) of the user who created the project.',
        }),
    ).exactOptional(),
    DatasetName: DatasetNameSchema.and(
      z.any().openapi({ description: 'The dataset associated with the project.' }),
    ).exactOptional(),
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the project was last modified.' }),
    ).exactOptional(),
    LastModifiedBy: LastModifiedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier (user name) of the user who last modified the project.',
        }),
    ).exactOptional(),
    Name: ProjectNameSchema.and(z.any().openapi({ description: 'The name of the project.' })),
    RecipeName: RecipeNameSchema.and(
      z.any().openapi({ description: 'The recipe associated with this job.' }),
    ).exactOptional(),
    ResourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the project.' }),
    ).exactOptional(),
    Sample: SampleSchema.exactOptional(),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags associated with this project.' }),
    ).exactOptional(),
    SessionStatus: SessionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the current state of the session:</p> <ul> <li> <p> <code>PROVISIONING</code> - allocating resources for the session.</p> </li> <li> <p> <code>INITIALIZING</code> - getting the session ready for first use.</p> </li> <li> <p> <code>ASSIGNED</code> - the session is ready for use.</p> </li> </ul>',
        }),
    ).exactOptional(),
    OpenedBy: OpenedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier (user name) of the user that opened the project for use. ',
        }),
    ).exactOptional(),
    OpenDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the project was opened. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'] })
  .openapi('DescribeProjectResponse')

const PublishedBySchema = z.string().openapi('PublishedBy')

const RecipeDescriptionSchema = z.string().max(1024).openapi('RecipeDescription')

const RecipeStepListSchema = z.array(RecipeStepSchema).openapi('RecipeStepList')

const DescribeRecipeResponseSchema = z
  .object({
    CreatedBy: CreatedBySchema.and(
      z
        .any()
        .openapi({ description: 'The identifier (user name) of the user who created the recipe.' }),
    ).exactOptional(),
    CreateDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the recipe was created.' }),
    ).exactOptional(),
    LastModifiedBy: LastModifiedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier (user name) of the user who last modified the recipe.',
        }),
    ).exactOptional(),
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the recipe was last modified.' }),
    ).exactOptional(),
    ProjectName: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project associated with this recipe.' }),
    ).exactOptional(),
    PublishedBy: PublishedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier (user name) of the user who last published the recipe.',
        }),
    ).exactOptional(),
    PublishedDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the recipe was last published.' }),
    ).exactOptional(),
    Description: RecipeDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the recipe.' }),
    ).exactOptional(),
    Name: RecipeNameSchema.and(z.any().openapi({ description: 'The name of the recipe.' })),
    Steps: RecipeStepListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more steps to be performed by the recipe. Each step consists of an action, and the conditions under which the action should succeed.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags associated with this project.' }),
    ).exactOptional(),
    ResourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the recipe.' }),
    ).exactOptional(),
    RecipeVersion: RecipeVersionSchema.and(
      z.any().openapi({ description: 'The recipe version identifier.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'] })
  .openapi('DescribeRecipeResponse')

const RulesetDescriptionSchema = z.string().max(1024).openapi('RulesetDescription')

const RuleListSchema = z.array(RuleSchema).min(1).openapi('RuleList')

const DescribeRulesetResponseSchema = z
  .object({
    Name: RulesetNameSchema.and(z.any().openapi({ description: 'The name of the ruleset.' })),
    Description: RulesetDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the ruleset.' }),
    ).exactOptional(),
    TargetArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is associated with.',
        }),
    ).exactOptional(),
    Rules: RuleListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of rules that are defined with the ruleset. A rule includes one or more checks to be validated on a DataBrew dataset.',
        }),
    ).exactOptional(),
    CreateDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the ruleset was created.' }),
    ).exactOptional(),
    CreatedBy: CreatedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who created the ruleset.',
        }),
    ).exactOptional(),
    LastModifiedBy: LastModifiedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who last modified the ruleset.',
        }),
    ).exactOptional(),
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The modification date and time of the ruleset.' }),
    ).exactOptional(),
    ResourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the ruleset.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags that have been applied to the ruleset.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'] })
  .openapi('DescribeRulesetResponse')

const JobNameListSchema = z.array(JobNameSchema).max(50).openapi('JobNameList')

const CronExpressionSchema = z.string().min(1).max(512).openapi('CronExpression')

const DescribeScheduleResponseSchema = z
  .object({
    CreateDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the schedule was created.' }),
    ).exactOptional(),
    CreatedBy: CreatedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier (user name) of the user who created the schedule. ',
        }),
    ).exactOptional(),
    JobNames: JobNameListSchema.and(
      z
        .any()
        .openapi({
          description: 'The name or names of one or more jobs to be run by using the schedule.',
        }),
    ).exactOptional(),
    LastModifiedBy: LastModifiedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier (user name) of the user who last modified the schedule.',
        }),
    ).exactOptional(),
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the schedule was last modified.' }),
    ).exactOptional(),
    ResourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the schedule.' }),
    ).exactOptional(),
    CronExpression: CronExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date or dates and time or times when the jobs are to be run for the schedule. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the <i>Glue DataBrew Developer Guide</i>.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags associated with this schedule.' }),
    ).exactOptional(),
    Name: ScheduleNameSchema.and(z.any().openapi({ description: 'The name of the schedule.' })),
  })
  .openapi({ required: ['Name'] })
  .openapi('DescribeScheduleResponse')

const AccountIdSchema = z.string().max(255).openapi('AccountId')

const DatasetSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon Web Services account that owns the dataset.',
        }),
    ).exactOptional(),
    CreatedBy: CreatedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who created the dataset.',
        }),
    ).exactOptional(),
    CreateDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the dataset was created.' }),
    ).exactOptional(),
    Name: DatasetNameSchema.and(
      z.any().openapi({ description: 'The unique name of the dataset.' }),
    ),
    Format: InputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file format of a dataset that is created from an Amazon S3 file or folder.',
        }),
    ).exactOptional(),
    FormatOptions: FormatOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of options that define how DataBrew interprets the data in the dataset.',
        }),
    ).exactOptional(),
    Input: InputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information on how DataBrew can find the dataset, in either the Glue Data Catalog or Amazon S3.',
        }),
    ),
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The last modification date and time of the dataset.' }),
    ).exactOptional(),
    LastModifiedBy: LastModifiedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who last modified the dataset.',
        }),
    ).exactOptional(),
    Source: SourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the data for the dataset, either Amazon S3 or the Glue Data Catalog.',
        }),
    ).exactOptional(),
    PathOptions: PathOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags that have been applied to the dataset.' }),
    ).exactOptional(),
    ResourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The unique Amazon Resource Name (ARN) for the dataset.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Input'],
    description: 'Represents a dataset that can be processed by DataBrew.',
  })
  .openapi('Dataset')

const DatasetListSchema = z.array(DatasetSchema).openapi('DatasetList')

const NextTokenSchema = z.string().min(1).max(2000).openapi('NextToken')

const ListDatasetsResponseSchema = z
  .object({
    Datasets: DatasetListSchema.and(
      z.any().openapi({ description: 'A list of datasets that are defined.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you can use in a subsequent call to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Datasets'] })
  .openapi('ListDatasetsResponse')

const JobRunSchema = z
  .object({
    Attempt: AttemptSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of times that DataBrew has attempted to run the job.',
        }),
    ).exactOptional(),
    CompletedOn: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the job completed processing.' }),
    ).exactOptional(),
    DatasetName: DatasetNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset for the job to process.' }),
    ).exactOptional(),
    ErrorMessage: JobRunErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'A message indicating an error (if any) that was encountered when the job ran.',
        }),
    ).exactOptional(),
    ExecutionTime: ExecutionTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The amount of time, in seconds, during which a job run consumed resources.',
        }),
    ).exactOptional(),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The name of the job being processed during this run.' }),
    ).exactOptional(),
    RunId: JobRunIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the job run.' }),
    ).exactOptional(),
    State: JobRunStateSchema.and(
      z.any().openapi({ description: 'The current state of the job run entity itself.' }),
    ).exactOptional(),
    LogSubscription: LogSubscriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'The current status of Amazon CloudWatch logging for the job run.',
        }),
    ).exactOptional(),
    LogGroupName: LogGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an Amazon CloudWatch log group, where the job writes diagnostic messages when it runs.',
        }),
    ).exactOptional(),
    Outputs: OutputListSchema.and(
      z.any().openapi({ description: 'One or more output artifacts from a job run.' }),
    ).exactOptional(),
    DataCatalogOutputs: DataCatalogOutputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more artifacts that represent the Glue Data Catalog output from running the job.',
        }),
    ).exactOptional(),
    DatabaseOutputs: DatabaseOutputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.',
        }),
    ).exactOptional(),
    RecipeReference: RecipeReferenceSchema.and(
      z.any().openapi({ description: 'The set of steps processed by the job.' }),
    ).exactOptional(),
    StartedBy: StartedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who initiated the job run. ',
        }),
    ).exactOptional(),
    StartedOn: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the job run began. ' }),
    ).exactOptional(),
    JobSample: JobSampleSchema.and(
      z
        .any()
        .openapi({
          description:
            "A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a <code>JobSample</code> value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.",
        }),
    ).exactOptional(),
    ValidationConfigurations: ValidationConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description: 'List of validation configurations that are applied to the profile job run.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents one run of a DataBrew job.', required: [] })
  .openapi('JobRun')

const JobRunListSchema = z.array(JobRunSchema).openapi('JobRunList')

const ListJobRunsResponseSchema = z
  .object({
    JobRuns: JobRunListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of job runs that have occurred for the specified job.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you can use in a subsequent call to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobRuns'] })
  .openapi('ListJobRunsResponse')

const JobSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the Amazon Web Services account that owns the job.' }),
    ).exactOptional(),
    CreatedBy: CreatedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who created the job.',
        }),
    ).exactOptional(),
    CreateDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the job was created.' }),
    ).exactOptional(),
    DatasetName: DatasetNameSchema.and(
      z.any().openapi({ description: 'A dataset that the job is to process.' }),
    ).exactOptional(),
    EncryptionKeyArn: EncryptionKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an encryption key that is used to protect the job output. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/encryption-security-configuration.html">Encrypting data written by DataBrew jobs</a> ',
        }),
    ).exactOptional(),
    EncryptionMode: EncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Name: JobNameSchema.and(z.any().openapi({ description: 'The unique name of the job.' })),
    Type: JobTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The job type of the job, which must be one of the following:</p> <ul> <li> <p> <code>PROFILE</code> - A job to analyze a dataset, to determine its size, data types, data distribution, and more.</p> </li> <li> <p> <code>RECIPE</code> - A job to apply one or more transformations to a dataset.</p> </li> </ul>',
        }),
    ).exactOptional(),
    LastModifiedBy: LastModifiedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who last modified the job.',
        }),
    ).exactOptional(),
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The modification date and time of the job.' }),
    ).exactOptional(),
    LogSubscription: LogSubscriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The current status of Amazon CloudWatch logging for the job.' }),
    ).exactOptional(),
    MaxCapacity: MaxCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of nodes that can be consumed when the job processes data.',
        }),
    ).exactOptional(),
    MaxRetries: MaxRetriesSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of times to retry the job after a job run fails.',
        }),
    ).exactOptional(),
    Outputs: OutputListSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more artifacts that represent output from running the job.',
        }),
    ).exactOptional(),
    DataCatalogOutputs: DataCatalogOutputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more artifacts that represent the Glue Data Catalog output from running the job.',
        }),
    ).exactOptional(),
    DatabaseOutputs: DatabaseOutputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.',
        }),
    ).exactOptional(),
    ProjectName: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project that the job is associated with.' }),
    ).exactOptional(),
    RecipeReference: RecipeReferenceSchema.and(
      z.any().openapi({ description: 'A set of steps that the job runs.' }),
    ).exactOptional(),
    ResourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The unique Amazon Resource Name (ARN) for the job.' }),
    ).exactOptional(),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the role to be assumed for this job.',
        }),
    ).exactOptional(),
    Timeout: TimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            "The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.",
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags that have been applied to the job.' }),
    ).exactOptional(),
    JobSample: JobSampleSchema.and(
      z
        .any()
        .openapi({
          description:
            "A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a <code>JobSample</code> value isn't provided, the default value is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.",
        }),
    ).exactOptional(),
    ValidationConfigurations: ValidationConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description: 'List of validation configurations that are applied to the profile job.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description: 'Represents all of the attributes of a DataBrew job.',
  })
  .openapi('Job')

const JobListSchema = z.array(JobSchema).openapi('JobList')

const ListJobsResponseSchema = z
  .object({
    Jobs: JobListSchema.and(z.any().openapi({ description: 'A list of jobs that are defined.' })),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you can use in a subsequent call to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Jobs'] })
  .openapi('ListJobsResponse')

const ProjectSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon Web Services account that owns the project.',
        }),
    ).exactOptional(),
    CreateDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the project was created.' }),
    ).exactOptional(),
    CreatedBy: CreatedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who crated the project.',
        }),
    ).exactOptional(),
    DatasetName: DatasetNameSchema.and(
      z.any().openapi({ description: 'The dataset that the project is to act upon.' }),
    ).exactOptional(),
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The last modification date and time for the project.' }),
    ).exactOptional(),
    LastModifiedBy: LastModifiedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who last modified the project.',
        }),
    ).exactOptional(),
    Name: ProjectNameSchema.and(z.any().openapi({ description: 'The unique name of a project.' })),
    RecipeName: RecipeNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of a recipe that will be developed during a project session.',
        }),
    ),
    ResourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the project.' }),
    ).exactOptional(),
    Sample: SampleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The sample size and sampling type to apply to the data. If this parameter isn't specified, then the sample consists of the first 500 rows from the dataset.",
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags that have been applied to the project.' }),
    ).exactOptional(),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the role that will be assumed for this project.',
        }),
    ).exactOptional(),
    OpenedBy: OpenedBySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the user that opened the project for use.',
        }),
    ).exactOptional(),
    OpenDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the project was opened.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'RecipeName'],
    description: 'Represents all of the attributes of a DataBrew project.',
  })
  .openapi('Project')

const ProjectListSchema = z.array(ProjectSchema).openapi('ProjectList')

const ListProjectsResponseSchema = z
  .object({
    Projects: ProjectListSchema.and(
      z.any().openapi({ description: 'A list of projects that are defined .' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you can use in a subsequent call to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Projects'] })
  .openapi('ListProjectsResponse')

const RecipeSchema = z
  .object({
    CreatedBy: CreatedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who created the recipe.',
        }),
    ).exactOptional(),
    CreateDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the recipe was created.' }),
    ).exactOptional(),
    LastModifiedBy: LastModifiedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who last modified the recipe.',
        }),
    ).exactOptional(),
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The last modification date and time of the recipe.' }),
    ).exactOptional(),
    ProjectName: ProjectNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the project that the recipe is associated with.' }),
    ).exactOptional(),
    PublishedBy: PublishedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who published the recipe.',
        }),
    ).exactOptional(),
    PublishedDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the recipe was published.' }),
    ).exactOptional(),
    Description: RecipeDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the recipe.' }),
    ).exactOptional(),
    Name: RecipeNameSchema.and(z.any().openapi({ description: 'The unique name for the recipe.' })),
    ResourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the recipe.' }),
    ).exactOptional(),
    Steps: RecipeStepListSchema.and(
      z.any().openapi({ description: 'A list of steps that are defined by the recipe.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags that have been applied to the recipe.' }),
    ).exactOptional(),
    RecipeVersion: RecipeVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier for the version for the recipe. Must be one of the following:</p> <ul> <li> <p>Numeric version (<code>X.Y</code>) - <code>X</code> and <code>Y</code> stand for major and minor version numbers. The maximum length of each is 6 digits, and neither can be negative values. Both <code>X</code> and <code>Y</code> are required, and "0.0" isn\'t a valid version.</p> </li> <li> <p> <code>LATEST_WORKING</code> - the most recent valid version being developed in a DataBrew project.</p> </li> <li> <p> <code>LATEST_PUBLISHED</code> - the most recent published version.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description: 'Represents one or more actions to be performed on a DataBrew dataset.',
  })
  .openapi('Recipe')

const RecipeListSchema = z.array(RecipeSchema).openapi('RecipeList')

const ListRecipeVersionsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you can use in a subsequent call to retrieve the next set of results.',
        }),
    ).exactOptional(),
    Recipes: RecipeListSchema.and(
      z.any().openapi({ description: 'A list of versions for the specified recipe.' }),
    ),
  })
  .openapi({ required: ['Recipes'] })
  .openapi('ListRecipeVersionsResponse')

const ListRecipesResponseSchema = z
  .object({
    Recipes: RecipeListSchema.and(
      z.any().openapi({ description: 'A list of recipes that are defined.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you can use in a subsequent call to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Recipes'] })
  .openapi('ListRecipesResponse')

const RuleCountSchema = z.int().min(0).openapi('RuleCount')

const RulesetItemSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon Web Services account that owns the ruleset.',
        }),
    ).exactOptional(),
    CreatedBy: CreatedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who created the ruleset.',
        }),
    ).exactOptional(),
    CreateDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the ruleset was created.' }),
    ).exactOptional(),
    Description: RulesetDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the ruleset.' }),
    ).exactOptional(),
    LastModifiedBy: LastModifiedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who last modified the ruleset.',
        }),
    ).exactOptional(),
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The modification date and time of the ruleset.' }),
    ).exactOptional(),
    Name: RulesetNameSchema.and(z.any().openapi({ description: 'The name of the ruleset.' })),
    ResourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the ruleset.' }),
    ).exactOptional(),
    RuleCount: RuleCountSchema.and(
      z.any().openapi({ description: 'The number of rules that are defined in the ruleset.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags that have been applied to the ruleset.' }),
    ).exactOptional(),
    TargetArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is associated with.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'TargetArn'], description: 'Contains metadata about the ruleset.' })
  .openapi('RulesetItem')

const RulesetItemListSchema = z.array(RulesetItemSchema).openapi('RulesetItemList')

const ListRulesetsResponseSchema = z
  .object({
    Rulesets: RulesetItemListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of RulesetItem. RulesetItem contains meta data of a ruleset.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you can use in a subsequent call to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Rulesets'] })
  .openapi('ListRulesetsResponse')

const ScheduleSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon Web Services account that owns the schedule.',
        }),
    ).exactOptional(),
    CreatedBy: CreatedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who created the schedule.',
        }),
    ).exactOptional(),
    CreateDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the schedule was created.' }),
    ).exactOptional(),
    JobNames: JobNameListSchema.and(
      z.any().openapi({ description: 'A list of jobs to be run, according to the schedule.' }),
    ).exactOptional(),
    LastModifiedBy: LastModifiedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who last modified the schedule.',
        }),
    ).exactOptional(),
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the schedule was last modified.' }),
    ).exactOptional(),
    ResourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the schedule.' }),
    ).exactOptional(),
    CronExpression: CronExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The dates and times when the job is to run. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the <i>Glue DataBrew Developer Guide</i>.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags that have been applied to the schedule.' }),
    ).exactOptional(),
    Name: ScheduleNameSchema.and(z.any().openapi({ description: 'The name of the schedule.' })),
  })
  .openapi({
    required: ['Name'],
    description: 'Represents one or more dates and times when a job is to run.',
  })
  .openapi('Schedule')

const ScheduleListSchema = z.array(ScheduleSchema).openapi('ScheduleList')

const ListSchedulesResponseSchema = z
  .object({
    Schedules: ScheduleListSchema.and(
      z.any().openapi({ description: 'A list of schedules that are defined.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you can use in a subsequent call to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Schedules'] })
  .openapi('ListSchedulesResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'A list of tags associated with the DataBrew resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const PublishRecipeResponseSchema = z
  .object({
    Name: RecipeNameSchema.and(
      z.any().openapi({ description: 'The name of the recipe that you published.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('PublishRecipeResponse')

const ResultSchema = z.string().openapi('Result')

const ActionIdSchema = z.int().openapi('ActionId')

const SendProjectSessionActionResponseSchema = z
  .object({
    Result: ResultSchema.and(
      z.any().openapi({ description: 'A message indicating the result of performing the action.' }),
    ).exactOptional(),
    Name: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project that was affected by the action.' }),
    ),
    ActionId: ActionIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the action that was performed.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'] })
  .openapi('SendProjectSessionActionResponse')

const StartColumnIndexSchema = z.int().min(0).openapi('StartColumnIndex')

const ColumnRangeSchema = z.int().min(0).max(20).openapi('ColumnRange')

const HiddenColumnListSchema = z.array(ColumnNameSchema).openapi('HiddenColumnList')

const StartRowIndexSchema = z.int().min(0).openapi('StartRowIndex')

const RowRangeSchema = z.int().openapi('RowRange')

const AnalyticsModeSchema = z.enum(['ENABLE', 'DISABLE']).openapi('AnalyticsMode')

const StartJobRunResponseSchema = z
  .object({
    RunId: JobRunIdSchema.and(
      z
        .any()
        .openapi({ description: 'A system-generated identifier for this particular job run.' }),
    ),
  })
  .openapi({ required: ['RunId'] })
  .openapi('StartJobRunResponse')

const ClientSessionIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9-]*$/)
  .min(1)
  .max(255)
  .openapi('ClientSessionId')

const StartProjectSessionResponseSchema = z
  .object({
    Name: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project to be acted upon.' }),
    ),
    ClientSessionId: ClientSessionIdSchema.and(
      z.any().openapi({ description: 'A system-generated identifier for the session.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'] })
  .openapi('StartProjectSessionResponse')

const StopJobRunResponseSchema = z
  .object({
    RunId: JobRunIdSchema.and(
      z.any().openapi({ description: 'The ID of the job run that you stopped.' }),
    ),
  })
  .openapi({ required: ['RunId'] })
  .openapi('StopJobRunResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const UpdateDatasetResponseSchema = z
  .object({
    Name: DatasetNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset that you updated.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('UpdateDatasetResponse')

const UpdateProfileJobResponseSchema = z
  .object({
    Name: JobNameSchema.and(
      z.any().openapi({ description: 'The name of the job that was updated.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('UpdateProfileJobResponse')

const UpdateProjectResponseSchema = z
  .object({
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The date and time that the project was last modified.' }),
    ).exactOptional(),
    Name: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project that you updated.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('UpdateProjectResponse')

const UpdateRecipeResponseSchema = z
  .object({
    Name: RecipeNameSchema.and(
      z.any().openapi({ description: 'The name of the recipe that was updated.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('UpdateRecipeResponse')

const UpdateRecipeJobResponseSchema = z
  .object({
    Name: JobNameSchema.and(
      z.any().openapi({ description: 'The name of the job that you updated.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('UpdateRecipeJobResponse')

const UpdateRulesetResponseSchema = z
  .object({
    Name: RulesetNameSchema.and(
      z.any().openapi({ description: 'The name of the updated ruleset.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('UpdateRulesetResponse')

const UpdateScheduleResponseSchema = z
  .object({
    Name: ScheduleNameSchema.and(
      z.any().openapi({ description: 'The name of the schedule that was updated.' }),
    ),
  })
  .openapi({ required: ['Name'] })
  .openapi('UpdateScheduleResponse')

const AssumeControlSchema = z.boolean().openapi('AssumeControl')

const RecipeVersionListSchema = z
  .array(RecipeVersionSchema)
  .min(1)
  .max(50)
  .openapi('RecipeVersionList')

const BatchDeleteRecipeVersionRequestSchema = z
  .object({
    RecipeVersions: RecipeVersionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of version identifiers, for the recipe versions to be deleted. You can specify numeric versions (<code>X.Y</code>) or <code>LATEST_WORKING</code>. <code>LATEST_PUBLISHED</code> is not supported.',
        }),
    ),
  })
  .openapi({ required: ['RecipeVersions'], title: 'BatchDeleteRecipeVersionRequest' })
  .openapi('BatchDeleteRecipeVersionRequest')

const CreateDatasetRequestSchema = z
  .object({
    Name: DatasetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the dataset to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.',
        }),
    ),
    Format: InputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file format of a dataset that is created from an Amazon S3 file or folder.',
        }),
    ).exactOptional(),
    FormatOptions: FormatOptionsSchema.exactOptional(),
    Input: InputSchema,
    PathOptions: PathOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags to apply to this dataset.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'Input'], title: 'CreateDatasetRequest' })
  .openapi('CreateDatasetRequest')

const CreateProfileJobRequestSchema = z
  .object({
    DatasetName: DatasetNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset that this job is to act upon.' }),
    ),
    EncryptionKeyArn: EncryptionKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.',
        }),
    ).exactOptional(),
    EncryptionMode: EncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - <code>SSE-KMS</code> - Server-side encryption with KMS-managed keys.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Name: JobNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the job to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.',
        }),
    ),
    LogSubscription: LogSubscriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.',
        }),
    ).exactOptional(),
    MaxCapacity: MaxCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of nodes that DataBrew can use when the job processes data.',
        }),
    ).exactOptional(),
    MaxRetries: MaxRetriesSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of times to retry the job after a job run fails.',
        }),
    ).exactOptional(),
    OutputLocation: S3LocationSchema,
    Configuration: ProfileConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration for profile jobs. Used to select columns, do evaluations, and override default parameters of evaluations. When configuration is null, the profile job will run with default settings.',
        }),
    ).exactOptional(),
    ValidationConfigurations: ValidationConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description: 'List of validation configurations that are applied to the profile job.',
        }),
    ).exactOptional(),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.',
        }),
    ),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags to apply to this job.' }),
    ).exactOptional(),
    Timeout: TimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            "The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.",
        }),
    ).exactOptional(),
    JobSample: JobSampleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sample configuration for profile jobs only. Determines the number of rows on which the profile job will be executed. If a JobSample value is not provided, the default value will be used. The default value is CUSTOM_ROWS for the mode parameter and 20000 for the size parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DatasetName', 'Name', 'OutputLocation', 'RoleArn'],
    title: 'CreateProfileJobRequest',
  })
  .openapi('CreateProfileJobRequest')

const CreateProjectRequestSchema = z
  .object({
    DatasetName: DatasetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of an existing dataset to associate this project with.',
        }),
    ),
    Name: ProjectNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique name for the new project. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.',
        }),
    ),
    RecipeName: RecipeNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of an existing recipe to associate with the project.' }),
    ),
    Sample: SampleSchema.exactOptional(),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed for this request.',
        }),
    ),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags to apply to this project.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DatasetName', 'Name', 'RecipeName', 'RoleArn'],
    title: 'CreateProjectRequest',
  })
  .openapi('CreateProjectRequest')

const CreateRecipeJobRequestSchema = z
  .object({
    DatasetName: DatasetNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset that this job processes.' }),
    ).exactOptional(),
    EncryptionKeyArn: EncryptionKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.',
        }),
    ).exactOptional(),
    EncryptionMode: EncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Name: JobNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique name for the job. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.',
        }),
    ),
    LogSubscription: LogSubscriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.',
        }),
    ).exactOptional(),
    MaxCapacity: MaxCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of nodes that DataBrew can consume when the job processes data.',
        }),
    ).exactOptional(),
    MaxRetries: MaxRetriesSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of times to retry the job after a job run fails.',
        }),
    ).exactOptional(),
    Outputs: OutputListSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more artifacts that represent the output from running the job.',
        }),
    ).exactOptional(),
    DataCatalogOutputs: DataCatalogOutputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more artifacts that represent the Glue Data Catalog output from running the job.',
        }),
    ).exactOptional(),
    DatabaseOutputs: DatabaseOutputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write to. ',
        }),
    ).exactOptional(),
    ProjectName: ProjectNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Either the name of an existing project, or a combination of a recipe and a dataset to associate with the recipe.',
        }),
    ).exactOptional(),
    RecipeReference: RecipeReferenceSchema.exactOptional(),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.',
        }),
    ),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags to apply to this job.' }),
    ).exactOptional(),
    Timeout: TimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            "The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'RoleArn'], title: 'CreateRecipeJobRequest' })
  .openapi('CreateRecipeJobRequest')

const CreateRecipeRequestSchema = z
  .object({
    Description: RecipeDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the recipe.' }),
    ).exactOptional(),
    Name: RecipeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique name for the recipe. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.',
        }),
    ),
    Steps: RecipeStepListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array containing the steps to be performed by the recipe. Each recipe step consists of one recipe action and (optionally) an array of condition expressions.',
        }),
    ),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags to apply to this recipe.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'Steps'], title: 'CreateRecipeRequest' })
  .openapi('CreateRecipeRequest')

const CreateRulesetRequestSchema = z
  .object({
    Name: RulesetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the ruleset to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.',
        }),
    ),
    Description: RulesetDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the ruleset.' }),
    ).exactOptional(),
    TargetArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is associated with.',
        }),
    ),
    Rules: RuleListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of rules that are defined with the ruleset. A rule includes one or more checks to be validated on a DataBrew dataset.',
        }),
    ),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags to apply to the ruleset.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'TargetArn', 'Rules'], title: 'CreateRulesetRequest' })
  .openapi('CreateRulesetRequest')

const CreateScheduleRequestSchema = z
  .object({
    JobNames: JobNameListSchema.and(
      z.any().openapi({ description: 'The name or names of one or more jobs to be run.' }),
    ).exactOptional(),
    CronExpression: CronExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date or dates and time or times when the jobs are to be run. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the <i>Glue DataBrew Developer Guide</i>.',
        }),
    ),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Metadata tags to apply to this schedule.' }),
    ).exactOptional(),
    Name: ScheduleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique name for the schedule. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.',
        }),
    ),
  })
  .openapi({ required: ['CronExpression', 'Name'], title: 'CreateScheduleRequest' })
  .openapi('CreateScheduleRequest')

const DeleteDatasetRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDatasetRequest' })
  .openapi('DeleteDatasetRequest')

const DeleteJobRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteJobRequest' })
  .openapi('DeleteJobRequest')

const DeleteProjectRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteProjectRequest' })
  .openapi('DeleteProjectRequest')

const DeleteRecipeVersionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRecipeVersionRequest' })
  .openapi('DeleteRecipeVersionRequest')

const DeleteRulesetRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRulesetRequest' })
  .openapi('DeleteRulesetRequest')

const DeleteScheduleRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteScheduleRequest' })
  .openapi('DeleteScheduleRequest')

const DescribeDatasetRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeDatasetRequest' })
  .openapi('DescribeDatasetRequest')

const DescribeJobRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeJobRequest' })
  .openapi('DescribeJobRequest')

const DescribeJobRunRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeJobRunRequest' })
  .openapi('DescribeJobRunRequest')

const DescribeProjectRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeProjectRequest' })
  .openapi('DescribeProjectRequest')

const DescribeRecipeRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeRecipeRequest' })
  .openapi('DescribeRecipeRequest')

const DescribeRulesetRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeRulesetRequest' })
  .openapi('DescribeRulesetRequest')

const DescribeScheduleRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeScheduleRequest' })
  .openapi('DescribeScheduleRequest')

const MaxResults100Schema = z.int().min(1).max(100).openapi('MaxResults100')

const ListDatasetsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDatasetsRequest' })
  .openapi('ListDatasetsRequest')

const ListJobRunsRequestSchema = z
  .object({})
  .openapi({ title: 'ListJobRunsRequest' })
  .openapi('ListJobRunsRequest')

const ListJobsRequestSchema = z
  .object({})
  .openapi({ title: 'ListJobsRequest' })
  .openapi('ListJobsRequest')

const ListProjectsRequestSchema = z
  .object({})
  .openapi({ title: 'ListProjectsRequest' })
  .openapi('ListProjectsRequest')

const ListRecipeVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListRecipeVersionsRequest' })
  .openapi('ListRecipeVersionsRequest')

const ListRecipesRequestSchema = z
  .object({})
  .openapi({ title: 'ListRecipesRequest' })
  .openapi('ListRecipesRequest')

const ListRulesetsRequestSchema = z
  .object({})
  .openapi({ title: 'ListRulesetsRequest' })
  .openapi('ListRulesetsRequest')

const ListSchedulesRequestSchema = z
  .object({})
  .openapi({ title: 'ListSchedulesRequest' })
  .openapi('ListSchedulesRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ParameterNameSchema = z
  .string()
  .regex(/^[A-Za-z0-9]+$/)
  .min(1)
  .max(128)
  .openapi('ParameterName')

const PreviewSchema = z.boolean().openapi('Preview')

const PublishRecipeRequestSchema = z
  .object({
    Description: RecipeDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the recipe to be published, for this version of the recipe.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PublishRecipeRequest', required: [] })
  .openapi('PublishRecipeRequest')

const StepIndexSchema = z.int().min(0).openapi('StepIndex')

const ViewFrameSchema = z
  .object({
    StartColumnIndex: StartColumnIndexSchema.and(
      z
        .any()
        .openapi({
          description: 'The starting index for the range of columns to return in the view frame.',
        }),
    ),
    ColumnRange: ColumnRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of columns to include in the view frame, beginning with the <code>StartColumnIndex</code> value and ignoring any columns in the <code>HiddenColumns</code> list.',
        }),
    ).exactOptional(),
    HiddenColumns: HiddenColumnListSchema.and(
      z.any().openapi({ description: 'A list of columns to hide in the view frame.' }),
    ).exactOptional(),
    StartRowIndex: StartRowIndexSchema.and(
      z
        .any()
        .openapi({
          description: 'The starting index for the range of rows to return in the view frame.',
        }),
    ).exactOptional(),
    RowRange: RowRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of rows to include in the view frame, beginning with the <code>StartRowIndex</code> value.',
        }),
    ).exactOptional(),
    Analytics: AnalyticsModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Controls if analytics computation is enabled or disabled. Enabled by default.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StartColumnIndex'],
    description: 'Represents the data being transformed during an action.',
  })
  .openapi('ViewFrame')

const SendProjectSessionActionRequestSchema = z
  .object({
    Preview: PreviewSchema.and(
      z
        .any()
        .openapi({
          description: 'If true, the result of the recipe step will be returned, but not applied.',
        }),
    ).exactOptional(),
    RecipeStep: RecipeStepSchema.exactOptional(),
    StepIndex: StepIndexSchema.and(
      z
        .any()
        .openapi({
          description:
            'The index from which to preview a step. This index is used to preview the result of steps that have already been applied, so that the resulting view frame is from earlier in the view frame stack.',
        }),
    ).exactOptional(),
    ClientSessionId: ClientSessionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier for an interactive session that's currently open and ready for work. The action will be performed on this session.",
        }),
    ).exactOptional(),
    ViewFrame: ViewFrameSchema.exactOptional(),
  })
  .openapi({ title: 'SendProjectSessionActionRequest', required: [] })
  .openapi('SendProjectSessionActionRequest')

const StartJobRunRequestSchema = z
  .object({})
  .openapi({ title: 'StartJobRunRequest' })
  .openapi('StartJobRunRequest')

const StartProjectSessionRequestSchema = z
  .object({
    AssumeControl: AssumeControlSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that, if true, enables you to take control of a session, even if a different client is currently accessing the project.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'StartProjectSessionRequest', required: [] })
  .openapi('StartProjectSessionRequest')

const StopJobRunRequestSchema = z
  .object({})
  .openapi({ title: 'StopJobRunRequest' })
  .openapi('StopJobRunRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'One or more tags to be assigned to the resource.' }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateDatasetRequestSchema = z
  .object({
    Format: InputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file format of a dataset that is created from an Amazon S3 file or folder.',
        }),
    ).exactOptional(),
    FormatOptions: FormatOptionsSchema.exactOptional(),
    Input: InputSchema,
    PathOptions: PathOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Input'], title: 'UpdateDatasetRequest' })
  .openapi('UpdateDatasetRequest')

const UpdateProfileJobRequestSchema = z
  .object({
    Configuration: ProfileConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration for profile jobs. Used to select columns, do evaluations, and override default parameters of evaluations. When configuration is null, the profile job will run with default settings.',
        }),
    ).exactOptional(),
    EncryptionKeyArn: EncryptionKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.',
        }),
    ).exactOptional(),
    EncryptionMode: EncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>',
        }),
    ).exactOptional(),
    LogSubscription: LogSubscriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.',
        }),
    ).exactOptional(),
    MaxCapacity: MaxCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of compute nodes that DataBrew can use when the job processes data.',
        }),
    ).exactOptional(),
    MaxRetries: MaxRetriesSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of times to retry the job after a job run fails.',
        }),
    ).exactOptional(),
    OutputLocation: S3LocationSchema,
    ValidationConfigurations: ValidationConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description: 'List of validation configurations that are applied to the profile job.',
        }),
    ).exactOptional(),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.',
        }),
    ),
    Timeout: TimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            "The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.",
        }),
    ).exactOptional(),
    JobSample: JobSampleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sample configuration for Profile Jobs only. Determines the number of rows on which the Profile job will be executed. If a JobSample value is not provided for profile jobs, the default value will be used. The default value is CUSTOM_ROWS for the mode parameter and 20000 for the size parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['OutputLocation', 'RoleArn'], title: 'UpdateProfileJobRequest' })
  .openapi('UpdateProfileJobRequest')

const UpdateProjectRequestSchema = z
  .object({
    Sample: SampleSchema.exactOptional(),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role to be assumed for this request.',
        }),
    ),
  })
  .openapi({ required: ['RoleArn'], title: 'UpdateProjectRequest' })
  .openapi('UpdateProjectRequest')

const UpdateRecipeJobRequestSchema = z
  .object({
    EncryptionKeyArn: EncryptionKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.',
        }),
    ).exactOptional(),
    EncryptionMode: EncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>',
        }),
    ).exactOptional(),
    LogSubscription: LogSubscriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.',
        }),
    ).exactOptional(),
    MaxCapacity: MaxCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of nodes that DataBrew can consume when the job processes data.',
        }),
    ).exactOptional(),
    MaxRetries: MaxRetriesSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of times to retry the job after a job run fails.',
        }),
    ).exactOptional(),
    Outputs: OutputListSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more artifacts that represent the output from running the job. ',
        }),
    ).exactOptional(),
    DataCatalogOutputs: DataCatalogOutputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more artifacts that represent the Glue Data Catalog output from running the job.',
        }),
    ).exactOptional(),
    DatabaseOutputs: DatabaseOutputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.',
        }),
    ).exactOptional(),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.',
        }),
    ),
    Timeout: TimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            "The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['RoleArn'], title: 'UpdateRecipeJobRequest' })
  .openapi('UpdateRecipeJobRequest')

const UpdateRecipeRequestSchema = z
  .object({
    Description: RecipeDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the recipe.' }),
    ).exactOptional(),
    Steps: RecipeStepListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more steps to be performed by the recipe. Each step consists of an action, and the conditions under which the action should succeed.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateRecipeRequest', required: [] })
  .openapi('UpdateRecipeRequest')

const UpdateRulesetRequestSchema = z
  .object({
    Description: RulesetDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the ruleset.' }),
    ).exactOptional(),
    Rules: RuleListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of rules that are defined with the ruleset. A rule includes one or more checks to be validated on a DataBrew dataset.',
        }),
    ),
  })
  .openapi({ required: ['Rules'], title: 'UpdateRulesetRequest' })
  .openapi('UpdateRulesetRequest')

const UpdateScheduleRequestSchema = z
  .object({
    JobNames: JobNameListSchema.and(
      z
        .any()
        .openapi({
          description: 'The name or names of one or more jobs to be run for this schedule.',
        }),
    ).exactOptional(),
    CronExpression: CronExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date or dates and time or times when the jobs are to be run. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the <i>Glue DataBrew Developer Guide</i>.',
        }),
    ),
  })
  .openapi({ required: ['CronExpression'], title: 'UpdateScheduleRequest' })
  .openapi('UpdateScheduleRequest')

const ValueReferenceSchema = z
  .string()
  .regex(/^:[A-Za-z0-9_]+$/)
  .min(2)
  .max(128)
  .openapi('ValueReference')

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

export const postRecipesNameBatchDeleteRecipeVersionRoute = createRoute({
  method: 'post',
  path: '/recipes/{name}/batchDeleteRecipeVersion',
  description:
    "<p>Deletes one or more versions of a recipe at a time.</p> <p>The entire request will be rejected if:</p> <ul> <li> <p>The recipe does not exist.</p> </li> <li> <p>There is an invalid version identifier in the list of versions.</p> </li> <li> <p>The version list is empty.</p> </li> <li> <p>The version list size exceeds 50.</p> </li> <li> <p>The version list contains duplicate entries.</p> </li> </ul> <p>The request will complete successfully, but with partial failures, if:</p> <ul> <li> <p>A version does not exist.</p> </li> <li> <p>A version is being used by a job.</p> </li> <li> <p>You specify <code>LATEST_WORKING</code>, but it's being used by a project.</p> </li> <li> <p>The version fails to be deleted.</p> </li> </ul> <p>The <code>LATEST_WORKING</code> version will only be deleted if the recipe has no other versions. If you try to delete <code>LATEST_WORKING</code> while other versions exist (or if they can't be deleted), then <code>LATEST_WORKING</code> will be listed as partial failure in the response.</p>",
  operationId: 'BatchDeleteRecipeVersion',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the recipe whose versions are to be deleted.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              RecipeVersions: z
                .array(RecipeVersionSchema)
                .min(1)
                .max(50)
                .openapi({
                  description:
                    'An array of version identifiers, for the recipe versions to be deleted. You can specify numeric versions (<code>X.Y</code>) or <code>LATEST_WORKING</code>. <code>LATEST_PUBLISHED</code> is not supported.',
                }),
            })
            .openapi({ required: ['RecipeVersions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDeleteRecipeVersionResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getDatasetsRoute = createRoute({
  method: 'get',
  path: '/datasets',
  description: 'Lists all of the DataBrew datasets.',
  operationId: 'ListDatasets',
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
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this request. ',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .min(1)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token returned by a previous call to retrieve the next set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 2000 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatasetsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postDatasetsRoute = createRoute({
  method: 'post',
  path: '/datasets',
  description: 'Creates a new DataBrew dataset.',
  operationId: 'CreateDataset',
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
              Name: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'The name of the dataset to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.',
                }),
              Format: z
                .enum(['CSV', 'JSON', 'PARQUET', 'EXCEL', 'ORC'])
                .exactOptional()
                .openapi({
                  description:
                    'The file format of a dataset that is created from an Amazon S3 file or folder.',
                }),
              FormatOptions: z
                .object({
                  Json: JsonOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Options that define how JSON input is to be interpreted by DataBrew.',
                      }),
                  ).exactOptional(),
                  Excel: ExcelOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Options that define how Excel input is to be interpreted by DataBrew.',
                      }),
                  ).exactOptional(),
                  Csv: CsvOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Options that define how CSV input is to be interpreted by DataBrew.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.',
                  required: [],
                }),
              Input: z
                .object({
                  S3InputDefinition: S3LocationSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The Amazon S3 location where the data is stored.' }),
                  ).exactOptional(),
                  DataCatalogInputDefinition: DataCatalogInputDefinitionSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The Glue Data Catalog parameters for the data.' }),
                  ).exactOptional(),
                  DatabaseInputDefinition: DatabaseInputDefinitionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Connection information for dataset input files stored in a database.',
                      }),
                  ).exactOptional(),
                  Metadata: MetadataSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Contains additional resource information needed for specific datasets.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.',
                  required: [],
                }),
              PathOptions: z
                .object({
                  LastModifiedDateCondition: FilterExpressionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'If provided, this structure defines a date range for matching Amazon S3 objects based on their LastModifiedDate attribute in Amazon S3.',
                      }),
                  ).exactOptional(),
                  FilesLimit: FilesLimitSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'If provided, this structure imposes a limit on a number of files that should be selected.',
                      }),
                  ).exactOptional(),
                  Parameters: PathParametersMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A structure that maps names of parameters used in the Amazon S3 path of a dataset to their definitions.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset.',
                  required: [],
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({ description: 'Metadata tags to apply to this dataset.' }),
            })
            .openapi({ required: ['Name', 'Input'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDatasetResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postProfileJobsRoute = createRoute({
  method: 'post',
  path: '/profileJobs',
  description: 'Creates a new job to analyze a dataset and create its data profile.',
  operationId: 'CreateProfileJob',
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
              DatasetName: z
                .string()
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the dataset that this job is to act upon.' }),
              EncryptionKeyArn: z
                .string()
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.',
                }),
              EncryptionMode: z
                .enum(['SSE-KMS', 'SSE-S3'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - <code>SSE-KMS</code> - Server-side encryption with KMS-managed keys.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>',
                }),
              Name: z
                .string()
                .min(1)
                .max(240)
                .openapi({
                  description:
                    'The name of the job to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.',
                }),
              LogSubscription: z
                .enum(['ENABLE', 'DISABLE'])
                .exactOptional()
                .openapi({
                  description:
                    'Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.',
                }),
              MaxCapacity: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of nodes that DataBrew can use when the job processes data.',
                }),
              MaxRetries: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of times to retry the job after a job run fails.',
                }),
              OutputLocation: z
                .object({
                  Bucket: BucketSchema.and(
                    z.any().openapi({ description: 'The Amazon S3 bucket name.' }),
                  ).exactOptional(),
                  Key: KeySchema.and(
                    z
                      .any()
                      .openapi({ description: 'The unique name of the object in the bucket.' }),
                  ).exactOptional(),
                  BucketOwner: BucketOwnerSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The Amazon Web Services account ID of the bucket owner.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.',
                  required: [],
                }),
              Configuration: z
                .object({
                  DatasetStatisticsConfiguration: StatisticsConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configuration for inter-column evaluations. Configuration can be used to select evaluations and override parameters of evaluations. When configuration is undefined, the profile job will run all supported inter-column evaluations. ',
                      }),
                  ).exactOptional(),
                  ProfileColumns: ColumnSelectorListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'List of column selectors. ProfileColumns can be used to select columns from the dataset. When ProfileColumns is undefined, the profile job will profile all supported columns. ',
                      }),
                  ).exactOptional(),
                  ColumnStatisticsConfigurations: ColumnStatisticsConfigurationListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'List of configurations for column evaluations. ColumnStatisticsConfigurations are used to select evaluations and override parameters of evaluations for particular columns. When ColumnStatisticsConfigurations is undefined, the profile job will profile all supported columns and run all supported evaluations. ',
                      }),
                  ).exactOptional(),
                  EntityDetectorConfiguration: EntityDetectorConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configuration of entity detection for a profile job. When undefined, entity detection is disabled.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns. ',
                  required: [],
                }),
              ValidationConfigurations: z
                .array(ValidationConfigurationSchema)
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'List of validation configurations that are applied to the profile job.',
                }),
              RoleArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({ description: 'Metadata tags to apply to this job.' }),
              Timeout: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    "The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.",
                }),
              JobSample: z
                .object({
                  Mode: SampleModeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A value that determines whether the profile job is run on the entire dataset or a specified number of rows. This value must be one of the following:</p> <ul> <li> <p>FULL_DATASET - The profile job is run on the entire dataset.</p> </li> <li> <p>CUSTOM_ROWS - The profile job is run on the number of rows specified in the <code>Size</code> parameter.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  Size: JobSizeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The <code>Size</code> parameter is only required when the mode is CUSTOM_ROWS. The profile job is run on the specified number of rows. The maximum value for size is Long.MAX_VALUE.</p> <p>Long.MAX_VALUE = 9223372036854775807</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a <code>JobSample</code> value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.",
                  required: [],
                }),
            })
            .openapi({ required: ['DatasetName', 'Name', 'OutputLocation', 'RoleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProfileJobResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getProjectsRoute = createRoute({
  method: 'get',
  path: '/projects',
  description: 'Lists all of the DataBrew projects that are defined.',
  operationId: 'ListProjects',
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
      nextToken: z
        .string()
        .min(1)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token returned by a previous call to retrieve the next set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 2000 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this request. ',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProjectsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postProjectsRoute = createRoute({
  method: 'post',
  path: '/projects',
  description: 'Creates a new DataBrew project.',
  operationId: 'CreateProject',
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
              DatasetName: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'The name of an existing dataset to associate this project with.',
                }),
              Name: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'A unique name for the new project. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.',
                }),
              RecipeName: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'The name of an existing recipe to associate with the project.',
                }),
              Sample: z
                .object({
                  Size: SampleSizeSchema.and(
                    z.any().openapi({ description: 'The number of rows in the sample.' }),
                  ).exactOptional(),
                  Type: SampleTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The way in which DataBrew obtains rows from a dataset.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Represents the sample size and sampling type for DataBrew to use for interactive data analysis.',
                  required: [],
                }),
              RoleArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed for this request.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({ description: 'Metadata tags to apply to this project.' }),
            })
            .openapi({ required: ['DatasetName', 'Name', 'RecipeName', 'RoleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProjectResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getRecipesRoute = createRoute({
  method: 'get',
  path: '/recipes',
  description: 'Lists all of the DataBrew recipes that are defined.',
  operationId: 'ListRecipes',
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
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this request. ',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .min(1)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token returned by a previous call to retrieve the next set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 2000 },
          },
        }),
      recipeVersion: z
        .string()
        .min(1)
        .max(16)
        .exactOptional()
        .openapi({
          param: {
            name: 'recipeVersion',
            in: 'query',
            required: false,
            description:
              '<p>Return only those recipes with a version identifier of <code>LATEST_WORKING</code> or <code>LATEST_PUBLISHED</code>. If <code>RecipeVersion</code> is omitted, <code>ListRecipes</code> returns all of the <code>LATEST_PUBLISHED</code> recipe versions.</p> <p>Valid values: <code>LATEST_WORKING</code> | <code>LATEST_PUBLISHED</code> </p>',
            schema: { type: 'string', minLength: 1, maxLength: 16 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRecipesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postRecipesRoute = createRoute({
  method: 'post',
  path: '/recipes',
  description: 'Creates a new DataBrew recipe.',
  operationId: 'CreateRecipe',
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
              Description: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({ description: 'A description for the recipe.' }),
              Name: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'A unique name for the recipe. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.',
                }),
              Steps: z
                .array(RecipeStepSchema)
                .openapi({
                  description:
                    'An array containing the steps to be performed by the recipe. Each recipe step consists of one recipe action and (optionally) an array of condition expressions.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({ description: 'Metadata tags to apply to this recipe.' }),
            })
            .openapi({ required: ['Name', 'Steps'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRecipeResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postRecipeJobsRoute = createRoute({
  method: 'post',
  path: '/recipeJobs',
  description:
    'Creates a new job to transform input data, using steps defined in an existing Glue DataBrew recipe',
  operationId: 'CreateRecipeJob',
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
              DatasetName: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The name of the dataset that this job processes.' }),
              EncryptionKeyArn: z
                .string()
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.',
                }),
              EncryptionMode: z
                .enum(['SSE-KMS', 'SSE-S3'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>',
                }),
              Name: z
                .string()
                .min(1)
                .max(240)
                .openapi({
                  description:
                    'A unique name for the job. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.',
                }),
              LogSubscription: z
                .enum(['ENABLE', 'DISABLE'])
                .exactOptional()
                .openapi({
                  description:
                    'Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.',
                }),
              MaxCapacity: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of nodes that DataBrew can consume when the job processes data.',
                }),
              MaxRetries: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of times to retry the job after a job run fails.',
                }),
              Outputs: z
                .array(OutputSchema)
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'One or more artifacts that represent the output from running the job.',
                }),
              DataCatalogOutputs: z
                .array(DataCatalogOutputSchema)
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'One or more artifacts that represent the Glue Data Catalog output from running the job.',
                }),
              DatabaseOutputs: z
                .array(DatabaseOutputSchema)
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write to. ',
                }),
              ProjectName: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'Either the name of an existing project, or a combination of a recipe and a dataset to associate with the recipe.',
                }),
              RecipeReference: z
                .object({
                  Name: RecipeNameSchema.and(
                    z.any().openapi({ description: 'The name of the recipe.' }),
                  ).exactOptional(),
                  RecipeVersion: RecipeVersionSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The identifier for the version for the recipe. ' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Represents the name and version of a DataBrew recipe.',
                  required: [],
                }),
              RoleArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({ description: 'Metadata tags to apply to this job.' }),
              Timeout: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    "The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.",
                }),
            })
            .openapi({ required: ['Name', 'RoleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRecipeJobResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getRulesetsRoute = createRoute({
  method: 'get',
  path: '/rulesets',
  description:
    'List all rulesets available in the current account or rulesets associated with a specific resource (dataset).',
  operationId: 'ListRulesets',
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
      targetArn: z
        .string()
        .min(20)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'targetArn',
            in: 'query',
            required: false,
            description:
              'The Amazon Resource Name (ARN) of a resource (dataset). Using this parameter indicates to return only those rulesets that are associated with the specified resource.',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this request.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .min(1)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'A token generated by DataBrew that specifies where to continue pagination if a previous request was truncated. To get the next set of pages, pass in the NextToken value from the response object of the previous page call.',
            schema: { type: 'string', minLength: 1, maxLength: 2000 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRulesetsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postRulesetsRoute = createRoute({
  method: 'post',
  path: '/rulesets',
  description:
    'Creates a new ruleset that can be used in a profile job to validate the data quality of a dataset.',
  operationId: 'CreateRuleset',
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
              Name: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'The name of the ruleset to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.',
                }),
              Description: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The description of the ruleset.' }),
              TargetArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is associated with.',
                }),
              Rules: z
                .array(RuleSchema)
                .min(1)
                .openapi({
                  description:
                    'A list of rules that are defined with the ruleset. A rule includes one or more checks to be validated on a DataBrew dataset.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({ description: 'Metadata tags to apply to the ruleset.' }),
            })
            .openapi({ required: ['Name', 'TargetArn', 'Rules'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRulesetResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getSchedulesRoute = createRoute({
  method: 'get',
  path: '/schedules',
  description: 'Lists the DataBrew schedules that are defined.',
  operationId: 'ListSchedules',
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
      jobName: z
        .string()
        .min(1)
        .max(240)
        .exactOptional()
        .openapi({
          param: {
            name: 'jobName',
            in: 'query',
            required: false,
            description: 'The name of the job that these schedules apply to.',
            schema: { type: 'string', minLength: 1, maxLength: 240 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this request. ',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .min(1)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token returned by a previous call to retrieve the next set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 2000 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSchedulesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postSchedulesRoute = createRoute({
  method: 'post',
  path: '/schedules',
  description:
    'Creates a new schedule for one or more DataBrew jobs. Jobs can be run at a specific date and time, or at regular intervals.',
  operationId: 'CreateSchedule',
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
              JobNames: z
                .array(JobNameSchema)
                .max(50)
                .exactOptional()
                .openapi({ description: 'The name or names of one or more jobs to be run.' }),
              CronExpression: z
                .string()
                .min(1)
                .max(512)
                .openapi({
                  description:
                    'The date or dates and time or times when the jobs are to be run. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the <i>Glue DataBrew Developer Guide</i>.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({ description: 'Metadata tags to apply to this schedule.' }),
              Name: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'A unique name for the schedule. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.',
                }),
            })
            .openapi({ required: ['CronExpression', 'Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateScheduleResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getDatasetsNameRoute = createRoute({
  method: 'get',
  path: '/datasets/{name}',
  description: 'Returns the definition of a specific DataBrew dataset.',
  operationId: 'DescribeDataset',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the dataset to be described.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDatasetResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putDatasetsNameRoute = createRoute({
  method: 'put',
  path: '/datasets/{name}',
  description: 'Modifies the definition of an existing DataBrew dataset.',
  operationId: 'UpdateDataset',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the dataset to be updated.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Format: z
                .enum(['CSV', 'JSON', 'PARQUET', 'EXCEL', 'ORC'])
                .exactOptional()
                .openapi({
                  description:
                    'The file format of a dataset that is created from an Amazon S3 file or folder.',
                }),
              FormatOptions: z
                .object({
                  Json: JsonOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Options that define how JSON input is to be interpreted by DataBrew.',
                      }),
                  ).exactOptional(),
                  Excel: ExcelOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Options that define how Excel input is to be interpreted by DataBrew.',
                      }),
                  ).exactOptional(),
                  Csv: CsvOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Options that define how CSV input is to be interpreted by DataBrew.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.',
                  required: [],
                }),
              Input: z
                .object({
                  S3InputDefinition: S3LocationSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The Amazon S3 location where the data is stored.' }),
                  ).exactOptional(),
                  DataCatalogInputDefinition: DataCatalogInputDefinitionSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The Glue Data Catalog parameters for the data.' }),
                  ).exactOptional(),
                  DatabaseInputDefinition: DatabaseInputDefinitionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Connection information for dataset input files stored in a database.',
                      }),
                  ).exactOptional(),
                  Metadata: MetadataSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Contains additional resource information needed for specific datasets.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.',
                  required: [],
                }),
              PathOptions: z
                .object({
                  LastModifiedDateCondition: FilterExpressionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'If provided, this structure defines a date range for matching Amazon S3 objects based on their LastModifiedDate attribute in Amazon S3.',
                      }),
                  ).exactOptional(),
                  FilesLimit: FilesLimitSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'If provided, this structure imposes a limit on a number of files that should be selected.',
                      }),
                  ).exactOptional(),
                  Parameters: PathParametersMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A structure that maps names of parameters used in the Amazon S3 path of a dataset to their definitions.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset.',
                  required: [],
                }),
            })
            .openapi({ required: ['Input'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDatasetResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteDatasetsNameRoute = createRoute({
  method: 'delete',
  path: '/datasets/{name}',
  description: 'Deletes a dataset from DataBrew.',
  operationId: 'DeleteDataset',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the dataset to be deleted.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDatasetResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getJobsNameRoute = createRoute({
  method: 'get',
  path: '/jobs/{name}',
  description: 'Returns the definition of a specific DataBrew job.',
  operationId: 'DescribeJob',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(240)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the job to be described.',
            schema: { type: 'string', minLength: 1, maxLength: 240 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteJobsNameRoute = createRoute({
  method: 'delete',
  path: '/jobs/{name}',
  description: 'Deletes the specified DataBrew job.',
  operationId: 'DeleteJob',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(240)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the job to be deleted.',
            schema: { type: 'string', minLength: 1, maxLength: 240 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteJobResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getProjectsNameRoute = createRoute({
  method: 'get',
  path: '/projects/{name}',
  description: 'Returns the definition of a specific DataBrew project.',
  operationId: 'DescribeProject',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the project to be described.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProjectResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putProjectsNameRoute = createRoute({
  method: 'put',
  path: '/projects/{name}',
  description: 'Modifies the definition of an existing DataBrew project.',
  operationId: 'UpdateProject',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the project to be updated.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Sample: z
                .object({
                  Size: SampleSizeSchema.and(
                    z.any().openapi({ description: 'The number of rows in the sample.' }),
                  ).exactOptional(),
                  Type: SampleTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The way in which DataBrew obtains rows from a dataset.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Represents the sample size and sampling type for DataBrew to use for interactive data analysis.',
                  required: [],
                }),
              RoleArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the IAM role to be assumed for this request.',
                }),
            })
            .openapi({ required: ['RoleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProjectResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteProjectsNameRoute = createRoute({
  method: 'delete',
  path: '/projects/{name}',
  description: 'Deletes an existing DataBrew project.',
  operationId: 'DeleteProject',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the project to be deleted.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProjectResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteRecipesNameRecipeVersionRecipeVersionRoute = createRoute({
  method: 'delete',
  path: '/recipes/{name}/recipeVersion/{recipeVersion}',
  description: 'Deletes a single version of a DataBrew recipe.',
  operationId: 'DeleteRecipeVersion',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the recipe.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      recipeVersion: z
        .string()
        .min(1)
        .max(16)
        .openapi({
          param: {
            name: 'recipeVersion',
            in: 'path',
            required: true,
            description:
              'The version of the recipe to be deleted. You can specify a numeric versions (<code>X.Y</code>) or <code>LATEST_WORKING</code>. <code>LATEST_PUBLISHED</code> is not supported.',
            schema: { type: 'string', minLength: 1, maxLength: 16 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRecipeVersionResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getRulesetsNameRoute = createRoute({
  method: 'get',
  path: '/rulesets/{name}',
  description: 'Retrieves detailed information about the ruleset.',
  operationId: 'DescribeRuleset',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ruleset to be described.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRulesetResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putRulesetsNameRoute = createRoute({
  method: 'put',
  path: '/rulesets/{name}',
  description: 'Updates specified ruleset.',
  operationId: 'UpdateRuleset',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ruleset to be updated.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The description of the ruleset.' }),
              Rules: z
                .array(RuleSchema)
                .min(1)
                .openapi({
                  description:
                    'A list of rules that are defined with the ruleset. A rule includes one or more checks to be validated on a DataBrew dataset.',
                }),
            })
            .openapi({ required: ['Rules'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRulesetResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteRulesetsNameRoute = createRoute({
  method: 'delete',
  path: '/rulesets/{name}',
  description: 'Deletes a ruleset.',
  operationId: 'DeleteRuleset',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the ruleset to be deleted.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRulesetResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getSchedulesNameRoute = createRoute({
  method: 'get',
  path: '/schedules/{name}',
  description: 'Returns the definition of a specific DataBrew schedule.',
  operationId: 'DescribeSchedule',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the schedule to be described.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeScheduleResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putSchedulesNameRoute = createRoute({
  method: 'put',
  path: '/schedules/{name}',
  description: 'Modifies the definition of an existing DataBrew schedule.',
  operationId: 'UpdateSchedule',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the schedule to update.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              JobNames: z
                .array(JobNameSchema)
                .max(50)
                .exactOptional()
                .openapi({
                  description: 'The name or names of one or more jobs to be run for this schedule.',
                }),
              CronExpression: z
                .string()
                .min(1)
                .max(512)
                .openapi({
                  description:
                    'The date or dates and time or times when the jobs are to be run. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the <i>Glue DataBrew Developer Guide</i>.',
                }),
            })
            .openapi({ required: ['CronExpression'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateScheduleResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteSchedulesNameRoute = createRoute({
  method: 'delete',
  path: '/schedules/{name}',
  description: 'Deletes the specified DataBrew schedule.',
  operationId: 'DeleteSchedule',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the schedule to be deleted.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteScheduleResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getJobsNameJobRunRunIdRoute = createRoute({
  method: 'get',
  path: '/jobs/{name}/jobRun/{runId}',
  description: 'Represents one run of a DataBrew job.',
  operationId: 'DescribeJobRun',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(240)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the job being processed during this run.',
            schema: { type: 'string', minLength: 1, maxLength: 240 },
          },
        }),
      runId: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'runId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the job run.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeJobRunResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getRecipesNameRoute = createRoute({
  method: 'get',
  path: '/recipes/{name}',
  description:
    'Returns the definition of a specific DataBrew recipe corresponding to a particular version.',
  operationId: 'DescribeRecipe',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the recipe to be described.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      recipeVersion: z
        .string()
        .min(1)
        .max(16)
        .exactOptional()
        .openapi({
          param: {
            name: 'recipeVersion',
            in: 'query',
            required: false,
            description:
              "The recipe version identifier. If this parameter isn't specified, then the latest published version is returned.",
            schema: { type: 'string', minLength: 1, maxLength: 16 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRecipeResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putRecipesNameRoute = createRoute({
  method: 'put',
  path: '/recipes/{name}',
  description:
    'Modifies the definition of the <code>LATEST_WORKING</code> version of a DataBrew recipe.',
  operationId: 'UpdateRecipe',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the recipe to be updated.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({ description: 'A description of the recipe.' }),
              Steps: z
                .array(RecipeStepSchema)
                .exactOptional()
                .openapi({
                  description:
                    'One or more steps to be performed by the recipe. Each step consists of an action, and the conditions under which the action should succeed.',
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
      content: { 'application/json': { schema: UpdateRecipeResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getJobsNameJobRunsRoute = createRoute({
  method: 'get',
  path: '/jobs/{name}/jobRuns',
  description: 'Lists all of the previous runs of a particular DataBrew job.',
  operationId: 'ListJobRuns',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(240)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the job.',
            schema: { type: 'string', minLength: 1, maxLength: 240 },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this request. ',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .min(1)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token returned by a previous call to retrieve the next set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 2000 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJobRunsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getJobsRoute = createRoute({
  method: 'get',
  path: '/jobs',
  description: 'Lists all of the DataBrew jobs that are defined.',
  operationId: 'ListJobs',
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
      datasetName: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'datasetName',
            in: 'query',
            required: false,
            description:
              'The name of a dataset. Using this parameter indicates to return only those jobs that act on the specified dataset.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this request. ',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .min(1)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'A token generated by DataBrew that specifies where to continue pagination if a previous request was truncated. To get the next set of pages, pass in the NextToken value from the response object of the previous page call. ',
            schema: { type: 'string', minLength: 1, maxLength: 2000 },
          },
        }),
      projectName: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'projectName',
            in: 'query',
            required: false,
            description:
              'The name of a project. Using this parameter indicates to return only those jobs that are associated with the specified project.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJobsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getRecipeVersionsNameRoute = createRoute({
  method: 'get',
  path: '/recipeVersions#name',
  description:
    'Lists the versions of a particular DataBrew recipe, except for <code>LATEST_WORKING</code>.',
  operationId: 'ListRecipeVersions',
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
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this request. ',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .min(1)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token returned by a previous call to retrieve the next set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 2000 },
          },
        }),
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: true,
            description: 'The name of the recipe for which to return version information.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRecipeVersionsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{ResourceArn}',
  description: 'Lists all the tags for a DataBrew resource. ',
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
    }),
    params: z.object({
      ResourceArn: z
        .string()
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) string that uniquely identifies the DataBrew resource. ',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{ResourceArn}',
  description:
    'Adds metadata tags to a DataBrew resource, such as a dataset, project, recipe, job, or schedule.',
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
    }),
    params: z.object({
      ResourceArn: z
        .string()
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description:
              'The DataBrew resource to which tags should be added. The value for this parameter is an Amazon Resource Name (ARN). For DataBrew, you can tag a dataset, a job, a project, or a recipe.',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .openapi({ description: 'One or more tags to be assigned to the resource.' }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postRecipesNamePublishRecipeRoute = createRoute({
  method: 'post',
  path: '/recipes/{name}/publishRecipe',
  description: 'Publishes a new version of a DataBrew recipe.',
  operationId: 'PublishRecipe',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the recipe to be published.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'A description of the recipe to be published, for this version of the recipe.',
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
      content: { 'application/json': { schema: PublishRecipeResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const putProjectsNameSendProjectSessionActionRoute = createRoute({
  method: 'put',
  path: '/projects/{name}/sendProjectSessionAction',
  description:
    "Performs a recipe step within an interactive DataBrew session that's currently open.",
  operationId: 'SendProjectSessionAction',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the project to apply the action to.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Preview: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If true, the result of the recipe step will be returned, but not applied.',
                }),
              RecipeStep: z
                .object({
                  Action: RecipeActionSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The particular action to be performed in the recipe step.',
                      }),
                  ).exactOptional(),
                  ConditionExpressions: ConditionExpressionListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>One or more conditions that must be met for the recipe step to succeed.</p> <note> <p>All of the conditions in the array must be met. In other words, all of the conditions must be combined using a logical AND operation.</p> </note>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Represents a single step from a DataBrew recipe to be performed.',
                  required: [],
                }),
              StepIndex: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    'The index from which to preview a step. This index is used to preview the result of steps that have already been applied, so that the resulting view frame is from earlier in the view frame stack.',
                }),
              ClientSessionId: z
                .string()
                .regex(/^[a-zA-Z0-9][a-zA-Z0-9-]*$/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    "A unique identifier for an interactive session that's currently open and ready for work. The action will be performed on this session.",
                }),
              ViewFrame: z
                .object({
                  StartColumnIndex: StartColumnIndexSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The starting index for the range of columns to return in the view frame.',
                      }),
                  ).exactOptional(),
                  ColumnRange: ColumnRangeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The number of columns to include in the view frame, beginning with the <code>StartColumnIndex</code> value and ignoring any columns in the <code>HiddenColumns</code> list.',
                      }),
                  ).exactOptional(),
                  HiddenColumns: HiddenColumnListSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A list of columns to hide in the view frame.' }),
                  ).exactOptional(),
                  StartRowIndex: StartRowIndexSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The starting index for the range of rows to return in the view frame.',
                      }),
                  ).exactOptional(),
                  RowRange: RowRangeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The number of rows to include in the view frame, beginning with the <code>StartRowIndex</code> value.',
                      }),
                  ).exactOptional(),
                  Analytics: AnalyticsModeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Controls if analytics computation is enabled or disabled. Enabled by default.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Represents the data being transformed during an action.',
                  required: [],
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
      content: { 'application/json': { schema: SendProjectSessionActionResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postJobsNameStartJobRunRoute = createRoute({
  method: 'post',
  path: '/jobs/{name}/startJobRun',
  description: 'Runs a DataBrew job.',
  operationId: 'StartJobRun',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(240)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the job to be run.',
            schema: { type: 'string', minLength: 1, maxLength: 240 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartJobRunResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putProjectsNameStartProjectSessionRoute = createRoute({
  method: 'put',
  path: '/projects/{name}/startProjectSession',
  description:
    'Creates an interactive session, enabling you to manipulate data in a DataBrew project.',
  operationId: 'StartProjectSession',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the project to act upon.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AssumeControl: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'A value that, if true, enables you to take control of a session, even if a different client is currently accessing the project.',
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
      content: { 'application/json': { schema: StartProjectSessionResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postJobsNameJobRunRunIdStopJobRunRoute = createRoute({
  method: 'post',
  path: '/jobs/{name}/jobRun/{runId}/stopJobRun',
  description: 'Stops a particular run of a job.',
  operationId: 'StopJobRun',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(240)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the job to be stopped.',
            schema: { type: 'string', minLength: 1, maxLength: 240 },
          },
        }),
      runId: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'runId',
            in: 'path',
            required: true,
            description: 'The ID of the job run to be stopped.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopJobRunResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{ResourceArn}#tagKeys',
  description: 'Removes metadata tags from a DataBrew resource.',
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
    }),
    params: z.object({
      ResourceArn: z
        .string()
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description:
              'A DataBrew resource from which you want to remove a tag or tags. The value for this parameter is an Amazon Resource Name (ARN). ',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(200),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The tag keys (names) of one or more tags to be removed.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 200,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putProfileJobsNameRoute = createRoute({
  method: 'put',
  path: '/profileJobs/{name}',
  description: 'Modifies the definition of an existing profile job.',
  operationId: 'UpdateProfileJob',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(240)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the job to be updated.',
            schema: { type: 'string', minLength: 1, maxLength: 240 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Configuration: z
                .object({
                  DatasetStatisticsConfiguration: StatisticsConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configuration for inter-column evaluations. Configuration can be used to select evaluations and override parameters of evaluations. When configuration is undefined, the profile job will run all supported inter-column evaluations. ',
                      }),
                  ).exactOptional(),
                  ProfileColumns: ColumnSelectorListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'List of column selectors. ProfileColumns can be used to select columns from the dataset. When ProfileColumns is undefined, the profile job will profile all supported columns. ',
                      }),
                  ).exactOptional(),
                  ColumnStatisticsConfigurations: ColumnStatisticsConfigurationListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'List of configurations for column evaluations. ColumnStatisticsConfigurations are used to select evaluations and override parameters of evaluations for particular columns. When ColumnStatisticsConfigurations is undefined, the profile job will profile all supported columns and run all supported evaluations. ',
                      }),
                  ).exactOptional(),
                  EntityDetectorConfiguration: EntityDetectorConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configuration of entity detection for a profile job. When undefined, entity detection is disabled.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns. ',
                  required: [],
                }),
              EncryptionKeyArn: z
                .string()
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.',
                }),
              EncryptionMode: z
                .enum(['SSE-KMS', 'SSE-S3'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>',
                }),
              LogSubscription: z
                .enum(['ENABLE', 'DISABLE'])
                .exactOptional()
                .openapi({
                  description:
                    'Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.',
                }),
              MaxCapacity: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of compute nodes that DataBrew can use when the job processes data.',
                }),
              MaxRetries: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of times to retry the job after a job run fails.',
                }),
              OutputLocation: z
                .object({
                  Bucket: BucketSchema.and(
                    z.any().openapi({ description: 'The Amazon S3 bucket name.' }),
                  ).exactOptional(),
                  Key: KeySchema.and(
                    z
                      .any()
                      .openapi({ description: 'The unique name of the object in the bucket.' }),
                  ).exactOptional(),
                  BucketOwner: BucketOwnerSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The Amazon Web Services account ID of the bucket owner.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.',
                  required: [],
                }),
              ValidationConfigurations: z
                .array(ValidationConfigurationSchema)
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'List of validation configurations that are applied to the profile job.',
                }),
              RoleArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.',
                }),
              Timeout: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    "The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.",
                }),
              JobSample: z
                .object({
                  Mode: SampleModeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A value that determines whether the profile job is run on the entire dataset or a specified number of rows. This value must be one of the following:</p> <ul> <li> <p>FULL_DATASET - The profile job is run on the entire dataset.</p> </li> <li> <p>CUSTOM_ROWS - The profile job is run on the number of rows specified in the <code>Size</code> parameter.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  Size: JobSizeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The <code>Size</code> parameter is only required when the mode is CUSTOM_ROWS. The profile job is run on the specified number of rows. The maximum value for size is Long.MAX_VALUE.</p> <p>Long.MAX_VALUE = 9223372036854775807</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a <code>JobSample</code> value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.",
                  required: [],
                }),
            })
            .openapi({ required: ['OutputLocation', 'RoleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProfileJobResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putRecipeJobsNameRoute = createRoute({
  method: 'put',
  path: '/recipeJobs/{name}',
  description: 'Modifies the definition of an existing DataBrew recipe job.',
  operationId: 'UpdateRecipeJob',
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
    params: z.object({
      name: z
        .string()
        .min(1)
        .max(240)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the job to update.',
            schema: { type: 'string', minLength: 1, maxLength: 240 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              EncryptionKeyArn: z
                .string()
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.',
                }),
              EncryptionMode: z
                .enum(['SSE-KMS', 'SSE-S3'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>',
                }),
              LogSubscription: z
                .enum(['ENABLE', 'DISABLE'])
                .exactOptional()
                .openapi({
                  description:
                    'Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.',
                }),
              MaxCapacity: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of nodes that DataBrew can consume when the job processes data.',
                }),
              MaxRetries: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of times to retry the job after a job run fails.',
                }),
              Outputs: z
                .array(OutputSchema)
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'One or more artifacts that represent the output from running the job. ',
                }),
              DataCatalogOutputs: z
                .array(DataCatalogOutputSchema)
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'One or more artifacts that represent the Glue Data Catalog output from running the job.',
                }),
              DatabaseOutputs: z
                .array(DatabaseOutputSchema)
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.',
                }),
              RoleArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.',
                }),
              Timeout: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    "The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.",
                }),
            })
            .openapi({ required: ['RoleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRecipeJobResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})
