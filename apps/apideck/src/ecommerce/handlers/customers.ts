import { OpenAPIHono } from '@hono/zod-openapi'
import { getEcommerceCustomersIdRoute, getEcommerceCustomersRoute } from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getEcommerceCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcommerceCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
