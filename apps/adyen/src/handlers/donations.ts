import { OpenAPIHono } from '@hono/zod-openapi'
import { postDonationsRoute } from '../routes'

const app = new OpenAPIHono()

export const donationsHandler = app.openapi(postDonationsRoute, (c) => {
  throw new Error('Not implemented')
})
