import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExternalEventsIdRoute,
  getExternalEventsRoute,
  postExternalEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalEventsHandler = app
  .openapi(getExternalEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExternalEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
