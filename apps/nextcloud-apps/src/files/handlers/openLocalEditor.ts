import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOcsV2PhpAppsFilesApiV1OpenlocaleditorRoute,
  postOcsV2PhpAppsFilesApiV1OpenlocaleditorTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const openLocalEditorHandler = app
  .openapi(postOcsV2PhpAppsFilesApiV1OpenlocaleditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesApiV1OpenlocaleditorTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
