import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006DeleteReportGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006DeleteReportGroupHandler = app.openapi(
  postXAmzTargetCodeBuild20161006DeleteReportGroupRoute,
  (c) => {},
)
