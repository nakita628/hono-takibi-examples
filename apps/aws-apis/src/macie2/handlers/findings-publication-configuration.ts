import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFindingsPublicationConfigurationRoute,
  putFindingsPublicationConfigurationRoute,
} from '../routes'

export const getFindingsPublicationConfigurationRouteHandler: RouteHandler<
  typeof getFindingsPublicationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putFindingsPublicationConfigurationRouteHandler: RouteHandler<
  typeof putFindingsPublicationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
