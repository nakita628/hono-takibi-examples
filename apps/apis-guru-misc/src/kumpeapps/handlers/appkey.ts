import type { RouteHandler } from '@hono/zod-openapi'
import type { patchAppkeyRoute, postAppkeyRoute, putAppkeyRoute } from '../routes'

export const patchAppkeyRouteHandler: RouteHandler<typeof patchAppkeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppkeyRouteHandler: RouteHandler<typeof postAppkeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppkeyRouteHandler: RouteHandler<typeof putAppkeyRoute> = async (c) => {
  throw new Error('Not implemented')
}
