import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSshKeyNameRoute,
  getSshKeyNameRoute,
  getSshKeyRoute,
  postSshKeyRoute,
} from '../routes'

export const deleteSshKeyNameRouteHandler: RouteHandler<typeof deleteSshKeyNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSshKeyNameRouteHandler: RouteHandler<typeof getSshKeyNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSshKeyRouteHandler: RouteHandler<typeof getSshKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSshKeyRouteHandler: RouteHandler<typeof postSshKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}
