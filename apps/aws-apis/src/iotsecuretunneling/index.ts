import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetIoTSecuredTunnelingCloseTunnelHandler,
  XAmzTargetIoTSecuredTunnelingDescribeTunnelHandler,
  XAmzTargetIoTSecuredTunnelingListTagsForResourceHandler,
  XAmzTargetIoTSecuredTunnelingListTunnelsHandler,
  XAmzTargetIoTSecuredTunnelingOpenTunnelHandler,
  XAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenHandler,
  XAmzTargetIoTSecuredTunnelingTagResourceHandler,
  XAmzTargetIoTSecuredTunnelingUntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetIoTSecuredTunnelingCloseTunnelHandler)
  .route('/', XAmzTargetIoTSecuredTunnelingDescribeTunnelHandler)
  .route('/', XAmzTargetIoTSecuredTunnelingListTagsForResourceHandler)
  .route('/', XAmzTargetIoTSecuredTunnelingListTunnelsHandler)
  .route('/', XAmzTargetIoTSecuredTunnelingOpenTunnelHandler)
  .route('/', XAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenHandler)
  .route('/', XAmzTargetIoTSecuredTunnelingTagResourceHandler)
  .route('/', XAmzTargetIoTSecuredTunnelingUntagResourceHandler)

export default app
