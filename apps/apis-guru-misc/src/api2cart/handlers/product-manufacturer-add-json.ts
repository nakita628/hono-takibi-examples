import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductManufacturerAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productManufacturerAddJsonHandler = app.openapi(
  postProductManufacturerAddJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
