import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationHandler = app.openapi(
  postXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
