import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attachmentsHandler,
  connectAttachmentsHandler,
  connectPeersHandler,
  coreNetworksHandler,
  globalNetworksHandler,
  organizationsHandler,
  peeringsHandler,
  resourcePolicyHandler,
  siteToSiteVpnAttachmentsHandler,
  tagsHandler,
  transitGatewayPeeringsHandler,
  transitGatewayRouteTableAttachmentsHandler,
  vpcAttachmentsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', attachmentsHandler)
  .route('/', globalNetworksHandler)
  .route('/', connectAttachmentsHandler)
  .route('/', connectPeersHandler)
  .route('/', coreNetworksHandler)
  .route('/', siteToSiteVpnAttachmentsHandler)
  .route('/', transitGatewayPeeringsHandler)
  .route('/', transitGatewayRouteTableAttachmentsHandler)
  .route('/', vpcAttachmentsHandler)
  .route('/', peeringsHandler)
  .route('/', resourcePolicyHandler)
  .route('/', organizationsHandler)
  .route('/', tagsHandler)

export default app
