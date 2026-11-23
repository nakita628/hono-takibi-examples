import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSearchFreetextRoute,
  postSearchProductsCodesRoute,
  postSearchProductsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(postSearchFreetextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchProductsCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
