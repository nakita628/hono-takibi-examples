import { OpenAPIHono } from '@hono/zod-openapi'
import { getCrsiRoute } from '../routes'

const app = new OpenAPIHono()

export const crsiHandler = app.openapi(getCrsiRoute, (c) => {
  throw new Error('Not implemented')
})
