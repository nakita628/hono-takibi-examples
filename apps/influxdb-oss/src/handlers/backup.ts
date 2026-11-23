import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBackupKvRoute,
  getBackupMetadataRoute,
  getBackupShardsShardIDRoute,
} from '../routes'

export const getBackupKvRouteHandler: RouteHandler<typeof getBackupKvRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBackupMetadataRouteHandler: RouteHandler<typeof getBackupMetadataRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBackupShardsShardIDRouteHandler: RouteHandler<
  typeof getBackupShardsShardIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
