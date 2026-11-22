import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006RetryBuildBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006RetryBuildBatchHandler = app.openapi(
  postXAmzTargetCodeBuild20161006RetryBuildBatchRoute,
  (c) => {},
)
