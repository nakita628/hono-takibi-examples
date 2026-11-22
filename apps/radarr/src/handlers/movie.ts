import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3MovieIdRoute,
  getApiV3MovieIdRoute,
  getApiV3MovieRoute,
  postApiV3MovieRoute,
  putApiV3MovieIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const movieHandler = app
  .openapi(getApiV3MovieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3MovieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3MovieIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3MovieIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3MovieIdRoute, (c) => {
    throw new Error('Not implemented')
  })
