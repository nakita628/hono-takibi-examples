import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSyncAckRoute,
  getSyncAckRoute,
  postSyncAckRoute,
  postSyncStreamRoute,
} from '../routes'

export const deleteSyncAckRouteHandler: RouteHandler<typeof deleteSyncAckRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSyncAckRouteHandler: RouteHandler<typeof getSyncAckRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSyncAckRouteHandler: RouteHandler<typeof postSyncAckRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSyncStreamRouteHandler: RouteHandler<typeof postSyncStreamRoute> = async (c) => {
  throw new Error('Not implemented')
}
