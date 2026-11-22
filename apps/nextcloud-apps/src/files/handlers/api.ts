import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIndexPhpAppsFilesApiV1ThumbnailXYFileRoute,
  getOcsV2PhpAppsFilesApiV1FolderTreeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getIndexPhpAppsFilesApiV1ThumbnailXYFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsFilesApiV1FolderTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
