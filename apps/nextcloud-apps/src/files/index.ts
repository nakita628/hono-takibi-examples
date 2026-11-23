import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsFilesApiV1TransferownershipIdRoute,
  getIndexPhpAppsFilesApiV1ThumbnailXYFileRoute,
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
} from './routes'
import {
  deleteOcsV2PhpAppsFilesApiV1TransferownershipIdRouteHandler,
  getIndexPhpAppsFilesApiV1ThumbnailXYFileRouteHandler,
  getOcsV2PhpAppsFilesApiV1DirectEditingRouteHandler,
  getOcsV2PhpAppsFilesApiV1DirectEditingTemplatesEditorIdCreatorIdRouteHandler,
  getOcsV2PhpAppsFilesApiV1FolderTreeRouteHandler,
  getOcsV2PhpAppsFilesApiV1TemplatesFieldsFileIdRouteHandler,
  getOcsV2PhpAppsFilesApiV1TemplatesRouteHandler,
  postOcsV2PhpAppsFilesApiV1ConvertRouteHandler,
  postOcsV2PhpAppsFilesApiV1DirectEditingCreateRouteHandler,
  postOcsV2PhpAppsFilesApiV1DirectEditingOpenRouteHandler,
  postOcsV2PhpAppsFilesApiV1OpenedRouteHandler,
  postOcsV2PhpAppsFilesApiV1OpenlocaleditorRouteHandler,
  postOcsV2PhpAppsFilesApiV1OpenlocaleditorTokenRouteHandler,
  postOcsV2PhpAppsFilesApiV1TemplatesCreateRouteHandler,
  postOcsV2PhpAppsFilesApiV1TemplatesPathRouteHandler,
  postOcsV2PhpAppsFilesApiV1TransferownershipIdRouteHandler,
  postOcsV2PhpAppsFilesApiV1TransferownershipRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getIndexPhpAppsFilesApiV1ThumbnailXYFileRoute,
    getIndexPhpAppsFilesApiV1ThumbnailXYFileRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsFilesApiV1DirectEditingRoute,
    getOcsV2PhpAppsFilesApiV1DirectEditingRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsFilesApiV1DirectEditingTemplatesEditorIdCreatorIdRoute,
    getOcsV2PhpAppsFilesApiV1DirectEditingTemplatesEditorIdCreatorIdRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsFilesApiV1DirectEditingOpenRoute,
    postOcsV2PhpAppsFilesApiV1DirectEditingOpenRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsFilesApiV1DirectEditingCreateRoute,
    postOcsV2PhpAppsFilesApiV1DirectEditingCreateRouteHandler,
  )
  .openapi(getOcsV2PhpAppsFilesApiV1TemplatesRoute, getOcsV2PhpAppsFilesApiV1TemplatesRouteHandler)
  .openapi(
    getOcsV2PhpAppsFilesApiV1TemplatesFieldsFileIdRoute,
    getOcsV2PhpAppsFilesApiV1TemplatesFieldsFileIdRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsFilesApiV1TemplatesCreateRoute,
    postOcsV2PhpAppsFilesApiV1TemplatesCreateRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsFilesApiV1TemplatesPathRoute,
    postOcsV2PhpAppsFilesApiV1TemplatesPathRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsFilesApiV1TransferownershipRoute,
    postOcsV2PhpAppsFilesApiV1TransferownershipRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsFilesApiV1TransferownershipIdRoute,
    postOcsV2PhpAppsFilesApiV1TransferownershipIdRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsFilesApiV1TransferownershipIdRoute,
    deleteOcsV2PhpAppsFilesApiV1TransferownershipIdRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsFilesApiV1OpenlocaleditorRoute,
    postOcsV2PhpAppsFilesApiV1OpenlocaleditorRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsFilesApiV1OpenlocaleditorTokenRoute,
    postOcsV2PhpAppsFilesApiV1OpenlocaleditorTokenRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsFilesApiV1FolderTreeRoute,
    getOcsV2PhpAppsFilesApiV1FolderTreeRouteHandler,
  )
  .openapi(postOcsV2PhpAppsFilesApiV1ConvertRoute, postOcsV2PhpAppsFilesApiV1ConvertRouteHandler)
  .openapi(postOcsV2PhpAppsFilesApiV1OpenedRoute, postOcsV2PhpAppsFilesApiV1OpenedRouteHandler)

export default app
