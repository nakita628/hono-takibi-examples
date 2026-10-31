import { createRoute, z } from '@hono/zod-openapi'

type QueryParameterTypeType = {
  arrayType?: QueryParameterTypeType
  rangeElementType?: QueryParameterTypeType
  structTypes?: { description?: string; name?: string; type?: QueryParameterTypeType }[]
  type?: string
}

const RangeValueSchema: z.ZodType<RangeValueType> = z
  .lazy(() =>
    z
      .object({
        end: QueryParameterValueSchema.exactOptional().openapi({
          description:
            'Optional. The end value of the range. A missing value represents an unbounded end.',
        }),
        start: QueryParameterValueSchema.exactOptional().openapi({
          description:
            'Optional. The start value of the range. A missing value represents an unbounded start.',
        }),
      })
      .openapi({ description: 'Represents the value of a range.', required: [] }),
  )
  .openapi('RangeValue')

type QueryParameterValueType = {
  arrayValues?: QueryParameterValueType[]
  rangeValue?: z.infer<typeof RangeValueSchema>
  structValues?: { [key: string]: QueryParameterValueType }
  value?: string
}

const QueryParameterValueSchema: z.ZodType<QueryParameterValueType> = z
  .lazy(() =>
    z
      .object({
        arrayValues: z
          .array(QueryParameterValueSchema)
          .exactOptional()
          .openapi({ description: 'Optional. The array values, if this is an array type.' }),
        rangeValue: RangeValueSchema.exactOptional().openapi({
          description: 'Optional. The range value, if this is a range type.',
        }),
        structValues: z
          .record(z.string(), QueryParameterValueSchema)
          .exactOptional()
          .openapi({ description: 'The struct field values.' }),
        value: z
          .string()
          .exactOptional()
          .openapi({ description: 'Optional. The value of this value, if a simple scalar type.' }),
      })
      .openapi({ description: 'The value of a query parameter.', required: [] }),
  )
  .openapi('QueryParameterValue')

type RangeValueType = {
  end?: z.infer<typeof QueryParameterValueSchema>
  start?: z.infer<typeof QueryParameterValueSchema>
}

const StandardSqlStructTypeSchema: z.ZodType<StandardSqlStructTypeType> = z
  .lazy(() =>
    z
      .object({
        fields: z
          .array(StandardSqlFieldSchema)
          .exactOptional()
          .openapi({ description: 'Fields within the struct.' }),
      })
      .openapi({ description: 'The representation of a SQL STRUCT type.', required: [] }),
  )
  .openapi('StandardSqlStructType')

type StandardSqlDataTypeType = {
  arrayElementType?: StandardSqlDataTypeType
  rangeElementType?: StandardSqlDataTypeType
  structType?: z.infer<typeof StandardSqlStructTypeSchema>
  typeKind?:
    | 'TYPE_KIND_UNSPECIFIED'
    | 'INT64'
    | 'BOOL'
    | 'FLOAT64'
    | 'STRING'
    | 'BYTES'
    | 'TIMESTAMP'
    | 'DATE'
    | 'TIME'
    | 'DATETIME'
    | 'INTERVAL'
    | 'GEOGRAPHY'
    | 'NUMERIC'
    | 'BIGNUMERIC'
    | 'JSON'
    | 'ARRAY'
    | 'STRUCT'
    | 'RANGE'
}

const StandardSqlDataTypeSchema: z.ZodType<StandardSqlDataTypeType> = z
  .lazy(() =>
    z
      .object({
        arrayElementType: StandardSqlDataTypeSchema.exactOptional().openapi({
          description: 'The type of the array\'s elements, if type_kind = "ARRAY".',
        }),
        rangeElementType: StandardSqlDataTypeSchema.exactOptional().openapi({
          description: 'The type of the range\'s elements, if type_kind = "RANGE".',
        }),
        structType: StandardSqlStructTypeSchema.exactOptional().openapi({
          description: 'The fields of this struct, in order, if type_kind = "STRUCT".',
        }),
        typeKind: z
          .enum([
            'TYPE_KIND_UNSPECIFIED',
            'INT64',
            'BOOL',
            'FLOAT64',
            'STRING',
            'BYTES',
            'TIMESTAMP',
            'DATE',
            'TIME',
            'DATETIME',
            'INTERVAL',
            'GEOGRAPHY',
            'NUMERIC',
            'BIGNUMERIC',
            'JSON',
            'ARRAY',
            'STRUCT',
            'RANGE',
          ])
          .exactOptional()
          .openapi({
            description:
              'Required. The top level type of this field. Can be any GoogleSQL data type (e.g., "INT64", "DATE", "ARRAY").',
          }),
      })
      .openapi({
        description:
          'The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } }',
        required: [],
      }),
  )
  .openapi('StandardSqlDataType')

type StandardSqlFieldType = { name?: string; type?: z.infer<typeof StandardSqlDataTypeSchema> }

const StandardSqlFieldSchema: z.ZodType<StandardSqlFieldType> = z
  .lazy(() =>
    z
      .object({
        name: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Optional. The name of this field. Can be absent for struct fields.',
          }),
        type: StandardSqlDataTypeSchema.exactOptional().openapi({
          description:
            'Optional. The type of this parameter. Absent if not explicitly specified (e.g., CREATE FUNCTION statement can omit the return type; in this case the output parameter does not have this "type" field).',
        }),
      })
      .openapi({ description: 'A field or a column.', required: [] }),
  )
  .openapi('StandardSqlField')

type StandardSqlStructTypeType = { fields?: z.infer<typeof StandardSqlFieldSchema>[] }

const BigLakeConfigurationSchema = z
  .object({
    connectionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The connection specifying the credentials to be used to read and write to external storage, such as Cloud Storage. The connection_id can have the form "<project\\_id>.<location\\_id>.<connection\\_id>" or "projects/<project\\_id>/locations/<location\\_id>/connections/<connection\\_id>".',
      }),
    fileFormat: z
      .enum(['FILE_FORMAT_UNSPECIFIED', 'PARQUET'])
      .exactOptional()
      .openapi({ description: 'Required. The file format the table data is stored in.' }),
    storageUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The fully qualified location prefix of the external folder where table data is stored. The \'*\' wildcard character is not allowed. The URI should be in the format "gs://bucket/path_to_table/"',
      }),
    tableFormat: z
      .enum(['TABLE_FORMAT_UNSPECIFIED', 'ICEBERG'])
      .exactOptional()
      .openapi({
        description: 'Required. The table format the metadata only snapshots are stored in.',
      }),
  })
  .openapi({ description: 'Configuration for BigLake managed tables.', required: [] })
  .openapi('BigLakeConfiguration')

const TableReferenceSchema = z
  .object({
    datasetId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ID of the dataset containing this table.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ID of the project containing this table.' }),
    tableId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ID of the table. The ID can contain Unicode characters in category L (letter), M (mark), N (number), Pc (connector, including underscore), Pd (dash), and Zs (space). For more information, see [General Category](https://wikipedia.org/wiki/Unicode_character_property#General_Category). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as `sample_table$20190123`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TableReference')

const CloneDefinitionSchema = z
  .object({
    baseTableReference: TableReferenceSchema.exactOptional().openapi({
      description: 'Required. Reference describing the ID of the table that was cloned.',
    }),
    cloneTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Required. The time at which the base table was cloned. This value is reported in the JSON response using RFC3339 format.',
      }),
  })
  .openapi({
    description: 'Information about base table and clone time of a table clone.',
    required: [],
  })
  .openapi('CloneDefinition')

const ClusteringSchema = z
  .object({
    fields: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'One or more fields on which data should be clustered. Only top-level, non-repeated, simple-type fields are supported. The ordering of the clustering fields should be prioritized from most to least important for filtering purposes. Additional information on limitations can be found here: https://cloud.google.com/bigquery/docs/creating-clustered-tables#limitations',
      }),
  })
  .openapi({ description: 'Configures table clustering.', required: [] })
  .openapi('Clustering')

const EncryptionConfigurationSchema = z
  .object({
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key.',
      }),
  })
  .openapi({ required: [] })
  .openapi('EncryptionConfiguration')

const AvroOptionsSchema = z
  .object({
    useAvroLogicalTypes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).',
      }),
  })
  .openapi({ description: 'Options for external data sources.', required: [] })
  .openapi('AvroOptions')

const BigtableColumnSchema = z
  .object({
    encoding: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. 'encoding' can also be set at the column family level. However, the setting at this level takes precedence if 'encoding' is set at both levels.",
      }),
    fieldName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. If the qualifier is not a valid BigQuery field identifier i.e. does not match a-zA-Z*, a valid identifier must be provided as the column field name and is used as field name in queries.',
      }),
    onlyReadLatest: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. If this is set, only the latest version of value in this column are exposed. 'onlyReadLatest' can also be set at the column family level. However, the setting at this level takes precedence if 'onlyReadLatest' is set at both levels.",
      }),
    qualifierEncoded: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Required] Qualifier of the column. Columns in the parent column family that has this exact qualifier are exposed as . field. If the qualifier is valid UTF-8 string, it can be specified in the qualifier_string field. Otherwise, a base-64 encoded value must be set to qualifier_encoded. The column field name is the same as the column qualifier. However, if the qualifier is not a valid BigQuery field identifier i.e. does not match a-zA-Z*, a valid identifier must be provided as field_name.',
      }),
    qualifierString: z.string().exactOptional().openapi({ description: 'Qualifier string.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The type to convert the value in cells of this column. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): * BYTES * STRING * INTEGER * FLOAT * BOOLEAN * JSON Default type is BYTES. 'type' can also be set at the column family level. However, the setting at this level takes precedence if 'type' is set at both levels.",
      }),
  })
  .openapi({ description: 'Information related to a Bigtable column.', required: [] })
  .openapi('BigtableColumn')

const BigtableColumnFamilySchema = z
  .object({
    columns: z
      .array(BigtableColumnSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Lists of columns that should be exposed as individual fields as opposed to a list of (column name, value) pairs. All columns whose qualifier matches a qualifier in this list can be accessed as .. Other columns can be accessed as a list through .Column field.',
      }),
    encoding: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. This can be overridden for a specific column by listing that column in 'columns' and specifying an encoding for it.",
      }),
    familyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the column family.' }),
    onlyReadLatest: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. If this is set only the latest version of value are exposed for all columns in this column family. This can be overridden for a specific column by listing that column in 'columns' and specifying a different setting for that column.",
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The type to convert the value in cells of this column family. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): * BYTES * STRING * INTEGER * FLOAT * BOOLEAN * JSON Default type is BYTES. This can be overridden for a specific column by listing that column in 'columns' and specifying a type for it.",
      }),
  })
  .openapi({ description: 'Information related to a Bigtable column family.', required: [] })
  .openapi('BigtableColumnFamily')

const BigtableOptionsSchema = z
  .object({
    columnFamilies: z
      .array(BigtableColumnFamilySchema)
      .exactOptional()
      .openapi({
        description:
          "Optional. List of column families to expose in the table schema along with their types. This list restricts the column families that can be referenced in queries and specifies their value types. You can use this list to do type conversions - see the 'type' field for more details. If you leave this list empty, all column families are present in the table schema and their values are read as BYTES. During a query only the column families referenced in that query are read from Bigtable.",
      }),
    ignoreUnspecifiedColumnFamilies: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema. Otherwise, they are read with BYTES type values. The default value is false.',
      }),
    outputColumnFamiliesAsJson: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If field is true, then each column family will be read as a single JSON column. Otherwise they are read as a repeated cell structure containing timestamp/value tuples. The default value is false.',
      }),
    readRowkeyAsString: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If field is true, then the rowkey column families will be read and converted to string. Otherwise they are read with BYTES type values and users need to manually cast them with CAST if necessary. The default value is false.',
      }),
  })
  .openapi({ description: 'Options specific to Google Cloud Bigtable data sources.', required: [] })
  .openapi('BigtableOptions')

const CsvOptionsSchema = z
  .object({
    allowJaggedRows: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates if BigQuery should accept rows that are missing trailing optional columns. If true, BigQuery treats missing trailing columns as null values. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.',
      }),
    allowQuotedNewlines: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.',
      }),
    encoding: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The character encoding of the data. The supported values are UTF-8, ISO-8859-1, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties.',
      }),
    fieldDelimiter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The separator character for fields in a CSV file. The separator is interpreted as a single byte. For files encoded in ISO-8859-1, any single character can be used as a separator. For files encoded in UTF-8, characters represented in decimal range 1-127 (U+0001-U+007F) can be used without any modification. UTF-8 characters encoded with multiple bytes (i.e. U+0080 and above) will have only the first byte used for separating fields. The remaining bytes will be treated as a part of the field. BigQuery also supports the escape sequence "\\t" (U+0009) to specify a tab separator. The default value is comma (",", U+002C).',
      }),
    nullMarker: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Optional] A custom string that will represent a NULL value in CSV import data.',
      }),
    preserveAsciiControlCharacters: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. Indicates if the embedded ASCII control characters (the first 32 characters in the ASCII-table, from '\\x00' to '\\x1F') are preserved.",
      }),
    quote: z
      .string()
      .regex(/.?/)
      .default('"')
      .exactOptional()
      .openapi({
        description:
          'Optional. The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ("). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true. To include the specific quote character within a quoted value, precede it with an additional matching quote character. For example, if you want to escape the default character \' " \', use \' "" \'.',
      }),
    skipLeadingRows: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The number of rows at the top of a CSV file that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.',
      }),
  })
  .openapi({ description: 'Information related to a CSV data source.', required: [] })
  .openapi('CsvOptions')

const GoogleSheetsOptionsSchema = z
  .object({
    range: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Range of a sheet to query from. Only used when non-empty. Typical format: sheet_name!top_left_cell_id:bottom_right_cell_id For example: sheet1!A1:B20',
      }),
    skipLeadingRows: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The number of rows at the top of a sheet that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.',
      }),
  })
  .openapi({ description: 'Options specific to Google Sheets data sources.', required: [] })
  .openapi('GoogleSheetsOptions')

const HivePartitioningOptionsSchema = z
  .object({
    fields: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. For permanent external tables, this field is populated with the hive partition keys in the order they were inferred. The types of the partition keys can be deduced by checking the table schema (which will include the partition keys). Not every API will populate this field in the output. For example, Tables.Get will populate it, but Tables.List will not contain this field.',
        readOnly: true,
      }),
    mode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. When set, what mode of hive partitioning to use when reading data. The following modes are supported: * AUTO: automatically infer partition key name(s) and type(s). * STRINGS: automatically infer partition key name(s). All types are strings. * CUSTOM: partition key schema is encoded in the source URI prefix. Not all storage formats support hive partitioning. Requesting hive partitioning on an unsupported format will lead to an error. Currently supported formats are: JSON, CSV, ORC, Avro and Parquet.',
      }),
    requirePartitionFilter: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Optional. If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. Note that this field should only be true when creating a permanent external table or querying a temporary external table. Hive-partitioned loads with require_partition_filter explicitly set to true will fail.',
      }),
    sourceUriPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. When hive partition detection is requested, a common prefix for all source uris must be required. The prefix must end immediately before the partition key encoding begins. For example, consider files following this data layout: gs://bucket/path_to_table/dt=2019-06-01/country=USA/id=7/file.avro gs://bucket/path_to_table/dt=2019-05-31/country=CA/id=3/file.avro When hive partitioning is requested with either AUTO or STRINGS detection, the common prefix can be either of gs://bucket/path_to_table or gs://bucket/path_to_table/. CUSTOM detection requires encoding the partitioning schema immediately after the common prefix. For CUSTOM, any of * gs://bucket/path_to_table/{dt:DATE}/{country:STRING}/{id:INTEGER} * gs://bucket/path_to_table/{dt:STRING}/{country:STRING}/{id:INTEGER} * gs://bucket/path_to_table/{dt:DATE}/{country:STRING}/{id:STRING} would all be valid source URI prefixes.',
      }),
  })
  .openapi({ description: 'Options for configuring hive partitioning detect.', required: [] })
  .openapi('HivePartitioningOptions')

const JsonOptionsSchema = z
  .object({
    encoding: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The character encoding of the data. The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8.',
      }),
  })
  .openapi({ description: 'Json Options for load and make external tables.', required: [] })
  .openapi('JsonOptions')

const ParquetOptionsSchema = z
  .object({
    enableListInference: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates whether to use schema inference specifically for Parquet LIST logical type.',
      }),
    enumAsString: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.',
      }),
  })
  .openapi({ description: 'Parquet Options for load and make external tables.', required: [] })
  .openapi('ParquetOptions')

const TableFieldSchemaSchema: z.ZodType<TableFieldSchemaType> = z
  .lazy(() =>
    z
      .object({
        categories: z
          .object({
            names: z.array(z.string()).exactOptional().openapi({ description: 'Deprecated.' }),
          })
          .exactOptional()
          .openapi({ description: 'Deprecated.', required: [] }),
        collation: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "Optional. Field collation can be set only when the type of field is STRING. The following values are supported: * 'und:ci': undetermined locale, case insensitive. * '': empty string. Default to case-sensitive behavior.",
          }),
        defaultValueExpression: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Optional. A SQL expression to specify the [default value] (https://cloud.google.com/bigquery/docs/default-values) for this field.',
          }),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Optional. The field description. The maximum length is 1,024 characters.',
          }),
        fields: z
          .array(TableFieldSchemaSchema)
          .exactOptional()
          .openapi({
            description:
              'Optional. Describes the nested schema fields if the type property is set to RECORD.',
          }),
        maxLength: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Optional. Maximum length of values of this field for STRINGS or BYTES. If max_length is not specified, no maximum length constraint is imposed on this field. If type = "STRING", then max_length represents the maximum UTF-8 length of strings in this field. If type = "BYTES", then max_length represents the maximum number of bytes in this field. It is invalid to set this field if type ≠ "STRING" and ≠ "BYTES".',
          }),
        mode: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Optional. The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE.',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Required. The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 300 characters.',
          }),
        policyTags: z
          .object({
            names: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description:
                  'A list of policy tag resource names. For example, "projects/1/locations/eu/taxonomies/2/policyTags/3". At most 1 policy tag is currently allowed.',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Optional. The policy tags attached to this field, used for field-level access control. If not set, defaults to empty policy_tags.',
            required: [],
          }),
        precision: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Optional. Precision (maximum number of total digits in base 10) and scale (maximum number of digits in the fractional part in base 10) constraints for values of this field for NUMERIC or BIGNUMERIC. It is invalid to set precision or scale if type ≠ "NUMERIC" and ≠ "BIGNUMERIC". If precision and scale are not specified, no value range constraint is imposed on this field insofar as values are permitted by the type. Values of this NUMERIC or BIGNUMERIC field must be in this range when: * Precision (P) and scale (S) are specified: [-10P-S + 10-S, 10P-S - 10-S] * Precision (P) is specified but not scale (and thus scale is interpreted to be equal to zero): [-10P + 1, 10P - 1]. Acceptable values for precision and scale if both are specified: * If type = "NUMERIC": 1 ≤ precision - scale ≤ 29 and 0 ≤ scale ≤ 9. * If type = "BIGNUMERIC": 1 ≤ precision - scale ≤ 38 and 0 ≤ scale ≤ 38. Acceptable values for precision if only precision is specified but not scale (and thus scale is interpreted to be equal to zero): * If type = "NUMERIC": 1 ≤ precision ≤ 29. * If type = "BIGNUMERIC": 1 ≤ precision ≤ 38. If scale is specified but not precision, then it is invalid.',
          }),
        rangeElementType: z
          .object({
            type: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Required. The type of a field element. See TableFieldSchema.type.',
              }),
          })
          .exactOptional()
          .openapi({ description: 'Represents the type of a field element.', required: [] }),
        roundingMode: z
          .enum(['ROUNDING_MODE_UNSPECIFIED', 'ROUND_HALF_AWAY_FROM_ZERO', 'ROUND_HALF_EVEN'])
          .exactOptional()
          .openapi({
            description:
              'Optional. Specifies the rounding mode to be used when storing values of NUMERIC and BIGNUMERIC type.',
          }),
        scale: z
          .string()
          .exactOptional()
          .openapi({ description: 'Optional. See documentation for precision.' }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Required. The field data type. Possible values include: * STRING * BYTES * INTEGER (or INT64) * FLOAT (or FLOAT64) * BOOLEAN (or BOOL) * TIMESTAMP * DATE * TIME * DATETIME * GEOGRAPHY * NUMERIC * BIGNUMERIC * JSON * RECORD (or STRUCT) Use of RECORD/STRUCT indicates that the field contains a nested schema.',
          }),
      })
      .openapi({ description: 'A field in TableSchema', required: [] }),
  )
  .openapi('TableFieldSchema')

const TableSchemaSchema = z
  .object({
    fields: z
      .array(TableFieldSchemaSchema)
      .exactOptional()
      .openapi({ description: 'Describes the fields in a table.' }),
  })
  .openapi({ description: 'Schema of a table', required: [] })
  .openapi('TableSchema')

const ExternalDataConfigurationSchema = z
  .object({
    autodetect: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Try to detect schema and format options automatically. Any option specified explicitly will be honored.',
      }),
    avroOptions: AvroOptionsSchema.exactOptional().openapi({
      description: 'Optional. Additional properties to set if sourceFormat is set to AVRO.',
    }),
    bigtableOptions: BigtableOptionsSchema.exactOptional().openapi({
      description: 'Optional. Additional options if sourceFormat is set to BIGTABLE.',
    }),
    compression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The compression type of the data source. Possible values include GZIP and NONE. The default value is NONE. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups, Avro, ORC and Parquet formats. An empty string is an invalid value.',
      }),
    connectionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. The connection_id can have the form "<project\\_id>.<location\\_id>.<connection\\_id>" or "projects/<project\\_id>/locations/<location\\_id>/connections/<connection\\_id>".',
      }),
    csvOptions: CsvOptionsSchema.exactOptional().openapi({
      description: 'Optional. Additional properties to set if sourceFormat is set to CSV.',
    }),
    decimalTargetTypes: z
      .array(z.enum(['DECIMAL_TARGET_TYPE_UNSPECIFIED', 'NUMERIC', 'BIGNUMERIC', 'STRING']))
      .exactOptional()
      .openapi({
        description:
          'Defines the list of possible SQL data types to which the source decimal values are converted. This list and the precision and the scale parameters of the decimal field determine the target type. In the order of NUMERIC, BIGNUMERIC, and STRING, a type is picked if it is in the specified list and if it supports the precision and the scale. STRING supports all precision and scale values. If none of the listed types supports the precision and the scale, the type supporting the widest range in the specified list is picked, and if a value exceeds the supported range when reading the data, an error will be thrown. Example: Suppose the value of this field is ["NUMERIC", "BIGNUMERIC"]. If (precision,scale) is: * (38,9) -> NUMERIC; * (39,9) -> BIGNUMERIC (NUMERIC cannot hold 30 integer digits); * (38,10) -> BIGNUMERIC (NUMERIC cannot hold 10 fractional digits); * (76,38) -> BIGNUMERIC; * (77,38) -> BIGNUMERIC (error if value exeeds supported range). This field cannot contain duplicate types. The order of the types in this field is ignored. For example, ["BIGNUMERIC", "NUMERIC"] is the same as ["NUMERIC", "BIGNUMERIC"] and NUMERIC always takes precedence over BIGNUMERIC. Defaults to ["NUMERIC", "STRING"] for ORC and ["NUMERIC"] for the other file formats.',
      }),
    fileSetSpecType: z
      .enum([
        'FILE_SET_SPEC_TYPE_FILE_SYSTEM_MATCH',
        'FILE_SET_SPEC_TYPE_NEW_LINE_DELIMITED_MANIFEST',
      ])
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies how source URIs are interpreted for constructing the file set to load. By default source URIs are expanded against the underlying storage. Other options include specifying manifest files. Only applicable to object storage systems.',
      }),
    googleSheetsOptions: GoogleSheetsOptionsSchema.exactOptional().openapi({
      description: 'Optional. Additional options if sourceFormat is set to GOOGLE_SHEETS.',
    }),
    hivePartitioningOptions: HivePartitioningOptionsSchema.exactOptional().openapi({
      description:
        'Optional. When set, configures hive partitioning support. Not all storage formats support hive partitioning -- requesting hive partitioning on an unsupported format will lead to an error, as will providing an invalid specification.',
    }),
    ignoreUnknownValues: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names Google Cloud Bigtable: This setting is ignored. Google Cloud Datastore backups: This setting is ignored. Avro: This setting is ignored. ORC: This setting is ignored. Parquet: This setting is ignored.",
      }),
    jsonExtension: z
      .enum(['JSON_EXTENSION_UNSPECIFIED', 'GEOJSON'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Load option to be used together with source_format newline-delimited JSON to indicate that a variant of JSON is being loaded. To load newline-delimited GeoJSON, specify GEOJSON (and source_format must be set to NEWLINE_DELIMITED_JSON).',
      }),
    jsonOptions: JsonOptionsSchema.exactOptional().openapi({
      description: 'Optional. Additional properties to set if sourceFormat is set to JSON.',
    }),
    maxBadRecords: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum number of bad records that BigQuery can ignore when reading data. If the number of bad records exceeds this value, an invalid error is returned in the job result. The default value is 0, which requires that all records are valid. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups, Avro, ORC and Parquet formats.',
      }),
    metadataCacheMode: z
      .enum(['METADATA_CACHE_MODE_UNSPECIFIED', 'AUTOMATIC', 'MANUAL'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source.',
      }),
    objectMetadata: z
      .enum(['OBJECT_METADATA_UNSPECIFIED', 'DIRECTORY', 'SIMPLE'])
      .exactOptional()
      .openapi({
        description:
          'Optional. ObjectMetadata is used to create Object Tables. Object Tables contain a listing of objects (with their metadata) found at the source_uris. If ObjectMetadata is set, source_format should be omitted. Currently SIMPLE is the only supported Object Metadata type.',
      }),
    parquetOptions: ParquetOptionsSchema.exactOptional().openapi({
      description: 'Optional. Additional properties to set if sourceFormat is set to PARQUET.',
    }),
    referenceFileSchemaUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. When creating an external table, the user can provide a reference file with the table schema. This is enabled for the following formats: AVRO, PARQUET, ORC.',
      }),
    schema: TableSchemaSchema.exactOptional().openapi({
      description:
        'Optional. The schema for the data. Schema is required for CSV and JSON formats if autodetect is not on. Schema is disallowed for Google Cloud Bigtable, Cloud Datastore backups, Avro, ORC and Parquet formats.',
    }),
    sourceFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Required] The data format. For CSV files, specify "CSV". For Google sheets, specify "GOOGLE_SHEETS". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro files, specify "AVRO". For Google Cloud Datastore backups, specify "DATASTORE_BACKUP". For Apache Iceberg tables, specify "ICEBERG". For ORC files, specify "ORC". For Parquet files, specify "PARQUET". [Beta] For Google Cloud Bigtable, specify "BIGTABLE".',
      }),
    sourceUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "[Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups, exactly one URI can be specified. Also, the '*' wildcard character is not allowed.",
      }),
  })
  .openapi({ required: [] })
  .openapi('ExternalDataConfiguration')

const MaterializedViewDefinitionSchema = z
  .object({
    allowNonIncrementalDefinition: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. This option declares authors intention to construct a materialized view that will not be refreshed incrementally.',
      }),
    enableRefresh: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Enable automatic refresh of the materialized view when the base table is updated. The default value is "true".',
      }),
    lastRefreshTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when this materialized view was last refreshed, in milliseconds since the epoch.',
        readOnly: true,
      }),
    maxStaleness: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Optional] Max staleness of data that could be returned when materizlized view is queried (formatted as Google SQL Interval type).',
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. A query whose results are persisted.' }),
    refreshIntervalMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum frequency at which this materialized view will be refreshed. The default value is "1800000" (30 minutes).',
      }),
  })
  .openapi({ description: 'Definition and configuration of a materialized view.', required: [] })
  .openapi('MaterializedViewDefinition')

const ErrorProtoSchema = z
  .object({
    debugInfo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Debugging information. This property is internal to Google and should not be used.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies where the error occurred, if present.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-readable description of the error.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short error code that summarizes the error.' }),
  })
  .openapi({ description: 'Error details.', required: [] })
  .openapi('ErrorProto')

const MaterializedViewStatusSchema = z
  .object({
    lastRefreshStatus: ErrorProtoSchema.exactOptional().openapi({
      description:
        'Output only. Error result of the last automatic refresh. If present, indicates that the last automatic refresh was unsuccessful.',
      readOnly: true,
    }),
    refreshWatermark: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Refresh watermark of materialized view. The base tables' data were collected into the materialized view cache until this time.",
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Status of a materialized view. The last refresh timestamp status is omitted here, but is present in the MaterializedViewDefinition message.',
    required: [],
  })
  .openapi('MaterializedViewStatus')

const BqmlIterationResultSchema = z
  .object({
    durationMs: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    evalLoss: z.float64().exactOptional().openapi({ description: 'Deprecated.' }),
    index: z.int32().exactOptional().openapi({ description: 'Deprecated.' }),
    learnRate: z.float64().exactOptional().openapi({ description: 'Deprecated.' }),
    trainingLoss: z.float64().exactOptional().openapi({ description: 'Deprecated.' }),
  })
  .openapi({ required: [] })
  .openapi('BqmlIterationResult')

const BqmlTrainingRunSchema = z
  .object({
    iterationResults: z
      .array(BqmlIterationResultSchema)
      .exactOptional()
      .openapi({ description: 'Deprecated.' }),
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Deprecated.' }),
    state: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    trainingOptions: z
      .object({
        earlyStop: z.boolean().exactOptional(),
        l1Reg: z.float64().exactOptional(),
        l2Reg: z.float64().exactOptional(),
        learnRate: z.float64().exactOptional(),
        learnRateStrategy: z.string().exactOptional(),
        lineSearchInitLearnRate: z.float64().exactOptional(),
        maxIteration: z.string().exactOptional(),
        minRelProgress: z.float64().exactOptional(),
        warmStart: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Deprecated.', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('BqmlTrainingRun')

const ModelDefinitionSchema = z
  .object({
    modelOptions: z
      .object({
        labels: z.array(z.string()).exactOptional(),
        lossType: z.string().exactOptional(),
        modelType: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Deprecated.', required: [] }),
    trainingRuns: z
      .array(BqmlTrainingRunSchema)
      .exactOptional()
      .openapi({ description: 'Deprecated.' }),
  })
  .openapi({ required: [] })
  .openapi('ModelDefinition')

const RangePartitioningSchema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. [Experimental] The table is partitioned by this field. The field must be a top-level NULLABLE/REQUIRED field. The only supported type is INTEGER/INT64.',
      }),
    range: z
      .object({
        end: z
          .string()
          .exactOptional()
          .openapi({ description: '[Experimental] The end of range partitioning, exclusive.' }),
        interval: z
          .string()
          .exactOptional()
          .openapi({ description: '[Experimental] The width of each interval.' }),
        start: z
          .string()
          .exactOptional()
          .openapi({ description: '[Experimental] The start of range partitioning, inclusive.' }),
      })
      .exactOptional()
      .openapi({
        description: '[Experimental] Defines the ranges for range partitioning.',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('RangePartitioning')

const SnapshotDefinitionSchema = z
  .object({
    baseTableReference: TableReferenceSchema.exactOptional().openapi({
      description: 'Required. Reference describing the ID of the table that was snapshot.',
    }),
    snapshotTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Required. The time at which the base table was snapshot. This value is reported in the JSON response using RFC3339 format.',
      }),
  })
  .openapi({
    description: 'Information about base table and snapshot time of the snapshot.',
    required: [],
  })
  .openapi('SnapshotDefinition')

const StreamingbufferSchema = z
  .object({
    estimatedBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A lower-bound estimate of the number of bytes currently in the streaming buffer.',
        readOnly: true,
      }),
    estimatedRows: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A lower-bound estimate of the number of rows currently in the streaming buffer.',
        readOnly: true,
      }),
    oldestEntryTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Contains the timestamp of the oldest entry in the streaming buffer, in milliseconds since the epoch, if the streaming buffer is available.',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('Streamingbuffer')

const TableConstraintsSchema = z
  .object({
    foreignKeys: z
      .array(
        z
          .object({
            columnReferences: z
              .array(
                z
                  .object({
                    referencedColumn: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Required. The column in the primary key that are referenced by the referencing_column.',
                      }),
                    referencingColumn: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Required. The column that composes the foreign key.',
                      }),
                  })
                  .openapi({
                    description: 'The pair of the foreign key column and primary key column.',
                    required: [],
                  }),
              )
              .exactOptional()
              .openapi({ description: 'Required. The columns that compose the foreign key.' }),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Optional. Set only if the foreign key constraint is named.',
              }),
            referencedTable: z
              .object({
                datasetId: z.string().exactOptional(),
                projectId: z.string().exactOptional(),
                tableId: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({
            description: "Represents a foreign key constraint on a table's columns.",
            required: [],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Optional. Present only if the table has a foreign key. The foreign key is not enforced.',
      }),
    primaryKey: z
      .object({
        columns: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: 'Required. The columns that are composed of the primary key constraint.',
          }),
      })
      .exactOptional()
      .openapi({
        description: "Represents the primary key constraint on a table's columns.",
        required: [],
      }),
  })
  .openapi({
    description: 'The TableConstraints defines the primary key and foreign key.',
    required: [],
  })
  .openapi('TableConstraints')

const TableReplicationInfoSchema = z
  .object({
    replicatedSourceLastRefreshTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Output only. If source is a materialized view, this field signifies the last refresh time of the source.',
        readOnly: true,
      }),
    replicationError: ErrorProtoSchema.exactOptional().openapi({
      description:
        'Optional. Output only. Replication error that will permanently stopped table replication.',
      readOnly: true,
    }),
    replicationIntervalMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Specifies the interval at which the source table is polled for updates.',
      }),
    replicationStatus: z
      .enum([
        'REPLICATION_STATUS_UNSPECIFIED',
        'ACTIVE',
        'SOURCE_DELETED',
        'PERMISSION_DENIED',
        'UNSUPPORTED_CONFIGURATION',
      ])
      .exactOptional()
      .openapi({
        description: 'Optional. Output only. Replication status of configured replication.',
        readOnly: true,
      }),
    sourceTable: TableReferenceSchema.exactOptional().openapi({
      description: 'Required. Source table reference that is replicated.',
    }),
  })
  .openapi({
    description:
      'Replication info of a table created using `AS REPLICA` DDL like: `CREATE MATERIALIZED VIEW mv1 AS REPLICA OF src_mv`',
    required: [],
  })
  .openapi('TableReplicationInfo')

const TimePartitioningSchema = z
  .object({
    expirationMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Number of milliseconds for which to keep the storage for a partition. A wrapper is used here because 0 is an invalid value.',
      }),
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; if set, the table is partitioned by this field. The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED. A wrapper is used here because an empty string is an invalid value.",
      }),
    requirePartitionFilter: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. This field is deprecated; please set the field with the same name on the table itself instead. This field needs a wrapper because we want to output the default value, false, if the user explicitly set it.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TimePartitioning')

const AggregationThresholdPolicySchema = z
  .object({
    privacyUnitColumns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The privacy unit column(s) associated with this policy. For now, only one column per data source object (table, view) is allowed as a privacy unit column. Representing as a repeated field in metadata for extensibility to multiple columns in future. Duplicates and Repeated struct fields are not allowed. For nested fields, use dot notation ("outer.inner")',
      }),
    threshold: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The threshold for the "aggregation threshold" policy.' }),
  })
  .openapi({
    description: 'Represents privacy policy associated with "aggregation threshold" method.',
    required: [],
  })
  .openapi('AggregationThresholdPolicy')

const PrivacyPolicySchema = z
  .object({
    aggregationThresholdPolicy: AggregationThresholdPolicySchema.exactOptional().openapi({
      description: 'Optional. Policy used for aggregation thresholds.',
    }),
  })
  .openapi({
    description:
      'Represents privacy policy that contains the privacy requirements specified by the data owner. Currently, this is only supported on views.',
    required: [],
  })
  .openapi('PrivacyPolicy')

const UserDefinedFunctionResourceSchema = z
  .object({
    inlineCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Pick one] An inline resource that contains code for a user-defined function (UDF). Providing a inline code resource is equivalent to providing a URI for a file containing the same code.',
      }),
    resourceUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Pick one] A code resource to load from a Google Cloud Storage URI (gs://bucket/path).',
      }),
  })
  .openapi({
    description:
      ' This is used for defining User Defined Function (UDF) resources only when using legacy SQL. Users of GoogleSQL should leverage either DDL (e.g. CREATE [TEMPORARY] FUNCTION ... ) or the Routines API to define UDF resources. For additional information on migrating, see: https://cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql#differences_in_user-defined_javascript_functions',
    required: [],
  })
  .openapi('UserDefinedFunctionResource')

const ViewDefinitionSchema = z
  .object({
    privacyPolicy: PrivacyPolicySchema.exactOptional().openapi({
      description: 'Optional. Specifices the privacy policy for the view.',
    }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. A query that BigQuery executes when the view is referenced.',
      }),
    useExplicitColumnNames: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "True if the column names are explicitly specified. For example by using the 'CREATE VIEW v(c1, c2) AS ...' syntax. Can only be set for GoogleSQL views.",
      }),
    useLegacySql: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery's GoogleSQL: https://cloud.google.com/bigquery/sql-reference/ Queries and views that reference this view must use the same flag value. A wrapper is used here because the default value is True.",
      }),
    userDefinedFunctionResources: z
      .array(UserDefinedFunctionResourceSchema)
      .exactOptional()
      .openapi({ description: 'Describes user-defined function resources used in the query.' }),
  })
  .openapi({ description: 'Describes the definition of a logical view.', required: [] })
  .openapi('ViewDefinition')

type TableType = {
  biglakeConfiguration?: z.infer<typeof BigLakeConfigurationSchema>
  cloneDefinition?: z.infer<typeof CloneDefinitionSchema>
  clustering?: z.infer<typeof ClusteringSchema>
  creationTime?: string
  defaultCollation?: string
  defaultRoundingMode?:
    | 'ROUNDING_MODE_UNSPECIFIED'
    | 'ROUND_HALF_AWAY_FROM_ZERO'
    | 'ROUND_HALF_EVEN'
  description?: string
  encryptionConfiguration?: z.infer<typeof EncryptionConfigurationSchema>
  etag?: string
  expirationTime?: string
  externalDataConfiguration?: z.infer<typeof ExternalDataConfigurationSchema>
  friendlyName?: string
  id?: string
  kind?: string
  labels?: { [key: string]: string }
  lastModifiedTime?: string
  location?: string
  materializedView?: z.infer<typeof MaterializedViewDefinitionSchema>
  materializedViewStatus?: z.infer<typeof MaterializedViewStatusSchema>
  maxStaleness?: string
  model?: z.infer<typeof ModelDefinitionSchema>
  numActiveLogicalBytes?: string
  numActivePhysicalBytes?: string
  numBytes?: string
  numLongTermBytes?: string
  numLongTermLogicalBytes?: string
  numLongTermPhysicalBytes?: string
  numPartitions?: string
  numPhysicalBytes?: string
  numRows?: string
  numTimeTravelPhysicalBytes?: string
  numTotalLogicalBytes?: string
  numTotalPhysicalBytes?: string
  rangePartitioning?: z.infer<typeof RangePartitioningSchema>
  replicas?: z.infer<typeof TableReferenceSchema>[]
  requirePartitionFilter?: boolean
  resourceTags?: { [key: string]: string }
  schema?: z.infer<typeof TableSchemaSchema>
  selfLink?: string
  snapshotDefinition?: z.infer<typeof SnapshotDefinitionSchema>
  streamingBuffer?: z.infer<typeof StreamingbufferSchema>
  tableConstraints?: z.infer<typeof TableConstraintsSchema>
  tableReference?: z.infer<typeof TableReferenceSchema>
  tableReplicationInfo?: z.infer<typeof TableReplicationInfoSchema>
  timePartitioning?: z.infer<typeof TimePartitioningSchema>
  type?: string
  view?: z.infer<typeof ViewDefinitionSchema>
}

type TableFieldSchemaType = {
  categories?: { names?: string[] }
  collation?: string
  defaultValueExpression?: string
  description?: string
  fields?: TableFieldSchemaType[]
  maxLength?: string
  mode?: string
  name?: string
  policyTags?: { names?: string[] }
  precision?: string
  rangeElementType?: { type?: string }
  roundingMode?: 'ROUNDING_MODE_UNSPECIFIED' | 'ROUND_HALF_AWAY_FROM_ZERO' | 'ROUND_HALF_EVEN'
  scale?: string
  type?: string
}

const AggregateClassificationMetricsSchema = z
  .object({
    accuracy: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Accuracy is the fraction of predictions given the correct label. For multiclass this is a micro-averaged metric.',
      }),
    f1Score: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The F1 score is an average of recall and precision. For multiclass this is a macro-averaged metric.',
      }),
    logLoss: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Logarithmic Loss. For multiclass this is a macro-averaged metric.',
      }),
    precision: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Precision is the fraction of actual positive predictions that had positive actual labels. For multiclass this is a macro-averaged metric treating each class as a binary classifier.',
      }),
    recall: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Recall is the fraction of actual positive labels that were given a positive prediction. For multiclass this is a macro-averaged metric.',
      }),
    rocAuc: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Area Under a ROC Curve. For multiclass this is a macro-averaged metric.',
      }),
    threshold: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Threshold at which the metrics are computed. For binary classification models this is the positive class threshold. For multi-class classfication models this is the confidence threshold.',
      }),
  })
  .openapi({
    description:
      'Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows.',
    required: [],
  })
  .openapi('AggregateClassificationMetrics')

const ArgumentSchema = z
  .object({
    argumentKind: z
      .enum(['ARGUMENT_KIND_UNSPECIFIED', 'FIXED_TYPE', 'ANY_TYPE'])
      .exactOptional()
      .openapi({ description: 'Optional. Defaults to FIXED_TYPE.' }),
    dataType: StandardSqlDataTypeSchema.exactOptional().openapi({
      description: 'Required unless argument_kind = ANY_TYPE.',
    }),
    isAggregate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether the argument is an aggregate function parameter. Must be Unset for routine types other than AGGREGATE_FUNCTION. For AGGREGATE_FUNCTION, if set to false, it is equivalent to adding "NOT AGGREGATE" clause in DDL; Otherwise, it is equivalent to omitting "NOT AGGREGATE" clause in DDL.',
      }),
    mode: z
      .enum(['MODE_UNSPECIFIED', 'IN', 'OUT', 'INOUT'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies whether the argument is input or output. Can be set for procedures only.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The name of this argument. Can be absent for function return argument.',
      }),
  })
  .openapi({
    description: 'Input/output argument of a function or a stored procedure.',
    required: [],
  })
  .openapi('Argument')

const ArimaCoefficientsSchema = z
  .object({
    autoRegressiveCoefficients: z
      .array(z.float64())
      .exactOptional()
      .openapi({ description: 'Auto-regressive coefficients, an array of double.' }),
    interceptCoefficient: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Intercept coefficient, just a double not an array.' }),
    movingAverageCoefficients: z
      .array(z.float64())
      .exactOptional()
      .openapi({ description: 'Moving-average coefficients, an array of double.' }),
  })
  .openapi({ description: 'Arima coefficients.', required: [] })
  .openapi('ArimaCoefficients')

const ArimaFittingMetricsSchema = z
  .object({
    aic: z.float64().exactOptional().openapi({ description: 'AIC.' }),
    logLikelihood: z.float64().exactOptional().openapi({ description: 'Log-likelihood.' }),
    variance: z.float64().exactOptional().openapi({ description: 'Variance.' }),
  })
  .openapi({ description: 'ARIMA model fitting metrics.', required: [] })
  .openapi('ArimaFittingMetrics')

const ArimaOrderSchema = z
  .object({
    d: z.string().exactOptional().openapi({ description: 'Order of the differencing part.' }),
    p: z.string().exactOptional().openapi({ description: 'Order of the autoregressive part.' }),
    q: z.string().exactOptional().openapi({ description: 'Order of the moving-average part.' }),
  })
  .openapi({
    description: 'Arima order, can be used for both non-seasonal and seasonal parts.',
    required: [],
  })
  .openapi('ArimaOrder')

const ArimaSingleModelForecastingMetricsSchema = z
  .object({
    arimaFittingMetrics: ArimaFittingMetricsSchema.exactOptional().openapi({
      description: 'Arima fitting metrics.',
    }),
    hasDrift: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Is arima model fitted with drift or not. It is always false when d is not 1.',
      }),
    hasHolidayEffect: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, holiday_effect is a part of time series decomposition result.',
      }),
    hasSpikesAndDips: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, spikes_and_dips is a part of time series decomposition result.',
      }),
    hasStepChanges: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, step_changes is a part of time series decomposition result.',
      }),
    nonSeasonalOrder: ArimaOrderSchema.exactOptional().openapi({
      description: 'Non-seasonal order.',
    }),
    seasonalPeriods: z
      .array(
        z.enum([
          'SEASONAL_PERIOD_TYPE_UNSPECIFIED',
          'NO_SEASONALITY',
          'DAILY',
          'WEEKLY',
          'MONTHLY',
          'QUARTERLY',
          'YEARLY',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Seasonal periods. Repeated because multiple periods are supported for one time series.',
      }),
    timeSeriesId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time_series_id value for this time series. It will be one of the unique values from the time_series_id_column specified during ARIMA model training. Only present when time_series_id_column training option was used.',
      }),
    timeSeriesIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The tuple of time_series_ids identifying this time series. It will be one of the unique tuples of values present in the time_series_id_columns specified during ARIMA model training. Only present when time_series_id_columns training option was used and the order of values here are same as the order of time_series_id_columns.',
      }),
  })
  .openapi({
    description: 'Model evaluation metrics for a single ARIMA forecasting model.',
    required: [],
  })
  .openapi('ArimaSingleModelForecastingMetrics')

const ArimaForecastingMetricsSchema = z
  .object({
    arimaFittingMetrics: z
      .array(ArimaFittingMetricsSchema)
      .exactOptional()
      .openapi({ deprecated: true, description: 'Arima model fitting metrics.' }),
    arimaSingleModelForecastingMetrics: z
      .array(ArimaSingleModelForecastingMetricsSchema)
      .exactOptional()
      .openapi({
        description:
          'Repeated as there can be many metric sets (one for each model) in auto-arima and the large-scale case.',
      }),
    hasDrift: z
      .array(z.boolean())
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Whether Arima model fitted with drift or not. It is always false when d is not 1.',
      }),
    nonSeasonalOrder: z
      .array(ArimaOrderSchema)
      .exactOptional()
      .openapi({ deprecated: true, description: 'Non-seasonal order.' }),
    seasonalPeriods: z
      .array(
        z.enum([
          'SEASONAL_PERIOD_TYPE_UNSPECIFIED',
          'NO_SEASONALITY',
          'DAILY',
          'WEEKLY',
          'MONTHLY',
          'QUARTERLY',
          'YEARLY',
        ]),
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Seasonal periods. Repeated because multiple periods are supported for one time series.',
      }),
    timeSeriesId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Id to differentiate different time series for the large-scale case.',
      }),
  })
  .openapi({ description: 'Model evaluation metrics for ARIMA forecasting models.', required: [] })
  .openapi('ArimaForecastingMetrics')

const ArimaModelInfoSchema = z
  .object({
    arimaCoefficients: ArimaCoefficientsSchema.exactOptional().openapi({
      description: 'Arima coefficients.',
    }),
    arimaFittingMetrics: ArimaFittingMetricsSchema.exactOptional().openapi({
      description: 'Arima fitting metrics.',
    }),
    hasDrift: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether Arima model fitted with drift or not. It is always false when d is not 1.',
      }),
    hasHolidayEffect: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, holiday_effect is a part of time series decomposition result.',
      }),
    hasSpikesAndDips: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, spikes_and_dips is a part of time series decomposition result.',
      }),
    hasStepChanges: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, step_changes is a part of time series decomposition result.',
      }),
    nonSeasonalOrder: ArimaOrderSchema.exactOptional().openapi({
      description: 'Non-seasonal order.',
    }),
    seasonalPeriods: z
      .array(
        z.enum([
          'SEASONAL_PERIOD_TYPE_UNSPECIFIED',
          'NO_SEASONALITY',
          'DAILY',
          'WEEKLY',
          'MONTHLY',
          'QUARTERLY',
          'YEARLY',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Seasonal periods. Repeated because multiple periods are supported for one time series.',
      }),
    timeSeriesId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time_series_id value for this time series. It will be one of the unique values from the time_series_id_column specified during ARIMA model training. Only present when time_series_id_column training option was used.',
      }),
    timeSeriesIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The tuple of time_series_ids identifying this time series. It will be one of the unique tuples of values present in the time_series_id_columns specified during ARIMA model training. Only present when time_series_id_columns training option was used and the order of values here are same as the order of time_series_id_columns.',
      }),
  })
  .openapi({ description: 'Arima model information.', required: [] })
  .openapi('ArimaModelInfo')

const ArimaResultSchema = z
  .object({
    arimaModelInfo: z
      .array(ArimaModelInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'This message is repeated because there are multiple arima models fitted in auto-arima. For non-auto-arima model, its size is one.',
      }),
    seasonalPeriods: z
      .array(
        z.enum([
          'SEASONAL_PERIOD_TYPE_UNSPECIFIED',
          'NO_SEASONALITY',
          'DAILY',
          'WEEKLY',
          'MONTHLY',
          'QUARTERLY',
          'YEARLY',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Seasonal periods. Repeated because multiple periods are supported for one time series.',
      }),
  })
  .openapi({
    description:
      '(Auto-)arima fitting result. Wrap everything in ArimaResult for easier refactoring if we want to use model-specific iteration results.',
    required: [],
  })
  .openapi('ArimaResult')

const AuditLogConfigSchema = z
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
  .openapi('AuditLogConfig')

const AuditConfigSchema = z
  .object({
    auditLogConfigs: z
      .array(AuditLogConfigSchema)
      .exactOptional()
      .openapi({ description: 'The configuration for logging of each type of permission.' }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.',
      }),
  })
  .openapi({
    description:
      'Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.',
    required: [],
  })
  .openapi('AuditConfig')

const BiEngineReasonSchema = z
  .object({
    code: z
      .enum([
        'CODE_UNSPECIFIED',
        'NO_RESERVATION',
        'INSUFFICIENT_RESERVATION',
        'UNSUPPORTED_SQL_TEXT',
        'INPUT_TOO_LARGE',
        'OTHER_REASON',
        'TABLE_EXCLUDED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. High-level BI Engine reason for partial or disabled acceleration',
        readOnly: true,
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Free form human-readable reason for partial or disabled acceleration.',
        readOnly: true,
      }),
  })
  .openapi({
    description: "Reason why BI Engine didn't accelerate the query (or sub-query).",
    required: [],
  })
  .openapi('BiEngineReason')

const BiEngineStatisticsSchema = z
  .object({
    accelerationMode: z
      .enum([
        'BI_ENGINE_ACCELERATION_MODE_UNSPECIFIED',
        'BI_ENGINE_DISABLED',
        'PARTIAL_INPUT',
        'FULL_INPUT',
        'FULL_QUERY',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Specifies which mode of BI Engine acceleration was performed (if any).',
        readOnly: true,
      }),
    biEngineMode: z
      .enum(['ACCELERATION_MODE_UNSPECIFIED', 'DISABLED', 'PARTIAL', 'FULL'])
      .exactOptional()
      .openapi({
        description:
          'Output only. Specifies which mode of BI Engine acceleration was performed (if any).',
        readOnly: true,
      }),
    biEngineReasons: z
      .array(BiEngineReasonSchema)
      .exactOptional()
      .openapi({
        description:
          'In case of DISABLED or PARTIAL bi_engine_mode, these contain the explanatory reasons as to why BI Engine could not accelerate. In case the full query was accelerated, this field is not populated.',
      }),
  })
  .openapi({
    description: 'Statistics for a BI Engine specific query. Populated as part of JobStatistics2',
    required: [],
  })
  .openapi('BiEngineStatistics')

const BigQueryModelTrainingSchema = z
  .object({
    currentIteration: z.int32().exactOptional().openapi({ description: 'Deprecated.' }),
    expectedTotalIterations: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
  })
  .openapi({ required: [] })
  .openapi('BigQueryModelTraining')

const BinaryConfusionMatrixSchema = z
  .object({
    accuracy: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The fraction of predictions given the correct label.' }),
    f1Score: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The equally weighted average of recall and precision.' }),
    falseNegatives: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of false samples predicted as false.' }),
    falsePositives: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of false samples predicted as true.' }),
    positiveClassThreshold: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Threshold value used when computing each of the following metric.',
      }),
    precision: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The fraction of actual positive predictions that had positive actual labels.',
      }),
    recall: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The fraction of actual positive labels that were given a positive prediction.',
      }),
    trueNegatives: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of true samples predicted as false.' }),
    truePositives: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of true samples predicted as true.' }),
  })
  .openapi({ description: 'Confusion matrix for binary classification models.', required: [] })
  .openapi('BinaryConfusionMatrix')

const BinaryClassificationMetricsSchema = z
  .object({
    aggregateClassificationMetrics: AggregateClassificationMetricsSchema.exactOptional().openapi({
      description: 'Aggregate classification metrics.',
    }),
    binaryConfusionMatrixList: z
      .array(BinaryConfusionMatrixSchema)
      .exactOptional()
      .openapi({ description: 'Binary confusion matrix at multiple thresholds.' }),
    negativeLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Label representing the negative class.' }),
    positiveLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Label representing the positive class.' }),
  })
  .openapi({
    description: 'Evaluation metrics for binary classification/classifier models.',
    required: [],
  })
  .openapi('BinaryClassificationMetrics')

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
          'Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).',
      }),
  })
  .openapi({ description: 'Associates `members`, or principals, with a `role`.', required: [] })
  .openapi('Binding')

const CategoryCountSchema = z
  .object({
    category: z.string().exactOptional().openapi({ description: 'The name of category.' }),
    count: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The count of training samples matching the category within the cluster.',
      }),
  })
  .openapi({
    description: 'Represents the count of a single category within the cluster.',
    required: [],
  })
  .openapi('CategoryCount')

const CategoricalValueSchema = z
  .object({
    categoryCounts: z
      .array(CategoryCountSchema)
      .exactOptional()
      .openapi({
        description:
          'Counts of all categories for the categorical feature. If there are more than ten categories, we return top ten (by count) and return one more CategoryCount with category "_OTHER_" and count as aggregate counts of remaining categories.',
      }),
  })
  .openapi({ description: 'Representative value of a categorical feature.', required: [] })
  .openapi('CategoricalValue')

const FeatureValueSchema = z
  .object({
    categoricalValue: CategoricalValueSchema.exactOptional().openapi({
      description: 'The categorical feature value.',
    }),
    featureColumn: z.string().exactOptional().openapi({ description: 'The feature column name.' }),
    numericalValue: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The numerical feature value. This is the centroid value for this feature.',
      }),
  })
  .openapi({
    description: 'Representative value of a single feature within the cluster.',
    required: [],
  })
  .openapi('FeatureValue')

const ClusterSchema = z
  .object({
    centroidId: z.string().exactOptional().openapi({ description: 'Centroid id.' }),
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of training data rows that were assigned to this cluster.' }),
    featureValues: z
      .array(FeatureValueSchema)
      .exactOptional()
      .openapi({ description: 'Values of highly variant features for this cluster.' }),
  })
  .openapi({ description: 'Message containing the information about one cluster.', required: [] })
  .openapi('Cluster')

const ClusterInfoSchema = z
  .object({
    centroidId: z.string().exactOptional().openapi({ description: 'Centroid id.' }),
    clusterRadius: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Cluster radius, the average distance from centroid to each point assigned to the cluster.',
      }),
    clusterSize: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Cluster size, the total number of points assigned to the cluster.',
      }),
  })
  .openapi({
    description: 'Information about a single cluster for clustering model.',
    required: [],
  })
  .openapi('ClusterInfo')

const ClusteringMetricsSchema = z
  .object({
    clusters: z
      .array(ClusterSchema)
      .exactOptional()
      .openapi({ description: 'Information for all clusters.' }),
    daviesBouldinIndex: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Davies-Bouldin index.' }),
    meanSquaredDistance: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Mean of squared distances between each sample to its cluster centroid.',
      }),
  })
  .openapi({ description: 'Evaluation metrics for clustering models.', required: [] })
  .openapi('ClusteringMetrics')

const EntrySchema = z
  .object({
    itemCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of items being predicted as this label.' }),
    predictedLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The predicted label. For confidence_threshold > 0, we will also add an entry indicating the number of items under the confidence threshold.',
      }),
  })
  .openapi({ description: 'A single entry in the confusion matrix.', required: [] })
  .openapi('Entry')

const RowSchema = z
  .object({
    actualLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The original label of this row.' }),
    entries: z
      .array(EntrySchema)
      .exactOptional()
      .openapi({ description: 'Info describing predicted label distribution.' }),
  })
  .openapi({ description: 'A single row in the confusion matrix.', required: [] })
  .openapi('Row')

const ConfusionMatrixSchema = z
  .object({
    confidenceThreshold: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Confidence threshold used when computing the entries of the confusion matrix.',
      }),
    rows: z.array(RowSchema).exactOptional().openapi({ description: 'One row per actual label.' }),
  })
  .openapi({ description: 'Confusion matrix for multi-class classification models.', required: [] })
  .openapi('ConfusionMatrix')

const ConnectionPropertySchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'The key of the property to set.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the property to set.' }),
  })
  .openapi({
    description:
      'A connection-level property to customize query behavior. Under JDBC, these correspond directly to connection properties passed to the DriverManager. Under ODBC, these correspond to properties in the connection string. Currently supported connection properties: * **dataset_project_id**: represents the default project for datasets that are used in the query. Setting the system variable `@@dataset_project_id` achieves the same behavior. For more information about system variables, see: https://cloud.google.com/bigquery/docs/reference/system-variables * **time_zone**: represents the default timezone used to run the query. * **session_id**: associates the query with a given session. * **query_label**: associates the query with a given job label. If set, all subsequent queries in a script or session will have this label. For the format in which a you can specify a query label, see labels in the JobConfiguration resource type: https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#jobconfiguration Additional properties are allowed, but ignored. Specifying multiple connection properties with the same key returns an error.',
    required: [],
  })
  .openapi('ConnectionProperty')

const DataFormatOptionsSchema = z
  .object({
    useInt64Timestamp: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. Output timestamp as usec int64. Default is false.' }),
  })
  .openapi({ description: 'Options for data format adjustments.', required: [] })
  .openapi('DataFormatOptions')

const DataMaskingStatisticsSchema = z
  .object({
    dataMaskingApplied: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether any accessed data was protected by the data masking.' }),
  })
  .openapi({ description: 'Statistics for data-masking.', required: [] })
  .openapi('DataMaskingStatistics')

const DataSplitResultSchema = z
  .object({
    evaluationTable: TableReferenceSchema.exactOptional().openapi({
      description: 'Table reference of the evaluation data after split.',
    }),
    testTable: TableReferenceSchema.exactOptional().openapi({
      description: 'Table reference of the test data after split.',
    }),
    trainingTable: TableReferenceSchema.exactOptional().openapi({
      description: 'Table reference of the training data after split.',
    }),
  })
  .openapi({
    description:
      'Data split result. This contains references to the training and evaluation data tables that were used to train the model.',
    required: [],
  })
  .openapi('DataSplitResult')

const DatasetReferenceSchema = z
  .object({
    datasetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The ID of the project containing this dataset.' }),
  })
  .openapi({ required: [] })
  .openapi('DatasetReference')

const DatasetAccessEntrySchema = z
  .object({
    dataset: DatasetReferenceSchema.exactOptional().openapi({
      description: 'The dataset this entry applies to',
    }),
    targetTypes: z
      .array(z.enum(['TARGET_TYPE_UNSPECIFIED', 'VIEWS', 'ROUTINES']))
      .exactOptional()
      .openapi({
        description:
          'Which resources in the dataset this entry applies to. Currently, only views are supported, but additional target types may be added in the future.',
      }),
  })
  .openapi({
    description:
      'Grants all resources of particular types in a particular dataset read access to the current dataset. Similar to how individually authorized views work, updates to any resource granted through its dataset (including creation of new resources) requires read permission to referenced resources, plus write permission to the authorizing dataset.',
    required: [],
  })
  .openapi('DatasetAccessEntry')

const RoutineReferenceSchema = z
  .object({
    datasetId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ID of the dataset containing this routine.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ID of the project containing this routine.' }),
    routineId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ID of the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.',
      }),
  })
  .openapi({ description: 'Id path of a routine.', required: [] })
  .openapi('RoutineReference')

const ExternalDatasetReferenceSchema = z
  .object({
    connection: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The connection id that is used to access the external_source. Format: projects/{project_id}/locations/{location_id}/connections/{connection_id}',
      }),
    externalSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. External source that backs this dataset.' }),
  })
  .openapi({
    description: 'Configures the access a dataset defined in an external metadata storage.',
    required: [],
  })
  .openapi('ExternalDatasetReference')

const LinkedDatasetSourceSchema = z
  .object({
    sourceDataset: DatasetReferenceSchema.exactOptional().openapi({
      description: 'The source dataset reference contains project numbers and not project ids.',
    }),
  })
  .openapi({
    description: 'A dataset source type which refers to another BigQuery dataset.',
    required: [],
  })
  .openapi('LinkedDatasetSource')

const DatasetSchema = z
  .object({
    access: z
      .array(
        z
          .object({
            dataset: DatasetAccessEntrySchema.exactOptional().openapi({
              description:
                '[Pick one] A grant authorizing all resources of a particular type in a particular dataset access to this dataset. Only views are supported for now. The role field is not required when this field is set. If that dataset is deleted and re-created, its access needs to be granted again via an update operation.',
            }),
            domain: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  '[Pick one] A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. Example: "example.com". Maps to IAM policy member "domain:DOMAIN".',
              }),
            groupByEmail: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  '[Pick one] An email address of a Google Group to grant access to. Maps to IAM policy member "group:GROUP".',
              }),
            iamMember: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "[Pick one] Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group.",
              }),
            role: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'An IAM role ID that should be granted to the user, group, or domain specified in this access entry. The following legacy mappings will be applied: OWNER <=> roles/bigquery.dataOwner WRITER <=> roles/bigquery.dataEditor READER <=> roles/bigquery.dataViewer This field will accept any of the above formats, but will return only the legacy format. For example, if you set this field to "roles/bigquery.dataOwner", it will be returned back as "OWNER".',
              }),
            routine: RoutineReferenceSchema.exactOptional().openapi({
              description:
                '[Pick one] A routine from a different dataset to grant access to. Queries executed against that routine will have read access to views/tables/routines in this dataset. Only UDF is supported for now. The role field is not required when this field is set. If that routine is updated by any user, access to the routine needs to be granted again via an update operation.',
            }),
            specialGroup: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  '[Pick one] A special group to grant access to. Possible values include: projectOwners: Owners of the enclosing project. projectReaders: Readers of the enclosing project. projectWriters: Writers of the enclosing project. allAuthenticatedUsers: All authenticated BigQuery users. Maps to similarly-named IAM members.',
              }),
            userByEmail: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  '[Pick one] An email address of a user to grant access to. For example: fred@example.com. Maps to IAM policy member "user:EMAIL" or "serviceAccount:EMAIL".',
              }),
            view: TableReferenceSchema.exactOptional().openapi({
              description:
                '[Pick one] A view from a different dataset to grant access to. Queries executed against that view will have read access to views/tables/routines in this dataset. The role field is not required when this field is set. If that view is updated by any user, access to the view needs to be granted again via an update operation.',
            }),
          })
          .openapi({
            description: 'An object that defines dataset access for an entity.',
            required: [],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Optional. An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER;',
      }),
    creationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when this dataset was created, in milliseconds since the epoch.',
        readOnly: true,
      }),
    datasetReference: DatasetReferenceSchema.exactOptional().openapi({
      description: 'Required. A reference that identifies the dataset.',
    }),
    defaultCollation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Defines the default collation specification of future tables created in the dataset. If a table is created in this dataset without table-level default collation, then the table inherits the dataset default collation, which is applied to the string fields that do not have explicit collation specified. A change to this field affects only tables created afterwards, and does not alter the existing tables. The following values are supported: * 'und:ci': undetermined locale, case insensitive. * '': empty string. Default to case-sensitive behavior.",
      }),
    defaultEncryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
      description:
        'The default encryption key for all tables in the dataset. Once this property is set, all newly-created partitioned tables in the dataset will have encryption key set to this value, unless table creation request (or query) overrides the key.',
    }),
    defaultPartitionExpirationMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This default partition expiration, expressed in milliseconds. When new time-partitioned tables are created in a dataset where this property is set, the table will inherit this value, propagated as the `TimePartitioning.expirationMs` property on the new table. If you set `TimePartitioning.expirationMs` explicitly when creating a table, the `defaultPartitionExpirationMs` of the containing dataset is ignored. When creating a partitioned table, if `defaultPartitionExpirationMs` is set, the `defaultTableExpirationMs` value is ignored and the table will not be inherit a table expiration deadline.',
      }),
    defaultRoundingMode: z
      .enum(['ROUNDING_MODE_UNSPECIFIED', 'ROUND_HALF_AWAY_FROM_ZERO', 'ROUND_HALF_EVEN'])
      .exactOptional()
      .openapi({
        description:
          "Optional. Defines the default rounding mode specification of new tables created within this dataset. During table creation, if this field is specified, the table within this dataset will inherit the default rounding mode of the dataset. Setting the default rounding mode on a table overrides this option. Existing tables in the dataset are unaffected. If columns are defined during that table creation, they will immediately inherit the table's default rounding mode, unless otherwise specified.",
      }),
    defaultTableExpirationMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The default lifetime of all tables in the dataset, in milliseconds. The minimum lifetime value is 3600000 milliseconds (one hour). To clear an existing default expiration with a PATCH request, set to 0. Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property.",
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. A user-friendly description of the dataset.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A hash of the resource.', readOnly: true }),
    externalDatasetReference: ExternalDatasetReferenceSchema.exactOptional().openapi({
      description:
        'Optional. Reference to a read-only external dataset defined in data catalogs outside of BigQuery. Filled out when the dataset type is EXTERNAL.',
    }),
    friendlyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. A descriptive name for the dataset.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead specify the datasetId field.',
        readOnly: true,
      }),
    isCaseInsensitive: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. TRUE if the dataset and its table names are case-insensitive, otherwise FALSE. By default, this is FALSE, which means the dataset and its table names are case-sensitive. This field does not affect routine references.',
      }),
    kind: z
      .string()
      .default('bigquery#dataset')
      .exactOptional()
      .openapi({ description: 'Output only. The resource type.', readOnly: true }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See Creating and Updating Dataset Labels for more information.',
      }),
    lastModifiedTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The date when this dataset was last modified, in milliseconds since the epoch.',
        readOnly: true,
      }),
    linkedDatasetSource: LinkedDatasetSourceSchema.exactOptional().openapi({
      description:
        'Optional. The source dataset reference when the dataset is of type LINKED. For all other dataset types it is not set. This field cannot be updated once it is set. Any attempt to update this field using Update and Patch API Operations will be ignored.',
    }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.',
      }),
    maxTimeTravelHours: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days). The default value is 168 hours if this is not set.',
      }),
    satisfiesPzi: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Reserved for future use.', readOnly: true }),
    satisfiesPzs: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Reserved for future use.', readOnly: true }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource.',
        readOnly: true,
      }),
    storageBillingModel: z
      .enum(['STORAGE_BILLING_MODEL_UNSPECIFIED', 'LOGICAL', 'PHYSICAL'])
      .exactOptional()
      .openapi({ description: 'Optional. Updates storage_billing_model for the dataset.' }),
    tags: z
      .array(
        z
          .object({
            tagKey: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Required. The namespaced friendly name of the tag key, e.g. "12345/environment" where 12345 is org id.',
              }),
            tagValue: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Required. The friendly short name of the tag value, e.g. "production".',
              }),
          })
          .openapi({
            description:
              'A global tag managed by Resource Manager. https://cloud.google.com/iam/docs/tags-access-control#definitions',
            required: [],
          }),
      )
      .exactOptional()
      .openapi({ description: 'Output only. Tags for the Dataset.', readOnly: true }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Same as `type` in `ListFormatDataset`. The type of the dataset, one of: * DEFAULT - only accessible by owner and authorized accounts, * PUBLIC - accessible by everyone, * LINKED - linked dataset, * EXTERNAL - dataset with definition in external metadata catalog. -- *BIGLAKE_METASTORE - dataset that references a database created in BigLakeMetastore service. --',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('Dataset')

const DatasetListSchema = z
  .object({
    datasets: z
      .array(
        z
          .object({
            datasetReference: DatasetReferenceSchema.exactOptional().openapi({
              description:
                "The dataset reference. Use this property to access specific parts of the dataset's ID, such as project ID or dataset ID.",
            }),
            friendlyName: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'An alternate name for the dataset. The friendly name is purely decorative in nature.',
              }),
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'The fully-qualified, unique, opaque ID of the dataset.' }),
            kind: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The resource type. This property always returns the value "bigquery#dataset"',
              }),
            labels: z
              .record(z.string(), z.string())
              .exactOptional()
              .openapi({
                description:
                  'The labels associated with this dataset. You can use these to organize and group your datasets.',
              }),
            location: z
              .string()
              .exactOptional()
              .openapi({ description: 'The geographic location where the dataset resides.' }),
          })
          .openapi({
            description:
              'A dataset resource with only a subset of fields, to be returned in a list of datasets.',
            required: [],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of the dataset resources in the project. Each resource contains basic information. For full information about a particular dataset resource, use the Datasets: get method. This property is omitted when there are no datasets in the project.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A hash value of the results page. You can use this property to determine if the page has changed since the last request.',
        readOnly: true,
      }),
    kind: z
      .string()
      .default('bigquery#datasetList')
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource type. This property always returns the value "bigquery#datasetList"',
        readOnly: true,
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be used to request the next results page. This property is omitted on the final results page.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of skipped locations that were unreachable. For more information about BigQuery locations, see: https://cloud.google.com/bigquery/docs/locations. Example: "europe-west5"',
      }),
  })
  .openapi({
    description: 'Response format for a page of results when listing datasets.',
    required: [],
  })
  .openapi('DatasetList')

const DestinationTablePropertiesSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The description for the destination table. This will only be used if the destination table is newly created. If the table already exists and a value different than the current description is provided, the job will fail.',
      }),
    expirationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Internal use only.' }),
    friendlyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Friendly name for the destination table. If the table already exists, it should be same as the existing friendly name.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels associated with this table. You can use these to organize and group your tables. This will only be used if the destination table is newly created. If the table already exists and labels are different than the current labels are provided, the job will fail.',
      }),
  })
  .openapi({ description: 'Properties for the destination table.', required: [] })
  .openapi('DestinationTableProperties')

const DimensionalityReductionMetricsSchema = z
  .object({
    totalExplainedVarianceRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total percentage of variance explained by the selected principal components.',
      }),
  })
  .openapi({
    description: 'Model evaluation metrics for dimensionality reduction models.',
    required: [],
  })
  .openapi('DimensionalityReductionMetrics')

const DmlStatisticsSchema = z
  .object({
    deletedRowCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Number of deleted Rows. populated by DML DELETE, MERGE and TRUNCATE statements.',
        readOnly: true,
      }),
    insertedRowCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Number of inserted Rows. Populated by DML INSERT and MERGE statements',
        readOnly: true,
      }),
    updatedRowCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Number of updated Rows. Populated by DML UPDATE and MERGE statements.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Detailed statistics for DML statements', required: [] })
  .openapi('DmlStatistics')

const DoubleCandidatesSchema = z
  .object({
    candidates: z
      .array(z.float64())
      .exactOptional()
      .openapi({ description: 'Candidates for the double parameter in increasing order.' }),
  })
  .openapi({ description: 'Discrete candidates of a double hyperparameter.', required: [] })
  .openapi('DoubleCandidates')

const DoubleRangeSchema = z
  .object({
    max: z.float64().exactOptional().openapi({ description: 'Max value of the double parameter.' }),
    min: z.float64().exactOptional().openapi({ description: 'Min value of the double parameter.' }),
  })
  .openapi({ description: 'Range of a double hyperparameter.', required: [] })
  .openapi('DoubleRange')

const DoubleHparamSearchSpaceSchema = z
  .object({
    candidates: DoubleCandidatesSchema.exactOptional().openapi({
      description: 'Candidates of the double hyperparameter.',
    }),
    range: DoubleRangeSchema.exactOptional().openapi({
      description: 'Range of the double hyperparameter.',
    }),
  })
  .openapi({ description: 'Search space for a double hyperparameter.', required: [] })
  .openapi('DoubleHparamSearchSpace')

const MultiClassClassificationMetricsSchema = z
  .object({
    aggregateClassificationMetrics: AggregateClassificationMetricsSchema.exactOptional().openapi({
      description: 'Aggregate classification metrics.',
    }),
    confusionMatrixList: z
      .array(ConfusionMatrixSchema)
      .exactOptional()
      .openapi({ description: 'Confusion matrix at different thresholds.' }),
  })
  .openapi({
    description: 'Evaluation metrics for multi-class classification/classifier models.',
    required: [],
  })
  .openapi('MultiClassClassificationMetrics')

const RankingMetricsSchema = z
  .object({
    averageRank: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Determines the goodness of a ranking by computing the percentile rank from the predicted confidence and dividing it by the original rank.',
      }),
    meanAveragePrecision: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Calculates a precision per user for all the items by ranking them and then averages all the precisions across all the users.',
      }),
    meanSquaredError: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Similar to the mean squared error computed in regression and explicit recommendation models except instead of computing the rating directly, the output from evaluate is computed against a preference which is 1 or 0 depending on if the rating exists or not.',
      }),
    normalizedDiscountedCumulativeGain: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'A metric to determine the goodness of a ranking calculated from the predicted confidence by comparing it to an ideal rank measured by the original ratings.',
      }),
  })
  .openapi({
    description:
      'Evaluation metrics used by weighted-ALS models specified by feedback_type=implicit.',
    required: [],
  })
  .openapi('RankingMetrics')

const RegressionMetricsSchema = z
  .object({
    meanAbsoluteError: z.float64().exactOptional().openapi({ description: 'Mean absolute error.' }),
    meanSquaredError: z.float64().exactOptional().openapi({ description: 'Mean squared error.' }),
    meanSquaredLogError: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Mean squared log error.' }),
    medianAbsoluteError: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Median absolute error.' }),
    rSquared: z
      .float64()
      .exactOptional()
      .openapi({ description: 'R^2 score. This corresponds to r2_score in ML.EVALUATE.' }),
  })
  .openapi({
    description:
      'Evaluation metrics for regression and explicit feedback type matrix factorization models.',
    required: [],
  })
  .openapi('RegressionMetrics')

const EvaluationMetricsSchema = z
  .object({
    arimaForecastingMetrics: ArimaForecastingMetricsSchema.exactOptional().openapi({
      description: 'Populated for ARIMA models.',
    }),
    binaryClassificationMetrics: BinaryClassificationMetricsSchema.exactOptional().openapi({
      description: 'Populated for binary classification/classifier models.',
    }),
    clusteringMetrics: ClusteringMetricsSchema.exactOptional().openapi({
      description: 'Populated for clustering models.',
    }),
    dimensionalityReductionMetrics: DimensionalityReductionMetricsSchema.exactOptional().openapi({
      description:
        'Evaluation metrics when the model is a dimensionality reduction model, which currently includes PCA.',
    }),
    multiClassClassificationMetrics: MultiClassClassificationMetricsSchema.exactOptional().openapi({
      description: 'Populated for multi-class classification/classifier models.',
    }),
    rankingMetrics: RankingMetricsSchema.exactOptional().openapi({
      description: 'Populated for implicit feedback type matrix factorization models.',
    }),
    regressionMetrics: RegressionMetricsSchema.exactOptional().openapi({
      description:
        'Populated for regression models and explicit feedback type matrix factorization models.',
    }),
  })
  .openapi({
    description:
      'Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.',
    required: [],
  })
  .openapi('EvaluationMetrics')

const ExplainQueryStepSchema = z
  .object({
    kind: z.string().exactOptional().openapi({ description: 'Machine-readable operation type.' }),
    substeps: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Human-readable description of the step(s).' }),
  })
  .openapi({ description: 'An operation within a stage.', required: [] })
  .openapi('ExplainQueryStep')

const ExplainQueryStageSchema = z
  .object({
    completedParallelInputs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of parallel input segments completed.' }),
    computeMode: z
      .enum(['COMPUTE_MODE_UNSPECIFIED', 'BIGQUERY', 'BI_ENGINE'])
      .exactOptional()
      .openapi({ description: 'Output only. Compute mode for this stage.', readOnly: true }),
    computeMsAvg: z
      .string()
      .exactOptional()
      .openapi({ description: 'Milliseconds the average shard spent on CPU-bound tasks.' }),
    computeMsMax: z
      .string()
      .exactOptional()
      .openapi({ description: 'Milliseconds the slowest shard spent on CPU-bound tasks.' }),
    computeRatioAvg: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Relative amount of time the average shard spent on CPU-bound tasks.',
      }),
    computeRatioMax: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Relative amount of time the slowest shard spent on CPU-bound tasks.',
      }),
    endMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stage end time represented as milliseconds since the epoch.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique ID for the stage within the plan.' }),
    inputStages: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'IDs for stages that are inputs to this stage.' }),
    name: z.string().exactOptional().openapi({ description: 'Human-readable name for the stage.' }),
    parallelInputs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of parallel input segments to be processed' }),
    readMsAvg: z
      .string()
      .exactOptional()
      .openapi({ description: 'Milliseconds the average shard spent reading input.' }),
    readMsMax: z
      .string()
      .exactOptional()
      .openapi({ description: 'Milliseconds the slowest shard spent reading input.' }),
    readRatioAvg: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Relative amount of time the average shard spent reading input.' }),
    readRatioMax: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Relative amount of time the slowest shard spent reading input.' }),
    recordsRead: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of records read into the stage.' }),
    recordsWritten: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of records written by the stage.' }),
    shuffleOutputBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total number of bytes written to shuffle.' }),
    shuffleOutputBytesSpilled: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total number of bytes written to shuffle and spilled to disk.' }),
    slotMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Slot-milliseconds used by the stage.' }),
    startMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stage start time represented as milliseconds since the epoch.' }),
    status: z.string().exactOptional().openapi({ description: 'Current status for this stage.' }),
    steps: z
      .array(ExplainQueryStepSchema)
      .exactOptional()
      .openapi({
        description:
          'List of operations within the stage in dependency order (approximately chronological).',
      }),
    waitMsAvg: z
      .string()
      .exactOptional()
      .openapi({ description: 'Milliseconds the average shard spent waiting to be scheduled.' }),
    waitMsMax: z
      .string()
      .exactOptional()
      .openapi({ description: 'Milliseconds the slowest shard spent waiting to be scheduled.' }),
    waitRatioAvg: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Relative amount of time the average shard spent waiting to be scheduled.',
      }),
    waitRatioMax: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Relative amount of time the slowest shard spent waiting to be scheduled.',
      }),
    writeMsAvg: z
      .string()
      .exactOptional()
      .openapi({ description: 'Milliseconds the average shard spent on writing output.' }),
    writeMsMax: z
      .string()
      .exactOptional()
      .openapi({ description: 'Milliseconds the slowest shard spent on writing output.' }),
    writeRatioAvg: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Relative amount of time the average shard spent on writing output.',
      }),
    writeRatioMax: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Relative amount of time the slowest shard spent on writing output.',
      }),
  })
  .openapi({ description: 'A single stage of query execution.', required: [] })
  .openapi('ExplainQueryStage')

const ExplanationSchema = z
  .object({
    attribution: z.float64().exactOptional().openapi({ description: 'Attribution of feature.' }),
    featureName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full feature name. For non-numerical features, will be formatted like `.`. Overall size of feature name will always be truncated to first 120 characters.',
      }),
  })
  .openapi({ description: 'Explanation for a single feature.', required: [] })
  .openapi('Explanation')

const ExportDataStatisticsSchema = z
  .object({
    fileCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of destination files generated in case of EXPORT DATA statement only.',
      }),
    rowCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Alpha] Number of destination rows generated in case of EXPORT DATA statement only.',
      }),
  })
  .openapi({
    description:
      'Statistics for the EXPORT DATA statement as part of Query Job. EXTRACT JOB statistics are populated in JobStatistics4.',
    required: [],
  })
  .openapi('ExportDataStatistics')

const ExternalServiceCostSchema = z
  .object({
    bytesBilled: z
      .string()
      .exactOptional()
      .openapi({ description: 'External service cost in terms of bigquery bytes billed.' }),
    bytesProcessed: z
      .string()
      .exactOptional()
      .openapi({ description: 'External service cost in terms of bigquery bytes processed.' }),
    externalService: z.string().exactOptional().openapi({ description: 'External service name.' }),
    reservedSlotCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Non-preemptable reserved slots used for external job. For example, reserved slots for Cloua AI Platform job are the VM usages converted to BigQuery slot with equivalent mount of price.',
      }),
    slotMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'External service cost in terms of bigquery slot milliseconds.' }),
  })
  .openapi({
    description:
      'The external service cost is a portion of the total cost, these costs are not additive with total_bytes_billed. Moreover, this field only track external service costs that will show up as BigQuery costs (e.g. training BigQuery ML job with google cloud CAIP or Automl Tables services), not other costs which may be accrued by running the query (e.g. reading from Bigtable or Cloud Storage). The external service costs with different billing sku (e.g. CAIP job is charged based on VM usage) are converted to BigQuery billed_bytes and slot_ms with equivalent amount of US dollars. Services may not directly correlate to these metrics, but these are the equivalents for billing purposes. Output only.',
    required: [],
  })
  .openapi('ExternalServiceCost')

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

const JobReferenceSchema = z
  .object({
    jobId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The geographic location of the job. The default value is US. For more information about BigQuery locations, see: https://cloud.google.com/bigquery/docs/locations',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ID of the project containing this job.' }),
  })
  .openapi({
    description: 'A job reference is a fully qualified identifier for referring to a job.',
    required: [],
  })
  .openapi('JobReference')

const TableCellSchema = z
  .object({ v: z.any().exactOptional() })
  .openapi({ required: [] })
  .openapi('TableCell')

const TableRowSchema = z
  .object({
    f: z
      .array(TableCellSchema)
      .exactOptional()
      .openapi({
        description: 'Represents a single row in the result set, consisting of one or more fields.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TableRow')

const GetQueryResultsResponseSchema = z
  .object({
    cacheHit: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the query result was fetched from the query cache.' }),
    errors: z
      .array(ErrorProtoSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. For more information about error messages, see [Error messages](https://cloud.google.com/bigquery/docs/error-messages).',
        readOnly: true,
      }),
    etag: z.string().exactOptional().openapi({ description: 'A hash of this response.' }),
    jobComplete: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.',
      }),
    jobReference: JobReferenceSchema.exactOptional().openapi({
      description:
        'Reference to the BigQuery Job that was created to run the query. This field will be present even if the original request timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults).',
    }),
    kind: z
      .string()
      .default('bigquery#getQueryResultsResponse')
      .exactOptional()
      .openapi({ description: 'The resource type of the response.' }),
    numDmlAffectedRows: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.',
        readOnly: true,
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token used for paging results. When this token is non-empty, it indicates additional results are available.',
      }),
    rows: z
      .array(TableRowSchema)
      .exactOptional()
      .openapi({
        description:
          'An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above. Present only when the query completes successfully. The REST-based representation of this data leverages a series of JSON f,v objects for indicating fields and values.',
      }),
    schema: TableSchemaSchema.exactOptional().openapi({
      description: 'The schema of the results. Present only when the query completes successfully.',
    }),
    totalBytesProcessed: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total number of bytes processed for this query.' }),
    totalRows: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. Present only when the query completes successfully.',
      }),
  })
  .openapi({ description: 'Response object of GetQueryResults.', required: [] })
  .openapi('GetQueryResultsResponse')

const GetServiceAccountResponseSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The service account email address.' }),
    kind: z
      .string()
      .default('bigquery#getServiceAccountResponse')
      .exactOptional()
      .openapi({ description: 'The resource type of the response.' }),
  })
  .openapi({ description: 'Response object of GetServiceAccount', required: [] })
  .openapi('GetServiceAccountResponse')

const GlobalExplanationSchema = z
  .object({
    classLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Class label for this set of global explanations. Will be empty/null for binary logistic and linear regression models. Sorted alphabetically in descending order.',
      }),
    explanations: z
      .array(ExplanationSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of the top global explanations. Sorted by absolute value of attribution in descending order.',
      }),
  })
  .openapi({
    description: 'Global explanations containing the top most important features after training.',
    required: [],
  })
  .openapi('GlobalExplanation')

const HighCardinalityJoinSchema = z
  .object({
    leftRows: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Count of left input rows.', readOnly: true }),
    outputRows: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Count of the output rows.', readOnly: true }),
    rightRows: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Count of right input rows.', readOnly: true }),
    stepIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The index of the join operator in the ExplainQueryStep lists.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'High cardinality join detailed information.', required: [] })
  .openapi('HighCardinalityJoin')

const StringHparamSearchSpaceSchema = z
  .object({
    candidates: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Canididates for the string or enum parameter in lower case.' }),
  })
  .openapi({ description: 'Search space for string and enum.', required: [] })
  .openapi('StringHparamSearchSpace')

const IntCandidatesSchema = z
  .object({
    candidates: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Candidates for the int parameter in increasing order.' }),
  })
  .openapi({ description: 'Discrete candidates of an int hyperparameter.', required: [] })
  .openapi('IntCandidates')

const IntRangeSchema = z
  .object({
    max: z.string().exactOptional().openapi({ description: 'Max value of the int parameter.' }),
    min: z.string().exactOptional().openapi({ description: 'Min value of the int parameter.' }),
  })
  .openapi({ description: 'Range of an int hyperparameter.', required: [] })
  .openapi('IntRange')

const IntHparamSearchSpaceSchema = z
  .object({
    candidates: IntCandidatesSchema.exactOptional().openapi({
      description: 'Candidates of the int hyperparameter.',
    }),
    range: IntRangeSchema.exactOptional().openapi({
      description: 'Range of the int hyperparameter.',
    }),
  })
  .openapi({ description: 'Search space for an int hyperparameter.', required: [] })
  .openapi('IntHparamSearchSpace')

const IntArraySchema = z
  .object({
    elements: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Elements in the int array.' }),
  })
  .openapi({ description: 'An array of int.', required: [] })
  .openapi('IntArray')

const IntArrayHparamSearchSpaceSchema = z
  .object({
    candidates: z
      .array(IntArraySchema)
      .exactOptional()
      .openapi({ description: 'Candidates for the int array parameter.' }),
  })
  .openapi({ description: 'Search space for int array.', required: [] })
  .openapi('IntArrayHparamSearchSpace')

const HparamSearchSpacesSchema = z
  .object({
    activationFn: StringHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Activation functions of neural network models.',
    }),
    batchSize: IntHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Mini batch sample size.',
    }),
    boosterType: StringHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Booster type for boosted tree models.',
    }),
    colsampleBylevel: DoubleHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Subsample ratio of columns for each level for boosted tree models.',
    }),
    colsampleBynode: DoubleHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Subsample ratio of columns for each node(split) for boosted tree models.',
    }),
    colsampleBytree: DoubleHparamSearchSpaceSchema.exactOptional().openapi({
      description:
        'Subsample ratio of columns when constructing each tree for boosted tree models.',
    }),
    dartNormalizeType: StringHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Dart normalization type for boosted tree models.',
    }),
    dropout: DoubleHparamSearchSpaceSchema.exactOptional().openapi({
      description:
        'Dropout probability for dnn model training and boosted tree models using dart booster.',
    }),
    hiddenUnits: IntArrayHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Hidden units for neural network models.',
    }),
    l1Reg: DoubleHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'L1 regularization coefficient.',
    }),
    l2Reg: DoubleHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'L2 regularization coefficient.',
    }),
    learnRate: DoubleHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Learning rate of training jobs.',
    }),
    maxTreeDepth: IntHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Maximum depth of a tree for boosted tree models.',
    }),
    minSplitLoss: DoubleHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Minimum split loss for boosted tree models.',
    }),
    minTreeChildWeight: IntHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Minimum sum of instance weight needed in a child for boosted tree models.',
    }),
    numClusters: IntHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Number of clusters for k-means.',
    }),
    numFactors: IntHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Number of latent factors to train on.',
    }),
    numParallelTree: IntHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Number of parallel trees for boosted tree models.',
    }),
    optimizer: StringHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Optimizer of TF models.',
    }),
    subsample: DoubleHparamSearchSpaceSchema.exactOptional().openapi({
      description:
        'Subsample the training data to grow tree to prevent overfitting for boosted tree models.',
    }),
    treeMethod: StringHparamSearchSpaceSchema.exactOptional().openapi({
      description: 'Tree construction algorithm for boosted tree models.',
    }),
    walsAlpha: DoubleHparamSearchSpaceSchema.exactOptional().openapi({
      description:
        'Hyperparameter for matrix factoration when implicit feedback type is specified.',
    }),
  })
  .openapi({
    description: 'Hyperparameter search spaces. These should be a subset of training_options.',
    required: [],
  })
  .openapi('HparamSearchSpaces')

const TrainingOptionsSchema = z
  .object({
    activationFn: z
      .string()
      .exactOptional()
      .openapi({ description: 'Activation function of the neural nets.' }),
    adjustStepChanges: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, detect step changes and make data adjustment in the input time series.',
      }),
    approxGlobalFeatureContrib: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to use approximate feature contribution method in XGBoost model explanation for global explain.',
      }),
    autoArima: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to enable auto ARIMA or not.' }),
    autoArimaMaxOrder: z
      .string()
      .exactOptional()
      .openapi({ description: 'The max value of the sum of non-seasonal p and q.' }),
    autoArimaMinOrder: z
      .string()
      .exactOptional()
      .openapi({ description: 'The min value of the sum of non-seasonal p and q.' }),
    autoClassWeights: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to calculate class weights automatically based on the popularity of each label.',
      }),
    batchSize: z.string().exactOptional().openapi({ description: 'Batch size for dnn models.' }),
    boosterType: z
      .enum(['BOOSTER_TYPE_UNSPECIFIED', 'GBTREE', 'DART'])
      .exactOptional()
      .openapi({ description: 'Booster type for boosted tree models.' }),
    budgetHours: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Budget in hours for AutoML training.' }),
    calculatePValues: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not p-value test should be computed for this model. Only available for linear and logistic regression models.',
      }),
    categoryEncodingMethod: z
      .enum(['ENCODING_METHOD_UNSPECIFIED', 'ONE_HOT_ENCODING', 'LABEL_ENCODING', 'DUMMY_ENCODING'])
      .exactOptional()
      .openapi({ description: 'Categorical feature encoding method.' }),
    cleanSpikesAndDips: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, clean spikes and dips in the input time series.' }),
    colorSpace: z
      .enum(['COLOR_SPACE_UNSPECIFIED', 'RGB', 'HSV', 'YIQ', 'YUV', 'GRAYSCALE'])
      .exactOptional()
      .openapi({
        description:
          'Enums for color space, used for processing images in Object Table. See more details at https://www.tensorflow.org/io/tutorials/colorspace.',
      }),
    colsampleBylevel: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Subsample ratio of columns for each level for boosted tree models.',
      }),
    colsampleBynode: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Subsample ratio of columns for each node(split) for boosted tree models.',
      }),
    colsampleBytree: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Subsample ratio of columns when constructing each tree for boosted tree models.',
      }),
    dartNormalizeType: z
      .enum(['DART_NORMALIZE_TYPE_UNSPECIFIED', 'TREE', 'FOREST'])
      .exactOptional()
      .openapi({
        description: 'Type of normalization algorithm for boosted tree models using dart booster.',
      }),
    dataFrequency: z
      .enum([
        'DATA_FREQUENCY_UNSPECIFIED',
        'AUTO_FREQUENCY',
        'YEARLY',
        'QUARTERLY',
        'MONTHLY',
        'WEEKLY',
        'DAILY',
        'HOURLY',
        'PER_MINUTE',
      ])
      .exactOptional()
      .openapi({ description: 'The data frequency of a time series.' }),
    dataSplitColumn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The column to split data with. This column won't be used as a feature. 1. When data_split_method is CUSTOM, the corresponding column should be boolean. The rows with true value tag are eval data, and the false are training data. 2. When data_split_method is SEQ, the first DATA_SPLIT_EVAL_FRACTION rows (from smallest to largest) in the corresponding column are used as training data, and the rest are eval data. It respects the order in Orderable data types: https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#data-type-properties",
      }),
    dataSplitEvalFraction: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The fraction of evaluation data over the whole input data. The rest of data will be used as training data. The format should be double. Accurate to two decimal places. Default value is 0.2.',
      }),
    dataSplitMethod: z
      .enum([
        'DATA_SPLIT_METHOD_UNSPECIFIED',
        'RANDOM',
        'CUSTOM',
        'SEQUENTIAL',
        'NO_SPLIT',
        'AUTO_SPLIT',
      ])
      .exactOptional()
      .openapi({ description: 'The data split type for training and evaluation, e.g. RANDOM.' }),
    decomposeTimeSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, perform decompose time series and save the results.' }),
    distanceType: z
      .enum(['DISTANCE_TYPE_UNSPECIFIED', 'EUCLIDEAN', 'COSINE'])
      .exactOptional()
      .openapi({ description: 'Distance type for clustering models.' }),
    dropout: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Dropout probability for dnn models.' }),
    earlyStop: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether to stop early when the loss doesn't improve significantly any more (compared to min_relative_progress). Used only for iterative training algorithms.",
      }),
    enableGlobalExplain: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, enable global explanation during training.' }),
    feedbackType: z
      .enum(['FEEDBACK_TYPE_UNSPECIFIED', 'IMPLICIT', 'EXPLICIT'])
      .exactOptional()
      .openapi({
        description:
          'Feedback type that specifies which algorithm to run for matrix factorization.',
      }),
    fitIntercept: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the model should include intercept during model training.',
      }),
    hiddenUnits: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Hidden units for dnn models.' }),
    holidayRegion: z
      .enum([
        'HOLIDAY_REGION_UNSPECIFIED',
        'GLOBAL',
        'NA',
        'JAPAC',
        'EMEA',
        'LAC',
        'AE',
        'AR',
        'AT',
        'AU',
        'BE',
        'BR',
        'CA',
        'CH',
        'CL',
        'CN',
        'CO',
        'CS',
        'CZ',
        'DE',
        'DK',
        'DZ',
        'EC',
        'EE',
        'EG',
        'ES',
        'FI',
        'FR',
        'GB',
        'GR',
        'HK',
        'HU',
        'ID',
        'IE',
        'IL',
        'IN',
        'IR',
        'IT',
        'JP',
        'KR',
        'LV',
        'MA',
        'MX',
        'MY',
        'NG',
        'NL',
        'NO',
        'NZ',
        'PE',
        'PH',
        'PK',
        'PL',
        'PT',
        'RO',
        'RS',
        'RU',
        'SA',
        'SE',
        'SG',
        'SI',
        'SK',
        'TH',
        'TR',
        'TW',
        'UA',
        'US',
        'VE',
        'VN',
        'ZA',
      ])
      .exactOptional()
      .openapi({
        description:
          'The geographical region based on which the holidays are considered in time series modeling. If a valid value is specified, then holiday effects modeling is enabled.',
      }),
    holidayRegions: z
      .array(
        z.enum([
          'HOLIDAY_REGION_UNSPECIFIED',
          'GLOBAL',
          'NA',
          'JAPAC',
          'EMEA',
          'LAC',
          'AE',
          'AR',
          'AT',
          'AU',
          'BE',
          'BR',
          'CA',
          'CH',
          'CL',
          'CN',
          'CO',
          'CS',
          'CZ',
          'DE',
          'DK',
          'DZ',
          'EC',
          'EE',
          'EG',
          'ES',
          'FI',
          'FR',
          'GB',
          'GR',
          'HK',
          'HU',
          'ID',
          'IE',
          'IL',
          'IN',
          'IR',
          'IT',
          'JP',
          'KR',
          'LV',
          'MA',
          'MX',
          'MY',
          'NG',
          'NL',
          'NO',
          'NZ',
          'PE',
          'PH',
          'PK',
          'PL',
          'PT',
          'RO',
          'RS',
          'RU',
          'SA',
          'SE',
          'SG',
          'SI',
          'SK',
          'TH',
          'TR',
          'TW',
          'UA',
          'US',
          'VE',
          'VN',
          'ZA',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'A list of geographical regions that are used for time series modeling.',
      }),
    horizon: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of periods ahead that need to be forecasted.' }),
    hparamTuningObjectives: z
      .array(
        z.enum([
          'HPARAM_TUNING_OBJECTIVE_UNSPECIFIED',
          'MEAN_ABSOLUTE_ERROR',
          'MEAN_SQUARED_ERROR',
          'MEAN_SQUARED_LOG_ERROR',
          'MEDIAN_ABSOLUTE_ERROR',
          'R_SQUARED',
          'EXPLAINED_VARIANCE',
          'PRECISION',
          'RECALL',
          'ACCURACY',
          'F1_SCORE',
          'LOG_LOSS',
          'ROC_AUC',
          'DAVIES_BOULDIN_INDEX',
          'MEAN_AVERAGE_PRECISION',
          'NORMALIZED_DISCOUNTED_CUMULATIVE_GAIN',
          'AVERAGE_RANK',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'The target evaluation metrics to optimize the hyperparameters for.',
      }),
    includeDrift: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Include drift when fitting an ARIMA model.' }),
    initialLearnRate: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Specifies the initial learning rate for the line search learn rate strategy.',
      }),
    inputLabelColumns: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Name of input label columns in training data.' }),
    instanceWeightColumn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Name of the instance weight column for training data. This column isn't be used as a feature.",
      }),
    integratedGradientsNumSteps: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of integral steps for the integrated gradients explain method.',
      }),
    itemColumn: z
      .string()
      .exactOptional()
      .openapi({ description: 'Item column specified for matrix factorization models.' }),
    kmeansInitializationColumn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The column used to provide the initial centroids for kmeans algorithm when kmeans_initialization_method is CUSTOM.',
      }),
    kmeansInitializationMethod: z
      .enum(['KMEANS_INITIALIZATION_METHOD_UNSPECIFIED', 'RANDOM', 'CUSTOM', 'KMEANS_PLUS_PLUS'])
      .exactOptional()
      .openapi({
        description: 'The method used to initialize the centroids for kmeans algorithm.',
      }),
    l1RegActivation: z
      .float64()
      .exactOptional()
      .openapi({ description: 'L1 regularization coefficient to activations.' }),
    l1Regularization: z
      .float64()
      .exactOptional()
      .openapi({ description: 'L1 regularization coefficient.' }),
    l2Regularization: z
      .float64()
      .exactOptional()
      .openapi({ description: 'L2 regularization coefficient.' }),
    labelClassWeights: z
      .record(z.string(), z.float64())
      .exactOptional()
      .openapi({
        description:
          'Weights associated with each label class, for rebalancing the training data. Only applicable for classification models.',
      }),
    learnRate: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Learning rate in training. Used only for iterative training algorithms.',
      }),
    learnRateStrategy: z
      .enum(['LEARN_RATE_STRATEGY_UNSPECIFIED', 'LINE_SEARCH', 'CONSTANT'])
      .exactOptional()
      .openapi({ description: 'The strategy to determine learn rate for the current iteration.' }),
    lossType: z
      .enum(['LOSS_TYPE_UNSPECIFIED', 'MEAN_SQUARED_LOSS', 'MEAN_LOG_LOSS'])
      .exactOptional()
      .openapi({ description: 'Type of loss function used during training run.' }),
    maxIterations: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of iterations in training. Used only for iterative training algorithms.',
      }),
    maxParallelTrials: z
      .string()
      .exactOptional()
      .openapi({ description: 'Maximum number of trials to run in parallel.' }),
    maxTimeSeriesLength: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The maximum number of time points in a time series that can be used in modeling the trend component of the time series. Don't use this option with the `timeSeriesLengthFraction` or `minTimeSeriesLength` options.",
      }),
    maxTreeDepth: z
      .string()
      .exactOptional()
      .openapi({ description: 'Maximum depth of a tree for boosted tree models.' }),
    minRelativeProgress: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "When early_stop is true, stops training when accuracy improvement is less than 'min_relative_progress'. Used only for iterative training algorithms.",
      }),
    minSplitLoss: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Minimum split loss for boosted tree models.' }),
    minTimeSeriesLength: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The minimum number of time points in a time series that are used in modeling the trend component of the time series. If you use this option you must also set the `timeSeriesLengthFraction` option. This training option ensures that enough time points are available when you use `timeSeriesLengthFraction` in trend modeling. This is particularly important when forecasting multiple time series in a single query using `timeSeriesIdColumn`. If the total number of time points is less than the `minTimeSeriesLength` value, then the query uses all available time points.',
      }),
    minTreeChildWeight: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Minimum sum of instance weight needed in a child for boosted tree models.',
      }),
    modelRegistry: z
      .enum(['MODEL_REGISTRY_UNSPECIFIED', 'VERTEX_AI'])
      .exactOptional()
      .openapi({ description: 'The model registry.' }),
    modelUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage URI from which the model was imported. Only applicable for imported models.',
      }),
    nonSeasonalOrder: ArimaOrderSchema.exactOptional().openapi({
      description:
        'A specification of the non-seasonal part of the ARIMA model: the three components (p, d, q) are the AR order, the degree of differencing, and the MA order.',
    }),
    numClusters: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of clusters for clustering models.' }),
    numFactors: z
      .string()
      .exactOptional()
      .openapi({ description: 'Num factors specified for matrix factorization models.' }),
    numParallelTree: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of parallel trees constructed during each iteration for boosted tree models.',
      }),
    numPrincipalComponents: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of principal components to keep in the PCA model. Must be <= the number of features.',
      }),
    numTrials: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of trials to run this hyperparameter tuning job.' }),
    optimizationStrategy: z
      .enum(['OPTIMIZATION_STRATEGY_UNSPECIFIED', 'BATCH_GRADIENT_DESCENT', 'NORMAL_EQUATION'])
      .exactOptional()
      .openapi({ description: 'Optimization strategy for training linear regression models.' }),
    optimizer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optimizer used for training the neural nets.' }),
    pcaExplainedVarianceRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The minimum ratio of cumulative explained variance that needs to be given by the PCA model.',
      }),
    pcaSolver: z
      .enum(['UNSPECIFIED', 'FULL', 'RANDOMIZED', 'AUTO'])
      .exactOptional()
      .openapi({ description: 'The solver for PCA.' }),
    sampledShapleyNumPaths: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of paths for the sampled Shapley explain method.' }),
    scaleFeatures: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, scale the feature values by dividing the feature standard deviation. Currently only apply to PCA.',
      }),
    standardizeFeatures: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to standardize numerical features. Default to true.' }),
    subsample: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Subsample fraction of the training data to grow tree to prevent overfitting for boosted tree models.',
      }),
    tfVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Based on the selected TF version, the corresponding docker image is used to train external models.',
      }),
    timeSeriesDataColumn: z
      .string()
      .exactOptional()
      .openapi({ description: 'Column to be designated as time series data for ARIMA model.' }),
    timeSeriesIdColumn: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time series id column that was used during ARIMA model training.',
      }),
    timeSeriesIdColumns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The time series id columns that were used during ARIMA model training.',
      }),
    timeSeriesLengthFraction: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The fraction of the interpolated length of the time series that's used to model the time series trend component. All of the time points of the time series are used to model the non-trend component. This training option accelerates modeling training without sacrificing much forecasting accuracy. You can use this option with `minTimeSeriesLength` but not with `maxTimeSeriesLength`.",
      }),
    timeSeriesTimestampColumn: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Column to be designated as time series timestamp for ARIMA model.',
      }),
    treeMethod: z
      .enum(['TREE_METHOD_UNSPECIFIED', 'AUTO', 'EXACT', 'APPROX', 'HIST'])
      .exactOptional()
      .openapi({ description: 'Tree construction algorithm for boosted tree models.' }),
    trendSmoothingWindowSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Smoothing window size for the trend component. When a positive value is specified, a center moving average smoothing is applied on the history trend. When the smoothing window is out of the boundary at the beginning or the end of the trend, the first element or the last element is padded to fill the smoothing window before the average is applied.',
      }),
    userColumn: z
      .string()
      .exactOptional()
      .openapi({ description: 'User column specified for matrix factorization models.' }),
    vertexAiModelVersionAliases: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The version aliases to apply in Vertex AI model registry. Always overwrite if the version aliases exists in a existing model.',
      }),
    walsAlpha: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Hyperparameter for matrix factoration when implicit feedback type is specified.',
      }),
    warmStart: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to train a model from the last checkpoint.' }),
    xgboostVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-selected XGBoost versions for training of XGBoost models.' }),
  })
  .openapi({ description: 'Options used in model training.', required: [] })
  .openapi('TrainingOptions')

const HparamTuningTrialSchema = z
  .object({
    endTimeMs: z.string().exactOptional().openapi({ description: 'Ending time of the trial.' }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message for FAILED and INFEASIBLE trial.' }),
    evalLoss: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Loss computed on the eval data at the end of trial.' }),
    evaluationMetrics: EvaluationMetricsSchema.exactOptional().openapi({
      description:
        'Evaluation metrics of this trial calculated on the test data. Empty in Job API.',
    }),
    hparamTuningEvaluationMetrics: EvaluationMetricsSchema.exactOptional().openapi({
      description:
        'Hyperparameter tuning evaluation metrics of this trial calculated on the eval data. Unlike evaluation_metrics, only the fields corresponding to the hparam_tuning_objectives are set.',
    }),
    hparams: TrainingOptionsSchema.exactOptional().openapi({
      description: 'The hyperprameters selected for this trial.',
    }),
    startTimeMs: z.string().exactOptional().openapi({ description: 'Starting time of the trial.' }),
    status: z
      .enum([
        'TRIAL_STATUS_UNSPECIFIED',
        'NOT_STARTED',
        'RUNNING',
        'SUCCEEDED',
        'FAILED',
        'INFEASIBLE',
        'STOPPED_EARLY',
      ])
      .exactOptional()
      .openapi({ description: 'The status of the trial.' }),
    trainingLoss: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Loss computed on the training data at the end of trial.' }),
    trialId: z.string().exactOptional().openapi({ description: '1-based index of the trial.' }),
  })
  .openapi({
    description:
      'Training info of a trial in [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models.',
    required: [],
  })
  .openapi('HparamTuningTrial')

const IndexUnusedReasonSchema = z
  .object({
    baseTable: TableReferenceSchema.exactOptional().openapi({
      description: 'Specifies the base table involved in the reason that no search index was used.',
    }),
    code: z
      .enum([
        'CODE_UNSPECIFIED',
        'INDEX_CONFIG_NOT_AVAILABLE',
        'PENDING_INDEX_CREATION',
        'BASE_TABLE_TRUNCATED',
        'INDEX_CONFIG_MODIFIED',
        'TIME_TRAVEL_QUERY',
        'NO_PRUNING_POWER',
        'UNINDEXED_SEARCH_FIELDS',
        'UNSUPPORTED_SEARCH_PATTERN',
        'OPTIMIZED_WITH_MATERIALIZED_VIEW',
        'SECURED_BY_DATA_MASKING',
        'MISMATCHED_TEXT_ANALYZER',
        'BASE_TABLE_TOO_SMALL',
        'BASE_TABLE_TOO_LARGE',
        'ESTIMATED_PERFORMANCE_GAIN_TOO_LOW',
        'NOT_SUPPORTED_IN_STANDARD_EDITION',
        'INDEX_SUPPRESSED_BY_FUNCTION_OPTION',
        'QUERY_CACHE_HIT',
        'INTERNAL_ERROR',
        'OTHER_REASON',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies the high-level reason for the scenario when no search index was used.',
      }),
    indexName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies the name of the unused search index, if available.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Free form human-readable reason for the scenario when no search index was used.',
      }),
  })
  .openapi({
    description: 'Reason about why no search index was used in the search query (or sub-query).',
    required: [],
  })
  .openapi('IndexUnusedReason')

const InputDataChangeSchema = z
  .object({
    recordsReadDiffPercentage: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Output only. Records read difference percentage compared to a previous run.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Details about the input data change insight.', required: [] })
  .openapi('InputDataChange')

const PrincipalComponentInfoSchema = z
  .object({
    cumulativeExplainedVarianceRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The explained_variance is pre-ordered in the descending order to compute the cumulative explained variance ratio.',
      }),
    explainedVariance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Explained variance by this principal component, which is simply the eigenvalue.',
      }),
    explainedVarianceRatio: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Explained_variance over the total explained variance.' }),
    principalComponentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the principal component.' }),
  })
  .openapi({
    description:
      'Principal component infos, used only for eigen decomposition based models, e.g., PCA. Ordered by explained_variance in the descending order.',
    required: [],
  })
  .openapi('PrincipalComponentInfo')

const IterationResultSchema = z
  .object({
    arimaResult: ArimaResultSchema.exactOptional().openapi({ description: 'Arima result.' }),
    clusterInfos: z
      .array(ClusterInfoSchema)
      .exactOptional()
      .openapi({ description: 'Information about top clusters for clustering models.' }),
    durationMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time taken to run the iteration in milliseconds.' }),
    evalLoss: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Loss computed on the eval data at the end of iteration.' }),
    index: z.int32().exactOptional().openapi({ description: 'Index of the iteration, 0 based.' }),
    learnRate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Learn rate used for this iteration.' }),
    principalComponentInfos: z
      .array(PrincipalComponentInfoSchema)
      .exactOptional()
      .openapi({ description: 'The information of the principal components.' }),
    trainingLoss: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Loss computed on the training data at the end of iteration.' }),
  })
  .openapi({
    description: 'Information about a single iteration of the training run.',
    required: [],
  })
  .openapi('IterationResult')

const JobConfigurationTableCopySchema = z
  .object({
    createDisposition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Specifies whether the job is allowed to create new tables. The following values are supported: * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. * CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.",
      }),
    destinationEncryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
      description: 'Custom encryption configuration (e.g., Cloud KMS keys).',
    }),
    destinationExpirationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The time when the destination table expires. Expired tables will be deleted and their storage reclaimed.',
      }),
    destinationTable: TableReferenceSchema.exactOptional().openapi({
      description: '[Required] The destination table.',
    }),
    operationType: z
      .enum(['OPERATION_TYPE_UNSPECIFIED', 'COPY', 'SNAPSHOT', 'RESTORE', 'CLONE'])
      .exactOptional()
      .openapi({ description: 'Optional. Supported operation types in table copy job.' }),
    sourceTable: TableReferenceSchema.exactOptional().openapi({
      description: '[Pick one] Source table to copy.',
    }),
    sourceTables: z
      .array(TableReferenceSchema)
      .exactOptional()
      .openapi({ description: '[Pick one] Source tables to copy.' }),
    writeDisposition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Specifies the action that occurs if the destination table already exists. The following values are supported: * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema and table constraints from the source table. * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.",
      }),
  })
  .openapi({
    description:
      'JobConfigurationTableCopy configures a job that copies data from one table to another. For more information on copying tables, see [Copy a table](https://cloud.google.com/bigquery/docs/managing-tables#copy-table).',
    required: [],
  })
  .openapi('JobConfigurationTableCopy')

const ModelExtractOptionsSchema = z
  .object({
    trialId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The 1-based ID of the trial to be exported from a hyperparameter tuning model. If not specified, the trial with id = [Model](/bigquery/docs/reference/rest/v2/models#resource:-model).defaultTrialId is exported. This field is ignored for models not trained with hyperparameter tuning.',
      }),
  })
  .openapi({ description: 'Options related to model extraction.', required: [] })
  .openapi('ModelExtractOptions')

const ModelReferenceSchema = z
  .object({
    datasetId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ID of the dataset containing this model.' }),
    modelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ID of the model. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ID of the project containing this model.' }),
  })
  .openapi({ description: 'Id path of a model.', required: [] })
  .openapi('ModelReference')

const JobConfigurationExtractSchema = z
  .object({
    compression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The compression type to use for exported files. Possible values include DEFLATE, GZIP, NONE, SNAPPY, and ZSTD. The default value is NONE. Not all compression formats are support for all file formats. DEFLATE is only supported for Avro. ZSTD is only supported for Parquet. Not applicable when extracting models.',
      }),
    destinationFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON, PARQUET, or AVRO for tables and ML_TF_SAVED_MODEL or ML_XGBOOST_BOOSTER for models. The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV. The default value for models is ML_TF_SAVED_MODEL.',
      }),
    destinationUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Pick one] DEPRECATED: Use destinationUris instead, passing only one URI as necessary. The fully-qualified Google Cloud Storage URI where the extracted table should be written.',
      }),
    destinationUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          '[Pick one] A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.',
      }),
    fieldDelimiter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. When extracting data in CSV format, this defines the delimiter to use between fields in the exported data. Default is ','. Not applicable when extracting models.",
      }),
    modelExtractOptions: ModelExtractOptionsSchema.exactOptional().openapi({
      description: 'Optional. Model extract options only applicable when extracting models.',
    }),
    printHeader: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether to print out a header row in the results. Default is true. Not applicable when extracting models.',
      }),
    sourceModel: ModelReferenceSchema.exactOptional().openapi({
      description: 'A reference to the model being exported.',
    }),
    sourceTable: TableReferenceSchema.exactOptional().openapi({
      description: 'A reference to the table being exported.',
    }),
    useAvroLogicalTypes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to use logical types when extracting to AVRO format. Not applicable when extracting models.',
      }),
  })
  .openapi({
    description:
      'JobConfigurationExtract configures a job that exports data from a BigQuery table into Google Cloud Storage.',
    required: [],
  })
  .openapi('JobConfigurationExtract')

const JobConfigurationLoadSchema = z
  .object({
    allowJaggedRows: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Accept rows that are missing trailing optional columns. The missing values are treated as nulls. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.',
      }),
    allowQuotedNewlines: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.',
      }),
    autodetect: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates if we should automatically infer the options and schema for CSV and JSON sources.',
      }),
    clustering: ClusteringSchema.exactOptional().openapi({
      description: 'Clustering specification for the destination table.',
    }),
    connectionProperties: z
      .array(ConnectionPropertySchema)
      .exactOptional()
      .openapi({
        description:
          "Optional. Connection properties which can modify the load job behavior. Currently, only the 'session_id' connection property is supported, and is used to resolve _SESSION appearing as the dataset id.",
      }),
    copyFilesOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. [Experimental] Configures the load job to only copy files to the destination BigLake managed table with an external storage_uri, without reading file content and writing them to new files. Copying files only is supported when: * source_uris are in the same external storage system as the destination table but they do not overlap with storage_uri of the destination table. * source_format is the same file format as the destination table. * destination_table is an existing BigLake managed table. Its schema does not have default value expression. It schema does not have type parameters other than precision and scale. * No options other than the above are specified.',
      }),
    createDisposition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Specifies whether the job is allowed to create new tables. The following values are supported: * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. * CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.",
      }),
    createSession: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. If this property is true, the job creates a new session using a randomly generated session_id. To continue using a created session with subsequent queries, pass the existing session identifier as a `ConnectionProperty` value. The session identifier is returned as part of the `SessionInfo` message within the query statistics. The new session's location will be set to `Job.JobReference.location` if it is present, otherwise it's set to the default location based on existing routing logic.",
      }),
    decimalTargetTypes: z
      .array(z.enum(['DECIMAL_TARGET_TYPE_UNSPECIFIED', 'NUMERIC', 'BIGNUMERIC', 'STRING']))
      .exactOptional()
      .openapi({
        description:
          'Defines the list of possible SQL data types to which the source decimal values are converted. This list and the precision and the scale parameters of the decimal field determine the target type. In the order of NUMERIC, BIGNUMERIC, and STRING, a type is picked if it is in the specified list and if it supports the precision and the scale. STRING supports all precision and scale values. If none of the listed types supports the precision and the scale, the type supporting the widest range in the specified list is picked, and if a value exceeds the supported range when reading the data, an error will be thrown. Example: Suppose the value of this field is ["NUMERIC", "BIGNUMERIC"]. If (precision,scale) is: * (38,9) -> NUMERIC; * (39,9) -> BIGNUMERIC (NUMERIC cannot hold 30 integer digits); * (38,10) -> BIGNUMERIC (NUMERIC cannot hold 10 fractional digits); * (76,38) -> BIGNUMERIC; * (77,38) -> BIGNUMERIC (error if value exeeds supported range). This field cannot contain duplicate types. The order of the types in this field is ignored. For example, ["BIGNUMERIC", "NUMERIC"] is the same as ["NUMERIC", "BIGNUMERIC"] and NUMERIC always takes precedence over BIGNUMERIC. Defaults to ["NUMERIC", "STRING"] for ORC and ["NUMERIC"] for the other file formats.',
      }),
    destinationEncryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
      description: 'Custom encryption configuration (e.g., Cloud KMS keys)',
    }),
    destinationTable: TableReferenceSchema.exactOptional().openapi({
      description: '[Required] The destination table to load the data into.',
    }),
    destinationTableProperties: DestinationTablePropertiesSchema.exactOptional().openapi({
      description:
        'Optional. [Experimental] Properties with which to create the destination table if it is new.',
    }),
    encoding: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The character encoding of the data. The supported values are UTF-8, ISO-8859-1, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the `quote` and `fieldDelimiter` properties. If you don't specify an encoding, or if you specify a UTF-8 encoding when the CSV file is not UTF-8 encoded, BigQuery attempts to convert the data to UTF-8. Generally, your data loads successfully, but it may not match byte-for-byte what you expect. To avoid this, specify the correct encoding by using the `--encoding` flag. If BigQuery can't convert a character other than the ASCII `0` character, BigQuery converts the character to the standard Unicode replacement character: �.",
      }),
    fieldDelimiter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The separator character for fields in a CSV file. The separator is interpreted as a single byte. For files encoded in ISO-8859-1, any single character can be used as a separator. For files encoded in UTF-8, characters represented in decimal range 1-127 (U+0001-U+007F) can be used without any modification. UTF-8 characters encoded with multiple bytes (i.e. U+0080 and above) will have only the first byte used for separating fields. The remaining bytes will be treated as a part of the field. BigQuery also supports the escape sequence "\\t" (U+0009) to specify a tab separator. The default value is comma (",", U+002C).',
      }),
    fileSetSpecType: z
      .enum([
        'FILE_SET_SPEC_TYPE_FILE_SYSTEM_MATCH',
        'FILE_SET_SPEC_TYPE_NEW_LINE_DELIMITED_MANIFEST',
      ])
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies how source URIs are interpreted for constructing the file set to load. By default, source URIs are expanded against the underlying storage. You can also specify manifest files to control how the file set is constructed. This option is only applicable to object storage systems.',
      }),
    hivePartitioningOptions: HivePartitioningOptionsSchema.exactOptional().openapi({
      description:
        'Optional. When set, configures hive partitioning support. Not all storage formats support hive partitioning -- requesting hive partitioning on an unsupported format will lead to an error, as will providing an invalid specification.',
    }),
    ignoreUnknownValues: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names in the table schema Avro, Parquet, ORC: Fields in the file schema that don't exist in the table schema.",
      }),
    jsonExtension: z
      .enum(['JSON_EXTENSION_UNSPECIFIED', 'GEOJSON'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Load option to be used together with source_format newline-delimited JSON to indicate that a variant of JSON is being loaded. To load newline-delimited GeoJSON, specify GEOJSON (and source_format must be set to NEWLINE_DELIMITED_JSON).',
      }),
    maxBadRecords: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value, an invalid error is returned in the job result. The default value is 0, which requires that all records are valid. This is only supported for CSV and NEWLINE_DELIMITED_JSON file formats.',
      }),
    nullMarker: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies a string that represents a null value in a CSV file. For example, if you specify "\\N", BigQuery interprets "\\N" as a null value when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as an empty value.',
      }),
    parquetOptions: ParquetOptionsSchema.exactOptional().openapi({
      description: 'Optional. Additional properties to set if sourceFormat is set to PARQUET.',
    }),
    preserveAsciiControlCharacters: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. When sourceFormat is set to \"CSV\", this indicates whether the embedded ASCII control characters (the first 32 characters in the ASCII-table, from '\\x00' to '\\x1F') are preserved.",
      }),
    projectionFields: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties. If any named property isn\'t found in the Cloud Datastore backup, an invalid error is returned in the job result.',
      }),
    quote: z
      .string()
      .regex(/.?/)
      .default('"')
      .exactOptional()
      .openapi({
        description:
          "Optional. The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('\"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true. To include the specific quote character within a quoted value, precede it with an additional matching quote character. For example, if you want to escape the default character ' \" ', use ' \"\" '. @default \"",
      }),
    rangePartitioning: RangePartitioningSchema.exactOptional().openapi({
      description:
        'Range partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.',
    }),
    referenceFileSchemaUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The user can provide a reference file with the reader schema. This file is only loaded if it is part of source URIs, but is not loaded otherwise. It is enabled for the following formats: AVRO, PARQUET, ORC.',
      }),
    schema: TableSchemaSchema.exactOptional().openapi({
      description:
        "Optional. The schema for the destination table. The schema can be omitted if the destination table already exists, or if you're loading data from Google Cloud Datastore.",
    }),
    schemaInline: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Deprecated] The inline schema. For CSV schemas, specify as "Field1:Type1[,Field2:Type2]*". For example, "foo:STRING, bar:INTEGER, baz:FLOAT".',
      }),
    schemaInlineFormat: z
      .string()
      .exactOptional()
      .openapi({ description: '[Deprecated] The format of the schemaInline property.' }),
    schemaUpdateOptions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: * ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. * ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.',
      }),
    skipLeadingRows: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The number of rows at the top of a CSV file that BigQuery will skip when loading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.',
      }),
    sourceFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET". For orc, specify "ORC". The default value is CSV.',
      }),
    sourceUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "[Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed.",
      }),
    timePartitioning: TimePartitioningSchema.exactOptional().openapi({
      description:
        'Time-based partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.',
    }),
    useAvroLogicalTypes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).',
      }),
    writeDisposition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Specifies the action that occurs if the destination table already exists. The following values are supported: * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the data, removes the constraints and uses the schema from the load job. * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_APPEND. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.",
      }),
  })
  .openapi({
    description:
      'JobConfigurationLoad contains the configuration properties for loading data into a destination table.',
    required: [],
  })
  .openapi('JobConfigurationLoad')

const QueryParameterTypeSchema: z.ZodType<QueryParameterTypeType> = z
  .lazy(() =>
    z
      .object({
        arrayType: QueryParameterTypeSchema.exactOptional().openapi({
          description: "Optional. The type of the array's elements, if this is an array.",
        }),
        rangeElementType: QueryParameterTypeSchema.exactOptional().openapi({
          description: 'Optional. The element type of the range, if this is a range.',
        }),
        structTypes: z
          .array(
            z
              .object({
                description: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Optional. Human-oriented description of the field.' }),
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Optional. The name of this field.' }),
                type: QueryParameterTypeSchema.exactOptional().openapi({
                  description: 'Required. The type of this field.',
                }),
              })
              .openapi({ description: 'The type of a struct parameter.', required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              'Optional. The types of the fields of this struct, in order, if this is a struct.',
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({ description: 'Required. The top level type of this field.' }),
      })
      .openapi({ description: 'The type of a query parameter.', required: [] }),
  )
  .openapi('QueryParameterType')

const QueryParameterSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. If unset, this is a positional parameter. Otherwise, should be unique within a query.',
      }),
    parameterType: QueryParameterTypeSchema.exactOptional().openapi({
      description: 'Required. The type of this parameter.',
    }),
    parameterValue: QueryParameterValueSchema.exactOptional().openapi({
      description: 'Required. The value of this parameter.',
    }),
  })
  .openapi({ description: 'A parameter given to a query.', required: [] })
  .openapi('QueryParameter')

const ScriptOptionsSchema = z
  .object({
    keyResultStatement: z
      .enum(['KEY_RESULT_STATEMENT_KIND_UNSPECIFIED', 'LAST', 'FIRST_SELECT'])
      .exactOptional()
      .openapi({
        description:
          'Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job. Default is LAST.',
      }),
    statementByteBudget: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Limit on the number of bytes billed per statement. Exceeding this budget results in an error.',
      }),
    statementTimeoutMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timeout period for each statement in a script.' }),
  })
  .openapi({ description: 'Options related to script execution.', required: [] })
  .openapi('ScriptOptions')

const SystemVariablesSchema = z
  .object({
    types: z
      .record(z.string(), StandardSqlDataTypeSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Data type for each system variable.', readOnly: true }),
    values: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'Output only. Value for each system variable.', readOnly: true }),
  })
  .openapi({ description: 'System variables given to a query.', required: [] })
  .openapi('SystemVariables')

const JobConfigurationQuerySchema = z
  .object({
    allowLargeResults: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Optional. If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. Requires destinationTable to be set. For GoogleSQL queries, this flag is ignored and large results are always allowed. However, you must still set destinationTable when result size exceeds the allowed maximum response size.',
      }),
    clustering: ClusteringSchema.exactOptional().openapi({
      description: 'Clustering specification for the destination table.',
    }),
    connectionProperties: z
      .array(ConnectionPropertySchema)
      .exactOptional()
      .openapi({ description: 'Connection properties which can modify the query behavior.' }),
    continuous: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '[Optional] Specifies whether the query should be executed as a continuous query. The default value is false.',
      }),
    createDisposition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Specifies whether the job is allowed to create new tables. The following values are supported: * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. * CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.",
      }),
    createSession: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If this property is true, the job creates a new session using a randomly generated session_id. To continue using a created session with subsequent queries, pass the existing session identifier as a `ConnectionProperty` value. The session identifier is returned as part of the `SessionInfo` message within the query statistics. The new session's location will be set to `Job.JobReference.location` if it is present, otherwise it's set to the default location based on existing routing logic.",
      }),
    defaultDataset: DatasetReferenceSchema.exactOptional().openapi({
      description:
        'Optional. Specifies the default dataset to use for unqualified table names in the query. This setting does not alter behavior of unqualified dataset names. Setting the system variable `@@dataset_id` achieves the same behavior. See https://cloud.google.com/bigquery/docs/reference/system-variables for more information on system variables.',
    }),
    destinationEncryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
      description: 'Custom encryption configuration (e.g., Cloud KMS keys)',
    }),
    destinationTable: TableReferenceSchema.exactOptional().openapi({
      description:
        'Optional. Describes the table where the query results should be stored. This property must be set for large results that exceed the maximum response size. For queries that produce anonymous (cached) results, this field will be populated by BigQuery.',
    }),
    flattenResults: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Optional. If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. allowLargeResults must be true if this is set to false. For GoogleSQL queries, this flag is ignored and results are never flattened.',
      }),
    maximumBillingTier: z
      .int32()
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'Optional. [Deprecated] Maximum billing tier allowed for this query. The billing tier controls the amount of compute resources allotted to the query, and multiplies the on-demand cost of the query accordingly. A query that runs within its allotted resources will succeed and indicate its billing tier in statistics.query.billingTier, but if the query exceeds its allotted resources, it will fail with billingTierLimitExceeded. WARNING: The billed byte amount can be multiplied by an amount up to this number! Most users should not need to alter this setting, and we recommend that you avoid introducing new uses of it.',
      }),
    maximumBytesBilled: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge). If unspecified, this will be set to your project default.',
      }),
    parameterMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'GoogleSQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.',
      }),
    preserveNulls: z
      .boolean()
      .exactOptional()
      .openapi({ description: '[Deprecated] This property is deprecated.' }),
    priority: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies a priority for the query. Possible values include INTERACTIVE and BATCH. The default value is INTERACTIVE.',
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Required] SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or GoogleSQL.',
      }),
    queryParameters: z
      .array(QueryParameterSchema)
      .exactOptional()
      .openapi({ description: 'Query parameters for GoogleSQL queries.' }),
    rangePartitioning: RangePartitioningSchema.exactOptional().openapi({
      description:
        'Range partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.',
    }),
    schemaUpdateOptions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Allows the schema of the destination table to be updated as a side effect of the query job. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: * ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. * ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.',
      }),
    scriptOptions: ScriptOptionsSchema.exactOptional().openapi({
      description: 'Options controlling the execution of scripts.',
    }),
    systemVariables: SystemVariablesSchema.exactOptional().openapi({
      description:
        'Output only. System variables for GoogleSQL queries. A system variable is output if the variable is settable and its value differs from the system default. "@@" prefix is not included in the name of the System variables.',
      readOnly: true,
    }),
    tableDefinitions: z
      .record(z.string(), ExternalDataConfigurationSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. You can specify external table definitions, which operate as ephemeral tables that can be queried. These definitions are configured using a JSON map, where the string key represents the table identifier, and the value is the corresponding external data configuration object.',
      }),
    timePartitioning: TimePartitioningSchema.exactOptional().openapi({
      description:
        'Time-based partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.',
    }),
    useLegacySql: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          "Optional. Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery's GoogleSQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false.",
      }),
    useQueryCache: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified. The default value is true.',
      }),
    userDefinedFunctionResources: z
      .array(UserDefinedFunctionResourceSchema)
      .exactOptional()
      .openapi({ description: 'Describes user-defined function resources used in the query.' }),
    writeDisposition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Specifies the action that occurs if the destination table already exists. The following values are supported: * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the data, removes the constraints, and uses the schema from the query result. * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.",
      }),
  })
  .openapi({ description: 'JobConfigurationQuery configures a BigQuery query job.', required: [] })
  .openapi('JobConfigurationQuery')

const JobConfigurationSchema = z
  .object({
    copy: JobConfigurationTableCopySchema.exactOptional().openapi({
      description: '[Pick one] Copies a table.',
    }),
    dryRun: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. If set, don't actually run this job. A valid query will return a mostly empty response with some processing statistics, while an invalid query will return the same error it would if it wasn't a dry run. Behavior of non-query jobs is undefined.",
      }),
    extract: JobConfigurationExtractSchema.exactOptional().openapi({
      description: '[Pick one] Configures an extract job.',
    }),
    jobTimeoutMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Job timeout in milliseconds. If this time limit is exceeded, BigQuery might attempt to stop the job.',
      }),
    jobType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The type of the job. Can be QUERY, LOAD, EXTRACT, COPY or UNKNOWN.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.',
      }),
    load: JobConfigurationLoadSchema.exactOptional().openapi({
      description: '[Pick one] Configures a load job.',
    }),
    query: JobConfigurationQuerySchema.exactOptional().openapi({
      description: '[Pick one] Configures a query job.',
    }),
  })
  .openapi({ required: [] })
  .openapi('JobConfiguration')

const JobCreationReasonSchema = z
  .object({
    code: z
      .enum(['CODE_UNSPECIFIED', 'REQUESTED', 'LONG_RUNNING', 'LARGE_RESULTS', 'OTHER'])
      .exactOptional()
      .openapi({
        description: 'Output only. Specifies the high level reason why a Job was created.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Reason about why a Job was created from a [`jobs.query`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query) method when used with `JOB_CREATION_OPTIONAL` Job creation mode. For [`jobs.insert`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/insert) method calls it will always be `REQUESTED`. This feature is not yet available. Jobs will always be created.',
    required: [],
  })
  .openapi('JobCreationReason')

const JobStatistics5Schema = z
  .object({
    copiedLogicalBytes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of logical bytes copied to the destination table.',
        readOnly: true,
      }),
    copiedRows: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of rows copied to the destination table.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Statistics for a copy job.', required: [] })
  .openapi('JobStatistics5')

const QueryTimelineSampleSchema = z
  .object({
    activeUnits: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Total number of active workers. This does not correspond directly to slot usage. This is the largest value observed since the last sample.',
      }),
    completedUnits: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total parallel units of work completed by this query.' }),
    elapsedMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Milliseconds elapsed since the start of query execution.' }),
    estimatedRunnableUnits: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Units of work that can be scheduled immediately. Providing additional slots for these units of work will accelerate the query, if no other query in the reservation needs additional slots.',
      }),
    pendingUnits: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Total units of work remaining for the query. This number can be revised (increased or decreased) while the query is running.',
      }),
    totalSlotMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cumulative slot-ms consumed by the query.' }),
  })
  .openapi({
    description: 'Summary of the state of query execution at a given time.',
    required: [],
  })
  .openapi('QueryTimelineSample')

const JobStatistics4Schema = z
  .object({
    destinationUriFileCounts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Output only. Number of files per destination URI or URI pattern specified in the extract configuration. These values will be in the same order as the URIs specified in the 'destinationUris' field.",
        readOnly: true,
      }),
    inputBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Number of user bytes extracted into the result. This is the byte count as computed by BigQuery for billing purposes and doesn't have any relationship with the number of actual result bytes extracted in the desired format.",
        readOnly: true,
      }),
    timeline: z
      .array(QueryTimelineSampleSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Describes a timeline of job execution.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Statistics for an extract job.', required: [] })
  .openapi('JobStatistics4')

const JobStatistics3Schema = z
  .object({
    badRecords: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of bad records encountered. Note that if the job has failed because of more bad records encountered than the maximum allowed in the load job configuration, then this number can be less than the total number of bad records present in the input data.',
        readOnly: true,
      }),
    inputFileBytes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of bytes of source data in a load job.',
        readOnly: true,
      }),
    inputFiles: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of source files in a load job.',
        readOnly: true,
      }),
    outputBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Size of the loaded data in bytes. Note that while a load job is in the running state, this value may change.',
        readOnly: true,
      }),
    outputRows: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Number of rows imported in a load job. Note that while an import job is in the running state, this value may change.',
        readOnly: true,
      }),
    timeline: z
      .array(QueryTimelineSampleSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Describes a timeline of job execution.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Statistics for a load job.', required: [] })
  .openapi('JobStatistics3')

const RowAccessPolicyReferenceSchema = z
  .object({
    datasetId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The ID of the dataset containing this row access policy.',
      }),
    policyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ID of the row access policy. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The ID of the project containing this row access policy.',
      }),
    tableId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ID of the table containing this row access policy.' }),
  })
  .openapi({ description: 'Id path of a row access policy.', required: [] })
  .openapi('RowAccessPolicyReference')

const LoadQueryStatisticsSchema = z
  .object({
    badRecords: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of bad records encountered while processing a LOAD query. Note that if the job has failed because of more bad records encountered than the maximum allowed in the load job configuration, then this number can be less than the total number of bad records present in the input data.',
        readOnly: true,
      }),
    bytesTransferred: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Output only. This field is deprecated. The number of bytes of source data copied over the network for a `LOAD` query. `transferred_bytes` has the canonical value for physical transferred bytes, which is used for BigQuery Omni billing.',
        readOnly: true,
      }),
    inputFileBytes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of bytes of source data in a LOAD query.',
        readOnly: true,
      }),
    inputFiles: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of source files in a LOAD query.',
        readOnly: true,
      }),
    outputBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Size of the loaded data in bytes. Note that while a LOAD query is in the running state, this value may change.',
        readOnly: true,
      }),
    outputRows: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Number of rows imported in a LOAD query. Note that while a LOAD query is in the running state, this value may change.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Statistics for a LOAD query.', required: [] })
  .openapi('LoadQueryStatistics')

const MaterializedViewSchema = z
  .object({
    chosen: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the materialized view is chosen for the query. A materialized view can be chosen to rewrite multiple parts of the same query. If a materialized view is chosen to rewrite any part of the query, then this field is true, even if the materialized view was not chosen to rewrite others parts.',
      }),
    estimatedBytesSaved: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If present, specifies a best-effort estimation of the bytes saved by using the materialized view rather than its base tables.',
      }),
    rejectedReason: z
      .enum([
        'REJECTED_REASON_UNSPECIFIED',
        'NO_DATA',
        'COST',
        'BASE_TABLE_TRUNCATED',
        'BASE_TABLE_DATA_CHANGE',
        'BASE_TABLE_PARTITION_EXPIRATION_CHANGE',
        'BASE_TABLE_EXPIRED_PARTITION',
        'BASE_TABLE_INCOMPATIBLE_METADATA_CHANGE',
        'TIME_ZONE',
        'OUT_OF_TIME_TRAVEL_WINDOW',
        'BASE_TABLE_FINE_GRAINED_SECURITY_POLICY',
        'BASE_TABLE_TOO_STALE',
      ])
      .exactOptional()
      .openapi({
        description:
          'If present, specifies the reason why the materialized view was not chosen for the query.',
      }),
    tableReference: TableReferenceSchema.exactOptional().openapi({
      description: 'The candidate materialized view.',
    }),
  })
  .openapi({ description: 'A materialized view considered for a query job.', required: [] })
  .openapi('MaterializedView')

const MaterializedViewStatisticsSchema = z
  .object({
    materializedView: z
      .array(MaterializedViewSchema)
      .exactOptional()
      .openapi({
        description:
          'Materialized views considered for the query job. Only certain materialized views are used. For a detailed list, see the child message. If many materialized views are considered, then the list might be incomplete.',
      }),
  })
  .openapi({
    description: 'Statistics of materialized views considered in a query job.',
    required: [],
  })
  .openapi('MaterializedViewStatistics')

const TableMetadataCacheUsageSchema = z
  .object({
    explanation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Free form human-readable reason metadata caching was unused for the job.',
      }),
    tableReference: TableReferenceSchema.exactOptional().openapi({
      description: 'Metadata caching eligible table referenced in the query.',
    }),
    tableType: z
      .string()
      .exactOptional()
      .openapi({
        description: '[Table type](/bigquery/docs/reference/rest/v2/tables#Table.FIELDS.type).',
      }),
    unusedReason: z
      .enum([
        'UNUSED_REASON_UNSPECIFIED',
        'EXCEEDED_MAX_STALENESS',
        'METADATA_CACHING_NOT_ENABLED',
        'OTHER_REASON',
      ])
      .exactOptional()
      .openapi({ description: 'Reason for not using metadata caching for the table.' }),
  })
  .openapi({
    description:
      'Table level detail on the usage of metadata caching. Only set for Metadata caching eligible tables referenced in the query.',
    required: [],
  })
  .openapi('TableMetadataCacheUsage')

const MetadataCacheStatisticsSchema = z
  .object({
    tableMetadataCacheUsage: z
      .array(TableMetadataCacheUsageSchema)
      .exactOptional()
      .openapi({
        description: 'Set for the Metadata caching eligible tables referenced in the query.',
      }),
  })
  .openapi({ description: 'Statistics for metadata caching in BigLake tables.', required: [] })
  .openapi('MetadataCacheStatistics')

const MlStatisticsSchema = z
  .object({
    hparamTrials: z
      .array(HparamTuningTrialSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Trials of a [hyperparameter tuning job](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) sorted by trial_id.',
        readOnly: true,
      }),
    iterationResults: z
      .array(IterationResultSchema)
      .exactOptional()
      .openapi({
        description:
          'Results for all completed iterations. Empty for [hyperparameter tuning jobs](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview).',
      }),
    maxIterations: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Maximum number of iterations specified as max_iterations in the 'CREATE MODEL' query. The actual number of iterations may be less than this number due to early stop.",
        readOnly: true,
      }),
    modelType: z
      .enum([
        'MODEL_TYPE_UNSPECIFIED',
        'LINEAR_REGRESSION',
        'LOGISTIC_REGRESSION',
        'KMEANS',
        'MATRIX_FACTORIZATION',
        'DNN_CLASSIFIER',
        'TENSORFLOW',
        'DNN_REGRESSOR',
        'XGBOOST',
        'BOOSTED_TREE_REGRESSOR',
        'BOOSTED_TREE_CLASSIFIER',
        'ARIMA',
        'AUTOML_REGRESSOR',
        'AUTOML_CLASSIFIER',
        'PCA',
        'DNN_LINEAR_COMBINED_CLASSIFIER',
        'DNN_LINEAR_COMBINED_REGRESSOR',
        'AUTOENCODER',
        'ARIMA_PLUS',
        'ARIMA_PLUS_XREG',
        'RANDOM_FOREST_REGRESSOR',
        'RANDOM_FOREST_CLASSIFIER',
        'TENSORFLOW_LITE',
        'ONNX',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The type of the model that is being trained.',
        readOnly: true,
      }),
    trainingType: z
      .enum(['TRAINING_TYPE_UNSPECIFIED', 'SINGLE_TRAINING', 'HPARAM_TUNING'])
      .exactOptional()
      .openapi({ description: 'Output only. Training type of the job.', readOnly: true }),
  })
  .openapi({ description: 'Job statistics specific to a BigQuery ML training job.', required: [] })
  .openapi('MlStatistics')

const StagePerformanceChangeInsightSchema = z
  .object({
    inputDataChange: InputDataChangeSchema.exactOptional().openapi({
      description: 'Output only. Input data change insight of the query stage.',
      readOnly: true,
    }),
    stageId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The stage id that the insight mapped to.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Performance insights compared to the previous executions for a specific stage.',
    required: [],
  })
  .openapi('StagePerformanceChangeInsight')

const StagePerformanceStandaloneInsightSchema = z
  .object({
    biEngineReasons: z
      .array(BiEngineReasonSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. If present, the stage had the following reasons for being disqualified from BI Engine execution.',
        readOnly: true,
      }),
    highCardinalityJoins: z
      .array(HighCardinalityJoinSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. High cardinality joins in the stage.',
        readOnly: true,
      }),
    insufficientShuffleQuota: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. True if the stage has insufficient shuffle quota.',
        readOnly: true,
      }),
    slotContention: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. True if the stage has a slot contention issue.',
        readOnly: true,
      }),
    stageId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The stage id that the insight mapped to.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Standalone performance insights for a specific stage.', required: [] })
  .openapi('StagePerformanceStandaloneInsight')

const PerformanceInsightsSchema = z
  .object({
    avgPreviousExecutionMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Average execution ms of previous runs. Indicates the job ran slow compared to previous executions. To find previous executions, use INFORMATION_SCHEMA tables and filter jobs with same query hash.',
        readOnly: true,
      }),
    stagePerformanceChangeInsights: z
      .array(StagePerformanceChangeInsightSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Query stage performance insights compared to previous runs, for diagnosing performance regression.',
        readOnly: true,
      }),
    stagePerformanceStandaloneInsights: z
      .array(StagePerformanceStandaloneInsightSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Standalone query stage performance insights, for exploring potential improvements.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Performance insights for the job.', required: [] })
  .openapi('PerformanceInsights')

const QueryInfoSchema = z
  .object({
    optimizationDetails: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description: 'Output only. Information about query optimizations.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Query optimization information for a QUERY job.', required: [] })
  .openapi('QueryInfo')

const SearchStatisticsSchema = z
  .object({
    indexUnusedReasons: z
      .array(IndexUnusedReasonSchema)
      .exactOptional()
      .openapi({
        description:
          'When `indexUsageMode` is `UNUSED` or `PARTIALLY_USED`, this field explains why indexes were not used in all or part of the search query. If `indexUsageMode` is `FULLY_USED`, this field is not populated.',
      }),
    indexUsageMode: z
      .enum(['INDEX_USAGE_MODE_UNSPECIFIED', 'UNUSED', 'PARTIALLY_USED', 'FULLY_USED'])
      .exactOptional()
      .openapi({ description: 'Specifies the index usage mode for the query.' }),
  })
  .openapi({
    description: 'Statistics for a search query. Populated as part of JobStatistics2.',
    required: [],
  })
  .openapi('SearchStatistics')

const SparkLoggingInfoSchema = z
  .object({
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Project ID where the Spark logs were written.',
        readOnly: true,
      }),
    resourceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Resource type used for logging.', readOnly: true }),
  })
  .openapi({
    description: 'Spark job logs can be filtered by these fields in Cloud Logging.',
    required: [],
  })
  .openapi('SparkLoggingInfo')

const SparkStatisticsSchema = z
  .object({
    endpoints: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Endpoints returned from Dataproc. Key list: - history_server_endpoint: A link to Spark job UI.',
        readOnly: true,
      }),
    gcsStagingBucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The Google Cloud Storage bucket that is used as the default filesystem by the Spark application. This fields is only filled when the Spark procedure uses the INVOKER security mode. It is inferred from the system variable @@spark_proc_properties.staging_bucket if it is provided. Otherwise, BigQuery creates a default staging bucket for the job and returns the bucket name in this field. Example: * `gs://[bucket_name]`',
        readOnly: true,
      }),
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The Cloud KMS encryption key that is used to protect the resources created by the Spark job. If the Spark procedure uses DEFINER security mode, the Cloud KMS key is inferred from the Spark connection associated with the procedure if it is provided. Otherwise the key is inferred from the default key of the Spark connection's project if the CMEK organization policy is enforced. If the Spark procedure uses INVOKER security mode, the Cloud KMS encryption key is inferred from the system variable @@spark_proc_properties.kms_key_name if it is provided. Otherwise, the key is inferred fromt he default key of the BigQuery job's project if the CMEK organization policy is enforced. Example: * `projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]`",
        readOnly: true,
      }),
    loggingInfo: SparkLoggingInfoSchema.exactOptional().openapi({
      description: 'Output only. Logging info is used to generate a link to Cloud Logging.',
      readOnly: true,
    }),
    sparkJobId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Spark job ID if a Spark job is created successfully.',
        readOnly: true,
      }),
    sparkJobLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Location where the Spark job is executed. A location is selected by BigQueury for jobs configured to run in a multi-region.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Statistics for a BigSpark query. Populated as part of JobStatistics2',
    required: [],
  })
  .openapi('SparkStatistics')

const VectorSearchStatisticsSchema = z
  .object({
    indexUnusedReasons: z
      .array(IndexUnusedReasonSchema)
      .exactOptional()
      .openapi({
        description:
          'When `indexUsageMode` is `UNUSED` or `PARTIALLY_USED`, this field explains why indexes were not used in all or part of the vector search query. If `indexUsageMode` is `FULLY_USED`, this field is not populated.',
      }),
    indexUsageMode: z
      .enum(['INDEX_USAGE_MODE_UNSPECIFIED', 'UNUSED', 'PARTIALLY_USED', 'FULLY_USED'])
      .exactOptional()
      .openapi({ description: 'Specifies the index usage mode for the query.' }),
  })
  .openapi({
    description: 'Statistics for a vector search query. Populated as part of JobStatistics2.',
    required: [],
  })
  .openapi('VectorSearchStatistics')

const JobStatistics2Schema = z
  .object({
    biEngineStatistics: BiEngineStatisticsSchema.exactOptional().openapi({
      description: 'Output only. BI Engine specific Statistics.',
      readOnly: true,
    }),
    billingTier: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. Billing tier for the job. This is a BigQuery-specific concept which is not related to the Google Cloud notion of "free tier". The value here is a measure of the query\'s resource consumption relative to the amount of data scanned. For on-demand queries, the limit is 100, and all queries within this limit are billed at the standard on-demand rates. On-demand queries that exceed this limit will fail with a billingTierLimitExceeded error.',
        readOnly: true,
      }),
    cacheHit: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether the query result was fetched from the query cache.',
        readOnly: true,
      }),
    dclTargetDataset: DatasetReferenceSchema.exactOptional().openapi({
      description: 'Output only. Referenced dataset for DCL statement.',
      readOnly: true,
    }),
    dclTargetTable: TableReferenceSchema.exactOptional().openapi({
      description: 'Output only. Referenced table for DCL statement.',
      readOnly: true,
    }),
    dclTargetView: TableReferenceSchema.exactOptional().openapi({
      description: 'Output only. Referenced view for DCL statement.',
      readOnly: true,
    }),
    ddlAffectedRowAccessPolicyCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of row access policies affected by a DDL statement. Present only for DROP ALL ROW ACCESS POLICIES queries.',
        readOnly: true,
      }),
    ddlDestinationTable: TableReferenceSchema.exactOptional().openapi({
      description:
        'Output only. The table after rename. Present only for ALTER TABLE RENAME TO query.',
      readOnly: true,
    }),
    ddlOperationPerformed: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The DDL operation performed, possibly dependent on the pre-existence of the DDL target.',
        readOnly: true,
      }),
    ddlTargetDataset: DatasetReferenceSchema.exactOptional().openapi({
      description:
        'Output only. The DDL target dataset. Present only for CREATE/ALTER/DROP SCHEMA(dataset) queries.',
      readOnly: true,
    }),
    ddlTargetRoutine: RoutineReferenceSchema.exactOptional().openapi({
      description:
        'Output only. [Beta] The DDL target routine. Present only for CREATE/DROP FUNCTION/PROCEDURE queries.',
      readOnly: true,
    }),
    ddlTargetRowAccessPolicy: RowAccessPolicyReferenceSchema.exactOptional().openapi({
      description:
        'Output only. The DDL target row access policy. Present only for CREATE/DROP ROW ACCESS POLICY queries.',
      readOnly: true,
    }),
    ddlTargetTable: TableReferenceSchema.exactOptional().openapi({
      description:
        'Output only. The DDL target table. Present only for CREATE/DROP TABLE/VIEW and DROP ALL ROW ACCESS POLICIES queries.',
      readOnly: true,
    }),
    dmlStats: DmlStatisticsSchema.exactOptional().openapi({
      description:
        'Output only. Detailed statistics for DML statements INSERT, UPDATE, DELETE, MERGE or TRUNCATE.',
      readOnly: true,
    }),
    estimatedBytesProcessed: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The original estimate of bytes processed for the job.',
        readOnly: true,
      }),
    exportDataStatistics: ExportDataStatisticsSchema.exactOptional().openapi({
      description: 'Output only. Stats for EXPORT DATA statement.',
      readOnly: true,
    }),
    externalServiceCosts: z
      .array(ExternalServiceCostSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Job cost breakdown as bigquery internal cost and external service costs.',
        readOnly: true,
      }),
    loadQueryStatistics: LoadQueryStatisticsSchema.exactOptional().openapi({
      description: 'Output only. Statistics for a LOAD query.',
      readOnly: true,
    }),
    materializedViewStatistics: MaterializedViewStatisticsSchema.exactOptional().openapi({
      description: 'Output only. Statistics of materialized views of a query job.',
      readOnly: true,
    }),
    metadataCacheStatistics: MetadataCacheStatisticsSchema.exactOptional().openapi({
      description: 'Output only. Statistics of metadata cache usage in a query for BigLake tables.',
      readOnly: true,
    }),
    mlStatistics: MlStatisticsSchema.exactOptional().openapi({
      description: 'Output only. Statistics of a BigQuery ML training job.',
      readOnly: true,
    }),
    modelTraining: BigQueryModelTrainingSchema.exactOptional().openapi({
      description: 'Deprecated.',
    }),
    modelTrainingCurrentIteration: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Deprecated.' }),
    modelTrainingExpectedTotalIteration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated.' }),
    numDmlAffectedRows: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.',
        readOnly: true,
      }),
    performanceInsights: PerformanceInsightsSchema.exactOptional().openapi({
      description: 'Output only. Performance insights.',
      readOnly: true,
    }),
    queryInfo: QueryInfoSchema.exactOptional().openapi({
      description: 'Output only. Query optimization information for a QUERY job.',
      readOnly: true,
    }),
    queryPlan: z
      .array(ExplainQueryStageSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Describes execution plan for the query.',
        readOnly: true,
      }),
    referencedRoutines: z
      .array(RoutineReferenceSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Referenced routines for the job.', readOnly: true }),
    referencedTables: z
      .array(TableReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Referenced tables for the job. Queries that reference more than 50 tables will not have a complete list.',
        readOnly: true,
      }),
    reservationUsage: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Reservation name or "unreserved" for on-demand resources usage.',
              }),
            slotMs: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Total slot milliseconds used by the reservation for a particular job.',
              }),
          })
          .openapi({ description: 'Job resource usage breakdown by reservation.', required: [] }),
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Output only. Job resource usage breakdown by reservation. This field reported misleading information and will no longer be populated.',
        readOnly: true,
      }),
    schema: TableSchemaSchema.exactOptional().openapi({
      description:
        'Output only. The schema of the results. Present only for successful dry run of non-legacy SQL queries.',
      readOnly: true,
    }),
    searchStatistics: SearchStatisticsSchema.exactOptional().openapi({
      description: 'Output only. Search query specific statistics.',
      readOnly: true,
    }),
    sparkStatistics: SparkStatisticsSchema.exactOptional().openapi({
      description: 'Output only. Statistics of a Spark procedure job.',
      readOnly: true,
    }),
    statementType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The type of query statement, if valid. Possible values: * `SELECT`: [`SELECT`](/bigquery/docs/reference/standard-sql/query-syntax#select_list) statement. * `ASSERT`: [`ASSERT`](/bigquery/docs/reference/standard-sql/debugging-statements#assert) statement. * `INSERT`: [`INSERT`](/bigquery/docs/reference/standard-sql/dml-syntax#insert_statement) statement. * `UPDATE`: [`UPDATE`](/bigquery/docs/reference/standard-sql/query-syntax#update_statement) statement. * `DELETE`: [`DELETE`](/bigquery/docs/reference/standard-sql/data-manipulation-language) statement. * `MERGE`: [`MERGE`](/bigquery/docs/reference/standard-sql/data-manipulation-language) statement. * `CREATE_TABLE`: [`CREATE TABLE`](/bigquery/docs/reference/standard-sql/data-definition-language#create_table_statement) statement, without `AS SELECT`. * `CREATE_TABLE_AS_SELECT`: [`CREATE TABLE AS SELECT`](/bigquery/docs/reference/standard-sql/data-definition-language#query_statement) statement. * `CREATE_VIEW`: [`CREATE VIEW`](/bigquery/docs/reference/standard-sql/data-definition-language#create_view_statement) statement. * `CREATE_MODEL`: [`CREATE MODEL`](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-create#create_model_statement) statement. * `CREATE_MATERIALIZED_VIEW`: [`CREATE MATERIALIZED VIEW`](/bigquery/docs/reference/standard-sql/data-definition-language#create_materialized_view_statement) statement. * `CREATE_FUNCTION`: [`CREATE FUNCTION`](/bigquery/docs/reference/standard-sql/data-definition-language#create_function_statement) statement. * `CREATE_TABLE_FUNCTION`: [`CREATE TABLE FUNCTION`](/bigquery/docs/reference/standard-sql/data-definition-language#create_table_function_statement) statement. * `CREATE_PROCEDURE`: [`CREATE PROCEDURE`](/bigquery/docs/reference/standard-sql/data-definition-language#create_procedure) statement. * `CREATE_ROW_ACCESS_POLICY`: [`CREATE ROW ACCESS POLICY`](/bigquery/docs/reference/standard-sql/data-definition-language#create_row_access_policy_statement) statement. * `CREATE_SCHEMA`: [`CREATE SCHEMA`](/bigquery/docs/reference/standard-sql/data-definition-language#create_schema_statement) statement. * `CREATE_SNAPSHOT_TABLE`: [`CREATE SNAPSHOT TABLE`](/bigquery/docs/reference/standard-sql/data-definition-language#create_snapshot_table_statement) statement. * `CREATE_SEARCH_INDEX`: [`CREATE SEARCH INDEX`](/bigquery/docs/reference/standard-sql/data-definition-language#create_search_index_statement) statement. * `DROP_TABLE`: [`DROP TABLE`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_table_statement) statement. * `DROP_EXTERNAL_TABLE`: [`DROP EXTERNAL TABLE`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_external_table_statement) statement. * `DROP_VIEW`: [`DROP VIEW`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_view_statement) statement. * `DROP_MODEL`: [`DROP MODEL`](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-drop-model) statement. * `DROP_MATERIALIZED_VIEW`: [`DROP MATERIALIZED VIEW`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_materialized_view_statement) statement. * `DROP_FUNCTION` : [`DROP FUNCTION`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_function_statement) statement. * `DROP_TABLE_FUNCTION` : [`DROP TABLE FUNCTION`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_table_function) statement. * `DROP_PROCEDURE`: [`DROP PROCEDURE`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_procedure_statement) statement. * `DROP_SEARCH_INDEX`: [`DROP SEARCH INDEX`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_search_index) statement. * `DROP_SCHEMA`: [`DROP SCHEMA`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_schema_statement) statement. * `DROP_SNAPSHOT_TABLE`: [`DROP SNAPSHOT TABLE`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_snapshot_table_statement) statement. * `DROP_ROW_ACCESS_POLICY`: [`DROP [ALL] ROW ACCESS POLICY|POLICIES`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_row_access_policy_statement) statement. * `ALTER_TABLE`: [`ALTER TABLE`](/bigquery/docs/reference/standard-sql/data-definition-language#alter_table_set_options_statement) statement. * `ALTER_VIEW`: [`ALTER VIEW`](/bigquery/docs/reference/standard-sql/data-definition-language#alter_view_set_options_statement) statement. * `ALTER_MATERIALIZED_VIEW`: [`ALTER MATERIALIZED VIEW`](/bigquery/docs/reference/standard-sql/data-definition-language#alter_materialized_view_set_options_statement) statement. * `ALTER_SCHEMA`: [`ALTER SCHEMA`](/bigquery/docs/reference/standard-sql/data-definition-language#aalter_schema_set_options_statement) statement. * `SCRIPT`: [`SCRIPT`](/bigquery/docs/reference/standard-sql/procedural-language). * `TRUNCATE_TABLE`: [`TRUNCATE TABLE`](/bigquery/docs/reference/standard-sql/dml-syntax#truncate_table_statement) statement. * `CREATE_EXTERNAL_TABLE`: [`CREATE EXTERNAL TABLE`](/bigquery/docs/reference/standard-sql/data-definition-language#create_external_table_statement) statement. * `EXPORT_DATA`: [`EXPORT DATA`](/bigquery/docs/reference/standard-sql/other-statements#export_data_statement) statement. * `EXPORT_MODEL`: [`EXPORT MODEL`](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-export-model) statement. * `LOAD_DATA`: [`LOAD DATA`](/bigquery/docs/reference/standard-sql/other-statements#load_data_statement) statement. * `CALL`: [`CALL`](/bigquery/docs/reference/standard-sql/procedural-language#call) statement.',
        readOnly: true,
      }),
    timeline: z
      .array(QueryTimelineSampleSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Describes a timeline of job execution.',
        readOnly: true,
      }),
    totalBytesBilled: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. If the project is configured to use on-demand pricing, then this field contains the total bytes billed for the job. If the project is configured to use flat-rate pricing, then you are not billed for bytes and this field is informational only.',
        readOnly: true,
      }),
    totalBytesProcessed: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Total bytes processed for the job.', readOnly: true }),
    totalBytesProcessedAccuracy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. For dry-run jobs, totalBytesProcessed is an estimate and this field specifies the accuracy of the estimate. Possible values can be: UNKNOWN: accuracy of the estimate is unknown. PRECISE: estimate is precise. LOWER_BOUND: estimate is lower bound of what the query would cost. UPPER_BOUND: estimate is upper bound of what the query would cost.',
        readOnly: true,
      }),
    totalPartitionsProcessed: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Total number of partitions processed from all partitioned tables referenced in the job.',
        readOnly: true,
      }),
    totalSlotMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Slot-milliseconds for the job.', readOnly: true }),
    transferredBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Total bytes transferred for cross-cloud queries such as Cross Cloud Transfer and CREATE TABLE AS SELECT (CTAS).',
        readOnly: true,
      }),
    undeclaredQueryParameters: z
      .array(QueryParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. GoogleSQL only: list of undeclared query parameters detected during a dry run validation.',
        readOnly: true,
      }),
    vectorSearchStatistics: VectorSearchStatisticsSchema.exactOptional().openapi({
      description: 'Output only. Vector Search query specific statistics.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'Statistics for a query job.', required: [] })
  .openapi('JobStatistics2')

const RowLevelSecurityStatisticsSchema = z
  .object({
    rowLevelSecurityApplied: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether any accessed data was protected by row access policies.' }),
  })
  .openapi({ description: 'Statistics for row-level security.', required: [] })
  .openapi('RowLevelSecurityStatistics')

const ScriptStackFrameSchema = z
  .object({
    endColumn: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. One-based end column.', readOnly: true }),
    endLine: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. One-based end line.', readOnly: true }),
    procedureId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Name of the active procedure, empty if in a top-level script.',
        readOnly: true,
      }),
    startColumn: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. One-based start column.', readOnly: true }),
    startLine: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. One-based start line.', readOnly: true }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Text of the current statement/expression.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents the location of the statement/expression being evaluated. Line and column numbers are defined as follows: - Line and column numbers start with one. That is, line 1 column 1 denotes the start of the script. - When inside a stored procedure, all line/column numbers are relative to the procedure body, not the script in which the procedure was defined. - Start/end positions exclude leading/trailing comments and whitespace. The end position always ends with a ";", when present. - Multi-byte Unicode characters are treated as just one column. - If the original script (or procedure definition) contains TAB characters, a tab "snaps" the indentation forward to the nearest multiple of 8 characters, plus 1. For example, a TAB on column 1, 2, 3, 4, 5, 6 , or 8 will advance the next character to column 9. A TAB on column 9, 10, 11, 12, 13, 14, 15, or 16 will advance the next character to column 17.',
    required: [],
  })
  .openapi('ScriptStackFrame')

const ScriptStatisticsSchema = z
  .object({
    evaluationKind: z
      .enum(['EVALUATION_KIND_UNSPECIFIED', 'STATEMENT', 'EXPRESSION'])
      .exactOptional()
      .openapi({ description: 'Whether this child job was a statement or expression.' }),
    stackFrames: z
      .array(ScriptStackFrameSchema)
      .exactOptional()
      .openapi({
        description:
          'Stack trace showing the line/column/procedure name of each frame on the stack at the point where the current evaluation happened. The leaf frame is first, the primary script is last. Never empty.',
      }),
  })
  .openapi({ description: 'Job statistics specific to the child job of a script.', required: [] })
  .openapi('ScriptStatistics')

const SessionInfoSchema = z
  .object({
    sessionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The id of the session.', readOnly: true }),
  })
  .openapi({ description: '[Preview] Information related to sessions.', required: [] })
  .openapi('SessionInfo')

const TransactionInfoSchema = z
  .object({
    transactionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. [Alpha] Id of the transaction.', readOnly: true }),
  })
  .openapi({ description: '[Alpha] Information of a multi-statement transaction.', required: [] })
  .openapi('TransactionInfo')

const JobStatisticsSchema = z
  .object({
    completionRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Output only. [TrustedTester] Job progress (0.0 -> 1.0) for LOAD and EXTRACT jobs.',
        readOnly: true,
      }),
    copy: JobStatistics5Schema.exactOptional().openapi({
      description: 'Output only. Statistics for a copy job.',
      readOnly: true,
    }),
    creationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Creation time of this job, in milliseconds since the epoch. This field will be present on all jobs.',
        readOnly: true,
      }),
    dataMaskingStatistics: DataMaskingStatisticsSchema.exactOptional().openapi({
      description:
        'Output only. Statistics for data-masking. Present only for query and extract jobs.',
      readOnly: true,
    }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. End time of this job, in milliseconds since the epoch. This field will be present whenever a job is in the DONE state.',
        readOnly: true,
      }),
    extract: JobStatistics4Schema.exactOptional().openapi({
      description: 'Output only. Statistics for an extract job.',
      readOnly: true,
    }),
    finalExecutionDurationMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The duration in milliseconds of the execution of the final attempt of this job, as BigQuery may internally re-attempt to execute the job.',
        readOnly: true,
      }),
    load: JobStatistics3Schema.exactOptional().openapi({
      description: 'Output only. Statistics for a load job.',
      readOnly: true,
    }),
    numChildJobs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Number of child jobs executed.', readOnly: true }),
    parentJobId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. If this is a child job, specifies the job ID of the parent.',
        readOnly: true,
      }),
    query: JobStatistics2Schema.exactOptional().openapi({
      description: 'Output only. Statistics for a query job.',
      readOnly: true,
    }),
    quotaDeferments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: "Output only. Quotas which delayed this job's start time.",
        readOnly: true,
      }),
    reservationUsage: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Reservation name or "unreserved" for on-demand resources usage.',
              }),
            slotMs: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Total slot milliseconds used by the reservation for a particular job.',
              }),
          })
          .openapi({ description: 'Job resource usage breakdown by reservation.', required: [] }),
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Output only. Job resource usage breakdown by reservation. This field reported misleading information and will no longer be populated.',
        readOnly: true,
      }),
    reservation_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the primary reservation assigned to this job. Note that this could be different than reservations reported in the reservation usage field if parent reservations were used to execute this job.',
        readOnly: true,
      }),
    rowLevelSecurityStatistics: RowLevelSecurityStatisticsSchema.exactOptional().openapi({
      description:
        'Output only. Statistics for row-level security. Present only for query and extract jobs.',
      readOnly: true,
    }),
    scriptStatistics: ScriptStatisticsSchema.exactOptional().openapi({
      description:
        'Output only. If this a child job of a script, specifies information about the context of this job within the script.',
      readOnly: true,
    }),
    sessionInfo: SessionInfoSchema.exactOptional().openapi({
      description: 'Output only. Information of the session if this job is part of one.',
      readOnly: true,
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Start time of this job, in milliseconds since the epoch. This field will be present when the job transitions from the PENDING state to either RUNNING or DONE.',
        readOnly: true,
      }),
    totalBytesProcessed: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Total bytes processed for the job.', readOnly: true }),
    totalSlotMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Slot-milliseconds for the job.', readOnly: true }),
    transactionInfo: TransactionInfoSchema.exactOptional().openapi({
      description:
        'Output only. [Alpha] Information of the multi-statement transaction if this job is part of one. This property is only expected on a child job or a job that is in a session. A script parent job is not part of the transaction started in the script.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'Statistics for a single job execution.', required: [] })
  .openapi('JobStatistics')

const JobStatusSchema = z
  .object({
    errorResult: ErrorProtoSchema.exactOptional().openapi({
      description:
        'Output only. Final error result of the job. If present, indicates that the job has completed and was unsuccessful.',
      readOnly: true,
    }),
    errors: z
      .array(ErrorProtoSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The first errors encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has not completed or was unsuccessful.',
        readOnly: true,
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Running state of the job. Valid states include 'PENDING', 'RUNNING', and 'DONE'.",
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('JobStatus')

const JobSchema = z
  .object({
    configuration: JobConfigurationSchema.exactOptional().openapi({
      description: 'Required. Describes the job configuration.',
    }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A hash of this resource.', readOnly: true }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Opaque ID field of the job.', readOnly: true }),
    jobCreationReason: JobCreationReasonSchema.exactOptional().openapi({
      description:
        'Output only. If set, it provides the reason why a Job was created. If not set, it should be treated as the default: REQUESTED. This feature is not yet available. Jobs will always be created.',
      readOnly: true,
    }),
    jobReference: JobReferenceSchema.exactOptional().openapi({
      description: 'Optional. Reference describing the unique-per-user name of the job.',
    }),
    kind: z
      .string()
      .default('bigquery#job')
      .exactOptional()
      .openapi({ description: 'Output only. The type of the resource.', readOnly: true }),
    principal_subject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. [Full-projection-only] String representation of identity of requesting party. Populated for both first- and third-party identities. Only present for APIs that support third-party identities.',
        readOnly: true,
      }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A URL that can be used to access the resource again.',
        readOnly: true,
      }),
    statistics: JobStatisticsSchema.exactOptional().openapi({
      description:
        'Output only. Information about the job, including starting time and ending time of the job.',
      readOnly: true,
    }),
    status: JobStatusSchema.exactOptional().openapi({
      description:
        'Output only. The status of this job. Examine this value when polling an asynchronous job to see if the job is complete.',
      readOnly: true,
    }),
    user_email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Email address of the user who ran the job.',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('Job')

const JobCancelResponseSchema = z
  .object({
    job: JobSchema.exactOptional().openapi({ description: 'The final state of the job.' }),
    kind: z
      .string()
      .default('bigquery#jobCancelResponse')
      .exactOptional()
      .openapi({ description: 'The resource type of the response.' }),
  })
  .openapi({ description: 'Describes format of a jobs cancellation response.', required: [] })
  .openapi('JobCancelResponse')

const JobListSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'A hash of this page of results.' }),
    jobs: z
      .array(
        z
          .object({
            configuration: JobConfigurationSchema.exactOptional().openapi({
              description: 'Required. Describes the job configuration.',
            }),
            errorResult: ErrorProtoSchema.exactOptional().openapi({
              description: 'A result object that will be present only if the job has failed.',
            }),
            id: z.string().exactOptional().openapi({ description: 'Unique opaque ID of the job.' }),
            jobReference: JobReferenceSchema.exactOptional().openapi({
              description: 'Unique opaque ID of the job.',
            }),
            kind: z.string().exactOptional().openapi({ description: 'The resource type.' }),
            principal_subject: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  '[Full-projection-only] String representation of identity of requesting party. Populated for both first- and third-party identities. Only present for APIs that support third-party identities.',
              }),
            state: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Running state of the job. When the state is DONE, errorResult can be checked to determine whether the job succeeded or failed.',
              }),
            statistics: JobStatisticsSchema.exactOptional().openapi({
              description:
                'Output only. Information about the job, including starting time and ending time of the job.',
              readOnly: true,
            }),
            status: JobStatusSchema.exactOptional().openapi({
              description: '[Full-projection-only] Describes the status of this job.',
            }),
            user_email: z
              .string()
              .exactOptional()
              .openapi({
                description: '[Full-projection-only] Email address of the user who ran the job.',
              }),
          })
          .openapi({
            description:
              'ListFormatJob is a partial projection of job information returned as part of a jobs.list response.',
            required: [],
          }),
      )
      .exactOptional()
      .openapi({ description: 'List of jobs that were requested.' }),
    kind: z
      .string()
      .default('bigquery#jobList')
      .exactOptional()
      .openapi({ description: 'The resource type of the response.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to request the next page of results.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of skipped locations that were unreachable. For more information about BigQuery locations, see: https://cloud.google.com/bigquery/docs/locations. Example: "europe-west5"',
      }),
  })
  .openapi({ description: 'JobList is the response format for a jobs.list call.', required: [] })
  .openapi('JobList')

const JsonValueSchema = z.any().openapi('JsonValue')

const JsonObjectSchema = z
  .record(z.string(), JsonValueSchema)
  .openapi({ description: 'Represents a single JSON object.' })
  .openapi('JsonObject')

const RemoteModelInfoSchema = z
  .object({
    connection: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Fully qualified name of the user-provided connection object of the remote model. Format: ```"projects/{project_id}/locations/{location_id}/connections/{connection_id}"```',
        readOnly: true,
      }),
    endpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The endpoint for remote model.', readOnly: true }),
    maxBatchingRows: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Max number of rows in each batch sent to the remote service. If unset, the number of rows in each batch is set dynamically.',
        readOnly: true,
      }),
    remoteModelVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The model version for LLM.', readOnly: true }),
    remoteServiceType: z
      .enum([
        'REMOTE_SERVICE_TYPE_UNSPECIFIED',
        'CLOUD_AI_TRANSLATE_V3',
        'CLOUD_AI_VISION_V1',
        'CLOUD_AI_NATURAL_LANGUAGE_V1',
        'CLOUD_AI_SPEECH_TO_TEXT_V2',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The remote service type for remote model.',
        readOnly: true,
      }),
    speechRecognizer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of the speech recognizer to use for speech recognition. The expected format is `projects/{project}/locations/{location}/recognizers/{recognizer}`. Customers can specify this field at model creation. If not specified, a default recognizer `projects/{model project}/locations/global/recognizers/_` will be used. See more details at [recognizers](https://cloud.google.com/speech-to-text/v2/docs/reference/rest/v2/projects.locations.recognizers)',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Remote Model Info', required: [] })
  .openapi('RemoteModelInfo')

const TrainingRunSchema = z
  .object({
    classLevelGlobalExplanations: z
      .array(GlobalExplanationSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Global explanation contains the explanation of top features on the class level. Applies to classification models only.',
        readOnly: true,
      }),
    dataSplitResult: DataSplitResultSchema.exactOptional().openapi({
      description:
        'Output only. Data split result of the training run. Only set when the input data is actually split.',
      readOnly: true,
    }),
    evaluationMetrics: EvaluationMetricsSchema.exactOptional().openapi({
      description:
        'Output only. The evaluation metrics over training/eval data that were computed at the end of training.',
      readOnly: true,
    }),
    modelLevelGlobalExplanation: GlobalExplanationSchema.exactOptional().openapi({
      description:
        'Output only. Global explanation contains the explanation of top features on the model level. Applies to both regression and classification models.',
      readOnly: true,
    }),
    results: z
      .array(IterationResultSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Output of each iteration run, results.size() <= max_iterations.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The start time of this training run.',
        readOnly: true,
      }),
    trainingOptions: TrainingOptionsSchema.exactOptional().openapi({
      description:
        'Output only. Options that were used for this training run, includes user specified and default options that were used.',
      readOnly: true,
    }),
    trainingStartTime: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Output only. The start time of this training run, in milliseconds since epoch.',
        readOnly: true,
      }),
    vertexAiModelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The model id in the [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) for this training run.',
      }),
    vertexAiModelVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The model version in the [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) for this training run.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Information about a single training query run for the model.',
    required: [],
  })
  .openapi('TrainingRun')

const TransformColumnSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Name of the column.', readOnly: true }),
    transformSql: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The SQL expression used in the column transform.',
        readOnly: true,
      }),
    type: StandardSqlDataTypeSchema.exactOptional().openapi({
      description: 'Output only. Data type of the column after the transform.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'Information about a single transform column.', required: [] })
  .openapi('TransformColumn')

const ModelSchema = z
  .object({
    bestTrialId: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'The best trial_id across all training runs.' }),
    creationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when this model was created, in millisecs since the epoch.',
        readOnly: true,
      }),
    defaultTrialId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The default trial_id to use in TVFs when the trial_id is not passed in. For single-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the best trial ID. For multi-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the smallest trial ID among all Pareto optimal trials.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. A user-friendly description of this model.' }),
    encryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
      description:
        'Custom encryption configuration (e.g., Cloud KMS keys). This shows the encryption configuration of the model data while stored in BigQuery storage. This field can be used with PatchModel to update encryption key for an already encrypted model.',
    }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A hash of this resource.', readOnly: true }),
    expirationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The time when this model expires, in milliseconds since the epoch. If not present, the model will persist indefinitely. Expired models will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created models.',
      }),
    featureColumns: z
      .array(StandardSqlFieldSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Input feature columns for the model inference. If the model is trained with TRANSFORM clause, these are the input of the TRANSFORM clause.',
        readOnly: true,
      }),
    friendlyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. A descriptive name for this model.' }),
    hparamSearchSpaces: HparamSearchSpacesSchema.exactOptional().openapi({
      description: 'Output only. All hyperparameter search spaces in this model.',
      readOnly: true,
    }),
    hparamTrials: z
      .array(HparamTuningTrialSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Trials of a [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) model sorted by trial_id.',
        readOnly: true,
      }),
    labelColumns: z
      .array(StandardSqlFieldSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Label columns that were used to train this model. The output of the model will have a "predicted_" prefix to these columns.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The labels associated with this model. You can use these to organize and group your models. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.',
      }),
    lastModifiedTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when this model was last modified, in millisecs since the epoch.',
        readOnly: true,
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The geographic location where the model resides. This value is inherited from the dataset.',
        readOnly: true,
      }),
    modelReference: ModelReferenceSchema.exactOptional().openapi({
      description: 'Required. Unique identifier for this model.',
    }),
    modelType: z
      .enum([
        'MODEL_TYPE_UNSPECIFIED',
        'LINEAR_REGRESSION',
        'LOGISTIC_REGRESSION',
        'KMEANS',
        'MATRIX_FACTORIZATION',
        'DNN_CLASSIFIER',
        'TENSORFLOW',
        'DNN_REGRESSOR',
        'XGBOOST',
        'BOOSTED_TREE_REGRESSOR',
        'BOOSTED_TREE_CLASSIFIER',
        'ARIMA',
        'AUTOML_REGRESSOR',
        'AUTOML_CLASSIFIER',
        'PCA',
        'DNN_LINEAR_COMBINED_CLASSIFIER',
        'DNN_LINEAR_COMBINED_REGRESSOR',
        'AUTOENCODER',
        'ARIMA_PLUS',
        'ARIMA_PLUS_XREG',
        'RANDOM_FOREST_REGRESSOR',
        'RANDOM_FOREST_CLASSIFIER',
        'TENSORFLOW_LITE',
        'ONNX',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Type of the model resource.', readOnly: true }),
    optimalTrialIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. For single-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, it only contains the best trial. For multi-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, it contains all Pareto optimal trials sorted by trial_id.',
        readOnly: true,
      }),
    remoteModelInfo: RemoteModelInfoSchema.exactOptional().openapi({
      description: 'Output only. Remote model info',
      readOnly: true,
    }),
    trainingRuns: z
      .array(TrainingRunSchema)
      .exactOptional()
      .openapi({
        description: 'Information for all training runs in increasing order of start_time.',
      }),
    transformColumns: z
      .array(TransformColumnSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. This field will be populated if a TRANSFORM clause was used to train a model. TRANSFORM clause (if used) takes feature_columns as input and outputs transform_columns. transform_columns then are used to train the model.',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('Model')

const ListModelsResponseSchema = z
  .object({
    models: z
      .array(ModelSchema)
      .exactOptional()
      .openapi({
        description:
          'Models in the requested dataset. Only the following fields are populated: model_reference, model_type, creation_time, last_modified_time and labels.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to request the next page of results.' }),
  })
  .openapi({
    description: 'Response format for a single page when listing BigQuery ML models.',
    required: [],
  })
  .openapi('ListModelsResponse')

const RemoteFunctionOptionsSchema = z
  .object({
    connection: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service. Format: ```"projects/{projectId}/locations/{locationId}/connections/{connectionId}"```',
      }),
    endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Endpoint of the user-provided remote service, e.g. ```https://us-east1-my_gcf_project.cloudfunctions.net/remote_add```',
      }),
    maxBatchingRows: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Max number of rows in each batch sent to the remote service. If absent or if 0, BigQuery dynamically decides the number of rows in a batch.',
      }),
    userDefinedContext: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service. The total number of bytes of keys and values must be less than 8KB.',
      }),
  })
  .openapi({ description: 'Options for a remote user-defined function.', required: [] })
  .openapi('RemoteFunctionOptions')

const StandardSqlTableTypeSchema = z
  .object({
    columns: z
      .array(StandardSqlFieldSchema)
      .exactOptional()
      .openapi({ description: 'The columns in this table type' }),
  })
  .openapi({ description: 'A table type', required: [] })
  .openapi('StandardSqlTableType')

const SparkOptionsSchema = z
  .object({
    archiveUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Archive files to be extracted into the working directory of each executor. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fully qualified name of the user-provided Spark connection object. Format: ```"projects/{project_id}/locations/{location_id}/connections/{connection_id}"```',
      }),
    containerImage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom container image for the runtime environment.' }),
    fileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Files to be placed in the working directory of each executor. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).',
      }),
    jarUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).',
      }),
    mainClass: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully qualified name of a class in jar_uris, for example, com.example.wordcount. Exactly one of main_class and main_jar_uri field should be set for Java/Scala language type.',
      }),
    mainFileUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The main file/jar URI of the Spark application. Exactly one of the definition_body field and the main_file_uri field must be set for Python. Exactly one of main_class and main_file_uri field should be set for Java/Scala language type.',
      }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Configuration properties as a set of key/value pairs, which will be passed on to the Spark application. For more information, see [Apache Spark](https://spark.apache.org/docs/latest/index.html) and the [procedure option list](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#procedure_option_list).',
      }),
    pyFileUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Python files to be placed on the PYTHONPATH for PySpark application. Supported file types: `.py`, `.egg`, and `.zip`. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).',
      }),
    runtimeVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Runtime version. If not specified, the default runtime version is used.',
      }),
  })
  .openapi({ description: 'Options for a user-defined Spark routine.', required: [] })
  .openapi('SparkOptions')

const RoutineSchema = z
  .object({
    arguments: z.array(ArgumentSchema).exactOptional().openapi({ description: 'Optional.' }),
    creationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when this routine was created, in milliseconds since the epoch.',
        readOnly: true,
      }),
    dataGovernanceType: z
      .enum(['DATA_GOVERNANCE_TYPE_UNSPECIFIED', 'DATA_MASKING'])
      .exactOptional()
      .openapi({
        description:
          'Optional. If set to `DATA_MASKING`, the function is validated and made available as a masking function. For more information, see [Create custom masking routines](https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask).',
      }),
    definitionBody: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The body of the routine. For functions, this is the expression in the AS clause. If language=SQL, it is the substring inside (but excluding) the parentheses. For example, for the function created with the following statement: `CREATE FUNCTION JoinLines(x string, y string) as (concat(x, "\\n", y))` The definition_body is `concat(x, "\\n", y)` (\\n is not replaced with linebreak). If language=JAVASCRIPT, it is the evaluated string in the AS clause. For example, for the function created with the following statement: `CREATE FUNCTION f() RETURNS STRING LANGUAGE js AS \'return "\\n";\\n\'` The definition_body is `return "\\n";\\n` Note that both \\n are replaced with linebreaks.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The description of the routine, if defined.' }),
    determinismLevel: z
      .enum(['DETERMINISM_LEVEL_UNSPECIFIED', 'DETERMINISTIC', 'NOT_DETERMINISTIC'])
      .exactOptional()
      .openapi({
        description: 'Optional. The determinism level of the JavaScript UDF, if defined.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A hash of this resource.', readOnly: true }),
    importedLibraries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.',
      }),
    language: z
      .enum(['LANGUAGE_UNSPECIFIED', 'SQL', 'JAVASCRIPT', 'PYTHON', 'JAVA', 'SCALA'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Defaults to "SQL" if remote_function_options field is absent, not set otherwise.',
      }),
    lastModifiedTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when this routine was last modified, in milliseconds since the epoch.',
        readOnly: true,
      }),
    remoteFunctionOptions: RemoteFunctionOptionsSchema.exactOptional().openapi({
      description: 'Optional. Remote function specific options.',
    }),
    returnTableType: StandardSqlTableTypeSchema.exactOptional().openapi({
      description:
        'Optional. Can be set only if routine_type = "TABLE_VALUED_FUNCTION". If absent, the return table type is inferred from definition_body at query time in each query that references this routine. If present, then the columns in the evaluated table result will be cast to match the column types specified in return table type, at query time.',
    }),
    returnType: StandardSqlDataTypeSchema.exactOptional().openapi({
      description:
        'Optional if language = "SQL"; required otherwise. Cannot be set if routine_type = "TABLE_VALUED_FUNCTION". If absent, the return type is inferred from definition_body at query time in each query that references this routine. If present, then the evaluated result will be cast to the specified returned type at query time. For example, for the functions created with the following statements: * `CREATE FUNCTION Add(x FLOAT64, y FLOAT64) RETURNS FLOAT64 AS (x + y);` * `CREATE FUNCTION Increment(x FLOAT64) AS (Add(x, 1));` * `CREATE FUNCTION Decrement(x FLOAT64) RETURNS FLOAT64 AS (Add(x, -1));` The return_type is `{type_kind: "FLOAT64"}` for `Add` and `Decrement`, and is absent for `Increment` (inferred as FLOAT64 at query time). Suppose the function `Add` is replaced by `CREATE OR REPLACE FUNCTION Add(x INT64, y INT64) AS (x + y);` Then the inferred return type of `Increment` is automatically changed to INT64 at query time, while the return type of `Decrement` remains FLOAT64.',
    }),
    routineReference: RoutineReferenceSchema.exactOptional().openapi({
      description: 'Required. Reference describing the ID of this routine.',
    }),
    routineType: z
      .enum([
        'ROUTINE_TYPE_UNSPECIFIED',
        'SCALAR_FUNCTION',
        'PROCEDURE',
        'TABLE_VALUED_FUNCTION',
        'AGGREGATE_FUNCTION',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The type of routine.' }),
    securityMode: z
      .enum(['SECURITY_MODE_UNSPECIFIED', 'DEFINER', 'INVOKER'])
      .exactOptional()
      .openapi({
        description:
          "Optional. The security mode of the routine, if defined. If not defined, the security mode is automatically determined from the routine's configuration.",
      }),
    sparkOptions: SparkOptionsSchema.exactOptional().openapi({
      description: 'Optional. Spark specific options.',
    }),
    strictMode: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. Use this option to catch many common errors. Error checking is not exhaustive, and successfully creating a procedure doesn't guarantee that the procedure will successfully execute at runtime. If `strictMode` is set to `TRUE`, the procedure body is further checked for errors such as non-existent tables or columns. The `CREATE PROCEDURE` statement fails if the body fails any of these checks. If `strictMode` is set to `FALSE`, the procedure body is checked only for syntax. For procedures that invoke themselves recursively, specify `strictMode=FALSE` to avoid non-existent procedure errors during validation. Default value is `TRUE`.",
      }),
  })
  .openapi({ description: 'A user-defined function or a stored procedure.', required: [] })
  .openapi('Routine')

const ListRoutinesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to request the next page of results.' }),
    routines: z
      .array(RoutineSchema)
      .exactOptional()
      .openapi({
        description:
          'Routines in the requested dataset. Unless read_mask is set in the request, only the following fields are populated: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, language, and remote_function_options.',
      }),
  })
  .openapi({
    description: 'Describes the format of a single result page when listing routines.',
    required: [],
  })
  .openapi('ListRoutinesResponse')

const RowAccessPolicySchema = z
  .object({
    creationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when this row access policy was created, in milliseconds since the epoch.',
        readOnly: true,
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A hash of this resource.', readOnly: true }),
    filterPredicate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table. References to other tables, routines, and temporary functions are not supported. Examples: region="EU" date_field = CAST(\'2019-9-27\' as DATE) nullable_field is not NULL numeric_field BETWEEN 1.0 AND 5.0',
      }),
    lastModifiedTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when this row access policy was last modified, in milliseconds since the epoch.',
        readOnly: true,
      }),
    rowAccessPolicyReference: RowAccessPolicyReferenceSchema.exactOptional().openapi({
      description: 'Required. Reference describing the ID of this row access policy.',
    }),
  })
  .openapi({
    description:
      'Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of rows is controlled by its IAM policy.',
    required: [],
  })
  .openapi('RowAccessPolicy')

const ListRowAccessPoliciesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to request the next page of results.' }),
    rowAccessPolicies: z
      .array(RowAccessPolicySchema)
      .exactOptional()
      .openapi({ description: 'Row access policies on the requested table.' }),
  })
  .openapi({ description: 'Response message for the ListRowAccessPolicies method.', required: [] })
  .openapi('ListRowAccessPoliciesResponse')

const LocationMetadataSchema = z
  .object({
    legacyLocationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The legacy BigQuery location ID, e.g. “EU” for the “europe” location. This is for any API consumers that need the legacy “US” and “EU” locations.',
      }),
  })
  .openapi({
    description:
      'BigQuery-specific metadata about a location. This will be set on google.cloud.location.Location.metadata in Cloud Location API responses.',
    required: [],
  })
  .openapi('LocationMetadata')

const PolicySchema = z
  .object({
    auditConfigs: z
      .array(AuditConfigSchema)
      .exactOptional()
      .openapi({ description: 'Specifies cloud audit logging configuration for this policy.' }),
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
      'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('Policy')

const ProjectReferenceSchema = z
  .object({
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. ID of the project. Can be either the numeric ID or the assigned ID of the project.',
      }),
  })
  .openapi({ description: 'A unique reference to a project.', required: [] })
  .openapi('ProjectReference')

const ProjectListSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'A hash of the page of results.' }),
    kind: z
      .string()
      .default('bigquery#projectList')
      .exactOptional()
      .openapi({ description: 'The resource type of the response.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Use this token to request the next page of results.' }),
    projects: z
      .array(
        z
          .object({
            friendlyName: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'A descriptive name for this project. A wrapper is used here because friendlyName can be set to the empty string.',
              }),
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'An opaque ID of this project.' }),
            kind: z.string().exactOptional().openapi({ description: 'The resource type.' }),
            numericId: z
              .string()
              .exactOptional()
              .openapi({ description: 'The numeric ID of this project.' }),
            projectReference: ProjectReferenceSchema.exactOptional().openapi({
              description: 'A unique reference to this project.',
            }),
          })
          .openapi({ description: 'Information about a single project.', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Projects to which the user has at least READ access.' }),
    totalItems: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of projects in the page. A wrapper is used here because the field should still be in the response when the value is 0.',
      }),
  })
  .openapi({ description: 'Response object of ListProjects', required: [] })
  .openapi('ProjectList')

const QueryRequestSchema = z
  .object({
    connectionProperties: z
      .array(ConnectionPropertySchema)
      .exactOptional()
      .openapi({
        description: 'Optional. Connection properties which can modify the query behavior.',
      }),
    continuous: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '[Optional] Specifies whether the query should be executed as a continuous query. The default value is false.',
      }),
    createSession: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. If true, creates a new session using a randomly generated session_id. If false, runs query with an existing session_id passed in ConnectionProperty, otherwise runs query in non-session mode. The session location will be set to QueryRequest.location if it is present, otherwise it's set to the default location based on existing routing logic.",
      }),
    defaultDataset: DatasetReferenceSchema.exactOptional().openapi({
      description:
        "Optional. Specifies the default datasetId and projectId to assume for any unqualified table names in the query. If not set, all table names in the query string must be qualified in the format 'datasetId.tableId'.",
    }),
    dryRun: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. If set to true, BigQuery doesn't run the job. Instead, if the query is valid, BigQuery returns statistics about the job such as how many bytes would be processed. If the query is invalid, an error returns. The default value is false.",
      }),
    formatOptions: DataFormatOptionsSchema.exactOptional().openapi({
      description: 'Optional. Output format adjustments.',
    }),
    jobCreationMode: z
      .enum(['JOB_CREATION_MODE_UNSPECIFIED', 'JOB_CREATION_REQUIRED', 'JOB_CREATION_OPTIONAL'])
      .exactOptional()
      .openapi({
        description:
          'Optional. If not set, jobs are always required. If set, the query request will follow the behavior described JobCreationMode. This feature is not yet available. Jobs will always be created.',
      }),
    kind: z
      .string()
      .default('bigquery#queryRequest')
      .exactOptional()
      .openapi({ description: 'The resource type of the request.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels associated with this query. Labels can be used to organize and group query jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label keys must start with a letter and each label in the list must have a different key.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The geographic location where the job should run. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.',
      }),
    maxResults: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum number of rows of data to return per page of results. Setting this flag to a small value such as 1000 and then paging through results might improve reliability when the query result set is large. In addition to this limit, responses are also limited to 10 MB. By default, there is no maximum row count, and only the byte limit applies.',
      }),
    maximumBytesBilled: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Limits the bytes billed for this query. Queries with bytes billed above this limit will fail (without incurring a charge). If unspecified, the project default is used.',
      }),
    parameterMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'GoogleSQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.',
      }),
    preserveNulls: z
      .boolean()
      .exactOptional()
      .openapi({ deprecated: true, description: 'This property is deprecated.' }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A query string to execute, using Google Standard SQL or legacy SQL syntax. Example: "SELECT COUNT(f1) FROM myProjectId.myDatasetId.myTableId".',
      }),
    queryParameters: z
      .array(QueryParameterSchema)
      .exactOptional()
      .openapi({ description: 'Query parameters for GoogleSQL queries.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. A unique user provided identifier to ensure idempotent behavior for queries. Note that this is different from the job_id. It has the following properties: 1. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is recommended. 2. Read only queries can ignore this token since they are nullipotent by definition. 3. For the purposes of idempotency ensured by the request_id, a request is considered duplicate of another only if they have the same request_id and are actually duplicates. When determining whether a request is a duplicate of another request, all parameters in the request that may affect the result are considered. For example, query, connection_properties, query_parameters, use_legacy_sql are parameters that affect the result and are considered when determining whether a request is a duplicate, but properties like timeout_ms don't affect the result and are thus not considered. Dry run query requests are never considered duplicate of another request. 4. When a duplicate mutating query request is detected, it returns: a. the results of the mutation if it completes successfully within the timeout. b. the running operation if it is still in progress at the end of the timeout. 5. Its lifetime is limited to 15 minutes. In other words, if two requests are sent with the same request_id, but more than 15 minutes apart, idempotency is not guaranteed.",
      }),
    timeoutMs: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Optional: Specifies the maximum amount of time, in milliseconds, that the client is willing to wait for the query to complete. By default, this limit is 10 seconds (10,000 milliseconds). If the query is complete, the jobComplete field in the response is true. If the query has not yet completed, jobComplete is false. You can request a longer timeout period in the timeoutMs field. However, the call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. If jobComplete is false, you can continue to wait for the query to complete by calling the getQueryResults method until the jobComplete field in the getQueryResults response is true.',
      }),
    useLegacySql: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          "Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery's GoogleSQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false.",
      }),
    useQueryCache: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. The default value is true.',
      }),
  })
  .openapi({ description: 'Describes the format of the jobs.query request.', required: [] })
  .openapi('QueryRequest')

const QueryResponseSchema = z
  .object({
    cacheHit: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the query result was fetched from the query cache.' }),
    dmlStats: DmlStatisticsSchema.exactOptional().openapi({
      description:
        'Output only. Detailed statistics for DML statements INSERT, UPDATE, DELETE, MERGE or TRUNCATE.',
      readOnly: true,
    }),
    errors: z
      .array(ErrorProtoSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. For more information about error messages, see [Error messages](https://cloud.google.com/bigquery/docs/error-messages).',
        readOnly: true,
      }),
    jobComplete: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.',
      }),
    jobCreationReason: JobCreationReasonSchema.exactOptional().openapi({
      description:
        'Optional. Only relevant when a job_reference is present in the response. If job_reference is not present it will always be unset. When job_reference is present, this field should be interpreted as follows: If set, it will provide the reason of why a Job was created. If not set, it should be treated as the default: REQUESTED. This feature is not yet available. Jobs will always be created.',
    }),
    jobReference: JobReferenceSchema.exactOptional().openapi({
      description:
        'Reference to the Job that was created to run the query. This field will be present even if the original request timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults).',
    }),
    kind: z
      .string()
      .default('bigquery#queryResponse')
      .exactOptional()
      .openapi({ description: 'The resource type.' }),
    numDmlAffectedRows: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.',
        readOnly: true,
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token used for paging results. A non-empty token indicates that additional results are available. To see additional results, query the [`jobs.getQueryResults`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/getQueryResults) method. For more information, see [Paging through table data](https://cloud.google.com/bigquery/docs/paging-results).',
      }),
    queryId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Query ID for the completed query. This ID will be auto-generated. This field is not yet available and it is currently not guaranteed to be populated.',
      }),
    rows: z
      .array(TableRowSchema)
      .exactOptional()
      .openapi({
        description:
          'An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above.',
      }),
    schema: TableSchemaSchema.exactOptional().openapi({
      description: 'The schema of the results. Present only when the query completes successfully.',
    }),
    sessionInfo: SessionInfoSchema.exactOptional().openapi({
      description: 'Output only. Information of the session if this job is part of one.',
      readOnly: true,
    }),
    totalBytesProcessed: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of bytes processed for this query. If this query was a dry run, this is the number of bytes that would be processed if the query were run.',
      }),
    totalRows: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('QueryResponse')

const SetIamPolicyRequestSchema = z
  .object({
    policy: PolicySchema.exactOptional().openapi({
      description:
        'REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`',
      }),
  })
  .openapi({ description: 'Request message for `SetIamPolicy` method.', required: [] })
  .openapi('SetIamPolicyRequest')

const TableSchema: z.ZodType<TableType> = z
  .lazy(() =>
    z
      .object({
        biglakeConfiguration: BigLakeConfigurationSchema.exactOptional().openapi({
          description: 'Optional. Specifies the configuration of a BigLake managed table.',
        }),
        cloneDefinition: CloneDefinitionSchema.exactOptional().openapi({
          description:
            'Output only. Contains information about the clone. This value is set via the clone operation.',
          readOnly: true,
        }),
        clustering: ClusteringSchema.exactOptional().openapi({
          description:
            'Clustering specification for the table. Must be specified with time-based partitioning, data in the table will be first partitioned and subsequently clustered.',
        }),
        creationTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The time when this table was created, in milliseconds since the epoch.',
            readOnly: true,
          }),
        defaultCollation: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "Optional. Defines the default collation specification of new STRING fields in the table. During table creation or update, if a STRING field is added to this table without explicit collation specified, then the table inherits the table default collation. A change to this field affects only fields added afterwards, and does not alter the existing fields. The following values are supported: * 'und:ci': undetermined locale, case insensitive. * '': empty string. Default to case-sensitive behavior.",
          }),
        defaultRoundingMode: z
          .enum(['ROUNDING_MODE_UNSPECIFIED', 'ROUND_HALF_AWAY_FROM_ZERO', 'ROUND_HALF_EVEN'])
          .exactOptional()
          .openapi({
            description:
              "Optional. Defines the default rounding mode specification of new decimal fields (NUMERIC OR BIGNUMERIC) in the table. During table creation or update, if a decimal field is added to this table without an explicit rounding mode specified, then the field inherits the table default rounding mode. Changing this field doesn't affect existing fields.",
          }),
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'Optional. A user-friendly description of this table.' }),
        encryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
          description: 'Custom encryption configuration (e.g., Cloud KMS keys).',
        }),
        etag: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. A hash of this resource.', readOnly: true }),
        expirationTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Optional. The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created tables.',
          }),
        externalDataConfiguration: ExternalDataConfigurationSchema.exactOptional().openapi({
          description:
            'Optional. Describes the data format, location, and other properties of a table stored outside of BigQuery. By defining these properties, the data source can then be queried as if it were a standard BigQuery table.',
        }),
        friendlyName: z
          .string()
          .exactOptional()
          .openapi({ description: 'Optional. A descriptive name for this table.' }),
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. An opaque ID uniquely identifying the table.',
            readOnly: true,
          }),
        kind: z
          .string()
          .default('bigquery#table')
          .exactOptional()
          .openapi({ description: 'The type of resource ID.' }),
        labels: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({
            description:
              'The labels associated with this table. You can use these to organize and group your tables. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.',
          }),
        lastModifiedTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The time when this table was last modified, in milliseconds since the epoch.',
            readOnly: true,
          }),
        location: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The geographic location where the table resides. This value is inherited from the dataset.',
            readOnly: true,
          }),
        materializedView: MaterializedViewDefinitionSchema.exactOptional().openapi({
          description: 'Optional. The materialized view definition.',
        }),
        materializedViewStatus: MaterializedViewStatusSchema.exactOptional().openapi({
          description: 'Output only. The materialized view status.',
          readOnly: true,
        }),
        maxStaleness: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Optional. The maximum staleness of data that could be returned when the table (or stale MV) is queried. Staleness encoded as a string encoding of sql IntervalValue type.',
          }),
        model: ModelDefinitionSchema.exactOptional().openapi({ description: 'Deprecated.' }),
        numActiveLogicalBytes: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. Number of logical bytes that are less than 90 days old.',
            readOnly: true,
          }),
        numActivePhysicalBytes: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. Number of physical bytes less than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.',
            readOnly: true,
          }),
        numBytes: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The size of this table in logical bytes, excluding any data in the streaming buffer.',
            readOnly: true,
          }),
        numLongTermBytes: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The number of logical bytes in the table that are considered "long-term storage".',
            readOnly: true,
          }),
        numLongTermLogicalBytes: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. Number of logical bytes that are more than 90 days old.',
            readOnly: true,
          }),
        numLongTermPhysicalBytes: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. Number of physical bytes more than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.',
            readOnly: true,
          }),
        numPartitions: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The number of partitions present in the table or materialized view. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.',
            readOnly: true,
          }),
        numPhysicalBytes: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The physical size of this table in bytes. This includes storage used for time travel.',
            readOnly: true,
          }),
        numRows: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The number of rows of data in this table, excluding any data in the streaming buffer.',
            readOnly: true,
          }),
        numTimeTravelPhysicalBytes: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. Number of physical bytes used by time travel storage (deleted or changed data). This data is not kept in real time, and might be delayed by a few seconds to a few minutes.',
            readOnly: true,
          }),
        numTotalLogicalBytes: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. Total number of logical bytes in the table or materialized view.',
            readOnly: true,
          }),
        numTotalPhysicalBytes: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The physical size of this table in bytes. This also includes storage used for time travel. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.',
            readOnly: true,
          }),
        rangePartitioning: RangePartitioningSchema.exactOptional().openapi({
          description: 'If specified, configures range partitioning for this table.',
        }),
        replicas: z
          .array(TableReferenceSchema)
          .exactOptional()
          .openapi({
            description:
              'Optional. Output only. Table references of all replicas currently active on the table.',
            readOnly: true,
          }),
        requirePartitionFilter: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'Optional. If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.',
          }),
        resourceTags: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({
            description:
              '[Optional] The tags associated with this table. Tag keys are globally unique. See additional information on [tags](https://cloud.google.com/iam/docs/tags-access-control#definitions). An object containing a list of "key": value pairs. The key is the namespaced friendly name of the tag key, e.g. "12345/environment" where 12345 is parent id. The value is the friendly short name of the tag value, e.g. "production".',
          }),
        schema: TableSchemaSchema.exactOptional().openapi({
          description: 'Optional. Describes the schema of this table.',
        }),
        selfLink: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. A URL that can be used to access this resource again.',
            readOnly: true,
          }),
        snapshotDefinition: SnapshotDefinitionSchema.exactOptional().openapi({
          description:
            'Output only. Contains information about the snapshot. This value is set via snapshot creation.',
          readOnly: true,
        }),
        streamingBuffer: StreamingbufferSchema.exactOptional().openapi({
          description:
            "Output only. Contains information regarding this table's streaming buffer, if one is present. This field will be absent if the table is not being streamed to or if there is no data in the streaming buffer.",
          readOnly: true,
        }),
        tableConstraints: TableConstraintsSchema.exactOptional().openapi({
          description: 'Optional. Tables Primary Key and Foreign Key information',
        }),
        tableReference: TableReferenceSchema.exactOptional().openapi({
          description: 'Required. Reference describing the ID of this table.',
        }),
        tableReplicationInfo: TableReplicationInfoSchema.exactOptional().openapi({
          description:
            'Optional. Table replication info for table created `AS REPLICA` DDL like: `CREATE MATERIALIZED VIEW mv1 AS REPLICA OF src_mv`',
        }),
        timePartitioning: TimePartitioningSchema.exactOptional().openapi({
          description: 'If specified, configures time-based partitioning for this table.',
        }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. Describes the table type. The following values are supported: * `TABLE`: A normal BigQuery table. * `VIEW`: A virtual table defined by a SQL query. * `EXTERNAL`: A table that references data stored in an external storage system, such as Google Cloud Storage. * `MATERIALIZED_VIEW`: A precomputed view defined by a SQL query. * `SNAPSHOT`: An immutable BigQuery table that preserves the contents of a base table at a particular time. See additional information on [table snapshots](/bigquery/docs/table-snapshots-intro). The default value is `TABLE`.',
            readOnly: true,
          }),
        view: ViewDefinitionSchema.exactOptional().openapi({
          description: 'Optional. The view definition.',
        }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Table')

const TableDataInsertAllRequestSchema = z
  .object({
    ignoreUnknownValues: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Accept rows that contain values that do not match the schema. The unknown values are ignored. Default is false, which treats unknown values as errors.',
      }),
    kind: z
      .string()
      .default('bigquery#tableDataInsertAllRequest')
      .exactOptional()
      .openapi({
        description:
          'Optional. The resource type of the response. The value is not checked at the backend. Historically, it has been set to "bigquery#tableDataInsertAllRequest" but you are not required to set it.',
      }),
    rows: z
      .array(
        z
          .object({
            insertId: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Insertion ID for best-effort deduplication. This feature is not recommended, and users seeking stronger insertion semantics are encouraged to use other mechanisms such as the BigQuery Write API.',
              }),
            json: JsonObjectSchema.exactOptional().openapi({
              description: 'Data for a single row.',
            }),
          })
          .openapi({ description: 'Data for a single insertion row.', required: [] }),
      )
      .exactOptional(),
    skipInvalidRows: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Insert all valid rows of a request, even if invalid rows exist. The default value is false, which causes the entire request to fail if any invalid rows exist.',
      }),
    templateSuffix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. If specified, treats the destination table as a base template, and inserts the rows into an instance table named "{destination}{templateSuffix}". BigQuery will manage creation of the instance table, using the schema of the base template table. See https://cloud.google.com/bigquery/streaming-data-into-bigquery#template-tables for considerations when working with templates tables.',
      }),
    traceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Unique request trace id. Used for debugging purposes only. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is recommended.',
      }),
  })
  .openapi({ description: 'Request for sending a single streaming insert.', required: [] })
  .openapi('TableDataInsertAllRequest')

const TableDataInsertAllResponseSchema = z
  .object({
    insertErrors: z
      .array(
        z
          .object({
            errors: z
              .array(ErrorProtoSchema)
              .exactOptional()
              .openapi({
                description: 'Error information for the row indicated by the index property.',
              }),
            index: z
              .uint32()
              .exactOptional()
              .openapi({ description: 'The index of the row that error applies to.' }),
          })
          .openapi({ description: "Error details about a single row's insertion.", required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'Describes specific errors encountered while processing the request.',
      }),
    kind: z
      .string()
      .default('bigquery#tableDataInsertAllResponse')
      .exactOptional()
      .openapi({ description: 'Returns "bigquery#tableDataInsertAllResponse".' }),
  })
  .openapi({ description: 'Describes the format of a streaming insert response.', required: [] })
  .openapi('TableDataInsertAllResponse')

const TableDataListSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'A hash of this page of results.' }),
    kind: z
      .string()
      .default('bigquery#tableDataList')
      .exactOptional()
      .openapi({ description: 'The resource type of the response.' }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token used for paging results. Providing this token instead of the startIndex parameter can help you retrieve stable results when an underlying table is changing.',
      }),
    rows: z.array(TableRowSchema).exactOptional().openapi({ description: 'Rows of results.' }),
    totalRows: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Total rows of the entire table. In order to show default value 0 we have to present it as string.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TableDataList')

const TableListSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'A hash of this page of results.' }),
    kind: z
      .string()
      .default('bigquery#tableList')
      .exactOptional()
      .openapi({ description: 'The type of list.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to request the next page of results.' }),
    tables: z
      .array(
        z
          .object({
            clustering: ClusteringSchema.exactOptional().openapi({
              description: 'Clustering specification for this table, if configured.',
            }),
            creationTime: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Output only. The time when this table was created, in milliseconds since the epoch.',
                readOnly: true,
              }),
            expirationTime: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.',
              }),
            friendlyName: z
              .string()
              .exactOptional()
              .openapi({ description: 'The user-friendly name for this table.' }),
            id: z.string().exactOptional().openapi({ description: 'An opaque ID of the table.' }),
            kind: z.string().exactOptional().openapi({ description: 'The resource type.' }),
            labels: z
              .record(z.string(), z.string())
              .exactOptional()
              .openapi({
                description:
                  'The labels associated with this table. You can use these to organize and group your tables.',
              }),
            rangePartitioning: RangePartitioningSchema.exactOptional().openapi({
              description: 'The range partitioning for this table.',
            }),
            requirePartitionFilter: z
              .boolean()
              .default(false)
              .exactOptional()
              .openapi({
                description:
                  'Optional. If set to true, queries including this table must specify a partition filter. This filter is used for partition elimination.',
              }),
            tableReference: TableReferenceSchema.exactOptional().openapi({
              description: 'A reference uniquely identifying table.',
            }),
            timePartitioning: TimePartitioningSchema.exactOptional().openapi({
              description: 'The time-based partitioning for this table.',
            }),
            type: z.string().exactOptional().openapi({ description: 'The type of table.' }),
            view: z
              .object({
                privacyPolicy: PrivacyPolicySchema.exactOptional().openapi({
                  description: 'Specifices the privacy policy for the view.',
                }),
                useLegacySql: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'True if view is defined in legacy SQL dialect, false if in GoogleSQL.',
                  }),
              })
              .exactOptional()
              .openapi({ description: 'Information about a logical view.', required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Tables in the requested dataset.' }),
    totalItems: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of tables in the dataset.' }),
  })
  .openapi({
    description: 'Partial projection of the metadata for a given table in a list response.',
    required: [],
  })
  .openapi('TableList')

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

const UndeleteDatasetRequestSchema = z
  .object({
    deletionTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The exact time when the dataset was deleted. If not specified, it will undelete the most recently deleted version.',
      }),
  })
  .openapi({ description: 'Request format for undeleting a dataset.', required: [] })
  .openapi('UndeleteDatasetRequest')

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
        'https://www.googleapis.com/auth/bigquery':
          'View and manage your data in Google BigQuery and see the email address for your Google Account',
        'https://www.googleapis.com/auth/bigquery.insertdata': 'Insert data into Google BigQuery',
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
        'https://www.googleapis.com/auth/devstorage.full_control':
          'Manage your data and permissions in Cloud Storage and see the email address for your Google Account',
        'https://www.googleapis.com/auth/devstorage.read_only':
          'View your data in Google Cloud Storage',
        'https://www.googleapis.com/auth/devstorage.read_write':
          'Manage your data in Cloud Storage and see the email address of your Google Account',
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
        'https://www.googleapis.com/auth/bigquery':
          'View and manage your data in Google BigQuery and see the email address for your Google Account',
        'https://www.googleapis.com/auth/bigquery.insertdata': 'Insert data into Google BigQuery',
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
        'https://www.googleapis.com/auth/devstorage.full_control':
          'Manage your data and permissions in Cloud Storage and see the email address for your Google Account',
        'https://www.googleapis.com/auth/devstorage.read_only':
          'View your data in Google Cloud Storage',
        'https://www.googleapis.com/auth/devstorage.read_write':
          'Manage your data in Cloud Storage and see the email address of your Google Account',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getProjectsRoute = createRoute({
  method: 'get',
  path: '/projects',
  tags: ['projects'],
  description:
    'RPC to list projects to which the user has been granted any project role. Users of this method are encouraged to consider the [Resource Manager](https://cloud.google.com/resource-manager/docs/) API, which provides the underlying data for this method and has more capabilities.',
  operationId: 'bigquery.projects.list',
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
      maxResults: z
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
              '`maxResults` unset returns all results, up to 50 per page. Additionally, the number of projects in a page may be fewer than `maxResults` because projects are retrieved and then filtered to only projects with the BigQuery API enabled.',
            in: 'query',
            name: 'maxResults',
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
              'Page token, returned by a previous call, to request the next page of results. If not present, no further pages are present.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProjectListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getProjectsProjectIdDatasetsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/datasets',
  tags: ['datasets'],
  description:
    'Lists all datasets in the specified project to which the user has been granted the READER dataset role.',
  operationId: 'bigquery.datasets.list',
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
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to list all datasets, including hidden ones',
            in: 'query',
            name: 'all',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An expression for filtering the results of the request by label. The syntax is \\"labels.<name>[:<value>]\\". Multiple filters can be ANDed together by connecting with a space. Example: \\"labels.department:receiving labels.active\\". See [Filtering datasets using labels](/bigquery/docs/labeling-datasets#filtering_datasets_using_labels) for details.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.',
            in: 'query',
            name: 'maxResults',
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
              'Page token, returned by a previous call, to request the next page of results',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the datasets to be listed',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatasetListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postProjectsProjectIdDatasetsRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/datasets',
  tags: ['datasets'],
  description: 'Creates a new empty dataset.',
  operationId: 'bigquery.datasets.insert',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the new dataset',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatasetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatasetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getProjectsProjectIdDatasetsDatasetIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/datasets/{datasetId}',
  tags: ['datasets'],
  description: 'Returns the dataset specified by datasetID.',
  operationId: 'bigquery.datasets.get',
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
      datasetView: z
        .enum(['DATASET_VIEW_UNSPECIFIED', 'METADATA', 'ACL', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies the view that determines which dataset information is returned. By default, metadata and ACL information are returned.',
            in: 'query',
            name: 'datasetView',
            schema: {
              enum: ['DATASET_VIEW_UNSPECIFIED', 'METADATA', 'ACL', 'FULL'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the requested dataset',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the requested dataset',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatasetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const putProjectsProjectIdDatasetsDatasetIdRoute = createRoute({
  method: 'put',
  path: '/projects/{projectId}/datasets/{datasetId}',
  tags: ['datasets'],
  description:
    'Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.',
  operationId: 'bigquery.datasets.update',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the dataset being updated',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the dataset being updated',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatasetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatasetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteProjectsProjectIdDatasetsDatasetIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/datasets/{datasetId}',
  tags: ['datasets'],
  description:
    'Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.',
  operationId: 'bigquery.datasets.delete',
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
      deleteContents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False',
            in: 'query',
            name: 'deleteContents',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the dataset being deleted',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of dataset being deleted',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchProjectsProjectIdDatasetsDatasetIdRoute = createRoute({
  method: 'patch',
  path: '/projects/{projectId}/datasets/{datasetId}',
  tags: ['datasets'],
  description:
    'Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports RFC5789 patch semantics.',
  operationId: 'bigquery.datasets.patch',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the dataset being updated',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the dataset being updated',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatasetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatasetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getProjectsProjectIdDatasetsDatasetIdModelsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/datasets/{datasetId}/models',
  tags: ['models'],
  description:
    'Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.',
  operationId: 'bigquery.models.list',
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
      maxResults: z
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
              'The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.',
            in: 'query',
            name: 'maxResults',
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
              'Page token, returned by a previous call to request the next page of results',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the models to list.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the models to list.',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListModelsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/datasets/{datasetId}/models/{modelId}',
  tags: ['models'],
  description: 'Gets the specified model resource by model ID.',
  operationId: 'bigquery.models.get',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the requested model.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the requested model.',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      modelId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Model ID of the requested model.',
            in: 'path',
            name: 'modelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ModelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const deleteProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/datasets/{datasetId}/models/{modelId}',
  tags: ['models'],
  description: 'Deletes the model specified by modelId from the dataset.',
  operationId: 'bigquery.models.delete',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the model to delete.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the model to delete.',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      modelId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Model ID of the model to delete.',
            in: 'path',
            name: 'modelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute = createRoute({
  method: 'patch',
  path: '/projects/{projectId}/datasets/{datasetId}/models/{modelId}',
  tags: ['models'],
  description: 'Patch specific fields in the specified model.',
  operationId: 'bigquery.models.patch',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the model to patch.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the model to patch.',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      modelId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Model ID of the model to patch.',
            in: 'path',
            name: 'modelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ModelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ModelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getProjectsProjectIdDatasetsDatasetIdRoutinesRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/datasets/{datasetId}/routines',
  tags: ['routines'],
  description: 'Lists all routines in the specified dataset. Requires the READER dataset role.',
  operationId: 'bigquery.routines.list',
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
              'If set, then only the Routines matching this filter are returned. The supported format is `routineType:{RoutineType}`, where `{RoutineType}` is a RoutineType enum. For example: `routineType:SCALAR_FUNCTION`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.',
            in: 'query',
            name: 'maxResults',
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
              'Page token, returned by a previous call, to request the next page of results',
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
              'If set, then only the Routine fields in the field mask, as well as project_id, dataset_id and routine_id, are returned in the response. If unset, then the following Routine fields are returned: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, and language.',
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the routines to list',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the routines to list',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListRoutinesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postProjectsProjectIdDatasetsDatasetIdRoutinesRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/datasets/{datasetId}/routines',
  tags: ['routines'],
  description: 'Creates a new routine in the dataset.',
  operationId: 'bigquery.routines.insert',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the new routine',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the new routine',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoutineSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RoutineSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/datasets/{datasetId}/routines/{routineId}',
  tags: ['routines'],
  description: 'Gets the specified routine resource by routine ID.',
  operationId: 'bigquery.routines.get',
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
            description:
              'If set, only the Routine fields in the field mask are returned in the response. If unset, all Routine fields are returned.',
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the requested routine',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the requested routine',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      routineId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Routine ID of the requested routine',
            in: 'path',
            name: 'routineId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RoutineSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const putProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute = createRoute({
  method: 'put',
  path: '/projects/{projectId}/datasets/{datasetId}/routines/{routineId}',
  tags: ['routines'],
  description:
    'Updates information in an existing routine. The update method replaces the entire Routine resource.',
  operationId: 'bigquery.routines.update',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the routine to update',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the routine to update',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      routineId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Routine ID of the routine to update',
            in: 'path',
            name: 'routineId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoutineSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RoutineSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/datasets/{datasetId}/routines/{routineId}',
  tags: ['routines'],
  description: 'Deletes the routine specified by routineId from the dataset.',
  operationId: 'bigquery.routines.delete',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the routine to delete',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the routine to delete',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      routineId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Routine ID of the routine to delete',
            in: 'path',
            name: 'routineId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getProjectsProjectIdDatasetsDatasetIdTablesRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/datasets/{datasetId}/tables',
  tags: ['tables'],
  description: 'Lists all tables in the specified dataset. Requires the READER dataset role.',
  operationId: 'bigquery.tables.list',
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
      maxResults: z
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
              'The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.',
            in: 'query',
            name: 'maxResults',
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
              'Page token, returned by a previous call, to request the next page of results',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the tables to list',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the tables to list',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TableListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postProjectsProjectIdDatasetsDatasetIdTablesRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/datasets/{datasetId}/tables',
  tags: ['tables'],
  description: 'Creates a new, empty table in the dataset.',
  operationId: 'bigquery.tables.insert',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the new table',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the new table',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TableSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TableSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/datasets/{datasetId}/tables/{tableId}',
  tags: ['tables'],
  description:
    'Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.',
  operationId: 'bigquery.tables.get',
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
      selectedFields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of table schema fields to return (comma-separated). If unspecified, all fields are returned. A fieldMask cannot be used here because the fields will automatically be converted from camelCase to snake_case and the conversion will fail if there are underscores. Since these are fields in BigQuery table schemas, underscores are allowed.',
            in: 'query',
            name: 'selectedFields',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['TABLE_METADATA_VIEW_UNSPECIFIED', 'BASIC', 'STORAGE_STATS', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies the view that determines which table information is returned. By default, basic table information and storage statistics (STORAGE_STATS) are returned.',
            in: 'query',
            name: 'view',
            schema: {
              enum: ['TABLE_METADATA_VIEW_UNSPECIFIED', 'BASIC', 'STORAGE_STATS', 'FULL'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the requested table',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the requested table',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tableId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Table ID of the requested table',
            in: 'path',
            name: 'tableId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TableSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const putProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute = createRoute({
  method: 'put',
  path: '/projects/{projectId}/datasets/{datasetId}/tables/{tableId}',
  tags: ['tables'],
  description:
    'Updates information in an existing table. The update method replaces the entire Table resource, whereas the patch method only replaces fields that are provided in the submitted Table resource.',
  operationId: 'bigquery.tables.update',
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
      autodetect_schema: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional.  When true will autodetect schema, else will keep original schema',
            in: 'query',
            name: 'autodetect_schema',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the table to update',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the table to update',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tableId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Table ID of the table to update',
            in: 'path',
            name: 'tableId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TableSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TableSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/datasets/{datasetId}/tables/{tableId}',
  tags: ['tables'],
  description:
    'Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.',
  operationId: 'bigquery.tables.delete',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the table to delete',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the table to delete',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tableId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Table ID of the table to delete',
            in: 'path',
            name: 'tableId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute = createRoute({
  method: 'patch',
  path: '/projects/{projectId}/datasets/{datasetId}/tables/{tableId}',
  tags: ['tables'],
  description:
    'Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports RFC5789 patch semantics.',
  operationId: 'bigquery.tables.patch',
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
      autodetect_schema: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional.  When true will autodetect schema, else will keep original schema',
            in: 'query',
            name: 'autodetect_schema',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the table to update',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the table to update',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tableId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Table ID of the table to update',
            in: 'path',
            name: 'tableId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TableSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TableSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/data',
  tags: ['tabledata'],
  description: 'List the content of a table in rows.',
  operationId: 'bigquery.tabledata.list',
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
      'formatOptions.useInt64Timestamp': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Output timestamp as usec int64. Default is false.',
            in: 'query',
            name: 'formatOptions.useInt64Timestamp',
            schema: { type: 'boolean' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Row limit of the table.',
            in: 'query',
            name: 'maxResults',
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
              'To retrieve the next page of table data, set this field to the string provided in the pageToken field of the response body from your previous call to tabledata.list.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      selectedFields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Subset of fields to return, supports select into sub fields. Example: selected_fields = "a,e.d.f";',
            in: 'query',
            name: 'selectedFields',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startIndex: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Start row index of the table.',
            in: 'query',
            name: 'startIndex',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project id of the table to list.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset id of the table to list.',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tableId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Table id of the table to list.',
            in: 'path',
            name: 'tableId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TableDataListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/insertAll',
  tags: ['tabledata'],
  description: 'Streams data into BigQuery one record at a time without needing to run a load job.',
  operationId: 'bigquery.tabledata.insertAll',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the destination.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of the destination.',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tableId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Table ID of the destination.',
            in: 'path',
            name: 'tableId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TableDataInsertAllRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TableDataInsertAllResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery.insertdata'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery.insertdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesRoute = createRoute(
  {
    method: 'get',
    path: '/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/rowAccessPolicies',
    tags: ['rowAccessPolicies'],
    description: 'Lists all row access policies on the specified table.',
    operationId: 'bigquery.rowAccessPolicies.list',
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
                'The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.',
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
                'Page token, returned by a previous call, to request the next page of results.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'Required. Project ID of the row access policies to list.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        datasetId: z
          .string()
          .openapi({
            param: {
              description: 'Required. Dataset ID of row access policies to list.',
              in: 'path',
              name: 'datasetId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        tableId: z
          .string()
          .openapi({
            param: {
              description: 'Required. Table ID of the table to list row access policies.',
              in: 'path',
              name: 'tableId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ListRowAccessPoliciesResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/bigquery'],
        Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      },
    ],
  },
)

export const postProjectsProjectIdDatasetsDatasetIdUndeleteRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/datasets/{datasetId}:undelete',
  tags: ['datasets'],
  description:
    'Undeletes a dataset which is within time travel window based on datasetId. If a time is specified, the dataset version deleted at that time is undeleted, else the last live version is undeleted.',
  operationId: 'bigquery.datasets.undelete',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the dataset to be undeleted',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasetId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Dataset ID of dataset being deleted',
            in: 'path',
            name: 'datasetId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UndeleteDatasetRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatasetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getProjectsProjectIdJobsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/jobs',
  tags: ['jobs'],
  description:
    'Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.',
  operationId: 'bigquery.jobs.list',
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
      allUsers: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to display jobs owned by all users in the project. Default False.',
            in: 'query',
            name: 'allUsers',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      maxCreationTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Max value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created before or at this timestamp are returned.',
            in: 'query',
            name: 'maxCreationTime',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      minCreationTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Min value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created after or at this timestamp are returned.',
            in: 'query',
            name: 'minCreationTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Page token, returned by a previous call, to request the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      parentJobId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, show only child jobs of the specified parent. Otherwise, show all top-level jobs.',
            in: 'query',
            name: 'parentJobId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projection: z
        .enum(['full', 'minimal'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict information returned to a set of selected fields',
            in: 'query',
            name: 'projection',
            schema: { enum: ['full', 'minimal'], type: 'string' },
            required: false,
          },
        }),
      stateFilter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['done', 'pending', 'running'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter for job state',
            explode: true,
            in: 'query',
            name: 'stateFilter',
            schema: {
              items: { enum: ['done', 'pending', 'running'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the jobs to list.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postProjectsProjectIdJobsRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/jobs',
  tags: ['jobs'],
  description:
    "Starts a new asynchronous job. This API has two different kinds of endpoint URIs, as this method supports a variety of use cases. * The *Metadata* URI is used for most interactions, as it accepts the job configuration directly. * The *Upload* URI is ONLY for the case when you're sending both a load job configuration and a data stream together. In this case, the Upload URI accepts the job configuration and the data as two distinct multipart MIME parts.",
  operationId: 'bigquery.jobs.insert',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of project that will be billed for the job.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/octet-stream': { schema: JobSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.full_control'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.full_control'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_only'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/devstorage.read_write'],
      Oauth2c: ['https://www.googleapis.com/auth/devstorage.read_write'],
    },
  ],
})

export const getProjectsProjectIdJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/jobs/{jobId}',
  tags: ['jobs'],
  description:
    "Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.",
  operationId: 'bigquery.jobs.get',
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
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The geographic location of the job. You must specify the location to run the job for the following scenarios: - If the location to run a job is not in the `us` or the `eu` multi-regional location - If the job's location is in a single region (for example, `us-central1`) For more information, see https://cloud.google.com/bigquery/docs/locations#specifying_your_location.",
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the requested job.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Job ID of the requested job.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postProjectsProjectIdJobsJobIdCancelRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/jobs/{jobId}/cancel',
  tags: ['jobs'],
  description:
    'Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.',
  operationId: 'bigquery.jobs.cancel',
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
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The geographic location of the job. You must specify the location to run the job for the following scenarios: - If the location to run a job is not in the `us` or the `eu` multi-regional location - If the job's location is in a single region (for example, `us-central1`) For more information, see https://cloud.google.com/bigquery/docs/locations#specifying_your_location.",
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the job to cancel',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Job ID of the job to cancel',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobCancelResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteProjectsProjectIdJobsJobIdDeleteRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/jobs/{jobId}/delete',
  tags: ['jobs'],
  description:
    "Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.",
  operationId: 'bigquery.jobs.delete',
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
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The geographic location of the job. Required. See details at: https://cloud.google.com/bigquery/docs/locations#specifying_your_location.',
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the job for which metadata is to be deleted.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Job ID of the job for which metadata is to be deleted. If this is a parent job which has child jobs, the metadata from all child jobs will be deleted as well. Direct deletion of the metadata of child jobs is not allowed.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postProjectsProjectIdQueriesRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/queries',
  tags: ['jobs'],
  description:
    'Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.',
  operationId: 'bigquery.jobs.query',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the query request.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QueryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QueryResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getProjectsProjectIdQueriesJobIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/queries/{jobId}',
  tags: ['jobs'],
  description: 'RPC to get the results of a query job.',
  operationId: 'bigquery.jobs.getQueryResults',
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
      'formatOptions.useInt64Timestamp': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Output timestamp as usec int64. Default is false.',
            in: 'query',
            name: 'formatOptions.useInt64Timestamp',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The geographic location of the job. You must specify the location to run the job for the following scenarios: - If the location to run a job is not in the `us` or the `eu` multi-regional location - If the job's location is in a single region (for example, `us-central1`) For more information, see https://cloud.google.com/bigquery/docs/locations#specifying_your_location.",
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to read.',
            in: 'query',
            name: 'maxResults',
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
              'Page token, returned by a previous call, to request the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startIndex: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zero-based index of the starting row.',
            in: 'query',
            name: 'startIndex',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timeoutMs: z
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
              'Optional: Specifies the maximum amount of time, in milliseconds, that the client is willing to wait for the query to complete. By default, this limit is 10 seconds (10,000 milliseconds). If the query is complete, the jobComplete field in the response is true. If the query has not yet completed, jobComplete is false. You can request a longer timeout period in the timeoutMs field. However, the call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. If jobComplete is false, you can continue to wait for the query to complete by calling the getQueryResults method until the jobComplete field in the getQueryResults response is true.',
            in: 'query',
            name: 'timeoutMs',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Project ID of the query job.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Job ID of the query job.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetQueryResultsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getProjectsProjectIdServiceAccountRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/serviceAccount',
  tags: ['projects'],
  description:
    'RPC to get the service account for a project used for interactions with Google Cloud KMS',
  operationId: 'bigquery.projects.getServiceAccount',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. ID of the project.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetServiceAccountResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postResourceGetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/{resource}:getIamPolicy',
  tags: ['tables'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId: 'bigquery.tables.getIamPolicy',
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
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/{resource}:setIamPolicy',
  tags: ['tables'],
  description:
    'Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.',
  operationId: 'bigquery.tables.setIamPolicy',
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
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/{resource}:testIamPermissions',
  tags: ['tables'],
  description:
    'Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.',
  operationId: 'bigquery.tables.testIamPermissions',
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
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})
