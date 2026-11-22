import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1B2bDiscoveryIntermediateSessionsExchangeRoute,
  postV1B2bDiscoveryOrganizationsCreateRoute,
  postV1B2bDiscoveryOrganizationsRoute,
  postV1B2bPasswordsDiscoveryEmailResetRoute,
  postV1B2bPasswordsDiscoveryEmailResetStartRoute,
} from '../routes'

const app = new OpenAPIHono()

export const discoveryHandler = app
  .openapi(postV1B2bDiscoveryIntermediateSessionsExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bDiscoveryOrganizationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bDiscoveryOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsDiscoveryEmailResetStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsDiscoveryEmailResetRoute, (c) => {
    throw new Error('Not implemented')
  })
