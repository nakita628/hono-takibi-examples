import { OpenAPIHono } from '@hono/zod-openapi'
import { getLiveRoute } from '../routes'

const app = new OpenAPIHono()

export const liveHandler = app.openapi(getLiveRoute, (c) => {
  throw new Error('Not implemented')
})
