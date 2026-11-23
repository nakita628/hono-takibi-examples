import { OpenAPIHono } from '@hono/zod-openapi'
import { postPhoneEnrichRoute } from '../routes'

const app = new OpenAPIHono()

export const phoneHandler = app.openapi(postPhoneEnrichRoute, (c) => {
  throw new Error('Not implemented')
})
