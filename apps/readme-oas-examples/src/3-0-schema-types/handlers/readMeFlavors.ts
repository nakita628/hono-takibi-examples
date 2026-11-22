import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchAnythingRawBodyTopLevelPayloadsRoute,
  postAnythingRawBodyTopLevelPayloadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const readMeFlavorsHandler = app
  .openapi(postAnythingRawBodyTopLevelPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingRawBodyTopLevelPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
