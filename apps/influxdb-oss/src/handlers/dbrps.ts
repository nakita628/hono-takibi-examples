import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDbrpsDbrpIDRoute,
  getDbrpsDbrpIDRoute,
  getDbrpsRoute,
  patchDbrpsDbrpIDRoute,
  postDbrpsRoute,
} from '../routes'

export const getDbrpsRouteHandler: RouteHandler<typeof getDbrpsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDbrpsRouteHandler: RouteHandler<typeof postDbrpsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDbrpsDbrpIDRouteHandler: RouteHandler<typeof getDbrpsDbrpIDRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDbrpsDbrpIDRouteHandler: RouteHandler<typeof patchDbrpsDbrpIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDbrpsDbrpIDRouteHandler: RouteHandler<typeof deleteDbrpsDbrpIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
