import type { RouteHandler } from '@hono/zod-openapi'
import type { getBenefitsIdRoute, getBenefitsRoute, postBenefitsRoute } from '../routes'

export const getBenefitsRouteHandler: RouteHandler<typeof getBenefitsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBenefitsRouteHandler: RouteHandler<typeof postBenefitsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBenefitsIdRouteHandler: RouteHandler<typeof getBenefitsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
