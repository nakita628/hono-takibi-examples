import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRollupJobIdRoute,
  getRollupDataIdRoute,
  getRollupDataRoute,
  getRollupJobIdRoute,
  getRollupJobRoute,
  postRollupJobIdStartRoute,
  postRollupJobIdStopRoute,
  putRollupJobIdRoute,
} from '../routes'

export const getRollupJobIdRouteHandler: RouteHandler<typeof getRollupJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putRollupJobIdRouteHandler: RouteHandler<typeof putRollupJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRollupJobIdRouteHandler: RouteHandler<typeof deleteRollupJobIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRollupJobRouteHandler: RouteHandler<typeof getRollupJobRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRollupDataIdRouteHandler: RouteHandler<typeof getRollupDataIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRollupDataRouteHandler: RouteHandler<typeof getRollupDataRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRollupJobIdStartRouteHandler: RouteHandler<
  typeof postRollupJobIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRollupJobIdStopRouteHandler: RouteHandler<
  typeof postRollupJobIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}
