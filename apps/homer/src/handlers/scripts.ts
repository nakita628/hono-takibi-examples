import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteScriptsScriptIdRoute,
  getScriptsRoute,
  getScriptsScriptIdRoute,
  postScriptsRoute,
  putScriptsScriptIdRoute,
} from '../routes'

export const getScriptsRouteHandler: RouteHandler<typeof getScriptsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postScriptsRouteHandler: RouteHandler<typeof postScriptsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getScriptsScriptIdRouteHandler: RouteHandler<typeof getScriptsScriptIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putScriptsScriptIdRouteHandler: RouteHandler<typeof putScriptsScriptIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteScriptsScriptIdRouteHandler: RouteHandler<
  typeof deleteScriptsScriptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
