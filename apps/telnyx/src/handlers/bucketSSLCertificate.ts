import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStorageBucketsBucketNameSslCertificateRoute,
  getStorageBucketsBucketNameSslCertificateRoute,
  putStorageBucketsBucketNameSslCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bucketSSLCertificateHandler = app
  .openapi(deleteStorageBucketsBucketNameSslCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageBucketsBucketNameSslCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStorageBucketsBucketNameSslCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
