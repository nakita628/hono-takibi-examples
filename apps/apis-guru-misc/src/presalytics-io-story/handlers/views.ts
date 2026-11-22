import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteViewsViewIdRoute,
  getSessionsSessionIdViewsRoute,
  getViewsViewIdRoute,
  postSessionsSessionIdViewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const viewsHandler = app
  .openapi(getSessionsSessionIdViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsSessionIdViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
