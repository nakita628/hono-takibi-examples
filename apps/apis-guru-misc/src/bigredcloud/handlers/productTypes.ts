import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const productTypesHandler = app.openapi(getV1ProductTypesRoute, (c) => {
  throw new Error('Not implemented')
})
