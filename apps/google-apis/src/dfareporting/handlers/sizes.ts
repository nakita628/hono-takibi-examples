import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdSizesIdRoute,
  getUserprofilesProfileIdSizesRoute,
  postUserprofilesProfileIdSizesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sizesHandler = app
  .openapi(getUserprofilesProfileIdSizesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdSizesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdSizesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
