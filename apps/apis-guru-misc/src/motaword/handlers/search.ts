import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchDocumentsReindexStatusRoute,
  getSearchRoute,
  postSearchDocumentsReindexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchDocumentsReindexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchDocumentsReindexStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
