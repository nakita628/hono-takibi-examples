import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postLocalinventoryBatchRoute,
  postMerchantIdProductsProductIdLocalinventoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const localinventoryHandler = app
  .openapi(postLocalinventoryBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdProductsProductIdLocalinventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
