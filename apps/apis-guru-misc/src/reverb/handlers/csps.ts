import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCspsCategoriesRoute,
  getCspsFindRoute,
  getCspsIdRoute,
  getCspsRoute,
} from '../routes'

export const getCspsRouteHandler: RouteHandler<typeof getCspsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCspsCategoriesRouteHandler: RouteHandler<typeof getCspsCategoriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCspsFindRouteHandler: RouteHandler<typeof getCspsFindRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCspsIdRouteHandler: RouteHandler<typeof getCspsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
