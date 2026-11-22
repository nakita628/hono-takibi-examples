import { OpenAPIHono } from '@hono/zod-openapi'
import { getCertificatesOutGoingRoute } from '../routes'

const app = new OpenAPIHono()

export const certificatesOutGoingHandler = app.openapi(getCertificatesOutGoingRoute, (c) => {
  throw new Error('Not implemented')
})
