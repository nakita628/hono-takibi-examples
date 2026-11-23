import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceCreateAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceCreateAliasHandler = app.openapi(
  postXAmzTargetWorkMailServiceCreateAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
