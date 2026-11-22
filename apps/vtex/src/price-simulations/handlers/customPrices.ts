import { OpenAPIHono } from '@hono/zod-openapi'
import { getVCustomPricesSessionSchemaRoute, postVCustomPricesSessionSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const customPricesHandler = app
  .openapi(getVCustomPricesSessionSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVCustomPricesSessionSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
