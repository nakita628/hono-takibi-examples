import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AccountsAccountIdIntegrationsHooksHookIdRoute,
  getApiV1AccountsAccountIdIntegrationsAppsRoute,
  patchApiV1AccountsAccountIdIntegrationsHooksHookIdRoute,
  postApiV1AccountsAccountIdIntegrationsHooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getApiV1AccountsAccountIdIntegrationsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdIntegrationsHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdIntegrationsHooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdIntegrationsHooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
