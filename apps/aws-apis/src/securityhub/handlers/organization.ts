import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrganizationAdminRoute,
  getOrganizationConfigurationRoute,
  postOrganizationAdminDisableRoute,
  postOrganizationAdminEnableRoute,
  postOrganizationConfigurationRoute,
} from '../routes'

export const getOrganizationConfigurationRouteHandler: RouteHandler<
  typeof getOrganizationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationConfigurationRouteHandler: RouteHandler<
  typeof postOrganizationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationAdminDisableRouteHandler: RouteHandler<
  typeof postOrganizationAdminDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationAdminEnableRouteHandler: RouteHandler<
  typeof postOrganizationAdminEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationAdminRouteHandler: RouteHandler<
  typeof getOrganizationAdminRoute
> = async (c) => {
  throw new Error('Not implemented')
}
