import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEthV1BeaconGenesis(options?: ClientRequestOptions) {
  return await parseResponse(client.eth.v1.beacon.genesis.$get(undefined, options))
}

export async function getEthV1BeaconStatesStateIdRoot(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['root']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.states[':state_id'].root.$get(args, options))
}

export async function getEthV1BeaconStatesStateIdFork(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['fork']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.states[':state_id'].fork.$get(args, options))
}

export async function getEthV1BeaconStatesStateIdFinalityCheckpoints(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['finality_checkpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.states[':state_id'].finality_checkpoints.$get(args, options),
  )
}

export async function getEthV1BeaconStatesStateIdValidators(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.states[':state_id'].validators.$get(args, options),
  )
}

export async function postEthV1BeaconStatesStateIdValidators(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['validators']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.states[':state_id'].validators.$post(args, options),
  )
}

export async function getEthV1BeaconStatesStateIdValidatorsValidatorId(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validators'][':validator_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.states[':state_id'].validators[':validator_id'].$get(args, options),
  )
}

export async function getEthV1BeaconStatesStateIdValidatorBalances(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.states[':state_id'].validator_balances.$get(args, options),
  )
}

export async function postEthV1BeaconStatesStateIdValidatorBalances(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validator_balances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.states[':state_id'].validator_balances.$post(args, options),
  )
}

export async function postEthV1BeaconStatesStateIdValidatorIdentities(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['validator_identities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.states[':state_id'].validator_identities.$post(args, options),
  )
}

export async function postEthV1BeaconStatesStateIdBuilders(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['builders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.states[':state_id'].builders.$post(args, options))
}

export async function getEthV1BeaconStatesStateIdCommittees(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['committees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.states[':state_id'].committees.$get(args, options),
  )
}

export async function getEthV1BeaconStatesStateIdSyncCommittees(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['sync_committees']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.states[':state_id'].sync_committees.$get(args, options),
  )
}

export async function getEthV1BeaconStatesStateIdPtc(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['ptc']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.states[':state_id'].ptc.$get(args, options))
}

export async function getEthV1BeaconStatesStateIdRandao(
  args: InferRequestType<(typeof client.eth.v1.beacon.states)[':state_id']['randao']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.states[':state_id'].randao.$get(args, options))
}

export async function getEthV1BeaconStatesStateIdPendingConsolidations(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_consolidations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.states[':state_id'].pending_consolidations.$get(args, options),
  )
}

export async function getEthV1BeaconStatesStateIdPendingDeposits(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_deposits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.states[':state_id'].pending_deposits.$get(args, options),
  )
}

export async function getEthV1BeaconStatesStateIdPendingPartialWithdrawals(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['pending_partial_withdrawals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.states[':state_id'].pending_partial_withdrawals.$get(args, options),
  )
}

export async function getEthV1BeaconStatesStateIdProposerLookahead(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['proposer_lookahead']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.states[':state_id'].proposer_lookahead.$get(args, options),
  )
}

export async function getEthV1BeaconStatesStateIdBuilderPendingWithdrawals(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_withdrawals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.states[':state_id'].builder_pending_withdrawals.$get(args, options),
  )
}

export async function getEthV1BeaconStatesStateIdBuilderPendingPayments(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.states)[':state_id']['builder_pending_payments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.states[':state_id'].builder_pending_payments.$get(args, options),
  )
}

export async function getEthV1BeaconHeaders(
  args: InferRequestType<typeof client.eth.v1.beacon.headers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.headers.$get(args, options))
}

export async function getEthV1BeaconHeadersBlockId(
  args: InferRequestType<(typeof client.eth.v1.beacon.headers)[':block_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.headers[':block_id'].$get(args, options))
}

export async function postEthV2BeaconBlindedBlocks(
  args: InferRequestType<typeof client.eth.v2.beacon.blinded_blocks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v2.beacon.blinded_blocks.$post(args, options))
}

export async function postEthV2BeaconBlocks(
  args: InferRequestType<typeof client.eth.v2.beacon.blocks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v2.beacon.blocks.$post(args, options))
}

export async function postEthV1BeaconExecutionPayloadBids(
  args: InferRequestType<typeof client.eth.v1.beacon.execution_payload_bids.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.execution_payload_bids.$post(args, options))
}

export async function postEthV1BeaconExecutionPayloadEnvelopes(
  args: InferRequestType<typeof client.eth.v1.beacon.execution_payload_envelopes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.execution_payload_envelopes.$post(args, options))
}

export async function getEthV1BeaconExecutionPayloadEnvelopesBlockId(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.execution_payload_envelopes)[':block_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.execution_payload_envelopes[':block_id'].$get(args, options),
  )
}

export async function getEthV1BeaconProposerPreferences(
  args: InferRequestType<typeof client.eth.v1.beacon.proposer_preferences.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.proposer_preferences.$get(args, options))
}

export async function getEthV2BeaconBlocksBlockId(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v2.beacon.blocks[':block_id'].$get(args, options))
}

export async function getEthV1BeaconBlocksBlockIdRoot(
  args: InferRequestType<(typeof client.eth.v1.beacon.blocks)[':block_id']['root']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.blocks[':block_id'].root.$get(args, options))
}

export async function getEthV2BeaconBlocksBlockIdAttestations(
  args: InferRequestType<(typeof client.eth.v2.beacon.blocks)[':block_id']['attestations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v2.beacon.blocks[':block_id'].attestations.$get(args, options),
  )
}

export async function getEthV1BeaconBlobsBlockId(
  args: InferRequestType<(typeof client.eth.v1.beacon.blobs)[':block_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.blobs[':block_id'].$get(args, options))
}

export async function getEthV1DebugBeaconDataColumnSidecarsBlockId(
  args: InferRequestType<
    (typeof client.eth.v1.debug.beacon.data_column_sidecars)[':block_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.debug.beacon.data_column_sidecars[':block_id'].$get(args, options),
  )
}

export async function postEthV1BeaconRewardsSyncCommitteeBlockId(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.rewards.sync_committee)[':block_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.rewards.sync_committee[':block_id'].$post(args, options),
  )
}

export async function getEthV1BeaconRewardsBlocksBlockId(
  args: InferRequestType<(typeof client.eth.v1.beacon.rewards.blocks)[':block_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.rewards.blocks[':block_id'].$get(args, options))
}

export async function postEthV1BeaconRewardsAttestationsEpoch(
  args: InferRequestType<(typeof client.eth.v1.beacon.rewards.attestations)[':epoch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.rewards.attestations[':epoch'].$post(args, options),
  )
}

export async function getEthV1BeaconBlindedBlocksBlockId(
  args: InferRequestType<(typeof client.eth.v1.beacon.blinded_blocks)[':block_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.blinded_blocks[':block_id'].$get(args, options))
}

export async function getEthV1BeaconLightClientBootstrapBlockRoot(
  args: InferRequestType<
    (typeof client.eth.v1.beacon.light_client.bootstrap)[':block_root']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.light_client.bootstrap[':block_root'].$get(args, options),
  )
}

export async function getEthV1BeaconLightClientUpdates(
  args: InferRequestType<typeof client.eth.v1.beacon.light_client.updates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.light_client.updates.$get(args, options))
}

export async function getEthV1BeaconLightClientFinalityUpdate(options?: ClientRequestOptions) {
  return await parseResponse(
    client.eth.v1.beacon.light_client.finality_update.$get(undefined, options),
  )
}

export async function getEthV1BeaconLightClientOptimisticUpdate(options?: ClientRequestOptions) {
  return await parseResponse(
    client.eth.v1.beacon.light_client.optimistic_update.$get(undefined, options),
  )
}

export async function getEthV2BeaconPoolAttestations(
  args: InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v2.beacon.pool.attestations.$get(args, options))
}

export async function postEthV2BeaconPoolAttestations(
  args: InferRequestType<typeof client.eth.v2.beacon.pool.attestations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v2.beacon.pool.attestations.$post(args, options))
}

export async function getEthV1BeaconPoolPayloadAttestations(
  args: InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.pool.payload_attestations.$get(args, options))
}

export async function postEthV1BeaconPoolPayloadAttestations(
  args: InferRequestType<typeof client.eth.v1.beacon.pool.payload_attestations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.pool.payload_attestations.$post(args, options))
}

export async function getEthV2BeaconPoolAttesterSlashings(options?: ClientRequestOptions) {
  return await parseResponse(client.eth.v2.beacon.pool.attester_slashings.$get(undefined, options))
}

export async function postEthV2BeaconPoolAttesterSlashings(
  args: InferRequestType<typeof client.eth.v2.beacon.pool.attester_slashings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v2.beacon.pool.attester_slashings.$post(args, options))
}

export async function getEthV1BeaconPoolProposerSlashings(options?: ClientRequestOptions) {
  return await parseResponse(client.eth.v1.beacon.pool.proposer_slashings.$get(undefined, options))
}

export async function postEthV1BeaconPoolProposerSlashings(
  args: InferRequestType<typeof client.eth.v1.beacon.pool.proposer_slashings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.pool.proposer_slashings.$post(args, options))
}

export async function postEthV1BeaconPoolSyncCommittees(
  args: InferRequestType<typeof client.eth.v1.beacon.pool.sync_committees.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.pool.sync_committees.$post(args, options))
}

export async function getEthV1BeaconPoolVoluntaryExits(options?: ClientRequestOptions) {
  return await parseResponse(client.eth.v1.beacon.pool.voluntary_exits.$get(undefined, options))
}

export async function postEthV1BeaconPoolVoluntaryExits(
  args: InferRequestType<typeof client.eth.v1.beacon.pool.voluntary_exits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.beacon.pool.voluntary_exits.$post(args, options))
}

export async function getEthV1BeaconPoolBlsToExecutionChanges(options?: ClientRequestOptions) {
  return await parseResponse(
    client.eth.v1.beacon.pool.bls_to_execution_changes.$get(undefined, options),
  )
}

export async function postEthV1BeaconPoolBlsToExecutionChanges(
  args: InferRequestType<typeof client.eth.v1.beacon.pool.bls_to_execution_changes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.beacon.pool.bls_to_execution_changes.$post(args, options),
  )
}

export async function getEthV2DebugBeaconStatesStateId(
  args: InferRequestType<(typeof client.eth.v2.debug.beacon.states)[':state_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v2.debug.beacon.states[':state_id'].$get(args, options))
}

export async function getEthV2DebugBeaconHeads(options?: ClientRequestOptions) {
  return await parseResponse(client.eth.v2.debug.beacon.heads.$get(undefined, options))
}

export async function getEthV1DebugForkChoice(options?: ClientRequestOptions) {
  return await parseResponse(client.eth.v1.debug.fork_choice.$get(undefined, options))
}

export async function getEthV2DebugForkChoice(options?: ClientRequestOptions) {
  return await parseResponse(client.eth.v2.debug.fork_choice.$get(undefined, options))
}

export async function getEthV1NodeIdentity(options?: ClientRequestOptions) {
  return await parseResponse(client.eth.v1.node.identity.$get(undefined, options))
}

export async function getEthV1NodePeers(
  args: InferRequestType<typeof client.eth.v1.node.peers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.node.peers.$get(args, options))
}

export async function getEthV1NodePeersPeerId(
  args: InferRequestType<(typeof client.eth.v1.node.peers)[':peer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.node.peers[':peer_id'].$get(args, options))
}

export async function getEthV1NodePeerCount(options?: ClientRequestOptions) {
  return await parseResponse(client.eth.v1.node.peer_count.$get(undefined, options))
}

export async function getEthV1NodeVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.eth.v1.node.version.$get(undefined, options))
}

export async function getEthV2NodeVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.eth.v2.node.version.$get(undefined, options))
}

export async function getEthV1NodeSyncing(options?: ClientRequestOptions) {
  return await parseResponse(client.eth.v1.node.syncing.$get(undefined, options))
}

export async function getEthV1NodeHealth(
  args: InferRequestType<typeof client.eth.v1.node.health.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.node.health.$get(args, options))
}

export async function getEthV1ConfigForkSchedule(options?: ClientRequestOptions) {
  return await parseResponse(client.eth.v1.config.fork_schedule.$get(undefined, options))
}

export async function getEthV1ConfigSpec(options?: ClientRequestOptions) {
  return await parseResponse(client.eth.v1.config.spec.$get(undefined, options))
}

export async function getEthV1ConfigDepositContract(options?: ClientRequestOptions) {
  return await parseResponse(client.eth.v1.config.deposit_contract.$get(undefined, options))
}

export async function postEthV1ValidatorDutiesAttesterEpoch(
  args: InferRequestType<(typeof client.eth.v1.validator.duties.attester)[':epoch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.validator.duties.attester[':epoch'].$post(args, options))
}

export async function getEthV1ValidatorDutiesProposerEpoch(
  args: InferRequestType<(typeof client.eth.v1.validator.duties.proposer)[':epoch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.validator.duties.proposer[':epoch'].$get(args, options))
}

export async function getEthV2ValidatorDutiesProposerEpoch(
  args: InferRequestType<(typeof client.eth.v2.validator.duties.proposer)[':epoch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v2.validator.duties.proposer[':epoch'].$get(args, options))
}

export async function postEthV1ValidatorDutiesSyncEpoch(
  args: InferRequestType<(typeof client.eth.v1.validator.duties.sync)[':epoch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.validator.duties.sync[':epoch'].$post(args, options))
}

export async function postEthV1ValidatorDutiesPtcEpoch(
  args: InferRequestType<(typeof client.eth.v1.validator.duties.ptc)[':epoch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.validator.duties.ptc[':epoch'].$post(args, options))
}

export async function getEthV3ValidatorBlocksSlot(
  args: InferRequestType<(typeof client.eth.v3.validator.blocks)[':slot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v3.validator.blocks[':slot'].$get(args, options))
}

export async function postEthV4ValidatorBlocksSlot(
  args: InferRequestType<(typeof client.eth.v4.validator.blocks)[':slot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v4.validator.blocks[':slot'].$post(args, options))
}

export async function getEthV1ValidatorAttestationData(
  args: InferRequestType<typeof client.eth.v1.validator.attestation_data.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.validator.attestation_data.$get(args, options))
}

export async function getEthV1ValidatorPayloadAttestationData(
  args: InferRequestType<typeof client.eth.v1.validator.payload_attestation_data.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.validator.payload_attestation_data.$get(args, options))
}

export async function getEthV2ValidatorAggregateAttestation(
  args: InferRequestType<typeof client.eth.v2.validator.aggregate_attestation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v2.validator.aggregate_attestation.$get(args, options))
}

export async function postEthV2ValidatorAggregateAndProofs(
  args: InferRequestType<typeof client.eth.v2.validator.aggregate_and_proofs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v2.validator.aggregate_and_proofs.$post(args, options))
}

export async function postEthV1ValidatorBeaconCommitteeSubscriptions(
  args: InferRequestType<typeof client.eth.v1.validator.beacon_committee_subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.validator.beacon_committee_subscriptions.$post(args, options),
  )
}

export async function postEthV1ValidatorSyncCommitteeSubscriptions(
  args: InferRequestType<typeof client.eth.v1.validator.sync_committee_subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.validator.sync_committee_subscriptions.$post(args, options),
  )
}

export async function postEthV1ValidatorBeaconCommitteeSelections(
  args: InferRequestType<typeof client.eth.v1.validator.beacon_committee_selections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.validator.beacon_committee_selections.$post(args, options),
  )
}

export async function getEthV1ValidatorSyncCommitteeContribution(
  args: InferRequestType<typeof client.eth.v1.validator.sync_committee_contribution.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.validator.sync_committee_contribution.$get(args, options),
  )
}

export async function postEthV1ValidatorSyncCommitteeSelections(
  args: InferRequestType<typeof client.eth.v1.validator.sync_committee_selections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.validator.sync_committee_selections.$post(args, options))
}

export async function postEthV1ValidatorContributionAndProofs(
  args: InferRequestType<typeof client.eth.v1.validator.contribution_and_proofs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.validator.contribution_and_proofs.$post(args, options))
}

export async function postEthV1ValidatorPrepareBeaconProposer(
  args: InferRequestType<typeof client.eth.v1.validator.prepare_beacon_proposer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.validator.prepare_beacon_proposer.$post(args, options))
}

export async function postEthV1ValidatorRegisterValidator(
  args: InferRequestType<typeof client.eth.v1.validator.register_validator.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.validator.register_validator.$post(args, options))
}

export async function postEthV1ValidatorProposerPreferences(
  args: InferRequestType<typeof client.eth.v1.validator.proposer_preferences.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.validator.proposer_preferences.$post(args, options))
}

export async function postEthV1ValidatorBuilderPreferences(
  args: InferRequestType<typeof client.eth.v1.validator.builder_preferences.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.validator.builder_preferences.$post(args, options))
}

export async function postEthV1ValidatorLivenessEpoch(
  args: InferRequestType<(typeof client.eth.v1.validator.liveness)[':epoch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.validator.liveness[':epoch'].$post(args, options))
}

export async function getEthV1ValidatorExecutionPayloadEnvelopesSlotBeaconBlockRoot(
  args: InferRequestType<
    (typeof client.eth.v1.validator.execution_payload_envelopes)[':slot'][':beacon_block_root']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.eth.v1.validator.execution_payload_envelopes[':slot'][':beacon_block_root'].$get(
      args,
      options,
    ),
  )
}

export async function getEthV1Events(
  args: InferRequestType<typeof client.eth.v1.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eth.v1.events.$get(args, options))
}
