import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSftpHostKeysIdRoute,
  getSftpHostKeysIdRoute,
  getSftpHostKeysRoute,
  patchSftpHostKeysIdRoute,
  postSftpHostKeysRoute,
} from '../routes'

export const getSftpHostKeysRouteHandler: RouteHandler<typeof getSftpHostKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSftpHostKeysRouteHandler: RouteHandler<typeof postSftpHostKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSftpHostKeysIdRouteHandler: RouteHandler<
  typeof deleteSftpHostKeysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSftpHostKeysIdRouteHandler: RouteHandler<typeof getSftpHostKeysIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchSftpHostKeysIdRouteHandler: RouteHandler<
  typeof patchSftpHostKeysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
