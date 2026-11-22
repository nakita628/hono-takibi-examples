import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnythingOptionalAuthRoute,
  postAnythingNoAuthRoute,
  postStatus401Route,
} from '../routes'

const app = new OpenAPIHono()

export const otherHandler = app
  .openapi(postAnythingNoAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingOptionalAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatus401Route, (c) => {
    throw new Error('Not implemented')
  })
