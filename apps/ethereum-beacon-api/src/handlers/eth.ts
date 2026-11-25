import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEthV1BeaconGenesisRoute,
  getEthV1BeaconStatesStateIdRootRoute,
  getEthV1BeaconStatesStateIdForkRoute,
  getEthV1BeaconStatesStateIdFinalityCheckpointsRoute,
  getEthV1BeaconStatesStateIdValidatorsRoute,
  postEthV1BeaconStatesStateIdValidatorsRoute,
  getEthV1BeaconStatesStateIdValidatorsValidatorIdRoute,
  getEthV1BeaconStatesStateIdValidatorBalancesRoute,
  postEthV1BeaconStatesStateIdValidatorBalancesRoute,
  postEthV1BeaconStatesStateIdValidatorIdentitiesRoute,
  postEthV1BeaconStatesStateIdBuildersRoute,
  getEthV1BeaconStatesStateIdCommitteesRoute,
  getEthV1BeaconStatesStateIdSyncCommitteesRoute,
  getEthV1BeaconStatesStateIdPtcRoute,
  getEthV1BeaconStatesStateIdRandaoRoute,
  getEthV1BeaconStatesStateIdPendingConsolidationsRoute,
  getEthV1BeaconStatesStateIdPendingDepositsRoute,
  getEthV1BeaconStatesStateIdPendingPartialWithdrawalsRoute,
  getEthV1BeaconStatesStateIdProposerLookaheadRoute,
  getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsRoute,
  getEthV1BeaconStatesStateIdBuilderPendingPaymentsRoute,
  getEthV1BeaconHeadersRoute,
  getEthV1BeaconHeadersBlockIdRoute,
  postEthV2BeaconBlindedBlocksRoute,
  postEthV2BeaconBlocksRoute,
  postEthV1BeaconExecutionPayloadBidsRoute,
  postEthV1BeaconExecutionPayloadEnvelopesRoute,
  getEthV1BeaconExecutionPayloadEnvelopesBlockIdRoute,
  getEthV1BeaconProposerPreferencesRoute,
  getEthV2BeaconBlocksBlockIdRoute,
  getEthV1BeaconBlocksBlockIdRootRoute,
  getEthV2BeaconBlocksBlockIdAttestationsRoute,
  getEthV1BeaconBlobsBlockIdRoute,
  getEthV1DebugBeaconDataColumnSidecarsBlockIdRoute,
  postEthV1BeaconRewardsSyncCommitteeBlockIdRoute,
  getEthV1BeaconRewardsBlocksBlockIdRoute,
  postEthV1BeaconRewardsAttestationsEpochRoute,
  getEthV1BeaconBlindedBlocksBlockIdRoute,
  getEthV1BeaconLightClientBootstrapBlockRootRoute,
  getEthV1BeaconLightClientUpdatesRoute,
  getEthV1BeaconLightClientFinalityUpdateRoute,
  getEthV1BeaconLightClientOptimisticUpdateRoute,
  getEthV2BeaconPoolAttestationsRoute,
  postEthV2BeaconPoolAttestationsRoute,
  getEthV1BeaconPoolPayloadAttestationsRoute,
  postEthV1BeaconPoolPayloadAttestationsRoute,
  getEthV2BeaconPoolAttesterSlashingsRoute,
  postEthV2BeaconPoolAttesterSlashingsRoute,
  getEthV1BeaconPoolProposerSlashingsRoute,
  postEthV1BeaconPoolProposerSlashingsRoute,
  postEthV1BeaconPoolSyncCommitteesRoute,
  getEthV1BeaconPoolVoluntaryExitsRoute,
  postEthV1BeaconPoolVoluntaryExitsRoute,
  getEthV1BeaconPoolBlsToExecutionChangesRoute,
  postEthV1BeaconPoolBlsToExecutionChangesRoute,
  getEthV2DebugBeaconStatesStateIdRoute,
  getEthV2DebugBeaconHeadsRoute,
  getEthV1DebugForkChoiceRoute,
  getEthV2DebugForkChoiceRoute,
  getEthV1NodeIdentityRoute,
  getEthV1NodePeersRoute,
  getEthV1NodePeersPeerIdRoute,
  getEthV1NodePeerCountRoute,
  getEthV1NodeVersionRoute,
  getEthV2NodeVersionRoute,
  getEthV1NodeSyncingRoute,
  getEthV1NodeHealthRoute,
  getEthV1ConfigForkScheduleRoute,
  getEthV1ConfigSpecRoute,
  getEthV1ConfigDepositContractRoute,
  postEthV1ValidatorDutiesAttesterEpochRoute,
  getEthV1ValidatorDutiesProposerEpochRoute,
  getEthV2ValidatorDutiesProposerEpochRoute,
  postEthV1ValidatorDutiesSyncEpochRoute,
  postEthV1ValidatorDutiesPtcEpochRoute,
  getEthV3ValidatorBlocksSlotRoute,
  postEthV4ValidatorBlocksSlotRoute,
  getEthV1ValidatorAttestationDataRoute,
  getEthV1ValidatorPayloadAttestationDataRoute,
  getEthV2ValidatorAggregateAttestationRoute,
  postEthV2ValidatorAggregateAndProofsRoute,
  postEthV1ValidatorBeaconCommitteeSubscriptionsRoute,
  postEthV1ValidatorSyncCommitteeSubscriptionsRoute,
  postEthV1ValidatorBeaconCommitteeSelectionsRoute,
  getEthV1ValidatorSyncCommitteeContributionRoute,
  postEthV1ValidatorSyncCommitteeSelectionsRoute,
  postEthV1ValidatorContributionAndProofsRoute,
  postEthV1ValidatorPrepareBeaconProposerRoute,
  postEthV1ValidatorRegisterValidatorRoute,
  postEthV1ValidatorProposerPreferencesRoute,
  postEthV1ValidatorBuilderPreferencesRoute,
  postEthV1ValidatorLivenessEpochRoute,
  getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootRoute,
  getEthV1EventsRoute,
} from '../routes'

export const getEthV1BeaconGenesisRouteHandler: RouteHandler<
  typeof getEthV1BeaconGenesisRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdRootRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdRootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdForkRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdForkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdFinalityCheckpointsRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdFinalityCheckpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdValidatorsRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdValidatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1BeaconStatesStateIdValidatorsRouteHandler: RouteHandler<
  typeof postEthV1BeaconStatesStateIdValidatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdValidatorsValidatorIdRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdValidatorsValidatorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdValidatorBalancesRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdValidatorBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1BeaconStatesStateIdValidatorBalancesRouteHandler: RouteHandler<
  typeof postEthV1BeaconStatesStateIdValidatorBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1BeaconStatesStateIdValidatorIdentitiesRouteHandler: RouteHandler<
  typeof postEthV1BeaconStatesStateIdValidatorIdentitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1BeaconStatesStateIdBuildersRouteHandler: RouteHandler<
  typeof postEthV1BeaconStatesStateIdBuildersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdCommitteesRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdCommitteesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdSyncCommitteesRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdSyncCommitteesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdPtcRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdPtcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdRandaoRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdRandaoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdPendingConsolidationsRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdPendingConsolidationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdPendingDepositsRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdPendingDepositsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdPendingPartialWithdrawalsRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdPendingPartialWithdrawalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdProposerLookaheadRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdProposerLookaheadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconStatesStateIdBuilderPendingPaymentsRouteHandler: RouteHandler<
  typeof getEthV1BeaconStatesStateIdBuilderPendingPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconHeadersRouteHandler: RouteHandler<
  typeof getEthV1BeaconHeadersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconHeadersBlockIdRouteHandler: RouteHandler<
  typeof getEthV1BeaconHeadersBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV2BeaconBlindedBlocksRouteHandler: RouteHandler<
  typeof postEthV2BeaconBlindedBlocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV2BeaconBlocksRouteHandler: RouteHandler<
  typeof postEthV2BeaconBlocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1BeaconExecutionPayloadBidsRouteHandler: RouteHandler<
  typeof postEthV1BeaconExecutionPayloadBidsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1BeaconExecutionPayloadEnvelopesRouteHandler: RouteHandler<
  typeof postEthV1BeaconExecutionPayloadEnvelopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconExecutionPayloadEnvelopesBlockIdRouteHandler: RouteHandler<
  typeof getEthV1BeaconExecutionPayloadEnvelopesBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconProposerPreferencesRouteHandler: RouteHandler<
  typeof getEthV1BeaconProposerPreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV2BeaconBlocksBlockIdRouteHandler: RouteHandler<
  typeof getEthV2BeaconBlocksBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconBlocksBlockIdRootRouteHandler: RouteHandler<
  typeof getEthV1BeaconBlocksBlockIdRootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV2BeaconBlocksBlockIdAttestationsRouteHandler: RouteHandler<
  typeof getEthV2BeaconBlocksBlockIdAttestationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconBlobsBlockIdRouteHandler: RouteHandler<
  typeof getEthV1BeaconBlobsBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1DebugBeaconDataColumnSidecarsBlockIdRouteHandler: RouteHandler<
  typeof getEthV1DebugBeaconDataColumnSidecarsBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1BeaconRewardsSyncCommitteeBlockIdRouteHandler: RouteHandler<
  typeof postEthV1BeaconRewardsSyncCommitteeBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconRewardsBlocksBlockIdRouteHandler: RouteHandler<
  typeof getEthV1BeaconRewardsBlocksBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1BeaconRewardsAttestationsEpochRouteHandler: RouteHandler<
  typeof postEthV1BeaconRewardsAttestationsEpochRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconBlindedBlocksBlockIdRouteHandler: RouteHandler<
  typeof getEthV1BeaconBlindedBlocksBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconLightClientBootstrapBlockRootRouteHandler: RouteHandler<
  typeof getEthV1BeaconLightClientBootstrapBlockRootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconLightClientUpdatesRouteHandler: RouteHandler<
  typeof getEthV1BeaconLightClientUpdatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconLightClientFinalityUpdateRouteHandler: RouteHandler<
  typeof getEthV1BeaconLightClientFinalityUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconLightClientOptimisticUpdateRouteHandler: RouteHandler<
  typeof getEthV1BeaconLightClientOptimisticUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV2BeaconPoolAttestationsRouteHandler: RouteHandler<
  typeof getEthV2BeaconPoolAttestationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV2BeaconPoolAttestationsRouteHandler: RouteHandler<
  typeof postEthV2BeaconPoolAttestationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconPoolPayloadAttestationsRouteHandler: RouteHandler<
  typeof getEthV1BeaconPoolPayloadAttestationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1BeaconPoolPayloadAttestationsRouteHandler: RouteHandler<
  typeof postEthV1BeaconPoolPayloadAttestationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV2BeaconPoolAttesterSlashingsRouteHandler: RouteHandler<
  typeof getEthV2BeaconPoolAttesterSlashingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV2BeaconPoolAttesterSlashingsRouteHandler: RouteHandler<
  typeof postEthV2BeaconPoolAttesterSlashingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconPoolProposerSlashingsRouteHandler: RouteHandler<
  typeof getEthV1BeaconPoolProposerSlashingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1BeaconPoolProposerSlashingsRouteHandler: RouteHandler<
  typeof postEthV1BeaconPoolProposerSlashingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1BeaconPoolSyncCommitteesRouteHandler: RouteHandler<
  typeof postEthV1BeaconPoolSyncCommitteesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconPoolVoluntaryExitsRouteHandler: RouteHandler<
  typeof getEthV1BeaconPoolVoluntaryExitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1BeaconPoolVoluntaryExitsRouteHandler: RouteHandler<
  typeof postEthV1BeaconPoolVoluntaryExitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1BeaconPoolBlsToExecutionChangesRouteHandler: RouteHandler<
  typeof getEthV1BeaconPoolBlsToExecutionChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1BeaconPoolBlsToExecutionChangesRouteHandler: RouteHandler<
  typeof postEthV1BeaconPoolBlsToExecutionChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV2DebugBeaconStatesStateIdRouteHandler: RouteHandler<
  typeof getEthV2DebugBeaconStatesStateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV2DebugBeaconHeadsRouteHandler: RouteHandler<
  typeof getEthV2DebugBeaconHeadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1DebugForkChoiceRouteHandler: RouteHandler<
  typeof getEthV1DebugForkChoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV2DebugForkChoiceRouteHandler: RouteHandler<
  typeof getEthV2DebugForkChoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1NodeIdentityRouteHandler: RouteHandler<
  typeof getEthV1NodeIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1NodePeersRouteHandler: RouteHandler<typeof getEthV1NodePeersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEthV1NodePeersPeerIdRouteHandler: RouteHandler<
  typeof getEthV1NodePeersPeerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1NodePeerCountRouteHandler: RouteHandler<
  typeof getEthV1NodePeerCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1NodeVersionRouteHandler: RouteHandler<
  typeof getEthV1NodeVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV2NodeVersionRouteHandler: RouteHandler<
  typeof getEthV2NodeVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1NodeSyncingRouteHandler: RouteHandler<
  typeof getEthV1NodeSyncingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1NodeHealthRouteHandler: RouteHandler<typeof getEthV1NodeHealthRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEthV1ConfigForkScheduleRouteHandler: RouteHandler<
  typeof getEthV1ConfigForkScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1ConfigSpecRouteHandler: RouteHandler<typeof getEthV1ConfigSpecRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEthV1ConfigDepositContractRouteHandler: RouteHandler<
  typeof getEthV1ConfigDepositContractRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1ValidatorDutiesAttesterEpochRouteHandler: RouteHandler<
  typeof postEthV1ValidatorDutiesAttesterEpochRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1ValidatorDutiesProposerEpochRouteHandler: RouteHandler<
  typeof getEthV1ValidatorDutiesProposerEpochRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV2ValidatorDutiesProposerEpochRouteHandler: RouteHandler<
  typeof getEthV2ValidatorDutiesProposerEpochRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1ValidatorDutiesSyncEpochRouteHandler: RouteHandler<
  typeof postEthV1ValidatorDutiesSyncEpochRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1ValidatorDutiesPtcEpochRouteHandler: RouteHandler<
  typeof postEthV1ValidatorDutiesPtcEpochRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV3ValidatorBlocksSlotRouteHandler: RouteHandler<
  typeof getEthV3ValidatorBlocksSlotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV4ValidatorBlocksSlotRouteHandler: RouteHandler<
  typeof postEthV4ValidatorBlocksSlotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1ValidatorAttestationDataRouteHandler: RouteHandler<
  typeof getEthV1ValidatorAttestationDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1ValidatorPayloadAttestationDataRouteHandler: RouteHandler<
  typeof getEthV1ValidatorPayloadAttestationDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV2ValidatorAggregateAttestationRouteHandler: RouteHandler<
  typeof getEthV2ValidatorAggregateAttestationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV2ValidatorAggregateAndProofsRouteHandler: RouteHandler<
  typeof postEthV2ValidatorAggregateAndProofsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1ValidatorBeaconCommitteeSubscriptionsRouteHandler: RouteHandler<
  typeof postEthV1ValidatorBeaconCommitteeSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1ValidatorSyncCommitteeSubscriptionsRouteHandler: RouteHandler<
  typeof postEthV1ValidatorSyncCommitteeSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1ValidatorBeaconCommitteeSelectionsRouteHandler: RouteHandler<
  typeof postEthV1ValidatorBeaconCommitteeSelectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1ValidatorSyncCommitteeContributionRouteHandler: RouteHandler<
  typeof getEthV1ValidatorSyncCommitteeContributionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1ValidatorSyncCommitteeSelectionsRouteHandler: RouteHandler<
  typeof postEthV1ValidatorSyncCommitteeSelectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1ValidatorContributionAndProofsRouteHandler: RouteHandler<
  typeof postEthV1ValidatorContributionAndProofsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1ValidatorPrepareBeaconProposerRouteHandler: RouteHandler<
  typeof postEthV1ValidatorPrepareBeaconProposerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1ValidatorRegisterValidatorRouteHandler: RouteHandler<
  typeof postEthV1ValidatorRegisterValidatorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1ValidatorProposerPreferencesRouteHandler: RouteHandler<
  typeof postEthV1ValidatorProposerPreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1ValidatorBuilderPreferencesRouteHandler: RouteHandler<
  typeof postEthV1ValidatorBuilderPreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEthV1ValidatorLivenessEpochRouteHandler: RouteHandler<
  typeof postEthV1ValidatorLivenessEpochRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootRouteHandler: RouteHandler<
  typeof getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEthV1EventsRouteHandler: RouteHandler<typeof getEthV1EventsRoute> = async (c) => {
  throw new Error('Not implemented')
}
