import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006UpdateProjectVisibilityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006UpdateProjectVisibilityHandler = app.openapi(
  postXAmzTargetCodeBuild20161006UpdateProjectVisibilityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
