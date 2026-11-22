import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPreviewCameraNameStartStartTsEndEndTsFramesRoute,
  getPreviewCameraNameStartStartTsEndEndTsRoute,
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
