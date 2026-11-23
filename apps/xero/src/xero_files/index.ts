import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdAssociationsObjectIdRoute,
  deleteFilesFileIdRoute,
  deleteFoldersFolderIdRoute,
  getAssociationsCountRoute,
  getAssociationsObjectIdRoute,
  getFilesFileIdAssociationsRoute,
  getFilesFileIdContentRoute,
  getFilesFileIdRoute,
  getFilesRoute,
  getFoldersFolderIdRoute,
  getFoldersRoute,
  getInboxRoute,
  postFilesFileIdAssociationsRoute,
  postFilesFolderIdRoute,
  postFilesRoute,
  postFoldersRoute,
  putFilesFileIdRoute,
  putFoldersFolderIdRoute,
} from './routes'
import {
  deleteFilesFileIdAssociationsObjectIdRouteHandler,
  deleteFilesFileIdRouteHandler,
  deleteFoldersFolderIdRouteHandler,
  getAssociationsCountRouteHandler,
  getAssociationsObjectIdRouteHandler,
  getFilesFileIdAssociationsRouteHandler,
  getFilesFileIdContentRouteHandler,
  getFilesFileIdRouteHandler,
  getFilesRouteHandler,
  getFoldersFolderIdRouteHandler,
  getFoldersRouteHandler,
  getInboxRouteHandler,
  postFilesFileIdAssociationsRouteHandler,
  postFilesFolderIdRouteHandler,
  postFilesRouteHandler,
  postFoldersRouteHandler,
  putFilesFileIdRouteHandler,
  putFoldersFolderIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFilesRoute, getFilesRouteHandler)
  .openapi(postFilesRoute, postFilesRouteHandler)
  .openapi(getFilesFileIdRoute, getFilesFileIdRouteHandler)
  .openapi(putFilesFileIdRoute, putFilesFileIdRouteHandler)
  .openapi(deleteFilesFileIdRoute, deleteFilesFileIdRouteHandler)
  .openapi(postFilesFolderIdRoute, postFilesFolderIdRouteHandler)
  .openapi(getFilesFileIdContentRoute, getFilesFileIdContentRouteHandler)
  .openapi(getFilesFileIdAssociationsRoute, getFilesFileIdAssociationsRouteHandler)
  .openapi(postFilesFileIdAssociationsRoute, postFilesFileIdAssociationsRouteHandler)
  .openapi(
    deleteFilesFileIdAssociationsObjectIdRoute,
    deleteFilesFileIdAssociationsObjectIdRouteHandler,
  )
  .openapi(getAssociationsObjectIdRoute, getAssociationsObjectIdRouteHandler)
  .openapi(getAssociationsCountRoute, getAssociationsCountRouteHandler)
  .openapi(getFoldersRoute, getFoldersRouteHandler)
  .openapi(postFoldersRoute, postFoldersRouteHandler)
  .openapi(getFoldersFolderIdRoute, getFoldersFolderIdRouteHandler)
  .openapi(putFoldersFolderIdRoute, putFoldersFolderIdRouteHandler)
  .openapi(deleteFoldersFolderIdRoute, deleteFoldersFolderIdRouteHandler)
  .openapi(getInboxRoute, getInboxRouteHandler)

export default app
