import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSshKeysIdRoute,
  getSshKeysIdRoute,
  getSshKeysRoute,
  postSshKeysRoute,
} from '../routes'

export const getSshKeysRouteHandler: RouteHandler<typeof getSshKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSshKeysRouteHandler: RouteHandler<typeof postSshKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSshKeysIdRouteHandler: RouteHandler<typeof deleteSshKeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSshKeysIdRouteHandler: RouteHandler<typeof getSshKeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
