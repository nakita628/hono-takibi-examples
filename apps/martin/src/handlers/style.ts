import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStyleStyleIdRoute,
  getStyleStyleIdStaticCameraSizeFormatRoute,
  getStyleStyleIdZXYFormatRoute,
  postStyleStyleIdStaticCameraSizeFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const styleHandler = app
  .openapi(getStyleStyleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStyleStyleIdZXYFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStyleStyleIdStaticCameraSizeFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStyleStyleIdStaticCameraSizeFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
