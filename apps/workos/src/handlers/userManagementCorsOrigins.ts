import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserManagementCorsOriginsRoute, postUserManagementCorsOriginsRoute } from '../routes'

const app = new OpenAPIHono()

export const userManagementCorsOriginsHandler = app
  .openapi(postUserManagementCorsOriginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementCorsOriginsRoute, (c) => {
    throw new Error('Not implemented')
  })
