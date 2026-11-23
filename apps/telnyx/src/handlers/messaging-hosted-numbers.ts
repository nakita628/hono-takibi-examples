import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMessagingHostedNumbersIdRoute,
  getMessagingHostedNumbers2Route,
  getMessagingHostedNumbersIdRoute,
  patchMessagingHostedNumbersIdRoute,
} from '../routes'

export const getMessagingHostedNumbers2RouteHandler: RouteHandler<
  typeof getMessagingHostedNumbers2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMessagingHostedNumbersIdRouteHandler: RouteHandler<
  typeof deleteMessagingHostedNumbersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagingHostedNumbersIdRouteHandler: RouteHandler<
  typeof getMessagingHostedNumbersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMessagingHostedNumbersIdRouteHandler: RouteHandler<
  typeof patchMessagingHostedNumbersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
