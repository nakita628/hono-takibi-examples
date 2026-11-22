import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetAccessKeyInfoRoute, postActionGetAccessKeyInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetAccessKeyInfoHandler = app
  .openapi(getActionGetAccessKeyInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetAccessKeyInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
