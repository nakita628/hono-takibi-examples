import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUploadTokensUploadTokenRoute,
  getUploadTokensRoute,
  getUploadTokensUploadTokenRoute,
  postUploadTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uploadTokensHandler = app
  .openapi(getUploadTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUploadTokensUploadTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUploadTokensUploadTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
