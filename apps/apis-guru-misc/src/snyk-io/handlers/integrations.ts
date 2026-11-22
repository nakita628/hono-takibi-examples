import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgOrgIdIntegrationsIntegrationIdAuthenticationRoute,
  getOrgOrgIdIntegrationsIntegrationIdSettingsRoute,
  getOrgOrgIdIntegrationsRoute,
  getOrgOrgIdIntegrationsTypeRoute,
  postOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionTokenRoute,
  postOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchTokenRoute,
  postOrgOrgIdIntegrationsIntegrationIdCloneRoute,
  postOrgOrgIdIntegrationsRoute,
  putOrgOrgIdIntegrationsIntegrationIdRoute,
  putOrgOrgIdIntegrationsIntegrationIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getOrgOrgIdIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIdIntegrationsIntegrationIdAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdIntegrationsIntegrationIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdIntegrationsIntegrationIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdIntegrationsIntegrationIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdIntegrationsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
