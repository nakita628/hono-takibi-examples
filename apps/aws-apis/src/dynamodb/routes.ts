import { createRoute, z } from '@hono/zod-openapi'

type StringAttributeValueType = string

const StringAttributeValueSchema: z.ZodType<StringAttributeValueType> = z
  .string()
  .openapi('StringAttributeValue')

type NumberAttributeValueType = string

const NumberAttributeValueSchema: z.ZodType<NumberAttributeValueType> = z
  .string()
  .openapi('NumberAttributeValue')

type BinaryAttributeValueType = string

const BinaryAttributeValueSchema: z.ZodType<BinaryAttributeValueType> = z
  .string()
  .openapi('BinaryAttributeValue')

type StringSetAttributeValueType = z.infer<typeof StringAttributeValueSchema>[]

const StringSetAttributeValueSchema: z.ZodType<StringSetAttributeValueType> = z
  .array(StringAttributeValueSchema)
  .openapi('StringSetAttributeValue')

type NumberSetAttributeValueType = z.infer<typeof NumberAttributeValueSchema>[]

const NumberSetAttributeValueSchema: z.ZodType<NumberSetAttributeValueType> = z
  .array(NumberAttributeValueSchema)
  .openapi('NumberSetAttributeValue')

type BinarySetAttributeValueType = z.infer<typeof BinaryAttributeValueSchema>[]

const BinarySetAttributeValueSchema: z.ZodType<BinarySetAttributeValueType> = z
  .array(BinaryAttributeValueSchema)
  .openapi('BinarySetAttributeValue')

const MapAttributeValueSchema: z.ZodType<MapAttributeValueType> = z
  .lazy(() => z.record(z.string(), AttributeValueSchema))
  .openapi('MapAttributeValue')

const ListAttributeValueSchema: z.ZodType<ListAttributeValueType> = z
  .lazy(() => z.array(AttributeValueSchema))
  .openapi('ListAttributeValue')

type NullAttributeValueType = boolean

const NullAttributeValueSchema: z.ZodType<NullAttributeValueType> = z
  .boolean()
  .openapi('NullAttributeValue')

type BooleanAttributeValueType = boolean

const BooleanAttributeValueSchema: z.ZodType<BooleanAttributeValueType> = z
  .boolean()
  .openapi('BooleanAttributeValue')

type AttributeValueType = {
  S?: z.infer<typeof StringAttributeValueSchema> & { [key: string]: unknown }
  N?: z.infer<typeof NumberAttributeValueSchema> & { [key: string]: unknown }
  B?: z.infer<typeof BinaryAttributeValueSchema> & { [key: string]: unknown }
  SS?: z.infer<typeof StringSetAttributeValueSchema> & { [key: string]: unknown }
  NS?: z.infer<typeof NumberSetAttributeValueSchema> & { [key: string]: unknown }
  BS?: z.infer<typeof BinarySetAttributeValueSchema> & { [key: string]: unknown }
  M?: z.infer<typeof MapAttributeValueSchema> & { [key: string]: unknown }
  L?: z.infer<typeof ListAttributeValueSchema> & { [key: string]: unknown }
  NULL?: z.infer<typeof NullAttributeValueSchema> & { [key: string]: unknown }
  BOOL?: z.infer<typeof BooleanAttributeValueSchema> & { [key: string]: unknown }
}

const AttributeValueSchema: z.ZodType<AttributeValueType> = z
  .lazy(() =>
    z
      .object({
        S: StringAttributeValueSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>An attribute of type String. For example:</p> <p> <code>"S": "Hello"</code> </p>',
            }),
        ).exactOptional(),
        N: NumberAttributeValueSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>An attribute of type Number. For example:</p> <p> <code>"N": "123.45"</code> </p> <p>Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.</p>',
            }),
        ).exactOptional(),
        B: BinaryAttributeValueSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>An attribute of type Binary. For example:</p> <p> <code>"B": "dGhpcyB0ZXh0IGlzIGJhc2U2NC1lbmNvZGVk"</code> </p>',
            }),
        ).exactOptional(),
        SS: StringSetAttributeValueSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>An attribute of type String Set. For example:</p> <p> <code>"SS": ["Giraffe", "Hippo" ,"Zebra"]</code> </p>',
            }),
        ).exactOptional(),
        NS: NumberSetAttributeValueSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>An attribute of type Number Set. For example:</p> <p> <code>"NS": ["42.2", "-19", "7.5", "3.14"]</code> </p> <p>Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.</p>',
            }),
        ).exactOptional(),
        BS: BinarySetAttributeValueSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>An attribute of type Binary Set. For example:</p> <p> <code>"BS": ["U3Vubnk=", "UmFpbnk=", "U25vd3k="]</code> </p>',
            }),
        ).exactOptional(),
        M: MapAttributeValueSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>An attribute of type Map. For example:</p> <p> <code>"M": {"Name": {"S": "Joe"}, "Age": {"N": "35"}}</code> </p>',
            }),
        ).exactOptional(),
        L: ListAttributeValueSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>An attribute of type List. For example:</p> <p> <code>"L": [ {"S": "Cookies"} , {"S": "Coffee"}, {"N": "3.14159"}]</code> </p>',
            }),
        ).exactOptional(),
        NULL: NullAttributeValueSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>An attribute of type Null. For example:</p> <p> <code>"NULL": true</code> </p>',
            }),
        ).exactOptional(),
        BOOL: BooleanAttributeValueSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>An attribute of type Boolean. For example:</p> <p> <code>"BOOL": true</code> </p>',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          '<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        required: [],
      }),
  )
  .openapi('AttributeValue')

type MapAttributeValueType = { [key: string]: z.infer<typeof AttributeValueSchema> }

type ListAttributeValueType = z.infer<typeof AttributeValueSchema>[]

const BatchStatementErrorCodeEnumSchema = z
  .enum([
    'ConditionalCheckFailed',
    'ItemCollectionSizeLimitExceeded',
    'RequestLimitExceeded',
    'ValidationError',
    'ProvisionedThroughputExceeded',
    'TransactionConflict',
    'ThrottlingError',
    'InternalServerError',
    'ResourceNotFound',
    'AccessDenied',
    'DuplicateItem',
  ])
  .openapi('BatchStatementErrorCodeEnum')

const StringSchema = z.string().openapi('String')

const AttributeMapSchema = z.record(z.string(), AttributeValueSchema).openapi('AttributeMap')

const BatchStatementErrorSchema = z
  .object({
    Code: BatchStatementErrorCodeEnumSchema.and(
      z
        .any()
        .openapi({
          description: ' The error code associated with the failed PartiQL batch statement. ',
        }),
    ).exactOptional(),
    Message: StringSchema.and(
      z
        .any()
        .openapi({
          description: ' The error message associated with the PartiQL batch response. ',
        }),
    ).exactOptional(),
    Item: AttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The item which caused the condition check to fail. This will be set if ReturnValuesOnConditionCheckFailure is specified as <code>ALL_OLD</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' An error associated with a statement in a PartiQL batch that was run. ',
    required: [],
  })
  .openapi('BatchStatementError')

const TableNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(3)
  .max(255)
  .openapi('TableName')

const BatchStatementResponseSchema = z
  .object({
    Error: BatchStatementErrorSchema.and(
      z
        .any()
        .openapi({ description: ' The error associated with a failed PartiQL batch statement. ' }),
    ).exactOptional(),
    TableName: TableNameSchema.and(
      z
        .any()
        .openapi({
          description: ' The table name associated with a failed PartiQL batch statement. ',
        }),
    ).exactOptional(),
    Item: AttributeMapSchema.and(
      z
        .any()
        .openapi({ description: ' A DynamoDB item associated with a BatchStatementResponse ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' A PartiQL batch statement response.. ', required: [] })
  .openapi('BatchStatementResponse')

const PartiQLBatchResponseSchema = z
  .array(BatchStatementResponseSchema)
  .openapi('PartiQLBatchResponse')

const ConsumedCapacityUnitsSchema = z.float64().openapi('ConsumedCapacityUnits')

const CapacitySchema = z
  .object({
    ReadCapacityUnits: ConsumedCapacityUnitsSchema.and(
      z
        .any()
        .openapi({
          description: 'The total number of read capacity units consumed on a table or an index.',
        }),
    ).exactOptional(),
    WriteCapacityUnits: ConsumedCapacityUnitsSchema.and(
      z
        .any()
        .openapi({
          description: 'The total number of write capacity units consumed on a table or an index.',
        }),
    ).exactOptional(),
    CapacityUnits: ConsumedCapacityUnitsSchema.and(
      z
        .any()
        .openapi({
          description: 'The total number of capacity units consumed on a table or an index.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the amount of provisioned throughput capacity consumed on a table or an index.',
    required: [],
  })
  .openapi('Capacity')

const SecondaryIndexesCapacityMapSchema = z
  .record(z.string(), CapacitySchema)
  .openapi('SecondaryIndexesCapacityMap')

const ConsumedCapacitySchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table that was affected by the operation.' }),
    ).exactOptional(),
    CapacityUnits: ConsumedCapacityUnitsSchema.and(
      z
        .any()
        .openapi({ description: 'The total number of capacity units consumed by the operation.' }),
    ).exactOptional(),
    ReadCapacityUnits: ConsumedCapacityUnitsSchema.and(
      z
        .any()
        .openapi({
          description: 'The total number of read capacity units consumed by the operation.',
        }),
    ).exactOptional(),
    WriteCapacityUnits: ConsumedCapacityUnitsSchema.and(
      z
        .any()
        .openapi({
          description: 'The total number of write capacity units consumed by the operation.',
        }),
    ).exactOptional(),
    Table: CapacitySchema.and(
      z
        .any()
        .openapi({
          description: 'The amount of throughput consumed on the table affected by the operation.',
        }),
    ).exactOptional(),
    LocalSecondaryIndexes: SecondaryIndexesCapacityMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of throughput consumed on each local index affected by the operation.',
        }),
    ).exactOptional(),
    GlobalSecondaryIndexes: SecondaryIndexesCapacityMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of throughput consumed on each global index affected by the operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
    required: [],
  })
  .openapi('ConsumedCapacity')

const ConsumedCapacityMultipleSchema = z
  .array(ConsumedCapacitySchema)
  .openapi('ConsumedCapacityMultiple')

const BatchExecuteStatementOutputSchema = z
  .object({
    Responses: PartiQLBatchResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The response to each PartiQL statement in the batch. The values of the list are ordered according to the ordering of the request statements.',
        }),
    ).exactOptional(),
    ConsumedCapacity: ConsumedCapacityMultipleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The capacity units consumed by the entire operation. The values of the list are ordered according to the ordering of the statements.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchExecuteStatementOutput')

const PartiQLStatementSchema = z.string().min(1).max(8192).openapi('PartiQLStatement')

const PreparedStatementParametersSchema = z
  .array(AttributeValueSchema)
  .min(1)
  .openapi('PreparedStatementParameters')

const ConsistentReadSchema = z.boolean().openapi('ConsistentRead')

const ReturnValuesOnConditionCheckFailureSchema = z
  .enum(['ALL_OLD', 'NONE'])
  .openapi('ReturnValuesOnConditionCheckFailure')

const BatchStatementRequestSchema = z
  .object({
    Statement: PartiQLStatementSchema.and(
      z.any().openapi({ description: ' A valid PartiQL statement. ' }),
    ),
    Parameters: PreparedStatementParametersSchema.and(
      z
        .any()
        .openapi({
          description: ' The parameters associated with a PartiQL statement in the batch request. ',
        }),
    ).exactOptional(),
    ConsistentRead: ConsistentReadSchema.and(
      z.any().openapi({ description: ' The read consistency of the PartiQL batch request. ' }),
    ).exactOptional(),
    ReturnValuesOnConditionCheckFailure: ReturnValuesOnConditionCheckFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter that returns the item attributes for a PartiQL batch request operation that failed a condition check.</p> <p>There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Statement'], description: ' A PartiQL batch statement request. ' })
  .openapi('BatchStatementRequest')

const PartiQLBatchRequestSchema = z
  .array(BatchStatementRequestSchema)
  .min(1)
  .max(25)
  .openapi('PartiQLBatchRequest')

const ReturnConsumedCapacitySchema = z
  .enum(['INDEXES', 'TOTAL', 'NONE'])
  .openapi({
    description:
      '<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>',
  })
  .openapi('ReturnConsumedCapacity')

const BatchExecuteStatementInputSchema = z
  .object({
    Statements: PartiQLBatchRequestSchema.and(
      z
        .any()
        .openapi({ description: 'The list of PartiQL statements representing the batch to run.' }),
    ),
    ReturnConsumedCapacity: ReturnConsumedCapacitySchema.exactOptional(),
  })
  .openapi({ required: ['Statements'], title: 'BatchExecuteStatementInput' })
  .openapi('BatchExecuteStatementInput')

const RequestLimitExceededSchema = z.any().openapi('RequestLimitExceeded')

const InternalServerErrorSchema = z.any().openapi('InternalServerError')

const ItemListSchema = z.array(AttributeMapSchema).openapi('ItemList')

const BatchGetResponseMapSchema = z
  .record(z.string(), ItemListSchema)
  .openapi('BatchGetResponseMap')

const KeySchema = z.record(z.string(), AttributeValueSchema).openapi('Key')

const KeyListSchema = z.array(KeySchema).min(1).max(100).openapi('KeyList')

const AttributeNameSchema = z.string().max(65535).openapi('AttributeName')

const AttributeNameListSchema = z.array(AttributeNameSchema).min(1).openapi('AttributeNameList')

const ProjectionExpressionSchema = z.string().openapi('ProjectionExpression')

const ExpressionAttributeNameMapSchema = z
  .record(z.string(), AttributeNameSchema)
  .openapi('ExpressionAttributeNameMap')

const KeysAndAttributesSchema = z
  .object({
    Keys: KeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The primary key attribute values that define the items and the attributes associated with the items.',
        }),
    ),
    AttributesToGet: AttributeNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>ProjectionExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.html">Legacy Conditional Parameters</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ConsistentRead: ConsistentReadSchema.and(
      z
        .any()
        .openapi({
          description:
            'The consistency of a read operation. If set to <code>true</code>, then a strongly consistent read is used; otherwise, an eventually consistent read is used.',
        }),
    ).exactOptional(),
    ProjectionExpression: ProjectionExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the <code>ProjectionExpression</code> must be separated by commas.</p> <p>If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Accessing Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ExpressionAttributeNames: ExpressionAttributeNameMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more substitution tokens for attribute names in an expression. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p> </li> <li> <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p> </li> <li> <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p> </li> </ul> <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p> <ul> <li> <p> <code>Percentile</code> </p> </li> </ul> <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>). To work around this, you could specify the following for <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p> <code>{"#P":"Percentile"}</code> </p> </li> </ul> <p>You could then use this substitution in an expression, as in this example:</p> <ul> <li> <p> <code>#P = :val</code> </p> </li> </ul> <note> <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p> </note> <p>For more information on expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Accessing Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Keys'],
    description:
      '<p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p> <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide <i>both</i> the partition key and the sort key.</p>',
  })
  .openapi('KeysAndAttributes')

const BatchGetRequestMapSchema = z
  .record(z.string(), KeysAndAttributesSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('BatchGetRequestMap')

const BatchGetItemOutputSchema = z
  .object({
    Responses: BatchGetResponseMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of table name to a list of items. Each object in <code>Responses</code> consists of a table name, along with a map of attribute data consisting of the data type and attribute value.',
        }),
    ).exactOptional(),
    UnprocessedKeys: BatchGetRequestMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of tables and their respective keys that were not processed with the current response. The <code>UnprocessedKeys</code> value is in the same form as <code>RequestItems</code>, so the value can be provided directly to a subsequent <code>BatchGetItem</code> operation. For more information, see <code>RequestItems</code> in the Request Parameters section.</p> <p>Each element consists of:</p> <ul> <li> <p> <code>Keys</code> - An array of primary key attribute values that define specific items in the table.</p> </li> <li> <p> <code>ProjectionExpression</code> - One or more attributes to be retrieved from the table or index. By default, all attributes are returned. If a requested attribute is not found, it does not appear in the result.</p> </li> <li> <p> <code>ConsistentRead</code> - The consistency of a read operation. If set to <code>true</code>, then a strongly consistent read is used; otherwise, an eventually consistent read is used.</p> </li> </ul> <p>If there are no unprocessed keys remaining, the response contains an empty <code>UnprocessedKeys</code> map.</p>',
        }),
    ).exactOptional(),
    ConsumedCapacity: ConsumedCapacityMultipleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The read capacity units consumed by the entire <code>BatchGetItem</code> operation.</p> <p>Each element consists of:</p> <ul> <li> <p> <code>TableName</code> - The table that consumed the provisioned throughput.</p> </li> <li> <p> <code>CapacityUnits</code> - The total number of capacity units consumed.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Responses: {
        Music: [
          { AlbumTitle: { S: 'Somewhat Famous' } },
          { AlbumTitle: { S: 'Blue Sky Blues' } },
          { AlbumTitle: { S: 'Louder Than Ever' } },
        ],
      },
    },
    description: 'Represents the output of a <code>BatchGetItem</code> operation.',
    required: [],
  })
  .openapi('BatchGetItemOutput')

const BatchGetItemInputSchema = z
  .object({
    RequestItems: BatchGetRequestMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of one or more table names and, for each table, a map that describes one or more items to retrieve from that table. Each table name can be used only once per <code>BatchGetItem</code> request.</p> <p>Each element in the map of items to retrieve consists of the following:</p> <ul> <li> <p> <code>ConsistentRead</code> - If <code>true</code>, a strongly consistent read is used; if <code>false</code> (the default), an eventually consistent read is used.</p> </li> <li> <p> <code>ExpressionAttributeNames</code> - One or more substitution tokens for attribute names in the <code>ProjectionExpression</code> parameter. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p> </li> <li> <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p> </li> <li> <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p> </li> </ul> <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p> <ul> <li> <p> <code>Percentile</code> </p> </li> </ul> <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>). To work around this, you could specify the following for <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p> <code>{"#P":"Percentile"}</code> </p> </li> </ul> <p>You could then use this substitution in an expression, as in this example:</p> <ul> <li> <p> <code>#P = :val</code> </p> </li> </ul> <note> <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p> </note> <p>For more information about expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Accessing Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </li> <li> <p> <code>Keys</code> - An array of primary key attribute values that define specific items in the table. For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key value. For a composite key, you must provide <i>both</i> the partition key value and the sort key value.</p> </li> <li> <p> <code>ProjectionExpression</code> - A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas.</p> <p>If no attribute names are specified, then all attributes are returned. If any of the requested attributes are not found, they do not appear in the result.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Accessing Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </li> <li> <p> <code>AttributesToGet</code> - This is a legacy parameter. Use <code>ProjectionExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributesToGet.html">AttributesToGet</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> </li> </ul>',
        }),
    ),
    ReturnConsumedCapacity: ReturnConsumedCapacitySchema.exactOptional(),
  })
  .openapi({
    required: ['RequestItems'],
    title: 'BatchGetItemInput',
    description: 'Represents the input of a <code>BatchGetItem</code> operation.',
  })
  .openapi('BatchGetItemInput')

const ProvisionedThroughputExceededExceptionSchema = z
  .any()
  .openapi('ProvisionedThroughputExceededException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const PutItemInputAttributeMapSchema = z
  .record(z.string(), AttributeValueSchema)
  .openapi('PutItemInputAttributeMap')

const PutRequestSchema = z
  .object({
    Item: PutItemInputAttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "A map of attribute name to attribute values, representing the primary key of an item to be processed by <code>PutItem</code>. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema. If any attributes are present in the item that are part of an index key schema for the table, their types must match the index key schema.",
        }),
    ),
  })
  .openapi({
    required: ['Item'],
    description: 'Represents a request to perform a <code>PutItem</code> operation on an item.',
  })
  .openapi('PutRequest')

const DeleteRequestSchema = z
  .object({
    Key: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            "A map of attribute name to attribute values, representing the primary key of the item to delete. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema.",
        }),
    ),
  })
  .openapi({
    required: ['Key'],
    description: 'Represents a request to perform a <code>DeleteItem</code> operation on an item.',
  })
  .openapi('DeleteRequest')

const WriteRequestSchema = z
  .object({
    PutRequest: PutRequestSchema.and(
      z.any().openapi({ description: 'A request to perform a <code>PutItem</code> operation.' }),
    ).exactOptional(),
    DeleteRequest: DeleteRequestSchema.and(
      z.any().openapi({ description: 'A request to perform a <code>DeleteItem</code> operation.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents an operation to perform - either <code>DeleteItem</code> or <code>PutItem</code>. You can only request one of these operations, not both, in a single <code>WriteRequest</code>. If you do need to perform both of these operations, you need to provide two separate <code>WriteRequest</code> objects.',
    required: [],
  })
  .openapi('WriteRequest')

const WriteRequestsSchema = z.array(WriteRequestSchema).min(1).max(25).openapi('WriteRequests')

const BatchWriteItemRequestMapSchema = z
  .record(z.string(), WriteRequestsSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 25)
  .openapi('BatchWriteItemRequestMap')

const ItemCollectionKeyAttributeMapSchema = z
  .record(z.string(), AttributeValueSchema)
  .openapi('ItemCollectionKeyAttributeMap')

const ItemCollectionSizeEstimateBoundSchema = z.float64().openapi('ItemCollectionSizeEstimateBound')

const ItemCollectionSizeEstimateRangeSchema = z
  .array(ItemCollectionSizeEstimateBoundSchema)
  .openapi('ItemCollectionSizeEstimateRange')

const ItemCollectionMetricsSchema = z
  .object({
    ItemCollectionKey: ItemCollectionKeyAttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The partition key value of the item collection. This value is the same as the partition key value of the item.',
        }),
    ).exactOptional(),
    SizeEstimateRangeGB: ItemCollectionSizeEstimateRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit.</p> <p>The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response.',
    required: [],
  })
  .openapi('ItemCollectionMetrics')

const ItemCollectionMetricsMultipleSchema = z
  .array(ItemCollectionMetricsSchema)
  .openapi('ItemCollectionMetricsMultiple')

const ItemCollectionMetricsPerTableSchema = z
  .record(z.string(), ItemCollectionMetricsMultipleSchema)
  .openapi('ItemCollectionMetricsPerTable')

const BatchWriteItemOutputSchema = z
  .object({
    UnprocessedItems: BatchWriteItemRequestMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of tables and requests against those tables that were not processed. The <code>UnprocessedItems</code> value is in the same form as <code>RequestItems</code>, so you can provide this value directly to a subsequent <code>BatchWriteItem</code> operation. For more information, see <code>RequestItems</code> in the Request Parameters section.</p> <p>Each <code>UnprocessedItems</code> entry consists of a table name and, for that table, a list of operations to perform (<code>DeleteRequest</code> or <code>PutRequest</code>).</p> <ul> <li> <p> <code>DeleteRequest</code> - Perform a <code>DeleteItem</code> operation on the specified item. The item to be deleted is identified by a <code>Key</code> subelement:</p> <ul> <li> <p> <code>Key</code> - A map of primary key attribute values that uniquely identify the item. Each entry in this map consists of an attribute name and an attribute value.</p> </li> </ul> </li> <li> <p> <code>PutRequest</code> - Perform a <code>PutItem</code> operation on the specified item. The item to be put is identified by an <code>Item</code> subelement:</p> <ul> <li> <p> <code>Item</code> - A map of attributes and their values. Each entry in this map consists of an attribute name and an attribute value. Attribute values must not be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests that contain empty values will be rejected with a <code>ValidationException</code> exception.</p> <p>If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition.</p> </li> </ul> </li> </ul> <p>If there are no unprocessed items remaining, the response contains an empty <code>UnprocessedItems</code> map.</p>",
        }),
    ).exactOptional(),
    ItemCollectionMetrics: ItemCollectionMetricsPerTableSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of tables that were processed by <code>BatchWriteItem</code> and, for each table, information about any item collections that were affected by individual <code>DeleteItem</code> or <code>PutItem</code> operations.</p> <p>Each entry consists of the following subelements:</p> <ul> <li> <p> <code>ItemCollectionKey</code> - The partition key value of the item collection. This is the same as the partition key value of the item.</p> </li> <li> <p> <code>SizeEstimateRangeGB</code> - An estimate of item collection size, expressed in GB. This is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on the table. Use this estimate to measure whether a local secondary index is approaching its size limit.</p> <p>The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ConsumedCapacity: ConsumedCapacityMultipleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The capacity units consumed by the entire <code>BatchWriteItem</code> operation.</p> <p>Each element consists of:</p> <ul> <li> <p> <code>TableName</code> - The table that consumed the provisioned throughput.</p> </li> <li> <p> <code>CapacityUnits</code> - The total number of capacity units consumed.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {},
    description: 'Represents the output of a <code>BatchWriteItem</code> operation.',
    required: [],
  })
  .openapi('BatchWriteItemOutput')

const ReturnItemCollectionMetricsSchema = z
  .enum(['SIZE', 'NONE'])
  .openapi('ReturnItemCollectionMetrics')

const BatchWriteItemInputSchema = z
  .object({
    RequestItems: BatchWriteItemRequestMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of one or more table names and, for each table, a list of operations to be performed (<code>DeleteRequest</code> or <code>PutRequest</code>). Each element in the map consists of the following:</p> <ul> <li> <p> <code>DeleteRequest</code> - Perform a <code>DeleteItem</code> operation on the specified item. The item to be deleted is identified by a <code>Key</code> subelement:</p> <ul> <li> <p> <code>Key</code> - A map of primary key attribute values that uniquely identify the item. Each entry in this map consists of an attribute name and an attribute value. For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for <i>both</i> the partition key and the sort key.</p> </li> </ul> </li> <li> <p> <code>PutRequest</code> - Perform a <code>PutItem</code> operation on the specified item. The item to be put is identified by an <code>Item</code> subelement:</p> <ul> <li> <p> <code>Item</code> - A map of attributes and their values. Each entry in this map consists of an attribute name and an attribute value. Attribute values must not be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests that contain empty values are rejected with a <code>ValidationException</code> exception.</p> <p>If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition.</p> </li> </ul> </li> </ul>",
        }),
    ),
    ReturnConsumedCapacity: ReturnConsumedCapacitySchema.exactOptional(),
    ReturnItemCollectionMetrics: ReturnItemCollectionMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether item collection metrics are returned. If set to <code>SIZE</code>, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to <code>NONE</code> (the default), no statistics are returned.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RequestItems'],
    title: 'BatchWriteItemInput',
    description: 'Represents the input of a <code>BatchWriteItem</code> operation.',
  })
  .openapi('BatchWriteItemInput')

const ItemCollectionSizeLimitExceededExceptionSchema = z
  .any()
  .openapi('ItemCollectionSizeLimitExceededException')

const BackupArnSchema = z.string().min(37).max(1024).openapi('BackupArn')

const BackupNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(3)
  .max(255)
  .openapi('BackupName')

const BackupSizeBytesSchema = z.int().min(0).openapi('BackupSizeBytes')

const BackupStatusSchema = z.enum(['CREATING', 'DELETED', 'AVAILABLE']).openapi('BackupStatus')

const BackupTypeSchema = z.enum(['USER', 'SYSTEM', 'AWS_BACKUP']).openapi('BackupType')

const BackupCreationDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('BackupCreationDateTime')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const BackupDetailsSchema = z
  .object({
    BackupArn: BackupArnSchema.and(
      z.any().openapi({ description: 'ARN associated with the backup.' }),
    ),
    BackupName: BackupNameSchema.and(
      z.any().openapi({ description: 'Name of the requested backup.' }),
    ),
    BackupSizeBytes: BackupSizeBytesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Size of the backup in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.',
        }),
    ).exactOptional(),
    BackupStatus: BackupStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Backup can be in one of the following states: CREATING, ACTIVE, DELETED. ',
        }),
    ),
    BackupType: BackupTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>BackupType:</p> <ul> <li> <p> <code>USER</code> - You create and manage these using the on-demand backup feature.</p> </li> <li> <p> <code>SYSTEM</code> - If you delete a table with point-in-time recovery enabled, a <code>SYSTEM</code> backup is automatically created and is retained for 35 days (at no additional cost). System backups allow you to restore the deleted table to the state it was in just before the point of deletion. </p> </li> <li> <p> <code>AWS_BACKUP</code> - On-demand backup created by you from Backup service.</p> </li> </ul>',
        }),
    ),
    BackupCreationDateTime: BackupCreationDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time at which the backup was created. This is the request time of the backup. ',
        }),
    ),
    BackupExpiryDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time at which the automatic on-demand backup created by DynamoDB will expire. This <code>SYSTEM</code> on-demand backup expires automatically 35 days after its creation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BackupArn', 'BackupName', 'BackupStatus', 'BackupType', 'BackupCreationDateTime'],
    description: 'Contains the details of the backup created for the table.',
  })
  .openapi('BackupDetails')

const CreateBackupOutputSchema = z
  .object({
    BackupDetails: BackupDetailsSchema.and(
      z.any().openapi({ description: 'Contains the details of the backup created for the table.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBackupOutput')

const CreateBackupInputSchema = z
  .object({
    TableName: TableNameSchema.and(z.any().openapi({ description: 'The name of the table.' })),
    BackupName: BackupNameSchema.and(
      z.any().openapi({ description: 'Specified name for the backup.' }),
    ),
  })
  .openapi({ required: ['TableName', 'BackupName'], title: 'CreateBackupInput' })
  .openapi('CreateBackupInput')

const TableNotFoundExceptionSchema = z.any().openapi('TableNotFoundException')

const TableInUseExceptionSchema = z.any().openapi('TableInUseException')

const ContinuousBackupsUnavailableExceptionSchema = z
  .any()
  .openapi('ContinuousBackupsUnavailableException')

const BackupInUseExceptionSchema = z.any().openapi('BackupInUseException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const RegionNameSchema = z.string().openapi('RegionName')

const ReplicaStatusSchema = z
  .enum([
    'CREATING',
    'CREATION_FAILED',
    'UPDATING',
    'DELETING',
    'ACTIVE',
    'REGION_DISABLED',
    'INACCESSIBLE_ENCRYPTION_CREDENTIALS',
  ])
  .openapi('ReplicaStatus')

const ReplicaStatusDescriptionSchema = z.string().openapi('ReplicaStatusDescription')

const ReplicaStatusPercentProgressSchema = z.string().openapi('ReplicaStatusPercentProgress')

const KMSMasterKeyIdSchema = z.string().openapi('KMSMasterKeyId')

const PositiveLongObjectSchema = z.int().min(1).openapi('PositiveLongObject')

const ProvisionedThroughputOverrideSchema = z
  .object({
    ReadCapacityUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            "Replica-specific read capacity units. If not specified, uses the source table's read capacity settings.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings.",
    required: [],
  })
  .openapi('ProvisionedThroughputOverride')

const IndexNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(3)
  .max(255)
  .openapi('IndexName')

const ReplicaGlobalSecondaryIndexDescriptionSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'The name of the global secondary index.' }),
    ).exactOptional(),
    ProvisionedThroughputOverride: ProvisionedThroughputOverrideSchema.and(
      z
        .any()
        .openapi({
          description: "If not described, uses the source table GSI's read capacity settings.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the properties of a replica global secondary index.',
    required: [],
  })
  .openapi('ReplicaGlobalSecondaryIndexDescription')

const ReplicaGlobalSecondaryIndexDescriptionListSchema = z
  .array(ReplicaGlobalSecondaryIndexDescriptionSchema)
  .openapi('ReplicaGlobalSecondaryIndexDescriptionList')

const TableClassSchema = z.enum(['STANDARD', 'STANDARD_INFREQUENT_ACCESS']).openapi('TableClass')

const TableClassSummarySchema = z
  .object({
    TableClass: TableClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'The table class of the specified table. Valid values are <code>STANDARD</code> and <code>STANDARD_INFREQUENT_ACCESS</code>.',
        }),
    ).exactOptional(),
    LastUpdateDateTime: DateSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time at which the table class was last updated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains details of the table class.', required: [] })
  .openapi('TableClassSummary')

const ReplicaDescriptionSchema = z
  .object({
    RegionName: RegionNameSchema.and(
      z.any().openapi({ description: 'The name of the Region.' }),
    ).exactOptional(),
    ReplicaStatus: ReplicaStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current state of the replica:</p> <ul> <li> <p> <code>CREATING</code> - The replica is being created.</p> </li> <li> <p> <code>UPDATING</code> - The replica is being updated.</p> </li> <li> <p> <code>DELETING</code> - The replica is being deleted.</p> </li> <li> <p> <code>ACTIVE</code> - The replica is ready for use.</p> </li> <li> <p> <code>REGION_DISABLED</code> - The replica is inaccessible because the Amazon Web Services Region has been disabled.</p> <note> <p>If the Amazon Web Services Region remains inaccessible for more than 20 hours, DynamoDB will remove this replica from the replication group. The replica will not be deleted and replication will stop from and to this region.</p> </note> </li> <li> <p> <code>INACCESSIBLE_ENCRYPTION_CREDENTIALS </code> - The KMS key used to encrypt the table is inaccessible.</p> <note> <p>If the KMS key remains inaccessible for more than 20 hours, DynamoDB will remove this replica from the replication group. The replica will not be deleted and replication will stop from and to this region.</p> </note> </li> </ul>',
        }),
    ).exactOptional(),
    ReplicaStatusDescription: ReplicaStatusDescriptionSchema.and(
      z.any().openapi({ description: 'Detailed information about the replica status.' }),
    ).exactOptional(),
    ReplicaStatusPercentProgress: ReplicaStatusPercentProgressSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the progress of a Create, Update, or Delete action on the replica as a percentage.',
        }),
    ).exactOptional(),
    KMSMasterKeyId: KMSMasterKeyIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The KMS key of the replica that will be used for KMS encryption.',
        }),
    ).exactOptional(),
    ProvisionedThroughputOverride: ProvisionedThroughputOverrideSchema.and(
      z
        .any()
        .openapi({
          description:
            "Replica-specific provisioned throughput. If not described, uses the source table's provisioned throughput settings.",
        }),
    ).exactOptional(),
    GlobalSecondaryIndexes: ReplicaGlobalSecondaryIndexDescriptionListSchema.and(
      z.any().openapi({ description: 'Replica-specific global secondary index settings.' }),
    ).exactOptional(),
    ReplicaInaccessibleDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the replica was first detected as inaccessible. To determine cause of inaccessibility check the <code>ReplicaStatus</code> property.',
        }),
    ).exactOptional(),
    ReplicaTableClassSummary: TableClassSummarySchema.exactOptional(),
  })
  .openapi({ description: 'Contains the details of the replica.', required: [] })
  .openapi('ReplicaDescription')

const ReplicaDescriptionListSchema = z
  .array(ReplicaDescriptionSchema)
  .openapi('ReplicaDescriptionList')

const GlobalTableArnStringSchema = z.string().openapi('GlobalTableArnString')

const GlobalTableStatusSchema = z
  .enum(['CREATING', 'ACTIVE', 'DELETING', 'UPDATING'])
  .openapi('GlobalTableStatus')

const GlobalTableDescriptionSchema = z
  .object({
    ReplicationGroup: ReplicaDescriptionListSchema.and(
      z.any().openapi({ description: 'The Regions where the global table has replicas.' }),
    ).exactOptional(),
    GlobalTableArn: GlobalTableArnStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the global table.' }),
    ).exactOptional(),
    CreationDateTime: DateSchema.and(
      z.any().openapi({ description: 'The creation time of the global table.' }),
    ).exactOptional(),
    GlobalTableStatus: GlobalTableStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current state of the global table:</p> <ul> <li> <p> <code>CREATING</code> - The global table is being created.</p> </li> <li> <p> <code>UPDATING</code> - The global table is being updated.</p> </li> <li> <p> <code>DELETING</code> - The global table is being deleted.</p> </li> <li> <p> <code>ACTIVE</code> - The global table is ready for use.</p> </li> </ul>',
        }),
    ).exactOptional(),
    GlobalTableName: TableNameSchema.and(
      z.any().openapi({ description: 'The global table name.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains details about the global table.', required: [] })
  .openapi('GlobalTableDescription')

const CreateGlobalTableOutputSchema = z
  .object({
    GlobalTableDescription: GlobalTableDescriptionSchema.and(
      z.any().openapi({ description: 'Contains the details of the global table.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateGlobalTableOutput')

const ReplicaSchema = z
  .object({
    RegionName: RegionNameSchema.and(
      z.any().openapi({ description: 'The Region where the replica needs to be created.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the properties of a replica.', required: [] })
  .openapi('Replica')

const ReplicaListSchema = z.array(ReplicaSchema).openapi('ReplicaList')

const CreateGlobalTableInputSchema = z
  .object({
    GlobalTableName: TableNameSchema.and(
      z.any().openapi({ description: 'The global table name.' }),
    ),
    ReplicationGroup: ReplicaListSchema.and(
      z.any().openapi({ description: 'The Regions where the global table needs to be created.' }),
    ),
  })
  .openapi({ required: ['GlobalTableName', 'ReplicationGroup'], title: 'CreateGlobalTableInput' })
  .openapi('CreateGlobalTableInput')

const GlobalTableAlreadyExistsExceptionSchema = z.any().openapi('GlobalTableAlreadyExistsException')

const KeySchemaAttributeNameSchema = z.string().min(1).max(255).openapi('KeySchemaAttributeName')

const ScalarAttributeTypeSchema = z.enum(['S', 'N', 'B']).openapi('ScalarAttributeType')

const AttributeDefinitionSchema = z
  .object({
    AttributeName: KeySchemaAttributeNameSchema.and(
      z.any().openapi({ description: 'A name for the attribute.' }),
    ),
    AttributeType: ScalarAttributeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data type for the attribute, where:</p> <ul> <li> <p> <code>S</code> - the attribute is of type String</p> </li> <li> <p> <code>N</code> - the attribute is of type Number</p> </li> <li> <p> <code>B</code> - the attribute is of type Binary</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['AttributeName', 'AttributeType'],
    description: 'Represents an attribute for describing the key schema for the table and indexes.',
  })
  .openapi('AttributeDefinition')

const AttributeDefinitionsSchema = z
  .array(AttributeDefinitionSchema)
  .openapi('AttributeDefinitions')

const KeyTypeSchema = z.enum(['HASH', 'RANGE']).openapi('KeyType')

const KeySchemaElementSchema = z
  .object({
    AttributeName: KeySchemaAttributeNameSchema.and(
      z.any().openapi({ description: 'The name of a key attribute.' }),
    ),
    KeyType: KeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The role that this key attribute will assume:</p> <ul> <li> <p> <code>HASH</code> - partition key</p> </li> <li> <p> <code>RANGE</code> - sort key</p> </li> </ul> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB\'s usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['AttributeName', 'KeyType'],
    description:
      '<p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.</p> <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one <code>KeySchemaElement</code> (for the partition key). A composite primary key would require one <code>KeySchemaElement</code> for the partition key, and another <code>KeySchemaElement</code> for the sort key.</p> <p>A <code>KeySchemaElement</code> must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.</p>',
  })
  .openapi('KeySchemaElement')

const KeySchemaSchema = z.array(KeySchemaElementSchema).min(1).max(2).openapi('KeySchema')

const TableStatusSchema = z
  .enum([
    'CREATING',
    'UPDATING',
    'DELETING',
    'ACTIVE',
    'INACCESSIBLE_ENCRYPTION_CREDENTIALS',
    'ARCHIVING',
    'ARCHIVED',
  ])
  .openapi('TableStatus')

const NonNegativeLongObjectSchema = z.int().min(0).openapi('NonNegativeLongObject')

const ProvisionedThroughputDescriptionSchema = z
  .object({
    LastIncreaseDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time of the last provisioned throughput increase for this table.',
        }),
    ).exactOptional(),
    LastDecreaseDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time of the last provisioned throughput decrease for this table.',
        }),
    ).exactOptional(),
    NumberOfDecreasesToday: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of provisioned throughput decreases for this table during this UTC calendar day. For current maximums on provisioned throughput decreases, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ReadCapacityUnits: NonNegativeLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>. Eventually consistent reads require less effort than strongly consistent reads, so a setting of 50 <code>ReadCapacityUnits</code> per second provides 100 eventually consistent <code>ReadCapacityUnits</code> per second.',
        }),
    ).exactOptional(),
    WriteCapacityUnits: NonNegativeLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.',
    required: [],
  })
  .openapi('ProvisionedThroughputDescription')

const LongObjectSchema = z.int().openapi('LongObject')

const TableIdSchema = z
  .string()
  .regex(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  .openapi('TableId')

const BillingModeSchema = z.enum(['PROVISIONED', 'PAY_PER_REQUEST']).openapi('BillingMode')

const BillingModeSummarySchema = z
  .object({
    BillingMode: BillingModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.</p> <ul> <li> <p> <code>PROVISIONED</code> - Sets the read/write capacity mode to <code>PROVISIONED</code>. We recommend using <code>PROVISIONED</code> for predictable workloads.</p> </li> <li> <p> <code>PAY_PER_REQUEST</code> - Sets the read/write capacity mode to <code>PAY_PER_REQUEST</code>. We recommend using <code>PAY_PER_REQUEST</code> for unpredictable workloads. </p> </li> </ul>',
        }),
    ).exactOptional(),
    LastUpdateToPayPerRequestDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the time when <code>PAY_PER_REQUEST</code> was last set as the read/write capacity mode.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the details for the read/write capacity mode. This page talks about <code>PROVISIONED</code> and <code>PAY_PER_REQUEST</code> billing modes. For more information about these modes, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html">Read/write capacity mode</a>.</p> <note> <p>You may need to switch to on-demand mode at least once in order to return a <code>BillingModeSummary</code> response.</p> </note>',
    required: [],
  })
  .openapi('BillingModeSummary')

const ProjectionTypeSchema = z.enum(['ALL', 'KEYS_ONLY', 'INCLUDE']).openapi('ProjectionType')

const NonKeyAttributeNameSchema = z.string().min(1).max(255).openapi('NonKeyAttributeName')

const NonKeyAttributeNameListSchema = z
  .array(NonKeyAttributeNameSchema)
  .min(1)
  .max(20)
  .openapi('NonKeyAttributeNameList')

const ProjectionSchema = z
  .object({
    ProjectionType: ProjectionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The set of attributes that are projected into the index:</p> <ul> <li> <p> <code>KEYS_ONLY</code> - Only the index and primary keys are projected into the index.</p> </li> <li> <p> <code>INCLUDE</code> - In addition to the attributes described in <code>KEYS_ONLY</code>, the secondary index will include other non-key attributes that you specify.</p> </li> <li> <p> <code>ALL</code> - All of the table attributes are projected into the index.</p> </li> </ul>',
        }),
    ).exactOptional(),
    NonKeyAttributes: NonKeyAttributeNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents the non-key attribute names which will be projected into the index.</p> <p>For local secondary indexes, the total count of <code>NonKeyAttributes</code> summed across all of the local secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.',
    required: [],
  })
  .openapi('Projection')

const LocalSecondaryIndexDescriptionSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'Represents the name of the local secondary index.' }),
    ).exactOptional(),
    KeySchema: KeySchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:</p> <ul> <li> <p> <code>HASH</code> - partition key</p> </li> <li> <p> <code>RANGE</code> - sort key</p> </li> </ul> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB\'s usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note>',
        }),
    ).exactOptional(),
    Projection: ProjectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. ',
        }),
    ).exactOptional(),
    IndexSizeBytes: LongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total size of the specified index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.',
        }),
    ).exactOptional(),
    ItemCount: LongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of items in the specified index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.',
        }),
    ).exactOptional(),
    IndexArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that uniquely identifies the index.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the properties of a local secondary index.', required: [] })
  .openapi('LocalSecondaryIndexDescription')

const LocalSecondaryIndexDescriptionListSchema = z
  .array(LocalSecondaryIndexDescriptionSchema)
  .openapi('LocalSecondaryIndexDescriptionList')

const IndexStatusSchema = z
  .enum(['CREATING', 'UPDATING', 'DELETING', 'ACTIVE'])
  .openapi('IndexStatus')

const BackfillingSchema = z.boolean().openapi('Backfilling')

const GlobalSecondaryIndexDescriptionSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'The name of the global secondary index.' }),
    ).exactOptional(),
    KeySchema: KeySchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:</p> <ul> <li> <p> <code>HASH</code> - partition key</p> </li> <li> <p> <code>RANGE</code> - sort key</p> </li> </ul> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB\'s usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note>',
        }),
    ).exactOptional(),
    Projection: ProjectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. ',
        }),
    ).exactOptional(),
    IndexStatus: IndexStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current state of the global secondary index:</p> <ul> <li> <p> <code>CREATING</code> - The index is being created.</p> </li> <li> <p> <code>UPDATING</code> - The index is being updated.</p> </li> <li> <p> <code>DELETING</code> - The index is being deleted.</p> </li> <li> <p> <code>ACTIVE</code> - The index is ready for use.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Backfilling: BackfillingSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether the index is currently backfilling. <i>Backfilling</i> is the process of reading items from the table and determining whether they can be added to the index. (Not all items will qualify: For example, a partition key cannot have any duplicate values.) If an item can be added to the index, DynamoDB will do so. After all items have been processed, the backfilling operation is complete and <code>Backfilling</code> is false.</p> <p>You can delete an index that is being created during the <code>Backfilling</code> phase when <code>IndexStatus</code> is set to CREATING and <code>Backfilling</code> is true. You can't delete the index that is being created when <code>IndexStatus</code> is set to CREATING and <code>Backfilling</code> is false. </p> <note> <p>For indexes that were created during a <code>CreateTable</code> operation, the <code>Backfilling</code> attribute does not appear in the <code>DescribeTable</code> output.</p> </note>",
        }),
    ).exactOptional(),
    ProvisionedThroughput: ProvisionedThroughputDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents the provisioned throughput settings for the specified global secondary index.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    IndexSizeBytes: LongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total size of the specified index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.',
        }),
    ).exactOptional(),
    ItemCount: LongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of items in the specified index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.',
        }),
    ).exactOptional(),
    IndexArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that uniquely identifies the index.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the properties of a global secondary index.', required: [] })
  .openapi('GlobalSecondaryIndexDescription')

const GlobalSecondaryIndexDescriptionListSchema = z
  .array(GlobalSecondaryIndexDescriptionSchema)
  .openapi('GlobalSecondaryIndexDescriptionList')

const StreamEnabledSchema = z.boolean().openapi('StreamEnabled')

const StreamViewTypeSchema = z
  .enum(['NEW_IMAGE', 'OLD_IMAGE', 'NEW_AND_OLD_IMAGES', 'KEYS_ONLY'])
  .openapi('StreamViewType')

const StreamSpecificationSchema = z
  .object({
    StreamEnabled: StreamEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether DynamoDB Streams is enabled (true) or disabled (false) on the table.',
        }),
    ),
    StreamViewType: StreamViewTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> When an item in the table is modified, <code>StreamViewType</code> determines what information is written to the stream for this table. Valid values for <code>StreamViewType</code> are:</p> <ul> <li> <p> <code>KEYS_ONLY</code> - Only the key attributes of the modified item are written to the stream.</p> </li> <li> <p> <code>NEW_IMAGE</code> - The entire item, as it appears after it was modified, is written to the stream.</p> </li> <li> <p> <code>OLD_IMAGE</code> - The entire item, as it appeared before it was modified, is written to the stream.</p> </li> <li> <p> <code>NEW_AND_OLD_IMAGES</code> - Both the new and the old item images of the item are written to the stream.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StreamEnabled'],
    description: 'Represents the DynamoDB Streams configuration for a table in DynamoDB.',
  })
  .openapi('StreamSpecification')

const StreamArnSchema = z.string().min(37).max(1024).openapi('StreamArn')

const TableArnSchema = z.string().openapi('TableArn')

const RestoreInProgressSchema = z.boolean().openapi('RestoreInProgress')

const RestoreSummarySchema = z
  .object({
    SourceBackupArn: BackupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the backup from which the table was restored.',
        }),
    ).exactOptional(),
    SourceTableArn: TableArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the source table of the backup that is being restored.',
        }),
    ).exactOptional(),
    RestoreDateTime: DateSchema.and(
      z.any().openapi({ description: 'Point in time or source backup time.' }),
    ),
    RestoreInProgress: RestoreInProgressSchema.and(
      z.any().openapi({ description: 'Indicates if a restore is in progress or not.' }),
    ),
  })
  .openapi({
    required: ['RestoreDateTime', 'RestoreInProgress'],
    description: 'Contains details for the restore.',
  })
  .openapi('RestoreSummary')

const SSEStatusSchema = z
  .enum(['ENABLING', 'ENABLED', 'DISABLING', 'DISABLED', 'UPDATING'])
  .openapi('SSEStatus')

const SSETypeSchema = z.enum(['AES256', 'KMS']).openapi('SSEType')

const KMSMasterKeyArnSchema = z.string().openapi('KMSMasterKeyArn')

const SSEDescriptionSchema = z
  .object({
    Status: SSEStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents the current state of server-side encryption. The only supported values are:</p> <ul> <li> <p> <code>ENABLED</code> - Server-side encryption is enabled.</p> </li> <li> <p> <code>UPDATING</code> - Server-side encryption is being updated.</p> </li> </ul>',
        }),
    ).exactOptional(),
    SSEType: SSETypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Server-side encryption type. The only supported value is:</p> <ul> <li> <p> <code>KMS</code> - Server-side encryption that uses Key Management Service. The key is stored in your account and is managed by KMS (KMS charges apply).</p> </li> </ul>',
        }),
    ).exactOptional(),
    KMSMasterKeyArn: KMSMasterKeyArnSchema.and(
      z.any().openapi({ description: 'The KMS key ARN used for the KMS encryption.' }),
    ).exactOptional(),
    InaccessibleEncryptionDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            "Indicates the time, in UNIX epoch date format, when DynamoDB detected that the table's KMS key was inaccessible. This attribute will automatically be cleared when DynamoDB detects that the table's KMS key is accessible again. DynamoDB will initiate the table archival process when table's KMS key remains inaccessible for more than seven days from this date.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The description of the server-side encryption status on the specified table.',
    required: [],
  })
  .openapi('SSEDescription')

const ArchivalReasonSchema = z.string().openapi('ArchivalReason')

const ArchivalSummarySchema = z
  .object({
    ArchivalDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when table archival was initiated by DynamoDB, in UNIX epoch time format.',
        }),
    ).exactOptional(),
    ArchivalReason: ArchivalReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The reason DynamoDB archived the table. Currently, the only possible value is:</p> <ul> <li> <p> <code>INACCESSIBLE_ENCRYPTION_CREDENTIALS</code> - The table was archived due to the table's KMS key being inaccessible for more than seven days. An On-Demand backup was created at the archival time.</p> </li> </ul>",
        }),
    ).exactOptional(),
    ArchivalBackupArn: BackupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the backup the table was archived to, when applicable in the archival reason. If you wish to restore this backup to the same table name, you will need to delete the original table.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains details of a table archival operation.', required: [] })
  .openapi('ArchivalSummary')

const DeletionProtectionEnabledSchema = z.boolean().openapi('DeletionProtectionEnabled')

const TableDescriptionSchema = z
  .object({
    AttributeDefinitions: AttributeDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of <code>AttributeDefinition</code> objects. Each of these objects describes one attribute in the table and index key schema.</p> <p>Each <code>AttributeDefinition</code> object in this array is composed of:</p> <ul> <li> <p> <code>AttributeName</code> - The name of the attribute.</p> </li> <li> <p> <code>AttributeType</code> - The data type for the attribute.</p> </li> </ul>',
        }),
    ).exactOptional(),
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table.' }),
    ).exactOptional(),
    KeySchema: KeySchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The primary key structure for the table. Each <code>KeySchemaElement</code> consists of:</p> <ul> <li> <p> <code>AttributeName</code> - The name of the attribute.</p> </li> <li> <p> <code>KeyType</code> - The role of the attribute:</p> <ul> <li> <p> <code>HASH</code> - partition key</p> </li> <li> <p> <code>RANGE</code> - sort key</p> </li> </ul> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB\'s usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note> </li> </ul> <p>For more information about primary keys, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html#DataModelPrimaryKey">Primary Key</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    TableStatus: TableStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current state of the table:</p> <ul> <li> <p> <code>CREATING</code> - The table is being created.</p> </li> <li> <p> <code>UPDATING</code> - The table/index configuration is being updated. The table/index remains available for data operations when <code>UPDATING</code>.</p> </li> <li> <p> <code>DELETING</code> - The table is being deleted.</p> </li> <li> <p> <code>ACTIVE</code> - The table is ready for use.</p> </li> <li> <p> <code>INACCESSIBLE_ENCRYPTION_CREDENTIALS</code> - The KMS key used to encrypt the table in inaccessible. Table operations may fail due to failure to use the KMS key. DynamoDB will initiate the table archival process when a table's KMS key remains inaccessible for more than seven days. </p> </li> <li> <p> <code>ARCHIVING</code> - The table is being archived. Operations are not allowed until archival is complete. </p> </li> <li> <p> <code>ARCHIVED</code> - The table has been archived. See the ArchivalReason for more information. </p> </li> </ul>",
        }),
    ).exactOptional(),
    CreationDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the table was created, in <a href="http://www.epochconverter.com/">UNIX epoch time</a> format.',
        }),
    ).exactOptional(),
    ProvisionedThroughput: ProvisionedThroughputDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.',
        }),
    ).exactOptional(),
    TableSizeBytes: LongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total size of the specified table, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.',
        }),
    ).exactOptional(),
    ItemCount: LongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of items in the specified table. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.',
        }),
    ).exactOptional(),
    TableArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that uniquely identifies the table.',
        }),
    ).exactOptional(),
    TableId: TableIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Unique identifier for the table for which the backup was created. ',
        }),
    ).exactOptional(),
    BillingModeSummary: BillingModeSummarySchema.and(
      z.any().openapi({ description: 'Contains the details for the read/write capacity mode.' }),
    ).exactOptional(),
    LocalSecondaryIndexes: LocalSecondaryIndexDescriptionListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents one or more local secondary indexes on the table. Each index is scoped to a given partition key value. Tables with one or more local secondary indexes are subject to an item collection size limit, where the amount of data within a given item collection cannot exceed 10 GB. Each element is composed of:</p> <ul> <li> <p> <code>IndexName</code> - The name of the local secondary index.</p> </li> <li> <p> <code>KeySchema</code> - Specifies the complete index key schema. The attribute names in the key schema must be between 1 and 255 characters (inclusive). The key schema must begin with the same partition key as the table.</p> </li> <li> <p> <code>Projection</code> - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:</p> <ul> <li> <p> <code>ProjectionType</code> - One of the following:</p> <ul> <li> <p> <code>KEYS_ONLY</code> - Only the index and primary keys are projected into the index.</p> </li> <li> <p> <code>INCLUDE</code> - Only the specified table attributes are projected into the index. The list of projected attributes is in <code>NonKeyAttributes</code>.</p> </li> <li> <p> <code>ALL</code> - All of the table attributes are projected into the index.</p> </li> </ul> </li> <li> <p> <code>NonKeyAttributes</code> - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in <code>NonKeyAttributes</code>, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.</p> </li> </ul> </li> <li> <p> <code>IndexSizeBytes</code> - Represents the total size of the index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p> </li> <li> <p> <code>ItemCount</code> - Represents the number of items in the index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p> </li> </ul> <p>If the table is in the <code>DELETING</code> state, no information about indexes will be returned.</p>',
        }),
    ).exactOptional(),
    GlobalSecondaryIndexes: GlobalSecondaryIndexDescriptionListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The global secondary indexes, if any, on the table. Each index is scoped to a given partition key value. Each element is composed of:</p> <ul> <li> <p> <code>Backfilling</code> - If true, then the index is currently in the backfilling phase. Backfilling occurs only when a new global secondary index is added to the table. It is the process by which DynamoDB populates the new index with data from the table. (This attribute does not appear for indexes that were created during a <code>CreateTable</code> operation.) </p> <p> You can delete an index that is being created during the <code>Backfilling</code> phase when <code>IndexStatus</code> is set to CREATING and <code>Backfilling</code> is true. You can't delete the index that is being created when <code>IndexStatus</code> is set to CREATING and <code>Backfilling</code> is false. (This attribute does not appear for indexes that were created during a <code>CreateTable</code> operation.)</p> </li> <li> <p> <code>IndexName</code> - The name of the global secondary index.</p> </li> <li> <p> <code>IndexSizeBytes</code> - The total size of the global secondary index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value. </p> </li> <li> <p> <code>IndexStatus</code> - The current status of the global secondary index:</p> <ul> <li> <p> <code>CREATING</code> - The index is being created.</p> </li> <li> <p> <code>UPDATING</code> - The index is being updated.</p> </li> <li> <p> <code>DELETING</code> - The index is being deleted.</p> </li> <li> <p> <code>ACTIVE</code> - The index is ready for use.</p> </li> </ul> </li> <li> <p> <code>ItemCount</code> - The number of items in the global secondary index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value. </p> </li> <li> <p> <code>KeySchema</code> - Specifies the complete index key schema. The attribute names in the key schema must be between 1 and 255 characters (inclusive). The key schema must begin with the same partition key as the table.</p> </li> <li> <p> <code>Projection</code> - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:</p> <ul> <li> <p> <code>ProjectionType</code> - One of the following:</p> <ul> <li> <p> <code>KEYS_ONLY</code> - Only the index and primary keys are projected into the index.</p> </li> <li> <p> <code>INCLUDE</code> - In addition to the attributes described in <code>KEYS_ONLY</code>, the secondary index will include other non-key attributes that you specify.</p> </li> <li> <p> <code>ALL</code> - All of the table attributes are projected into the index.</p> </li> </ul> </li> <li> <p> <code>NonKeyAttributes</code> - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in <code>NonKeyAttributes</code>, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.</p> </li> </ul> </li> <li> <p> <code>ProvisionedThroughput</code> - The provisioned throughput settings for the global secondary index, consisting of read and write capacity units, along with data about increases and decreases. </p> </li> </ul> <p>If the table is in the <code>DELETING</code> state, no information about indexes will be returned.</p>",
        }),
    ).exactOptional(),
    StreamSpecification: StreamSpecificationSchema.and(
      z.any().openapi({ description: 'The current DynamoDB Streams configuration for the table.' }),
    ).exactOptional(),
    LatestStreamLabel: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A timestamp, in ISO 8601 format, for this stream.</p> <p>Note that <code>LatestStreamLabel</code> is not a unique identifier for the stream, because it is possible that a stream from another table might have the same timestamp. However, the combination of the following three elements is guaranteed to be unique:</p> <ul> <li> <p>Amazon Web Services customer ID</p> </li> <li> <p>Table name</p> </li> <li> <p> <code>StreamLabel</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    LatestStreamArn: StreamArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that uniquely identifies the latest stream for this table.',
        }),
    ).exactOptional(),
    GlobalTableVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the version of <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html">global tables</a> in use, if the table is replicated across Amazon Web Services Regions.',
        }),
    ).exactOptional(),
    Replicas: ReplicaDescriptionListSchema.and(
      z.any().openapi({ description: 'Represents replicas of the table.' }),
    ).exactOptional(),
    RestoreSummary: RestoreSummarySchema.and(
      z.any().openapi({ description: 'Contains details for the restore.' }),
    ).exactOptional(),
    SSEDescription: SSEDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the server-side encryption status on the specified table.',
        }),
    ).exactOptional(),
    ArchivalSummary: ArchivalSummarySchema.and(
      z.any().openapi({ description: 'Contains information about the table archive.' }),
    ).exactOptional(),
    TableClassSummary: TableClassSummarySchema.and(
      z.any().openapi({ description: 'Contains details of the table class.' }),
    ).exactOptional(),
    DeletionProtectionEnabled: DeletionProtectionEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether deletion protection is enabled (true) or disabled (false) on the table.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the properties of a table.', required: [] })
  .openapi('TableDescription')

const CreateTableOutputSchema = z
  .object({
    TableDescription: TableDescriptionSchema.and(
      z.any().openapi({ description: 'Represents the properties of the table.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      TableDescription: {
        AttributeDefinitions: [
          { AttributeName: 'Artist', AttributeType: 'S' },
          { AttributeName: 'SongTitle', AttributeType: 'S' },
        ],
        CreationDateTime: '1421866952.062',
        ItemCount: 0,
        KeySchema: [
          { AttributeName: 'Artist', KeyType: 'HASH' },
          { AttributeName: 'SongTitle', KeyType: 'RANGE' },
        ],
        ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
        TableName: 'Music',
        TableSizeBytes: 0,
        TableStatus: 'CREATING',
      },
    },
    description: 'Represents the output of a <code>CreateTable</code> operation.',
    required: [],
  })
  .openapi('CreateTableOutput')

const LocalSecondaryIndexSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the local secondary index. The name must be unique among all other indexes on this table.',
        }),
    ),
    KeySchema: KeySchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:</p> <ul> <li> <p> <code>HASH</code> - partition key</p> </li> <li> <p> <code>RANGE</code> - sort key</p> </li> </ul> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB\'s usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note>',
        }),
    ),
    Projection: ProjectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents attributes that are copied (projected) from the table into the local secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. ',
        }),
    ),
  })
  .openapi({
    required: ['IndexName', 'KeySchema', 'Projection'],
    description: 'Represents the properties of a local secondary index.',
  })
  .openapi('LocalSecondaryIndex')

const LocalSecondaryIndexListSchema = z
  .array(LocalSecondaryIndexSchema)
  .openapi('LocalSecondaryIndexList')

const ProvisionedThroughputSchema = z
  .object({
    ReadCapacityUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html">Specifying Read and Write Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>If read/write capacity mode is <code>PAY_PER_REQUEST</code> the value is set to 0.</p>',
        }),
    ),
    WriteCapacityUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException</code>. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html">Specifying Read and Write Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>If read/write capacity mode is <code>PAY_PER_REQUEST</code> the value is set to 0.</p>',
        }),
    ),
  })
  .openapi({
    required: ['ReadCapacityUnits', 'WriteCapacityUnits'],
    description:
      '<p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
  })
  .openapi('ProvisionedThroughput')

const GlobalSecondaryIndexSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the global secondary index. The name must be unique among all other indexes on this table.',
        }),
    ),
    KeySchema: KeySchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:</p> <ul> <li> <p> <code>HASH</code> - partition key</p> </li> <li> <p> <code>RANGE</code> - sort key</p> </li> </ul> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB\'s usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note>',
        }),
    ),
    Projection: ProjectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. ',
        }),
    ),
    ProvisionedThroughput: ProvisionedThroughputSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents the provisioned throughput settings for the specified global secondary index.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IndexName', 'KeySchema', 'Projection'],
    description: 'Represents the properties of a global secondary index.',
  })
  .openapi('GlobalSecondaryIndex')

const GlobalSecondaryIndexListSchema = z
  .array(GlobalSecondaryIndexSchema)
  .openapi('GlobalSecondaryIndexList')

const SSEEnabledSchema = z.boolean().openapi('SSEEnabled')

const SSESpecificationSchema = z
  .object({
    Enabled: SSEEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether server-side encryption is done using an Amazon Web Services managed key or an Amazon Web Services owned key. If enabled (true), server-side encryption type is set to <code>KMS</code> and an Amazon Web Services managed key is used (KMS charges apply). If disabled (false) or not specified, server-side encryption is set to Amazon Web Services owned key.',
        }),
    ).exactOptional(),
    SSEType: SSETypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Server-side encryption type. The only supported value is:</p> <ul> <li> <p> <code>KMS</code> - Server-side encryption that uses Key Management Service. The key is stored in your account and is managed by KMS (KMS charges apply).</p> </li> </ul>',
        }),
    ).exactOptional(),
    KMSMasterKeyId: KMSMasterKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key that should be used for the KMS encryption. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key <code>alias/aws/dynamodb</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the settings used to enable server-side encryption.',
    required: [],
  })
  .openapi('SSESpecification')

const TagKeyStringSchema = z.string().min(1).max(128).openapi('TagKeyString')

const TagValueStringSchema = z.string().min(0).max(256).openapi('TagValueString')

const TagSchema = z
  .object({
    Key: TagKeyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key of the tag. Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.',
        }),
    ),
    Value: TagValueStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The value of the tag. Tag values are case-sensitive and can be null.',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      '<p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single DynamoDB table. </p> <p>Amazon Web Services-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. Amazon Web Services-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code> in the Cost Allocation Report. You cannot backdate the application of a tag.</p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const CreateTableInputSchema = z
  .object({
    AttributeDefinitions: AttributeDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of attributes that describe the key schema for the table and indexes.',
        }),
    ),
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table to create.' }),
    ),
    KeySchema: KeySchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the attributes that make up the primary key for a table or an index. The attributes in <code>KeySchema</code> must also be defined in the <code>AttributeDefinitions</code> array. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html">Data Model</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>Each <code>KeySchemaElement</code> in the array is composed of:</p> <ul> <li> <p> <code>AttributeName</code> - The name of this key attribute.</p> </li> <li> <p> <code>KeyType</code> - The role that the key attribute will assume:</p> <ul> <li> <p> <code>HASH</code> - partition key</p> </li> <li> <p> <code>RANGE</code> - sort key</p> </li> </ul> </li> </ul> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from the DynamoDB usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note> <p>For a simple primary key (partition key), you must provide exactly one element with a <code>KeyType</code> of <code>HASH</code>.</p> <p>For a composite primary key (partition key and sort key), you must provide exactly two elements, in this order: The first element must have a <code>KeyType</code> of <code>HASH</code>, and the second element must have a <code>KeyType</code> of <code>RANGE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#WorkingWithTables.primary.key">Working with Tables</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ),
    LocalSecondaryIndexes: LocalSecondaryIndexListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more local secondary indexes (the maximum is 5) to be created on the table. Each index is scoped to a given partition key value. There is a 10 GB size limit per partition key value; otherwise, the size of a local secondary index is unconstrained.</p> <p>Each local secondary index in the array includes the following:</p> <ul> <li> <p> <code>IndexName</code> - The name of the local secondary index. Must be unique only for this table.</p> <p/> </li> <li> <p> <code>KeySchema</code> - Specifies the key schema for the local secondary index. The key schema must begin with the same partition key as the table.</p> </li> <li> <p> <code>Projection</code> - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:</p> <ul> <li> <p> <code>ProjectionType</code> - One of the following:</p> <ul> <li> <p> <code>KEYS_ONLY</code> - Only the index and primary keys are projected into the index.</p> </li> <li> <p> <code>INCLUDE</code> - Only the specified table attributes are projected into the index. The list of projected attributes is in <code>NonKeyAttributes</code>.</p> </li> <li> <p> <code>ALL</code> - All of the table attributes are projected into the index.</p> </li> </ul> </li> <li> <p> <code>NonKeyAttributes</code> - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in <code>NonKeyAttributes</code>, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.</p> </li> </ul> </li> </ul>',
        }),
    ).exactOptional(),
    GlobalSecondaryIndexes: GlobalSecondaryIndexListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more global secondary indexes (the maximum is 20) to be created on the table. Each global secondary index in the array includes the following:</p> <ul> <li> <p> <code>IndexName</code> - The name of the global secondary index. Must be unique only for this table.</p> <p/> </li> <li> <p> <code>KeySchema</code> - Specifies the key schema for the global secondary index.</p> </li> <li> <p> <code>Projection</code> - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:</p> <ul> <li> <p> <code>ProjectionType</code> - One of the following:</p> <ul> <li> <p> <code>KEYS_ONLY</code> - Only the index and primary keys are projected into the index.</p> </li> <li> <p> <code>INCLUDE</code> - Only the specified table attributes are projected into the index. The list of projected attributes is in <code>NonKeyAttributes</code>.</p> </li> <li> <p> <code>ALL</code> - All of the table attributes are projected into the index.</p> </li> </ul> </li> <li> <p> <code>NonKeyAttributes</code> - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in <code>NonKeyAttributes</code>, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.</p> </li> </ul> </li> <li> <p> <code>ProvisionedThroughput</code> - The provisioned throughput settings for the global secondary index, consisting of read and write capacity units.</p> </li> </ul>',
        }),
    ).exactOptional(),
    BillingMode: BillingModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.</p> <ul> <li> <p> <code>PROVISIONED</code> - We recommend using <code>PROVISIONED</code> for predictable workloads. <code>PROVISIONED</code> sets the billing mode to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.ProvisionedThroughput.Manual">Provisioned Mode</a>.</p> </li> <li> <p> <code>PAY_PER_REQUEST</code> - We recommend using <code>PAY_PER_REQUEST</code> for unpredictable workloads. <code>PAY_PER_REQUEST</code> sets the billing mode to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand">On-Demand Mode</a>. </p> </li> </ul>',
        }),
    ).exactOptional(),
    ProvisionedThroughput: ProvisionedThroughputSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p> If you set BillingMode as <code>PROVISIONED</code>, you must specify this property. If you set BillingMode as <code>PAY_PER_REQUEST</code>, you cannot specify this property.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    StreamSpecification: StreamSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The settings for DynamoDB Streams on the table. These settings consist of:</p> <ul> <li> <p> <code>StreamEnabled</code> - Indicates whether DynamoDB Streams is to be enabled (true) or disabled (false).</p> </li> <li> <p> <code>StreamViewType</code> - When an item in the table is modified, <code>StreamViewType</code> determines what information is written to the table's stream. Valid values for <code>StreamViewType</code> are:</p> <ul> <li> <p> <code>KEYS_ONLY</code> - Only the key attributes of the modified item are written to the stream.</p> </li> <li> <p> <code>NEW_IMAGE</code> - The entire item, as it appears after it was modified, is written to the stream.</p> </li> <li> <p> <code>OLD_IMAGE</code> - The entire item, as it appeared before it was modified, is written to the stream.</p> </li> <li> <p> <code>NEW_AND_OLD_IMAGES</code> - Both the new and the old item images of the item are written to the stream.</p> </li> </ul> </li> </ul>",
        }),
    ).exactOptional(),
    SSESpecification: SSESpecificationSchema.and(
      z
        .any()
        .openapi({ description: 'Represents the settings used to enable server-side encryption.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs to label the table. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a>.',
        }),
    ).exactOptional(),
    TableClass: TableClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'The table class of the new table. Valid values are <code>STANDARD</code> and <code>STANDARD_INFREQUENT_ACCESS</code>.',
        }),
    ).exactOptional(),
    DeletionProtectionEnabled: DeletionProtectionEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether deletion protection is to be enabled (true) or disabled (false) on the table.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AttributeDefinitions', 'TableName', 'KeySchema'],
    title: 'CreateTableInput',
    description: 'Represents the input of a <code>CreateTable</code> operation.',
  })
  .openapi('CreateTableInput')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const TableCreationDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('TableCreationDateTime')

const ItemCountSchema = z.int().min(0).openapi('ItemCount')

const SourceTableDetailsSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table for which the backup was created. ' }),
    ),
    TableId: TableIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Unique identifier for the table for which the backup was created. ',
        }),
    ),
    TableArn: TableArnSchema.and(
      z.any().openapi({ description: 'ARN of the table for which backup was created. ' }),
    ).exactOptional(),
    TableSizeBytes: LongObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Size of the table in bytes. Note that this is an approximate value.',
        }),
    ).exactOptional(),
    KeySchema: KeySchemaSchema.and(z.any().openapi({ description: 'Schema of the table. ' })),
    TableCreationDateTime: TableCreationDateTimeSchema.and(
      z.any().openapi({ description: 'Time when the source table was created. ' }),
    ),
    ProvisionedThroughput: ProvisionedThroughputSchema.and(
      z
        .any()
        .openapi({
          description: 'Read IOPs and Write IOPS on the table when the backup was created.',
        }),
    ),
    ItemCount: ItemCountSchema.and(
      z
        .any()
        .openapi({
          description: 'Number of items in the table. Note that this is an approximate value. ',
        }),
    ).exactOptional(),
    BillingMode: BillingModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.</p> <ul> <li> <p> <code>PROVISIONED</code> - Sets the read/write capacity mode to <code>PROVISIONED</code>. We recommend using <code>PROVISIONED</code> for predictable workloads.</p> </li> <li> <p> <code>PAY_PER_REQUEST</code> - Sets the read/write capacity mode to <code>PAY_PER_REQUEST</code>. We recommend using <code>PAY_PER_REQUEST</code> for unpredictable workloads. </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'TableName',
      'TableId',
      'KeySchema',
      'TableCreationDateTime',
      'ProvisionedThroughput',
    ],
    description: 'Contains the details of the table when the backup was created. ',
  })
  .openapi('SourceTableDetails')

const LocalSecondaryIndexInfoSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'Represents the name of the local secondary index.' }),
    ).exactOptional(),
    KeySchema: KeySchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The complete key schema for a local secondary index, which consists of one or more pairs of attribute names and key types:</p> <ul> <li> <p> <code>HASH</code> - partition key</p> </li> <li> <p> <code>RANGE</code> - sort key</p> </li> </ul> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB\'s usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note>',
        }),
    ).exactOptional(),
    Projection: ProjectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the properties of a local secondary index for the table when the backup was created.',
    required: [],
  })
  .openapi('LocalSecondaryIndexInfo')

const LocalSecondaryIndexesSchema = z
  .array(LocalSecondaryIndexInfoSchema)
  .openapi('LocalSecondaryIndexes')

const GlobalSecondaryIndexInfoSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'The name of the global secondary index.' }),
    ).exactOptional(),
    KeySchema: KeySchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:</p> <ul> <li> <p> <code>HASH</code> - partition key</p> </li> <li> <p> <code>RANGE</code> - sort key</p> </li> </ul> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB\'s usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note>',
        }),
    ).exactOptional(),
    Projection: ProjectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. ',
        }),
    ).exactOptional(),
    ProvisionedThroughput: ProvisionedThroughputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the provisioned throughput settings for the specified global secondary index. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the properties of a global secondary index for the table when the backup was created.',
    required: [],
  })
  .openapi('GlobalSecondaryIndexInfo')

const GlobalSecondaryIndexesSchema = z
  .array(GlobalSecondaryIndexInfoSchema)
  .openapi('GlobalSecondaryIndexes')

const TimeToLiveStatusSchema = z
  .enum(['ENABLING', 'DISABLING', 'ENABLED', 'DISABLED'])
  .openapi('TimeToLiveStatus')

const TimeToLiveAttributeNameSchema = z.string().min(1).max(255).openapi('TimeToLiveAttributeName')

const TimeToLiveDescriptionSchema = z
  .object({
    TimeToLiveStatus: TimeToLiveStatusSchema.and(
      z.any().openapi({ description: ' The TTL status for the table.' }),
    ).exactOptional(),
    AttributeName: TimeToLiveAttributeNameSchema.and(
      z.any().openapi({ description: ' The name of the TTL attribute for items in the table.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The description of the Time to Live (TTL) status on the specified table. ',
    required: [],
  })
  .openapi('TimeToLiveDescription')

const SourceTableFeatureDetailsSchema = z
  .object({
    LocalSecondaryIndexes: LocalSecondaryIndexesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the LSI properties for the table when the backup was created. It includes the IndexName, KeySchema and Projection for the LSIs on the table at the time of backup. ',
        }),
    ).exactOptional(),
    GlobalSecondaryIndexes: GlobalSecondaryIndexesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the GSI properties for the table when the backup was created. It includes the IndexName, KeySchema, Projection, and ProvisionedThroughput for the GSIs on the table at the time of backup. ',
        }),
    ).exactOptional(),
    StreamDescription: StreamSpecificationSchema.and(
      z.any().openapi({ description: 'Stream settings on the table when the backup was created.' }),
    ).exactOptional(),
    TimeToLiveDescription: TimeToLiveDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'Time to Live settings on the table when the backup was created.',
        }),
    ).exactOptional(),
    SSEDescription: SSEDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the server-side encryption status on the table when the backup was created.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL. ',
    required: [],
  })
  .openapi('SourceTableFeatureDetails')

const BackupDescriptionSchema = z
  .object({
    BackupDetails: BackupDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the details of the backup created for the table. ' }),
    ).exactOptional(),
    SourceTableDetails: SourceTableDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the details of the table when the backup was created. ',
        }),
    ).exactOptional(),
    SourceTableFeatureDetails: SourceTableFeatureDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the description of the backup created for the table.',
    required: [],
  })
  .openapi('BackupDescription')

const DeleteBackupOutputSchema = z
  .object({
    BackupDescription: BackupDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the description of the backup created for the table.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteBackupOutput')

const DeleteBackupInputSchema = z
  .object({
    BackupArn: BackupArnSchema.and(
      z.any().openapi({ description: 'The ARN associated with the backup.' }),
    ),
  })
  .openapi({ required: ['BackupArn'], title: 'DeleteBackupInput' })
  .openapi('DeleteBackupInput')

const BackupNotFoundExceptionSchema = z.any().openapi('BackupNotFoundException')

const DeleteItemOutputSchema = z
  .object({
    Attributes: AttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of attribute names to <code>AttributeValue</code> objects, representing the item as it appeared before the <code>DeleteItem</code> operation. This map appears in the response only if <code>ReturnValues</code> was specified as <code>ALL_OLD</code> in the request.',
        }),
    ).exactOptional(),
    ConsumedCapacity: ConsumedCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The capacity units consumed by the <code>DeleteItem</code> operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ItemCollectionMetrics: ItemCollectionMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about item collections, if any, that were affected by the <code>DeleteItem</code> operation. <code>ItemCollectionMetrics</code> is only returned if the <code>ReturnItemCollectionMetrics</code> parameter was specified. If the table does not have any local secondary indexes, this information is not returned in the response.</p> <p>Each <code>ItemCollectionMetrics</code> element consists of:</p> <ul> <li> <p> <code>ItemCollectionKey</code> - The partition key value of the item collection. This is the same as the partition key value of the item itself.</p> </li> <li> <p> <code>SizeEstimateRangeGB</code> - An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit.</p> <p>The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { ConsumedCapacity: { CapacityUnits: 1, TableName: 'Music' } },
    description: 'Represents the output of a <code>DeleteItem</code> operation.',
    required: [],
  })
  .openapi('DeleteItemOutput')

const BooleanObjectSchema = z.boolean().openapi('BooleanObject')

const ComparisonOperatorSchema = z
  .enum([
    'EQ',
    'NE',
    'IN',
    'LE',
    'LT',
    'GE',
    'GT',
    'BETWEEN',
    'NOT_NULL',
    'NULL',
    'CONTAINS',
    'NOT_CONTAINS',
    'BEGINS_WITH',
  ])
  .openapi('ComparisonOperator')

const AttributeValueListSchema = z.array(AttributeValueSchema).openapi('AttributeValueList')

const ExpectedAttributeValueSchema = z
  .object({
    Value: AttributeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents the data for the expected attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    Exists: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Causes DynamoDB to evaluate the value before attempting a conditional operation:</p> <ul> <li> <p>If <code>Exists</code> is <code>true</code>, DynamoDB will check to see if that attribute value already exists in the table. If it is found, then the operation succeeds. If it is not found, the operation fails with a <code>ConditionCheckFailedException</code>.</p> </li> <li> <p>If <code>Exists</code> is <code>false</code>, DynamoDB assumes that the attribute value does not exist in the table. If in fact the value does not exist, then the assumption is valid and the operation succeeds. If the value is found, despite the assumption that it does not exist, the operation fails with a <code>ConditionCheckFailedException</code>.</p> </li> </ul> <p>The default setting for <code>Exists</code> is <code>true</code>. If you supply a <code>Value</code> all by itself, DynamoDB assumes the attribute exists: You don't have to set <code>Exists</code> to <code>true</code>, because it is implied.</p> <p>DynamoDB returns a <code>ValidationException</code> if:</p> <ul> <li> <p> <code>Exists</code> is <code>true</code> but there is no <code>Value</code> to check. (You expect a value to exist, but don't specify what that value is.)</p> </li> <li> <p> <code>Exists</code> is <code>false</code> but you also provide a <code>Value</code>. (You cannot expect an attribute to have a value, while also expecting it not to exist.)</p> </li> </ul>",
        }),
    ).exactOptional(),
    ComparisonOperator: ComparisonOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A comparator for evaluating attributes in the <code>AttributeValueList</code>. For example, equals, greater than, less than, etc.</p> <p>The following comparison operators are available:</p> <p> <code>EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH | IN | BETWEEN</code> </p> <p>The following are descriptions of each comparison operator.</p> <ul> <li> <p> <code>EQ</code> : Equal. <code>EQ</code> is supported for all data types, including lists and maps.</p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an <code>AttributeValue</code> element of a different type than the one provided in the request, the value does not match. For example, <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also, <code>{"N":"6"}</code> does not equal <code>{"NS":["6", "2", "1"]}</code>.</p> <p/> </li> <li> <p> <code>NE</code> : Not equal. <code>NE</code> is supported for all data types, including lists and maps.</p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an <code>AttributeValue</code> of a different type than the one provided in the request, the value does not match. For example, <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also, <code>{"N":"6"}</code> does not equal <code>{"NS":["6", "2", "1"]}</code>.</p> <p/> </li> <li> <p> <code>LE</code> : Less than or equal. </p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String, Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different type than the one provided in the request, the value does not match. For example, <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also, <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p> <p/> </li> <li> <p> <code>LT</code> : Less than. </p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> of type String, Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different type than the one provided in the request, the value does not match. For example, <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also, <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p> <p/> </li> <li> <p> <code>GE</code> : Greater than or equal. </p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String, Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different type than the one provided in the request, the value does not match. For example, <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also, <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p> <p/> </li> <li> <p> <code>GT</code> : Greater than. </p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String, Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different type than the one provided in the request, the value does not match. For example, <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also, <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p> <p/> </li> <li> <p> <code>NOT_NULL</code> : The attribute exists. <code>NOT_NULL</code> is supported for all data types, including lists and maps.</p> <note> <p>This operator tests for the existence of an attribute, not its data type. If the data type of attribute "<code>a</code>" is null, and you evaluate it using <code>NOT_NULL</code>, the result is a Boolean <code>true</code>. This result is because the attribute "<code>a</code>" exists; its data type is not relevant to the <code>NOT_NULL</code> comparison operator.</p> </note> </li> <li> <p> <code>NULL</code> : The attribute does not exist. <code>NULL</code> is supported for all data types, including lists and maps.</p> <note> <p>This operator tests for the nonexistence of an attribute, not its data type. If the data type of attribute "<code>a</code>" is null, and you evaluate it using <code>NULL</code>, the result is a Boolean <code>false</code>. This is because the attribute "<code>a</code>" exists; its data type is not relevant to the <code>NULL</code> comparison operator.</p> </note> </li> <li> <p> <code>CONTAINS</code> : Checks for a subsequence, or value in a set.</p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is of type String, then the operator checks for a substring match. If the target attribute of the comparison is of type Binary, then the operator looks for a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("<code>SS</code>", "<code>NS</code>", or "<code>BS</code>"), then the operator evaluates to true if it finds an exact match with any member of the set.</p> <p>CONTAINS is supported for lists: When evaluating "<code>a CONTAINS b</code>", "<code>a</code>" can be a list; however, "<code>b</code>" cannot be a set, a map, or a list.</p> </li> <li> <p> <code>NOT_CONTAINS</code> : Checks for absence of a subsequence, or absence of a value in a set.</p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is a String, then the operator checks for the absence of a substring match. If the target attribute of the comparison is Binary, then the operator checks for the absence of a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("<code>SS</code>", "<code>NS</code>", or "<code>BS</code>"), then the operator evaluates to true if it <i>does not</i> find an exact match with any member of the set.</p> <p>NOT_CONTAINS is supported for lists: When evaluating "<code>a NOT CONTAINS b</code>", "<code>a</code>" can be a list; however, "<code>b</code>" cannot be a set, a map, or a list.</p> </li> <li> <p> <code>BEGINS_WITH</code> : Checks for a prefix. </p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> of type String or Binary (not a Number or a set type). The target attribute of the comparison must be of type String or Binary (not a Number or a set type).</p> <p/> </li> <li> <p> <code>IN</code> : Checks for matching elements in a list.</p> <p> <code>AttributeValueList</code> can contain one or more <code>AttributeValue</code> elements of type String, Number, or Binary. These attributes are compared against an existing attribute of an item. If any elements of the input are equal to the item attribute, the expression evaluates to true.</p> </li> <li> <p> <code>BETWEEN</code> : Greater than or equal to the first value, and less than or equal to the second value. </p> <p> <code>AttributeValueList</code> must contain two <code>AttributeValue</code> elements of the same type, either String, Number, or Binary (not a set type). A target attribute matches if the target value is greater than, or equal to, the first element and less than, or equal to, the second element. If an item contains an <code>AttributeValue</code> element of a different type than the one provided in the request, the value does not match. For example, <code>{"S":"6"}</code> does not compare to <code>{"N":"6"}</code>. Also, <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    AttributeValueList: AttributeValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more values to evaluate against the supplied attribute. The number of values in the list depends on the <code>ComparisonOperator</code> being used.</p> <p>For type Number, value comparisons are numeric.</p> <p>String value comparisons for greater than, equals, or less than are based on ASCII character code values. For example, <code>a</code> is greater than <code>A</code>, and <code>a</code> is greater than <code>B</code>. For a list of code values, see <a href="http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters">http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters</a>.</p> <p>For Binary, DynamoDB treats each byte of the binary data as unsigned when it compares binary values.</p> <p>For information on specifying data types in JSON, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataFormat.html">JSON Data Format</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents a condition to be compared with an attribute value. This condition can be used with <code>DeleteItem</code>, <code>PutItem</code>, or <code>UpdateItem</code> operations; if the comparison evaluates to true, the operation succeeds; if not, the operation fails. You can use <code>ExpectedAttributeValue</code> in one of two different ways:</p> <ul> <li> <p>Use <code>AttributeValueList</code> to specify one or more values to compare against an attribute. Use <code>ComparisonOperator</code> to specify how you want to perform the comparison. If the comparison evaluates to true, then the conditional operation succeeds.</p> </li> <li> <p>Use <code>Value</code> to specify a value that DynamoDB will compare against an attribute. If the values match, then <code>ExpectedAttributeValue</code> evaluates to true and the conditional operation succeeds. Optionally, you can also set <code>Exists</code> to false, indicating that you <i>do not</i> expect to find the attribute value in the table. In this case, the conditional operation succeeds only if the comparison evaluates to false.</p> </li> </ul> <p> <code>Value</code> and <code>Exists</code> are incompatible with <code>AttributeValueList</code> and <code>ComparisonOperator</code>. Note that if you use both sets of parameters at once, DynamoDB will return a <code>ValidationException</code> exception.</p>',
    required: [],
  })
  .openapi('ExpectedAttributeValue')

const ExpectedAttributeMapSchema = z
  .record(z.string(), ExpectedAttributeValueSchema)
  .openapi('ExpectedAttributeMap')

const ConditionalOperatorSchema = z.enum(['AND', 'OR']).openapi('ConditionalOperator')

const ReturnValueSchema = z
  .enum(['NONE', 'ALL_OLD', 'UPDATED_OLD', 'ALL_NEW', 'UPDATED_NEW'])
  .openapi('ReturnValue')

const ConditionExpressionSchema = z.string().openapi('ConditionExpression')

const ExpressionAttributeValueMapSchema = z
  .record(z.string(), AttributeValueSchema)
  .openapi('ExpressionAttributeValueMap')

const DeleteItemInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table from which to delete the item.' }),
    ),
    Key: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of attribute names to <code>AttributeValue</code> objects, representing the primary key of the item to delete.</p> <p>For the primary key, you must provide all of the key attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.</p>',
        }),
    ),
    Expected: ExpectedAttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>ConditionExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.Expected.html">Expected</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ConditionalOperator: ConditionalOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>ConditionExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html">ConditionalOperator</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ReturnValues: ReturnValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use <code>ReturnValues</code> if you want to get the item attributes as they appeared before they were deleted. For <code>DeleteItem</code>, the valid values are:</p> <ul> <li> <p> <code>NONE</code> - If <code>ReturnValues</code> is not specified, or if its value is <code>NONE</code>, then nothing is returned. (This setting is the default for <code>ReturnValues</code>.)</p> </li> <li> <p> <code>ALL_OLD</code> - The content of the old item is returned.</p> </li> </ul> <p>There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.</p> <note> <p>The <code>ReturnValues</code> parameter is used by several DynamoDB operations; however, <code>DeleteItem</code> does not recognize any values other than <code>NONE</code> or <code>ALL_OLD</code>.</p> </note>',
        }),
    ).exactOptional(),
    ReturnConsumedCapacity: ReturnConsumedCapacitySchema.exactOptional(),
    ReturnItemCollectionMetrics: ReturnItemCollectionMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether item collection metrics are returned. If set to <code>SIZE</code>, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to <code>NONE</code> (the default), no statistics are returned.',
        }),
    ).exactOptional(),
    ConditionExpression: ConditionExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A condition that must be satisfied in order for a conditional <code>DeleteItem</code> to succeed.</p> <p>An expression can contain any of the following:</p> <ul> <li> <p>Functions: <code>attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size</code> </p> <p>These function names are case-sensitive.</p> </li> <li> <p>Comparison operators: <code>= | &lt;&gt; | &lt; | &gt; | &lt;= | &gt;= | BETWEEN | IN </code> </p> </li> <li> <p> Logical operators: <code>AND | OR | NOT</code> </p> </li> </ul> <p>For more information about condition expressions, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Condition Expressions</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ExpressionAttributeNames: ExpressionAttributeNameMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more substitution tokens for attribute names in an expression. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p> </li> <li> <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p> </li> <li> <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p> </li> </ul> <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p> <ul> <li> <p> <code>Percentile</code> </p> </li> </ul> <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>). To work around this, you could specify the following for <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p> <code>{"#P":"Percentile"}</code> </p> </li> </ul> <p>You could then use this substitution in an expression, as in this example:</p> <ul> <li> <p> <code>#P = :val</code> </p> </li> </ul> <note> <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p> </note> <p>For more information on expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ExpressionAttributeValues: ExpressionAttributeValueMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more values that can be substituted in an expression.</p> <p>Use the <b>:</b> (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the <i>ProductStatus</i> attribute was one of the following: </p> <p> <code>Available | Backordered | Discontinued</code> </p> <p>You would first need to specify <code>ExpressionAttributeValues</code> as follows:</p> <p> <code>{ ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }</code> </p> <p>You could then use these values in an expression, such as this:</p> <p> <code>ProductStatus IN (:avail, :back, :disc)</code> </p> <p>For more information on expression attribute values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Condition Expressions</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ReturnValuesOnConditionCheckFailure: ReturnValuesOnConditionCheckFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter that returns the item attributes for a <code>DeleteItem</code> operation that failed a condition check.</p> <p>There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TableName', 'Key'],
    title: 'DeleteItemInput',
    description: 'Represents the input of a <code>DeleteItem</code> operation.',
  })
  .openapi('DeleteItemInput')

const ConditionalCheckFailedExceptionSchema = z.any().openapi('ConditionalCheckFailedException')

const TransactionConflictExceptionSchema = z.any().openapi('TransactionConflictException')

const DeleteTableOutputSchema = z
  .object({
    TableDescription: TableDescriptionSchema.and(
      z.any().openapi({ description: 'Represents the properties of a table.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      TableDescription: {
        ItemCount: 0,
        ProvisionedThroughput: {
          NumberOfDecreasesToday: 1,
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5,
        },
        TableName: 'Music',
        TableSizeBytes: 0,
        TableStatus: 'DELETING',
      },
    },
    description: 'Represents the output of a <code>DeleteTable</code> operation.',
    required: [],
  })
  .openapi('DeleteTableOutput')

const DeleteTableInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table to delete.' }),
    ),
  })
  .openapi({
    required: ['TableName'],
    title: 'DeleteTableInput',
    description: 'Represents the input of a <code>DeleteTable</code> operation.',
  })
  .openapi('DeleteTableInput')

const DescribeBackupOutputSchema = z
  .object({
    BackupDescription: BackupDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the description of the backup created for the table.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBackupOutput')

const DescribeBackupInputSchema = z
  .object({
    BackupArn: BackupArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) associated with the backup.' }),
    ),
  })
  .openapi({ required: ['BackupArn'], title: 'DescribeBackupInput' })
  .openapi('DescribeBackupInput')

const ContinuousBackupsStatusSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('ContinuousBackupsStatus')

const PointInTimeRecoveryStatusSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('PointInTimeRecoveryStatus')

const PointInTimeRecoveryDescriptionSchema = z
  .object({
    PointInTimeRecoveryStatus: PointInTimeRecoveryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current state of point in time recovery:</p> <ul> <li> <p> <code>ENABLED</code> - Point in time recovery is enabled.</p> </li> <li> <p> <code>DISABLED</code> - Point in time recovery is disabled.</p> </li> </ul>',
        }),
    ).exactOptional(),
    EarliestRestorableDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the earliest point in time you can restore your table to. You can restore your table to any point in time during the last 35 days. ',
        }),
    ).exactOptional(),
    LatestRestorableDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The description of the point in time settings applied to the table.',
    required: [],
  })
  .openapi('PointInTimeRecoveryDescription')

const ContinuousBackupsDescriptionSchema = z
  .object({
    ContinuousBackupsStatus: ContinuousBackupsStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>ContinuousBackupsStatus</code> can be one of the following states: ENABLED, DISABLED',
        }),
    ),
    PointInTimeRecoveryDescription: PointInTimeRecoveryDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the point in time recovery settings applied to the table.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ContinuousBackupsStatus'],
    description:
      'Represents the continuous backups and point in time recovery settings on the table.',
  })
  .openapi('ContinuousBackupsDescription')

const DescribeContinuousBackupsOutputSchema = z
  .object({
    ContinuousBackupsDescription: ContinuousBackupsDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the continuous backups and point in time recovery settings on the table.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeContinuousBackupsOutput')

const DescribeContinuousBackupsInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the table for which the customer wants to check the continuous backups and point in time recovery settings.',
        }),
    ),
  })
  .openapi({ required: ['TableName'], title: 'DescribeContinuousBackupsInput' })
  .openapi('DescribeContinuousBackupsInput')

const ContributorInsightsRuleSchema = z
  .string()
  .regex(/[A-Za-z0-9][A-Za-z0-9\-\_\.]{0,126}[A-Za-z0-9]/)
  .openapi('ContributorInsightsRule')

const ContributorInsightsRuleListSchema = z
  .array(ContributorInsightsRuleSchema)
  .openapi('ContributorInsightsRuleList')

const ContributorInsightsStatusSchema = z
  .enum(['ENABLING', 'ENABLED', 'DISABLING', 'DISABLED', 'FAILED'])
  .openapi('ContributorInsightsStatus')

const LastUpdateDateTimeSchema = z.iso.datetime({ offset: true }).openapi('LastUpdateDateTime')

const ExceptionNameSchema = z.string().openapi('ExceptionName')

const ExceptionDescriptionSchema = z.string().openapi('ExceptionDescription')

const FailureExceptionSchema = z
  .object({
    ExceptionName: ExceptionNameSchema.and(
      z.any().openapi({ description: 'Exception name.' }),
    ).exactOptional(),
    ExceptionDescription: ExceptionDescriptionSchema.and(
      z.any().openapi({ description: 'Description of the failure.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a failure a contributor insights operation.', required: [] })
  .openapi('FailureException')

const DescribeContributorInsightsOutputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table being described.' }),
    ).exactOptional(),
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'The name of the global secondary index being described.' }),
    ).exactOptional(),
    ContributorInsightsRuleList: ContributorInsightsRuleListSchema.and(
      z
        .any()
        .openapi({ description: 'List of names of the associated contributor insights rules.' }),
    ).exactOptional(),
    ContributorInsightsStatus: ContributorInsightsStatusSchema.and(
      z.any().openapi({ description: 'Current status of contributor insights.' }),
    ).exactOptional(),
    LastUpdateDateTime: LastUpdateDateTimeSchema.and(
      z.any().openapi({ description: 'Timestamp of the last time the status was changed.' }),
    ).exactOptional(),
    FailureException: FailureExceptionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Returns information about the last failure that was encountered.</p> <p>The most common exceptions for a FAILED status are:</p> <ul> <li> <p>LimitExceededException - Per-account Amazon CloudWatch Contributor Insights rule limit reached. Please disable Contributor Insights for other tables/indexes OR disable Contributor Insights rules before retrying.</p> </li> <li> <p>AccessDeniedException - Amazon CloudWatch Contributor Insights rules cannot be modified due to insufficient permissions.</p> </li> <li> <p>AccessDeniedException - Failed to create service-linked role for Contributor Insights due to insufficient permissions.</p> </li> <li> <p>InternalServerError - Failed to create Amazon CloudWatch Contributor Insights rules. Please retry request.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeContributorInsightsOutput')

const DescribeContributorInsightsInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table to describe.' }),
    ),
    IndexName: IndexNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the global secondary index to describe, if applicable.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TableName'], title: 'DescribeContributorInsightsInput' })
  .openapi('DescribeContributorInsightsInput')

const LongSchema = z.int().openapi('Long')

const EndpointSchema = z
  .object({
    Address: StringSchema.and(z.any().openapi({ description: 'IP address of the endpoint.' })),
    CachePeriodInMinutes: LongSchema.and(
      z.any().openapi({ description: 'Endpoint cache time to live (TTL) value.' }),
    ),
  })
  .openapi({
    required: ['Address', 'CachePeriodInMinutes'],
    description: 'An endpoint information details.',
  })
  .openapi('Endpoint')

const EndpointsSchema = z.array(EndpointSchema).openapi('Endpoints')

const DescribeEndpointsResponseSchema = z
  .object({
    Endpoints: EndpointsSchema.and(z.any().openapi({ description: 'List of endpoints.' })),
  })
  .openapi({ required: ['Endpoints'] })
  .openapi('DescribeEndpointsResponse')

const DescribeEndpointsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeEndpointsRequest' })
  .openapi('DescribeEndpointsRequest')

const ExportArnSchema = z.string().min(37).max(1024).openapi('ExportArn')

const ExportStatusSchema = z.enum(['IN_PROGRESS', 'COMPLETED', 'FAILED']).openapi('ExportStatus')

const ExportStartTimeSchema = z.iso.datetime({ offset: true }).openapi('ExportStartTime')

const ExportEndTimeSchema = z.iso.datetime({ offset: true }).openapi('ExportEndTime')

const ExportManifestSchema = z.string().openapi('ExportManifest')

const ExportTimeSchema = z.iso.datetime({ offset: true }).openapi('ExportTime')

const ClientTokenSchema = z
  .string()
  .regex(/^[^\$]+$/)
  .openapi('ClientToken')

const S3BucketSchema = z
  .string()
  .regex(/^[a-z0-9A-Z]+[\.\-\w]*[a-z0-9A-Z]+$/)
  .max(255)
  .openapi('S3Bucket')

const S3BucketOwnerSchema = z
  .string()
  .regex(/[0-9]{12}/)
  .openapi('S3BucketOwner')

const S3PrefixSchema = z.string().max(1024).openapi('S3Prefix')

const S3SseAlgorithmSchema = z.enum(['AES256', 'KMS']).openapi('S3SseAlgorithm')

const S3SseKmsKeyIdSchema = z.string().min(1).max(2048).openapi('S3SseKmsKeyId')

const FailureCodeSchema = z.string().openapi('FailureCode')

const FailureMessageSchema = z.string().openapi('FailureMessage')

const ExportFormatSchema = z.enum(['DYNAMODB_JSON', 'ION']).openapi('ExportFormat')

const BilledSizeBytesSchema = z.int().min(0).openapi('BilledSizeBytes')

const ExportDescriptionSchema = z
  .object({
    ExportArn: ExportArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the table export.' }),
    ).exactOptional(),
    ExportStatus: ExportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Export can be in one of the following states: IN_PROGRESS, COMPLETED, or FAILED.',
        }),
    ).exactOptional(),
    StartTime: ExportStartTimeSchema.and(
      z.any().openapi({ description: 'The time at which the export task began.' }),
    ).exactOptional(),
    EndTime: ExportEndTimeSchema.and(
      z.any().openapi({ description: 'The time at which the export task completed.' }),
    ).exactOptional(),
    ExportManifest: ExportManifestSchema.and(
      z.any().openapi({ description: 'The name of the manifest file for the export task.' }),
    ).exactOptional(),
    TableArn: TableArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the table that was exported.' }),
    ).exactOptional(),
    TableId: TableIdSchema.and(
      z.any().openapi({ description: 'Unique ID of the table that was exported.' }),
    ).exactOptional(),
    ExportTime: ExportTimeSchema.and(
      z.any().openapi({ description: 'Point in time from which table data was exported.' }),
    ).exactOptional(),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The client token that was provided for the export task. A client token makes calls to <code>ExportTableToPointInTimeInput</code> idempotent, meaning that multiple identical calls have the same effect as one single call.',
        }),
    ).exactOptional(),
    S3Bucket: S3BucketSchema.and(
      z.any().openapi({ description: 'The name of the Amazon S3 bucket containing the export.' }),
    ).exactOptional(),
    S3BucketOwner: S3BucketOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services account that owns the bucket containing the export.',
        }),
    ).exactOptional(),
    S3Prefix: S3PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket prefix used as the file name and path of the exported snapshot.',
        }),
    ).exactOptional(),
    S3SseAlgorithm: S3SseAlgorithmSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Type of encryption used on the bucket where export data is stored. Valid values for <code>S3SseAlgorithm</code> are:</p> <ul> <li> <p> <code>AES256</code> - server-side encryption with Amazon S3 managed keys</p> </li> <li> <p> <code>KMS</code> - server-side encryption with KMS managed keys</p> </li> </ul>',
        }),
    ).exactOptional(),
    S3SseKmsKeyId: S3SseKmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the KMS managed key used to encrypt the S3 bucket where export data is stored (if applicable).',
        }),
    ).exactOptional(),
    FailureCode: FailureCodeSchema.and(
      z.any().openapi({ description: 'Status code for the result of the failed export.' }),
    ).exactOptional(),
    FailureMessage: FailureMessageSchema.and(
      z.any().openapi({ description: 'Export failure reason description.' }),
    ).exactOptional(),
    ExportFormat: ExportFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format of the exported data. Valid values for <code>ExportFormat</code> are <code>DYNAMODB_JSON</code> or <code>ION</code>.',
        }),
    ).exactOptional(),
    BilledSizeBytes: BilledSizeBytesSchema.and(
      z.any().openapi({ description: 'The billable size of the table export.' }),
    ).exactOptional(),
    ItemCount: ItemCountSchema.and(
      z.any().openapi({ description: 'The number of items exported.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the properties of the exported table.', required: [] })
  .openapi('ExportDescription')

const DescribeExportOutputSchema = z
  .object({
    ExportDescription: ExportDescriptionSchema.and(
      z.any().openapi({ description: 'Represents the properties of the export.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeExportOutput')

const DescribeExportInputSchema = z
  .object({
    ExportArn: ExportArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) associated with the export.' }),
    ),
  })
  .openapi({ required: ['ExportArn'], title: 'DescribeExportInput' })
  .openapi('DescribeExportInput')

const ExportNotFoundExceptionSchema = z.any().openapi('ExportNotFoundException')

const DescribeGlobalTableOutputSchema = z
  .object({
    GlobalTableDescription: GlobalTableDescriptionSchema.and(
      z.any().openapi({ description: 'Contains the details of the global table.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeGlobalTableOutput')

const DescribeGlobalTableInputSchema = z
  .object({
    GlobalTableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the global table.' }),
    ),
  })
  .openapi({ required: ['GlobalTableName'], title: 'DescribeGlobalTableInput' })
  .openapi('DescribeGlobalTableInput')

const GlobalTableNotFoundExceptionSchema = z.any().openapi('GlobalTableNotFoundException')

const AutoScalingPolicyNameSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi({ pattern: '\\p{Print}+' })
  .openapi('AutoScalingPolicyName')

const IntegerObjectSchema = z.int().openapi('IntegerObject')

const DoubleObjectSchema = z.float64().openapi('DoubleObject')

const AutoScalingTargetTrackingScalingPolicyConfigurationDescriptionSchema = z
  .object({
    DisableScaleIn: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            "Indicates whether scale in by the target tracking policy is disabled. If the value is true, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is false.",
        }),
    ).exactOptional(),
    ScaleInCooldown: IntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            "The amount of time, in seconds, after a scale in activity completes before another scale in activity can start. The cooldown period is used to block subsequent scale in requests until it has expired. You should scale in conservatively to protect your application's availability. However, if another alarm triggers a scale out policy during the cooldown period after a scale-in, application auto scaling scales out your scalable target immediately. ",
        }),
    ).exactOptional(),
    ScaleOutCooldown: IntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time, in seconds, after a scale out activity completes before another scale out activity can start. While the cooldown period is in effect, the capacity that has been added by the previous scale out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. You should continuously (but not excessively) scale out.',
        }),
    ).exactOptional(),
    TargetValue: DoubleObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).',
        }),
    ),
  })
  .openapi({
    required: ['TargetValue'],
    description: 'Represents the properties of a target tracking scaling policy.',
  })
  .openapi('AutoScalingTargetTrackingScalingPolicyConfigurationDescription')

const AutoScalingPolicyDescriptionSchema = z
  .object({
    PolicyName: AutoScalingPolicyNameSchema.and(
      z.any().openapi({ description: 'The name of the scaling policy.' }),
    ).exactOptional(),
    TargetTrackingScalingPolicyConfiguration:
      AutoScalingTargetTrackingScalingPolicyConfigurationDescriptionSchema.and(
        z
          .any()
          .openapi({ description: 'Represents a target tracking scaling policy configuration.' }),
      ).exactOptional(),
  })
  .openapi({ description: 'Represents the properties of the scaling policy.', required: [] })
  .openapi('AutoScalingPolicyDescription')

const AutoScalingPolicyDescriptionListSchema = z
  .array(AutoScalingPolicyDescriptionSchema)
  .openapi('AutoScalingPolicyDescriptionList')

const AutoScalingSettingsDescriptionSchema = z
  .object({
    MinimumUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum capacity units that a global table or global secondary index should be scaled down to.',
        }),
    ).exactOptional(),
    MaximumUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum capacity units that a global table or global secondary index should be scaled up to.',
        }),
    ).exactOptional(),
    AutoScalingDisabled: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Disabled auto scaling for this global table or global secondary index.',
        }),
    ).exactOptional(),
    AutoScalingRoleArn: StringSchema.and(
      z.any().openapi({ description: 'Role ARN used for configuring the auto scaling policy.' }),
    ).exactOptional(),
    ScalingPolicies: AutoScalingPolicyDescriptionListSchema.and(
      z.any().openapi({ description: 'Information about the scaling policies.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the auto scaling settings for a global table or global secondary index.',
    required: [],
  })
  .openapi('AutoScalingSettingsDescription')

const ReplicaGlobalSecondaryIndexSettingsDescriptionSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the global secondary index. The name must be unique among all other indexes on this table.',
        }),
    ),
    IndexStatus: IndexStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The current status of the global secondary index:</p> <ul> <li> <p> <code>CREATING</code> - The global secondary index is being created.</p> </li> <li> <p> <code>UPDATING</code> - The global secondary index is being updated.</p> </li> <li> <p> <code>DELETING</code> - The global secondary index is being deleted.</p> </li> <li> <p> <code>ACTIVE</code> - The global secondary index is ready for use.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProvisionedReadCapacityUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>.',
        }),
    ).exactOptional(),
    ProvisionedReadCapacityAutoScalingSettings: AutoScalingSettingsDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "Auto scaling settings for a global secondary index replica's read capacity units.",
        }),
    ).exactOptional(),
    ProvisionedWriteCapacityUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException</code>.',
        }),
    ).exactOptional(),
    ProvisionedWriteCapacityAutoScalingSettings: AutoScalingSettingsDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "Auto scaling settings for a global secondary index replica's write capacity units.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IndexName'],
    description: 'Represents the properties of a global secondary index.',
  })
  .openapi('ReplicaGlobalSecondaryIndexSettingsDescription')

const ReplicaGlobalSecondaryIndexSettingsDescriptionListSchema = z
  .array(ReplicaGlobalSecondaryIndexSettingsDescriptionSchema)
  .openapi('ReplicaGlobalSecondaryIndexSettingsDescriptionList')

const ReplicaSettingsDescriptionSchema = z
  .object({
    RegionName: RegionNameSchema.and(
      z.any().openapi({ description: 'The Region name of the replica.' }),
    ),
    ReplicaStatus: ReplicaStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current state of the Region:</p> <ul> <li> <p> <code>CREATING</code> - The Region is being created.</p> </li> <li> <p> <code>UPDATING</code> - The Region is being updated.</p> </li> <li> <p> <code>DELETING</code> - The Region is being deleted.</p> </li> <li> <p> <code>ACTIVE</code> - The Region is ready for use.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ReplicaBillingModeSummary: BillingModeSummarySchema.and(
      z.any().openapi({ description: 'The read/write capacity mode of the replica.' }),
    ).exactOptional(),
    ReplicaProvisionedReadCapacityUnits: NonNegativeLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>. ',
        }),
    ).exactOptional(),
    ReplicaProvisionedReadCapacityAutoScalingSettings: AutoScalingSettingsDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: "Auto scaling settings for a global table replica's read capacity units.",
        }),
    ).exactOptional(),
    ReplicaProvisionedWriteCapacityUnits: NonNegativeLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException</code>. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ReplicaProvisionedWriteCapacityAutoScalingSettings: AutoScalingSettingsDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: "Auto scaling settings for a global table replica's write capacity units.",
        }),
    ).exactOptional(),
    ReplicaGlobalSecondaryIndexSettings:
      ReplicaGlobalSecondaryIndexSettingsDescriptionListSchema.and(
        z
          .any()
          .openapi({
            description: 'Replica global secondary index settings for the global table.',
          }),
      ).exactOptional(),
    ReplicaTableClassSummary: TableClassSummarySchema.exactOptional(),
  })
  .openapi({ required: ['RegionName'], description: 'Represents the properties of a replica.' })
  .openapi('ReplicaSettingsDescription')

const ReplicaSettingsDescriptionListSchema = z
  .array(ReplicaSettingsDescriptionSchema)
  .openapi('ReplicaSettingsDescriptionList')

const DescribeGlobalTableSettingsOutputSchema = z
  .object({
    GlobalTableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the global table.' }),
    ).exactOptional(),
    ReplicaSettings: ReplicaSettingsDescriptionListSchema.and(
      z.any().openapi({ description: 'The Region-specific settings for the global table.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeGlobalTableSettingsOutput')

const DescribeGlobalTableSettingsInputSchema = z
  .object({
    GlobalTableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the global table to describe.' }),
    ),
  })
  .openapi({ required: ['GlobalTableName'], title: 'DescribeGlobalTableSettingsInput' })
  .openapi('DescribeGlobalTableSettingsInput')

const ImportArnSchema = z.string().min(37).max(1024).openapi('ImportArn')

const ImportStatusSchema = z
  .enum(['IN_PROGRESS', 'COMPLETED', 'CANCELLING', 'CANCELLED', 'FAILED'])
  .openapi('ImportStatus')

const S3BucketSourceSchema = z
  .object({
    S3BucketOwner: S3BucketOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The account number of the S3 bucket that is being imported from. If the bucket is owned by the requester this is optional. ',
        }),
    ).exactOptional(),
    S3Bucket: S3BucketSchema.and(
      z.any().openapi({ description: ' The S3 bucket that is being imported from. ' }),
    ),
    S3KeyPrefix: S3PrefixSchema.and(
      z
        .any()
        .openapi({
          description: ' The key prefix shared by all S3 Objects that are being imported. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['S3Bucket'], description: ' The S3 bucket that is being imported from. ' })
  .openapi('S3BucketSource')

const ErrorCountSchema = z.int().min(0).openapi('ErrorCount')

const CloudWatchLogGroupArnSchema = z.string().min(1).max(1024).openapi('CloudWatchLogGroupArn')

const InputFormatSchema = z.enum(['DYNAMODB_JSON', 'ION', 'CSV']).openapi('InputFormat')

const CsvDelimiterSchema = z
  .string()
  .regex(/[,;:|\t ]/)
  .length(1)
  .openapi('CsvDelimiter')

const CsvHeaderSchema = z
  .string()
  .regex(/[\x20-\x21\x23-\x2B\x2D-\x7E]*/)
  .min(1)
  .max(65536)
  .openapi('CsvHeader')

const CsvHeaderListSchema = z.array(CsvHeaderSchema).min(1).max(255).openapi('CsvHeaderList')

const CsvOptionsSchema = z
  .object({
    Delimiter: CsvDelimiterSchema.and(
      z
        .any()
        .openapi({
          description: ' The delimiter used for separating items in the CSV file being imported. ',
        }),
    ).exactOptional(),
    HeaderList: CsvHeaderListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' List of the headers used to specify a common header for all source CSV files being imported. If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' Processing options for the CSV file being imported. ', required: [] })
  .openapi('CsvOptions')

const InputFormatOptionsSchema = z
  .object({
    Csv: CsvOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The options for imported source files in CSV format. The values are Delimiter and HeaderList. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The format options for the data that was imported into the target table. There is one value, CsvOption.',
    required: [],
  })
  .openapi('InputFormatOptions')

const InputCompressionTypeSchema = z.enum(['GZIP', 'ZSTD', 'NONE']).openapi('InputCompressionType')

const TableCreationParametersSchema = z
  .object({
    TableName: TableNameSchema.and(
      z
        .any()
        .openapi({
          description: ' The name of the table created as part of the import operation. ',
        }),
    ),
    AttributeDefinitions: AttributeDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description: ' The attributes of the table created as part of the import operation. ',
        }),
    ),
    KeySchema: KeySchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The primary key and option sort key of the table created as part of the import operation. ',
        }),
    ),
    BillingMode: BillingModeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The billing mode for provisioning the table created as part of the import operation. ',
        }),
    ).exactOptional(),
    ProvisionedThroughput: ProvisionedThroughputSchema.exactOptional(),
    SSESpecification: SSESpecificationSchema.exactOptional(),
    GlobalSecondaryIndexes: GlobalSecondaryIndexListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Global Secondary Indexes (GSI) of the table to be created as part of the import operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TableName', 'AttributeDefinitions', 'KeySchema'],
    description: ' The parameters for the table created as part of the import operation. ',
  })
  .openapi('TableCreationParameters')

const ImportStartTimeSchema = z.iso.datetime({ offset: true }).openapi('ImportStartTime')

const ImportEndTimeSchema = z.iso.datetime({ offset: true }).openapi('ImportEndTime')

const ProcessedItemCountSchema = z.int().min(0).openapi('ProcessedItemCount')

const ImportedItemCountSchema = z.int().min(0).openapi('ImportedItemCount')

const ImportTableDescriptionSchema = z
  .object({
    ImportArn: ImportArnSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon Resource Number (ARN) corresponding to the import request. ',
        }),
    ).exactOptional(),
    ImportStatus: ImportStatusSchema.and(
      z.any().openapi({ description: ' The status of the import. ' }),
    ).exactOptional(),
    TableArn: TableArnSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon Resource Number (ARN) of the table being imported into. ',
        }),
    ).exactOptional(),
    TableId: TableIdSchema.and(
      z
        .any()
        .openapi({
          description: ' The table id corresponding to the table created by import table process. ',
        }),
    ).exactOptional(),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The client token that was provided for the import task. Reusing the client token on retry makes a call to <code>ImportTable</code> idempotent. ',
        }),
    ).exactOptional(),
    S3BucketSource: S3BucketSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Values for the S3 bucket the source file is imported from. Includes bucket name (required), key prefix (optional) and bucket account owner ID (optional). ',
        }),
    ).exactOptional(),
    ErrorCount: ErrorCountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of errors occurred on importing the source file into the target table. ',
        }),
    ).exactOptional(),
    CloudWatchLogGroupArn: CloudWatchLogGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Number (ARN) of the Cloudwatch Log Group associated with the target table. ',
        }),
    ).exactOptional(),
    InputFormat: InputFormatSchema.and(
      z
        .any()
        .openapi({ description: ' The format of the source data going into the target table. ' }),
    ).exactOptional(),
    InputFormatOptions: InputFormatOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The format options for the data that was imported into the target table. There is one value, CsvOption. ',
        }),
    ).exactOptional(),
    InputCompressionType: InputCompressionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The compression options for the data that has been imported into the target table. The values are NONE, GZIP, or ZSTD. ',
        }),
    ).exactOptional(),
    TableCreationParameters: TableCreationParametersSchema.and(
      z
        .any()
        .openapi({
          description: ' The parameters for the new table that is being imported into. ',
        }),
    ).exactOptional(),
    StartTime: ImportStartTimeSchema.and(
      z.any().openapi({ description: ' The time when this import task started. ' }),
    ).exactOptional(),
    EndTime: ImportEndTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The time at which the creation of the table associated with this import task completed. ',
        }),
    ).exactOptional(),
    ProcessedSizeBytes: LongObjectSchema.and(
      z
        .any()
        .openapi({
          description: ' The total size of data processed from the source file, in Bytes. ',
        }),
    ).exactOptional(),
    ProcessedItemCount: ProcessedItemCountSchema.and(
      z
        .any()
        .openapi({ description: ' The total number of items processed from the source file. ' }),
    ).exactOptional(),
    ImportedItemCount: ImportedItemCountSchema.and(
      z
        .any()
        .openapi({
          description: ' The number of items successfully imported into the new table. ',
        }),
    ).exactOptional(),
    FailureCode: FailureCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The error code corresponding to the failure that the import job ran into during execution. ',
        }),
    ).exactOptional(),
    FailureMessage: FailureMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The error message corresponding to the failure that the import job ran into during execution. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Represents the properties of the table being imported into. ',
    required: [],
  })
  .openapi('ImportTableDescription')

const DescribeImportOutputSchema = z
  .object({
    ImportTableDescription: ImportTableDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Represents the properties of the table created for the import, and parameters of the import. The import parameters include import status, how many items were processed, and how many errors were encountered. ',
        }),
    ),
  })
  .openapi({ required: ['ImportTableDescription'] })
  .openapi('DescribeImportOutput')

const DescribeImportInputSchema = z
  .object({
    ImportArn: ImportArnSchema.and(
      z
        .any()
        .openapi({
          description:
            " The Amazon Resource Name (ARN) associated with the table you're importing to. ",
        }),
    ),
  })
  .openapi({ required: ['ImportArn'], title: 'DescribeImportInput' })
  .openapi('DescribeImportInput')

const ImportNotFoundExceptionSchema = z.any().openapi('ImportNotFoundException')

const DestinationStatusSchema = z
  .enum(['ENABLING', 'ACTIVE', 'DISABLING', 'DISABLED', 'ENABLE_FAILED'])
  .openapi('DestinationStatus')

const KinesisDataStreamDestinationSchema = z
  .object({
    StreamArn: StreamArnSchema.and(
      z.any().openapi({ description: 'The ARN for a specific Kinesis data stream.' }),
    ).exactOptional(),
    DestinationStatus: DestinationStatusSchema.and(
      z.any().openapi({ description: 'The current status of replication.' }),
    ).exactOptional(),
    DestinationStatusDescription: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The human-readable string that corresponds to the replica status.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a Kinesis data stream destination.', required: [] })
  .openapi('KinesisDataStreamDestination')

const KinesisDataStreamDestinationsSchema = z
  .array(KinesisDataStreamDestinationSchema)
  .openapi('KinesisDataStreamDestinations')

const DescribeKinesisStreamingDestinationOutputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table being described.' }),
    ).exactOptional(),
    KinesisDataStreamDestinations: KinesisDataStreamDestinationsSchema.and(
      z
        .any()
        .openapi({ description: 'The list of replica structures for the table being described.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeKinesisStreamingDestinationOutput')

const DescribeKinesisStreamingDestinationInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table being described.' }),
    ),
  })
  .openapi({ required: ['TableName'], title: 'DescribeKinesisStreamingDestinationInput' })
  .openapi('DescribeKinesisStreamingDestinationInput')

const DescribeLimitsOutputSchema = z
  .object({
    AccountMaxReadCapacityUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum total read capacity units that your account allows you to provision across all of your tables in this Region.',
        }),
    ).exactOptional(),
    AccountMaxWriteCapacityUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum total write capacity units that your account allows you to provision across all of your tables in this Region.',
        }),
    ).exactOptional(),
    TableMaxReadCapacityUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum read capacity units that your account allows you to provision for a new table that you are creating in this Region, including the read capacity units provisioned for its global secondary indexes (GSIs).',
        }),
    ).exactOptional(),
    TableMaxWriteCapacityUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum write capacity units that your account allows you to provision for a new table that you are creating in this Region, including the write capacity units provisioned for its global secondary indexes (GSIs).',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      AccountMaxReadCapacityUnits: 20000,
      AccountMaxWriteCapacityUnits: 20000,
      TableMaxReadCapacityUnits: 10000,
      TableMaxWriteCapacityUnits: 10000,
    },
    description: 'Represents the output of a <code>DescribeLimits</code> operation.',
    required: [],
  })
  .openapi('DescribeLimitsOutput')

const DescribeLimitsInputSchema = z
  .object({})
  .openapi({
    title: 'DescribeLimitsInput',
    description: 'Represents the input of a <code>DescribeLimits</code> operation. Has no content.',
  })
  .openapi('DescribeLimitsInput')

const DescribeTableOutputSchema = z
  .object({
    Table: TableDescriptionSchema.and(
      z.any().openapi({ description: 'The properties of the table.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Table: {
        AttributeDefinitions: [
          { AttributeName: 'Artist', AttributeType: 'S' },
          { AttributeName: 'SongTitle', AttributeType: 'S' },
        ],
        CreationDateTime: '1421866952.062',
        ItemCount: 0,
        KeySchema: [
          { AttributeName: 'Artist', KeyType: 'HASH' },
          { AttributeName: 'SongTitle', KeyType: 'RANGE' },
        ],
        ProvisionedThroughput: {
          NumberOfDecreasesToday: 1,
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5,
        },
        TableName: 'Music',
        TableSizeBytes: 0,
        TableStatus: 'ACTIVE',
      },
    },
    description: 'Represents the output of a <code>DescribeTable</code> operation.',
    required: [],
  })
  .openapi('DescribeTableOutput')

const DescribeTableInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table to describe.' }),
    ),
  })
  .openapi({
    required: ['TableName'],
    title: 'DescribeTableInput',
    description: 'Represents the input of a <code>DescribeTable</code> operation.',
  })
  .openapi('DescribeTableInput')

const ReplicaGlobalSecondaryIndexAutoScalingDescriptionSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'The name of the global secondary index.' }),
    ).exactOptional(),
    IndexStatus: IndexStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current state of the replica global secondary index:</p> <ul> <li> <p> <code>CREATING</code> - The index is being created.</p> </li> <li> <p> <code>UPDATING</code> - The table/index configuration is being updated. The table/index remains available for data operations when <code>UPDATING</code> </p> </li> <li> <p> <code>DELETING</code> - The index is being deleted.</p> </li> <li> <p> <code>ACTIVE</code> - The index is ready for use.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProvisionedReadCapacityAutoScalingSettings:
      AutoScalingSettingsDescriptionSchema.exactOptional(),
    ProvisionedWriteCapacityAutoScalingSettings:
      AutoScalingSettingsDescriptionSchema.exactOptional(),
  })
  .openapi({
    description: 'Represents the auto scaling configuration for a replica global secondary index.',
    required: [],
  })
  .openapi('ReplicaGlobalSecondaryIndexAutoScalingDescription')

const ReplicaGlobalSecondaryIndexAutoScalingDescriptionListSchema = z
  .array(ReplicaGlobalSecondaryIndexAutoScalingDescriptionSchema)
  .openapi('ReplicaGlobalSecondaryIndexAutoScalingDescriptionList')

const ReplicaAutoScalingDescriptionSchema = z
  .object({
    RegionName: RegionNameSchema.and(
      z.any().openapi({ description: 'The Region where the replica exists.' }),
    ).exactOptional(),
    GlobalSecondaryIndexes: ReplicaGlobalSecondaryIndexAutoScalingDescriptionListSchema.and(
      z
        .any()
        .openapi({ description: 'Replica-specific global secondary index auto scaling settings.' }),
    ).exactOptional(),
    ReplicaProvisionedReadCapacityAutoScalingSettings:
      AutoScalingSettingsDescriptionSchema.exactOptional(),
    ReplicaProvisionedWriteCapacityAutoScalingSettings:
      AutoScalingSettingsDescriptionSchema.exactOptional(),
    ReplicaStatus: ReplicaStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current state of the replica:</p> <ul> <li> <p> <code>CREATING</code> - The replica is being created.</p> </li> <li> <p> <code>UPDATING</code> - The replica is being updated.</p> </li> <li> <p> <code>DELETING</code> - The replica is being deleted.</p> </li> <li> <p> <code>ACTIVE</code> - The replica is ready for use.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the auto scaling settings of the replica.', required: [] })
  .openapi('ReplicaAutoScalingDescription')

const ReplicaAutoScalingDescriptionListSchema = z
  .array(ReplicaAutoScalingDescriptionSchema)
  .openapi('ReplicaAutoScalingDescriptionList')

const TableAutoScalingDescriptionSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table.' }),
    ).exactOptional(),
    TableStatus: TableStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current state of the table:</p> <ul> <li> <p> <code>CREATING</code> - The table is being created.</p> </li> <li> <p> <code>UPDATING</code> - The table is being updated.</p> </li> <li> <p> <code>DELETING</code> - The table is being deleted.</p> </li> <li> <p> <code>ACTIVE</code> - The table is ready for use.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Replicas: ReplicaAutoScalingDescriptionListSchema.and(
      z.any().openapi({ description: 'Represents replicas of the global table.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the auto scaling configuration for a global table.',
    required: [],
  })
  .openapi('TableAutoScalingDescription')

const DescribeTableReplicaAutoScalingOutputSchema = z
  .object({
    TableAutoScalingDescription: TableAutoScalingDescriptionSchema.and(
      z.any().openapi({ description: 'Represents the auto scaling properties of the table.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeTableReplicaAutoScalingOutput')

const DescribeTableReplicaAutoScalingInputSchema = z
  .object({
    TableName: TableNameSchema.and(z.any().openapi({ description: 'The name of the table.' })),
  })
  .openapi({ required: ['TableName'], title: 'DescribeTableReplicaAutoScalingInput' })
  .openapi('DescribeTableReplicaAutoScalingInput')

const DescribeTimeToLiveOutputSchema = z
  .object({
    TimeToLiveDescription: TimeToLiveDescriptionSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeTimeToLiveOutput')

const DescribeTimeToLiveInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table to be described.' }),
    ),
  })
  .openapi({ required: ['TableName'], title: 'DescribeTimeToLiveInput' })
  .openapi('DescribeTimeToLiveInput')

const KinesisStreamingDestinationOutputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table being modified.' }),
    ).exactOptional(),
    StreamArn: StreamArnSchema.and(
      z.any().openapi({ description: 'The ARN for the specific Kinesis data stream.' }),
    ).exactOptional(),
    DestinationStatus: DestinationStatusSchema.and(
      z.any().openapi({ description: 'The current status of the replication.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KinesisStreamingDestinationOutput')

const KinesisStreamingDestinationInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the DynamoDB table.' }),
    ),
    StreamArn: StreamArnSchema.and(
      z.any().openapi({ description: 'The ARN for a Kinesis data stream.' }),
    ),
  })
  .openapi({ required: ['TableName', 'StreamArn'], title: 'KinesisStreamingDestinationInput' })
  .openapi('KinesisStreamingDestinationInput')

const PartiQLNextTokenSchema = z.string().min(1).max(32768).openapi('PartiQLNextToken')

const ExecuteStatementOutputSchema = z
  .object({
    Items: ItemListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a read operation was used, this property will contain the result of the read operation; a map of attribute names and their values. For the write operations this value will be empty.',
        }),
    ).exactOptional(),
    NextToken: PartiQLNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response of a read request exceeds the response payload limit DynamoDB will set this value in the response. If set, you can use that this value in the subsequent request to get the remaining results.',
        }),
    ).exactOptional(),
    ConsumedCapacity: ConsumedCapacitySchema.exactOptional(),
    LastEvaluatedKey: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The primary key of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request. If <code>LastEvaluatedKey</code> is empty, then the "last page" of results has been processed and there is no more data to be retrieved. If <code>LastEvaluatedKey</code> is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when <code>LastEvaluatedKey</code> is empty. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExecuteStatementOutput')

const PositiveIntegerObjectSchema = z.int().min(1).openapi('PositiveIntegerObject')

const ExecuteStatementInputSchema = z
  .object({
    Statement: PartiQLStatementSchema.and(
      z.any().openapi({ description: 'The PartiQL statement representing the operation to run.' }),
    ),
    Parameters: PreparedStatementParametersSchema.and(
      z.any().openapi({ description: 'The parameters for the PartiQL statement, if any.' }),
    ).exactOptional(),
    ConsistentRead: ConsistentReadSchema.and(
      z
        .any()
        .openapi({
          description:
            'The consistency of a read operation. If set to <code>true</code>, then a strongly consistent read is used; otherwise, an eventually consistent read is used.',
        }),
    ).exactOptional(),
    NextToken: PartiQLNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this value to get remaining results, if <code>NextToken</code> was returned in the statement response.',
        }),
    ).exactOptional(),
    ReturnConsumedCapacity: ReturnConsumedCapacitySchema.exactOptional(),
    Limit: PositiveIntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to evaluate (not necessarily the number of matching items). If DynamoDB processes the number of items up to the limit while processing the results, it stops the operation and returns the matching values up to that point, along with a key in <code>LastEvaluatedKey</code> to apply in a subsequent operation so you can pick up where you left off. Also, if the processed dataset size exceeds 1 MB before DynamoDB reaches this limit, it stops the operation and returns the matching values up to the limit, and a key in <code>LastEvaluatedKey</code> to apply in a subsequent operation to continue the operation. ',
        }),
    ).exactOptional(),
    ReturnValuesOnConditionCheckFailure: ReturnValuesOnConditionCheckFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter that returns the item attributes for an <code>ExecuteStatement</code> operation that failed a condition check.</p> <p>There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Statement'], title: 'ExecuteStatementInput' })
  .openapi('ExecuteStatementInput')

const DuplicateItemExceptionSchema = z.any().openapi('DuplicateItemException')

const ItemResponseSchema = z
  .object({
    Item: AttributeMapSchema.and(
      z
        .any()
        .openapi({
          description: 'Map of attribute data consisting of the data type and attribute value.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details for the requested item.', required: [] })
  .openapi('ItemResponse')

const ItemResponseListSchema = z
  .array(ItemResponseSchema)
  .min(1)
  .max(100)
  .openapi('ItemResponseList')

const ExecuteTransactionOutputSchema = z
  .object({
    Responses: ItemResponseListSchema.and(
      z.any().openapi({ description: 'The response to a PartiQL transaction.' }),
    ).exactOptional(),
    ConsumedCapacity: ConsumedCapacityMultipleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The capacity units consumed by the entire operation. The values of the list are ordered according to the ordering of the statements.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExecuteTransactionOutput')

const ParameterizedStatementSchema = z
  .object({
    Statement: PartiQLStatementSchema.and(
      z.any().openapi({ description: ' A PartiQL statment that uses parameters. ' }),
    ),
    Parameters: PreparedStatementParametersSchema.and(
      z.any().openapi({ description: ' The parameter values. ' }),
    ).exactOptional(),
    ReturnValuesOnConditionCheckFailure: ReturnValuesOnConditionCheckFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter that returns the item attributes for a PartiQL <code>ParameterizedStatement</code> operation that failed a condition check.</p> <p>There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Statement'],
    description: ' Represents a PartiQL statment that uses parameters. ',
  })
  .openapi('ParameterizedStatement')

const ParameterizedStatementsSchema = z
  .array(ParameterizedStatementSchema)
  .min(1)
  .max(100)
  .openapi('ParameterizedStatements')

const ClientRequestTokenSchema = z.string().min(1).max(36).openapi('ClientRequestToken')

const ExecuteTransactionInputSchema = z
  .object({
    TransactStatements: ParameterizedStatementsSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of PartiQL statements representing the transaction to run.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this value to get remaining results, if <code>NextToken</code> was returned in the statement response.',
        }),
    ).exactOptional(),
    ReturnConsumedCapacity: ReturnConsumedCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html">TransactGetItems</a> and <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactWriteItems.html">TransactWriteItems</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TransactStatements'], title: 'ExecuteTransactionInput' })
  .openapi('ExecuteTransactionInput')

const TransactionCanceledExceptionSchema = z.any().openapi('TransactionCanceledException')

const TransactionInProgressExceptionSchema = z.any().openapi('TransactionInProgressException')

const IdempotentParameterMismatchExceptionSchema = z
  .any()
  .openapi('IdempotentParameterMismatchException')

const ExportTableToPointInTimeOutputSchema = z
  .object({
    ExportDescription: ExportDescriptionSchema.and(
      z.any().openapi({ description: 'Contains a description of the table export.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportTableToPointInTimeOutput')

const ExportTableToPointInTimeInputSchema = z
  .object({
    TableArn: TableArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) associated with the table to export.',
        }),
    ),
    ExportTime: ExportTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Time in the past from which to export table data, counted in seconds from the start of the Unix epoch. The table export will be a snapshot of the table's state at this point in time.",
        }),
    ).exactOptional(),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Providing a <code>ClientToken</code> makes the call to <code>ExportTableToPointInTimeInput</code> idempotent, meaning that multiple identical calls have the same effect as one single call.</p> <p>A client token is valid for 8 hours after the first request that uses it is completed. After 8 hours, any request with the same client token is treated as a new request. Do not resubmit the same request with the same client token for more than 8 hours, or the result might not be idempotent.</p> <p>If you submit a request with the same client token but a change in other parameters within the 8-hour idempotency window, DynamoDB returns an <code>ImportConflictException</code>.</p>',
        }),
    ).exactOptional(),
    S3Bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the Amazon S3 bucket to export the snapshot to.' }),
    ),
    S3BucketOwner: S3BucketOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services account that owns the bucket the export will be stored in.',
        }),
    ).exactOptional(),
    S3Prefix: S3PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket prefix to use as the file name and path of the exported snapshot.',
        }),
    ).exactOptional(),
    S3SseAlgorithm: S3SseAlgorithmSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Type of encryption used on the bucket where export data will be stored. Valid values for <code>S3SseAlgorithm</code> are:</p> <ul> <li> <p> <code>AES256</code> - server-side encryption with Amazon S3 managed keys</p> </li> <li> <p> <code>KMS</code> - server-side encryption with KMS managed keys</p> </li> </ul>',
        }),
    ).exactOptional(),
    S3SseKmsKeyId: S3SseKmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the KMS managed key used to encrypt the S3 bucket where export data will be stored (if applicable).',
        }),
    ).exactOptional(),
    ExportFormat: ExportFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format for the exported data. Valid values for <code>ExportFormat</code> are <code>DYNAMODB_JSON</code> or <code>ION</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TableArn', 'S3Bucket'], title: 'ExportTableToPointInTimeInput' })
  .openapi('ExportTableToPointInTimeInput')

const PointInTimeRecoveryUnavailableExceptionSchema = z
  .any()
  .openapi('PointInTimeRecoveryUnavailableException')

const InvalidExportTimeExceptionSchema = z.any().openapi('InvalidExportTimeException')

const ExportConflictExceptionSchema = z.any().openapi('ExportConflictException')

const GetItemOutputSchema = z
  .object({
    Item: AttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of attribute names to <code>AttributeValue</code> objects, as specified by <code>ProjectionExpression</code>.',
        }),
    ).exactOptional(),
    ConsumedCapacity: ConsumedCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The capacity units consumed by the <code>GetItem</code> operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html#ItemSizeCalculations.Reads">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Item: {
        AlbumTitle: { S: 'Songs About Life' },
        Artist: { S: 'Acme Band' },
        SongTitle: { S: 'Happy Day' },
      },
    },
    description: 'Represents the output of a <code>GetItem</code> operation.',
    required: [],
  })
  .openapi('GetItemOutput')

const GetItemInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table containing the requested item.' }),
    ),
    Key: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of attribute names to <code>AttributeValue</code> objects, representing the primary key of the item to retrieve.</p> <p>For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.</p>',
        }),
    ),
    AttributesToGet: AttributeNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>ProjectionExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributesToGet.html">AttributesToGet</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ConsistentRead: ConsistentReadSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines the read consistency model: If set to <code>true</code>, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads.',
        }),
    ).exactOptional(),
    ReturnConsumedCapacity: ReturnConsumedCapacitySchema.exactOptional(),
    ProjectionExpression: ProjectionExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas.</p> <p>If no attribute names are specified, then all attributes are returned. If any of the requested attributes are not found, they do not appear in the result.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ExpressionAttributeNames: ExpressionAttributeNameMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more substitution tokens for attribute names in an expression. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p> </li> <li> <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p> </li> <li> <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p> </li> </ul> <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p> <ul> <li> <p> <code>Percentile</code> </p> </li> </ul> <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>). To work around this, you could specify the following for <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p> <code>{"#P":"Percentile"}</code> </p> </li> </ul> <p>You could then use this substitution in an expression, as in this example:</p> <ul> <li> <p> <code>#P = :val</code> </p> </li> </ul> <note> <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p> </note> <p>For more information on expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TableName', 'Key'],
    title: 'GetItemInput',
    description: 'Represents the input of a <code>GetItem</code> operation.',
  })
  .openapi('GetItemInput')

const ImportTableOutputSchema = z
  .object({
    ImportTableDescription: ImportTableDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Represents the properties of the table created for the import, and parameters of the import. The import parameters include import status, how many items were processed, and how many errors were encountered. ',
        }),
    ),
  })
  .openapi({ required: ['ImportTableDescription'] })
  .openapi('ImportTableOutput')

const ImportTableInputSchema = z
  .object({
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Providing a <code>ClientToken</code> makes the call to <code>ImportTableInput</code> idempotent, meaning that multiple identical calls have the same effect as one single call.</p> <p>A client token is valid for 8 hours after the first request that uses it is completed. After 8 hours, any request with the same client token is treated as a new request. Do not resubmit the same request with the same client token for more than 8 hours, or the result might not be idempotent.</p> <p>If you submit a request with the same client token but a change in other parameters within the 8-hour idempotency window, DynamoDB returns an <code>IdempotentParameterMismatch</code> exception.</p>',
        }),
    ).exactOptional(),
    S3BucketSource: S3BucketSourceSchema.and(
      z.any().openapi({ description: ' The S3 bucket that provides the source for the import. ' }),
    ),
    InputFormat: InputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The format of the source data. Valid values for <code>ImportFormat</code> are <code>CSV</code>, <code>DYNAMODB_JSON</code> or <code>ION</code>. ',
        }),
    ),
    InputFormatOptions: InputFormatOptionsSchema.and(
      z
        .any()
        .openapi({
          description: ' Additional properties that specify how the input is formatted, ',
        }),
    ).exactOptional(),
    InputCompressionType: InputCompressionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Type of compression to be used on the input coming from the imported table. ',
        }),
    ).exactOptional(),
    TableCreationParameters: TableCreationParametersSchema.and(
      z.any().openapi({ description: 'Parameters for the table to import the data into. ' }),
    ),
  })
  .openapi({
    required: ['S3BucketSource', 'InputFormat', 'TableCreationParameters'],
    title: 'ImportTableInput',
  })
  .openapi('ImportTableInput')

const ImportConflictExceptionSchema = z.any().openapi('ImportConflictException')

const BackupSummarySchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'Name of the table.' }),
    ).exactOptional(),
    TableId: TableIdSchema.and(
      z.any().openapi({ description: 'Unique identifier for the table.' }),
    ).exactOptional(),
    TableArn: TableArnSchema.and(
      z.any().openapi({ description: 'ARN associated with the table.' }),
    ).exactOptional(),
    BackupArn: BackupArnSchema.and(
      z.any().openapi({ description: 'ARN associated with the backup.' }),
    ).exactOptional(),
    BackupName: BackupNameSchema.and(
      z.any().openapi({ description: 'Name of the specified backup.' }),
    ).exactOptional(),
    BackupCreationDateTime: BackupCreationDateTimeSchema.and(
      z.any().openapi({ description: 'Time at which the backup was created.' }),
    ).exactOptional(),
    BackupExpiryDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time at which the automatic on-demand backup created by DynamoDB will expire. This <code>SYSTEM</code> on-demand backup expires automatically 35 days after its creation.',
        }),
    ).exactOptional(),
    BackupStatus: BackupStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Backup can be in one of the following states: CREATING, ACTIVE, DELETED.',
        }),
    ).exactOptional(),
    BackupType: BackupTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>BackupType:</p> <ul> <li> <p> <code>USER</code> - You create and manage these using the on-demand backup feature.</p> </li> <li> <p> <code>SYSTEM</code> - If you delete a table with point-in-time recovery enabled, a <code>SYSTEM</code> backup is automatically created and is retained for 35 days (at no additional cost). System backups allow you to restore the deleted table to the state it was in just before the point of deletion. </p> </li> <li> <p> <code>AWS_BACKUP</code> - On-demand backup created by you from Backup service.</p> </li> </ul>',
        }),
    ).exactOptional(),
    BackupSizeBytes: BackupSizeBytesSchema.and(
      z.any().openapi({ description: 'Size of the backup in bytes.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains details for the backup.', required: [] })
  .openapi('BackupSummary')

const BackupSummariesSchema = z.array(BackupSummarySchema).openapi('BackupSummaries')

const ListBackupsOutputSchema = z
  .object({
    BackupSummaries: BackupSummariesSchema.and(
      z.any().openapi({ description: 'List of <code>BackupSummary</code> objects.' }),
    ).exactOptional(),
    LastEvaluatedBackupArn: BackupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The ARN of the backup last evaluated when the current page of results was returned, inclusive of the current page of results. This value may be specified as the <code>ExclusiveStartBackupArn</code> of a new <code>ListBackups</code> operation in order to fetch the next page of results. </p> <p> If <code>LastEvaluatedBackupArn</code> is empty, then the last page of results has been processed and there are no more results to be retrieved. </p> <p> If <code>LastEvaluatedBackupArn</code> is not empty, this may or may not indicate that there is more data to be returned. All results are guaranteed to have been returned if and only if no value for <code>LastEvaluatedBackupArn</code> is returned. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBackupsOutput')

const BackupsInputLimitSchema = z.int().min(1).max(100).openapi('BackupsInputLimit')

const TimeRangeLowerBoundSchema = z.iso.datetime({ offset: true }).openapi('TimeRangeLowerBound')

const TimeRangeUpperBoundSchema = z.iso.datetime({ offset: true }).openapi('TimeRangeUpperBound')

const BackupTypeFilterSchema = z
  .enum(['USER', 'SYSTEM', 'AWS_BACKUP', 'ALL'])
  .openapi('BackupTypeFilter')

const ListBackupsInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The backups from the table specified by <code>TableName</code> are listed. ',
        }),
    ).exactOptional(),
    Limit: BackupsInputLimitSchema.and(
      z.any().openapi({ description: 'Maximum number of backups to return at once.' }),
    ).exactOptional(),
    TimeRangeLowerBound: TimeRangeLowerBoundSchema.and(
      z
        .any()
        .openapi({
          description:
            'Only backups created after this time are listed. <code>TimeRangeLowerBound</code> is inclusive.',
        }),
    ).exactOptional(),
    TimeRangeUpperBound: TimeRangeUpperBoundSchema.and(
      z
        .any()
        .openapi({
          description:
            'Only backups created before this time are listed. <code>TimeRangeUpperBound</code> is exclusive. ',
        }),
    ).exactOptional(),
    ExclusiveStartBackupArn: BackupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>LastEvaluatedBackupArn</code> is the Amazon Resource Name (ARN) of the backup last evaluated when the current page of results was returned, inclusive of the current page of results. This value may be specified as the <code>ExclusiveStartBackupArn</code> of a new <code>ListBackups</code> operation in order to fetch the next page of results. ',
        }),
    ).exactOptional(),
    BackupType: BackupTypeFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The backups from the table specified by <code>BackupType</code> are listed.</p> <p>Where <code>BackupType</code> can be:</p> <ul> <li> <p> <code>USER</code> - On-demand backup created by you. (The default setting if no other backup types are specified.)</p> </li> <li> <p> <code>SYSTEM</code> - On-demand backup automatically created by DynamoDB.</p> </li> <li> <p> <code>ALL</code> - All types of on-demand backups (USER and SYSTEM).</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListBackupsInput', required: [] })
  .openapi('ListBackupsInput')

const ContributorInsightsSummarySchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'Name of the table associated with the summary.' }),
    ).exactOptional(),
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'Name of the index associated with the summary, if any.' }),
    ).exactOptional(),
    ContributorInsightsStatus: ContributorInsightsStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the current status for contributor insights for the given table and index, if applicable.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a Contributor Insights summary entry.', required: [] })
  .openapi('ContributorInsightsSummary')

const ContributorInsightsSummariesSchema = z
  .array(ContributorInsightsSummarySchema)
  .openapi('ContributorInsightsSummaries')

const NextTokenStringSchema = z.string().openapi('NextTokenString')

const ListContributorInsightsOutputSchema = z
  .object({
    ContributorInsightsSummaries: ContributorInsightsSummariesSchema.and(
      z.any().openapi({ description: 'A list of ContributorInsightsSummary.' }),
    ).exactOptional(),
    NextToken: NextTokenStringSchema.and(
      z.any().openapi({ description: 'A token to go to the next page if there is one.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListContributorInsightsOutput')

const ListContributorInsightsLimitSchema = z.int().max(100).openapi('ListContributorInsightsLimit')

const ListContributorInsightsInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table.' }),
    ).exactOptional(),
    NextToken: NextTokenStringSchema.and(
      z.any().openapi({ description: 'A token to for the desired page, if there is one.' }),
    ).exactOptional(),
    MaxResults: ListContributorInsightsLimitSchema.and(
      z.any().openapi({ description: 'Maximum number of results to return per page.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListContributorInsightsInput', required: [] })
  .openapi('ListContributorInsightsInput')

const ExportSummarySchema = z
  .object({
    ExportArn: ExportArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the export.' }),
    ).exactOptional(),
    ExportStatus: ExportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Export can be in one of the following states: IN_PROGRESS, COMPLETED, or FAILED.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about an export task.', required: [] })
  .openapi('ExportSummary')

const ExportSummariesSchema = z.array(ExportSummarySchema).openapi('ExportSummaries')

const ExportNextTokenSchema = z.string().openapi('ExportNextToken')

const ListExportsOutputSchema = z
  .object({
    ExportSummaries: ExportSummariesSchema.and(
      z.any().openapi({ description: 'A list of <code>ExportSummary</code> objects.' }),
    ).exactOptional(),
    NextToken: ExportNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this value is returned, there are additional results to be displayed. To retrieve them, call <code>ListExports</code> again, with <code>NextToken</code> set to this value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListExportsOutput')

const ListExportsMaxLimitSchema = z.int().min(1).max(25).openapi('ListExportsMaxLimit')

const ListExportsInputSchema = z
  .object({
    TableArn: TableArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) associated with the exported table.',
        }),
    ).exactOptional(),
    MaxResults: ListExportsMaxLimitSchema.and(
      z.any().openapi({ description: 'Maximum number of results to return per page.' }),
    ).exactOptional(),
    NextToken: ExportNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional string that, if supplied, must be copied from the output of a previous call to <code>ListExports</code>. When provided in this manner, the API fetches the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListExportsInput', required: [] })
  .openapi('ListExportsInput')

const GlobalTableSchema = z
  .object({
    GlobalTableName: TableNameSchema.and(
      z.any().openapi({ description: 'The global table name.' }),
    ).exactOptional(),
    ReplicationGroup: ReplicaListSchema.and(
      z.any().openapi({ description: 'The Regions where the global table has replicas.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the properties of a global table.', required: [] })
  .openapi('GlobalTable')

const GlobalTableListSchema = z.array(GlobalTableSchema).openapi('GlobalTableList')

const ListGlobalTablesOutputSchema = z
  .object({
    GlobalTables: GlobalTableListSchema.and(
      z.any().openapi({ description: 'List of global table names.' }),
    ).exactOptional(),
    LastEvaluatedGlobalTableName: TableNameSchema.and(
      z.any().openapi({ description: 'Last evaluated global table name.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListGlobalTablesOutput')

const ListGlobalTablesInputSchema = z
  .object({
    ExclusiveStartGlobalTableName: TableNameSchema.and(
      z
        .any()
        .openapi({ description: 'The first global table name that this operation will evaluate.' }),
    ).exactOptional(),
    Limit: PositiveIntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of table names to return, if the parameter is not specified DynamoDB defaults to 100.</p> <p>If the number of global tables DynamoDB finds reaches this limit, it stops the operation and returns the table names collected up to that point, with a table name in the <code>LastEvaluatedGlobalTableName</code> to apply in a subsequent operation to the <code>ExclusiveStartGlobalTableName</code> parameter.</p>',
        }),
    ).exactOptional(),
    RegionName: RegionNameSchema.and(
      z.any().openapi({ description: 'Lists the global tables in a specific Region.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListGlobalTablesInput', required: [] })
  .openapi('ListGlobalTablesInput')

const ImportSummarySchema = z
  .object({
    ImportArn: ImportArnSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon Resource Number (ARN) corresponding to the import request. ',
        }),
    ).exactOptional(),
    ImportStatus: ImportStatusSchema.and(
      z.any().openapi({ description: ' The status of the import operation. ' }),
    ).exactOptional(),
    TableArn: TableArnSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon Resource Number (ARN) of the table being imported into. ',
        }),
    ).exactOptional(),
    S3BucketSource: S3BucketSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The path and S3 bucket of the source file that is being imported. This includes the S3Bucket (required), S3KeyPrefix (optional) and S3BucketOwner (optional if the bucket is owned by the requester). ',
        }),
    ).exactOptional(),
    CloudWatchLogGroupArn: CloudWatchLogGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Number (ARN) of the Cloudwatch Log Group associated with this import task. ',
        }),
    ).exactOptional(),
    InputFormat: InputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The format of the source data. Valid values are <code>CSV</code>, <code>DYNAMODB_JSON</code> or <code>ION</code>.',
        }),
    ).exactOptional(),
    StartTime: ImportStartTimeSchema.and(
      z.any().openapi({ description: ' The time at which this import task began. ' }),
    ).exactOptional(),
    EndTime: ImportEndTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The time at which this import task ended. (Does this include the successful complete creation of the table it was imported to?) ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Summary information about the source file for the import. ',
    required: [],
  })
  .openapi('ImportSummary')

const ImportSummaryListSchema = z.array(ImportSummarySchema).openapi('ImportSummaryList')

const ImportNextTokenSchema = z
  .string()
  .regex(/([0-9a-f]{16})+/)
  .min(112)
  .max(1024)
  .openapi('ImportNextToken')

const ListImportsOutputSchema = z
  .object({
    ImportSummaryList: ImportSummaryListSchema.and(
      z.any().openapi({ description: ' A list of <code>ImportSummary</code> objects. ' }),
    ).exactOptional(),
    NextToken: ImportNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If this value is returned, there are additional results to be displayed. To retrieve them, call <code>ListImports</code> again, with <code>NextToken</code> set to this value. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListImportsOutput')

const ListImportsMaxLimitSchema = z.int().min(1).max(25).openapi('ListImportsMaxLimit')

const ListImportsInputSchema = z
  .object({
    TableArn: TableArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) associated with the table that was imported to. ',
        }),
    ).exactOptional(),
    PageSize: ListImportsMaxLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of <code>ImportSummary </code>objects returned in a single page. ',
        }),
    ).exactOptional(),
    NextToken: ImportNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional string that, if supplied, must be copied from the output of a previous call to <code>ListImports</code>. When provided in this manner, the API fetches the next page of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListImportsInput', required: [] })
  .openapi('ListImportsInput')

const TableNameListSchema = z.array(TableNameSchema).openapi('TableNameList')

const ListTablesOutputSchema = z
  .object({
    TableNames: TableNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The names of the tables associated with the current account at the current endpoint. The maximum size of this array is 100.</p> <p>If <code>LastEvaluatedTableName</code> also appears in the output, you can use this value as the <code>ExclusiveStartTableName</code> parameter in a subsequent <code>ListTables</code> request and obtain the next page of results.</p>',
        }),
    ).exactOptional(),
    LastEvaluatedTableName: TableNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the last table in the current page of results. Use this value as the <code>ExclusiveStartTableName</code> in a new request to obtain the next page of results, until all the table names are returned.</p> <p>If you do not receive a <code>LastEvaluatedTableName</code> value in the response, this means that there are no more table names to be retrieved.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { TableNames: ['Forum', 'ProductCatalog', 'Reply', 'Thread'] },
    description: 'Represents the output of a <code>ListTables</code> operation.',
    required: [],
  })
  .openapi('ListTablesOutput')

const ListTablesInputLimitSchema = z.int().min(1).max(100).openapi('ListTablesInputLimit')

const ListTablesInputSchema = z
  .object({
    ExclusiveStartTableName: TableNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The first table name that this operation will evaluate. Use the value that was returned for <code>LastEvaluatedTableName</code> in a previous operation, so that you can obtain the next page of results.',
        }),
    ).exactOptional(),
    Limit: ListTablesInputLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'A maximum number of table names to return. If this parameter is not specified, the limit is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListTablesInput',
    description: 'Represents the input of a <code>ListTables</code> operation.',
    required: [],
  })
  .openapi('ListTablesInput')

const ListTagsOfResourceOutputSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags currently associated with the Amazon DynamoDB resource.',
        }),
    ).exactOptional(),
    NextToken: NextTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this value is returned, there are additional results to be displayed. To retrieve them, call ListTagsOfResource again, with NextToken set to this value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsOfResourceOutput')

const ResourceArnStringSchema = z.string().min(1).max(1283).openapi('ResourceArnString')

const ListTagsOfResourceInputSchema = z
  .object({
    ResourceArn: ResourceArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon DynamoDB resource with tags to be listed. This value is an Amazon Resource Name (ARN).',
        }),
    ),
    NextToken: NextTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional string that, if supplied, must be copied from the output of a previous call to ListTagOfResource. When provided in this manner, this API fetches the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsOfResourceInput' })
  .openapi('ListTagsOfResourceInput')

const PutItemOutputSchema = z
  .object({
    Attributes: AttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The attribute values as they appeared before the <code>PutItem</code> operation, but only if <code>ReturnValues</code> is specified as <code>ALL_OLD</code> in the request. Each element consists of an attribute name and an attribute value.',
        }),
    ).exactOptional(),
    ConsumedCapacity: ConsumedCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The capacity units consumed by the <code>PutItem</code> operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ItemCollectionMetrics: ItemCollectionMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about item collections, if any, that were affected by the <code>PutItem</code> operation. <code>ItemCollectionMetrics</code> is only returned if the <code>ReturnItemCollectionMetrics</code> parameter was specified. If the table does not have any local secondary indexes, this information is not returned in the response.</p> <p>Each <code>ItemCollectionMetrics</code> element consists of:</p> <ul> <li> <p> <code>ItemCollectionKey</code> - The partition key value of the item collection. This is the same as the partition key value of the item itself.</p> </li> <li> <p> <code>SizeEstimateRangeGB</code> - An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit.</p> <p>The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { ConsumedCapacity: { CapacityUnits: 1, TableName: 'Music' } },
    description: 'Represents the output of a <code>PutItem</code> operation.',
    required: [],
  })
  .openapi('PutItemOutput')

const PutItemInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table to contain the item.' }),
    ),
    Item: PutItemInputAttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of attribute name/value pairs, one for each attribute. Only the primary key attributes are required; you can optionally provide other attribute name-value pairs for the item.</p> <p>You must provide all of the attributes for the primary key. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide both values for both the partition key and the sort key.</p> <p>If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table\'s attribute definition.</p> <p>Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index.</p> <p>For more information about primary keys, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey">Primary Key</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>Each element in the <code>Item</code> map is an <code>AttributeValue</code> object.</p>',
        }),
    ),
    Expected: ExpectedAttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>ConditionExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.Expected.html">Expected</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ReturnValues: ReturnValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use <code>ReturnValues</code> if you want to get the item attributes as they appeared before they were updated with the <code>PutItem</code> request. For <code>PutItem</code>, the valid values are:</p> <ul> <li> <p> <code>NONE</code> - If <code>ReturnValues</code> is not specified, or if its value is <code>NONE</code>, then nothing is returned. (This setting is the default for <code>ReturnValues</code>.)</p> </li> <li> <p> <code>ALL_OLD</code> - If <code>PutItem</code> overwrote an attribute name-value pair, then the content of the old item is returned.</p> </li> </ul> <p>The values returned are strongly consistent.</p> <p>There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.</p> <note> <p>The <code>ReturnValues</code> parameter is used by several DynamoDB operations; however, <code>PutItem</code> does not recognize any values other than <code>NONE</code> or <code>ALL_OLD</code>.</p> </note>',
        }),
    ).exactOptional(),
    ReturnConsumedCapacity: ReturnConsumedCapacitySchema.exactOptional(),
    ReturnItemCollectionMetrics: ReturnItemCollectionMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether item collection metrics are returned. If set to <code>SIZE</code>, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to <code>NONE</code> (the default), no statistics are returned.',
        }),
    ).exactOptional(),
    ConditionalOperator: ConditionalOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>ConditionExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html">ConditionalOperator</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ConditionExpression: ConditionExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A condition that must be satisfied in order for a conditional <code>PutItem</code> operation to succeed.</p> <p>An expression can contain any of the following:</p> <ul> <li> <p>Functions: <code>attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size</code> </p> <p>These function names are case-sensitive.</p> </li> <li> <p>Comparison operators: <code>= | &lt;&gt; | &lt; | &gt; | &lt;= | &gt;= | BETWEEN | IN </code> </p> </li> <li> <p> Logical operators: <code>AND | OR | NOT</code> </p> </li> </ul> <p>For more information on condition expressions, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Condition Expressions</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ExpressionAttributeNames: ExpressionAttributeNameMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more substitution tokens for attribute names in an expression. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p> </li> <li> <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p> </li> <li> <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p> </li> </ul> <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p> <ul> <li> <p> <code>Percentile</code> </p> </li> </ul> <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>). To work around this, you could specify the following for <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p> <code>{"#P":"Percentile"}</code> </p> </li> </ul> <p>You could then use this substitution in an expression, as in this example:</p> <ul> <li> <p> <code>#P = :val</code> </p> </li> </ul> <note> <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p> </note> <p>For more information on expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ExpressionAttributeValues: ExpressionAttributeValueMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more values that can be substituted in an expression.</p> <p>Use the <b>:</b> (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the <i>ProductStatus</i> attribute was one of the following: </p> <p> <code>Available | Backordered | Discontinued</code> </p> <p>You would first need to specify <code>ExpressionAttributeValues</code> as follows:</p> <p> <code>{ ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }</code> </p> <p>You could then use these values in an expression, such as this:</p> <p> <code>ProductStatus IN (:avail, :back, :disc)</code> </p> <p>For more information on expression attribute values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Condition Expressions</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ReturnValuesOnConditionCheckFailure: ReturnValuesOnConditionCheckFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter that returns the item attributes for a <code>PutItem</code> operation that failed a condition check.</p> <p>There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TableName', 'Item'],
    title: 'PutItemInput',
    description: 'Represents the input of a <code>PutItem</code> operation.',
  })
  .openapi('PutItemInput')

const IntegerSchema = z.int().openapi('Integer')

const QueryOutputSchema = z
  .object({
    Items: ItemListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of item attributes that match the query criteria. Each element in this array consists of an attribute name and the value for that attribute.',
        }),
    ).exactOptional(),
    Count: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of items in the response.</p> <p>If you used a <code>QueryFilter</code> in the request, then <code>Count</code> is the number of items returned after the filter was applied, and <code>ScannedCount</code> is the number of matching items before the filter was applied.</p> <p>If you did not use a filter in the request, then <code>Count</code> and <code>ScannedCount</code> are the same.</p>',
        }),
    ).exactOptional(),
    ScannedCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of items evaluated, before any <code>QueryFilter</code> is applied. A high <code>ScannedCount</code> value with few, or no, <code>Count</code> results indicates an inefficient <code>Query</code> operation. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#Count">Count and ScannedCount</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>If you did not use a filter in the request, then <code>ScannedCount</code> is the same as <code>Count</code>.</p>',
        }),
    ).exactOptional(),
    LastEvaluatedKey: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The primary key of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.</p> <p>If <code>LastEvaluatedKey</code> is empty, then the "last page" of results has been processed and there is no more data to be retrieved.</p> <p>If <code>LastEvaluatedKey</code> is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when <code>LastEvaluatedKey</code> is empty.</p>',
        }),
    ).exactOptional(),
    ConsumedCapacity: ConsumedCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The capacity units consumed by the <code>Query</code> operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ConsumedCapacity: {},
      Count: 2,
      Items: [{ SongTitle: { S: 'Call Me Today' } }],
      ScannedCount: 2,
    },
    description: 'Represents the output of a <code>Query</code> operation.',
    required: [],
  })
  .openapi('QueryOutput')

const SelectSchema = z
  .enum(['ALL_ATTRIBUTES', 'ALL_PROJECTED_ATTRIBUTES', 'SPECIFIC_ATTRIBUTES', 'COUNT'])
  .openapi('Select')

const ConditionSchema = z
  .object({
    AttributeValueList: AttributeValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more values to evaluate against the supplied attribute. The number of values in the list depends on the <code>ComparisonOperator</code> being used.</p> <p>For type Number, value comparisons are numeric.</p> <p>String value comparisons for greater than, equals, or less than are based on ASCII character code values. For example, <code>a</code> is greater than <code>A</code>, and <code>a</code> is greater than <code>B</code>. For a list of code values, see <a href="http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters">http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters</a>.</p> <p>For Binary, DynamoDB treats each byte of the binary data as unsigned when it compares binary values.</p>',
        }),
    ).exactOptional(),
    ComparisonOperator: ComparisonOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A comparator for evaluating attributes. For example, equals, greater than, less than, etc.</p> <p>The following comparison operators are available:</p> <p> <code>EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH | IN | BETWEEN</code> </p> <p>The following are descriptions of each comparison operator.</p> <ul> <li> <p> <code>EQ</code> : Equal. <code>EQ</code> is supported for all data types, including lists and maps.</p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an <code>AttributeValue</code> element of a different type than the one provided in the request, the value does not match. For example, <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also, <code>{"N":"6"}</code> does not equal <code>{"NS":["6", "2", "1"]}</code>.</p> <p/> </li> <li> <p> <code>NE</code> : Not equal. <code>NE</code> is supported for all data types, including lists and maps.</p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an <code>AttributeValue</code> of a different type than the one provided in the request, the value does not match. For example, <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also, <code>{"N":"6"}</code> does not equal <code>{"NS":["6", "2", "1"]}</code>.</p> <p/> </li> <li> <p> <code>LE</code> : Less than or equal. </p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String, Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different type than the one provided in the request, the value does not match. For example, <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also, <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p> <p/> </li> <li> <p> <code>LT</code> : Less than. </p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> of type String, Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different type than the one provided in the request, the value does not match. For example, <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also, <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p> <p/> </li> <li> <p> <code>GE</code> : Greater than or equal. </p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String, Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different type than the one provided in the request, the value does not match. For example, <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also, <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p> <p/> </li> <li> <p> <code>GT</code> : Greater than. </p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String, Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different type than the one provided in the request, the value does not match. For example, <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also, <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p> <p/> </li> <li> <p> <code>NOT_NULL</code> : The attribute exists. <code>NOT_NULL</code> is supported for all data types, including lists and maps.</p> <note> <p>This operator tests for the existence of an attribute, not its data type. If the data type of attribute "<code>a</code>" is null, and you evaluate it using <code>NOT_NULL</code>, the result is a Boolean <code>true</code>. This result is because the attribute "<code>a</code>" exists; its data type is not relevant to the <code>NOT_NULL</code> comparison operator.</p> </note> </li> <li> <p> <code>NULL</code> : The attribute does not exist. <code>NULL</code> is supported for all data types, including lists and maps.</p> <note> <p>This operator tests for the nonexistence of an attribute, not its data type. If the data type of attribute "<code>a</code>" is null, and you evaluate it using <code>NULL</code>, the result is a Boolean <code>false</code>. This is because the attribute "<code>a</code>" exists; its data type is not relevant to the <code>NULL</code> comparison operator.</p> </note> </li> <li> <p> <code>CONTAINS</code> : Checks for a subsequence, or value in a set.</p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is of type String, then the operator checks for a substring match. If the target attribute of the comparison is of type Binary, then the operator looks for a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("<code>SS</code>", "<code>NS</code>", or "<code>BS</code>"), then the operator evaluates to true if it finds an exact match with any member of the set.</p> <p>CONTAINS is supported for lists: When evaluating "<code>a CONTAINS b</code>", "<code>a</code>" can be a list; however, "<code>b</code>" cannot be a set, a map, or a list.</p> </li> <li> <p> <code>NOT_CONTAINS</code> : Checks for absence of a subsequence, or absence of a value in a set.</p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is a String, then the operator checks for the absence of a substring match. If the target attribute of the comparison is Binary, then the operator checks for the absence of a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("<code>SS</code>", "<code>NS</code>", or "<code>BS</code>"), then the operator evaluates to true if it <i>does not</i> find an exact match with any member of the set.</p> <p>NOT_CONTAINS is supported for lists: When evaluating "<code>a NOT CONTAINS b</code>", "<code>a</code>" can be a list; however, "<code>b</code>" cannot be a set, a map, or a list.</p> </li> <li> <p> <code>BEGINS_WITH</code> : Checks for a prefix. </p> <p> <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> of type String or Binary (not a Number or a set type). The target attribute of the comparison must be of type String or Binary (not a Number or a set type).</p> <p/> </li> <li> <p> <code>IN</code> : Checks for matching elements in a list.</p> <p> <code>AttributeValueList</code> can contain one or more <code>AttributeValue</code> elements of type String, Number, or Binary. These attributes are compared against an existing attribute of an item. If any elements of the input are equal to the item attribute, the expression evaluates to true.</p> </li> <li> <p> <code>BETWEEN</code> : Greater than or equal to the first value, and less than or equal to the second value. </p> <p> <code>AttributeValueList</code> must contain two <code>AttributeValue</code> elements of the same type, either String, Number, or Binary (not a set type). A target attribute matches if the target value is greater than, or equal to, the first element and less than, or equal to, the second element. If an item contains an <code>AttributeValue</code> element of a different type than the one provided in the request, the value does not match. For example, <code>{"S":"6"}</code> does not compare to <code>{"N":"6"}</code>. Also, <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code> </p> </li> </ul> <p>For usage examples of <code>AttributeValueList</code> and <code>ComparisonOperator</code>, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.html">Legacy Conditional Parameters</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['ComparisonOperator'],
    description:
      '<p>Represents the selection criteria for a <code>Query</code> or <code>Scan</code> operation:</p> <ul> <li> <p>For a <code>Query</code> operation, <code>Condition</code> is used for specifying the <code>KeyConditions</code> to use when querying a table or an index. For <code>KeyConditions</code>, only the following comparison operators are supported:</p> <p> <code>EQ | LE | LT | GE | GT | BEGINS_WITH | BETWEEN</code> </p> <p> <code>Condition</code> is also used in a <code>QueryFilter</code>, which evaluates the query results and returns only the desired values.</p> </li> <li> <p>For a <code>Scan</code> operation, <code>Condition</code> is used in a <code>ScanFilter</code>, which evaluates the scan results and returns only the desired values.</p> </li> </ul>',
  })
  .openapi('Condition')

const KeyConditionsSchema = z.record(z.string(), ConditionSchema).openapi('KeyConditions')

const FilterConditionMapSchema = z.record(z.string(), ConditionSchema).openapi('FilterConditionMap')

const KeyExpressionSchema = z.string().openapi('KeyExpression')

const QueryInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table containing the requested items.' }),
    ),
    IndexName: IndexNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an index to query. This index can be any local secondary index or global secondary index on the table. Note that if you use the <code>IndexName</code> parameter, you must also provide <code>TableName.</code> ',
        }),
    ).exactOptional(),
    Select: SelectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The attributes to be returned in the result. You can retrieve all item attributes, specific item attributes, the count of matching items, or in the case of an index, some or all of the attributes projected into the index.</p> <ul> <li> <p> <code>ALL_ATTRIBUTES</code> - Returns all of the item attributes from the specified table or index. If you query a local secondary index, then for each matching item in the index, DynamoDB fetches the entire item from the parent table. If the index is configured to project all item attributes, then all of the data can be obtained from the local secondary index, and no fetching is required.</p> </li> <li> <p> <code>ALL_PROJECTED_ATTRIBUTES</code> - Allowed only when querying an index. Retrieves all attributes that have been projected into the index. If the index is configured to project all attributes, this return value is equivalent to specifying <code>ALL_ATTRIBUTES</code>.</p> </li> <li> <p> <code>COUNT</code> - Returns the number of matching items, rather than the matching items themselves. Note that this uses the same quantity of read capacity units as getting the items, and is subject to the same item size calculations.</p> </li> <li> <p> <code>SPECIFIC_ATTRIBUTES</code> - Returns only the attributes listed in <code>ProjectionExpression</code>. This return value is equivalent to specifying <code>ProjectionExpression</code> without specifying any value for <code>Select</code>.</p> <p>If you query or scan a local secondary index and request only attributes that are projected into that index, the operation will read only the index and not the table. If any of the requested attributes are not projected into the local secondary index, DynamoDB fetches each of these attributes from the parent table. This extra fetching incurs additional throughput cost and latency.</p> <p>If you query or scan a global secondary index, you can only request attributes that are projected into the index. Global secondary index queries cannot fetch attributes from the parent table.</p> </li> </ul> <p>If neither <code>Select</code> nor <code>ProjectionExpression</code> are specified, DynamoDB defaults to <code>ALL_ATTRIBUTES</code> when accessing a table, and <code>ALL_PROJECTED_ATTRIBUTES</code> when accessing an index. You cannot use both <code>Select</code> and <code>ProjectionExpression</code> together in a single request, unless the value for <code>Select</code> is <code>SPECIFIC_ATTRIBUTES</code>. (This usage is equivalent to specifying <code>ProjectionExpression</code> without any value for <code>Select</code>.)</p> <note> <p>If you use the <code>ProjectionExpression</code> parameter, then the value for <code>Select</code> can only be <code>SPECIFIC_ATTRIBUTES</code>. Any other value for <code>Select</code> will return an error.</p> </note>',
        }),
    ).exactOptional(),
    AttributesToGet: AttributeNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>ProjectionExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributesToGet.html">AttributesToGet</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to evaluate (not necessarily the number of matching items). If DynamoDB processes the number of items up to the limit while processing the results, it stops the operation and returns the matching values up to that point, and a key in <code>LastEvaluatedKey</code> to apply in a subsequent operation, so that you can pick up where you left off. Also, if the processed dataset size exceeds 1 MB before DynamoDB reaches this limit, it stops the operation and returns the matching values up to the limit, and a key in <code>LastEvaluatedKey</code> to apply in a subsequent operation to continue the operation. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html">Query and Scan</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ConsistentRead: ConsistentReadSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines the read consistency model: If set to <code>true</code>, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads.</p> <p>Strongly consistent reads are not supported on global secondary indexes. If you query a global secondary index with <code>ConsistentRead</code> set to <code>true</code>, you will receive a <code>ValidationException</code>.</p>',
        }),
    ).exactOptional(),
    KeyConditions: KeyConditionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>KeyConditionExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.KeyConditions.html">KeyConditions</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    QueryFilter: FilterConditionMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>FilterExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.QueryFilter.html">QueryFilter</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ConditionalOperator: ConditionalOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>FilterExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html">ConditionalOperator</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ScanIndexForward: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the order for index traversal: If <code>true</code> (default), the traversal is performed in ascending order; if <code>false</code>, the traversal is performed in descending order. </p> <p>Items with the same partition key value are stored in sorted order by sort key. If the sort key data type is Number, the results are stored in numeric order. For type String, the results are stored in order of UTF-8 bytes. For type Binary, DynamoDB treats each byte of the binary data as unsigned.</p> <p>If <code>ScanIndexForward</code> is <code>true</code>, DynamoDB returns the results in the order in which they are stored (by sort key value). This is the default behavior. If <code>ScanIndexForward</code> is <code>false</code>, DynamoDB reads the results in reverse order by sort key value, and then returns the results to the client.</p>',
        }),
    ).exactOptional(),
    ExclusiveStartKey: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The primary key of the first item that this operation will evaluate. Use the value that was returned for <code>LastEvaluatedKey</code> in the previous operation.</p> <p>The data type for <code>ExclusiveStartKey</code> must be String, Number, or Binary. No set data types are allowed.</p>',
        }),
    ).exactOptional(),
    ReturnConsumedCapacity: ReturnConsumedCapacitySchema.exactOptional(),
    ProjectionExpression: ProjectionExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas.</p> <p>If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Accessing Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    FilterExpression: ConditionExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that contains conditions that DynamoDB applies after the <code>Query</code> operation, but before the data is returned to you. Items that do not satisfy the <code>FilterExpression</code> criteria are not returned.</p> <p>A <code>FilterExpression</code> does not allow key attributes. You cannot define a filter expression based on a partition key or a sort key.</p> <note> <p>A <code>FilterExpression</code> is applied after the items have already been read; the process of filtering does not consume any additional read capacity units.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#Query.FilterExpression">Filter Expressions</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    KeyConditionExpression: KeyExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The condition that specifies the key values for items to be retrieved by the <code>Query</code> action.</p> <p>The condition must perform an equality test on a single partition key value.</p> <p>The condition can optionally perform one of several comparison tests on a single sort key value. This allows <code>Query</code> to retrieve one item with a given partition key value and sort key value, or several items that have the same partition key value but different sort key values.</p> <p>The partition key equality test is required, and must be specified in the following format:</p> <p> <code>partitionKeyName</code> <i>=</i> <code>:partitionkeyval</code> </p> <p>If you also want to provide a condition for the sort key, it must be combined using <code>AND</code> with the condition for the sort key. Following is an example, using the <b>=</b> comparison operator for the sort key:</p> <p> <code>partitionKeyName</code> <code>=</code> <code>:partitionkeyval</code> <code>AND</code> <code>sortKeyName</code> <code>=</code> <code>:sortkeyval</code> </p> <p>Valid comparisons for the sort key condition are as follows:</p> <ul> <li> <p> <code>sortKeyName</code> <code>=</code> <code>:sortkeyval</code> - true if the sort key value is equal to <code>:sortkeyval</code>.</p> </li> <li> <p> <code>sortKeyName</code> <code>&lt;</code> <code>:sortkeyval</code> - true if the sort key value is less than <code>:sortkeyval</code>.</p> </li> <li> <p> <code>sortKeyName</code> <code>&lt;=</code> <code>:sortkeyval</code> - true if the sort key value is less than or equal to <code>:sortkeyval</code>.</p> </li> <li> <p> <code>sortKeyName</code> <code>&gt;</code> <code>:sortkeyval</code> - true if the sort key value is greater than <code>:sortkeyval</code>.</p> </li> <li> <p> <code>sortKeyName</code> <code>&gt;= </code> <code>:sortkeyval</code> - true if the sort key value is greater than or equal to <code>:sortkeyval</code>.</p> </li> <li> <p> <code>sortKeyName</code> <code>BETWEEN</code> <code>:sortkeyval1</code> <code>AND</code> <code>:sortkeyval2</code> - true if the sort key value is greater than or equal to <code>:sortkeyval1</code>, and less than or equal to <code>:sortkeyval2</code>.</p> </li> <li> <p> <code>begins_with (</code> <code>sortKeyName</code>, <code>:sortkeyval</code> <code>)</code> - true if the sort key value begins with a particular operand. (You cannot use this function with a sort key that is of type Number.) Note that the function name <code>begins_with</code> is case-sensitive.</p> </li> </ul> <p>Use the <code>ExpressionAttributeValues</code> parameter to replace tokens such as <code>:partitionval</code> and <code>:sortval</code> with actual values at runtime.</p> <p>You can optionally use the <code>ExpressionAttributeNames</code> parameter to replace the names of the partition key and sort key with placeholder tokens. This option might be necessary if an attribute name conflicts with a DynamoDB reserved word. For example, the following <code>KeyConditionExpression</code> parameter causes an error because <i>Size</i> is a reserved word:</p> <ul> <li> <p> <code>Size = :myval</code> </p> </li> </ul> <p>To work around this, define a placeholder (such a <code>#S</code>) to represent the attribute name <i>Size</i>. <code>KeyConditionExpression</code> then is as follows:</p> <ul> <li> <p> <code>#S = :myval</code> </p> </li> </ul> <p>For a list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>For more information on <code>ExpressionAttributeNames</code> and <code>ExpressionAttributeValues</code>, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ExpressionPlaceholders.html">Using Placeholders for Attribute Names and Values</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ExpressionAttributeNames: ExpressionAttributeNameMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more substitution tokens for attribute names in an expression. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p> </li> <li> <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p> </li> <li> <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p> </li> </ul> <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p> <ul> <li> <p> <code>Percentile</code> </p> </li> </ul> <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>). To work around this, you could specify the following for <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p> <code>{"#P":"Percentile"}</code> </p> </li> </ul> <p>You could then use this substitution in an expression, as in this example:</p> <ul> <li> <p> <code>#P = :val</code> </p> </li> </ul> <note> <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p> </note> <p>For more information on expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ExpressionAttributeValues: ExpressionAttributeValueMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more values that can be substituted in an expression.</p> <p>Use the <b>:</b> (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the <i>ProductStatus</i> attribute was one of the following: </p> <p> <code>Available | Backordered | Discontinued</code> </p> <p>You would first need to specify <code>ExpressionAttributeValues</code> as follows:</p> <p> <code>{ ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }</code> </p> <p>You could then use these values in an expression, such as this:</p> <p> <code>ProductStatus IN (:avail, :back, :disc)</code> </p> <p>For more information on expression attribute values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Specifying Conditions</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TableName'],
    title: 'QueryInput',
    description: 'Represents the input of a <code>Query</code> operation.',
  })
  .openapi('QueryInput')

const RestoreTableFromBackupOutputSchema = z
  .object({
    TableDescription: TableDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The description of the table created from an existing backup.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RestoreTableFromBackupOutput')

const RestoreTableFromBackupInputSchema = z
  .object({
    TargetTableName: TableNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the new table to which the backup must be restored.',
        }),
    ),
    BackupArn: BackupArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) associated with the backup.' }),
    ),
    BillingModeOverride: BillingModeSchema.and(
      z.any().openapi({ description: 'The billing mode of the restored table.' }),
    ).exactOptional(),
    GlobalSecondaryIndexOverride: GlobalSecondaryIndexListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of global secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore.',
        }),
    ).exactOptional(),
    LocalSecondaryIndexOverride: LocalSecondaryIndexListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of local secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore.',
        }),
    ).exactOptional(),
    ProvisionedThroughputOverride: ProvisionedThroughputSchema.and(
      z.any().openapi({ description: 'Provisioned throughput settings for the restored table.' }),
    ).exactOptional(),
    SSESpecificationOverride: SSESpecificationSchema.and(
      z
        .any()
        .openapi({
          description: 'The new server-side encryption settings for the restored table.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TargetTableName', 'BackupArn'], title: 'RestoreTableFromBackupInput' })
  .openapi('RestoreTableFromBackupInput')

const TableAlreadyExistsExceptionSchema = z.any().openapi('TableAlreadyExistsException')

const RestoreTableToPointInTimeOutputSchema = z
  .object({
    TableDescription: TableDescriptionSchema.and(
      z.any().openapi({ description: 'Represents the properties of a table.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RestoreTableToPointInTimeOutput')

const RestoreTableToPointInTimeInputSchema = z
  .object({
    SourceTableArn: TableArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DynamoDB table that will be restored. This value is an Amazon Resource Name (ARN).',
        }),
    ).exactOptional(),
    SourceTableName: TableNameSchema.and(
      z.any().openapi({ description: 'Name of the source table that is being restored.' }),
    ).exactOptional(),
    TargetTableName: TableNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the new table to which it must be restored to.' }),
    ),
    UseLatestRestorableTime: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Restore the table to the latest possible time. <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. ',
        }),
    ).exactOptional(),
    RestoreDateTime: DateSchema.and(
      z.any().openapi({ description: 'Time in the past to restore the table to.' }),
    ).exactOptional(),
    BillingModeOverride: BillingModeSchema.and(
      z.any().openapi({ description: 'The billing mode of the restored table.' }),
    ).exactOptional(),
    GlobalSecondaryIndexOverride: GlobalSecondaryIndexListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of global secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore.',
        }),
    ).exactOptional(),
    LocalSecondaryIndexOverride: LocalSecondaryIndexListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of local secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore.',
        }),
    ).exactOptional(),
    ProvisionedThroughputOverride: ProvisionedThroughputSchema.and(
      z.any().openapi({ description: 'Provisioned throughput settings for the restored table.' }),
    ).exactOptional(),
    SSESpecificationOverride: SSESpecificationSchema.and(
      z
        .any()
        .openapi({
          description: 'The new server-side encryption settings for the restored table.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TargetTableName'], title: 'RestoreTableToPointInTimeInput' })
  .openapi('RestoreTableToPointInTimeInput')

const InvalidRestoreTimeExceptionSchema = z.any().openapi('InvalidRestoreTimeException')

const ScanOutputSchema = z
  .object({
    Items: ItemListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of item attributes that match the scan criteria. Each element in this array consists of an attribute name and the value for that attribute.',
        }),
    ).exactOptional(),
    Count: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of items in the response.</p> <p>If you set <code>ScanFilter</code> in the request, then <code>Count</code> is the number of items returned after the filter was applied, and <code>ScannedCount</code> is the number of matching items before the filter was applied.</p> <p>If you did not use a filter in the request, then <code>Count</code> is the same as <code>ScannedCount</code>.</p>',
        }),
    ).exactOptional(),
    ScannedCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of items evaluated, before any <code>ScanFilter</code> is applied. A high <code>ScannedCount</code> value with few, or no, <code>Count</code> results indicates an inefficient <code>Scan</code> operation. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#Count">Count and ScannedCount</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>If you did not use a filter in the request, then <code>ScannedCount</code> is the same as <code>Count</code>.</p>',
        }),
    ).exactOptional(),
    LastEvaluatedKey: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The primary key of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.</p> <p>If <code>LastEvaluatedKey</code> is empty, then the "last page" of results has been processed and there is no more data to be retrieved.</p> <p>If <code>LastEvaluatedKey</code> is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when <code>LastEvaluatedKey</code> is empty.</p>',
        }),
    ).exactOptional(),
    ConsumedCapacity: ConsumedCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The capacity units consumed by the <code>Scan</code> operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html#ItemSizeCalculations.Reads">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ConsumedCapacity: {},
      Count: 2,
      Items: [
        { AlbumTitle: { S: 'Somewhat Famous' }, SongTitle: { S: 'Call Me Today' } },
        { AlbumTitle: { S: 'Blue Sky Blues' }, SongTitle: { S: 'Scared of My Shadow' } },
      ],
      ScannedCount: 3,
    },
    description: 'Represents the output of a <code>Scan</code> operation.',
    required: [],
  })
  .openapi('ScanOutput')

const ScanTotalSegmentsSchema = z.int().min(1).max(1000000).openapi('ScanTotalSegments')

const ScanSegmentSchema = z.int().min(0).max(999999).openapi('ScanSegment')

const ScanInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the table containing the requested items; or, if you provide <code>IndexName</code>, the name of the table to which that index belongs.',
        }),
    ),
    IndexName: IndexNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a secondary index to scan. This index can be any local secondary index or global secondary index. Note that if you use the <code>IndexName</code> parameter, you must also provide <code>TableName</code>.',
        }),
    ).exactOptional(),
    AttributesToGet: AttributeNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>ProjectionExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributesToGet.html">AttributesToGet</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to evaluate (not necessarily the number of matching items). If DynamoDB processes the number of items up to the limit while processing the results, it stops the operation and returns the matching values up to that point, and a key in <code>LastEvaluatedKey</code> to apply in a subsequent operation, so that you can pick up where you left off. Also, if the processed dataset size exceeds 1 MB before DynamoDB reaches this limit, it stops the operation and returns the matching values up to the limit, and a key in <code>LastEvaluatedKey</code> to apply in a subsequent operation to continue the operation. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html">Working with Queries</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    Select: SelectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The attributes to be returned in the result. You can retrieve all item attributes, specific item attributes, the count of matching items, or in the case of an index, some or all of the attributes projected into the index.</p> <ul> <li> <p> <code>ALL_ATTRIBUTES</code> - Returns all of the item attributes from the specified table or index. If you query a local secondary index, then for each matching item in the index, DynamoDB fetches the entire item from the parent table. If the index is configured to project all item attributes, then all of the data can be obtained from the local secondary index, and no fetching is required.</p> </li> <li> <p> <code>ALL_PROJECTED_ATTRIBUTES</code> - Allowed only when querying an index. Retrieves all attributes that have been projected into the index. If the index is configured to project all attributes, this return value is equivalent to specifying <code>ALL_ATTRIBUTES</code>.</p> </li> <li> <p> <code>COUNT</code> - Returns the number of matching items, rather than the matching items themselves. Note that this uses the same quantity of read capacity units as getting the items, and is subject to the same item size calculations.</p> </li> <li> <p> <code>SPECIFIC_ATTRIBUTES</code> - Returns only the attributes listed in <code>ProjectionExpression</code>. This return value is equivalent to specifying <code>ProjectionExpression</code> without specifying any value for <code>Select</code>.</p> <p>If you query or scan a local secondary index and request only attributes that are projected into that index, the operation reads only the index and not the table. If any of the requested attributes are not projected into the local secondary index, DynamoDB fetches each of these attributes from the parent table. This extra fetching incurs additional throughput cost and latency.</p> <p>If you query or scan a global secondary index, you can only request attributes that are projected into the index. Global secondary index queries cannot fetch attributes from the parent table.</p> </li> </ul> <p>If neither <code>Select</code> nor <code>ProjectionExpression</code> are specified, DynamoDB defaults to <code>ALL_ATTRIBUTES</code> when accessing a table, and <code>ALL_PROJECTED_ATTRIBUTES</code> when accessing an index. You cannot use both <code>Select</code> and <code>ProjectionExpression</code> together in a single request, unless the value for <code>Select</code> is <code>SPECIFIC_ATTRIBUTES</code>. (This usage is equivalent to specifying <code>ProjectionExpression</code> without any value for <code>Select</code>.)</p> <note> <p>If you use the <code>ProjectionExpression</code> parameter, then the value for <code>Select</code> can only be <code>SPECIFIC_ATTRIBUTES</code>. Any other value for <code>Select</code> will return an error.</p> </note>',
        }),
    ).exactOptional(),
    ScanFilter: FilterConditionMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>FilterExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ScanFilter.html">ScanFilter</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ConditionalOperator: ConditionalOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>FilterExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html">ConditionalOperator</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ExclusiveStartKey: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The primary key of the first item that this operation will evaluate. Use the value that was returned for <code>LastEvaluatedKey</code> in the previous operation.</p> <p>The data type for <code>ExclusiveStartKey</code> must be String, Number or Binary. No set data types are allowed.</p> <p>In a parallel scan, a <code>Scan</code> request that includes <code>ExclusiveStartKey</code> must specify the same segment whose previous <code>Scan</code> returned the corresponding value of <code>LastEvaluatedKey</code>.</p>',
        }),
    ).exactOptional(),
    ReturnConsumedCapacity: ReturnConsumedCapacitySchema.exactOptional(),
    TotalSegments: ScanTotalSegmentsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For a parallel <code>Scan</code> request, <code>TotalSegments</code> represents the total number of segments into which the <code>Scan</code> operation will be divided. The value of <code>TotalSegments</code> corresponds to the number of application workers that will perform the parallel scan. For example, if you want to use four application threads to scan a table or an index, specify a <code>TotalSegments</code> value of 4.</p> <p>The value for <code>TotalSegments</code> must be greater than or equal to 1, and less than or equal to 1000000. If you specify a <code>TotalSegments</code> value of 1, the <code>Scan</code> operation will be sequential rather than parallel.</p> <p>If you specify <code>TotalSegments</code>, you must also specify <code>Segment</code>.</p>',
        }),
    ).exactOptional(),
    Segment: ScanSegmentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For a parallel <code>Scan</code> request, <code>Segment</code> identifies an individual segment to be scanned by an application worker.</p> <p>Segment IDs are zero-based, so the first segment is always 0. For example, if you want to use four application threads to scan a table or an index, then the first thread specifies a <code>Segment</code> value of 0, the second thread specifies 1, and so on.</p> <p>The value of <code>LastEvaluatedKey</code> returned from a parallel <code>Scan</code> request must be used as <code>ExclusiveStartKey</code> with the same segment ID in a subsequent <code>Scan</code> operation.</p> <p>The value for <code>Segment</code> must be greater than or equal to 0, and less than the value provided for <code>TotalSegments</code>.</p> <p>If you provide <code>Segment</code>, you must also provide <code>TotalSegments</code>.</p>',
        }),
    ).exactOptional(),
    ProjectionExpression: ProjectionExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that identifies one or more attributes to retrieve from the specified table or index. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas.</p> <p>If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    FilterExpression: ConditionExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that contains conditions that DynamoDB applies after the <code>Scan</code> operation, but before the data is returned to you. Items that do not satisfy the <code>FilterExpression</code> criteria are not returned.</p> <note> <p>A <code>FilterExpression</code> is applied after the items have already been read; the process of filtering does not consume any additional read capacity units.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#Query.FilterExpression">Filter Expressions</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ExpressionAttributeNames: ExpressionAttributeNameMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more substitution tokens for attribute names in an expression. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p> </li> <li> <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p> </li> <li> <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p> </li> </ul> <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p> <ul> <li> <p> <code>Percentile</code> </p> </li> </ul> <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>). To work around this, you could specify the following for <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p> <code>{"#P":"Percentile"}</code> </p> </li> </ul> <p>You could then use this substitution in an expression, as in this example:</p> <ul> <li> <p> <code>#P = :val</code> </p> </li> </ul> <note> <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p> </note> <p>For more information on expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ExpressionAttributeValues: ExpressionAttributeValueMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more values that can be substituted in an expression.</p> <p>Use the <b>:</b> (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the <code>ProductStatus</code> attribute was one of the following: </p> <p> <code>Available | Backordered | Discontinued</code> </p> <p>You would first need to specify <code>ExpressionAttributeValues</code> as follows:</p> <p> <code>{ ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }</code> </p> <p>You could then use these values in an expression, such as this:</p> <p> <code>ProductStatus IN (:avail, :back, :disc)</code> </p> <p>For more information on expression attribute values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Condition Expressions</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ConsistentRead: ConsistentReadSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A Boolean value that determines the read consistency model during the scan:</p> <ul> <li> <p>If <code>ConsistentRead</code> is <code>false</code>, then the data returned from <code>Scan</code> might not contain the results from other recently completed write operations (<code>PutItem</code>, <code>UpdateItem</code>, or <code>DeleteItem</code>).</p> </li> <li> <p>If <code>ConsistentRead</code> is <code>true</code>, then all of the write operations that completed before the <code>Scan</code> began are guaranteed to be contained in the <code>Scan</code> response.</p> </li> </ul> <p>The default setting for <code>ConsistentRead</code> is <code>false</code>.</p> <p>The <code>ConsistentRead</code> parameter is not supported on global secondary indexes. If you scan a global secondary index with <code>ConsistentRead</code> set to true, you will receive a <code>ValidationException</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TableName'],
    title: 'ScanInput',
    description: 'Represents the input of a <code>Scan</code> operation.',
  })
  .openapi('ScanInput')

const TagResourceInputSchema = z
  .object({
    ResourceArn: ResourceArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies the Amazon DynamoDB resource to which tags should be added. This value is an Amazon Resource Name (ARN).',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the Amazon DynamoDB resource.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const TransactGetItemsOutputSchema = z
  .object({
    ConsumedCapacity: ConsumedCapacityMultipleSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the <i>ReturnConsumedCapacity</i> value was <code>TOTAL</code>, this is an array of <code>ConsumedCapacity</code> objects, one for each table addressed by <code>TransactGetItem</code> objects in the <i>TransactItems</i> parameter. These <code>ConsumedCapacity</code> objects report the read-capacity units consumed by the <code>TransactGetItems</code> call in that table.',
        }),
    ).exactOptional(),
    Responses: ItemResponseListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An ordered array of up to 100 <code>ItemResponse</code> objects, each of which corresponds to the <code>TransactGetItem</code> object in the same position in the <i>TransactItems</i> array. Each <code>ItemResponse</code> object contains a Map of the name-value pairs that are the projected attributes of the requested item.</p> <p>If a requested item could not be retrieved, the corresponding <code>ItemResponse</code> object is Null, or if the requested item has no projected attributes, the corresponding <code>ItemResponse</code> object is an empty Map. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TransactGetItemsOutput')

const GetSchema = z
  .object({
    Key: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of attribute names to <code>AttributeValue</code> objects that specifies the primary key of the item to retrieve.',
        }),
    ),
    TableName: TableNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the table from which to retrieve the specified item.',
        }),
    ),
    ProjectionExpression: ProjectionExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that identifies one or more attributes of the specified item to retrieve from the table. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes of the specified item are returned. If any of the requested attributes are not found, they do not appear in the result.',
        }),
    ).exactOptional(),
    ExpressionAttributeNames: ExpressionAttributeNameMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more substitution tokens for attribute names in the ProjectionExpression parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Key', 'TableName'],
    description:
      'Specifies an item and related attribute values to retrieve in a <code>TransactGetItem</code> object.',
  })
  .openapi('Get')

const TransactGetItemSchema = z
  .object({
    Get: GetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the primary key that identifies the item to get, together with the name of the table that contains the item, and optionally the specific attributes of the item to retrieve.',
        }),
    ),
  })
  .openapi({
    required: ['Get'],
    description: 'Specifies an item to be retrieved as part of the transaction.',
  })
  .openapi('TransactGetItem')

const TransactGetItemListSchema = z
  .array(TransactGetItemSchema)
  .min(1)
  .max(100)
  .openapi('TransactGetItemList')

const TransactGetItemsInputSchema = z
  .object({
    TransactItems: TransactGetItemListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ordered array of up to 100 <code>TransactGetItem</code> objects, each of which contains a <code>Get</code> structure.',
        }),
    ),
    ReturnConsumedCapacity: ReturnConsumedCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'A value of <code>TOTAL</code> causes consumed capacity information to be returned, and a value of <code>NONE</code> prevents that information from being returned. No other value is valid.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TransactItems'], title: 'TransactGetItemsInput' })
  .openapi('TransactGetItemsInput')

const TransactWriteItemsOutputSchema = z
  .object({
    ConsumedCapacity: ConsumedCapacityMultipleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The capacity units consumed by the entire <code>TransactWriteItems</code> operation. The values of the list are ordered according to the ordering of the <code>TransactItems</code> request parameter. ',
        }),
    ).exactOptional(),
    ItemCollectionMetrics: ItemCollectionMetricsPerTableSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tables that were processed by <code>TransactWriteItems</code> and, for each table, information about any item collections that were affected by individual <code>UpdateItem</code>, <code>PutItem</code>, or <code>DeleteItem</code> operations. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TransactWriteItemsOutput')

const ConditionCheckSchema = z
  .object({
    Key: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The primary key of the item to be checked. Each element consists of an attribute name and a value for that attribute.',
        }),
    ),
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'Name of the table for the check item request.' }),
    ),
    ConditionExpression: ConditionExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A condition that must be satisfied in order for a conditional update to succeed. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html">Condition expressions</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ),
    ExpressionAttributeNames: ExpressionAttributeNameMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more substitution tokens for attribute names in an expression. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ExpressionAttributeNames.html">Expression attribute names</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ExpressionAttributeValues: ExpressionAttributeValueMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more values that can be substituted in an expression. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html">Condition expressions</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ReturnValuesOnConditionCheckFailure: ReturnValuesOnConditionCheckFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use <code>ReturnValuesOnConditionCheckFailure</code> to get the item attributes if the <code>ConditionCheck</code> condition fails. For <code>ReturnValuesOnConditionCheckFailure</code>, the valid values are: NONE and ALL_OLD.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Key', 'TableName', 'ConditionExpression'],
    description:
      'Represents a request to perform a check that an item exists or to check the condition of specific attributes of the item.',
  })
  .openapi('ConditionCheck')

const PutSchema = z
  .object({
    Item: PutItemInputAttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "A map of attribute name to attribute values, representing the primary key of the item to be written by <code>PutItem</code>. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema. If any attributes are present in the item that are part of an index key schema for the table, their types must match the index key schema. ",
        }),
    ),
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'Name of the table in which to write the item.' }),
    ),
    ConditionExpression: ConditionExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A condition that must be satisfied in order for a conditional update to succeed.',
        }),
    ).exactOptional(),
    ExpressionAttributeNames: ExpressionAttributeNameMapSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more substitution tokens for attribute names in an expression.',
        }),
    ).exactOptional(),
    ExpressionAttributeValues: ExpressionAttributeValueMapSchema.and(
      z
        .any()
        .openapi({ description: 'One or more values that can be substituted in an expression.' }),
    ).exactOptional(),
    ReturnValuesOnConditionCheckFailure: ReturnValuesOnConditionCheckFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use <code>ReturnValuesOnConditionCheckFailure</code> to get the item attributes if the <code>Put</code> condition fails. For <code>ReturnValuesOnConditionCheckFailure</code>, the valid values are: NONE and ALL_OLD.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Item', 'TableName'],
    description: 'Represents a request to perform a <code>PutItem</code> operation.',
  })
  .openapi('Put')

const DeleteSchema = z
  .object({
    Key: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The primary key of the item to be deleted. Each element consists of an attribute name and a value for that attribute.',
        }),
    ),
    TableName: TableNameSchema.and(
      z
        .any()
        .openapi({ description: 'Name of the table in which the item to be deleted resides.' }),
    ),
    ConditionExpression: ConditionExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A condition that must be satisfied in order for a conditional delete to succeed.',
        }),
    ).exactOptional(),
    ExpressionAttributeNames: ExpressionAttributeNameMapSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more substitution tokens for attribute names in an expression.',
        }),
    ).exactOptional(),
    ExpressionAttributeValues: ExpressionAttributeValueMapSchema.and(
      z
        .any()
        .openapi({ description: 'One or more values that can be substituted in an expression.' }),
    ).exactOptional(),
    ReturnValuesOnConditionCheckFailure: ReturnValuesOnConditionCheckFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use <code>ReturnValuesOnConditionCheckFailure</code> to get the item attributes if the <code>Delete</code> condition fails. For <code>ReturnValuesOnConditionCheckFailure</code>, the valid values are: NONE and ALL_OLD.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Key', 'TableName'],
    description: 'Represents a request to perform a <code>DeleteItem</code> operation.',
  })
  .openapi('Delete')

const UpdateExpressionSchema = z.string().openapi('UpdateExpression')

const UpdateSchema = z
  .object({
    Key: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The primary key of the item to be updated. Each element consists of an attribute name and a value for that attribute.',
        }),
    ),
    UpdateExpression: UpdateExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An expression that defines one or more attributes to be updated, the action to be performed on them, and new value(s) for them.',
        }),
    ),
    TableName: TableNameSchema.and(
      z
        .any()
        .openapi({ description: 'Name of the table for the <code>UpdateItem</code> request.' }),
    ),
    ConditionExpression: ConditionExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A condition that must be satisfied in order for a conditional update to succeed.',
        }),
    ).exactOptional(),
    ExpressionAttributeNames: ExpressionAttributeNameMapSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more substitution tokens for attribute names in an expression.',
        }),
    ).exactOptional(),
    ExpressionAttributeValues: ExpressionAttributeValueMapSchema.and(
      z
        .any()
        .openapi({ description: 'One or more values that can be substituted in an expression.' }),
    ).exactOptional(),
    ReturnValuesOnConditionCheckFailure: ReturnValuesOnConditionCheckFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use <code>ReturnValuesOnConditionCheckFailure</code> to get the item attributes if the <code>Update</code> condition fails. For <code>ReturnValuesOnConditionCheckFailure</code>, the valid values are: NONE and ALL_OLD.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Key', 'UpdateExpression', 'TableName'],
    description: 'Represents a request to perform an <code>UpdateItem</code> operation.',
  })
  .openapi('Update')

const TransactWriteItemSchema = z
  .object({
    ConditionCheck: ConditionCheckSchema.and(
      z.any().openapi({ description: 'A request to perform a check item operation.' }),
    ).exactOptional(),
    Put: PutSchema.and(
      z.any().openapi({ description: 'A request to perform a <code>PutItem</code> operation.' }),
    ).exactOptional(),
    Delete: DeleteSchema.and(
      z.any().openapi({ description: 'A request to perform a <code>DeleteItem</code> operation.' }),
    ).exactOptional(),
    Update: UpdateSchema.and(
      z
        .any()
        .openapi({ description: 'A request to perform an <code>UpdateItem</code> operation.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically.',
    required: [],
  })
  .openapi('TransactWriteItem')

const TransactWriteItemListSchema = z
  .array(TransactWriteItemSchema)
  .min(1)
  .max(100)
  .openapi('TransactWriteItemList')

const TransactWriteItemsInputSchema = z
  .object({
    TransactItems: TransactWriteItemListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ordered array of up to 100 <code>TransactWriteItem</code> objects, each of which contains a <code>ConditionCheck</code>, <code>Put</code>, <code>Update</code>, or <code>Delete</code> object. These can operate on items in different tables, but the tables must reside in the same Amazon Web Services account and Region, and no two of them can operate on the same item. ',
        }),
    ),
    ReturnConsumedCapacity: ReturnConsumedCapacitySchema.exactOptional(),
    ReturnItemCollectionMetrics: ReturnItemCollectionMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether item collection metrics are returned. If set to <code>SIZE</code>, the response includes statistics about item collections (if any), that were modified during the operation and are returned in the response. If set to <code>NONE</code> (the default), no statistics are returned. ',
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Providing a <code>ClientRequestToken</code> makes the call to <code>TransactWriteItems</code> idempotent, meaning that multiple identical calls have the same effect as one single call.</p> <p>Although multiple identical calls using the same client request token produce the same result on the server (no side effects), the responses to the calls might not be the same. If the <code>ReturnConsumedCapacity</code> parameter is set, then the initial <code>TransactWriteItems</code> call returns the amount of write capacity units consumed in making the changes. Subsequent <code>TransactWriteItems</code> calls with the same client token return the number of read capacity units consumed in reading the item.</p> <p>A client request token is valid for 10 minutes after the first request that uses it is completed. After 10 minutes, any request with the same client token is treated as a new request. Do not resubmit the same request with the same client token for more than 10 minutes, or the result might not be idempotent.</p> <p>If you submit a request with the same client token but a change in other parameters within the 10-minute idempotency window, DynamoDB returns an <code>IdempotentParameterMismatch</code> exception.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TransactItems'], title: 'TransactWriteItemsInput' })
  .openapi('TransactWriteItemsInput')

const TagKeyListSchema = z.array(TagKeyStringSchema).openapi('TagKeyList')

const UntagResourceInputSchema = z
  .object({
    ResourceArn: ResourceArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DynamoDB resource that the tags will be removed from. This value is an Amazon Resource Name (ARN).',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tag keys. Existing tags of the resource whose keys are members of this list will be removed from the DynamoDB resource.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

const UpdateContinuousBackupsOutputSchema = z
  .object({
    ContinuousBackupsDescription: ContinuousBackupsDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the continuous backups and point in time recovery settings on the table.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateContinuousBackupsOutput')

const PointInTimeRecoverySpecificationSchema = z
  .object({
    PointInTimeRecoveryEnabled: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.',
        }),
    ),
  })
  .openapi({
    required: ['PointInTimeRecoveryEnabled'],
    description: 'Represents the settings used to enable point in time recovery.',
  })
  .openapi('PointInTimeRecoverySpecification')

const UpdateContinuousBackupsInputSchema = z
  .object({
    TableName: TableNameSchema.and(z.any().openapi({ description: 'The name of the table.' })),
    PointInTimeRecoverySpecification: PointInTimeRecoverySpecificationSchema.and(
      z
        .any()
        .openapi({ description: 'Represents the settings used to enable point in time recovery.' }),
    ),
  })
  .openapi({
    required: ['TableName', 'PointInTimeRecoverySpecification'],
    title: 'UpdateContinuousBackupsInput',
  })
  .openapi('UpdateContinuousBackupsInput')

const UpdateContributorInsightsOutputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table.' }),
    ).exactOptional(),
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'The name of the global secondary index, if applicable.' }),
    ).exactOptional(),
    ContributorInsightsStatus: ContributorInsightsStatusSchema.and(
      z.any().openapi({ description: 'The status of contributor insights' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateContributorInsightsOutput')

const ContributorInsightsActionSchema = z
  .enum(['ENABLE', 'DISABLE'])
  .openapi('ContributorInsightsAction')

const UpdateContributorInsightsInputSchema = z
  .object({
    TableName: TableNameSchema.and(z.any().openapi({ description: 'The name of the table.' })),
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'The global secondary index name, if applicable.' }),
    ).exactOptional(),
    ContributorInsightsAction: ContributorInsightsActionSchema.and(
      z.any().openapi({ description: 'Represents the contributor insights action.' }),
    ),
  })
  .openapi({
    required: ['TableName', 'ContributorInsightsAction'],
    title: 'UpdateContributorInsightsInput',
  })
  .openapi('UpdateContributorInsightsInput')

const UpdateGlobalTableOutputSchema = z
  .object({
    GlobalTableDescription: GlobalTableDescriptionSchema.and(
      z.any().openapi({ description: 'Contains the details of the global table.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateGlobalTableOutput')

const CreateReplicaActionSchema = z
  .object({
    RegionName: RegionNameSchema.and(
      z.any().openapi({ description: 'The Region of the replica to be added.' }),
    ),
  })
  .openapi({ required: ['RegionName'], description: 'Represents a replica to be added.' })
  .openapi('CreateReplicaAction')

const DeleteReplicaActionSchema = z
  .object({
    RegionName: RegionNameSchema.and(
      z.any().openapi({ description: 'The Region of the replica to be removed.' }),
    ),
  })
  .openapi({ required: ['RegionName'], description: 'Represents a replica to be removed.' })
  .openapi('DeleteReplicaAction')

const ReplicaUpdateSchema = z
  .object({
    Create: CreateReplicaActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parameters required for creating a replica on an existing global table.',
        }),
    ).exactOptional(),
    Delete: DeleteReplicaActionSchema.and(
      z.any().openapi({ description: 'The name of the existing replica to be removed.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing global table.</p> </li> <li> <p>New parameters for an existing replica.</p> </li> <li> <p>An existing replica to be removed from an existing global table.</p> </li> </ul>',
    required: [],
  })
  .openapi('ReplicaUpdate')

const ReplicaUpdateListSchema = z.array(ReplicaUpdateSchema).openapi('ReplicaUpdateList')

const UpdateGlobalTableInputSchema = z
  .object({
    GlobalTableName: TableNameSchema.and(
      z.any().openapi({ description: 'The global table name.' }),
    ),
    ReplicaUpdates: ReplicaUpdateListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of Regions that should be added or removed from the global table.',
        }),
    ),
  })
  .openapi({ required: ['GlobalTableName', 'ReplicaUpdates'], title: 'UpdateGlobalTableInput' })
  .openapi('UpdateGlobalTableInput')

const ReplicaAlreadyExistsExceptionSchema = z.any().openapi('ReplicaAlreadyExistsException')

const ReplicaNotFoundExceptionSchema = z.any().openapi('ReplicaNotFoundException')

const UpdateGlobalTableSettingsOutputSchema = z
  .object({
    GlobalTableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the global table.' }),
    ).exactOptional(),
    ReplicaSettings: ReplicaSettingsDescriptionListSchema.and(
      z.any().openapi({ description: 'The Region-specific settings for the global table.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateGlobalTableSettingsOutput')

const AutoScalingRoleArnSchema = z
  .string()
  .min(1)
  .max(1600)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('AutoScalingRoleArn')

const AutoScalingTargetTrackingScalingPolicyConfigurationUpdateSchema = z
  .object({
    DisableScaleIn: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            "Indicates whether scale in by the target tracking policy is disabled. If the value is true, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is false.",
        }),
    ).exactOptional(),
    ScaleInCooldown: IntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            "The amount of time, in seconds, after a scale in activity completes before another scale in activity can start. The cooldown period is used to block subsequent scale in requests until it has expired. You should scale in conservatively to protect your application's availability. However, if another alarm triggers a scale out policy during the cooldown period after a scale-in, application auto scaling scales out your scalable target immediately. ",
        }),
    ).exactOptional(),
    ScaleOutCooldown: IntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time, in seconds, after a scale out activity completes before another scale out activity can start. While the cooldown period is in effect, the capacity that has been added by the previous scale out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. You should continuously (but not excessively) scale out.',
        }),
    ).exactOptional(),
    TargetValue: DoubleObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).',
        }),
    ),
  })
  .openapi({
    required: ['TargetValue'],
    description:
      'Represents the settings of a target tracking scaling policy that will be modified.',
  })
  .openapi('AutoScalingTargetTrackingScalingPolicyConfigurationUpdate')

const AutoScalingPolicyUpdateSchema = z
  .object({
    PolicyName: AutoScalingPolicyNameSchema.and(
      z.any().openapi({ description: 'The name of the scaling policy.' }),
    ).exactOptional(),
    TargetTrackingScalingPolicyConfiguration:
      AutoScalingTargetTrackingScalingPolicyConfigurationUpdateSchema.and(
        z
          .any()
          .openapi({ description: 'Represents a target tracking scaling policy configuration.' }),
      ),
  })
  .openapi({
    required: ['TargetTrackingScalingPolicyConfiguration'],
    description: 'Represents the auto scaling policy to be modified.',
  })
  .openapi('AutoScalingPolicyUpdate')

const AutoScalingSettingsUpdateSchema = z
  .object({
    MinimumUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum capacity units that a global table or global secondary index should be scaled down to.',
        }),
    ).exactOptional(),
    MaximumUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum capacity units that a global table or global secondary index should be scaled up to.',
        }),
    ).exactOptional(),
    AutoScalingDisabled: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Disabled auto scaling for this global table or global secondary index.',
        }),
    ).exactOptional(),
    AutoScalingRoleArn: AutoScalingRoleArnSchema.and(
      z.any().openapi({ description: 'Role ARN used for configuring auto scaling policy.' }),
    ).exactOptional(),
    ScalingPolicyUpdate: AutoScalingPolicyUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scaling policy to apply for scaling target global table or global secondary index capacity units.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the auto scaling settings to be modified for a global table or global secondary index.',
    required: [],
  })
  .openapi('AutoScalingSettingsUpdate')

const GlobalTableGlobalSecondaryIndexSettingsUpdateSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the global secondary index. The name must be unique among all other indexes on this table.',
        }),
    ),
    ProvisionedWriteCapacityUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException.</code> ',
        }),
    ).exactOptional(),
    ProvisionedWriteCapacityAutoScalingSettingsUpdate: AutoScalingSettingsUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            "Auto scaling settings for managing a global secondary index's write capacity units.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IndexName'],
    description:
      'Represents the settings of a global secondary index for a global table that will be modified.',
  })
  .openapi('GlobalTableGlobalSecondaryIndexSettingsUpdate')

const GlobalTableGlobalSecondaryIndexSettingsUpdateListSchema = z
  .array(GlobalTableGlobalSecondaryIndexSettingsUpdateSchema)
  .min(1)
  .max(20)
  .openapi('GlobalTableGlobalSecondaryIndexSettingsUpdateList')

const ReplicaGlobalSecondaryIndexSettingsUpdateSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the global secondary index. The name must be unique among all other indexes on this table.',
        }),
    ),
    ProvisionedReadCapacityUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>.',
        }),
    ).exactOptional(),
    ProvisionedReadCapacityAutoScalingSettingsUpdate: AutoScalingSettingsUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            "Auto scaling settings for managing a global secondary index replica's read capacity units.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IndexName'],
    description:
      'Represents the settings of a global secondary index for a global table that will be modified.',
  })
  .openapi('ReplicaGlobalSecondaryIndexSettingsUpdate')

const ReplicaGlobalSecondaryIndexSettingsUpdateListSchema = z
  .array(ReplicaGlobalSecondaryIndexSettingsUpdateSchema)
  .min(1)
  .max(20)
  .openapi('ReplicaGlobalSecondaryIndexSettingsUpdateList')

const ReplicaSettingsUpdateSchema = z
  .object({
    RegionName: RegionNameSchema.and(
      z.any().openapi({ description: 'The Region of the replica to be added.' }),
    ),
    ReplicaProvisionedReadCapacityUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>. ',
        }),
    ).exactOptional(),
    ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: AutoScalingSettingsUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            "Auto scaling settings for managing a global table replica's read capacity units.",
        }),
    ).exactOptional(),
    ReplicaGlobalSecondaryIndexSettingsUpdate:
      ReplicaGlobalSecondaryIndexSettingsUpdateListSchema.and(
        z
          .any()
          .openapi({
            description:
              'Represents the settings of a global secondary index for a global table that will be modified.',
          }),
      ).exactOptional(),
    ReplicaTableClass: TableClassSchema.and(
      z
        .any()
        .openapi({
          description:
            "Replica-specific table class. If not specified, uses the source table's table class.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RegionName'],
    description: 'Represents the settings for a global table in a Region that will be modified.',
  })
  .openapi('ReplicaSettingsUpdate')

const ReplicaSettingsUpdateListSchema = z
  .array(ReplicaSettingsUpdateSchema)
  .min(1)
  .max(50)
  .openapi('ReplicaSettingsUpdateList')

const UpdateGlobalTableSettingsInputSchema = z
  .object({
    GlobalTableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the global table' }),
    ),
    GlobalTableBillingMode: BillingModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The billing mode of the global table. If <code>GlobalTableBillingMode</code> is not specified, the global table defaults to <code>PROVISIONED</code> capacity billing mode.</p> <ul> <li> <p> <code>PROVISIONED</code> - We recommend using <code>PROVISIONED</code> for predictable workloads. <code>PROVISIONED</code> sets the billing mode to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.ProvisionedThroughput.Manual">Provisioned Mode</a>.</p> </li> <li> <p> <code>PAY_PER_REQUEST</code> - We recommend using <code>PAY_PER_REQUEST</code> for unpredictable workloads. <code>PAY_PER_REQUEST</code> sets the billing mode to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand">On-Demand Mode</a>. </p> </li> </ul>',
        }),
    ).exactOptional(),
    GlobalTableProvisionedWriteCapacityUnits: PositiveLongObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException.</code> ',
        }),
    ).exactOptional(),
    GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate:
      AutoScalingSettingsUpdateSchema.and(
        z
          .any()
          .openapi({
            description:
              'Auto scaling settings for managing provisioned write capacity for the global table.',
          }),
      ).exactOptional(),
    GlobalTableGlobalSecondaryIndexSettingsUpdate:
      GlobalTableGlobalSecondaryIndexSettingsUpdateListSchema.and(
        z
          .any()
          .openapi({
            description:
              'Represents the settings of a global secondary index for a global table that will be modified.',
          }),
      ).exactOptional(),
    ReplicaSettingsUpdate: ReplicaSettingsUpdateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the settings for a global table in a Region that will be modified.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GlobalTableName'], title: 'UpdateGlobalTableSettingsInput' })
  .openapi('UpdateGlobalTableSettingsInput')

const IndexNotFoundExceptionSchema = z.any().openapi('IndexNotFoundException')

const UpdateItemOutputSchema = z
  .object({
    Attributes: AttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of attribute values as they appear before or after the <code>UpdateItem</code> operation, as determined by the <code>ReturnValues</code> parameter.</p> <p>The <code>Attributes</code> map is only present if the update was successful and <code>ReturnValues</code> was specified as something other than <code>NONE</code> in the request. Each element represents one attribute.</p>',
        }),
    ).exactOptional(),
    ConsumedCapacity: ConsumedCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The capacity units consumed by the <code>UpdateItem</code> operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html#ItemSizeCalculations.Reads">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ItemCollectionMetrics: ItemCollectionMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about item collections, if any, that were affected by the <code>UpdateItem</code> operation. <code>ItemCollectionMetrics</code> is only returned if the <code>ReturnItemCollectionMetrics</code> parameter was specified. If the table does not have any local secondary indexes, this information is not returned in the response.</p> <p>Each <code>ItemCollectionMetrics</code> element consists of:</p> <ul> <li> <p> <code>ItemCollectionKey</code> - The partition key value of the item collection. This is the same as the partition key value of the item itself.</p> </li> <li> <p> <code>SizeEstimateRangeGB</code> - An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit.</p> <p>The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Attributes: {
        AlbumTitle: { S: 'Louder Than Ever' },
        Artist: { S: 'Acme Band' },
        SongTitle: { S: 'Happy Day' },
        Year: { N: '2015' },
      },
    },
    description: 'Represents the output of an <code>UpdateItem</code> operation.',
    required: [],
  })
  .openapi('UpdateItemOutput')

const AttributeActionSchema = z.enum(['ADD', 'PUT', 'DELETE']).openapi('AttributeAction')

const AttributeValueUpdateSchema = z
  .object({
    Value: AttributeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
    Action: AttributeActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies how to perform the update. Valid values are <code>PUT</code> (default), <code>DELETE</code>, and <code>ADD</code>. The behavior depends on whether the specified primary key already exists in the table.</p> <p> <b>If an item with the specified <i>Key</i> is found in the table:</b> </p> <ul> <li> <p> <code>PUT</code> - Adds the specified attribute to the item. If the attribute already exists, it is replaced by the new value. </p> </li> <li> <p> <code>DELETE</code> - If no value is specified, the attribute and its value are removed from the item. The data type of the specified value must match the existing value's data type.</p> <p>If a <i>set</i> of values is specified, then those values are subtracted from the old set. For example, if the attribute value was the set <code>[a,b,c]</code> and the <code>DELETE</code> action specified <code>[a,c]</code>, then the final attribute value would be <code>[b]</code>. Specifying an empty set is an error.</p> </li> <li> <p> <code>ADD</code> - If the attribute does not already exist, then the attribute and its values are added to the item. If the attribute does exist, then the behavior of <code>ADD</code> depends on the data type of the attribute:</p> <ul> <li> <p>If the existing attribute is a number, and if <code>Value</code> is also a number, then the <code>Value</code> is mathematically added to the existing attribute. If <code>Value</code> is a negative number, then it is subtracted from the existing attribute.</p> <note> <p> If you use <code>ADD</code> to increment or decrement a number value for an item that doesn't exist before the update, DynamoDB uses 0 as the initial value.</p> <p>In addition, if you use <code>ADD</code> to update an existing item, and intend to increment or decrement an attribute value which does not yet exist, DynamoDB uses <code>0</code> as the initial value. For example, suppose that the item you want to update does not yet have an attribute named <i>itemcount</i>, but you decide to <code>ADD</code> the number <code>3</code> to this attribute anyway, even though it currently does not exist. DynamoDB will create the <i>itemcount</i> attribute, set its initial value to <code>0</code>, and finally add <code>3</code> to it. The result will be a new <i>itemcount</i> attribute in the item, with a value of <code>3</code>.</p> </note> </li> <li> <p>If the existing data type is a set, and if the <code>Value</code> is also a set, then the <code>Value</code> is added to the existing set. (This is a <i>set</i> operation, not mathematical addition.) For example, if the attribute value was the set <code>[1,2]</code>, and the <code>ADD</code> action specified <code>[3]</code>, then the final attribute value would be <code>[1,2,3]</code>. An error occurs if an Add action is specified for a set attribute and the attribute type specified does not match the existing set type. </p> <p>Both sets must have the same primitive data type. For example, if the existing data type is a set of strings, the <code>Value</code> must also be a set of strings. The same holds true for number sets and binary sets.</p> </li> </ul> <p>This action is only valid for an existing attribute whose data type is number or is a set. Do not use <code>ADD</code> for any other data types.</p> </li> </ul> <p> <b>If no item with the specified <i>Key</i> is found:</b> </p> <ul> <li> <p> <code>PUT</code> - DynamoDB creates a new item with the specified primary key, and then adds the attribute. </p> </li> <li> <p> <code>DELETE</code> - Nothing happens; there is no attribute to delete.</p> </li> <li> <p> <code>ADD</code> - DynamoDB creates a new item with the supplied primary key and number (or set) for the attribute value. The only data types allowed are number, number set, string set or binary set.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>For the <code>UpdateItem</code> operation, represents the attributes to be modified, the action to perform on each, and the new value for each.</p> <note> <p>You cannot use <code>UpdateItem</code> to update any primary key attributes. Instead, you will need to delete the item, and then use <code>PutItem</code> to create a new item with new attributes.</p> </note> <p>Attribute values cannot be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p>',
    required: [],
  })
  .openapi('AttributeValueUpdate')

const AttributeUpdatesSchema = z
  .record(z.string(), AttributeValueUpdateSchema)
  .openapi('AttributeUpdates')

const UpdateItemInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table containing the item to update.' }),
    ),
    Key: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The primary key of the item to be updated. Each element consists of an attribute name and a value for that attribute.</p> <p>For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.</p>',
        }),
    ),
    AttributeUpdates: AttributeUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>UpdateExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributeUpdates.html">AttributeUpdates</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    Expected: ExpectedAttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>ConditionExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.Expected.html">Expected</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ConditionalOperator: ConditionalOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a legacy parameter. Use <code>ConditionExpression</code> instead. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html">ConditionalOperator</a> in the <i>Amazon DynamoDB Developer Guide</i>.',
        }),
    ).exactOptional(),
    ReturnValues: ReturnValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use <code>ReturnValues</code> if you want to get the item attributes as they appear before or after they are successfully updated. For <code>UpdateItem</code>, the valid values are:</p> <ul> <li> <p> <code>NONE</code> - If <code>ReturnValues</code> is not specified, or if its value is <code>NONE</code>, then nothing is returned. (This setting is the default for <code>ReturnValues</code>.)</p> </li> <li> <p> <code>ALL_OLD</code> - Returns all of the attributes of the item, as they appeared before the UpdateItem operation.</p> </li> <li> <p> <code>UPDATED_OLD</code> - Returns only the updated attributes, as they appeared before the UpdateItem operation.</p> </li> <li> <p> <code>ALL_NEW</code> - Returns all of the attributes of the item, as they appear after the UpdateItem operation.</p> </li> <li> <p> <code>UPDATED_NEW</code> - Returns only the updated attributes, as they appear after the UpdateItem operation.</p> </li> </ul> <p>There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.</p> <p>The values returned are strongly consistent.</p>',
        }),
    ).exactOptional(),
    ReturnConsumedCapacity: ReturnConsumedCapacitySchema.exactOptional(),
    ReturnItemCollectionMetrics: ReturnItemCollectionMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether item collection metrics are returned. If set to <code>SIZE</code>, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to <code>NONE</code> (the default), no statistics are returned.',
        }),
    ).exactOptional(),
    UpdateExpression: UpdateExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An expression that defines one or more attributes to be updated, the action to be performed on them, and new values for them.</p> <p>The following action values are available for <code>UpdateExpression</code>.</p> <ul> <li> <p> <code>SET</code> - Adds one or more attributes and values to an item. If any of these attributes already exist, they are replaced by the new values. You can also use <code>SET</code> to add or subtract from an attribute that is of type Number. For example: <code>SET myNum = myNum + :val</code> </p> <p> <code>SET</code> supports the following functions:</p> <ul> <li> <p> <code>if_not_exists (path, operand)</code> - if the item does not contain an attribute at the specified path, then <code>if_not_exists</code> evaluates to operand; otherwise, it evaluates to path. You can use this function to avoid overwriting an attribute that may already be present in the item.</p> </li> <li> <p> <code>list_append (operand, operand)</code> - evaluates to a list with a new element added to it. You can append the new element to the start or the end of the list by reversing the order of the operands.</p> </li> </ul> <p>These function names are case-sensitive.</p> </li> <li> <p> <code>REMOVE</code> - Removes one or more attributes from an item.</p> </li> <li> <p> <code>ADD</code> - Adds the specified value to the item, if the attribute does not already exist. If the attribute does exist, then the behavior of <code>ADD</code> depends on the data type of the attribute:</p> <ul> <li> <p>If the existing attribute is a number, and if <code>Value</code> is also a number, then <code>Value</code> is mathematically added to the existing attribute. If <code>Value</code> is a negative number, then it is subtracted from the existing attribute.</p> <note> <p>If you use <code>ADD</code> to increment or decrement a number value for an item that doesn't exist before the update, DynamoDB uses <code>0</code> as the initial value.</p> <p>Similarly, if you use <code>ADD</code> for an existing item to increment or decrement an attribute value that doesn't exist before the update, DynamoDB uses <code>0</code> as the initial value. For example, suppose that the item you want to update doesn't have an attribute named <code>itemcount</code>, but you decide to <code>ADD</code> the number <code>3</code> to this attribute anyway. DynamoDB will create the <code>itemcount</code> attribute, set its initial value to <code>0</code>, and finally add <code>3</code> to it. The result will be a new <code>itemcount</code> attribute in the item, with a value of <code>3</code>.</p> </note> </li> <li> <p>If the existing data type is a set and if <code>Value</code> is also a set, then <code>Value</code> is added to the existing set. For example, if the attribute value is the set <code>[1,2]</code>, and the <code>ADD</code> action specified <code>[3]</code>, then the final attribute value is <code>[1,2,3]</code>. An error occurs if an <code>ADD</code> action is specified for a set attribute and the attribute type specified does not match the existing set type. </p> <p>Both sets must have the same primitive data type. For example, if the existing data type is a set of strings, the <code>Value</code> must also be a set of strings.</p> </li> </ul> <important> <p>The <code>ADD</code> action only supports Number and set data types. In addition, <code>ADD</code> can only be used on top-level attributes, not nested attributes.</p> </important> </li> <li> <p> <code>DELETE</code> - Deletes an element from a set.</p> <p>If a set of values is specified, then those values are subtracted from the old set. For example, if the attribute value was the set <code>[a,b,c]</code> and the <code>DELETE</code> action specifies <code>[a,c]</code>, then the final attribute value is <code>[b]</code>. Specifying an empty set is an error.</p> <important> <p>The <code>DELETE</code> action only supports set data types. In addition, <code>DELETE</code> can only be used on top-level attributes, not nested attributes.</p> </important> </li> </ul> <p>You can have many actions in a single expression, such as the following: <code>SET a=:value1, b=:value2 DELETE :value3, :value4, :value5</code> </p> <p>For more information on update expressions, see <a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.Modifying.html\">Modifying Items and Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>",
        }),
    ).exactOptional(),
    ConditionExpression: ConditionExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A condition that must be satisfied in order for a conditional update to succeed.</p> <p>An expression can contain any of the following:</p> <ul> <li> <p>Functions: <code>attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size</code> </p> <p>These function names are case-sensitive.</p> </li> <li> <p>Comparison operators: <code>= | &lt;&gt; | &lt; | &gt; | &lt;= | &gt;= | BETWEEN | IN </code> </p> </li> <li> <p> Logical operators: <code>AND | OR | NOT</code> </p> </li> </ul> <p>For more information about condition expressions, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Specifying Conditions</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ExpressionAttributeNames: ExpressionAttributeNameMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more substitution tokens for attribute names in an expression. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p> </li> <li> <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p> </li> <li> <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p> </li> </ul> <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p> <ul> <li> <p> <code>Percentile</code> </p> </li> </ul> <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>.) To work around this, you could specify the following for <code>ExpressionAttributeNames</code>:</p> <ul> <li> <p> <code>{"#P":"Percentile"}</code> </p> </li> </ul> <p>You could then use this substitution in an expression, as in this example:</p> <ul> <li> <p> <code>#P = :val</code> </p> </li> </ul> <note> <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p> </note> <p>For more information about expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ExpressionAttributeValues: ExpressionAttributeValueMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more values that can be substituted in an expression.</p> <p>Use the <b>:</b> (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the <code>ProductStatus</code> attribute was one of the following: </p> <p> <code>Available | Backordered | Discontinued</code> </p> <p>You would first need to specify <code>ExpressionAttributeValues</code> as follows:</p> <p> <code>{ ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }</code> </p> <p>You could then use these values in an expression, such as this:</p> <p> <code>ProductStatus IN (:avail, :back, :disc)</code> </p> <p>For more information on expression attribute values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Condition Expressions</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ReturnValuesOnConditionCheckFailure: ReturnValuesOnConditionCheckFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter that returns the item attributes for an <code>UpdateItem</code> operation that failed a condition check.</p> <p>There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TableName', 'Key'],
    title: 'UpdateItemInput',
    description: 'Represents the input of an <code>UpdateItem</code> operation.',
  })
  .openapi('UpdateItemInput')

const UpdateTableOutputSchema = z
  .object({
    TableDescription: TableDescriptionSchema.and(
      z.any().openapi({ description: 'Represents the properties of the table.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      TableDescription: {
        AttributeDefinitions: [
          { AttributeName: 'Artist', AttributeType: 'S' },
          { AttributeName: 'SongTitle', AttributeType: 'S' },
        ],
        CreationDateTime: '1421866952.062',
        ItemCount: 0,
        KeySchema: [
          { AttributeName: 'Artist', KeyType: 'HASH' },
          { AttributeName: 'SongTitle', KeyType: 'RANGE' },
        ],
        ProvisionedThroughput: {
          LastIncreaseDateTime: '1421874759.194',
          NumberOfDecreasesToday: 1,
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
        TableName: 'MusicCollection',
        TableSizeBytes: 0,
        TableStatus: 'UPDATING',
      },
    },
    description: 'Represents the output of an <code>UpdateTable</code> operation.',
    required: [],
  })
  .openapi('UpdateTableOutput')

const UpdateGlobalSecondaryIndexActionSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'The name of the global secondary index to be updated.' }),
    ),
    ProvisionedThroughput: ProvisionedThroughputSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents the provisioned throughput settings for the specified global secondary index.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['IndexName', 'ProvisionedThroughput'],
    description:
      'Represents the new provisioned throughput settings to be applied to a global secondary index.',
  })
  .openapi('UpdateGlobalSecondaryIndexAction')

const CreateGlobalSecondaryIndexActionSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'The name of the global secondary index to be created.' }),
    ),
    KeySchema: KeySchemaSchema.and(
      z.any().openapi({ description: 'The key schema for the global secondary index.' }),
    ),
    Projection: ProjectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.',
        }),
    ),
    ProvisionedThroughput: ProvisionedThroughputSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents the provisioned throughput settings for the specified global secondary index.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IndexName', 'KeySchema', 'Projection'],
    description: 'Represents a new global secondary index to be added to an existing table.',
  })
  .openapi('CreateGlobalSecondaryIndexAction')

const DeleteGlobalSecondaryIndexActionSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'The name of the global secondary index to be deleted.' }),
    ),
  })
  .openapi({
    required: ['IndexName'],
    description: 'Represents a global secondary index to be deleted from an existing table.',
  })
  .openapi('DeleteGlobalSecondaryIndexAction')

const GlobalSecondaryIndexUpdateSchema = z
  .object({
    Update: UpdateGlobalSecondaryIndexActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an existing global secondary index, along with new provisioned throughput settings to be applied to that index.',
        }),
    ).exactOptional(),
    Create: CreateGlobalSecondaryIndexActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The parameters required for creating a global secondary index on an existing table:</p> <ul> <li> <p> <code>IndexName </code> </p> </li> <li> <p> <code>KeySchema </code> </p> </li> <li> <p> <code>AttributeDefinitions </code> </p> </li> <li> <p> <code>Projection </code> </p> </li> <li> <p> <code>ProvisionedThroughput </code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Delete: DeleteGlobalSecondaryIndexActionSchema.and(
      z
        .any()
        .openapi({ description: 'The name of an existing global secondary index to be removed.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents one of the following:</p> <ul> <li> <p>A new global secondary index to be added to an existing table.</p> </li> <li> <p>New provisioned throughput parameters for an existing global secondary index.</p> </li> <li> <p>An existing global secondary index to be removed from an existing table.</p> </li> </ul>',
    required: [],
  })
  .openapi('GlobalSecondaryIndexUpdate')

const GlobalSecondaryIndexUpdateListSchema = z
  .array(GlobalSecondaryIndexUpdateSchema)
  .openapi('GlobalSecondaryIndexUpdateList')

const ReplicaGlobalSecondaryIndexSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'The name of the global secondary index.' }),
    ),
    ProvisionedThroughputOverride: ProvisionedThroughputOverrideSchema.and(
      z
        .any()
        .openapi({
          description:
            "Replica table GSI-specific provisioned throughput. If not specified, uses the source table GSI's read capacity settings.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IndexName'],
    description: 'Represents the properties of a replica global secondary index.',
  })
  .openapi('ReplicaGlobalSecondaryIndex')

const ReplicaGlobalSecondaryIndexListSchema = z
  .array(ReplicaGlobalSecondaryIndexSchema)
  .min(1)
  .openapi('ReplicaGlobalSecondaryIndexList')

const CreateReplicationGroupMemberActionSchema = z
  .object({
    RegionName: RegionNameSchema.and(
      z.any().openapi({ description: 'The Region where the new replica will be created.' }),
    ),
    KMSMasterKeyId: KMSMasterKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key that should be used for KMS encryption in the new replica. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB KMS key <code>alias/aws/dynamodb</code>.',
        }),
    ).exactOptional(),
    ProvisionedThroughputOverride: ProvisionedThroughputOverrideSchema.and(
      z
        .any()
        .openapi({
          description:
            "Replica-specific provisioned throughput. If not specified, uses the source table's provisioned throughput settings.",
        }),
    ).exactOptional(),
    GlobalSecondaryIndexes: ReplicaGlobalSecondaryIndexListSchema.and(
      z.any().openapi({ description: 'Replica-specific global secondary index settings.' }),
    ).exactOptional(),
    TableClassOverride: TableClassSchema.and(
      z
        .any()
        .openapi({
          description:
            "Replica-specific table class. If not specified, uses the source table's table class.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['RegionName'], description: 'Represents a replica to be created.' })
  .openapi('CreateReplicationGroupMemberAction')

const UpdateReplicationGroupMemberActionSchema = z
  .object({
    RegionName: RegionNameSchema.and(
      z.any().openapi({ description: 'The Region where the replica exists.' }),
    ),
    KMSMasterKeyId: KMSMasterKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key of the replica that should be used for KMS encryption. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB KMS key <code>alias/aws/dynamodb</code>.',
        }),
    ).exactOptional(),
    ProvisionedThroughputOverride: ProvisionedThroughputOverrideSchema.and(
      z
        .any()
        .openapi({
          description:
            "Replica-specific provisioned throughput. If not specified, uses the source table's provisioned throughput settings.",
        }),
    ).exactOptional(),
    GlobalSecondaryIndexes: ReplicaGlobalSecondaryIndexListSchema.and(
      z.any().openapi({ description: 'Replica-specific global secondary index settings.' }),
    ).exactOptional(),
    TableClassOverride: TableClassSchema.and(
      z
        .any()
        .openapi({
          description:
            "Replica-specific table class. If not specified, uses the source table's table class.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['RegionName'], description: 'Represents a replica to be modified.' })
  .openapi('UpdateReplicationGroupMemberAction')

const DeleteReplicationGroupMemberActionSchema = z
  .object({
    RegionName: RegionNameSchema.and(
      z.any().openapi({ description: 'The Region where the replica exists.' }),
    ),
  })
  .openapi({ required: ['RegionName'], description: 'Represents a replica to be deleted.' })
  .openapi('DeleteReplicationGroupMemberAction')

const ReplicationGroupUpdateSchema = z
  .object({
    Create: CreateReplicationGroupMemberActionSchema.and(
      z
        .any()
        .openapi({ description: 'The parameters required for creating a replica for the table.' }),
    ).exactOptional(),
    Update: UpdateReplicationGroupMemberActionSchema.and(
      z
        .any()
        .openapi({ description: 'The parameters required for updating a replica for the table.' }),
    ).exactOptional(),
    Delete: DeleteReplicationGroupMemberActionSchema.and(
      z
        .any()
        .openapi({ description: 'The parameters required for deleting a replica for the table.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing regional table or global table. This request invokes the <code>CreateTableReplica</code> action in the destination Region.</p> </li> <li> <p>New parameters for an existing replica. This request invokes the <code>UpdateTable</code> action in the destination Region.</p> </li> <li> <p>An existing replica to be deleted. The request invokes the <code>DeleteTableReplica</code> action in the destination Region, deleting the replica and all if its items in the destination Region.</p> </li> </ul> <note> <p>When you manually remove a table or global table replica, you do not automatically remove any associated scalable targets, scaling policies, or CloudWatch alarms.</p> </note>',
    required: [],
  })
  .openapi('ReplicationGroupUpdate')

const ReplicationGroupUpdateListSchema = z
  .array(ReplicationGroupUpdateSchema)
  .min(1)
  .openapi('ReplicationGroupUpdateList')

const UpdateTableInputSchema = z
  .object({
    AttributeDefinitions: AttributeDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of attributes that describe the key schema for the table and indexes. If you are adding a new global secondary index to the table, <code>AttributeDefinitions</code> must include the key element(s) of the new index.',
        }),
    ).exactOptional(),
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table to be updated.' }),
    ),
    BillingMode: BillingModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Controls how you are charged for read and write throughput and how you manage capacity. When switching from pay-per-request to provisioned capacity, initial provisioned capacity values must be set. The initial provisioned capacity values are estimated based on the consumed read and write capacity of your table and global secondary indexes over the past 30 minutes.</p> <ul> <li> <p> <code>PROVISIONED</code> - We recommend using <code>PROVISIONED</code> for predictable workloads. <code>PROVISIONED</code> sets the billing mode to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.ProvisionedThroughput.Manual">Provisioned Mode</a>.</p> </li> <li> <p> <code>PAY_PER_REQUEST</code> - We recommend using <code>PAY_PER_REQUEST</code> for unpredictable workloads. <code>PAY_PER_REQUEST</code> sets the billing mode to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand">On-Demand Mode</a>. </p> </li> </ul>',
        }),
    ).exactOptional(),
    ProvisionedThroughput: ProvisionedThroughputSchema.and(
      z
        .any()
        .openapi({
          description: 'The new provisioned throughput settings for the specified table or index.',
        }),
    ).exactOptional(),
    GlobalSecondaryIndexUpdates: GlobalSecondaryIndexUpdateListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of one or more global secondary indexes for the table. For each index in the array, you can request one action:</p> <ul> <li> <p> <code>Create</code> - add a new global secondary index to the table.</p> </li> <li> <p> <code>Update</code> - modify the provisioned throughput settings of an existing global secondary index.</p> </li> <li> <p> <code>Delete</code> - remove a global secondary index from the table.</p> </li> </ul> <p>You can create or delete only one global secondary index per <code>UpdateTable</code> operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.OnlineOps.html">Managing Global Secondary Indexes</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
    StreamSpecification: StreamSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Represents the DynamoDB Streams configuration for the table.</p> <note> <p>You receive a <code>ResourceInUseException</code> if you try to enable a stream on a table that already has a stream, or if you try to disable a stream on a table that doesn't have a stream.</p> </note>",
        }),
    ).exactOptional(),
    SSESpecification: SSESpecificationSchema.and(
      z
        .any()
        .openapi({
          description: 'The new server-side encryption settings for the specified table.',
        }),
    ).exactOptional(),
    ReplicaUpdates: ReplicationGroupUpdateListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of replica update actions (create, delete, or update) for the table.</p> <note> <p>This property only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </note>',
        }),
    ).exactOptional(),
    TableClass: TableClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'The table class of the table to be updated. Valid values are <code>STANDARD</code> and <code>STANDARD_INFREQUENT_ACCESS</code>.',
        }),
    ).exactOptional(),
    DeletionProtectionEnabled: DeletionProtectionEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether deletion protection is to be enabled (true) or disabled (false) on the table.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TableName'],
    title: 'UpdateTableInput',
    description: 'Represents the input of an <code>UpdateTable</code> operation.',
  })
  .openapi('UpdateTableInput')

const UpdateTableReplicaAutoScalingOutputSchema = z
  .object({
    TableAutoScalingDescription: TableAutoScalingDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns information about the auto scaling settings of a table with replicas.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateTableReplicaAutoScalingOutput')

const GlobalSecondaryIndexAutoScalingUpdateSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'The name of the global secondary index.' }),
    ).exactOptional(),
    ProvisionedWriteCapacityAutoScalingUpdate: AutoScalingSettingsUpdateSchema.exactOptional(),
  })
  .openapi({
    description:
      'Represents the auto scaling settings of a global secondary index for a global table that will be modified.',
    required: [],
  })
  .openapi('GlobalSecondaryIndexAutoScalingUpdate')

const GlobalSecondaryIndexAutoScalingUpdateListSchema = z
  .array(GlobalSecondaryIndexAutoScalingUpdateSchema)
  .min(1)
  .openapi('GlobalSecondaryIndexAutoScalingUpdateList')

const ReplicaGlobalSecondaryIndexAutoScalingUpdateSchema = z
  .object({
    IndexName: IndexNameSchema.and(
      z.any().openapi({ description: 'The name of the global secondary index.' }),
    ).exactOptional(),
    ProvisionedReadCapacityAutoScalingUpdate: AutoScalingSettingsUpdateSchema.exactOptional(),
  })
  .openapi({
    description:
      'Represents the auto scaling settings of a global secondary index for a replica that will be modified.',
    required: [],
  })
  .openapi('ReplicaGlobalSecondaryIndexAutoScalingUpdate')

const ReplicaGlobalSecondaryIndexAutoScalingUpdateListSchema = z
  .array(ReplicaGlobalSecondaryIndexAutoScalingUpdateSchema)
  .openapi('ReplicaGlobalSecondaryIndexAutoScalingUpdateList')

const ReplicaAutoScalingUpdateSchema = z
  .object({
    RegionName: RegionNameSchema.and(
      z.any().openapi({ description: 'The Region where the replica exists.' }),
    ),
    ReplicaGlobalSecondaryIndexUpdates: ReplicaGlobalSecondaryIndexAutoScalingUpdateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the auto scaling settings of global secondary indexes that will be modified.',
        }),
    ).exactOptional(),
    ReplicaProvisionedReadCapacityAutoScalingUpdate:
      AutoScalingSettingsUpdateSchema.exactOptional(),
  })
  .openapi({
    required: ['RegionName'],
    description: 'Represents the auto scaling settings of a replica that will be modified.',
  })
  .openapi('ReplicaAutoScalingUpdate')

const ReplicaAutoScalingUpdateListSchema = z
  .array(ReplicaAutoScalingUpdateSchema)
  .min(1)
  .openapi('ReplicaAutoScalingUpdateList')

const UpdateTableReplicaAutoScalingInputSchema = z
  .object({
    GlobalSecondaryIndexUpdates: GlobalSecondaryIndexAutoScalingUpdateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the auto scaling settings of the global secondary indexes of the replica to be updated.',
        }),
    ).exactOptional(),
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the global table to be updated.' }),
    ),
    ProvisionedWriteCapacityAutoScalingUpdate: AutoScalingSettingsUpdateSchema.exactOptional(),
    ReplicaUpdates: ReplicaAutoScalingUpdateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the auto scaling settings of replicas of the table that will be modified.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TableName'], title: 'UpdateTableReplicaAutoScalingInput' })
  .openapi('UpdateTableReplicaAutoScalingInput')

const TimeToLiveEnabledSchema = z.boolean().openapi('TimeToLiveEnabled')

const TimeToLiveSpecificationSchema = z
  .object({
    Enabled: TimeToLiveEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether TTL is to be enabled (true) or disabled (false) on the table.',
        }),
    ),
    AttributeName: TimeToLiveAttributeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the TTL attribute used to store the expiration time for items in the table.',
        }),
    ),
  })
  .openapi({
    required: ['Enabled', 'AttributeName'],
    description:
      'Represents the settings used to enable or disable Time to Live (TTL) for the specified table.',
  })
  .openapi('TimeToLiveSpecification')

const UpdateTimeToLiveOutputSchema = z
  .object({
    TimeToLiveSpecification: TimeToLiveSpecificationSchema.and(
      z
        .any()
        .openapi({
          description: 'Represents the output of an <code>UpdateTimeToLive</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateTimeToLiveOutput')

const UpdateTimeToLiveInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table to be configured.' }),
    ),
    TimeToLiveSpecification: TimeToLiveSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the settings used to enable or disable Time to Live for the specified table.',
        }),
    ),
  })
  .openapi({
    required: ['TableName', 'TimeToLiveSpecification'],
    title: 'UpdateTimeToLiveInput',
    description: 'Represents the input of an <code>UpdateTimeToLive</code> operation.',
  })
  .openapi('UpdateTimeToLiveInput')

const ExpressionAttributeNameVariableSchema = z.string().openapi('ExpressionAttributeNameVariable')

const ExpressionAttributeValueVariableSchema = z
  .string()
  .openapi('ExpressionAttributeValueVariable')

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

export const postXAmzTargetDynamoDB20120810BatchExecuteStatementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement',
  description:
    '<p>This operation allows you to perform batch reads or writes on data stored in DynamoDB, using PartiQL. Each read statement in a <code>BatchExecuteStatement</code> must specify an equality condition on all key attributes. This enforces that each <code>SELECT</code> statement in a batch returns at most a single item.</p> <note> <p>The entire batch must consist of either read statements or write statements, you cannot mix both in one batch.</p> </note> <important> <p>A HTTP 200 response does not mean that all statements in the BatchExecuteStatement succeeded. Error details for individual statements can be found under the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchStatementResponse.html#DDB-Type-BatchStatementResponse-Error">Error</a> field of the <code>BatchStatementResponse</code> for each statement.</p> </important>',
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
      'X-Amz-Target': z
        .literal('DynamoDB_20120810.BatchExecuteStatement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.BatchExecuteStatement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchExecuteStatementInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchExecuteStatementOutputSchema } },
    },
    480: {
      description: 'RequestLimitExceeded',
      content: { 'application/json': { schema: RequestLimitExceededSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810BatchGetItemRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.BatchGetItem',
  description:
    '<p>The <code>BatchGetItem</code> operation returns the attributes of one or more items from one or more tables. You identify requested items by primary key.</p> <p>A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items. <code>BatchGetItem</code> returns a partial result if the response size limit is exceeded, the table\'s provisioned throughput is exceeded, more than 1MB per partition is requested, or an internal processing failure occurs. If a partial result is returned, the operation returns a value for <code>UnprocessedKeys</code>. You can use this value to retry the operation starting with the next item to get.</p> <important> <p>If you request more than 100 items, <code>BatchGetItem</code> returns a <code>ValidationException</code> with the message "Too many items requested for the BatchGetItem call."</p> </important> <p>For example, if you ask to retrieve 100 items, but each individual item is 300 KB in size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If desired, your application can include its own logic to assemble the pages of results into one dataset.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchGetItem</code> returns a <code>ProvisionedThroughputExceededException</code>. If <i>at least one</i> of the items is successfully processed, then <code>BatchGetItem</code> completes successfully, while returning the keys of the unread items in <code>UnprocessedKeys</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>By default, <code>BatchGetItem</code> performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set <code>ConsistentRead</code> to <code>true</code> for any or all tables.</p> <p>In order to minimize response latency, <code>BatchGetItem</code> may retrieve items in parallel.</p> <p>When designing your application, keep in mind that DynamoDB does not return items in any particular order. To help parse the response by item, include the primary key values for the items in your request in the <code>ProjectionExpression</code> parameter.</p> <p>If a requested item does not exist, it is not returned in the result. Requests for nonexistent items consume the minimum read capacity units according to the type of read. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#CapacityUnitCalculations">Working with Tables</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
  operationId: 'BatchGetItem',
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
        .literal('DynamoDB_20120810.BatchGetItem')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.BatchGetItem'] },
          },
        }),
    }),
    query: z.object({
      RequestItems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'RequestItems',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchGetItemInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetItemOutputSchema } },
    },
    480: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'RequestLimitExceeded',
      content: { 'application/json': { schema: RequestLimitExceededSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810BatchWriteItemRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.BatchWriteItem',
  description:
    "<p>The <code>BatchWriteItem</code> operation puts or deletes multiple items in one or more tables. A single call to <code>BatchWriteItem</code> can transmit up to 16MB of data over the network, consisting of up to 25 item put or delete operations. While individual items can be up to 400 KB once stored, it's important to note that an item's representation might be greater than 400KB while being sent in DynamoDB's JSON format for the API call. For more details on this distinction, see <a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html\">Naming Rules and Data Types</a>.</p> <note> <p> <code>BatchWriteItem</code> cannot update items. If you perform a <code>BatchWriteItem</code> operation on an existing item, that item's values will be overwritten by the operation and it will appear like it was updated. To update items, we recommend you use the <code>UpdateItem</code> action.</p> </note> <p>The individual <code>PutItem</code> and <code>DeleteItem</code> operations specified in <code>BatchWriteItem</code> are atomic; however <code>BatchWriteItem</code> as a whole is not. If any requested operations fail because the table's provisioned throughput is exceeded or an internal processing failure occurs, the failed operations are returned in the <code>UnprocessedItems</code> response parameter. You can investigate and optionally resend the requests. Typically, you would call <code>BatchWriteItem</code> in a loop. Each iteration would check for unprocessed items and submit a new <code>BatchWriteItem</code> request with those unprocessed items until all items have been processed.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchWriteItem</code> returns a <code>ProvisionedThroughputExceededException</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#Programming.Errors.BatchOperations\">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>With <code>BatchWriteItem</code>, you can efficiently write or delete large amounts of data, such as from Amazon EMR, or copy data from another database into DynamoDB. In order to improve performance with these large-scale operations, <code>BatchWriteItem</code> does not behave in the same way as individual <code>PutItem</code> and <code>DeleteItem</code> calls would. For example, you cannot specify conditions on individual put and delete requests, and <code>BatchWriteItem</code> does not return deleted items in the response.</p> <p>If you use a programming language that supports concurrency, you can use threads to write items in parallel. Your application must include the necessary logic to manage the threads. With languages that don't support threading, you must update or delete the specified items one at a time. In both situations, <code>BatchWriteItem</code> performs the specified put and delete operations in parallel, giving you the power of the thread pool approach without having to introduce complexity into your application.</p> <p>Parallel processing reduces latency, but each specified put and delete request consumes the same number of write capacity units whether it is processed in parallel or not. Delete operations on nonexistent items consume one write capacity unit.</p> <p>If one or more of the following is true, DynamoDB rejects the entire batch write operation:</p> <ul> <li> <p>One or more tables specified in the <code>BatchWriteItem</code> request does not exist.</p> </li> <li> <p>Primary key attributes specified on an item in the request do not match those in the corresponding table's primary key schema.</p> </li> <li> <p>You try to perform multiple operations on the same item in the same <code>BatchWriteItem</code> request. For example, you cannot put and delete the same item in the same <code>BatchWriteItem</code> request. </p> </li> <li> <p> Your request contains at least two items with identical hash and range keys (which essentially is two put operations). </p> </li> <li> <p>There are more than 25 requests in the batch.</p> </li> <li> <p>Any individual item in a batch exceeds 400 KB.</p> </li> <li> <p>The total request size exceeds 16 MB.</p> </li> </ul>",
  operationId: 'BatchWriteItem',
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
        .literal('DynamoDB_20120810.BatchWriteItem')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.BatchWriteItem'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchWriteItemInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchWriteItemOutputSchema } },
    },
    480: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ItemCollectionSizeLimitExceededException',
      content: { 'application/json': { schema: ItemCollectionSizeLimitExceededExceptionSchema } },
    },
    483: {
      description: 'RequestLimitExceeded',
      content: { 'application/json': { schema: RequestLimitExceededSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810CreateBackupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.CreateBackup',
  description:
    '<p>Creates a backup for an existing table.</p> <p> Each time you create an on-demand backup, the entire table data is backed up. There is no limit to the number of on-demand backups that can be taken. </p> <p> When you create an on-demand backup, a time marker of the request is cataloged, and the backup is created asynchronously, by applying all changes until the time of the request to the last full table snapshot. Backup requests are processed instantaneously and become available for restore within minutes. </p> <p>You can call <code>CreateBackup</code> at a maximum rate of 50 times per second.</p> <p>All backups in DynamoDB work without consuming any provisioned throughput on the table.</p> <p> If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed to contain all data committed to the table up to 14:24:00, and data committed after 14:26:00 will not be. The backup might contain data modifications made between 14:24:00 and 14:26:00. On-demand backup does not support causal consistency. </p> <p> Along with data, the following are also included on the backups: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Streams</p> </li> <li> <p>Provisioned read and write capacity</p> </li> </ul>',
  operationId: 'CreateBackup',
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
        .literal('DynamoDB_20120810.CreateBackup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.CreateBackup'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateBackupInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBackupOutputSchema } },
    },
    480: {
      description: 'TableNotFoundException',
      content: { 'application/json': { schema: TableNotFoundExceptionSchema } },
    },
    481: {
      description: 'TableInUseException',
      content: { 'application/json': { schema: TableInUseExceptionSchema } },
    },
    482: {
      description: 'ContinuousBackupsUnavailableException',
      content: { 'application/json': { schema: ContinuousBackupsUnavailableExceptionSchema } },
    },
    483: {
      description: 'BackupInUseException',
      content: { 'application/json': { schema: BackupInUseExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810CreateGlobalTableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable',
  description:
    '<p>Creates a global table from an existing table. A global table creates a replication relationship between two or more DynamoDB tables with the same table name in the provided Regions. </p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important> <p>If you want to add a new replica table to a global table, each of the following conditions must be true:</p> <ul> <li> <p>The table must have the same primary key as all of the other replicas.</p> </li> <li> <p>The table must have the same name as all of the other replicas.</p> </li> <li> <p>The table must have DynamoDB Streams enabled, with the stream containing both the new and the old images of the item.</p> </li> <li> <p>None of the replica tables in the global table can contain any data.</p> </li> </ul> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <p> If local secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The local secondary indexes must have the same name. </p> </li> <li> <p> The local secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <important> <p> Write capacity settings should be set consistently across your replica tables and secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write capacity settings for all of your global tables replicas and indexes. </p> <p> If you prefer to manage write capacity settings manually, you should provision equal replicated write capacity units to your replica tables. You should also provision equal replicated write capacity units to matching secondary indexes across your global table. </p> </important>',
  operationId: 'CreateGlobalTable',
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
        .literal('DynamoDB_20120810.CreateGlobalTable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.CreateGlobalTable'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateGlobalTableInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGlobalTableOutputSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'GlobalTableAlreadyExistsException',
      content: { 'application/json': { schema: GlobalTableAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'TableNotFoundException',
      content: { 'application/json': { schema: TableNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810CreateTableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.CreateTable',
  description:
    '<p>The <code>CreateTable</code> operation adds a new table to your account. In an Amazon Web Services account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions.</p> <p> <code>CreateTable</code> is an asynchronous operation. Upon receiving a <code>CreateTable</code> request, DynamoDB immediately returns a response with a <code>TableStatus</code> of <code>CREATING</code>. After the table is created, DynamoDB sets the <code>TableStatus</code> to <code>ACTIVE</code>. You can perform read and write operations only on an <code>ACTIVE</code> table. </p> <p>You can optionally define secondary indexes on the new table, as part of the <code>CreateTable</code> operation. If you want to create multiple tables with secondary indexes on them, you must create the tables sequentially. Only one table with secondary indexes can be in the <code>CREATING</code> state at any given time.</p> <p>You can use the <code>DescribeTable</code> action to check the table status.</p>',
  operationId: 'CreateTable',
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
        .literal('DynamoDB_20120810.CreateTable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.CreateTable'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateTableInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTableOutputSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DeleteBackupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DeleteBackup',
  description:
    '<p>Deletes an existing backup of a table.</p> <p>You can call <code>DeleteBackup</code> at a maximum rate of 10 times per second.</p>',
  operationId: 'DeleteBackup',
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
        .literal('DynamoDB_20120810.DeleteBackup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.DeleteBackup'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteBackupInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBackupOutputSchema } },
    },
    480: {
      description: 'BackupNotFoundException',
      content: { 'application/json': { schema: BackupNotFoundExceptionSchema } },
    },
    481: {
      description: 'BackupInUseException',
      content: { 'application/json': { schema: BackupInUseExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DeleteItemRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DeleteItem',
  description:
    "<p>Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p> <p>In addition to deleting an item, you can also return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <p>Unless you specify conditions, the <code>DeleteItem</code> is an idempotent operation; running it multiple times on the same item or attribute does <i>not</i> result in an error response.</p> <p>Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.</p>",
  operationId: 'DeleteItem',
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
        .literal('DynamoDB_20120810.DeleteItem')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.DeleteItem'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteItemInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteItemOutputSchema } },
    },
    480: {
      description: 'ConditionalCheckFailedException',
      content: { 'application/json': { schema: ConditionalCheckFailedExceptionSchema } },
    },
    481: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ItemCollectionSizeLimitExceededException',
      content: { 'application/json': { schema: ItemCollectionSizeLimitExceededExceptionSchema } },
    },
    484: {
      description: 'TransactionConflictException',
      content: { 'application/json': { schema: TransactionConflictExceptionSchema } },
    },
    485: {
      description: 'RequestLimitExceeded',
      content: { 'application/json': { schema: RequestLimitExceededSchema } },
    },
    486: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DeleteTableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DeleteTable',
  description:
    '<p>The <code>DeleteTable</code> operation deletes a table and all of its items. After a <code>DeleteTable</code> request, the specified table is in the <code>DELETING</code> state until DynamoDB completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states, then DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, DynamoDB returns a <code>ResourceNotFoundException</code>. If table is already in the <code>DELETING</code> state, no error is returned. </p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <note> <p>DynamoDB might continue to accept data read and write operations, such as <code>GetItem</code> and <code>PutItem</code>, on a table in the <code>DELETING</code> state until the table deletion is complete.</p> </note> <p>When you delete a table, any indexes on that table are also deleted.</p> <p>If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes into the <code>DISABLED</code> state, and the stream is automatically deleted after 24 hours.</p> <p>Use the <code>DescribeTable</code> action to check the status of the table. </p>',
  operationId: 'DeleteTable',
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
        .literal('DynamoDB_20120810.DeleteTable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.DeleteTable'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteTableInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTableOutputSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DescribeBackupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DescribeBackup',
  description:
    '<p>Describes an existing backup of a table.</p> <p>You can call <code>DescribeBackup</code> at a maximum rate of 10 times per second.</p>',
  operationId: 'DescribeBackup',
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
        .literal('DynamoDB_20120810.DescribeBackup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.DescribeBackup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeBackupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBackupOutputSchema } },
    },
    480: {
      description: 'BackupNotFoundException',
      content: { 'application/json': { schema: BackupNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DescribeContinuousBackupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups',
  description:
    '<p>Checks the status of continuous backups and point in time recovery on the specified table. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> After continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p> <p>You can call <code>DescribeContinuousBackups</code> at a maximum rate of 10 times per second.</p>',
  operationId: 'DescribeContinuousBackups',
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
        .literal('DynamoDB_20120810.DescribeContinuousBackups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.DescribeContinuousBackups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeContinuousBackupsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeContinuousBackupsOutputSchema } },
    },
    480: {
      description: 'TableNotFoundException',
      content: { 'application/json': { schema: TableNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DescribeContributorInsightsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights',
  description:
    'Returns information about contributor insights for a given table or global secondary index.',
  operationId: 'DescribeContributorInsights',
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
        .literal('DynamoDB_20120810.DescribeContributorInsights')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.DescribeContributorInsights'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeContributorInsightsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeContributorInsightsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DescribeEndpointsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints',
  description:
    'Returns the regional endpoint information. For more information on policy permissions, please see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/inter-network-traffic-privacy.html#inter-network-traffic-DescribeEndpoints">Internetwork traffic privacy</a>.',
  operationId: 'DescribeEndpoints',
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
        .literal('DynamoDB_20120810.DescribeEndpoints')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.DescribeEndpoints'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEndpointsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEndpointsResponseSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DescribeExportRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DescribeExport',
  description: 'Describes an existing table export.',
  operationId: 'DescribeExport',
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
        .literal('DynamoDB_20120810.DescribeExport')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.DescribeExport'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeExportInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeExportOutputSchema } },
    },
    480: {
      description: 'ExportNotFoundException',
      content: { 'application/json': { schema: ExportNotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DescribeGlobalTableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable',
  description:
    '<p>Returns information about the specified global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>',
  operationId: 'DescribeGlobalTable',
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
        .literal('DynamoDB_20120810.DescribeGlobalTable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.DescribeGlobalTable'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeGlobalTableInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGlobalTableOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'GlobalTableNotFoundException',
      content: { 'application/json': { schema: GlobalTableNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DescribeGlobalTableSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings',
  description:
    '<p>Describes Region-specific settings for a global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>',
  operationId: 'DescribeGlobalTableSettings',
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
        .literal('DynamoDB_20120810.DescribeGlobalTableSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.DescribeGlobalTableSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeGlobalTableSettingsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGlobalTableSettingsOutputSchema } },
    },
    480: {
      description: 'GlobalTableNotFoundException',
      content: { 'application/json': { schema: GlobalTableNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DescribeImportRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DescribeImport',
  description: ' Represents the properties of the import. ',
  operationId: 'DescribeImport',
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
        .literal('DynamoDB_20120810.DescribeImport')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.DescribeImport'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeImportInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeImportOutputSchema } },
    },
    480: {
      description: 'ImportNotFoundException',
      content: { 'application/json': { schema: ImportNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DescribeKinesisStreamingDestinationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination',
  description: 'Returns information about the status of Kinesis streaming.',
  operationId: 'DescribeKinesisStreamingDestination',
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
        .literal('DynamoDB_20120810.DescribeKinesisStreamingDestination')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['DynamoDB_20120810.DescribeKinesisStreamingDestination'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeKinesisStreamingDestinationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeKinesisStreamingDestinationOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DescribeLimitsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DescribeLimits',
  description:
    '<p>Returns the current provisioned-capacity quotas for your Amazon Web Services account in a Region, both for the Region as a whole and for any one DynamoDB table that you create there.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum read capacity units and write capacity units that you can provision across all of your DynamoDB tables in a given Region. Also, there are per-table quotas that apply when you create a table there. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> page in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>Although you can increase these quotas by filing a case at <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support Center</a>, obtaining the increase is not instantaneous. The <code>DescribeLimits</code> action lets you write code to compare the capacity you are currently using to those quotas imposed by your account so that you have enough time to apply for an increase before you hit a quota.</p> <p>For example, you could use one of the Amazon Web Services SDKs to do the following:</p> <ol> <li> <p>Call <code>DescribeLimits</code> for a particular Region to obtain your current account quotas on provisioned capacity there.</p> </li> <li> <p>Create a variable to hold the aggregate read capacity units provisioned for all your tables in that Region, and one to hold the aggregate write capacity units. Zero them both.</p> </li> <li> <p>Call <code>ListTables</code> to obtain a list of all your DynamoDB tables.</p> </li> <li> <p>For each table name listed by <code>ListTables</code>, do the following:</p> <ul> <li> <p>Call <code>DescribeTable</code> with the table name.</p> </li> <li> <p>Use the data returned by <code>DescribeTable</code> to add the read capacity units and write capacity units provisioned for the table itself to your variables.</p> </li> <li> <p>If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well.</p> </li> </ul> </li> <li> <p>Report the account quotas for that Region returned by <code>DescribeLimits</code>, along with the total current provisioned capacity levels you have calculated.</p> </li> </ol> <p>This will let you see whether you are getting close to your account-level quotas.</p> <p>The per-table quotas apply only when you are creating a new table. They restrict the sum of the provisioned capacity of the new table itself and all its global secondary indexes.</p> <p>For existing tables and their GSIs, DynamoDB doesn\'t let you increase provisioned capacity extremely rapidly, but the only quota that applies is that the aggregate provisioned capacity over all your tables and GSIs cannot exceed either of the per-account quotas.</p> <note> <p> <code>DescribeLimits</code> should only be called periodically. You can expect throttling errors if you call it more than once in a minute.</p> </note> <p>The <code>DescribeLimits</code> Request element has no content.</p>',
  operationId: 'DescribeLimits',
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
        .literal('DynamoDB_20120810.DescribeLimits')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.DescribeLimits'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLimitsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLimitsOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DescribeTableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DescribeTable',
  description:
    '<p>Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <note> <p>If you issue a <code>DescribeTable</code> request immediately after a <code>CreateTable</code> request, DynamoDB might return a <code>ResourceNotFoundException</code>. This is because <code>DescribeTable</code> uses an eventually consistent query, and the metadata for your table might not be available at that moment. Wait for a few seconds, and then try the <code>DescribeTable</code> request again.</p> </note>',
  operationId: 'DescribeTable',
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
        .literal('DynamoDB_20120810.DescribeTable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.DescribeTable'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DescribeTableInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTableOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DescribeTableReplicaAutoScalingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling',
  description:
    '<p>Describes auto scaling settings across replicas of the global table at once.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables.</p> </important>',
  operationId: 'DescribeTableReplicaAutoScaling',
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
        .literal('DynamoDB_20120810.DescribeTableReplicaAutoScaling')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.DescribeTableReplicaAutoScaling'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTableReplicaAutoScalingInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTableReplicaAutoScalingOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DescribeTimeToLiveRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive',
  description: 'Gives a description of the Time to Live (TTL) status on the specified table. ',
  operationId: 'DescribeTimeToLive',
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
        .literal('DynamoDB_20120810.DescribeTimeToLive')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.DescribeTimeToLive'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTimeToLiveInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTimeToLiveOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810DisableKinesisStreamingDestinationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination',
  description:
    'Stops replication from the DynamoDB table to the Kinesis data stream. This is done without deleting either of the resources.',
  operationId: 'DisableKinesisStreamingDestination',
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
        .literal('DynamoDB_20120810.DisableKinesisStreamingDestination')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['DynamoDB_20120810.DisableKinesisStreamingDestination'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: KinesisStreamingDestinationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: KinesisStreamingDestinationOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810EnableKinesisStreamingDestinationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination',
  description:
    "Starts table data replication to the specified Kinesis data stream at a timestamp chosen during the enable workflow. If this operation doesn't return results immediately, use DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is ACTIVE.",
  operationId: 'EnableKinesisStreamingDestination',
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
        .literal('DynamoDB_20120810.EnableKinesisStreamingDestination')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['DynamoDB_20120810.EnableKinesisStreamingDestination'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: KinesisStreamingDestinationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: KinesisStreamingDestinationOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810ExecuteStatementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.ExecuteStatement',
  description:
    '<p>This operation allows you to perform reads and singleton writes on data stored in DynamoDB, using PartiQL.</p> <p>For PartiQL reads (<code>SELECT</code> statement), if the total number of processed items exceeds the maximum dataset size limit of 1 MB, the read stops and results are returned to the user as a <code>LastEvaluatedKey</code> value to continue the read in a subsequent operation. If the filter criteria in <code>WHERE</code> clause does not match any data, the read will return an empty result set.</p> <p>A single <code>SELECT</code> statement response can return up to the maximum number of items (if using the Limit parameter) or a maximum of 1 MB of data (and then apply any filtering to the results using <code>WHERE</code> clause). If <code>LastEvaluatedKey</code> is present in the response, you need to paginate the result set. If <code>NextToken</code> is present, you need to paginate the result set and include <code>NextToken</code>.</p>',
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
      'X-Amz-Target': z
        .literal('DynamoDB_20120810.ExecuteStatement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.ExecuteStatement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ExecuteStatementInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExecuteStatementOutputSchema } },
    },
    480: {
      description: 'ConditionalCheckFailedException',
      content: { 'application/json': { schema: ConditionalCheckFailedExceptionSchema } },
    },
    481: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ItemCollectionSizeLimitExceededException',
      content: { 'application/json': { schema: ItemCollectionSizeLimitExceededExceptionSchema } },
    },
    484: {
      description: 'TransactionConflictException',
      content: { 'application/json': { schema: TransactionConflictExceptionSchema } },
    },
    485: {
      description: 'RequestLimitExceeded',
      content: { 'application/json': { schema: RequestLimitExceededSchema } },
    },
    486: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    487: {
      description: 'DuplicateItemException',
      content: { 'application/json': { schema: DuplicateItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810ExecuteTransactionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction',
  description:
    '<p>This operation allows you to perform transactional reads or writes on data stored in DynamoDB, using PartiQL.</p> <note> <p>The entire transaction must consist of either read statements or write statements, you cannot mix both in one transaction. The EXISTS function is an exception and can be used to check the condition of specific attributes of the item in a similar manner to <code>ConditionCheck</code> in the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-apis-txwriteitems">TransactWriteItems</a> API.</p> </note>',
  operationId: 'ExecuteTransaction',
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
        .literal('DynamoDB_20120810.ExecuteTransaction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.ExecuteTransaction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ExecuteTransactionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExecuteTransactionOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'TransactionCanceledException',
      content: { 'application/json': { schema: TransactionCanceledExceptionSchema } },
    },
    482: {
      description: 'TransactionInProgressException',
      content: { 'application/json': { schema: TransactionInProgressExceptionSchema } },
    },
    483: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'RequestLimitExceeded',
      content: { 'application/json': { schema: RequestLimitExceededSchema } },
    },
    486: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810ExportTableToPointInTimeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime',
  description:
    'Exports table data to an S3 bucket. The table must have point in time recovery enabled, and you can export data from any time within the point in time recovery window.',
  operationId: 'ExportTableToPointInTime',
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
        .literal('DynamoDB_20120810.ExportTableToPointInTime')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.ExportTableToPointInTime'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ExportTableToPointInTimeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExportTableToPointInTimeOutputSchema } },
    },
    480: {
      description: 'TableNotFoundException',
      content: { 'application/json': { schema: TableNotFoundExceptionSchema } },
    },
    481: {
      description: 'PointInTimeRecoveryUnavailableException',
      content: { 'application/json': { schema: PointInTimeRecoveryUnavailableExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidExportTimeException',
      content: { 'application/json': { schema: InvalidExportTimeExceptionSchema } },
    },
    484: {
      description: 'ExportConflictException',
      content: { 'application/json': { schema: ExportConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810GetItemRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.GetItem',
  description:
    '<p>The <code>GetItem</code> operation returns a set of attributes for the item with the given primary key. If there is no matching item, <code>GetItem</code> does not return any data and there will be no <code>Item</code> element in the response.</p> <p> <code>GetItem</code> provides an eventually consistent read by default. If your application requires a strongly consistent read, set <code>ConsistentRead</code> to <code>true</code>. Although a strongly consistent read might take more time than an eventually consistent read, it always returns the last updated value.</p>',
  operationId: 'GetItem',
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
        .literal('DynamoDB_20120810.GetItem')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.GetItem'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetItemInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetItemOutputSchema } },
    },
    480: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'RequestLimitExceeded',
      content: { 'application/json': { schema: RequestLimitExceededSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810ImportTableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.ImportTable',
  description: ' Imports table data from an S3 bucket. ',
  operationId: 'ImportTable',
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
        .literal('DynamoDB_20120810.ImportTable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.ImportTable'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportTableInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportTableOutputSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ImportConflictException',
      content: { 'application/json': { schema: ImportConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810ListBackupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.ListBackups',
  description:
    '<p>List backups associated with an Amazon Web Services account. To list backups for a given table, specify <code>TableName</code>. <code>ListBackups</code> returns a paginated list of results with at most 1 MB worth of items in a page. You can also specify a maximum number of entries to be returned in a page.</p> <p>In the request, start time is inclusive, but end time is exclusive. Note that these boundaries are for the time at which the original backup was requested.</p> <p>You can call <code>ListBackups</code> a maximum of five times per second.</p>',
  operationId: 'ListBackups',
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
        .literal('DynamoDB_20120810.ListBackups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.ListBackups'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListBackupsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBackupsOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810ListContributorInsightsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.ListContributorInsights',
  description:
    'Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes.',
  operationId: 'ListContributorInsights',
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
        .literal('DynamoDB_20120810.ListContributorInsights')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.ListContributorInsights'] },
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
      content: { 'application/json': { schema: ListContributorInsightsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListContributorInsightsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810ListExportsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.ListExports',
  description: 'Lists completed exports within the past 90 days.',
  operationId: 'ListExports',
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
        .literal('DynamoDB_20120810.ListExports')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.ListExports'] },
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
    body: { content: { 'application/json': { schema: ListExportsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListExportsOutputSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810ListGlobalTablesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.ListGlobalTables',
  description:
    '<p>Lists all global tables that have a replica in the specified Region.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>',
  operationId: 'ListGlobalTables',
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
        .literal('DynamoDB_20120810.ListGlobalTables')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.ListGlobalTables'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListGlobalTablesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGlobalTablesOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810ListImportsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.ListImports',
  description: ' Lists completed imports within the past 90 days. ',
  operationId: 'ListImports',
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
        .literal('DynamoDB_20120810.ListImports')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.ListImports'] },
          },
        }),
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
    body: { content: { 'application/json': { schema: ListImportsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListImportsOutputSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810ListTablesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.ListTables',
  description:
    'Returns an array of table names associated with the current account and endpoint. The output from <code>ListTables</code> is paginated, with each page returning a maximum of 100 table names.',
  operationId: 'ListTables',
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
        .literal('DynamoDB_20120810.ListTables')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.ListTables'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      ExclusiveStartTableName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ExclusiveStartTableName',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListTablesInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTablesOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810ListTagsOfResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource',
  description:
    '<p>List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account.</p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
  operationId: 'ListTagsOfResource',
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
        .literal('DynamoDB_20120810.ListTagsOfResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.ListTagsOfResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsOfResourceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsOfResourceOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810PutItemRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.PutItem',
  description:
    '<p>Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn\'t exist), or replace an existing item if it has certain attribute values. You can return the item\'s attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <p>When you add an item, the primary key attributes are the only required attributes. </p> <p>Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. Set type attributes cannot be empty. </p> <p>Invalid Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p> <note> <p>To prevent a new item from replacing an existing item, use a conditional expression that contains the <code>attribute_not_exists</code> function with the name of the attribute being used as the partition key for the table. Since every record must contain that attribute, the <code>attribute_not_exists</code> function will only succeed if no matching item exists.</p> </note> <p>For more information about <code>PutItem</code>, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html">Working with Items</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
  operationId: 'PutItem',
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
        .literal('DynamoDB_20120810.PutItem')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.PutItem'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutItemInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutItemOutputSchema } },
    },
    480: {
      description: 'ConditionalCheckFailedException',
      content: { 'application/json': { schema: ConditionalCheckFailedExceptionSchema } },
    },
    481: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ItemCollectionSizeLimitExceededException',
      content: { 'application/json': { schema: ItemCollectionSizeLimitExceededExceptionSchema } },
    },
    484: {
      description: 'TransactionConflictException',
      content: { 'application/json': { schema: TransactionConflictExceptionSchema } },
    },
    485: {
      description: 'RequestLimitExceeded',
      content: { 'application/json': { schema: RequestLimitExceededSchema } },
    },
    486: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810QueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.Query',
  description:
    '<p>You must provide the name of the partition key attribute and a single value for that attribute. <code>Query</code> returns all items with that partition key value. Optionally, you can provide a sort key attribute and use a comparison operator to refine the search results.</p> <p>Use the <code>KeyConditionExpression</code> parameter to provide a specific value for the partition key. The <code>Query</code> operation will return all of the items from the table or index with that partition key value. You can optionally narrow the scope of the <code>Query</code> operation by specifying a sort key value and a comparison operator in <code>KeyConditionExpression</code>. To further refine the <code>Query</code> results, you can optionally provide a <code>FilterExpression</code>. A <code>FilterExpression</code> determines which items within the results should be returned to you. All of the other results are discarded. </p> <p> A <code>Query</code> operation always returns a result set. If no matching items are found, the result set will be empty. Queries that do not return results consume the minimum number of read capacity units for that type of read operation. </p> <note> <p> DynamoDB calculates the number of read capacity units consumed based on item size, not on the amount of data that is returned to an application. The number of capacity units consumed will be the same whether you request all of the attributes (the default behavior) or just some of them (using a projection expression). The number will also be the same whether or not you use a <code>FilterExpression</code>. </p> </note> <p> <code>Query</code> results are always sorted by the sort key value. If the data type of the sort key is Number, the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes. By default, the sort order is ascending. To reverse the order, set the <code>ScanIndexForward</code> parameter to false. </p> <p> A single <code>Query</code> operation will read up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any filtering to the results using <code>FilterExpression</code>. If <code>LastEvaluatedKey</code> is present in the response, you will need to paginate the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> <p> <code>FilterExpression</code> is applied after a <code>Query</code> finishes, but before the results are returned. A <code>FilterExpression</code> cannot contain partition key or sort key attributes. You need to specify those attributes in the <code>KeyConditionExpression</code>. </p> <note> <p> A <code>Query</code> operation can return an empty result set and a <code>LastEvaluatedKey</code> if all the items read for the page of results are filtered out. </p> </note> <p>You can query a table, a local secondary index, or a global secondary index. For a query on a table or on a local secondary index, you can set the <code>ConsistentRead</code> parameter to <code>true</code> and obtain a strongly consistent result. Global secondary indexes support eventually consistent reads only, so do not specify <code>ConsistentRead</code> when querying a global secondary index.</p>',
  operationId: 'Query',
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
        .literal('DynamoDB_20120810.Query')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.Query'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      ExclusiveStartKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ExclusiveStartKey',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QueryInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: QueryOutputSchema } } },
    480: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'RequestLimitExceeded',
      content: { 'application/json': { schema: RequestLimitExceededSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810RestoreTableFromBackupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup',
  description:
    '<p>Creates a new table from an existing backup. Any number of users can execute up to 50 concurrent restores (any type of restore) in a given account. </p> <p>You can call <code>RestoreTableFromBackup</code> at a maximum rate of 10 times per second.</p> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> </ul>',
  operationId: 'RestoreTableFromBackup',
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
        .literal('DynamoDB_20120810.RestoreTableFromBackup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.RestoreTableFromBackup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RestoreTableFromBackupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RestoreTableFromBackupOutputSchema } },
    },
    480: {
      description: 'TableAlreadyExistsException',
      content: { 'application/json': { schema: TableAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'TableInUseException',
      content: { 'application/json': { schema: TableInUseExceptionSchema } },
    },
    482: {
      description: 'BackupNotFoundException',
      content: { 'application/json': { schema: BackupNotFoundExceptionSchema } },
    },
    483: {
      description: 'BackupInUseException',
      content: { 'application/json': { schema: BackupInUseExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810RestoreTableToPointInTimeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime',
  description:
    '<p>Restores the specified table to the specified point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. You can restore your table to any point in time during the last 35 days. Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account. </p> <p> When you restore using point in time recovery, DynamoDB restores your table data to the state based on the selected date and time (day:hour:minute:second) to a new table. </p> <p> Along with data, the following are also included on the new restored table using point in time recovery: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Provisioned read and write capacity</p> </li> <li> <p>Encryption settings</p> <important> <p> All these settings come from the current settings of the source table at the time of restore. </p> </important> </li> </ul> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> <li> <p>Point in time recovery settings</p> </li> </ul>',
  operationId: 'RestoreTableToPointInTime',
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
        .literal('DynamoDB_20120810.RestoreTableToPointInTime')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.RestoreTableToPointInTime'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RestoreTableToPointInTimeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RestoreTableToPointInTimeOutputSchema } },
    },
    480: {
      description: 'TableAlreadyExistsException',
      content: { 'application/json': { schema: TableAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'TableNotFoundException',
      content: { 'application/json': { schema: TableNotFoundExceptionSchema } },
    },
    482: {
      description: 'TableInUseException',
      content: { 'application/json': { schema: TableInUseExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InvalidRestoreTimeException',
      content: { 'application/json': { schema: InvalidRestoreTimeExceptionSchema } },
    },
    485: {
      description: 'PointInTimeRecoveryUnavailableException',
      content: { 'application/json': { schema: PointInTimeRecoveryUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810ScanRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.Scan',
  description:
    '<p>The <code>Scan</code> operation returns one or more items and item attributes by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a <code>FilterExpression</code> operation.</p> <p>If the total size of scanned items exceeds the maximum dataset size limit of 1 MB, the scan completes and results are returned to the user. The <code>LastEvaluatedKey</code> value is also returned and the requestor can use the <code>LastEvaluatedKey</code> to continue the scan in a subsequent operation. Each scan response also includes number of items that were scanned (ScannedCount) as part of the request. If using a <code>FilterExpression</code>, a scan result can result in no items meeting the criteria and the <code>Count</code> will result in zero. If you did not use a <code>FilterExpression</code> in the scan request, then <code>Count</code> is the same as <code>ScannedCount</code>.</p> <note> <p> <code>Count</code> and <code>ScannedCount</code> only return the count of items specific to a single scan request and, unless the table is less than 1MB, do not represent the total number of items in the table. </p> </note> <p>A single <code>Scan</code> operation first reads up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then applies any filtering to the results if a <code>FilterExpression</code> is provided. If <code>LastEvaluatedKey</code> is present in the response, pagination is required to complete the full table scan. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p> <code>Scan</code> operations proceed sequentially; however, for faster performance on a large table or secondary index, applications can request a parallel <code>Scan</code> operation by providing the <code>Segment</code> and <code>TotalSegments</code> parameters. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan">Parallel Scan</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>By default, a <code>Scan</code> uses eventually consistent reads when accessing the items in a table. Therefore, the results from an eventually consistent <code>Scan</code> may not include the latest item changes at the time the scan iterates through each item in the table. If you require a strongly consistent read of each item as the scan iterates through the items in the table, you can set the <code>ConsistentRead</code> parameter to true. Strong consistency only relates to the consistency of the read at the item level.</p> <note> <p> DynamoDB does not provide snapshot isolation for a scan operation when the <code>ConsistentRead</code> parameter is set to true. Thus, a DynamoDB scan operation does not guarantee that all reads in a scan see a consistent snapshot of the table when the scan operation was requested. </p> </note>',
  operationId: 'Scan',
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
        .literal('DynamoDB_20120810.Scan')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.Scan'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      ExclusiveStartKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ExclusiveStartKey',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ScanInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ScanOutputSchema } } },
    480: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'RequestLimitExceeded',
      content: { 'application/json': { schema: RequestLimitExceededSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.TagResource',
  description:
    '<p>Associate a set of tags with an Amazon DynamoDB resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. You can call TagResource up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
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
        .literal('DynamoDB_20120810.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810TransactGetItemsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.TransactGetItems',
  description:
    '<p> <code>TransactGetItems</code> is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. A <code>TransactGetItems</code> call can contain up to 100 <code>TransactGetItem</code> objects, each of which contains a <code>Get</code> structure that specifies an item to retrieve from a table in the account and Region. A call to <code>TransactGetItems</code> cannot retrieve items from tables in more than one Amazon Web Services account or Region. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>DynamoDB rejects the entire <code>TransactGetItems</code> request if any of the following is true:</p> <ul> <li> <p>A conflicting operation is in the process of updating an item to be read.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeded 4 MB.</p> </li> </ul>',
  operationId: 'TransactGetItems',
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
        .literal('DynamoDB_20120810.TransactGetItems')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.TransactGetItems'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TransactGetItemsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TransactGetItemsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'TransactionCanceledException',
      content: { 'application/json': { schema: TransactionCanceledExceptionSchema } },
    },
    482: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'RequestLimitExceeded',
      content: { 'application/json': { schema: RequestLimitExceededSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810TransactWriteItemsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.TransactWriteItems',
  description:
    "<p> <code>TransactWriteItems</code> is a synchronous write operation that groups up to 100 action requests. These actions can target items in different tables, but not in different Amazon Web Services accounts or Regions, and no two actions can target the same item. For example, you cannot both <code>ConditionCheck</code> and <code>Update</code> the same item. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>The actions are completed atomically so that either all of them succeed, or all of them fail. They are defined by the following objects:</p> <ul> <li> <p> <code>Put</code>  —   Initiates a <code>PutItem</code> operation to write a new item. This structure specifies the primary key of the item to be written, the name of the table to write it in, an optional condition expression that must be satisfied for the write to succeed, a list of the item's attributes, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Update</code>  —   Initiates an <code>UpdateItem</code> operation to update an existing item. This structure specifies the primary key of the item to be updated, the name of the table where it resides, an optional condition expression that must be satisfied for the update to succeed, an expression that defines one or more attributes to be updated, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Delete</code>  —   Initiates a <code>DeleteItem</code> operation to delete an existing item. This structure specifies the primary key of the item to be deleted, the name of the table where it resides, an optional condition expression that must be satisfied for the deletion to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>ConditionCheck</code>  —   Applies a condition to an item that is not being modified by the transaction. This structure specifies the primary key of the item to be checked, the name of the table where it resides, a condition expression that must be satisfied for the transaction to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> </ul> <p>DynamoDB rejects the entire <code>TransactWriteItems</code> request if any of the following is true:</p> <ul> <li> <p>A condition in one of the condition expressions is not met.</p> </li> <li> <p>An ongoing operation is in the process of updating the same item.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeds 4 MB.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> </ul>",
  operationId: 'TransactWriteItems',
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
        .literal('DynamoDB_20120810.TransactWriteItems')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.TransactWriteItems'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TransactWriteItemsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TransactWriteItemsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'TransactionCanceledException',
      content: { 'application/json': { schema: TransactionCanceledExceptionSchema } },
    },
    482: {
      description: 'TransactionInProgressException',
      content: { 'application/json': { schema: TransactionInProgressExceptionSchema } },
    },
    483: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'RequestLimitExceeded',
      content: { 'application/json': { schema: RequestLimitExceededSchema } },
    },
    486: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.UntagResource',
  description:
    '<p>Removes the association of tags from an Amazon DynamoDB resource. You can call <code>UntagResource</code> up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>',
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
        .literal('DynamoDB_20120810.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.UntagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UntagResourceInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810UpdateContinuousBackupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups',
  description:
    '<p> <code>UpdateContinuousBackups</code> enables or disables point in time recovery for the specified table. A successful <code>UpdateContinuousBackups</code> call returns the current <code>ContinuousBackupsDescription</code>. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> Once continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p>',
  operationId: 'UpdateContinuousBackups',
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
        .literal('DynamoDB_20120810.UpdateContinuousBackups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.UpdateContinuousBackups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateContinuousBackupsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateContinuousBackupsOutputSchema } },
    },
    480: {
      description: 'TableNotFoundException',
      content: { 'application/json': { schema: TableNotFoundExceptionSchema } },
    },
    481: {
      description: 'ContinuousBackupsUnavailableException',
      content: { 'application/json': { schema: ContinuousBackupsUnavailableExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810UpdateContributorInsightsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights',
  description:
    'Updates the status for contributor insights for a specific table or index. CloudWatch Contributor Insights for DynamoDB graphs display the partition key and (if applicable) sort key of frequently accessed items and frequently throttled items in plaintext. If you require the use of Amazon Web Services Key Management Service (KMS) to encrypt this table’s partition key and sort key data with an Amazon Web Services managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table.',
  operationId: 'UpdateContributorInsights',
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
        .literal('DynamoDB_20120810.UpdateContributorInsights')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.UpdateContributorInsights'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateContributorInsightsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateContributorInsightsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810UpdateGlobalTableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable',
  description:
    '<p>Adds or removes replicas in the specified global table. The global table must already exist to be able to use this operation. Any replica to be added must be empty, have the same name as the global table, have the same key schema, have DynamoDB Streams enabled, and have the same provisioned and maximum write capacity units.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important> <note> <p> This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables. If you are using global tables <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> you can use <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html">DescribeTable</a> instead. </p> <p> Although you can use <code>UpdateGlobalTable</code> to add replicas and remove replicas in a single request, for simplicity we recommend that you issue separate requests for adding or removing replicas. </p> </note> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> <li> <p> The global secondary indexes must have the same provisioned and maximum write capacity units. </p> </li> </ul>',
  operationId: 'UpdateGlobalTable',
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
        .literal('DynamoDB_20120810.UpdateGlobalTable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.UpdateGlobalTable'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateGlobalTableInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGlobalTableOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'GlobalTableNotFoundException',
      content: { 'application/json': { schema: GlobalTableNotFoundExceptionSchema } },
    },
    482: {
      description: 'ReplicaAlreadyExistsException',
      content: { 'application/json': { schema: ReplicaAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'ReplicaNotFoundException',
      content: { 'application/json': { schema: ReplicaNotFoundExceptionSchema } },
    },
    484: {
      description: 'TableNotFoundException',
      content: { 'application/json': { schema: TableNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810UpdateGlobalTableSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings',
  description:
    '<p>Updates settings for a global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>',
  operationId: 'UpdateGlobalTableSettings',
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
        .literal('DynamoDB_20120810.UpdateGlobalTableSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.UpdateGlobalTableSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateGlobalTableSettingsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGlobalTableSettingsOutputSchema } },
    },
    480: {
      description: 'GlobalTableNotFoundException',
      content: { 'application/json': { schema: GlobalTableNotFoundExceptionSchema } },
    },
    481: {
      description: 'ReplicaNotFoundException',
      content: { 'application/json': { schema: ReplicaNotFoundExceptionSchema } },
    },
    482: {
      description: 'IndexNotFoundException',
      content: { 'application/json': { schema: IndexNotFoundExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810UpdateItemRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.UpdateItem',
  description:
    "<p>Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p> <p>You can also return the item's attribute values in the same <code>UpdateItem</code> operation using the <code>ReturnValues</code> parameter.</p>",
  operationId: 'UpdateItem',
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
        .literal('DynamoDB_20120810.UpdateItem')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.UpdateItem'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateItemInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateItemOutputSchema } },
    },
    480: {
      description: 'ConditionalCheckFailedException',
      content: { 'application/json': { schema: ConditionalCheckFailedExceptionSchema } },
    },
    481: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ItemCollectionSizeLimitExceededException',
      content: { 'application/json': { schema: ItemCollectionSizeLimitExceededExceptionSchema } },
    },
    484: {
      description: 'TransactionConflictException',
      content: { 'application/json': { schema: TransactionConflictExceptionSchema } },
    },
    485: {
      description: 'RequestLimitExceeded',
      content: { 'application/json': { schema: RequestLimitExceededSchema } },
    },
    486: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810UpdateTableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.UpdateTable',
  description:
    '<p>Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <p>You can only perform one of the following operations at once:</p> <ul> <li> <p>Modify the provisioned throughput settings of the table.</p> </li> <li> <p>Remove a global secondary index from the table.</p> </li> <li> <p>Create a new global secondary index on the table. After the index begins backfilling, you can use <code>UpdateTable</code> to perform other operations.</p> </li> </ul> <p> <code>UpdateTable</code> is an asynchronous operation; while it is executing, the table status changes from <code>ACTIVE</code> to <code>UPDATING</code>. While it is <code>UPDATING</code>, you cannot issue another <code>UpdateTable</code> request. When the table returns to the <code>ACTIVE</code> state, the <code>UpdateTable</code> operation is complete.</p>',
  operationId: 'UpdateTable',
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
        .literal('DynamoDB_20120810.UpdateTable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.UpdateTable'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateTableInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTableOutputSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810UpdateTableReplicaAutoScalingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling',
  description:
    '<p>Updates auto scaling settings on your global tables at once.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important>',
  operationId: 'UpdateTableReplicaAutoScaling',
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
        .literal('DynamoDB_20120810.UpdateTableReplicaAutoScaling')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.UpdateTableReplicaAutoScaling'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateTableReplicaAutoScalingInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTableReplicaAutoScalingOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetDynamoDB20120810UpdateTimeToLiveRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive',
  description:
    '<p>The <code>UpdateTimeToLive</code> method enables or disables Time to Live (TTL) for the specified table. A successful <code>UpdateTimeToLive</code> call returns the current <code>TimeToLiveSpecification</code>. It can take up to one hour for the change to fully process. Any additional <code>UpdateTimeToLive</code> calls for the same table during this one hour duration result in a <code>ValidationException</code>. </p> <p>TTL compares the current time in epoch time format to the time stored in the TTL attribute of an item. If the epoch time value stored in the attribute is less than the current time, the item is marked as expired and subsequently deleted.</p> <note> <p> The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC. </p> </note> <p>DynamoDB deletes expired items on a best-effort basis to ensure availability of throughput for other data operations. </p> <important> <p>DynamoDB typically deletes expired items within two days of expiration. The exact duration within which an item gets deleted after expiration is specific to the nature of the workload. Items that have expired and not been deleted will still show up in reads, queries, and scans.</p> </important> <p>As items are deleted, they are removed from any local secondary index and global secondary index immediately in the same eventually consistent way as a standard delete operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html">Time To Live</a> in the Amazon DynamoDB Developer Guide. </p>',
  operationId: 'UpdateTimeToLive',
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
        .literal('DynamoDB_20120810.UpdateTimeToLive')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDB_20120810.UpdateTimeToLive'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateTimeToLiveInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTimeToLiveOutputSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})
