import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getResourcePositionsResourceIdentifierResourceTypeRoute,
  patchResourcePositionsResourceIdentifierResourceTypeRoute,
} from '../routes'

export const getResourcePositionsResourceIdentifierResourceTypeRouteHandler: RouteHandler<
  typeof getResourcePositionsResourceIdentifierResourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchResourcePositionsResourceIdentifierResourceTypeRouteHandler: RouteHandler<
  typeof patchResourcePositionsResourceIdentifierResourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
