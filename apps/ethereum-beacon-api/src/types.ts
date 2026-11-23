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
type ValidatorResponse = {
  index: Uint64
  balance: Uint64
  status: ValidatorStatus
  validator: {
    pubkey: unknown
    withdrawal_credentials: Root
    effective_balance: Uint64
    slashed: boolean
    activation_eligibility_epoch: Uint64
    activation_epoch: Uint64
    exit_epoch: Uint64
    withdrawable_epoch: Uint64
  }
}
type ValidatorBalanceResponse = { index: Uint64; balance: Uint64 }
type ValidatorIdentityResponse = { index: Uint64; pubkey: unknown; activation_epoch: Uint64 }
type BuilderStatus = 'pending' | 'active' | 'exited'
type ExecutionAddress = string
type GloasBuilder = {
  pubkey: unknown
  version: unknown
  execution_address: ExecutionAddress
  balance: Uint64
  deposit_epoch: Uint64
  withdrawable_epoch: Uint64
}
type BuilderResponse = { index: Uint64; status: BuilderStatus; builder: GloasBuilder }
type Committee = { index: Uint64; slot: Uint64; validators: Uint64[] }
type AltairSyncCommittee = { validators: Uint64[]; validator_aggregates: unknown[] }
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
  pubkey: unknown
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
type Phase0SignedBeaconBlockHeader = { message: unknown; signature: Signature }
type BroadcastValidation = 'gossip' | 'consensus' | 'consensus_and_equivocation'
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
type ElectraAttesterSlashing = {
  attestation_1: { attesting_indices: Uint64[]; data: Phase0AttestationData; signature: Signature }
  attestation_2: unknown
}
type ElectraAttestation = {
  aggregation_bits: unknown
  data: Phase0AttestationData
  signature: Signature
  committee_bits: unknown
}
type Phase0SignedVoluntaryExit = {
  message: { epoch: Uint64; validator_index: Uint64 }
  signature: Signature
}
type CapellaSignedBLSToExecutionChange = {
  message: {
    validator_index: Uint64
    from_bls_pubkey: unknown
    to_execution_address: ExecutionAddress
  }
  signature: Signature
}
type ElectraBlindedBeaconBlock = {
  slot: Uint64
  proposer_index: Uint64
  parent_root: Root
  state_root: Root
  body: {
    randao_reveal: {}
    eth1_data: unknown
    graffiti: Graffiti
    proposer_slashings: Phase0ProposerSlashing[]
    attester_slashings: ElectraAttesterSlashing[]
    attestations: ElectraAttestation[]
    deposits: {
      proof: Root[]
      data: { pubkey: unknown; withdrawal_credentials: Root; amount: Uint64; signature: Signature }
    }[]
    voluntary_exits: Phase0SignedVoluntaryExit[]
    sync_aggregate: unknown
    bls_to_execution_changes: CapellaSignedBLSToExecutionChange[]
    blob_kzg_commitments: string[]
    execution_payload_header: unknown
    execution_requests: { deposits: unknown[]; withdrawals: unknown[]; consolidations: unknown[] }
  }
}
type ElectraSignedBlindedBeaconBlock = { message: ElectraBlindedBeaconBlock; signature: Signature }
type Phase0AttesterSlashing = {
  attestation_1: { attesting_indices: Uint64[]; data: Phase0AttestationData; signature: Signature }
  attestation_2: unknown
}
type Phase0Attestation = {
  aggregation_bits: unknown
  data: Phase0AttestationData
  signature: Signature
}
type DenebBlindedBeaconBlock = {
  slot: Uint64
  proposer_index: Uint64
  parent_root: Root
  state_root: Root
  body: {
    randao_reveal: {}
    eth1_data: unknown
    graffiti: Graffiti
    proposer_slashings: Phase0ProposerSlashing[]
    attester_slashings: Phase0AttesterSlashing[]
    attestations: Phase0Attestation[]
    deposits: {
      proof: Root[]
      data: { pubkey: unknown; withdrawal_credentials: Root; amount: Uint64; signature: Signature }
    }[]
    voluntary_exits: Phase0SignedVoluntaryExit[]
    sync_aggregate: unknown
    bls_to_execution_changes: CapellaSignedBLSToExecutionChange[]
    blob_kzg_commitments: string[]
    execution_payload_header: unknown
  }
}
type DenebSignedBlindedBeaconBlock = { message: DenebBlindedBeaconBlock; signature: Signature }
type CapellaBlindedBeaconBlock = {
  slot: Uint64
  proposer_index: Uint64
  parent_root: Root
  state_root: Root
  body: {
    randao_reveal: Signature
    eth1_data: unknown
    graffiti: Graffiti
    proposer_slashings: Phase0ProposerSlashing[]
    attester_slashings: Phase0AttesterSlashing[]
    attestations: Phase0Attestation[]
    deposits: {
      proof: Root[]
      data: { pubkey: unknown; withdrawal_credentials: Root; amount: Uint64; signature: Signature }
    }[]
    voluntary_exits: Phase0SignedVoluntaryExit[]
    sync_aggregate: unknown
    bls_to_execution_changes: CapellaSignedBLSToExecutionChange[]
    execution_payload_header: unknown
  }
}
type CapellaSignedBlindedBeaconBlock = { message: CapellaBlindedBeaconBlock; signature: Signature }
type BellatrixBlindedBeaconBlock = {
  slot: Uint64
  proposer_index: Uint64
  parent_root: Root
  state_root: Root
  body: {
    randao_reveal: Signature
    eth1_data: unknown
    graffiti: Graffiti
    proposer_slashings: Phase0ProposerSlashing[]
    attester_slashings: Phase0AttesterSlashing[]
    attestations: Phase0Attestation[]
    deposits: {
      proof: Root[]
      data: { pubkey: unknown; withdrawal_credentials: Root; amount: Uint64; signature: Signature }
    }[]
    voluntary_exits: Phase0SignedVoluntaryExit[]
    sync_aggregate: unknown
    execution_payload_header: unknown
  }
}
type BellatrixSignedBlindedBeaconBlock = {
  message: BellatrixBlindedBeaconBlock
  signature: Signature
}
type AltairBeaconBlock = {
  slot: Uint64
  proposer_index: Uint64
  parent_root: Root
  state_root: Root
  body: {
    randao_reveal: Signature
    eth1_data: unknown
    graffiti: Graffiti
    proposer_slashings: Phase0ProposerSlashing[]
    attester_slashings: Phase0AttesterSlashing[]
    attestations: Phase0Attestation[]
    deposits: {
      proof: Root[]
      data: { pubkey: unknown; withdrawal_credentials: Root; amount: Uint64; signature: Signature }
    }[]
    voluntary_exits: Phase0SignedVoluntaryExit[]
    sync_aggregate: unknown
  }
}
type AltairSignedBeaconBlock = { message: AltairBeaconBlock; signature: Signature }
type Phase0BeaconBlock = {
  slot: Uint64
  proposer_index: Uint64
  parent_root: Root
  state_root: Root
  body: {
    randao_reveal: Signature
    eth1_data: unknown
    graffiti: Graffiti
    proposer_slashings: Phase0ProposerSlashing[]
    attester_slashings: Phase0AttesterSlashing[]
    attestations: Phase0Attestation[]
    deposits: {
      proof: Root[]
      data: { pubkey: unknown; withdrawal_credentials: Root; amount: Uint64; signature: Signature }
    }[]
    voluntary_exits: Phase0SignedVoluntaryExit[]
  }
}
type Phase0SignedBeaconBlock = { message: Phase0BeaconBlock; signature: Signature }
type GloasAttesterSlashing = {
  attestation_1: { attesting_indices: Uint64[]; data: Phase0AttestationData; signature: Signature }
  attestation_2: unknown
}
type GloasAttestation = {
  aggregation_bits: unknown
  data: Phase0AttestationData
  signature: Signature
  committee_bits: unknown
}
type GloasExecutionPayloadBid = {
  parent_block_hash: unknown
  parent_block_root: Root
  block_hash: unknown
  prev_randao: unknown
  fee_recipient: ExecutionAddress
  gas_limit: Uint64
  builder_index: Uint64
  slot: Uint64
  value: Uint64
  execution_payment: Uint64
  blob_kzg_commitments: string[]
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
  aggregation_bits: unknown
  data: GloasPayloadAttestationData
  signature: Signature
}
type GloasBeaconBlock = {
  slot: Uint64
  proposer_index: Uint64
  parent_root: Root
  state_root: Root
  body: {
    randao_reveal: Signature
    eth1_data: unknown
    graffiti: Graffiti
    proposer_slashings: Phase0ProposerSlashing[]
    attester_slashings: GloasAttesterSlashing[]
    attestations: GloasAttestation[]
    deposits: {
      proof: Root[]
      data: { pubkey: unknown; withdrawal_credentials: Root; amount: Uint64; signature: Signature }
    }[]
    voluntary_exits: Phase0SignedVoluntaryExit[]
    sync_aggregate: unknown
    bls_to_execution_changes: CapellaSignedBLSToExecutionChange[]
    signed_execution_payload_bid: GloasSignedExecutionPayloadBid
    payload_attestations: GloasPayloadAttestation[]
    parent_execution_requests: unknown
  }
}
type GloasSignedBeaconBlock = { message: GloasBeaconBlock; signature: Signature }
type ElectraSignedBeaconBlock = { message: unknown; signature: Signature }
type Blob = string
type Blobs = Blob[]
type FuluSignedBlockContents = {
  signed_block: ElectraSignedBeaconBlock
  kzg_proofs: unknown
  blobs: Blobs
}
type ElectraSignedBlockContents = {
  signed_block: ElectraSignedBeaconBlock
  kzg_proofs: unknown[]
  blobs: Blobs
}
type DenebBeaconBlock = {
  slot: Uint64
  proposer_index: Uint64
  parent_root: Root
  state_root: Root
  body: {
    randao_reveal: {}
    eth1_data: unknown
    graffiti: Graffiti
    proposer_slashings: Phase0ProposerSlashing[]
    attester_slashings: Phase0AttesterSlashing[]
    attestations: Phase0Attestation[]
    deposits: {
      proof: Root[]
      data: { pubkey: unknown; withdrawal_credentials: Root; amount: Uint64; signature: Signature }
    }[]
    voluntary_exits: Phase0SignedVoluntaryExit[]
    sync_aggregate: unknown
    bls_to_execution_changes: CapellaSignedBLSToExecutionChange[]
    blob_kzg_commitments: string[]
    execution_payload: unknown
  }
}
type DenebSignedBeaconBlock = { message: DenebBeaconBlock; signature: Signature }
type DenebSignedBlockContents = {
  signed_block: DenebSignedBeaconBlock
  kzg_proofs: unknown
  blobs: Blobs
}
type CapellaWithdrawal = {
  index: Uint64
  validator_index: Uint64
  address: ExecutionAddress
  amount: Uint64
}
type CapellaBeaconBlock = {
  slot: Uint64
  proposer_index: Uint64
  parent_root: Root
  state_root: Root
  body: {
    randao_reveal: Signature
    eth1_data: unknown
    graffiti: Graffiti
    proposer_slashings: Phase0ProposerSlashing[]
    attester_slashings: Phase0AttesterSlashing[]
    attestations: Phase0Attestation[]
    deposits: {
      proof: Root[]
      data: { pubkey: unknown; withdrawal_credentials: Root; amount: Uint64; signature: Signature }
    }[]
    voluntary_exits: Phase0SignedVoluntaryExit[]
    sync_aggregate: unknown
    bls_to_execution_changes: CapellaSignedBLSToExecutionChange[]
    execution_payload: {
      parent_hash: unknown
      fee_recipient: ExecutionAddress
      state_root: Root
      receipts_root: Root
      logs_bloom: unknown
      prev_randao: unknown
      block_number: Uint64
      gas_limit: Uint64
      gas_used: Uint64
      timestamp: Uint64
      extra_data: unknown
      base_fee_per_gas: string
      block_hash: unknown
      transactions: string[]
      withdrawals: CapellaWithdrawal[]
    }
  }
}
type CapellaSignedBeaconBlock = { message: CapellaBeaconBlock; signature: Signature }
type BellatrixBeaconBlock = {
  slot: Uint64
  proposer_index: Uint64
  parent_root: Root
  state_root: Root
  body: {
    randao_reveal: Signature
    eth1_data: unknown
    graffiti: Graffiti
    proposer_slashings: Phase0ProposerSlashing[]
    attester_slashings: Phase0AttesterSlashing[]
    attestations: Phase0Attestation[]
    deposits: {
      proof: Root[]
      data: { pubkey: unknown; withdrawal_credentials: Root; amount: Uint64; signature: Signature }
    }[]
    voluntary_exits: Phase0SignedVoluntaryExit[]
    sync_aggregate: unknown
    execution_payload: {
      parent_hash: unknown
      fee_recipient: ExecutionAddress
      state_root: Root
      receipts_root: Root
      logs_bloom: unknown
      prev_randao: unknown
      block_number: Uint64
      gas_limit: Uint64
      gas_used: Uint64
      timestamp: Uint64
      extra_data: unknown
      base_fee_per_gas: string
      block_hash: unknown
      transactions: string[]
    }
  }
}
type BellatrixSignedBeaconBlock = { message: BellatrixBeaconBlock; signature: Signature }
type GloasExecutionPayload = {
  parent_hash: unknown
  fee_recipient: ExecutionAddress
  state_root: unknown
  receipts_root: unknown
  logs_bloom: string
  prev_randao: unknown
  block_number: Uint64
  gas_limit: Uint64
  gas_used: Uint64
  timestamp: Uint64
  extra_data: string
  base_fee_per_gas: string
  block_hash: unknown
  transactions: string[]
  withdrawals: CapellaWithdrawal[]
  blob_gas_used: Uint64
  excess_blob_gas: Uint64
  block_access_list: string
  slot_number: Uint64
}
type GloasExecutionPayloadEnvelope = {
  payload: GloasExecutionPayload
  execution_requests: {
    deposits: {
      pubkey: unknown
      withdrawal_credentials: Root
      amount: Uint64
      signature: Signature
      index: Uint64
    }[]
    withdrawals: { source_address: ExecutionAddress; validator_pubkey: unknown; amount: Uint64 }[]
    consolidations: {
      source_address: ExecutionAddress
      source_pubkey: unknown
      target_pubkey: unknown
    }[]
    builder_deposits: {
      pubkey: unknown
      withdrawal_credentials: unknown
      amount: Uint64
      signature: Signature
    }[]
    builder_exits: { source_address: ExecutionAddress; pubkey: unknown }[]
  }
  builder_index: Uint64
  beacon_block_root: Root
  parent_beacon_block_root: Root
}
type GloasSignedExecutionPayloadEnvelope = {
  message: GloasExecutionPayloadEnvelope
  signature: Signature
}
type GloasSignedExecutionPayloadEnvelopeContents = {
  signed_execution_payload_envelope: GloasSignedExecutionPayloadEnvelope
  kzg_proofs: string[]
  blobs: Blobs
}
type GloasProposerPreferences = {
  dependent_root: Root
  proposal_slot: Uint64
  validator_index: Uint64
  fee_recipient: ExecutionAddress
  target_gas_limit: Uint64
}
type GloasSignedProposerPreferences = { message: GloasProposerPreferences; signature: Signature }
type VersionedHash = string
type GloasDataColumnSidecars = {
  index: Uint64
  column: string[]
  kzg_proofs: unknown[]
  slot: Uint64
  beacon_block_root: Root
}[]
type FuluDataColumnSidecars = {
  index: Uint64
  column: string[]
  kzg_commitments: string[]
  kzg_proofs: unknown[]
  signed_block_header: Phase0SignedBeaconBlockHeader
  kzg_commitments_inclusion_proof: unknown[]
}[]
type SyncCommitteeRewards = { validator_index: Uint64; reward: string }[]
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
    head: string
    target: string
    source: string
    inclusion_delay?: Uint64 | undefined
    inactivity: string
  }[]
  total_rewards: {
    validator_index: Uint64
    head: string
    target: string
    source: string
    inclusion_delay?: Uint64 | undefined
    inactivity: string
  }[]
}
type GloasLightClientBootstrap = {
  header: { beacon: unknown; execution_block_hash: unknown; execution_branch: Root[] }
  current_sync_committee: unknown
  current_sync_committee_branch: Root[]
}
type ElectraLightClientBootstrap = {
  header: { beacon: unknown; execution: unknown; execution_branch: Root[] }
  current_sync_committee: unknown
  current_sync_committee_branch: Root[]
}
type DenebLightClientBootstrap = {
  header: unknown
  current_sync_committee: unknown
  current_sync_committee_branch: Root[]
}
type CapellaLightClientBootstrap = {
  header: { beacon: unknown; execution: unknown; execution_branch: unknown }
  current_sync_committee: unknown
  current_sync_committee_branch: unknown
}
type AltairLightClientBootstrap = {
  header: { beacon: unknown }
  current_sync_committee: unknown
  current_sync_committee_branch: unknown
}
type GloasLightClientUpdate = {
  attested_header: unknown
  next_sync_committee: unknown
  next_sync_committee_branch: Root[]
  finalized_header: unknown
  finality_branch: unknown
  sync_aggregate: unknown
  signature_slot: Uint64
}
type ElectraLightClientUpdate = {
  attested_header: unknown
  next_sync_committee: unknown
  next_sync_committee_branch: Root[]
  finalized_header: unknown
  finality_branch: unknown
  sync_aggregate: unknown
  signature_slot: Uint64
}
type DenebLightClientUpdate = {
  attested_header: unknown
  next_sync_committee: unknown
  next_sync_committee_branch: Root[]
  finalized_header: unknown
  finality_branch: unknown
  sync_aggregate: unknown
  signature_slot: Uint64
}
type CapellaLightClientUpdate = {
  attested_header: unknown
  next_sync_committee: unknown
  next_sync_committee_branch: unknown
  finalized_header: unknown
  finality_branch: unknown
  sync_aggregate: unknown
  signature_slot: Uint64
}
type AltairLightClientUpdate = {
  attested_header: unknown
  next_sync_committee: unknown
  next_sync_committee_branch: unknown
  finalized_header: unknown
  finality_branch: unknown
  sync_aggregate: unknown
  signature_slot: Uint64
}
type GloasLightClientFinalityUpdate = {
  attested_header: unknown
  finalized_header: unknown
  finality_branch: Root[]
  sync_aggregate: { sync_committee_bits: unknown; sync_committee_signature: Signature }
  signature_slot: Uint64
}
type ElectraLightClientFinalityUpdate = {
  attested_header: unknown
  finalized_header: unknown
  finality_branch: Root[]
  sync_aggregate: unknown
  signature_slot: Uint64
}
type DenebLightClientFinalityUpdate = {
  attested_header: unknown
  finalized_header: unknown
  finality_branch: Root[]
  sync_aggregate: unknown
  signature_slot: Uint64
}
type CapellaLightClientFinalityUpdate = {
  attested_header: unknown
  finalized_header: unknown
  finality_branch: unknown
  sync_aggregate: unknown
  signature_slot: Uint64
}
type AltairLightClientFinalityUpdate = {
  attested_header: unknown
  finalized_header: unknown
  finality_branch: unknown
  sync_aggregate: unknown
  signature_slot: Uint64
}
type GloasLightClientOptimisticUpdate = {
  attested_header: unknown
  sync_aggregate: unknown
  signature_slot: Uint64
}
type ElectraLightClientOptimisticUpdate = {
  attested_header: unknown
  sync_aggregate: unknown
  signature_slot: Uint64
}
type DenebLightClientOptimisticUpdate = {
  attested_header: unknown
  sync_aggregate: unknown
  signature_slot: Uint64
}
type CapellaLightClientOptimisticUpdate = {
  attested_header: unknown
  sync_aggregate: unknown
  signature_slot: Uint64
}
type AltairLightClientOptimisticUpdate = {
  attested_header: unknown
  sync_aggregate: unknown
  signature_slot: Uint64
}
type ElectraSingleAttestation = {
  committee_index: Uint64
  attester_index: Uint64
  data: Phase0AttestationData
  signature: Signature
}
type IndexedErrorMessage = {
  code: number
  message: string
  failures: { index: number; message: string }[]
}
type GloasPayloadAttestationMessage = {
  validator_index: Uint64
  data: GloasPayloadAttestationData
  signature: Signature
}
type AltairSyncCommitteeSignature = {
  slot: Uint64
  beacon_block_root: Root
  validator_index: Uint64
  signature: Signature
}
type GloasBeaconState = {
  genesis_time: Uint64
  genesis_validators_root: Root
  slot: Uint64
  fork: Fork
  latest_block_header: {
    slot: Uint64
    proposer_index: Uint64
    parent_root: Root
    state_root: Root
    body_root: Root
  }
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: { deposit_root: Root; deposit_count: Uint64; block_hash: unknown }
  eth1_data_votes: unknown[]
  eth1_deposit_index: Uint64
  validators: unknown[]
  balances: Uint64[]
  randao_mixes: string[]
  slashings: Uint64[]
  previous_epoch_participation: unknown[]
  current_epoch_participation: string[]
  justification_bits: string
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  inactivity_scores: Uint64[]
  current_sync_committee: unknown
  next_sync_committee: { pubkeys: unknown[]; aggregate_pubkey: unknown }
  latest_block_hash: string
  next_withdrawal_index: Uint64
  next_withdrawal_validator_index: Uint64
  historical_summaries: { block_summary_root: Root; state_summary_root: Root }[]
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
  execution_payload_availability: unknown
  builder_pending_payments: GloasBuilderPendingPayments
  builder_pending_withdrawals: GloasBuilderPendingWithdrawals
  latest_execution_payload_bid: GloasExecutionPayloadBid
  payload_expected_withdrawals: CapellaWithdrawal[]
  ptc_window: GloasPayloadTimelinessCommittee[]
}
type FuluBeaconState = {
  genesis_time: Uint64
  genesis_validators_root: Root
  slot: Uint64
  fork: Fork
  latest_block_header: unknown
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: unknown
  eth1_data_votes: unknown[]
  eth1_deposit_index: Uint64
  validators: unknown[]
  balances: Uint64[]
  randao_mixes: unknown[]
  slashings: Uint64[]
  previous_epoch_participation: unknown
  current_epoch_participation: unknown[]
  justification_bits: unknown
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  inactivity_scores: Uint64[]
  current_sync_committee: unknown
  next_sync_committee: unknown
  latest_execution_payload_header: {
    parent_hash: unknown
    fee_recipient: ExecutionAddress
    state_root: Root
    receipts_root: Root
    logs_bloom: unknown
    prev_randao: unknown
    block_number: Uint64
    gas_limit: Uint64
    gas_used: Uint64
    timestamp: Uint64
    extra_data: unknown
    base_fee_per_gas: string
    blob_gas_used: Uint64
    excess_blob_gas: Uint64
    block_hash: unknown
    transactions_root: Root
    withdrawals_root: Root
  }
  next_withdrawal_index: Uint64
  next_withdrawal_validator_index: Uint64
  historical_summaries: unknown[]
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
  latest_block_header: unknown
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: unknown
  eth1_data_votes: unknown[]
  eth1_deposit_index: Uint64
  validators: unknown[]
  balances: Uint64[]
  randao_mixes: unknown[]
  slashings: Uint64[]
  previous_epoch_participation: unknown
  current_epoch_participation: unknown
  justification_bits: unknown
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  inactivity_scores: Uint64[]
  current_sync_committee: unknown
  next_sync_committee: unknown
  latest_execution_payload_header: unknown
  next_withdrawal_index: Uint64
  next_withdrawal_validator_index: Uint64
  historical_summaries: unknown[]
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
  latest_block_header: unknown
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: unknown
  eth1_data_votes: unknown[]
  eth1_deposit_index: Uint64
  validators: unknown[]
  balances: Uint64[]
  randao_mixes: unknown[]
  slashings: Uint64[]
  previous_epoch_participation: unknown
  current_epoch_participation: unknown
  justification_bits: unknown
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  inactivity_scores: Uint64[]
  current_sync_committee: unknown
  next_sync_committee: unknown
  latest_execution_payload_header: unknown
  next_withdrawal_index: Uint64
  next_withdrawal_validator_index: Uint64
  historical_summaries: unknown[]
}
type CapellaBeaconState = {
  genesis_time: Uint64
  genesis_validators_root: Root
  slot: Uint64
  fork: Fork
  latest_block_header: unknown
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: unknown
  eth1_data_votes: unknown[]
  eth1_deposit_index: Uint64
  validators: unknown[]
  balances: Uint64[]
  randao_mixes: unknown[]
  slashings: Uint64[]
  previous_epoch_participation: unknown
  current_epoch_participation: unknown
  justification_bits: unknown
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  inactivity_scores: Uint64[]
  current_sync_committee: unknown
  next_sync_committee: unknown
  latest_execution_payload_header: {
    parent_hash: unknown
    fee_recipient: ExecutionAddress
    state_root: Root
    receipts_root: Root
    logs_bloom: unknown
    prev_randao: unknown
    block_number: Uint64
    gas_limit: Uint64
    gas_used: Uint64
    timestamp: Uint64
    extra_data: unknown
    base_fee_per_gas: string
    block_hash: unknown
    transactions_root: Root
    withdrawals_root: Root
  }
  next_withdrawal_index: Uint64
  next_withdrawal_validator_index: Uint64
  historical_summaries: unknown[]
}
type BellatrixBeaconState = {
  genesis_time: Uint64
  genesis_validators_root: Root
  slot: Uint64
  fork: Fork
  latest_block_header: unknown
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: unknown
  eth1_data_votes: unknown[]
  eth1_deposit_index: Uint64
  validators: unknown[]
  balances: Uint64[]
  randao_mixes: unknown[]
  slashings: Uint64[]
  previous_epoch_participation: unknown
  current_epoch_participation: unknown
  justification_bits: unknown
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  inactivity_scores: Uint64[]
  current_sync_committee: unknown
  next_sync_committee: unknown
  latest_execution_payload_header: {
    parent_hash: unknown
    fee_recipient: ExecutionAddress
    state_root: Root
    receipts_root: Root
    logs_bloom: unknown
    prev_randao: unknown
    block_number: Uint64
    gas_limit: Uint64
    gas_used: Uint64
    timestamp: Uint64
    extra_data: unknown
    base_fee_per_gas: string
    block_hash: unknown
    transactions_root: Root
  }
}
type AltairBeaconState = {
  genesis_time: Uint64
  genesis_validators_root: Root
  slot: Uint64
  fork: Fork
  latest_block_header: unknown
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: unknown
  eth1_data_votes: unknown[]
  eth1_deposit_index: Uint64
  validators: unknown[]
  balances: Uint64[]
  randao_mixes: unknown[]
  slashings: Uint64[]
  previous_epoch_participation: unknown
  current_epoch_participation: unknown
  justification_bits: unknown
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  inactivity_scores: Uint64[]
  current_sync_committee: unknown
  next_sync_committee: unknown
}
type Phase0BeaconState = {
  genesis_time: Uint64
  genesis_validators_root: Root
  slot: Uint64
  fork: Fork
  latest_block_header: unknown
  block_roots: Root[]
  state_roots: Root[]
  historical_roots: Root[]
  eth1_data: unknown
  eth1_data_votes: unknown[]
  eth1_deposit_index: Uint64
  validators: unknown[]
  balances: Uint64[]
  randao_mixes: unknown[]
  slashings: Uint64[]
  previous_epoch_attestations: unknown[]
  current_epoch_attestations: {
    aggregation_bits: string
    data: Phase0AttestationData
    inclusion_delay: Uint64
    proposer_index: Uint64
  }[]
  justification_bits: unknown
  previous_justified_checkpoint: Checkpoint
  current_justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
}
type ExtraData = { [x: string]: unknown }
type Node = {
  slot: Uint64
  block_root: Root
  parent_root: Root
  justified_epoch: Uint64
  finalized_epoch: Uint64
  weight: Uint64
  validity: 'valid' | 'invalid' | 'optimistic'
  execution_block_hash: unknown
  extra_data?: ExtraData | undefined
}
type NodeV2 = {
  slot: Uint64
  block_root: Root
  payload_status: 'pending' | 'empty' | 'full'
  parent_root: Root
  parent_payload_status: ({ [x: string]: unknown } | null) | 'pending' | 'empty' | 'full'
  justified_checkpoint: Checkpoint
  finalized_checkpoint: Checkpoint
  weight: Uint64
  validity: 'valid' | 'invalid' | 'optimistic'
  execution_block_hash: unknown
  payload_attester_count: Uint64
  payload_availability_yes_count: Uint64
  payload_data_availability_yes_count: Uint64
  extra_data: ExtraData
}
type PeerId = string
type NetworkIdentity = {
  peer_id: PeerId
  enr: string
  p2p_addresses: string[]
  discovery_addresses: unknown[]
  metadata: {
    seq_number: Uint64
    attnets: unknown
    syncnets?: unknown | undefined
    custody_group_count?: Uint64 | undefined
  }
}
type PeerConnectionState = 'disconnected' | 'connecting' | 'connected' | 'disconnecting'
type PeerConnectionDirection = 'inbound' | 'outbound'
type Peer = {
  peer_id: PeerId
  enr: ({ [x: string]: unknown } | null) | unknown
  last_seen_p2p_address: unknown
  state: PeerConnectionState
  direction: PeerConnectionDirection
}
type Version = string
type ClientVersionV1 = {
  code: 'BU' | 'EJ' | 'EG' | 'GE' | 'GR' | 'LH' | 'LS' | 'NM' | 'NB' | 'TE' | 'TK' | 'PM' | 'RH'
  name: string
  version: string
  commit: string
}
type DependentRoot = string
type AttesterDuty = {
  pubkey: unknown
  validator_index: Uint64
  committee_index: Uint64
  committee_length: Uint64
  committees_at_slot: Uint64
  validator_committee_index: Uint64
  slot: Uint64
}
type ProposerDuty = { pubkey: unknown; validator_index: Uint64; slot: Uint64 }
type AltairSyncDuty = {
  pubkey: unknown
  validator_index: Uint64
  validator_sync_committee_indices: Uint64[]
}
type PtcDuty = { pubkey: unknown; validator_index: Uint64; slot: Uint64 }
type FuluBlockContents = {
  block: {
    slot: Uint64
    proposer_index: Uint64
    parent_root: Root
    state_root: Root
    body: {
      randao_reveal: {}
      eth1_data: unknown
      graffiti: Graffiti
      proposer_slashings: Phase0ProposerSlashing[]
      attester_slashings: ElectraAttesterSlashing[]
      attestations: ElectraAttestation[]
      deposits: {
        proof: Root[]
        data: {
          pubkey: unknown
          withdrawal_credentials: Root
          amount: Uint64
          signature: Signature
        }
      }[]
      voluntary_exits: Phase0SignedVoluntaryExit[]
      sync_aggregate: unknown
      bls_to_execution_changes: CapellaSignedBLSToExecutionChange[]
      blob_kzg_commitments: string[]
      execution_payload: { transactions: string[]; withdrawals: CapellaWithdrawal[] }
      execution_requests: { deposits: unknown[]; withdrawals: unknown[]; consolidations: unknown[] }
    }
  }
  kzg_proofs: unknown
  blobs: Blobs
}
type ElectraBlockContents = { block: unknown; kzg_proofs: unknown; blobs: Blobs }
type DenebBlockContents = { block: DenebBeaconBlock; kzg_proofs: unknown; blobs: Blobs }
type GloasBuilderRequestAuth = { data: string; slot: {} }
type GloasBuilderEntry = {
  url: string
  auth: { message: GloasBuilderRequestAuth; signature: Signature }
  builder_pubkeys: {}[]
  max_execution_payment: {}
  min_bid: {}
  builder_boost_factor: {}
}
type GloasBuilderConfig = { min_bid: {}; builder_boost_factor: {}; builders: GloasBuilderEntry[] }
type GloasBlockContents = {
  block: GloasBeaconBlock
  execution_payload_envelope: GloasExecutionPayloadEnvelope
  kzg_proofs: unknown
  blobs: Blobs
}
type GloasSignedAggregateAndProof = {
  message: { aggregator_index: Uint64; aggregate: GloasAttestation; selection_proof: Signature }
  signature: Signature
}
type ElectraSignedAggregateAndProof = {
  message: { aggregator_index: Uint64; aggregate: ElectraAttestation; selection_proof: Signature }
  signature: Signature
}
type Phase0SignedAggregateAndProof = {
  message: { aggregator_index: Uint64; aggregate: Phase0Attestation; selection_proof: Signature }
  signature: Signature
}
type AltairSyncCommitteeSubscription = {
  validator_index: Uint64
  sync_committee_indices: Uint64[]
  until_epoch: Uint64
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
  aggregation_bits: unknown
  signature: Signature
}
type SyncCommitteeSelection = {
  validator_index: Uint64
  slot: Uint64
  subcommittee_index: Uint64
  selection_proof: Signature
}
type AltairContributionAndProof = {
  aggregator_index: Uint64
  selection_proof: Signature
  contribution: AltairSyncCommitteeContribution
}
type AltairSignedContributionAndProof = {
  message: AltairContributionAndProof
  signature: Signature
}
type SignedValidatorRegistration = {
  message: {
    fee_recipient: ExecutionAddress
    gas_limit: Uint64
    timestamp: Uint64
    pubkey: unknown
  }
  signature: Signature
}
type GloasBuilderPreferencesEntry = {
  proposer_pubkey: {}
  url: string
  auth: { message: GloasBuilderRequestAuth; signature: Signature }
  max_execution_payment: {}
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
            input: { param: { state_id: string } } & {
              query: {
                id?: string[] | undefined
                status?:
                  | (ValidatorStatus | 'active' | 'pending' | 'exited' | 'withdrawal')[]
                  | undefined
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
              query: {
                id?: string[] | undefined
                status?:
                  | (ValidatorStatus | 'active' | 'pending' | 'exited' | 'withdrawal')[]
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & {
              query: {
                id?: string[] | undefined
                status?:
                  | (ValidatorStatus | 'active' | 'pending' | 'exited' | 'withdrawal')[]
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & {
              query: {
                id?: string[] | undefined
                status?:
                  | (ValidatorStatus | 'active' | 'pending' | 'exited' | 'withdrawal')[]
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { state_id: string } } & {
              query: {
                id?: string[] | undefined
                status?:
                  | (ValidatorStatus | 'active' | 'pending' | 'exited' | 'withdrawal')[]
                  | undefined
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { state_id: string } } & {
              json: {
                ids?: string[] | undefined
                statuses?:
                  | (ValidatorStatus | 'active' | 'pending' | 'exited' | 'withdrawal')[]
                  | undefined
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
                ids?: string[] | undefined
                statuses?:
                  | (ValidatorStatus | 'active' | 'pending' | 'exited' | 'withdrawal')[]
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & {
              json: {
                ids?: string[] | undefined
                statuses?:
                  | (ValidatorStatus | 'active' | 'pending' | 'exited' | 'withdrawal')[]
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & {
              json: {
                ids?: string[] | undefined
                statuses?:
                  | (ValidatorStatus | 'active' | 'pending' | 'exited' | 'withdrawal')[]
                  | undefined
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
            input: { param: { state_id: string } } & { query: { id?: string[] | undefined } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: ValidatorBalanceResponse[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: string[] | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: string[] | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: string[] | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: string[] | undefined } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: string[] | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { state_id: string } } & { query: { id?: string[] | undefined } }
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
            output: { [x: string]: unknown }
            outputFormat: 'text'
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
            output: { [x: string]: unknown }
            outputFormat: 'text'
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
              json: { ids?: string[] | undefined; statuses?: BuilderStatus[] | undefined }
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
              json: { ids?: string[] | undefined; statuses?: BuilderStatus[] | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & {
              json: { ids?: string[] | undefined; statuses?: BuilderStatus[] | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & {
              json: { ids?: string[] | undefined; statuses?: BuilderStatus[] | undefined }
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
              query: {
                epoch?: Uint64 | undefined
                index?: Uint64 | undefined
                slot?: Uint64 | undefined
              }
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
              query: {
                epoch?: Uint64 | undefined
                index?: Uint64 | undefined
                slot?: Uint64 | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & {
              query: {
                epoch?: Uint64 | undefined
                index?: Uint64 | undefined
                slot?: Uint64 | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & {
              query: {
                epoch?: Uint64 | undefined
                index?: Uint64 | undefined
                slot?: Uint64 | undefined
              }
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
            input: { param: { state_id: string } } & { query: { epoch?: Uint64 | undefined } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: AltairSyncCommittee
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { query: { epoch?: Uint64 | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & { query: { epoch?: Uint64 | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & { query: { epoch?: Uint64 | undefined } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/ptc': {
      $get:
        | {
            input: { param: { state_id: string } } & { query: { slot?: Uint64 | undefined } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: { slot: Uint64; validators: GloasPayloadTimelinessCommittee }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { query: { slot?: Uint64 | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { query: { slot?: Uint64 | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & { query: { slot?: Uint64 | undefined } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & { query: { slot?: Uint64 | undefined } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { state_id: string } } & { query: { slot?: Uint64 | undefined } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/states/:state_id/randao': {
      $get:
        | {
            input: { param: { state_id: string } } & { query: { epoch?: Uint64 | undefined } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: { randao: Root }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { state_id: string } } & { query: { epoch?: Uint64 | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { state_id: string } } & { query: { epoch?: Uint64 | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { state_id: string } } & { query: { epoch?: Uint64 | undefined } }
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
        | {
            input: { param: { state_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
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
        | {
            input: { param: { state_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
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
        | {
            input: { param: { state_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
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
        | {
            input: { param: { state_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
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
        | {
            input: { param: { state_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
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
        | {
            input: { param: { state_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
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
            input: { query: { slot?: Uint64 | undefined; parent_root?: Root | undefined } }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: { root: Root; canonical: boolean; header: Phase0SignedBeaconBlockHeader }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { slot?: Uint64 | undefined; parent_root?: Root | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { slot?: Uint64 | undefined; parent_root?: Root | undefined } }
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
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
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
                | ElectraSignedBlindedBeaconBlock
                | DenebSignedBlindedBeaconBlock
                | CapellaSignedBlindedBeaconBlock
                | BellatrixSignedBlindedBeaconBlock
                | AltairSignedBeaconBlock
                | Phase0SignedBeaconBlock
                | { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
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
                | ElectraSignedBlindedBeaconBlock
                | DenebSignedBlindedBeaconBlock
                | CapellaSignedBlindedBeaconBlock
                | BellatrixSignedBlindedBeaconBlock
                | AltairSignedBeaconBlock
                | Phase0SignedBeaconBlock
                | { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
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
                | ElectraSignedBlindedBeaconBlock
                | DenebSignedBlindedBeaconBlock
                | CapellaSignedBlindedBeaconBlock
                | BellatrixSignedBlindedBeaconBlock
                | AltairSignedBeaconBlock
                | Phase0SignedBeaconBlock
                | { [x: string]: unknown }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
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
                | ElectraSignedBlindedBeaconBlock
                | DenebSignedBlindedBeaconBlock
                | CapellaSignedBlindedBeaconBlock
                | BellatrixSignedBlindedBeaconBlock
                | AltairSignedBeaconBlock
                | Phase0SignedBeaconBlock
                | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
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
                | ElectraSignedBlindedBeaconBlock
                | DenebSignedBlindedBeaconBlock
                | CapellaSignedBlindedBeaconBlock
                | BellatrixSignedBlindedBeaconBlock
                | AltairSignedBeaconBlock
                | Phase0SignedBeaconBlock
                | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
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
                | ElectraSignedBlindedBeaconBlock
                | DenebSignedBlindedBeaconBlock
                | CapellaSignedBlindedBeaconBlock
                | BellatrixSignedBlindedBeaconBlock
                | AltairSignedBeaconBlock
                | Phase0SignedBeaconBlock
                | { [x: string]: unknown }
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
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersion
                'Eth-Builder-Url'?: string | undefined
              }
            } & {
              json:
                | GloasSignedBeaconBlock
                | FuluSignedBlockContents
                | ElectraSignedBlockContents
                | DenebSignedBlockContents
                | CapellaSignedBeaconBlock
                | BellatrixSignedBeaconBlock
                | AltairSignedBeaconBlock
                | Phase0SignedBeaconBlock
                | { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersion
                'Eth-Builder-Url'?: string | undefined
              }
            } & {
              json:
                | GloasSignedBeaconBlock
                | FuluSignedBlockContents
                | ElectraSignedBlockContents
                | DenebSignedBlockContents
                | CapellaSignedBeaconBlock
                | BellatrixSignedBeaconBlock
                | AltairSignedBeaconBlock
                | Phase0SignedBeaconBlock
                | { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersion
                'Eth-Builder-Url'?: string | undefined
              }
            } & {
              json:
                | GloasSignedBeaconBlock
                | FuluSignedBlockContents
                | ElectraSignedBlockContents
                | DenebSignedBlockContents
                | CapellaSignedBeaconBlock
                | BellatrixSignedBeaconBlock
                | AltairSignedBeaconBlock
                | Phase0SignedBeaconBlock
                | { [x: string]: unknown }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersion
                'Eth-Builder-Url'?: string | undefined
              }
            } & {
              json:
                | GloasSignedBeaconBlock
                | FuluSignedBlockContents
                | ElectraSignedBlockContents
                | DenebSignedBlockContents
                | CapellaSignedBeaconBlock
                | BellatrixSignedBeaconBlock
                | AltairSignedBeaconBlock
                | Phase0SignedBeaconBlock
                | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersion
                'Eth-Builder-Url'?: string | undefined
              }
            } & {
              json:
                | GloasSignedBeaconBlock
                | FuluSignedBlockContents
                | ElectraSignedBlockContents
                | DenebSignedBlockContents
                | CapellaSignedBeaconBlock
                | BellatrixSignedBeaconBlock
                | AltairSignedBeaconBlock
                | Phase0SignedBeaconBlock
                | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersion
                'Eth-Builder-Url'?: string | undefined
              }
            } & {
              json:
                | GloasSignedBeaconBlock
                | FuluSignedBlockContents
                | ElectraSignedBlockContents
                | DenebSignedBlockContents
                | CapellaSignedBeaconBlock
                | BellatrixSignedBeaconBlock
                | AltairSignedBeaconBlock
                | Phase0SignedBeaconBlock
                | { [x: string]: unknown }
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
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasSignedExecutionPayloadBid | { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasSignedExecutionPayloadBid | { [x: string]: unknown }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasSignedExecutionPayloadBid | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasSignedExecutionPayloadBid | { [x: string]: unknown }
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
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersion
                'Eth-Blob-Data-Included': boolean
              }
            } & {
              json:
                | GloasSignedExecutionPayloadEnvelopeContents
                | GloasSignedExecutionPayloadEnvelope
                | { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersion
                'Eth-Blob-Data-Included': boolean
              }
            } & {
              json:
                | GloasSignedExecutionPayloadEnvelopeContents
                | GloasSignedExecutionPayloadEnvelope
                | { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersion
                'Eth-Blob-Data-Included': boolean
              }
            } & {
              json:
                | GloasSignedExecutionPayloadEnvelopeContents
                | GloasSignedExecutionPayloadEnvelope
                | { [x: string]: unknown }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersion
                'Eth-Blob-Data-Included': boolean
              }
            } & {
              json:
                | GloasSignedExecutionPayloadEnvelopeContents
                | GloasSignedExecutionPayloadEnvelope
                | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersion
                'Eth-Blob-Data-Included': boolean
              }
            } & {
              json:
                | GloasSignedExecutionPayloadEnvelopeContents
                | GloasSignedExecutionPayloadEnvelope
                | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { broadcast_validation?: BroadcastValidation | undefined } } & {
              header: {
                'Eth-Consensus-Version': ConsensusVersion
                'Eth-Blob-Data-Included': boolean
              }
            } & {
              json:
                | GloasSignedExecutionPayloadEnvelopeContents
                | GloasSignedExecutionPayloadEnvelope
                | { [x: string]: unknown }
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
        | {
            input: { param: { block_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
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
            input: { query: { slot?: Uint64 | undefined; dependent_root?: Root | undefined } }
            output: { version: 'gloas'; data: GloasSignedProposerPreferences[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { slot?: Uint64 | undefined; dependent_root?: Root | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { slot?: Uint64 | undefined; dependent_root?: Root | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { slot?: Uint64 | undefined; dependent_root?: Root | undefined } }
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
        | {
            input: { param: { block_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
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
            input: { param: { block_id: string } } & {
              query: { versioned_hashes?: VersionedHash[] | undefined }
            }
            output: { execution_optimistic: ExecutionOptimistic; finalized: Finalized; data: Blobs }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { block_id: string } } & {
              query: { versioned_hashes?: VersionedHash[] | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { block_id: string } } & {
              query: { versioned_hashes?: VersionedHash[] | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { block_id: string } } & {
              query: { versioned_hashes?: VersionedHash[] | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { block_id: string } } & {
              query: { versioned_hashes?: VersionedHash[] | undefined }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { block_id: string } } & {
              query: { versioned_hashes?: VersionedHash[] | undefined }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/debug/beacon/data_column_sidecars/:block_id': {
      $get:
        | {
            input: { param: { block_id: string } } & { query: { indices?: Uint64[] | undefined } }
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
            input: { param: { block_id: string } } & { query: { indices?: Uint64[] | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { block_id: string } } & { query: { indices?: Uint64[] | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { block_id: string } } & { query: { indices?: Uint64[] | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { block_id: string } } & { query: { indices?: Uint64[] | undefined } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { block_id: string } } & { query: { indices?: Uint64[] | undefined } }
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
            input: { param: { epoch: Uint64 } } & { json: string[] }
            output: {
              execution_optimistic: ExecutionOptimistic
              finalized: Finalized
              data: AttestationsRewards
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epoch: Uint64 } } & { json: string[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { epoch: Uint64 } } & { json: string[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { epoch: Uint64 } } & { json: string[] }
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
        | {
            input: { param: { block_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
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
            input: { param: { block_root: Root } }
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
            input: { param: { block_root: Root } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { block_root: Root } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { block_root: Root } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { block_root: Root } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { block_root: Root } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/light_client/updates': {
      $get:
        | {
            input: { query: { start_period: Uint64; count: Uint64 } }
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
            input: { query: { start_period: Uint64; count: Uint64 } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { start_period: Uint64; count: Uint64 } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { start_period: Uint64; count: Uint64 } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { start_period: Uint64; count: Uint64 } }
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
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
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
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
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
            input: { query: { slot?: Uint64 | undefined; committee_index?: Uint64 | undefined } }
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
            input: { query: { slot?: Uint64 | undefined; committee_index?: Uint64 | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { slot?: Uint64 | undefined; committee_index?: Uint64 | undefined } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: ElectraSingleAttestation[] | Phase0Attestation[] | { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: ElectraSingleAttestation[] | Phase0Attestation[] | { [x: string]: unknown }
            }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: ElectraSingleAttestation[] | Phase0Attestation[] | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: ElectraSingleAttestation[] | Phase0Attestation[] | { [x: string]: unknown }
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
            input: { query: { slot?: Uint64 | undefined } }
            output: { version: 'gloas'; data: GloasPayloadAttestation[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { slot?: Uint64 | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { slot?: Uint64 | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { slot?: Uint64 | undefined } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasPayloadAttestationMessage[] | { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasPayloadAttestationMessage[] | { [x: string]: unknown }
            }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasPayloadAttestationMessage[] | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasPayloadAttestationMessage[] | { [x: string]: unknown }
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
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasAttesterSlashing | ElectraAttesterSlashing | Phase0AttesterSlashing
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasAttesterSlashing | ElectraAttesterSlashing | Phase0AttesterSlashing
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasAttesterSlashing | ElectraAttesterSlashing | Phase0AttesterSlashing
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
        | { input: { json: Phase0ProposerSlashing }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: Phase0ProposerSlashing }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Phase0ProposerSlashing }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/beacon/pool/sync_committees': {
      $post:
        | {
            input: { json: AltairSyncCommitteeSignature[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: AltairSyncCommitteeSignature[] }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AltairSyncCommitteeSignature[] }
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
            input: { json: Phase0SignedVoluntaryExit }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: Phase0SignedVoluntaryExit }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Phase0SignedVoluntaryExit }
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
            input: { json: CapellaSignedBLSToExecutionChange[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: CapellaSignedBLSToExecutionChange[] }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CapellaSignedBLSToExecutionChange[] }
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
        | {
            input: { param: { state_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
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
            input: {
              query: {
                state?: PeerConnectionState[] | undefined
                direction?: PeerConnectionDirection[] | undefined
              }
            }
            output: { data: Peer[]; meta: { count: number } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                state?: PeerConnectionState[] | undefined
                direction?: PeerConnectionDirection[] | undefined
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/node/peers/:peer_id': {
      $get:
        | {
            input: { param: { peer_id: PeerId } }
            output: { data: Peer }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { peer_id: PeerId } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { peer_id: PeerId } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { peer_id: PeerId } }
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
            input: { query: { syncing_status?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { syncing_status?: number | undefined } }
            output: {}
            outputFormat: string
            status: 206
          }
        | {
            input: { query: { syncing_status?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { syncing_status?: number | undefined } }
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
            output: { data: { [x: string]: unknown } }
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
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: {
              dependent_root: DependentRoot
              execution_optimistic: ExecutionOptimistic
              data: AttesterDuty[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/duties/proposer/:epoch': {
      $get:
        | {
            input: { param: { epoch: Uint64 } }
            output: {
              dependent_root: DependentRoot
              execution_optimistic: ExecutionOptimistic
              data: ProposerDuty[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epoch: Uint64 } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { epoch: Uint64 } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { epoch: Uint64 } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v2/validator/duties/proposer/:epoch': {
      $get:
        | {
            input: { param: { epoch: Uint64 } }
            output: {
              dependent_root: DependentRoot
              execution_optimistic: ExecutionOptimistic
              data: ProposerDuty[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epoch: Uint64 } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { epoch: Uint64 } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { epoch: Uint64 } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/duties/sync/:epoch': {
      $post:
        | {
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: { execution_optimistic: ExecutionOptimistic; data: AltairSyncDuty[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/duties/ptc/:epoch': {
      $post:
        | {
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: {
              dependent_root: DependentRoot
              execution_optimistic: ExecutionOptimistic
              data: PtcDuty[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v3/validator/blocks/:slot': {
      $get:
        | {
            input: { param: { slot: Uint64 } } & {
              query: {
                randao_reveal: Signature
                graffiti?: Graffiti | undefined
                skip_randao_verification?: string | undefined
                builder_boost_factor?: Uint64 | undefined
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
            input: { param: { slot: Uint64 } } & {
              query: {
                randao_reveal: Signature
                graffiti?: Graffiti | undefined
                skip_randao_verification?: string | undefined
                builder_boost_factor?: Uint64 | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { slot: Uint64 } } & {
              query: {
                randao_reveal: Signature
                graffiti?: Graffiti | undefined
                skip_randao_verification?: string | undefined
                builder_boost_factor?: Uint64 | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slot: Uint64 } } & {
              query: {
                randao_reveal: Signature
                graffiti?: Graffiti | undefined
                skip_randao_verification?: string | undefined
                builder_boost_factor?: Uint64 | undefined
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { slot: Uint64 } } & {
              query: {
                randao_reveal: Signature
                graffiti?: Graffiti | undefined
                skip_randao_verification?: string | undefined
                builder_boost_factor?: Uint64 | undefined
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { slot: Uint64 } } & {
              query: {
                randao_reveal: Signature
                graffiti?: Graffiti | undefined
                skip_randao_verification?: string | undefined
                builder_boost_factor?: Uint64 | undefined
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
            input: { param: { slot: Uint64 } } & {
              query: {
                randao_reveal: Signature
                graffiti?: Graffiti | undefined
                skip_randao_verification?: string | undefined
                include_payload: boolean
              }
            } & { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasBuilderConfig | { [x: string]: unknown }
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
            input: { param: { slot: Uint64 } } & {
              query: {
                randao_reveal: Signature
                graffiti?: Graffiti | undefined
                skip_randao_verification?: string | undefined
                include_payload: boolean
              }
            } & { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasBuilderConfig | { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { slot: Uint64 } } & {
              query: {
                randao_reveal: Signature
                graffiti?: Graffiti | undefined
                skip_randao_verification?: string | undefined
                include_payload: boolean
              }
            } & { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasBuilderConfig | { [x: string]: unknown }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slot: Uint64 } } & {
              query: {
                randao_reveal: Signature
                graffiti?: Graffiti | undefined
                skip_randao_verification?: string | undefined
                include_payload: boolean
              }
            } & { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasBuilderConfig | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { slot: Uint64 } } & {
              query: {
                randao_reveal: Signature
                graffiti?: Graffiti | undefined
                skip_randao_verification?: string | undefined
                include_payload: boolean
              }
            } & { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasBuilderConfig | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { slot: Uint64 } } & {
              query: {
                randao_reveal: Signature
                graffiti?: Graffiti | undefined
                skip_randao_verification?: string | undefined
                include_payload: boolean
              }
            } & { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasBuilderConfig | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { slot: Uint64 } } & {
              query: {
                randao_reveal: Signature
                graffiti?: Graffiti | undefined
                skip_randao_verification?: string | undefined
                include_payload: boolean
              }
            } & { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasBuilderConfig | { [x: string]: unknown }
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
            input: { query: { slot: Uint64; committee_index?: Uint64 | undefined } }
            output: { data: Phase0AttestationData }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { slot: Uint64; committee_index?: Uint64 | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { slot: Uint64; committee_index?: Uint64 | undefined } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { slot: Uint64; committee_index?: Uint64 | undefined } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { slot: Uint64; committee_index?: Uint64 | undefined } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { slot: Uint64; committee_index?: Uint64 | undefined } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/payload_attestation_data': {
      $get:
        | {
            input: { query: { slot: Uint64 } }
            output: { version: 'gloas'; data: GloasPayloadAttestationData }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { slot: Uint64 } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | { input: { query: { slot: Uint64 } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { query: { slot: Uint64 } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { slot: Uint64 } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { slot: Uint64 } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { slot: Uint64 } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v2/validator/aggregate_attestation': {
      $get:
        | {
            input: { query: { attestation_data_root: Root; slot: Uint64; committee_index: Uint64 } }
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
            input: { query: { attestation_data_root: Root; slot: Uint64; committee_index: Uint64 } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { attestation_data_root: Root; slot: Uint64; committee_index: Uint64 } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { attestation_data_root: Root; slot: Uint64; committee_index: Uint64 } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { attestation_data_root: Root; slot: Uint64; committee_index: Uint64 } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { attestation_data_root: Root; slot: Uint64; committee_index: Uint64 } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { attestation_data_root: Root; slot: Uint64; committee_index: Uint64 } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v2/validator/aggregate_and_proofs': {
      $post:
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json:
                | GloasSignedAggregateAndProof[]
                | ElectraSignedAggregateAndProof[]
                | Phase0SignedAggregateAndProof[]
                | { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json:
                | GloasSignedAggregateAndProof[]
                | ElectraSignedAggregateAndProof[]
                | Phase0SignedAggregateAndProof[]
                | { [x: string]: unknown }
            }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json:
                | GloasSignedAggregateAndProof[]
                | ElectraSignedAggregateAndProof[]
                | Phase0SignedAggregateAndProof[]
                | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json:
                | GloasSignedAggregateAndProof[]
                | ElectraSignedAggregateAndProof[]
                | Phase0SignedAggregateAndProof[]
                | { [x: string]: unknown }
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
                validator_index: Uint64
                committee_index: Uint64
                committees_at_slot: Uint64
                slot: Uint64
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
                validator_index: Uint64
                committee_index: Uint64
                committees_at_slot: Uint64
                slot: Uint64
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
                validator_index: Uint64
                committee_index: Uint64
                committees_at_slot: Uint64
                slot: Uint64
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
                validator_index: Uint64
                committee_index: Uint64
                committees_at_slot: Uint64
                slot: Uint64
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
            input: { json: AltairSyncCommitteeSubscription[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: AltairSyncCommitteeSubscription[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AltairSyncCommitteeSubscription[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/validator/beacon_committee_selections': {
      $post:
        | {
            input: { json: BeaconCommitteeSelection[] }
            output: { data: BeaconCommitteeSelection[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BeaconCommitteeSelection[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BeaconCommitteeSelection[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: BeaconCommitteeSelection[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { json: BeaconCommitteeSelection[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/sync_committee_contribution': {
      $get:
        | {
            input: { query: { slot: Uint64; subcommittee_index: Uint64; beacon_block_root: Root } }
            output: { data: AltairSyncCommitteeContribution }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { slot: Uint64; subcommittee_index: Uint64; beacon_block_root: Root } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { slot: Uint64; subcommittee_index: Uint64; beacon_block_root: Root } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { slot: Uint64; subcommittee_index: Uint64; beacon_block_root: Root } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { slot: Uint64; subcommittee_index: Uint64; beacon_block_root: Root } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/sync_committee_selections': {
      $post:
        | {
            input: { json: SyncCommitteeSelection[] }
            output: { data: SyncCommitteeSelection[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SyncCommitteeSelection[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SyncCommitteeSelection[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: SyncCommitteeSelection[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { json: SyncCommitteeSelection[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/contribution_and_proofs': {
      $post:
        | {
            input: { json: AltairSignedContributionAndProof[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: AltairSignedContributionAndProof[] }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AltairSignedContributionAndProof[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/validator/prepare_beacon_proposer': {
      $post:
        | {
            input: { json: { validator_index: Uint64; fee_recipient: ExecutionAddress }[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { validator_index: Uint64; fee_recipient: ExecutionAddress }[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { validator_index: Uint64; fee_recipient: ExecutionAddress }[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/validator/register_validator': {
      $post:
        | {
            input: { json: SignedValidatorRegistration[] | { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: SignedValidatorRegistration[] | { [x: string]: unknown } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SignedValidatorRegistration[] | { [x: string]: unknown } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: SignedValidatorRegistration[] | { [x: string]: unknown } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/validator/proposer_preferences': {
      $post:
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasSignedProposerPreferences[] | { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasSignedProposerPreferences[] | { [x: string]: unknown }
            }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasSignedProposerPreferences[] | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasSignedProposerPreferences[] | { [x: string]: unknown }
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
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasBuilderPreferencesEntry[] | { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasBuilderPreferencesEntry[] | { [x: string]: unknown }
            }
            output: IndexedErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasBuilderPreferencesEntry[] | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasBuilderPreferencesEntry[] | { [x: string]: unknown }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'Eth-Consensus-Version': ConsensusVersion } } & {
              json: GloasBuilderPreferencesEntry[] | { [x: string]: unknown }
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
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: { data: { index: Uint64; is_live: boolean }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { epoch: Uint64 } } & { json: Uint64[] }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/eth/v1/validator/execution_payload_envelopes/:slot/:beacon_block_root': {
      $get:
        | {
            input: { param: { slot: Uint64; beacon_block_root: Root } }
            output: { version: 'gloas'; data: GloasExecutionPayloadEnvelope }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slot: Uint64; beacon_block_root: Root } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { slot: Uint64; beacon_block_root: Root } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slot: Uint64; beacon_block_root: Root } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slot: Uint64; beacon_block_root: Root } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { slot: Uint64; beacon_block_root: Root } }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/eth/v1/events': {
      $get:
        | {
            input: {
              query: {
                topics: (
                  | 'head'
                  | 'head_v2'
                  | 'block'
                  | 'block_gossip'
                  | 'attestation'
                  | 'single_attestation'
                  | 'voluntary_exit'
                  | 'bls_to_execution_change'
                  | 'proposer_slashing'
                  | 'attester_slashing'
                  | 'finalized_checkpoint'
                  | 'chain_reorg'
                  | 'contribution_and_proof'
                  | 'light_client_finality_update'
                  | 'light_client_optimistic_update'
                  | 'payload_attributes'
                  | 'data_column_sidecar'
                  | 'execution_payload'
                  | 'execution_payload_gossip'
                  | 'execution_payload_available'
                  | 'execution_payload_bid'
                  | 'payload_attestation_message'
                  | 'fast_confirmation'
                  | 'proposer_preferences'
                )[]
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                topics: (
                  | 'head'
                  | 'head_v2'
                  | 'block'
                  | 'block_gossip'
                  | 'attestation'
                  | 'single_attestation'
                  | 'voluntary_exit'
                  | 'bls_to_execution_change'
                  | 'proposer_slashing'
                  | 'attester_slashing'
                  | 'finalized_checkpoint'
                  | 'chain_reorg'
                  | 'contribution_and_proof'
                  | 'light_client_finality_update'
                  | 'light_client_optimistic_update'
                  | 'payload_attributes'
                  | 'data_column_sidecar'
                  | 'execution_payload'
                  | 'execution_payload_gossip'
                  | 'execution_payload_available'
                  | 'execution_payload_bid'
                  | 'payload_attestation_message'
                  | 'fast_confirmation'
                  | 'proposer_preferences'
                )[]
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                topics: (
                  | 'head'
                  | 'head_v2'
                  | 'block'
                  | 'block_gossip'
                  | 'attestation'
                  | 'single_attestation'
                  | 'voluntary_exit'
                  | 'bls_to_execution_change'
                  | 'proposer_slashing'
                  | 'attester_slashing'
                  | 'finalized_checkpoint'
                  | 'chain_reorg'
                  | 'contribution_and_proof'
                  | 'light_client_finality_update'
                  | 'light_client_optimistic_update'
                  | 'payload_attributes'
                  | 'data_column_sidecar'
                  | 'execution_payload'
                  | 'execution_payload_gossip'
                  | 'execution_payload_available'
                  | 'execution_payload_bid'
                  | 'payload_attestation_message'
                  | 'fast_confirmation'
                  | 'proposer_preferences'
                )[]
              }
            }
            output: { code: number; message: string; stacktraces?: string[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
