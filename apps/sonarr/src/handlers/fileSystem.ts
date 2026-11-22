import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3FilesystemMediafilesRoute,
  getApiV3FilesystemRoute,
  getApiV3FilesystemTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fileSystemHandler = app
  .openapi(getApiV3FilesystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3FilesystemTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3FilesystemMediafilesRoute, (c) => {
    throw new Error('Not implemented')
  })
