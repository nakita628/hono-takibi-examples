import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsFilesApiV1DirectEditingRoute,
  getOcsV2PhpAppsFilesApiV1DirectEditingTemplatesEditorIdCreatorIdRoute,
  postOcsV2PhpAppsFilesApiV1DirectEditingCreateRoute,
  postOcsV2PhpAppsFilesApiV1DirectEditingOpenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directEditingHandler = app
  .openapi(getOcsV2PhpAppsFilesApiV1DirectEditingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsFilesApiV1DirectEditingTemplatesEditorIdCreatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesApiV1DirectEditingOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesApiV1DirectEditingCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
