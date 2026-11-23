import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePhoneNumbersPhoneNumberIdRoute,
  getPhoneNumbersPhoneNumberIdRoute,
  getPhoneNumbersRoute,
  postPhoneNumbersPhoneNumberIdOperationRestoreRoute,
  postPhoneNumbersPhoneNumberIdRoute,
} from '../routes'

export const deletePhoneNumbersPhoneNumberIdRouteHandler: RouteHandler<
  typeof deletePhoneNumbersPhoneNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPhoneNumbersPhoneNumberIdRouteHandler: RouteHandler<
  typeof getPhoneNumbersPhoneNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPhoneNumbersPhoneNumberIdRouteHandler: RouteHandler<
  typeof postPhoneNumbersPhoneNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPhoneNumbersRouteHandler: RouteHandler<typeof getPhoneNumbersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPhoneNumbersPhoneNumberIdOperationRestoreRouteHandler: RouteHandler<
  typeof postPhoneNumbersPhoneNumberIdOperationRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}
