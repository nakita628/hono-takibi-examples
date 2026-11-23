import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postInstitutionsGetByIdRoute,
  postInstitutionsGetRoute,
  postInstitutionsSearchRoute,
} from '../routes'

export const postInstitutionsGetRouteHandler: RouteHandler<
  typeof postInstitutionsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInstitutionsSearchRouteHandler: RouteHandler<
  typeof postInstitutionsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInstitutionsGetByIdRouteHandler: RouteHandler<
  typeof postInstitutionsGetByIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
