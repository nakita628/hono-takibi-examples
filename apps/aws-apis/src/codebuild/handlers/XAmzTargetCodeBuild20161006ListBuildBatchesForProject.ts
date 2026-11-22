import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006ListBuildBatchesForProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006ListBuildBatchesForProjectHandler = app.openapi(
  postXAmzTargetCodeBuild20161006ListBuildBatchesForProjectRoute,
  (c) => {},
)
