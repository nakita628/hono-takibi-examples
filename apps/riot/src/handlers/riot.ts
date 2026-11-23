import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRiotAccountV1AccountsByPuuidPuuidRoute,
  getRiotAccountV1AccountsByRiotIdGameNameTagLineRoute,
  getRiotAccountV1AccountsMeRoute,
  getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidRoute,
  getRiotAccountV1RegionByGameGameByPuuidPuuidRoute,
} from '../routes'

export const getRiotAccountV1AccountsByPuuidPuuidRouteHandler: RouteHandler<
  typeof getRiotAccountV1AccountsByPuuidPuuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRiotAccountV1AccountsByRiotIdGameNameTagLineRouteHandler: RouteHandler<
  typeof getRiotAccountV1AccountsByRiotIdGameNameTagLineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRiotAccountV1AccountsMeRouteHandler: RouteHandler<
  typeof getRiotAccountV1AccountsMeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidRouteHandler: RouteHandler<
  typeof getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRiotAccountV1RegionByGameGameByPuuidPuuidRouteHandler: RouteHandler<
  typeof getRiotAccountV1RegionByGameGameByPuuidPuuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
