import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetServiceDetailsByIDServiceIDRoute } from '../routes'

const app = new OpenAPIHono()

export const getServiceDetailsByIdHandler = app.openapi(
  getGetServiceDetailsByIDServiceIDRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
