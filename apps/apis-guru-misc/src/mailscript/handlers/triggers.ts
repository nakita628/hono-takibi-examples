import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTriggersTriggerRoute,
  getTriggersRoute,
  postTriggersRoute,
  putTriggersTriggerRoute,
} from '../routes'

export const getTriggersRouteHandler: RouteHandler<typeof getTriggersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTriggersRouteHandler: RouteHandler<typeof postTriggersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTriggersTriggerRouteHandler: RouteHandler<
  typeof deleteTriggersTriggerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTriggersTriggerRouteHandler: RouteHandler<typeof putTriggersTriggerRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
