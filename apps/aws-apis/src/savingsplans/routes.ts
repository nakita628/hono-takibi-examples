import { createRoute, z } from '@hono/zod-openapi'

const SavingsPlanIdSchema = z.string().openapi('SavingsPlanId')

const CreateSavingsPlanResponseSchema = z
  .object({
    savingsPlanId: SavingsPlanIdSchema.and(
      z.any().openapi({ description: 'The ID of the Savings Plan.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSavingsPlanResponse')

const TagValueSchema = z.string().openapi('TagValue')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const DeleteQueuedSavingsPlanResponseSchema = z
  .object({})
  .openapi('DeleteQueuedSavingsPlanResponse')

const AmountSchema = z.string().openapi('Amount')

const CurrencyCodeSchema = z.enum(['CNY', 'USD']).openapi('CurrencyCode')

const SavingsPlanRateUnitSchema = z
  .enum(['Hrs', 'Lambda-GB-Second', 'Request'])
  .openapi('SavingsPlanRateUnit')

const SavingsPlanProductTypeSchema = z
  .enum(['EC2', 'Fargate', 'Lambda', 'SageMaker'])
  .openapi('SavingsPlanProductType')

const SavingsPlanRateServiceCodeSchema = z
  .enum(['AmazonEC2', 'AmazonECS', 'AmazonEKS', 'AWSLambda', 'AmazonSageMaker'])
  .openapi('SavingsPlanRateServiceCode')

const SavingsPlanRateUsageTypeSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_ \/.:-]+$/)
  .max(255)
  .openapi('SavingsPlanRateUsageType')

const SavingsPlanRateOperationSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_ \/.:-]*$/)
  .max(255)
  .openapi('SavingsPlanRateOperation')

const SavingsPlanRateSchema = z
  .object({
    rate: AmountSchema.and(z.any().openapi({ description: 'The rate.' })).exactOptional(),
    currency: CurrencyCodeSchema.and(
      z.any().openapi({ description: 'The currency.' }),
    ).exactOptional(),
    unit: SavingsPlanRateUnitSchema.and(
      z.any().openapi({ description: 'The unit.' }),
    ).exactOptional(),
    productType: SavingsPlanProductTypeSchema.and(
      z.any().openapi({ description: 'The product type.' }),
    ).exactOptional(),
    serviceCode: SavingsPlanRateServiceCodeSchema.and(
      z.any().openapi({ description: 'The service.' }),
    ).exactOptional(),
    usageType: SavingsPlanRateUsageTypeSchema.and(
      z.any().openapi({ description: 'The usage details of the line item in the billing report.' }),
    ).exactOptional(),
    operation: SavingsPlanRateOperationSchema.and(
      z
        .any()
        .openapi({
          description: 'The specific AWS operation for the line item in the billing report.',
        }),
    ).exactOptional(),
    properties: z.any().exactOptional().openapi({ description: 'The properties.' }),
  })
  .openapi({ description: 'Information about a Savings Plan rate.', required: [] })
  .openapi('SavingsPlanRate')

const SavingsPlanRateListSchema = z.array(SavingsPlanRateSchema).openapi('SavingsPlanRateList')

const PaginationTokenSchema = z
  .string()
  .regex(/^[A-Za-z0-9\/=\+]+$/)
  .max(1024)
  .openapi('PaginationToken')

const DescribeSavingsPlanRatesResponseSchema = z
  .object({
    savingsPlanId: SavingsPlanIdSchema.and(
      z.any().openapi({ description: 'The ID of the Savings Plan.' }),
    ).exactOptional(),
    searchResults: SavingsPlanRateListSchema.and(
      z.any().openapi({ description: 'Information about the Savings Plans rates.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSavingsPlanRatesResponse')

const SavingsPlanRateFilterNameSchema = z
  .enum([
    'region',
    'instanceType',
    'productDescription',
    'tenancy',
    'productType',
    'serviceCode',
    'usageType',
    'operation',
  ])
  .openapi('SavingsPlanRateFilterName')

const StringSchema = z.string().openapi('String')

const ListOfStringsSchema = z.array(StringSchema).openapi('ListOfStrings')

const SavingsPlanRateFilterSchema = z
  .object({
    name: SavingsPlanRateFilterNameSchema.and(
      z.any().openapi({ description: 'The filter name.' }),
    ).exactOptional(),
    values: ListOfStringsSchema.and(
      z.any().openapi({ description: 'The filter values.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a filter.', required: [] })
  .openapi('SavingsPlanRateFilter')

const SavingsPlanOfferingIdSchema = z.string().openapi('SavingsPlanOfferingId')

const SavingsPlanArnSchema = z
  .string()
  .regex(
    /arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$/,
  )
  .openapi('SavingsPlanArn')

const SavingsPlanStateSchema = z
  .enum(['payment-pending', 'payment-failed', 'active', 'retired', 'queued', 'queued-deleted'])
  .openapi('SavingsPlanState')

const RegionSchema = z.string().openapi('Region')

const EC2InstanceFamilySchema = z.string().openapi('EC2InstanceFamily')

const SavingsPlanTypeSchema = z
  .enum(['Compute', 'EC2Instance', 'SageMaker'])
  .openapi('SavingsPlanType')

const SavingsPlanPaymentOptionSchema = z
  .enum(['All Upfront', 'Partial Upfront', 'No Upfront'])
  .openapi('SavingsPlanPaymentOption')

const SavingsPlanProductTypeListSchema = z
  .array(SavingsPlanProductTypeSchema)
  .openapi('SavingsPlanProductTypeList')

const TermDurationInSecondsSchema = z.int().openapi('TermDurationInSeconds')

const TagMapSchema = z.record(z.string(), TagValueSchema).openapi('TagMap')

const SavingsPlanSchema = z
  .object({
    offeringId: SavingsPlanOfferingIdSchema.and(
      z.any().openapi({ description: 'The ID of the offering.' }),
    ).exactOptional(),
    savingsPlanId: SavingsPlanIdSchema.and(
      z.any().openapi({ description: 'The ID of the Savings Plan.' }),
    ).exactOptional(),
    savingsPlanArn: SavingsPlanArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the Savings Plan.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description.' }),
    ).exactOptional(),
    start: StringSchema.and(z.any().openapi({ description: 'The start time.' })).exactOptional(),
    end: StringSchema.and(z.any().openapi({ description: 'The end time.' })).exactOptional(),
    state: SavingsPlanStateSchema.and(
      z.any().openapi({ description: 'The state.' }),
    ).exactOptional(),
    region: RegionSchema.and(z.any().openapi({ description: 'The AWS Region.' })).exactOptional(),
    ec2InstanceFamily: EC2InstanceFamilySchema.and(
      z.any().openapi({ description: 'The EC2 instance family.' }),
    ).exactOptional(),
    savingsPlanType: SavingsPlanTypeSchema.and(
      z.any().openapi({ description: 'The plan type.' }),
    ).exactOptional(),
    paymentOption: SavingsPlanPaymentOptionSchema.and(
      z.any().openapi({ description: 'The payment option.' }),
    ).exactOptional(),
    productTypes: SavingsPlanProductTypeListSchema.and(
      z.any().openapi({ description: 'The product types.' }),
    ).exactOptional(),
    currency: CurrencyCodeSchema.and(
      z.any().openapi({ description: 'The currency.' }),
    ).exactOptional(),
    commitment: AmountSchema.and(
      z.any().openapi({ description: 'The hourly commitment, in USD.' }),
    ).exactOptional(),
    upfrontPaymentAmount: AmountSchema.and(
      z.any().openapi({ description: 'The up-front payment amount.' }),
    ).exactOptional(),
    recurringPaymentAmount: AmountSchema.and(
      z.any().openapi({ description: 'The recurring payment amount.' }),
    ).exactOptional(),
    termDurationInSeconds: TermDurationInSecondsSchema.and(
      z.any().openapi({ description: 'The duration of the term, in seconds.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(z.any().openapi({ description: 'One or more tags.' })).exactOptional(),
  })
  .openapi({ description: 'Information about a Savings Plan.', required: [] })
  .openapi('SavingsPlan')

const SavingsPlanListSchema = z.array(SavingsPlanSchema).openapi('SavingsPlanList')

const DescribeSavingsPlansResponseSchema = z
  .object({
    savingsPlans: SavingsPlanListSchema.and(
      z.any().openapi({ description: 'Information about the Savings Plans.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSavingsPlansResponse')

const SavingsPlansFilterNameSchema = z
  .enum([
    'region',
    'ec2-instance-family',
    'commitment',
    'upfront',
    'term',
    'savings-plan-type',
    'payment-option',
    'start',
    'end',
  ])
  .openapi('SavingsPlansFilterName')

const SavingsPlanFilterSchema = z
  .object({
    name: SavingsPlansFilterNameSchema.and(
      z.any().openapi({ description: 'The filter name.' }),
    ).exactOptional(),
    values: ListOfStringsSchema.and(
      z.any().openapi({ description: 'The filter value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a filter.', required: [] })
  .openapi('SavingsPlanFilter')

const UUIDSchema = z
  .string()
  .regex(/[a-f0-9]+(-[a-f0-9]+)*/)
  .openapi('UUID')

const SavingsPlansDurationSchema = z.int().min(0).openapi('SavingsPlansDuration')

const SavingsPlanDescriptionSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\- ]+$/)
  .openapi('SavingsPlanDescription')

const ParentSavingsPlanOfferingSchema = z
  .object({
    offeringId: UUIDSchema.and(
      z.any().openapi({ description: 'The ID of the offering.' }),
    ).exactOptional(),
    paymentOption: SavingsPlanPaymentOptionSchema.and(
      z.any().openapi({ description: 'The payment option.' }),
    ).exactOptional(),
    planType: SavingsPlanTypeSchema.and(
      z.any().openapi({ description: 'The plan type.' }),
    ).exactOptional(),
    durationSeconds: SavingsPlansDurationSchema.and(
      z.any().openapi({ description: 'The duration, in seconds.' }),
    ).exactOptional(),
    currency: CurrencyCodeSchema.and(
      z.any().openapi({ description: 'The currency.' }),
    ).exactOptional(),
    planDescription: SavingsPlanDescriptionSchema.and(
      z.any().openapi({ description: 'The description.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a Savings Plan offering.', required: [] })
  .openapi('ParentSavingsPlanOffering')

const SavingsPlanRatePricePerUnitSchema = z.string().openapi('SavingsPlanRatePricePerUnit')

const SavingsPlanOfferingRateSchema = z
  .object({
    savingsPlanOffering: ParentSavingsPlanOfferingSchema.and(
      z.any().openapi({ description: 'The Savings Plan offering.' }),
    ).exactOptional(),
    rate: SavingsPlanRatePricePerUnitSchema.and(
      z.any().openapi({ description: 'The Savings Plan rate.' }),
    ).exactOptional(),
    unit: SavingsPlanRateUnitSchema.and(
      z.any().openapi({ description: 'The unit.' }),
    ).exactOptional(),
    productType: SavingsPlanProductTypeSchema.and(
      z.any().openapi({ description: 'The product type.' }),
    ).exactOptional(),
    serviceCode: SavingsPlanRateServiceCodeSchema.and(
      z.any().openapi({ description: 'The service.' }),
    ).exactOptional(),
    usageType: SavingsPlanRateUsageTypeSchema.and(
      z.any().openapi({ description: 'The usage details of the line item in the billing report.' }),
    ).exactOptional(),
    operation: SavingsPlanRateOperationSchema.and(
      z
        .any()
        .openapi({
          description: 'The specific AWS operation for the line item in the billing report.',
        }),
    ).exactOptional(),
    properties: z.any().exactOptional().openapi({ description: 'The properties.' }),
  })
  .openapi({ description: 'Information about a Savings Plan offering rate.', required: [] })
  .openapi('SavingsPlanOfferingRate')

const SavingsPlanOfferingRatesListSchema = z
  .array(SavingsPlanOfferingRateSchema)
  .openapi('SavingsPlanOfferingRatesList')

const DescribeSavingsPlansOfferingRatesResponseSchema = z
  .object({
    searchResults: SavingsPlanOfferingRatesListSchema.and(
      z.any().openapi({ description: 'Information about the Savings Plans offering rates.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSavingsPlansOfferingRatesResponse')

const SavingsPlanRateFilterAttributeSchema = z
  .enum(['region', 'instanceFamily', 'instanceType', 'productDescription', 'tenancy', 'productId'])
  .openapi('SavingsPlanRateFilterAttribute')

const JsonSafeFilterValueStringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_ \/.\:\-\(\)]+$/)
  .openapi('JsonSafeFilterValueString')

const FilterValuesListSchema = z.array(JsonSafeFilterValueStringSchema).openapi('FilterValuesList')

const SavingsPlanOfferingRateFilterElementSchema = z
  .object({
    name: SavingsPlanRateFilterAttributeSchema.and(
      z.any().openapi({ description: 'The filter name.' }),
    ).exactOptional(),
    values: FilterValuesListSchema.and(
      z.any().openapi({ description: 'The filter values.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a filter.', required: [] })
  .openapi('SavingsPlanOfferingRateFilterElement')

const SavingsPlanServiceCodeSchema = z
  .string()
  .regex(/^[a-zA-Z]+$/)
  .max(255)
  .openapi('SavingsPlanServiceCode')

const SavingsPlanUsageTypeSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_ \/.:-]+$/)
  .max(255)
  .openapi('SavingsPlanUsageType')

const SavingsPlanOperationSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_ \/.:-]*$/)
  .max(255)
  .openapi('SavingsPlanOperation')

const SavingsPlanOfferingSchema = z
  .object({
    offeringId: UUIDSchema.and(
      z.any().openapi({ description: 'The ID of the offering.' }),
    ).exactOptional(),
    productTypes: SavingsPlanProductTypeListSchema.and(
      z.any().openapi({ description: 'The product type.' }),
    ).exactOptional(),
    planType: SavingsPlanTypeSchema.and(
      z.any().openapi({ description: 'The plan type.' }),
    ).exactOptional(),
    description: SavingsPlanDescriptionSchema.and(
      z.any().openapi({ description: 'The description.' }),
    ).exactOptional(),
    paymentOption: SavingsPlanPaymentOptionSchema.and(
      z.any().openapi({ description: 'The payment option.' }),
    ).exactOptional(),
    durationSeconds: SavingsPlansDurationSchema.and(
      z.any().openapi({ description: 'The duration, in seconds.' }),
    ).exactOptional(),
    currency: CurrencyCodeSchema.and(
      z.any().openapi({ description: 'The currency.' }),
    ).exactOptional(),
    serviceCode: SavingsPlanServiceCodeSchema.and(
      z.any().openapi({ description: 'The service.' }),
    ).exactOptional(),
    usageType: SavingsPlanUsageTypeSchema.and(
      z.any().openapi({ description: 'The usage details of the line item in the billing report.' }),
    ).exactOptional(),
    operation: SavingsPlanOperationSchema.and(
      z
        .any()
        .openapi({
          description: 'The specific AWS operation for the line item in the billing report.',
        }),
    ).exactOptional(),
    properties: z.any().exactOptional().openapi({ description: 'The properties.' }),
  })
  .openapi({ description: 'Information about a Savings Plan offering.', required: [] })
  .openapi('SavingsPlanOffering')

const SavingsPlanOfferingsListSchema = z
  .array(SavingsPlanOfferingSchema)
  .openapi('SavingsPlanOfferingsList')

const DescribeSavingsPlansOfferingsResponseSchema = z
  .object({
    searchResults: SavingsPlanOfferingsListSchema.and(
      z.any().openapi({ description: 'Information about the Savings Plans offerings.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSavingsPlansOfferingsResponse')

const SavingsPlanOfferingFilterAttributeSchema = z
  .enum(['region', 'instanceFamily'])
  .openapi('SavingsPlanOfferingFilterAttribute')

const SavingsPlanOfferingFilterElementSchema = z
  .object({
    name: SavingsPlanOfferingFilterAttributeSchema.and(
      z.any().openapi({ description: 'The filter name.' }),
    ).exactOptional(),
    values: FilterValuesListSchema.and(
      z.any().openapi({ description: 'The filter values.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a filter.', required: [] })
  .openapi('SavingsPlanOfferingFilterElement')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'Information about the tags.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z.string().openapi('TagKey')

const ClientTokenSchema = z.string().openapi('ClientToken')

const DateTimeSchema = z.iso.datetime({ offset: true }).openapi('DateTime')

const CreateSavingsPlanRequestSchema = z
  .object({
    savingsPlanOfferingId: SavingsPlanOfferingIdSchema.and(
      z.any().openapi({ description: 'The ID of the offering.' }),
    ),
    commitment: AmountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The hourly commitment, in USD. This is a value between 0.001 and 1 million. You cannot specify more than five digits after the decimal point.',
        }),
    ),
    upfrontPaymentAmount: AmountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The up-front payment amount. This is a whole number between 50 and 99 percent of the total value of the Savings Plan. This parameter is supported only if the payment option is <code>Partial Upfront</code>.',
        }),
    ).exactOptional(),
    purchaseTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ).',
        }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(z.any().openapi({ description: 'One or more tags.' })).exactOptional(),
  })
  .openapi({ required: ['savingsPlanOfferingId', 'commitment'], title: 'CreateSavingsPlanRequest' })
  .openapi('CreateSavingsPlanRequest')

const CurrencyListSchema = z.array(CurrencyCodeSchema).openapi('CurrencyList')

const DeleteQueuedSavingsPlanRequestSchema = z
  .object({
    savingsPlanId: SavingsPlanIdSchema.and(
      z.any().openapi({ description: 'The ID of the Savings Plan.' }),
    ),
  })
  .openapi({ required: ['savingsPlanId'], title: 'DeleteQueuedSavingsPlanRequest' })
  .openapi('DeleteQueuedSavingsPlanRequest')

const SavingsPlanRateFilterListSchema = z
  .array(SavingsPlanRateFilterSchema)
  .openapi('SavingsPlanRateFilterList')

const MaxResultsSchema = z.int().min(1).max(1000).openapi('MaxResults')

const DescribeSavingsPlanRatesRequestSchema = z
  .object({
    savingsPlanId: SavingsPlanIdSchema.and(
      z.any().openapi({ description: 'The ID of the Savings Plan.' }),
    ),
    filters: SavingsPlanRateFilterListSchema.and(
      z.any().openapi({ description: 'The filters.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'The token for the next page of results.' }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['savingsPlanId'], title: 'DescribeSavingsPlanRatesRequest' })
  .openapi('DescribeSavingsPlanRatesRequest')

const UUIDsSchema = z.array(UUIDSchema).openapi('UUIDs')

const SavingsPlanPaymentOptionListSchema = z
  .array(SavingsPlanPaymentOptionSchema)
  .openapi('SavingsPlanPaymentOptionList')

const SavingsPlanTypeListSchema = z.array(SavingsPlanTypeSchema).openapi('SavingsPlanTypeList')

const SavingsPlanRateServiceCodeListSchema = z
  .array(SavingsPlanRateServiceCodeSchema)
  .openapi('SavingsPlanRateServiceCodeList')

const SavingsPlanRateUsageTypeListSchema = z
  .array(SavingsPlanRateUsageTypeSchema)
  .openapi('SavingsPlanRateUsageTypeList')

const SavingsPlanRateOperationListSchema = z
  .array(SavingsPlanRateOperationSchema)
  .openapi('SavingsPlanRateOperationList')

const SavingsPlanOfferingRateFiltersListSchema = z
  .array(SavingsPlanOfferingRateFilterElementSchema)
  .openapi('SavingsPlanOfferingRateFiltersList')

const PageSizeSchema = z.int().min(0).max(1000).openapi('PageSize')

const DescribeSavingsPlansOfferingRatesRequestSchema = z
  .object({
    savingsPlanOfferingIds: UUIDsSchema.and(
      z.any().openapi({ description: 'The IDs of the offerings.' }),
    ).exactOptional(),
    savingsPlanPaymentOptions: SavingsPlanPaymentOptionListSchema.and(
      z.any().openapi({ description: 'The payment options.' }),
    ).exactOptional(),
    savingsPlanTypes: SavingsPlanTypeListSchema.and(
      z.any().openapi({ description: 'The plan types.' }),
    ).exactOptional(),
    products: SavingsPlanProductTypeListSchema.and(
      z.any().openapi({ description: 'The AWS products.' }),
    ).exactOptional(),
    serviceCodes: SavingsPlanRateServiceCodeListSchema.and(
      z.any().openapi({ description: 'The services.' }),
    ).exactOptional(),
    usageTypes: SavingsPlanRateUsageTypeListSchema.and(
      z.any().openapi({ description: 'The usage details of the line item in the billing report.' }),
    ).exactOptional(),
    operations: SavingsPlanRateOperationListSchema.and(
      z
        .any()
        .openapi({
          description: 'The specific AWS operation for the line item in the billing report.',
        }),
    ).exactOptional(),
    filters: SavingsPlanOfferingRateFiltersListSchema.and(
      z.any().openapi({ description: 'The filters.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'The token for the next page of results.' }),
    ).exactOptional(),
    maxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeSavingsPlansOfferingRatesRequest', required: [] })
  .openapi('DescribeSavingsPlansOfferingRatesRequest')

const DurationsListSchema = z.array(SavingsPlansDurationSchema).openapi('DurationsList')

const SavingsPlanDescriptionsListSchema = z
  .array(SavingsPlanDescriptionSchema)
  .openapi('SavingsPlanDescriptionsList')

const SavingsPlanServiceCodeListSchema = z
  .array(SavingsPlanServiceCodeSchema)
  .openapi('SavingsPlanServiceCodeList')

const SavingsPlanUsageTypeListSchema = z
  .array(SavingsPlanUsageTypeSchema)
  .openapi('SavingsPlanUsageTypeList')

const SavingsPlanOperationListSchema = z
  .array(SavingsPlanOperationSchema)
  .openapi('SavingsPlanOperationList')

const SavingsPlanOfferingFiltersListSchema = z
  .array(SavingsPlanOfferingFilterElementSchema)
  .openapi('SavingsPlanOfferingFiltersList')

const DescribeSavingsPlansOfferingsRequestSchema = z
  .object({
    offeringIds: UUIDsSchema.and(
      z.any().openapi({ description: 'The IDs of the offerings.' }),
    ).exactOptional(),
    paymentOptions: SavingsPlanPaymentOptionListSchema.and(
      z.any().openapi({ description: 'The payment options.' }),
    ).exactOptional(),
    productType: SavingsPlanProductTypeSchema.and(
      z.any().openapi({ description: 'The product type.' }),
    ).exactOptional(),
    planTypes: SavingsPlanTypeListSchema.and(
      z.any().openapi({ description: 'The plan type.' }),
    ).exactOptional(),
    durations: DurationsListSchema.and(
      z.any().openapi({ description: 'The durations, in seconds.' }),
    ).exactOptional(),
    currencies: CurrencyListSchema.and(
      z.any().openapi({ description: 'The currencies.' }),
    ).exactOptional(),
    descriptions: SavingsPlanDescriptionsListSchema.and(
      z.any().openapi({ description: 'The descriptions.' }),
    ).exactOptional(),
    serviceCodes: SavingsPlanServiceCodeListSchema.and(
      z.any().openapi({ description: 'The services.' }),
    ).exactOptional(),
    usageTypes: SavingsPlanUsageTypeListSchema.and(
      z.any().openapi({ description: 'The usage details of the line item in the billing report.' }),
    ).exactOptional(),
    operations: SavingsPlanOperationListSchema.and(
      z
        .any()
        .openapi({
          description: 'The specific AWS operation for the line item in the billing report.',
        }),
    ).exactOptional(),
    filters: SavingsPlanOfferingFiltersListSchema.and(
      z.any().openapi({ description: 'The filters.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'The token for the next page of results.' }),
    ).exactOptional(),
    maxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeSavingsPlansOfferingsRequest', required: [] })
  .openapi('DescribeSavingsPlansOfferingsRequest')

const SavingsPlanArnListSchema = z
  .array(SavingsPlanArnSchema)
  .max(100)
  .openapi('SavingsPlanArnList')

const SavingsPlanIdListSchema = z.array(SavingsPlanIdSchema).openapi('SavingsPlanIdList')

const SavingsPlanStateListSchema = z.array(SavingsPlanStateSchema).openapi('SavingsPlanStateList')

const SavingsPlanFilterListSchema = z
  .array(SavingsPlanFilterSchema)
  .openapi('SavingsPlanFilterList')

const DescribeSavingsPlansRequestSchema = z
  .object({
    savingsPlanArns: SavingsPlanArnListSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Names (ARN) of the Savings Plans.' }),
    ).exactOptional(),
    savingsPlanIds: SavingsPlanIdListSchema.and(
      z.any().openapi({ description: 'The IDs of the Savings Plans.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'The token for the next page of results.' }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.',
        }),
    ).exactOptional(),
    states: SavingsPlanStateListSchema.and(
      z.any().openapi({ description: 'The states.' }),
    ).exactOptional(),
    filters: SavingsPlanFilterListSchema.and(
      z.any().openapi({ description: 'The filters.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeSavingsPlansRequest', required: [] })
  .openapi('DescribeSavingsPlansRequest')

const ListTagsForResourceRequestSchema = z
  .object({
    resourceArn: SavingsPlanArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ),
  })
  .openapi({ required: ['resourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const SavingsPlanOfferingPropertyKeySchema = z
  .enum(['region', 'instanceFamily'])
  .openapi('SavingsPlanOfferingPropertyKey')

const SavingsPlanOfferingPropertySchema = z
  .object({
    name: SavingsPlanOfferingPropertyKeySchema.and(
      z.any().openapi({ description: 'The property name.' }),
    ).exactOptional(),
    value: JsonSafeFilterValueStringSchema.and(
      z.any().openapi({ description: 'The property value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a property.', required: [] })
  .openapi('SavingsPlanOfferingProperty')

const SavingsPlanOfferingPropertyListSchema = z
  .array(SavingsPlanOfferingPropertySchema)
  .openapi('SavingsPlanOfferingPropertyList')

const SavingsPlanOfferingRatePropertySchema = z
  .object({
    name: JsonSafeFilterValueStringSchema.and(
      z.any().openapi({ description: 'The property name.' }),
    ).exactOptional(),
    value: JsonSafeFilterValueStringSchema.and(
      z.any().openapi({ description: 'The property value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a property.', required: [] })
  .openapi('SavingsPlanOfferingRateProperty')

const SavingsPlanOfferingRatePropertyListSchema = z
  .array(SavingsPlanOfferingRatePropertySchema)
  .openapi('SavingsPlanOfferingRatePropertyList')

const SavingsPlanRatePropertyKeySchema = z
  .enum(['region', 'instanceType', 'instanceFamily', 'productDescription', 'tenancy'])
  .openapi('SavingsPlanRatePropertyKey')

const SavingsPlanRatePropertySchema = z
  .object({
    name: SavingsPlanRatePropertyKeySchema.and(
      z.any().openapi({ description: 'The property name.' }),
    ).exactOptional(),
    value: JsonSafeFilterValueStringSchema.and(
      z.any().openapi({ description: 'The property value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a property.', required: [] })
  .openapi('SavingsPlanRateProperty')

const SavingsPlanRatePropertyListSchema = z
  .array(SavingsPlanRatePropertySchema)
  .openapi('SavingsPlanRatePropertyList')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    resourceArn: SavingsPlanArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.',
        }),
    ),
  })
  .openapi({ required: ['resourceArn', 'tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({
    resourceArn: SavingsPlanArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ),
    tagKeys: TagKeyListSchema.and(z.any().openapi({ description: 'The tag keys.' })),
  })
  .openapi({ required: ['resourceArn', 'tagKeys'], title: 'UntagResourceRequest' })
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

export const postCreateSavingsPlanRoute = createRoute({
  method: 'post',
  path: '/CreateSavingsPlan',
  description: 'Creates a Savings Plan.',
  operationId: 'CreateSavingsPlan',
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
              savingsPlanOfferingId: z.string().openapi({ description: 'The ID of the offering.' }),
              commitment: z
                .string()
                .openapi({
                  description:
                    'The hourly commitment, in USD. This is a value between 0.001 and 1 million. You cannot specify more than five digits after the decimal point.',
                }),
              upfrontPaymentAmount: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The up-front payment amount. This is a whole number between 50 and 99 percent of the total value of the Savings Plan. This parameter is supported only if the payment option is <code>Partial Upfront</code>.',
                }),
              purchaseTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ).',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({ description: 'One or more tags.' }),
            })
            .openapi({ required: ['savingsPlanOfferingId', 'commitment'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSavingsPlanResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postDeleteQueuedSavingsPlanRoute = createRoute({
  method: 'post',
  path: '/DeleteQueuedSavingsPlan',
  description: 'Deletes the queued purchase for the specified Savings Plan.',
  operationId: 'DeleteQueuedSavingsPlan',
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
              savingsPlanId: z.string().openapi({ description: 'The ID of the Savings Plan.' }),
            })
            .openapi({ required: ['savingsPlanId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteQueuedSavingsPlanResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postDescribeSavingsPlanRatesRoute = createRoute({
  method: 'post',
  path: '/DescribeSavingsPlanRates',
  description: 'Describes the specified Savings Plans rates.',
  operationId: 'DescribeSavingsPlanRates',
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
              savingsPlanId: z.string().openapi({ description: 'The ID of the Savings Plan.' }),
              filters: z
                .array(SavingsPlanRateFilterSchema)
                .exactOptional()
                .openapi({ description: 'The filters.' }),
              nextToken: z
                .string()
                .regex(/^[A-Za-z0-9\/=\+]+$/)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The token for the next page of results.' }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.',
                }),
            })
            .openapi({ required: ['savingsPlanId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSavingsPlanRatesResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postDescribeSavingsPlansRoute = createRoute({
  method: 'post',
  path: '/DescribeSavingsPlans',
  description: 'Describes the specified Savings Plans.',
  operationId: 'DescribeSavingsPlans',
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
              savingsPlanArns: z
                .array(SavingsPlanArnSchema)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The Amazon Resource Names (ARN) of the Savings Plans.' }),
              savingsPlanIds: z
                .array(SavingsPlanIdSchema)
                .exactOptional()
                .openapi({ description: 'The IDs of the Savings Plans.' }),
              nextToken: z
                .string()
                .regex(/^[A-Za-z0-9\/=\+]+$/)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The token for the next page of results.' }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.',
                }),
              states: z
                .array(SavingsPlanStateSchema)
                .exactOptional()
                .openapi({ description: 'The states.' }),
              filters: z
                .array(SavingsPlanFilterSchema)
                .exactOptional()
                .openapi({ description: 'The filters.' }),
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
      content: { 'application/json': { schema: DescribeSavingsPlansResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postDescribeSavingsPlansOfferingRatesRoute = createRoute({
  method: 'post',
  path: '/DescribeSavingsPlansOfferingRates',
  description: 'Describes the specified Savings Plans offering rates.',
  operationId: 'DescribeSavingsPlansOfferingRates',
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
              savingsPlanOfferingIds: z
                .array(UUIDSchema)
                .exactOptional()
                .openapi({ description: 'The IDs of the offerings.' }),
              savingsPlanPaymentOptions: z
                .array(SavingsPlanPaymentOptionSchema)
                .exactOptional()
                .openapi({ description: 'The payment options.' }),
              savingsPlanTypes: z
                .array(SavingsPlanTypeSchema)
                .exactOptional()
                .openapi({ description: 'The plan types.' }),
              products: z
                .array(SavingsPlanProductTypeSchema)
                .exactOptional()
                .openapi({ description: 'The AWS products.' }),
              serviceCodes: z
                .array(SavingsPlanRateServiceCodeSchema)
                .exactOptional()
                .openapi({ description: 'The services.' }),
              usageTypes: z
                .array(SavingsPlanRateUsageTypeSchema)
                .exactOptional()
                .openapi({
                  description: 'The usage details of the line item in the billing report.',
                }),
              operations: z
                .array(SavingsPlanRateOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The specific AWS operation for the line item in the billing report.',
                }),
              filters: z
                .array(SavingsPlanOfferingRateFilterElementSchema)
                .exactOptional()
                .openapi({ description: 'The filters.' }),
              nextToken: z
                .string()
                .regex(/^[A-Za-z0-9\/=\+]+$/)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The token for the next page of results.' }),
              maxResults: z
                .int()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.',
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
      content: { 'application/json': { schema: DescribeSavingsPlansOfferingRatesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDescribeSavingsPlansOfferingsRoute = createRoute({
  method: 'post',
  path: '/DescribeSavingsPlansOfferings',
  description: 'Describes the specified Savings Plans offerings.',
  operationId: 'DescribeSavingsPlansOfferings',
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
              offeringIds: z
                .array(UUIDSchema)
                .exactOptional()
                .openapi({ description: 'The IDs of the offerings.' }),
              paymentOptions: z
                .array(SavingsPlanPaymentOptionSchema)
                .exactOptional()
                .openapi({ description: 'The payment options.' }),
              productType: z
                .enum(['EC2', 'Fargate', 'Lambda', 'SageMaker'])
                .exactOptional()
                .openapi({ description: 'The product type.' }),
              planTypes: z
                .array(SavingsPlanTypeSchema)
                .exactOptional()
                .openapi({ description: 'The plan type.' }),
              durations: z
                .array(SavingsPlansDurationSchema)
                .exactOptional()
                .openapi({ description: 'The durations, in seconds.' }),
              currencies: z
                .array(CurrencyCodeSchema)
                .exactOptional()
                .openapi({ description: 'The currencies.' }),
              descriptions: z
                .array(SavingsPlanDescriptionSchema)
                .exactOptional()
                .openapi({ description: 'The descriptions.' }),
              serviceCodes: z
                .array(SavingsPlanServiceCodeSchema)
                .exactOptional()
                .openapi({ description: 'The services.' }),
              usageTypes: z
                .array(SavingsPlanUsageTypeSchema)
                .exactOptional()
                .openapi({
                  description: 'The usage details of the line item in the billing report.',
                }),
              operations: z
                .array(SavingsPlanOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The specific AWS operation for the line item in the billing report.',
                }),
              filters: z
                .array(SavingsPlanOfferingFilterElementSchema)
                .exactOptional()
                .openapi({ description: 'The filters.' }),
              nextToken: z
                .string()
                .regex(/^[A-Za-z0-9\/=\+]+$/)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The token for the next page of results.' }),
              maxResults: z
                .int()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.',
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
      content: { 'application/json': { schema: DescribeSavingsPlansOfferingsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/ListTagsForResource',
  description: 'Lists the tags for the specified resource.',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceArn: z
                .string()
                .regex(
                  /arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$/,
                )
                .openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
            })
            .openapi({ required: ['resourceArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postTagResourceRoute = createRoute({
  method: 'post',
  path: '/TagResource',
  description: 'Adds the specified tags to the specified resource.',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceArn: z
                .string()
                .regex(
                  /arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$/,
                )
                .openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .openapi({
                  description:
                    'One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.',
                }),
            })
            .openapi({ required: ['resourceArn', 'tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postUntagResourceRoute = createRoute({
  method: 'post',
  path: '/UntagResource',
  description: 'Removes the specified tags from the specified resource.',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceArn: z
                .string()
                .regex(
                  /arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$/,
                )
                .openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
              tagKeys: z.array(TagKeySchema).openapi({ description: 'The tag keys.' }),
            })
            .openapi({ required: ['resourceArn', 'tagKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
