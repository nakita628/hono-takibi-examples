import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1ApplicationsApplicationIdRoute,
  deletePublicV1ConnectionsConnectionIdRoute,
  deletePublicV1DataplanesDataplaneIdRoute,
  deletePublicV1DestinationsDestinationIdRoute,
  deletePublicV1GroupsGroupIdMembersUserIdRoute,
  deletePublicV1GroupsGroupIdPermissionsPermissionIdRoute,
  deletePublicV1GroupsGroupIdRoute,
  deletePublicV1JobsJobIdRoute,
  deletePublicV1OrganizationsOrganizationIdOauthCredentialsActorTypeNameRoute,
  deletePublicV1PermissionsPermissionIdRoute,
  deletePublicV1RegionsRegionIdRoute,
  deletePublicV1SourcesSourceIdRoute,
  deletePublicV1TagsTagIdRoute,
  deletePublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdRoute,
  deletePublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdRoute,
  deletePublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdRoute,
  deletePublicV1WorkspacesWorkspaceIdOauthCredentialsActorTypeNameRoute,
  deletePublicV1WorkspacesWorkspaceIdRoute,
  getPublicRoute,
  getPublicV1ApplicationsApplicationIdRoute,
  getPublicV1ApplicationsRoute,
  getPublicV1ConnectionsConnectionIdRoute,
  getPublicV1ConnectionsRoute,
  getPublicV1ConnectorDefinitionsRoute,
  getPublicV1DataplanesDataplaneIdRoute,
  getPublicV1DataplanesRoute,
  getPublicV1DestinationsDestinationIdRoute,
  getPublicV1DestinationsRoute,
  getPublicV1EmbeddedOrganizationsRoute,
  getPublicV1GroupsGroupIdMembersRoute,
  getPublicV1GroupsGroupIdPermissionsRoute,
  getPublicV1GroupsGroupIdRoute,
  getPublicV1GroupsRoute,
  getPublicV1HealthRoute,
  getPublicV1JobsJobIdRoute,
  getPublicV1JobsRoute,
  getPublicV1OauthCallbackRoute,
  getPublicV1OrganizationsRoute,
  getPublicV1PermissionsPermissionIdRoute,
  getPublicV1PermissionsRoute,
  getPublicV1RegionsRegionIdRoute,
  getPublicV1RegionsRoute,
  getPublicV1SourcesRoute,
  getPublicV1SourcesSourceIdRoute,
  getPublicV1StreamsRoute,
  getPublicV1TagsRoute,
  getPublicV1TagsTagIdRoute,
  getPublicV1UsersRoute,
  getPublicV1WorkspacesRoute,
  getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdRoute,
  getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesRoute,
  getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdRoute,
  getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsRoute,
  getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdRoute,
  getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesRoute,
  getPublicV1WorkspacesWorkspaceIdRoute,
  patchPublicV1ConnectionsConnectionIdRoute,
  patchPublicV1DataplanesDataplaneIdRoute,
  patchPublicV1DestinationsDestinationIdRoute,
  patchPublicV1GroupsGroupIdRoute,
  patchPublicV1PermissionsPermissionIdRoute,
  patchPublicV1RegionsRegionIdRoute,
  patchPublicV1SourcesSourceIdRoute,
  patchPublicV1TagsTagIdRoute,
  patchPublicV1WorkspacesWorkspaceIdRoute,
  postPublicV1ApplicationsRoute,
  postPublicV1ApplicationsTokenRoute,
  postPublicV1ConnectionsRoute,
  postPublicV1DataplanesRoute,
  postPublicV1DestinationsRoute,
  postPublicV1EmbeddedScopedTokenRoute,
  postPublicV1EmbeddedWidgetTokenRoute,
  postPublicV1GroupsGroupIdMembersRoute,
  postPublicV1GroupsGroupIdPermissionsRoute,
  postPublicV1GroupsRoute,
  postPublicV1JobsRoute,
  postPublicV1PermissionsRoute,
  postPublicV1RegionsRoute,
  postPublicV1SourcesInitiateOAuthRoute,
  postPublicV1SourcesRoute,
  postPublicV1TagsRoute,
  postPublicV1WorkspacesRoute,
  postPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesRoute,
  postPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsRoute,
  postPublicV1WorkspacesWorkspaceIdDefinitionsSourcesRoute,
  putPublicV1DestinationsDestinationIdRoute,
  putPublicV1OrganizationsOrganizationIdOauthCredentialsRoute,
  putPublicV1SourcesSourceIdRoute,
  putPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdRoute,
  putPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdRoute,
  putPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdRoute,
  putPublicV1WorkspacesWorkspaceIdOauthCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicHandler = app
  .openapi(getPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1ApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1ApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1ApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1ApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1ApplicationsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1JobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1JobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1JobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1JobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1RegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1RegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1RegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1RegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1RegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1DataplanesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1DataplanesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1DataplanesDataplaneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1DataplanesDataplaneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1DataplanesDataplaneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1ConnectorDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deletePublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1WorkspacesWorkspaceIdDefinitionsSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1SourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1SourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1SourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1SourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPublicV1SourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1SourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1DestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1DestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1DestinationsDestinationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1DestinationsDestinationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1DestinationsDestinationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPublicV1DestinationsDestinationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1OauthCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1SourcesInitiateOAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1ConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1ConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1ConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1ConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1ConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1StreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1WorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1WorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1WorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1WorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1WorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPublicV1WorkspacesWorkspaceIdOauthCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1WorkspacesWorkspaceIdOauthCredentialsActorTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1PermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1PermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1PermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1PermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1PermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPublicV1OrganizationsOrganizationIdOauthCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1OrganizationsOrganizationIdOauthCredentialsActorTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1GroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1GroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1GroupsGroupIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1GroupsGroupIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1GroupsGroupIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1GroupsGroupIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1TagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1TagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1TagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1EmbeddedWidgetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1EmbeddedScopedTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1EmbeddedOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
