import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSipPhonesPhoneIdRoute,
  getSipPhonesRoute,
  patchSipPhonesPhoneIdRoute,
  postSipPhonesRoute,
} from '../routes'

export const getSipPhonesRouteHandler: RouteHandler<typeof getSipPhonesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSipPhonesRouteHandler: RouteHandler<typeof postSipPhonesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSipPhonesPhoneIdRouteHandler: RouteHandler<
  typeof deleteSipPhonesPhoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSipPhonesPhoneIdRouteHandler: RouteHandler<
  typeof patchSipPhonesPhoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
