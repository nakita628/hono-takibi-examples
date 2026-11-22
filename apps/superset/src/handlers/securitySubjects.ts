import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SecuritySubjectIndexRoute,
  getApiV1SecuritySubjectInfoRoute,
  getApiV1SecuritySubjectPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securitySubjectsHandler = app
  .openapi(getApiV1SecuritySubjectIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecuritySubjectInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecuritySubjectPkRoute, (c) => {
    throw new Error('Not implemented')
  })
