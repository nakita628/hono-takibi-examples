import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postStoresStoreIdTerminalThemesIdApplyRoute,
  postStoresStoreIdTerminalThemesUnapplyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terminalThemes__storeLevelHandler = app
  .openapi(postStoresStoreIdTerminalThemesUnapplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoresStoreIdTerminalThemesIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
