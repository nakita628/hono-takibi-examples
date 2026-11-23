import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getIndicesIndexNameRoute,
  getIndicesRoute,
  postIndicesBucketsRoute,
  postIndicesCardinalityRoute,
  postIndicesPercentilesRoute,
  postIndicesSearchRoute,
  postIndicesStatisticsRoute,
} from '../routes'

export const getIndicesIndexNameRouteHandler: RouteHandler<
  typeof getIndicesIndexNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIndicesBucketsRouteHandler: RouteHandler<typeof postIndicesBucketsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIndicesCardinalityRouteHandler: RouteHandler<
  typeof postIndicesCardinalityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIndicesPercentilesRouteHandler: RouteHandler<
  typeof postIndicesPercentilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIndicesStatisticsRouteHandler: RouteHandler<
  typeof postIndicesStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIndicesRouteHandler: RouteHandler<typeof getIndicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIndicesSearchRouteHandler: RouteHandler<typeof postIndicesSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
