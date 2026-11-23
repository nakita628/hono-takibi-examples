import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsFilesApiV1TransferownershipIdRoute,
  getOcsV2PhpAppsFilesApiV1DirectEditingRoute,
  getOcsV2PhpAppsFilesApiV1DirectEditingTemplatesEditorIdCreatorIdRoute,
  getOcsV2PhpAppsFilesApiV1FolderTreeRoute,
  getOcsV2PhpAppsFilesApiV1TemplatesFieldsFileIdRoute,
  getOcsV2PhpAppsFilesApiV1TemplatesRoute,
  postOcsV2PhpAppsFilesApiV1ConvertRoute,
  postOcsV2PhpAppsFilesApiV1DirectEditingCreateRoute,
  postOcsV2PhpAppsFilesApiV1DirectEditingOpenRoute,
  postOcsV2PhpAppsFilesApiV1OpenedRoute,
  postOcsV2PhpAppsFilesApiV1OpenlocaleditorRoute,
  postOcsV2PhpAppsFilesApiV1OpenlocaleditorTokenRoute,
  postOcsV2PhpAppsFilesApiV1TemplatesCreateRoute,
  postOcsV2PhpAppsFilesApiV1TemplatesPathRoute,
  postOcsV2PhpAppsFilesApiV1TransferownershipIdRoute,
  postOcsV2PhpAppsFilesApiV1TransferownershipRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app
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
  .openapi(getOcsV2PhpAppsFilesApiV1TemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsFilesApiV1TemplatesFieldsFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesApiV1TemplatesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesApiV1TemplatesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesApiV1TransferownershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesApiV1TransferownershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsFilesApiV1TransferownershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesApiV1OpenlocaleditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesApiV1OpenlocaleditorTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsFilesApiV1FolderTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesApiV1ConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesApiV1OpenedRoute, (c) => {
    throw new Error('Not implemented')
  })
