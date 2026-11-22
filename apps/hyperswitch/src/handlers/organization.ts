import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrganizationIdRoute,
  postOrganizationRoute,
  putOrganizationIdRoute,
} from '../routes'

export const postOrganizationRouteHandler: RouteHandler<typeof postOrganizationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOrganizationIdRouteHandler: RouteHandler<typeof getOrganizationIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putOrganizationIdRouteHandler: RouteHandler<typeof putOrganizationIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
