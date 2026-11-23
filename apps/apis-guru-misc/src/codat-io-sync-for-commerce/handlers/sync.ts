import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSyncCommerceConfigUiTextRoute,
  patchSyncCommerceConfigUiAccountsPlatformCommerceKeyRoute,
  patchSyncCommerceConfigUiTextRoute,
} from '../routes'

const app = new OpenAPIHono()

export const syncHandler = app
  .openapi(patchSyncCommerceConfigUiAccountsPlatformCommerceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSyncCommerceConfigUiTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSyncCommerceConfigUiTextRoute, (c) => {
    throw new Error('Not implemented')
  })
