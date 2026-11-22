import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SubjectsSubjectIdOrKeyRoute,
  getApiV1SubjectsRoute,
  getApiV1SubjectsSubjectIdOrKeyRoute,
  postApiV1SubjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subjectsHandler = app
  .openapi(getApiV1SubjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubjectsSubjectIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SubjectsSubjectIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
