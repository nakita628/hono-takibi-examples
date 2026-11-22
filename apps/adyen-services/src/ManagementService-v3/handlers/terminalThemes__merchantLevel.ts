import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantsMerchantIdTerminalThemesIdAssetsRoute,
  deleteMerchantsMerchantIdTerminalThemesIdRoute,
  getMerchantsMerchantIdTerminalThemesIdRoute,
  getMerchantsMerchantIdTerminalThemesRoute,
  patchMerchantsMerchantIdTerminalThemesIdRoute,
  postMerchantsMerchantIdTerminalThemesIdApplyRoute,
  postMerchantsMerchantIdTerminalThemesIdAssetsReplaceRoute,
  postMerchantsMerchantIdTerminalThemesIdAssetsRoute,
  postMerchantsMerchantIdTerminalThemesRoute,
  postMerchantsMerchantIdTerminalThemesUnapplyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terminalThemes__merchantLevelHandler = app
  .openapi(getMerchantsMerchantIdTerminalThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdTerminalThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdTerminalThemesUnapplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdTerminalThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantsMerchantIdTerminalThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdTerminalThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdTerminalThemesIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdTerminalThemesIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantsMerchantIdTerminalThemesIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdTerminalThemesIdAssetsReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })
