import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProjectTemplatesProjectTemplateGidRoute,
  getProjectTemplatesRoute,
  postProjectTemplatesProjectTemplateGidInstantiateProjectRoute,
} from '../routes'

export const getProjectTemplatesRouteHandler: RouteHandler<
  typeof getProjectTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectTemplatesProjectTemplateGidRouteHandler: RouteHandler<
  typeof getProjectTemplatesProjectTemplateGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectTemplatesProjectTemplateGidInstantiateProjectRouteHandler: RouteHandler<
  typeof postProjectTemplatesProjectTemplateGidInstantiateProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}
