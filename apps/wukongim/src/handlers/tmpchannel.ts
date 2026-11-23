import { OpenAPIHono } from '@hono/zod-openapi'
import { postTmpchannelSubscriberSetRoute } from '../routes'

const app = new OpenAPIHono()

export const tmpchannelHandler = app.openapi(postTmpchannelSubscriberSetRoute, (c) => {
  throw new Error('Not implemented')
})
