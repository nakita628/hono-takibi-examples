import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMetastoreV1MetadataQueryServiceQueryMetadataLabelsRoute,
  postMetastoreV1MetadataQueryServiceQueryMetadataRoute,
} from './routes'
import {
  postMetastoreV1MetadataQueryServiceQueryMetadataLabelsRouteHandler,
  postMetastoreV1MetadataQueryServiceQueryMetadataRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postMetastoreV1MetadataQueryServiceQueryMetadataRoute,
    postMetastoreV1MetadataQueryServiceQueryMetadataRouteHandler,
  )
  .openapi(
    postMetastoreV1MetadataQueryServiceQueryMetadataLabelsRoute,
    postMetastoreV1MetadataQueryServiceQueryMetadataLabelsRouteHandler,
  )

export default app
