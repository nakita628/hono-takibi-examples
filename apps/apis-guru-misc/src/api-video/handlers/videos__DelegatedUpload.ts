import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUploadTokensUploadTokenRoute,
  getUploadTokensRoute,
  getUploadTokensUploadTokenRoute,
  postUploadRoute,
  postUploadTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videos__DelegatedUploadHandler = app
  .openapi(postUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
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
