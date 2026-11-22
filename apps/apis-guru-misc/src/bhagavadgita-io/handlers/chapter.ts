import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ChaptersChapterNumberRoute, getApiV1ChaptersRoute } from '../routes'

const app = new OpenAPIHono()

export const chapterHandler = app
  .openapi(getApiV1ChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChaptersChapterNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
