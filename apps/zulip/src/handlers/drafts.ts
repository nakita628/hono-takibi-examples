import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDraftsDraftIdRoute,
  getDraftsRoute,
  patchDraftsDraftIdRoute,
  postDraftsRoute,
} from '../routes'

export const getDraftsRouteHandler: RouteHandler<typeof getDraftsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDraftsRouteHandler: RouteHandler<typeof postDraftsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDraftsDraftIdRouteHandler: RouteHandler<typeof patchDraftsDraftIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDraftsDraftIdRouteHandler: RouteHandler<
  typeof deleteDraftsDraftIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
