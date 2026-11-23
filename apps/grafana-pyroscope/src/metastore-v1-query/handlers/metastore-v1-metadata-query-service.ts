import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMetastoreV1MetadataQueryServiceQueryMetadataLabelsRoute,
  postMetastoreV1MetadataQueryServiceQueryMetadataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metastoreV1MetadataQueryServiceHandler = app
  .openapi(postMetastoreV1MetadataQueryServiceQueryMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetastoreV1MetadataQueryServiceQueryMetadataLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
