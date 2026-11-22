import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postRestApi3ForgePanelActionBulkAsyncRoute,
  postRestApi3ForgePanelActionBulkStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issuePanelsHandler = app
  .openapi(postRestApi3ForgePanelActionBulkAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ForgePanelActionBulkStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
