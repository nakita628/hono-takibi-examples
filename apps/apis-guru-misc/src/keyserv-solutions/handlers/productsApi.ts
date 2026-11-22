import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProductsApiSerialRoute,
  patchV1ProductsApiRoute,
  postV1ProductsApiCountRoute,
  postV1ProductsApiFindRoute,
  postV1ProductsApiListRoute,
  postV1ProductsApiRoute,
  postV1ProductsApiSaveRoute,
  postV1ProductsApiSerialRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsApiHandler = app
  .openapi(patchV1ProductsApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsApiCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsApiFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsApiListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsApiSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsApiSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsApiSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
