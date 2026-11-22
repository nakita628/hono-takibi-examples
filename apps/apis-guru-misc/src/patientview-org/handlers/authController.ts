import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthLogoutTokenRoute,
  getAuthTokenBasicuserinformationRoute,
  postAuthLoginRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authControllerHandler = app
  .openapi(postAuthLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthLogoutTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthTokenBasicuserinformationRoute, (c) => {
    throw new Error('Not implemented')
  })
