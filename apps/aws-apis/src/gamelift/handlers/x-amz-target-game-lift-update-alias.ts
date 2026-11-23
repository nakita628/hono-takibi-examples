import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUpdateAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftUpdateAliasHandler = app.openapi(
  postXAmzTargetGameLiftUpdateAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
