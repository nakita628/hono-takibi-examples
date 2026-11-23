import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetIdentityMailFromDomainAttributesRoute,
  postActionGetIdentityMailFromDomainAttributesRoute,
} from '../routes'

export const getActionGetIdentityMailFromDomainAttributesRouteHandler: RouteHandler<
  typeof getActionGetIdentityMailFromDomainAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetIdentityMailFromDomainAttributesRouteHandler: RouteHandler<
  typeof postActionGetIdentityMailFromDomainAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
