import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportOpsgenieIdRoute,
  getApiTransportOpsgenieIdRoute,
  getApiTransportOpsgenieRoute,
  postApiTransportOpsgenieRoute,
  putApiTransportOpsgenieIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportOpsgenieHandler = app
  .openapi(getApiTransportOpsgenieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportOpsgenieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportOpsgenieIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportOpsgenieIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportOpsgenieIdRoute, (c) => {
    throw new Error('Not implemented')
  })
