import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3ScreensScreenIdTabsTabIdRoute,
  getRestApi3ScreensScreenIdTabsRoute,
  postRestApi3ScreensScreenIdTabsRoute,
  postRestApi3ScreensScreenIdTabsTabIdMovePosRoute,
  putRestApi3ScreensScreenIdTabsTabIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const screenTabsHandler = app
  .openapi(getRestApi3ScreensScreenIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ScreensScreenIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ScreensScreenIdTabsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ScreensScreenIdTabsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ScreensScreenIdTabsTabIdMovePosRoute, (c) => {
    throw new Error('Not implemented')
  })
