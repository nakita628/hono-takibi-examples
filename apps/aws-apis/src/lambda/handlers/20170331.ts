import type { RouteHandler } from '@hono/zod-openapi'
import type {
  delete20170331TagsARNTagKeysRoute,
  get20170331TagsARNRoute,
  post20170331TagsARNRoute,
} from '../routes'

export const get20170331TagsARNRouteHandler: RouteHandler<typeof get20170331TagsARNRoute> = async (
  c,
) => {}

export const post20170331TagsARNRouteHandler: RouteHandler<
  typeof post20170331TagsARNRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20170331TagsARNTagKeysRouteHandler: RouteHandler<
  typeof delete20170331TagsARNTagKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
