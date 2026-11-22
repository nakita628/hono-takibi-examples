import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeFtpRoute } from '../routes'

const app = new OpenAPIHono()

export const typeFtpHandler = app.openapi(getRepositorySearchTypeFtpRoute, (c) => {
  throw new Error('Not implemented')
})
