import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsZipLookupsRoute } from '../routes'

const app = new OpenAPIHono()

export const usZipLookupsHandler = app.openapi(postUsZipLookupsRoute, (c) => {
  throw new Error('Not implemented')
})
