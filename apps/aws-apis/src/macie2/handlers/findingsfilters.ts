import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFindingsfiltersIdRoute,
  getFindingsfiltersIdRoute,
  getFindingsfiltersRoute,
  patchFindingsfiltersIdRoute,
  postFindingsfiltersRoute,
} from '../routes'

export const postFindingsfiltersRouteHandler: RouteHandler<
  typeof postFindingsfiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFindingsfiltersRouteHandler: RouteHandler<typeof getFindingsfiltersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteFindingsfiltersIdRouteHandler: RouteHandler<
  typeof deleteFindingsfiltersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFindingsfiltersIdRouteHandler: RouteHandler<
  typeof getFindingsfiltersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFindingsfiltersIdRouteHandler: RouteHandler<
  typeof patchFindingsfiltersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
