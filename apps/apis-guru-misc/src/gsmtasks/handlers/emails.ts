import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEmailsIdIndexRoute,
  getEmailsIdIndexRoute,
  getEmailsIndexRoute,
  patchEmailsIdIndexRoute,
  postEmailsIdResendIndexRoute,
  postEmailsIndexRoute,
  putEmailsIdIndexRoute,
} from '../routes'

export const getEmailsIndexRouteHandler: RouteHandler<typeof getEmailsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmailsIndexRouteHandler: RouteHandler<typeof postEmailsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmailsIdIndexRouteHandler: RouteHandler<
  typeof deleteEmailsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailsIdIndexRouteHandler: RouteHandler<typeof getEmailsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchEmailsIdIndexRouteHandler: RouteHandler<typeof patchEmailsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putEmailsIdIndexRouteHandler: RouteHandler<typeof putEmailsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postEmailsIdResendIndexRouteHandler: RouteHandler<
  typeof postEmailsIdResendIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
