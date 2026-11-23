import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetIoTSecuredTunnelingCloseTunnelRoute,
  postXAmzTargetIoTSecuredTunnelingDescribeTunnelRoute,
  postXAmzTargetIoTSecuredTunnelingListTagsForResourceRoute,
  postXAmzTargetIoTSecuredTunnelingListTunnelsRoute,
  postXAmzTargetIoTSecuredTunnelingOpenTunnelRoute,
  postXAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenRoute,
  postXAmzTargetIoTSecuredTunnelingTagResourceRoute,
  postXAmzTargetIoTSecuredTunnelingUntagResourceRoute,
} from './routes'
import {
  postXAmzTargetIoTSecuredTunnelingCloseTunnelRouteHandler,
  postXAmzTargetIoTSecuredTunnelingDescribeTunnelRouteHandler,
  postXAmzTargetIoTSecuredTunnelingListTagsForResourceRouteHandler,
  postXAmzTargetIoTSecuredTunnelingListTunnelsRouteHandler,
  postXAmzTargetIoTSecuredTunnelingOpenTunnelRouteHandler,
  postXAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenRouteHandler,
  postXAmzTargetIoTSecuredTunnelingTagResourceRouteHandler,
  postXAmzTargetIoTSecuredTunnelingUntagResourceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetIoTSecuredTunnelingCloseTunnelRoute,
    postXAmzTargetIoTSecuredTunnelingCloseTunnelRouteHandler,
  )
  .openapi(
    postXAmzTargetIoTSecuredTunnelingDescribeTunnelRoute,
    postXAmzTargetIoTSecuredTunnelingDescribeTunnelRouteHandler,
  )
  .openapi(
    postXAmzTargetIoTSecuredTunnelingListTagsForResourceRoute,
    postXAmzTargetIoTSecuredTunnelingListTagsForResourceRouteHandler,
  )
  .openapi(
    postXAmzTargetIoTSecuredTunnelingListTunnelsRoute,
    postXAmzTargetIoTSecuredTunnelingListTunnelsRouteHandler,
  )
  .openapi(
    postXAmzTargetIoTSecuredTunnelingOpenTunnelRoute,
    postXAmzTargetIoTSecuredTunnelingOpenTunnelRouteHandler,
  )
  .openapi(
    postXAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenRoute,
    postXAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenRouteHandler,
  )
  .openapi(
    postXAmzTargetIoTSecuredTunnelingTagResourceRoute,
    postXAmzTargetIoTSecuredTunnelingTagResourceRouteHandler,
  )
  .openapi(
    postXAmzTargetIoTSecuredTunnelingUntagResourceRoute,
    postXAmzTargetIoTSecuredTunnelingUntagResourceRouteHandler,
  )

export default app
