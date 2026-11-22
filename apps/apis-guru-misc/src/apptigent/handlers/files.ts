import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postConvertImageRoute,
  postCropImageRoute,
  postFileToStringRoute,
  postFlipImageRoute,
  postGenerateQRCodeRoute,
  postResizeImageRoute,
  postRotateImageRoute,
  postWatermarkImageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(postConvertImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCropImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileToStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFlipImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGenerateQRCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResizeImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRotateImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatermarkImageRoute, (c) => {
    throw new Error('Not implemented')
  })
