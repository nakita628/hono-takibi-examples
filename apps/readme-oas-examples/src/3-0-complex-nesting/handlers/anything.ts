import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAnythingTopLevelArrayRoute,
  postAnythingTopLevelObjectSimpleRoute,
  putAnythingTopLevelArrayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app
  .openapi(postAnythingTopLevelArrayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingTopLevelArrayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingTopLevelObjectSimpleRoute, (c) => {
    throw new Error('Not implemented')
  })
