import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006ListBuildBatchesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006ListBuildBatchesHandler = app.openapi(
  postXAmzTargetCodeBuild20161006ListBuildBatchesRoute,
  (c) => {},
)
