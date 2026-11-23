import type { RouteHandler } from '@hono/zod-openapi'
import type {
  putAccountVerifySendRoute,
  putAccountVerifyVerifyActivationTokenRoute,
} from '../routes'

export const putAccountVerifySendRouteHandler: RouteHandler<
  typeof putAccountVerifySendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountVerifyVerifyActivationTokenRouteHandler: RouteHandler<
  typeof putAccountVerifyVerifyActivationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
