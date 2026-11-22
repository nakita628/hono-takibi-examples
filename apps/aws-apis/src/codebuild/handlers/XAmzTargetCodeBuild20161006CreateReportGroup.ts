import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006CreateReportGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006CreateReportGroupHandler = app.openapi(
  postXAmzTargetCodeBuild20161006CreateReportGroupRoute,
  (c) => {},
)
