import { OpenAPIHono } from '@hono/zod-openapi'
import { postBetslipsRoute } from '../routes'

const app = new OpenAPIHono()

export const betslipsHandler = app.openapi(postBetslipsRoute, (c) => {
  throw new Error('Not implemented')
})
