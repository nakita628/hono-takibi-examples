import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postV1CreateCorpusRoute,
  postV1DeleteCorpusRoute,
  postV1DeleteDocRoute,
  postV1IndexRoute,
  postV1ListCorporaRoute,
  postV1QueryRoute,
  postV1ResetCorpusRoute,
  postV1StreamQueryRoute,
  postV1UploadRoute,
} from '../routes'

export const postV1CreateCorpusRouteHandler: RouteHandler<typeof postV1CreateCorpusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1DeleteCorpusRouteHandler: RouteHandler<typeof postV1DeleteCorpusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1DeleteDocRouteHandler: RouteHandler<typeof postV1DeleteDocRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IndexRouteHandler: RouteHandler<typeof postV1IndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ListCorporaRouteHandler: RouteHandler<typeof postV1ListCorporaRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1QueryRouteHandler: RouteHandler<typeof postV1QueryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ResetCorpusRouteHandler: RouteHandler<typeof postV1ResetCorpusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1StreamQueryRouteHandler: RouteHandler<typeof postV1StreamQueryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1UploadRouteHandler: RouteHandler<typeof postV1UploadRoute> = async (c) => {
  throw new Error('Not implemented')
}
