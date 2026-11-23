import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteScriptsIdRoute,
  getScriptsIdRoute,
  getScriptsPainlessExecuteRoute,
  postScriptsIdContextRoute,
  postScriptsIdRoute,
  postScriptsPainlessExecuteRoute,
  putScriptsIdContextRoute,
  putScriptsIdRoute,
} from '../routes'

export const getScriptsIdRouteHandler: RouteHandler<typeof getScriptsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putScriptsIdRouteHandler: RouteHandler<typeof putScriptsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postScriptsIdRouteHandler: RouteHandler<typeof postScriptsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteScriptsIdRouteHandler: RouteHandler<typeof deleteScriptsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putScriptsIdContextRouteHandler: RouteHandler<
  typeof putScriptsIdContextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postScriptsIdContextRouteHandler: RouteHandler<
  typeof postScriptsIdContextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getScriptsPainlessExecuteRouteHandler: RouteHandler<
  typeof getScriptsPainlessExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postScriptsPainlessExecuteRouteHandler: RouteHandler<
  typeof postScriptsPainlessExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
