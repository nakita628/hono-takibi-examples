import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUserCompanyItemIdRoute,
  getUserCompanyUserCompanyIDNameRoute,
  putUserCompanyItemIdRoute,
} from '../routes'

export const getUserCompanyItemIdRouteHandler: RouteHandler<
  typeof getUserCompanyItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserCompanyItemIdRouteHandler: RouteHandler<
  typeof putUserCompanyItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserCompanyUserCompanyIDNameRouteHandler: RouteHandler<
  typeof getUserCompanyUserCompanyIDNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
