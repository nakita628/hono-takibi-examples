import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFqdnsIdRoute,
  getFqdnsIdRoute,
  getFqdnsRoute,
  patchFqdnsIdRoute,
  postFqdnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fqdNsHandler = app
  .openapi(getFqdnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFqdnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFqdnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFqdnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFqdnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
