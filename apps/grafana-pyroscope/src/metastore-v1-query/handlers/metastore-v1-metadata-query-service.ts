import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postMetastoreV1MetadataQueryServiceQueryMetadataLabelsRoute,
  postMetastoreV1MetadataQueryServiceQueryMetadataRoute,
} from '../routes'

export const postMetastoreV1MetadataQueryServiceQueryMetadataRouteHandler: RouteHandler<
  typeof postMetastoreV1MetadataQueryServiceQueryMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetastoreV1MetadataQueryServiceQueryMetadataLabelsRouteHandler: RouteHandler<
  typeof postMetastoreV1MetadataQueryServiceQueryMetadataLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
