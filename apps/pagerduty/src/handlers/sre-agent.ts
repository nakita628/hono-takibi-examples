import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSreAgentMemoriesIdRoute,
  getSreAgentMemoriesRoute,
  putSreAgentMemoriesIdRoute,
} from '../routes'

export const getSreAgentMemoriesRouteHandler: RouteHandler<
  typeof getSreAgentMemoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSreAgentMemoriesIdRouteHandler: RouteHandler<
  typeof putSreAgentMemoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSreAgentMemoriesIdRouteHandler: RouteHandler<
  typeof deleteSreAgentMemoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
