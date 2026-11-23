import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetSignalingChannelEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const getSignalingChannelEndpointHandler = app.openapi(
  postGetSignalingChannelEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
