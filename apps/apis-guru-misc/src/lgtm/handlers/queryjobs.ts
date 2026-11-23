import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getQueryjobsQueryjobIdResultsProjectIdRoute,
  getQueryjobsQueryjobIdResultsRoute,
  getQueryjobsQueryjobIdRoute,
  postQueryjobsRoute,
} from '../routes'

export const postQueryjobsRouteHandler: RouteHandler<typeof postQueryjobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueryjobsQueryjobIdRouteHandler: RouteHandler<
  typeof getQueryjobsQueryjobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueryjobsQueryjobIdResultsRouteHandler: RouteHandler<
  typeof getQueryjobsQueryjobIdResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueryjobsQueryjobIdResultsProjectIdRouteHandler: RouteHandler<
  typeof getQueryjobsQueryjobIdResultsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
