import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportSmsBiurasIdRoute,
  getApiTransportSmsBiurasIdRoute,
  getApiTransportSmsBiurasRoute,
  postApiTransportSmsBiurasRoute,
  putApiTransportSmsBiurasIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportSmsBiurasHandler = app
  .openapi(getApiTransportSmsBiurasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSmsBiurasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSmsBiurasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSmsBiurasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSmsBiurasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
