import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006ListSharedReportGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006ListSharedReportGroupsHandler = app.openapi(
  postXAmzTargetCodeBuild20161006ListSharedReportGroupsRoute,
  (c) => {},
)
