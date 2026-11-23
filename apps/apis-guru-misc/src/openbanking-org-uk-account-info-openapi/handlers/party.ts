import { OpenAPIHono } from '@hono/zod-openapi'
import { getPartyRoute } from '../routes'

const app = new OpenAPIHono()

export const partyHandler = app.openapi(getPartyRoute, (c) => {
  throw new Error('Not implemented')
})
