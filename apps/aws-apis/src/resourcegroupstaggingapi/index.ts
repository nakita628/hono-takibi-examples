import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetResourceGroupsTaggingApi20170126DescribeReportCreationHandler,
  xAmzTargetResourceGroupsTaggingApi20170126GetComplianceSummaryHandler,
  xAmzTargetResourceGroupsTaggingApi20170126GetResourcesHandler,
  xAmzTargetResourceGroupsTaggingApi20170126GetTagKeysHandler,
  xAmzTargetResourceGroupsTaggingApi20170126GetTagValuesHandler,
  xAmzTargetResourceGroupsTaggingApi20170126StartReportCreationHandler,
  xAmzTargetResourceGroupsTaggingApi20170126TagResourcesHandler,
  xAmzTargetResourceGroupsTaggingApi20170126UntagResourcesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetResourceGroupsTaggingApi20170126DescribeReportCreationHandler)
  .route('/', xAmzTargetResourceGroupsTaggingApi20170126GetComplianceSummaryHandler)
  .route('/', xAmzTargetResourceGroupsTaggingApi20170126GetResourcesHandler)
  .route('/', xAmzTargetResourceGroupsTaggingApi20170126GetTagKeysHandler)
  .route('/', xAmzTargetResourceGroupsTaggingApi20170126GetTagValuesHandler)
  .route('/', xAmzTargetResourceGroupsTaggingApi20170126StartReportCreationHandler)
  .route('/', xAmzTargetResourceGroupsTaggingApi20170126TagResourcesHandler)
  .route('/', xAmzTargetResourceGroupsTaggingApi20170126UntagResourcesHandler)

export default app
