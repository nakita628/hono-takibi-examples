import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftListGameServersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftListGameServersHandler = app.openapi(
  postXAmzTargetGameLiftListGameServersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
