import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSsoIntegrationsIdRoute,
  getSsoIntegrationsIdRoute,
  getSsoIntegrationsRoute,
  patchSsoIntegrationsIdRoute,
  postSsoIntegrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const singleSignOnSettingsHandler = app
  .openapi(getSsoIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSsoIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSsoIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSsoIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSsoIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
