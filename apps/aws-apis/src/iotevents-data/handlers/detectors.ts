import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDetectorsDetectorModelNameKeyValuesIndexRoute,
  getDetectorsDetectorModelNameRoute,
  postDetectorsDeleteRoute,
  postDetectorsRoute,
} from '../routes'

export const postDetectorsDeleteRouteHandler: RouteHandler<
  typeof postDetectorsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDetectorsRouteHandler: RouteHandler<typeof postDetectorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDetectorsDetectorModelNameKeyValuesIndexRouteHandler: RouteHandler<
  typeof getDetectorsDetectorModelNameKeyValuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDetectorsDetectorModelNameRouteHandler: RouteHandler<
  typeof getDetectorsDetectorModelNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
