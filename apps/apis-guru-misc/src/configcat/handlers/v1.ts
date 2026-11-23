import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConfigsConfigIdRoute,
  deleteV1EnvironmentsEnvironmentIdRoute,
  deleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRoute,
  deleteV1OrganizationsOrganizationIdMembersUserIdRoute,
  deleteV1PermissionsPermissionGroupIdRoute,
  deleteV1ProductsProductIdMembersUserIdRoute,
  deleteV1ProductsProductIdRoute,
  deleteV1SegmentsSegmentIdRoute,
  deleteV1SettingsSettingIdRoute,
  deleteV1TagsTagIdRoute,
  getV1ConfigsConfigIdDeletedSettingsRoute,
  getV1ConfigsConfigIdEnvironmentsEnvironmentIdRoute,
  getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesRoute,
  getV1ConfigsConfigIdRoute,
  getV1ConfigsConfigIdSettingsRoute,
  getV1EnvironmentsEnvironmentIdRoute,
  getV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute,
  getV1IntegrationLinkIntegrationLinkTypeKeyDetailsRoute,
  getV1MeRoute,
  getV1OrganizationsOrganizationIdAuditlogsRoute,
  getV1OrganizationsOrganizationIdMembersRoute,
  getV1OrganizationsRoute,
  getV1PermissionsPermissionGroupIdRoute,
  getV1ProductsProductIdAuditlogsRoute,
  getV1ProductsProductIdConfigsRoute,
  getV1ProductsProductIdEnvironmentsRoute,
  getV1ProductsProductIdMembersRoute,
  getV1ProductsProductIdPermissionsRoute,
  getV1ProductsProductIdRoute,
  getV1ProductsProductIdSegmentsRoute,
  getV1ProductsProductIdTagsRoute,
  getV1ProductsRoute,
  getV1SegmentsSegmentIdRoute,
  getV1SettingsSettingIdRoute,
  getV1SettingsSettingKeyOrIdValueRoute,
  getV1TagsTagIdRoute,
  getV1TagsTagIdSettingsRoute,
  patchV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute,
  patchV1SettingsSettingIdRoute,
  patchV1SettingsSettingKeyOrIdValueRoute,
  postV1CodeReferencesDeleteReportsRoute,
  postV1CodeReferencesRoute,
  postV1ConfigsConfigIdSettingsRoute,
  postV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRoute,
  postV1JiraConnectRoute,
  postV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyRoute,
  postV1OrganizationsOrganizationIdMembersUserIdRoute,
  postV1OrganizationsOrganizationIdProductsRoute,
  postV1ProductsProductIdConfigsRoute,
  postV1ProductsProductIdEnvironmentsRoute,
  postV1ProductsProductIdMembersInviteRoute,
  postV1ProductsProductIdPermissionsRoute,
  postV1ProductsProductIdSegmentsRoute,
  postV1ProductsProductIdTagsRoute,
  putV1ConfigsConfigIdRoute,
  putV1EnvironmentsEnvironmentIdRoute,
  putV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute,
  putV1PermissionsPermissionGroupIdRoute,
  putV1ProductsProductIdRoute,
  putV1SegmentsSegmentIdRoute,
  putV1SettingsSettingKeyOrIdValueRoute,
  putV1TagsTagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1CodeReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CodeReferencesDeleteReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsConfigIdDeletedSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsConfigIdEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsConfigIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsConfigIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationLinkIntegrationLinkTypeKeyDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JiraConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdAuditlogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PermissionsPermissionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PermissionsPermissionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PermissionsPermissionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsProductIdAuditlogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsProductIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsProductIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsProductIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsProductIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsProductIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsProductIdMembersInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsProductIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsProductIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsProductIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsProductIdSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsProductIdSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsProductIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsProductIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SettingsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SettingsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SettingsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SettingsSettingKeyOrIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SettingsSettingKeyOrIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SettingsSettingKeyOrIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TagsTagIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
