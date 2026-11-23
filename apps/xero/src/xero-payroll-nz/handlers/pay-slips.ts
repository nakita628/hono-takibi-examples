import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPaySlipsPaySlipIDRoute,
  getPaySlipsRoute,
  putPaySlipsPaySlipIDRoute,
} from '../routes'

export const getPaySlipsRouteHandler: RouteHandler<typeof getPaySlipsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaySlipsPaySlipIDRouteHandler: RouteHandler<
  typeof getPaySlipsPaySlipIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPaySlipsPaySlipIDRouteHandler: RouteHandler<
  typeof putPaySlipsPaySlipIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
