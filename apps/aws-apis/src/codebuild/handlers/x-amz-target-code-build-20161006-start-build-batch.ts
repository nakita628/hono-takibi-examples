import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006StartBuildBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006StartBuildBatchHandler = app.openapi(
  postXAmzTargetCodeBuild20161006StartBuildBatchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
