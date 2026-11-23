import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserApiKeysIdRoute,
  deleteUserOtpAppRoute,
  deleteUserOtpSmsRoute,
  getUserApiKeysRoute,
  getUserOtpRecoveryCodesRoute,
  getUserRoute,
  postUserApiKeysRoute,
  postUserOtpAppRoute,
  postUserOtpRecoveryCodesRoute,
  postUserOtpSmsReceiveRoute,
  postUserOtpSmsRoute,
  postUserOtpVerifyOtpRoute,
  putUserRoute,
} from '../routes'

export const getUserRouteHandler: RouteHandler<typeof getUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserRouteHandler: RouteHandler<typeof putUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserApiKeysRouteHandler: RouteHandler<typeof getUserApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserApiKeysRouteHandler: RouteHandler<typeof postUserApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserApiKeysIdRouteHandler: RouteHandler<
  typeof deleteUserApiKeysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserOtpAppRouteHandler: RouteHandler<typeof deleteUserOtpAppRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserOtpAppRouteHandler: RouteHandler<typeof postUserOtpAppRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserOtpRecoveryCodesRouteHandler: RouteHandler<
  typeof getUserOtpRecoveryCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserOtpRecoveryCodesRouteHandler: RouteHandler<
  typeof postUserOtpRecoveryCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserOtpSmsRouteHandler: RouteHandler<typeof deleteUserOtpSmsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserOtpSmsRouteHandler: RouteHandler<typeof postUserOtpSmsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserOtpSmsReceiveRouteHandler: RouteHandler<
  typeof postUserOtpSmsReceiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserOtpVerifyOtpRouteHandler: RouteHandler<
  typeof postUserOtpVerifyOtpRoute
> = async (c) => {
  throw new Error('Not implemented')
}
