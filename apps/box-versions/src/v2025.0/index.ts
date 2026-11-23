import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteArchivesArchiveIdRoute,
  deleteDocgenTemplatesTemplateIdRoute,
  deleteHubCollaborationsHubCollaborationIdRoute,
  deleteHubsHubIdRoute,
  deleteShieldListsShieldListIdRoute,
  getArchivesRoute,
  getDocgenBatchJobsBatchIdRoute,
  getDocgenJobsJobIdRoute,
  getDocgenJobsRoute,
  getDocgenTemplateJobsTemplateIdRoute,
  getDocgenTemplatesRoute,
  getDocgenTemplatesTemplateIdRoute,
  getDocgenTemplatesTemplateIdTagsRoute,
  getEnterpriseConfigurationsEnterpriseIdRoute,
  getEnterpriseHubsRoute,
  getHubCollaborationsHubCollaborationIdRoute,
  getHubCollaborationsRoute,
  getHubDocumentBlocksRoute,
  getHubDocumentPagesRoute,
  getHubItemsRoute,
  getHubsHubIdRoute,
  getHubsRoute,
  getShieldListsRoute,
  getShieldListsShieldListIdRoute,
  postArchivesRoute,
  postDocgenBatchesRoute,
  postDocgenTemplatesRoute,
  postExternalUsersSubmitDeleteJobRoute,
  postHubCollaborationsRoute,
  postHubsHubIdCopyRoute,
  postHubsHubIdManageItemsRoute,
  postHubsRoute,
  postShieldListsRoute,
  putArchivesArchiveIdRoute,
  putHubCollaborationsHubCollaborationIdRoute,
  putHubsHubIdRoute,
  putShieldListsShieldListIdRoute,
} from './routes'
import {
  deleteArchivesArchiveIdRouteHandler,
  deleteDocgenTemplatesTemplateIdRouteHandler,
  deleteHubCollaborationsHubCollaborationIdRouteHandler,
  deleteHubsHubIdRouteHandler,
  deleteShieldListsShieldListIdRouteHandler,
  getArchivesRouteHandler,
  getDocgenBatchJobsBatchIdRouteHandler,
  getDocgenJobsJobIdRouteHandler,
  getDocgenJobsRouteHandler,
  getDocgenTemplateJobsTemplateIdRouteHandler,
  getDocgenTemplatesRouteHandler,
  getDocgenTemplatesTemplateIdRouteHandler,
  getDocgenTemplatesTemplateIdTagsRouteHandler,
  getEnterpriseConfigurationsEnterpriseIdRouteHandler,
  getEnterpriseHubsRouteHandler,
  getHubCollaborationsHubCollaborationIdRouteHandler,
  getHubCollaborationsRouteHandler,
  getHubDocumentBlocksRouteHandler,
  getHubDocumentPagesRouteHandler,
  getHubItemsRouteHandler,
  getHubsHubIdRouteHandler,
  getHubsRouteHandler,
  getShieldListsRouteHandler,
  getShieldListsShieldListIdRouteHandler,
  postArchivesRouteHandler,
  postDocgenBatchesRouteHandler,
  postDocgenTemplatesRouteHandler,
  postExternalUsersSubmitDeleteJobRouteHandler,
  postHubCollaborationsRouteHandler,
  postHubsHubIdCopyRouteHandler,
  postHubsHubIdManageItemsRouteHandler,
  postHubsRouteHandler,
  postShieldListsRouteHandler,
  putArchivesArchiveIdRouteHandler,
  putHubCollaborationsHubCollaborationIdRouteHandler,
  putHubsHubIdRouteHandler,
  putShieldListsShieldListIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDocgenTemplatesRoute, postDocgenTemplatesRouteHandler)
  .openapi(getDocgenTemplatesRoute, getDocgenTemplatesRouteHandler)
  .openapi(deleteDocgenTemplatesTemplateIdRoute, deleteDocgenTemplatesTemplateIdRouteHandler)
  .openapi(getDocgenTemplatesTemplateIdRoute, getDocgenTemplatesTemplateIdRouteHandler)
  .openapi(getDocgenTemplatesTemplateIdTagsRoute, getDocgenTemplatesTemplateIdTagsRouteHandler)
  .openapi(getDocgenJobsJobIdRoute, getDocgenJobsJobIdRouteHandler)
  .openapi(getDocgenJobsRoute, getDocgenJobsRouteHandler)
  .openapi(getDocgenTemplateJobsTemplateIdRoute, getDocgenTemplateJobsTemplateIdRouteHandler)
  .openapi(getDocgenBatchJobsBatchIdRoute, getDocgenBatchJobsBatchIdRouteHandler)
  .openapi(postDocgenBatchesRoute, postDocgenBatchesRouteHandler)
  .openapi(
    getEnterpriseConfigurationsEnterpriseIdRoute,
    getEnterpriseConfigurationsEnterpriseIdRouteHandler,
  )
  .openapi(getHubsRoute, getHubsRouteHandler)
  .openapi(postHubsRoute, postHubsRouteHandler)
  .openapi(getEnterpriseHubsRoute, getEnterpriseHubsRouteHandler)
  .openapi(getHubsHubIdRoute, getHubsHubIdRouteHandler)
  .openapi(putHubsHubIdRoute, putHubsHubIdRouteHandler)
  .openapi(deleteHubsHubIdRoute, deleteHubsHubIdRouteHandler)
  .openapi(postHubsHubIdCopyRoute, postHubsHubIdCopyRouteHandler)
  .openapi(getHubCollaborationsRoute, getHubCollaborationsRouteHandler)
  .openapi(postHubCollaborationsRoute, postHubCollaborationsRouteHandler)
  .openapi(
    getHubCollaborationsHubCollaborationIdRoute,
    getHubCollaborationsHubCollaborationIdRouteHandler,
  )
  .openapi(
    putHubCollaborationsHubCollaborationIdRoute,
    putHubCollaborationsHubCollaborationIdRouteHandler,
  )
  .openapi(
    deleteHubCollaborationsHubCollaborationIdRoute,
    deleteHubCollaborationsHubCollaborationIdRouteHandler,
  )
  .openapi(getHubItemsRoute, getHubItemsRouteHandler)
  .openapi(postHubsHubIdManageItemsRoute, postHubsHubIdManageItemsRouteHandler)
  .openapi(getHubDocumentPagesRoute, getHubDocumentPagesRouteHandler)
  .openapi(getHubDocumentBlocksRoute, getHubDocumentBlocksRouteHandler)
  .openapi(getShieldListsRoute, getShieldListsRouteHandler)
  .openapi(postShieldListsRoute, postShieldListsRouteHandler)
  .openapi(getShieldListsShieldListIdRoute, getShieldListsShieldListIdRouteHandler)
  .openapi(deleteShieldListsShieldListIdRoute, deleteShieldListsShieldListIdRouteHandler)
  .openapi(putShieldListsShieldListIdRoute, putShieldListsShieldListIdRouteHandler)
  .openapi(getArchivesRoute, getArchivesRouteHandler)
  .openapi(postArchivesRoute, postArchivesRouteHandler)
  .openapi(deleteArchivesArchiveIdRoute, deleteArchivesArchiveIdRouteHandler)
  .openapi(putArchivesArchiveIdRoute, putArchivesArchiveIdRouteHandler)
  .openapi(postExternalUsersSubmitDeleteJobRoute, postExternalUsersSubmitDeleteJobRouteHandler)

export default app
