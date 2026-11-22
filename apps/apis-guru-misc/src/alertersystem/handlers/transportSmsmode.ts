import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportSmsmodeIdRoute,
  getApiTransportSmsmodeIdRoute,
  getApiTransportSmsmodeRoute,
  postApiTransportSmsmodeRoute,
  putApiTransportSmsmodeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportSmsmodeHandler = app
  .openapi(getApiTransportSmsmodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSmsmodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSmsmodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSmsmodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSmsmodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
