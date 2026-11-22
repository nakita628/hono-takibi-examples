import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsZipLookupsRoute } from '../routes'

const app = new OpenAPIHono()

export const zipLookupsHandler = app.openapi(postUsZipLookupsRoute, (c) => {
  throw new Error('Not implemented')
})
