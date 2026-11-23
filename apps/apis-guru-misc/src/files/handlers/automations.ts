import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAutomationsIdRoute,
  getAutomationsIdRoute,
  getAutomationsRoute,
  patchAutomationsIdRoute,
  postAutomationsRoute,
} from '../routes'

export const getAutomationsRouteHandler: RouteHandler<typeof getAutomationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAutomationsRouteHandler: RouteHandler<typeof postAutomationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAutomationsIdRouteHandler: RouteHandler<
  typeof deleteAutomationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAutomationsIdRouteHandler: RouteHandler<typeof getAutomationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchAutomationsIdRouteHandler: RouteHandler<typeof patchAutomationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
