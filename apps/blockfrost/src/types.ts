type BlockContent = {
  time: number
  height: number | null
  hash: string
  slot: number | null
  epoch: number | null
  epoch_slot: number | null
  slot_leader: string
  size: number
  tx_count: number
  output: string | null
  fees: string | null
  block_vrf: string | null
  op_cert: string | null
  op_cert_counter: string | null
  previous_block: string | null
  next_block: string | null
  confirmations: number
}
type BlockContentTxs = string[]
type BlockContentTxsCbor = { tx_hash: string; cbor: string }[]
type BlockContentArray = BlockContent[]
type BlockContentAddresses = { address: string; transactions: { tx_hash: string }[] }[]
type GenesisContent = {
  active_slots_coefficient: number
  update_quorum: number
  max_lovelace_supply: string
  network_magic: number
  epoch_length: number
  system_start: number
  slots_per_kes_period: number
  slot_length: number
  max_kes_evolutions: number
  security_param: number
}
type Committee = {
  gov_action_id: string | null
  proposal_tx_hash: string | null
  proposal_index: number | null
  is_dissolved: boolean
  quorum: { numerator: number; denominator: number }
  members: {
    cc_cold_id: string
    cc_cold_hex: string
    cc_cold_has_script: boolean
    cc_hot_id: string | null
    cc_hot_hex: string | null
    cc_hot_has_script: boolean | null
    status: 'authorized' | 'not_authorized' | 'resigned'
    expiration_epoch: number
  }[]
}
type CommitteeVotes = {
  tx_hash: string
  voter_hot_id: string
  proposal_id: string
  proposal_tx_hash: string
  proposal_index: number
  governance_type:
    | 'hard_fork_initiation'
    | 'new_committee'
    | 'new_constitution'
    | 'info_action'
    | 'no_confidence'
    | 'parameter_change'
    | 'treasury_withdrawals'
  vote: 'yes' | 'no' | 'abstain'
  metadata_url: string | null
  metadata_hash: string | null
  block_height: number
  block_time: number
}[]
type Dreps = {
  drep_id: string
  hex: string
  amount: string
  has_script: boolean
  retired: boolean
  expired: boolean
  last_active_epoch: number | null
  metadata: {
    url: string
    hash: string
    json_metadata:
      | string
      | { [x: string]: unknown }
      | { [x: string]: unknown }[]
      | number
      | number
      | boolean
      | ({ [x: string]: unknown } | null)
    bytes: string | null
    error?:
      | {
          code:
            | 'HASH_MISMATCH'
            | 'CONNECTION_ERROR'
            | 'HTTP_RESPONSE_ERROR'
            | 'DECODE_ERROR'
            | 'SIZE_EXCEEDED'
            | 'UNKNOWN_ERROR'
          message: string
        }
      | undefined
  } | null
}[]
type Drep = {
  drep_id: string
  hex: string
  amount: string
  active: boolean
  active_epoch: number | null
  has_script: boolean
  retired: boolean
  expired: boolean
  last_active_epoch: number | null
}
type DrepDelegators = { address: string; amount: string }[]
type DrepMetadata = {
  drep_id: string
  hex: string
  url: string
  hash: string
  json_metadata:
    | string
    | { [x: string]: unknown }
    | { [x: string]: unknown }[]
    | number
    | number
    | boolean
    | ({ [x: string]: unknown } | null)
  bytes: string | null
  error?:
    | {
        code:
          | 'HASH_MISMATCH'
          | 'CONNECTION_ERROR'
          | 'HTTP_RESPONSE_ERROR'
          | 'DECODE_ERROR'
          | 'SIZE_EXCEEDED'
          | 'UNKNOWN_ERROR'
        message: string
      }
    | undefined
}
type DrepUpdates = {
  tx_hash: string
  cert_index: number
  action: 'registered' | 'deregistered' | 'updated'
  deposit: string | null
}[]
type DrepVotes = {
  tx_hash: string
  cert_index: number
  proposal_id: string
  proposal_tx_hash: string
  proposal_cert_index: number
  vote: 'yes' | 'no' | 'abstain'
}[]
type Proposals = {
  id: string
  tx_hash: string
  cert_index: number
  governance_type:
    | 'hard_fork_initiation'
    | 'new_committee'
    | 'new_constitution'
    | 'info_action'
    | 'no_confidence'
    | 'parameter_change'
    | 'treasury_withdrawals'
}[]
type Proposal = {
  id: string
  tx_hash: string
  cert_index: number
  governance_type:
    | 'hard_fork_initiation'
    | 'new_committee'
    | 'new_constitution'
    | 'info_action'
    | 'no_confidence'
    | 'parameter_change'
    | 'treasury_withdrawals'
  governance_description: { [x: string]: unknown } | null
  deposit: string
  return_address: string
  ratified_epoch: number | null
  enacted_epoch: number | null
  dropped_epoch: number | null
  expired_epoch: number | null
  expiration: number
}
type ProposalParameters = {
  id: string
  tx_hash: string
  cert_index: number
  parameters: {
    epoch?: (number | null) | undefined
    min_fee_a: number | null
    min_fee_b: number | null
    max_block_size: number | null
    max_tx_size: number | null
    max_block_header_size: number | null
    key_deposit: string | null
    pool_deposit: string | null
    e_max: number | null
    n_opt: number | null
    a0: number | null
    rho: number | null
    tau: number | null
    decentralisation_param: number | null
    extra_entropy: string | null
    protocol_major_ver: number | null
    protocol_minor_ver: number | null
    min_utxo: string | null
    min_pool_cost: string | null
    cost_models: { [x: string]: unknown } | null
    price_mem: number | null
    price_step: number | null
    max_tx_ex_mem: string | null
    max_tx_ex_steps: string | null
    max_block_ex_mem: string | null
    max_block_ex_steps: string | null
    max_val_size: string | null
    collateral_percent: number | null
    max_collateral_inputs: number | null
    coins_per_utxo_size: string | null
    coins_per_utxo_word: string | null
    pvt_motion_no_confidence: number | null
    pvt_committee_normal: number | null
    pvt_committee_no_confidence: number | null
    pvt_hard_fork_initiation: number | null
    dvt_motion_no_confidence: number | null
    dvt_committee_normal: number | null
    dvt_committee_no_confidence: number | null
    dvt_update_to_constitution: number | null
    dvt_hard_fork_initiation: number | null
    dvt_p_p_network_group: number | null
    dvt_p_p_economic_group: number | null
    dvt_p_p_technical_group: number | null
    dvt_p_p_gov_group: number | null
    dvt_treasury_withdrawal: number | null
    committee_min_size: string | null
    committee_max_term_length: string | null
    gov_action_lifetime: string | null
    gov_action_deposit: string | null
    drep_deposit: string | null
    drep_activity: string | null
    pvtpp_security_group: number | null
    pvt_p_p_security_group: number | null
    min_fee_ref_script_cost_per_byte: number | null
  }
}
type ProposalWithdrawals = { stake_address: string; amount: string }[]
type ProposalVotes = {
  tx_hash: string
  cert_index: number
  voter_role: 'constitutional_committee' | 'drep' | 'spo'
  voter: string
  vote: 'yes' | 'no' | 'abstain'
  counted: boolean
}[]
type ProposalMetadata = {
  id: string
  tx_hash: string
  cert_index: number
  url: string
  hash: string
  json_metadata:
    | string
    | { [x: string]: unknown }
    | { [x: string]: unknown }[]
    | number
    | number
    | boolean
    | ({ [x: string]: unknown } | null)
  bytes: string
}
type ProposalMetadataV2 = {
  id: string
  tx_hash: string
  cert_index: number
  url: string
  hash: string
  json_metadata:
    | string
    | { [x: string]: unknown }
    | { [x: string]: unknown }[]
    | number
    | number
    | boolean
    | ({ [x: string]: unknown } | null)
  bytes: string | null
  error?:
    | {
        code:
          | 'HASH_MISMATCH'
          | 'CONNECTION_ERROR'
          | 'HTTP_RESPONSE_ERROR'
          | 'DECODE_ERROR'
          | 'SIZE_EXCEEDED'
          | 'UNKNOWN_ERROR'
        message: string
      }
    | undefined
}
type EpochContent = {
  epoch: number
  start_time: number
  end_time: number
  first_block_time: number
  last_block_time: number
  block_count: number
  tx_count: number
  output: string
  fees: string
  active_stake: string | null
}
type EpochParamContent = {
  epoch: number
  min_fee_a: number
  min_fee_b: number
  max_block_size: number
  max_tx_size: number
  max_block_header_size: number
  key_deposit: string
  pool_deposit: string
  e_max: number
  n_opt: number
  a0: number
  rho: number
  tau: number
  decentralisation_param: number
  extra_entropy: string | null
  protocol_major_ver: number
  protocol_minor_ver: number
  min_utxo: string
  min_pool_cost: string
  nonce: string
  cost_models: { [x: string]: unknown } | null
  cost_models_raw?: ({ [x: string]: unknown } | null) | undefined
  price_mem: number | null
  price_step: number | null
  max_tx_ex_mem: string | null
  max_tx_ex_steps: string | null
  max_block_ex_mem: string | null
  max_block_ex_steps: string | null
  max_val_size: string | null
  collateral_percent: number | null
  max_collateral_inputs: number | null
  coins_per_utxo_size: string | null
  coins_per_utxo_word: string | null
  pvt_motion_no_confidence: number | null
  pvt_committee_normal: number | null
  pvt_committee_no_confidence: number | null
  pvt_hard_fork_initiation: number | null
  dvt_motion_no_confidence: number | null
  dvt_committee_normal: number | null
  dvt_committee_no_confidence: number | null
  dvt_update_to_constitution: number | null
  dvt_hard_fork_initiation: number | null
  dvt_p_p_network_group: number | null
  dvt_p_p_economic_group: number | null
  dvt_p_p_technical_group: number | null
  dvt_p_p_gov_group: number | null
  dvt_treasury_withdrawal: number | null
  committee_min_size: string | null
  committee_max_term_length: string | null
  gov_action_lifetime: string | null
  gov_action_deposit: string | null
  drep_deposit: string | null
  drep_activity: string | null
  pvtpp_security_group: number | null
  pvt_p_p_security_group: number | null
  min_fee_ref_script_cost_per_byte: number | null
}
type EpochContentArray = EpochContent[]
type EpochStakeContent = { stake_address: string; pool_id: string; amount: string }[]
type EpochStakePoolContent = { stake_address: string; amount: string }[]
type EpochBlockContent = string[]
type TxContent = {
  hash: string
  block: string
  block_height: number
  block_time: number
  slot: number
  index: number
  output_amount: { unit: string; quantity: string }[]
  fees: string
  deposit: string
  size: number
  invalid_before: string | null
  invalid_hereafter: string | null
  utxo_count: number
  withdrawal_count: number
  mir_cert_count: number
  delegation_count: number
  stake_cert_count: number
  pool_update_count: number
  pool_retire_count: number
  asset_mint_or_burn_count: number
  redeemer_count: number
  valid_contract: boolean
  treasury_donation: string
}
type TxContentUtxo = {
  hash: string
  inputs: {
    address: string
    amount: { unit: string; quantity: string }[]
    tx_hash: string
    output_index: number
    data_hash: string | null
    inline_datum: string | null
    reference_script_hash: string | null
    collateral: boolean
    reference?: boolean | undefined
  }[]
  outputs: {
    address: string
    amount: { unit: string; quantity: string }[]
    output_index: number
    data_hash: string | null
    inline_datum: string | null
    collateral: boolean
    reference_script_hash: string | null
    consumed_by_tx?: (string | null) | undefined
  }[]
}
type TxContentStakeAddr = { cert_index: number; address: string; registration: boolean }[]
type TxContentDelegations = {
  index: number
  cert_index: number
  address: string
  pool_id: string
  active_epoch: number
}[]
type TxContentWithdrawals = { address: string; amount: string }[]
type TxContentMirs = {
  pot: 'reserve' | 'treasury'
  cert_index: number
  address: string
  amount: string
}[]
type TxContentPoolCerts = {
  cert_index: number
  pool_id: string
  vrf_key: string
  pledge: string
  margin_cost: number
  fixed_cost: string
  reward_account: string
  owners: string[]
  metadata: {
    url: string | null
    hash: string | null
    ticker: string | null
    name: string | null
    description: string | null
    homepage: string | null
  } | null
  relays: {
    ipv4: string | null
    ipv6: string | null
    dns: string | null
    dns_srv: string | null
    port: number
  }[]
  active_epoch: number
}[]
type TxContentPoolRetires = { cert_index: number; pool_id: string; retiring_epoch: number }[]
type TxContentMetadata = { label: string; json_metadata: string | { [x: string]: unknown } }[]
type TxContentMetadataCbor = {
  label: string
  cbor_metadata: string | null
  metadata: string | null
}[]
type TxContentRedeemers = {
  tx_index: number
  purpose: 'spend' | 'mint' | 'cert' | 'reward' | 'vote' | 'propose'
  script_hash: string
  redeemer_data_hash: string
  datum_hash: string
  unit_mem: string
  unit_steps: string
  fee: string
}[]
type TxContentRequiredSigners = { witness_hash: string }[]
type TxContentCbor = { cbor: string }
type AccountContent = {
  stake_address: string
  active: boolean
  registered: boolean
  active_epoch: number | null
  controlled_amount: string
  rewards_sum: string
  withdrawals_sum: string
  reserves_sum: string
  treasury_sum: string
  withdrawable_amount: string
  pool_id: string | null
  drep_id: string | null
}
type AccountRewardContent = {
  epoch: number
  amount: string
  pool_id: string
  type: 'leader' | 'member' | 'pool_deposit_refund'
}[]
type AccountHistoryContent = { active_epoch: number; amount: string; pool_id: string }[]
type AccountDelegationContent = {
  active_epoch: number
  tx_hash: string
  amount: string
  pool_id: string
  tx_slot: number
  block_time: number
  block_height: number
}[]
type AccountRegistrationContent = {
  tx_hash: string
  action: 'registered' | 'deregistered'
  deposit: string | null
  tx_slot: number
  block_time: number
  block_height: number
}[]
type AccountWithdrawalContent = {
  tx_hash: string
  amount: string
  tx_slot: number
  block_time: number
  block_height: number
}[]
type AccountMirContent = {
  tx_hash: string
  amount: string
  tx_slot: number
  block_time: number
  block_height: number
}[]
type AccountAddressesContent = { address: string }[]
type AccountAddressesAssets = { unit: string; quantity: string }[]
type AccountAddressesTotal = {
  stake_address: string
  received_sum: { unit: string; quantity: string }[]
  sent_sum: { unit: string; quantity: string }[]
  tx_count: number
}
type AccountUtxoContent = {
  address: string
  tx_hash: string
  tx_index: number
  output_index: number
  amount: { unit: string; quantity: string }[]
  block: string
  data_hash: string | null
  inline_datum: string | null
  reference_script_hash: string | null
}[]
type AccountTransactionsContent = {
  address: string
  tx_hash: string
  tx_index: number
  block_height: number
  block_time: number
}[]
type MempoolContent = { tx_hash: string }[]
type MempoolTxContent = {
  tx: {
    hash: string
    output_amount: { unit: string; quantity: string }[]
    fees: string
    deposit: string
    size: number
    invalid_before: string | null
    invalid_hereafter: string | null
    utxo_count: number
    withdrawal_count: number
    mir_cert_count: number
    delegation_count: number
    stake_cert_count: number
    pool_update_count: number
    pool_retire_count: number
    asset_mint_or_burn_count: number
    redeemer_count: number
    valid_contract: boolean
  }
  inputs: {
    address?: string | undefined
    tx_hash: string
    output_index: number
    collateral: boolean
    reference?: boolean | undefined
  }[]
  outputs: {
    address: string
    amount: { unit: string; quantity: string }[]
    output_index: number
    data_hash: string | null
    inline_datum: string | null
    collateral: boolean
    reference_script_hash: string | null
  }[]
  redeemers?:
    | {
        tx_index: number
        purpose: 'spend' | 'mint' | 'cert' | 'reward' | 'vote' | 'propose'
        unit_mem: string
        unit_steps: string
      }[]
    | undefined
}
type MempoolAddressesContent = { tx_hash: string }[]
type TxMetadataLabels = { label: string; cip10: string | null; count: string }[]
type TxMetadataLabelJson = {
  tx_hash: string
  json_metadata:
    | string
    | { [x: string]: unknown }
    | { [x: string]: unknown }[]
    | number
    | number
    | boolean
    | ({ [x: string]: unknown } | null)
}[]
type TxMetadataLabelCbor = {
  tx_hash: string
  cbor_metadata: string | null
  metadata: string | null
}[]
type AddressContent = {
  address: string
  amount: { unit: string; quantity: string }[]
  stake_address: string | null
  type: 'byron' | 'shelley'
  script: boolean
}
type AddressContentExtended = {
  address: string
  amount: {
    unit: string
    quantity: string
    decimals: number | null
    has_nft_onchain_metadata: boolean
  }[]
  stake_address: string | null
  type: 'byron' | 'shelley'
  script: boolean
}
type AddressContentTotal = {
  address: string
  received_sum: { unit: string; quantity: string }[]
  sent_sum: { unit: string; quantity: string }[]
  tx_count: number
}
type AddressUtxoContent = {
  address: string
  tx_hash: string
  tx_index: number
  output_index: number
  amount: { unit: string; quantity: string }[]
  block: string
  data_hash: string | null
  inline_datum: string | null
  reference_script_hash: string | null
}[]
type AddressTxsContent = string[]
type AddressTransactionsContent = {
  tx_hash: string
  tx_index: number
  block_height: number
  block_time: number
}[]
type PoolList = string[]
type PoolListExtended = {
  pool_id: string
  hex: string
  active_stake: string
  live_stake: string
  live_saturation: number
  blocks_minted: number
  declared_pledge: string
  margin_cost: number
  fixed_cost: string
  metadata: {
    url: string | null
    hash: string | null
    error?:
      | {
          code:
            | 'HASH_MISMATCH'
            | 'CONNECTION_ERROR'
            | 'HTTP_RESPONSE_ERROR'
            | 'DECODE_ERROR'
            | 'SIZE_EXCEEDED'
            | 'UNKNOWN_ERROR'
          message: string
        }
      | undefined
    ticker: string | null
    name: string | null
    description: string | null
    homepage: string | null
  } | null
}[]
type PoolListRetire = { pool_id: string; epoch: number }[]
type Pool = {
  pool_id: string
  hex: string
  vrf_key: string
  blocks_minted: number
  blocks_epoch: number
  live_stake: string
  live_size: number
  live_saturation: number
  live_delegators: number
  active_stake: string
  active_size: number
  declared_pledge: string
  live_pledge: string
  margin_cost: number
  fixed_cost: string
  reward_account: string
  owners: string[]
  registration: string[]
  retirement: string[]
  calidus_key: {
    id: string
    pub_key: string
    nonce: number
    tx_hash: string
    block_height: number
    block_time: number
    epoch: number
  } | null
}
type PoolHistory = {
  epoch: number
  blocks: number
  active_stake: string
  active_size: number
  delegators_count: number
  rewards: string
  fees: string
}[]
type PoolMetadata = {
  pool_id: string
  hex: string
  url: string | null
  hash: string | null
  error?:
    | {
        code:
          | 'HASH_MISMATCH'
          | 'CONNECTION_ERROR'
          | 'HTTP_RESPONSE_ERROR'
          | 'DECODE_ERROR'
          | 'SIZE_EXCEEDED'
          | 'UNKNOWN_ERROR'
        message: string
      }
    | undefined
  ticker: string | null
  name: string | null
  description: string | null
  homepage: string | null
}
type EmptyObject = { [x: string]: unknown }
type PoolRelays = {
  ipv4: string | null
  ipv6: string | null
  dns: string | null
  dns_srv: string | null
  port: number
}[]
type PoolDelegators = { address: string; live_stake: string }[]
type PoolBlocks = string[]
type PoolUpdates = { tx_hash: string; cert_index: number; action: 'registered' | 'deregistered' }[]
type PoolVotes = { tx_hash: string; cert_index: number; vote: 'yes' | 'no' | 'abstain' }[]
type Assets = { asset: string; quantity: string }[]
type Asset = {
  asset: string
  policy_id: string
  asset_name: string | null
  fingerprint: string
  quantity: string
  initial_mint_tx_hash: string
  mint_or_burn_count: number
  onchain_metadata: { [x: string]: unknown } | null
  onchain_metadata_standard?: 'CIP25v1' | 'CIP25v2' | 'CIP68v1' | 'CIP68v2' | 'CIP68v3' | undefined
  onchain_metadata_extra?: (string | null) | undefined
  metadata: {
    name: string
    description: string
    ticker: string | null
    url: string | null
    logo: string | null
    decimals: number | null
  } | null
}
type AssetHistory = { tx_hash: string; action: 'minted' | 'burned'; amount: string }[]
type AssetTxs = string[]
type AssetTransactions = {
  tx_hash: string
  tx_index: number
  block_height: number
  block_time: number
}[]
type AssetAddresses = { address: string; quantity: string }[]
type AssetUtxoContent = {
  address: string
  tx_hash: string
  output_index: number
  amount: { unit: string; quantity: string }[]
  block: string
  block_height: number
  block_time: number
  data_hash: string | null
  inline_datum: string | null
  inline_datum_json: { [x: string]: unknown } | null
  reference_script_hash: string | null
}[]
type AssetPolicy = { asset: string; quantity: string }[]
type Scripts = { script_hash: string }[]
type Script = {
  script_hash: string
  type: 'timelock' | 'plutusV1' | 'plutusV2' | 'plutusV3'
  serialised_size: number | null
}
type ScriptJson = {
  json:
    | string
    | { [x: string]: unknown }
    | { [x: string]: unknown }[]
    | number
    | number
    | boolean
    | ({ [x: string]: unknown } | null)
}
type ScriptCbor = { cbor: string | null }
type ScriptRedeemers = {
  tx_hash: string
  tx_index: number
  purpose: 'spend' | 'mint' | 'cert' | 'reward' | 'vote' | 'propose'
  redeemer_data_hash: string
  datum_hash: string
  unit_mem: string
  unit_steps: string
  fee: string
}[]
type ScriptUtxos = {
  address: string
  tx_hash: string
  output_index: number
  amount: { unit: string; quantity: string }[]
  block: string
  data_hash: string | null
  inline_datum: string | null
  reference_script_hash: string
}[]
type ScriptDatum = { json_value: { [x: string]: unknown } }
type ScriptDatumCbor = { cbor: string }
type UtilsAddressesXpub = { xpub: string; role: number; index: number; address: string }
type Metrics = { time: number; calls: number }[]
type MetricsEndpoints = { time: number; calls: number; endpoint: string }[]
type Network = {
  supply: {
    max: string
    total: string
    circulating: string
    locked: string
    treasury: string
    reserves: string
  }
  stake: { live: string; active: string }
}
type NetworkEras = {
  start: { time: number; slot: number; epoch: number }
  end: { time: number; slot: number; epoch: number }
  parameters: { epoch_length: number; slot_length: number; safe_zone: number }
}[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get:
        | { input: {}; output: { url: string; version: string }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/health': {
      $get:
        | { input: {}; output: { is_healthy: boolean }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/health/clock': {
      $get:
        | { input: {}; output: { server_time: bigint }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/blocks/latest': {
      $get:
        | { input: {}; output: BlockContent; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/blocks/latest/txs': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: BlockContentTxs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/blocks/latest/txs/cbor': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: BlockContentTxsCbor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/blocks/:hash_or_number': {
      $get:
        | {
            input: { param: { hash_or_number: string } }
            output: BlockContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash_or_number: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash_or_number: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash_or_number: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash_or_number: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash_or_number: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash_or_number: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/blocks/:hash_or_number/next': {
      $get:
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: BlockContentArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/blocks/:hash_or_number/previous': {
      $get:
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: BlockContentArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/blocks/slot/:slot_number': {
      $get:
        | {
            input: { param: { slot_number: number } }
            output: BlockContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slot_number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slot_number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slot_number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slot_number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { slot_number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { slot_number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/blocks/epoch/:epoch_number/slot/:slot_number': {
      $get:
        | {
            input: { param: { epoch_number: number; slot_number: number } }
            output: BlockContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epoch_number: number; slot_number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { epoch_number: number; slot_number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { epoch_number: number; slot_number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { epoch_number: number; slot_number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { epoch_number: number; slot_number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { epoch_number: number; slot_number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/blocks/:hash_or_number/txs': {
      $get:
        | {
            input: { param: { hash_or_number: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: BlockContentTxs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/blocks/:hash_or_number/txs/cbor': {
      $get:
        | {
            input: { param: { hash_or_number: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: BlockContentTxsCbor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/blocks/:hash_or_number/addresses': {
      $get:
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: BlockContentAddresses
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash_or_number: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/genesis': {
      $get:
        | { input: {}; output: GenesisContent; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/committee': {
      $get:
        | { input: {}; output: Committee; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/committee/votes': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CommitteeVotes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/committee/:cc_id/votes': {
      $get:
        | {
            input: { param: { cc_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CommitteeVotes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cc_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cc_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cc_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { cc_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cc_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/dreps': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'amount' | undefined
                retired?: boolean | undefined
                expired?: boolean | undefined
              }
            }
            output: Dreps
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'amount' | undefined
                retired?: boolean | undefined
                expired?: boolean | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'amount' | undefined
                retired?: boolean | undefined
                expired?: boolean | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'amount' | undefined
                retired?: boolean | undefined
                expired?: boolean | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'amount' | undefined
                retired?: boolean | undefined
                expired?: boolean | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'amount' | undefined
                retired?: boolean | undefined
                expired?: boolean | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/dreps/:drep_id': {
      $get:
        | { input: { param: { drep_id: string } }; output: Drep; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { drep_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { drep_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { drep_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { drep_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { drep_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/dreps/:drep_id/delegators': {
      $get:
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: DrepDelegators
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/dreps/:drep_id/metadata': {
      $get:
        | {
            input: { param: { drep_id: string } }
            output: DrepMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { drep_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { drep_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { drep_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { drep_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { drep_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/dreps/:drep_id/updates': {
      $get:
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: DrepUpdates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/dreps/:drep_id/votes': {
      $get:
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: DrepVotes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { drep_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/proposals': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Proposals
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/proposals/:tx_hash/:cert_index': {
      $get:
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: Proposal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/proposals/:tx_hash/:cert_index/parameters': {
      $get:
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: ProposalParameters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/proposals/:tx_hash/:cert_index/withdrawals': {
      $get:
        | {
            input: { param: { tx_hash: string; cert_index: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ProposalWithdrawals
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/proposals/:tx_hash/:cert_index/votes': {
      $get:
        | {
            input: { param: { tx_hash: string; cert_index: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ProposalVotes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/proposals/:tx_hash/:cert_index/metadata': {
      $get:
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: ProposalMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { tx_hash: string; cert_index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/proposals/:gov_action_id': {
      $get:
        | {
            input: { param: { gov_action_id: string } }
            output: Proposal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/proposals/:gov_action_id/parameters': {
      $get:
        | {
            input: { param: { gov_action_id: string } }
            output: ProposalParameters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/proposals/:gov_action_id/withdrawals': {
      $get:
        | {
            input: { param: { gov_action_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ProposalWithdrawals
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gov_action_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { gov_action_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { gov_action_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { gov_action_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { gov_action_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { gov_action_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/proposals/:gov_action_id/votes': {
      $get:
        | {
            input: { param: { gov_action_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ProposalVotes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gov_action_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { gov_action_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { gov_action_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { gov_action_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { gov_action_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/governance/proposals/:gov_action_id/metadata': {
      $get:
        | {
            input: { param: { gov_action_id: string } }
            output: ProposalMetadataV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { gov_action_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/epochs/latest': {
      $get:
        | { input: {}; output: EpochContent; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/epochs/latest/parameters': {
      $get:
        | { input: {}; output: EpochParamContent; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/epochs/:number': {
      $get:
        | {
            input: { param: { number: number } }
            output: EpochContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/epochs/:number/next': {
      $get:
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: EpochContentArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/epochs/:number/previous': {
      $get:
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: EpochContentArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/epochs/:number/stakes': {
      $get:
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: EpochStakeContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { number: number } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/epochs/:number/stakes/:pool_id': {
      $get:
        | {
            input: { param: { number: number; pool_id: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: EpochStakePoolContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number: number; pool_id: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { number: number; pool_id: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { number: number; pool_id: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { number: number; pool_id: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { number: number; pool_id: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { number: number; pool_id: string } } & {
              query: { count?: number | undefined; page?: number | undefined }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/epochs/:number/blocks': {
      $get:
        | {
            input: { param: { number: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: EpochBlockContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { number: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { number: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { number: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { number: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { number: number } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/epochs/:number/blocks/:pool_id': {
      $get:
        | {
            input: { param: { number: number; pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: EpochBlockContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number: number; pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { number: number; pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { number: number; pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { number: number; pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { number: number; pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { number: number; pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/epochs/:number/parameters': {
      $get:
        | {
            input: { param: { number: number } }
            output: EpochParamContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { number: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/txs/:hash': {
      $get:
        | {
            input: { param: { hash: string } }
            output: TxContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/txs/:hash/utxos': {
      $get:
        | {
            input: { param: { hash: string } }
            output: TxContentUtxo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/txs/:hash/stakes': {
      $get:
        | {
            input: { param: { hash: string } }
            output: TxContentStakeAddr
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/txs/:hash/delegations': {
      $get:
        | {
            input: { param: { hash: string } }
            output: TxContentDelegations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/txs/:hash/withdrawals': {
      $get:
        | {
            input: { param: { hash: string } }
            output: TxContentWithdrawals
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/txs/:hash/mirs': {
      $get:
        | {
            input: { param: { hash: string } }
            output: TxContentMirs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/txs/:hash/pool_updates': {
      $get:
        | {
            input: { param: { hash: string } }
            output: TxContentPoolCerts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/txs/:hash/pool_retires': {
      $get:
        | {
            input: { param: { hash: string } }
            output: TxContentPoolRetires
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/txs/:hash/metadata': {
      $get:
        | {
            input: { param: { hash: string } }
            output: TxContentMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/txs/:hash/metadata/cbor': {
      $get:
        | {
            input: { param: { hash: string } }
            output: TxContentMetadataCbor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/txs/:hash/redeemers': {
      $get:
        | {
            input: { param: { hash: string } }
            output: TxContentRedeemers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/txs/:hash/required_signers': {
      $get:
        | {
            input: { param: { hash: string } }
            output: TxContentRequiredSigners
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/txs/:hash/cbor': {
      $get:
        | {
            input: { param: { hash: string } }
            output: TxContentCbor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tx/submit': {
      $post:
        | { input: { json: string }; output: string; outputFormat: 'json'; status: 200 }
        | {
            input: { json: string }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: string }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: string }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: string }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { json: string }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 425
          }
        | {
            input: { json: string }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: string }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:stake_address': {
      $get:
        | {
            input: { param: { stake_address: string } }
            output: AccountContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stake_address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { stake_address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { stake_address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { stake_address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { stake_address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { stake_address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:stake_address/rewards': {
      $get:
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AccountRewardContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:stake_address/history': {
      $get:
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AccountHistoryContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:stake_address/delegations': {
      $get:
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AccountDelegationContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:stake_address/registrations': {
      $get:
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AccountRegistrationContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:stake_address/withdrawals': {
      $get:
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AccountWithdrawalContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:stake_address/mirs': {
      $get:
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AccountMirContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:stake_address/addresses': {
      $get:
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AccountAddressesContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:stake_address/addresses/assets': {
      $get:
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AccountAddressesAssets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:stake_address/addresses/total': {
      $get:
        | {
            input: { param: { stake_address: string } }
            output: AccountAddressesTotal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stake_address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { stake_address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { stake_address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { stake_address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { stake_address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { stake_address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:stake_address/utxos': {
      $get:
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AccountUtxoContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:stake_address/transactions': {
      $get:
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: AccountTransactionsContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { stake_address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mempool': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: MempoolContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mempool/:hash': {
      $get:
        | {
            input: { param: { hash: string } }
            output: MempoolTxContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mempool/addresses/:address': {
      $get:
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: MempoolAddressesContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metadata/txs/labels': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: TxMetadataLabels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metadata/txs/labels/:label': {
      $get:
        | {
            input: { param: { label: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: TxMetadataLabelJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { label: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { label: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { label: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { label: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { label: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { label: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metadata/txs/labels/:label/cbor': {
      $get:
        | {
            input: { param: { label: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: TxMetadataLabelCbor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { label: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { label: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { label: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { label: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { label: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { label: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/addresses/:address': {
      $get:
        | {
            input: { param: { address: string } }
            output: AddressContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/addresses/:address/extended': {
      $get:
        | {
            input: { param: { address: string } }
            output: AddressContentExtended
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/addresses/:address/total': {
      $get:
        | {
            input: { param: { address: string } }
            output: AddressContentTotal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { address: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/addresses/:address/utxos': {
      $get:
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AddressUtxoContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/addresses/:address/utxos/:asset': {
      $get:
        | {
            input: { param: { address: string; asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AddressUtxoContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string; asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string; asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string; asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string; asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { address: string; asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { address: string; asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/addresses/:address/txs': {
      $get:
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AddressTxsContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/addresses/:address/transactions': {
      $get:
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: AddressTransactionsContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { address: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pools': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PoolList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pools/extended': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PoolListExtended
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pools/retired': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PoolListRetire
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pools/retiring': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PoolListRetire
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pools/:pool_id': {
      $get:
        | { input: { param: { pool_id: string } }; output: Pool; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pools/:pool_id/history': {
      $get:
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PoolHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pools/:pool_id/metadata': {
      $get:
        | {
            input: { param: { pool_id: string } }
            output: PoolMetadata | EmptyObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pools/:pool_id/relays': {
      $get:
        | {
            input: { param: { pool_id: string } }
            output: PoolRelays
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { pool_id: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pools/:pool_id/delegators': {
      $get:
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PoolDelegators
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pools/:pool_id/blocks': {
      $get:
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PoolBlocks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pools/:pool_id/updates': {
      $get:
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PoolUpdates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pools/:pool_id/votes': {
      $get:
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PoolVotes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { pool_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/assets': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Assets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/assets/:asset': {
      $get:
        | { input: { param: { asset: string } }; output: Asset; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { asset: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { asset: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { asset: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { asset: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { asset: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { asset: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/assets/:asset/history': {
      $get:
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AssetHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/assets/:asset/txs': {
      $get:
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AssetTxs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/assets/:asset/transactions': {
      $get:
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: AssetTransactions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/assets/:asset/addresses': {
      $get:
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AssetAddresses
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/assets/:asset/utxos': {
      $get:
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: AssetUtxoContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { asset: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/assets/policy/:policy_id': {
      $get:
        | {
            input: { param: { policy_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AssetPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { policy_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { policy_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { policy_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { policy_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { policy_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { policy_id: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/scripts': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Scripts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/scripts/:script_hash': {
      $get:
        | {
            input: { param: { script_hash: string } }
            output: Script
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/scripts/:script_hash/json': {
      $get:
        | {
            input: { param: { script_hash: string } }
            output: ScriptJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/scripts/:script_hash/cbor': {
      $get:
        | {
            input: { param: { script_hash: string } }
            output: ScriptCbor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { script_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/scripts/:script_hash/redeemers': {
      $get:
        | {
            input: { param: { script_hash: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ScriptRedeemers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { script_hash: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { script_hash: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { script_hash: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { script_hash: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { script_hash: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { script_hash: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/scripts/:script_hash/utxos': {
      $get:
        | {
            input: { param: { script_hash: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ScriptUtxos
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { script_hash: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { script_hash: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { script_hash: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { script_hash: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { script_hash: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { script_hash: string } } & {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/scripts/datum/:datum_hash': {
      $get:
        | {
            input: { param: { datum_hash: string } }
            output: ScriptDatum
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datum_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { datum_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { datum_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { datum_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { datum_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { datum_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/scripts/datum/:datum_hash/cbor': {
      $get:
        | {
            input: { param: { datum_hash: string } }
            output: ScriptDatumCbor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datum_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { datum_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { datum_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { datum_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { datum_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { datum_hash: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/utils/addresses/xpub/:xpub/:role/:index': {
      $get:
        | {
            input: { param: { xpub: string; role: number; index: number } }
            output: UtilsAddressesXpub
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { xpub: string; role: number; index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { xpub: string; role: number; index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { xpub: string; role: number; index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { xpub: string; role: number; index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { xpub: string; role: number; index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { xpub: string; role: number; index: number } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/utils/txs/evaluate': {
      $post:
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/cbor' }
            } & { json: string }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/cbor' }
            } & { json: string }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/cbor' }
            } & { json: string }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/cbor' }
            } & { json: string }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/cbor' }
            } & { json: string }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/cbor' }
            } & { json: string }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 425
          }
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/cbor' }
            } & { json: string }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/cbor' }
            } & { json: string }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/utils/txs/evaluate/utxos': {
      $post:
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/json' }
            } & {
              json: {
                cbor: string
                additionalUtxoSet?:
                  | (
                      | { txId?: string | undefined; index?: number | undefined }
                      | {
                          address: string
                          value: { coins: number; assets?: { [x: string]: number } | undefined }
                          datum_hash?: string | undefined
                          datum?: { [x: string]: unknown } | undefined
                          script?: { [x: string]: unknown } | undefined
                        }
                    )[][]
                  | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/json' }
            } & {
              json: {
                cbor: string
                additionalUtxoSet?:
                  | (
                      | { txId?: string | undefined; index?: number | undefined }
                      | {
                          address: string
                          value: { coins: number; assets?: { [x: string]: number } | undefined }
                          datum_hash?: string | undefined
                          datum?: { [x: string]: unknown } | undefined
                          script?: { [x: string]: unknown } | undefined
                        }
                    )[][]
                  | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/json' }
            } & {
              json: {
                cbor: string
                additionalUtxoSet?:
                  | (
                      | { txId?: string | undefined; index?: number | undefined }
                      | {
                          address: string
                          value: { coins: number; assets?: { [x: string]: number } | undefined }
                          datum_hash?: string | undefined
                          datum?: { [x: string]: unknown } | undefined
                          script?: { [x: string]: unknown } | undefined
                        }
                    )[][]
                  | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/json' }
            } & {
              json: {
                cbor: string
                additionalUtxoSet?:
                  | (
                      | { txId?: string | undefined; index?: number | undefined }
                      | {
                          address: string
                          value: { coins: number; assets?: { [x: string]: number } | undefined }
                          datum_hash?: string | undefined
                          datum?: { [x: string]: unknown } | undefined
                          script?: { [x: string]: unknown } | undefined
                        }
                    )[][]
                  | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/json' }
            } & {
              json: {
                cbor: string
                additionalUtxoSet?:
                  | (
                      | { txId?: string | undefined; index?: number | undefined }
                      | {
                          address: string
                          value: { coins: number; assets?: { [x: string]: number } | undefined }
                          datum_hash?: string | undefined
                          datum?: { [x: string]: unknown } | undefined
                          script?: { [x: string]: unknown } | undefined
                        }
                    )[][]
                  | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/json' }
            } & {
              json: {
                cbor: string
                additionalUtxoSet?:
                  | (
                      | { txId?: string | undefined; index?: number | undefined }
                      | {
                          address: string
                          value: { coins: number; assets?: { [x: string]: number } | undefined }
                          datum_hash?: string | undefined
                          datum?: { [x: string]: unknown } | undefined
                          script?: { [x: string]: unknown } | undefined
                        }
                    )[][]
                  | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 425
          }
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/json' }
            } & {
              json: {
                cbor: string
                additionalUtxoSet?:
                  | (
                      | { txId?: string | undefined; index?: number | undefined }
                      | {
                          address: string
                          value: { coins: number; assets?: { [x: string]: number } | undefined }
                          datum_hash?: string | undefined
                          datum?: { [x: string]: unknown } | undefined
                          script?: { [x: string]: unknown } | undefined
                        }
                    )[][]
                  | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { version?: number | undefined } } & {
              header: { 'Content-Type': 'application/json' }
            } & {
              json: {
                cbor: string
                additionalUtxoSet?:
                  | (
                      | { txId?: string | undefined; index?: number | undefined }
                      | {
                          address: string
                          value: { coins: number; assets?: { [x: string]: number } | undefined }
                          datum_hash?: string | undefined
                          datum?: { [x: string]: unknown } | undefined
                          script?: { [x: string]: unknown } | undefined
                        }
                    )[][]
                  | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ipfs/add': {
      $post:
        | {
            input: { form: { file?: File | undefined } }
            output: { name: string; ipfs_hash: string; size: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { file?: File | undefined } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: { file?: File | undefined } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { form: { file?: File | undefined } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { form: { file?: File | undefined } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { form: { file?: File | undefined } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { form: { file?: File | undefined } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ipfs/gateway/:IPFS_path': {
      $get:
        | {
            input: { param: { IPFS_path: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ipfs/pin/add/:IPFS_path': {
      $post:
        | {
            input: { param: { IPFS_path: string } } & { query: { filecoin?: boolean | undefined } }
            output: {
              ipfs_hash: string
              state: 'queued' | 'pinned' | 'unpinned' | 'failed' | 'gc'
              filecoin: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IPFS_path: string } } & { query: { filecoin?: boolean | undefined } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { IPFS_path: string } } & { query: { filecoin?: boolean | undefined } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { IPFS_path: string } } & { query: { filecoin?: boolean | undefined } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { IPFS_path: string } } & { query: { filecoin?: boolean | undefined } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { IPFS_path: string } } & { query: { filecoin?: boolean | undefined } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 425
          }
        | {
            input: { param: { IPFS_path: string } } & { query: { filecoin?: boolean | undefined } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { IPFS_path: string } } & { query: { filecoin?: boolean | undefined } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ipfs/pin/list': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              time_created: number
              time_pinned: number
              ipfs_hash: string
              size: string
              state: 'queued' | 'pinned' | 'unpinned' | 'failed' | 'gc'
              filecoin: boolean
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                count?: number | undefined
                page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ipfs/pin/list/:IPFS_path': {
      $get:
        | {
            input: { param: { IPFS_path: string } }
            output: {
              time_created: number
              time_pinned: number
              ipfs_hash: string
              size: string
              state: 'queued' | 'pinned' | 'unpinned' | 'failed' | 'gc'
              filecoin: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ipfs/pin/remove/:IPFS_path': {
      $post:
        | {
            input: { param: { IPFS_path: string } }
            output: { ipfs_hash: string; state: 'queued' | 'pinned' | 'unpinned' | 'failed' | 'gc' }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { IPFS_path: string } }
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics': {
      $get:
        | { input: {}; output: Metrics; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/endpoints': {
      $get:
        | { input: {}; output: MetricsEndpoints; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/network': {
      $get:
        | { input: {}; output: Network; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/network/eras': {
      $get:
        | { input: {}; output: NetworkEras; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 425
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { status_code: number; error: string; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
