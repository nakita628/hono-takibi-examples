import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetAWSSupport20130415AddAttachmentsToSetRoute,
  postXAmzTargetAWSSupport20130415AddCommunicationToCaseRoute,
  postXAmzTargetAWSSupport20130415CreateCaseRoute,
  postXAmzTargetAWSSupport20130415DescribeAttachmentRoute,
  postXAmzTargetAWSSupport20130415DescribeCasesRoute,
  postXAmzTargetAWSSupport20130415DescribeCommunicationsRoute,
  postXAmzTargetAWSSupport20130415DescribeServicesRoute,
  postXAmzTargetAWSSupport20130415DescribeSeverityLevelsRoute,
  postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesRoute,
  postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultRoute,
  postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksRoute,
  postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesRoute,
  postXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheckRoute,
  postXAmzTargetAWSSupport20130415ResolveCaseRoute,
} from './routes'
import {
  postXAmzTargetAWSSupport20130415AddAttachmentsToSetRouteHandler,
  postXAmzTargetAWSSupport20130415AddCommunicationToCaseRouteHandler,
  postXAmzTargetAWSSupport20130415CreateCaseRouteHandler,
  postXAmzTargetAWSSupport20130415DescribeAttachmentRouteHandler,
  postXAmzTargetAWSSupport20130415DescribeCasesRouteHandler,
  postXAmzTargetAWSSupport20130415DescribeCommunicationsRouteHandler,
  postXAmzTargetAWSSupport20130415DescribeServicesRouteHandler,
  postXAmzTargetAWSSupport20130415DescribeSeverityLevelsRouteHandler,
  postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesRouteHandler,
  postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultRouteHandler,
  postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksRouteHandler,
  postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesRouteHandler,
  postXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheckRouteHandler,
  postXAmzTargetAWSSupport20130415ResolveCaseRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetAWSSupport20130415AddAttachmentsToSetRoute,
    postXAmzTargetAWSSupport20130415AddAttachmentsToSetRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSSupport20130415AddCommunicationToCaseRoute,
    postXAmzTargetAWSSupport20130415AddCommunicationToCaseRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSSupport20130415CreateCaseRoute,
    postXAmzTargetAWSSupport20130415CreateCaseRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSSupport20130415DescribeAttachmentRoute,
    postXAmzTargetAWSSupport20130415DescribeAttachmentRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSSupport20130415DescribeCasesRoute,
    postXAmzTargetAWSSupport20130415DescribeCasesRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSSupport20130415DescribeCommunicationsRoute,
    postXAmzTargetAWSSupport20130415DescribeCommunicationsRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSSupport20130415DescribeServicesRoute,
    postXAmzTargetAWSSupport20130415DescribeServicesRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSSupport20130415DescribeSeverityLevelsRoute,
    postXAmzTargetAWSSupport20130415DescribeSeverityLevelsRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesRoute,
    postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultRoute,
    postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesRoute,
    postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksRoute,
    postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheckRoute,
    postXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheckRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSSupport20130415ResolveCaseRoute,
    postXAmzTargetAWSSupport20130415ResolveCaseRouteHandler,
  )

export default app
