import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3ScreensScreenIdTabsTabIdFieldsIdRoute,
  getRestApi3ScreensScreenIdTabsTabIdFieldsRoute,
  postRestApi3ScreensScreenIdTabsTabIdFieldsIdMoveRoute,
  postRestApi3ScreensScreenIdTabsTabIdFieldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const screenTabFieldsHandler = app
  .openapi(getRestApi3ScreensScreenIdTabsTabIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ScreensScreenIdTabsTabIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ScreensScreenIdTabsTabIdFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ScreensScreenIdTabsTabIdFieldsIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
