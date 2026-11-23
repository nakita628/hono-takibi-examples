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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(deleteApiV1DocumentsDocumentIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DocumentsDocumentIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1DocumentsDocumentIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdActivationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersUserIdActivationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ResourcesResourceIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ResourcesResourceIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ResourcesResourceIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DocumentsDocumentIdVersionsVersionIdCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ResourcesResourceIdCustomMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ResourcesResourceIdCustomMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1FoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ResourcesResourceIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ResourcesResourceIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrganizationsOrganizationIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DocumentsDocumentIdVersionsVersionIdCommentCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1DocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DocumentVersionsDocumentIdVersionsVersionIdDeletePriorVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1FoldersFolderIdContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FoldersFolderIdContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrganizationsOrganizationIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DocumentsDocumentIdVersionsVersionIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DocumentsDocumentIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsSearchQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MeRootAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MeAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DocumentsDocumentIdPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FoldersFolderIdPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ResourcesResourceIdPermissionsPrincipalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DocumentVersionsRestoreDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
