import { OpenAPIHono } from '@hono/zod-openapi'
import { getCacertificatesRoute } from '../routes'

const app = new OpenAPIHono()

export const cacertificatesHandler = app.openapi(getCacertificatesRoute, (c) => {
  throw new Error('Not implemented')
})
