import { createRoute, z } from '@hono/zod-openapi'

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const CustomerIdentifierSchema = z
  .string()
  .regex(/[\s\S]+/)
  .min(1)
  .max(255)
  .openapi('CustomerIdentifier')

const UsageDimensionSchema = z
  .string()
  .regex(/[\s\S]+/)
  .min(1)
  .max(255)
  .openapi('UsageDimension')

const UsageQuantitySchema = z.int().min(0).max(2147483647).openapi('UsageQuantity')

const AllocatedUsageQuantitySchema = z
  .int()
  .min(0)
  .max(2147483647)
  .openapi('AllocatedUsageQuantity')

const TagKeySchema = z
  .string()
  .regex(/^[a-zA-Z0-9+ -=._:\/@]+$/)
  .min(1)
  .max(100)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^[a-zA-Z0-9+ -=._:\/@]+$/)
  .min(1)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that makes up a <code>tag</code>. A <code>key</code> is a label that acts like a category for the specific tag values.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that makes up a <code>tag</code>. A <code>value</code> acts as a descriptor within a tag category (key). The value can be empty or null.',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'Metadata assigned to an allocation. Each tag is made up of a <code>key</code> and a <code>value</code>.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(1).max(5).openapi('TagList')

const UsageAllocationSchema = z
  .object({
    AllocatedUsageQuantity: AllocatedUsageQuantitySchema.and(
      z.any().openapi({ description: 'The total quantity allocated to this bucket of usage.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The set of tags that define the bucket of usage. For the bucket of items with no tags, this parameter can be left out.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AllocatedUsageQuantity'],
    description:
      '<p>Usage allocations allow you to split usage into buckets by tags.</p> <p>Each <code>UsageAllocation</code> indicates the usage quantity for a specific set of tags.</p>',
  })
  .openapi('UsageAllocation')

const UsageAllocationsSchema = z
  .array(UsageAllocationSchema)
  .min(1)
  .max(2500)
  .openapi('UsageAllocations')

const UsageRecordSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Timestamp, in UTC, for which the usage is being reported.</p> <p>Your application can meter usage for up to one hour in the past. Make sure the <code>timestamp</code> value is not before the start of the software usage.</p>',
        }),
    ),
    CustomerIdentifier: CustomerIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>CustomerIdentifier</code> is obtained through the <code>ResolveCustomer</code> operation and represents an individual buyer in your application.',
        }),
    ),
    Dimension: UsageDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            'During the process of registering a product on AWS Marketplace, dimensions are specified. These represent different units of value in your application.',
        }),
    ),
    Quantity: UsageQuantitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The quantity of usage consumed by the customer for the given dimension and time. Defaults to <code>0</code> if not specified.',
        }),
    ).exactOptional(),
    UsageAllocations: UsageAllocationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The set of <code>UsageAllocations</code> to submit. The sum of all <code>UsageAllocation</code> quantities must equal the Quantity of the <code>UsageRecord</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Timestamp', 'CustomerIdentifier', 'Dimension'],
    description:
      '<p>A <code>UsageRecord</code> indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same <code>UsageRecords</code> as input will be de-duplicated to prevent double charges.</p>',
  })
  .openapi('UsageRecord')

const StringSchema = z.string().openapi('String')

const UsageRecordResultStatusSchema = z
  .enum(['Success', 'CustomerNotSubscribed', 'DuplicateRecord'])
  .openapi('UsageRecordResultStatus')

const UsageRecordResultSchema = z
  .object({
    UsageRecord: UsageRecordSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>UsageRecord</code> that was part of the <code>BatchMeterUsage</code> request.',
        }),
    ).exactOptional(),
    MeteringRecordId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>MeteringRecordId</code> is a unique identifier for this metering event.',
        }),
    ).exactOptional(),
    Status: UsageRecordResultStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>UsageRecordResult</code> <code>Status</code> indicates the status of an individual <code>UsageRecord</code> processed by <code>BatchMeterUsage</code>.</p> <ul> <li> <p> <i>Success</i>- The <code>UsageRecord</code> was accepted and honored by <code>BatchMeterUsage</code>.</p> </li> <li> <p> <i>CustomerNotSubscribed</i>- The <code>CustomerIdentifier</code> specified is not able to use your product. The <code>UsageRecord</code> was not honored. There are three causes for this result:</p> <ul> <li> <p>The customer identifier is invalid.</p> </li> <li> <p>The customer identifier provided in the metering record does not have an active agreement or subscription with this product. Future <code>UsageRecords</code> for this customer will fail until the customer subscribes to your product.</p> </li> <li> <p>The customer's AWS account was suspended.</p> </li> </ul> </li> <li> <p> <i>DuplicateRecord</i>- Indicates that the <code>UsageRecord</code> was invalid and not honored. A previously metered <code>UsageRecord</code> had the same customer, dimension, and time, but a different quantity.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A <code>UsageRecordResult</code> indicates the status of a given <code>UsageRecord</code> processed by <code>BatchMeterUsage</code>.',
    required: [],
  })
  .openapi('UsageRecordResult')

const UsageRecordResultListSchema = z
  .array(UsageRecordResultSchema)
  .openapi('UsageRecordResultList')

const UsageRecordListSchema = z.array(UsageRecordSchema).min(0).max(25).openapi('UsageRecordList')

const BatchMeterUsageResultSchema = z
  .object({
    Results: UsageRecordResultListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains all <code>UsageRecords</code> processed by <code>BatchMeterUsage</code>. These records were either honored by AWS Marketplace Metering Service or were invalid. Invalid records should be fixed before being resubmitted.',
        }),
    ).exactOptional(),
    UnprocessedRecords: UsageRecordListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains all <code>UsageRecords</code> that were not processed by <code>BatchMeterUsage</code>. This is a list of <code>UsageRecords</code>. You can retry the failed request by making another <code>BatchMeterUsage</code> call with this list as input in the <code>BatchMeterUsageRequest</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the <code>UsageRecords</code> processed by <code>BatchMeterUsage</code> and any records that have failed due to transient error.',
    required: [],
  })
  .openapi('BatchMeterUsageResult')

const ProductCodeSchema = z
  .string()
  .regex(/^[-a-zA-Z0-9\/=:_.@]*$/)
  .min(1)
  .max(255)
  .openapi('ProductCode')

const BatchMeterUsageRequestSchema = z
  .object({
    UsageRecords: UsageRecordListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The set of <code>UsageRecords</code> to submit. <code>BatchMeterUsage</code> accepts up to 25 <code>UsageRecords</code> at a time.',
        }),
    ),
    ProductCode: ProductCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Product code is used to uniquely identify a product in AWS Marketplace. The product code should be the same as the one used during the publishing of a new product.',
        }),
    ),
  })
  .openapi({
    required: ['UsageRecords', 'ProductCode'],
    title: 'BatchMeterUsageRequest',
    description:
      'A <code>BatchMeterUsageRequest</code> contains <code>UsageRecords</code>, which indicate quantities of usage within your application.',
  })
  .openapi('BatchMeterUsageRequest')

const InternalServiceErrorExceptionSchema = z.any().openapi('InternalServiceErrorException')

const InvalidProductCodeExceptionSchema = z.any().openapi('InvalidProductCodeException')

const InvalidUsageDimensionExceptionSchema = z.any().openapi('InvalidUsageDimensionException')

const InvalidTagExceptionSchema = z.any().openapi('InvalidTagException')

const InvalidUsageAllocationsExceptionSchema = z.any().openapi('InvalidUsageAllocationsException')

const InvalidCustomerIdentifierExceptionSchema = z
  .any()
  .openapi('InvalidCustomerIdentifierException')

const TimestampOutOfBoundsExceptionSchema = z.any().openapi('TimestampOutOfBoundsException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const DisabledApiExceptionSchema = z.any().openapi('DisabledApiException')

const MeterUsageResultSchema = z
  .object({
    MeteringRecordId: StringSchema.and(
      z.any().openapi({ description: 'Metering record id.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MeterUsageResult')

const BooleanSchema = z.boolean().openapi('Boolean')

const MeterUsageRequestSchema = z
  .object({
    ProductCode: ProductCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Product code is used to uniquely identify a product in AWS Marketplace. The product code should be the same as the one used during the publishing of a new product.',
        }),
    ),
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Timestamp, in UTC, for which the usage is being reported. Your application can meter usage for up to one hour in the past. Make sure the <code>timestamp</code> value is not before the start of the software usage.',
        }),
    ),
    UsageDimension: UsageDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            'It will be one of the fcp dimension name provided during the publishing of the product.',
        }),
    ),
    UsageQuantity: UsageQuantitySchema.and(
      z
        .any()
        .openapi({
          description:
            'Consumption value for the hour. Defaults to <code>0</code> if not specified.',
        }),
    ).exactOptional(),
    DryRun: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Checks whether you have the permissions required for the action, but does not make the request. If you have the permissions, the request returns <code>DryRunOperation</code>; otherwise, it returns <code>UnauthorizedException</code>. Defaults to <code>false</code> if not specified.',
        }),
    ).exactOptional(),
    UsageAllocations: UsageAllocationsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The set of <code>UsageAllocations</code> to submit.</p> <p>The sum of all <code>UsageAllocation</code> quantities must equal the <code>UsageQuantity</code> of the <code>MeterUsage</code> request, and each <code>UsageAllocation</code> must have a unique set of tags (include no tags).</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProductCode', 'Timestamp', 'UsageDimension'], title: 'MeterUsageRequest' })
  .openapi('MeterUsageRequest')

const InvalidEndpointRegionExceptionSchema = z.any().openapi('InvalidEndpointRegionException')

const DuplicateRequestExceptionSchema = z.any().openapi('DuplicateRequestException')

const CustomerNotEntitledExceptionSchema = z.any().openapi('CustomerNotEntitledException')

const NonEmptyStringSchema = z
  .string()
  .regex(/[\s\S]+/)
  .openapi('NonEmptyString')

const RegisterUsageResultSchema = z
  .object({
    PublicKeyRotationTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({ description: '(Optional) Only included when public key version has expired' }),
    ).exactOptional(),
    Signature: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'JWT Token' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegisterUsageResult')

const VersionIntegerSchema = z.int().min(1).openapi('VersionInteger')

const NonceSchema = z
  .string()
  .regex(/[\s\S]*/)
  .max(255)
  .openapi('Nonce')

const RegisterUsageRequestSchema = z
  .object({
    ProductCode: ProductCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Product code is used to uniquely identify a product in AWS Marketplace. The product code should be the same as the one used during the publishing of a new product.',
        }),
    ),
    PublicKeyVersion: VersionIntegerSchema.and(
      z.any().openapi({ description: 'Public Key Version provided by AWS Marketplace' }),
    ),
    Nonce: NonceSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) To scope down the registration to a specific running software instance and guard against replay attacks.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProductCode', 'PublicKeyVersion'], title: 'RegisterUsageRequest' })
  .openapi('RegisterUsageRequest')

const InvalidRegionExceptionSchema = z.any().openapi('InvalidRegionException')

const InvalidPublicKeyVersionExceptionSchema = z.any().openapi('InvalidPublicKeyVersionException')

const PlatformNotSupportedExceptionSchema = z.any().openapi('PlatformNotSupportedException')

const CustomerAWSAccountIdSchema = z
  .string()
  .regex(/^[0-9]+$/)
  .min(1)
  .max(255)
  .openapi('CustomerAWSAccountId')

const ResolveCustomerResultSchema = z
  .object({
    CustomerIdentifier: CustomerIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>CustomerIdentifier</code> is used to identify an individual customer in your application. Calls to <code>BatchMeterUsage</code> require <code>CustomerIdentifiers</code> for each <code>UsageRecord</code>.',
        }),
    ).exactOptional(),
    ProductCode: ProductCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The product code is returned to confirm that the buyer is registering for your product. Subsequent <code>BatchMeterUsage</code> calls should be made using this product code.',
        }),
    ).exactOptional(),
    CustomerAWSAccountId: CustomerAWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>CustomerAWSAccountId</code> provides the AWS account ID associated with the <code>CustomerIdentifier</code> for the individual customer.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of the <code>ResolveCustomer</code> operation. Contains the <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.',
    required: [],
  })
  .openapi('ResolveCustomerResult')

const ResolveCustomerRequestSchema = z
  .object({
    RegistrationToken: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'When a buyer visits your website during the registration process, the buyer submits a registration token through the browser. The registration token is resolved to obtain a <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.',
        }),
    ),
  })
  .openapi({
    required: ['RegistrationToken'],
    title: 'ResolveCustomerRequest',
    description: 'Contains input to the <code>ResolveCustomer</code> operation.',
  })
  .openapi('ResolveCustomerRequest')

const InvalidTokenExceptionSchema = z.any().openapi('InvalidTokenException')

const ExpiredTokenExceptionSchema = z.any().openapi('ExpiredTokenException')

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

export const postXAmzTargetAWSMPMeteringServiceBatchMeterUsageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage',
  description:
    '<p> <code>BatchMeterUsage</code> is called from a SaaS application listed on AWS Marketplace to post metering records for a set of customers.</p> <p>For identical requests, the API is idempotent; requests can be retried with the same records or a subset of the input records.</p> <p>Every request to <code>BatchMeterUsage</code> is for one product. If you need to meter usage for multiple products, you must make multiple calls to <code>BatchMeterUsage</code>.</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p> <p> <code>BatchMeterUsage</code> can process up to 25 <code>UsageRecords</code> at a time.</p> <p>A <code>UsageRecord</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p> <code>BatchMeterUsage</code> returns a list of <code>UsageRecordResult</code> objects, showing the result for each <code>UsageRecord</code>, as well as a list of <code>UnprocessedRecords</code>, indicating errors in the service side that you should retry.</p> <p> <code>BatchMeterUsage</code> requests must be less than 1MB in size.</p> <note> <p>For an example of using <code>BatchMeterUsage</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-batchmeterusage-example"> BatchMeterUsage code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>',
  operationId: 'BatchMeterUsage',
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
        .literal('AWSMPMeteringService.BatchMeterUsage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMPMeteringService.BatchMeterUsage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchMeterUsageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchMeterUsageResultSchema } },
    },
    480: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidProductCodeException',
      content: { 'application/json': { schema: InvalidProductCodeExceptionSchema } },
    },
    482: {
      description: 'InvalidUsageDimensionException',
      content: { 'application/json': { schema: InvalidUsageDimensionExceptionSchema } },
    },
    483: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
    484: {
      description: 'InvalidUsageAllocationsException',
      content: { 'application/json': { schema: InvalidUsageAllocationsExceptionSchema } },
    },
    485: {
      description: 'InvalidCustomerIdentifierException',
      content: { 'application/json': { schema: InvalidCustomerIdentifierExceptionSchema } },
    },
    486: {
      description: 'TimestampOutOfBoundsException',
      content: { 'application/json': { schema: TimestampOutOfBoundsExceptionSchema } },
    },
    487: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    488: {
      description: 'DisabledApiException',
      content: { 'application/json': { schema: DisabledApiExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMPMeteringServiceMeterUsageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMPMeteringService.MeterUsage',
  description:
    "<p>API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID.</p> <p> <code>MeterUsage</code> is authenticated on the buyer's AWS account using credentials from the EC2 instance, ECS task, or EKS pod.</p> <p> <code>MeterUsage</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p>",
  operationId: 'MeterUsage',
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
        .literal('AWSMPMeteringService.MeterUsage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMPMeteringService.MeterUsage'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MeterUsageRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MeterUsageResultSchema } },
    },
    480: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidProductCodeException',
      content: { 'application/json': { schema: InvalidProductCodeExceptionSchema } },
    },
    482: {
      description: 'InvalidUsageDimensionException',
      content: { 'application/json': { schema: InvalidUsageDimensionExceptionSchema } },
    },
    483: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
    484: {
      description: 'InvalidUsageAllocationsException',
      content: { 'application/json': { schema: InvalidUsageAllocationsExceptionSchema } },
    },
    485: {
      description: 'InvalidEndpointRegionException',
      content: { 'application/json': { schema: InvalidEndpointRegionExceptionSchema } },
    },
    486: {
      description: 'TimestampOutOfBoundsException',
      content: { 'application/json': { schema: TimestampOutOfBoundsExceptionSchema } },
    },
    487: {
      description: 'DuplicateRequestException',
      content: { 'application/json': { schema: DuplicateRequestExceptionSchema } },
    },
    488: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    489: {
      description: 'CustomerNotEntitledException',
      content: { 'application/json': { schema: CustomerNotEntitledExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMPMeteringServiceRegisterUsageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMPMeteringService.RegisterUsage',
  description:
    "<p>Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the <code>RegisterUsage</code> operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call <code>RegisterUsage</code>, but you may choose to do so if you would like to receive usage data in your seller reports. The sections below explain the behavior of <code>RegisterUsage</code>. <code>RegisterUsage</code> performs two primary functions: metering and entitlement.</p> <ul> <li> <p> <i>Entitlement</i>: <code>RegisterUsage</code> allows you to verify that the customer running your paid software is subscribed to your product on AWS Marketplace, enabling you to guard against unauthorized use. Your container image that integrates with <code>RegisterUsage</code> is only required to guard against unauthorized use at container startup, as such a <code>CustomerNotSubscribedException</code> or <code>PlatformNotSupportedException</code> will only be thrown on the initial call to <code>RegisterUsage</code>. Subsequent calls from the same Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a <code>CustomerNotSubscribedException</code>, even if the customer unsubscribes while the Amazon ECS task or Amazon EKS pod is still running.</p> </li> <li> <p> <i>Metering</i>: <code>RegisterUsage</code> meters software use per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum of 1 minute of usage applies to tasks that are short lived. For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10 cluster nodes and the customer will be charged: (10 * hourly_rate). Metering for software use is automatically handled by the AWS Marketplace Metering Control Plane -- your software is not required to perform any metering specific actions, other than call <code>RegisterUsage</code> once for metering of software use to commence. The AWS Marketplace Metering Control Plane will also continue to bill customers for running ECS tasks and Amazon EKS pods, regardless of the customers subscription state, removing the need for your software to perform entitlement checks at runtime.</p> </li> </ul>",
  operationId: 'RegisterUsage',
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
        .literal('AWSMPMeteringService.RegisterUsage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMPMeteringService.RegisterUsage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterUsageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterUsageResultSchema } },
    },
    480: {
      description: 'InvalidProductCodeException',
      content: { 'application/json': { schema: InvalidProductCodeExceptionSchema } },
    },
    481: {
      description: 'InvalidRegionException',
      content: { 'application/json': { schema: InvalidRegionExceptionSchema } },
    },
    482: {
      description: 'InvalidPublicKeyVersionException',
      content: { 'application/json': { schema: InvalidPublicKeyVersionExceptionSchema } },
    },
    483: {
      description: 'PlatformNotSupportedException',
      content: { 'application/json': { schema: PlatformNotSupportedExceptionSchema } },
    },
    484: {
      description: 'CustomerNotEntitledException',
      content: { 'application/json': { schema: CustomerNotEntitledExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    487: {
      description: 'DisabledApiException',
      content: { 'application/json': { schema: DisabledApiExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMPMeteringServiceResolveCustomerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMPMeteringService.ResolveCustomer',
  description:
    '<p> <code>ResolveCustomer</code> is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.</p> <note> <p>The API needs to called from the seller account id used to publish the SaaS application to successfully resolve the token.</p> <p>For an example of using <code>ResolveCustomer</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-resolvecustomer-example"> ResolveCustomer code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>',
  operationId: 'ResolveCustomer',
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
        .literal('AWSMPMeteringService.ResolveCustomer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMPMeteringService.ResolveCustomer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResolveCustomerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResolveCustomerResultSchema } },
    },
    480: {
      description: 'InvalidTokenException',
      content: { 'application/json': { schema: InvalidTokenExceptionSchema } },
    },
    481: {
      description: 'ExpiredTokenException',
      content: { 'application/json': { schema: ExpiredTokenExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'DisabledApiException',
      content: { 'application/json': { schema: DisabledApiExceptionSchema } },
    },
  },
})
