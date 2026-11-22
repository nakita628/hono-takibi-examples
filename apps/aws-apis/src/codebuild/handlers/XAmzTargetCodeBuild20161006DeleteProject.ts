import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006DeleteProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006DeleteProjectHandler = app.openapi(
  postXAmzTargetCodeBuild20161006DeleteProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
