import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePhoneNumberIdRoute,
  getPhoneNumberIdRoute,
  getPhoneNumberRoute,
  patchPhoneNumberIdRoute,
  postPhoneNumberRoute,
} from '../routes'

export const postPhoneNumberRouteHandler: RouteHandler<typeof postPhoneNumberRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPhoneNumberRouteHandler: RouteHandler<typeof getPhoneNumberRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPhoneNumberIdRouteHandler: RouteHandler<typeof getPhoneNumberIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchPhoneNumberIdRouteHandler: RouteHandler<typeof patchPhoneNumberIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePhoneNumberIdRouteHandler: RouteHandler<
  typeof deletePhoneNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
