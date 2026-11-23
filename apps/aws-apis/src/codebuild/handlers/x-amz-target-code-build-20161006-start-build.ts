import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006StartBuildRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006StartBuildHandler = app.openapi(
  postXAmzTargetCodeBuild20161006StartBuildRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
