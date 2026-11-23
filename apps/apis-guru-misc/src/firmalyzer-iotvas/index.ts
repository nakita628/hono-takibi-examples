import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFirmwareFirmwareHashAccountsRoute,
  getFirmwareFirmwareHashConfigIssuesRoute,
  getFirmwareFirmwareHashExpiredCertsRoute,
  getFirmwareFirmwareHashPrivateKeysRoute,
  getFirmwareFirmwareHashRiskRoute,
  getFirmwareFirmwareHashWeakCertsRoute,
  getFirmwareFirmwareHashWeakKeysRoute,
  postDeviceDetectRoute,
} from './routes'
import {
  getFirmwareFirmwareHashAccountsRouteHandler,
  getFirmwareFirmwareHashConfigIssuesRouteHandler,
  getFirmwareFirmwareHashExpiredCertsRouteHandler,
  getFirmwareFirmwareHashPrivateKeysRouteHandler,
  getFirmwareFirmwareHashRiskRouteHandler,
  getFirmwareFirmwareHashWeakCertsRouteHandler,
  getFirmwareFirmwareHashWeakKeysRouteHandler,
  postDeviceDetectRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDeviceDetectRoute, postDeviceDetectRouteHandler)
  .openapi(getFirmwareFirmwareHashAccountsRoute, getFirmwareFirmwareHashAccountsRouteHandler)
  .openapi(
    getFirmwareFirmwareHashConfigIssuesRoute,
    getFirmwareFirmwareHashConfigIssuesRouteHandler,
  )
  .openapi(
    getFirmwareFirmwareHashExpiredCertsRoute,
    getFirmwareFirmwareHashExpiredCertsRouteHandler,
  )
  .openapi(getFirmwareFirmwareHashPrivateKeysRoute, getFirmwareFirmwareHashPrivateKeysRouteHandler)
  .openapi(getFirmwareFirmwareHashRiskRoute, getFirmwareFirmwareHashRiskRouteHandler)
  .openapi(getFirmwareFirmwareHashWeakCertsRoute, getFirmwareFirmwareHashWeakCertsRouteHandler)
  .openapi(getFirmwareFirmwareHashWeakKeysRoute, getFirmwareFirmwareHashWeakKeysRouteHandler)

export default app
