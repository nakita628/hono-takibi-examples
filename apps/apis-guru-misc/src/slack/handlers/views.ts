import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getViewsOpenRoute,
  getViewsPublishRoute,
  getViewsPushRoute,
  getViewsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const viewsHandler = app
  .openapi(getViewsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getViewsPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getViewsPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getViewsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
