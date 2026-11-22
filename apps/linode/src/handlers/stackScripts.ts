import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionLinodeStackscriptsStackscriptIdRoute,
  getApiVersionLinodeStackscriptsRoute,
  getApiVersionLinodeStackscriptsStackscriptIdRoute,
  postApiVersionLinodeStackscriptsRoute,
  putApiVersionLinodeStackscriptsStackscriptIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stackScriptsHandler = app
  .openapi(postApiVersionLinodeStackscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeStackscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeStackscriptsStackscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeStackscriptsStackscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLinodeStackscriptsStackscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
