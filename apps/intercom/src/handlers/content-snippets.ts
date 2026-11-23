import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteContentSnippetsContentSnippetIdTagsIdRoute,
  deleteContentSnippetsIdRoute,
  getContentSnippetsIdRoute,
  getContentSnippetsRoute,
  postContentSnippetsContentSnippetIdTagsRoute,
  postContentSnippetsRoute,
  putContentSnippetsIdRoute,
} from '../routes'

export const getContentSnippetsRouteHandler: RouteHandler<typeof getContentSnippetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postContentSnippetsRouteHandler: RouteHandler<
  typeof postContentSnippetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContentSnippetsIdRouteHandler: RouteHandler<
  typeof getContentSnippetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putContentSnippetsIdRouteHandler: RouteHandler<
  typeof putContentSnippetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteContentSnippetsIdRouteHandler: RouteHandler<
  typeof deleteContentSnippetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postContentSnippetsContentSnippetIdTagsRouteHandler: RouteHandler<
  typeof postContentSnippetsContentSnippetIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteContentSnippetsContentSnippetIdTagsIdRouteHandler: RouteHandler<
  typeof deleteContentSnippetsContentSnippetIdTagsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
