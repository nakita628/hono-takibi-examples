import type { RouteHandler } from '@hono/zod-openapi'
import type { getOpenapiType2Route } from '../routes'

export const getOpenapiType2RouteHandler: RouteHandler<typeof getOpenapiType2Route> = async (c) => {
  throw new Error('Not implemented')
}
