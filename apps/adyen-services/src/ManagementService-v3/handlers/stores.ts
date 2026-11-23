import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStoresRoute,
  getStoresStoreIdRoute,
  getStoresStoreIdTerminalLogosRoute,
  getStoresStoreIdTerminalSettingsRoute,
  patchStoresStoreIdRoute,
  patchStoresStoreIdTerminalLogosRoute,
  patchStoresStoreIdTerminalSettingsRoute,
  postStoresRoute,
  postStoresStoreIdTerminalThemesIdApplyRoute,
  postStoresStoreIdTerminalThemesUnapplyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storesHandler = app
  .openapi(getStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoresStoreIdTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStoresStoreIdTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoresStoreIdTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStoresStoreIdTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoresStoreIdTerminalThemesUnapplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoresStoreIdTerminalThemesIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
