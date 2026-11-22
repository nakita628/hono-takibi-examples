import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApi1JournalsReportsIdDownloadRoute,
  getApi1JournalsReportsIdStatusRoute,
  getApi1JournalsRoute,
  postApi1JournalsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const journalsHandler = app
  .openapi(getApi1JournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1JournalsReportsIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1JournalsReportsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1JournalsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
