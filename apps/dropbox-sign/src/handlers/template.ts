import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTemplateFilesAsDataUriTemplateIdRoute,
  getTemplateFilesAsFileUrlTemplateIdRoute,
  getTemplateFilesTemplateIdRoute,
  getTemplateListRoute,
  getTemplateTemplateIdRoute,
  postTemplateAddUserTemplateIdRoute,
  postTemplateCreateEmbeddedDraftRoute,
  postTemplateCreateRoute,
  postTemplateDeleteTemplateIdRoute,
  postTemplateRemoveUserTemplateIdRoute,
  postTemplateUpdateFilesTemplateIdRoute,
} from '../routes'

export const postTemplateAddUserTemplateIdRouteHandler: RouteHandler<
  typeof postTemplateAddUserTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplateCreateRouteHandler: RouteHandler<typeof postTemplateCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTemplateCreateEmbeddedDraftRouteHandler: RouteHandler<
  typeof postTemplateCreateEmbeddedDraftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplateDeleteTemplateIdRouteHandler: RouteHandler<
  typeof postTemplateDeleteTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplateFilesTemplateIdRouteHandler: RouteHandler<
  typeof getTemplateFilesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplateFilesAsDataUriTemplateIdRouteHandler: RouteHandler<
  typeof getTemplateFilesAsDataUriTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplateFilesAsFileUrlTemplateIdRouteHandler: RouteHandler<
  typeof getTemplateFilesAsFileUrlTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplateTemplateIdRouteHandler: RouteHandler<
  typeof getTemplateTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplateListRouteHandler: RouteHandler<typeof getTemplateListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplateRemoveUserTemplateIdRouteHandler: RouteHandler<
  typeof postTemplateRemoveUserTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplateUpdateFilesTemplateIdRouteHandler: RouteHandler<
  typeof postTemplateUpdateFilesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
