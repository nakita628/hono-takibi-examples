import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOauthGrantsId2Route,
  getOauthGrants2Route,
  getOauthGrantsId2Route,
} from '../routes'

export const getOauthGrants2RouteHandler: RouteHandler<typeof getOauthGrants2Route> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOauthGrantsId2RouteHandler: RouteHandler<
  typeof deleteOauthGrantsId2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthGrantsId2RouteHandler: RouteHandler<typeof getOauthGrantsId2Route> = async (
  c,
) => {
  throw new Error('Not implemented')
}
