import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestApi3ApplicationroleKeyRoute, getRestApi3ApplicationroleRoute } from '../routes'

const app = new OpenAPIHono()

export const applicationRolesHandler = app
  .openapi(getRestApi3ApplicationroleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ApplicationroleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
