import type { RouteHandler } from '@hono/zod-openapi'
import type { headEndpointRoute, optionsEndpointRoute } from '../routes'

export const headEndpointRouteHandler: RouteHandler<typeof headEndpointRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsEndpointRouteHandler: RouteHandler<typeof optionsEndpointRoute> = async (c) => {
  throw new Error('Not implemented')
}
