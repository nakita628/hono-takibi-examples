import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiFontRoute,
  getApiFontAllRoute,
  getApiFontRoute,
  postApiFontUploadByUrlRoute,
  postApiFontUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fontHandler = app
  .openapi(getApiFontAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFontRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiFontRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFontUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFontUploadByUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
