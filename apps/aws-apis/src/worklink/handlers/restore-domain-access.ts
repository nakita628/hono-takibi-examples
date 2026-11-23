import { OpenAPIHono } from '@hono/zod-openapi'
import { postRestoreDomainAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const restoreDomainAccessHandler = app.openapi(postRestoreDomainAccessRoute, (c) => {
  throw new Error('Not implemented')
})
