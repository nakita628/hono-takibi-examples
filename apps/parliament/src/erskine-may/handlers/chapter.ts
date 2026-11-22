import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiChapterChapterNumberRoute } from '../routes'

const app = new OpenAPIHono()

export const chapterHandler = app.openapi(getApiChapterChapterNumberRoute, (c) => {
  throw new Error('Not implemented')
})
