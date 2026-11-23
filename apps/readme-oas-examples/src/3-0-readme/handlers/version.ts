import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVersionVersionIdRoute,
  getVersionRoute,
  getVersionVersionIdRoute,
  postVersionRoute,
  putVersionVersionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const versionHandler = app
  .openapi(getVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVersionVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
