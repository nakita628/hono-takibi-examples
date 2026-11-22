import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAnythingAndOrRoute,
  postAnythingAndRoute,
  postAnythingManyAndOrRoute,
  postAnythingOrRoute,
} from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app
  .openapi(postAnythingAndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingOrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingAndOrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingManyAndOrRoute, (c) => {
    throw new Error('Not implemented')
  })
