import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiV1ScansIdFilesFileIdRoute,
  getApiV1ScansIdRoute,
  getApiV1ScansRoute,
} from '../routes'

export const getApiV1ScansRouteHandler: RouteHandler<typeof getApiV1ScansRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ScansIdRouteHandler: RouteHandler<typeof getApiV1ScansIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ScansIdFilesFileIdRouteHandler: RouteHandler<
  typeof getApiV1ScansIdFilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
