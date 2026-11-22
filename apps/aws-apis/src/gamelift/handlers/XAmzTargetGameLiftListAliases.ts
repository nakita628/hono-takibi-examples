import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftListAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftListAliasesHandler = app.openapi(
  postXAmzTargetGameLiftListAliasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
