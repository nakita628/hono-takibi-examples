import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006ListReportGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006ListReportGroupsHandler = app.openapi(
  postXAmzTargetCodeBuild20161006ListReportGroupsRoute,
  (c) => {},
)
