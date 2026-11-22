import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1BookTranTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const bookTranTypesHandler = app.openapi(getV1BookTranTypesRoute, (c) => {
  throw new Error('Not implemented')
})
