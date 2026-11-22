import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3ScreensScreenIdRoute,
  getRestApi3FieldFieldIdScreensRoute,
  getRestApi3ScreensRoute,
  getRestApi3ScreensScreenIdAvailableFieldsRoute,
  postRestApi3ScreensAddToDefaultFieldIdRoute,
  postRestApi3ScreensRoute,
  putRestApi3ScreensScreenIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const screensHandler = app
  .openapi(getRestApi3FieldFieldIdScreensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ScreensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ScreensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ScreensAddToDefaultFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ScreensScreenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ScreensScreenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ScreensScreenIdAvailableFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
