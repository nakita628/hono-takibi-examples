import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteHooksHookIdRoute,
  getHooksHookIdRoute,
  getHooksRoute,
  getHooksTypesRoute,
  postHooksHookIdEnableRoute,
  postHooksRoute,
  putHooksHookIdRoute,
} from '../routes'

export const getHooksRouteHandler: RouteHandler<typeof getHooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postHooksRouteHandler: RouteHandler<typeof postHooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHooksHookIdRouteHandler: RouteHandler<typeof getHooksHookIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putHooksHookIdRouteHandler: RouteHandler<typeof putHooksHookIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteHooksHookIdRouteHandler: RouteHandler<typeof deleteHooksHookIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postHooksHookIdEnableRouteHandler: RouteHandler<
  typeof postHooksHookIdEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHooksTypesRouteHandler: RouteHandler<typeof getHooksTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}
