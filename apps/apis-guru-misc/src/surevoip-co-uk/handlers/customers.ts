import { OpenAPIHono } from '@hono/zod-openapi'
import { getCustomersAccountRoute, getCustomersRoute } from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
