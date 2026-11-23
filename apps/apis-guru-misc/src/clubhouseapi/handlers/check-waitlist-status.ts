import { OpenAPIHono } from '@hono/zod-openapi'
import { postCheckWaitlistStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const checkWaitlistStatusHandler = app.openapi(postCheckWaitlistStatusRoute, (c) => {
  throw new Error('Not implemented')
})
