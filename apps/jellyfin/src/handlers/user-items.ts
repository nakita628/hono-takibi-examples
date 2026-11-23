import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserItemsItemIdRatingRoute,
  getUserItemsItemIdUserDataRoute,
  getUserItemsResumeRoute,
  postUserItemsItemIdRatingRoute,
  postUserItemsItemIdUserDataRoute,
} from '../routes'

export const getUserItemsItemIdUserDataRouteHandler: RouteHandler<
  typeof getUserItemsItemIdUserDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserItemsItemIdUserDataRouteHandler: RouteHandler<
  typeof postUserItemsItemIdUserDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserItemsResumeRouteHandler: RouteHandler<typeof getUserItemsResumeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteUserItemsItemIdRatingRouteHandler: RouteHandler<
  typeof deleteUserItemsItemIdRatingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserItemsItemIdRatingRouteHandler: RouteHandler<
  typeof postUserItemsItemIdRatingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
