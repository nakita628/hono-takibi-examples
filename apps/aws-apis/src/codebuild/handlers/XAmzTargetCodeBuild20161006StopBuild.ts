import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006StopBuildRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006StopBuildHandler = app.openapi(
  postXAmzTargetCodeBuild20161006StopBuildRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
