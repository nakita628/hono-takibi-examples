import type { RouteHandler } from '@hono/zod-openapi'
import type { getXSamplesLanguagesRoute, postXSamplesLanguagesRoute } from '../routes'

export const getXSamplesLanguagesRouteHandler: RouteHandler<
  typeof getXSamplesLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postXSamplesLanguagesRouteHandler: RouteHandler<
  typeof postXSamplesLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
