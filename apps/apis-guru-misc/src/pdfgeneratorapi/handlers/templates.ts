import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTemplatesTemplateIdRoute,
  getTemplatesRoute,
  getTemplatesTemplateIdRoute,
  postTemplatesOutputRoute,
  postTemplatesRoute,
  postTemplatesTemplateIdCopyRoute,
  postTemplatesTemplateIdEditorRoute,
  postTemplatesTemplateIdOutputRoute,
  putTemplatesTemplateIdRoute,
} from '../routes'

export const getTemplatesRouteHandler: RouteHandler<typeof getTemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesRouteHandler: RouteHandler<typeof postTemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesOutputRouteHandler: RouteHandler<
  typeof postTemplatesOutputRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof deleteTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof getTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof putTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesTemplateIdCopyRouteHandler: RouteHandler<
  typeof postTemplatesTemplateIdCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesTemplateIdEditorRouteHandler: RouteHandler<
  typeof postTemplatesTemplateIdEditorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesTemplateIdOutputRouteHandler: RouteHandler<
  typeof postTemplatesTemplateIdOutputRoute
> = async (c) => {
  throw new Error('Not implemented')
}
