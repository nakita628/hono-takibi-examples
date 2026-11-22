import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AppPreOrdersIdRoute,
  getV1AppPreOrdersIdRoute,
  patchV1AppPreOrdersIdRoute,
  postV1AppPreOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appPreOrdersHandler = app
  .openapi(postV1AppPreOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppPreOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPreOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppPreOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
