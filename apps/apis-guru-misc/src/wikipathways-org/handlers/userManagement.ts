import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetUserByOrcidRoute, getLoginRoute } from '../routes'

const app = new OpenAPIHono()

export const userManagementHandler = app
  .openapi(getGetUserByOrcidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
