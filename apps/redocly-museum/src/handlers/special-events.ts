import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSpecialEventsEventIdRoute,
  getSpecialEventsEventIdRoute,
  getSpecialEventsRoute,
  patchSpecialEventsEventIdRoute,
  postSpecialEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const specialEventsHandler = app
  .openapi(postSpecialEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpecialEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpecialEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpecialEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpecialEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
