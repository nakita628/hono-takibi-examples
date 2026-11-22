import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchAnythingNumbersRoute,
  postAnythingNumbersRoute,
  putAnythingNumbersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const numbersHandler = app
  .openapi(postAnythingNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
