import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnythingArrayOfObjectsRoute,
  getAnythingArrayOfPrimitivesRoute,
  getAnythingMarkdownRoute,
  getAnythingObjectRoute,
  getAnythingPolymorphismRoute,
  getAnythingRecursiveRoute,
  getAnythingReturnsAsJsonButIsActuallyStringRoute,
} from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app
  .openapi(getAnythingArrayOfPrimitivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingMarkdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingArrayOfObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingPolymorphismRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingRecursiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingReturnsAsJsonButIsActuallyStringRoute, (c) => {
    throw new Error('Not implemented')
  })
