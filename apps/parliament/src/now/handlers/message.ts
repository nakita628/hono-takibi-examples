import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiMessageMessageAnnunciatorCurrentRoute,
  getApiMessageMessageAnnunciatorDateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messageHandler = app
  .openapi(getApiMessageMessageAnnunciatorCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMessageMessageAnnunciatorDateRoute, (c) => {
    throw new Error('Not implemented')
  })
