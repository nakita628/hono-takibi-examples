import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSectionsSectionGidRoute,
  getSectionsSectionGidRoute,
  getSectionsSectionGidTasksRoute,
  postSectionsSectionGidAddTaskRoute,
  putSectionsSectionGidRoute,
} from '../routes'

export const deleteSectionsSectionGidRouteHandler: RouteHandler<
  typeof deleteSectionsSectionGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSectionsSectionGidRouteHandler: RouteHandler<
  typeof getSectionsSectionGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSectionsSectionGidRouteHandler: RouteHandler<
  typeof putSectionsSectionGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSectionsSectionGidAddTaskRouteHandler: RouteHandler<
  typeof postSectionsSectionGidAddTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSectionsSectionGidTasksRouteHandler: RouteHandler<
  typeof getSectionsSectionGidTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
