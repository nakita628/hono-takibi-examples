import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTaxesCodeRoute,
  getTaxesCodeRoute,
  getTaxesRoute,
  postTaxesRoute,
  putTaxesCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taxesHandler = app
  .openapi(postTaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTaxesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTaxesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
