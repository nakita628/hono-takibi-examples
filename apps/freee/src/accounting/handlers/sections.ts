import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1SectionsIdRoute,
  getApi1SectionsIdRoute,
  getApi1SectionsRoute,
  postApi1SectionsRoute,
  putApi1SectionsCodeUpsertRoute,
  putApi1SectionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sectionsHandler = app
  .openapi(getApi1SectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1SectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1SectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1SectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1SectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1SectionsCodeUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
