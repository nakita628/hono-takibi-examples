import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1HeartBeatRoute } from '../routes'

const app = new OpenAPIHono()

export const heartBeatHandler = app.openapi(postApiV1HeartBeatRoute, (c) => {
  throw new Error('Not implemented')
})
