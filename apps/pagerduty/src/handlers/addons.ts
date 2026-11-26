import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAddonsRoute,
  postAddonsRoute,
  getAddonsIdRoute,
  deleteAddonsIdRoute,
  putAddonsIdRoute,
} from '../routes'

export const getAddonsRouteHandler: RouteHandler<typeof getAddonsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAddonsRouteHandler: RouteHandler<typeof postAddonsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAddonsIdRouteHandler: RouteHandler<typeof getAddonsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAddonsIdRouteHandler: RouteHandler<typeof deleteAddonsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAddonsIdRouteHandler: RouteHandler<typeof putAddonsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
