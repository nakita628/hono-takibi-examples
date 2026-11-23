import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsSupport20130415AddAttachmentsToSetHandler,
  xAmzTargetAwsSupport20130415AddCommunicationToCaseHandler,
  xAmzTargetAwsSupport20130415CreateCaseHandler,
  xAmzTargetAwsSupport20130415DescribeAttachmentHandler,
  xAmzTargetAwsSupport20130415DescribeCasesHandler,
  xAmzTargetAwsSupport20130415DescribeCommunicationsHandler,
  xAmzTargetAwsSupport20130415DescribeServicesHandler,
  xAmzTargetAwsSupport20130415DescribeSeverityLevelsHandler,
  xAmzTargetAwsSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesHandler,
  xAmzTargetAwsSupport20130415DescribeTrustedAdvisorCheckResultHandler,
  xAmzTargetAwsSupport20130415DescribeTrustedAdvisorChecksHandler,
  xAmzTargetAwsSupport20130415DescribeTrustedAdvisorCheckSummariesHandler,
  xAmzTargetAwsSupport20130415RefreshTrustedAdvisorCheckHandler,
  xAmzTargetAwsSupport20130415ResolveCaseHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsSupport20130415AddAttachmentsToSetHandler)
  .route('/', xAmzTargetAwsSupport20130415AddCommunicationToCaseHandler)
  .route('/', xAmzTargetAwsSupport20130415CreateCaseHandler)
  .route('/', xAmzTargetAwsSupport20130415DescribeAttachmentHandler)
  .route('/', xAmzTargetAwsSupport20130415DescribeCasesHandler)
  .route('/', xAmzTargetAwsSupport20130415DescribeCommunicationsHandler)
  .route('/', xAmzTargetAwsSupport20130415DescribeServicesHandler)
  .route('/', xAmzTargetAwsSupport20130415DescribeSeverityLevelsHandler)
  .route('/', xAmzTargetAwsSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesHandler)
  .route('/', xAmzTargetAwsSupport20130415DescribeTrustedAdvisorCheckResultHandler)
  .route('/', xAmzTargetAwsSupport20130415DescribeTrustedAdvisorCheckSummariesHandler)
  .route('/', xAmzTargetAwsSupport20130415DescribeTrustedAdvisorChecksHandler)
  .route('/', xAmzTargetAwsSupport20130415RefreshTrustedAdvisorCheckHandler)
  .route('/', xAmzTargetAwsSupport20130415ResolveCaseHandler)

export default app
