import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftListScriptsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftListScriptsHandler = app.openapi(
  postXAmzTargetGameLiftListScriptsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
