import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFirmwareFirmwareHashAccountsRoute,
  getFirmwareFirmwareHashConfigIssuesRoute,
  getFirmwareFirmwareHashExpiredCertsRoute,
  getFirmwareFirmwareHashPrivateKeysRoute,
  getFirmwareFirmwareHashRiskRoute,
  getFirmwareFirmwareHashWeakCertsRoute,
  getFirmwareFirmwareHashWeakKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const firmwareHandler = app
  .openapi(getFirmwareFirmwareHashAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFirmwareFirmwareHashConfigIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFirmwareFirmwareHashExpiredCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFirmwareFirmwareHashPrivateKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFirmwareFirmwareHashRiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFirmwareFirmwareHashWeakCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFirmwareFirmwareHashWeakKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
