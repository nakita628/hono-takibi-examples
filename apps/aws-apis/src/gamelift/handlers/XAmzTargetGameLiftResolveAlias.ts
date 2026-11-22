import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftResolveAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftResolveAliasHandler = app.openapi(
  postXAmzTargetGameLiftResolveAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
