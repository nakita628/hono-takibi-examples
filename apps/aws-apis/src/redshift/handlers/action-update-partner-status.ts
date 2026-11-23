import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdatePartnerStatusRoute,
  postActionUpdatePartnerStatusRoute,
} from '../routes'

export const getActionUpdatePartnerStatusRouteHandler: RouteHandler<
  typeof getActionUpdatePartnerStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdatePartnerStatusRouteHandler: RouteHandler<
  typeof postActionUpdatePartnerStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
