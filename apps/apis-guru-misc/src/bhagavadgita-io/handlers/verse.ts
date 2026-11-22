import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ChaptersChapterNumberVersesRoute,
  getApiV1ChaptersChapterNumberVersesVerseNumberRoute,
  getApiV1VersesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const verseHandler = app
  .openapi(getApiV1ChaptersChapterNumberVersesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChaptersChapterNumberVersesVerseNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VersesRoute, (c) => {
    throw new Error('Not implemented')
  })
