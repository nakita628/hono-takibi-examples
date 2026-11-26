import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getJwtTemplatesRoute,
  postJwtTemplatesRoute,
  getJwtTemplatesTemplateIdRoute,
  patchJwtTemplatesTemplateIdRoute,
  deleteJwtTemplatesTemplateIdRoute,
} from '../routes'

export const getJwtTemplatesRouteHandler: RouteHandler<typeof getJwtTemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postJwtTemplatesRouteHandler: RouteHandler<typeof postJwtTemplatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getJwtTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof getJwtTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchJwtTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof patchJwtTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteJwtTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof deleteJwtTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
