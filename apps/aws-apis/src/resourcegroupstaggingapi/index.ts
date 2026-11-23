import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationRoute,
  postXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummaryRoute,
  postXAmzTargetResourceGroupsTaggingAPI20170126GetResourcesRoute,
  postXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeysRoute,
  postXAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesRoute,
  postXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationRoute,
  postXAmzTargetResourceGroupsTaggingAPI20170126TagResourcesRoute,
  postXAmzTargetResourceGroupsTaggingAPI20170126UntagResourcesRoute,
} from './routes'
import {
  postXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationRouteHandler,
  postXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummaryRouteHandler,
  postXAmzTargetResourceGroupsTaggingAPI20170126GetResourcesRouteHandler,
  postXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeysRouteHandler,
  postXAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesRouteHandler,
  postXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationRouteHandler,
  postXAmzTargetResourceGroupsTaggingAPI20170126TagResourcesRouteHandler,
  postXAmzTargetResourceGroupsTaggingAPI20170126UntagResourcesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationRoute,
    postXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationRouteHandler,
  )
  .openapi(
    postXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummaryRoute,
    postXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummaryRouteHandler,
  )
  .openapi(
    postXAmzTargetResourceGroupsTaggingAPI20170126GetResourcesRoute,
    postXAmzTargetResourceGroupsTaggingAPI20170126GetResourcesRouteHandler,
  )
  .openapi(
    postXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeysRoute,
    postXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeysRouteHandler,
  )
  .openapi(
    postXAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesRoute,
    postXAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesRouteHandler,
  )
  .openapi(
    postXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationRoute,
    postXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationRouteHandler,
  )
  .openapi(
    postXAmzTargetResourceGroupsTaggingAPI20170126TagResourcesRoute,
    postXAmzTargetResourceGroupsTaggingAPI20170126TagResourcesRouteHandler,
  )
  .openapi(
    postXAmzTargetResourceGroupsTaggingAPI20170126UntagResourcesRoute,
    postXAmzTargetResourceGroupsTaggingAPI20170126UntagResourcesRouteHandler,
  )

export default app
