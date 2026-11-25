import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from './routes'
import {
  getEthV1BeaconGenesisRouteHandler,
  getEthV1BeaconStatesStateIdRootRouteHandler,
  getEthV1BeaconStatesStateIdForkRouteHandler,
  getEthV1BeaconStatesStateIdFinalityCheckpointsRouteHandler,
  getEthV1BeaconStatesStateIdValidatorsRouteHandler,
  postEthV1BeaconStatesStateIdValidatorsRouteHandler,
  getEthV1BeaconStatesStateIdValidatorsValidatorIdRouteHandler,
  getEthV1BeaconStatesStateIdValidatorBalancesRouteHandler,
  postEthV1BeaconStatesStateIdValidatorBalancesRouteHandler,
  postEthV1BeaconStatesStateIdValidatorIdentitiesRouteHandler,
  postEthV1BeaconStatesStateIdBuildersRouteHandler,
  getEthV1BeaconStatesStateIdCommitteesRouteHandler,
  getEthV1BeaconStatesStateIdSyncCommitteesRouteHandler,
  getEthV1BeaconStatesStateIdPtcRouteHandler,
  getEthV1BeaconStatesStateIdRandaoRouteHandler,
  getEthV1BeaconStatesStateIdPendingConsolidationsRouteHandler,
  getEthV1BeaconStatesStateIdPendingDepositsRouteHandler,
  getEthV1BeaconStatesStateIdPendingPartialWithdrawalsRouteHandler,
  getEthV1BeaconStatesStateIdProposerLookaheadRouteHandler,
  getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsRouteHandler,
  getEthV1BeaconStatesStateIdBuilderPendingPaymentsRouteHandler,
  getEthV1BeaconHeadersRouteHandler,
  getEthV1BeaconHeadersBlockIdRouteHandler,
  postEthV2BeaconBlindedBlocksRouteHandler,
  postEthV2BeaconBlocksRouteHandler,
  postEthV1BeaconExecutionPayloadBidsRouteHandler,
  postEthV1BeaconExecutionPayloadEnvelopesRouteHandler,
  getEthV1BeaconExecutionPayloadEnvelopesBlockIdRouteHandler,
  getEthV1BeaconProposerPreferencesRouteHandler,
  getEthV2BeaconBlocksBlockIdRouteHandler,
  getEthV1BeaconBlocksBlockIdRootRouteHandler,
  getEthV2BeaconBlocksBlockIdAttestationsRouteHandler,
  getEthV1BeaconBlobsBlockIdRouteHandler,
  getEthV1DebugBeaconDataColumnSidecarsBlockIdRouteHandler,
  postEthV1BeaconRewardsSyncCommitteeBlockIdRouteHandler,
  getEthV1BeaconRewardsBlocksBlockIdRouteHandler,
  postEthV1BeaconRewardsAttestationsEpochRouteHandler,
  getEthV1BeaconBlindedBlocksBlockIdRouteHandler,
  getEthV1BeaconLightClientBootstrapBlockRootRouteHandler,
  getEthV1BeaconLightClientUpdatesRouteHandler,
  getEthV1BeaconLightClientFinalityUpdateRouteHandler,
  getEthV1BeaconLightClientOptimisticUpdateRouteHandler,
  getEthV2BeaconPoolAttestationsRouteHandler,
  postEthV2BeaconPoolAttestationsRouteHandler,
  getEthV1BeaconPoolPayloadAttestationsRouteHandler,
  postEthV1BeaconPoolPayloadAttestationsRouteHandler,
  getEthV2BeaconPoolAttesterSlashingsRouteHandler,
  postEthV2BeaconPoolAttesterSlashingsRouteHandler,
  getEthV1BeaconPoolProposerSlashingsRouteHandler,
  postEthV1BeaconPoolProposerSlashingsRouteHandler,
  postEthV1BeaconPoolSyncCommitteesRouteHandler,
  getEthV1BeaconPoolVoluntaryExitsRouteHandler,
  postEthV1BeaconPoolVoluntaryExitsRouteHandler,
  getEthV1BeaconPoolBlsToExecutionChangesRouteHandler,
  postEthV1BeaconPoolBlsToExecutionChangesRouteHandler,
  getEthV2DebugBeaconStatesStateIdRouteHandler,
  getEthV2DebugBeaconHeadsRouteHandler,
  getEthV1DebugForkChoiceRouteHandler,
  getEthV2DebugForkChoiceRouteHandler,
  getEthV1NodeIdentityRouteHandler,
  getEthV1NodePeersRouteHandler,
  getEthV1NodePeersPeerIdRouteHandler,
  getEthV1NodePeerCountRouteHandler,
  getEthV1NodeVersionRouteHandler,
  getEthV2NodeVersionRouteHandler,
  getEthV1NodeSyncingRouteHandler,
  getEthV1NodeHealthRouteHandler,
  getEthV1ConfigForkScheduleRouteHandler,
  getEthV1ConfigSpecRouteHandler,
  getEthV1ConfigDepositContractRouteHandler,
  postEthV1ValidatorDutiesAttesterEpochRouteHandler,
  getEthV1ValidatorDutiesProposerEpochRouteHandler,
  getEthV2ValidatorDutiesProposerEpochRouteHandler,
  postEthV1ValidatorDutiesSyncEpochRouteHandler,
  postEthV1ValidatorDutiesPtcEpochRouteHandler,
  getEthV3ValidatorBlocksSlotRouteHandler,
  postEthV4ValidatorBlocksSlotRouteHandler,
  getEthV1ValidatorAttestationDataRouteHandler,
  getEthV1ValidatorPayloadAttestationDataRouteHandler,
  getEthV2ValidatorAggregateAttestationRouteHandler,
  postEthV2ValidatorAggregateAndProofsRouteHandler,
  postEthV1ValidatorBeaconCommitteeSubscriptionsRouteHandler,
  postEthV1ValidatorSyncCommitteeSubscriptionsRouteHandler,
  postEthV1ValidatorBeaconCommitteeSelectionsRouteHandler,
  getEthV1ValidatorSyncCommitteeContributionRouteHandler,
  postEthV1ValidatorSyncCommitteeSelectionsRouteHandler,
  postEthV1ValidatorContributionAndProofsRouteHandler,
  postEthV1ValidatorPrepareBeaconProposerRouteHandler,
  postEthV1ValidatorRegisterValidatorRouteHandler,
  postEthV1ValidatorProposerPreferencesRouteHandler,
  postEthV1ValidatorBuilderPreferencesRouteHandler,
  postEthV1ValidatorLivenessEpochRouteHandler,
  getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootRouteHandler,
  getEthV1EventsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getEthV1BeaconGenesisRoute, getEthV1BeaconGenesisRouteHandler)
  .openapi(getEthV1BeaconStatesStateIdRootRoute, getEthV1BeaconStatesStateIdRootRouteHandler)
  .openapi(getEthV1BeaconStatesStateIdForkRoute, getEthV1BeaconStatesStateIdForkRouteHandler)
  .openapi(
    getEthV1BeaconStatesStateIdFinalityCheckpointsRoute,
    getEthV1BeaconStatesStateIdFinalityCheckpointsRouteHandler,
  )
  .openapi(
    getEthV1BeaconStatesStateIdValidatorsRoute,
    getEthV1BeaconStatesStateIdValidatorsRouteHandler,
  )
  .openapi(
    postEthV1BeaconStatesStateIdValidatorsRoute,
    postEthV1BeaconStatesStateIdValidatorsRouteHandler,
  )
  .openapi(
    getEthV1BeaconStatesStateIdValidatorsValidatorIdRoute,
    getEthV1BeaconStatesStateIdValidatorsValidatorIdRouteHandler,
  )
  .openapi(
    getEthV1BeaconStatesStateIdValidatorBalancesRoute,
    getEthV1BeaconStatesStateIdValidatorBalancesRouteHandler,
  )
  .openapi(
    postEthV1BeaconStatesStateIdValidatorBalancesRoute,
    postEthV1BeaconStatesStateIdValidatorBalancesRouteHandler,
  )
  .openapi(
    postEthV1BeaconStatesStateIdValidatorIdentitiesRoute,
    postEthV1BeaconStatesStateIdValidatorIdentitiesRouteHandler,
  )
  .openapi(
    postEthV1BeaconStatesStateIdBuildersRoute,
    postEthV1BeaconStatesStateIdBuildersRouteHandler,
  )
  .openapi(
    getEthV1BeaconStatesStateIdCommitteesRoute,
    getEthV1BeaconStatesStateIdCommitteesRouteHandler,
  )
  .openapi(
    getEthV1BeaconStatesStateIdSyncCommitteesRoute,
    getEthV1BeaconStatesStateIdSyncCommitteesRouteHandler,
  )
  .openapi(getEthV1BeaconStatesStateIdPtcRoute, getEthV1BeaconStatesStateIdPtcRouteHandler)
  .openapi(getEthV1BeaconStatesStateIdRandaoRoute, getEthV1BeaconStatesStateIdRandaoRouteHandler)
  .openapi(
    getEthV1BeaconStatesStateIdPendingConsolidationsRoute,
    getEthV1BeaconStatesStateIdPendingConsolidationsRouteHandler,
  )
  .openapi(
    getEthV1BeaconStatesStateIdPendingDepositsRoute,
    getEthV1BeaconStatesStateIdPendingDepositsRouteHandler,
  )
  .openapi(
    getEthV1BeaconStatesStateIdPendingPartialWithdrawalsRoute,
    getEthV1BeaconStatesStateIdPendingPartialWithdrawalsRouteHandler,
  )
  .openapi(
    getEthV1BeaconStatesStateIdProposerLookaheadRoute,
    getEthV1BeaconStatesStateIdProposerLookaheadRouteHandler,
  )
  .openapi(
    getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsRoute,
    getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsRouteHandler,
  )
  .openapi(
    getEthV1BeaconStatesStateIdBuilderPendingPaymentsRoute,
    getEthV1BeaconStatesStateIdBuilderPendingPaymentsRouteHandler,
  )
  .openapi(getEthV1BeaconHeadersRoute, getEthV1BeaconHeadersRouteHandler)
  .openapi(getEthV1BeaconHeadersBlockIdRoute, getEthV1BeaconHeadersBlockIdRouteHandler)
  .openapi(postEthV2BeaconBlindedBlocksRoute, postEthV2BeaconBlindedBlocksRouteHandler)
  .openapi(postEthV2BeaconBlocksRoute, postEthV2BeaconBlocksRouteHandler)
  .openapi(
    postEthV1BeaconExecutionPayloadBidsRoute,
    postEthV1BeaconExecutionPayloadBidsRouteHandler,
  )
  .openapi(
    postEthV1BeaconExecutionPayloadEnvelopesRoute,
    postEthV1BeaconExecutionPayloadEnvelopesRouteHandler,
  )
  .openapi(
    getEthV1BeaconExecutionPayloadEnvelopesBlockIdRoute,
    getEthV1BeaconExecutionPayloadEnvelopesBlockIdRouteHandler,
  )
  .openapi(getEthV1BeaconProposerPreferencesRoute, getEthV1BeaconProposerPreferencesRouteHandler)
  .openapi(getEthV2BeaconBlocksBlockIdRoute, getEthV2BeaconBlocksBlockIdRouteHandler)
  .openapi(getEthV1BeaconBlocksBlockIdRootRoute, getEthV1BeaconBlocksBlockIdRootRouteHandler)
  .openapi(
    getEthV2BeaconBlocksBlockIdAttestationsRoute,
    getEthV2BeaconBlocksBlockIdAttestationsRouteHandler,
  )
  .openapi(getEthV1BeaconBlobsBlockIdRoute, getEthV1BeaconBlobsBlockIdRouteHandler)
  .openapi(
    getEthV1DebugBeaconDataColumnSidecarsBlockIdRoute,
    getEthV1DebugBeaconDataColumnSidecarsBlockIdRouteHandler,
  )
  .openapi(
    postEthV1BeaconRewardsSyncCommitteeBlockIdRoute,
    postEthV1BeaconRewardsSyncCommitteeBlockIdRouteHandler,
  )
  .openapi(getEthV1BeaconRewardsBlocksBlockIdRoute, getEthV1BeaconRewardsBlocksBlockIdRouteHandler)
  .openapi(
    postEthV1BeaconRewardsAttestationsEpochRoute,
    postEthV1BeaconRewardsAttestationsEpochRouteHandler,
  )
  .openapi(getEthV1BeaconBlindedBlocksBlockIdRoute, getEthV1BeaconBlindedBlocksBlockIdRouteHandler)
  .openapi(
    getEthV1BeaconLightClientBootstrapBlockRootRoute,
    getEthV1BeaconLightClientBootstrapBlockRootRouteHandler,
  )
  .openapi(getEthV1BeaconLightClientUpdatesRoute, getEthV1BeaconLightClientUpdatesRouteHandler)
  .openapi(
    getEthV1BeaconLightClientFinalityUpdateRoute,
    getEthV1BeaconLightClientFinalityUpdateRouteHandler,
  )
  .openapi(
    getEthV1BeaconLightClientOptimisticUpdateRoute,
    getEthV1BeaconLightClientOptimisticUpdateRouteHandler,
  )
  .openapi(getEthV2BeaconPoolAttestationsRoute, getEthV2BeaconPoolAttestationsRouteHandler)
  .openapi(postEthV2BeaconPoolAttestationsRoute, postEthV2BeaconPoolAttestationsRouteHandler)
  .openapi(
    getEthV1BeaconPoolPayloadAttestationsRoute,
    getEthV1BeaconPoolPayloadAttestationsRouteHandler,
  )
  .openapi(
    postEthV1BeaconPoolPayloadAttestationsRoute,
    postEthV1BeaconPoolPayloadAttestationsRouteHandler,
  )
  .openapi(
    getEthV2BeaconPoolAttesterSlashingsRoute,
    getEthV2BeaconPoolAttesterSlashingsRouteHandler,
  )
  .openapi(
    postEthV2BeaconPoolAttesterSlashingsRoute,
    postEthV2BeaconPoolAttesterSlashingsRouteHandler,
  )
  .openapi(
    getEthV1BeaconPoolProposerSlashingsRoute,
    getEthV1BeaconPoolProposerSlashingsRouteHandler,
  )
  .openapi(
    postEthV1BeaconPoolProposerSlashingsRoute,
    postEthV1BeaconPoolProposerSlashingsRouteHandler,
  )
  .openapi(postEthV1BeaconPoolSyncCommitteesRoute, postEthV1BeaconPoolSyncCommitteesRouteHandler)
  .openapi(getEthV1BeaconPoolVoluntaryExitsRoute, getEthV1BeaconPoolVoluntaryExitsRouteHandler)
  .openapi(postEthV1BeaconPoolVoluntaryExitsRoute, postEthV1BeaconPoolVoluntaryExitsRouteHandler)
  .openapi(
    getEthV1BeaconPoolBlsToExecutionChangesRoute,
    getEthV1BeaconPoolBlsToExecutionChangesRouteHandler,
  )
  .openapi(
    postEthV1BeaconPoolBlsToExecutionChangesRoute,
    postEthV1BeaconPoolBlsToExecutionChangesRouteHandler,
  )
  .openapi(getEthV2DebugBeaconStatesStateIdRoute, getEthV2DebugBeaconStatesStateIdRouteHandler)
  .openapi(getEthV2DebugBeaconHeadsRoute, getEthV2DebugBeaconHeadsRouteHandler)
  .openapi(getEthV1DebugForkChoiceRoute, getEthV1DebugForkChoiceRouteHandler)
  .openapi(getEthV2DebugForkChoiceRoute, getEthV2DebugForkChoiceRouteHandler)
  .openapi(getEthV1NodeIdentityRoute, getEthV1NodeIdentityRouteHandler)
  .openapi(getEthV1NodePeersRoute, getEthV1NodePeersRouteHandler)
  .openapi(getEthV1NodePeersPeerIdRoute, getEthV1NodePeersPeerIdRouteHandler)
  .openapi(getEthV1NodePeerCountRoute, getEthV1NodePeerCountRouteHandler)
  .openapi(getEthV1NodeVersionRoute, getEthV1NodeVersionRouteHandler)
  .openapi(getEthV2NodeVersionRoute, getEthV2NodeVersionRouteHandler)
  .openapi(getEthV1NodeSyncingRoute, getEthV1NodeSyncingRouteHandler)
  .openapi(getEthV1NodeHealthRoute, getEthV1NodeHealthRouteHandler)
  .openapi(getEthV1ConfigForkScheduleRoute, getEthV1ConfigForkScheduleRouteHandler)
  .openapi(getEthV1ConfigSpecRoute, getEthV1ConfigSpecRouteHandler)
  .openapi(getEthV1ConfigDepositContractRoute, getEthV1ConfigDepositContractRouteHandler)
  .openapi(
    postEthV1ValidatorDutiesAttesterEpochRoute,
    postEthV1ValidatorDutiesAttesterEpochRouteHandler,
  )
  .openapi(
    getEthV1ValidatorDutiesProposerEpochRoute,
    getEthV1ValidatorDutiesProposerEpochRouteHandler,
  )
  .openapi(
    getEthV2ValidatorDutiesProposerEpochRoute,
    getEthV2ValidatorDutiesProposerEpochRouteHandler,
  )
  .openapi(postEthV1ValidatorDutiesSyncEpochRoute, postEthV1ValidatorDutiesSyncEpochRouteHandler)
  .openapi(postEthV1ValidatorDutiesPtcEpochRoute, postEthV1ValidatorDutiesPtcEpochRouteHandler)
  .openapi(getEthV3ValidatorBlocksSlotRoute, getEthV3ValidatorBlocksSlotRouteHandler)
  .openapi(postEthV4ValidatorBlocksSlotRoute, postEthV4ValidatorBlocksSlotRouteHandler)
  .openapi(getEthV1ValidatorAttestationDataRoute, getEthV1ValidatorAttestationDataRouteHandler)
  .openapi(
    getEthV1ValidatorPayloadAttestationDataRoute,
    getEthV1ValidatorPayloadAttestationDataRouteHandler,
  )
  .openapi(
    getEthV2ValidatorAggregateAttestationRoute,
    getEthV2ValidatorAggregateAttestationRouteHandler,
  )
  .openapi(
    postEthV2ValidatorAggregateAndProofsRoute,
    postEthV2ValidatorAggregateAndProofsRouteHandler,
  )
  .openapi(
    postEthV1ValidatorBeaconCommitteeSubscriptionsRoute,
    postEthV1ValidatorBeaconCommitteeSubscriptionsRouteHandler,
  )
  .openapi(
    postEthV1ValidatorSyncCommitteeSubscriptionsRoute,
    postEthV1ValidatorSyncCommitteeSubscriptionsRouteHandler,
  )
  .openapi(
    postEthV1ValidatorBeaconCommitteeSelectionsRoute,
    postEthV1ValidatorBeaconCommitteeSelectionsRouteHandler,
  )
  .openapi(
    getEthV1ValidatorSyncCommitteeContributionRoute,
    getEthV1ValidatorSyncCommitteeContributionRouteHandler,
  )
  .openapi(
    postEthV1ValidatorSyncCommitteeSelectionsRoute,
    postEthV1ValidatorSyncCommitteeSelectionsRouteHandler,
  )
  .openapi(
    postEthV1ValidatorContributionAndProofsRoute,
    postEthV1ValidatorContributionAndProofsRouteHandler,
  )
  .openapi(
    postEthV1ValidatorPrepareBeaconProposerRoute,
    postEthV1ValidatorPrepareBeaconProposerRouteHandler,
  )
  .openapi(
    postEthV1ValidatorRegisterValidatorRoute,
    postEthV1ValidatorRegisterValidatorRouteHandler,
  )
  .openapi(
    postEthV1ValidatorProposerPreferencesRoute,
    postEthV1ValidatorProposerPreferencesRouteHandler,
  )
  .openapi(
    postEthV1ValidatorBuilderPreferencesRoute,
    postEthV1ValidatorBuilderPreferencesRouteHandler,
  )
  .openapi(postEthV1ValidatorLivenessEpochRoute, postEthV1ValidatorLivenessEpochRouteHandler)
  .openapi(
    getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootRoute,
    getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootRouteHandler,
  )
  .openapi(getEthV1EventsRoute, getEthV1EventsRouteHandler)

export default app
