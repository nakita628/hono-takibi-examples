import { createRoute, z } from '@hono/zod-openapi'

const AssociateServiceQuotaTemplateResponseSchema = z
  .object({})
  .openapi('AssociateServiceQuotaTemplateResponse')

const AssociateServiceQuotaTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'AssociateServiceQuotaTemplateRequest' })
  .openapi('AssociateServiceQuotaTemplateRequest')

const DependencyAccessDeniedExceptionSchema = z.any().openapi('DependencyAccessDeniedException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ServiceExceptionSchema = z.any().openapi('ServiceException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const AWSServiceAccessNotEnabledExceptionSchema = z
  .any()
  .openapi('AWSServiceAccessNotEnabledException')

const OrganizationNotInAllFeaturesModeExceptionSchema = z
  .any()
  .openapi('OrganizationNotInAllFeaturesModeException')

const TemplatesNotAvailableInRegionExceptionSchema = z
  .any()
  .openapi('TemplatesNotAvailableInRegionException')

const NoAvailableOrganizationExceptionSchema = z.any().openapi('NoAvailableOrganizationException')

const DeleteServiceQuotaIncreaseRequestFromTemplateResponseSchema = z
  .object({})
  .openapi('DeleteServiceQuotaIncreaseRequestFromTemplateResponse')

const ServiceCodeSchema = z
  .string()
  .regex(/[a-zA-Z][a-zA-Z0-9-]{1,63}/)
  .min(1)
  .max(63)
  .openapi('ServiceCode')

const QuotaCodeSchema = z
  .string()
  .regex(/[a-zA-Z][a-zA-Z0-9-]{1,128}/)
  .min(1)
  .max(128)
  .openapi('QuotaCode')

const AwsRegionSchema = z
  .string()
  .regex(/[a-zA-Z][a-zA-Z0-9-]{1,128}/)
  .min(1)
  .max(64)
  .openapi('AwsRegion')

const DeleteServiceQuotaIncreaseRequestFromTemplateRequestSchema = z
  .object({
    ServiceCode: ServiceCodeSchema.and(z.any().openapi({ description: 'The service identifier.' })),
    QuotaCode: QuotaCodeSchema.and(z.any().openapi({ description: 'The quota identifier.' })),
    AwsRegion: AwsRegionSchema.and(z.any().openapi({ description: 'The AWS Region.' })),
  })
  .openapi({
    required: ['ServiceCode', 'QuotaCode', 'AwsRegion'],
    title: 'DeleteServiceQuotaIncreaseRequestFromTemplateRequest',
  })
  .openapi('DeleteServiceQuotaIncreaseRequestFromTemplateRequest')

const NoSuchResourceExceptionSchema = z.any().openapi('NoSuchResourceException')

const IllegalArgumentExceptionSchema = z.any().openapi('IllegalArgumentException')

const DisassociateServiceQuotaTemplateResponseSchema = z
  .object({})
  .openapi('DisassociateServiceQuotaTemplateResponse')

const DisassociateServiceQuotaTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateServiceQuotaTemplateRequest' })
  .openapi('DisassociateServiceQuotaTemplateRequest')

const ServiceQuotaTemplateNotInUseExceptionSchema = z
  .any()
  .openapi('ServiceQuotaTemplateNotInUseException')

const ServiceNameSchema = z.string().openapi('ServiceName')

const QuotaArnSchema = z.string().openapi('QuotaArn')

const QuotaNameSchema = z.string().openapi('QuotaName')

const QuotaValueSchema = z.float64().min(0).max(10000000000).openapi('QuotaValue')

const QuotaUnitSchema = z.string().openapi('QuotaUnit')

const QuotaAdjustableSchema = z.boolean().openapi('QuotaAdjustable')

const GlobalQuotaSchema = z.boolean().openapi('GlobalQuota')

const QuotaMetricNamespaceSchema = z.string().openapi('QuotaMetricNamespace')

const QuotaMetricNameSchema = z.string().openapi('QuotaMetricName')

const MetricDimensionValueSchema = z.string().openapi('MetricDimensionValue')

const MetricDimensionsMapDefinitionSchema = z
  .record(z.string(), MetricDimensionValueSchema)
  .refine((val) => Object.keys(val).length <= 10)
  .openapi('MetricDimensionsMapDefinition')

const StatisticSchema = z
  .string()
  .regex(/(Sum|Maximum)/)
  .min(1)
  .max(256)
  .openapi('Statistic')

const MetricInfoSchema = z
  .object({
    MetricNamespace: QuotaMetricNamespaceSchema.and(
      z.any().openapi({ description: 'The namespace of the metric.' }),
    ).exactOptional(),
    MetricName: QuotaMetricNameSchema.and(
      z.any().openapi({ description: 'The name of the metric.' }),
    ).exactOptional(),
    MetricDimensions: MetricDimensionsMapDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metric dimension. This is a name/value pair that is part of the identity of a metric.',
        }),
    ).exactOptional(),
    MetricStatisticRecommendation: StatisticSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metric statistic that we recommend you use when determining quota usage.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the CloudWatch metric that reflects quota usage.',
    required: [],
  })
  .openapi('MetricInfo')

const PeriodValueSchema = z.int().openapi('PeriodValue')

const PeriodUnitSchema = z
  .enum(['MICROSECOND', 'MILLISECOND', 'SECOND', 'MINUTE', 'HOUR', 'DAY', 'WEEK'])
  .openapi('PeriodUnit')

const QuotaPeriodSchema = z
  .object({
    PeriodValue: PeriodValueSchema.and(
      z.any().openapi({ description: 'The value.' }),
    ).exactOptional(),
    PeriodUnit: PeriodUnitSchema.and(
      z.any().openapi({ description: 'The time unit.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the quota period.', required: [] })
  .openapi('QuotaPeriod')

const ErrorCodeSchema = z
  .enum([
    'DEPENDENCY_ACCESS_DENIED_ERROR',
    'DEPENDENCY_THROTTLING_ERROR',
    'DEPENDENCY_SERVICE_ERROR',
    'SERVICE_QUOTA_NOT_AVAILABLE_ERROR',
  ])
  .openapi('ErrorCode')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const ErrorReasonSchema = z
  .object({
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Service Quotas returns the following error values:</p> <ul> <li> <p> <code>DEPENDENCY_ACCESS_DENIED_ERROR</code> - The caller does not have the required permissions to complete the action. To resolve the error, you must have permission to access the service or quota.</p> </li> <li> <p> <code>DEPENDENCY_THROTTLING_ERROR</code> - The service is throttling Service Quotas.</p> </li> <li> <p> <code>DEPENDENCY_SERVICE_ERROR</code> - The service is not available.</p> </li> <li> <p> <code>SERVICE_QUOTA_NOT_AVAILABLE_ERROR</code> - There was an error in Service Quotas.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An error that explains why an action did not succeed.', required: [] })
  .openapi('ErrorReason')

const ServiceQuotaSchema = z
  .object({
    ServiceCode: ServiceCodeSchema.and(
      z.any().openapi({ description: 'The service identifier.' }),
    ).exactOptional(),
    ServiceName: ServiceNameSchema.and(
      z.any().openapi({ description: 'The service name.' }),
    ).exactOptional(),
    QuotaArn: QuotaArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the quota.' }),
    ).exactOptional(),
    QuotaCode: QuotaCodeSchema.and(
      z.any().openapi({ description: 'The quota identifier.' }),
    ).exactOptional(),
    QuotaName: QuotaNameSchema.and(
      z.any().openapi({ description: 'The quota name.' }),
    ).exactOptional(),
    Value: QuotaValueSchema.and(
      z.any().openapi({ description: 'The quota value.' }),
    ).exactOptional(),
    Unit: QuotaUnitSchema.and(
      z.any().openapi({ description: 'The unit of measurement.' }),
    ).exactOptional(),
    Adjustable: QuotaAdjustableSchema.and(
      z.any().openapi({ description: 'Indicates whether the quota value can be increased.' }),
    ).exactOptional(),
    GlobalQuota: GlobalQuotaSchema.and(
      z.any().openapi({ description: 'Indicates whether the quota is global.' }),
    ).exactOptional(),
    UsageMetric: MetricInfoSchema.and(
      z.any().openapi({ description: 'Information about the measurement.' }),
    ).exactOptional(),
    Period: QuotaPeriodSchema.and(
      z.any().openapi({ description: 'The period of time.' }),
    ).exactOptional(),
    ErrorReason: ErrorReasonSchema.and(
      z.any().openapi({ description: 'The error code and error reason.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a quota.', required: [] })
  .openapi('ServiceQuota')

const GetAWSDefaultServiceQuotaResponseSchema = z
  .object({
    Quota: ServiceQuotaSchema.and(
      z.any().openapi({ description: 'Information about the quota.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAWSDefaultServiceQuotaResponse')

const GetAWSDefaultServiceQuotaRequestSchema = z
  .object({
    ServiceCode: ServiceCodeSchema.and(z.any().openapi({ description: 'The service identifier.' })),
    QuotaCode: QuotaCodeSchema.and(z.any().openapi({ description: 'The quota identifier.' })),
  })
  .openapi({ required: ['ServiceCode', 'QuotaCode'], title: 'GetAWSDefaultServiceQuotaRequest' })
  .openapi('GetAWSDefaultServiceQuotaRequest')

const ServiceQuotaTemplateAssociationStatusSchema = z
  .enum(['ASSOCIATED', 'DISASSOCIATED'])
  .openapi('ServiceQuotaTemplateAssociationStatus')

const GetAssociationForServiceQuotaTemplateResponseSchema = z
  .object({
    ServiceQuotaTemplateAssociationStatus: ServiceQuotaTemplateAssociationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The association status. If the status is <code>ASSOCIATED</code>, the quota increase requests in the template are automatically applied to new accounts in your organization.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAssociationForServiceQuotaTemplateResponse')

const GetAssociationForServiceQuotaTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'GetAssociationForServiceQuotaTemplateRequest' })
  .openapi('GetAssociationForServiceQuotaTemplateRequest')

const RequestIdSchema = z
  .string()
  .regex(/[0-9a-zA-Z][a-zA-Z0-9-]{1,128}/)
  .min(1)
  .max(128)
  .openapi('RequestId')

const CustomerServiceEngagementIdSchema = z.string().openapi('CustomerServiceEngagementId')

const RequestStatusSchema = z
  .enum(['PENDING', 'CASE_OPENED', 'APPROVED', 'DENIED', 'CASE_CLOSED'])
  .openapi('RequestStatus')

const DateTimeSchema = z.iso.datetime({ offset: true }).openapi('DateTime')

const RequesterSchema = z.string().openapi('Requester')

const RequestedServiceQuotaChangeSchema = z
  .object({
    Id: RequestIdSchema.and(
      z.any().openapi({ description: 'The unique identifier.' }),
    ).exactOptional(),
    CaseId: CustomerServiceEngagementIdSchema.and(
      z.any().openapi({ description: 'The case ID.' }),
    ).exactOptional(),
    ServiceCode: ServiceCodeSchema.and(
      z.any().openapi({ description: 'The service identifier.' }),
    ).exactOptional(),
    ServiceName: ServiceNameSchema.and(
      z.any().openapi({ description: 'The service name.' }),
    ).exactOptional(),
    QuotaCode: QuotaCodeSchema.and(
      z.any().openapi({ description: 'The quota identifier.' }),
    ).exactOptional(),
    QuotaName: QuotaNameSchema.and(
      z.any().openapi({ description: 'The quota name.' }),
    ).exactOptional(),
    DesiredValue: QuotaValueSchema.and(
      z.any().openapi({ description: 'The new, increased value for the quota.' }),
    ).exactOptional(),
    Status: RequestStatusSchema.and(
      z.any().openapi({ description: 'The state of the quota increase request.' }),
    ).exactOptional(),
    Created: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the quota increase request was received and the case ID was created.',
        }),
    ).exactOptional(),
    LastUpdated: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time of the most recent change.' }),
    ).exactOptional(),
    Requester: RequesterSchema.and(
      z.any().openapi({ description: 'The IAM identity of the requester.' }),
    ).exactOptional(),
    QuotaArn: QuotaArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the quota.' }),
    ).exactOptional(),
    GlobalQuota: GlobalQuotaSchema.and(
      z.any().openapi({ description: 'Indicates whether the quota is global.' }),
    ).exactOptional(),
    Unit: QuotaUnitSchema.and(
      z.any().openapi({ description: 'The unit of measurement.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a quota increase request.', required: [] })
  .openapi('RequestedServiceQuotaChange')

const GetRequestedServiceQuotaChangeResponseSchema = z
  .object({
    RequestedQuota: RequestedServiceQuotaChangeSchema.and(
      z.any().openapi({ description: 'Information about the quota increase request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRequestedServiceQuotaChangeResponse')

const GetRequestedServiceQuotaChangeRequestSchema = z
  .object({
    RequestId: RequestIdSchema.and(
      z.any().openapi({ description: 'The ID of the quota increase request.' }),
    ),
  })
  .openapi({ required: ['RequestId'], title: 'GetRequestedServiceQuotaChangeRequest' })
  .openapi('GetRequestedServiceQuotaChangeRequest')

const GetServiceQuotaResponseSchema = z
  .object({
    Quota: ServiceQuotaSchema.and(
      z.any().openapi({ description: 'Information about the quota.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetServiceQuotaResponse')

const GetServiceQuotaRequestSchema = z
  .object({
    ServiceCode: ServiceCodeSchema.and(z.any().openapi({ description: 'The service identifier.' })),
    QuotaCode: QuotaCodeSchema.and(z.any().openapi({ description: 'The quota identifier.' })),
  })
  .openapi({ required: ['ServiceCode', 'QuotaCode'], title: 'GetServiceQuotaRequest' })
  .openapi('GetServiceQuotaRequest')

const ServiceQuotaIncreaseRequestInTemplateSchema = z
  .object({
    ServiceCode: ServiceCodeSchema.and(
      z.any().openapi({ description: 'The service identifier.' }),
    ).exactOptional(),
    ServiceName: ServiceNameSchema.and(
      z.any().openapi({ description: 'The service name.' }),
    ).exactOptional(),
    QuotaCode: QuotaCodeSchema.and(
      z.any().openapi({ description: 'The quota identifier.' }),
    ).exactOptional(),
    QuotaName: QuotaNameSchema.and(
      z.any().openapi({ description: 'The quota name.' }),
    ).exactOptional(),
    DesiredValue: QuotaValueSchema.and(
      z.any().openapi({ description: 'The new, increased value of the quota.' }),
    ).exactOptional(),
    AwsRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The AWS Region.' }),
    ).exactOptional(),
    Unit: QuotaUnitSchema.and(
      z.any().openapi({ description: 'The unit of measurement.' }),
    ).exactOptional(),
    GlobalQuota: GlobalQuotaSchema.and(
      z.any().openapi({ description: 'Indicates whether the quota is global.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a quota increase request.', required: [] })
  .openapi('ServiceQuotaIncreaseRequestInTemplate')

const GetServiceQuotaIncreaseRequestFromTemplateResponseSchema = z
  .object({
    ServiceQuotaIncreaseRequestInTemplate: ServiceQuotaIncreaseRequestInTemplateSchema.and(
      z.any().openapi({ description: 'Information about the quota increase request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetServiceQuotaIncreaseRequestFromTemplateResponse')

const GetServiceQuotaIncreaseRequestFromTemplateRequestSchema = z
  .object({
    ServiceCode: ServiceCodeSchema.and(z.any().openapi({ description: 'The service identifier.' })),
    QuotaCode: QuotaCodeSchema.and(z.any().openapi({ description: 'The quota identifier.' })),
    AwsRegion: AwsRegionSchema.and(z.any().openapi({ description: 'The AWS Region.' })),
  })
  .openapi({
    required: ['ServiceCode', 'QuotaCode', 'AwsRegion'],
    title: 'GetServiceQuotaIncreaseRequestFromTemplateRequest',
  })
  .openapi('GetServiceQuotaIncreaseRequestFromTemplateRequest')

const NextTokenSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\/+]*={0,2}$/)
  .max(2048)
  .openapi('NextToken')

const ServiceQuotaListDefinitionSchema = z
  .array(ServiceQuotaSchema)
  .openapi('ServiceQuotaListDefinition')

const ListAWSDefaultServiceQuotasResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
    Quotas: ServiceQuotaListDefinitionSchema.and(
      z.any().openapi({ description: 'Information about the quotas.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAWSDefaultServiceQuotasResponse')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListAWSDefaultServiceQuotasRequestSchema = z
  .object({
    ServiceCode: ServiceCodeSchema.and(z.any().openapi({ description: 'The service identifier.' })),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token for the next page of results.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, if any, make another call with the token returned from this call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceCode'], title: 'ListAWSDefaultServiceQuotasRequest' })
  .openapi('ListAWSDefaultServiceQuotasRequest')

const InvalidPaginationTokenExceptionSchema = z.any().openapi('InvalidPaginationTokenException')

const RequestedServiceQuotaChangeHistoryListDefinitionSchema = z
  .array(RequestedServiceQuotaChangeSchema)
  .openapi('RequestedServiceQuotaChangeHistoryListDefinition')

const ListRequestedServiceQuotaChangeHistoryResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
    RequestedQuotas: RequestedServiceQuotaChangeHistoryListDefinitionSchema.and(
      z.any().openapi({ description: 'Information about the quota increase requests.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRequestedServiceQuotaChangeHistoryResponse')

const ListRequestedServiceQuotaChangeHistoryRequestSchema = z
  .object({
    ServiceCode: ServiceCodeSchema.and(
      z.any().openapi({ description: 'The service identifier.' }),
    ).exactOptional(),
    Status: RequestStatusSchema.and(
      z.any().openapi({ description: 'The status of the quota increase request.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token for the next page of results.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, if any, make another call with the token returned from this call.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListRequestedServiceQuotaChangeHistoryRequest', required: [] })
  .openapi('ListRequestedServiceQuotaChangeHistoryRequest')

const ListRequestedServiceQuotaChangeHistoryByQuotaResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
    RequestedQuotas: RequestedServiceQuotaChangeHistoryListDefinitionSchema.and(
      z.any().openapi({ description: 'Information about the quota increase requests.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRequestedServiceQuotaChangeHistoryByQuotaResponse')

const ListRequestedServiceQuotaChangeHistoryByQuotaRequestSchema = z
  .object({
    ServiceCode: ServiceCodeSchema.and(z.any().openapi({ description: 'The service identifier.' })),
    QuotaCode: QuotaCodeSchema.and(z.any().openapi({ description: 'The quota identifier.' })),
    Status: RequestStatusSchema.and(
      z.any().openapi({ description: 'The status value of the quota increase request.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token for the next page of results.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, if any, make another call with the token returned from this call.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServiceCode', 'QuotaCode'],
    title: 'ListRequestedServiceQuotaChangeHistoryByQuotaRequest',
  })
  .openapi('ListRequestedServiceQuotaChangeHistoryByQuotaRequest')

const ServiceQuotaIncreaseRequestInTemplateListSchema = z
  .array(ServiceQuotaIncreaseRequestInTemplateSchema)
  .openapi('ServiceQuotaIncreaseRequestInTemplateList')

const ListServiceQuotaIncreaseRequestsInTemplateResponseSchema = z
  .object({
    ServiceQuotaIncreaseRequestInTemplateList: ServiceQuotaIncreaseRequestInTemplateListSchema.and(
      z.any().openapi({ description: 'Information about the quota increase requests.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListServiceQuotaIncreaseRequestsInTemplateResponse')

const ListServiceQuotaIncreaseRequestsInTemplateRequestSchema = z
  .object({
    ServiceCode: ServiceCodeSchema.and(
      z.any().openapi({ description: 'The service identifier.' }),
    ).exactOptional(),
    AwsRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The AWS Region.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token for the next page of results.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, if any, make another call with the token returned from this call.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListServiceQuotaIncreaseRequestsInTemplateRequest', required: [] })
  .openapi('ListServiceQuotaIncreaseRequestsInTemplateRequest')

const ListServiceQuotasResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
    Quotas: ServiceQuotaListDefinitionSchema.and(
      z.any().openapi({ description: 'Information about the quotas.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListServiceQuotasResponse')

const ListServiceQuotasRequestSchema = z
  .object({
    ServiceCode: ServiceCodeSchema.and(z.any().openapi({ description: 'The service identifier.' })),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token for the next page of results.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, if any, make another call with the token returned from this call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceCode'], title: 'ListServiceQuotasRequest' })
  .openapi('ListServiceQuotasRequest')

const ServiceInfoSchema = z
  .object({
    ServiceCode: ServiceCodeSchema.and(
      z.any().openapi({ description: 'The service identifier.' }),
    ).exactOptional(),
    ServiceName: ServiceNameSchema.and(
      z.any().openapi({ description: 'The service name.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a service.', required: [] })
  .openapi('ServiceInfo')

const ServiceInfoListDefinitionSchema = z
  .array(ServiceInfoSchema)
  .openapi('ServiceInfoListDefinition')

const ListServicesResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
    Services: ServiceInfoListDefinitionSchema.and(
      z.any().openapi({ description: 'Information about the services.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListServicesResponse')

const ListServicesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token for the next page of results.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, if any, make another call with the token returned from this call.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListServicesRequest', required: [] })
  .openapi('ListServicesRequest')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that contains a tag key. The string length should be between 1 and 128 characters. Valid characters include a-z, A-Z, 0-9, space, and the special characters _ - . : / = + @.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that contains an optional tag value. The string length should be between 0 and 256 characters. Valid characters include a-z, A-Z, 0-9, space, and the special characters _ - . : / = + @.',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description: 'A complex data type that contains a tag key and tag value.',
  })
  .openapi('Tag')

const OutputTagsSchema = z.array(TagSchema).max(200).openapi('OutputTags')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: OutputTagsSchema.and(
      z
        .any()
        .openapi({ description: 'A complex data type that contains zero or more tag elements.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const AmazonResourceNameSchema = z
  .string()
  .regex(/arn:aws(-[\w]+)*:*:.+:[0-9]{12}:.+/)
  .min(1)
  .max(1011)
  .openapi('AmazonResourceName')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the applied quota for which you want to list tags. You can get this information by using the Service Quotas console, or by listing the quotas using the <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> AWS CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> AWS API operation.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutServiceQuotaIncreaseRequestIntoTemplateResponseSchema = z
  .object({
    ServiceQuotaIncreaseRequestInTemplate: ServiceQuotaIncreaseRequestInTemplateSchema.and(
      z.any().openapi({ description: 'Information about the quota increase request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutServiceQuotaIncreaseRequestIntoTemplateResponse')

const PutServiceQuotaIncreaseRequestIntoTemplateRequestSchema = z
  .object({
    QuotaCode: QuotaCodeSchema.and(z.any().openapi({ description: 'The quota identifier.' })),
    ServiceCode: ServiceCodeSchema.and(z.any().openapi({ description: 'The service identifier.' })),
    AwsRegion: AwsRegionSchema.and(z.any().openapi({ description: 'The AWS Region.' })),
    DesiredValue: QuotaValueSchema.and(
      z.any().openapi({ description: 'The new, increased value for the quota.' }),
    ),
  })
  .openapi({
    required: ['QuotaCode', 'ServiceCode', 'AwsRegion', 'DesiredValue'],
    title: 'PutServiceQuotaIncreaseRequestIntoTemplateRequest',
  })
  .openapi('PutServiceQuotaIncreaseRequestIntoTemplateRequest')

const QuotaExceededExceptionSchema = z.any().openapi('QuotaExceededException')

const RequestServiceQuotaIncreaseResponseSchema = z
  .object({
    RequestedQuota: RequestedServiceQuotaChangeSchema.and(
      z.any().openapi({ description: 'Information about the quota increase request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RequestServiceQuotaIncreaseResponse')

const RequestServiceQuotaIncreaseRequestSchema = z
  .object({
    ServiceCode: ServiceCodeSchema.and(z.any().openapi({ description: 'The service identifier.' })),
    QuotaCode: QuotaCodeSchema.and(z.any().openapi({ description: 'The quota identifier.' })),
    DesiredValue: QuotaValueSchema.and(
      z.any().openapi({ description: 'The new, increased value for the quota.' }),
    ),
  })
  .openapi({
    required: ['ServiceCode', 'QuotaCode', 'DesiredValue'],
    title: 'RequestServiceQuotaIncreaseRequest',
  })
  .openapi('RequestServiceQuotaIncreaseRequest')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const InvalidResourceStateExceptionSchema = z.any().openapi('InvalidResourceStateException')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const InputTagsSchema = z.array(TagSchema).min(1).openapi('InputTags')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the applied quota. You can get this information by using the Service Quotas console, or by listing the quotas using the <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> AWS CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> AWS API operation.',
        }),
    ),
    Tags: InputTagsSchema.and(
      z.any().openapi({ description: 'The tags that you want to add to the resource.' }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const TagPolicyViolationExceptionSchema = z.any().openapi('TagPolicyViolationException')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const InputTagKeysSchema = z.array(TagKeySchema).openapi('InputTagKeys')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the applied quota that you want to untag. You can get this information by using the Service Quotas console, or by listing the quotas using the <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> AWS CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> AWS API operation.',
        }),
    ),
    TagKeys: InputTagKeysSchema.and(
      z
        .any()
        .openapi({
          description: 'The keys of the tags that you want to remove from the resource.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const MetricDimensionNameSchema = z.string().openapi('MetricDimensionName')

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

export const postXAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate',
  description:
    'Associates your quota request template with your organization. When a new account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.',
  operationId: 'AssociateServiceQuotaTemplate',
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
        .literal('ServiceQuotasV20190624.AssociateServiceQuotaTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ServiceQuotasV20190624.AssociateServiceQuotaTemplate'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateServiceQuotaTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateServiceQuotaTemplateResponseSchema } },
    },
    480: {
      description: 'DependencyAccessDeniedException',
      content: { 'application/json': { schema: DependencyAccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'AWSServiceAccessNotEnabledException',
      content: { 'application/json': { schema: AWSServiceAccessNotEnabledExceptionSchema } },
    },
    485: {
      description: 'OrganizationNotInAllFeaturesModeException',
      content: { 'application/json': { schema: OrganizationNotInAllFeaturesModeExceptionSchema } },
    },
    486: {
      description: 'TemplatesNotAvailableInRegionException',
      content: { 'application/json': { schema: TemplatesNotAvailableInRegionExceptionSchema } },
    },
    487: {
      description: 'NoAvailableOrganizationException',
      content: { 'application/json': { schema: NoAvailableOrganizationExceptionSchema } },
    },
  },
})

export const postXAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplateRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate',
    description:
      'Deletes the quota increase request for the specified quota from your quota request template.',
    operationId: 'DeleteServiceQuotaIncreaseRequestFromTemplate',
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
          .literal('ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: DeleteServiceQuotaIncreaseRequestFromTemplateRequestSchema,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: DeleteServiceQuotaIncreaseRequestFromTemplateResponseSchema,
          },
        },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      482: {
        description: 'DependencyAccessDeniedException',
        content: { 'application/json': { schema: DependencyAccessDeniedExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'NoSuchResourceException',
        content: { 'application/json': { schema: NoSuchResourceExceptionSchema } },
      },
      485: {
        description: 'IllegalArgumentException',
        content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
      },
      486: {
        description: 'AWSServiceAccessNotEnabledException',
        content: { 'application/json': { schema: AWSServiceAccessNotEnabledExceptionSchema } },
      },
      487: {
        description: 'TemplatesNotAvailableInRegionException',
        content: { 'application/json': { schema: TemplatesNotAvailableInRegionExceptionSchema } },
      },
      488: {
        description: 'NoAvailableOrganizationException',
        content: { 'application/json': { schema: NoAvailableOrganizationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplateRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate',
    description:
      'Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new accounts in your organization. Disabling a quota request template does not apply its quota increase requests.',
    operationId: 'DisassociateServiceQuotaTemplate',
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
          .literal('ServiceQuotasV20190624.DisassociateServiceQuotaTemplate')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ServiceQuotasV20190624.DisassociateServiceQuotaTemplate'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DisassociateServiceQuotaTemplateRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DisassociateServiceQuotaTemplateResponseSchema } },
      },
      480: {
        description: 'DependencyAccessDeniedException',
        content: { 'application/json': { schema: DependencyAccessDeniedExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaTemplateNotInUseException',
        content: { 'application/json': { schema: ServiceQuotaTemplateNotInUseExceptionSchema } },
      },
      482: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      485: {
        description: 'AWSServiceAccessNotEnabledException',
        content: { 'application/json': { schema: AWSServiceAccessNotEnabledExceptionSchema } },
      },
      486: {
        description: 'TemplatesNotAvailableInRegionException',
        content: { 'application/json': { schema: TemplatesNotAvailableInRegionExceptionSchema } },
      },
      487: {
        description: 'NoAvailableOrganizationException',
        content: { 'application/json': { schema: NoAvailableOrganizationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetServiceQuotasV20190624GetAWSDefaultServiceQuotaRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota',
  description:
    'Retrieves the default value for the specified quota. The default value does not reflect any quota increases.',
  operationId: 'GetAWSDefaultServiceQuota',
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
        .literal('ServiceQuotasV20190624.GetAWSDefaultServiceQuota')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ServiceQuotasV20190624.GetAWSDefaultServiceQuota'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAWSDefaultServiceQuotaRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAWSDefaultServiceQuotaResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'NoSuchResourceException',
      content: { 'application/json': { schema: NoSuchResourceExceptionSchema } },
    },
    482: {
      description: 'IllegalArgumentException',
      content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplateRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate',
    description: 'Retrieves the status of the association for the quota request template.',
    operationId: 'GetAssociationForServiceQuotaTemplate',
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
          .literal('ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: GetAssociationForServiceQuotaTemplateRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetAssociationForServiceQuotaTemplateResponseSchema },
        },
      },
      480: {
        description: 'DependencyAccessDeniedException',
        content: { 'application/json': { schema: DependencyAccessDeniedExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaTemplateNotInUseException',
        content: { 'application/json': { schema: ServiceQuotaTemplateNotInUseExceptionSchema } },
      },
      482: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      485: {
        description: 'AWSServiceAccessNotEnabledException',
        content: { 'application/json': { schema: AWSServiceAccessNotEnabledExceptionSchema } },
      },
      486: {
        description: 'TemplatesNotAvailableInRegionException',
        content: { 'application/json': { schema: TemplatesNotAvailableInRegionExceptionSchema } },
      },
      487: {
        description: 'NoAvailableOrganizationException',
        content: { 'application/json': { schema: NoAvailableOrganizationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChangeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange',
  description: 'Retrieves information about the specified quota increase request.',
  operationId: 'GetRequestedServiceQuotaChange',
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
        .literal('ServiceQuotasV20190624.GetRequestedServiceQuotaChange')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ServiceQuotasV20190624.GetRequestedServiceQuotaChange'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRequestedServiceQuotaChangeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRequestedServiceQuotaChangeResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'NoSuchResourceException',
      content: { 'application/json': { schema: NoSuchResourceExceptionSchema } },
    },
    482: {
      description: 'IllegalArgumentException',
      content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetServiceQuotasV20190624GetServiceQuotaRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota',
  description:
    'Retrieves the applied quota value for the specified quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.',
  operationId: 'GetServiceQuota',
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
        .literal('ServiceQuotasV20190624.GetServiceQuota')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ServiceQuotasV20190624.GetServiceQuota'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetServiceQuotaRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetServiceQuotaResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'NoSuchResourceException',
      content: { 'application/json': { schema: NoSuchResourceExceptionSchema } },
    },
    482: {
      description: 'IllegalArgumentException',
      content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplateRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate',
    description:
      'Retrieves information about the specified quota increase request in your quota request template.',
    operationId: 'GetServiceQuotaIncreaseRequestFromTemplate',
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
          .literal('ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: GetServiceQuotaIncreaseRequestFromTemplateRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetServiceQuotaIncreaseRequestFromTemplateResponseSchema },
        },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'DependencyAccessDeniedException',
        content: { 'application/json': { schema: DependencyAccessDeniedExceptionSchema } },
      },
      482: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'NoSuchResourceException',
        content: { 'application/json': { schema: NoSuchResourceExceptionSchema } },
      },
      485: {
        description: 'IllegalArgumentException',
        content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
      },
      486: {
        description: 'AWSServiceAccessNotEnabledException',
        content: { 'application/json': { schema: AWSServiceAccessNotEnabledExceptionSchema } },
      },
      487: {
        description: 'TemplatesNotAvailableInRegionException',
        content: { 'application/json': { schema: TemplatesNotAvailableInRegionExceptionSchema } },
      },
      488: {
        description: 'NoAvailableOrganizationException',
        content: { 'application/json': { schema: NoAvailableOrganizationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas',
  description:
    'Lists the default values for the quotas for the specified AWS service. A default value does not reflect any quota increases.',
  operationId: 'ListAWSDefaultServiceQuotas',
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
        .literal('ServiceQuotasV20190624.ListAWSDefaultServiceQuotas')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ServiceQuotasV20190624.ListAWSDefaultServiceQuotas'],
            },
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
      content: { 'application/json': { schema: ListAWSDefaultServiceQuotasRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAWSDefaultServiceQuotasResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'NoSuchResourceException',
      content: { 'application/json': { schema: NoSuchResourceExceptionSchema } },
    },
    482: {
      description: 'IllegalArgumentException',
      content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
    },
    483: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory',
    description: 'Retrieves the quota increase requests for the specified service.',
    operationId: 'ListRequestedServiceQuotaChangeHistory',
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
          .literal('ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory'],
              },
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
        content: {
          'application/json': { schema: ListRequestedServiceQuotaChangeHistoryRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListRequestedServiceQuotaChangeHistoryResponseSchema },
        },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'NoSuchResourceException',
        content: { 'application/json': { schema: NoSuchResourceExceptionSchema } },
      },
      482: {
        description: 'IllegalArgumentException',
        content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
      },
      483: {
        description: 'InvalidPaginationTokenException',
        content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
      },
      484: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuotaRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota',
    description: 'Retrieves the quota increase requests for the specified quota.',
    operationId: 'ListRequestedServiceQuotaChangeHistoryByQuota',
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
          .literal('ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota'],
              },
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
        content: {
          'application/json': {
            schema: ListRequestedServiceQuotaChangeHistoryByQuotaRequestSchema,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: ListRequestedServiceQuotaChangeHistoryByQuotaResponseSchema,
          },
        },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'NoSuchResourceException',
        content: { 'application/json': { schema: NoSuchResourceExceptionSchema } },
      },
      482: {
        description: 'IllegalArgumentException',
        content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
      },
      483: {
        description: 'InvalidPaginationTokenException',
        content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
      },
      484: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplateRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate',
    description: 'Lists the quota increase requests in the specified quota request template.',
    operationId: 'ListServiceQuotaIncreaseRequestsInTemplate',
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
          .literal('ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate'],
              },
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
        content: {
          'application/json': { schema: ListServiceQuotaIncreaseRequestsInTemplateRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListServiceQuotaIncreaseRequestsInTemplateResponseSchema },
        },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'DependencyAccessDeniedException',
        content: { 'application/json': { schema: DependencyAccessDeniedExceptionSchema } },
      },
      482: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'IllegalArgumentException',
        content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
      },
      485: {
        description: 'AWSServiceAccessNotEnabledException',
        content: { 'application/json': { schema: AWSServiceAccessNotEnabledExceptionSchema } },
      },
      486: {
        description: 'TemplatesNotAvailableInRegionException',
        content: { 'application/json': { schema: TemplatesNotAvailableInRegionExceptionSchema } },
      },
      487: {
        description: 'NoAvailableOrganizationException',
        content: { 'application/json': { schema: NoAvailableOrganizationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetServiceQuotasV20190624ListServiceQuotasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas',
  description:
    'Lists the applied quota values for the specified AWS service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.',
  operationId: 'ListServiceQuotas',
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
        .literal('ServiceQuotasV20190624.ListServiceQuotas')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ServiceQuotasV20190624.ListServiceQuotas'] },
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
      content: { 'application/json': { schema: ListServiceQuotasRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListServiceQuotasResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'NoSuchResourceException',
      content: { 'application/json': { schema: NoSuchResourceExceptionSchema } },
    },
    482: {
      description: 'IllegalArgumentException',
      content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
    },
    483: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetServiceQuotasV20190624ListServicesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ServiceQuotasV20190624.ListServices',
  description: 'Lists the names and codes for the services integrated with Service Quotas.',
  operationId: 'ListServices',
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
        .literal('ServiceQuotasV20190624.ListServices')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ServiceQuotasV20190624.ListServices'] },
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
      content: { 'application/json': { schema: ListServicesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListServicesResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'IllegalArgumentException',
      content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
    },
    482: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetServiceQuotasV20190624ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource',
  description: 'Returns a list of the tags assigned to the specified applied quota.',
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
      'X-Amz-Target': z
        .literal('ServiceQuotasV20190624.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ServiceQuotasV20190624.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'NoSuchResourceException',
      content: { 'application/json': { schema: NoSuchResourceExceptionSchema } },
    },
    482: {
      description: 'IllegalArgumentException',
      content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplateRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate',
    description: 'Adds a quota increase request to your quota request template.',
    operationId: 'PutServiceQuotaIncreaseRequestIntoTemplate',
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
          .literal('ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: PutServiceQuotaIncreaseRequestIntoTemplateRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: PutServiceQuotaIncreaseRequestIntoTemplateResponseSchema },
        },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'DependencyAccessDeniedException',
        content: { 'application/json': { schema: DependencyAccessDeniedExceptionSchema } },
      },
      482: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'IllegalArgumentException',
        content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
      },
      485: {
        description: 'QuotaExceededException',
        content: { 'application/json': { schema: QuotaExceededExceptionSchema } },
      },
      486: {
        description: 'NoSuchResourceException',
        content: { 'application/json': { schema: NoSuchResourceExceptionSchema } },
      },
      487: {
        description: 'AWSServiceAccessNotEnabledException',
        content: { 'application/json': { schema: AWSServiceAccessNotEnabledExceptionSchema } },
      },
      488: {
        description: 'TemplatesNotAvailableInRegionException',
        content: { 'application/json': { schema: TemplatesNotAvailableInRegionExceptionSchema } },
      },
      489: {
        description: 'NoAvailableOrganizationException',
        content: { 'application/json': { schema: NoAvailableOrganizationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetServiceQuotasV20190624RequestServiceQuotaIncreaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease',
  description: 'Submits a quota increase request for the specified quota.',
  operationId: 'RequestServiceQuotaIncrease',
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
        .literal('ServiceQuotasV20190624.RequestServiceQuotaIncrease')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ServiceQuotasV20190624.RequestServiceQuotaIncrease'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RequestServiceQuotaIncreaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RequestServiceQuotaIncreaseResponseSchema } },
    },
    480: {
      description: 'DependencyAccessDeniedException',
      content: { 'application/json': { schema: DependencyAccessDeniedExceptionSchema } },
    },
    481: {
      description: 'QuotaExceededException',
      content: { 'application/json': { schema: QuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'NoSuchResourceException',
      content: { 'application/json': { schema: NoSuchResourceExceptionSchema } },
    },
    485: {
      description: 'IllegalArgumentException',
      content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
    },
    486: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    487: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    488: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetServiceQuotasV20190624TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ServiceQuotasV20190624.TagResource',
  description:
    'Adds tags to the specified applied quota. You can include one or more tags to add to the quota.',
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
        .literal('ServiceQuotasV20190624.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ServiceQuotasV20190624.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'NoSuchResourceException',
      content: { 'application/json': { schema: NoSuchResourceExceptionSchema } },
    },
    482: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    483: {
      description: 'TagPolicyViolationException',
      content: { 'application/json': { schema: TagPolicyViolationExceptionSchema } },
    },
    484: {
      description: 'IllegalArgumentException',
      content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetServiceQuotasV20190624UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ServiceQuotasV20190624.UntagResource',
  description:
    'Removes tags from the specified applied quota. You can specify one or more tags to remove.',
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
        .literal('ServiceQuotasV20190624.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ServiceQuotasV20190624.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'NoSuchResourceException',
      content: { 'application/json': { schema: NoSuchResourceExceptionSchema } },
    },
    482: {
      description: 'IllegalArgumentException',
      content: { 'application/json': { schema: IllegalArgumentExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})
