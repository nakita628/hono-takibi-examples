import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBlocksEpochEpochNumberSlotSlotNumberRoute,
  getBlocksHashOrNumberAddressesRoute,
  getBlocksHashOrNumberNextRoute,
  getBlocksHashOrNumberPreviousRoute,
  getBlocksHashOrNumberRoute,
  getBlocksHashOrNumberTxsCborRoute,
  getBlocksHashOrNumberTxsRoute,
  getBlocksLatestRoute,
  getBlocksLatestTxsCborRoute,
  getBlocksLatestTxsRoute,
  getBlocksSlotSlotNumberRoute,
} from '../routes'

export const getBlocksLatestRouteHandler: RouteHandler<typeof getBlocksLatestRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlocksLatestTxsRouteHandler: RouteHandler<typeof getBlocksLatestTxsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBlocksLatestTxsCborRouteHandler: RouteHandler<
  typeof getBlocksLatestTxsCborRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlocksHashOrNumberRouteHandler: RouteHandler<
  typeof getBlocksHashOrNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlocksHashOrNumberNextRouteHandler: RouteHandler<
  typeof getBlocksHashOrNumberNextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlocksHashOrNumberPreviousRouteHandler: RouteHandler<
  typeof getBlocksHashOrNumberPreviousRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlocksSlotSlotNumberRouteHandler: RouteHandler<
  typeof getBlocksSlotSlotNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlocksEpochEpochNumberSlotSlotNumberRouteHandler: RouteHandler<
  typeof getBlocksEpochEpochNumberSlotSlotNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlocksHashOrNumberTxsRouteHandler: RouteHandler<
  typeof getBlocksHashOrNumberTxsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlocksHashOrNumberTxsCborRouteHandler: RouteHandler<
  typeof getBlocksHashOrNumberTxsCborRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlocksHashOrNumberAddressesRouteHandler: RouteHandler<
  typeof getBlocksHashOrNumberAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
