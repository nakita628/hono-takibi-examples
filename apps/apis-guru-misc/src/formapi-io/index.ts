import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCombinedSubmissionsCombinedSubmissionIdRoute,
  deleteFoldersFolderIdRoute,
  deleteSubmissionsSubmissionIdRoute,
  getAuthenticationRoute,
  getCombinedSubmissionsCombinedSubmissionIdRoute,
  getCombinedSubmissionsRoute,
  getDataRequestsDataRequestIdRoute,
  getFoldersIndexRoute,
  getSubmissionsBatchesSubmissionBatchIdRoute,
  getSubmissionsRoute,
  getSubmissionsSubmissionIdRoute,
  getTemplatesRoute,
  getTemplatesTemplateIdFullTrueRoute,
  getTemplatesTemplateIdRoute,
  getTemplatesTemplateIdSchemaRoute,
  getTemplatesTemplateIdSubmissionsRoute,
  getUploadsPresignRoute,
  postCombinedSubmissionsRoute,
  postCombinedSubmissionsV2Route,
  postCustomFilesRoute,
  postDataRequestsDataRequestIdTokensRoute,
  postFoldersFolderIdMoveRoute,
  postFoldersFolderIdRenameRoute,
  postFoldersIndexRoute,
  postSubmissionsBatchesRoute,
  postTemplatesDescCachedUploadRoute,
  postTemplatesDescHtmlRoute,
  postTemplatesRoute,
  postTemplatesTemplateIdCopyRoute,
  postTemplatesTemplateIdMoveRoute,
  postTemplatesTemplateIdSubmissionsBatchRoute,
  postTemplatesTemplateIdSubmissionsRoute,
  putDataRequestsDataRequestIdRoute,
  putTemplatesTemplateIdAddFieldsRoute,
  putTemplatesTemplateIdRoute,
} from './routes'
import {
  deleteCombinedSubmissionsCombinedSubmissionIdRouteHandler,
  deleteFoldersFolderIdRouteHandler,
  deleteSubmissionsSubmissionIdRouteHandler,
  getAuthenticationRouteHandler,
  getCombinedSubmissionsCombinedSubmissionIdRouteHandler,
  getCombinedSubmissionsRouteHandler,
  getDataRequestsDataRequestIdRouteHandler,
  getFoldersIndexRouteHandler,
  getSubmissionsBatchesSubmissionBatchIdRouteHandler,
  getSubmissionsRouteHandler,
  getSubmissionsSubmissionIdRouteHandler,
  getTemplatesRouteHandler,
  getTemplatesTemplateIdFullTrueRouteHandler,
  getTemplatesTemplateIdRouteHandler,
  getTemplatesTemplateIdSchemaRouteHandler,
  getTemplatesTemplateIdSubmissionsRouteHandler,
  getUploadsPresignRouteHandler,
  postCombinedSubmissionsRouteHandler,
  postCombinedSubmissionsV2RouteHandler,
  postCustomFilesRouteHandler,
  postDataRequestsDataRequestIdTokensRouteHandler,
  postFoldersFolderIdMoveRouteHandler,
  postFoldersFolderIdRenameRouteHandler,
  postFoldersIndexRouteHandler,
  postSubmissionsBatchesRouteHandler,
  postTemplatesDescCachedUploadRouteHandler,
  postTemplatesDescHtmlRouteHandler,
  postTemplatesRouteHandler,
  postTemplatesTemplateIdCopyRouteHandler,
  postTemplatesTemplateIdMoveRouteHandler,
  postTemplatesTemplateIdSubmissionsBatchRouteHandler,
  postTemplatesTemplateIdSubmissionsRouteHandler,
  putDataRequestsDataRequestIdRouteHandler,
  putTemplatesTemplateIdAddFieldsRouteHandler,
  putTemplatesTemplateIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAuthenticationRoute, getAuthenticationRouteHandler)
  .openapi(getCombinedSubmissionsRoute, getCombinedSubmissionsRouteHandler)
  .openapi(postCombinedSubmissionsRoute, postCombinedSubmissionsRouteHandler)
  .openapi(
    deleteCombinedSubmissionsCombinedSubmissionIdRoute,
    deleteCombinedSubmissionsCombinedSubmissionIdRouteHandler,
  )
  .openapi(
    getCombinedSubmissionsCombinedSubmissionIdRoute,
    getCombinedSubmissionsCombinedSubmissionIdRouteHandler,
  )
  .openapi(postCombinedSubmissionsV2Route, postCombinedSubmissionsV2RouteHandler)
  .openapi(postCustomFilesRoute, postCustomFilesRouteHandler)
  .openapi(getDataRequestsDataRequestIdRoute, getDataRequestsDataRequestIdRouteHandler)
  .openapi(putDataRequestsDataRequestIdRoute, putDataRequestsDataRequestIdRouteHandler)
  .openapi(
    postDataRequestsDataRequestIdTokensRoute,
    postDataRequestsDataRequestIdTokensRouteHandler,
  )
  .openapi(getFoldersIndexRoute, getFoldersIndexRouteHandler)
  .openapi(postFoldersIndexRoute, postFoldersIndexRouteHandler)
  .openapi(deleteFoldersFolderIdRoute, deleteFoldersFolderIdRouteHandler)
  .openapi(postFoldersFolderIdMoveRoute, postFoldersFolderIdMoveRouteHandler)
  .openapi(postFoldersFolderIdRenameRoute, postFoldersFolderIdRenameRouteHandler)
  .openapi(getSubmissionsRoute, getSubmissionsRouteHandler)
  .openapi(postSubmissionsBatchesRoute, postSubmissionsBatchesRouteHandler)
  .openapi(
    getSubmissionsBatchesSubmissionBatchIdRoute,
    getSubmissionsBatchesSubmissionBatchIdRouteHandler,
  )
  .openapi(deleteSubmissionsSubmissionIdRoute, deleteSubmissionsSubmissionIdRouteHandler)
  .openapi(getSubmissionsSubmissionIdRoute, getSubmissionsSubmissionIdRouteHandler)
  .openapi(getTemplatesRoute, getTemplatesRouteHandler)
  .openapi(postTemplatesRoute, postTemplatesRouteHandler)
  .openapi(getTemplatesTemplateIdRoute, getTemplatesTemplateIdRouteHandler)
  .openapi(putTemplatesTemplateIdRoute, putTemplatesTemplateIdRouteHandler)
  .openapi(putTemplatesTemplateIdAddFieldsRoute, putTemplatesTemplateIdAddFieldsRouteHandler)
  .openapi(postTemplatesTemplateIdCopyRoute, postTemplatesTemplateIdCopyRouteHandler)
  .openapi(postTemplatesTemplateIdMoveRoute, postTemplatesTemplateIdMoveRouteHandler)
  .openapi(getTemplatesTemplateIdSchemaRoute, getTemplatesTemplateIdSchemaRouteHandler)
  .openapi(getTemplatesTemplateIdSubmissionsRoute, getTemplatesTemplateIdSubmissionsRouteHandler)
  .openapi(postTemplatesTemplateIdSubmissionsRoute, postTemplatesTemplateIdSubmissionsRouteHandler)
  .openapi(
    postTemplatesTemplateIdSubmissionsBatchRoute,
    postTemplatesTemplateIdSubmissionsBatchRouteHandler,
  )
  .openapi(getTemplatesTemplateIdFullTrueRoute, getTemplatesTemplateIdFullTrueRouteHandler)
  .openapi(postTemplatesDescCachedUploadRoute, postTemplatesDescCachedUploadRouteHandler)
  .openapi(postTemplatesDescHtmlRoute, postTemplatesDescHtmlRouteHandler)
  .openapi(getUploadsPresignRoute, getUploadsPresignRouteHandler)

export default app
