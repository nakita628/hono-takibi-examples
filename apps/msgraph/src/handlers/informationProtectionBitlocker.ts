import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInformationProtectionBitlockerRecoveryKeysBitlockerRecoveryKeyIdRoute,
  getInformationProtectionBitlockerRecoveryKeysCountRoute,
  getInformationProtectionBitlockerRecoveryKeysRoute,
  getInformationProtectionBitlockerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const informationProtectionBitlockerHandler = app
  .openapi(getInformationProtectionBitlockerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInformationProtectionBitlockerRecoveryKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInformationProtectionBitlockerRecoveryKeysBitlockerRecoveryKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInformationProtectionBitlockerRecoveryKeysCountRoute, (c) => {
    throw new Error('Not implemented')
  })
