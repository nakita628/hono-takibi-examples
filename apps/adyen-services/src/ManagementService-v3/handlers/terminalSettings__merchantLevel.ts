import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantsMerchantIdTerminalLogosRoute,
  getMerchantsMerchantIdTerminalSettingsRoute,
  patchMerchantsMerchantIdTerminalLogosRoute,
  patchMerchantsMerchantIdTerminalSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terminalSettings__merchantLevelHandler = app
  .openapi(getMerchantsMerchantIdTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
