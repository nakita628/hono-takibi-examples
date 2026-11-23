import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTaxesCodeRoute,
  getTaxesCodeRoute,
  getTaxesRoute,
  postTaxesRoute,
  putTaxesCodeRoute,
} from '../routes'

export const postTaxesRouteHandler: RouteHandler<typeof postTaxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaxesRouteHandler: RouteHandler<typeof getTaxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTaxesCodeRouteHandler: RouteHandler<typeof putTaxesCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaxesCodeRouteHandler: RouteHandler<typeof getTaxesCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTaxesCodeRouteHandler: RouteHandler<typeof deleteTaxesCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}
