import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdMagicCfInterconnectsCfInterconnectIdRoute,
  getAccountsAccountIdMagicCfInterconnectsRoute,
  putAccountsAccountIdMagicCfInterconnectsCfInterconnectIdRoute,
  putAccountsAccountIdMagicCfInterconnectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicInterconnectsHandler = app
  .openapi(getAccountsAccountIdMagicCfInterconnectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicCfInterconnectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicCfInterconnectsCfInterconnectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicCfInterconnectsCfInterconnectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
