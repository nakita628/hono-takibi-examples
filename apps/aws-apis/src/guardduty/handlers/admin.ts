import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminRoute, postAdminDisableRoute, postAdminEnableRoute } from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(postAdminDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
