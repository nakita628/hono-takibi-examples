import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMailboxesMailboxNameRoute,
  getMailboxesMailboxNameRoute,
  getMailboxesRoute,
  postMailboxesRoute,
  putMailboxesMailboxNameAutoforwardRoute,
  putMailboxesMailboxNameAutoreplyRoute,
  putMailboxesMailboxNamePasswordRoute,
} from '../routes'

export const getMailboxesRouteHandler: RouteHandler<typeof getMailboxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMailboxesRouteHandler: RouteHandler<typeof postMailboxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMailboxesMailboxNameRouteHandler: RouteHandler<
  typeof deleteMailboxesMailboxNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMailboxesMailboxNameRouteHandler: RouteHandler<
  typeof getMailboxesMailboxNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMailboxesMailboxNameAutoforwardRouteHandler: RouteHandler<
  typeof putMailboxesMailboxNameAutoforwardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMailboxesMailboxNameAutoreplyRouteHandler: RouteHandler<
  typeof putMailboxesMailboxNameAutoreplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMailboxesMailboxNamePasswordRouteHandler: RouteHandler<
  typeof putMailboxesMailboxNamePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}
