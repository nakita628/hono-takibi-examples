import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const AttributeNameListSchema = z.array(StringSchema).openapi('AttributeNameList')

const ServiceSchema = z
  .object({
    ServiceCode: StringSchema.and(
      z.any().openapi({ description: 'The code for the Amazon Web Services service.' }),
    ),
    AttributeNames: AttributeNameListSchema.and(
      z.any().openapi({ description: 'The attributes that are available for this service.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServiceCode'],
    description:
      'The metadata for a service, such as the service code and available attribute names.',
  })
  .openapi('Service')

const ServiceListSchema = z.array(ServiceSchema).openapi('ServiceList')

const DescribeServicesResponseSchema = z
  .object({
    Services: ServiceListSchema.and(
      z
        .any()
        .openapi({
          description: 'The service metadata for the service or services in the response.',
        }),
    ).exactOptional(),
    FormatVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The format version of the response. For example, <code>aws_v1</code>.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token for the next set of retrievable results.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      FormatVersion: 'aws_v1',
      NextToken: 'abcdefg123',
      Services: [
        {
          AttributeNames: [
            'volumeType',
            'maxIopsvolume',
            'instanceCapacity10xlarge',
            'locationType',
            'operation',
          ],
          ServiceCode: 'AmazonEC2',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeServicesResponse')

const BoxedIntegerSchema = z.int().min(1).max(100).openapi('BoxedInteger')

const DescribeServicesRequestSchema = z
  .object({
    ServiceCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for the service whose information you want to retrieve, such as <code>AmazonEC2</code>. You can use the <code>ServiceCode</code> to filter the results in a <code>GetProducts</code> call. To retrieve a list of all services, leave this blank.',
        }),
    ).exactOptional(),
    FormatVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format version that you want the response to be in.</p> <p>Valid values are: <code>aws_v1</code> </p>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token that indicates the next set of results that you want to retrieve.',
        }),
    ).exactOptional(),
    MaxResults: BoxedIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results that you want returned in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeServicesRequest', required: [] })
  .openapi('DescribeServicesRequest')

const InternalErrorExceptionSchema = z.any().openapi('InternalErrorException')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ExpiredNextTokenExceptionSchema = z.any().openapi('ExpiredNextTokenException')

const AttributeValueSchema = z
  .object({
    Value: StringSchema.and(
      z.any().openapi({ description: 'The specific value of an <code>attributeName</code>.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The values of a given attribute, such as <code>Throughput Optimized HDD</code> or <code>Provisioned IOPS</code> for the <code>Amazon EC2</code> <code>volumeType</code> attribute.',
    required: [],
  })
  .openapi('AttributeValue')

const AttributeValueListSchema = z.array(AttributeValueSchema).openapi('AttributeValueList')

const GetAttributeValuesResponseSchema = z
  .object({
    AttributeValues: AttributeValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of values for an attribute. For example, <code>Throughput Optimized HDD</code> and <code>Provisioned IOPS</code> are two available values for the <code>AmazonEC2</code> <code>volumeType</code>.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      AttributeValues: [{ Value: 'Throughput Optimized HDD' }, { Value: 'Provisioned IOPS' }],
      NextToken:
        'GpgauEXAMPLEezucl5LV0w==:7GzYJ0nw0DBTJ2J66EoTIIynE6O1uXwQtTRqioJzQadBnDVgHPzI1en4BUQnPCLpzeBk9RQQAWaFieA4+DapFAGLgk+Z/9/cTw9GldnPOHN98+FdmJP7wKU3QQpQ8MQr5KOeBkIsAqvAQYdL0DkL7tHwPtE5iCEByAmg9gcC/yBU1vAOsf7R3VaNN4M5jMDv3woSWqASSIlBVB6tgW78YL22KhssoItM/jWW+aP6Jqtq4mldxp/ct6DWAl+xLFwHU/CbketimPPXyqHF3/UXDw==',
    },
    required: [],
  })
  .openapi('GetAttributeValuesResponse')

const GetAttributeValuesRequestSchema = z
  .object({
    ServiceCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service code for the service whose attributes you want to retrieve. For example, if you want the retrieve an EC2 attribute, use <code>AmazonEC2</code>.',
        }),
    ),
    AttributeName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the attribute that you want to retrieve the values for, such as <code>volumeType</code>.',
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token that indicates the next set of results that you want to retrieve.',
        }),
    ).exactOptional(),
    MaxResults: BoxedIntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in response.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceCode', 'AttributeName'], title: 'GetAttributeValuesRequest' })
  .openapi('GetAttributeValuesRequest')

const GetPriceListFileUrlResponseSchema = z
  .object({
    Url: StringSchema.and(
      z.any().openapi({ description: 'The URL to download your Price List file from. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPriceListFileUrlResponse')

const PriceListArnSchema = z
  .string()
  .regex(/^arn:.+:pricing::.*:price-list\/.{1,255}\/.{1,32}\/[A-Z]{3}\/[0-9]{14}\/[^\/]*$/)
  .min(18)
  .max(2048)
  .openapi('PriceListArn')

const FileFormatSchema = z.string().min(1).max(255).openapi('FileFormat')

const GetPriceListFileUrlRequestSchema = z
  .object({
    PriceListArn: PriceListArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier that maps to where your Price List files are located. <code>PriceListArn</code> can be obtained from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html"> <code>ListPriceLists</code> </a> response. ',
        }),
    ),
    FileFormat: FileFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format that you want to retrieve your Price List files in. The <code>FileFormat</code> can be obtained from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html"> <code>ListPriceLists</code> </a> response. ',
        }),
    ),
  })
  .openapi({ required: ['PriceListArn', 'FileFormat'], title: 'GetPriceListFileUrlRequest' })
  .openapi('GetPriceListFileUrlRequest')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const PriceListJsonItemSchema = z.string().openapi('PriceListJsonItem')

const PriceListJsonItemsSchema = z.array(PriceListJsonItemSchema).openapi('PriceListJsonItems')

const GetProductsResponseSchema = z
  .object({
    FormatVersion: StringSchema.and(
      z.any().openapi({ description: 'The format version of the response. For example, aws_v1.' }),
    ).exactOptional(),
    PriceList: PriceListJsonItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of products that match your filters. The list contains both the product metadata and the price information.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetProductsResponse')

const FilterTypeSchema = z.literal('TERM_MATCH').openapi('FilterType')

const FilterSchema = z
  .object({
    Type: FilterTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of filter that you want to use.</p> <p>Valid values are: <code>TERM_MATCH</code>. <code>TERM_MATCH</code> returns only products that match both the given filter field and the given value.</p>',
        }),
    ),
    Field: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The product metadata field that you want to filter on. You can filter by just the service code to see all products for a specific service, filter by just the attribute name to see a specific attribute for multiple services, or use both a service code and an attribute name to retrieve only products that match both fields.</p> <p>Valid values include: <code>ServiceCode</code>, and all attribute names</p> <p>For example, you can filter by the <code>AmazonEC2</code> service code and the <code>volumeType</code> attribute name to get the prices for only Amazon EC2 volumes.</p>',
        }),
    ),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The service code or attribute value that you want to filter by. If you're filtering by service code this is the actual service code, such as <code>AmazonEC2</code>. If you're filtering by attribute name, this is the attribute value that you want the returned products to match, such as a <code>Provisioned IOPS</code> volume.",
        }),
    ),
  })
  .openapi({
    required: ['Type', 'Field', 'Value'],
    description: 'The constraints that you want all returned products to match.',
  })
  .openapi('Filter')

const FiltersSchema = z.array(FilterSchema).openapi('Filters')

const GetProductsRequestSchema = z
  .object({
    ServiceCode: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The code for the service whose products you want to retrieve. ' }),
    ),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of filters that limit the returned products. only products that match all filters are returned.',
        }),
    ).exactOptional(),
    FormatVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format version that you want the response to be in.</p> <p>Valid values are: <code>aws_v1</code> </p>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token that indicates the next set of results that you want to retrieve.',
        }),
    ).exactOptional(),
    MaxResults: BoxedIntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in the response.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceCode'], title: 'GetProductsRequest' })
  .openapi('GetProductsRequest')

const RegionCodeSchema = z.string().min(1).max(255).openapi('RegionCode')

const CurrencyCodeSchema = z
  .string()
  .regex(/^[A-Z]{3}$/)
  .openapi('CurrencyCode')

const FileFormatsSchema = z.array(FileFormatSchema).openapi('FileFormats')

const PriceListSchema = z
  .object({
    PriceListArn: PriceListArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier that maps to where your Price List files are located. <code>PriceListArn</code> can be obtained from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html"> <code>ListPriceList</code> </a> response. ',
        }),
    ).exactOptional(),
    RegionCode: RegionCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is used to filter the Price List by Amazon Web Services Region. For example, to get the price list only for the <code>US East (N. Virginia)</code> Region, use <code>us-east-1</code>. If nothing is specified, you retrieve price lists for all applicable Regions. The available <code>RegionCode</code> list can be retrieved from <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetAttributeValues.html"> <code>GetAttributeValues</code> </a> API. ',
        }),
    ).exactOptional(),
    CurrencyCode: CurrencyCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The three alphabetical character ISO-4217 currency code the Price List files are denominated in. ',
        }),
    ).exactOptional(),
    FileFormats: FileFormatsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format you want to retrieve your Price List files. The <code>FileFormat</code> can be obtained from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html"> <code>ListPriceList</code> </a> response. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This is the type of price list references that match your request. </p>',
    required: [],
  })
  .openapi('PriceList')

const PriceListsSchema = z.array(PriceListSchema).openapi('PriceLists')

const ListPriceListsResponseSchema = z
  .object({
    PriceLists: PriceListsSchema.and(
      z
        .any()
        .openapi({ description: 'The type of price list references that match your request. ' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPriceListsResponse')

const ServiceCodeSchema = z.string().min(1).max(32).openapi('ServiceCode')

const EffectiveDateSchema = z.iso.datetime({ offset: true }).openapi('EffectiveDate')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListPriceListsRequestSchema = z
  .object({
    ServiceCode: ServiceCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The service code or the Savings Plan service code for the attributes that you want to retrieve. For example, to get the list of applicable Amazon EC2 price lists, use <code>AmazonEC2</code>. For a full list of service codes containing On-Demand and Reserved Instance (RI) pricing, use the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_DescribeServices.html#awscostmanagement-pricing_DescribeServices-request-FormatVersion"> <code>DescribeServices</code> </a> API.</p> <p>To retrieve the Compute Savings Plan price lists, use <code>ComputeSavingsPlans</code>. To retrieve Machine Learning Savings Plans price lists, use <code>MachineLearningSavingsPlans</code>. </p>',
        }),
    ),
    EffectiveDate: EffectiveDateSchema.and(
      z
        .any()
        .openapi({ description: 'The date that the Price List file prices are effective from. ' }),
    ),
    RegionCode: RegionCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is used to filter the Price List by Amazon Web Services Region. For example, to get the price list only for the <code>US East (N. Virginia)</code> Region, use <code>us-east-1</code>. If nothing is specified, you retrieve price lists for all applicable Regions. The available <code>RegionCode</code> list can be retrieved from <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetAttributeValues.html"> <code>GetAttributeValues</code> </a> API.',
        }),
    ).exactOptional(),
    CurrencyCode: CurrencyCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The three alphabetical character ISO-4217 currency code that the Price List files are denominated in. ',
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token that indicates the next set of results that you want to retrieve. ',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in the response. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServiceCode', 'EffectiveDate', 'CurrencyCode'],
    title: 'ListPriceListsRequest',
  })
  .openapi('ListPriceListsRequest')

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

export const postXAmzTargetAWSPriceListServiceDescribeServicesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPriceListService.DescribeServices',
  description:
    'Returns the metadata for one service or a list of the metadata for all services. Use this without a service code to get the service codes for all services. Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to that service, such as the attribute names available for that service. For example, some of the attribute names available for EC2 are <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>, <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.',
  operationId: 'DescribeServices',
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
        .literal('AWSPriceListService.DescribeServices')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSPriceListService.DescribeServices'] },
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
      content: { 'application/json': { schema: DescribeServicesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeServicesResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'ExpiredNextTokenException',
      content: { 'application/json': { schema: ExpiredNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPriceListServiceGetAttributeValuesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPriceListService.GetAttributeValues',
  description:
    'Returns a list of attribute values. Attributes are similar to the details in a Price List API offer file. For a list of available attributes, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a> in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">Billing and Cost Management User Guide</a>.',
  operationId: 'GetAttributeValues',
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
        .literal('AWSPriceListService.GetAttributeValues')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSPriceListService.GetAttributeValues'] },
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
      content: { 'application/json': { schema: GetAttributeValuesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAttributeValuesResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'ExpiredNextTokenException',
      content: { 'application/json': { schema: ExpiredNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPriceListServiceGetPriceListFileUrlRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl',
  description:
    '<p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This returns the URL that you can retrieve your Price List file from. This URL is based on the <code>PriceListArn</code> and <code>FileFormat</code> that you retrieve from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html"> <code>ListPriceLists</code> </a> response. </p>',
  operationId: 'GetPriceListFileUrl',
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
        .literal('AWSPriceListService.GetPriceListFileUrl')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSPriceListService.GetPriceListFileUrl'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetPriceListFileUrlRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPriceListFileUrlResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPriceListServiceGetProductsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPriceListService.GetProducts',
  description: 'Returns a list of all products that match the filter criteria.',
  operationId: 'GetProducts',
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
        .literal('AWSPriceListService.GetProducts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSPriceListService.GetProducts'] },
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
    body: { content: { 'application/json': { schema: GetProductsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetProductsResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'ExpiredNextTokenException',
      content: { 'application/json': { schema: ExpiredNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPriceListServiceListPriceListsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPriceListService.ListPriceLists',
  description:
    '<p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This returns a list of Price List references that the requester if authorized to view, given a <code>ServiceCode</code>, <code>CurrencyCode</code>, and an <code>EffectiveDate</code>. Use without a <code>RegionCode</code> filter to list Price List references from all available Amazon Web Services Regions. Use with a <code>RegionCode</code> filter to get the Price List reference that\'s specific to a specific Amazon Web Services Region. You can use the <code>PriceListArn</code> from the response to get your preferred Price List files through the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetPriceListFileUrl.html"> <code>GetPriceListFileUrl</code> </a> API.</p>',
  operationId: 'ListPriceLists',
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
        .literal('AWSPriceListService.ListPriceLists')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSPriceListService.ListPriceLists'] },
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
      content: { 'application/json': { schema: ListPriceListsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPriceListsResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'ExpiredNextTokenException',
      content: { 'application/json': { schema: ExpiredNextTokenExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})
