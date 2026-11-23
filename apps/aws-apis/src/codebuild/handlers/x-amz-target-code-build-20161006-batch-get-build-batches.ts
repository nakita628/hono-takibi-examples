import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006BatchGetBuildBatchesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006BatchGetBuildBatchesHandler = app.openapi(
  postXAmzTargetCodeBuild20161006BatchGetBuildBatchesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
