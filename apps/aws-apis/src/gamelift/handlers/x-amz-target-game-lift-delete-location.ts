import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteLocationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDeleteLocationHandler = app.openapi(
  postXAmzTargetGameLiftDeleteLocationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
