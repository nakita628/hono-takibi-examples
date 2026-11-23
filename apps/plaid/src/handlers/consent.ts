import { OpenAPIHono } from '@hono/zod-openapi'
import { postConsentEventsGetRoute } from '../routes'

const app = new OpenAPIHono()

export const consentHandler = app.openapi(postConsentEventsGetRoute, (c) => {
  throw new Error('Not implemented')
})
