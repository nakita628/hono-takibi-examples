import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteChecksChkIdRoute,
  getChecksChkIdRoute,
  getChecksRoute,
  postChecksRoute,
} from '../routes'

export const getChecksRouteHandler: RouteHandler<typeof getChecksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChecksRouteHandler: RouteHandler<typeof postChecksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChecksChkIdRouteHandler: RouteHandler<typeof getChecksChkIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChecksChkIdRouteHandler: RouteHandler<typeof deleteChecksChkIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
