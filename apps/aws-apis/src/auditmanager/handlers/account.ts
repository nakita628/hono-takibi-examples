import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountOrganizationAdminAccountRoute,
  getAccountStatusRoute,
  postAccountDeregisterAccountRoute,
  postAccountDeregisterOrganizationAdminAccountRoute,
  postAccountRegisterAccountRoute,
  postAccountRegisterOrganizationAdminAccountRoute,
} from '../routes'

export const postAccountDeregisterAccountRouteHandler: RouteHandler<
  typeof postAccountDeregisterAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountDeregisterOrganizationAdminAccountRouteHandler: RouteHandler<
  typeof postAccountDeregisterOrganizationAdminAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountStatusRouteHandler: RouteHandler<typeof getAccountStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAccountOrganizationAdminAccountRouteHandler: RouteHandler<
  typeof getAccountOrganizationAdminAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountRegisterAccountRouteHandler: RouteHandler<
  typeof postAccountRegisterAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountRegisterOrganizationAdminAccountRouteHandler: RouteHandler<
  typeof postAccountRegisterOrganizationAdminAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
