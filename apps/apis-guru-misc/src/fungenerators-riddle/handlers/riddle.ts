import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRiddleRoute,
  getRiddleRandomRoute,
  getRiddleRoute,
  getRiddleSearchRoute,
  postRiddleRoute,
  putRiddleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const riddleHandler = app
  .openapi(deleteRiddleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRiddleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRiddleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRiddleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRiddleRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRiddleSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
