import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportZendeskIdRoute,
  getApiTransportZendeskIdRoute,
  getApiTransportZendeskRoute,
  postApiTransportZendeskRoute,
  putApiTransportZendeskIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportZendeskHandler = app
  .openapi(getApiTransportZendeskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportZendeskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportZendeskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportZendeskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportZendeskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
