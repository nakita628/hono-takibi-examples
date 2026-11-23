import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2AliasesAliasIdRoute,
  deleteV2DomainsDomainRecordsRecordIdRoute,
  deleteV2ProjectsProjectIdOrNameChecksCheckIdRoute,
  deleteV2SandboxesDrivesNameOrIdRoute,
  deleteV2SandboxesNameRoute,
  deleteV2SandboxesSnapshotsSnapshotIdRoute,
  deleteV2TeamSlugProjectSlugRepositoryNameBlobsDigestRoute,
  deleteV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute,
  deleteV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute,
  getV2ConnectConnectorsConnectorProjectsRoute,
  getV2ConnectConnectorsRoute,
  getV2ConnectProjectsProjectIdConnectorsRoute,
  getV2DeploymentsDeploymentIdCheckRunsCheckRunIdRoute,
  getV2DeploymentsDeploymentIdCheckRunsRoute,
  getV2DeploymentsIdAliasesRoute,
  getV2IndexRoute,
  getV2IntegrationsLogDrainsRoute,
  getV2ObservabilitySchemaMetricIdRoute,
  getV2ObservabilitySchemaRoute,
  getV2ProjectsProjectIdOrNameChecksCheckIdRoute,
  getV2ProjectsProjectIdOrNameChecksCheckIdRunsRoute,
  getV2ProjectsProjectIdOrNameChecksRoute,
  getV2ProjectsProjectIdOrNameFeatureFlagsFlagsRoute,
  getV2SandboxesDrivesNameOrIdRoute,
  getV2SandboxesDrivesRoute,
  getV2SandboxesNameRoute,
  getV2SandboxesRoute,
  getV2SandboxesSessionsRoute,
  getV2SandboxesSessionsSessionIdCmdCmdIdLogsRoute,
  getV2SandboxesSessionsSessionIdCmdCmdIdRoute,
  getV2SandboxesSessionsSessionIdCmdRoute,
  getV2SandboxesSessionsSessionIdRoute,
  getV2SandboxesSnapshotsRoute,
  getV2SandboxesSnapshotsSnapshotIdRoute,
  getV2TeamSlugProjectSlugRepositoryNameBlobsDigestRoute,
  getV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute,
  getV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute,
  getV2TeamSlugProjectSlugRepositoryNameTagsListRoute,
  getV2TeamsRoute,
  getV2TeamsTeamIdFeatureFlagsFlagsRoute,
  getV2TeamsTeamIdRoute,
  getV2UserRoute,
  getV2VercelCiBranchesRoute,
  getV2VercelCiInvocationsRoute,
  headV2TeamSlugProjectSlugRepositoryNameBlobsDigestRoute,
  headV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute,
  patchV2ConnectConnectorsConnectorRoute,
  patchV2DeploymentsDeploymentIdCheckRunsCheckRunIdRoute,
  patchV2ProjectsProjectIdOrNameChecksCheckIdRoute,
  patchV2SandboxesNameRoute,
  patchV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute,
  patchV2TeamsTeamIdRoute,
  postV2DeploymentsDeploymentIdCheckRunsRoute,
  postV2DeploymentsIdAliasesRoute,
  postV2DomainsDomainRecordsRoute,
  postV2FilesRoute,
  postV2IntegrationsLogDrainsRoute,
  postV2ObservabilityQueryRoute,
  postV2ProjectsProjectIdOrNameChecksRoute,
  postV2SandboxesDrivesNameForkRoute,
  postV2SandboxesDrivesNameRoute,
  postV2SandboxesNameForkRoute,
  postV2SandboxesRoute,
  postV2SandboxesSessionsSessionIdCmdCmdIdKillRoute,
  postV2SandboxesSessionsSessionIdCmdCmdIdStdinRoute,
  postV2SandboxesSessionsSessionIdCmdRoute,
  postV2SandboxesSessionsSessionIdExtendTimeoutRoute,
  postV2SandboxesSessionsSessionIdFsMkdirRoute,
  postV2SandboxesSessionsSessionIdFsReadRoute,
  postV2SandboxesSessionsSessionIdFsWriteRoute,
  postV2SandboxesSessionsSessionIdNetworkPolicyRoute,
  postV2SandboxesSessionsSessionIdSnapshotRoute,
  postV2SandboxesSessionsSessionIdStopRoute,
  postV2TeamSlugProjectSlugRepositoryNameBlobsUploadsIndexRoute,
  postV2TeamsTeamIdMembersRoute,
  putV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute,
  putV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2ProjectsProjectIdOrNameChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProjectsProjectIdOrNameChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdOrNameChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ProjectsProjectIdOrNameChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ProjectsProjectIdOrNameChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdOrNameChecksCheckIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DeploymentsDeploymentIdCheckRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DeploymentsDeploymentIdCheckRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DeploymentsDeploymentIdCheckRunsCheckRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2DeploymentsDeploymentIdCheckRunsCheckRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConnectConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ConnectConnectorsConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConnectConnectorsConnectorProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConnectProjectsProjectIdConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DomainsDomainRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DomainsDomainRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdOrNameFeatureFlagsFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamsTeamIdFeatureFlagsFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2IntegrationsLogDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2IntegrationsLogDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ObservabilityQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ObservabilitySchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ObservabilitySchemaMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesDrivesNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SandboxesDrivesNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesDrivesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesDrivesNameForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SandboxesSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SandboxesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SandboxesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSessionsSessionIdCmdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdCmdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSessionsSessionIdCmdCmdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdCmdCmdIdKillRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdCmdCmdIdStdinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSessionsSessionIdCmdCmdIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdExtendTimeoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdNetworkPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdFsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdFsMkdirRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdFsWriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesNameForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV2TeamSlugProjectSlugRepositoryNameBlobsDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamSlugProjectSlugRepositoryNameBlobsDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TeamSlugProjectSlugRepositoryNameBlobsDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TeamSlugProjectSlugRepositoryNameBlobsUploadsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamSlugProjectSlugRepositoryNameTagsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VercelCiInvocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VercelCiBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DeploymentsIdAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DeploymentsIdAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2AliasesAliasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
