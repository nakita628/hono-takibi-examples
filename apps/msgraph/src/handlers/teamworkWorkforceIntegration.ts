import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamworkWorkforceIntegrationsWorkforceIntegrationIdRoute,
  getTeamworkWorkforceIntegrationsCountRoute,
  getTeamworkWorkforceIntegrationsRoute,
  getTeamworkWorkforceIntegrationsWorkforceIntegrationIdRoute,
  patchTeamworkWorkforceIntegrationsWorkforceIntegrationIdRoute,
  postTeamworkWorkforceIntegrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamworkWorkforceIntegrationHandler = app
  .openapi(getTeamworkWorkforceIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkWorkforceIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkWorkforceIntegrationsWorkforceIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamworkWorkforceIntegrationsWorkforceIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamworkWorkforceIntegrationsWorkforceIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkWorkforceIntegrationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
