import { OpenAPIHono } from '@hono/zod-openapi'
import { getFacetsRoute } from '../routes'

const app = new OpenAPIHono()

export const facetsHandler = app.openapi(getFacetsRoute, (c) => {
  throw new Error('Not implemented')
})
