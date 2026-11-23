import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVodCameraNameStartStartTsEndEndTsRoute,
  getVodCameraNameStreamStartStartTsEndEndTsRoute,
  getVodClipCameraNameStartStartTsEndEndTsRoute,
  getVodEventEventIdRoute,
  getVodYearMonthDayHourCameraNameRoute,
  getVodYearMonthDayHourCameraNameTzNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vodHandler = app
  .openapi(getVodCameraNameStartStartTsEndEndTsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVodYearMonthDayHourCameraNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVodYearMonthDayHourCameraNameTzNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVodEventEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVodClipCameraNameStartStartTsEndEndTsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVodCameraNameStreamStartStartTsEndEndTsRoute, (c) => {
    throw new Error('Not implemented')
  })
