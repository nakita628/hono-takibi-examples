import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserDictWordWordUuidRoute,
  postUserDictWordRoute,
  putUserDictWordWordUuidRoute,
} from '../routes'

export const postUserDictWordRouteHandler: RouteHandler<typeof postUserDictWordRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putUserDictWordWordUuidRouteHandler: RouteHandler<
  typeof putUserDictWordWordUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserDictWordWordUuidRouteHandler: RouteHandler<
  typeof deleteUserDictWordWordUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
