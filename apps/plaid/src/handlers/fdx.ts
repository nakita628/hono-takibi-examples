import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFdxConsentsConsentIdRevocationRoute,
  getFdxConsentsConsentIdRoute,
  getFdxConsentsRoute,
  getFdxRecipientRecipientIdRoute,
  getFdxRecipientsRoute,
  postFdxNotificationsRoute,
  putFdxConsentsConsentIdRevocationRoute,
} from '../routes'

export const postFdxNotificationsRouteHandler: RouteHandler<
  typeof postFdxNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFdxRecipientsRouteHandler: RouteHandler<typeof getFdxRecipientsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFdxConsentsRouteHandler: RouteHandler<typeof getFdxConsentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putFdxConsentsConsentIdRevocationRouteHandler: RouteHandler<
  typeof putFdxConsentsConsentIdRevocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFdxConsentsConsentIdRevocationRouteHandler: RouteHandler<
  typeof getFdxConsentsConsentIdRevocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFdxConsentsConsentIdRouteHandler: RouteHandler<
  typeof getFdxConsentsConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFdxRecipientRecipientIdRouteHandler: RouteHandler<
  typeof getFdxRecipientRecipientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
