import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ViolatingSitesRoute } from '../routes'

const app = new OpenAPIHono()

export const violatingSitesHandler = app.openapi(getV1ViolatingSitesRoute, (c) => {
  throw new Error('Not implemented')
})
