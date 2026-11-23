import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionsHandler,
  certificatesHandler,
  datacentersHandler,
  firewallsHandler,
  floatingIpsHandler,
  imagesHandler,
  isosHandler,
  loadBalancersHandler,
  loadBalancerTypesHandler,
  locationsHandler,
  networksHandler,
  placementGroupsHandler,
  pricingHandler,
  primaryIpsHandler,
  serversHandler,
  serverTypesHandler,
  sshKeysHandler,
  volumesHandler,
  zonesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionsHandler)
  .route('/', certificatesHandler)
  .route('/', datacentersHandler)
  .route('/', firewallsHandler)
  .route('/', floatingIpsHandler)
  .route('/', imagesHandler)
  .route('/', isosHandler)
  .route('/', loadBalancerTypesHandler)
  .route('/', loadBalancersHandler)
  .route('/', locationsHandler)
  .route('/', networksHandler)
  .route('/', placementGroupsHandler)
  .route('/', pricingHandler)
  .route('/', primaryIpsHandler)
  .route('/', serverTypesHandler)
  .route('/', serversHandler)
  .route('/', sshKeysHandler)
  .route('/', volumesHandler)
  .route('/', zonesHandler)

export default app
