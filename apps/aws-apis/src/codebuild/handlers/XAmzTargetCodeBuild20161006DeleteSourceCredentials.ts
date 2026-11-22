import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006DeleteSourceCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006DeleteSourceCredentialsHandler = app.openapi(
  postXAmzTargetCodeBuild20161006DeleteSourceCredentialsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
