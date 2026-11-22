import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDocsSlugRoute,
  getDocsSlugRoute,
  postDocsRoute,
  postDocsSearchRoute,
  putDocsSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const docsHandler = app
  .openapi(postDocsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDocsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDocsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
