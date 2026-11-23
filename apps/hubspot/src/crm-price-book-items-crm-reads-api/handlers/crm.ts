import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmObjects202609ObjectTypeRoute,
  postCrmObjects202609ObjectTypeBatchReadRoute,
} from '../routes'

export const getCrmObjects202609ObjectTypeRouteHandler: RouteHandler<
  typeof getCrmObjects202609ObjectTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCrmObjects202609ObjectTypeBatchReadRouteHandler: RouteHandler<
  typeof postCrmObjects202609ObjectTypeBatchReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCrmObjects202609ObjectTypeObjectIdRouteHandler: RouteHandler<
  typeof getCrmObjects202609ObjectTypeObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
