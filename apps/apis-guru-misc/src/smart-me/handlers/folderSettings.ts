import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiFolderSettingsIdRoute,
  getApiFolderSettingsIdRoute,
  postApiFolderSettingsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const folderSettingsHandler = app
  .openapi(deleteApiFolderSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
