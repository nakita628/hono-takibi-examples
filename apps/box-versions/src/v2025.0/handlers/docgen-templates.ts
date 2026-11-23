import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDocgenTemplatesTemplateIdRoute,
  getDocgenTemplatesRoute,
  getDocgenTemplatesTemplateIdRoute,
  getDocgenTemplatesTemplateIdTagsRoute,
  postDocgenTemplatesRoute,
} from '../routes'

export const postDocgenTemplatesRouteHandler: RouteHandler<
  typeof postDocgenTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocgenTemplatesRouteHandler: RouteHandler<typeof getDocgenTemplatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDocgenTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof deleteDocgenTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocgenTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof getDocgenTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocgenTemplatesTemplateIdTagsRouteHandler: RouteHandler<
  typeof getDocgenTemplatesTemplateIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
