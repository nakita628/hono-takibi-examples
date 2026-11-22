import { OpenAPIHono } from '@hono/zod-openapi'
import {
  changesHandler,
  dnsKeysHandler,
  managedZoneOperationsHandler,
  managedZonesHandler,
  policiesHandler,
  projectsHandler,
  resourceRecordSetsHandler,
  responsePoliciesHandler,
  responsePolicyRulesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', projectsHandler)
  .route('/', managedZonesHandler)
  .route('/', changesHandler)
  .route('/', dnsKeysHandler)
  .route('/', managedZoneOperationsHandler)
  .route('/', resourceRecordSetsHandler)
  .route('/', policiesHandler)
  .route('/', responsePoliciesHandler)
  .route('/', responsePolicyRulesHandler)

export default app
