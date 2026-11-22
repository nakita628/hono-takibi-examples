import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006UpdateReportGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006UpdateReportGroupHandler = app.openapi(
  postXAmzTargetCodeBuild20161006UpdateReportGroupRoute,
  (c) => {},
)
