import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetIdentityMailFromDomainRoute,
  postActionSetIdentityMailFromDomainRoute,
} from '../routes'

export const getActionSetIdentityMailFromDomainRouteHandler: RouteHandler<
  typeof getActionSetIdentityMailFromDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetIdentityMailFromDomainRouteHandler: RouteHandler<
  typeof postActionSetIdentityMailFromDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}
