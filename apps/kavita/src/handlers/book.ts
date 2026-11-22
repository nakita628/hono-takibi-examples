import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiBookChapterIdBookInfoRoute,
  getApiBookChapterIdBookPageRoute,
  getApiBookChapterIdBookResourcesRoute,
  getApiBookChapterIdChaptersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookHandler = app
  .openapi(getApiBookChapterIdBookInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBookChapterIdBookResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBookChapterIdChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBookChapterIdBookPageRoute, (c) => {
    throw new Error('Not implemented')
  })
