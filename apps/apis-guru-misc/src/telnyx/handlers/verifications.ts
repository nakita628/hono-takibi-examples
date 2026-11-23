import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVerificationsByPhoneNumberPhoneNumberRoute,
  getVerificationsVerificationIdRoute,
  postVerificationsByPhoneNumberPhoneNumberActionsVerifyRoute,
  postVerificationsCallRoute,
  postVerificationsFlashcallRoute,
  postVerificationsPsd2Route,
  postVerificationsSmsRoute,
  postVerificationsWhatsappRoute,
} from '../routes'

export const getVerificationsByPhoneNumberPhoneNumberRouteHandler: RouteHandler<
  typeof getVerificationsByPhoneNumberPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVerificationsByPhoneNumberPhoneNumberActionsVerifyRouteHandler: RouteHandler<
  typeof postVerificationsByPhoneNumberPhoneNumberActionsVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVerificationsCallRouteHandler: RouteHandler<
  typeof postVerificationsCallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVerificationsFlashcallRouteHandler: RouteHandler<
  typeof postVerificationsFlashcallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVerificationsPsd2RouteHandler: RouteHandler<
  typeof postVerificationsPsd2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVerificationsSmsRouteHandler: RouteHandler<
  typeof postVerificationsSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVerificationsWhatsappRouteHandler: RouteHandler<
  typeof postVerificationsWhatsappRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVerificationsVerificationIdRouteHandler: RouteHandler<
  typeof getVerificationsVerificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
