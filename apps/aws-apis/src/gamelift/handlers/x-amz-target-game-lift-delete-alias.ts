import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDeleteAliasHandler = app.openapi(
  postXAmzTargetGameLiftDeleteAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
