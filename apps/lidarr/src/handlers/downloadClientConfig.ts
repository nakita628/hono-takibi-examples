import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ConfigDownloadclientIdRoute,
  getApiV1ConfigDownloadclientRoute,
  putApiV1ConfigDownloadclientIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const downloadClientConfigHandler = app
  .openapi(getApiV1ConfigDownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigDownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigDownloadclientRoute, (c) => {
    throw new Error('Not implemented')
  })
