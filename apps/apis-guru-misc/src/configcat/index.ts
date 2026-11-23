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
} from './routes'
import {
  deleteV1ConfigsConfigIdRouteHandler,
  deleteV1EnvironmentsEnvironmentIdRouteHandler,
  deleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRouteHandler,
  deleteV1OrganizationsOrganizationIdMembersUserIdRouteHandler,
  deleteV1PermissionsPermissionGroupIdRouteHandler,
  deleteV1ProductsProductIdMembersUserIdRouteHandler,
  deleteV1ProductsProductIdRouteHandler,
  deleteV1SegmentsSegmentIdRouteHandler,
  deleteV1SettingsSettingIdRouteHandler,
  deleteV1TagsTagIdRouteHandler,
  getV1ConfigsConfigIdDeletedSettingsRouteHandler,
  getV1ConfigsConfigIdEnvironmentsEnvironmentIdRouteHandler,
  getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesRouteHandler,
  getV1ConfigsConfigIdRouteHandler,
  getV1ConfigsConfigIdSettingsRouteHandler,
  getV1EnvironmentsEnvironmentIdRouteHandler,
  getV1EnvironmentsEnvironmentIdSettingsSettingIdValueRouteHandler,
  getV1IntegrationLinkIntegrationLinkTypeKeyDetailsRouteHandler,
  getV1MeRouteHandler,
  getV1OrganizationsOrganizationIdAuditlogsRouteHandler,
  getV1OrganizationsOrganizationIdMembersRouteHandler,
  getV1OrganizationsRouteHandler,
  getV1PermissionsPermissionGroupIdRouteHandler,
  getV1ProductsProductIdAuditlogsRouteHandler,
  getV1ProductsProductIdConfigsRouteHandler,
  getV1ProductsProductIdEnvironmentsRouteHandler,
  getV1ProductsProductIdMembersRouteHandler,
  getV1ProductsProductIdPermissionsRouteHandler,
  getV1ProductsProductIdRouteHandler,
  getV1ProductsProductIdSegmentsRouteHandler,
  getV1ProductsProductIdTagsRouteHandler,
  getV1ProductsRouteHandler,
  getV1SegmentsSegmentIdRouteHandler,
  getV1SettingsSettingIdRouteHandler,
  getV1SettingsSettingKeyOrIdValueRouteHandler,
  getV1TagsTagIdRouteHandler,
  getV1TagsTagIdSettingsRouteHandler,
  patchV1EnvironmentsEnvironmentIdSettingsSettingIdValueRouteHandler,
  patchV1SettingsSettingIdRouteHandler,
  patchV1SettingsSettingKeyOrIdValueRouteHandler,
  postV1CodeReferencesDeleteReportsRouteHandler,
  postV1CodeReferencesRouteHandler,
  postV1ConfigsConfigIdSettingsRouteHandler,
  postV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRouteHandler,
  postV1JiraConnectRouteHandler,
  postV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyRouteHandler,
  postV1OrganizationsOrganizationIdMembersUserIdRouteHandler,
  postV1OrganizationsOrganizationIdProductsRouteHandler,
  postV1ProductsProductIdConfigsRouteHandler,
  postV1ProductsProductIdEnvironmentsRouteHandler,
  postV1ProductsProductIdMembersInviteRouteHandler,
  postV1ProductsProductIdPermissionsRouteHandler,
  postV1ProductsProductIdSegmentsRouteHandler,
  postV1ProductsProductIdTagsRouteHandler,
  putV1ConfigsConfigIdRouteHandler,
  putV1EnvironmentsEnvironmentIdRouteHandler,
  putV1EnvironmentsEnvironmentIdSettingsSettingIdValueRouteHandler,
  putV1PermissionsPermissionGroupIdRouteHandler,
  putV1ProductsProductIdRouteHandler,
  putV1SegmentsSegmentIdRouteHandler,
  putV1SettingsSettingKeyOrIdValueRouteHandler,
  putV1TagsTagIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1CodeReferencesRoute, postV1CodeReferencesRouteHandler)
  .openapi(postV1CodeReferencesDeleteReportsRoute, postV1CodeReferencesDeleteReportsRouteHandler)
  .openapi(deleteV1ConfigsConfigIdRoute, deleteV1ConfigsConfigIdRouteHandler)
  .openapi(getV1ConfigsConfigIdRoute, getV1ConfigsConfigIdRouteHandler)
  .openapi(putV1ConfigsConfigIdRoute, putV1ConfigsConfigIdRouteHandler)
  .openapi(
    getV1ConfigsConfigIdDeletedSettingsRoute,
    getV1ConfigsConfigIdDeletedSettingsRouteHandler,
  )
  .openapi(
    getV1ConfigsConfigIdEnvironmentsEnvironmentIdRoute,
    getV1ConfigsConfigIdEnvironmentsEnvironmentIdRouteHandler,
  )
  .openapi(
    getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesRoute,
    getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesRouteHandler,
  )
  .openapi(getV1ConfigsConfigIdSettingsRoute, getV1ConfigsConfigIdSettingsRouteHandler)
  .openapi(postV1ConfigsConfigIdSettingsRoute, postV1ConfigsConfigIdSettingsRouteHandler)
  .openapi(deleteV1EnvironmentsEnvironmentIdRoute, deleteV1EnvironmentsEnvironmentIdRouteHandler)
  .openapi(getV1EnvironmentsEnvironmentIdRoute, getV1EnvironmentsEnvironmentIdRouteHandler)
  .openapi(putV1EnvironmentsEnvironmentIdRoute, putV1EnvironmentsEnvironmentIdRouteHandler)
  .openapi(
    deleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRoute,
    deleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRouteHandler,
  )
  .openapi(
    postV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRoute,
    postV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRouteHandler,
  )
  .openapi(
    getV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute,
    getV1EnvironmentsEnvironmentIdSettingsSettingIdValueRouteHandler,
  )
  .openapi(
    patchV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute,
    patchV1EnvironmentsEnvironmentIdSettingsSettingIdValueRouteHandler,
  )
  .openapi(
    putV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute,
    putV1EnvironmentsEnvironmentIdSettingsSettingIdValueRouteHandler,
  )
  .openapi(
    getV1IntegrationLinkIntegrationLinkTypeKeyDetailsRoute,
    getV1IntegrationLinkIntegrationLinkTypeKeyDetailsRouteHandler,
  )
  .openapi(postV1JiraConnectRoute, postV1JiraConnectRouteHandler)
  .openapi(
    postV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyRoute,
    postV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyRouteHandler,
  )
  .openapi(getV1MeRoute, getV1MeRouteHandler)
  .openapi(getV1OrganizationsRoute, getV1OrganizationsRouteHandler)
  .openapi(
    getV1OrganizationsOrganizationIdAuditlogsRoute,
    getV1OrganizationsOrganizationIdAuditlogsRouteHandler,
  )
  .openapi(
    getV1OrganizationsOrganizationIdMembersRoute,
    getV1OrganizationsOrganizationIdMembersRouteHandler,
  )
  .openapi(
    deleteV1OrganizationsOrganizationIdMembersUserIdRoute,
    deleteV1OrganizationsOrganizationIdMembersUserIdRouteHandler,
  )
  .openapi(
    postV1OrganizationsOrganizationIdMembersUserIdRoute,
    postV1OrganizationsOrganizationIdMembersUserIdRouteHandler,
  )
  .openapi(
    postV1OrganizationsOrganizationIdProductsRoute,
    postV1OrganizationsOrganizationIdProductsRouteHandler,
  )
  .openapi(
    deleteV1PermissionsPermissionGroupIdRoute,
    deleteV1PermissionsPermissionGroupIdRouteHandler,
  )
  .openapi(getV1PermissionsPermissionGroupIdRoute, getV1PermissionsPermissionGroupIdRouteHandler)
  .openapi(putV1PermissionsPermissionGroupIdRoute, putV1PermissionsPermissionGroupIdRouteHandler)
  .openapi(getV1ProductsRoute, getV1ProductsRouteHandler)
  .openapi(deleteV1ProductsProductIdRoute, deleteV1ProductsProductIdRouteHandler)
  .openapi(getV1ProductsProductIdRoute, getV1ProductsProductIdRouteHandler)
  .openapi(putV1ProductsProductIdRoute, putV1ProductsProductIdRouteHandler)
  .openapi(getV1ProductsProductIdAuditlogsRoute, getV1ProductsProductIdAuditlogsRouteHandler)
  .openapi(getV1ProductsProductIdConfigsRoute, getV1ProductsProductIdConfigsRouteHandler)
  .openapi(postV1ProductsProductIdConfigsRoute, postV1ProductsProductIdConfigsRouteHandler)
  .openapi(getV1ProductsProductIdEnvironmentsRoute, getV1ProductsProductIdEnvironmentsRouteHandler)
  .openapi(
    postV1ProductsProductIdEnvironmentsRoute,
    postV1ProductsProductIdEnvironmentsRouteHandler,
  )
  .openapi(getV1ProductsProductIdMembersRoute, getV1ProductsProductIdMembersRouteHandler)
  .openapi(
    postV1ProductsProductIdMembersInviteRoute,
    postV1ProductsProductIdMembersInviteRouteHandler,
  )
  .openapi(
    deleteV1ProductsProductIdMembersUserIdRoute,
    deleteV1ProductsProductIdMembersUserIdRouteHandler,
  )
  .openapi(getV1ProductsProductIdPermissionsRoute, getV1ProductsProductIdPermissionsRouteHandler)
  .openapi(postV1ProductsProductIdPermissionsRoute, postV1ProductsProductIdPermissionsRouteHandler)
  .openapi(getV1ProductsProductIdSegmentsRoute, getV1ProductsProductIdSegmentsRouteHandler)
  .openapi(postV1ProductsProductIdSegmentsRoute, postV1ProductsProductIdSegmentsRouteHandler)
  .openapi(getV1ProductsProductIdTagsRoute, getV1ProductsProductIdTagsRouteHandler)
  .openapi(postV1ProductsProductIdTagsRoute, postV1ProductsProductIdTagsRouteHandler)
  .openapi(deleteV1SegmentsSegmentIdRoute, deleteV1SegmentsSegmentIdRouteHandler)
  .openapi(getV1SegmentsSegmentIdRoute, getV1SegmentsSegmentIdRouteHandler)
  .openapi(putV1SegmentsSegmentIdRoute, putV1SegmentsSegmentIdRouteHandler)
  .openapi(deleteV1SettingsSettingIdRoute, deleteV1SettingsSettingIdRouteHandler)
  .openapi(getV1SettingsSettingIdRoute, getV1SettingsSettingIdRouteHandler)
  .openapi(patchV1SettingsSettingIdRoute, patchV1SettingsSettingIdRouteHandler)
  .openapi(getV1SettingsSettingKeyOrIdValueRoute, getV1SettingsSettingKeyOrIdValueRouteHandler)
  .openapi(patchV1SettingsSettingKeyOrIdValueRoute, patchV1SettingsSettingKeyOrIdValueRouteHandler)
  .openapi(putV1SettingsSettingKeyOrIdValueRoute, putV1SettingsSettingKeyOrIdValueRouteHandler)
  .openapi(deleteV1TagsTagIdRoute, deleteV1TagsTagIdRouteHandler)
  .openapi(getV1TagsTagIdRoute, getV1TagsTagIdRouteHandler)
  .openapi(putV1TagsTagIdRoute, putV1TagsTagIdRouteHandler)
  .openapi(getV1TagsTagIdSettingsRoute, getV1TagsTagIdSettingsRouteHandler)

export default app
