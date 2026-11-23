import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAppClientIdRoute,
  getApiAppClientIdRoute,
  getApiAppListRoute,
  postApiAppRoute,
  putApiAppClientIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiAppHandler = app
  .openapi(postApiAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAppClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAppClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAppClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAppListRoute, (c) => {
    throw new Error('Not implemented')
  })
