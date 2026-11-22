import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportVonageIdRoute,
  getApiTransportVonageIdRoute,
  getApiTransportVonageRoute,
  postApiTransportVonageRoute,
  putApiTransportVonageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportVonageHandler = app
  .openapi(getApiTransportVonageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportVonageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportVonageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportVonageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportVonageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
