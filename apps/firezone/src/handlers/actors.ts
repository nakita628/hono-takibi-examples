import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActorsIdRoute,
  getActorsIdRoute,
  getActorsRoute,
  patchActorsIdRoute,
  postActorsRoute,
  putActorsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actorsHandler = app
  .openapi(deleteActorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchActorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putActorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActorsRoute, (c) => {
    throw new Error('Not implemented')
  })
