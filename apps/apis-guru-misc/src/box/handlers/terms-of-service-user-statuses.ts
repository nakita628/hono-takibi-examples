import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTermsOfServiceUserStatusesRoute,
  postTermsOfServiceUserStatusesRoute,
  putTermsOfServiceUserStatusesTermsOfServiceUserStatusIdRoute,
} from '../routes'

export const getTermsOfServiceUserStatusesRouteHandler: RouteHandler<
  typeof getTermsOfServiceUserStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTermsOfServiceUserStatusesRouteHandler: RouteHandler<
  typeof postTermsOfServiceUserStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTermsOfServiceUserStatusesTermsOfServiceUserStatusIdRouteHandler: RouteHandler<
  typeof putTermsOfServiceUserStatusesTermsOfServiceUserStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
