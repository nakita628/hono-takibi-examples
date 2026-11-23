import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1beta1NameRoute,
  getV1beta1ParentAnomaliesRoute,
  getV1beta1ParentErrorIssuesSearchRoute,
  getV1beta1ParentErrorReportsSearchRoute,
  postV1beta1NameQueryRoute,
} from '../routes'

export const getV1beta1NameRouteHandler: RouteHandler<typeof getV1beta1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1NameQueryRouteHandler: RouteHandler<
  typeof postV1beta1NameQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1ParentAnomaliesRouteHandler: RouteHandler<
  typeof getV1beta1ParentAnomaliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1ParentErrorIssuesSearchRouteHandler: RouteHandler<
  typeof getV1beta1ParentErrorIssuesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1ParentErrorReportsSearchRouteHandler: RouteHandler<
  typeof getV1beta1ParentErrorReportsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
