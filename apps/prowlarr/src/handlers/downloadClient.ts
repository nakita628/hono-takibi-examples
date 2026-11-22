import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1DownloadclientBulkRoute,
  deleteApiV1DownloadclientIdRoute,
  getApiV1DownloadclientIdRoute,
  getApiV1DownloadclientRoute,
  getApiV1DownloadclientSchemaRoute,
  postApiV1DownloadclientActionNameRoute,
  postApiV1DownloadclientRoute,
  postApiV1DownloadclientTestallRoute,
  postApiV1DownloadclientTestRoute,
  putApiV1DownloadclientBulkRoute,
  putApiV1DownloadclientIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const downloadClientHandler = app
  .openapi(getApiV1DownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DownloadclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DownloadclientBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DownloadclientBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DownloadclientSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadclientTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadclientTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadclientActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
