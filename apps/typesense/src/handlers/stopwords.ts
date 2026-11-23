import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStopwordsSetIdRoute,
  getStopwordsRoute,
  getStopwordsSetIdRoute,
  putStopwordsSetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stopwordsHandler = app
  .openapi(getStopwordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStopwordsSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopwordsSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStopwordsSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
