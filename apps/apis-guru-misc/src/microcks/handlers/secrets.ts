import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSecretsIdRoute,
  getSecretsCountRoute,
  getSecretsIdRoute,
  getSecretsRoute,
  postSecretsRoute,
  putSecretsIdRoute,
} from '../routes'

export const getSecretsRouteHandler: RouteHandler<typeof getSecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecretsRouteHandler: RouteHandler<typeof postSecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecretsCountRouteHandler: RouteHandler<typeof getSecretsCountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecretsIdRouteHandler: RouteHandler<typeof deleteSecretsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecretsIdRouteHandler: RouteHandler<typeof getSecretsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSecretsIdRouteHandler: RouteHandler<typeof putSecretsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
