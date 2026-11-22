import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006ImportSourceCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006ImportSourceCredentialsHandler = app.openapi(
  postXAmzTargetCodeBuild20161006ImportSourceCredentialsRoute,
  (c) => {},
)
