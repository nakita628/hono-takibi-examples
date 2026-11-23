import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFiles202609FilesFileIdGdprDeleteRoute,
  deleteFiles202609FilesFileIdRoute,
  deleteFiles202609FoldersFolderIdRoute,
  deleteFiles202609FoldersFolderPathRoute,
  getFiles202609FilesFileIdDownloadRoute,
  getFiles202609FilesFileIdRoute,
  getFiles202609FilesFileIdSignedUrlRoute,
  getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusRoute,
  getFiles202609FilesSearchRoute,
  getFiles202609FilesStatPathRoute,
  getFiles202609FoldersFolderIdRoute,
  getFiles202609FoldersFolderPathRoute,
  getFiles202609FoldersSearchRoute,
  patchFiles202609FilesFileIdRoute,
  patchFiles202609FoldersFolderIdRoute,
  postFiles202609FilesImportFromUrlAsyncRoute,
  postFiles202609FilesRoute,
  postFiles202609FoldersRoute,
  putFiles202609FilesFileIdRoute,
} from './routes'
import {
  deleteFiles202609FilesFileIdGdprDeleteRouteHandler,
  deleteFiles202609FilesFileIdRouteHandler,
  deleteFiles202609FoldersFolderIdRouteHandler,
  deleteFiles202609FoldersFolderPathRouteHandler,
  getFiles202609FilesFileIdDownloadRouteHandler,
  getFiles202609FilesFileIdRouteHandler,
  getFiles202609FilesFileIdSignedUrlRouteHandler,
  getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusRouteHandler,
  getFiles202609FilesSearchRouteHandler,
  getFiles202609FilesStatPathRouteHandler,
  getFiles202609FoldersFolderIdRouteHandler,
  getFiles202609FoldersFolderPathRouteHandler,
  getFiles202609FoldersSearchRouteHandler,
  patchFiles202609FilesFileIdRouteHandler,
  patchFiles202609FoldersFolderIdRouteHandler,
  postFiles202609FilesImportFromUrlAsyncRouteHandler,
  postFiles202609FilesRouteHandler,
  postFiles202609FoldersRouteHandler,
  putFiles202609FilesFileIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postFiles202609FilesRoute, postFiles202609FilesRouteHandler)
  .openapi(
    postFiles202609FilesImportFromUrlAsyncRoute,
    postFiles202609FilesImportFromUrlAsyncRouteHandler,
  )
  .openapi(
    getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusRoute,
    getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusRouteHandler,
  )
  .openapi(getFiles202609FilesSearchRoute, getFiles202609FilesSearchRouteHandler)
  .openapi(getFiles202609FilesStatPathRoute, getFiles202609FilesStatPathRouteHandler)
  .openapi(getFiles202609FilesFileIdRoute, getFiles202609FilesFileIdRouteHandler)
  .openapi(putFiles202609FilesFileIdRoute, putFiles202609FilesFileIdRouteHandler)
  .openapi(deleteFiles202609FilesFileIdRoute, deleteFiles202609FilesFileIdRouteHandler)
  .openapi(patchFiles202609FilesFileIdRoute, patchFiles202609FilesFileIdRouteHandler)
  .openapi(getFiles202609FilesFileIdDownloadRoute, getFiles202609FilesFileIdDownloadRouteHandler)
  .openapi(
    deleteFiles202609FilesFileIdGdprDeleteRoute,
    deleteFiles202609FilesFileIdGdprDeleteRouteHandler,
  )
  .openapi(getFiles202609FilesFileIdSignedUrlRoute, getFiles202609FilesFileIdSignedUrlRouteHandler)
  .openapi(postFiles202609FoldersRoute, postFiles202609FoldersRouteHandler)
  .openapi(getFiles202609FoldersSearchRoute, getFiles202609FoldersSearchRouteHandler)
  .openapi(getFiles202609FoldersFolderIdRoute, getFiles202609FoldersFolderIdRouteHandler)
  .openapi(deleteFiles202609FoldersFolderIdRoute, deleteFiles202609FoldersFolderIdRouteHandler)
  .openapi(patchFiles202609FoldersFolderIdRoute, patchFiles202609FoldersFolderIdRouteHandler)
  .openapi(getFiles202609FoldersFolderPathRoute, getFiles202609FoldersFolderPathRouteHandler)
  .openapi(deleteFiles202609FoldersFolderPathRoute, deleteFiles202609FoldersFolderPathRouteHandler)

export default app
