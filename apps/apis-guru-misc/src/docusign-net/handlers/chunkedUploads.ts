import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdChunkedUploadsChunkedUploadIdRoute,
  getV21AccountsAccountIdChunkedUploadsChunkedUploadIdRoute,
  postV21AccountsAccountIdChunkedUploadsRoute,
  putV21AccountsAccountIdChunkedUploadsChunkedUploadIdChunkedUploadPartSeqRoute,
  putV21AccountsAccountIdChunkedUploadsChunkedUploadIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chunkedUploadsHandler = app
  .openapi(postV21AccountsAccountIdChunkedUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdChunkedUploadsChunkedUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdChunkedUploadsChunkedUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdChunkedUploadsChunkedUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdChunkedUploadsChunkedUploadIdChunkedUploadPartSeqRoute, (c) => {
    throw new Error('Not implemented')
  })
