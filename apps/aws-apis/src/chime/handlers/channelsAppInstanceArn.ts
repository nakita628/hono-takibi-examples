import { OpenAPIHono } from '@hono/zod-openapi'
import { getChannelsAppInstanceArnRoute } from '../routes'

const app = new OpenAPIHono()

export const channelsAppInstanceArnHandler = app.openapi(getChannelsAppInstanceArnRoute, (c) => {
  throw new Error('Not implemented')
})
