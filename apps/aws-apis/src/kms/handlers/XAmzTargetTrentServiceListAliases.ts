import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceListAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceListAliasesHandler = app.openapi(
  postXAmzTargetTrentServiceListAliasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
