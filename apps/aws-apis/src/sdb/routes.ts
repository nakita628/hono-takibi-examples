import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const DeletableAttributeSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'The name of the attribute.' })),
    Value: StringSchema.and(
      z.any().openapi({ description: 'The value of the attribute.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], description: '' })
  .openapi('DeletableAttribute')

const DeletableAttributeListSchema = z
  .array(DeletableAttributeSchema.and(z.any().openapi({ xml: { name: 'Attribute' } })))
  .openapi({ xml: { wrapped: false } })
  .openapi('DeletableAttributeList')

const DeletableItemSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ xml: { name: 'ItemName' } })),
    Attributes: DeletableAttributeListSchema.exactOptional(),
  })
  .openapi({ required: ['Name'] })
  .openapi('DeletableItem')

const BooleanSchema = z.boolean().openapi('Boolean')

const ReplaceableAttributeSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the replaceable attribute.' }),
    ),
    Value: StringSchema.and(
      z.any().openapi({ description: 'The value of the replaceable attribute.' }),
    ),
    Replace: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag specifying whether or not to replace the attribute/value pair or to add a new attribute/value pair. The default setting is <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'Value'], description: '' })
  .openapi('ReplaceableAttribute')

const ReplaceableAttributeListSchema = z
  .array(ReplaceableAttributeSchema.and(z.any().openapi({ xml: { name: 'Attribute' } })))
  .openapi({ xml: { wrapped: false } })
  .openapi('ReplaceableAttributeList')

const ReplaceableItemSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'ItemName' }, description: 'The name of the replaceable item.' }),
    ),
    Attributes: ReplaceableAttributeListSchema.and(
      z.any().openapi({ description: 'The list of attributes for a replaceable item.' }),
    ),
  })
  .openapi({ required: ['Name', 'Attributes'], description: '' })
  .openapi('ReplaceableItem')

const FloatSchema = z.float32().openapi('Float')

const DuplicateItemNameSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({ description: 'The item name was specified more than once. ', required: [] })
  .openapi('DuplicateItemName')

const InvalidParameterValueSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({ description: 'The value for a parameter is invalid.', required: [] })
  .openapi('InvalidParameterValue')

const MissingParameterSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({
    description: 'The request must contain the specified missing parameter.',
    required: [],
  })
  .openapi('MissingParameter')

const NoSuchDomainSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({ description: 'The specified domain does not exist.', required: [] })
  .openapi('NoSuchDomain')

const NumberItemAttributesExceededSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({ description: 'Too many attributes in this item.', required: [] })
  .openapi('NumberItemAttributesExceeded')

const NumberDomainAttributesExceededSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({ description: 'Too many attributes in this domain.', required: [] })
  .openapi('NumberDomainAttributesExceeded')

const NumberDomainBytesExceededSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({ description: 'Too many bytes in this domain.', required: [] })
  .openapi('NumberDomainBytesExceeded')

const NumberSubmittedItemsExceededSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({ description: 'Too many items exist in a single call.', required: [] })
  .openapi('NumberSubmittedItemsExceeded')

const NumberSubmittedAttributesExceededSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({ description: 'Too many attributes exist in a single call.', required: [] })
  .openapi('NumberSubmittedAttributesExceeded')

const NumberDomainsExceededSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({ description: 'Too many domains exist per this account.', required: [] })
  .openapi('NumberDomainsExceeded')

const AttributeDoesNotExistSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({ description: 'The specified attribute does not exist.', required: [] })
  .openapi('AttributeDoesNotExist')

const IntegerSchema = z.int().openapi('Integer')

const LongSchema = z.int().openapi('Long')

const DomainMetadataResultSchema = z
  .object({
    ItemCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of all items in the domain.' }),
    ).exactOptional(),
    ItemNamesSizeBytes: LongSchema.and(
      z.any().openapi({ description: 'The total size of all item names in the domain, in bytes.' }),
    ).exactOptional(),
    AttributeNameCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of unique attribute names in the domain.' }),
    ).exactOptional(),
    AttributeNamesSizeBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The total size of all unique attribute names in the domain, in bytes.',
        }),
    ).exactOptional(),
    AttributeValueCount: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of all attribute name/value pairs in the domain.' }),
    ).exactOptional(),
    AttributeValuesSizeBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The total size of all attribute values in the domain, in bytes.',
        }),
    ).exactOptional(),
    Timestamp: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The data and time when metadata was calculated, in Epoch (UNIX) seconds.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DomainMetadataResult')

const AttributeSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'The name of the attribute.' })),
    AlternateNameEncoding: StringSchema.and(z.any().openapi({ description: '' })).exactOptional(),
    Value: StringSchema.and(z.any().openapi({ description: 'The value of the attribute.' })),
    AlternateValueEncoding: StringSchema.and(z.any().openapi({ description: '' })).exactOptional(),
  })
  .openapi({ required: ['Name', 'Value'], description: '' })
  .openapi('Attribute')

const AttributeListSchema = z
  .array(AttributeSchema.and(z.any().openapi({ xml: { name: 'Attribute' } })))
  .openapi({ xml: { wrapped: false } })
  .openapi('AttributeList')

const GetAttributesResultSchema = z
  .object({
    Attributes: AttributeListSchema.and(
      z.any().openapi({ description: 'The list of attributes returned by the operation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAttributesResult')

const DomainNameListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'DomainName' } })))
  .openapi({ xml: { wrapped: false } })
  .openapi('DomainNameList')

const ListDomainsResultSchema = z
  .object({
    DomainNames: DomainNameListSchema.and(
      z.any().openapi({ description: 'A list of domain names that match the expression.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque token indicating that there are more domains than the specified <code>MaxNumberOfDomains</code> still available.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDomainsResult')

const InvalidNextTokenSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({ description: 'The specified NextToken is not valid. ', required: [] })
  .openapi('InvalidNextToken')

const ItemSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'The name of the item.' })),
    AlternateNameEncoding: StringSchema.and(z.any().openapi({ description: '' })).exactOptional(),
    Attributes: AttributeListSchema.and(z.any().openapi({ description: 'A list of attributes.' })),
  })
  .openapi({ required: ['Name', 'Attributes'], description: '' })
  .openapi('Item')

const ItemListSchema = z
  .array(ItemSchema.and(z.any().openapi({ xml: { name: 'Item' } })))
  .openapi({ xml: { wrapped: false } })
  .openapi('ItemList')

const SelectResultSchema = z
  .object({
    Items: ItemListSchema.and(
      z.any().openapi({ description: 'A list of items that match the select expression.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque token indicating that more items than <code>MaxNumberOfItems</code> were matched, the response size exceeded 1 megabyte, or the execution time exceeded 5 seconds.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SelectResult')

const InvalidNumberPredicatesSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({ description: 'Too many predicates exist in the query expression.', required: [] })
  .openapi('InvalidNumberPredicates')

const InvalidNumberValueTestsSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({ description: 'Too many predicates exist in the query expression.', required: [] })
  .openapi('InvalidNumberValueTests')

const InvalidQueryExpressionSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({ description: 'The specified query expression syntax is not valid.', required: [] })
  .openapi('InvalidQueryExpression')

const RequestTimeoutSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({
    description:
      'A timeout occurred when attempting to query the specified domain with specified query expression.',
    required: [],
  })
  .openapi('RequestTimeout')

const TooManyRequestedAttributesSchema = z
  .object({ BoxUsage: FloatSchema.exactOptional() })
  .openapi({ description: 'Too many attributes requested.', required: [] })
  .openapi('TooManyRequestedAttributes')

const AttributeNameListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'AttributeName' } })))
  .openapi({ xml: { wrapped: false } })
  .openapi('AttributeNameList')

const DeletableItemListSchema = z
  .array(DeletableItemSchema.and(z.any().openapi({ xml: { name: 'Item' } })))
  .openapi({ xml: { wrapped: false } })
  .openapi('DeletableItemList')

const BatchDeleteAttributesRequestSchema = z
  .object({
    DomainName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the domain in which the attributes are being deleted.',
        }),
    ),
    Items: DeletableItemListSchema.and(
      z.any().openapi({ description: 'A list of items on which to perform the operation.' }),
    ),
  })
  .openapi({ required: ['DomainName', 'Items'], title: 'BatchDeleteAttributesRequest' })
  .openapi('BatchDeleteAttributesRequest')

const ReplaceableItemListSchema = z
  .array(ReplaceableItemSchema.and(z.any().openapi({ xml: { name: 'Item' } })))
  .openapi({ xml: { wrapped: false } })
  .openapi('ReplaceableItemList')

const BatchPutAttributesRequestSchema = z
  .object({
    DomainName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the domain in which the attributes are being stored.',
        }),
    ),
    Items: ReplaceableItemListSchema.and(
      z.any().openapi({ description: 'A list of items on which to perform the operation.' }),
    ),
  })
  .openapi({ required: ['DomainName', 'Items'], title: 'BatchPutAttributesRequest' })
  .openapi('BatchPutAttributesRequest')

const CreateDomainRequestSchema = z
  .object({
    DomainName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the domain to create. The name can range between 3 and 255 characters and can contain the following characters: a-z, A-Z, 0-9, '_', '-', and '.'.",
        }),
    ),
  })
  .openapi({ required: ['DomainName'], title: 'CreateDomainRequest' })
  .openapi('CreateDomainRequest')

const UpdateConditionSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the attribute involved in the condition.' }),
    ).exactOptional(),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of an attribute. This value can only be specified when the <code>Exists</code> parameter is equal to <code>true</code>.',
        }),
    ).exactOptional(),
    Exists: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value specifying whether or not the specified attribute must exist with the specified value in order for the update condition to be satisfied. Specify <code>true</code> if the attribute must exist for the update condition to be satisfied. Specify <code>false</code> if the attribute should not exist in order for the update condition to be satisfied.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      " Specifies the conditions under which data should be updated. If an update condition is specified for a request, the data will only be updated if the condition is satisfied. For example, if an attribute with a specific name and value exists, or if a specific attribute doesn't exist. ",
    required: [],
  })
  .openapi('UpdateCondition')

const DeleteAttributesRequestSchema = z
  .object({
    DomainName: StringSchema.and(
      z.any().openapi({ description: 'The name of the domain in which to perform the operation.' }),
    ),
    ItemName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the item. Similar to rows on a spreadsheet, items represent individual objects that contain one or more value-attribute pairs.',
        }),
    ),
    Attributes: DeletableAttributeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Attributes. Similar to columns on a spreadsheet, attributes represent categories of data that can be assigned to items.',
        }),
    ).exactOptional(),
    Expected: UpdateConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The update condition which, if specified, determines whether the specified attributes will be deleted or not. The update condition must be satisfied in order for this request to be processed and the attributes to be deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DomainName', 'ItemName'], title: 'DeleteAttributesRequest' })
  .openapi('DeleteAttributesRequest')

const DeleteDomainRequestSchema = z
  .object({
    DomainName: StringSchema.and(
      z.any().openapi({ description: 'The name of the domain to delete.' }),
    ),
  })
  .openapi({ required: ['DomainName'], title: 'DeleteDomainRequest' })
  .openapi('DeleteDomainRequest')

const DomainMetadataRequestSchema = z
  .object({
    DomainName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the domain for which to display the metadata of.' }),
    ),
  })
  .openapi({ required: ['DomainName'], title: 'DomainMetadataRequest' })
  .openapi('DomainMetadataRequest')

const GetAttributesRequestSchema = z
  .object({
    DomainName: StringSchema.and(
      z.any().openapi({ description: 'The name of the domain in which to perform the operation.' }),
    ),
    ItemName: StringSchema.and(z.any().openapi({ description: 'The name of the item.' })),
    AttributeNames: AttributeNameListSchema.and(
      z.any().openapi({ description: 'The names of the attributes.' }),
    ).exactOptional(),
    ConsistentRead: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If <code>true</code>, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DomainName', 'ItemName'], title: 'GetAttributesRequest' })
  .openapi('GetAttributesRequest')

const ListDomainsRequestSchema = z
  .object({
    MaxNumberOfDomains: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of domain names you want returned. The range is 1 to 100. The default setting is 100.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string informing Amazon SimpleDB where to start the next list of domain names.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDomainsRequest', required: [] })
  .openapi('ListDomainsRequest')

const PutAttributesRequestSchema = z
  .object({
    DomainName: StringSchema.and(
      z.any().openapi({ description: 'The name of the domain in which to perform the operation.' }),
    ),
    ItemName: StringSchema.and(z.any().openapi({ description: 'The name of the item.' })),
    Attributes: ReplaceableAttributeListSchema.and(
      z.any().openapi({ description: 'The list of attributes.' }),
    ),
    Expected: UpdateConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The update condition which, if specified, determines whether the specified attributes will be updated or not. The update condition must be satisfied in order for this request to be processed and the attributes to be updated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DomainName', 'ItemName', 'Attributes'], title: 'PutAttributesRequest' })
  .openapi('PutAttributesRequest')

const SelectRequestSchema = z
  .object({
    SelectExpression: StringSchema.and(
      z.any().openapi({ description: 'The expression used to query the domain.' }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string informing Amazon SimpleDB where to start the next list of <code>ItemNames</code>.',
        }),
    ).exactOptional(),
    ConsistentRead: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If <code>true</code>, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SelectExpression'], title: 'SelectRequest' })
  .openapi('SelectRequest')

const AWSAccessKeyIdParamsSchema = z
  .string()
  .openapi({
    param: { name: 'AWSAccessKeyId', in: 'query', schema: { type: 'string' }, required: true },
  })

const ActionParamsSchema = z
  .string()
  .openapi({ param: { name: 'Action', in: 'query', schema: { type: 'string' }, required: true } })

const SignatureMethodParamsSchema = z
  .string()
  .openapi({
    param: { name: 'SignatureMethod', in: 'query', schema: { type: 'string' }, required: true },
  })

const SignatureVersionParamsSchema = z
  .string()
  .openapi({
    param: { name: 'SignatureVersion', in: 'query', schema: { type: 'string' }, required: true },
  })

const TimestampParamsSchema = z
  .string()
  .openapi({
    param: { name: 'Timestamp', in: 'query', schema: { type: 'string' }, required: true },
  })

const VersionParamsSchema = z
  .string()
  .openapi({ param: { name: 'Version', in: 'query', schema: { type: 'string' }, required: true } })

const SignatureParamsSchema = z
  .string()
  .openapi({
    param: { name: 'Signature', in: 'query', schema: { type: 'string' }, required: true },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v2',
  'x-amazon-apigateway-authtype': 'awsSigv2',
}

export const getActionBatchDeleteAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=BatchDeleteAttributes',
  description:
    "<p> Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. This enables Amazon SimpleDB to optimize requests, which generally yields better throughput. </p> <note> <p> If you specify BatchDeleteAttributes without attributes or values, all the attributes for the item are deleted. </p> <p> BatchDeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute doesn't result in an error. </p> <p> The BatchDeleteAttributes operation succeeds or fails in its entirety. There are no partial deletes. You can execute multiple BatchDeleteAttributes operations and other operations in parallel. However, large numbers of concurrent BatchDeleteAttributes calls can result in Service Unavailable (503) responses. </p> <p> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. </p> <p> This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists. </p> </note> <p> The following limitations are enforced for this operation: <ul> <li>1 MB request size</li> <li>25 item limit per BatchDeleteAttributes operation</li> </ul> </p>",
  operationId: 'GET_BatchDeleteAttributes',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('BatchDeleteAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['BatchDeleteAttributes'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
      DomainName: z
        .string()
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: 'The name of the domain in which the attributes are being deleted.',
            schema: { type: 'string' },
          },
        }),
      Items: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            DeletableItemSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Item' } }),
            ),
          ),
        )
        .openapi({
          param: {
            name: 'Items',
            in: 'query',
            required: true,
            description: 'A list of items on which to perform the operation.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/DeletableItem' }, { xml: { name: 'Item' } }],
              },
              xml: { wrapped: false },
            },
          },
          xml: { wrapped: false },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postActionBatchDeleteAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=BatchDeleteAttributes',
  description:
    "<p> Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. This enables Amazon SimpleDB to optimize requests, which generally yields better throughput. </p> <note> <p> If you specify BatchDeleteAttributes without attributes or values, all the attributes for the item are deleted. </p> <p> BatchDeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute doesn't result in an error. </p> <p> The BatchDeleteAttributes operation succeeds or fails in its entirety. There are no partial deletes. You can execute multiple BatchDeleteAttributes operations and other operations in parallel. However, large numbers of concurrent BatchDeleteAttributes calls can result in Service Unavailable (503) responses. </p> <p> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. </p> <p> This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists. </p> </note> <p> The following limitations are enforced for this operation: <ul> <li>1 MB request size</li> <li>25 item limit per BatchDeleteAttributes operation</li> </ul> </p>",
  operationId: 'POST_BatchDeleteAttributes',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('BatchDeleteAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['BatchDeleteAttributes'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
    }),
    body: { content: { 'text/xml': { schema: BatchDeleteAttributesRequestSchema } } },
  },
  responses: { 200: { description: 'Success' } },
})

export const getActionBatchPutAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=BatchPutAttributes',
  description:
    "<p> The <code>BatchPutAttributes</code> operation creates or replaces attributes within one or more items. By using this operation, the client can perform multiple <a>PutAttribute</a> operation with a single call. This helps yield savings in round trips and latencies, enabling Amazon SimpleDB to optimize requests and generally produce better throughput. </p> <p> The client may specify the item name with the <code>Item.X.ItemName</code> parameter. The client may specify new attributes using a combination of the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> parameters. The client may specify the first attribute for the first item using the parameters <code>Item.0.Attribute.0.Name</code> and <code>Item.0.Attribute.0.Value</code>, and for the second attribute for the first item by the parameters <code>Item.0.Attribute.1.Name</code> and <code>Item.0.Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified within an item by their name/value combination. For example, a single item can have the attributes <code>{ \"first_name\", \"first_value\" }</code> and <code>{ \"first_name\", \"second_value\" }</code>. However, it cannot have two attribute instances where both the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> are the same. </p> <p> Optionally, the requester can supply the <code>Replace</code> parameter for each individual value. Setting this value to <code>true</code> will cause the new attribute values to replace the existing attribute values. For example, if an item <code>I</code> has the attributes <code>{ 'a', '1' }, { 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requester does a BatchPutAttributes of <code>{'I', 'b', '4' }</code> with the Replace parameter set to true, the final attributes of the item will be <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, replacing the previous values of the 'b' attribute with the new value. </p> <note> You cannot specify an empty string as an item or as an attribute name. The <code>BatchPutAttributes</code> operation succeeds or fails in its entirety. There are no partial puts. </note> <important> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. This operation does not support conditions using <code>Expected.X.Name</code>, <code>Expected.X.Value</code>, or <code>Expected.X.Exists</code>. </important> <p> You can execute multiple <code>BatchPutAttributes</code> operations and other operations in parallel. However, large numbers of concurrent <code>BatchPutAttributes</code> calls can result in Service Unavailable (503) responses. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 attribute name-value pairs per item</li> <li>1 MB request size</li> <li>1 billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> <li>25 item limit per <code>BatchPutAttributes</code> operation</li> </ul> </p>",
  operationId: 'GET_BatchPutAttributes',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('BatchPutAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['BatchPutAttributes'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
      DomainName: z
        .string()
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: 'The name of the domain in which the attributes are being stored.',
            schema: { type: 'string' },
          },
        }),
      Items: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                Name: StringSchema.and(
                  ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.any()).openapi({
                    xml: { name: 'ItemName' },
                    description: 'The name of the replaceable item.',
                  }),
                ),
                Attributes: z
                  .array(
                    z
                      .object({
                        Name: StringSchema.and(
                          z
                            .any()
                            .openapi({ description: 'The name of the replaceable attribute.' }),
                        ),
                        Value: StringSchema.and(
                          z
                            .any()
                            .openapi({ description: 'The value of the replaceable attribute.' }),
                        ),
                        Replace: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            BooleanSchema,
                          )
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  'A flag specifying whether or not to replace the attribute/value pair or to add a new attribute/value pair. The default setting is <code>false</code>.',
                              }),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: ['Name', 'Value'], description: '' })
                      .and(
                        ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(z.any()).openapi({ xml: { name: 'Attribute' } }),
                      ),
                  )
                  .openapi({ xml: { wrapped: false } })
                  .and(
                    z
                      .any()
                      .openapi({ description: 'The list of attributes for a replaceable item.' }),
                  ),
              })
              .openapi({ required: ['Name', 'Attributes'], description: '' })
              .and(
                ((schema) =>
                  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                  z.any(),
                ).openapi({ xml: { name: 'Item' } }),
              ),
          ),
        )
        .openapi({
          param: {
            name: 'Items',
            in: 'query',
            required: true,
            description: 'A list of items on which to perform the operation.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  {
                    type: 'object',
                    required: ['Name', 'Attributes'],
                    properties: {
                      Name: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          {
                            xml: { name: 'ItemName' },
                            description: 'The name of the replaceable item.',
                          },
                        ],
                      },
                      Attributes: {
                        allOf: [
                          {
                            type: 'array',
                            items: {
                              allOf: [
                                {
                                  type: 'object',
                                  required: ['Name', 'Value'],
                                  properties: {
                                    Name: {
                                      allOf: [
                                        { $ref: '#/components/schemas/String' },
                                        { description: 'The name of the replaceable attribute.' },
                                      ],
                                    },
                                    Value: {
                                      allOf: [
                                        { $ref: '#/components/schemas/String' },
                                        { description: 'The value of the replaceable attribute.' },
                                      ],
                                    },
                                    Replace: {
                                      allOf: [
                                        { $ref: '#/components/schemas/Boolean' },
                                        {
                                          description:
                                            'A flag specifying whether or not to replace the attribute/value pair or to add a new attribute/value pair. The default setting is <code>false</code>.',
                                        },
                                      ],
                                    },
                                  },
                                  description: '',
                                },
                                { xml: { name: 'Attribute' } },
                              ],
                            },
                            xml: { wrapped: false },
                          },
                          { description: 'The list of attributes for a replaceable item.' },
                        ],
                      },
                    },
                    description: '',
                  },
                  { xml: { name: 'Item' } },
                ],
              },
              xml: { wrapped: false },
            },
          },
          xml: { wrapped: false },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'NoSuchDomain', content: { 'text/xml': { schema: NoSuchDomainSchema } } },
    409: {
      description: 'NumberSubmittedAttributesExceeded',
      content: { 'text/xml': { schema: NumberSubmittedAttributesExceededSchema } },
    },
  },
})

export const postActionBatchPutAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=BatchPutAttributes',
  description:
    "<p> The <code>BatchPutAttributes</code> operation creates or replaces attributes within one or more items. By using this operation, the client can perform multiple <a>PutAttribute</a> operation with a single call. This helps yield savings in round trips and latencies, enabling Amazon SimpleDB to optimize requests and generally produce better throughput. </p> <p> The client may specify the item name with the <code>Item.X.ItemName</code> parameter. The client may specify new attributes using a combination of the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> parameters. The client may specify the first attribute for the first item using the parameters <code>Item.0.Attribute.0.Name</code> and <code>Item.0.Attribute.0.Value</code>, and for the second attribute for the first item by the parameters <code>Item.0.Attribute.1.Name</code> and <code>Item.0.Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified within an item by their name/value combination. For example, a single item can have the attributes <code>{ \"first_name\", \"first_value\" }</code> and <code>{ \"first_name\", \"second_value\" }</code>. However, it cannot have two attribute instances where both the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> are the same. </p> <p> Optionally, the requester can supply the <code>Replace</code> parameter for each individual value. Setting this value to <code>true</code> will cause the new attribute values to replace the existing attribute values. For example, if an item <code>I</code> has the attributes <code>{ 'a', '1' }, { 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requester does a BatchPutAttributes of <code>{'I', 'b', '4' }</code> with the Replace parameter set to true, the final attributes of the item will be <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, replacing the previous values of the 'b' attribute with the new value. </p> <note> You cannot specify an empty string as an item or as an attribute name. The <code>BatchPutAttributes</code> operation succeeds or fails in its entirety. There are no partial puts. </note> <important> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. This operation does not support conditions using <code>Expected.X.Name</code>, <code>Expected.X.Value</code>, or <code>Expected.X.Exists</code>. </important> <p> You can execute multiple <code>BatchPutAttributes</code> operations and other operations in parallel. However, large numbers of concurrent <code>BatchPutAttributes</code> calls can result in Service Unavailable (503) responses. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 attribute name-value pairs per item</li> <li>1 MB request size</li> <li>1 billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> <li>25 item limit per <code>BatchPutAttributes</code> operation</li> </ul> </p>",
  operationId: 'POST_BatchPutAttributes',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('BatchPutAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['BatchPutAttributes'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
    }),
    body: { content: { 'text/xml': { schema: BatchPutAttributesRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'NoSuchDomain', content: { 'text/xml': { schema: NoSuchDomainSchema } } },
    409: {
      description: 'NumberSubmittedAttributesExceeded',
      content: { 'text/xml': { schema: NumberSubmittedAttributesExceededSchema } },
    },
  },
})

export const getActionCreateDomainRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateDomain',
  description:
    '<p> The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The <code>CreateDomain</code> operation may take 10 or more seconds to complete. </p> <note> CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response. </note> <p> The client can create up to 100 domains per account. </p> <p> If the client requires additional domains, go to <a href="http://aws.amazon.com/contact-us/simpledb-limit-request/"> http://aws.amazon.com/contact-us/simpledb-limit-request/</a>. </p>',
  operationId: 'GET_CreateDomain',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('CreateDomain')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDomain'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
      DomainName: z
        .string()
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description:
              "The name of the domain to create. The name can range between 3 and 255 characters and can contain the following characters: a-z, A-Z, 0-9, '_', '-', and '.'.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'MissingParameter',
      content: { 'text/xml': { schema: MissingParameterSchema } },
    },
    409: {
      description: 'NumberDomainsExceeded',
      content: { 'text/xml': { schema: NumberDomainsExceededSchema } },
    },
  },
})

export const postActionCreateDomainRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateDomain',
  description:
    '<p> The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The <code>CreateDomain</code> operation may take 10 or more seconds to complete. </p> <note> CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response. </note> <p> The client can create up to 100 domains per account. </p> <p> If the client requires additional domains, go to <a href="http://aws.amazon.com/contact-us/simpledb-limit-request/"> http://aws.amazon.com/contact-us/simpledb-limit-request/</a>. </p>',
  operationId: 'POST_CreateDomain',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('CreateDomain')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDomain'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
    }),
    body: { content: { 'text/xml': { schema: CreateDomainRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'MissingParameter',
      content: { 'text/xml': { schema: MissingParameterSchema } },
    },
    409: {
      description: 'NumberDomainsExceeded',
      content: { 'text/xml': { schema: NumberDomainsExceededSchema } },
    },
  },
})

export const getActionDeleteAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteAttributes',
  description:
    '<p> Deletes one or more attributes associated with an item. If all attributes of the item are deleted, the item is deleted. </p> <note> If <code>DeleteAttributes</code> is called without being passed any attributes or values specified, all the attributes for the item are deleted. </note> <p> <code>DeleteAttributes</code> is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. </p> <p> Because Amazon SimpleDB makes multiple copies of item data and uses an eventual consistency update model, performing a <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <code>DeleteAttributes</code> or <a>PutAttributes</a> operation (write) might not return updated item data. </p>',
  operationId: 'GET_DeleteAttributes',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['Name', ['Expected']],
          ['Value', ['Expected']],
          ['Exists', ['Expected']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
          Action: z
            .literal('DeleteAttributes')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['DeleteAttributes'] },
              },
            }),
          SignatureMethod: SignatureMethodParamsSchema,
          SignatureVersion: SignatureVersionParamsSchema,
          Timestamp: TimestampParamsSchema,
          Version: z
            .literal('2009-04-15')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2009-04-15'] },
              },
            }),
          Signature: SignatureParamsSchema,
          DomainName: z
            .string()
            .openapi({
              param: {
                name: 'DomainName',
                in: 'query',
                required: true,
                description: 'The name of the domain in which to perform the operation.',
                schema: { type: 'string' },
              },
            }),
          ItemName: z
            .string()
            .openapi({
              param: {
                name: 'ItemName',
                in: 'query',
                required: true,
                description:
                  'The name of the item. Similar to rows on a spreadsheet, items represent individual objects that contain one or more value-attribute pairs.',
                schema: { type: 'string' },
              },
            }),
          Attributes: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                DeletableAttributeSchema.and(
                  ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.any()).openapi({ xml: { name: 'Attribute' } }),
                ),
              ),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Attributes',
                in: 'query',
                required: false,
                description:
                  'A list of Attributes. Similar to columns on a spreadsheet, attributes represent categories of data that can be assigned to items.',
                schema: {
                  type: 'array',
                  items: {
                    allOf: [
                      { $ref: '#/components/schemas/DeletableAttribute' },
                      { xml: { name: 'Attribute' } },
                    ],
                  },
                  xml: { wrapped: false },
                },
              },
              xml: { wrapped: false },
            }),
          Expected: z
            .object({
              Name: StringSchema.and(
                z
                  .any()
                  .openapi({ description: 'The name of the attribute involved in the condition.' }),
              ).exactOptional(),
              Value: StringSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The value of an attribute. This value can only be specified when the <code>Exists</code> parameter is equal to <code>true</code>.',
                  }),
              ).exactOptional(),
              Exists: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  BooleanSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'A value specifying whether or not the specified attribute must exist with the specified value in order for the update condition to be satisfied. Specify <code>true</code> if the attribute must exist for the update condition to be satisfied. Specify <code>false</code> if the attribute should not exist in order for the update condition to be satisfied.',
                    }),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'Expected',
                in: 'query',
                required: false,
                description:
                  'The update condition which, if specified, determines whether the specified attributes will be deleted or not. The update condition must be satisfied in order for this request to be processed and the attributes to be deleted.',
                schema: {
                  type: 'object',
                  properties: {
                    Name: {
                      allOf: [
                        { $ref: '#/components/schemas/String' },
                        { description: 'The name of the attribute involved in the condition.' },
                      ],
                    },
                    Value: {
                      allOf: [
                        { $ref: '#/components/schemas/String' },
                        {
                          description:
                            'The value of an attribute. This value can only be specified when the <code>Exists</code> parameter is equal to <code>true</code>.',
                        },
                      ],
                    },
                    Exists: {
                      allOf: [
                        { $ref: '#/components/schemas/Boolean' },
                        {
                          description:
                            'A value specifying whether or not the specified attribute must exist with the specified value in order for the update condition to be satisfied. Specify <code>true</code> if the attribute must exist for the update condition to be satisfied. Specify <code>false</code> if the attribute should not exist in order for the update condition to be satisfied.',
                        },
                      ],
                    },
                  },
                  description:
                    " Specifies the conditions under which data should be updated. If an update condition is specified for a request, the data will only be updated if the condition is satisfied. For example, if an attribute with a specific name and value exists, or if a specific attribute doesn't exist. ",
                },
              },
              description:
                " Specifies the conditions under which data should be updated. If an update condition is specified for a request, the data will only be updated if the condition is satisfied. For example, if an attribute with a specific name and value exists, or if a specific attribute doesn't exist. ",
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'NoSuchDomain', content: { 'text/xml': { schema: NoSuchDomainSchema } } },
    404: {
      description: 'AttributeDoesNotExist',
      content: { 'text/xml': { schema: AttributeDoesNotExistSchema } },
    },
  },
})

export const postActionDeleteAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteAttributes',
  description:
    '<p> Deletes one or more attributes associated with an item. If all attributes of the item are deleted, the item is deleted. </p> <note> If <code>DeleteAttributes</code> is called without being passed any attributes or values specified, all the attributes for the item are deleted. </note> <p> <code>DeleteAttributes</code> is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. </p> <p> Because Amazon SimpleDB makes multiple copies of item data and uses an eventual consistency update model, performing a <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <code>DeleteAttributes</code> or <a>PutAttributes</a> operation (write) might not return updated item data. </p>',
  operationId: 'POST_DeleteAttributes',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('DeleteAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteAttributes'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
    }),
    body: { content: { 'text/xml': { schema: DeleteAttributesRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'NoSuchDomain', content: { 'text/xml': { schema: NoSuchDomainSchema } } },
    404: {
      description: 'AttributeDoesNotExist',
      content: { 'text/xml': { schema: AttributeDoesNotExistSchema } },
    },
  },
})

export const getActionDeleteDomainRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteDomain',
  description:
    '<p> The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more seconds to complete. </p> <note> Running <code>DeleteDomain</code> on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. </note>',
  operationId: 'GET_DeleteDomain',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('DeleteDomain')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDomain'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
      DomainName: z
        .string()
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: 'The name of the domain to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'MissingParameter',
      content: { 'text/xml': { schema: MissingParameterSchema } },
    },
  },
})

export const postActionDeleteDomainRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteDomain',
  description:
    '<p> The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more seconds to complete. </p> <note> Running <code>DeleteDomain</code> on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. </note>',
  operationId: 'POST_DeleteDomain',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('DeleteDomain')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDomain'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
    }),
    body: { content: { 'text/xml': { schema: DeleteDomainRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'MissingParameter',
      content: { 'text/xml': { schema: MissingParameterSchema } },
    },
  },
})

export const getActionDomainMetadataRoute = createRoute({
  method: 'get',
  path: '/#Action=DomainMetadata',
  description:
    ' Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. ',
  operationId: 'GET_DomainMetadata',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('DomainMetadata')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DomainMetadata'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
      DomainName: z
        .string()
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: 'The name of the domain for which to display the metadata of.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DomainMetadataResultSchema } },
    },
    400: { description: 'NoSuchDomain', content: { 'text/xml': { schema: NoSuchDomainSchema } } },
  },
})

export const postActionDomainMetadataRoute = createRoute({
  method: 'post',
  path: '/#Action=DomainMetadata',
  description:
    ' Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. ',
  operationId: 'POST_DomainMetadata',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('DomainMetadata')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DomainMetadata'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
    }),
    body: { content: { 'text/xml': { schema: DomainMetadataRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DomainMetadataResultSchema } },
    },
    400: { description: 'NoSuchDomain', content: { 'text/xml': { schema: NoSuchDomainSchema } } },
  },
})

export const getActionGetAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=GetAttributes',
  description:
    '<p> Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. </p> <p> If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas. </p> <note> If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. </note>',
  operationId: 'GET_GetAttributes',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('GetAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetAttributes'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
      DomainName: z
        .string()
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: 'The name of the domain in which to perform the operation.',
            schema: { type: 'string' },
          },
        }),
      ItemName: z
        .string()
        .openapi({
          param: {
            name: 'ItemName',
            in: 'query',
            required: true,
            description: 'The name of the item.',
            schema: { type: 'string' },
          },
        }),
      AttributeNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'AttributeName' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AttributeNames',
            in: 'query',
            required: false,
            description: 'The names of the attributes.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'AttributeName' } },
                ],
              },
              xml: { wrapped: false },
            },
          },
          xml: { wrapped: false },
        }),
      ConsistentRead: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'ConsistentRead',
            in: 'query',
            required: false,
            description:
              'Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If <code>true</code>, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetAttributesResultSchema } } },
    400: { description: 'NoSuchDomain', content: { 'text/xml': { schema: NoSuchDomainSchema } } },
  },
})

export const postActionGetAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=GetAttributes',
  description:
    '<p> Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. </p> <p> If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas. </p> <note> If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. </note>',
  operationId: 'POST_GetAttributes',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('GetAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetAttributes'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
    }),
    body: { content: { 'text/xml': { schema: GetAttributesRequestSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetAttributesResultSchema } } },
    400: { description: 'NoSuchDomain', content: { 'text/xml': { schema: NoSuchDomainSchema } } },
  },
})

export const getActionListDomainsRoute = createRoute({
  method: 'get',
  path: '/#Action=ListDomains',
  description:
    ' The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by <a href="#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned if there are more than <code>MaxNumberOfDomains</code> domains. Calling <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive operation call. ',
  operationId: 'GET_ListDomains',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('ListDomains')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListDomains'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
      MaxNumberOfDomains: z
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
            name: 'MaxNumberOfDomains',
            in: 'query',
            required: false,
            description:
              'The maximum number of domain names you want returned. The range is 1 to 100. The default setting is 100.',
            schema: { type: 'integer' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'A string informing Amazon SimpleDB where to start the next list of domain names.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ListDomainsResultSchema } } },
    400: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
  },
})

export const postActionListDomainsRoute = createRoute({
  method: 'post',
  path: '/#Action=ListDomains',
  description:
    ' The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by <a href="#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned if there are more than <code>MaxNumberOfDomains</code> domains. Calling <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive operation call. ',
  operationId: 'POST_ListDomains',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('ListDomains')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListDomains'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
      MaxNumberOfDomains: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxNumberOfDomains',
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
    body: { content: { 'text/xml': { schema: ListDomainsRequestSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ListDomainsResultSchema } } },
    400: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
  },
})

export const getActionPutAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=PutAttributes',
  description:
    "<p> The PutAttributes operation creates or replaces attributes in an item. The client may specify new attributes using a combination of the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> parameters. The client specifies the first attribute by the parameters <code>Attribute.0.Name</code> and <code>Attribute.0.Value</code>, the second attribute by the parameters <code>Attribute.1.Name</code> and <code>Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified in an item by their name/value combination. For example, a single item can have the attributes <code>{ \"first_name\", \"first_value\" }</code> and <code>{ \"first_name\", second_value\" }</code>. However, it cannot have two attribute instances where both the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> are the same. </p> <p> Optionally, the requestor can supply the <code>Replace</code> parameter for each individual attribute. Setting this value to <code>true</code> causes the new attribute value to replace the existing attribute value(s). For example, if an item has the attributes <code>{ 'a', '1' }</code>, <code>{ 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requestor calls <code>PutAttributes</code> using the attributes <code>{ 'b', '4' }</code> with the <code>Replace</code> parameter set to true, the final attributes of the item are changed to <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, which replaces the previous values of the 'b' attribute with the new value. </p> <note> Using <code>PutAttributes</code> to replace attribute values that do not exist will not result in an error response. </note> <p> You cannot specify an empty string as an attribute name. </p> <p> Because Amazon SimpleDB makes multiple copies of client data and uses an eventual consistency update model, an immediate <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <a>PutAttributes</a> or <a>DeleteAttributes</a> operation (write) might not return the updated data. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 total attribute name-value pairs per item</li> <li>One billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> </ul> </p>",
  operationId: 'GET_PutAttributes',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['Name', ['Expected']],
          ['Value', ['Expected']],
          ['Exists', ['Expected']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
          Action: z
            .literal('PutAttributes')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['PutAttributes'] },
              },
            }),
          SignatureMethod: SignatureMethodParamsSchema,
          SignatureVersion: SignatureVersionParamsSchema,
          Timestamp: TimestampParamsSchema,
          Version: z
            .literal('2009-04-15')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2009-04-15'] },
              },
            }),
          Signature: SignatureParamsSchema,
          DomainName: z
            .string()
            .openapi({
              param: {
                name: 'DomainName',
                in: 'query',
                required: true,
                description: 'The name of the domain in which to perform the operation.',
                schema: { type: 'string' },
              },
            }),
          ItemName: z
            .string()
            .openapi({
              param: {
                name: 'ItemName',
                in: 'query',
                required: true,
                description: 'The name of the item.',
                schema: { type: 'string' },
              },
            }),
          Attributes: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                z
                  .object({
                    Name: StringSchema.and(
                      z.any().openapi({ description: 'The name of the replaceable attribute.' }),
                    ),
                    Value: StringSchema.and(
                      z.any().openapi({ description: 'The value of the replaceable attribute.' }),
                    ),
                    Replace: z
                      .preprocess(
                        ((read) => (val: unknown) => {
                          const result = read.safeParse(val)
                          return result.success ? result.data : val
                        })(z.stringbool()),
                        BooleanSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'A flag specifying whether or not to replace the attribute/value pair or to add a new attribute/value pair. The default setting is <code>false</code>.',
                          }),
                      )
                      .exactOptional(),
                  })
                  .openapi({ required: ['Name', 'Value'], description: '' })
                  .and(
                    ((schema) =>
                      z.union([
                        schema,
                        z.preprocess((val) => (val === 'null' ? null : val), schema),
                      ]))(z.any()).openapi({ xml: { name: 'Attribute' } }),
                  ),
              ),
            )
            .openapi({
              param: {
                name: 'Attributes',
                in: 'query',
                required: true,
                description: 'The list of attributes.',
                schema: {
                  type: 'array',
                  items: {
                    allOf: [
                      {
                        type: 'object',
                        required: ['Name', 'Value'],
                        properties: {
                          Name: {
                            allOf: [
                              { $ref: '#/components/schemas/String' },
                              { description: 'The name of the replaceable attribute.' },
                            ],
                          },
                          Value: {
                            allOf: [
                              { $ref: '#/components/schemas/String' },
                              { description: 'The value of the replaceable attribute.' },
                            ],
                          },
                          Replace: {
                            allOf: [
                              { $ref: '#/components/schemas/Boolean' },
                              {
                                description:
                                  'A flag specifying whether or not to replace the attribute/value pair or to add a new attribute/value pair. The default setting is <code>false</code>.',
                              },
                            ],
                          },
                        },
                        description: '',
                      },
                      { xml: { name: 'Attribute' } },
                    ],
                  },
                  xml: { wrapped: false },
                },
              },
              xml: { wrapped: false },
            }),
          Expected: z
            .object({
              Name: StringSchema.and(
                z
                  .any()
                  .openapi({ description: 'The name of the attribute involved in the condition.' }),
              ).exactOptional(),
              Value: StringSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The value of an attribute. This value can only be specified when the <code>Exists</code> parameter is equal to <code>true</code>.',
                  }),
              ).exactOptional(),
              Exists: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  BooleanSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'A value specifying whether or not the specified attribute must exist with the specified value in order for the update condition to be satisfied. Specify <code>true</code> if the attribute must exist for the update condition to be satisfied. Specify <code>false</code> if the attribute should not exist in order for the update condition to be satisfied.',
                    }),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'Expected',
                in: 'query',
                required: false,
                description:
                  'The update condition which, if specified, determines whether the specified attributes will be updated or not. The update condition must be satisfied in order for this request to be processed and the attributes to be updated.',
                schema: {
                  type: 'object',
                  properties: {
                    Name: {
                      allOf: [
                        { $ref: '#/components/schemas/String' },
                        { description: 'The name of the attribute involved in the condition.' },
                      ],
                    },
                    Value: {
                      allOf: [
                        { $ref: '#/components/schemas/String' },
                        {
                          description:
                            'The value of an attribute. This value can only be specified when the <code>Exists</code> parameter is equal to <code>true</code>.',
                        },
                      ],
                    },
                    Exists: {
                      allOf: [
                        { $ref: '#/components/schemas/Boolean' },
                        {
                          description:
                            'A value specifying whether or not the specified attribute must exist with the specified value in order for the update condition to be satisfied. Specify <code>true</code> if the attribute must exist for the update condition to be satisfied. Specify <code>false</code> if the attribute should not exist in order for the update condition to be satisfied.',
                        },
                      ],
                    },
                  },
                  description:
                    " Specifies the conditions under which data should be updated. If an update condition is specified for a request, the data will only be updated if the condition is satisfied. For example, if an attribute with a specific name and value exists, or if a specific attribute doesn't exist. ",
                },
              },
              description:
                " Specifies the conditions under which data should be updated. If an update condition is specified for a request, the data will only be updated if the condition is satisfied. For example, if an attribute with a specific name and value exists, or if a specific attribute doesn't exist. ",
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'NoSuchDomain', content: { 'text/xml': { schema: NoSuchDomainSchema } } },
    404: {
      description: 'AttributeDoesNotExist',
      content: { 'text/xml': { schema: AttributeDoesNotExistSchema } },
    },
    409: {
      description: 'NumberItemAttributesExceeded',
      content: { 'text/xml': { schema: NumberItemAttributesExceededSchema } },
    },
  },
})

export const postActionPutAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=PutAttributes',
  description:
    "<p> The PutAttributes operation creates or replaces attributes in an item. The client may specify new attributes using a combination of the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> parameters. The client specifies the first attribute by the parameters <code>Attribute.0.Name</code> and <code>Attribute.0.Value</code>, the second attribute by the parameters <code>Attribute.1.Name</code> and <code>Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified in an item by their name/value combination. For example, a single item can have the attributes <code>{ \"first_name\", \"first_value\" }</code> and <code>{ \"first_name\", second_value\" }</code>. However, it cannot have two attribute instances where both the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> are the same. </p> <p> Optionally, the requestor can supply the <code>Replace</code> parameter for each individual attribute. Setting this value to <code>true</code> causes the new attribute value to replace the existing attribute value(s). For example, if an item has the attributes <code>{ 'a', '1' }</code>, <code>{ 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requestor calls <code>PutAttributes</code> using the attributes <code>{ 'b', '4' }</code> with the <code>Replace</code> parameter set to true, the final attributes of the item are changed to <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, which replaces the previous values of the 'b' attribute with the new value. </p> <note> Using <code>PutAttributes</code> to replace attribute values that do not exist will not result in an error response. </note> <p> You cannot specify an empty string as an attribute name. </p> <p> Because Amazon SimpleDB makes multiple copies of client data and uses an eventual consistency update model, an immediate <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <a>PutAttributes</a> or <a>DeleteAttributes</a> operation (write) might not return the updated data. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 total attribute name-value pairs per item</li> <li>One billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> </ul> </p>",
  operationId: 'POST_PutAttributes',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('PutAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutAttributes'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
    }),
    body: { content: { 'text/xml': { schema: PutAttributesRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'NoSuchDomain', content: { 'text/xml': { schema: NoSuchDomainSchema } } },
    404: {
      description: 'AttributeDoesNotExist',
      content: { 'text/xml': { schema: AttributeDoesNotExistSchema } },
    },
    409: {
      description: 'NumberItemAttributesExceeded',
      content: { 'text/xml': { schema: NumberItemAttributesExceededSchema } },
    },
  },
})

export const getActionSelectRoute = createRoute({
  method: 'get',
  path: '/#Action=Select',
  description:
    '<p> The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that match the select expression. <code>Select</code> is similar to the standard SQL SELECT statement. </p> <p> The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate <code>NextToken</code> so the client can access the next page of results. </p> <p> For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. </p>',
  operationId: 'GET_Select',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('Select')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['Select'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
      SelectExpression: z
        .string()
        .openapi({
          param: {
            name: 'SelectExpression',
            in: 'query',
            required: true,
            description: 'The expression used to query the domain.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'A string informing Amazon SimpleDB where to start the next list of <code>ItemNames</code>.',
            schema: { type: 'string' },
          },
        }),
      ConsistentRead: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'ConsistentRead',
            in: 'query',
            required: false,
            description:
              'Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If <code>true</code>, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: SelectResultSchema } } },
    400: {
      description: 'TooManyRequestedAttributes',
      content: { 'text/xml': { schema: TooManyRequestedAttributesSchema } },
    },
    408: {
      description: 'RequestTimeout',
      content: { 'text/xml': { schema: RequestTimeoutSchema } },
    },
  },
})

export const postActionSelectRoute = createRoute({
  method: 'post',
  path: '/#Action=Select',
  description:
    '<p> The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that match the select expression. <code>Select</code> is similar to the standard SQL SELECT statement. </p> <p> The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate <code>NextToken</code> so the client can access the next page of results. </p> <p> For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. </p>',
  operationId: 'POST_Select',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('Select')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['Select'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2009-04-15')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2009-04-15'] },
          },
        }),
      Signature: SignatureParamsSchema,
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
    body: { content: { 'text/xml': { schema: SelectRequestSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: SelectResultSchema } } },
    400: {
      description: 'TooManyRequestedAttributes',
      content: { 'text/xml': { schema: TooManyRequestedAttributesSchema } },
    },
    408: {
      description: 'RequestTimeout',
      content: { 'text/xml': { schema: RequestTimeoutSchema } },
    },
  },
})
