import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBooksV1MyconfigGetUserSettingsRoute,
  postBooksV1MyconfigReleaseDownloadAccessRoute,
  postBooksV1MyconfigRequestAccessRoute,
  postBooksV1MyconfigSyncVolumeLicensesRoute,
  postBooksV1MyconfigUpdateUserSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const myconfigHandler = app
  .openapi(getBooksV1MyconfigGetUserSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MyconfigReleaseDownloadAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MyconfigRequestAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MyconfigSyncVolumeLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MyconfigUpdateUserSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
