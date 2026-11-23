import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIndexPhpAppsFederatedfilesharingCreateFederatedShareRoute,
  postOcsV2PhpCloudSharesIdAcceptRoute,
  postOcsV2PhpCloudSharesIdDeclineRoute,
  postOcsV2PhpCloudSharesIdMoveRoute,
  postOcsV2PhpCloudSharesIdPermissionsRoute,
  postOcsV2PhpCloudSharesIdReshareRoute,
  postOcsV2PhpCloudSharesIdRevokeRoute,
  postOcsV2PhpCloudSharesIdUnshareRoute,
  postOcsV2PhpCloudSharesRoute,
} from './routes'
import {
  postIndexPhpAppsFederatedfilesharingCreateFederatedShareRouteHandler,
  postOcsV2PhpCloudSharesIdAcceptRouteHandler,
  postOcsV2PhpCloudSharesIdDeclineRouteHandler,
  postOcsV2PhpCloudSharesIdMoveRouteHandler,
  postOcsV2PhpCloudSharesIdPermissionsRouteHandler,
  postOcsV2PhpCloudSharesIdReshareRouteHandler,
  postOcsV2PhpCloudSharesIdRevokeRouteHandler,
  postOcsV2PhpCloudSharesIdUnshareRouteHandler,
  postOcsV2PhpCloudSharesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postIndexPhpAppsFederatedfilesharingCreateFederatedShareRoute,
    postIndexPhpAppsFederatedfilesharingCreateFederatedShareRouteHandler,
  )
  .openapi(postOcsV2PhpCloudSharesRoute, postOcsV2PhpCloudSharesRouteHandler)
  .openapi(postOcsV2PhpCloudSharesIdReshareRoute, postOcsV2PhpCloudSharesIdReshareRouteHandler)
  .openapi(
    postOcsV2PhpCloudSharesIdPermissionsRoute,
    postOcsV2PhpCloudSharesIdPermissionsRouteHandler,
  )
  .openapi(postOcsV2PhpCloudSharesIdAcceptRoute, postOcsV2PhpCloudSharesIdAcceptRouteHandler)
  .openapi(postOcsV2PhpCloudSharesIdDeclineRoute, postOcsV2PhpCloudSharesIdDeclineRouteHandler)
  .openapi(postOcsV2PhpCloudSharesIdUnshareRoute, postOcsV2PhpCloudSharesIdUnshareRouteHandler)
  .openapi(postOcsV2PhpCloudSharesIdRevokeRoute, postOcsV2PhpCloudSharesIdRevokeRouteHandler)
  .openapi(postOcsV2PhpCloudSharesIdMoveRoute, postOcsV2PhpCloudSharesIdMoveRouteHandler)

export default app
