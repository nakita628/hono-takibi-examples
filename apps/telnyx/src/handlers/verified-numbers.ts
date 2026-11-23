import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVerifiedNumbersPhoneNumberRoute,
  getVerifiedNumbersPhoneNumberRoute,
  getVerifiedNumbersRoute,
  postVerifiedNumbersPhoneNumberActionsVerifyRoute,
  postVerifiedNumbersRoute,
} from '../routes'

export const getVerifiedNumbersRouteHandler: RouteHandler<typeof getVerifiedNumbersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postVerifiedNumbersRouteHandler: RouteHandler<
  typeof postVerifiedNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVerifiedNumbersPhoneNumberRouteHandler: RouteHandler<
  typeof deleteVerifiedNumbersPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVerifiedNumbersPhoneNumberRouteHandler: RouteHandler<
  typeof getVerifiedNumbersPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVerifiedNumbersPhoneNumberActionsVerifyRouteHandler: RouteHandler<
  typeof postVerifiedNumbersPhoneNumberActionsVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
