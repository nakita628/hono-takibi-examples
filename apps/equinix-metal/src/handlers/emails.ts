import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEmailsIdRoute,
  getEmailsIdRoute,
  postEmailsRoute,
  putEmailsIdRoute,
} from '../routes'

export const postEmailsRouteHandler: RouteHandler<typeof postEmailsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmailsIdRouteHandler: RouteHandler<typeof deleteEmailsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailsIdRouteHandler: RouteHandler<typeof getEmailsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmailsIdRouteHandler: RouteHandler<typeof putEmailsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
