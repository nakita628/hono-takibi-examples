import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1DocumentsDocumentIdRoute,
  deleteApiV1DocumentsDocumentIdVersionsVersionIdCommentCommentIdRoute,
  deleteApiV1DocumentsDocumentIdVersionsVersionIdRoute,
  deleteApiV1DocumentVersionsDocumentIdVersionsVersionIdDeletePriorVersionsRoute,
  deleteApiV1FoldersFolderIdContentsRoute,
  deleteApiV1FoldersFolderIdRoute,
  deleteApiV1OrganizationsOrganizationIdSubscriptionsSubscriptionIdRoute,
  deleteApiV1ResourcesResourceIdCustomMetadataRoute,
  deleteApiV1ResourcesResourceIdLabelsRoute,
  deleteApiV1ResourcesResourceIdPermissionsPrincipalIdRoute,
  deleteApiV1ResourcesResourceIdPermissionsRoute,
  deleteApiV1UsersUserIdActivationRoute,
  deleteApiV1UsersUserIdRoute,
  getApiV1ActivitiesRoute,
  getApiV1DocumentsDocumentIdPathRoute,
  getApiV1DocumentsDocumentIdRoute,
  getApiV1DocumentsDocumentIdVersionsRoute,
  getApiV1DocumentsDocumentIdVersionsVersionIdCommentsRoute,
  getApiV1DocumentsDocumentIdVersionsVersionIdRoute,
  getApiV1FoldersFolderIdContentsRoute,
  getApiV1FoldersFolderIdPathRoute,
  getApiV1FoldersFolderIdRoute,
  getApiV1GroupsSearchQueryRoute,
  getApiV1MeAuthenticationRoute,
  getApiV1MeRootAuthenticationRoute,
  getApiV1OrganizationsOrganizationIdSubscriptionsRoute,
  getApiV1ResourcesResourceIdPermissionsRoute,
  getApiV1ResourcesRoute,
  getApiV1UsersRoute,
  patchApiV1DocumentsDocumentIdRoute,
  patchApiV1DocumentsDocumentIdVersionsVersionIdRoute,
  patchApiV1FoldersFolderIdRoute,
  patchApiV1UsersUserIdRoute,
  postApiV1DocumentsDocumentIdVersionsVersionIdCommentRoute,
  postApiV1DocumentsRoute,
  postApiV1DocumentVersionsRestoreDocumentIdRoute,
  postApiV1FoldersRoute,
  postApiV1OrganizationsOrganizationIdSubscriptionsRoute,
  postApiV1ResourcesResourceIdPermissionsRoute,
  postApiV1SearchRoute,
  postApiV1UsersRoute,
  postApiV1UsersUserIdActivationRoute,
  putApiV1ResourcesResourceIdCustomMetadataRoute,
  putApiV1ResourcesResourceIdLabelsRoute,
} from './routes'
import {
  deleteApiV1DocumentsDocumentIdRouteHandler,
  deleteApiV1DocumentsDocumentIdVersionsVersionIdCommentCommentIdRouteHandler,
  deleteApiV1DocumentsDocumentIdVersionsVersionIdRouteHandler,
  deleteApiV1DocumentVersionsDocumentIdVersionsVersionIdDeletePriorVersionsRouteHandler,
  deleteApiV1FoldersFolderIdContentsRouteHandler,
  deleteApiV1FoldersFolderIdRouteHandler,
  deleteApiV1OrganizationsOrganizationIdSubscriptionsSubscriptionIdRouteHandler,
  deleteApiV1ResourcesResourceIdCustomMetadataRouteHandler,
  deleteApiV1ResourcesResourceIdLabelsRouteHandler,
  deleteApiV1ResourcesResourceIdPermissionsPrincipalIdRouteHandler,
  deleteApiV1ResourcesResourceIdPermissionsRouteHandler,
  deleteApiV1UsersUserIdActivationRouteHandler,
  deleteApiV1UsersUserIdRouteHandler,
  getApiV1ActivitiesRouteHandler,
  getApiV1DocumentsDocumentIdPathRouteHandler,
  getApiV1DocumentsDocumentIdRouteHandler,
  getApiV1DocumentsDocumentIdVersionsRouteHandler,
  getApiV1DocumentsDocumentIdVersionsVersionIdCommentsRouteHandler,
  getApiV1DocumentsDocumentIdVersionsVersionIdRouteHandler,
  getApiV1FoldersFolderIdContentsRouteHandler,
  getApiV1FoldersFolderIdPathRouteHandler,
  getApiV1FoldersFolderIdRouteHandler,
  getApiV1GroupsSearchQueryRouteHandler,
  getApiV1MeAuthenticationRouteHandler,
  getApiV1MeRootAuthenticationRouteHandler,
  getApiV1OrganizationsOrganizationIdSubscriptionsRouteHandler,
  getApiV1ResourcesResourceIdPermissionsRouteHandler,
  getApiV1ResourcesRouteHandler,
  getApiV1UsersRouteHandler,
  patchApiV1DocumentsDocumentIdRouteHandler,
  patchApiV1DocumentsDocumentIdVersionsVersionIdRouteHandler,
  patchApiV1FoldersFolderIdRouteHandler,
  patchApiV1UsersUserIdRouteHandler,
  postApiV1DocumentsDocumentIdVersionsVersionIdCommentRouteHandler,
  postApiV1DocumentsRouteHandler,
  postApiV1DocumentVersionsRestoreDocumentIdRouteHandler,
  postApiV1FoldersRouteHandler,
  postApiV1OrganizationsOrganizationIdSubscriptionsRouteHandler,
  postApiV1ResourcesResourceIdPermissionsRouteHandler,
  postApiV1SearchRouteHandler,
  postApiV1UsersRouteHandler,
  postApiV1UsersUserIdActivationRouteHandler,
  putApiV1ResourcesResourceIdCustomMetadataRouteHandler,
  putApiV1ResourcesResourceIdLabelsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    deleteApiV1DocumentsDocumentIdVersionsVersionIdRoute,
    deleteApiV1DocumentsDocumentIdVersionsVersionIdRouteHandler,
  )
  .openapi(
    getApiV1DocumentsDocumentIdVersionsVersionIdRoute,
    getApiV1DocumentsDocumentIdVersionsVersionIdRouteHandler,
  )
  .openapi(
    patchApiV1DocumentsDocumentIdVersionsVersionIdRoute,
    patchApiV1DocumentsDocumentIdVersionsVersionIdRouteHandler,
  )
  .openapi(postApiV1UsersUserIdActivationRoute, postApiV1UsersUserIdActivationRouteHandler)
  .openapi(deleteApiV1UsersUserIdActivationRoute, deleteApiV1UsersUserIdActivationRouteHandler)
  .openapi(
    postApiV1ResourcesResourceIdPermissionsRoute,
    postApiV1ResourcesResourceIdPermissionsRouteHandler,
  )
  .openapi(
    getApiV1ResourcesResourceIdPermissionsRoute,
    getApiV1ResourcesResourceIdPermissionsRouteHandler,
  )
  .openapi(
    deleteApiV1ResourcesResourceIdPermissionsRoute,
    deleteApiV1ResourcesResourceIdPermissionsRouteHandler,
  )
  .openapi(
    postApiV1DocumentsDocumentIdVersionsVersionIdCommentRoute,
    postApiV1DocumentsDocumentIdVersionsVersionIdCommentRouteHandler,
  )
  .openapi(
    putApiV1ResourcesResourceIdCustomMetadataRoute,
    putApiV1ResourcesResourceIdCustomMetadataRouteHandler,
  )
  .openapi(
    deleteApiV1ResourcesResourceIdCustomMetadataRoute,
    deleteApiV1ResourcesResourceIdCustomMetadataRouteHandler,
  )
  .openapi(postApiV1FoldersRoute, postApiV1FoldersRouteHandler)
  .openapi(putApiV1ResourcesResourceIdLabelsRoute, putApiV1ResourcesResourceIdLabelsRouteHandler)
  .openapi(
    deleteApiV1ResourcesResourceIdLabelsRoute,
    deleteApiV1ResourcesResourceIdLabelsRouteHandler,
  )
  .openapi(
    postApiV1OrganizationsOrganizationIdSubscriptionsRoute,
    postApiV1OrganizationsOrganizationIdSubscriptionsRouteHandler,
  )
  .openapi(
    getApiV1OrganizationsOrganizationIdSubscriptionsRoute,
    getApiV1OrganizationsOrganizationIdSubscriptionsRouteHandler,
  )
  .openapi(postApiV1UsersRoute, postApiV1UsersRouteHandler)
  .openapi(getApiV1UsersRoute, getApiV1UsersRouteHandler)
  .openapi(
    deleteApiV1DocumentsDocumentIdVersionsVersionIdCommentCommentIdRoute,
    deleteApiV1DocumentsDocumentIdVersionsVersionIdCommentCommentIdRouteHandler,
  )
  .openapi(deleteApiV1DocumentsDocumentIdRoute, deleteApiV1DocumentsDocumentIdRouteHandler)
  .openapi(getApiV1DocumentsDocumentIdRoute, getApiV1DocumentsDocumentIdRouteHandler)
  .openapi(patchApiV1DocumentsDocumentIdRoute, patchApiV1DocumentsDocumentIdRouteHandler)
  .openapi(
    deleteApiV1DocumentVersionsDocumentIdVersionsVersionIdDeletePriorVersionsRoute,
    deleteApiV1DocumentVersionsDocumentIdVersionsVersionIdDeletePriorVersionsRouteHandler,
  )
  .openapi(deleteApiV1FoldersFolderIdRoute, deleteApiV1FoldersFolderIdRouteHandler)
  .openapi(getApiV1FoldersFolderIdRoute, getApiV1FoldersFolderIdRouteHandler)
  .openapi(patchApiV1FoldersFolderIdRoute, patchApiV1FoldersFolderIdRouteHandler)
  .openapi(deleteApiV1FoldersFolderIdContentsRoute, deleteApiV1FoldersFolderIdContentsRouteHandler)
  .openapi(getApiV1FoldersFolderIdContentsRoute, getApiV1FoldersFolderIdContentsRouteHandler)
  .openapi(
    deleteApiV1OrganizationsOrganizationIdSubscriptionsSubscriptionIdRoute,
    deleteApiV1OrganizationsOrganizationIdSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(deleteApiV1UsersUserIdRoute, deleteApiV1UsersUserIdRouteHandler)
  .openapi(patchApiV1UsersUserIdRoute, patchApiV1UsersUserIdRouteHandler)
  .openapi(getApiV1ActivitiesRoute, getApiV1ActivitiesRouteHandler)
  .openapi(
    getApiV1DocumentsDocumentIdVersionsVersionIdCommentsRoute,
    getApiV1DocumentsDocumentIdVersionsVersionIdCommentsRouteHandler,
  )
  .openapi(
    getApiV1DocumentsDocumentIdVersionsRoute,
    getApiV1DocumentsDocumentIdVersionsRouteHandler,
  )
  .openapi(getApiV1GroupsSearchQueryRoute, getApiV1GroupsSearchQueryRouteHandler)
  .openapi(getApiV1MeRootAuthenticationRoute, getApiV1MeRootAuthenticationRouteHandler)
  .openapi(getApiV1MeAuthenticationRoute, getApiV1MeAuthenticationRouteHandler)
  .openapi(getApiV1DocumentsDocumentIdPathRoute, getApiV1DocumentsDocumentIdPathRouteHandler)
  .openapi(getApiV1FoldersFolderIdPathRoute, getApiV1FoldersFolderIdPathRouteHandler)
  .openapi(getApiV1ResourcesRoute, getApiV1ResourcesRouteHandler)
  .openapi(postApiV1DocumentsRoute, postApiV1DocumentsRouteHandler)
  .openapi(
    deleteApiV1ResourcesResourceIdPermissionsPrincipalIdRoute,
    deleteApiV1ResourcesResourceIdPermissionsPrincipalIdRouteHandler,
  )
  .openapi(
    postApiV1DocumentVersionsRestoreDocumentIdRoute,
    postApiV1DocumentVersionsRestoreDocumentIdRouteHandler,
  )
  .openapi(postApiV1SearchRoute, postApiV1SearchRouteHandler)

export default app
