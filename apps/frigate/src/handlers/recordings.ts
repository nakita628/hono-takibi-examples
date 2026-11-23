import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRecordingsStartStartEndEndRoute,
  getRecordingsStorageRoute,
  getRecordingsSummaryRoute,
  getRecordingsUnavailableRoute,
} from '../routes'

export const getRecordingsStorageRouteHandler: RouteHandler<
  typeof getRecordingsStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecordingsSummaryRouteHandler: RouteHandler<
  typeof getRecordingsSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecordingsUnavailableRouteHandler: RouteHandler<
  typeof getRecordingsUnavailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRecordingsStartStartEndEndRouteHandler: RouteHandler<
  typeof deleteRecordingsStartStartEndEndRoute
> = async (c) => {
  throw new Error('Not implemented')
}
