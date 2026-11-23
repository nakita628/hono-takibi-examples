import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountVerificationReportsCodeRoute,
  postAccountVerificationRoutesRoute,
} from '../routes'

export const getAccountVerificationReportsCodeRouteHandler: RouteHandler<
  typeof getAccountVerificationReportsCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountVerificationRoutesRouteHandler: RouteHandler<
  typeof postAccountVerificationRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
