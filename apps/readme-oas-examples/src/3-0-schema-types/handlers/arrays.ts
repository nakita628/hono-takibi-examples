import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchAnythingArraysTopLevelPayloadsRoute,
  postAnythingArraysRoute,
  postAnythingArraysTopLevelPayloadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const arraysHandler = app
  .openapi(postAnythingArraysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingArraysTopLevelPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingArraysTopLevelPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
