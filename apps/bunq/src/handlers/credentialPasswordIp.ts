import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDCredentialPasswordIpItemIdRoute,
  getUserUserIDCredentialPasswordIpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const credentialPasswordIpHandler = app
  .openapi(getUserUserIDCredentialPasswordIpItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDCredentialPasswordIpRoute, (c) => {
    throw new Error('Not implemented')
  })
