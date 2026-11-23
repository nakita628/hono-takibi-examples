import type { RouteHandler } from '@hono/zod-openapi'
import type { getSpecificationOpenapiv3Route } from '../routes'

export const getSpecificationOpenapiv3RouteHandler: RouteHandler<
  typeof getSpecificationOpenapiv3Route
> = async (c) => {
  throw new Error('Not implemented')
}
