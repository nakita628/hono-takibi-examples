import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNominationCongressNominationNumberActionsRoute,
  getNominationCongressNominationNumberCommitteesRoute,
  getNominationCongressNominationNumberHearingsRoute,
  getNominationCongressNominationNumberOrdinalRoute,
  getNominationCongressNominationNumberRoute,
  getNominationCongressRoute,
  getNominationRoute,
} from '../routes'

export const getNominationRouteHandler: RouteHandler<typeof getNominationRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getNominationCongressRouteHandler: RouteHandler<
  typeof getNominationCongressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNominationCongressNominationNumberRouteHandler: RouteHandler<
  typeof getNominationCongressNominationNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNominationCongressNominationNumberOrdinalRouteHandler: RouteHandler<
  typeof getNominationCongressNominationNumberOrdinalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNominationCongressNominationNumberActionsRouteHandler: RouteHandler<
  typeof getNominationCongressNominationNumberActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNominationCongressNominationNumberCommitteesRouteHandler: RouteHandler<
  typeof getNominationCongressNominationNumberCommitteesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNominationCongressNominationNumberHearingsRouteHandler: RouteHandler<
  typeof getNominationCongressNominationNumberHearingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
