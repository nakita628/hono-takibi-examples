import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3ConfigDownloadclientIdRoute,
  getApiV3ConfigDownloadclientRoute,
  putApiV3ConfigDownloadclientIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const downloadClientConfigHandler = app
  .openapi(getApiV3ConfigDownloadclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ConfigDownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigDownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
