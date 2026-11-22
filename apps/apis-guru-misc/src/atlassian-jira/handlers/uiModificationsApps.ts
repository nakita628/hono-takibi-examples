import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3UiModificationsUiModificationIdRoute,
  getRestApi3UiModificationsRoute,
  postRestApi3UiModificationsRoute,
  putRestApi3UiModificationsUiModificationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uiModificationsAppsHandler = app
  .openapi(getRestApi3UiModificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3UiModificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3UiModificationsUiModificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3UiModificationsUiModificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
