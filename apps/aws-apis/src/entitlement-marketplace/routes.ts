import { createRoute, z } from '@hono/zod-openapi'

const ProductCodeSchema = z.string().min(1).max(255).openapi('ProductCode')

const NonEmptyStringSchema = z.string().regex(/\S+/).openapi('NonEmptyString')

const IntegerSchema = z.int().openapi('Integer')

const DoubleSchema = z.float64().openapi('Double')

const BooleanSchema = z.boolean().openapi('Boolean')

const StringSchema = z.string().openapi('String')

const EntitlementValueSchema = z
  .object({
    IntegerValue: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IntegerValue field will be populated with an integer value when the entitlement is an integer type. Otherwise, the field will not be set.',
        }),
    ).exactOptional(),
    DoubleValue: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DoubleValue field will be populated with a double value when the entitlement is a double type. Otherwise, the field will not be set.',
        }),
    ).exactOptional(),
    BooleanValue: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The BooleanValue field will be populated with a boolean value when the entitlement is a boolean type. Otherwise, the field will not be set.',
        }),
    ).exactOptional(),
    StringValue: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The StringValue field will be populated with a string value when the entitlement is a string type. Otherwise, the field will not be set.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.',
    required: [],
  })
  .openapi('EntitlementValue')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const EntitlementSchema = z
  .object({
    ProductCode: ProductCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The product code for which the given entitlement applies. Product codes are provided by AWS Marketplace when the product listing is created.',
        }),
    ).exactOptional(),
    Dimension: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The dimension for which the given entitlement applies. Dimensions represent categories of capacity in a product and are specified when the product is listed in AWS Marketplace.',
        }),
    ).exactOptional(),
    CustomerIdentifier: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The customer identifier is a handle to each unique customer in an application. Customer identifiers are obtained through the ResolveCustomer operation in AWS Marketplace Metering Service.',
        }),
    ).exactOptional(),
    Value: EntitlementValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.',
        }),
    ).exactOptional(),
    ExpirationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The expiration date represents the minimum date through which this entitlement is expected to remain valid. For contractual products listed on AWS Marketplace, the expiration date is the date at which the customer will renew or cancel their contract. Customers who are opting to renew their contract will still have entitlements with an expiration date.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.',
    required: [],
  })
  .openapi('Entitlement')

const EntitlementListSchema = z.array(EntitlementSchema).min(0).openapi('EntitlementList')

const GetEntitlementsResultSchema = z
  .object({
    Entitlements: EntitlementListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The set of entitlements found through the GetEntitlements operation. If the result contains an empty set of entitlements, NextToken might still be present and should be used.',
        }),
    ).exactOptional(),
    NextToken: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For paginated results, use NextToken in subsequent calls to GetEntitlements. If the result contains an empty set of entitlements, NextToken might still be present and should be used.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The GetEntitlementsRequest contains results from the GetEntitlements operation.',
    required: [],
  })
  .openapi('GetEntitlementsResult')

const FilterValueSchema = z.string().openapi('FilterValue')

const FilterValueListSchema = z.array(FilterValueSchema).min(1).openapi('FilterValueList')

const GetEntitlementFiltersSchema = z
  .record(z.string(), FilterValueListSchema)
  .openapi('GetEntitlementFilters')

const GetEntitlementsRequestSchema = z
  .object({
    ProductCode: ProductCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Product code is used to uniquely identify a product in AWS Marketplace. The product code will be provided by AWS Marketplace when the product listing is created.',
        }),
    ),
    Filter: GetEntitlementFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filter is used to return entitlements for a specific customer or for a specific dimension. Filters are described as keys mapped to a lists of values. Filtered requests are <i>unioned</i> for each value in the value list, and then <i>intersected</i> for each filter key.',
        }),
    ).exactOptional(),
    NextToken: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For paginated calls to GetEntitlements, pass the NextToken from the previous GetEntitlementsResult.',
        }),
    ).exactOptional(),
    MaxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to retrieve from the GetEntitlements operation. For pagination, use the NextToken field in subsequent calls to GetEntitlements.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProductCode'],
    title: 'GetEntitlementsRequest',
    description:
      'The GetEntitlementsRequest contains parameters for the GetEntitlements operation.',
  })
  .openapi('GetEntitlementsRequest')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const InvalidParameterExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({ description: 'One or more parameters in your request was invalid.', required: [] })
  .openapi('InvalidParameterException')

const ThrottlingExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({ description: 'The calls to the GetEntitlements API are throttled.', required: [] })
  .openapi('ThrottlingException')

const InternalServiceErrorExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description:
      'An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.',
    required: [],
  })
  .openapi('InternalServiceErrorException')

const GetEntitlementFilterNameSchema = z
  .enum(['CUSTOMER_IDENTIFIER', 'DIMENSION'])
  .openapi('GetEntitlementFilterName')

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

export const postXAmzTargetAWSMPEntitlementServiceGetEntitlementsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMPEntitlementService.GetEntitlements',
  description:
    'GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.',
  operationId: 'GetEntitlements',
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
        .literal('AWSMPEntitlementService.GetEntitlements')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMPEntitlementService.GetEntitlements'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetEntitlementsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEntitlementsResultSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})
