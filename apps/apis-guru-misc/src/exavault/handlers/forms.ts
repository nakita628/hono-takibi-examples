import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFormsEntriesIdRoute,
  getFormsEntriesIdRoute,
  getFormsIdRoute,
  getFormsRoute,
  patchFormsIdRoute,
} from '../routes'

export const getFormsRouteHandler: RouteHandler<typeof getFormsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFormsEntriesIdRouteHandler: RouteHandler<
  typeof deleteFormsEntriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormsEntriesIdRouteHandler: RouteHandler<typeof getFormsEntriesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFormsIdRouteHandler: RouteHandler<typeof getFormsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFormsIdRouteHandler: RouteHandler<typeof patchFormsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
