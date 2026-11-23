import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIssuesIdRoute,
  getIssuesCountRoute,
  getIssuesIdRoute,
  getIssuesRoute,
  putIssuesIdRoute,
} from '../routes'

export const getIssuesRouteHandler: RouteHandler<typeof getIssuesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIssuesCountRouteHandler: RouteHandler<typeof getIssuesCountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIssuesIdRouteHandler: RouteHandler<typeof getIssuesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putIssuesIdRouteHandler: RouteHandler<typeof putIssuesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIssuesIdRouteHandler: RouteHandler<typeof deleteIssuesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
