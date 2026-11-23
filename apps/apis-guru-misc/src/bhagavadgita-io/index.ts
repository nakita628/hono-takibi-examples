import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ChaptersChapterNumberRoute,
  getApiV1ChaptersChapterNumberVersesRoute,
  getApiV1ChaptersChapterNumberVersesVerseNumberRoute,
  getApiV1ChaptersRoute,
  getApiV1VersesRoute,
  postAuthOauthTokenRoute,
} from './routes'
import {
  getApiV1ChaptersChapterNumberRouteHandler,
  getApiV1ChaptersChapterNumberVersesRouteHandler,
  getApiV1ChaptersChapterNumberVersesVerseNumberRouteHandler,
  getApiV1ChaptersRouteHandler,
  getApiV1VersesRouteHandler,
  postAuthOauthTokenRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1ChaptersRoute, getApiV1ChaptersRouteHandler)
  .openapi(getApiV1ChaptersChapterNumberRoute, getApiV1ChaptersChapterNumberRouteHandler)
  .openapi(
    getApiV1ChaptersChapterNumberVersesRoute,
    getApiV1ChaptersChapterNumberVersesRouteHandler,
  )
  .openapi(
    getApiV1ChaptersChapterNumberVersesVerseNumberRoute,
    getApiV1ChaptersChapterNumberVersesVerseNumberRouteHandler,
  )
  .openapi(getApiV1VersesRoute, getApiV1VersesRouteHandler)
  .openapi(postAuthOauthTokenRoute, postAuthOauthTokenRouteHandler)

export default app
