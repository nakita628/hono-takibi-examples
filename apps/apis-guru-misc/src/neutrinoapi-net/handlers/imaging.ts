import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postHtmlRenderRoute,
  postImageResizeRoute,
  postImageWatermarkRoute,
  postQrCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imagingHandler = app
  .openapi(postHtmlRenderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImageResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImageWatermarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQrCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
