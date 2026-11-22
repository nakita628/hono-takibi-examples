import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006UpdateProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006UpdateProjectHandler = app.openapi(
  postXAmzTargetCodeBuild20161006UpdateProjectRoute,
  (c) => {},
)
