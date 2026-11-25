type GenesisTime = string
type Root = string
type ForkVersion = string
type ErrorMessage = { code: number; message: string; stacktraces?: string[] | undefined }
type ExecutionOptimistic = boolean
type Finalized = boolean
type Uint64 = string
type Fork = { previous_version: ForkVersion; current_version: ForkVersion; epoch: Uint64 }
type Checkpoint = { epoch: Uint64; root: Root }
type ValidatorStatus =
  | 'pending_initialized'
  | 'pending_queued'
  | 'active_ongoing'
  | 'active_exiting'
  | 'active_slashed'
  | 'exited_unslashed'
  | 'exited_slashed'
  | 'withdrawal_possible'
  | 'withdrawal_done'
type GloasBuilderPreferencesEntryProposerPubkeyAllOf0 = string
type ValidatorResponseValidator = {
  pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
  withdrawal_credentials: Root
  effective_balance: Uint64
  slashed: boolean
  activation_eligibility_epoch: Uint64
  activation_epoch: Uint64
  exit_epoch: Uint64
  withdrawable_epoch: Uint64
}
type ValidatorResponse = {
  index: Uint64
  balance: Uint64
  status: ValidatorStatus
  validator: ValidatorResponseValidator
}
type ValidatorStatusInput =
  | 'pending_initialized'
  | 'pending_queued'
  | 'active_ongoing'
  | 'active_exiting'
  | 'active_slashed'
  | 'exited_unslashed'
  | 'exited_slashed'
  | 'withdrawal_possible'
  | 'withdrawal_done'
type ValidatorBalanceResponse = { index: Uint64; balance: Uint64 }
type ValidatorIdentityResponse = {
  index: Uint64
  pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
  activation_epoch: Uint64
}
type BuilderStatusInput = 'pending' | 'active' | 'exited'
type BuilderStatus = 'pending' | 'active' | 'exited'
type GloasBeaconStateCurrentEpochParticipationItems = string
type ExecutionAddress = string
type GloasBuilder = {
  pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
  version: GloasBeaconStateCurrentEpochParticipationItems
  execution_address: ExecutionAddress
  balance: Uint64
  deposit_epoch: Uint64
  withdrawable_epoch: Uint64
}
type BuilderResponse = { index: Uint64; status: BuilderStatus; builder: GloasBuilder }
type Uint64Input = string
type Committee = { index: Uint64; slot: Uint64; validators: Uint64[] }
type AltairSyncCommitteeValidators = Uint64[]
type AltairSyncCommittee = {
  validators: AltairSyncCommitteeValidators
  validator_aggregates: AltairSyncCommitteeValidators[]
}
type GloasPayloadTimelinessCommittee = Uint64[]
type ConsensusVersion =
  | 'phase0'
  | 'altair'
  | 'bellatrix'
  | 'capella'
  | 'deneb'
  | 'electra'
  | 'fulu'
  | 'gloas'
type ElectraPendingConsolidation = { source_index: Uint64; target_index: Uint64 }
type GloasPendingConsolidations = ElectraPendingConsolidation[]
type ElectraPendingConsolidations = ElectraPendingConsolidation[]
type Signature = string
type ElectraPendingDeposit = {
  pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
  withdrawal_credentials: Root
  amount: Uint64
  signature: Signature
  slot: Uint64
}
type GloasPendingDeposits = ElectraPendingDeposit[]
type ElectraPendingDeposits = ElectraPendingDeposit[]
type ElectraPendingPartialWithdrawal = {
  validator_index: Uint64
  amount: Uint64
  withdrawable_epoch: Uint64
}
type GloasPendingPartialWithdrawals = ElectraPendingPartialWithdrawal[]
type ElectraPendingPartialWithdrawals = ElectraPendingPartialWithdrawal[]
type GloasBuilderPendingWithdrawal = {
  fee_recipient: ExecutionAddress
  amount: Uint64
  builder_index: Uint64
}
type GloasBuilderPendingWithdrawals = GloasBuilderPendingWithdrawal[]
type GloasBuilderPendingPayment = {
  weight: Uint64
  withdrawal: GloasBuilderPendingWithdrawal
  proposer_index: Uint64
}
type GloasBuilderPendingPayments = GloasBuilderPendingPayment[]
type RootInput = string
type Phase0BeaconBlockAllOf0 = {
  slot: Uint64
  proposer_index: Uint64
  parent_root: Root
  state_root: Root
}
type GloasBeaconStateLatestBlockHeader = Phase0BeaconBlockAllOf0 & { body_root: Root }
type Phase0SignedBeaconBlockHeader = {
  message: GloasBeaconStateLatestBlockHeader
  signature: Signature
}
type BroadcastValidationInput = 'gossip' | 'consensus' | 'consensus_and_equivocation'
type GloasBeaconBlockAllOf0Input = {
  slot: Uint64Input
  proposer_index: Uint64Input
  parent_root: RootInput
  state_root: RootInput
}
type SignatureInput = string
type GloasBeaconStateLatestBlockHashInput = string
type GloasBeaconStateEth1DataInput = {
  deposit_root: RootInput
  deposit_count: Uint64Input
  block_hash: GloasBeaconStateLatestBlockHashInput
}
type GraffitiInput = string
type Phase0BeaconBlockAllOf0Input = {
  slot: Uint64Input
  proposer_index: Uint64Input
  parent_root: RootInput
  state_root: RootInput
}
type GloasBeaconStateLatestBlockHeaderInput = Phase0BeaconBlockAllOf0Input & {
  body_root: RootInput
}
type Phase0SignedBeaconBlockHeaderInput = {
  message: GloasBeaconStateLatestBlockHeaderInput
  signature: SignatureInput
}
type Phase0ProposerSlashingInput = {
  signed_header_1: Phase0SignedBeaconBlockHeaderInput
  signed_header_2: Phase0SignedBeaconBlockHeaderInput
}
type CheckpointInput = { epoch: Uint64Input; root: RootInput }
type Phase0AttestationDataInput = {
  slot: Uint64Input
  index: Uint64Input
  beacon_block_root: RootInput
  source: CheckpointInput
  target: CheckpointInput
}
type ElectraAttesterSlashingAttestation1Input = {
  attesting_indices: Uint64Input[]
  data: Phase0AttestationDataInput
  signature: SignatureInput
}
type ElectraAttesterSlashingInput = {
  attestation_1: ElectraAttesterSlashingAttestation1Input
  attestation_2: ElectraAttesterSlashingAttestation1Input
}
type Phase0BeaconStateCurrentEpochAttestationsItemsAggregationBitsInput = string
type GloasBeaconStateJustificationBitsInput = string
type ElectraAttestationInput = {
  aggregation_bits: Phase0BeaconStateCurrentEpochAttestationsItemsAggregationBitsInput
  data: Phase0AttestationDataInput
  signature: SignatureInput
  committee_bits: GloasBeaconStateJustificationBitsInput
}
type GloasBuilderPreferencesEntryProposerPubkeyAllOf0Input = string
type GloasBeaconBlockAllOf1BodyDepositsItemsInput = {
  proof: RootInput[]
  data: {
    pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0Input
    withdrawal_credentials: RootInput
    amount: Uint64Input
    signature: SignatureInput
  }
}
type Phase0SignedVoluntaryExitInput = {
  message: { epoch: Uint64Input; validator_index: Uint64Input }
  signature: SignatureInput
}
type GloasLightClientFinalityUpdateSyncAggregateInput = {
  sync_committee_bits: GloasBeaconStateJustificationBitsInput
  sync_committee_signature: SignatureInput
}
type ExecutionAddressInput = string
type CapellaSignedBLSToExecutionChangeInput = {
  message: {
    validator_index: Uint64Input
    from_bls_pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0Input
    to_execution_address: ExecutionAddressInput
  }
  signature: SignatureInput
}
type FuluDataColumnSidecarsItemsKzgCommitmentsItemsInput = string
type ElectraBlindedBeaconBlockAllOf1BodyAllOf0Input = {
  randao_reveal: SignatureInput
  eth1_data: GloasBeaconStateEth1DataInput
  graffiti: GraffitiInput
  proposer_slashings: Phase0ProposerSlashingInput[]
  attester_slashings: ElectraAttesterSlashingInput[]
  attestations: ElectraAttestationInput[]
  deposits: GloasBeaconBlockAllOf1BodyDepositsItemsInput[]
  voluntary_exits: Phase0SignedVoluntaryExitInput[]
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregateInput
  bls_to_execution_changes: CapellaSignedBLSToExecutionChangeInput[]
  blob_kzg_commitments: FuluDataColumnSidecarsItemsKzgCommitmentsItemsInput[]
}
type GloasExecutionPayloadLogsBloomInput = string
type GloasBeaconStateRandaoMixesItemsInput = string
type GloasExecutionPayloadExtraDataInput = string
type FuluBeaconStateLatestExecutionPayloadHeaderAllOf0Input = {
  parent_hash: GloasBeaconStateLatestBlockHashInput
  fee_recipient: ExecutionAddressInput
  state_root: RootInput
  receipts_root: RootInput
  logs_bloom: GloasExecutionPayloadLogsBloomInput
  prev_randao: GloasBeaconStateRandaoMixesItemsInput
  block_number: Uint64Input
  gas_limit: Uint64Input
  gas_used: Uint64Input
  timestamp: Uint64Input
  extra_data: GloasExecutionPayloadExtraDataInput
  base_fee_per_gas: string
  blob_gas_used: Uint64Input
  excess_blob_gas: Uint64Input
  block_hash: GloasBeaconStateLatestBlockHashInput
}
type FuluBeaconStateLatestExecutionPayloadHeaderInput =
  FuluBeaconStateLatestExecutionPayloadHeaderAllOf0Input & {
    transactions_root: RootInput
    withdrawals_root: RootInput
  }
type GloasExecutionPayloadEnvelopeExecutionRequestsDepositsItemsInput = {
  pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0Input
  withdrawal_credentials: RootInput
  amount: Uint64Input
  signature: SignatureInput
  index: Uint64Input
}
type GloasExecutionPayloadEnvelopeExecutionRequestsWithdrawalsItemsInput = {
  source_address: ExecutionAddressInput
  validator_pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0Input
  amount: Uint64Input
}
type GloasExecutionPayloadEnvelopeExecutionRequestsConsolidationsItemsInput = {
  source_address: ExecutionAddressInput
  source_pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0Input
  target_pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0Input
}
type ElectraBlindedBeaconBlockAllOf1BodyAllOf1ExecutionRequestsInput = {
  deposits: GloasExecutionPayloadEnvelopeExecutionRequestsDepositsItemsInput[]
  withdrawals: GloasExecutionPayloadEnvelopeExecutionRequestsWithdrawalsItemsInput[]
  consolidations: GloasExecutionPayloadEnvelopeExecutionRequestsConsolidationsItemsInput[]
}
type ElectraBlindedBeaconBlockInput = GloasBeaconBlockAllOf0Input & {
  body: ElectraBlindedBeaconBlockAllOf1BodyAllOf0Input & {
    execution_payload_header: FuluBeaconStateLatestExecutionPayloadHeaderInput
    execution_requests: ElectraBlindedBeaconBlockAllOf1BodyAllOf1ExecutionRequestsInput
  }
}
type ElectraSignedBlindedBeaconBlockInput = {
  message: ElectraBlindedBeaconBlockInput
  signature: SignatureInput
}
type Phase0AttesterSlashingAttestation1Input = {
  attesting_indices: Uint64Input[]
  data: Phase0AttestationDataInput
  signature: SignatureInput
}
type Phase0AttesterSlashingInput = {
  attestation_1: Phase0AttesterSlashingAttestation1Input
  attestation_2: Phase0AttesterSlashingAttestation1Input
}
type Phase0AttestationInput = {
  aggregation_bits: Phase0BeaconStateCurrentEpochAttestationsItemsAggregationBitsInput
  data: Phase0AttestationDataInput
  signature: SignatureInput
}
type DenebBlindedBeaconBlockAllOf1BodyAllOf0Input = {
  randao_reveal: SignatureInput
  eth1_data: GloasBeaconStateEth1DataInput
  graffiti: GraffitiInput
  proposer_slashings: Phase0ProposerSlashingInput[]
  attester_slashings: Phase0AttesterSlashingInput[]
  attestations: Phase0AttestationInput[]
  deposits: GloasBeaconBlockAllOf1BodyDepositsItemsInput[]
  voluntary_exits: Phase0SignedVoluntaryExitInput[]
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregateInput
  bls_to_execution_changes: CapellaSignedBLSToExecutionChangeInput[]
  blob_kzg_commitments: FuluDataColumnSidecarsItemsKzgCommitmentsItemsInput[]
}
type DenebBlindedBeaconBlockInput = GloasBeaconBlockAllOf0Input & {
  body: DenebBlindedBeaconBlockAllOf1BodyAllOf0Input & {
    execution_payload_header: FuluBeaconStateLatestExecutionPayloadHeaderInput
  }
}
type DenebSignedBlindedBeaconBlockInput = {
  message: DenebBlindedBeaconBlockInput
  signature: SignatureInput
}
type CapellaBeaconBlockAllOf1BodyAllOf0Input = {
  randao_reveal: SignatureInput
  eth1_data: GloasBeaconStateEth1DataInput
  graffiti: GraffitiInput
  proposer_slashings: Phase0ProposerSlashingInput[]
  attester_slashings: Phase0AttesterSlashingInput[]
  attestations: Phase0AttestationInput[]
  deposits: GloasBeaconBlockAllOf1BodyDepositsItemsInput[]
  voluntary_exits: Phase0SignedVoluntaryExitInput[]
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregateInput
  bls_to_execution_changes: CapellaSignedBLSToExecutionChangeInput[]
}
type CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf0Input = {
  parent_hash: GloasBeaconStateLatestBlockHashInput
  fee_recipient: ExecutionAddressInput
  state_root: RootInput
  receipts_root: RootInput
  logs_bloom: GloasExecutionPayloadLogsBloomInput
  prev_randao: GloasBeaconStateRandaoMixesItemsInput
  block_number: Uint64Input
  gas_limit: Uint64Input
  gas_used: Uint64Input
  timestamp: Uint64Input
  extra_data: GloasExecutionPayloadExtraDataInput
  base_fee_per_gas: string
  block_hash: GloasBeaconStateLatestBlockHashInput
}
type CapellaBeaconStateLatestExecutionPayloadHeaderInput =
  CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf0Input & {
    transactions_root: RootInput
    withdrawals_root: RootInput
  }
type CapellaBlindedBeaconBlockInput = GloasBeaconBlockAllOf0Input & {
  body: CapellaBeaconBlockAllOf1BodyAllOf0Input & {
    execution_payload_header: CapellaBeaconStateLatestExecutionPayloadHeaderInput
  }
}
type CapellaSignedBlindedBeaconBlockInput = {
  message: CapellaBlindedBeaconBlockInput
  signature: SignatureInput
}
type BellatrixBeaconBlockAllOf1BodyAllOf0Input = {
  randao_reveal: SignatureInput
  eth1_data: GloasBeaconStateEth1DataInput
  graffiti: GraffitiInput
  proposer_slashings: Phase0ProposerSlashingInput[]
  attester_slashings: Phase0AttesterSlashingInput[]
  attestations: Phase0AttestationInput[]
  deposits: GloasBeaconBlockAllOf1BodyDepositsItemsInput[]
  voluntary_exits: Phase0SignedVoluntaryExitInput[]
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregateInput
}
type BellatrixBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf0Input = {
  parent_hash: GloasBeaconStateLatestBlockHashInput
  fee_recipient: ExecutionAddressInput
  state_root: RootInput
  receipts_root: RootInput
  logs_bloom: GloasExecutionPayloadLogsBloomInput
  prev_randao: GloasBeaconStateRandaoMixesItemsInput
  block_number: Uint64Input
  gas_limit: Uint64Input
  gas_used: Uint64Input
  timestamp: Uint64Input
  extra_data: GloasExecutionPayloadExtraDataInput
  base_fee_per_gas: string
  block_hash: GloasBeaconStateLatestBlockHashInput
}
type BellatrixBeaconStateLatestExecutionPayloadHeaderInput =
  BellatrixBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf0Input & { transactions_root: RootInput }
type BellatrixBlindedBeaconBlockInput = GloasBeaconBlockAllOf0Input & {
  body: BellatrixBeaconBlockAllOf1BodyAllOf0Input & {
    execution_payload_header: BellatrixBeaconStateLatestExecutionPayloadHeaderInput
  }
}
type BellatrixSignedBlindedBeaconBlockInput = {
  message: BellatrixBlindedBeaconBlockInput
  signature: SignatureInput
}
type AltairBeaconBlockInput = GloasBeaconBlockAllOf0Input & {
  body: {
    randao_reveal: SignatureInput
    eth1_data: GloasBeaconStateEth1DataInput
    graffiti: GraffitiInput
    proposer_slashings: Phase0ProposerSlashingInput[]
    attester_slashings: Phase0AttesterSlashingInput[]
    attestations: Phase0AttestationInput[]
    deposits: GloasBeaconBlockAllOf1BodyDepositsItemsInput[]
    voluntary_exits: Phase0SignedVoluntaryExitInput[]
    sync_aggregate: GloasLightClientFinalityUpdateSyncAggregateInput
  }
}
type AltairSignedBeaconBlockInput = { message: AltairBeaconBlockInput; signature: SignatureInput }
type Phase0BeaconBlockInput = Phase0BeaconBlockAllOf0Input & {
  body: {
    randao_reveal: SignatureInput
    eth1_data: GloasBeaconStateEth1DataInput
    graffiti: GraffitiInput
    proposer_slashings: Phase0ProposerSlashingInput[]
    attester_slashings: Phase0AttesterSlashingInput[]
    attestations: Phase0AttestationInput[]
    deposits: GloasBeaconBlockAllOf1BodyDepositsItemsInput[]
    voluntary_exits: Phase0SignedVoluntaryExitInput[]
  }
}
type Phase0SignedBeaconBlockInput = { message: Phase0BeaconBlockInput; signature: SignatureInput }
type ConsensusVersionInput =
  | 'phase0'
  | 'altair'
  | 'bellatrix'
  | 'capella'
  | 'deneb'
  | 'electra'
  | 'fulu'
  | 'gloas'
type GloasAttesterSlashingAttestation1Input = {
  attesting_indices: Uint64Input[]
  data: Phase0AttestationDataInput
  signature: SignatureInput
}
type GloasAttesterSlashingInput = {
  attestation_1: GloasAttesterSlashingAttestation1Input
  attestation_2: GloasAttesterSlashingAttestation1Input
}
type GloasAttestationInput = {
  aggregation_bits: Phase0BeaconStateCurrentEpochAttestationsItemsAggregationBitsInput
  data: Phase0AttestationDataInput
  signature: SignatureInput
  committee_bits: GloasBeaconStateJustificationBitsInput
}
type GloasExecutionPayloadBidInput = {
  parent_block_hash: GloasBeaconStateLatestBlockHashInput
  parent_block_root: RootInput
  block_hash: GloasBeaconStateLatestBlockHashInput
  prev_randao: GloasBeaconStateRandaoMixesItemsInput
  fee_recipient: ExecutionAddressInput
  gas_limit: Uint64Input
  builder_index: Uint64Input
  slot: Uint64Input
  value: Uint64Input
  execution_payment: Uint64Input
  blob_kzg_commitments: FuluDataColumnSidecarsItemsKzgCommitmentsItemsInput[]
  execution_requests_root: RootInput
}
type GloasSignedExecutionPayloadBidInput = {
  message: GloasExecutionPayloadBidInput
  signature: SignatureInput
}
type GloasPayloadAttestationDataInput = {
  beacon_block_root: RootInput
  slot: Uint64Input
  payload_present: boolean
  blob_data_available: boolean
}
type GloasPayloadAttestationInput = {
  aggregation_bits: GloasBeaconStateJustificationBitsInput
  data: GloasPayloadAttestationDataInput
  signature: SignatureInput
}
type GloasExecutionPayloadEnvelopeExecutionRequestsInput = {
  deposits: GloasExecutionPayloadEnvelopeExecutionRequestsDepositsItemsInput[]
  withdrawals: GloasExecutionPayloadEnvelopeExecutionRequestsWithdrawalsItemsInput[]
  consolidations: GloasExecutionPayloadEnvelopeExecutionRequestsConsolidationsItemsInput[]
  builder_deposits: {
    pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0Input
    withdrawal_credentials: GloasBeaconStateRandaoMixesItemsInput
    amount: Uint64Input
    signature: SignatureInput
  }[]
  builder_exits: {
    source_address: ExecutionAddressInput
    pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0Input
  }[]
}
type GloasBeaconBlockInput = GloasBeaconBlockAllOf0Input & {
  body: {
    randao_reveal: SignatureInput
    eth1_data: GloasBeaconStateEth1DataInput
    graffiti: GraffitiInput
    proposer_slashings: Phase0ProposerSlashingInput[]
    attester_slashings: GloasAttesterSlashingInput[]
    attestations: GloasAttestationInput[]
    deposits: GloasBeaconBlockAllOf1BodyDepositsItemsInput[]
    voluntary_exits: Phase0SignedVoluntaryExitInput[]
    sync_aggregate: GloasLightClientFinalityUpdateSyncAggregateInput
    bls_to_execution_changes: CapellaSignedBLSToExecutionChangeInput[]
    signed_execution_payload_bid: GloasSignedExecutionPayloadBidInput
    payload_attestations: GloasPayloadAttestationInput[]
    parent_execution_requests: GloasExecutionPayloadEnvelopeExecutionRequestsInput
  }
}
type GloasSignedBeaconBlockInput = { message: GloasBeaconBlockInput; signature: SignatureInput }
type CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf1TransactionsInput = string[]
type CapellaWithdrawalInput = {
  index: Uint64Input
  validator_index: Uint64Input
  address: ExecutionAddressInput
  amount: Uint64Input
}
type CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf1WithdrawalsInput =
  CapellaWithdrawalInput[]
type FuluBlockContentsBlockAllOf1BodyAllOf1ExecutionPayloadInput =
  FuluBeaconStateLatestExecutionPayloadHeaderAllOf0Input & {
    transactions: CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf1TransactionsInput
    withdrawals: CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf1WithdrawalsInput
  }
type FuluBlockContentsBlockInput = GloasBeaconBlockAllOf0Input & {
  body: ElectraBlindedBeaconBlockAllOf1BodyAllOf0Input & {
    execution_payload: FuluBlockContentsBlockAllOf1BodyAllOf1ExecutionPayloadInput
    execution_requests: ElectraBlindedBeaconBlockAllOf1BodyAllOf1ExecutionRequestsInput
  }
}
type ElectraSignedBeaconBlockInput = {
  message: FuluBlockContentsBlockInput
  signature: SignatureInput
}
type GloasSignedExecutionPayloadEnvelopeContentsKzgProofsItemsInput = string
type GloasSignedExecutionPayloadEnvelopeContentsKzgProofsInput =
  GloasSignedExecutionPayloadEnvelopeContentsKzgProofsItemsInput[]
type BlobInput = string
type BlobsInput = BlobInput[]
type FuluSignedBlockContentsInput = {
  signed_block: ElectraSignedBeaconBlockInput
  kzg_proofs: GloasSignedExecutionPayloadEnvelopeContentsKzgProofsInput
  blobs: BlobsInput
}
type ElectraSignedBlockContentsKzgProofsInput =
  GloasSignedExecutionPayloadEnvelopeContentsKzgProofsItemsInput[]
type ElectraSignedBlockContentsInput = {
  signed_block: ElectraSignedBeaconBlockInput
  kzg_proofs: ElectraSignedBlockContentsKzgProofsInput
  blobs: BlobsInput
}
type DenebBeaconBlockInput = GloasBeaconBlockAllOf0Input & {
  body: DenebBlindedBeaconBlockAllOf1BodyAllOf0Input & {
    execution_payload: FuluBlockContentsBlockAllOf1BodyAllOf1ExecutionPayloadInput
  }
}
type DenebSignedBeaconBlockInput = { message: DenebBeaconBlockInput; signature: SignatureInput }
type DenebSignedBlockContentsInput = {
  signed_block: DenebSignedBeaconBlockInput
  kzg_proofs: ElectraSignedBlockContentsKzgProofsInput
  blobs: BlobsInput
}
type CapellaBeaconBlockInput = GloasBeaconBlockAllOf0Input & {
  body: CapellaBeaconBlockAllOf1BodyAllOf0Input & {
    execution_payload: CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf0Input & {
      transactions: CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf1TransactionsInput
      withdrawals: CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf1WithdrawalsInput
    }
  }
}
type CapellaSignedBeaconBlockInput = { message: CapellaBeaconBlockInput; signature: SignatureInput }
type BellatrixBeaconBlockInput = GloasBeaconBlockAllOf0Input & {
  body: BellatrixBeaconBlockAllOf1BodyAllOf0Input & {
    execution_payload: BellatrixBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf0Input & {
      transactions: CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf1TransactionsInput
    }
  }
}
type BellatrixSignedBeaconBlockInput = {
  message: BellatrixBeaconBlockInput
  signature: SignatureInput
}
type GloasExecutionPayloadInput = {
  parent_hash: GloasBeaconStateLatestBlockHashInput
  fee_recipient: ExecutionAddressInput
  state_root: GloasBeaconStateRandaoMixesItemsInput
  receipts_root: GloasBeaconStateRandaoMixesItemsInput
  logs_bloom: GloasExecutionPayloadLogsBloomInput
  prev_randao: GloasBeaconStateRandaoMixesItemsInput
  block_number: Uint64Input
  gas_limit: Uint64Input
  gas_used: Uint64Input
  timestamp: Uint64Input
  extra_data: GloasExecutionPayloadExtraDataInput
  base_fee_per_gas: string
  block_hash: GloasBeaconStateLatestBlockHashInput
  transactions: string[]
  withdrawals: CapellaWithdrawalInput[]
  blob_gas_used: Uint64Input
  excess_blob_gas: Uint64Input
  block_access_list: string
  slot_number: Uint64Input
}
type GloasExecutionPayloadEnvelopeInput = {
  payload: GloasExecutionPayloadInput
  execution_requests: GloasExecutionPayloadEnvelopeExecutionRequestsInput
  builder_index: Uint64Input
  beacon_block_root: RootInput
  parent_beacon_block_root: RootInput
}
type GloasSignedExecutionPayloadEnvelopeInput = {
  message: GloasExecutionPayloadEnvelopeInput
  signature: SignatureInput
}
type GloasSignedExecutionPayloadEnvelopeContentsInput = {
  signed_execution_payload_envelope: GloasSignedExecutionPayloadEnvelopeInput
  kzg_proofs: GloasSignedExecutionPayloadEnvelopeContentsKzgProofsInput
  blobs: BlobsInput
}
type GloasBeaconStateLatestBlockHash = string
type GloasBeaconStateRandaoMixesItems = string
type GloasExecutionPayloadLogsBloom = string
type GloasExecutionPayloadExtraData = string
type CapellaWithdrawal = {
  index: Uint64
  validator_index: Uint64
  address: ExecutionAddress
  amount: Uint64
}
type GloasExecutionPayload = {
  parent_hash: GloasBeaconStateLatestBlockHash
  fee_recipient: ExecutionAddress
  state_root: GloasBeaconStateRandaoMixesItems
  receipts_root: GloasBeaconStateRandaoMixesItems
  logs_bloom: GloasExecutionPayloadLogsBloom
  prev_randao: GloasBeaconStateRandaoMixesItems
  block_number: Uint64
  gas_limit: Uint64
  gas_used: Uint64
  timestamp: Uint64
  extra_data: GloasExecutionPayloadExtraData
  base_fee_per_gas: string
  block_hash: GloasBeaconStateLatestBlockHash
  transactions: string[]
  withdrawals: CapellaWithdrawal[]
  blob_gas_used: Uint64
  excess_blob_gas: Uint64
  block_access_list: string
  slot_number: Uint64
}
type GloasExecutionPayloadEnvelopeExecutionRequestsDepositsItems = {
  pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
  withdrawal_credentials: Root
  amount: Uint64
  signature: Signature
  index: Uint64
}
type GloasExecutionPayloadEnvelopeExecutionRequestsWithdrawalsItems = {
  source_address: ExecutionAddress
  validator_pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
  amount: Uint64
}
type GloasExecutionPayloadEnvelopeExecutionRequestsConsolidationsItems = {
  source_address: ExecutionAddress
  source_pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
  target_pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
}
type GloasExecutionPayloadEnvelopeExecutionRequests = {
  deposits: GloasExecutionPayloadEnvelopeExecutionRequestsDepositsItems[]
  withdrawals: GloasExecutionPayloadEnvelopeExecutionRequestsWithdrawalsItems[]
  consolidations: GloasExecutionPayloadEnvelopeExecutionRequestsConsolidationsItems[]
  builder_deposits: {
    pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
    withdrawal_credentials: GloasBeaconStateRandaoMixesItems
    amount: Uint64
    signature: Signature
  }[]
  builder_exits: {
    source_address: ExecutionAddress
    pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
  }[]
}
type GloasExecutionPayloadEnvelope = {
  payload: GloasExecutionPayload
  execution_requests: GloasExecutionPayloadEnvelopeExecutionRequests
  builder_index: Uint64
  beacon_block_root: Root
  parent_beacon_block_root: Root
}
type GloasSignedExecutionPayloadEnvelope = {
  message: GloasExecutionPayloadEnvelope
  signature: Signature
}
type GloasProposerPreferences = {
  dependent_root: Root
  proposal_slot: Uint64
  validator_index: Uint64
  fee_recipient: ExecutionAddress
  target_gas_limit: Uint64
}
type GloasSignedProposerPreferences = { message: GloasProposerPreferences; signature: Signature }
type GloasBeaconBlockAllOf0 = {
  slot: Uint64
  proposer_index: Uint64
  parent_root: Root
  state_root: Root
}
type GloasBeaconStateEth1Data = {
  deposit_root: Root
  deposit_count: Uint64
  block_hash: GloasBeaconStateLatestBlockHash
}
type Graffiti = string
type Phase0ProposerSlashing = {
  signed_header_1: Phase0SignedBeaconBlockHeader
  signed_header_2: Phase0SignedBeaconBlockHeader
}
type Phase0AttestationData = {
  slot: Uint64
  index: Uint64
  beacon_block_root: Root
  source: Checkpoint
  target: Checkpoint
}
type GloasAttesterSlashingAttestation1 = {
  attesting_indices: Uint64[]
  data: Phase0AttestationData
  signature: Signature
}
type GloasAttesterSlashing = {
  attestation_1: GloasAttesterSlashingAttestation1
  attestation_2: GloasAttesterSlashingAttestation1
}
type Phase0BeaconStateCurrentEpochAttestationsItemsAggregationBits = string
type GloasBeaconStateJustificationBits = string
type GloasAttestation = {
  aggregation_bits: Phase0BeaconStateCurrentEpochAttestationsItemsAggregationBits
  data: Phase0AttestationData
  signature: Signature
  committee_bits: GloasBeaconStateJustificationBits
}
type GloasBeaconBlockAllOf1BodyDepositsItems = {
  proof: Root[]
  data: {
    pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
    withdrawal_credentials: Root
    amount: Uint64
    signature: Signature
  }
}
type Phase0SignedVoluntaryExit = {
  message: { epoch: Uint64; validator_index: Uint64 }
  signature: Signature
}
type GloasLightClientFinalityUpdateSyncAggregate = {
  sync_committee_bits: GloasBeaconStateJustificationBits
  sync_committee_signature: Signature
}
type CapellaSignedBLSToExecutionChange = {
  message: {
    validator_index: Uint64
    from_bls_pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
    to_execution_address: ExecutionAddress
  }
  signature: Signature
}
type FuluDataColumnSidecarsItemsKzgCommitmentsItems = string
type GloasExecutionPayloadBid = {
  parent_block_hash: GloasBeaconStateLatestBlockHash
  parent_block_root: Root
  block_hash: GloasBeaconStateLatestBlockHash
  prev_randao: GloasBeaconStateRandaoMixesItems
  fee_recipient: ExecutionAddress
  gas_limit: Uint64
  builder_index: Uint64
  slot: Uint64
  value: Uint64
  execution_payment: Uint64
  blob_kzg_commitments: FuluDataColumnSidecarsItemsKzgCommitmentsItems[]
  execution_requests_root: Root
}
type GloasSignedExecutionPayloadBid = { message: GloasExecutionPayloadBid; signature: Signature }
type GloasPayloadAttestationData = {
  beacon_block_root: Root
  slot: Uint64
  payload_present: boolean
  blob_data_available: boolean
}
type GloasPayloadAttestation = {
  aggregation_bits: GloasBeaconStateJustificationBits
  data: GloasPayloadAttestationData
  signature: Signature
}
type GloasBeaconBlock = GloasBeaconBlockAllOf0 & {
  body: {
    randao_reveal: Signature
    eth1_data: GloasBeaconStateEth1Data
    graffiti: Graffiti
    proposer_slashings: Phase0ProposerSlashing[]
    attester_slashings: GloasAttesterSlashing[]
    attestations: GloasAttestation[]
    deposits: GloasBeaconBlockAllOf1BodyDepositsItems[]
    voluntary_exits: Phase0SignedVoluntaryExit[]
    sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
    bls_to_execution_changes: CapellaSignedBLSToExecutionChange[]
    signed_execution_payload_bid: GloasSignedExecutionPayloadBid
    payload_attestations: GloasPayloadAttestation[]
    parent_execution_requests: GloasExecutionPayloadEnvelopeExecutionRequests
  }
}
type GloasSignedBeaconBlock = { message: GloasBeaconBlock; signature: Signature }
type ElectraAttesterSlashingAttestation1 = {
  attesting_indices: Uint64[]
  data: Phase0AttestationData
  signature: Signature
}
type ElectraAttesterSlashing = {
  attestation_1: ElectraAttesterSlashingAttestation1
  attestation_2: ElectraAttesterSlashingAttestation1
}
type ElectraAttestation = {
  aggregation_bits: Phase0BeaconStateCurrentEpochAttestationsItemsAggregationBits
  data: Phase0AttestationData
  signature: Signature
  committee_bits: GloasBeaconStateJustificationBits
}
type ElectraBlindedBeaconBlockAllOf1BodyAllOf0 = {
  randao_reveal: Signature
  eth1_data: GloasBeaconStateEth1Data
  graffiti: Graffiti
  proposer_slashings: Phase0ProposerSlashing[]
  attester_slashings: ElectraAttesterSlashing[]
  attestations: ElectraAttestation[]
  deposits: GloasBeaconBlockAllOf1BodyDepositsItems[]
  voluntary_exits: Phase0SignedVoluntaryExit[]
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  bls_to_execution_changes: CapellaSignedBLSToExecutionChange[]
  blob_kzg_commitments: FuluDataColumnSidecarsItemsKzgCommitmentsItems[]
}
type FuluBeaconStateLatestExecutionPayloadHeaderAllOf0 = {
  parent_hash: GloasBeaconStateLatestBlockHash
  fee_recipient: ExecutionAddress
  state_root: Root
  receipts_root: Root
  logs_bloom: GloasExecutionPayloadLogsBloom
  prev_randao: GloasBeaconStateRandaoMixesItems
  block_number: Uint64
  gas_limit: Uint64
  gas_used: Uint64
  timestamp: Uint64
  extra_data: GloasExecutionPayloadExtraData
  base_fee_per_gas: string
  blob_gas_used: Uint64
  excess_blob_gas: Uint64
  block_hash: GloasBeaconStateLatestBlockHash
}
type CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf1Transactions = string[]
type CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf1Withdrawals = CapellaWithdrawal[]
type FuluBlockContentsBlockAllOf1BodyAllOf1ExecutionPayload =
  FuluBeaconStateLatestExecutionPayloadHeaderAllOf0 & {
    transactions: CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf1Transactions
    withdrawals: CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf1Withdrawals
  }
type ElectraBlindedBeaconBlockAllOf1BodyAllOf1ExecutionRequests = {
  deposits: GloasExecutionPayloadEnvelopeExecutionRequestsDepositsItems[]
  withdrawals: GloasExecutionPayloadEnvelopeExecutionRequestsWithdrawalsItems[]
  consolidations: GloasExecutionPayloadEnvelopeExecutionRequestsConsolidationsItems[]
}
type FuluBlockContentsBlock = GloasBeaconBlockAllOf0 & {
  body: ElectraBlindedBeaconBlockAllOf1BodyAllOf0 & {
    execution_payload: FuluBlockContentsBlockAllOf1BodyAllOf1ExecutionPayload
    execution_requests: ElectraBlindedBeaconBlockAllOf1BodyAllOf1ExecutionRequests
  }
}
type ElectraSignedBeaconBlock = { message: FuluBlockContentsBlock; signature: Signature }
type Phase0AttesterSlashingAttestation1 = {
  attesting_indices: Uint64[]
  data: Phase0AttestationData
  signature: Signature
}
type Phase0AttesterSlashing = {
  attestation_1: Phase0AttesterSlashingAttestation1
  attestation_2: Phase0AttesterSlashingAttestation1
}
type Phase0Attestation = {
  aggregation_bits: Phase0BeaconStateCurrentEpochAttestationsItemsAggregationBits
  data: Phase0AttestationData
  signature: Signature
}
type DenebBlindedBeaconBlockAllOf1BodyAllOf0 = {
  randao_reveal: Signature
  eth1_data: GloasBeaconStateEth1Data
  graffiti: Graffiti
  proposer_slashings: Phase0ProposerSlashing[]
  attester_slashings: Phase0AttesterSlashing[]
  attestations: Phase0Attestation[]
  deposits: GloasBeaconBlockAllOf1BodyDepositsItems[]
  voluntary_exits: Phase0SignedVoluntaryExit[]
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  bls_to_execution_changes: CapellaSignedBLSToExecutionChange[]
  blob_kzg_commitments: FuluDataColumnSidecarsItemsKzgCommitmentsItems[]
}
type DenebBeaconBlock = GloasBeaconBlockAllOf0 & {
  body: DenebBlindedBeaconBlockAllOf1BodyAllOf0 & {
    execution_payload: FuluBlockContentsBlockAllOf1BodyAllOf1ExecutionPayload
  }
}
type DenebSignedBeaconBlock = { message: DenebBeaconBlock; signature: Signature }
type CapellaBeaconBlockAllOf1BodyAllOf0 = {
  randao_reveal: Signature
  eth1_data: GloasBeaconStateEth1Data
  graffiti: Graffiti
  proposer_slashings: Phase0ProposerSlashing[]
  attester_slashings: Phase0AttesterSlashing[]
  attestations: Phase0Attestation[]
  deposits: GloasBeaconBlockAllOf1BodyDepositsItems[]
  voluntary_exits: Phase0SignedVoluntaryExit[]
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  bls_to_execution_changes: CapellaSignedBLSToExecutionChange[]
}
type CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf0 = {
  parent_hash: GloasBeaconStateLatestBlockHash
  fee_recipient: ExecutionAddress
  state_root: Root
  receipts_root: Root
  logs_bloom: GloasExecutionPayloadLogsBloom
  prev_randao: GloasBeaconStateRandaoMixesItems
  block_number: Uint64
  gas_limit: Uint64
  gas_used: Uint64
  timestamp: Uint64
  extra_data: GloasExecutionPayloadExtraData
  base_fee_per_gas: string
  block_hash: GloasBeaconStateLatestBlockHash
}
type CapellaBeaconBlock = GloasBeaconBlockAllOf0 & {
  body: CapellaBeaconBlockAllOf1BodyAllOf0 & {
    execution_payload: CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf0 & {
      transactions: CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf1Transactions
      withdrawals: CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf1Withdrawals
    }
  }
}
type CapellaSignedBeaconBlock = { message: CapellaBeaconBlock; signature: Signature }
type BellatrixBeaconBlockAllOf1BodyAllOf0 = {
  randao_reveal: Signature
  eth1_data: GloasBeaconStateEth1Data
  graffiti: Graffiti
  proposer_slashings: Phase0ProposerSlashing[]
  attester_slashings: Phase0AttesterSlashing[]
  attestations: Phase0Attestation[]
  deposits: GloasBeaconBlockAllOf1BodyDepositsItems[]
  voluntary_exits: Phase0SignedVoluntaryExit[]
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
}
type BellatrixBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf0 = {
  parent_hash: GloasBeaconStateLatestBlockHash
  fee_recipient: ExecutionAddress
  state_root: Root
  receipts_root: Root
  logs_bloom: GloasExecutionPayloadLogsBloom
  prev_randao: GloasBeaconStateRandaoMixesItems
  block_number: Uint64
  gas_limit: Uint64
  gas_used: Uint64
  timestamp: Uint64
  extra_data: GloasExecutionPayloadExtraData
  base_fee_per_gas: string
  block_hash: GloasBeaconStateLatestBlockHash
}
type BellatrixBeaconBlock = GloasBeaconBlockAllOf0 & {
  body: BellatrixBeaconBlockAllOf1BodyAllOf0 & {
    execution_payload: BellatrixBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf0 & {
      transactions: CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf1Transactions
    }
  }
}
type BellatrixSignedBeaconBlock = { message: BellatrixBeaconBlock; signature: Signature }
type AltairBeaconBlock = GloasBeaconBlockAllOf0 & {
  body: {
    randao_reveal: Signature
    eth1_data: GloasBeaconStateEth1Data
    graffiti: Graffiti
    proposer_slashings: Phase0ProposerSlashing[]
    attester_slashings: Phase0AttesterSlashing[]
    attestations: Phase0Attestation[]
    deposits: GloasBeaconBlockAllOf1BodyDepositsItems[]
    voluntary_exits: Phase0SignedVoluntaryExit[]
    sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  }
}
type AltairSignedBeaconBlock = { message: AltairBeaconBlock; signature: Signature }
type Phase0BeaconBlock = Phase0BeaconBlockAllOf0 & {
  body: {
    randao_reveal: Signature
    eth1_data: GloasBeaconStateEth1Data
    graffiti: Graffiti
    proposer_slashings: Phase0ProposerSlashing[]
    attester_slashings: Phase0AttesterSlashing[]
    attestations: Phase0Attestation[]
    deposits: GloasBeaconBlockAllOf1BodyDepositsItems[]
    voluntary_exits: Phase0SignedVoluntaryExit[]
  }
}
type Phase0SignedBeaconBlock = { message: Phase0BeaconBlock; signature: Signature }
type Blob = string
type Blobs = Blob[]
type GloasDataColumnSidecarsItemsColumnItems = string
type GloasSignedExecutionPayloadEnvelopeContentsKzgProofsItems = string
type GloasDataColumnSidecars = {
  index: Uint64
  column: GloasDataColumnSidecarsItemsColumnItems[]
  kzg_proofs: GloasSignedExecutionPayloadEnvelopeContentsKzgProofsItems[]
  slot: Uint64
  beacon_block_root: Root
}[]
type FuluDataColumnSidecars = {
  index: Uint64
  column: GloasDataColumnSidecarsItemsColumnItems[]
  kzg_commitments: FuluDataColumnSidecarsItemsKzgCommitmentsItems[]
  kzg_proofs: GloasSignedExecutionPayloadEnvelopeContentsKzgProofsItems[]
  signed_block_header: Phase0SignedBeaconBlockHeader
  kzg_commitments_inclusion_proof: GloasBeaconStateRandaoMixesItems[]
}[]
type SyncCommitteeRewardsItemsReward = string
type SyncCommitteeRewards = { validator_index: Uint64; reward: SyncCommitteeRewardsItemsReward }[]
type BlockRewards = {
  proposer_index: Uint64
  total: Uint64
  attestations: Uint64
  sync_aggregate: Uint64
  proposer_slashings: Uint64
  attester_slashings: Uint64
}
type AttestationsRewards = {
  ideal_rewards: {
    effective_balance: Uint64
    head: SyncCommitteeRewardsItemsReward
    target: SyncCommitteeRewardsItemsReward
    source: SyncCommitteeRewardsItemsReward
    inclusion_delay?: Uint64 | undefined
    inactivity: SyncCommitteeRewardsItemsReward
  }[]
  total_rewards: {
    validator_index: Uint64
    head: SyncCommitteeRewardsItemsReward
    target: SyncCommitteeRewardsItemsReward
    source: SyncCommitteeRewardsItemsReward
    inclusion_delay?: Uint64 | undefined
    inactivity: SyncCommitteeRewardsItemsReward
  }[]
}
type FuluBeaconStateLatestExecutionPayloadHeader =
  FuluBeaconStateLatestExecutionPayloadHeaderAllOf0 & {
    transactions_root: Root
    withdrawals_root: Root
  }
type ElectraBlindedBeaconBlock = GloasBeaconBlockAllOf0 & {
  body: ElectraBlindedBeaconBlockAllOf1BodyAllOf0 & {
    execution_payload_header: FuluBeaconStateLatestExecutionPayloadHeader
    execution_requests: ElectraBlindedBeaconBlockAllOf1BodyAllOf1ExecutionRequests
  }
}
type ElectraSignedBlindedBeaconBlock = { message: ElectraBlindedBeaconBlock; signature: Signature }
type DenebBlindedBeaconBlock = GloasBeaconBlockAllOf0 & {
  body: DenebBlindedBeaconBlockAllOf1BodyAllOf0 & {
    execution_payload_header: FuluBeaconStateLatestExecutionPayloadHeader
  }
}
type DenebSignedBlindedBeaconBlock = { message: DenebBlindedBeaconBlock; signature: Signature }
type CapellaBeaconStateLatestExecutionPayloadHeader =
  CapellaBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf0 & {
    transactions_root: Root
    withdrawals_root: Root
  }
type CapellaBlindedBeaconBlock = GloasBeaconBlockAllOf0 & {
  body: CapellaBeaconBlockAllOf1BodyAllOf0 & {
    execution_payload_header: CapellaBeaconStateLatestExecutionPayloadHeader
  }
}
type CapellaSignedBlindedBeaconBlock = { message: CapellaBlindedBeaconBlock; signature: Signature }
type BellatrixBeaconStateLatestExecutionPayloadHeader =
  BellatrixBeaconBlockAllOf1BodyAllOf1ExecutionPayloadAllOf0 & { transactions_root: Root }
type BellatrixBlindedBeaconBlock = GloasBeaconBlockAllOf0 & {
  body: BellatrixBeaconBlockAllOf1BodyAllOf0 & {
    execution_payload_header: BellatrixBeaconStateLatestExecutionPayloadHeader
  }
}
type BellatrixSignedBlindedBeaconBlock = {
  message: BellatrixBlindedBeaconBlock
  signature: Signature
}
type GloasLightClientBootstrapHeader = {
  beacon: GloasBeaconStateLatestBlockHeader
  execution_block_hash: GloasBeaconStateLatestBlockHash
  execution_branch: Root[]
}
type GloasBeaconStateNextSyncCommittee = {
  pubkeys: GloasBuilderPreferencesEntryProposerPubkeyAllOf0[]
  aggregate_pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
}
type GloasLightClientBootstrap = {
  header: GloasLightClientBootstrapHeader
  current_sync_committee: GloasBeaconStateNextSyncCommittee
  current_sync_committee_branch: Root[]
}
type ElectraLightClientBootstrapHeaderExecutionBranch = Root[]
type ElectraLightClientBootstrapHeader = {
  beacon: GloasBeaconStateLatestBlockHeader
  execution: FuluBeaconStateLatestExecutionPayloadHeader
  execution_branch: ElectraLightClientBootstrapHeaderExecutionBranch
}
type ElectraLightClientBootstrap = {
  header: ElectraLightClientBootstrapHeader
  current_sync_committee: GloasBeaconStateNextSyncCommittee
  current_sync_committee_branch: Root[]
}
type DenebLightClientBootstrapCurrentSyncCommitteeBranch = Root[]
type DenebLightClientBootstrap = {
  header: ElectraLightClientBootstrapHeader
  current_sync_committee: GloasBeaconStateNextSyncCommittee
  current_sync_committee_branch: DenebLightClientBootstrapCurrentSyncCommitteeBranch
}
type CapellaLightClientBootstrapHeader = {
  beacon: GloasBeaconStateLatestBlockHeader
  execution: CapellaBeaconStateLatestExecutionPayloadHeader
  execution_branch: ElectraLightClientBootstrapHeaderExecutionBranch
}
type CapellaLightClientBootstrap = {
  header: CapellaLightClientBootstrapHeader
  current_sync_committee: GloasBeaconStateNextSyncCommittee
  current_sync_committee_branch: DenebLightClientBootstrapCurrentSyncCommitteeBranch
}
type AltairLightClientBootstrapHeader = { beacon: GloasBeaconStateLatestBlockHeader }
type AltairLightClientBootstrap = {
  header: AltairLightClientBootstrapHeader
  current_sync_committee: GloasBeaconStateNextSyncCommittee
  current_sync_committee_branch: DenebLightClientBootstrapCurrentSyncCommitteeBranch
}
type GloasLightClientFinalityUpdateFinalityBranch = Root[]
type GloasLightClientUpdate = {
  attested_header: GloasLightClientBootstrapHeader
  next_sync_committee: GloasBeaconStateNextSyncCommittee
  next_sync_committee_branch: Root[]
  finalized_header: GloasLightClientBootstrapHeader
  finality_branch: GloasLightClientFinalityUpdateFinalityBranch
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  signature_slot: Uint64
}
type ElectraLightClientFinalityUpdateFinalityBranch = Root[]
type ElectraLightClientUpdate = {
  attested_header: ElectraLightClientBootstrapHeader
  next_sync_committee: GloasBeaconStateNextSyncCommittee
  next_sync_committee_branch: Root[]
  finalized_header: ElectraLightClientBootstrapHeader
  finality_branch: ElectraLightClientFinalityUpdateFinalityBranch
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  signature_slot: Uint64
}
type DenebLightClientUpdateNextSyncCommitteeBranch = Root[]
type DenebLightClientFinalityUpdateFinalityBranch = Root[]
type DenebLightClientUpdate = {
  attested_header: ElectraLightClientBootstrapHeader
  next_sync_committee: GloasBeaconStateNextSyncCommittee
  next_sync_committee_branch: DenebLightClientUpdateNextSyncCommitteeBranch
  finalized_header: ElectraLightClientBootstrapHeader
  finality_branch: DenebLightClientFinalityUpdateFinalityBranch
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  signature_slot: Uint64
}
type CapellaLightClientUpdate = {
  attested_header: CapellaLightClientBootstrapHeader
  next_sync_committee: GloasBeaconStateNextSyncCommittee
  next_sync_committee_branch: DenebLightClientUpdateNextSyncCommitteeBranch
  finalized_header: CapellaLightClientBootstrapHeader
  finality_branch: DenebLightClientFinalityUpdateFinalityBranch
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  signature_slot: Uint64
}
type AltairLightClientUpdate = {
  attested_header: AltairLightClientBootstrapHeader
  next_sync_committee: GloasBeaconStateNextSyncCommittee
  next_sync_committee_branch: DenebLightClientUpdateNextSyncCommitteeBranch
  finalized_header: AltairLightClientBootstrapHeader
  finality_branch: DenebLightClientFinalityUpdateFinalityBranch
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  signature_slot: Uint64
}
type GloasLightClientFinalityUpdate = {
  attested_header: GloasLightClientBootstrapHeader
  finalized_header: GloasLightClientBootstrapHeader
  finality_branch: GloasLightClientFinalityUpdateFinalityBranch
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  signature_slot: Uint64
}
type ElectraLightClientFinalityUpdate = {
  attested_header: ElectraLightClientBootstrapHeader
  finalized_header: ElectraLightClientBootstrapHeader
  finality_branch: ElectraLightClientFinalityUpdateFinalityBranch
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  signature_slot: Uint64
}
type DenebLightClientFinalityUpdate = {
  attested_header: ElectraLightClientBootstrapHeader
  finalized_header: ElectraLightClientBootstrapHeader
  finality_branch: DenebLightClientFinalityUpdateFinalityBranch
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  signature_slot: Uint64
}
type CapellaLightClientFinalityUpdate = {
  attested_header: CapellaLightClientBootstrapHeader
  finalized_header: CapellaLightClientBootstrapHeader
  finality_branch: DenebLightClientFinalityUpdateFinalityBranch
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  signature_slot: Uint64
}
type AltairLightClientFinalityUpdate = {
  attested_header: AltairLightClientBootstrapHeader
  finalized_header: AltairLightClientBootstrapHeader
  finality_branch: DenebLightClientFinalityUpdateFinalityBranch
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  signature_slot: Uint64
}
type GloasLightClientOptimisticUpdate = {
  attested_header: GloasLightClientBootstrapHeader
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  signature_slot: Uint64
}
type ElectraLightClientOptimisticUpdate = {
  attested_header: ElectraLightClientBootstrapHeader
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  signature_slot: Uint64
}
type DenebLightClientOptimisticUpdate = {
  attested_header: ElectraLightClientBootstrapHeader
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  signature_slot: Uint64
}
type CapellaLightClientOptimisticUpdate = {
  attested_header: CapellaLightClientBootstrapHeader
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  signature_slot: Uint64
}
type AltairLightClientOptimisticUpdate = {
  attested_header: AltairLightClientBootstrapHeader
  sync_aggregate: GloasLightClientFinalityUpdateSyncAggregate
  signature_slot: Uint64
}
type ElectraSingleAttestationInput = {
  committee_index: Uint64Input
  attester_index: Uint64Input
  data: Phase0AttestationDataInput
  signature: SignatureInput
}
type IndexedErrorMessage = {
  code: number
  message: string
  failures: { index: number; message: string }[]
}
type GloasPayloadAttestationMessageInput = {
  validator_index: Uint64Input
  data: GloasPayloadAttestationDataInput
  signature: SignatureInput
}
type AltairSyncCommitteeSignatureInput = {
  slot: Uint64Input
  beacon_block_root: RootInput
  validator_index: Uint64Input
  signature: SignatureInput
}
type GloasBeaconStateHistoricalSummariesItems = {
  block_summary_root: Root
  state_summary_root: Root
}
type GloasBeaconState = {
  genesis_time: Uint64
  genesis_validators_root: Root
  slot: Uint64
  fork: Fork
  latest_block_header: GloasBeaconStateLatestBlockHeader
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: GloasBeaconStateEth1Data
  eth1_data_votes: GloasBeaconStateEth1Data[]
  eth1_deposit_index: Uint64
  validators: ValidatorResponseValidator[]
  balances: Uint64[]
  randao_mixes: GloasBeaconStateRandaoMixesItems[]
  slashings: Uint64[]
  previous_epoch_participation: GloasBeaconStateCurrentEpochParticipationItems[]
  current_epoch_participation: GloasBeaconStateCurrentEpochParticipationItems[]
  justification_bits: GloasBeaconStateJustificationBits
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  inactivity_scores: Uint64[]
  current_sync_committee: GloasBeaconStateNextSyncCommittee
  next_sync_committee: GloasBeaconStateNextSyncCommittee
  latest_block_hash: GloasBeaconStateLatestBlockHash
  next_withdrawal_index: Uint64
  next_withdrawal_validator_index: Uint64
  historical_summaries: GloasBeaconStateHistoricalSummariesItems[]
  deposit_requests_start_index: Uint64
  deposit_balance_to_consume: Uint64
  exit_balance_to_consume: Uint64
  earliest_exit_epoch: Uint64
  consolidation_balance_to_consume: Uint64
  earliest_consolidation_epoch: Uint64
  pending_deposits: GloasPendingDeposits
  pending_partial_withdrawals: GloasPendingPartialWithdrawals
  pending_consolidations: GloasPendingConsolidations
  proposer_lookahead: Uint64[]
  builders: GloasBuilder[]
  next_withdrawal_builder_index: Uint64
  execution_payload_availability: GloasBeaconStateJustificationBits
  builder_pending_payments: GloasBuilderPendingPayments
  builder_pending_withdrawals: GloasBuilderPendingWithdrawals
  latest_execution_payload_bid: GloasExecutionPayloadBid
  payload_expected_withdrawals: CapellaWithdrawal[]
  ptc_window: GloasPayloadTimelinessCommittee[]
}
type FuluBeaconStateCurrentEpochParticipation = GloasBeaconStateCurrentEpochParticipationItems[]
type FuluBeaconState = {
  genesis_time: Uint64
  genesis_validators_root: Root
  slot: Uint64
  fork: Fork
  latest_block_header: GloasBeaconStateLatestBlockHeader
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: GloasBeaconStateEth1Data
  eth1_data_votes: GloasBeaconStateEth1Data[]
  eth1_deposit_index: Uint64
  validators: ValidatorResponseValidator[]
  balances: Uint64[]
  randao_mixes: GloasBeaconStateRandaoMixesItems[]
  slashings: Uint64[]
  previous_epoch_participation: FuluBeaconStateCurrentEpochParticipation
  current_epoch_participation: FuluBeaconStateCurrentEpochParticipation
  justification_bits: GloasBeaconStateJustificationBits
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  inactivity_scores: Uint64[]
  current_sync_committee: GloasBeaconStateNextSyncCommittee
  next_sync_committee: GloasBeaconStateNextSyncCommittee
  latest_execution_payload_header: FuluBeaconStateLatestExecutionPayloadHeader
  next_withdrawal_index: Uint64
  next_withdrawal_validator_index: Uint64
  historical_summaries: GloasBeaconStateHistoricalSummariesItems[]
  deposit_requests_start_index: Uint64
  deposit_balance_to_consume: Uint64
  exit_balance_to_consume: Uint64
  earliest_exit_epoch: Uint64
  consolidation_balance_to_consume: Uint64
  earliest_consolidation_epoch: Uint64
  pending_deposits: ElectraPendingDeposits
  pending_partial_withdrawals: ElectraPendingPartialWithdrawals
  pending_consolidations: ElectraPendingConsolidations
  proposer_lookahead: Uint64[]
}
type ElectraBeaconState = {
  genesis_time: Uint64
  genesis_validators_root: Root
  slot: Uint64
  fork: Fork
  latest_block_header: GloasBeaconStateLatestBlockHeader
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: GloasBeaconStateEth1Data
  eth1_data_votes: GloasBeaconStateEth1Data[]
  eth1_deposit_index: Uint64
  validators: ValidatorResponseValidator[]
  balances: Uint64[]
  randao_mixes: GloasBeaconStateRandaoMixesItems[]
  slashings: Uint64[]
  previous_epoch_participation: FuluBeaconStateCurrentEpochParticipation
  current_epoch_participation: FuluBeaconStateCurrentEpochParticipation
  justification_bits: GloasBeaconStateJustificationBits
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  inactivity_scores: Uint64[]
  current_sync_committee: GloasBeaconStateNextSyncCommittee
  next_sync_committee: GloasBeaconStateNextSyncCommittee
  latest_execution_payload_header: FuluBeaconStateLatestExecutionPayloadHeader
  next_withdrawal_index: Uint64
  next_withdrawal_validator_index: Uint64
  historical_summaries: GloasBeaconStateHistoricalSummariesItems[]
  deposit_requests_start_index: Uint64
  deposit_balance_to_consume: Uint64
  exit_balance_to_consume: Uint64
  earliest_exit_epoch: Uint64
  consolidation_balance_to_consume: Uint64
  earliest_consolidation_epoch: Uint64
  pending_deposits: ElectraPendingDeposits
  pending_partial_withdrawals: ElectraPendingPartialWithdrawals
  pending_consolidations: ElectraPendingConsolidations
}
type DenebBeaconState = {
  genesis_time: Uint64
  genesis_validators_root: Root
  slot: Uint64
  fork: Fork
  latest_block_header: GloasBeaconStateLatestBlockHeader
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: GloasBeaconStateEth1Data
  eth1_data_votes: GloasBeaconStateEth1Data[]
  eth1_deposit_index: Uint64
  validators: ValidatorResponseValidator[]
  balances: Uint64[]
  randao_mixes: GloasBeaconStateRandaoMixesItems[]
  slashings: Uint64[]
  previous_epoch_participation: FuluBeaconStateCurrentEpochParticipation
  current_epoch_participation: FuluBeaconStateCurrentEpochParticipation
  justification_bits: GloasBeaconStateJustificationBits
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  inactivity_scores: Uint64[]
  current_sync_committee: GloasBeaconStateNextSyncCommittee
  next_sync_committee: GloasBeaconStateNextSyncCommittee
  latest_execution_payload_header: FuluBeaconStateLatestExecutionPayloadHeader
  next_withdrawal_index: Uint64
  next_withdrawal_validator_index: Uint64
  historical_summaries: GloasBeaconStateHistoricalSummariesItems[]
}
type CapellaBeaconState = {
  genesis_time: Uint64
  genesis_validators_root: Root
  slot: Uint64
  fork: Fork
  latest_block_header: GloasBeaconStateLatestBlockHeader
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: GloasBeaconStateEth1Data
  eth1_data_votes: GloasBeaconStateEth1Data[]
  eth1_deposit_index: Uint64
  validators: ValidatorResponseValidator[]
  balances: Uint64[]
  randao_mixes: GloasBeaconStateRandaoMixesItems[]
  slashings: Uint64[]
  previous_epoch_participation: FuluBeaconStateCurrentEpochParticipation
  current_epoch_participation: FuluBeaconStateCurrentEpochParticipation
  justification_bits: GloasBeaconStateJustificationBits
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  inactivity_scores: Uint64[]
  current_sync_committee: GloasBeaconStateNextSyncCommittee
  next_sync_committee: GloasBeaconStateNextSyncCommittee
  latest_execution_payload_header: CapellaBeaconStateLatestExecutionPayloadHeader
  next_withdrawal_index: Uint64
  next_withdrawal_validator_index: Uint64
  historical_summaries: GloasBeaconStateHistoricalSummariesItems[]
}
type BellatrixBeaconState = {
  genesis_time: Uint64
  genesis_validators_root: Root
  slot: Uint64
  fork: Fork
  latest_block_header: GloasBeaconStateLatestBlockHeader
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: GloasBeaconStateEth1Data
  eth1_data_votes: GloasBeaconStateEth1Data[]
  eth1_deposit_index: Uint64
  validators: ValidatorResponseValidator[]
  balances: Uint64[]
  randao_mixes: GloasBeaconStateRandaoMixesItems[]
  slashings: Uint64[]
  previous_epoch_participation: FuluBeaconStateCurrentEpochParticipation
  current_epoch_participation: FuluBeaconStateCurrentEpochParticipation
  justification_bits: GloasBeaconStateJustificationBits
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  inactivity_scores: Uint64[]
  current_sync_committee: GloasBeaconStateNextSyncCommittee
  next_sync_committee: GloasBeaconStateNextSyncCommittee
  latest_execution_payload_header: BellatrixBeaconStateLatestExecutionPayloadHeader
}
type AltairBeaconState = {
  genesis_time: Uint64
  genesis_validators_root: Root
  slot: Uint64
  fork: Fork
  latest_block_header: GloasBeaconStateLatestBlockHeader
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: GloasBeaconStateEth1Data
  eth1_data_votes: GloasBeaconStateEth1Data[]
  eth1_deposit_index: Uint64
  validators: ValidatorResponseValidator[]
  balances: Uint64[]
  randao_mixes: GloasBeaconStateRandaoMixesItems[]
  slashings: Uint64[]
  previous_epoch_participation: FuluBeaconStateCurrentEpochParticipation
  current_epoch_participation: FuluBeaconStateCurrentEpochParticipation
  justification_bits: GloasBeaconStateJustificationBits
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  inactivity_scores: Uint64[]
  current_sync_committee: GloasBeaconStateNextSyncCommittee
  next_sync_committee: GloasBeaconStateNextSyncCommittee
}
type Phase0BeaconStateCurrentEpochAttestationsItems = {
  aggregation_bits: Phase0BeaconStateCurrentEpochAttestationsItemsAggregationBits
  data: Phase0AttestationData
  inclusion_delay: Uint64
  proposer_index: Uint64
}
type Phase0BeaconState = {
  genesis_time: Uint64
  genesis_validators_root: Root
  slot: Uint64
  fork: Fork
  latest_block_header: GloasBeaconStateLatestBlockHeader
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: GloasBeaconStateEth1Data
  eth1_data_votes: GloasBeaconStateEth1Data[]
  eth1_deposit_index: Uint64
  validators: ValidatorResponseValidator[]
  balances: Uint64[]
  randao_mixes: GloasBeaconStateRandaoMixesItems[]
  slashings: Uint64[]
  previous_epoch_attestations: Phase0BeaconStateCurrentEpochAttestationsItems[]
  current_epoch_attestations: Phase0BeaconStateCurrentEpochAttestationsItems[]
  justification_bits: GloasBeaconStateJustificationBits
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
}
type ExtraData = { [key: string]: unknown }
type Node = {
  slot: Uint64
  block_root: Root
  parent_root: Root
  justified_epoch: Uint64
  finalized_epoch: Uint64
  weight: Uint64
  validity: 'valid' | 'invalid' | 'optimistic'
  execution_block_hash: GloasBeaconStateLatestBlockHash
  extra_data?: ExtraData | undefined
}
type NodeV2 = {
  slot: Uint64
  block_root: Root
  payload_status: 'pending' | 'empty' | 'full'
  parent_root: Root
  parent_payload_status: null | 'pending' | 'empty' | 'full'
  justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  weight: Uint64
  validity: 'valid' | 'invalid' | 'optimistic'
  execution_block_hash: GloasBeaconStateLatestBlockHash
  payload_attester_count: Uint64
  payload_availability_yes_count: Uint64
  payload_data_availability_yes_count: Uint64
  extra_data: ExtraData
}
type PeerId = string
type NetworkIdentityEnr = string
type NetworkIdentityP2pAddressesItems = string
type NetworkIdentity = {
  peer_id: PeerId
  enr: NetworkIdentityEnr
  p2p_addresses: NetworkIdentityP2pAddressesItems[]
  discovery_addresses: NetworkIdentityP2pAddressesItems[]
  metadata: {
    seq_number: Uint64
    attnets: GloasBeaconStateJustificationBits
    syncnets?: GloasBeaconStateJustificationBits | undefined
    custody_group_count?: Uint64 | undefined
  }
}
type PeerConnectionState = 'disconnected' | 'connecting' | 'connected' | 'disconnecting'
type PeerConnectionDirection = 'inbound' | 'outbound'
type Peer = {
  peer_id: PeerId
  enr: null | NetworkIdentityEnr
  last_seen_p2p_address: NetworkIdentityP2pAddressesItems
  state: PeerConnectionState
  direction: PeerConnectionDirection
}
type PeerIdInput = string
type Version = string
type ClientVersionV1 = {
  code:
    | 'BU'
    | 'CN'
    | 'EJ'
    | 'EG'
    | 'EX'
    | 'GE'
    | 'GR'
    | 'LA'
    | 'LH'
    | 'LS'
    | 'NM'
    | 'NB'
    | 'NE'
    | 'TE'
    | 'TK'
    | 'PM'
    | 'RH'
  name: string
  version: string
  commit: string
}
type DependentRoot = string
type AttesterDuty = {
  pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
  validator_index: Uint64
  committee_index: Uint64
  committee_length: Uint64
  committees_at_slot: Uint64
  validator_committee_index: Uint64
  slot: Uint64
}
type ProposerDuty = {
  pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
  validator_index: Uint64
  slot: Uint64
}
type AltairSyncDuty = {
  pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
  validator_index: Uint64
  validator_sync_committee_indices: Uint64[]
}
type PtcDuty = {
  pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0
  validator_index: Uint64
  slot: Uint64
}
type GloasSignedExecutionPayloadEnvelopeContentsKzgProofs =
  GloasSignedExecutionPayloadEnvelopeContentsKzgProofsItems[]
type FuluBlockContents = {
  block: FuluBlockContentsBlock
  kzg_proofs: GloasSignedExecutionPayloadEnvelopeContentsKzgProofs
  blobs: Blobs
}
type ElectraSignedBlockContentsKzgProofs =
  GloasSignedExecutionPayloadEnvelopeContentsKzgProofsItems[]
type ElectraBlockContents = {
  block: FuluBlockContentsBlock
  kzg_proofs: ElectraSignedBlockContentsKzgProofs
  blobs: Blobs
}
type DenebBlockContents = {
  block: DenebBeaconBlock
  kzg_proofs: ElectraSignedBlockContentsKzgProofs
  blobs: Blobs
}
type GloasBuilderRequestAuthInput = { data: string; slot: Uint64Input }
type GloasSignedBuilderRequestAuthInput = {
  message: GloasBuilderRequestAuthInput
  signature: SignatureInput
}
type GloasBuilderEntryInput = {
  url: string
  auth: GloasSignedBuilderRequestAuthInput
  builder_pubkeys: GloasBuilderPreferencesEntryProposerPubkeyAllOf0Input[]
  max_execution_payment: Uint64Input
  min_bid: Uint64Input
  builder_boost_factor: Uint64Input
}
type GloasBuilderConfigInput = {
  min_bid: Uint64Input
  builder_boost_factor: Uint64Input
  builders: GloasBuilderEntryInput[]
}
type GloasBlockContents = {
  block: GloasBeaconBlock
  execution_payload_envelope: GloasExecutionPayloadEnvelope
  kzg_proofs: GloasSignedExecutionPayloadEnvelopeContentsKzgProofs
  blobs: Blobs
}
type GloasSignedAggregateAndProofInput = {
  message: { aggregator_index: Uint64Input; aggregate: GloasAttestationInput } & {
    selection_proof: SignatureInput
  }
  signature: SignatureInput
}
type ElectraSignedAggregateAndProofInput = {
  message: { aggregator_index: Uint64Input; aggregate: ElectraAttestationInput } & {
    selection_proof: SignatureInput
  }
  signature: SignatureInput
}
type Phase0SignedAggregateAndProofInput = {
  message: { aggregator_index: Uint64Input; aggregate: Phase0AttestationInput } & {
    selection_proof: SignatureInput
  }
  signature: SignatureInput
}
type AltairSyncCommitteeSubscriptionInput = {
  validator_index: Uint64Input
  sync_committee_indices: Uint64Input[]
  until_epoch: Uint64Input
}
type BeaconCommitteeSelectionInput = {
  validator_index: Uint64Input
  slot: Uint64Input
  selection_proof: SignatureInput
}
type BeaconCommitteeSelection = {
  validator_index: Uint64
  slot: Uint64
  selection_proof: Signature
}
type AltairSyncCommitteeContribution = {
  slot: Uint64
  beacon_block_root: Root
  subcommittee_index: Uint64
  aggregation_bits: GloasBeaconStateJustificationBits
  signature: Signature
}
type SyncCommitteeSelectionInput = {
  validator_index: Uint64Input
  slot: Uint64Input
  subcommittee_index: Uint64Input
  selection_proof: SignatureInput
}
type SyncCommitteeSelection = {
  validator_index: Uint64
  slot: Uint64
  subcommittee_index: Uint64
  selection_proof: Signature
}
type AltairSyncCommitteeContributionInput = {
  slot: Uint64Input
  beacon_block_root: RootInput
  subcommittee_index: Uint64Input
  aggregation_bits: GloasBeaconStateJustificationBitsInput
  signature: SignatureInput
}
type AltairContributionAndProofInput = {
  aggregator_index: Uint64Input
  selection_proof: SignatureInput
  contribution: AltairSyncCommitteeContributionInput
}
type AltairSignedContributionAndProofInput = {
  message: AltairContributionAndProofInput
  signature: SignatureInput
}
type SignedValidatorRegistrationInput = {
  message: {
    fee_recipient: ExecutionAddressInput
    gas_limit: Uint64Input
    timestamp: Uint64Input
    pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0Input
  }
  signature: SignatureInput
}
type GloasProposerPreferencesInput = {
  dependent_root: RootInput
  proposal_slot: Uint64Input
  validator_index: Uint64Input
  fee_recipient: ExecutionAddressInput
  target_gas_limit: Uint64Input
}
type GloasSignedProposerPreferencesInput = {
  message: GloasProposerPreferencesInput
  signature: SignatureInput
}
type GloasBuilderPreferencesEntryInput = {
  proposer_pubkey: GloasBuilderPreferencesEntryProposerPubkeyAllOf0Input
  url: string
  auth: GloasSignedBuilderRequestAuthInput
  max_execution_payment: Uint64Input
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/eth/v1/beacon/genesis': {
      $get:
        | {
            input: {}
            output: {
              data: {
                genesis_time: GenesisTime
                genesis_validators_root: Root
                genesis_fork_version: ForkVersion
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 404 }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/root': {
      $get:
        | {
            input: { param: { state_id: string } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: { root: Root }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/fork': {
      $get:
        | {
            input: { param: { state_id: string } }
            output: { execution_optimistic: ExecutionOptimistic; finalized: Finalized; data: Fork }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/finality_checkpoints': {
      $get:
        | {
            input: { param: { state_id: string } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: {
                previous_justified: Checkpoint
                current_justified: Checkpoint
                finalized: Checkpoint
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/validators': {
      $get:
        | {
            input: { param: { state_id: string } } & { query: { id?: unknown; status?: unknown } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: ValidatorResponse[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: unknown; status?: unknown } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: unknown; status?: unknown } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: unknown; status?: unknown } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: unknown; status?: unknown } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { state_id: string } } & {
              json: {
                ids?: string[]
                statuses?: (ValidatorStatusInput | 'active' | 'pending' | 'exited' | 'withdrawal')[]
              }
            }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: ValidatorResponse[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & {
              json: {
                ids?: string[]
                statuses?: (ValidatorStatusInput | 'active' | 'pending' | 'exited' | 'withdrawal')[]
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & {
              json: {
                ids?: string[]
                statuses?: (ValidatorStatusInput | 'active' | 'pending' | 'exited' | 'withdrawal')[]
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & {
              json: {
                ids?: string[]
                statuses?: (ValidatorStatusInput | 'active' | 'pending' | 'exited' | 'withdrawal')[]
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/validators/:validator_id': {
      $get:
        | {
            input: { param: { state_id: string; validator_id: string } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: ValidatorResponse
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string; validator_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string; validator_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string; validator_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/validator_balances': {
      $get:
        | {
            input: { param: { state_id: string } } & { query: { id?: unknown } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: ValidatorBalanceResponse[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: unknown } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: unknown } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: unknown } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: unknown } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: unknown } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { state_id: string } } & { json: string[] }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: ValidatorBalanceResponse[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { json: string[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & { json: string[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & { json: string[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { state_id: string } } & { json: string[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/validator_identities': {
      $post:
        | {
            input: { param: { state_id: string } } & { json: string[] }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: ValidatorIdentityResponse[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { json: string[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & { json: string[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & { json: string[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { state_id: string } } & { json: string[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/builders': {
      $post:
        | {
            input: { param: { state_id: string } } & {
              json: { ids?: string[]; statuses?: BuilderStatusInput[] }
            }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: BuilderResponse[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & {
              json: { ids?: string[]; statuses?: BuilderStatusInput[] }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & {
              json: { ids?: string[]; statuses?: BuilderStatusInput[] }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & {
              json: { ids?: string[]; statuses?: BuilderStatusInput[] }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/committees': {
      $get:
        | {
            input: { param: { state_id: string } } & {
              query: { epoch?: Uint64Input; index?: Uint64Input; slot?: Uint64Input }
            }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: Committee[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & {
              query: { epoch?: Uint64Input; index?: Uint64Input; slot?: Uint64Input }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & {
              query: { epoch?: Uint64Input; index?: Uint64Input; slot?: Uint64Input }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & {
              query: { epoch?: Uint64Input; index?: Uint64Input; slot?: Uint64Input }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/sync_committees': {
      $get:
        | {
            input: { param: { state_id: string } } & { query: { epoch?: Uint64Input } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: AltairSyncCommittee
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { query: { epoch?: Uint64Input } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & { query: { epoch?: Uint64Input } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & { query: { epoch?: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/ptc': {
      $get:
        | {
            input: { param: { state_id: string } } & { query: { slot?: Uint64Input } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: { slot: Uint64; validators: GloasPayloadTimelinessCommittee }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { query: { slot?: Uint64Input } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { query: { slot?: Uint64Input } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & { query: { slot?: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & { query: { slot?: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { state_id: string } } & { query: { slot?: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/randao': {
      $get:
        | {
            input: { param: { state_id: string } } & { query: { epoch?: Uint64Input } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: { randao: Root }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { query: { epoch?: Uint64Input } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & { query: { epoch?: Uint64Input } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & { query: { epoch?: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/pending_consolidations': {
      $get:
        | {
            input: { param: { state_id: string } }
            output: {
              version: ConsensusVersion
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: GloasPendingConsolidations | ElectraPendingConsolidations
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { state_id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/pending_deposits': {
      $get:
        | {
            input: { param: { state_id: string } }
            output: {
              version: ConsensusVersion
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: GloasPendingDeposits | ElectraPendingDeposits
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { state_id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/pending_partial_withdrawals': {
      $get:
        | {
            input: { param: { state_id: string } }
            output: {
              version: ConsensusVersion
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: GloasPendingPartialWithdrawals | ElectraPendingPartialWithdrawals
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { state_id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/proposer_lookahead': {
      $get:
        | {
            input: { param: { state_id: string } }
            output: {
              version: ConsensusVersion
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: Uint64[]
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { state_id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/builder_pending_withdrawals': {
      $get:
        | {
            input: { param: { state_id: string } }
            output: {
              version: ConsensusVersion
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: GloasBuilderPendingWithdrawals
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { state_id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/builder_pending_payments': {
      $get:
        | {
            input: { param: { state_id: string } }
            output: {
              version: ConsensusVersion
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: GloasBuilderPendingPayments
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { state_id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/headers': {
      $get:
        | {
            input: { query: { slot?: Uint64Input; parent_root?: RootInput } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: { root: Root; canonical: boolean; header: Phase0SignedBeaconBlockHeader }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { slot?: Uint64Input; parent_root?: RootInput } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { slot?: Uint64Input; parent_root?: RootInput } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/headers/:block_id': {
      $get:
        | {
            input: { param: { block_id: string } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: { root: Root; canonical: boolean; header: Phase0SignedBeaconBlockHeader }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { block_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { block_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { block_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v2/beacon/blinded_blocks': {
      $post:
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: {
                'Eth-Consensus-Version':
                  | 'phase0'
                  | 'altair'
                  | 'bellatrix'
                  | 'capella'
                  | 'deneb'
                  | 'electra'
                  | 'fulu'
              }
            } & {
              json:
                | ElectraSignedBlindedBeaconBlockInput
                | DenebSignedBlindedBeaconBlockInput
                | CapellaSignedBlindedBeaconBlockInput
                | BellatrixSignedBlindedBeaconBlockInput
                | AltairSignedBeaconBlockInput
                | Phase0SignedBeaconBlockInput
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: {
                'Eth-Consensus-Version':
                  | 'phase0'
                  | 'altair'
                  | 'bellatrix'
                  | 'capella'
                  | 'deneb'
                  | 'electra'
                  | 'fulu'
              }
            } & {
              json:
                | ElectraSignedBlindedBeaconBlockInput
                | DenebSignedBlindedBeaconBlockInput
                | CapellaSignedBlindedBeaconBlockInput
                | BellatrixSignedBlindedBeaconBlockInput
                | AltairSignedBeaconBlockInput
                | Phase0SignedBeaconBlockInput
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: {
                'Eth-Consensus-Version':
                  | 'phase0'
                  | 'altair'
                  | 'bellatrix'
                  | 'capella'
                  | 'deneb'
                  | 'electra'
                  | 'fulu'
              }
            } & {
              json:
                | ElectraSignedBlindedBeaconBlockInput
                | DenebSignedBlindedBeaconBlockInput
                | CapellaSignedBlindedBeaconBlockInput
                | BellatrixSignedBlindedBeaconBlockInput
                | AltairSignedBeaconBlockInput
                | Phase0SignedBeaconBlockInput
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: {
                'Eth-Consensus-Version':
                  | 'phase0'
                  | 'altair'
                  | 'bellatrix'
                  | 'capella'
                  | 'deneb'
                  | 'electra'
                  | 'fulu'
              }
            } & {
              json:
                | ElectraSignedBlindedBeaconBlockInput
                | DenebSignedBlindedBeaconBlockInput
                | CapellaSignedBlindedBeaconBlockInput
                | BellatrixSignedBlindedBeaconBlockInput
                | AltairSignedBeaconBlockInput
                | Phase0SignedBeaconBlockInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: {
                'Eth-Consensus-Version':
                  | 'phase0'
                  | 'altair'
                  | 'bellatrix'
                  | 'capella'
                  | 'deneb'
                  | 'electra'
                  | 'fulu'
              }
            } & {
              json:
                | ElectraSignedBlindedBeaconBlockInput
                | DenebSignedBlindedBeaconBlockInput
                | CapellaSignedBlindedBeaconBlockInput
                | BellatrixSignedBlindedBeaconBlockInput
                | AltairSignedBeaconBlockInput
                | Phase0SignedBeaconBlockInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: {
                'Eth-Consensus-Version':
                  | 'phase0'
                  | 'altair'
                  | 'bellatrix'
                  | 'capella'
                  | 'deneb'
                  | 'electra'
                  | 'fulu'
              }
            } & {
              json:
                | ElectraSignedBlindedBeaconBlockInput
                | DenebSignedBlindedBeaconBlockInput
                | CapellaSignedBlindedBeaconBlockInput
                | BellatrixSignedBlindedBeaconBlockInput
                | AltairSignedBeaconBlockInput
                | Phase0SignedBeaconBlockInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v2/beacon/blocks': {
      $post:
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: { 'Eth-Consensus-Version': ConsensusVersionInput; 'Eth-Builder-Url'?: string }
            } & {
              json:
                | GloasSignedBeaconBlockInput
                | FuluSignedBlockContentsInput
                | ElectraSignedBlockContentsInput
                | DenebSignedBlockContentsInput
                | CapellaSignedBeaconBlockInput
                | BellatrixSignedBeaconBlockInput
                | AltairSignedBeaconBlockInput
                | Phase0SignedBeaconBlockInput
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: { 'Eth-Consensus-Version': ConsensusVersionInput; 'Eth-Builder-Url'?: string }
            } & {
              json:
                | GloasSignedBeaconBlockInput
                | FuluSignedBlockContentsInput
                | ElectraSignedBlockContentsInput
                | DenebSignedBlockContentsInput
                | CapellaSignedBeaconBlockInput
                | BellatrixSignedBeaconBlockInput
                | AltairSignedBeaconBlockInput
                | Phase0SignedBeaconBlockInput
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: { 'Eth-Consensus-Version': ConsensusVersionInput; 'Eth-Builder-Url'?: string }
            } & {
              json:
                | GloasSignedBeaconBlockInput
                | FuluSignedBlockContentsInput
                | ElectraSignedBlockContentsInput
                | DenebSignedBlockContentsInput
                | CapellaSignedBeaconBlockInput
                | BellatrixSignedBeaconBlockInput
                | AltairSignedBeaconBlockInput
                | Phase0SignedBeaconBlockInput
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: { 'Eth-Consensus-Version': ConsensusVersionInput; 'Eth-Builder-Url'?: string }
            } & {
              json:
                | GloasSignedBeaconBlockInput
                | FuluSignedBlockContentsInput
                | ElectraSignedBlockContentsInput
                | DenebSignedBlockContentsInput
                | CapellaSignedBeaconBlockInput
                | BellatrixSignedBeaconBlockInput
                | AltairSignedBeaconBlockInput
                | Phase0SignedBeaconBlockInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: { 'Eth-Consensus-Version': ConsensusVersionInput; 'Eth-Builder-Url'?: string }
            } & {
              json:
                | GloasSignedBeaconBlockInput
                | FuluSignedBlockContentsInput
                | ElectraSignedBlockContentsInput
                | DenebSignedBlockContentsInput
                | CapellaSignedBeaconBlockInput
                | BellatrixSignedBeaconBlockInput
                | AltairSignedBeaconBlockInput
                | Phase0SignedBeaconBlockInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: { 'Eth-Consensus-Version': ConsensusVersionInput; 'Eth-Builder-Url'?: string }
            } & {
              json:
                | GloasSignedBeaconBlockInput
                | FuluSignedBlockContentsInput
                | ElectraSignedBlockContentsInput
                | DenebSignedBlockContentsInput
                | CapellaSignedBeaconBlockInput
                | BellatrixSignedBeaconBlockInput
                | AltairSignedBeaconBlockInput
                | Phase0SignedBeaconBlockInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/beacon/execution_payload_bids': {
      $post:
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasSignedExecutionPayloadBidInput
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasSignedExecutionPayloadBidInput
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasSignedExecutionPayloadBidInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasSignedExecutionPayloadBidInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/execution_payload_envelopes': {
      $post:
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersionInput
                'Eth-Blob-Data-Included': string
              }
            } & {
              json:
                | GloasSignedExecutionPayloadEnvelopeContentsInput
                | GloasSignedExecutionPayloadEnvelopeInput
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersionInput
                'Eth-Blob-Data-Included': string
              }
            } & {
              json:
                | GloasSignedExecutionPayloadEnvelopeContentsInput
                | GloasSignedExecutionPayloadEnvelopeInput
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersionInput
                'Eth-Blob-Data-Included': string
              }
            } & {
              json:
                | GloasSignedExecutionPayloadEnvelopeContentsInput
                | GloasSignedExecutionPayloadEnvelopeInput
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersionInput
                'Eth-Blob-Data-Included': string
              }
            } & {
              json:
                | GloasSignedExecutionPayloadEnvelopeContentsInput
                | GloasSignedExecutionPayloadEnvelopeInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersionInput
                'Eth-Blob-Data-Included': string
              }
            } & {
              json:
                | GloasSignedExecutionPayloadEnvelopeContentsInput
                | GloasSignedExecutionPayloadEnvelopeInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidationInput } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersionInput
                'Eth-Blob-Data-Included': string
              }
            } & {
              json:
                | GloasSignedExecutionPayloadEnvelopeContentsInput
                | GloasSignedExecutionPayloadEnvelopeInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/beacon/execution_payload_envelopes/:block_id': {
      $get:
        | {
            input: { param: { block_id: string } }
            output: {
              version: 'gloas'
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: GloasSignedExecutionPayloadEnvelope
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { block_id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { block_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { block_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { block_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { block_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/proposer_preferences': {
      $get:
        | {
            input: { query: { slot?: Uint64Input; dependent_root?: RootInput } }
            output: { version: 'gloas'; data: GloasSignedProposerPreferences[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { slot?: Uint64Input; dependent_root?: RootInput } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { slot?: Uint64Input; dependent_root?: RootInput } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { slot?: Uint64Input; dependent_root?: RootInput } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v2/beacon/blocks/:block_id': {
      $get:
        | {
            input: { param: { block_id: string } }
            output: {
              version:
                | 'phase0'
                | 'altair'
                | 'bellatrix'
                | 'capella'
                | 'deneb'
                | 'electra'
                | 'fulu'
                | 'gloas'
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data:
                | GloasSignedBeaconBlock
                | ElectraSignedBeaconBlock
                | DenebSignedBeaconBlock
                | CapellaSignedBeaconBlock
                | BellatrixSignedBeaconBlock
                | AltairSignedBeaconBlock
                | Phase0SignedBeaconBlock
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { block_id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { block_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { block_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { block_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { block_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/blocks/:block_id/root': {
      $get:
        | {
            input: { param: { block_id: string } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: { root: Root }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { block_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { block_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { block_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v2/beacon/blocks/:block_id/attestations': {
      $get:
        | {
            input: { param: { block_id: string } }
            output: {
              version:
                | 'phase0'
                | 'altair'
                | 'bellatrix'
                | 'capella'
                | 'deneb'
                | 'electra'
                | 'fulu'
                | 'gloas'
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: GloasAttestation[] | ElectraAttestation[] | Phase0Attestation[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { block_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { block_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { block_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/blobs/:block_id': {
      $get:
        | {
            input: { param: { block_id: string } } & { query: { versioned_hashes?: unknown } }
            output: { execution_optimistic: ExecutionOptimistic; finalized: Finalized; data: Blobs }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { block_id: string } } & { query: { versioned_hashes?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { block_id: string } } & { query: { versioned_hashes?: unknown } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { block_id: string } } & { query: { versioned_hashes?: unknown } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { block_id: string } } & { query: { versioned_hashes?: unknown } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { block_id: string } } & { query: { versioned_hashes?: unknown } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/debug/beacon/data_column_sidecars/:block_id': {
      $get:
        | {
            input: { param: { block_id: string } } & { query: { indices?: unknown } }
            output: {
              version: 'fulu' | 'gloas'
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: GloasDataColumnSidecars | FuluDataColumnSidecars
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { block_id: string } } & { query: { indices?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { block_id: string } } & { query: { indices?: unknown } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { block_id: string } } & { query: { indices?: unknown } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { block_id: string } } & { query: { indices?: unknown } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { block_id: string } } & { query: { indices?: unknown } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/rewards/sync_committee/:block_id': {
      $post:
        | {
            input: { param: { block_id: string } } & { json: string[] }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: SyncCommitteeRewards
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { block_id: string } } & { json: string[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { block_id: string } } & { json: string[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { block_id: string } } & { json: string[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/rewards/blocks/:block_id': {
      $get:
        | {
            input: { param: { block_id: string } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: BlockRewards
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { block_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { block_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { block_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/rewards/attestations/:epoch': {
      $post:
        | {
            input: { param: { epoch: Uint64Input } } & { json: string[] }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: AttestationsRewards
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epoch: Uint64Input } } & { json: string[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { epoch: Uint64Input } } & { json: string[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { epoch: Uint64Input } } & { json: string[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/blinded_blocks/:block_id': {
      $get:
        | {
            input: { param: { block_id: string } }
            output: {
              version: 'phase0' | 'altair' | 'bellatrix' | 'capella' | 'deneb' | 'electra' | 'fulu'
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data:
                | ElectraSignedBlindedBeaconBlock
                | DenebSignedBlindedBeaconBlock
                | CapellaSignedBlindedBeaconBlock
                | BellatrixSignedBlindedBeaconBlock
                | AltairSignedBeaconBlock
                | Phase0SignedBeaconBlock
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { block_id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { block_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { block_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { block_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { block_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/light_client/bootstrap/:block_root': {
      $get:
        | {
            input: { param: { block_root: RootInput } }
            output: {
              version: ConsensusVersion
              data:
                | GloasLightClientBootstrap
                | ElectraLightClientBootstrap
                | DenebLightClientBootstrap
                | CapellaLightClientBootstrap
                | AltairLightClientBootstrap
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { block_root: RootInput } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { block_root: RootInput } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { block_root: RootInput } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { block_root: RootInput } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { block_root: RootInput } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/light_client/updates': {
      $get:
        | {
            input: { query: { start_period: Uint64Input; count: Uint64Input } }
            output: {
              version: ConsensusVersion
              data:
                | GloasLightClientUpdate
                | ElectraLightClientUpdate
                | DenebLightClientUpdate
                | CapellaLightClientUpdate
                | AltairLightClientUpdate
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start_period: Uint64Input; count: Uint64Input } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { start_period: Uint64Input; count: Uint64Input } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { start_period: Uint64Input; count: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { start_period: Uint64Input; count: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/light_client/finality_update': {
      $get:
        | {
            input: {}
            output: {
              version: ConsensusVersion
              data:
                | GloasLightClientFinalityUpdate
                | ElectraLightClientFinalityUpdate
                | DenebLightClientFinalityUpdate
                | CapellaLightClientFinalityUpdate
                | AltairLightClientFinalityUpdate
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 404 }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/light_client/optimistic_update': {
      $get:
        | {
            input: {}
            output: {
              version: ConsensusVersion
              data:
                | GloasLightClientOptimisticUpdate
                | ElectraLightClientOptimisticUpdate
                | DenebLightClientOptimisticUpdate
                | CapellaLightClientOptimisticUpdate
                | AltairLightClientOptimisticUpdate
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 404 }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v2/beacon/pool/attestations': {
      $get:
        | {
            input: { query: { slot?: Uint64Input; committee_index?: Uint64Input } }
            output: {
              version:
                | 'phase0'
                | 'altair'
                | 'bellatrix'
                | 'capella'
                | 'deneb'
                | 'electra'
                | 'fulu'
                | 'gloas'
              data: GloasAttestation[] | ElectraAttestation[] | Phase0Attestation[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { slot?: Uint64Input; committee_index?: Uint64Input } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { slot?: Uint64Input; committee_index?: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: ElectraSingleAttestationInput[] | Phase0AttestationInput[]
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: ElectraSingleAttestationInput[] | Phase0AttestationInput[]
            }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: ElectraSingleAttestationInput[] | Phase0AttestationInput[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: ElectraSingleAttestationInput[] | Phase0AttestationInput[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/pool/payload_attestations': {
      $get:
        | {
            input: { query: { slot?: Uint64Input } }
            output: { version: 'gloas'; data: GloasPayloadAttestation[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { slot?: Uint64Input } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { slot?: Uint64Input } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { slot?: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasPayloadAttestationMessageInput[]
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasPayloadAttestationMessageInput[]
            }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasPayloadAttestationMessageInput[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasPayloadAttestationMessageInput[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v2/beacon/pool/attester_slashings': {
      $get:
        | {
            input: {}
            output: {
              version:
                | 'phase0'
                | 'altair'
                | 'bellatrix'
                | 'capella'
                | 'deneb'
                | 'electra'
                | 'fulu'
                | 'gloas'
              data: GloasAttesterSlashing[] | ElectraAttesterSlashing[] | Phase0AttesterSlashing[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json:
                | GloasAttesterSlashingInput
                | ElectraAttesterSlashingInput
                | Phase0AttesterSlashingInput
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json:
                | GloasAttesterSlashingInput
                | ElectraAttesterSlashingInput
                | Phase0AttesterSlashingInput
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json:
                | GloasAttesterSlashingInput
                | ElectraAttesterSlashingInput
                | Phase0AttesterSlashingInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/pool/proposer_slashings': {
      $get:
        | {
            input: {}
            output: { data: Phase0ProposerSlashing[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: Phase0ProposerSlashingInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: Phase0ProposerSlashingInput }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Phase0ProposerSlashingInput }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/pool/sync_committees': {
      $post:
        | {
            input: { json: AltairSyncCommitteeSignatureInput[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: AltairSyncCommitteeSignatureInput[] }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AltairSyncCommitteeSignatureInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/pool/voluntary_exits': {
      $get:
        | {
            input: {}
            output: { data: Phase0SignedVoluntaryExit[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: Phase0SignedVoluntaryExitInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: Phase0SignedVoluntaryExitInput }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Phase0SignedVoluntaryExitInput }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/pool/bls_to_execution_changes': {
      $get:
        | {
            input: {}
            output: { data: CapellaSignedBLSToExecutionChange[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CapellaSignedBLSToExecutionChangeInput[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: CapellaSignedBLSToExecutionChangeInput[] }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CapellaSignedBLSToExecutionChangeInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v2/debug/beacon/states/:state_id': {
      $get:
        | {
            input: { param: { state_id: string } }
            output: {
              version:
                | 'phase0'
                | 'altair'
                | 'bellatrix'
                | 'capella'
                | 'deneb'
                | 'electra'
                | 'fulu'
                | 'gloas'
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data:
                | GloasBeaconState
                | FuluBeaconState
                | ElectraBeaconState
                | DenebBeaconState
                | CapellaBeaconState
                | BellatrixBeaconState
                | AltairBeaconState
                | Phase0BeaconState
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { state_id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { state_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { state_id: string } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v2/debug/beacon/heads': {
      $get:
        | {
            input: {}
            output: {
              data: { root: Root; slot: Uint64; execution_optimistic: ExecutionOptimistic }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/debug/fork_choice': {
      $get:
        | {
            input: {}
            output: {
              justified_checkpoint: Checkpoint
              finalized_checkpoint: Checkpoint
              fork_choice_nodes: Node[]
              extra_data?: ExtraData | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v2/debug/fork_choice': {
      $get:
        | {
            input: {}
            output: {
              data: {
                justified_checkpoint: Checkpoint
                finalized_checkpoint: Checkpoint
                fork_choice_nodes: NodeV2[]
                extra_data: ExtraData
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/node/identity': {
      $get:
        | { input: {}; output: { data: NetworkIdentity }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/node/peers': {
      $get:
        | {
            input: { query: { state?: unknown; direction?: unknown } }
            output: { data: Peer[]; meta: { count: number } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { state?: unknown; direction?: unknown } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/node/peers/:peer_id': {
      $get:
        | {
            input: { param: { peer_id: PeerIdInput } }
            output: { data: Peer }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { peer_id: PeerIdInput } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { peer_id: PeerIdInput } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { peer_id: PeerIdInput } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/node/peer_count': {
      $get:
        | {
            input: {}
            output: {
              data: {
                disconnected: Uint64
                connecting: Uint64
                connected: Uint64
                disconnecting: Uint64
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/node/version': {
      $get:
        | { input: {}; output: { data: { version: Version } }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v2/node/version': {
      $get:
        | {
            input: {}
            output: {
              data: { beacon_node: ClientVersionV1; execution_client?: ClientVersionV1 | undefined }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/node/syncing': {
      $get:
        | {
            input: {}
            output: {
              data: {
                head_slot: Uint64
                sync_distance: Uint64
                is_syncing: boolean
                is_optimistic: boolean
                el_offline: boolean
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/node/health': {
      $get:
        | {
            input: { query: { syncing_status?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { syncing_status?: unknown } }
            output: {}
            outputFormat: string
            status: 206
          }
        | {
            input: { query: { syncing_status?: unknown } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { syncing_status?: unknown } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/eth/v1/config/fork_schedule': {
      $get:
        | { input: {}; output: { data: Fork[] }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/config/spec': {
      $get:
        | {
            input: {}
            output: { data: { [key: string]: unknown } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/config/deposit_contract': {
      $get:
        | {
            input: {}
            output: { data: { chain_id: Uint64; address: ExecutionAddress } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/validator/duties/attester/:epoch': {
      $post:
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: {
              dependent_root: DependentRoot
              execution_optimistic: ExecutionOptimistic
              data: AttesterDuty[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/duties/proposer/:epoch': {
      $get:
        | {
            input: { param: { epoch: Uint64Input } }
            output: {
              dependent_root: DependentRoot
              execution_optimistic: ExecutionOptimistic
              data: ProposerDuty[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epoch: Uint64Input } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { epoch: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { epoch: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v2/validator/duties/proposer/:epoch': {
      $get:
        | {
            input: { param: { epoch: Uint64Input } }
            output: {
              dependent_root: DependentRoot
              execution_optimistic: ExecutionOptimistic
              data: ProposerDuty[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epoch: Uint64Input } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { epoch: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { epoch: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/duties/sync/:epoch': {
      $post:
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: { execution_optimistic: ExecutionOptimistic; data: AltairSyncDuty[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/duties/ptc/:epoch': {
      $post:
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: {
              dependent_root: DependentRoot
              execution_optimistic: ExecutionOptimistic
              data: PtcDuty[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v3/validator/blocks/:slot': {
      $get:
        | {
            input: { param: { slot: Uint64Input } } & {
              query: {
                randao_reveal: SignatureInput
                graffiti?: GraffitiInput
                skip_randao_verification?: string
                builder_boost_factor?: Uint64Input
              }
            }
            output: {
              version: 'phase0' | 'altair' | 'bellatrix' | 'capella' | 'deneb' | 'electra' | 'fulu'
              execution_payload_blinded: boolean
              execution_payload_value: string
              consensus_block_value: string
              data:
                | FuluBlockContents
                | ElectraBlockContents
                | ElectraBlindedBeaconBlock
                | DenebBlockContents
                | DenebBlindedBeaconBlock
                | CapellaBeaconBlock
                | CapellaBlindedBeaconBlock
                | BellatrixBeaconBlock
                | BellatrixBlindedBeaconBlock
                | AltairBeaconBlock
                | Phase0BeaconBlock
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slot: Uint64Input } } & {
              query: {
                randao_reveal: SignatureInput
                graffiti?: GraffitiInput
                skip_randao_verification?: string
                builder_boost_factor?: Uint64Input
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { slot: Uint64Input } } & {
              query: {
                randao_reveal: SignatureInput
                graffiti?: GraffitiInput
                skip_randao_verification?: string
                builder_boost_factor?: Uint64Input
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slot: Uint64Input } } & {
              query: {
                randao_reveal: SignatureInput
                graffiti?: GraffitiInput
                skip_randao_verification?: string
                builder_boost_factor?: Uint64Input
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { slot: Uint64Input } } & {
              query: {
                randao_reveal: SignatureInput
                graffiti?: GraffitiInput
                skip_randao_verification?: string
                builder_boost_factor?: Uint64Input
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { slot: Uint64Input } } & {
              query: {
                randao_reveal: SignatureInput
                graffiti?: GraffitiInput
                skip_randao_verification?: string
                builder_boost_factor?: Uint64Input
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v4/validator/blocks/:slot': {
      $post:
        | {
            input: { param: { slot: Uint64Input } } & {
              query: {
                randao_reveal: SignatureInput
                graffiti?: GraffitiInput
                skip_randao_verification?: string
                include_payload: string
              }
            } & { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasBuilderConfigInput
            }
            output: {
              version: 'gloas'
              consensus_block_value: string
              execution_payload_value: string
              execution_payload_included: boolean
              data: GloasBeaconBlock | GloasBlockContents
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slot: Uint64Input } } & {
              query: {
                randao_reveal: SignatureInput
                graffiti?: GraffitiInput
                skip_randao_verification?: string
                include_payload: string
              }
            } & { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasBuilderConfigInput
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { slot: Uint64Input } } & {
              query: {
                randao_reveal: SignatureInput
                graffiti?: GraffitiInput
                skip_randao_verification?: string
                include_payload: string
              }
            } & { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasBuilderConfigInput
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slot: Uint64Input } } & {
              query: {
                randao_reveal: SignatureInput
                graffiti?: GraffitiInput
                skip_randao_verification?: string
                include_payload: string
              }
            } & { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasBuilderConfigInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { slot: Uint64Input } } & {
              query: {
                randao_reveal: SignatureInput
                graffiti?: GraffitiInput
                skip_randao_verification?: string
                include_payload: string
              }
            } & { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasBuilderConfigInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { slot: Uint64Input } } & {
              query: {
                randao_reveal: SignatureInput
                graffiti?: GraffitiInput
                skip_randao_verification?: string
                include_payload: string
              }
            } & { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasBuilderConfigInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { slot: Uint64Input } } & {
              query: {
                randao_reveal: SignatureInput
                graffiti?: GraffitiInput
                skip_randao_verification?: string
                include_payload: string
              }
            } & { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasBuilderConfigInput
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/attestation_data': {
      $get:
        | {
            input: { query: { slot: Uint64Input; committee_index?: Uint64Input } }
            output: { data: Phase0AttestationData }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { slot: Uint64Input; committee_index?: Uint64Input } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { slot: Uint64Input; committee_index?: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { slot: Uint64Input; committee_index?: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { slot: Uint64Input; committee_index?: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { slot: Uint64Input; committee_index?: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/payload_attestation_data': {
      $get:
        | {
            input: { query: { slot: Uint64Input } }
            output: { version: 'gloas'; data: GloasPayloadAttestationData }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { slot: Uint64Input } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { slot: Uint64Input } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { query: { slot: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { slot: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { slot: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { slot: Uint64Input } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v2/validator/aggregate_attestation': {
      $get:
        | {
            input: {
              query: {
                attestation_data_root: RootInput
                slot: Uint64Input
                committee_index: Uint64Input
              }
            }
            output: {
              version:
                | 'phase0'
                | 'altair'
                | 'bellatrix'
                | 'capella'
                | 'deneb'
                | 'electra'
                | 'fulu'
                | 'gloas'
              data: GloasAttestation | ElectraAttestation | Phase0Attestation
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                attestation_data_root: RootInput
                slot: Uint64Input
                committee_index: Uint64Input
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                attestation_data_root: RootInput
                slot: Uint64Input
                committee_index: Uint64Input
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                attestation_data_root: RootInput
                slot: Uint64Input
                committee_index: Uint64Input
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                attestation_data_root: RootInput
                slot: Uint64Input
                committee_index: Uint64Input
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                attestation_data_root: RootInput
                slot: Uint64Input
                committee_index: Uint64Input
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                attestation_data_root: RootInput
                slot: Uint64Input
                committee_index: Uint64Input
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v2/validator/aggregate_and_proofs': {
      $post:
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json:
                | GloasSignedAggregateAndProofInput[]
                | ElectraSignedAggregateAndProofInput[]
                | Phase0SignedAggregateAndProofInput[]
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json:
                | GloasSignedAggregateAndProofInput[]
                | ElectraSignedAggregateAndProofInput[]
                | Phase0SignedAggregateAndProofInput[]
            }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json:
                | GloasSignedAggregateAndProofInput[]
                | ElectraSignedAggregateAndProofInput[]
                | Phase0SignedAggregateAndProofInput[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json:
                | GloasSignedAggregateAndProofInput[]
                | ElectraSignedAggregateAndProofInput[]
                | Phase0SignedAggregateAndProofInput[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/validator/beacon_committee_subscriptions': {
      $post:
        | {
            input: {
              json: {
                validator_index: Uint64Input
                committee_index: Uint64Input
                committees_at_slot: Uint64Input
                slot: Uint64Input
                is_aggregator: boolean
              }[]
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                validator_index: Uint64Input
                committee_index: Uint64Input
                committees_at_slot: Uint64Input
                slot: Uint64Input
                is_aggregator: boolean
              }[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                validator_index: Uint64Input
                committee_index: Uint64Input
                committees_at_slot: Uint64Input
                slot: Uint64Input
                is_aggregator: boolean
              }[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                validator_index: Uint64Input
                committee_index: Uint64Input
                committees_at_slot: Uint64Input
                slot: Uint64Input
                is_aggregator: boolean
              }[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/sync_committee_subscriptions': {
      $post:
        | {
            input: { json: AltairSyncCommitteeSubscriptionInput[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: AltairSyncCommitteeSubscriptionInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AltairSyncCommitteeSubscriptionInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/validator/beacon_committee_selections': {
      $post:
        | {
            input: { json: BeaconCommitteeSelectionInput[] }
            output: { data: BeaconCommitteeSelection[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BeaconCommitteeSelectionInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BeaconCommitteeSelectionInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: BeaconCommitteeSelectionInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { json: BeaconCommitteeSelectionInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/sync_committee_contribution': {
      $get:
        | {
            input: {
              query: {
                slot: Uint64Input
                subcommittee_index: Uint64Input
                beacon_block_root: RootInput
              }
            }
            output: { data: AltairSyncCommitteeContribution }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                slot: Uint64Input
                subcommittee_index: Uint64Input
                beacon_block_root: RootInput
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                slot: Uint64Input
                subcommittee_index: Uint64Input
                beacon_block_root: RootInput
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                slot: Uint64Input
                subcommittee_index: Uint64Input
                beacon_block_root: RootInput
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                slot: Uint64Input
                subcommittee_index: Uint64Input
                beacon_block_root: RootInput
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/sync_committee_selections': {
      $post:
        | {
            input: { json: SyncCommitteeSelectionInput[] }
            output: { data: SyncCommitteeSelection[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SyncCommitteeSelectionInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SyncCommitteeSelectionInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: SyncCommitteeSelectionInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { json: SyncCommitteeSelectionInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/contribution_and_proofs': {
      $post:
        | {
            input: { json: AltairSignedContributionAndProofInput[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: AltairSignedContributionAndProofInput[] }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AltairSignedContributionAndProofInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/validator/prepare_beacon_proposer': {
      $post:
        | {
            input: {
              json: { validator_index: Uint64Input; fee_recipient: ExecutionAddressInput }[]
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: { validator_index: Uint64Input; fee_recipient: ExecutionAddressInput }[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { validator_index: Uint64Input; fee_recipient: ExecutionAddressInput }[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/validator/register_validator': {
      $post:
        | {
            input: { json: SignedValidatorRegistrationInput[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: SignedValidatorRegistrationInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SignedValidatorRegistrationInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: SignedValidatorRegistrationInput[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/validator/proposer_preferences': {
      $post:
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasSignedProposerPreferencesInput[]
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasSignedProposerPreferencesInput[]
            }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasSignedProposerPreferencesInput[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasSignedProposerPreferencesInput[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/validator/builder_preferences': {
      $post:
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasBuilderPreferencesEntryInput[]
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasBuilderPreferencesEntryInput[]
            }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasBuilderPreferencesEntryInput[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasBuilderPreferencesEntryInput[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersionInput } } & {
              json: GloasBuilderPreferencesEntryInput[]
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/liveness/:epoch': {
      $post:
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: { data: { index: Uint64; is_live: boolean }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { epoch: Uint64Input } } & { json: Uint64Input[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/execution_payload_envelopes/:slot/:beacon_block_root': {
      $get:
        | {
            input: { param: { slot: Uint64Input; beacon_block_root: RootInput } }
            output: { version: 'gloas'; data: GloasExecutionPayloadEnvelope }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slot: Uint64Input; beacon_block_root: RootInput } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { slot: Uint64Input; beacon_block_root: RootInput } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slot: Uint64Input; beacon_block_root: RootInput } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slot: Uint64Input; beacon_block_root: RootInput } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { slot: Uint64Input; beacon_block_root: RootInput } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/events': {
      $get:
        | { input: { query: { topics: unknown } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { query: { topics: unknown } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { topics: unknown } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
