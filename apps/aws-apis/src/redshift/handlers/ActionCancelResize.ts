import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCancelResizeRoute, postActionCancelResizeRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCancelResizeHandler = app
  .openapi(getActionCancelResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCancelResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
