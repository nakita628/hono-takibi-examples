import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPublicMediaMediaIdRoute,
  patchApiPublicMediaMediaIdRoute,
  postApiPublicMediaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(getApiPublicMediaMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicMediaMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
