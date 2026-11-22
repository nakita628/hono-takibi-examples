import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectProductIdRoute,
  getV1ObjectProductIdRoute,
  postV1ObjectProductRoute,
  putV1ObjectProductIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(postV1ObjectProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
