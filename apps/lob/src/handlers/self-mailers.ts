import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSelfMailersSfmIdRoute,
  getSelfMailersRoute,
  getSelfMailersSfmIdRoute,
  postSelfMailersRoute,
} from '../routes'

export const getSelfMailersSfmIdRouteHandler: RouteHandler<
  typeof getSelfMailersSfmIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSelfMailersSfmIdRouteHandler: RouteHandler<
  typeof deleteSelfMailersSfmIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSelfMailersRouteHandler: RouteHandler<typeof getSelfMailersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSelfMailersRouteHandler: RouteHandler<typeof postSelfMailersRoute> = async (c) => {
  throw new Error('Not implemented')
}
