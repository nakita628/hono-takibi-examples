import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPositionsResourceIdentifierResourceTypeRoute,
  patchPositionsResourceIdentifierResourceTypeRoute,
} from '../routes'

export const getPositionsResourceIdentifierResourceTypeRouteHandler: RouteHandler<
  typeof getPositionsResourceIdentifierResourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPositionsResourceIdentifierResourceTypeRouteHandler: RouteHandler<
  typeof patchPositionsResourceIdentifierResourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
