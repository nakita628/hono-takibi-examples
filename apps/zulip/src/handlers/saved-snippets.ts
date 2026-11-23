import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSavedSnippetsSavedSnippetIdRoute,
  getSavedSnippetsRoute,
  patchSavedSnippetsSavedSnippetIdRoute,
  postSavedSnippetsRoute,
} from '../routes'

export const getSavedSnippetsRouteHandler: RouteHandler<typeof getSavedSnippetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSavedSnippetsRouteHandler: RouteHandler<typeof postSavedSnippetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchSavedSnippetsSavedSnippetIdRouteHandler: RouteHandler<
  typeof patchSavedSnippetsSavedSnippetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSavedSnippetsSavedSnippetIdRouteHandler: RouteHandler<
  typeof deleteSavedSnippetsSavedSnippetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
