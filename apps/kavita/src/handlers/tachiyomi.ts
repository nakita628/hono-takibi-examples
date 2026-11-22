import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiTachiyomiLatestChapterRoute,
  postApiTachiyomiMarkChapterUntilAsReadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tachiyomiHandler = app
  .openapi(getApiTachiyomiLatestChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTachiyomiMarkChapterUntilAsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
