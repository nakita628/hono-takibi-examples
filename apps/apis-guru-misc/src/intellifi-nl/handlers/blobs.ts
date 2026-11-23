import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBlobsIdRoute,
  getBlobsIdDownloadFilenameRoute,
  getBlobsIdRoute,
  getBlobsRoute,
  postBlobsIdUploadRoute,
  postBlobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blobsHandler = app
  .openapi(getBlobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBlobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBlobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlobsIdDownloadFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBlobsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
