import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatus204Route, getStatus302Route } from '../routes'

export const getStatus302RouteHandler: RouteHandler<typeof getStatus302Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatus204RouteHandler: RouteHandler<typeof getStatus204Route> = async (c) => {
  throw new Error('Not implemented')
}
