import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEmailAddressesEmailAddressIdRoute,
  getEmailAddressesEmailAddressIdRoute,
  patchEmailAddressesEmailAddressIdRoute,
  postEmailAddressesEmailAddressIdAttemptVerificationRoute,
  postEmailAddressesEmailAddressIdPrepareVerificationRoute,
  postEmailAddressesRoute,
} from '../routes'

export const postEmailAddressesRouteHandler: RouteHandler<typeof postEmailAddressesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEmailAddressesEmailAddressIdRouteHandler: RouteHandler<
  typeof getEmailAddressesEmailAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmailAddressesEmailAddressIdRouteHandler: RouteHandler<
  typeof deleteEmailAddressesEmailAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEmailAddressesEmailAddressIdRouteHandler: RouteHandler<
  typeof patchEmailAddressesEmailAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmailAddressesEmailAddressIdPrepareVerificationRouteHandler: RouteHandler<
  typeof postEmailAddressesEmailAddressIdPrepareVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmailAddressesEmailAddressIdAttemptVerificationRouteHandler: RouteHandler<
  typeof postEmailAddressesEmailAddressIdAttemptVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
