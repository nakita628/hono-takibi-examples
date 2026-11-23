import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAddOnsCodeRoute,
  getAddOnsCodeRoute,
  getAddOnsRoute,
  postAddOnsRoute,
  putAddOnsCodeRoute,
} from '../routes'

export const postAddOnsRouteHandler: RouteHandler<typeof postAddOnsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAddOnsRouteHandler: RouteHandler<typeof getAddOnsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAddOnsCodeRouteHandler: RouteHandler<typeof putAddOnsCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAddOnsCodeRouteHandler: RouteHandler<typeof getAddOnsCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAddOnsCodeRouteHandler: RouteHandler<typeof deleteAddOnsCodeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
