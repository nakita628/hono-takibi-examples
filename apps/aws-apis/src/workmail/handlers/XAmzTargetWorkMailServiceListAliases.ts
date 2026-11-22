import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceListAliasesHandler = app.openapi(
  postXAmzTargetWorkMailServiceListAliasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
