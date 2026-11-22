import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnythingIdActionIdRoute,
  getAnythingIdActionRoute,
  getAnythingIdOverrideRoute,
  getAnythingIdRoute,
  postAnythingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app
  .openapi(getAnythingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingIdActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingIdOverrideRoute, (c) => {
    throw new Error('Not implemented')
  })
