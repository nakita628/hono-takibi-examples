import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSendersSenderIdRoute,
  getSendersRoute,
  getSendersSenderIdRoute,
  patchSendersSenderIdRoute,
  postSendersRoute,
  postSendersSenderIdResendVerificationRoute,
} from '../routes'

export const getSendersRouteHandler: RouteHandler<typeof getSendersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSendersRouteHandler: RouteHandler<typeof postSendersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSendersSenderIdRouteHandler: RouteHandler<
  typeof deleteSendersSenderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSendersSenderIdRouteHandler: RouteHandler<typeof getSendersSenderIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchSendersSenderIdRouteHandler: RouteHandler<
  typeof patchSendersSenderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSendersSenderIdResendVerificationRouteHandler: RouteHandler<
  typeof postSendersSenderIdResendVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
