import { createRoute, z } from '@hono/zod-openapi'

type BoxedBooleanType = boolean

const BoxedBooleanSchema: z.ZodType<BoxedBooleanType> = z.boolean().openapi('BoxedBoolean')

type BooleanArrayType = z.infer<typeof BoxedBooleanSchema>[]

const BooleanArraySchema: z.ZodType<BooleanArrayType> = z
  .array(BoxedBooleanSchema)
  .openapi({
    description:
      '<p>An array of Boolean values.</p> <note> <p>Some array entries can be null.</p> </note>',
  })
  .openapi('BooleanArray')

type BoxedLongType = number

const BoxedLongSchema: z.ZodType<BoxedLongType> = z.int().openapi('BoxedLong')

type LongArrayType = z.infer<typeof BoxedLongSchema>[]

const LongArraySchema: z.ZodType<LongArrayType> = z
  .array(BoxedLongSchema)
  .openapi({
    description:
      '<p>An array of integers.</p> <note> <p>Some array entries can be null.</p> </note>',
  })
  .openapi('LongArray')

type BoxedDoubleType = number

const BoxedDoubleSchema: z.ZodType<BoxedDoubleType> = z.float64().openapi('BoxedDouble')

type DoubleArrayType = z.infer<typeof BoxedDoubleSchema>[]

const DoubleArraySchema: z.ZodType<DoubleArrayType> = z
  .array(BoxedDoubleSchema)
  .openapi({
    description:
      '<p>An array of floating-point numbers.</p> <note> <p>Some array entries can be null.</p> </note>',
  })
  .openapi('DoubleArray')

type StringType = string

const StringSchema: z.ZodType<StringType> = z.string().openapi('String')

type StringArrayType = z.infer<typeof StringSchema>[]

const StringArraySchema: z.ZodType<StringArrayType> = z
  .array(StringSchema)
  .openapi({
    description:
      '<p>An array of strings.</p> <note> <p>Some array entries can be null.</p> </note>',
  })
  .openapi('StringArray')

const ArrayOfArraySchema: z.ZodType<ArrayOfArrayType> = z
  .lazy(() =>
    z
      .array(ArrayValueSchema)
      .openapi({
        description:
          '<p>An array of arrays.</p> <note> <p>Some array entries can be null.</p> </note>',
      }),
  )
  .openapi('ArrayOfArray')

type ArrayValueType = {
  booleanValues?: z.infer<typeof BooleanArraySchema> & { [key: string]: unknown }
  longValues?: z.infer<typeof LongArraySchema> & { [key: string]: unknown }
  doubleValues?: z.infer<typeof DoubleArraySchema> & { [key: string]: unknown }
  stringValues?: z.infer<typeof StringArraySchema> & { [key: string]: unknown }
  arrayValues?: z.infer<typeof ArrayOfArraySchema> & { [key: string]: unknown }
}

const ArrayValueSchema: z.ZodType<ArrayValueType> = z
  .lazy(() =>
    z
      .object({
        booleanValues: BooleanArraySchema.and(
          z.any().openapi({ description: 'An array of Boolean values.' }),
        ).exactOptional(),
        longValues: LongArraySchema.and(
          z.any().openapi({ description: 'An array of integers.' }),
        ).exactOptional(),
        doubleValues: DoubleArraySchema.and(
          z.any().openapi({ description: 'An array of floating-point numbers.' }),
        ).exactOptional(),
        stringValues: StringArraySchema.and(
          z.any().openapi({ description: 'An array of strings.' }),
        ).exactOptional(),
        arrayValues: ArrayOfArraySchema.and(
          z.any().openapi({ description: 'An array of arrays.' }),
        ).exactOptional(),
      })
      .openapi({ description: 'Contains an array.', required: [] }),
  )
  .openapi('ArrayValue')

type ArrayOfArrayType = z.infer<typeof ArrayValueSchema>[]

type BoxedIntegerType = number

const BoxedIntegerSchema: z.ZodType<BoxedIntegerType> = z.int().openapi('BoxedInteger')

type BoxedFloatType = number

const BoxedFloatSchema: z.ZodType<BoxedFloatType> = z.float32().openapi('BoxedFloat')

type BlobType = string

const BlobSchema: z.ZodType<BlobType> = z.string().openapi('Blob')

const ArrayValueListSchema: z.ZodType<ArrayValueListType> = z
  .lazy(() => z.array(ValueSchema))
  .openapi('ArrayValueList')

const StructValueSchema: z.ZodType<StructValueType> = z
  .lazy(() =>
    z
      .object({
        attributes: ArrayValueListSchema.and(
          z.any().openapi({ description: 'The attributes returned in the record.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          '<p>A structure value returned by a call.</p> <note> <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p> </note>',
        required: [],
      }),
  )
  .openapi('StructValue')

type ValueType = {
  isNull?: z.infer<typeof BoxedBooleanSchema> & { [key: string]: unknown }
  bitValue?: z.infer<typeof BoxedBooleanSchema> & { [key: string]: unknown }
  bigIntValue?: z.infer<typeof BoxedLongSchema> & { [key: string]: unknown }
  intValue?: z.infer<typeof BoxedIntegerSchema> & { [key: string]: unknown }
  doubleValue?: z.infer<typeof BoxedDoubleSchema> & { [key: string]: unknown }
  realValue?: z.infer<typeof BoxedFloatSchema> & { [key: string]: unknown }
  stringValue?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  blobValue?: z.infer<typeof BlobSchema> & { [key: string]: unknown }
  arrayValues?: z.infer<typeof ArrayValueListSchema> & { [key: string]: unknown }
  structValue?: z.infer<typeof StructValueSchema> & { [key: string]: unknown }
}

const ValueSchema: z.ZodType<ValueType> = z
  .lazy(() =>
    z
      .object({
        isNull: BoxedBooleanSchema.and(
          z.any().openapi({ description: 'A NULL value.' }),
        ).exactOptional(),
        bitValue: BoxedBooleanSchema.and(
          z.any().openapi({ description: 'A value for a column of BIT data type.' }),
        ).exactOptional(),
        bigIntValue: BoxedLongSchema.and(
          z.any().openapi({ description: 'A value for a column of big integer data type.' }),
        ).exactOptional(),
        intValue: BoxedIntegerSchema.and(
          z.any().openapi({ description: 'A value for a column of integer data type.' }),
        ).exactOptional(),
        doubleValue: BoxedDoubleSchema.and(
          z.any().openapi({ description: 'A value for a column of double data type.' }),
        ).exactOptional(),
        realValue: BoxedFloatSchema.and(
          z.any().openapi({ description: 'A value for a column of real data type.' }),
        ).exactOptional(),
        stringValue: StringSchema.and(
          z.any().openapi({ description: 'A value for a column of string data type.' }),
        ).exactOptional(),
        blobValue: BlobSchema.and(
          z.any().openapi({ description: 'A value for a column of BLOB data type.' }),
        ).exactOptional(),
        arrayValues: ArrayValueListSchema.and(
          z.any().openapi({ description: 'An array of column values.' }),
        ).exactOptional(),
        structValue: StructValueSchema.and(
          z.any().openapi({ description: 'A value for a column of STRUCT data type.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          '<p>Contains the value of a column.</p> <pre><code> &lt;note&gt; &lt;p&gt;This data structure is only used with the deprecated &lt;code&gt;ExecuteSql&lt;/code&gt; operation. Use the &lt;code&gt;BatchExecuteStatement&lt;/code&gt; or &lt;code&gt;ExecuteStatement&lt;/code&gt; operation instead.&lt;/p&gt; &lt;/note&gt; </code></pre>',
        required: [],
      }),
  )
  .openapi('Value')

type ArrayValueListType = z.infer<typeof ValueSchema>[]

const IntegerSchema = z.int().openapi('Integer')

const BooleanSchema = z.boolean().openapi('Boolean')

const ColumnMetadataSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the column.' }),
    ).exactOptional(),
    type: IntegerSchema.and(
      z.any().openapi({ description: 'The type of the column.' }),
    ).exactOptional(),
    typeName: StringSchema.and(
      z.any().openapi({ description: 'The database-specific data type of the column.' }),
    ).exactOptional(),
    label: StringSchema.and(
      z.any().openapi({ description: 'The label for the column.' }),
    ).exactOptional(),
    schemaName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the schema that owns the table that includes the column.',
        }),
    ).exactOptional(),
    tableName: StringSchema.and(
      z.any().openapi({ description: 'The name of the table that includes the column.' }),
    ).exactOptional(),
    isAutoIncrement: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A value that indicates whether the column increments automatically.',
        }),
    ).exactOptional(),
    isSigned: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'A value that indicates whether an integer column is signed.' }),
    ).exactOptional(),
    isCurrency: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A value that indicates whether the column contains currency values.',
        }),
    ).exactOptional(),
    isCaseSensitive: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'A value that indicates whether the column is case-sensitive.' }),
    ).exactOptional(),
    nullable: IntegerSchema.and(
      z.any().openapi({ description: 'A value that indicates whether the column is nullable.' }),
    ).exactOptional(),
    precision: IntegerSchema.and(
      z.any().openapi({ description: 'The precision value of a decimal number column.' }),
    ).exactOptional(),
    scale: IntegerSchema.and(
      z.any().openapi({ description: 'The scale value of a decimal number column.' }),
    ).exactOptional(),
    arrayBaseColumnType: IntegerSchema.and(
      z.any().openapi({ description: 'The type of the column.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the metadata for a column.', required: [] })
  .openapi('ColumnMetadata')

type MetadataType = z.infer<typeof ColumnMetadataSchema>[]

type StructValueType = {
  attributes?: z.infer<typeof ArrayValueListSchema> & { [key: string]: unknown }
}

const FieldSchema = z
  .object({
    isNull: BoxedBooleanSchema.and(
      z.any().openapi({ description: 'A NULL value.' }),
    ).exactOptional(),
    booleanValue: BoxedBooleanSchema.and(
      z.any().openapi({ description: 'A value of Boolean data type.' }),
    ).exactOptional(),
    longValue: BoxedLongSchema.and(
      z.any().openapi({ description: 'A value of long data type.' }),
    ).exactOptional(),
    doubleValue: BoxedDoubleSchema.and(
      z.any().openapi({ description: 'A value of double data type.' }),
    ).exactOptional(),
    stringValue: StringSchema.and(
      z.any().openapi({ description: 'A value of string data type.' }),
    ).exactOptional(),
    blobValue: BlobSchema.and(
      z.any().openapi({ description: 'A value of BLOB data type.' }),
    ).exactOptional(),
    arrayValue: ArrayValueSchema.and(
      z.any().openapi({ description: 'An array of values.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains a value.', required: [] })
  .openapi('Field')

const FieldListSchema = z.array(FieldSchema).openapi('FieldList')

const UpdateResultSchema = z
  .object({
    generatedFields: FieldListSchema.and(
      z.any().openapi({ description: 'Values for fields generated during the request.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The response elements represent the results of an update.',
    required: [],
  })
  .openapi('UpdateResult')

const UpdateResultsSchema = z.array(UpdateResultSchema).openapi('UpdateResults')

const BatchExecuteStatementResponseSchema = z
  .object({
    updateResults: UpdateResultsSchema.and(
      z.any().openapi({ description: 'The execution results of each batch entry.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The response elements represent the output of a SQL statement over an array of data.',
    required: [],
  })
  .openapi('BatchExecuteStatementResponse')

const ParameterNameSchema = z.string().openapi('ParameterName')

const TypeHintSchema = z
  .enum(['JSON', 'UUID', 'TIMESTAMP', 'DATE', 'TIME', 'DECIMAL'])
  .openapi('TypeHint')

const SqlParameterSchema = z
  .object({
    name: ParameterNameSchema.and(
      z.any().openapi({ description: 'The name of the parameter.' }),
    ).exactOptional(),
    value: FieldSchema.and(
      z.any().openapi({ description: 'The value of the parameter.' }),
    ).exactOptional(),
    typeHint: TypeHintSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A hint that specifies the correct object type for data type mapping. Possible values are as follows:</p> <ul> <li> <p> <code>DATE</code> - The corresponding <code>String</code> parameter value is sent as an object of <code>DATE</code> type to the database. The accepted format is <code>YYYY-MM-DD</code>.</p> </li> <li> <p> <code>DECIMAL</code> - The corresponding <code>String</code> parameter value is sent as an object of <code>DECIMAL</code> type to the database.</p> </li> <li> <p> <code>JSON</code> - The corresponding <code>String</code> parameter value is sent as an object of <code>JSON</code> type to the database.</p> </li> <li> <p> <code>TIME</code> - The corresponding <code>String</code> parameter value is sent as an object of <code>TIME</code> type to the database. The accepted format is <code>HH:MM:SS[.FFF]</code>.</p> </li> <li> <p> <code>TIMESTAMP</code> - The corresponding <code>String</code> parameter value is sent as an object of <code>TIMESTAMP</code> type to the database. The accepted format is <code>YYYY-MM-DD HH:MM:SS[.FFF]</code>.</p> </li> <li> <p> <code>UUID</code> - The corresponding <code>String</code> parameter value is sent as an object of <code>UUID</code> type to the database. </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A parameter used in a SQL statement.', required: [] })
  .openapi('SqlParameter')

const SqlParametersListSchema = z.array(SqlParameterSchema).openapi('SqlParametersList')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const StatementTimeoutExceptionSchema = z.any().openapi('StatementTimeoutException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const ServiceUnavailableErrorSchema = z.any().openapi('ServiceUnavailableError')

const IdSchema = z.string().min(0).max(192).openapi('Id')

const BeginTransactionResponseSchema = z
  .object({
    transactionId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The transaction ID of the transaction started by the call.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The response elements represent the output of a request to start a SQL transaction.',
    required: [],
  })
  .openapi('BeginTransactionResponse')

const TransactionStatusSchema = z.string().min(0).max(128).openapi('TransactionStatus')

const CommitTransactionResponseSchema = z
  .object({
    transactionStatus: TransactionStatusSchema.and(
      z.any().openapi({ description: 'The status of the commit operation.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The response elements represent the output of a commit transaction request.',
    required: [],
  })
  .openapi('CommitTransactionResponse')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const LongSchema = z.int().openapi('Long')

const MetadataSchema: z.ZodType<MetadataType> = z
  .lazy(() => z.array(ColumnMetadataSchema))
  .openapi('Metadata')

const ResultSetMetadataSchema = z
  .object({
    columnCount: LongSchema.and(
      z.any().openapi({ description: 'The number of columns in the result set.' }),
    ).exactOptional(),
    columnMetadata: MetadataSchema.and(
      z.any().openapi({ description: 'The metadata of the columns in the result set.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The metadata of the result set returned by a SQL statement.',
    required: [],
  })
  .openapi('ResultSetMetadata')

const RowSchema = z.array(ValueSchema).openapi('Row')

const RecordSchema = z
  .object({
    values: RowSchema.and(
      z.any().openapi({ description: 'The values returned in the record.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A record returned by a call.</p> <note> <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p> </note>',
    required: [],
  })
  .openapi('Record')

const RecordsSchema = z.array(RecordSchema).openapi('Records')

const ResultFrameSchema = z
  .object({
    resultSetMetadata: ResultSetMetadataSchema.and(
      z.any().openapi({ description: 'The result-set metadata in the result set.' }),
    ).exactOptional(),
    records: RecordsSchema.and(
      z.any().openapi({ description: 'The records in the result set.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The result set returned by a SQL statement.</p> <note> <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p> </note>',
    required: [],
  })
  .openapi('ResultFrame')

const RecordsUpdatedSchema = z.int().openapi('RecordsUpdated')

const SqlStatementResultSchema = z
  .object({
    resultFrame: ResultFrameSchema.and(
      z.any().openapi({ description: 'The result set of the SQL statement.' }),
    ).exactOptional(),
    numberOfRecordsUpdated: RecordsUpdatedSchema.and(
      z.any().openapi({ description: 'The number of records updated by a SQL statement.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The result of a SQL statement.</p> <pre><code> &lt;note&gt; &lt;p&gt;This data structure is only used with the deprecated &lt;code&gt;ExecuteSql&lt;/code&gt; operation. Use the &lt;code&gt;BatchExecuteStatement&lt;/code&gt; or &lt;code&gt;ExecuteStatement&lt;/code&gt; operation instead.&lt;/p&gt; &lt;/note&gt; </code></pre>',
    required: [],
  })
  .openapi('SqlStatementResult')

const SqlStatementResultsSchema = z.array(SqlStatementResultSchema).openapi('SqlStatementResults')

const ExecuteSqlResponseSchema = z
  .object({
    sqlStatementResults: SqlStatementResultsSchema.and(
      z.any().openapi({ description: 'The results of the SQL statement or statements.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The response elements represent the output of a request to run one or more SQL statements.',
    required: [],
  })
  .openapi('ExecuteSqlResponse')

const SqlRecordsSchema = z.array(FieldListSchema).openapi('SqlRecords')

const FormattedSqlRecordsSchema = z.string().openapi('FormattedSqlRecords')

const ExecuteStatementResponseSchema = z
  .object({
    records: SqlRecordsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The records returned by the SQL statement. This field is blank if the <code>formatRecordsAs</code> parameter is set to <code>JSON</code>.',
        }),
    ).exactOptional(),
    columnMetadata: MetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metadata for the columns included in the results. This field is blank if the <code>formatRecordsAs</code> parameter is set to <code>JSON</code>.',
        }),
    ).exactOptional(),
    numberOfRecordsUpdated: RecordsUpdatedSchema.and(
      z.any().openapi({ description: 'The number of records updated by the request.' }),
    ).exactOptional(),
    generatedFields: FieldListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Values for fields generated during a DML request.</p> <pre><code> &lt;note&gt; &lt;p&gt;The &lt;code&gt;generatedFields&lt;/code&gt; data isn't supported by Aurora PostgreSQL. To get the values of generated fields, use the &lt;code&gt;RETURNING&lt;/code&gt; clause. For more information, see &lt;a href=&quot;https://www.postgresql.org/docs/10/dml-returning.html&quot;&gt;Returning Data From Modified Rows&lt;/a&gt; in the PostgreSQL documentation.&lt;/p&gt; &lt;/note&gt; </code></pre>",
        }),
    ).exactOptional(),
    formattedRecords: FormattedSqlRecordsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string value that represents the result set of a <code>SELECT</code> statement in JSON format. This value is only present when the <code>formatRecordsAs</code> parameter is set to <code>JSON</code>.</p> <p>The size limit for this field is currently 10 MB. If the JSON-formatted string representing the result set requires more than 10 MB, the call returns an error.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The response elements represent the output of a request to run a SQL statement against a database.',
    required: [],
  })
  .openapi('ExecuteStatementResponse')

const DecimalReturnTypeSchema = z.enum(['STRING', 'DOUBLE_OR_LONG']).openapi('DecimalReturnType')

const LongReturnTypeSchema = z.enum(['STRING', 'LONG']).openapi('LongReturnType')

const RollbackTransactionResponseSchema = z
  .object({
    transactionStatus: TransactionStatusSchema.and(
      z.any().openapi({ description: 'The status of the rollback operation.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The response elements represent the output of a request to perform a rollback of a transaction.',
    required: [],
  })
  .openapi('RollbackTransactionResponse')

const ArnSchema = z.string().min(11).max(100).openapi('Arn')

const SqlStatementSchema = z.string().min(0).max(65536).openapi('SqlStatement')

const DbNameSchema = z.string().min(0).max(64).openapi('DbName')

const SqlParameterSetsSchema = z.array(SqlParametersListSchema).openapi('SqlParameterSets')

const BatchExecuteStatementRequestSchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.',
        }),
    ),
    secretArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>',
        }),
    ),
    sql: SqlStatementSchema.and(
      z
        .any()
        .openapi({
          description:
            "The SQL statement to run. Don't include a semicolon (;) at the end of the SQL statement.",
        }),
    ),
    database: DbNameSchema.and(
      z.any().openapi({ description: 'The name of the database.' }),
    ).exactOptional(),
    schema: DbNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the database schema.</p> <note> <p>Currently, the <code>schema</code> parameter isn't supported.</p> </note>",
        }),
    ).exactOptional(),
    parameterSets: SqlParameterSetsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The parameter set for the batch operation.</p> <p>The SQL statement is executed as many times as the number of parameter sets provided. To execute a SQL statement with no parameters, use one of the following options:</p> <ul> <li> <p>Specify one or more empty parameter sets.</p> </li> <li> <p>Use the <code>ExecuteStatement</code> operation instead of the <code>BatchExecuteStatement</code> operation.</p> </li> </ul> <note> <p>Array parameters are not supported.</p> </note>',
        }),
    ).exactOptional(),
    transactionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceArn', 'secretArn', 'sql'],
    title: 'BatchExecuteStatementRequest',
    description:
      'The request parameters represent the input of a SQL statement over an array of data.',
  })
  .openapi('BatchExecuteStatementRequest')

const BeginTransactionRequestSchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.',
        }),
    ),
    secretArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The name or ARN of the secret that enables access to the DB cluster.',
        }),
    ),
    database: DbNameSchema.and(
      z.any().openapi({ description: 'The name of the database.' }),
    ).exactOptional(),
    schema: DbNameSchema.and(
      z.any().openapi({ description: 'The name of the database schema.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceArn', 'secretArn'],
    title: 'BeginTransactionRequest',
    description:
      'The request parameters represent the input of a request to start a SQL transaction.',
  })
  .openapi('BeginTransactionRequest')

const CommitTransactionRequestSchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.',
        }),
    ),
    secretArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The name or ARN of the secret that enables access to the DB cluster.',
        }),
    ),
    transactionId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the transaction to end and commit.' }),
    ),
  })
  .openapi({
    required: ['resourceArn', 'secretArn', 'transactionId'],
    title: 'CommitTransactionRequest',
    description: 'The request parameters represent the input of a commit transaction request.',
  })
  .openapi('CommitTransactionRequest')

const ExecuteSqlRequestSchema = z
  .object({
    dbClusterOrInstanceArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the Aurora Serverless DB cluster.' }),
    ),
    awsSecretStoreArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>',
        }),
    ),
    sqlStatements: SqlStatementSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more SQL statements to run on the DB cluster.</p> <p>You can separate SQL statements from each other with a semicolon (;). Any valid SQL statement is permitted, including data definition, data manipulation, and commit statements. </p>',
        }),
    ),
    database: DbNameSchema.and(
      z.any().openapi({ description: 'The name of the database.' }),
    ).exactOptional(),
    schema: DbNameSchema.and(
      z.any().openapi({ description: 'The name of the database schema.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['dbClusterOrInstanceArn', 'awsSecretStoreArn', 'sqlStatements'],
    title: 'ExecuteSqlRequest',
    description:
      'The request parameters represent the input of a request to run one or more SQL statements.',
  })
  .openapi('ExecuteSqlRequest')

const ResultSetOptionsSchema = z
  .object({
    decimalReturnType: DecimalReturnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that indicates how a field of <code>DECIMAL</code> type is represented in the response. The value of <code>STRING</code>, the default, specifies that it is converted to a String value. The value of <code>DOUBLE_OR_LONG</code> specifies that it is converted to a Long value if its scale is 0, or to a Double value otherwise.</p> <note> <p>Conversion to Double or Long can result in roundoff errors due to precision loss. We recommend converting to String, especially when working with currency values.</p> </note>',
        }),
    ).exactOptional(),
    longReturnType: LongReturnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates how a field of <code>LONG</code> type is represented. Allowed values are <code>LONG</code> and <code>STRING</code>. The default is <code>LONG</code>. Specify <code>STRING</code> if the length or precision of numeric values might cause truncation or rounding errors. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Options that control how the result set is returned.', required: [] })
  .openapi('ResultSetOptions')

const RecordsFormatTypeSchema = z.enum(['NONE', 'JSON']).openapi('RecordsFormatType')

const ExecuteStatementRequestSchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.',
        }),
    ),
    secretArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>',
        }),
    ),
    sql: SqlStatementSchema.and(z.any().openapi({ description: 'The SQL statement to run.' })),
    database: DbNameSchema.and(
      z.any().openapi({ description: 'The name of the database.' }),
    ).exactOptional(),
    schema: DbNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the database schema.</p> <note> <p>Currently, the <code>schema</code> parameter isn't supported.</p> </note>",
        }),
    ).exactOptional(),
    parameters: SqlParametersListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The parameters for the SQL statement.</p> <note> <p>Array parameters are not supported.</p> </note>',
        }),
    ).exactOptional(),
    transactionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>",
        }),
    ).exactOptional(),
    includeResultMetadata: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A value that indicates whether to include metadata in the results.',
        }),
    ).exactOptional(),
    continueAfterTimeout: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that indicates whether to continue running the statement after the call times out. By default, the statement stops running when the call times out.</p> <note> <p>For DDL statements, we recommend continuing to run the statement after the call times out. When a DDL statement terminates before it is finished running, it can result in errors and possibly corrupted data structures.</p> </note>',
        }),
    ).exactOptional(),
    resultSetOptions: ResultSetOptionsSchema.and(
      z.any().openapi({ description: 'Options that control how the result set is returned.' }),
    ).exactOptional(),
    formatRecordsAs: RecordsFormatTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that indicates whether to format the result set as a single JSON string. This parameter only applies to <code>SELECT</code> statements and is ignored for other types of statements. Allowed values are <code>NONE</code> and <code>JSON</code>. The default value is <code>NONE</code>. The result is returned in the <code>formattedRecords</code> field.</p> <p>For usage information about the JSON format for result sets, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API</a> in the <i>Amazon Aurora User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceArn', 'secretArn', 'sql'],
    title: 'ExecuteStatementRequest',
    description:
      'The request parameters represent the input of a request to run a SQL statement against a database.',
  })
  .openapi('ExecuteStatementRequest')

const RollbackTransactionRequestSchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.',
        }),
    ),
    secretArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The name or ARN of the secret that enables access to the DB cluster.',
        }),
    ),
    transactionId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the transaction to roll back.' }),
    ),
  })
  .openapi({
    required: ['resourceArn', 'secretArn', 'transactionId'],
    title: 'RollbackTransactionRequest',
    description:
      'The request parameters represent the input of a request to perform a rollback of a transaction.',
  })
  .openapi('RollbackTransactionRequest')

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

export const postBatchExecuteRoute = createRoute({
  method: 'post',
  path: '/BatchExecute',
  description:
    "<p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.</p> <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p> </note>",
  operationId: 'BatchExecuteStatement',
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
              resourceArn: z
                .string()
                .min(11)
                .max(100)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.',
                }),
              secretArn: z
                .string()
                .min(11)
                .max(100)
                .openapi({
                  description:
                    '<p>The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>',
                }),
              sql: z
                .string()
                .min(0)
                .max(65536)
                .openapi({
                  description:
                    "The SQL statement to run. Don't include a semicolon (;) at the end of the SQL statement.",
                }),
              database: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The name of the database.' }),
              schema: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The name of the database schema.</p> <note> <p>Currently, the <code>schema</code> parameter isn't supported.</p> </note>",
                }),
              parameterSets: z
                .array(SqlParametersListSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The parameter set for the batch operation.</p> <p>The SQL statement is executed as many times as the number of parameter sets provided. To execute a SQL statement with no parameters, use one of the following options:</p> <ul> <li> <p>Specify one or more empty parameter sets.</p> </li> <li> <p>Use the <code>ExecuteStatement</code> operation instead of the <code>BatchExecuteStatement</code> operation.</p> </li> </ul> <note> <p>Array parameters are not supported.</p> </note>',
                }),
              transactionId: z
                .string()
                .min(0)
                .max(192)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>",
                }),
            })
            .openapi({ required: ['resourceArn', 'secretArn', 'sql'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchExecuteStatementResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'StatementTimeoutException',
      content: { 'application/json': { schema: StatementTimeoutExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableError',
      content: { 'application/json': { schema: ServiceUnavailableErrorSchema } },
    },
  },
})

export const postBeginTransactionRoute = createRoute({
  method: 'post',
  path: '/BeginTransaction',
  description:
    "<p>Starts a SQL transaction.</p> <note> <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.</p> <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.</p> <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p> </note>",
  operationId: 'BeginTransaction',
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
              resourceArn: z
                .string()
                .min(11)
                .max(100)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.',
                }),
              secretArn: z
                .string()
                .min(11)
                .max(100)
                .openapi({
                  description:
                    'The name or ARN of the secret that enables access to the DB cluster.',
                }),
              database: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The name of the database.' }),
              schema: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The name of the database schema.' }),
            })
            .openapi({ required: ['resourceArn', 'secretArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BeginTransactionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'StatementTimeoutException',
      content: { 'application/json': { schema: StatementTimeoutExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableError',
      content: { 'application/json': { schema: ServiceUnavailableErrorSchema } },
    },
  },
})

export const postCommitTransactionRoute = createRoute({
  method: 'post',
  path: '/CommitTransaction',
  description:
    'Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.',
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
              resourceArn: z
                .string()
                .min(11)
                .max(100)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.',
                }),
              secretArn: z
                .string()
                .min(11)
                .max(100)
                .openapi({
                  description:
                    'The name or ARN of the secret that enables access to the DB cluster.',
                }),
              transactionId: z
                .string()
                .min(0)
                .max(192)
                .openapi({ description: 'The identifier of the transaction to end and commit.' }),
            })
            .openapi({ required: ['resourceArn', 'secretArn', 'transactionId'] }),
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'StatementTimeoutException',
      content: { 'application/json': { schema: StatementTimeoutExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableError',
      content: { 'application/json': { schema: ServiceUnavailableErrorSchema } },
    },
    486: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postExecuteSqlRoute = createRoute({
  method: 'post',
  path: '/ExecuteSql',
  description:
    '<p>Runs one or more SQL statements.</p> <note> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </note>',
  operationId: 'ExecuteSql',
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
              dbClusterOrInstanceArn: z
                .string()
                .min(11)
                .max(100)
                .openapi({ description: 'The ARN of the Aurora Serverless DB cluster.' }),
              awsSecretStoreArn: z
                .string()
                .min(11)
                .max(100)
                .openapi({
                  description:
                    '<p>The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>',
                }),
              sqlStatements: z
                .string()
                .min(0)
                .max(65536)
                .openapi({
                  description:
                    '<p>One or more SQL statements to run on the DB cluster.</p> <p>You can separate SQL statements from each other with a semicolon (;). Any valid SQL statement is permitted, including data definition, data manipulation, and commit statements. </p>',
                }),
              database: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The name of the database.' }),
              schema: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The name of the database schema.' }),
            })
            .openapi({
              required: ['dbClusterOrInstanceArn', 'awsSecretStoreArn', 'sqlStatements'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExecuteSqlResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableError',
      content: { 'application/json': { schema: ServiceUnavailableErrorSchema } },
    },
  },
  deprecated: true,
})

export const postExecuteRoute = createRoute({
  method: 'post',
  path: '/Execute',
  description:
    "<p>Runs a SQL statement against a database.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p> </note>",
  operationId: 'ExecuteStatement',
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
              resourceArn: z
                .string()
                .min(11)
                .max(100)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.',
                }),
              secretArn: z
                .string()
                .min(11)
                .max(100)
                .openapi({
                  description:
                    '<p>The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>',
                }),
              sql: z
                .string()
                .min(0)
                .max(65536)
                .openapi({ description: 'The SQL statement to run.' }),
              database: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The name of the database.' }),
              schema: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The name of the database schema.</p> <note> <p>Currently, the <code>schema</code> parameter isn't supported.</p> </note>",
                }),
              parameters: z
                .array(SqlParameterSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The parameters for the SQL statement.</p> <note> <p>Array parameters are not supported.</p> </note>',
                }),
              transactionId: z
                .string()
                .min(0)
                .max(192)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>",
                }),
              includeResultMetadata: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'A value that indicates whether to include metadata in the results.',
                }),
              continueAfterTimeout: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>A value that indicates whether to continue running the statement after the call times out. By default, the statement stops running when the call times out.</p> <note> <p>For DDL statements, we recommend continuing to run the statement after the call times out. When a DDL statement terminates before it is finished running, it can result in errors and possibly corrupted data structures.</p> </note>',
                }),
              resultSetOptions: z
                .object({
                  decimalReturnType: DecimalReturnTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A value that indicates how a field of <code>DECIMAL</code> type is represented in the response. The value of <code>STRING</code>, the default, specifies that it is converted to a String value. The value of <code>DOUBLE_OR_LONG</code> specifies that it is converted to a Long value if its scale is 0, or to a Double value otherwise.</p> <note> <p>Conversion to Double or Long can result in roundoff errors due to precision loss. We recommend converting to String, especially when working with currency values.</p> </note>',
                      }),
                  ).exactOptional(),
                  longReturnType: LongReturnTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A value that indicates how a field of <code>LONG</code> type is represented. Allowed values are <code>LONG</code> and <code>STRING</code>. The default is <code>LONG</code>. Specify <code>STRING</code> if the length or precision of numeric values might cause truncation or rounding errors. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Options that control how the result set is returned.',
                  required: [],
                }),
              formatRecordsAs: z
                .enum(['NONE', 'JSON'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>A value that indicates whether to format the result set as a single JSON string. This parameter only applies to <code>SELECT</code> statements and is ignored for other types of statements. Allowed values are <code>NONE</code> and <code>JSON</code>. The default value is <code>NONE</code>. The result is returned in the <code>formattedRecords</code> field.</p> <p>For usage information about the JSON format for result sets, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API</a> in the <i>Amazon Aurora User Guide</i>.</p>',
                }),
            })
            .openapi({ required: ['resourceArn', 'secretArn', 'sql'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExecuteStatementResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'StatementTimeoutException',
      content: { 'application/json': { schema: StatementTimeoutExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableError',
      content: { 'application/json': { schema: ServiceUnavailableErrorSchema } },
    },
  },
})

export const postRollbackTransactionRoute = createRoute({
  method: 'post',
  path: '/RollbackTransaction',
  description:
    'Performs a rollback of a transaction. Rolling back a transaction cancels its changes.',
  operationId: 'RollbackTransaction',
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
              resourceArn: z
                .string()
                .min(11)
                .max(100)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.',
                }),
              secretArn: z
                .string()
                .min(11)
                .max(100)
                .openapi({
                  description:
                    'The name or ARN of the secret that enables access to the DB cluster.',
                }),
              transactionId: z
                .string()
                .min(0)
                .max(192)
                .openapi({ description: 'The identifier of the transaction to roll back.' }),
            })
            .openapi({ required: ['resourceArn', 'secretArn', 'transactionId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RollbackTransactionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'StatementTimeoutException',
      content: { 'application/json': { schema: StatementTimeoutExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableError',
      content: { 'application/json': { schema: ServiceUnavailableErrorSchema } },
    },
    486: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})
