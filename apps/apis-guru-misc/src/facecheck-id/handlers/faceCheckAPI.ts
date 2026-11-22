import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiDeletePicRoute,
  postApiInfoRoute,
  postApiSearchRoute,
  postApiUploadPicRoute,
} from '../routes'

const app = new OpenAPIHono()

export const faceCheckAPIHandler = app
  .openapi(postApiDeletePicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadPicRoute, (c) => {
    throw new Error('Not implemented')
  })
