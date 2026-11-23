import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteViewsViewIdRoute, getViewsViewIdRoute } from '../routes'

const app = new OpenAPIHono()

export const viewsHandler = app
  .openapi(deleteViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
