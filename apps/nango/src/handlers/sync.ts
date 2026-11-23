import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSyncNameVariantVariantRoute,
  getSyncStatusRoute,
  postSyncNameVariantVariantRoute,
  postSyncPauseRoute,
  postSyncStartRoute,
  postSyncTriggerRoute,
  putSyncUpdateConnectionFrequencyRoute,
} from '../routes'

export const postSyncTriggerRouteHandler: RouteHandler<typeof postSyncTriggerRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSyncStartRouteHandler: RouteHandler<typeof postSyncStartRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSyncPauseRouteHandler: RouteHandler<typeof postSyncPauseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSyncStatusRouteHandler: RouteHandler<typeof getSyncStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSyncNameVariantVariantRouteHandler: RouteHandler<
  typeof postSyncNameVariantVariantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSyncNameVariantVariantRouteHandler: RouteHandler<
  typeof deleteSyncNameVariantVariantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSyncUpdateConnectionFrequencyRouteHandler: RouteHandler<
  typeof putSyncUpdateConnectionFrequencyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
