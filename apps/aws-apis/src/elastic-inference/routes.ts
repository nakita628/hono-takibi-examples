import { createRoute, z } from '@hono/zod-openapi'

const AcceleratorTypeNameSchema = z
  .string()
  .regex(/^\S+$/)
  .min(1)
  .max(256)
  .openapi('AcceleratorTypeName')

const LocationTypeSchema = z
  .enum(['region', 'availability-zone', 'availability-zone-id'])
  .openapi('LocationType')

const LocationSchema = z.string().min(1).max(256).openapi('Location')

const AcceleratorTypeOfferingSchema = z
  .object({
    acceleratorType: AcceleratorTypeNameSchema.and(
      z.any().openapi({ description: ' The name of the Elastic Inference Accelerator type. ' }),
    ).exactOptional(),
    locationType: LocationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The location type for the offering. It can assume the following values: region: defines that the offering is at the regional level. availability-zone: defines that the offering is at the availability zone level. availability-zone-id: defines that the offering is at the availability zone level, defined by the availability zone id. ',
        }),
    ).exactOptional(),
    location: LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The location for the offering. It will return either the region, availability zone or availability zone id for the offering depending on the locationType value. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The offering for an Elastic Inference Accelerator type. ',
    required: [],
  })
  .openapi('AcceleratorTypeOffering')

const AcceleratorTypeOfferingListSchema = z
  .array(AcceleratorTypeOfferingSchema)
  .min(0)
  .max(100)
  .openapi('AcceleratorTypeOfferingList')

const DescribeAcceleratorOfferingsResponseSchema = z
  .object({
    acceleratorTypeOfferings: AcceleratorTypeOfferingListSchema.and(
      z
        .any()
        .openapi({
          description: ' The list of accelerator type offerings for a specific location. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAcceleratorOfferingsResponse')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const IntegerSchema = z.int().openapi('Integer')

const MemoryInfoSchema = z
  .object({
    sizeInMiB: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: ' The size in mebibytes of the Elastic Inference Accelerator type. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The memory information of an Elastic Inference Accelerator type. ',
    required: [],
  })
  .openapi('MemoryInfo')

const KeySchema = z.string().regex(/^\S+$/).min(1).max(256).openapi('Key')

const ValueSchema = z.int().openapi('Value')

const KeyValuePairSchema = z
  .object({
    key: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            ' The throughput value of the Elastic Inference Accelerator type. It can assume the following values: TFLOPS16bit: the throughput expressed in 16bit TeraFLOPS. TFLOPS32bit: the throughput expressed in 32bit TeraFLOPS. ',
        }),
    ).exactOptional(),
    value: ValueSchema.and(
      z
        .any()
        .openapi({
          description: ' The throughput value of the Elastic Inference Accelerator type. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' A throughput entry for an Elastic Inference Accelerator type. ',
    required: [],
  })
  .openapi('KeyValuePair')

const ThroughputInfoListSchema = z
  .array(KeyValuePairSchema)
  .min(0)
  .max(100)
  .openapi('ThroughputInfoList')

const AcceleratorTypeSchema = z
  .object({
    acceleratorTypeName: AcceleratorTypeNameSchema.and(
      z.any().openapi({ description: ' The name of the Elastic Inference Accelerator type. ' }),
    ).exactOptional(),
    memoryInfo: MemoryInfoSchema.and(
      z
        .any()
        .openapi({
          description: ' The memory information of the Elastic Inference Accelerator type. ',
        }),
    ).exactOptional(),
    throughputInfo: ThroughputInfoListSchema.and(
      z
        .any()
        .openapi({
          description: ' The throughput information of the Elastic Inference Accelerator type. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' The details of an Elastic Inference Accelerator type. ', required: [] })
  .openapi('AcceleratorType')

const AcceleratorTypeListSchema = z
  .array(AcceleratorTypeSchema)
  .min(0)
  .max(100)
  .openapi('AcceleratorTypeList')

const DescribeAcceleratorTypesResponseSchema = z
  .object({
    acceleratorTypes: AcceleratorTypeListSchema.and(
      z.any().openapi({ description: ' The available accelerator types. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAcceleratorTypesResponse')

const AcceleratorHealthStatusSchema = z.string().min(1).max(256).openapi('AcceleratorHealthStatus')

const ElasticInferenceAcceleratorHealthSchema = z
  .object({
    status: AcceleratorHealthStatusSchema.and(
      z.any().openapi({ description: ' The health status of the Elastic Inference Accelerator. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The health details of an Elastic Inference Accelerator. ',
    required: [],
  })
  .openapi('ElasticInferenceAcceleratorHealth')

const AcceleratorIdSchema = z
  .string()
  .regex(/^eia-[0-9a-f]+$/)
  .min(1)
  .max(256)
  .openapi('AcceleratorId')

const AvailabilityZoneSchema = z.string().min(1).max(256).openapi('AvailabilityZone')

const ResourceArnSchema = z.string().min(1).max(1283).openapi('ResourceArn')

const ElasticInferenceAcceleratorSchema = z
  .object({
    acceleratorHealth: ElasticInferenceAcceleratorHealthSchema.and(
      z.any().openapi({ description: ' The health of the Elastic Inference Accelerator. ' }),
    ).exactOptional(),
    acceleratorType: AcceleratorTypeNameSchema.and(
      z.any().openapi({ description: ' The type of the Elastic Inference Accelerator. ' }),
    ).exactOptional(),
    acceleratorId: AcceleratorIdSchema.and(
      z.any().openapi({ description: ' The ID of the Elastic Inference Accelerator. ' }),
    ).exactOptional(),
    availabilityZone: AvailabilityZoneSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The availability zone where the Elastic Inference Accelerator is present. ',
        }),
    ).exactOptional(),
    attachedResource: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of the resource that the Elastic Inference Accelerator is attached to. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' The details of an Elastic Inference Accelerator. ', required: [] })
  .openapi('ElasticInferenceAccelerator')

const ElasticInferenceAcceleratorSetSchema = z
  .array(ElasticInferenceAcceleratorSchema)
  .openapi('ElasticInferenceAcceleratorSet')

const NextTokenSchema = z
  .string()
  .regex(/^[A-Za-z0-9+\/]+={0,2}$/)
  .min(1)
  .max(2048)
  .openapi('NextToken')

const DescribeAcceleratorsResponseSchema = z
  .object({
    acceleratorSet: ElasticInferenceAcceleratorSetSchema.and(
      z.any().openapi({ description: ' The details of the Elastic Inference Accelerators. ' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A token to specify where to start paginating. This is the NextToken from a previously truncated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAcceleratorsResponse')

const FilterNameSchema = z.string().regex(/^\S+$/).min(1).max(128).openapi('FilterName')

const StringSchema = z.string().regex(/^.*$/).max(500000).openapi('String')

const ValueStringListSchema = z.array(StringSchema).min(0).max(100).openapi('ValueStringList')

const FilterSchema = z
  .object({
    name: FilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The filter name for the Elastic Inference Accelerator list. It can assume the following values: accelerator-type: the type of Elastic Inference Accelerator to filter for. instance-id: an EC2 instance id to filter for. ',
        }),
    ).exactOptional(),
    values: ValueStringListSchema.and(
      z
        .any()
        .openapi({
          description: ' The values for the filter of the Elastic Inference Accelerator list. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' A filter expression for the Elastic Inference Accelerator list. ',
    required: [],
  })
  .openapi('Filter')

const TagValueSchema = z.string().regex(/.*/).max(256).openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const ListTagsForResourceResultSchema = z
  .object({
    tags: TagMapSchema.and(
      z.any().openapi({ description: ' The tags of the Elastic Inference Accelerator. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResult')

const TagResourceResultSchema = z.object({}).openapi('TagResourceResult')

const UntagResourceResultSchema = z.object({}).openapi('UntagResourceResult')

const TagKeySchema = z.string().regex(/^\S$/).min(1).max(128).openapi('TagKey')

const AcceleratorIdListSchema = z
  .array(AcceleratorIdSchema)
  .min(0)
  .max(1000)
  .openapi('AcceleratorIdList')

const AcceleratorTypeNameListSchema = z
  .array(AcceleratorTypeNameSchema)
  .min(0)
  .max(100)
  .openapi('AcceleratorTypeNameList')

const DescribeAcceleratorOfferingsRequestSchema = z
  .object({
    locationType: LocationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The location type that you want to describe accelerator type offerings for. It can assume the following values: region: will return the accelerator type offering at the regional level. availability-zone: will return the accelerator type offering at the availability zone level. availability-zone-id: will return the accelerator type offering at the availability zone level returning the availability zone id. ',
        }),
    ),
    acceleratorTypes: AcceleratorTypeNameListSchema.and(
      z.any().openapi({ description: ' The list of accelerator types to describe. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['locationType'], title: 'DescribeAcceleratorOfferingsRequest' })
  .openapi('DescribeAcceleratorOfferingsRequest')

const DescribeAcceleratorTypesRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAcceleratorTypesRequest' })
  .openapi('DescribeAcceleratorTypesRequest')

const FilterListSchema = z.array(FilterSchema).min(0).max(100).openapi('FilterList')

const MaxResultsSchema = z.int().min(0).max(100).openapi('MaxResults')

const DescribeAcceleratorsRequestSchema = z
  .object({
    acceleratorIds: AcceleratorIdListSchema.and(
      z.any().openapi({ description: ' The IDs of the accelerators to describe. ' }),
    ).exactOptional(),
    filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' One or more filters. Filter names and values are case-sensitive. Valid filter names are: accelerator-types: can provide a list of accelerator type names to filter for. instance-id: can provide a list of EC2 instance ids to filter for. ',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            " The total number of items to return in the command's output. If the total number of items available is more than the value specified, a NextToken is provided in the command's output. To resume pagination, provide the NextToken value in the starting-token argument of a subsequent command. Do not use the NextToken response element directly outside of the AWS CLI. ",
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A token to specify where to start paginating. This is the NextToken from a previously truncated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeAcceleratorsRequest', required: [] })
  .openapi('DescribeAcceleratorsRequest')

const ResourceARNSchema = z
  .string()
  .regex(
    /^arn:aws[^\s:]*:elastic-inference:[^\s:]+:\d{12}:elastic-inference-accelerator\/eia-[0-9a-f]+$/,
  )
  .min(1)
  .max(1011)
  .openapi('ResourceARN')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(
      z.any().openapi({ description: ' The tags to add to the Elastic Inference Accelerator. ' }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

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

export const postDescribeAcceleratorOfferingsRoute = createRoute({
  method: 'post',
  path: '/describe-accelerator-offerings',
  description:
    '<p> Describes the locations in which a given accelerator type or set of types is present in a given region. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>',
  operationId: 'DescribeAcceleratorOfferings',
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
              locationType: z
                .enum(['region', 'availability-zone', 'availability-zone-id'])
                .openapi({
                  description:
                    ' The location type that you want to describe accelerator type offerings for. It can assume the following values: region: will return the accelerator type offering at the regional level. availability-zone: will return the accelerator type offering at the availability zone level. availability-zone-id: will return the accelerator type offering at the availability zone level returning the availability zone id. ',
                }),
              acceleratorTypes: z
                .array(AcceleratorTypeNameSchema)
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({ description: ' The list of accelerator types to describe. ' }),
            })
            .openapi({ required: ['locationType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAcceleratorOfferingsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getDescribeAcceleratorTypesRoute = createRoute({
  method: 'get',
  path: '/describe-accelerator-types',
  description:
    '<p> Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>',
  operationId: 'DescribeAcceleratorTypes',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAcceleratorTypesResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDescribeAcceleratorsRoute = createRoute({
  method: 'post',
  path: '/describe-accelerators',
  description:
    '<p> Describes information over a provided set of accelerators belonging to an account. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>',
  operationId: 'DescribeAccelerators',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              acceleratorIds: z
                .array(AcceleratorIdSchema)
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The IDs of the accelerators to describe. ' }),
              filters: z
                .array(FilterSchema)
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    ' One or more filters. Filter names and values are case-sensitive. Valid filter names are: accelerator-types: can provide a list of accelerator type names to filter for. instance-id: can provide a list of EC2 instance ids to filter for. ',
                }),
              maxResults: z
                .int()
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    " The total number of items to return in the command's output. If the total number of items available is more than the value specified, a NextToken is provided in the command's output. To resume pagination, provide the NextToken value in the starting-token argument of a subsequent command. Do not use the NextToken response element directly outside of the AWS CLI. ",
                }),
              nextToken: z
                .string()
                .regex(/^[A-Za-z0-9+\/]+={0,2}$/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    ' A token to specify where to start paginating. This is the NextToken from a previously truncated response. ',
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
      content: { 'application/json': { schema: DescribeAcceleratorsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description:
    '<p> Returns all tags of an Elastic Inference Accelerator. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>',
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
      resourceArn: z
        .string()
        .regex(
          /^arn:aws[^\s:]*:elastic-inference:[^\s:]+:\d{12}:elastic-inference-accelerator\/eia-[0-9a-f]+$/,
        )
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: ' The ARN of the Elastic Inference Accelerator to list the tags for. ',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^\\s:]*:elastic-inference:[^\\s:]+:\\d{12}:elastic-inference-accelerator/eia-[0-9a-f]+$',
              minLength: 1,
              maxLength: 1011,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    '<p> Adds the specified tags to an Elastic Inference Accelerator. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>',
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
      resourceArn: z
        .string()
        .regex(
          /^arn:aws[^\s:]*:elastic-inference:[^\s:]+:\d{12}:elastic-inference-accelerator\/eia-[0-9a-f]+$/,
        )
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: ' The ARN of the Elastic Inference Accelerator to tag. ',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^\\s:]*:elastic-inference:[^\\s:]+:\\d{12}:elastic-inference-accelerator/eia-[0-9a-f]+$',
              minLength: 1,
              maxLength: 1011,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description: ' The tags to add to the Elastic Inference Accelerator. ',
                }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description:
    '<p> Removes the specified tags from an Elastic Inference Accelerator. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>',
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
      resourceArn: z
        .string()
        .regex(
          /^arn:aws[^\s:]*:elastic-inference:[^\s:]+:\d{12}:elastic-inference-accelerator\/eia-[0-9a-f]+$/,
        )
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: ' The ARN of the Elastic Inference Accelerator to untag. ',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^\\s:]*:elastic-inference:[^\\s:]+:\\d{12}:elastic-inference-accelerator/eia-[0-9a-f]+$',
              minLength: 1,
              maxLength: 1011,
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: ' The list of tags to remove from the Elastic Inference Accelerator. ',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
