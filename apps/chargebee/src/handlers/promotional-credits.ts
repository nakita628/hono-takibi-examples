import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPromotionalCreditsAccountCreditIdRoute,
  getPromotionalCreditsRoute,
  postPromotionalCreditsAddRoute,
  postPromotionalCreditsDeductRoute,
  postPromotionalCreditsSetRoute,
} from '../routes'

export const getPromotionalCreditsAccountCreditIdRouteHandler: RouteHandler<
  typeof getPromotionalCreditsAccountCreditIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPromotionalCreditsRouteHandler: RouteHandler<
  typeof getPromotionalCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPromotionalCreditsDeductRouteHandler: RouteHandler<
  typeof postPromotionalCreditsDeductRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPromotionalCreditsSetRouteHandler: RouteHandler<
  typeof postPromotionalCreditsSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPromotionalCreditsAddRouteHandler: RouteHandler<
  typeof postPromotionalCreditsAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}
