import type { RouteHandler } from '@hono/zod-openapi'
import type { postUnpackRoute } from '../routes'

export const postUnpackRouteHandler: RouteHandler<typeof postUnpackRoute> = async (c) => {
  throw new Error('Not implemented')
}
