import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportHelpScoutIdRoute,
  getApiTransportHelpScoutIdRoute,
  getApiTransportHelpScoutRoute,
  postApiTransportHelpScoutRoute,
  putApiTransportHelpScoutIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportHelpScoutHandler = app
  .openapi(getApiTransportHelpScoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportHelpScoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportHelpScoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportHelpScoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportHelpScoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
