import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDocsSlugRoute,
  getDocsSlugProductionRoute,
  getDocsSlugRoute,
  postDocsRoute,
  postDocsSearchRoute,
  putDocsSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const docsHandler = app
  .openapi(getDocsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDocsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDocsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocsSlugProductionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
