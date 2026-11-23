import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRadioCallSignBroadcastRoute,
  getRadioCallSignRoute,
  getRadioRoute,
} from '../routes'

export const getRadioRouteHandler: RouteHandler<typeof getRadioRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadioCallSignRouteHandler: RouteHandler<typeof getRadioCallSignRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRadioCallSignBroadcastRouteHandler: RouteHandler<
  typeof getRadioCallSignBroadcastRoute
> = async (c) => {
  throw new Error('Not implemented')
}
