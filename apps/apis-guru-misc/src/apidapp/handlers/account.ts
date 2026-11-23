import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountIdRoute,
  optionsAccountIdRoute,
  optionsAccountRoute,
  postAccountRoute,
} from '../routes'

export const optionsAccountRouteHandler: RouteHandler<typeof optionsAccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountRouteHandler: RouteHandler<typeof postAccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountIdRouteHandler: RouteHandler<typeof getAccountIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAccountIdRouteHandler: RouteHandler<typeof optionsAccountIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
