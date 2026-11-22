import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportMobytIdRoute,
  getApiTransportMobytIdRoute,
  getApiTransportMobytRoute,
  postApiTransportMobytRoute,
  putApiTransportMobytIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportMobytHandler = app
  .openapi(getApiTransportMobytRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMobytRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMobytIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMobytIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMobytIdRoute, (c) => {
    throw new Error('Not implemented')
  })
