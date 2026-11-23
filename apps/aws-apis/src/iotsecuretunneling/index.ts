import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetIoTSecuredTunnelingCloseTunnelHandler,
  xAmzTargetIoTSecuredTunnelingDescribeTunnelHandler,
  xAmzTargetIoTSecuredTunnelingListTagsForResourceHandler,
  xAmzTargetIoTSecuredTunnelingListTunnelsHandler,
  xAmzTargetIoTSecuredTunnelingOpenTunnelHandler,
  xAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenHandler,
  xAmzTargetIoTSecuredTunnelingTagResourceHandler,
  xAmzTargetIoTSecuredTunnelingUntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetIoTSecuredTunnelingCloseTunnelHandler)
  .route('/', xAmzTargetIoTSecuredTunnelingDescribeTunnelHandler)
  .route('/', xAmzTargetIoTSecuredTunnelingListTagsForResourceHandler)
  .route('/', xAmzTargetIoTSecuredTunnelingListTunnelsHandler)
  .route('/', xAmzTargetIoTSecuredTunnelingOpenTunnelHandler)
  .route('/', xAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenHandler)
  .route('/', xAmzTargetIoTSecuredTunnelingTagResourceHandler)
  .route('/', xAmzTargetIoTSecuredTunnelingUntagResourceHandler)

export default app
