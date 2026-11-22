import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiChapterRoute,
  getApiChapterChapterDetailPlusRoute,
  getApiChapterRestoreInfoRoute,
  getApiChapterRoute,
  postApiChapterDeleteMultipleRoute,
  postApiChapterUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chapterHandler = app
  .openapi(getApiChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiChapterRestoreInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChapterDeleteMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChapterUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiChapterChapterDetailPlusRoute, (c) => {
    throw new Error('Not implemented')
  })
