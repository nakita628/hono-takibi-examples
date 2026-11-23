import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getHouseCommunicationCongressCommunicationTypeCommunicationNumberRoute,
  getHouseCommunicationCongressCommunicationTypeRoute,
  getHouseCommunicationCongressRoute,
  getHouseCommunicationRoute,
} from '../routes'

export const getHouseCommunicationRouteHandler: RouteHandler<
  typeof getHouseCommunicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHouseCommunicationCongressRouteHandler: RouteHandler<
  typeof getHouseCommunicationCongressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHouseCommunicationCongressCommunicationTypeRouteHandler: RouteHandler<
  typeof getHouseCommunicationCongressCommunicationTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHouseCommunicationCongressCommunicationTypeCommunicationNumberRouteHandler: RouteHandler<
  typeof getHouseCommunicationCongressCommunicationTypeCommunicationNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
