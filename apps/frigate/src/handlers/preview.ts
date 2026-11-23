import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPreviewCameraNameStartStartTsEndEndTsFramesRoute,
  getPreviewCameraNameStartStartTsEndEndTsRoute,
  getPreviewFileNameThumbnailJpgRoute,
  getPreviewFileNameThumbnailWebpRoute,
  getPreviewYearMonthDayHourCameraNameTzNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const previewHandler = app
  .openapi(getPreviewCameraNameStartStartTsEndEndTsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreviewYearMonthDayHourCameraNameTzNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreviewCameraNameStartStartTsEndEndTsFramesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreviewFileNameThumbnailWebpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreviewFileNameThumbnailJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
