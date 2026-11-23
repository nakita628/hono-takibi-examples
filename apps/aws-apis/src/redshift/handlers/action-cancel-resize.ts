import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCancelResizeRoute, postActionCancelResizeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCancelResizeHandler = app
  .openapi(getActionCancelResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCancelResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
