import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInventoriesInfoRoute,
  postInventoriesUploadRoute,
  postInventoriesWatcherRestartRoute,
  postInventoriesWatcherStartRoute,
  postInventoriesWatcherStopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inventoriesHandler = app
  .openapi(getInventoriesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoriesUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoriesWatcherRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoriesWatcherStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoriesWatcherStopRoute, (c) => {
    throw new Error('Not implemented')
  })
