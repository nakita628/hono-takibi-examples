import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdVideoFormatsIdRoute,
  getUserprofilesProfileIdVideoFormatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoFormatsHandler = app
  .openapi(getUserprofilesProfileIdVideoFormatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdVideoFormatsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
