import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSectionsSectionGidRoute,
  putSectionsSectionGidRoute,
  deleteSectionsSectionGidRoute,
  postSectionsSectionGidAddTaskRoute,
  getSectionsSectionGidTasksRoute,
} from '../routes'

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

export const deleteSectionsSectionGidRouteHandler: RouteHandler<
  typeof deleteSectionsSectionGidRoute
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
