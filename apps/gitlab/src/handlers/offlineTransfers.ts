import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4OfflineExportsIdRoute,
  getApiV4OfflineExportsRoute,
  postApiV4OfflineExportsRoute,
  postApiV4OfflineImportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const offlineTransfersHandler = app
  .openapi(postApiV4OfflineExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4OfflineExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4OfflineExportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4OfflineImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
