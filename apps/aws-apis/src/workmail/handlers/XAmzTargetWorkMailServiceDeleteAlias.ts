import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDeleteAliasHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
