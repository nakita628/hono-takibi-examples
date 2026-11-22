import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SessionsSessionIdentifierRoute,
  getV1ProjectsProjectIdentifierSessionsRoute,
  getV1SessionsSessionIdentifierRoute,
  postV1SessionAnnotationsRoute,
  postV1SessionNotesRoute,
  postV1SessionsDeleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(getV1SessionsSessionIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SessionsSessionIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdentifierSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
