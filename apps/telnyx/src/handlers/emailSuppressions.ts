import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailBlocksIdRoute,
  getEmailBlocksExportRoute,
  getEmailBlocksIdEventsRoute,
  getEmailBlocksIdRoute,
  getEmailBlocksRoute,
  postEmailBlocksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailSuppressionsHandler = app
  .openapi(getEmailBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailBlocksExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailBlocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailBlocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailBlocksIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
