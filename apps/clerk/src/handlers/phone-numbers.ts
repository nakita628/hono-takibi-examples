import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePhoneNumbersPhoneNumberIdRoute,
  getPhoneNumbersPhoneNumberIdRoute,
  patchPhoneNumbersPhoneNumberIdRoute,
  postPhoneNumbersPhoneNumberIdAttemptVerificationRoute,
  postPhoneNumbersPhoneNumberIdPrepareVerificationRoute,
  postPhoneNumbersRoute,
} from '../routes'

export const postPhoneNumbersRouteHandler: RouteHandler<typeof postPhoneNumbersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPhoneNumbersPhoneNumberIdRouteHandler: RouteHandler<
  typeof getPhoneNumbersPhoneNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePhoneNumbersPhoneNumberIdRouteHandler: RouteHandler<
  typeof deletePhoneNumbersPhoneNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPhoneNumbersPhoneNumberIdRouteHandler: RouteHandler<
  typeof patchPhoneNumbersPhoneNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPhoneNumbersPhoneNumberIdPrepareVerificationRouteHandler: RouteHandler<
  typeof postPhoneNumbersPhoneNumberIdPrepareVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPhoneNumbersPhoneNumberIdAttemptVerificationRouteHandler: RouteHandler<
  typeof postPhoneNumbersPhoneNumberIdAttemptVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
