import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3DownloadclientBulkRoute,
  deleteApiV3DownloadclientIdRoute,
  getApiV3DownloadclientIdRoute,
  getApiV3DownloadclientRoute,
  getApiV3DownloadclientSchemaRoute,
  postApiV3DownloadclientActionNameRoute,
  postApiV3DownloadclientRoute,
  postApiV3DownloadclientTestallRoute,
  postApiV3DownloadclientTestRoute,
  putApiV3DownloadclientBulkRoute,
  putApiV3DownloadclientIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const downloadClientHandler = app
  .openapi(getApiV3DownloadclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3DownloadclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3DownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3DownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3DownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3DownloadclientBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3DownloadclientBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3DownloadclientSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3DownloadclientTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3DownloadclientTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3DownloadclientActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
