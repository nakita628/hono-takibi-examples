import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFormatRotoBallerPremiumNewsByDateDateRoute,
  getFormatRotoBallerPremiumNewsByPlayerIDPlayeridRoute,
  getFormatRotoBallerPremiumNewsRoute,
} from '../routes'

export const getFormatRotoBallerPremiumNewsRouteHandler: RouteHandler<
  typeof getFormatRotoBallerPremiumNewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatRotoBallerPremiumNewsByDateDateRouteHandler: RouteHandler<
  typeof getFormatRotoBallerPremiumNewsByDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatRotoBallerPremiumNewsByPlayerIDPlayeridRouteHandler: RouteHandler<
  typeof getFormatRotoBallerPremiumNewsByPlayerIDPlayeridRoute
> = async (c) => {
  throw new Error('Not implemented')
}
