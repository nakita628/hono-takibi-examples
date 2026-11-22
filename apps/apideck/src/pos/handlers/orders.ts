import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePosOrdersIdRoute,
  getPosOrdersIdRoute,
  getPosOrdersRoute,
  patchPosOrdersIdRoute,
  postPosOrdersIdPayRoute,
  postPosOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getPosOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosOrdersIdPayRoute, (c) => {
    throw new Error('Not implemented')
  })
