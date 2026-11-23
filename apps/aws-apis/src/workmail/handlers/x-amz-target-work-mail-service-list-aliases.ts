import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceListAliasesHandler = app.openapi(
  postXAmzTargetWorkMailServiceListAliasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
