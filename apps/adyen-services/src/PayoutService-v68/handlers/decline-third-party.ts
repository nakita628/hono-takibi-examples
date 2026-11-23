import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeclineThirdPartyRoute } from '../routes'

const app = new OpenAPIHono()

export const declineThirdPartyHandler = app.openapi(postDeclineThirdPartyRoute, (c) => {
  throw new Error('Not implemented')
})
