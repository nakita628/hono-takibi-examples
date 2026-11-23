import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSmsIdIndexRoute,
  getSmsIdIndexRoute,
  getSmsIndexRoute,
  patchSmsIdIndexRoute,
  postSmsIdResendIndexRoute,
  postSmsIndexRoute,
  putSmsIdIndexRoute,
} from '../routes'

export const getSmsIndexRouteHandler: RouteHandler<typeof getSmsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSmsIndexRouteHandler: RouteHandler<typeof postSmsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSmsIdIndexRouteHandler: RouteHandler<typeof deleteSmsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSmsIdIndexRouteHandler: RouteHandler<typeof getSmsIdIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSmsIdIndexRouteHandler: RouteHandler<typeof patchSmsIdIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSmsIdIndexRouteHandler: RouteHandler<typeof putSmsIdIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSmsIdResendIndexRouteHandler: RouteHandler<
  typeof postSmsIdResendIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
