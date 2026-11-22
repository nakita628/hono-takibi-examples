import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationHandler,
  XAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummaryHandler,
  XAmzTargetResourceGroupsTaggingAPI20170126GetResourcesHandler,
  XAmzTargetResourceGroupsTaggingAPI20170126GetTagKeysHandler,
  XAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesHandler,
  XAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationHandler,
  XAmzTargetResourceGroupsTaggingAPI20170126TagResourcesHandler,
  XAmzTargetResourceGroupsTaggingAPI20170126UntagResourcesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationHandler)
  .route('/', XAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummaryHandler)
  .route('/', XAmzTargetResourceGroupsTaggingAPI20170126GetResourcesHandler)
  .route('/', XAmzTargetResourceGroupsTaggingAPI20170126GetTagKeysHandler)
  .route('/', XAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesHandler)
  .route('/', XAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationHandler)
  .route('/', XAmzTargetResourceGroupsTaggingAPI20170126TagResourcesHandler)
  .route('/', XAmzTargetResourceGroupsTaggingAPI20170126UntagResourcesHandler)

export default app
