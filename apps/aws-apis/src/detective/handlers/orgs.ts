import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postOrgsAdminAccountslistRoute,
  postOrgsDescribeOrganizationConfigurationRoute,
  postOrgsDisableAdminAccountRoute,
  postOrgsEnableAdminAccountRoute,
  postOrgsUpdateOrganizationConfigurationRoute,
} from '../routes'

export const postOrgsDescribeOrganizationConfigurationRouteHandler: RouteHandler<
  typeof postOrgsDescribeOrganizationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsDisableAdminAccountRouteHandler: RouteHandler<
  typeof postOrgsDisableAdminAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsEnableAdminAccountRouteHandler: RouteHandler<
  typeof postOrgsEnableAdminAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsAdminAccountslistRouteHandler: RouteHandler<
  typeof postOrgsAdminAccountslistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsUpdateOrganizationConfigurationRouteHandler: RouteHandler<
  typeof postOrgsUpdateOrganizationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
