import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006DeleteBuildBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006DeleteBuildBatchHandler = app.openapi(
  postXAmzTargetCodeBuild20161006DeleteBuildBatchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
