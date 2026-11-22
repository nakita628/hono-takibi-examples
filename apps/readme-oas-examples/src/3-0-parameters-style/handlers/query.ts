import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnythingQueryDeepObjectRoute,
  getAnythingQueryFormRoute,
  getAnythingQueryPipeDelimitedRoute,
  getAnythingQueryRoute,
  getAnythingQuerySpaceDelimitedRoute,
  postAnythingQueryFormRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queryHandler = app
  .openapi(getAnythingQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingQueryFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingQueryFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingQuerySpaceDelimitedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingQueryPipeDelimitedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingQueryDeepObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
