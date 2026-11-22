import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConfigsConfigIdRoute,
  getV1ConfigsConfigIdRoute,
  getV1ProductsProductIdConfigsRoute,
  postV1ProductsProductIdConfigsRoute,
  putV1ConfigsConfigIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configsHandler = app
  .openapi(deleteV1ConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsProductIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsProductIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
