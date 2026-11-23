import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEmployersEffectiveDateRoute,
  getEmployersEffectiveDateSummaryRoute,
  getEmployersRoute,
  getEmployersSummaryRoute,
  getEmployersTagsRoute,
  getEmployersTagTagIdRoute,
  postEmployersRoute,
} from '../routes'

export const getEmployersRouteHandler: RouteHandler<typeof getEmployersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployersRouteHandler: RouteHandler<typeof postEmployersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployersSummaryRouteHandler: RouteHandler<
  typeof getEmployersSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployersTagTagIdRouteHandler: RouteHandler<
  typeof getEmployersTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployersTagsRouteHandler: RouteHandler<typeof getEmployersTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEmployersEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployersEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployersEffectiveDateSummaryRouteHandler: RouteHandler<
  typeof getEmployersEffectiveDateSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
