import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAuthorizeDataShareRoute, postActionAuthorizeDataShareRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAuthorizeDataShareHandler = app
  .openapi(getActionAuthorizeDataShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAuthorizeDataShareRoute, (c) => {
    throw new Error('Not implemented')
  })
