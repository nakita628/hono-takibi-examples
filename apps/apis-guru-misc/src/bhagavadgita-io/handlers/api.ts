import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ChaptersChapterNumberRoute,
  getApiV1ChaptersChapterNumberVersesRoute,
  getApiV1ChaptersChapterNumberVersesVerseNumberRoute,
  getApiV1ChaptersRoute,
  getApiV1VersesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1ChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChaptersChapterNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChaptersChapterNumberVersesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChaptersChapterNumberVersesVerseNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VersesRoute, (c) => {
    throw new Error('Not implemented')
  })
