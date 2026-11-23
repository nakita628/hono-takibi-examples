import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPathwaysDiagramsForCategoryCategoryRoute,
  getPathwaysDiagramsSearchSearchStringRoute,
} from '../routes'

export const getPathwaysDiagramsSearchSearchStringRouteHandler: RouteHandler<
  typeof getPathwaysDiagramsSearchSearchStringRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPathwaysDiagramsForCategoryCategoryRouteHandler: RouteHandler<
  typeof getPathwaysDiagramsForCategoryCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
