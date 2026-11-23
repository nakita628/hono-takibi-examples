import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBlockIdRoute,
  getBlockIdTransactionIndexRoute,
  getBlockIdTransactionRoute,
  getBlockRoute,
  optionsBlockIdRoute,
  optionsBlockIdTransactionIndexRoute,
  optionsBlockIdTransactionRoute,
  optionsBlockRoute,
} from '../routes'

export const getBlockRouteHandler: RouteHandler<typeof getBlockRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsBlockRouteHandler: RouteHandler<typeof optionsBlockRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlockIdRouteHandler: RouteHandler<typeof getBlockIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsBlockIdRouteHandler: RouteHandler<typeof optionsBlockIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlockIdTransactionRouteHandler: RouteHandler<
  typeof getBlockIdTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsBlockIdTransactionRouteHandler: RouteHandler<
  typeof optionsBlockIdTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlockIdTransactionIndexRouteHandler: RouteHandler<
  typeof getBlockIdTransactionIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsBlockIdTransactionIndexRouteHandler: RouteHandler<
  typeof optionsBlockIdTransactionIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
