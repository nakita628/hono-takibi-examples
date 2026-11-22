import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006StopBuildBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006StopBuildBatchHandler = app.openapi(
  postXAmzTargetCodeBuild20161006StopBuildBatchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
