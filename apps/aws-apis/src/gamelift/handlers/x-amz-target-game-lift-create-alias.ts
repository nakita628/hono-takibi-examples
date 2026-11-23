import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftCreateAliasHandler = app.openapi(
  postXAmzTargetGameLiftCreateAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
