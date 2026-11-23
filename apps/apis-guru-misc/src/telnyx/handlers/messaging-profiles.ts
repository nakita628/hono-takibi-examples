import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMessagingProfilesIdRoute,
  getMessagingProfilesIdMetricsRoute,
  getMessagingProfilesIdPhoneNumbersRoute,
  getMessagingProfilesIdRoute,
  getMessagingProfilesIdShortCodesRoute,
  getMessagingProfilesRoute,
  patchMessagingProfilesIdRoute,
  postMessagingProfilesRoute,
} from '../routes'

export const getMessagingProfilesRouteHandler: RouteHandler<
  typeof getMessagingProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagingProfilesRouteHandler: RouteHandler<
  typeof postMessagingProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMessagingProfilesIdRouteHandler: RouteHandler<
  typeof deleteMessagingProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagingProfilesIdRouteHandler: RouteHandler<
  typeof getMessagingProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMessagingProfilesIdRouteHandler: RouteHandler<
  typeof patchMessagingProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagingProfilesIdMetricsRouteHandler: RouteHandler<
  typeof getMessagingProfilesIdMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagingProfilesIdPhoneNumbersRouteHandler: RouteHandler<
  typeof getMessagingProfilesIdPhoneNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagingProfilesIdShortCodesRouteHandler: RouteHandler<
  typeof getMessagingProfilesIdShortCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
