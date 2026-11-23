import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiV1ChaptersChapterNumberRoute,
  getApiV1ChaptersChapterNumberVersesRoute,
  getApiV1ChaptersChapterNumberVersesVerseNumberRoute,
  getApiV1ChaptersRoute,
  getApiV1VersesRoute,
} from '../routes'

export const getApiV1ChaptersRouteHandler: RouteHandler<typeof getApiV1ChaptersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1ChaptersChapterNumberRouteHandler: RouteHandler<
  typeof getApiV1ChaptersChapterNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChaptersChapterNumberVersesRouteHandler: RouteHandler<
  typeof getApiV1ChaptersChapterNumberVersesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChaptersChapterNumberVersesVerseNumberRouteHandler: RouteHandler<
  typeof getApiV1ChaptersChapterNumberVersesVerseNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VersesRouteHandler: RouteHandler<typeof getApiV1VersesRoute> = async (c) => {
  throw new Error('Not implemented')
}
