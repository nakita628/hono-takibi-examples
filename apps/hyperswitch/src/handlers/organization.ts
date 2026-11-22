import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrganizationIdRoute,
  postOrganizationRoute,
  putOrganizationIdRoute,
} from '../routes'

export const postOrganizationRouteHandler: RouteHandler<typeof postOrganizationRoute> = async (
  c,
) => {}

export const getOrganizationIdRouteHandler: RouteHandler<typeof getOrganizationIdRoute> = async (
  c,
) => {}

export const putOrganizationIdRouteHandler: RouteHandler<typeof putOrganizationIdRoute> = async (
  c,
) => {}
