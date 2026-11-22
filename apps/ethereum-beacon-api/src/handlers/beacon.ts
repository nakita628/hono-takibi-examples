import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEthV1BeaconBlindedBlocksBlockIdRoute,
  getEthV1BeaconBlobsBlockIdRoute,
  getEthV1BeaconBlocksBlockIdRootRoute,
  getEthV1BeaconExecutionPayloadEnvelopesBlockIdRoute,
  getEthV1BeaconGenesisRoute,
  getEthV1BeaconHeadersBlockIdRoute,
  getEthV1BeaconHeadersRoute,
  getEthV1BeaconLightClientBootstrapBlockRootRoute,
  getEthV1BeaconLightClientFinalityUpdateRoute,
  getEthV1BeaconLightClientOptimisticUpdateRoute,
  getEthV1BeaconLightClientUpdatesRoute,
  getEthV1BeaconPoolBlsToExecutionChangesRoute,
  getEthV1BeaconPoolPayloadAttestationsRoute,
  getEthV1BeaconPoolProposerSlashingsRoute,
  getEthV1BeaconPoolVoluntaryExitsRoute,
  getEthV1BeaconProposerPreferencesRoute,
  getEthV1BeaconRewardsBlocksBlockIdRoute,
  getEthV1BeaconStatesStateIdBuilderPendingPaymentsRoute,
  getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsRoute,
  getEthV1BeaconStatesStateIdCommitteesRoute,
  getEthV1BeaconStatesStateIdFinalityCheckpointsRoute,
  getEthV1BeaconStatesStateIdForkRoute,
  getEthV1BeaconStatesStateIdPendingConsolidationsRoute,
  getEthV1BeaconStatesStateIdPendingDepositsRoute,
  getEthV1BeaconStatesStateIdPendingPartialWithdrawalsRoute,
  getEthV1BeaconStatesStateIdProposerLookaheadRoute,
  getEthV1BeaconStatesStateIdPtcRoute,
  getEthV1BeaconStatesStateIdRandaoRoute,
  getEthV1BeaconStatesStateIdRootRoute,
  getEthV1BeaconStatesStateIdSyncCommitteesRoute,
  getEthV1BeaconStatesStateIdValidatorBalancesRoute,
  getEthV1BeaconStatesStateIdValidatorsRoute,
  getEthV1BeaconStatesStateIdValidatorsValidatorIdRoute,
  getEthV2BeaconBlocksBlockIdAttestationsRoute,
  getEthV2BeaconBlocksBlockIdRoute,
  getEthV2BeaconPoolAttestationsRoute,
  getEthV2BeaconPoolAttesterSlashingsRoute,
  postEthV1BeaconExecutionPayloadBidsRoute,
  postEthV1BeaconExecutionPayloadEnvelopesRoute,
  postEthV1BeaconPoolBlsToExecutionChangesRoute,
  postEthV1BeaconPoolPayloadAttestationsRoute,
  postEthV1BeaconPoolProposerSlashingsRoute,
  postEthV1BeaconPoolSyncCommitteesRoute,
  postEthV1BeaconPoolVoluntaryExitsRoute,
  postEthV1BeaconRewardsAttestationsEpochRoute,
  postEthV1BeaconRewardsSyncCommitteeBlockIdRoute,
  postEthV1BeaconStatesStateIdBuildersRoute,
  postEthV1BeaconStatesStateIdValidatorBalancesRoute,
  postEthV1BeaconStatesStateIdValidatorIdentitiesRoute,
  postEthV1BeaconStatesStateIdValidatorsRoute,
  postEthV2BeaconBlindedBlocksRoute,
  postEthV2BeaconBlocksRoute,
  postEthV2BeaconPoolAttestationsRoute,
  postEthV2BeaconPoolAttesterSlashingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const beaconHandler = app
  .openapi(getEthV1BeaconGenesisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdFinalityCheckpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdValidatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1BeaconStatesStateIdValidatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdValidatorsValidatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdValidatorBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1BeaconStatesStateIdValidatorBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1BeaconStatesStateIdValidatorIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1BeaconStatesStateIdBuildersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdCommitteesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdSyncCommitteesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdPtcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdRandaoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdPendingConsolidationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdPendingDepositsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdPendingPartialWithdrawalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdProposerLookaheadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconStatesStateIdBuilderPendingPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconHeadersBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV2BeaconBlindedBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV2BeaconBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1BeaconExecutionPayloadBidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1BeaconExecutionPayloadEnvelopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconExecutionPayloadEnvelopesBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconProposerPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV2BeaconBlocksBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconBlocksBlockIdRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV2BeaconBlocksBlockIdAttestationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconBlobsBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1BeaconRewardsSyncCommitteeBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconRewardsBlocksBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1BeaconRewardsAttestationsEpochRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconBlindedBlocksBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconLightClientBootstrapBlockRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconLightClientUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconLightClientFinalityUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconLightClientOptimisticUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV2BeaconPoolAttestationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV2BeaconPoolAttestationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconPoolPayloadAttestationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1BeaconPoolPayloadAttestationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV2BeaconPoolAttesterSlashingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV2BeaconPoolAttesterSlashingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconPoolProposerSlashingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1BeaconPoolProposerSlashingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1BeaconPoolSyncCommitteesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconPoolVoluntaryExitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1BeaconPoolVoluntaryExitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1BeaconPoolBlsToExecutionChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEthV1BeaconPoolBlsToExecutionChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
