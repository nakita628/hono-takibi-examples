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
  getEthV1ConfigDepositContractRoute,
  getEthV1ConfigForkScheduleRoute,
  getEthV1ConfigSpecRoute,
  getEthV1DebugBeaconDataColumnSidecarsBlockIdRoute,
  getEthV1DebugForkChoiceRoute,
  getEthV1EventsRoute,
  getEthV1NodeHealthRoute,
  getEthV1NodeIdentityRoute,
  getEthV1NodePeerCountRoute,
  getEthV1NodePeersPeerIdRoute,
  getEthV1NodePeersRoute,
  getEthV1NodeSyncingRoute,
  getEthV1NodeVersionRoute,
  getEthV1ValidatorAttestationDataRoute,
  getEthV1ValidatorDutiesProposerEpochRoute,
  getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootRoute,
  getEthV1ValidatorPayloadAttestationDataRoute,
  getEthV1ValidatorSyncCommitteeContributionRoute,
  getEthV2BeaconBlocksBlockIdAttestationsRoute,
  getEthV2BeaconBlocksBlockIdRoute,
  getEthV2BeaconPoolAttestationsRoute,
  getEthV2BeaconPoolAttesterSlashingsRoute,
  getEthV2DebugBeaconHeadsRoute,
  getEthV2DebugBeaconStatesStateIdRoute,
  getEthV2DebugForkChoiceRoute,
  getEthV2NodeVersionRoute,
  getEthV2ValidatorAggregateAttestationRoute,
  getEthV2ValidatorDutiesProposerEpochRoute,
  getEthV3ValidatorBlocksSlotRoute,
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
  postEthV1ValidatorBeaconCommitteeSelectionsRoute,
  postEthV1ValidatorBeaconCommitteeSubscriptionsRoute,
  postEthV1ValidatorBuilderPreferencesRoute,
  postEthV1ValidatorContributionAndProofsRoute,
  postEthV1ValidatorDutiesAttesterEpochRoute,
  postEthV1ValidatorDutiesPtcEpochRoute,
  postEthV1ValidatorDutiesSyncEpochRoute,
  postEthV1ValidatorLivenessEpochRoute,
  postEthV1ValidatorPrepareBeaconProposerRoute,
  postEthV1ValidatorProposerPreferencesRoute,
  postEthV1ValidatorRegisterValidatorRoute,
  postEthV1ValidatorSyncCommitteeSelectionsRoute,
  postEthV1ValidatorSyncCommitteeSubscriptionsRoute,
  postEthV2BeaconBlindedBlocksRoute,
  postEthV2BeaconBlocksRoute,
  postEthV2BeaconPoolAttestationsRoute,
  postEthV2BeaconPoolAttesterSlashingsRoute,
  postEthV2ValidatorAggregateAndProofsRoute,
  postEthV4ValidatorBlocksSlotRoute,
} from './routes'
import {
  getEthV1BeaconBlindedBlocksBlockIdRouteHandler,
  getEthV1BeaconBlobsBlockIdRouteHandler,
  getEthV1BeaconBlocksBlockIdRootRouteHandler,
  getEthV1BeaconExecutionPayloadEnvelopesBlockIdRouteHandler,
  getEthV1BeaconGenesisRouteHandler,
  getEthV1BeaconHeadersBlockIdRouteHandler,
  getEthV1BeaconHeadersRouteHandler,
  getEthV1BeaconLightClientBootstrapBlockRootRouteHandler,
  getEthV1BeaconLightClientFinalityUpdateRouteHandler,
  getEthV1BeaconLightClientOptimisticUpdateRouteHandler,
  getEthV1BeaconLightClientUpdatesRouteHandler,
  getEthV1BeaconPoolBlsToExecutionChangesRouteHandler,
  getEthV1BeaconPoolPayloadAttestationsRouteHandler,
  getEthV1BeaconPoolProposerSlashingsRouteHandler,
  getEthV1BeaconPoolVoluntaryExitsRouteHandler,
  getEthV1BeaconProposerPreferencesRouteHandler,
  getEthV1BeaconRewardsBlocksBlockIdRouteHandler,
  getEthV1BeaconStatesStateIdBuilderPendingPaymentsRouteHandler,
  getEthV1BeaconStatesStateIdBuilderPendingWithdrawalsRouteHandler,
  getEthV1BeaconStatesStateIdCommitteesRouteHandler,
  getEthV1BeaconStatesStateIdFinalityCheckpointsRouteHandler,
  getEthV1BeaconStatesStateIdForkRouteHandler,
  getEthV1BeaconStatesStateIdPendingConsolidationsRouteHandler,
  getEthV1BeaconStatesStateIdPendingDepositsRouteHandler,
  getEthV1BeaconStatesStateIdPendingPartialWithdrawalsRouteHandler,
  getEthV1BeaconStatesStateIdProposerLookaheadRouteHandler,
  getEthV1BeaconStatesStateIdPtcRouteHandler,
  getEthV1BeaconStatesStateIdRandaoRouteHandler,
  getEthV1BeaconStatesStateIdRootRouteHandler,
  getEthV1BeaconStatesStateIdSyncCommitteesRouteHandler,
  getEthV1BeaconStatesStateIdValidatorBalancesRouteHandler,
  getEthV1BeaconStatesStateIdValidatorsRouteHandler,
  getEthV1BeaconStatesStateIdValidatorsValidatorIdRouteHandler,
  getEthV1ConfigDepositContractRouteHandler,
  getEthV1ConfigForkScheduleRouteHandler,
  getEthV1ConfigSpecRouteHandler,
  getEthV1DebugBeaconDataColumnSidecarsBlockIdRouteHandler,
  getEthV1DebugForkChoiceRouteHandler,
  getEthV1EventsRouteHandler,
  getEthV1NodeHealthRouteHandler,
  getEthV1NodeIdentityRouteHandler,
  getEthV1NodePeerCountRouteHandler,
  getEthV1NodePeersPeerIdRouteHandler,
  getEthV1NodePeersRouteHandler,
  getEthV1NodeSyncingRouteHandler,
  getEthV1NodeVersionRouteHandler,
  getEthV1ValidatorAttestationDataRouteHandler,
  getEthV1ValidatorDutiesProposerEpochRouteHandler,
  getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRootRouteHandler,
  getEthV1ValidatorPayloadAttestationDataRouteHandler,
  getEthV1ValidatorSyncCommitteeContributionRouteHandler,
  getEthV2BeaconBlocksBlockIdAttestationsRouteHandler,
  getEthV2BeaconBlocksBlockIdRouteHandler,
  getEthV2BeaconPoolAttestationsRouteHandler,
  getEthV2BeaconPoolAttesterSlashingsRouteHandler,
  getEthV2DebugBeaconHeadsRouteHandler,
  getEthV2DebugBeaconStatesStateIdRouteHandler,
  getEthV2DebugForkChoiceRouteHandler,
  getEthV2NodeVersionRouteHandler,
  getEthV2ValidatorAggregateAttestationRouteHandler,
  getEthV2ValidatorDutiesProposerEpochRouteHandler,
  getEthV3ValidatorBlocksSlotRouteHandler,
  postEthV1BeaconExecutionPayloadBidsRouteHandler,
  postEthV1BeaconExecutionPayloadEnvelopesRouteHandler,
  postEthV1BeaconPoolBlsToExecutionChangesRouteHandler,
  postEthV1BeaconPoolPayloadAttestationsRouteHandler,
  postEthV1BeaconPoolProposerSlashingsRouteHandler,
  postEthV1BeaconPoolSyncCommitteesRouteHandler,
  postEthV1BeaconPoolVoluntaryExitsRouteHandler,
  postEthV1BeaconRewardsAttestationsEpochRouteHandler,
  postEthV1BeaconRewardsSyncCommitteeBlockIdRouteHandler,
  postEthV1BeaconStatesStateIdBuildersRouteHandler,
  postEthV1BeaconStatesStateIdValidatorBalancesRouteHandler,
  postEthV1BeaconStatesStateIdValidatorIdentitiesRouteHandler,
  postEthV1BeaconStatesStateIdValidatorsRouteHandler,
  postEthV1ValidatorBeaconCommitteeSelectionsRouteHandler,
  postEthV1ValidatorBeaconCommitteeSubscriptionsRouteHandler,
  postEthV1ValidatorBuilderPreferencesRouteHandler,
  postEthV1ValidatorContributionAndProofsRouteHandler,
  postEthV1ValidatorDutiesAttesterEpochRouteHandler,
  postEthV1ValidatorDutiesPtcEpochRouteHandler,
  postEthV1ValidatorDutiesSyncEpochRouteHandler,
  postEthV1ValidatorLivenessEpochRouteHandler,
  postEthV1ValidatorPrepareBeaconProposerRouteHandler,
  postEthV1ValidatorProposerPreferencesRouteHandler,
  postEthV1ValidatorRegisterValidatorRouteHandler,
  postEthV1ValidatorSyncCommitteeSelectionsRouteHandler,
  postEthV1ValidatorSyncCommitteeSubscriptionsRouteHandler,
  postEthV2BeaconBlindedBlocksRouteHandler,
  postEthV2BeaconBlocksRouteHandler,
  postEthV2BeaconPoolAttestationsRouteHandler,
  postEthV2BeaconPoolAttesterSlashingsRouteHandler,
  postEthV2ValidatorAggregateAndProofsRouteHandler,
  postEthV4ValidatorBlocksSlotRouteHandler,
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
