import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceCreateAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceCreateAliasHandler = app.openapi(
  postXAmzTargetWorkMailServiceCreateAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
