import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicApiVersioningTest202609WidgetsWidgetIdRoute,
  getPublicApiVersioningTest202609WidgetsRoute,
  getPublicApiVersioningTest202609WidgetsWidgetIdRoute,
  postPublicApiVersioningTest202609WidgetsRoute,
  putPublicApiVersioningTest202609WidgetsWidgetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getPublicApiVersioningTest202609WidgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicApiVersioningTest202609WidgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicApiVersioningTest202609WidgetsWidgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPublicApiVersioningTest202609WidgetsWidgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicApiVersioningTest202609WidgetsWidgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
