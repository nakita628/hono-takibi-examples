import { OpenAPIHono } from '@hono/zod-openapi'
import { getPollStatusPollIdRoute } from '../routes'

const app = new OpenAPIHono()

export const pollHandler = app.openapi(getPollStatusPollIdRoute, (c) => {
  throw new Error('Not implemented')
})
