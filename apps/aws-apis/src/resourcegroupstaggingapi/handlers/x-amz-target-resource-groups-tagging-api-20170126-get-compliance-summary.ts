import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetResourceGroupsTaggingApi20170126GetComplianceSummaryHandler = app.openapi(
  postXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummaryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
