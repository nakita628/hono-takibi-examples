import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SsoSettingsKeyRoute,
  getV1SsoSettingsKeyRoute,
  getV1SsoSettingsRoute,
  patchV1SsoSettingsKeyRoute,
  putV1SsoSettingsKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ssoSettingsHandler = app
  .openapi(getV1SsoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SsoSettingsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SsoSettingsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SsoSettingsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SsoSettingsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
