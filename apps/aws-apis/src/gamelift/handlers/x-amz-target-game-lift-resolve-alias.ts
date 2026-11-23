import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftResolveAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftResolveAliasHandler = app.openapi(
  postXAmzTargetGameLiftResolveAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
