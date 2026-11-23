import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrganisationActionsRoute,
  getOrganisationOrganisationIDCISSettingsRoute,
  getOrganisationRoute,
} from '../routes'

export const getOrganisationRouteHandler: RouteHandler<typeof getOrganisationRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationActionsRouteHandler: RouteHandler<
  typeof getOrganisationActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationOrganisationIDCISSettingsRouteHandler: RouteHandler<
  typeof getOrganisationOrganisationIDCISSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
