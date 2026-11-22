import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006ListReportsForReportGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006ListReportsForReportGroupHandler = app.openapi(
  postXAmzTargetCodeBuild20161006ListReportsForReportGroupRoute,
  (c) => {},
)
