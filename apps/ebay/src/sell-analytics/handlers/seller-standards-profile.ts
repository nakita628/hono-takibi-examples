import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSellerStandardsProfileProgramCycleRoute,
  getSellerStandardsProfileRoute,
} from '../routes'

export const getSellerStandardsProfileRouteHandler: RouteHandler<
  typeof getSellerStandardsProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSellerStandardsProfileProgramCycleRouteHandler: RouteHandler<
  typeof getSellerStandardsProfileProgramCycleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
