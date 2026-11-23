import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTeamsTemplatesTeamsTemplateIdRoute,
  getTeamsTemplatesCountRoute,
  getTeamsTemplatesRoute,
  getTeamsTemplatesTeamsTemplateIdRoute,
  patchTeamsTemplatesTeamsTemplateIdRoute,
  postTeamsTemplatesRoute,
} from '../routes'

export const getTeamsTemplatesRouteHandler: RouteHandler<typeof getTeamsTemplatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTeamsTemplatesRouteHandler: RouteHandler<typeof postTeamsTemplatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTeamsTemplatesTeamsTemplateIdRouteHandler: RouteHandler<
  typeof getTeamsTemplatesTeamsTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTeamsTemplatesTeamsTemplateIdRouteHandler: RouteHandler<
  typeof patchTeamsTemplatesTeamsTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsTemplatesTeamsTemplateIdRouteHandler: RouteHandler<
  typeof deleteTeamsTemplatesTeamsTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTemplatesCountRouteHandler: RouteHandler<
  typeof getTeamsTemplatesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
