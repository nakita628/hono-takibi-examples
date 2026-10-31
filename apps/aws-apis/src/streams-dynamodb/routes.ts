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

const StringSchema = z.string().openapi('String')

const OperationTypeSchema = z.enum(['INSERT', 'MODIFY', 'REMOVE']).openapi('OperationType')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const AttributeMapSchema = z.record(z.string(), AttributeValueSchema).openapi('AttributeMap')

const SequenceNumberSchema = z.string().min(21).max(40).openapi('SequenceNumber')

const PositiveLongObjectSchema = z.int().min(1).openapi('PositiveLongObject')

const StreamViewTypeSchema = z
  .enum(['NEW_IMAGE', 'OLD_IMAGE', 'NEW_AND_OLD_IMAGES', 'KEYS_ONLY'])
  .openapi('StreamViewType')

const StreamRecordSchema = z
  .object({
    ApproximateCreationDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The approximate date and time when the stream record was created, in <a href="http://www.epochconverter.com/">UNIX epoch time</a> format.',
        }),
    ).exactOptional(),
    Keys: AttributeMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The primary key attribute(s) for the DynamoDB item that was modified.',
        }),
    ).exactOptional(),
    NewImage: AttributeMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The item in the DynamoDB table as it appeared after it was modified.',
        }),
    ).exactOptional(),
    OldImage: AttributeMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The item in the DynamoDB table as it appeared before it was modified.',
        }),
    ).exactOptional(),
    SequenceNumber: SequenceNumberSchema.and(
      z.any().openapi({ description: 'The sequence number of the stream record.' }),
    ).exactOptional(),
    SizeBytes: PositiveLongObjectSchema.and(
      z.any().openapi({ description: 'The size of the stream record, in bytes.' }),
    ).exactOptional(),
    StreamViewType: StreamViewTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of data from the modified DynamoDB item that was captured in this stream record:</p> <ul> <li> <p> <code>KEYS_ONLY</code> - only the key attributes of the modified item.</p> </li> <li> <p> <code>NEW_IMAGE</code> - the entire item, as it appeared after it was modified.</p> </li> <li> <p> <code>OLD_IMAGE</code> - the entire item, as it appeared before it was modified.</p> </li> <li> <p> <code>NEW_AND_OLD_IMAGES</code> - both the new and the old item images of the item.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A description of a single data modification that was performed on an item in a DynamoDB table.',
    required: [],
  })
  .openapi('StreamRecord')

const IdentitySchema = z
  .object({
    PrincipalId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the entity that made the call. For Time To Live, the principalId is "dynamodb.amazonaws.com".',
        }),
    ).exactOptional(),
    Type: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of the identity. For Time To Live, the type is "Service".',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains details about the type of identity that made the request.',
    required: [],
  })
  .openapi('Identity')

type RecordType = {
  eventID?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  eventName?: z.infer<typeof OperationTypeSchema> & { [key: string]: unknown }
  eventVersion?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  eventSource?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  awsRegion?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  dynamodb?: z.infer<typeof StreamRecordSchema> & { [key: string]: unknown }
  userIdentity?: z.infer<typeof IdentitySchema> & { [key: string]: unknown }
}

const StreamArnSchema = z.string().min(37).max(1024).openapi('StreamArn')

const StreamStatusSchema = z
  .enum(['ENABLING', 'ENABLED', 'DISABLING', 'DISABLED'])
  .openapi('StreamStatus')

const TableNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(3)
  .max(255)
  .openapi('TableName')

const KeySchemaAttributeNameSchema = z.string().min(1).max(255).openapi('KeySchemaAttributeName')

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

const ShardIdSchema = z.string().min(28).max(65).openapi('ShardId')

const SequenceNumberRangeSchema = z
  .object({
    StartingSequenceNumber: SequenceNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The first sequence number for the stream records contained within a shard. String contains numeric characters only.',
        }),
    ).exactOptional(),
    EndingSequenceNumber: SequenceNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The last sequence number for the stream records contained within a shard. String contains numeric characters only.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The beginning and ending sequence numbers for the stream records contained within a shard.',
    required: [],
  })
  .openapi('SequenceNumberRange')

const ShardSchema = z
  .object({
    ShardId: ShardIdSchema.and(
      z.any().openapi({ description: 'The system-generated identifier for this shard.' }),
    ).exactOptional(),
    SequenceNumberRange: SequenceNumberRangeSchema.and(
      z.any().openapi({ description: 'The range of possible sequence numbers for the shard.' }),
    ).exactOptional(),
    ParentShardId: ShardIdSchema.and(
      z.any().openapi({ description: "The shard ID of the current shard's parent." }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A uniquely identified group of stream records within a stream.',
    required: [],
  })
  .openapi('Shard')

const ShardDescriptionListSchema = z.array(ShardSchema).openapi('ShardDescriptionList')

const StreamDescriptionSchema = z
  .object({
    StreamArn: StreamArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the stream.' }),
    ).exactOptional(),
    StreamLabel: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A timestamp, in ISO 8601 format, for this stream.</p> <p>Note that <code>LatestStreamLabel</code> is not a unique identifier for the stream, because it is possible that a stream from another table might have the same timestamp. However, the combination of the following three elements is guaranteed to be unique:</p> <ul> <li> <p>the AWS customer ID.</p> </li> <li> <p>the table name</p> </li> <li> <p>the <code>StreamLabel</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    StreamStatus: StreamStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates the current status of the stream:</p> <ul> <li> <p> <code>ENABLING</code> - Streams is currently being enabled on the DynamoDB table.</p> </li> <li> <p> <code>ENABLED</code> - the stream is enabled.</p> </li> <li> <p> <code>DISABLING</code> - Streams is currently being disabled on the DynamoDB table.</p> </li> <li> <p> <code>DISABLED</code> - the stream is disabled.</p> </li> </ul>',
        }),
    ).exactOptional(),
    StreamViewType: StreamViewTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates the format of the records within this stream:</p> <ul> <li> <p> <code>KEYS_ONLY</code> - only the key attributes of items that were modified in the DynamoDB table.</p> </li> <li> <p> <code>NEW_IMAGE</code> - entire items from the table, as they appeared after they were modified.</p> </li> <li> <p> <code>OLD_IMAGE</code> - entire items from the table, as they appeared before they were modified.</p> </li> <li> <p> <code>NEW_AND_OLD_IMAGES</code> - both the new and the old images of the items from the table.</p> </li> </ul>',
        }),
    ).exactOptional(),
    CreationRequestDateTime: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time when the request to create this stream was issued.',
        }),
    ).exactOptional(),
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The DynamoDB table with which the stream is associated.' }),
    ).exactOptional(),
    KeySchema: KeySchemaSchema.and(
      z.any().openapi({ description: "The key attribute(s) of the stream's DynamoDB table." }),
    ).exactOptional(),
    Shards: ShardDescriptionListSchema.and(
      z.any().openapi({ description: 'The shards that comprise the stream.' }),
    ).exactOptional(),
    LastEvaluatedShardId: ShardIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The shard ID of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.</p> <p>If <code>LastEvaluatedShardId</code> is empty, then the "last page" of results has been processed and there is currently no more data to be retrieved.</p> <p>If <code>LastEvaluatedShardId</code> is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when <code>LastEvaluatedShardId</code> is empty.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents all of the data describing a particular stream.',
    required: [],
  })
  .openapi('StreamDescription')

const DescribeStreamOutputSchema = z
  .object({
    StreamDescription: StreamDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complete description of the stream, including its creation date and time, the DynamoDB table associated with the stream, the shard IDs within the stream, and the beginning and ending sequence numbers of stream records within the shards.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      StreamDescription: {
        CreationRequestDateTime: 'Wed May 20 13:51:10 PDT 2015',
        KeySchema: [
          { AttributeName: 'ForumName', KeyType: 'HASH' },
          { AttributeName: 'Subject', KeyType: 'RANGE' },
        ],
        Shards: [
          {
            SequenceNumberRange: {
              EndingSequenceNumber: '20500000000000000910398',
              StartingSequenceNumber: '20500000000000000910398',
            },
            ShardId: 'shardId-00000001414562045508-2bac9cd2',
          },
          {
            ParentShardId: 'shardId-00000001414562045508-2bac9cd2',
            SequenceNumberRange: {
              EndingSequenceNumber: '820400000000000001192334',
              StartingSequenceNumber: '820400000000000001192334',
            },
            ShardId: 'shardId-00000001414576573621-f55eea83',
          },
          {
            ParentShardId: 'shardId-00000001414576573621-f55eea83',
            SequenceNumberRange: {
              EndingSequenceNumber: '1683700000000000001135967',
              StartingSequenceNumber: '1683700000000000001135967',
            },
            ShardId: 'shardId-00000001414592258131-674fd923',
          },
          {
            ParentShardId: 'shardId-00000001414592258131-674fd923',
            SequenceNumberRange: { StartingSequenceNumber: '2574600000000000000935255' },
            ShardId: 'shardId-00000001414608446368-3a1afbaf',
          },
        ],
        StreamArn:
          'arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252',
        StreamLabel: '2015-05-20T20:51:10.252',
        StreamStatus: 'ENABLED',
        StreamViewType: 'NEW_AND_OLD_IMAGES',
        TableName: 'Forum',
      },
    },
    description: 'Represents the output of a <code>DescribeStream</code> operation.',
    required: [],
  })
  .openapi('DescribeStreamOutput')

const PositiveIntegerObjectSchema = z.int().min(1).openapi('PositiveIntegerObject')

const DescribeStreamInputSchema = z
  .object({
    StreamArn: StreamArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the stream.' }),
    ),
    Limit: PositiveIntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of shard objects to return. The upper limit is 100.',
        }),
    ).exactOptional(),
    ExclusiveStartShardId: ShardIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The shard ID of the first item that this operation will evaluate. Use the value that was returned for <code>LastEvaluatedShardId</code> in the previous operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StreamArn'],
    title: 'DescribeStreamInput',
    description: 'Represents the input of a <code>DescribeStream</code> operation.',
  })
  .openapi('DescribeStreamInput')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InternalServerErrorSchema = z.any().openapi('InternalServerError')

const RecordSchema: z.ZodType<RecordType> = z
  .lazy(() =>
    z
      .object({
        eventID: StringSchema.and(
          z
            .any()
            .openapi({
              description:
                'A globally unique identifier for the event that was recorded in this stream record.',
            }),
        ).exactOptional(),
        eventName: OperationTypeSchema.and(
          z
            .any()
            .openapi({
              description:
                "<p>The type of data modification that was performed on the DynamoDB table:</p> <ul> <li> <p> <code>INSERT</code> - a new item was added to the table.</p> </li> <li> <p> <code>MODIFY</code> - one or more of an existing item's attributes were modified.</p> </li> <li> <p> <code>REMOVE</code> - the item was deleted from the table</p> </li> </ul>",
            }),
        ).exactOptional(),
        eventVersion: StringSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>The version number of the stream record format. This number is updated whenever the structure of <code>Record</code> is modified.</p> <p>Client applications must not assume that <code>eventVersion</code> will remain at a particular value, as this number is subject to change at any time. In general, <code>eventVersion</code> will only increase as the low-level DynamoDB Streams API evolves.</p>',
            }),
        ).exactOptional(),
        eventSource: StringSchema.and(
          z
            .any()
            .openapi({
              description:
                'The AWS service from which the stream record originated. For DynamoDB Streams, this is <code>aws:dynamodb</code>.',
            }),
        ).exactOptional(),
        awsRegion: StringSchema.and(
          z
            .any()
            .openapi({
              description: 'The region in which the <code>GetRecords</code> request was received.',
            }),
        ).exactOptional(),
        dynamodb: StreamRecordSchema.and(
          z
            .any()
            .openapi({
              description:
                'The main body of the stream record, containing all of the DynamoDB-specific fields.',
            }),
        ).exactOptional(),
        userIdentity: IdentitySchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>Items that are deleted by the Time to Live process after expiration have the following fields: </p> <ul> <li> <p>Records[].userIdentity.type</p> <p>"Service"</p> </li> <li> <p>Records[].userIdentity.principalId</p> <p>"dynamodb.amazonaws.com"</p> </li> </ul>',
            }),
        ).exactOptional(),
      })
      .openapi({ description: 'A description of a unique event within a stream.', required: [] }),
  )
  .openapi('Record')

const RecordListSchema = z.array(RecordSchema).openapi('RecordList')

const ShardIteratorSchema = z.string().min(1).max(2048).openapi('ShardIterator')

const GetRecordsOutputSchema = z
  .object({
    Records: RecordListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stream records from the shard, which were retrieved using the shard iterator.',
        }),
    ).exactOptional(),
    NextShardIterator: ShardIteratorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next position in the shard from which to start sequentially reading stream records. If set to <code>null</code>, the shard has been closed and the requested iterator will not return any more data.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      NextShardIterator:
        'arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252|1|AAAAAAAAAAGQBYshYDEe ... <remaining characters omitted> ...',
      Records: [
        {
          awsRegion: 'us-west-2',
          dynamodb: {
            ApproximateCreationDateTime: '1.46480646E9',
            Keys: { ForumName: { S: 'DynamoDB' }, Subject: { S: 'DynamoDB Thread 3' } },
            SequenceNumber: '300000000000000499659',
            SizeBytes: 41,
            StreamViewType: 'KEYS_ONLY',
          },
          eventID: 'e2fd9c34eff2d779b297b26f5fef4206',
          eventName: 'INSERT',
          eventSource: 'aws:dynamodb',
          eventVersion: '1.0',
        },
        {
          awsRegion: 'us-west-2',
          dynamodb: {
            ApproximateCreationDateTime: '1.46480527E9',
            Keys: { ForumName: { S: 'DynamoDB' }, Subject: { S: 'DynamoDB Thread 1' } },
            SequenceNumber: '400000000000000499660',
            SizeBytes: 41,
            StreamViewType: 'KEYS_ONLY',
          },
          eventID: '4b25bd0da9a181a155114127e4837252',
          eventName: 'MODIFY',
          eventSource: 'aws:dynamodb',
          eventVersion: '1.0',
        },
        {
          awsRegion: 'us-west-2',
          dynamodb: {
            ApproximateCreationDateTime: '1.46480646E9',
            Keys: { ForumName: { S: 'DynamoDB' }, Subject: { S: 'DynamoDB Thread 2' } },
            SequenceNumber: '500000000000000499661',
            SizeBytes: 41,
            StreamViewType: 'KEYS_ONLY',
          },
          eventID: '740280c73a3df7842edab3548a1b08ad',
          eventName: 'REMOVE',
          eventSource: 'aws:dynamodb',
          eventVersion: '1.0',
        },
      ],
    },
    description: 'Represents the output of a <code>GetRecords</code> operation.',
    required: [],
  })
  .openapi('GetRecordsOutput')

const GetRecordsInputSchema = z
  .object({
    ShardIterator: ShardIteratorSchema.and(
      z
        .any()
        .openapi({
          description:
            'A shard iterator that was retrieved from a previous GetShardIterator operation. This iterator can be used to access the stream records in this shard.',
        }),
    ),
    Limit: PositiveIntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of records to return from the shard. The upper limit is 1000.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ShardIterator'],
    title: 'GetRecordsInput',
    description: 'Represents the input of a <code>GetRecords</code> operation.',
  })
  .openapi('GetRecordsInput')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ExpiredIteratorExceptionSchema = z.any().openapi('ExpiredIteratorException')

const TrimmedDataAccessExceptionSchema = z.any().openapi('TrimmedDataAccessException')

const GetShardIteratorOutputSchema = z
  .object({
    ShardIterator: ShardIteratorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The position in the shard from which to start reading stream records sequentially. A shard iterator specifies this position using the sequence number of a stream record in a shard.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ShardIterator:
        'arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252|1|AAAAAAAAAAEvJp6D+zaQ...  <remaining characters omitted> ...',
    },
    description: 'Represents the output of a <code>GetShardIterator</code> operation.',
    required: [],
  })
  .openapi('GetShardIteratorOutput')

const ShardIteratorTypeSchema = z
  .enum(['TRIM_HORIZON', 'LATEST', 'AT_SEQUENCE_NUMBER', 'AFTER_SEQUENCE_NUMBER'])
  .openapi('ShardIteratorType')

const GetShardIteratorInputSchema = z
  .object({
    StreamArn: StreamArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the stream.' }),
    ),
    ShardId: ShardIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the shard. The iterator will be returned for this shard ID.',
        }),
    ),
    ShardIteratorType: ShardIteratorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines how the shard iterator is used to start reading stream records from the shard:</p> <ul> <li> <p> <code>AT_SEQUENCE_NUMBER</code> - Start reading exactly from the position denoted by a specific sequence number.</p> </li> <li> <p> <code>AFTER_SEQUENCE_NUMBER</code> - Start reading right after the position denoted by a specific sequence number.</p> </li> <li> <p> <code>TRIM_HORIZON</code> - Start reading at the last (untrimmed) stream record, which is the oldest record in the shard. In DynamoDB Streams, there is a 24 hour limit on data retention. Stream records whose age exceeds this limit are subject to removal (trimming) from the stream.</p> </li> <li> <p> <code>LATEST</code> - Start reading just after the most recent stream record in the shard, so that you always read the most recent data in the shard.</p> </li> </ul>',
        }),
    ),
    SequenceNumber: SequenceNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sequence number of a stream record in the shard from which to start reading.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StreamArn', 'ShardId', 'ShardIteratorType'],
    title: 'GetShardIteratorInput',
    description: 'Represents the input of a <code>GetShardIterator</code> operation.',
  })
  .openapi('GetShardIteratorInput')

const StreamSchema = z
  .object({
    StreamArn: StreamArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the stream.' }),
    ).exactOptional(),
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The DynamoDB table with which the stream is associated.' }),
    ).exactOptional(),
    StreamLabel: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A timestamp, in ISO 8601 format, for this stream.</p> <p>Note that <code>LatestStreamLabel</code> is not a unique identifier for the stream, because it is possible that a stream from another table might have the same timestamp. However, the combination of the following three elements is guaranteed to be unique:</p> <ul> <li> <p>the AWS customer ID.</p> </li> <li> <p>the table name</p> </li> <li> <p>the <code>StreamLabel</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents all of the data describing a particular stream.',
    required: [],
  })
  .openapi('Stream')

const StreamListSchema = z.array(StreamSchema).openapi('StreamList')

const ListStreamsOutputSchema = z
  .object({
    Streams: StreamListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of stream descriptors associated with the current account and endpoint.',
        }),
    ).exactOptional(),
    LastEvaluatedStreamArn: StreamArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The stream ARN of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.</p> <p>If <code>LastEvaluatedStreamArn</code> is empty, then the "last page" of results has been processed and there is no more data to be retrieved.</p> <p>If <code>LastEvaluatedStreamArn</code> is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when <code>LastEvaluatedStreamArn</code> is empty.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Streams: [
        {
          StreamArn:
            'arn:aws:dynamodb:us-wesst-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252',
          StreamLabel: '2015-05-20T20:51:10.252',
          TableName: 'Forum',
        },
        {
          StreamArn:
            'arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:50:02.714',
          StreamLabel: '2015-05-20T20:50:02.714',
          TableName: 'Forum',
        },
        {
          StreamArn:
            'arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-19T23:03:50.641',
          StreamLabel: '2015-05-19T23:03:50.641',
          TableName: 'Forum',
        },
      ],
    },
    description: 'Represents the output of a <code>ListStreams</code> operation.',
    required: [],
  })
  .openapi('ListStreamsOutput')

const ListStreamsInputSchema = z
  .object({
    TableName: TableNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this parameter is provided, then only the streams associated with this table name are returned.',
        }),
    ).exactOptional(),
    Limit: PositiveIntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of streams to return. The upper limit is 100.',
        }),
    ).exactOptional(),
    ExclusiveStartStreamArn: StreamArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN (Amazon Resource Name) of the first item that this operation will evaluate. Use the value that was returned for <code>LastEvaluatedStreamArn</code> in the previous operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListStreamsInput',
    description: 'Represents the input of a <code>ListStreams</code> operation.',
    required: [],
  })
  .openapi('ListStreamsInput')

const AttributeNameSchema = z.string().max(65535).openapi('AttributeName')

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

export const postXAmzTargetDynamoDBStreams20120810DescribeStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream',
  description:
    '<p>Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table.</p> <note> <p>You can call <code>DescribeStream</code> at a maximum rate of 10 times per second.</p> </note> <p>Each shard in the stream has a <code>SequenceNumberRange</code> associated with it. If the <code>SequenceNumberRange</code> has a <code>StartingSequenceNumber</code> but no <code>EndingSequenceNumber</code>, then the shard is still open (able to receive more stream records). If both <code>StartingSequenceNumber</code> and <code>EndingSequenceNumber</code> are present, then that shard is closed and can no longer receive more data.</p>',
  operationId: 'DescribeStream',
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
        .literal('DynamoDBStreams_20120810.DescribeStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDBStreams_20120810.DescribeStream'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeStreamInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStreamOutputSchema } },
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

export const postXAmzTargetDynamoDBStreams20120810GetRecordsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDBStreams_20120810.GetRecords',
  description:
    '<p>Retrieves the stream records from a given shard.</p> <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard iterator specifies the position in the shard from which you want to start reading stream records sequentially. If there are no stream records available in the portion of the shard that the iterator points to, <code>GetRecords</code> returns an empty list. Note that it might take multiple calls to get to a portion of the shard that contains stream records.</p> <note> <p> <code>GetRecords</code> can retrieve a maximum of 1 MB of data or 1000 stream records, whichever comes first.</p> </note>',
  operationId: 'GetRecords',
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
        .literal('DynamoDBStreams_20120810.GetRecords')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDBStreams_20120810.GetRecords'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetRecordsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRecordsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ExpiredIteratorException',
      content: { 'application/json': { schema: ExpiredIteratorExceptionSchema } },
    },
    484: {
      description: 'TrimmedDataAccessException',
      content: { 'application/json': { schema: TrimmedDataAccessExceptionSchema } },
    },
  },
})

export const postXAmzTargetDynamoDBStreams20120810GetShardIteratorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator',
  description:
    '<p>Returns a shard iterator. A shard iterator provides information about how to retrieve the stream records from within a shard. Use the shard iterator in a subsequent <code>GetRecords</code> request to read the stream records from the shard.</p> <note> <p>A shard iterator expires 15 minutes after it is returned to the requester.</p> </note>',
  operationId: 'GetShardIterator',
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
        .literal('DynamoDBStreams_20120810.GetShardIterator')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDBStreams_20120810.GetShardIterator'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetShardIteratorInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetShardIteratorOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'TrimmedDataAccessException',
      content: { 'application/json': { schema: TrimmedDataAccessExceptionSchema } },
    },
  },
})

export const postXAmzTargetDynamoDBStreams20120810ListStreamsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DynamoDBStreams_20120810.ListStreams',
  description:
    '<p>Returns an array of stream ARNs associated with the current account and endpoint. If the <code>TableName</code> parameter is present, then <code>ListStreams</code> will return only the streams ARNs for that table.</p> <note> <p>You can call <code>ListStreams</code> at a maximum rate of 5 times per second.</p> </note>',
  operationId: 'ListStreams',
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
        .literal('DynamoDBStreams_20120810.ListStreams')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DynamoDBStreams_20120810.ListStreams'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListStreamsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStreamsOutputSchema } },
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
