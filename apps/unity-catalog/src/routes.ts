import { createRoute, z } from '@hono/zod-openapi'

const SecurablePropertiesMapSchema = z
  .record(z.string(), z.string())
  .openapi({ description: 'A map of key-value properties attached to the securable.' })
  .openapi('SecurablePropertiesMap')

const VolumeTypeSchema = z
  .enum(['MANAGED', 'EXTERNAL'])
  .openapi({ description: 'The type of the volume' })
  .openapi('VolumeType')

const CreateVolumeRequestContentSchema = z
  .object({
    catalog_name: z
      .string()
      .openapi({ description: 'The name of the catalog where the schema and the volume are' }),
    schema_name: z.string().openapi({ description: 'The name of the schema where the volume is' }),
    name: z.string().openapi({ description: 'The name of the volume' }),
    volume_type: VolumeTypeSchema,
    comment: z
      .string()
      .min(1)
      .max(65536)
      .exactOptional()
      .openapi({ description: 'The comment attached to the volume' }),
    storage_location: z
      .string()
      .exactOptional()
      .openapi({ description: 'The storage location of the volume' }),
  })
  .openapi({ required: ['catalog_name', 'schema_name', 'name', 'volume_type'] })
  .openapi('CreateVolumeRequestContent')

const VolumeInfoSchema = z
  .object({
    browse_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when the response contains only discovery metadata authorized by BROWSE.',
      }),
    catalog_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the catalog where the schema and the volume are' }),
    schema_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the schema where the volume is' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the volume' }),
    comment: z
      .string()
      .min(1)
      .max(65536)
      .exactOptional()
      .openapi({ description: 'The comment attached to the volume' }),
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of the user who owns the volume' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time at which this volume was created, in epoch milliseconds.',
      }),
    created_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'TThe identifier of the user who created the volume' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time at which this volume was last modified, in epoch milliseconds.',
      }),
    updated_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of the user who updated the volume last time' }),
    volume_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the volume' }),
    volume_type: VolumeTypeSchema.exactOptional(),
    storage_location: z
      .string()
      .exactOptional()
      .openapi({ description: 'The storage location of the volume' }),
    full_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full name of volume, in form of __catalog_name__.__schema_name__.__volume_name__.',
      }),
  })
  .openapi({ required: [] })
  .openapi('VolumeInfo')

const ListVolumesResponseContentSchema = z
  .object({
    volumes: z.array(VolumeInfoSchema).exactOptional(),
    next_page_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque token to retrieve the next page of results. Absent if there are no more pages.\n__page_token__ should be set to this value for the next request to retrieve the next page of results.\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListVolumesResponseContent')

const UpdateVolumeRequestContentSchema = z
  .object({
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of the new owner. The user must already exist.' }),
    comment: z
      .string()
      .min(1)
      .max(65536)
      .exactOptional()
      .openapi({ description: 'The comment attached to the volume' }),
    new_name: z.string().exactOptional().openapi({ description: 'New name for the volume.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateVolumeRequestContent')

const ColumnTypeNameSchema = z
  .enum([
    'BOOLEAN',
    'BYTE',
    'SHORT',
    'INT',
    'LONG',
    'FLOAT',
    'DOUBLE',
    'DATE',
    'TIMESTAMP',
    'TIMESTAMP_NTZ',
    'STRING',
    'BINARY',
    'DECIMAL',
    'INTERVAL',
    'ARRAY',
    'STRUCT',
    'MAP',
    'VARIANT',
    'CHAR',
    'NULL',
    'USER_DEFINED_TYPE',
    'TABLE_TYPE',
  ])
  .openapi({ description: 'Name of type (INT, STRUCT, MAP, etc.).' })
  .openapi('ColumnTypeName')

const ColumnInfoSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of Column.' }),
    type_text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Full data type specification as SQL/catalogString text.' }),
    type_json: z
      .string()
      .exactOptional()
      .openapi({ description: 'Full data type specification, JSON-serialized.' }),
    type_name: ColumnTypeNameSchema.exactOptional(),
    type_precision: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Digits of precision; required for DecimalTypes.' }),
    type_scale: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Digits to right of decimal; Required for DecimalTypes.' }),
    type_interval_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Format of IntervalType.' }),
    position: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Ordinal position of column (starting at position 0).' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
    nullable: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Whether field may be Null.' }),
    partition_index: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Partition index for column.' }),
  })
  .openapi({ required: [] })
  .openapi('ColumnInfo')

const TableTypeSchema = z
  .enum(['MANAGED', 'EXTERNAL', 'STREAMING_TABLE', 'MATERIALIZED_VIEW', 'METRIC_VIEW', 'VIEW'])
  .openapi('TableType')

const DataSourceFormatSchema = z
  .enum(['DELTA', 'ICEBERG', 'CSV', 'JSON', 'AVRO', 'PARQUET', 'ORC', 'TEXT'])
  .openapi({ description: 'Data source format' })
  .openapi('DataSourceFormat')

const TableDependencySchema = z
  .object({
    table_full_name: z
      .string()
      .openapi({
        description:
          'Full name of the dependent table, in the form of __catalog_name__.__schema_name__.__table_name__.',
      }),
  })
  .openapi({
    description: 'A table that is dependent on a SQL object.',
    required: ['table_full_name'],
  })
  .openapi('TableDependency')

const FunctionDependencySchema = z
  .object({
    function_full_name: z
      .string()
      .openapi({
        description:
          'Full name of the dependent function, in the form of __catalog_name__.__schema_name__.__function_name__.',
      }),
  })
  .openapi({
    description: 'A function that is dependent on a SQL object.',
    required: ['function_full_name'],
  })
  .openapi('FunctionDependency')

const DependencySchema = z
  .object({
    table: TableDependencySchema.exactOptional(),
    function: FunctionDependencySchema.exactOptional(),
  })
  .openapi({
    description:
      'A dependency of a SQL object. Either the __table__ field or the __function__ field must be defined.',
    required: [],
  })
  .openapi('Dependency')

const DependencyListSchema = z
  .object({
    dependencies: z
      .array(DependencySchema)
      .exactOptional()
      .openapi({ description: 'Array of dependencies.' }),
  })
  .openapi({ description: 'A list of dependencies.', required: [] })
  .openapi('DependencyList')

const TableInfoSchema = z
  .object({
    browse_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when the response contains only discovery metadata authorized by BROWSE.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of table, relative to parent schema.' }),
    catalog_name: z.string().exactOptional().openapi({ description: 'Name of parent catalog.' }),
    schema_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of parent schema relative to its parent catalog.' }),
    table_type: TableTypeSchema.exactOptional(),
    data_source_format: DataSourceFormatSchema.exactOptional(),
    columns: z
      .array(ColumnInfoSchema)
      .exactOptional()
      .openapi({ description: "The array of __ColumnInfo__ definitions of the table's columns." }),
    storage_location: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Storage root URL for table (for **MANAGED**, **EXTERNAL** tables)',
      }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
    properties: SecurablePropertiesMapSchema.exactOptional(),
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of current owner of table.' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time at which this table was created, in epoch milliseconds.',
      }),
    created_by: z.string().exactOptional().openapi({ description: 'Username of table creator.' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time at which this table was last modified, in epoch milliseconds.',
      }),
    updated_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of user who last modified the table.' }),
    table_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the table.' }),
    view_definition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Definition text for view-like table types such as VIEW, MATERIALIZED_VIEW, STREAMING_TABLE, and METRIC_VIEW. The format depends on the table type (SQL for views, YAML for metric views).',
      }),
    view_dependencies: DependencyListSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TableInfo')

const CreateTableSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of table, relative to parent schema.' }),
    catalog_name: z.string().openapi({ description: 'Name of parent catalog.' }),
    schema_name: z
      .string()
      .openapi({ description: 'Name of parent schema relative to its parent catalog.' }),
    table_type: TableTypeSchema,
    data_source_format: DataSourceFormatSchema.exactOptional(),
    columns: z
      .array(ColumnInfoSchema)
      .openapi({ description: "The array of __ColumnInfo__ definitions of the table's columns." }),
    storage_location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Storage root URL for external table' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
    properties: SecurablePropertiesMapSchema.exactOptional(),
    view_definition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Definition text for view-like table types such as VIEW, MATERIALIZED_VIEW, STREAMING_TABLE, and METRIC_VIEW. The format depends on the table type (SQL for views, YAML for metric views).',
      }),
    view_dependencies: DependencyListSchema.exactOptional(),
  })
  .openapi({ required: ['name', 'catalog_name', 'schema_name', 'table_type', 'columns'] })
  .openapi('CreateTable')

const StagingTableInfoSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of table, relative to parent schema.' }),
    catalog_name: z.string().exactOptional().openapi({ description: 'Name of parent catalog.' }),
    schema_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of parent schema relative to its parent catalog.' }),
    id: z.string().exactOptional().openapi({ description: 'Unique identifier for the table.' }),
    staging_location: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI generated for the staging table' }),
  })
  .openapi({ required: [] })
  .openapi('StagingTableInfo')

const CreateStagingTableSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of table, relative to parent schema.' }),
    catalog_name: z.string().openapi({ description: 'Name of parent catalog.' }),
    schema_name: z
      .string()
      .openapi({ description: 'Name of parent schema relative to its parent catalog.' }),
  })
  .openapi({ required: ['name', 'catalog_name', 'schema_name'] })
  .openapi('CreateStagingTable')

const ListTablesResponseSchema = z
  .object({
    tables: z
      .array(TableInfoSchema)
      .exactOptional()
      .openapi({ description: 'An array of table information objects.' }),
    next_page_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque token to retrieve the next page of results. Absent if there are no more pages.\n__page_token__ should be set to this value for the next request (for the next page of results).\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListTablesResponse')

const SchemaInfoSchema = z
  .object({
    browse_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when the response contains only discovery metadata authorized by BROWSE.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of schema, relative to parent catalog.' }),
    catalog_name: z.string().exactOptional().openapi({ description: 'Name of parent catalog.' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
    properties: SecurablePropertiesMapSchema.exactOptional(),
    full_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Full name of schema, in form of __catalog_name__.__schema_name__.',
      }),
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of current owner of schema.' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time at which this schema was created, in epoch milliseconds.',
      }),
    created_by: z.string().exactOptional().openapi({ description: 'Username of schema creator.' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time at which this schema was last modified, in epoch milliseconds.',
      }),
    updated_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of user who last modified schema.' }),
    schema_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the schema.' }),
    storage_root: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Storage root URL for managed storage location of schema. This can be set when creating a\nschema. Example: s3://bucket/ucroot\n',
      }),
    storage_location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Storage Location URL (full path) for managed storage location of schema. This is an\nautomatically generated unique path under storage_root. If it is absent, managed\nsecurables under this schema will try to use storage_location of the parent catalog\ninstead. Example: s3://bucket/ucroot/__unitystorage/schemas/{schema_id}\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('SchemaInfo')

const CreateSchemaSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of schema, relative to parent catalog.' }),
    catalog_name: z.string().openapi({ description: 'Name of parent catalog.' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
    properties: SecurablePropertiesMapSchema.exactOptional(),
    storage_root: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Storage root URL for managed storage location of schema. If not set, managed securables\nunder this schema will try to use the storage_location of the parent catalog instead.\nExample: s3://bucket/ucroot\n',
      }),
  })
  .openapi({ required: ['name', 'catalog_name'] })
  .openapi('CreateSchema')

const UpdateSchemaSchema = z
  .object({
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of the new owner. The user must already exist.' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
    properties: SecurablePropertiesMapSchema.exactOptional(),
    new_name: z.string().exactOptional().openapi({ description: 'New name for the schema.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSchema')

const ListSchemasResponseSchema = z
  .object({
    schemas: z
      .array(SchemaInfoSchema)
      .exactOptional()
      .openapi({ description: 'An array of schema information objects.' }),
    next_page_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque token to retrieve the next page of results. Absent if there are no more pages.\n__page_token__ should be set to this value for the next request (for the next page of results).\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListSchemasResponse')

const CatalogInfoSchema = z
  .object({
    browse_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when the response contains only discovery metadata authorized by BROWSE.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of catalog.' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
    properties: SecurablePropertiesMapSchema.exactOptional(),
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of current owner of catalog.' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time at which this catalog was created, in epoch milliseconds.',
      }),
    created_by: z.string().exactOptional().openapi({ description: 'Username of catalog creator.' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time at which this catalog was last modified, in epoch milliseconds.',
      }),
    updated_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of user who last modified catalog.' }),
    id: z.string().exactOptional().openapi({ description: 'Unique identifier for the catalog.' }),
    storage_root: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Storage root URL for managed storage location of catalog. This can be set when creating\na catalog. Example: s3://bucket/ucroot\n',
      }),
    storage_location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Storage Location URL (full path) for managed storage location of catalog. This is an\nautomatically generated unique path under storage_root.\nExample: s3://bucket/ucroot/__unitystorage/catalogs/{catalog_id}\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('CatalogInfo')

const CreateCatalogSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of catalog.' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
    properties: SecurablePropertiesMapSchema.exactOptional(),
    storage_root: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Storage root URL for managed storage location of catalog. Example: s3://bucket/ucroot\n',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('CreateCatalog')

const UpdateCatalogSchema = z
  .object({
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of the new owner. The user must already exist.' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
    properties: SecurablePropertiesMapSchema.exactOptional(),
    new_name: z.string().exactOptional().openapi({ description: 'New name for the catalog.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateCatalog')

const ListCatalogsResponseSchema = z
  .object({
    catalogs: z
      .array(CatalogInfoSchema)
      .exactOptional()
      .openapi({ description: 'An array of catalog information objects.' }),
    next_page_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque token to retrieve the next page of results. Absent if there are no more pages.\n__page_token__ should be set to this value for the next request (for the next page of results).\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListCatalogsResponse')

const FunctionParameterTypeSchema = z
  .enum(['PARAM', 'COLUMN'])
  .openapi({ description: 'The type of function parameter.' })
  .openapi('FunctionParameterType')

const FunctionParameterModeSchema = z
  .literal('IN')
  .openapi({ description: 'The mode of the function parameter.' })
  .openapi('FunctionParameterMode')

const FunctionParameterInfoSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of parameter.' }),
    type_text: z.string().openapi({ description: 'Full data type spec, SQL/catalogString text.' }),
    type_json: z.string().openapi({ description: 'Full data type spec, JSON-serialized.' }),
    type_name: ColumnTypeNameSchema,
    type_precision: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Digits of precision; required on Create for DecimalTypes.' }),
    type_scale: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Digits to right of decimal; Required on Create for DecimalTypes.' }),
    type_interval_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Format of IntervalType.' }),
    position: z
      .int32()
      .openapi({ description: 'Ordinal position of column (starting at position 0).' }),
    parameter_mode: FunctionParameterModeSchema.exactOptional(),
    parameter_type: FunctionParameterTypeSchema.exactOptional(),
    parameter_default: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default value of the parameter.' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
  })
  .openapi({ required: ['name', 'type_text', 'type_name', 'type_json', 'position'] })
  .openapi('FunctionParameterInfo')

const FunctionParameterInfosSchema = z
  .object({
    parameters: z
      .array(FunctionParameterInfoSchema)
      .exactOptional()
      .openapi({
        description:
          "The array of __FunctionParameterInfo__ definitions of the function's parameters.",
      }),
  })
  .openapi({ required: [] })
  .openapi('FunctionParameterInfos')

const CreateFunctionSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of function, relative to parent schema.' }),
    catalog_name: z.string().openapi({ description: 'Name of parent catalog.' }),
    schema_name: z
      .string()
      .openapi({ description: 'Name of parent schema relative to its parent catalog.' }),
    input_params: FunctionParameterInfosSchema,
    data_type: ColumnTypeNameSchema,
    full_data_type: z.string().openapi({ description: 'Pretty printed function data type.' }),
    return_params: FunctionParameterInfosSchema.exactOptional(),
    routine_body: z
      .enum(['SQL', 'EXTERNAL'])
      .openapi({
        description:
          'Function language. When **EXTERNAL** is used, the language of the routine function should be specified in the __external_language__ field, \nand the __return_params__ of the function cannot be used (as **TABLE** return type is not supported),\nand the __sql_data_access__ field must be **NO_SQL**.\n',
      }),
    routine_definition: z.string().openapi({ description: 'Function body.' }),
    routine_dependencies: DependencyListSchema.exactOptional(),
    parameter_style: z
      .literal('S')
      .openapi({ description: 'Function parameter style. **S** is the value for SQL.' }),
    is_deterministic: z
      .boolean()
      .openapi({ description: 'Whether the function is deterministic.' }),
    sql_data_access: z
      .enum(['CONTAINS_SQL', 'READS_SQL_DATA', 'NO_SQL'])
      .openapi({ description: 'Function SQL data access.' }),
    is_null_call: z.boolean().openapi({ description: 'Function null call.' }),
    security_type: z.literal('DEFINER').openapi({ description: 'Function security type.' }),
    specific_name: z
      .string()
      .openapi({ description: 'Specific name of the function; Reserved for future use.' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
    properties: z
      .string()
      .exactOptional()
      .openapi({
        description: 'JSON-serialized key-value pair map, encoded (escaped) as a string.',
      }),
    external_language: z
      .string()
      .exactOptional()
      .openapi({ description: 'External language of the function.' }),
  })
  .openapi({
    required: [
      'name',
      'catalog_name',
      'schema_name',
      'input_params',
      'data_type',
      'full_data_type',
      'routine_body',
      'routine_definition',
      'parameter_style',
      'is_deterministic',
      'sql_data_access',
      'is_null_call',
      'security_type',
      'specific_name',
    ],
  })
  .openapi('CreateFunction')

const CreateFunctionRequestSchema = z
  .object({ function_info: CreateFunctionSchema })
  .openapi({ required: ['function_info'] })
  .openapi('CreateFunctionRequest')

const UpdateFunctionSchema = z
  .object({
    owner: z
      .string()
      .openapi({
        description:
          'Username of the new owner. Only a metastore admin can transfer a function to another user.',
      }),
  })
  .openapi({ required: ['owner'] })
  .openapi('UpdateFunction')

const UpdateTableSchema = z
  .object({
    owner: z
      .string()
      .openapi({
        description:
          'Username of the new owner. Only a metastore admin can transfer a view to another user.',
      }),
  })
  .openapi({ required: ['owner'] })
  .openapi('UpdateTable')

const FunctionInfoSchema = z
  .object({
    browse_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when the response contains only discovery metadata authorized by BROWSE.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of function, relative to parent schema.' }),
    catalog_name: z.string().exactOptional().openapi({ description: 'Name of parent catalog.' }),
    schema_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of parent schema relative to its parent catalog.' }),
    input_params: FunctionParameterInfosSchema.exactOptional(),
    data_type: ColumnTypeNameSchema.exactOptional(),
    full_data_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pretty printed function data type.' }),
    return_params: FunctionParameterInfosSchema.exactOptional(),
    routine_body: z
      .enum(['SQL', 'EXTERNAL'])
      .exactOptional()
      .openapi({
        description:
          'Function language. When **EXTERNAL** is used, the language of the routine function should be specified in the __external_language__ field, \nand the __return_params__ of the function cannot be used (as **TABLE** return type is not supported),\nand the __sql_data_access__ field must be **NO_SQL**.\n',
      }),
    routine_definition: z.string().exactOptional().openapi({ description: 'Function body.' }),
    routine_dependencies: DependencyListSchema.exactOptional(),
    parameter_style: z
      .literal('S')
      .exactOptional()
      .openapi({ description: 'Function parameter style. **S** is the value for SQL.' }),
    is_deterministic: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the function is deterministic.' }),
    sql_data_access: z
      .enum(['CONTAINS_SQL', 'READS_SQL_DATA', 'NO_SQL'])
      .exactOptional()
      .openapi({ description: 'Function SQL data access.' }),
    is_null_call: z.boolean().exactOptional().openapi({ description: 'Function null call.' }),
    security_type: z
      .literal('DEFINER')
      .exactOptional()
      .openapi({ description: 'Function security type.' }),
    specific_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specific name of the function; Reserved for future use.' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
    properties: z
      .string()
      .exactOptional()
      .openapi({
        description: 'JSON-serialized key-value pair map, encoded (escaped) as a string.',
      }),
    full_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full name of function, in form of __catalog_name__.__schema_name__.__function__name__',
      }),
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of current owner of function.' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time at which this function was created, in epoch milliseconds.',
      }),
    created_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of function creator.' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time at which this function was last updated, in epoch milliseconds.',
      }),
    updated_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of user who last modified function.' }),
    function_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of Function, relative to parent schema.' }),
    external_language: z
      .string()
      .exactOptional()
      .openapi({ description: 'External language of the function.' }),
  })
  .openapi({ required: [] })
  .openapi('FunctionInfo')

const ListFunctionsResponseSchema = z
  .object({
    functions: z
      .array(FunctionInfoSchema)
      .exactOptional()
      .openapi({ description: 'An array of function information objects.' }),
    next_page_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque token to retrieve the next page of results. Absent if there are no more pages.\n__page_token__ should be set to this value for the next request (for the next page of results).\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListFunctionsResponse')

const ModelVersionOperationSchema = z
  .enum(['UNKNOWN_MODEL_VERSION_OPERATION', 'READ_MODEL_VERSION', 'READ_WRITE_MODEL_VERSION'])
  .openapi('ModelVersionOperation')

const GenerateTemporaryModelVersionCredentialSchema = z
  .object({
    catalog_name: z
      .string()
      .openapi({
        description:
          'Catalog name for which temporary credentials are generated. \nCan be obtained from models/{full_name} (get model info) API.\n',
      }),
    schema_name: z
      .string()
      .openapi({
        description:
          'Schema name for which temporary credentials are generated. \nCan be obtained from models/{full_name} (get model info) API.\n',
      }),
    model_name: z
      .string()
      .openapi({
        description:
          'Model name for which temporary credentials are generated. \nCan be obtained from models/{full_name} (get model info) API.\n',
      }),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Model version for which temporary credentials are generated.\n',
      }),
    operation: ModelVersionOperationSchema,
  })
  .openapi({
    example: {
      catalog_name: 'catalog_name',
      schema_name: 'schema_name',
      model_name: 'model_name',
      version: 'version',
      operation: null,
    },
    required: ['catalog_name', 'schema_name', 'model_name', 'version', 'operation'],
  })
  .openapi('GenerateTemporaryModelVersionCredential')

const TableOperationSchema = z
  .enum(['UNKNOWN_TABLE_OPERATION', 'READ', 'READ_WRITE'])
  .openapi('TableOperation')

const GenerateTemporaryTableCredentialSchema = z
  .object({
    table_id: z
      .string()
      .openapi({
        description:
          'Table id for which temporary credentials are generated. \nCan be obtained from tables/{full_name} (get table info) API.\n',
      }),
    operation: TableOperationSchema,
  })
  .openapi({
    example: { table_id: 'table_id', operation: null },
    required: ['table_id', 'operation'],
  })
  .openapi('GenerateTemporaryTableCredential')

const AwsCredentialsSchema = z
  .object({
    access_key_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The access key ID that identifies the temporary credentials.' }),
    secret_access_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The secret access key that can be used to sign AWS API requests.' }),
    session_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The token that users must pass to AWS API to use the temporary credentials.',
      }),
    s3_endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'EXPERIMENTAL. The S3 API endpoint to send requests for the path to, set when the path is on S3-compatible storage. It is the `s3_endpoint` of the storage credential of the external location covering the path. Requests to it always use path-style addressing. Absent for AWS S3. When that credential does not vend keys, this and `s3_region` are the only fields set. A client that does not support this field must not use the credentials, and must not send their requests to AWS S3.',
      }),
    s3_region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "EXPERIMENTAL. The region to sign S3 requests with, set together with `s3_endpoint`. Unity Catalog asks the storage for the bucket's region, and uses `us-east-1` if it does not say.",
      }),
  })
  .openapi({ required: [] })
  .openapi('AwsCredentials')

const AzureUserDelegationSASSchema = z
  .object({ sas_token: z.string().exactOptional().openapi({ description: 'Azure SAS Token' }) })
  .openapi({ required: [] })
  .openapi('AzureUserDelegationSAS')

const GcpOauthTokenSchema = z
  .object({ oauth_token: z.string().exactOptional().openapi({ description: 'Gcp Token' }) })
  .openapi({ required: [] })
  .openapi('GcpOauthToken')

const VolumeOperationSchema = z
  .enum(['UNKNOWN_VOLUME_OPERATION', 'READ_VOLUME', 'WRITE_VOLUME'])
  .openapi('VolumeOperation')

const GenerateTemporaryVolumeCredentialSchema = z
  .object({
    volume_id: z
      .string()
      .openapi({
        description:
          'Volume id for which temporary credentials are generated. \nCan be obtained from volumes/{full_name} (get volume info) API.\n',
      }),
    operation: VolumeOperationSchema,
  })
  .openapi({ required: ['volume_id', 'operation'] })
  .openapi('GenerateTemporaryVolumeCredential')

const RegisteredModelInfoSchema = z
  .object({
    browse_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when the response contains only discovery metadata authorized by BROWSE.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the registered model' }),
    catalog_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the catalog where the schema and the registered model reside',
      }),
    schema_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the schema where the registered model resides' }),
    storage_location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The storage location on the cloud under which model version data files are stored',
      }),
    full_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The three-level (fully qualified) name of the registered model' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'The comment attached to the registered model' }),
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of the user who owns the registered model' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Creation timestamp of the registered model in milliseconds since the Unix epoch',
      }),
    created_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of the user who created the registered model' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Last-update timestamp of the registered model in milliseconds since the Unix epoch',
      }),
    updated_by: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier of the user who updated the registered model last time',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the registered model.' }),
  })
  .openapi({ required: [] })
  .openapi('RegisteredModelInfo')

const ModelVersionStatusSchema = z
  .enum(['MODEL_VERSION_STATUS_UNKNOWN', 'PENDING_REGISTRATION', 'FAILED_REGISTRATION', 'READY'])
  .openapi({
    description: 'All possible model version statuses.',
    'x-enum-descriptions': [
      'MODEL_VERSION_STATUS_UNKNOWN: Unknown',
      'PENDING_REGISTRATION: Indicates that the client has not completely written all model artifacts to external storage.',
      'FAILED_REGISTRATION: Indicates that the client has failed to write all model artifacts to external storage.',
      'READY: Indicates that the client has successfully written all model artifacts to external storage.',
    ],
  })
  .openapi('ModelVersionStatus')

const ModelVersionInfoSchema = z
  .object({
    model_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the parent registered model of the model version, relative to parent schema',
      }),
    catalog_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the catalog containing the model version' }),
    schema_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the schema containing the model version, relative to parent catalog',
      }),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Integer model version number, used to reference the model version in API requests.',
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI indicating the location of the source artifacts (files) for the model version',
      }),
    run_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The run id used by the ML package that generated the model.' }),
    status: ModelVersionStatusSchema.exactOptional(),
    storage_location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The storage location on the cloud under which model version data files are stored',
      }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'The comment attached to the model version' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time at which this model version was created, in epoch milliseconds.',
      }),
    created_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of the user who created the model version' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time at which this model version was last modified, in epoch milliseconds.',
      }),
    updated_by: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier of the user who updated the model version last time',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the model version.' }),
  })
  .openapi({ required: [] })
  .openapi('ModelVersionInfo')

const CreateRegisteredModelSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of model, relative to parent schema.' }),
    catalog_name: z.string().openapi({ description: 'Name of parent catalog.' }),
    schema_name: z
      .string()
      .openapi({ description: 'Name of parent schema relative to its parent catalog.' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
  })
  .openapi({ required: ['name', 'catalog_name', 'schema_name'] })
  .openapi('CreateRegisteredModel')

const UpdateRegisteredModelSchema = z
  .object({
    owner: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Username of the new owner. Only a metastore admin can transfer a model to another user.',
      }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
    new_name: z.string().exactOptional().openapi({ description: 'New name for the model.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateRegisteredModel')

const ListRegisteredModelsResponseSchema = z
  .object({
    registered_models: z
      .array(RegisteredModelInfoSchema)
      .exactOptional()
      .openapi({ description: 'An array of model information objects.' }),
    next_page_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque token to retrieve the next page of results. Absent if there are no more pages.\n__page_token__ should be set to this value for the next request (for the next page of results).\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListRegisteredModelsResponse')

const CreateModelVersionSchema = z
  .object({
    model_name: z
      .string()
      .openapi({ description: 'Name of registered model, relative to parent schema.' }),
    catalog_name: z.string().openapi({ description: 'Name of parent catalog.' }),
    schema_name: z
      .string()
      .openapi({ description: 'Name of parent schema relative to its parent catalog.' }),
    source: z
      .string()
      .openapi({ description: 'URI indicating the location of the source model artifacts.' }),
    run_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The run id used by the ML package that generated the model.' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
  })
  .openapi({ required: ['model_name', 'catalog_name', 'schema_name', 'source'] })
  .openapi('CreateModelVersion')

const UpdateModelVersionSchema = z
  .object({
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateModelVersion')

const ListModelVersionsResponseSchema = z
  .object({
    model_versions: z
      .array(ModelVersionInfoSchema)
      .exactOptional()
      .openapi({ description: 'An array of model version information objects.' }),
    next_page_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque token to retrieve the next page of results. Absent if there are no more pages.\n__page_token__ should be set to this value for the next request (for the next page of results).\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListModelVersionsResponse')

const FinalizeModelVersionSchema = z
  .object({
    full_name: z
      .string()
      .openapi({ description: 'The full name of the registered model to finalize.' }),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Version number of the version to finalize.',
      }),
  })
  .openapi({ required: ['full_name', 'version'] })
  .openapi('FinalizeModelVersion')

const PathOperationSchema = z
  .enum(['UNKNOWN_PATH_OPERATION', 'PATH_READ', 'PATH_READ_WRITE', 'PATH_CREATE_TABLE'])
  .openapi('PathOperation')

const GenerateTemporaryPathCredentialSchema = z
  .object({
    url: z
      .string()
      .openapi({
        description:
          'The URL of the storage path for which temporary credentials need to be generated.',
      }),
    operation: PathOperationSchema,
  })
  .openapi({ required: ['url', 'operation'] })
  .openapi('GenerateTemporaryPathCredential')

const TemporaryCredentialsSchema = z
  .object({
    aws_temp_credentials: AwsCredentialsSchema.exactOptional(),
    azure_user_delegation_sas: AzureUserDelegationSASSchema.exactOptional(),
    gcp_oauth_token: GcpOauthTokenSchema.exactOptional(),
    expiration_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Server time when the credential will expire, in epoch milliseconds.\nThe API client is advised to cache the credential given this expiration time.\nEXPERIMENTAL: for S3-compatible storage without `assume_role`, it is a refetch time an\nhour ahead, not when the keys expire: a vended key pair stays valid until the storage\nrotates or revokes it, and a vend without keys has none to expire. A running client\nneed not fetch again then; the UC Hadoop connector picks up a changed endpoint on its\nfirst table load after this time.\n',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The normalized URL of the storage path the temporary credential was generated for.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TemporaryCredentials')

const PrincipalTypeSchema = z
  .enum(['USER', 'GROUP'])
  .openapi({ description: 'The type of the principal.' })
  .openapi('PrincipalType')

const SecurableTypeSchema = z
  .enum([
    'metastore',
    'catalog',
    'schema',
    'table',
    'function',
    'volume',
    'registered_model',
    'external_location',
    'credential',
  ])
  .openapi({ description: 'The type of the resource.' })
  .openapi('SecurableType')

const PrivilegeSchema = z
  .enum([
    'CREATE CATALOG',
    'USE CATALOG',
    'CREATE SCHEMA',
    'USE SCHEMA',
    'CREATE TABLE',
    'SELECT',
    'MODIFY',
    'CREATE FUNCTION',
    'EXECUTE',
    'CREATE VOLUME',
    'READ VOLUME',
    'CREATE MODEL',
    'CREATE EXTERNAL LOCATION',
    'READ FILES',
    'WRITE FILES',
    'CREATE EXTERNAL TABLE',
    'CREATE EXTERNAL VOLUME',
    'CREATE MANAGED STORAGE',
    'CREATE STORAGE CREDENTIAL',
    'BROWSE',
    'MANAGE',
    'WRITE VOLUME',
    'CREATE MODEL VERSION',
    'READ METADATA',
  ])
  .openapi({
    description: 'The privilege to grant.',
    'x-enum-descriptions': [
      'CREATE CATALOG: Enables users to create new catalogs in a metastore.',
      'USE CATALOG: Required to interact with any object within a catalog.',
      'CREATE SCHEMA: Enables users to create new schemas in a catalog.',
      'USE SCHEMA: Required to interact with any object within a schema.',
      'CREATE TABLE: Allows creating tables or views in a schema.',
      'SELECT: Enables querying tables, views, materialized views.',
      'MODIFY: Enables adding, updating, and deleting data within tables (requires SELECT privilege also).',
      'CREATE FUNCTION: Allows users to create functions or procedures within a schema.',
      'EXECUTE: Permits invoking user-defined functions or loading models for inference.',
      'CREATE VOLUME: Enables creating volumes in a schema.',
      'READ VOLUME: Permits reading files and directories within volumes.',
      'CREATE MODEL: Permits establishing MLflow registered models in a schema.',
      'CREATE EXTERNAL LOCATION: Required privilege on both the metastore and referenced storage credential to create external locations.',
      'READ FILES: Grants direct read access to files in cloud storage configured as external locations.',
      'WRITE FILES: Grants direct write access to files in cloud storage configured as external locations.',
      'CREATE EXTERNAL TABLE: Enables creating external tables through external locations.',
      'CREATE EXTERNAL VOLUME: Enables creating external volumes through external locations.',
      'CREATE MANAGED STORAGE: Allows designating managed storage locations at catalog or schema levels.',
      'CREATE STORAGE CREDENTIAL: Required privilege on the metastore to create storage credentials.',
      'BROWSE: Allows discovery of metadata for a catalog and its descendants, or an external location, without usage grants. Does not permit data access.',
      'MANAGE: Allows full metadata and grant inspection, grant changes, supported metadata changes, and deletion. Managers can grant themselves other privileges, including data access. Data access, execution, and object creation still require their own privileges.',
      'WRITE VOLUME: Permits creating, changing, and deleting files in volumes; also requires READ VOLUME and parent usage privileges.',
      'CREATE MODEL VERSION: Allows publishing versions of registered models with USE CATALOG and USE SCHEMA.',
      'READ METADATA: Permits reading full metadata and grants without data access or permission changes.',
    ],
  })
  .openapi('Privilege')

const PermissionsChangeSchema = z
  .object({
    principal: z
      .string()
      .openapi({ description: 'The principal whose privileges we are changing.' }),
    add: z.array(PrivilegeSchema).openapi({ description: 'The set of privileges to add.' }),
    remove: z.array(PrivilegeSchema).openapi({ description: 'The set of privileges to remove.' }),
  })
  .openapi({ required: ['principal', 'add', 'remove'] })
  .openapi('PermissionsChange')

const UpdatePermissionsSchema = z
  .object({
    changes: z
      .array(PermissionsChangeSchema)
      .openapi({ description: 'Array of permissions change objects.' }),
  })
  .openapi({ required: ['changes'] })
  .openapi('UpdatePermissions')

const PrivilegeAssignmentSchema = z
  .object({
    principal: z
      .string()
      .openapi({ description: 'The principal (user email address or group name).' }),
    privileges: z
      .array(PrivilegeSchema)
      .openapi({ description: 'The privileges assigned to the principal.' }),
  })
  .openapi({ required: ['principal', 'privileges'] })
  .openapi('PrivilegeAssignment')

const PermissionsListSchema = z
  .object({
    privilege_assignments: z
      .array(PrivilegeAssignmentSchema)
      .openapi({ description: 'The privileges assigned to each principal.' }),
  })
  .openapi({ required: ['privilege_assignments'] })
  .openapi('PermissionsList')

const GetMetastoreSummaryResponseSchema = z
  .object({
    metastore_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the metastore.' }),
  })
  .openapi({ required: [] })
  .openapi('GetMetastoreSummaryResponse')

const AwsIamRoleArnSchema = z
  .string()
  .openapi({
    description:
      'The Amazon Resource Name (ARN) of the AWS IAM role used to vend temporary credentials.',
  })
  .openapi('AwsIamRoleArn')

const AwsIamRoleResponseSchema = z
  .object({
    role_arn: AwsIamRoleArnSchema,
    unity_catalog_iam_arn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Amazon Resource Name (ARN) of the AWS IAM used by the Unity Catalog Server. This is the identity that is going to assume the AWS IAM role.',
      }),
    external_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The external ID used in role assumption to prevent confused deputy problem.',
      }),
  })
  .openapi({ required: ['role_arn'] })
  .openapi('AwsIamRoleResponse')

const S3CompatibleS3EndpointSchema = z
  .string()
  .openapi({
    description:
      'EXPERIMENTAL. S3 API endpoint of the S3-compatible storage, for example\n`https://minio.example.com:9000`: an http or https URL with a host, and without user info, a\nquery or a fragment; other values fail with `INVALID_ARGUMENT`. Credential vending returns\nit with the region engines need to reach the storage; requests to it use path-style\naddressing.\n',
  })
  .openapi('S3CompatibleS3Endpoint')

const S3AssumeRoleSchema = z
  .object({
    sts_endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "EXPERIMENTAL. STS endpoint of the storage to call AssumeRole on, for example\n`https://minio.example.com:9000`: an http or https URL with a host, and without user\ninfo, a query or a fragment; other values fail with `INVALID_ARGUMENT`. Absent when not\nset: AssumeRole then goes to the credential's `s3_endpoint`, so a change of\n`s3_endpoint` moves it too.\n",
      }),
    role_arn: z.string().openapi({ description: 'EXPERIMENTAL. The role to assume.' }),
    sts_region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "EXPERIMENTAL. The region to sign the AssumeRole request with, of letters, digits, '.',\n'_' and '-'. If not set, the region of the S3-compatible storage holding the requested\npath is used.\n",
      }),
  })
  .openapi({
    description:
      "EXPERIMENTAL. AssumeRole on the STS of S3-compatible storage, signed with the credential's\nkey pair; see `S3CompatibleRequest`.\n",
    required: ['role_arn'],
  })
  .openapi('S3AssumeRole')

const S3CompatibleResponseSchema = z
  .object({
    s3_endpoint: S3CompatibleS3EndpointSchema,
    access_key_id: z.string().openapi({ description: 'EXPERIMENTAL. The access key ID.' }),
    assume_role: S3AssumeRoleSchema.exactOptional(),
  })
  .openapi({
    description:
      'EXPERIMENTAL. An `s3_compatible` storage credential as returned, without its write-only\n`secret_access_key`; see `S3CompatibleRequest`.\n',
    required: ['access_key_id', 's3_endpoint'],
  })
  .openapi('S3CompatibleResponse')

const CredentialPurposeSchema = z.literal('STORAGE').openapi('CredentialPurpose')

const CredentialInfoSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The credential name. The name must be unique within the metastore.',
      }),
    aws_iam_role: AwsIamRoleResponseSchema.exactOptional(),
    s3_compatible: S3CompatibleResponseSchema.exactOptional(),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Comment associated with the credential.' }),
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of current owner of credential.' }),
    full_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full name of the credential.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the credential.' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time at which this Credential was created, in epoch milliseconds.',
      }),
    created_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of credential creator.' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time at which this credential was last modified, in epoch milliseconds.',
      }),
    updated_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of user who last modified the credential.' }),
    purpose: CredentialPurposeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CredentialInfo')

const AwsIamRoleRequestSchema = z
  .object({ role_arn: AwsIamRoleArnSchema })
  .openapi({ required: ['role_arn'] })
  .openapi('AwsIamRoleRequest')

const S3CompatibleRequestSchema = z
  .object({
    s3_endpoint: S3CompatibleS3EndpointSchema,
    access_key_id: z.string().openapi({ description: 'EXPERIMENTAL. The access key ID.' }),
    secret_access_key: z
      .string()
      .openapi({ description: 'EXPERIMENTAL. The secret access key. Write-only; never returned.' }),
    assume_role: S3AssumeRoleSchema.exactOptional(),
  })
  .openapi({
    description:
      "EXPERIMENTAL. Available only when the server property `server.s3-compatible-storage.enabled`\nis `true`; otherwise a create or update request that sets one, and vending for paths under\none, fail with `INVALID_ARGUMENT`. Access key pair of S3-compatible storage, and the\nstorage's S3 endpoint. With `assume_role`, the key pair signs AssumeRole on the storage's\nSTS, and Unity Catalog vends the resulting short-lived credentials scoped to the requested\npath and privilege. Without `assume_role`, the key pair is the only identity, and the\nserver property `server.s3-compatible-storage.static-key-vending` decides what clients\nreceive:\n * `endpoint-only` (default): the S3 endpoint and region, but no keys. The server uses the\n   key pair for its own storage access; engines bring their own keys. Its\n   `expiration_time`, an hour ahead, tells engines when they may fetch again, to pick up a\n   changed endpoint; one that does not, such as the UC Hadoop connector, picks it up on\n   its first table load after that time.\n * `static-key`: the key pair itself. Its `expiration_time`, an hour ahead, only\n   tells engines when to fetch credentials again, so that they pick up an updated key pair:\n   the key pair stays valid until the storage rotates or revokes it, and changing Unity\n   Catalog permissions does not revoke a key pair already vended. The storage applies the\n   key pair's own permissions rather than the requested path and privilege. The Iceberg REST\n   table config carries no expiration, so Iceberg clients keep the key pair until they\n   load the table again.\nPaths stay `s3://<bucket>/<path>` everywhere: a path reaches the storage of the credential\nof the external location covering it. External locations cannot overlap, so each path has\none storage, and one bucket name can be on several storage systems under different\nlocations. An update replaces the whole object (see `updateCredential`); changing the\nendpoint moves every path under the credential's locations, for example to the storage's new\nhost name.\n",
    required: ['access_key_id', 'secret_access_key', 's3_endpoint'],
  })
  .openapi('S3CompatibleRequest')

const CreateCredentialRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description: 'The credential name. The name must be unique within the metastore.',
      }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Comment associated with the credential.' }),
    aws_iam_role: AwsIamRoleRequestSchema.exactOptional(),
    s3_compatible: S3CompatibleRequestSchema.exactOptional(),
    purpose: CredentialPurposeSchema.exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('CreateCredentialRequest')

const UpdateCredentialRequestSchema = z
  .object({
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Comment associated with the credential.' }),
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of the new owner. The user must already exist.' }),
    aws_iam_role: AwsIamRoleRequestSchema.exactOptional(),
    s3_compatible: S3CompatibleRequestSchema.exactOptional(),
    new_name: z.string().exactOptional().openapi({ description: 'New name for the credential.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateCredentialRequest')

const ListCredentialsResponseSchema = z
  .object({
    credentials: z
      .array(CredentialInfoSchema)
      .exactOptional()
      .openapi({ description: 'An array of credential information objects.' }),
    next_page_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque token to retrieve the next page of results. Absent if there are no more pages.\n__page_token__ should be set to this value for the next request (for the next page of results).\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListCredentialsResponse')

const ExternalLocationInfoSchema = z
  .object({
    browse_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when the response contains only discovery metadata authorized by BROWSE.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the external location.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the external location.' }),
    url: z.string().exactOptional().openapi({ description: 'Path URL of the external location.' }),
    credential_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the storage credential used with this location. Omitted when the credential no longer exists, for example after it was force-deleted. Updating the external location with a new credential_name repairs it.',
      }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'The owner of the external location.' }),
    credential_id: z
      .string()
      .exactOptional()
      .openapi({ description: "Unique ID of the location's storage credential." }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time at which this external location was created, in epoch milliseconds.',
      }),
    created_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of external location creator.' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Time at which external location this was last modified, in epoch milliseconds.',
      }),
    updated_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of user who last modified the external location.' }),
  })
  .openapi({ required: [] })
  .openapi('ExternalLocationInfo')

const CreateExternalLocationSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the external location.' }),
    url: z.string().openapi({ description: 'Path URL of the external location.' }),
    credential_name: z
      .string()
      .openapi({ description: 'Name of the storage credential used with this location.' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
  })
  .openapi({ required: ['name', 'url', 'credential_name'] })
  .openapi('CreateExternalLocation')

const UpdateExternalLocationSchema = z
  .object({
    url: z.string().exactOptional().openapi({ description: 'Path URL of the external location.' }),
    credential_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the storage credential used with this location. Setting it on an external location whose credential was force-deleted repairs the location.',
      }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided free-form text description.' }),
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of the new owner. The user must already exist.' }),
    new_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'New name for the external location.' }),
    force: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Force the url change even if the external location is in use.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateExternalLocation')

const ListExternalLocationsResponseSchema = z
  .object({
    external_locations: z
      .array(ExternalLocationInfoSchema)
      .exactOptional()
      .openapi({ description: 'An array of external locations.' }),
    next_page_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque token to retrieve the next page of results. Absent if there are no more pages. __page_token__ should be set to this value for the next request (for the next page of results).',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListExternalLocationsResponse')

const DeltaCommitInfoSchema = z
  .object({
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'The version of this commit.' }),
    timestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The timestamp for when the commit was made. This is the in-commit timestamp as produced by the Delta client writing to the table.',
      }),
    file_name: z.string().openapi({ description: 'The filename of the UUID-based commit file.' }),
    file_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The size of the commit file in bytes.',
      }),
    file_modification_timestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The modification time of the commit file. This is the mod time of the file as written to the file system.',
      }),
  })
  .openapi({
    description: 'Represents a Delta commit version.',
    required: ['version', 'timestamp', 'file_name', 'file_size', 'file_modification_timestamp'],
  })
  .openapi('DeltaCommitInfo')

const ColumnInfosSchema = z
  .object({
    columns: z
      .array(ColumnInfoSchema)
      .max(32768)
      .exactOptional()
      .openapi({ description: 'The array of column descriptions.' }),
  })
  .openapi({ description: 'The schema of the table.', required: [] })
  .openapi('ColumnInfos')

const DeltaCommitMetadataPropertiesSchema = z
  .object({ properties: SecurablePropertiesMapSchema.exactOptional() })
  .openapi({
    description: 'The properties of the Delta table. Updated by UC if set.',
    required: [],
  })
  .openapi('DeltaCommitMetadataProperties')

const DeltaMetadataSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'The table comment.' }),
    schema: ColumnInfosSchema.exactOptional(),
    properties: DeltaCommitMetadataPropertiesSchema.exactOptional(),
  })
  .openapi({
    description:
      'Represents a Delta metadata action (see https://github.com/delta-io/delta/blob/master/PROTOCOL.md#change-metadata for more information).',
    required: [],
  })
  .openapi('DeltaMetadata')

const DeltaUniformIcebergSchema = z
  .object({
    metadata_location: z
      .url()
      .openapi({
        description:
          'The latest Iceberg metadata location.\nExample: s3://abc/def/metadata/v1.json\n',
      }),
    converted_delta_version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The Delta version that was converted to Iceberg to produce the Iceberg metadata location.\nIt should match the Delta version in the commit info.\nExample: 1044\n',
      }),
    converted_delta_timestamp: z
      .string()
      .openapi({
        description:
          'The timestamp that Delta finished conversion to produce the Iceberg metadata location.\nThe string must represent a valid instant in UTC with ISO 8601 format.\nExample: 2025-01-04T03:13:11.423Z\n',
      }),
    base_converted_delta_version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Optional Delta version used to incrementally convert Delta changes to Iceberg changes to\nproduce the latest Iceberg metadata at the metadata_location.\nExample: 1042\n',
      }),
  })
  .openapi({
    description:
      'Iceberg conversion metadata tracking the Delta-to-Iceberg conversion state.\nIt contains the metadata location pointer, converted Delta version, timestamp, and \noptional base converted Delta version of the corresponding conversion.\n',
    required: ['metadata_location', 'converted_delta_version', 'converted_delta_timestamp'],
  })
  .openapi('DeltaUniformIceberg')

const DeltaUniformSchema = z
  .object({
    iceberg: DeltaUniformIcebergSchema.openapi({
      description: 'Metadata for Delta UniForm Iceberg conversion.',
    }),
  })
  .openapi({
    description:
      "Uniform metadata that can be atomically committed alongside a Delta commit.\nUniform enables Delta tables to be read by other table formats (e.g. Iceberg)\nwithout data conversion. When this message is provided in a Commit request,\nUC will atomically update the table's format-specific metadata during the commit.\n",
    required: ['iceberg'],
  })
  .openapi('DeltaUniform')

const DeltaCommitSchema = z
  .object({
    table_id: z
      .string()
      .openapi({
        description: 'The ID of the table to commit to. This ID uniquely identifies a table.',
      }),
    table_uri: z
      .string()
      .openapi({
        description:
          'The URI of the storage location of the table. If the table_id exists but the table_uri is \ndifferent from the one previously registered (e.g., if the client moved the table), the request will fail.\nExample: s3://bucket-name/tables/some-table-id\n',
      }),
    commit_info: DeltaCommitInfoSchema.exactOptional(),
    latest_backfilled_version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The highest version of the commits that have been backfilled for this table; meaning UC no longer \nneeds to keep track of commits of versions <= this version.\n',
      }),
    metadata: DeltaMetadataSchema.exactOptional(),
    uniform: DeltaUniformSchema.exactOptional().openapi({
      description:
        "Optional UniForm metadata to be committed alongside this Delta commit. Whether this field is\nstrictly required by a UC API compatible implementation is left up to the implementation.\nIt is set by UniForm conversion processes after converting a Delta commit. When set, \nUC will atomically update the table's format-specific metadata (e.g. DeltaUniformIceberg),\nkeeping the conversion state synchronized with the Delta version.\nUniform enables Delta tables to be read by other table formats (e.g., Iceberg) without data conversion.\nIndependent of the `metadata` field, both can be provided together or separately.\n",
    }),
  })
  .openapi({
    description:
      'Request body for committing changes to a specified Delta table. At least one of commit_info and latest_backfilled_version must be present.',
    required: ['table_id', 'table_uri'],
  })
  .openapi('DeltaCommit')

const DeltaCommitResponseSchema = z
  .looseObject({})
  .openapi({ description: 'The response for the Delta commit action' })
  .openapi('DeltaCommitResponse')

const DeltaGetCommitsSchema = z
  .object({
    table_id: z
      .string()
      .openapi({
        description:
          'The ID of the table to get the commits for. This ID uniquely identifies a table.',
      }),
    table_uri: z
      .string()
      .openapi({
        description:
          'The URI of the storage location of the table. If the table_id exists but the table_uri is \ndifferent from the one previously registered (e.g., if the client moved the table), the request will fail.\nExample: s3://bucket-name/tables/some-table-id\n',
      }),
    start_version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The start version from which to retrieve commits (inclusive). This along with the\noptional end_version specifies the range of commit versions that this request wants.\n',
      }),
    end_version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The end version upto which to retrieve commits (inclusive).\nIf not set, the latest version will be used as the end version. This does not affect the\nlatest_table_version in the response.\nIf num of commits that meet this criteria is larger than a limit set by server config,\nthe response will be limited to the first X commits. Call can send request again with a\nlarger start_version according to the response to get the remaining commits.\n',
      }),
  })
  .openapi({ required: ['table_id', 'table_uri', 'start_version'] })
  .openapi('DeltaGetCommits')

const DeltaGetCommitsResponseSchema = z
  .object({
    commits: z
      .array(DeltaCommitInfoSchema)
      .openapi({
        description: 'The list of unbackfilled Delta table commits. Can be in arbitrary order.',
      }),
    latest_table_version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "Represents the latest version of the table tracked by UC. For a newly created managed table\nwith no commits, this returns 0. Use this field to manage pagination —\nif the returned commits don't cover the range up to latest_table_version or end_version (whichever is smaller),\nit indicates that more unbackfilled commits may be available.\n",
      }),
  })
  .openapi({ required: ['commits', 'latest_table_version'] })
  .openapi('DeltaGetCommitsResponse')

const IncludeBrowseParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      name: 'include_browse',
      in: 'query',
      description:
        'Include discovery metadata for objects visible through BROWSE when ordinary access fails.\nSuch objects have browse_only=true. Ordinary access returns full metadata.\n',
      required: false,
      schema: { type: 'boolean', default: false },
    },
  })

export const getCatalogsRoute = createRoute({
  method: 'get',
  path: '/catalogs',
  tags: ['Catalogs'],
  summary: 'List catalogs',
  description:
    'Lists the available catalogs. There is no guarantee of a specific ordering of the elements in the list.\n',
  operationId: 'listCatalogs',
  request: {
    query: z.object({
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page_token',
            in: 'query',
            description: 'Opaque pagination token to go to next page based on previous query.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            description:
              'Maximum number of catalogs to return.\n- when set to a value greater than 0, the page length is the minimum of this value and a server configured value;\n- when set to 0, the page length is set to a server configured value;\n- when set to a value less than 0, an invalid parameter error is returned;\n',
            schema: { type: 'integer', format: 'int32', maximum: 1000 },
            required: false,
          },
        }),
      include_browse: IncludeBrowseParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The catalog list was successfully retrieved.',
      content: { 'application/json': { schema: ListCatalogsResponseSchema } },
    },
  },
})

export const postCatalogsRoute = createRoute({
  method: 'post',
  path: '/catalogs',
  tags: ['Catalogs'],
  summary: 'Create a catalog',
  description: 'Creates a new catalog instance.\n',
  operationId: 'createCatalog',
  request: { body: { content: { 'application/json': { schema: CreateCatalogSchema } } } },
  responses: {
    200: {
      description: 'The new catalog was successfully created.',
      content: { 'application/json': { schema: CatalogInfoSchema } },
    },
  },
})

export const getCatalogsNameRoute = createRoute({
  method: 'get',
  path: '/catalogs/{name}',
  tags: ['Catalogs'],
  summary: 'Get a catalog',
  description: 'Gets the specified catalog.\n',
  operationId: 'getCatalog',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'The name of the catalog.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ include_browse: IncludeBrowseParamsSchema }),
  },
  responses: {
    200: {
      description: 'The catalog was successfully retrieved.',
      content: { 'application/json': { schema: CatalogInfoSchema } },
    },
  },
})

export const deleteCatalogsNameRoute = createRoute({
  method: 'delete',
  path: '/catalogs/{name}',
  tags: ['Catalogs'],
  summary: 'Delete a catalog',
  description: 'Deletes the catalog that matches the supplied name.\n',
  operationId: 'deleteCatalog',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'The name of the catalog.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            description: 'Force deletion even if the catalog is not empty.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The catalog was successfully deleted.',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const patchCatalogsNameRoute = createRoute({
  method: 'patch',
  path: '/catalogs/{name}',
  tags: ['Catalogs'],
  summary: 'Update a catalog',
  description: 'Updates the catalog that matches the supplied name.\n',
  operationId: 'updateCatalog',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'The name of the catalog.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateCatalogSchema } } },
  },
  responses: {
    200: {
      description: 'The catalog was successfully updated.',
      content: { 'application/json': { schema: CatalogInfoSchema } },
    },
  },
})

export const getSchemasRoute = createRoute({
  method: 'get',
  path: '/schemas',
  tags: ['Schemas'],
  summary: 'List schemas',
  description:
    'Gets an array of schemas for a catalog.\nThere is no guarantee of a specific ordering of the elements in the array.\n',
  operationId: 'listSchemas',
  request: {
    query: z.object({
      catalog_name: z
        .string()
        .openapi({
          param: {
            name: 'catalog_name',
            in: 'query',
            description: 'Parent catalog for schemas of interest.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            description:
              'Maximum number of schemas to return.\n- when set to a value greater than 0, the page length is the minimum of this value and a server configured value;\n- when set to 0, the page length is set to a server configured value;\n- when set to a value less than 0, an invalid parameter error is returned;\n',
            schema: { type: 'integer', format: 'int32', maximum: 1000 },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page_token',
            in: 'query',
            description: 'Opaque pagination token to go to next page based on previous query.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include_browse: IncludeBrowseParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The schemas list was successfully retrieved.',
      content: { 'application/json': { schema: ListSchemasResponseSchema } },
    },
  },
})

export const postSchemasRoute = createRoute({
  method: 'post',
  path: '/schemas',
  tags: ['Schemas'],
  summary: 'Create a schema',
  description: 'Creates a new schema in the specified catalog.\n',
  operationId: 'createSchema',
  request: { body: { content: { 'application/json': { schema: CreateSchemaSchema } } } },
  responses: {
    200: {
      description: 'The new schema was successfully created.',
      content: { 'application/json': { schema: SchemaInfoSchema } },
    },
  },
})

export const getSchemasFullNameRoute = createRoute({
  method: 'get',
  path: '/schemas/{full_name}',
  tags: ['Schemas'],
  summary: 'Get a schema',
  description: 'Gets the specified schema for a catalog.\n',
  operationId: 'getSchema',
  request: {
    params: z.object({
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of the schema.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ include_browse: IncludeBrowseParamsSchema }),
  },
  responses: {
    200: {
      description: 'The schema was successfully retrieved.',
      content: { 'application/json': { schema: SchemaInfoSchema } },
    },
  },
})

export const deleteSchemasFullNameRoute = createRoute({
  method: 'delete',
  path: '/schemas/{full_name}',
  tags: ['Schemas'],
  summary: 'Delete a schema',
  description: 'Deletes the specified schema from the parent catalog.\n',
  operationId: 'deleteSchema',
  request: {
    params: z.object({
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of the schema.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            description: 'Force deletion even if the catalog is not empty.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The schema was successfully deleted.',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const patchSchemasFullNameRoute = createRoute({
  method: 'patch',
  path: '/schemas/{full_name}',
  tags: ['Schemas'],
  summary: 'Update a schema',
  description: 'Updates the specified schema.\n',
  operationId: 'updateSchema',
  request: {
    params: z.object({
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of the schema.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateSchemaSchema } } },
  },
  responses: {
    200: {
      description: 'The schema was successfully updated.',
      content: { 'application/json': { schema: SchemaInfoSchema } },
    },
  },
})

export const postStagingTablesRoute = createRoute({
  method: 'post',
  path: '/staging-tables',
  tags: ['Tables'],
  summary: 'Create a staging table',
  description:
    'Creates a new staging table instance. Staging tables are used during managed table creation. Creating a managed\ntable requires performing two actions – initializing the table data in cloud storage and creating the named\ntable entry in the catalog – and these should appear as an atomic operation to other operations on catalog\ntables. A staging table is used to allocate storage for the managed table, and the catalog_name.schema_name.name\nparameters provided in this request are used to initialize any required storage properties and determine the\nstorage URL that should be used for the data contained by this table.\n\nTemporary credentials can be obtained as though the staging table were a regular table to get access to the\nstaging table’s storage. After the table’s data is initialized, the staging table is “promoted” to a managed\ntable by creating a managed table with the same location as the staging table. This allows for the atomic\ncreation of a managed table that already has full data written to its storage location. Note: the name provided\nmust match the name used to initialize the staging table originally.\n\nWARNING: This API is experimental and may change in future versions.\n',
  operationId: 'createStagingTable',
  request: { body: { content: { 'application/json': { schema: CreateStagingTableSchema } } } },
  responses: {
    200: {
      description: 'The new staging table was successfully created.',
      content: { 'application/json': { schema: StagingTableInfoSchema } },
    },
  },
})

export const getTablesRoute = createRoute({
  method: 'get',
  path: '/tables',
  tags: ['Tables'],
  summary: 'List tables',
  description:
    'Gets the list of all available tables under the parent catalog and schema.\nThere is no guarantee of a specific ordering of the elements in the array.\n',
  operationId: 'listTables',
  request: {
    query: z.object({
      catalog_name: z
        .string()
        .openapi({
          param: {
            name: 'catalog_name',
            in: 'query',
            description: 'Name of parent catalog for tables of interest.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      schema_name: z
        .string()
        .openapi({
          param: {
            name: 'schema_name',
            in: 'query',
            description: 'Parent schema of tables.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            description:
              'Maximum number of tables to return.\n- when set to a value greater than 0, the page length is the minimum of this value and a server configured value;\n- when set to 0, the page length is set to a server configured value;\n- when set to a value less than 0, an invalid parameter error is returned;\n',
            required: false,
            schema: { type: 'integer', format: 'int32', maximum: 50 },
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page_token',
            in: 'query',
            description: 'Opaque token to send for the next page of results (pagination).',
            required: false,
            schema: { type: 'string' },
          },
        }),
      include_browse: IncludeBrowseParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The tables list was successfully retrieved.',
      content: { 'application/json': { schema: ListTablesResponseSchema } },
    },
  },
})

export const postTablesRoute = createRoute({
  method: 'post',
  path: '/tables',
  tags: ['Tables'],
  summary:
    'Create a table. Only external table creation is supported.\nWARNING: This API is experimental and will change in future versions.\n',
  description:
    'Creates a new external table instance.\nWARNING: This API is experimental and will change in future versions.\n',
  operationId: 'createTable',
  request: { body: { content: { 'application/json': { schema: CreateTableSchema } } } },
  responses: {
    200: {
      description: 'The new external table was successfully created.',
      content: { 'application/json': { schema: TableInfoSchema } },
    },
  },
})

export const getTablesFullNameRoute = createRoute({
  method: 'get',
  path: '/tables/{full_name}',
  tags: ['Tables'],
  summary: 'Get a table',
  description: 'Gets a table for a specific catalog and schema.\n',
  operationId: 'getTable',
  request: {
    params: z.object({
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of the table.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      read_streaming_table_as_managed: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'read_streaming_table_as_managed',
            in: 'query',
            description: 'Whether to read Streaming Tables as Managed tables.\n',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
      read_materialized_view_as_managed: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'read_materialized_view_as_managed',
            in: 'query',
            description: 'Whether to read Materialized Views as Managed tables.\n',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
      include_browse: IncludeBrowseParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The table was successfully retrieved.',
      content: { 'application/json': { schema: TableInfoSchema } },
    },
  },
})

export const deleteTablesFullNameRoute = createRoute({
  method: 'delete',
  path: '/tables/{full_name}',
  tags: ['Tables'],
  summary: 'Delete a table',
  description: 'Deletes a table from the specified parent catalog and schema.\n',
  operationId: 'deleteTable',
  request: {
    params: z.object({
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of the table.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The table was successfully deleted.',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const patchTablesFullNameRoute = createRoute({
  method: 'patch',
  path: '/tables/{full_name}',
  tags: ['Tables'],
  summary: 'Update a table owner',
  description: 'Transfers ownership of a table or view to an existing user.',
  operationId: 'updateTable',
  request: {
    params: z.object({
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of the table.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateTableSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The table owner was successfully updated.',
      content: { 'application/json': { schema: TableInfoSchema } },
    },
  },
})

export const getVolumesRoute = createRoute({
  method: 'get',
  path: '/volumes',
  tags: ['Volumes'],
  summary: 'List Volumes',
  description:
    'Gets an array of available volumes under the parent catalog and schema.\nThere is no guarantee of a specific ordering of the elements in the array.\n',
  operationId: 'listVolumes',
  request: {
    query: z.object({
      catalog_name: z
        .string()
        .openapi({
          param: {
            name: 'catalog_name',
            in: 'query',
            description: 'The identifier of the catalog',
            schema: { type: 'string' },
            required: true,
            examples: {
              CatalogNameExample: {
                summary: 'Specify the target catalog to be `main`',
                description: 'Execute the operation against the `main` catalog',
                value: 'main',
              },
            },
          },
        }),
      schema_name: z
        .string()
        .openapi({
          param: {
            name: 'schema_name',
            in: 'query',
            description: 'The identifier of the schema',
            schema: { type: 'string' },
            required: true,
            examples: {
              SchemaNameExample: {
                summary: 'Specify the target schema to be `default`',
                description: 'Execute the operation against the `default` schema',
                value: 'default',
              },
            },
          },
        }),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            description:
              'Maximum number of volumes to return (page length).\n\nIf not set, the page length is set to a server configured value.\n- when set to a value greater than 0, the page length is the minimum of this value and a server configured value;\n- when set to 0, the page length is set to a server configured value;\n- when set to a value less than 0, an invalid parameter error is returned;\n\nNote: this parameter controls only the maximum number of volumes to return. The actual number of volumes returned in a page may be smaller than this value, including 0, even if there are more pages.\n\n',
            required: false,
            schema: { type: 'integer', format: 'int32', maximum: 10000 },
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page_token',
            in: 'query',
            description:
              'Opaque token returned by a previous request. It must be included in the request to retrieve the next page of results (pagination).',
            required: false,
            schema: { type: 'string' },
          },
        }),
      include_browse: IncludeBrowseParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The volume list was successfully retrieved',
      content: {
        'application/json': {
          schema: ListVolumesResponseContentSchema,
          examples: {
            ListVolumesExample: {
              summary: 'Response of success retrieval of the volumes',
              description: 'A list of volume properties will be returned if the operation succeeds',
              value: {
                volumes: [
                  {
                    catalog_name: 'main',
                    schema_name: 'default',
                    name: 'my_volume',
                    volume_type: 'EXTERNAL',
                    created_at: 1666369196203,
                    updated_at: 1666369196203,
                    comment: 'This is my first volume',
                  },
                  {
                    catalog_name: 'main',
                    schema_name: 'default',
                    name: 'my_another_volume',
                    volume_type: 'EXTERNAL',
                    created_at: 1666369196203,
                    updated_at: 1666369196203,
                    comment: 'This is my other volume',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postVolumesRoute = createRoute({
  method: 'post',
  path: '/volumes',
  tags: ['Volumes'],
  summary: 'Create a Volume',
  description: 'Creates a new volume.\n',
  operationId: 'createVolume',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateVolumeRequestContentSchema,
          examples: {
            CreateExternalVolumeExample: {
              summary: 'Create an External Volume',
              description:
                'Create an External Volume and point the volume to a folder in the S3 bucket',
              value: {
                catalog_name: 'main',
                schema_name: 'default',
                name: 'my_volume',
                volume_type: 'EXTERNAL',
                comment: 'This is my first volume',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created the volume',
      content: {
        'application/json': {
          schema: VolumeInfoSchema,
          examples: {
            CreateVolumeExample: {
              summary: 'Response of successful creation',
              description:
                'The properties of the volume will be returned if the operation succeeds',
              value: {
                catalog_name: 'main',
                schema_name: 'default',
                name: 'my_volume',
                volume_type: 'EXTERNAL',
                created_at: 1666369196203,
                updated_at: 1666369196203,
                comment: 'This is my first volume',
              },
            },
          },
        },
      },
    },
  },
})

export const getVolumesNameRoute = createRoute({
  method: 'get',
  path: '/volumes/{name}',
  tags: ['Volumes'],
  summary: 'Get a Volume',
  description: 'Gets a volume for a specific catalog and schema.\n',
  operationId: 'getVolume',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'The three-level (fully qualified) name of the volume',
            schema: { type: 'string' },
            required: true,
            examples: {
              FullNameArgExample: {
                summary:
                  'Execute the operation against the volume named `my_volume` under `main` catalog and `default` schema',
                value: 'main.default.my_volume',
              },
            },
          },
        }),
    }),
    query: z.object({ include_browse: IncludeBrowseParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the properties of the volume',
      content: {
        'application/json': {
          schema: VolumeInfoSchema,
          examples: {
            GetVolumeExample: {
              summary: 'Response of successful retrieval of an existing volume',
              description:
                'The properties of the volume will be returned if the operation succeeds',
              value: {
                catalog_name: 'main',
                schema_name: 'default',
                name: 'my_volume',
                volume_type: 'EXTERNAL',
                created_at: 1666369196203,
                updated_at: 1666369196203,
                comment: 'This is my first volume',
              },
            },
          },
        },
      },
    },
  },
})

export const deleteVolumesNameRoute = createRoute({
  method: 'delete',
  path: '/volumes/{name}',
  tags: ['Volumes'],
  summary: 'Delete a Volume',
  description: 'Deletes a volume from the specified parent catalog and schema.\n',
  operationId: 'deleteVolume',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'The three-level (fully qualified) name of the volume',
            schema: { type: 'string' },
            required: true,
            examples: {
              FullNameArgExample: {
                summary:
                  'Execute the operation against the volume named `my_volume` under `main` catalog and `default` schema',
                value: 'main.default.my_volume',
              },
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully deleted the volume',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const patchVolumesNameRoute = createRoute({
  method: 'patch',
  path: '/volumes/{name}',
  tags: ['Volumes'],
  summary: 'Update a Volume',
  description:
    "Updates the specified volume under the specified parent catalog and schema.\n\nYou can update the volume's name, comment, or owner.\n",
  operationId: 'updateVolume',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'The three-level (fully qualified) name of the volume',
            schema: { type: 'string' },
            required: true,
            examples: {
              FullNameArgExample: {
                summary:
                  'Execute the operation against the volume named `my_volume` under `main` catalog and `default` schema',
                value: 'main.default.my_volume',
              },
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: UpdateVolumeRequestContentSchema,
          examples: {
            UpdateVolumeName: {
              summary: 'Update the name of the volume',
              description: 'Update the name of the volume',
              value: { new_name: 'my_new_volume' },
            },
            UpdateVolumeComment: {
              summary: 'Update the comment of the volume',
              description: 'Update the comment of the volume',
              value: { comment: 'This is my new volume' },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the properties of the volume',
      content: {
        'application/json': {
          schema: VolumeInfoSchema,
          examples: {
            UpdateVolumeName: {
              summary: 'Update the name of the volume',
              description:
                'The new properties of the volume will be returned if the operation succeeds',
              value: {
                catalog_name: 'main',
                schema_name: 'default',
                name: 'my_new_volume',
                volume_type: 'EXTERNAL',
                created_at: 1666369196203,
                updated_at: 1666369207415,
                comment: 'This is my new volume',
              },
            },
          },
        },
      },
    },
  },
})

export const postTemporaryModelVersionCredentialsRoute = createRoute({
  method: 'post',
  path: '/temporary-model-version-credentials',
  tags: ['TemporaryCredentials'],
  summary:
    'Generate temporary model version credentials. These credentials are used by clients to write and retrieve model artifacts from the model versions external storage location.',
  operationId: 'generateTemporaryModelVersionCredentials',
  request: {
    body: {
      content: { 'application/json': { schema: GenerateTemporaryModelVersionCredentialSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TemporaryCredentialsSchema } },
    },
  },
})

export const postTemporaryTableCredentialsRoute = createRoute({
  method: 'post',
  path: '/temporary-table-credentials',
  tags: ['TemporaryCredentials'],
  summary: 'Generate temporary table credentials.',
  operationId: 'generateTemporaryTableCredentials',
  request: {
    body: { content: { 'application/json': { schema: GenerateTemporaryTableCredentialSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TemporaryCredentialsSchema } },
    },
  },
})

export const postTemporaryVolumeCredentialsRoute = createRoute({
  method: 'post',
  path: '/temporary-volume-credentials',
  tags: ['TemporaryCredentials'],
  summary: 'Generate temporary volume credentials.',
  operationId: 'generateTemporaryVolumeCredentials',
  request: {
    body: { content: { 'application/json': { schema: GenerateTemporaryVolumeCredentialSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TemporaryCredentialsSchema } },
    },
  },
})

export const getFunctionsRoute = createRoute({
  method: 'get',
  path: '/functions',
  tags: ['Functions'],
  summary: 'List functions',
  description:
    'List functions within the specified parent catalog and schema.\nThere is no guarantee of a specific ordering of the elements in the array.\n',
  operationId: 'listFunctions',
  request: {
    query: z.object({
      catalog_name: z
        .string()
        .openapi({
          param: {
            name: 'catalog_name',
            in: 'query',
            description: 'Name of parent catalog for functions of interest.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      schema_name: z
        .string()
        .openapi({
          param: {
            name: 'schema_name',
            in: 'query',
            description: 'Parent schema of functions.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            description:
              'Maximum number of functions to return.\n- when set to a value greater than 0, the page length is the minimum of this value and a server configured value;\n- when set to 0, the page length is set to a server configured value;\n- when set to a value less than 0, an invalid parameter error is returned;\n',
            schema: { type: 'integer', format: 'int32', maximum: 1000 },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page_token',
            in: 'query',
            description: 'Opaque pagination token to go to next page based on previous query.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include_browse: IncludeBrowseParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The function list was successfully retrieved.',
      content: { 'application/json': { schema: ListFunctionsResponseSchema } },
    },
  },
})

export const postFunctionsRoute = createRoute({
  method: 'post',
  path: '/functions',
  tags: ['Functions'],
  summary:
    'Create a function.\nWARNING: This API is experimental and will change in future versions.\n',
  description:
    'Creates a new function instance.\nWARNING: This API is experimental and will change in future versions.\n',
  operationId: 'createFunction',
  request: { body: { content: { 'application/json': { schema: CreateFunctionRequestSchema } } } },
  responses: {
    200: {
      description: 'The new function was successfully created.',
      content: { 'application/json': { schema: FunctionInfoSchema } },
    },
  },
})

export const getFunctionsNameRoute = createRoute({
  method: 'get',
  path: '/functions/{name}',
  tags: ['Functions'],
  summary: 'Get a function',
  description: 'Gets a function from within a parent catalog and schema.',
  operationId: 'getFunction',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description:
              'The fully-qualified name of the function (of the form __catalog_name__.__schema_name__.__function__name__).',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ include_browse: IncludeBrowseParamsSchema }),
  },
  responses: {
    200: {
      description: 'The function was successfully retrieved.',
      content: { 'application/json': { schema: FunctionInfoSchema } },
    },
  },
})

export const deleteFunctionsNameRoute = createRoute({
  method: 'delete',
  path: '/functions/{name}',
  tags: ['Functions'],
  summary: 'Delete a function',
  description: 'Deletes the function that matches the supplied name.',
  operationId: 'deleteFunction',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description:
              'The fully-qualified name of the function (of the form __catalog_name__.__schema_name__.__function__name__).',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The function was successfully deleted.',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const patchFunctionsNameRoute = createRoute({
  method: 'patch',
  path: '/functions/{name}',
  tags: ['Functions'],
  summary: 'Update a function owner',
  description: 'Transfers ownership of a function to an existing user.',
  operationId: 'updateFunction',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description:
              'The fully-qualified name of the function (of the form __catalog_name__.__schema_name__.__function__name__).',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateFunctionSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The function owner was successfully updated.',
      content: { 'application/json': { schema: FunctionInfoSchema } },
    },
  },
})

export const getModelsRoute = createRoute({
  method: 'get',
  path: '/models',
  tags: ['RegisteredModels'],
  summary: 'List models',
  description:
    'Gets a paginated list of all available models either under the specified parent catalog and schema, or all models stored in UC.\nThere is no guarantee of a specific ordering of the elements in the array.\n',
  operationId: 'listRegisteredModels',
  request: {
    query: z.object({
      catalog_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'catalog_name',
            in: 'query',
            description: 'Name of parent catalog for models of interest.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      schema_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'schema_name',
            in: 'query',
            description: 'Name of parent schema for models of interest.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            description:
              'Maximum number of models to return.\n- when set to a value greater than 0, the page length is the minimum of this value and a server configured value;\n- when set to 0, the page length is set to a server configured value;\n- when set to a value less than 0, an invalid parameter error is returned;\n',
            required: false,
            schema: { type: 'integer', format: 'int32', maximum: 50 },
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page_token',
            in: 'query',
            description: 'Opaque token to send for the next page of results (pagination).',
            required: false,
            schema: { type: 'string' },
          },
        }),
      include_browse: IncludeBrowseParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The models list was successfully retrieved.',
      content: { 'application/json': { schema: ListRegisteredModelsResponseSchema } },
    },
  },
})

export const postModelsRoute = createRoute({
  method: 'post',
  path: '/models',
  tags: ['RegisteredModels'],
  summary:
    'Create a model.\nWARNING: This API is experimental and will change in future versions.\n',
  description:
    'Creates a new model instance.\nWARNING: This API is experimental and will change in future versions.\n',
  operationId: 'createRegisteredModel',
  request: { body: { content: { 'application/json': { schema: CreateRegisteredModelSchema } } } },
  responses: {
    200: {
      description: 'The new registered model was successfully created.',
      content: { 'application/json': { schema: RegisteredModelInfoSchema } },
    },
  },
})

export const getModelsFullNameRoute = createRoute({
  method: 'get',
  path: '/models/{full_name}',
  tags: ['RegisteredModels'],
  summary: 'Get a specified registered model',
  description: 'Gets a fully specified registered model.\n',
  operationId: 'getRegisteredModel',
  request: {
    params: z.object({
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of the model.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ include_browse: IncludeBrowseParamsSchema }),
  },
  responses: {
    200: {
      description: 'The registered model was successfully retrieved.',
      content: { 'application/json': { schema: RegisteredModelInfoSchema } },
    },
  },
})

export const deleteModelsFullNameRoute = createRoute({
  method: 'delete',
  path: '/models/{full_name}',
  tags: ['RegisteredModels'],
  summary: 'Delete a specified registered model.',
  description:
    'Deletes a fully specified registered model. All versions of the model must have already been deleted.\n',
  operationId: 'deleteRegisteredModel',
  request: {
    params: z.object({
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of the model.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            description: 'Force deletion even if the registered model still has model versions.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The registered model was successfully deleted.',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const patchModelsFullNameRoute = createRoute({
  method: 'patch',
  path: '/models/{full_name}',
  tags: ['RegisteredModels'],
  summary: 'Update a registered model',
  description: 'Updates the specified registered model.\n',
  operationId: 'updateRegisteredModel',
  request: {
    params: z.object({
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of the model.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateRegisteredModelSchema } } },
  },
  responses: {
    200: {
      description: 'The registered model was successfully updated.',
      content: { 'application/json': { schema: RegisteredModelInfoSchema } },
    },
  },
})

export const postModelsVersionsRoute = createRoute({
  method: 'post',
  path: '/models/versions',
  tags: ['ModelVersions'],
  summary: 'Create a model version.\n',
  description: 'Creates a new model version instance.\n',
  operationId: 'createModelVersion',
  request: { body: { content: { 'application/json': { schema: CreateModelVersionSchema } } } },
  responses: {
    200: {
      description: 'The new model version was successfully created.',
      content: { 'application/json': { schema: ModelVersionInfoSchema } },
    },
  },
})

export const getModelsFullNameVersionsRoute = createRoute({
  method: 'get',
  path: '/models/{full_name}/versions',
  tags: ['ModelVersions'],
  summary: 'List model versions of the specified registered model.',
  description:
    'Gets the paginated list of all available model versions under the specified registered model.\nThere is no guarantee of a specific ordering of the elements in the array.\n',
  operationId: 'listModelVersions',
  request: {
    params: z.object({
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of the registered model.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            description:
              'Maximum number of model versions to return.\n- when set to a value greater than 0, the page length is the minimum of this value and a server configured value;\n- when set to 0, the page length is set to a server configured value;\n- when set to a value less than 0, an invalid parameter error is returned;\n',
            required: false,
            schema: { type: 'integer', format: 'int32', maximum: 50 },
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page_token',
            in: 'query',
            description: 'Opaque token to send for the next page of results (pagination).',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The model versions list was successfully retrieved.',
      content: { 'application/json': { schema: ListModelVersionsResponseSchema } },
    },
  },
})

export const getModelsFullNameVersionsVersionRoute = createRoute({
  method: 'get',
  path: '/models/{full_name}/versions/{version}',
  tags: ['ModelVersions'],
  summary: 'Get a model version',
  description: 'Gets a specific model version for a specific model.\n',
  operationId: 'getModelVersion',
  request: {
    params: z.object({
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of the model.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            description: 'Version number of the model version.',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The model version was successfully retrieved.',
      content: { 'application/json': { schema: ModelVersionInfoSchema } },
    },
  },
})

export const deleteModelsFullNameVersionsVersionRoute = createRoute({
  method: 'delete',
  path: '/models/{full_name}/versions/{version}',
  tags: ['ModelVersions'],
  summary: 'Delete a model version',
  description: 'Deletes the specified model version.\n',
  operationId: 'deleteModelVersion',
  request: {
    params: z.object({
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of the model.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            description: 'Version number of the model version.',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The model version was successfully deleted.',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const patchModelsFullNameVersionsVersionRoute = createRoute({
  method: 'patch',
  path: '/models/{full_name}/versions/{version}',
  tags: ['ModelVersions'],
  summary: 'Update a model version',
  description: 'Updates the specified model version.\n',
  operationId: 'updateModelVersion',
  request: {
    params: z.object({
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of the model.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            description: 'Version number of the model version.',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateModelVersionSchema } } },
  },
  responses: {
    200: {
      description: 'The model version was successfully updated.',
      content: { 'application/json': { schema: ModelVersionInfoSchema } },
    },
  },
})

export const patchModelsFullNameVersionsVersionFinalizeRoute = createRoute({
  method: 'patch',
  path: '/models/{full_name}/versions/{version}/finalize',
  tags: ['ModelVersions'],
  summary: 'Finalize a model version',
  description: 'Finalizes the status of the specified model version.\n',
  operationId: 'finalizeModelVersion',
  request: {
    params: z.object({
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of the model.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            description: 'Version number of the model version.',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FinalizeModelVersionSchema } } },
  },
  responses: {
    200: {
      description: 'The model version was successfully finalized.',
      content: { 'application/json': { schema: ModelVersionInfoSchema } },
    },
  },
})

export const postTemporaryPathCredentialsRoute = createRoute({
  method: 'post',
  path: '/temporary-path-credentials',
  tags: ['TemporaryCredentials'],
  summary: 'Generate temporary path credentials.',
  operationId: 'generateTemporaryPathCredentials',
  request: {
    body: { content: { 'application/json': { schema: GenerateTemporaryPathCredentialSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TemporaryCredentialsSchema } },
    },
  },
})

export const getPermissionsSecurableTypeFullNameRoute = createRoute({
  method: 'get',
  path: '/permissions/{securable_type}/{full_name}',
  tags: ['Grants'],
  summary: 'Get permissions',
  description: 'Gets the permissions for a securable.\n',
  operationId: 'get',
  request: {
    params: z.object({
      securable_type: SecurableTypeSchema.openapi({
        param: {
          name: 'securable_type',
          in: 'path',
          description: 'Type of securable.',
          required: true,
          schema: { $ref: '#/components/schemas/SecurableType' },
        },
      }),
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of securable.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      principal: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'principal',
            in: 'query',
            description:
              'If provided, only the permissions for the specified principal (user or group) are returned.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The permissions list for securable was successfully retrieved.',
      content: { 'application/json': { schema: PermissionsListSchema } },
    },
  },
})

export const patchPermissionsSecurableTypeFullNameRoute = createRoute({
  method: 'patch',
  path: '/permissions/{securable_type}/{full_name}',
  tags: ['Grants'],
  summary: 'Update a permission',
  description: 'Updates the permissions for a securable.\n',
  operationId: 'update',
  request: {
    params: z.object({
      securable_type: SecurableTypeSchema.openapi({
        param: {
          name: 'securable_type',
          in: 'path',
          description: 'Type of securable.',
          required: true,
          schema: { $ref: '#/components/schemas/SecurableType' },
        },
      }),
      full_name: z
        .string()
        .openapi({
          param: {
            name: 'full_name',
            in: 'path',
            description: 'Full name of securable.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdatePermissionsSchema } } },
  },
  responses: {
    200: {
      description: 'The permissions list for securable was successfully updated.',
      content: { 'application/json': { schema: PermissionsListSchema } },
    },
  },
})

export const getMetastoreSummaryRoute = createRoute({
  method: 'get',
  path: '/metastore_summary',
  tags: ['Metastores'],
  summary: 'Get metastore summary',
  description:
    'Gets information about the metastore hosted by this Unity Catalog service (currently the service hosts only one metastore)\n',
  operationId: 'summary',
  responses: {
    200: {
      description: 'The metastore summary was successfully retrieved.',
      content: { 'application/json': { schema: GetMetastoreSummaryResponseSchema } },
    },
  },
})

export const getCredentialsRoute = createRoute({
  method: 'get',
  path: '/credentials',
  tags: ['Credentials'],
  summary: 'List credentials',
  description:
    'Gets an array of credentials (as __CredentialInfo__ objects).\nThe array is limited to only those credentials the caller has permission to access.\nIf the caller is a metastore admin, retrieval of credentials is unrestricted.\nThere is no guarantee of a specific ordering of the elements in the array.\n',
  operationId: 'listCredentials',
  request: {
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            description:
              'Maximum number of credentials to return.\n  - If not set, the default max page size is used.\n  - When set to a value greater than 0, the page length is the minimum of\n    this value and a server-configured value.\n  - When set to 0, the page length is set to a server-configured value\n    (recommended).\n  - When set to a value less than 0, an invalid parameter error is\n    returned.\n',
            schema: { type: 'integer', format: 'int32', maximum: 1000 },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page_token',
            in: 'query',
            description: 'Opaque pagination token to go to next page based on previous query.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      purpose: CredentialPurposeSchema.openapi({
        param: {
          name: 'purpose',
          in: 'query',
          description: 'Return only credentials for the specified purpose.',
          schema: { $ref: '#/components/schemas/CredentialPurpose' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'The credentials list was successfully retrieved.',
      content: { 'application/json': { schema: ListCredentialsResponseSchema } },
    },
  },
})

export const postCredentialsRoute = createRoute({
  method: 'post',
  path: '/credentials',
  tags: ['Credentials'],
  summary: 'Create a credential',
  description:
    "Creates a new credential. The type of credential to be created is determined by the **purpose** field.\nSet exactly one of `aws_iam_role` and `s3_compatible`; otherwise the request fails with\n`INVALID_ARGUMENT`.\n\nEXPERIMENTAL: `s3_compatible` is available only when the server property\n`server.s3-compatible-storage.enabled` is `true`. Otherwise a create or update request that\nsets `s3_compatible`, and vending for a path under one, fail with `INVALID_ARGUMENT`; other\nupdates, reads, lists and deletes of existing ones still work. An `s3_compatible`\ncredential holds an access key pair of S3-compatible storage and the storage's S3 endpoint.\n`s3_endpoint` and `assume_role.sts_endpoint` are http or https URLs with a host, and\nwithout user info, a query or a fragment; other values fail with `INVALID_ARGUMENT`. With\n`assume_role`, the key pair signs AssumeRole on the storage's STS, and Unity Catalog vends\nshort-lived credentials scoped to the requested path and privilege. Without it, the server\nproperty `server.s3-compatible-storage.static-key-vending` decides what clients receive:\n\n* `endpoint-only` (default): the S3 endpoint and region, but no keys; engines bring their\n  own.\n* `static-key`: the key pair itself. It is not scoped to the requested path or privilege,\n  and changing Unity Catalog permissions does not revoke a key pair already vended.\n\nVends with keys (`assume_role` sessions and `static-key` key pairs) suit only servers whose\nclients all read `s3_endpoint`: a client that does not would send the keys to AWS S3.\nWithout `assume_role`, in both modes the vended `expiration_time` is a refetch time an hour\nahead, not when the keys expire, and the Iceberg REST table config of a `static-key` vend\ncarries no expiration. A running client need not fetch again then; the UC Hadoop connector\npicks up a changed endpoint on its first table load after `expiration_time`. The external\nlocations of an `s3_compatible` credential must be `s3://` paths. Paths stay\n`s3://<bucket>/<path>` everywhere: a path reaches the storage of the credential of the\nexternal location covering it, so one bucket name can be on several storage systems under\ndifferent, non-overlapping locations.",
  operationId: 'createCredential',
  request: { body: { content: { 'application/json': { schema: CreateCredentialRequestSchema } } } },
  responses: {
    200: {
      description: 'The new credential was successfully created.',
      content: { 'application/json': { schema: CredentialInfoSchema } },
    },
  },
})

export const getCredentialsNameRoute = createRoute({
  method: 'get',
  path: '/credentials/{name}',
  tags: ['Credentials'],
  summary: 'Get a credential',
  description:
    'Gets a credential from the metastore.\nThe caller must be a metastore admin, the owner of the credential, or have some permission on the credential.\n',
  operationId: 'getCredential',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the credential.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The credential was successfully retrieved.',
      content: { 'application/json': { schema: CredentialInfoSchema } },
    },
  },
})

export const deleteCredentialsNameRoute = createRoute({
  method: 'delete',
  path: '/credentials/{name}',
  tags: ['Credentials'],
  summary: 'Delete a credential',
  description:
    'Deletes a credential from the metastore.\nThe caller must be a metastore admin, the credential owner,\nor have MANAGE on the credential.',
  operationId: 'deleteCredential',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the credential.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            description:
              'Force deletion even if there are dependent external locations. The dependent external locations are kept, and they have no credential until they are updated with a new credential_name.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The credential was successfully deleted.',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const patchCredentialsNameRoute = createRoute({
  method: 'patch',
  path: '/credentials/{name}',
  tags: ['Credentials'],
  summary: 'Update a credential',
  description:
    'Updates a credential.\nThe caller must be a metastore admin, the credential owner,\nor have MANAGE on the credential.\nSet at most one of `aws_iam_role` and `s3_compatible`; setting both fails with\n`INVALID_ARGUMENT`. Either one replaces the stored credential as a whole, with no field-level\nmerge, and can change its type: an `s3_compatible` update carries `secret_access_key` again,\nand leaving out `assume_role` removes it. Updates without either, such as of the name or\ncomment, keep the stored credential.\n\nEXPERIMENTAL: whoever may update a credential is trusted with where the data under it lives.\nChanging `s3_endpoint` of an `s3_compatible` credential moves data access for every path\nunder its external locations, including tables and volumes other principals own, to the new\nhost; changing `sts_endpoint` moves where their credentials are issued. The server itself\nconnects to both endpoints. An `s3_compatible` credential has only `s3://` external\nlocations: setting `s3_compatible` while a location outside `s3://` uses the credential,\nor creating or updating such a location to use it, fails with `INVALID_ARGUMENT`.',
  operationId: 'updateCredential',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the credential.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateCredentialRequestSchema } } },
  },
  responses: {
    200: {
      description: 'The credential was successfully updated.',
      content: { 'application/json': { schema: CredentialInfoSchema } },
    },
  },
})

export const getExternalLocationsRoute = createRoute({
  method: 'get',
  path: '/external-locations',
  tags: ['External Locations'],
  summary: 'List external locations',
  description:
    'Gets an array of external locations (ExternalLocationInfo objects) from the metastore. The caller must be a metastore admin, the owner of the external location, or a user with some privilege on the external location.\nLocations visible only through BROWSE are included only with include_browse=true\nand return discovery metadata with browse_only=true.\n',
  operationId: 'listExternalLocations',
  request: {
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_results',
            in: 'query',
            description:
              'Maximum number of external locations to return. If not set, all external locations are returned.\n',
            schema: { type: 'integer', format: 'int32', maximum: 1000 },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page_token',
            in: 'query',
            description: 'Opaque pagination token to go to the next page.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include_browse: IncludeBrowseParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The external location list was successfully retrieved.',
      content: { 'application/json': { schema: ListExternalLocationsResponseSchema } },
    },
  },
})

export const postExternalLocationsRoute = createRoute({
  method: 'post',
  path: '/external-locations',
  tags: ['External Locations'],
  summary: 'Create an external location',
  description:
    'Creates a new external location entry in the metastore. The caller must be a metastore admin to be able to create external locations.\nEXPERIMENTAL: a location whose credential is `s3_compatible` must have an `s3://` URL;\notherwise the request fails with `INVALID_ARGUMENT`.\n',
  operationId: 'createExternalLocation',
  request: {
    body: {
      content: { 'application/json': { schema: CreateExternalLocationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new external location was successfully created.',
      content: { 'application/json': { schema: ExternalLocationInfoSchema } },
    },
  },
})

export const getExternalLocationsNameRoute = createRoute({
  method: 'get',
  path: '/external-locations/{name}',
  tags: ['External Locations'],
  summary: 'Get an external location',
  description:
    'Gets an external location from the metastore. The caller must be a metastore admin, the owner of the external location, or a user with some privilege on the external location.\nA BROWSE grant alone requires include_browse=true and returns discovery metadata\nwith browse_only=true.\n',
  operationId: 'getExternalLocation',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the external location.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ include_browse: IncludeBrowseParamsSchema }),
  },
  responses: {
    200: {
      description: 'The external location was successfully retrieved.',
      content: { 'application/json': { schema: ExternalLocationInfoSchema } },
    },
  },
})

export const deleteExternalLocationsNameRoute = createRoute({
  method: 'delete',
  path: '/external-locations/{name}',
  tags: ['External Locations'],
  summary: 'Delete an external location',
  description:
    'Deletes the specified external location from the metastore.\nThe caller must be a metastore admin, the external location owner,\nor have MANAGE on the external location.\nUnless force is true, the deletion fails while the location is in use: a table, volume\nor registered model is stored under it, a catalog or schema keeps its managed storage\nunder it, or a storage cleanup is pending there.',
  operationId: 'deleteExternalLocation',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the external location.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            description: 'Force deletion even if the external location is in use.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'The external location was successfully deleted.' } },
})

export const patchExternalLocationsNameRoute = createRoute({
  method: 'patch',
  path: '/external-locations/{name}',
  tags: ['External Locations'],
  summary: 'Update an external location',
  description:
    'Updates an external location in the metastore.\nThe caller must be a metastore admin, the external location owner,\nor have MANAGE on the external location.\nUnless force is true, changing the url fails if the location is in use (as described for\ndeleting it), unless the new url is the same as, or a parent of, the old one.\nEXPERIMENTAL: a location whose credential is `s3_compatible` must have an `s3://` URL;\notherwise the request fails with `INVALID_ARGUMENT`.',
  operationId: 'updateExternalLocation',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Name of the external location.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateExternalLocationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The external location was successfully updated.',
      content: { 'application/json': { schema: ExternalLocationInfoSchema } },
    },
  },
})

export const getDeltaPreviewCommitsRoute = createRoute({
  method: 'get',
  path: '/delta/preview/commits',
  tags: ['DeltaCommits'],
  summary:
    'List unbackfilled Delta table commits.\nWARNING: This API is experimental and may change in future versions.\n',
  description:
    'List all the unbackfilled Delta commits that are currently being tracked by the UC coordinator.\nIf no commits are being tracked in the specific version range (from start_version to an optional end_version),\nit will return an empty list.\nWARNING: This API is experimental and may change in future versions.\n',
  operationId: 'getCommits',
  request: { body: { content: { 'application/json': { schema: DeltaGetCommitsSchema } } } },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeltaGetCommitsResponseSchema } },
    },
    400: {
      description:
        "Bad request or Invalid Argument. Example: table_uri in the request doesn't match the existing table_uri for the table.\n",
    },
    401: { description: 'Unauthorized. Authentication credentials are missing or incorrect.' },
    403: {
      description:
        'Forbidden. The user does not have the necessary permissions to perform this action.',
    },
    404: { description: 'Not Found. The specified table does not exist.' },
    500: { description: 'Internal Server Error. An unexpected error occurred on the server.' },
  },
})

export const postDeltaPreviewCommitsRoute = createRoute({
  method: 'post',
  path: '/delta/preview/commits',
  tags: ['DeltaCommits'],
  summary:
    'Commit changes to a specified Delta table.\nThe server has a limit defined in config on how many unbackfilled commits it can hold.\nClients are expected to do active backfill of the commit after committing to UC. So in\nmost cases the number of unbackfilled commits should be close to zero or one. But if\nclients misbehave and unbackfilled commits accumulate beyond the limit, server will\nreject further commits until more backfill is done.\nReplaying an already-accepted commit (same version and file-name) is an idempotent no-op\nthat returns 200, so a client that lost the response can safely resend.\nWARNING: This API is experimental and may change in future versions.\n',
  operationId: 'commit',
  request: {
    body: { content: { 'application/json': { schema: DeltaCommitSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeltaCommitResponseSchema } },
    },
    400: {
      description:
        "Bad request or Invalid Argument. Example: Commit version is not expected (e.g., latest_table_version +1) \nor Latest backfilled version exceeds the last commit version or table_uri in the request doesn't match the \nexisting table_uri for the table.\n",
    },
    401: { description: 'Unauthorized. Authentication credentials are missing or incorrect.' },
    403: {
      description:
        'Forbidden. The user does not have the necessary permissions to perform this action.',
    },
    404: { description: 'Not Found. The specified table does not exist.' },
    409: {
      description:
        'Conflict. Indicates that a different commit with the same version already exists.',
    },
    429: {
      description:
        'The maximum number of unbackfilled commits per table has been reached. Please backfill some commits before retrying.',
    },
    500: { description: 'Internal Server Error. An unexpected error occurred on the server.' },
    501: { description: 'Not Implemented. The requested functionality is not supported.' },
  },
})
