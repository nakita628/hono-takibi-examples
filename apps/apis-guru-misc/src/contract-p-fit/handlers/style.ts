import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStyleCustomCssRoute,
  getStyleLogoPngRoute,
  postStyleCustomCssRoute,
  postStyleLogoPngRoute,
} from '../routes'

const app = new OpenAPIHono()

export const styleHandler = app
  .openapi(getStyleCustomCssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStyleCustomCssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStyleLogoPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStyleLogoPngRoute, (c) => {
    throw new Error('Not implemented')
  })
