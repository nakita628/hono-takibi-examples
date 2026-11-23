import { OpenAPIHono } from '@hono/zod-openapi'
import { getCertificationsTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const certificationsHandler = app.openapi(getCertificationsTypeRoute, (c) => {
  throw new Error('Not implemented')
})
