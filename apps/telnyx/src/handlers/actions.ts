import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBrowserSessionsIdActionsActionIdRoute,
  postBrowserSessionsIdActionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionsHandler = app
  .openapi(postBrowserSessionsIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowserSessionsIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
