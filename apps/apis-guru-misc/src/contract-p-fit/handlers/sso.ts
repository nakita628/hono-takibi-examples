import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSsoConfigSsoConfigIdRoute,
  getSsoConfigRoute,
  postSsoConfigRoute,
  postSsoLoginRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ssoHandler = app
  .openapi(getSsoConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSsoConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSsoConfigSsoConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSsoLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
