import { OpenAPIHono } from '@hono/zod-openapi'
import { postMinuteUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const minuteUsageHandler = app.openapi(postMinuteUsageRoute, (c) => {
  throw new Error('Not implemented')
})
