import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006RetryBuildRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006RetryBuildHandler = app.openapi(
  postXAmzTargetCodeBuild20161006RetryBuildRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
