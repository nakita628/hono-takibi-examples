import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountGetBalanceRoute,
  postAccountRegisterSenderRoute,
  postAccountSettingsRoute,
  postAccountTopUpRoute,
} from '../routes'

export const getAccountGetBalanceRouteHandler: RouteHandler<
  typeof getAccountGetBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountRegisterSenderRouteHandler: RouteHandler<
  typeof postAccountRegisterSenderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountSettingsRouteHandler: RouteHandler<
  typeof postAccountSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountTopUpRouteHandler: RouteHandler<typeof postAccountTopUpRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
