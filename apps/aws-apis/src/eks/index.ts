import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClusterRegistrationsNameRoute,
  deleteClustersNameAddonsAddonNameRoute,
  deleteClustersNameFargateProfilesFargateProfileNameRoute,
  deleteClustersNameNodeGroupsNodegroupNameRoute,
  deleteClustersNameRoute,
  deleteTagsResourceArnTagKeysRoute,
  getAddonsConfigurationSchemasAddonNameAddonVersionRoute,
  getAddonsSupportedVersionsRoute,
  getClustersNameAddonsAddonNameRoute,
  getClustersNameAddonsRoute,
  getClustersNameFargateProfilesFargateProfileNameRoute,
  getClustersNameFargateProfilesRoute,
  getClustersNameIdentityProviderConfigsRoute,
  getClustersNameNodeGroupsNodegroupNameRoute,
  getClustersNameNodeGroupsRoute,
  getClustersNameRoute,
  getClustersNameUpdatesRoute,
  getClustersNameUpdatesUpdateIdRoute,
  getClustersRoute,
  getTagsResourceArnRoute,
  postClusterRegistrationsRoute,
  postClustersNameAddonsAddonNameUpdateRoute,
  postClustersNameAddonsRoute,
  postClustersNameEncryptionConfigAssociateRoute,
  postClustersNameFargateProfilesRoute,
  postClustersNameIdentityProviderConfigsAssociateRoute,
  postClustersNameIdentityProviderConfigsDescribeRoute,
  postClustersNameIdentityProviderConfigsDisassociateRoute,
  postClustersNameNodeGroupsNodegroupNameUpdateConfigRoute,
  postClustersNameNodeGroupsNodegroupNameUpdateVersionRoute,
  postClustersNameNodeGroupsRoute,
  postClustersNameUpdateConfigRoute,
  postClustersNameUpdatesRoute,
  postClustersRoute,
  postTagsResourceArnRoute,
} from './routes'
import {
  deleteClusterRegistrationsNameRouteHandler,
  deleteClustersNameAddonsAddonNameRouteHandler,
  deleteClustersNameFargateProfilesFargateProfileNameRouteHandler,
  deleteClustersNameNodeGroupsNodegroupNameRouteHandler,
  deleteClustersNameRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getAddonsConfigurationSchemasAddonNameAddonVersionRouteHandler,
  getAddonsSupportedVersionsRouteHandler,
  getClustersNameAddonsAddonNameRouteHandler,
  getClustersNameAddonsRouteHandler,
  getClustersNameFargateProfilesFargateProfileNameRouteHandler,
  getClustersNameFargateProfilesRouteHandler,
  getClustersNameIdentityProviderConfigsRouteHandler,
  getClustersNameNodeGroupsNodegroupNameRouteHandler,
  getClustersNameNodeGroupsRouteHandler,
  getClustersNameRouteHandler,
  getClustersNameUpdatesRouteHandler,
  getClustersNameUpdatesUpdateIdRouteHandler,
  getClustersRouteHandler,
  getTagsResourceArnRouteHandler,
  postClusterRegistrationsRouteHandler,
  postClustersNameAddonsAddonNameUpdateRouteHandler,
  postClustersNameAddonsRouteHandler,
  postClustersNameEncryptionConfigAssociateRouteHandler,
  postClustersNameFargateProfilesRouteHandler,
  postClustersNameIdentityProviderConfigsAssociateRouteHandler,
  postClustersNameIdentityProviderConfigsDescribeRouteHandler,
  postClustersNameIdentityProviderConfigsDisassociateRouteHandler,
  postClustersNameNodeGroupsNodegroupNameUpdateConfigRouteHandler,
  postClustersNameNodeGroupsNodegroupNameUpdateVersionRouteHandler,
  postClustersNameNodeGroupsRouteHandler,
  postClustersNameUpdateConfigRouteHandler,
  postClustersNameUpdatesRouteHandler,
  postClustersRouteHandler,
  postTagsResourceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postClustersNameEncryptionConfigAssociateRoute,
    postClustersNameEncryptionConfigAssociateRouteHandler,
  )
  .openapi(
    postClustersNameIdentityProviderConfigsAssociateRoute,
    postClustersNameIdentityProviderConfigsAssociateRouteHandler,
  )
  .openapi(postClustersNameAddonsRoute, postClustersNameAddonsRouteHandler)
  .openapi(getClustersNameAddonsRoute, getClustersNameAddonsRouteHandler)
  .openapi(postClustersRoute, postClustersRouteHandler)
  .openapi(getClustersRoute, getClustersRouteHandler)
  .openapi(postClustersNameFargateProfilesRoute, postClustersNameFargateProfilesRouteHandler)
  .openapi(getClustersNameFargateProfilesRoute, getClustersNameFargateProfilesRouteHandler)
  .openapi(postClustersNameNodeGroupsRoute, postClustersNameNodeGroupsRouteHandler)
  .openapi(getClustersNameNodeGroupsRoute, getClustersNameNodeGroupsRouteHandler)
  .openapi(deleteClustersNameAddonsAddonNameRoute, deleteClustersNameAddonsAddonNameRouteHandler)
  .openapi(getClustersNameAddonsAddonNameRoute, getClustersNameAddonsAddonNameRouteHandler)
  .openapi(deleteClustersNameRoute, deleteClustersNameRouteHandler)
  .openapi(getClustersNameRoute, getClustersNameRouteHandler)
  .openapi(
    deleteClustersNameFargateProfilesFargateProfileNameRoute,
    deleteClustersNameFargateProfilesFargateProfileNameRouteHandler,
  )
  .openapi(
    getClustersNameFargateProfilesFargateProfileNameRoute,
    getClustersNameFargateProfilesFargateProfileNameRouteHandler,
  )
  .openapi(
    deleteClustersNameNodeGroupsNodegroupNameRoute,
    deleteClustersNameNodeGroupsNodegroupNameRouteHandler,
  )
  .openapi(
    getClustersNameNodeGroupsNodegroupNameRoute,
    getClustersNameNodeGroupsNodegroupNameRouteHandler,
  )
  .openapi(deleteClusterRegistrationsNameRoute, deleteClusterRegistrationsNameRouteHandler)
  .openapi(
    getAddonsConfigurationSchemasAddonNameAddonVersionRoute,
    getAddonsConfigurationSchemasAddonNameAddonVersionRouteHandler,
  )
  .openapi(getAddonsSupportedVersionsRoute, getAddonsSupportedVersionsRouteHandler)
  .openapi(
    postClustersNameIdentityProviderConfigsDescribeRoute,
    postClustersNameIdentityProviderConfigsDescribeRouteHandler,
  )
  .openapi(getClustersNameUpdatesUpdateIdRoute, getClustersNameUpdatesUpdateIdRouteHandler)
  .openapi(
    postClustersNameIdentityProviderConfigsDisassociateRoute,
    postClustersNameIdentityProviderConfigsDisassociateRouteHandler,
  )
  .openapi(
    getClustersNameIdentityProviderConfigsRoute,
    getClustersNameIdentityProviderConfigsRouteHandler,
  )
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(getClustersNameUpdatesRoute, getClustersNameUpdatesRouteHandler)
  .openapi(postClustersNameUpdatesRoute, postClustersNameUpdatesRouteHandler)
  .openapi(postClusterRegistrationsRoute, postClusterRegistrationsRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(
    postClustersNameAddonsAddonNameUpdateRoute,
    postClustersNameAddonsAddonNameUpdateRouteHandler,
  )
  .openapi(postClustersNameUpdateConfigRoute, postClustersNameUpdateConfigRouteHandler)
  .openapi(
    postClustersNameNodeGroupsNodegroupNameUpdateConfigRoute,
    postClustersNameNodeGroupsNodegroupNameUpdateConfigRouteHandler,
  )
  .openapi(
    postClustersNameNodeGroupsNodegroupNameUpdateVersionRoute,
    postClustersNameNodeGroupsNodegroupNameUpdateVersionRouteHandler,
  )

export default app
