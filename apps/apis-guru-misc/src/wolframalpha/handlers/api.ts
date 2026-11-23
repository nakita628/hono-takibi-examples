import type { RouteHandler } from '@hono/zod-openapi'
import type { getApiV1CloudPluginRoute, getApiV1LlmApiRoute } from '../routes'

export const getApiV1CloudPluginRouteHandler: RouteHandler<
  typeof getApiV1CloudPluginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LlmApiRouteHandler: RouteHandler<typeof getApiV1LlmApiRoute> = async (c) => {
  throw new Error('Not implemented')
}
