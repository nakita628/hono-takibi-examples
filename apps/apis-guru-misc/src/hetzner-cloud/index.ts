import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionsHandler,
  certificateActionsHandler,
  certificatesHandler,
  datacentersHandler,
  firewallActionsHandler,
  firewallsHandler,
  floatingIPActionsHandler,
  floatingIPsHandler,
  imageActionsHandler,
  imagesHandler,
  isOsHandler,
  loadBalancerActionsHandler,
  loadBalancersHandler,
  loadBalancerTypesHandler,
  locationsHandler,
  networkActionsHandler,
  networksHandler,
  placementGroupsHandler,
  pricingHandler,
  primaryIPActionsHandler,
  primaryIPsHandler,
  serverActionsHandler,
  serversHandler,
  serverTypesHandler,
  sshKeysHandler,
  volumeActionsHandler,
  volumesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionsHandler)
  .route('/', certificatesHandler)
  .route('/', certificateActionsHandler)
  .route('/', datacentersHandler)
  .route('/', firewallsHandler)
  .route('/', firewallActionsHandler)
  .route('/', floatingIPsHandler)
  .route('/', floatingIPActionsHandler)
  .route('/', imagesHandler)
  .route('/', imageActionsHandler)
  .route('/', isOsHandler)
  .route('/', loadBalancerTypesHandler)
  .route('/', loadBalancersHandler)
  .route('/', loadBalancerActionsHandler)
  .route('/', locationsHandler)
  .route('/', networksHandler)
  .route('/', networkActionsHandler)
  .route('/', placementGroupsHandler)
  .route('/', pricingHandler)
  .route('/', primaryIPsHandler)
  .route('/', primaryIPActionsHandler)
  .route('/', serverTypesHandler)
  .route('/', serversHandler)
  .route('/', serverActionsHandler)
  .route('/', sshKeysHandler)
  .route('/', volumesHandler)
  .route('/', volumeActionsHandler)

export default app
