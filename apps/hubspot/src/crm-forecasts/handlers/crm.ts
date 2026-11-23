import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmObjects202609ObjectTypeRoute,
  postCrmObjects202609ObjectTypeSearchRoute,
} from '../routes'

export const getCrmObjects202609ObjectTypeRouteHandler: RouteHandler<
  typeof getCrmObjects202609ObjectTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCrmObjects202609ObjectTypeSearchRouteHandler: RouteHandler<
  typeof postCrmObjects202609ObjectTypeSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCrmObjects202609ObjectTypeObjectIdRouteHandler: RouteHandler<
  typeof getCrmObjects202609ObjectTypeObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
