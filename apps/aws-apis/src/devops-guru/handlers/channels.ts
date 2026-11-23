import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteChannelsIdRoute, postChannelsRoute, putChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(putChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
