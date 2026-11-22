import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBrowserSessionsIdRoute,
  getBrowserSessionsIdRoute,
  getBrowserSessionsRoute,
  postBrowserSessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const browserSessionsHandler = app
  .openapi(getBrowserSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBrowserSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBrowserSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowserSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
