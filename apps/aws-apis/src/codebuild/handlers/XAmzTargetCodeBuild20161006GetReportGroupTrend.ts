import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006GetReportGroupTrendRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006GetReportGroupTrendHandler = app.openapi(
  postXAmzTargetCodeBuild20161006GetReportGroupTrendRoute,
  (c) => {},
)
