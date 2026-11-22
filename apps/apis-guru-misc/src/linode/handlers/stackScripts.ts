import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLinodeStackscriptsStackscriptIdRoute,
  getLinodeStackscriptsRoute,
  getLinodeStackscriptsStackscriptIdRoute,
  postLinodeStackscriptsRoute,
  putLinodeStackscriptsStackscriptIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stackScriptsHandler = app
  .openapi(getLinodeStackscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeStackscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLinodeStackscriptsStackscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeStackscriptsStackscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinodeStackscriptsStackscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
