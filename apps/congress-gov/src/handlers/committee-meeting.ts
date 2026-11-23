import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCommitteeMeetingCongressChamberEventIdRoute,
  getCommitteeMeetingCongressChamberRoute,
  getCommitteeMeetingCongressRoute,
  getCommitteeMeetingRoute,
} from '../routes'

export const getCommitteeMeetingRouteHandler: RouteHandler<
  typeof getCommitteeMeetingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommitteeMeetingCongressRouteHandler: RouteHandler<
  typeof getCommitteeMeetingCongressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommitteeMeetingCongressChamberRouteHandler: RouteHandler<
  typeof getCommitteeMeetingCongressChamberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommitteeMeetingCongressChamberEventIdRouteHandler: RouteHandler<
  typeof getCommitteeMeetingCongressChamberEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
