import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdministeredIdentitiesMeApiKeysRoute,
  getAdministeredIdentitiesMeRoute,
  postAdministeredIdentitiesMeApiKeysGenerateRoute,
  postAdministeredIdentitiesMeApiKeysSuffixRevokeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const administeredHandler = app
  .openapi(getAdministeredIdentitiesMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdministeredIdentitiesMeApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdministeredIdentitiesMeApiKeysGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdministeredIdentitiesMeApiKeysSuffixRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
