import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrganizationsOrganizationIdRoute,
  getOrganizationsRoute,
  optionsOrganizationsOrganizationIdRoute,
  optionsOrganizationsRoute,
  patchOrganizationsOrganizationIdRoute,
  postOrganizationsRoute,
} from '../routes'

export const getOrganizationsRouteHandler: RouteHandler<typeof getOrganizationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const optionsOrganizationsRouteHandler: RouteHandler<
  typeof optionsOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsRouteHandler: RouteHandler<typeof postOrganizationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsOrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof optionsOrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof patchOrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
