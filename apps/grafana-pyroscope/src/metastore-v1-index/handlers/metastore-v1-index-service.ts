import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postMetastoreV1IndexServiceAddBlockRoute,
  postMetastoreV1IndexServiceGetBlockMetadataRoute,
} from '../routes'

export const postMetastoreV1IndexServiceAddBlockRouteHandler: RouteHandler<
  typeof postMetastoreV1IndexServiceAddBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetastoreV1IndexServiceGetBlockMetadataRouteHandler: RouteHandler<
  typeof postMetastoreV1IndexServiceGetBlockMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
