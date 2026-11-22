import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportClickatellIdRoute,
  getApiTransportClickatellIdRoute,
  getApiTransportClickatellRoute,
  postApiTransportClickatellRoute,
  putApiTransportClickatellIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportClickatellHandler = app
  .openapi(getApiTransportClickatellRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportClickatellRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportClickatellIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportClickatellIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportClickatellIdRoute, (c) => {
    throw new Error('Not implemented')
  })
