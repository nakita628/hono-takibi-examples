import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDeleteAliasHandler = app.openapi(
  postXAmzTargetGameLiftDeleteAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
