import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006ListSourceCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006ListSourceCredentialsHandler = app.openapi(
  postXAmzTargetCodeBuild20161006ListSourceCredentialsRoute,
  (c) => {},
)
