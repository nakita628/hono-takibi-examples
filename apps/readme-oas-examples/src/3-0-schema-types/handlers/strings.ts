import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchAnythingStringsTopLevelPayloadsRoute,
  postAnythingStringsRoute,
  postAnythingStringsTopLevelPayloadsRoute,
  putAnythingStringsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stringsHandler = app
  .openapi(postAnythingStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingStringsTopLevelPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingStringsTopLevelPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
