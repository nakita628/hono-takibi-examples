import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAuthCheckAuthPhpRoute,
  getApiAuthLoginBasicPhpRoute,
  getApiAuthTokenPhpRoute,
  postApiAuthAuthPhpRoute,
  postApiAuthLogoutPhpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postApiAuthAuthPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthCheckAuthPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthLoginBasicPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthLogoutPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthTokenPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
