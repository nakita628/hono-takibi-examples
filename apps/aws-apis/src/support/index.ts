import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSSupport20130415AddAttachmentsToSetHandler,
  XAmzTargetAWSSupport20130415AddCommunicationToCaseHandler,
  XAmzTargetAWSSupport20130415CreateCaseHandler,
  XAmzTargetAWSSupport20130415DescribeAttachmentHandler,
  XAmzTargetAWSSupport20130415DescribeCasesHandler,
  XAmzTargetAWSSupport20130415DescribeCommunicationsHandler,
  XAmzTargetAWSSupport20130415DescribeServicesHandler,
  XAmzTargetAWSSupport20130415DescribeSeverityLevelsHandler,
  XAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesHandler,
  XAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultHandler,
  XAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksHandler,
  XAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesHandler,
  XAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheckHandler,
  XAmzTargetAWSSupport20130415ResolveCaseHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSSupport20130415AddAttachmentsToSetHandler)
  .route('/', XAmzTargetAWSSupport20130415AddCommunicationToCaseHandler)
  .route('/', XAmzTargetAWSSupport20130415CreateCaseHandler)
  .route('/', XAmzTargetAWSSupport20130415DescribeAttachmentHandler)
  .route('/', XAmzTargetAWSSupport20130415DescribeCasesHandler)
  .route('/', XAmzTargetAWSSupport20130415DescribeCommunicationsHandler)
  .route('/', XAmzTargetAWSSupport20130415DescribeServicesHandler)
  .route('/', XAmzTargetAWSSupport20130415DescribeSeverityLevelsHandler)
  .route('/', XAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesHandler)
  .route('/', XAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultHandler)
  .route('/', XAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesHandler)
  .route('/', XAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksHandler)
  .route('/', XAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheckHandler)
  .route('/', XAmzTargetAWSSupport20130415ResolveCaseHandler)

export default app
