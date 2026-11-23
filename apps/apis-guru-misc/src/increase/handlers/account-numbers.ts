import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountNumbersAccountNumberIdRoute,
  getAccountNumbersRoute,
  patchAccountNumbersAccountNumberIdRoute,
  postAccountNumbersRoute,
} from '../routes'

export const getAccountNumbersRouteHandler: RouteHandler<typeof getAccountNumbersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAccountNumbersRouteHandler: RouteHandler<typeof postAccountNumbersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAccountNumbersAccountNumberIdRouteHandler: RouteHandler<
  typeof getAccountNumbersAccountNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAccountNumbersAccountNumberIdRouteHandler: RouteHandler<
  typeof patchAccountNumbersAccountNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
