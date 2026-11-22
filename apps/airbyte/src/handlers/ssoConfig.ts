import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1SsoConfigActivateRoute,
  postV1SsoConfigCreateRoute,
  postV1SsoConfigDeleteRoute,
  postV1SsoConfigGetRoute,
  postV1SsoConfigUpdateCredentialsRoute,
  postV1SsoConfigValidateTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ssoConfigHandler = app
  .openapi(postV1SsoConfigGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SsoConfigCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SsoConfigDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SsoConfigUpdateCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SsoConfigActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SsoConfigValidateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
