import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBinIdRoute,
  getBinIdRoute,
  patchBinIdRoute,
  postBinRoute,
  putBinIdRoute,
} from '../routes'

export const postBinRouteHandler: RouteHandler<typeof postBinRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBinIdRouteHandler: RouteHandler<typeof deleteBinIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBinIdRouteHandler: RouteHandler<typeof getBinIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchBinIdRouteHandler: RouteHandler<typeof patchBinIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putBinIdRouteHandler: RouteHandler<typeof putBinIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
