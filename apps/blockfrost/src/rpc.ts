import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getHealthClock(options?: ClientRequestOptions) {
  return await parseResponse(client.health.clock.$get(undefined, options))
}

export async function getBlocksLatest(options?: ClientRequestOptions) {
  return await parseResponse(client.blocks.latest.$get(undefined, options))
}

export async function getBlocksLatestTxs(
  args: InferRequestType<typeof client.blocks.latest.txs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocks.latest.txs.$get(args, options))
}

export async function getBlocksLatestTxsCbor(
  args: InferRequestType<typeof client.blocks.latest.txs.cbor.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocks.latest.txs.cbor.$get(args, options))
}

export async function getBlocksHashOrNumber(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocks[':hash_or_number'].$get(args, options))
}

export async function getBlocksHashOrNumberNext(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['next']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocks[':hash_or_number'].next.$get(args, options))
}

export async function getBlocksHashOrNumberPrevious(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocks[':hash_or_number'].previous.$get(args, options))
}

export async function getBlocksSlotSlotNumber(
  args: InferRequestType<(typeof client.blocks.slot)[':slot_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocks.slot[':slot_number'].$get(args, options))
}

export async function getBlocksEpochEpochNumberSlotSlotNumber(
  args: InferRequestType<
    (typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.blocks.epoch[':epoch_number'].slot[':slot_number'].$get(args, options),
  )
}

export async function getBlocksHashOrNumberTxs(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocks[':hash_or_number'].txs.$get(args, options))
}

export async function getBlocksHashOrNumberTxsCbor(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocks[':hash_or_number'].txs.cbor.$get(args, options))
}

export async function getBlocksHashOrNumberAddresses(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocks[':hash_or_number'].addresses.$get(args, options))
}

export async function getGenesis(options?: ClientRequestOptions) {
  return await parseResponse(client.genesis.$get(undefined, options))
}

export async function getGovernanceCommittee(options?: ClientRequestOptions) {
  return await parseResponse(client.governance.committee.$get(undefined, options))
}

export async function getGovernanceCommitteeVotes(
  args: InferRequestType<typeof client.governance.committee.votes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.governance.committee.votes.$get(args, options))
}

export async function getGovernanceCommitteeCcIdVotes(
  args: InferRequestType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.governance.committee[':cc_id'].votes.$get(args, options))
}

export async function getGovernanceDreps(
  args: InferRequestType<typeof client.governance.dreps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.governance.dreps.$get(args, options))
}

export async function getGovernanceDrepsDrepId(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.governance.dreps[':drep_id'].$get(args, options))
}

export async function getGovernanceDrepsDrepIdDelegators(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.governance.dreps[':drep_id'].delegators.$get(args, options))
}

export async function getGovernanceDrepsDrepIdMetadata(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.governance.dreps[':drep_id'].metadata.$get(args, options))
}

export async function getGovernanceDrepsDrepIdUpdates(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.governance.dreps[':drep_id'].updates.$get(args, options))
}

export async function getGovernanceDrepsDrepIdVotes(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.governance.dreps[':drep_id'].votes.$get(args, options))
}

export async function getGovernanceProposals(
  args: InferRequestType<typeof client.governance.proposals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.governance.proposals.$get(args, options))
}

export async function getGovernanceProposalsTxHashCertIndex(
  args: InferRequestType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.governance.proposals[':tx_hash'][':cert_index'].$get(args, options),
  )
}

export async function getGovernanceProposalsTxHashCertIndexParameters(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['parameters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.governance.proposals[':tx_hash'][':cert_index'].parameters.$get(args, options),
  )
}

export async function getGovernanceProposalsTxHashCertIndexWithdrawals(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['withdrawals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.governance.proposals[':tx_hash'][':cert_index'].withdrawals.$get(args, options),
  )
}

export async function getGovernanceProposalsTxHashCertIndexVotes(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['votes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.governance.proposals[':tx_hash'][':cert_index'].votes.$get(args, options),
  )
}

export async function getGovernanceProposalsTxHashCertIndexMetadata(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.governance.proposals[':tx_hash'][':cert_index'].metadata.$get(args, options),
  )
}

export async function getGovernanceProposalsGovActionId(
  args: InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.governance.proposals[':gov_action_id'].$get(args, options))
}

export async function getGovernanceProposalsGovActionIdParameters(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.governance.proposals[':gov_action_id'].parameters.$get(args, options),
  )
}

export async function getGovernanceProposalsGovActionIdWithdrawals(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.governance.proposals[':gov_action_id'].withdrawals.$get(args, options),
  )
}

export async function getGovernanceProposalsGovActionIdVotes(
  args: InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.governance.proposals[':gov_action_id'].votes.$get(args, options),
  )
}

export async function getGovernanceProposalsGovActionIdMetadata(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.governance.proposals[':gov_action_id'].metadata.$get(args, options),
  )
}

export async function getEpochsLatest(options?: ClientRequestOptions) {
  return await parseResponse(client.epochs.latest.$get(undefined, options))
}

export async function getEpochsLatestParameters(options?: ClientRequestOptions) {
  return await parseResponse(client.epochs.latest.parameters.$get(undefined, options))
}

export async function getEpochsNumber(
  args: InferRequestType<(typeof client.epochs)[':number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.epochs[':number'].$get(args, options))
}

export async function getEpochsNumberNext(
  args: InferRequestType<(typeof client.epochs)[':number']['next']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.epochs[':number'].next.$get(args, options))
}

export async function getEpochsNumberPrevious(
  args: InferRequestType<(typeof client.epochs)[':number']['previous']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.epochs[':number'].previous.$get(args, options))
}

export async function getEpochsNumberStakes(
  args: InferRequestType<(typeof client.epochs)[':number']['stakes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.epochs[':number'].stakes.$get(args, options))
}

export async function getEpochsNumberStakesPoolId(
  args: InferRequestType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.epochs[':number'].stakes[':pool_id'].$get(args, options))
}

export async function getEpochsNumberBlocks(
  args: InferRequestType<(typeof client.epochs)[':number']['blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.epochs[':number'].blocks.$get(args, options))
}

export async function getEpochsNumberBlocksPoolId(
  args: InferRequestType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.epochs[':number'].blocks[':pool_id'].$get(args, options))
}

export async function getEpochsNumberParameters(
  args: InferRequestType<(typeof client.epochs)[':number']['parameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.epochs[':number'].parameters.$get(args, options))
}

export async function getTxsHash(
  args: InferRequestType<(typeof client.txs)[':hash']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.txs[':hash'].$get(args, options))
}

export async function getTxsHashUtxos(
  args: InferRequestType<(typeof client.txs)[':hash']['utxos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.txs[':hash'].utxos.$get(args, options))
}

export async function getTxsHashStakes(
  args: InferRequestType<(typeof client.txs)[':hash']['stakes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.txs[':hash'].stakes.$get(args, options))
}

export async function getTxsHashDelegations(
  args: InferRequestType<(typeof client.txs)[':hash']['delegations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.txs[':hash'].delegations.$get(args, options))
}

export async function getTxsHashWithdrawals(
  args: InferRequestType<(typeof client.txs)[':hash']['withdrawals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.txs[':hash'].withdrawals.$get(args, options))
}

export async function getTxsHashMirs(
  args: InferRequestType<(typeof client.txs)[':hash']['mirs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.txs[':hash'].mirs.$get(args, options))
}

export async function getTxsHashPoolUpdates(
  args: InferRequestType<(typeof client.txs)[':hash']['pool_updates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.txs[':hash'].pool_updates.$get(args, options))
}

export async function getTxsHashPoolRetires(
  args: InferRequestType<(typeof client.txs)[':hash']['pool_retires']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.txs[':hash'].pool_retires.$get(args, options))
}

export async function getTxsHashMetadata(
  args: InferRequestType<(typeof client.txs)[':hash']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.txs[':hash'].metadata.$get(args, options))
}

export async function getTxsHashMetadataCbor(
  args: InferRequestType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.txs[':hash'].metadata.cbor.$get(args, options))
}

export async function getTxsHashRedeemers(
  args: InferRequestType<(typeof client.txs)[':hash']['redeemers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.txs[':hash'].redeemers.$get(args, options))
}

export async function getTxsHashRequiredSigners(
  args: InferRequestType<(typeof client.txs)[':hash']['required_signers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.txs[':hash'].required_signers.$get(args, options))
}

export async function getTxsHashCbor(
  args: InferRequestType<(typeof client.txs)[':hash']['cbor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.txs[':hash'].cbor.$get(args, options))
}

export async function postTxSubmit(
  args: InferRequestType<typeof client.tx.submit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tx.submit.$post(args, options))
}

export async function getAccountsStakeAddress(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':stake_address'].$get(args, options))
}

export async function getAccountsStakeAddressRewards(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['rewards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':stake_address'].rewards.$get(args, options))
}

export async function getAccountsStakeAddressHistory(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':stake_address'].history.$get(args, options))
}

export async function getAccountsStakeAddressDelegations(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['delegations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':stake_address'].delegations.$get(args, options))
}

export async function getAccountsStakeAddressRegistrations(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['registrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':stake_address'].registrations.$get(args, options))
}

export async function getAccountsStakeAddressWithdrawals(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':stake_address'].withdrawals.$get(args, options))
}

export async function getAccountsStakeAddressMirs(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['mirs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':stake_address'].mirs.$get(args, options))
}

export async function getAccountsStakeAddressAddresses(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':stake_address'].addresses.$get(args, options))
}

export async function getAccountsStakeAddressAddressesAssets(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':stake_address'].addresses.assets.$get(args, options))
}

export async function getAccountsStakeAddressAddressesTotal(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':stake_address'].addresses.total.$get(args, options))
}

export async function getAccountsStakeAddressUtxos(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['utxos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':stake_address'].utxos.$get(args, options))
}

export async function getAccountsStakeAddressTransactions(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':stake_address'].transactions.$get(args, options))
}

export async function getMempool(
  args: InferRequestType<typeof client.mempool.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mempool.$get(args, options))
}

export async function getMempoolHash(
  args: InferRequestType<(typeof client.mempool)[':hash']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mempool[':hash'].$get(args, options))
}

export async function getMempoolAddressesAddress(
  args: InferRequestType<(typeof client.mempool.addresses)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mempool.addresses[':address'].$get(args, options))
}

export async function getMetadataTxsLabels(
  args: InferRequestType<typeof client.metadata.txs.labels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.txs.labels.$get(args, options))
}

export async function getMetadataTxsLabelsLabel(
  args: InferRequestType<(typeof client.metadata.txs.labels)[':label']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.txs.labels[':label'].$get(args, options))
}

export async function getMetadataTxsLabelsLabelCbor(
  args: InferRequestType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.txs.labels[':label'].cbor.$get(args, options))
}

export async function getAddressesAddress(
  args: InferRequestType<(typeof client.addresses)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':address'].$get(args, options))
}

export async function getAddressesAddressExtended(
  args: InferRequestType<(typeof client.addresses)[':address']['extended']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':address'].extended.$get(args, options))
}

export async function getAddressesAddressTotal(
  args: InferRequestType<(typeof client.addresses)[':address']['total']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':address'].total.$get(args, options))
}

export async function getAddressesAddressUtxos(
  args: InferRequestType<(typeof client.addresses)[':address']['utxos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':address'].utxos.$get(args, options))
}

export async function getAddressesAddressUtxosAsset(
  args: InferRequestType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':address'].utxos[':asset'].$get(args, options))
}

export async function getAddressesAddressTxs(
  args: InferRequestType<(typeof client.addresses)[':address']['txs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':address'].txs.$get(args, options))
}

export async function getAddressesAddressTransactions(
  args: InferRequestType<(typeof client.addresses)[':address']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':address'].transactions.$get(args, options))
}

export async function getPools(
  args: InferRequestType<typeof client.pools.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools.$get(args, options))
}

export async function getPoolsExtended(
  args: InferRequestType<typeof client.pools.extended.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools.extended.$get(args, options))
}

export async function getPoolsRetired(
  args: InferRequestType<typeof client.pools.retired.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools.retired.$get(args, options))
}

export async function getPoolsRetiring(
  args: InferRequestType<typeof client.pools.retiring.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools.retiring.$get(args, options))
}

export async function getPoolsPoolId(
  args: InferRequestType<(typeof client.pools)[':pool_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools[':pool_id'].$get(args, options))
}

export async function getPoolsPoolIdHistory(
  args: InferRequestType<(typeof client.pools)[':pool_id']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools[':pool_id'].history.$get(args, options))
}

export async function getPoolsPoolIdMetadata(
  args: InferRequestType<(typeof client.pools)[':pool_id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools[':pool_id'].metadata.$get(args, options))
}

export async function getPoolsPoolIdRelays(
  args: InferRequestType<(typeof client.pools)[':pool_id']['relays']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools[':pool_id'].relays.$get(args, options))
}

export async function getPoolsPoolIdDelegators(
  args: InferRequestType<(typeof client.pools)[':pool_id']['delegators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools[':pool_id'].delegators.$get(args, options))
}

export async function getPoolsPoolIdBlocks(
  args: InferRequestType<(typeof client.pools)[':pool_id']['blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools[':pool_id'].blocks.$get(args, options))
}

export async function getPoolsPoolIdUpdates(
  args: InferRequestType<(typeof client.pools)[':pool_id']['updates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools[':pool_id'].updates.$get(args, options))
}

export async function getPoolsPoolIdVotes(
  args: InferRequestType<(typeof client.pools)[':pool_id']['votes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools[':pool_id'].votes.$get(args, options))
}

export async function getAssets(
  args: InferRequestType<typeof client.assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.$get(args, options))
}

export async function getAssetsAsset(
  args: InferRequestType<(typeof client.assets)[':asset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':asset'].$get(args, options))
}

export async function getAssetsAssetHistory(
  args: InferRequestType<(typeof client.assets)[':asset']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':asset'].history.$get(args, options))
}

export async function getAssetsAssetTxs(
  args: InferRequestType<(typeof client.assets)[':asset']['txs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':asset'].txs.$get(args, options))
}

export async function getAssetsAssetTransactions(
  args: InferRequestType<(typeof client.assets)[':asset']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':asset'].transactions.$get(args, options))
}

export async function getAssetsAssetAddresses(
  args: InferRequestType<(typeof client.assets)[':asset']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':asset'].addresses.$get(args, options))
}

export async function getAssetsAssetUtxos(
  args: InferRequestType<(typeof client.assets)[':asset']['utxos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':asset'].utxos.$get(args, options))
}

export async function getAssetsPolicyPolicyId(
  args: InferRequestType<(typeof client.assets.policy)[':policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.policy[':policy_id'].$get(args, options))
}

export async function getScripts(
  args: InferRequestType<typeof client.scripts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.$get(args, options))
}

export async function getScriptsScriptHash(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts[':script_hash'].$get(args, options))
}

export async function getScriptsScriptHashJson(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts[':script_hash'].json.$get(args, options))
}

export async function getScriptsScriptHashCbor(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['cbor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts[':script_hash'].cbor.$get(args, options))
}

export async function getScriptsScriptHashRedeemers(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts[':script_hash'].redeemers.$get(args, options))
}

export async function getScriptsScriptHashUtxos(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['utxos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts[':script_hash'].utxos.$get(args, options))
}

export async function getScriptsDatumDatumHash(
  args: InferRequestType<(typeof client.scripts.datum)[':datum_hash']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.datum[':datum_hash'].$get(args, options))
}

export async function getScriptsDatumDatumHashCbor(
  args: InferRequestType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.datum[':datum_hash'].cbor.$get(args, options))
}

export async function getUtilsAddressesXpubXpubRoleIndex(
  args: InferRequestType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.utils.addresses.xpub[':xpub'][':role'][':index'].$get(args, options),
  )
}

export async function postUtilsTxsEvaluate(
  args: InferRequestType<typeof client.utils.txs.evaluate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.utils.txs.evaluate.$post(args, options))
}

export async function postUtilsTxsEvaluateUtxos(
  args: InferRequestType<typeof client.utils.txs.evaluate.utxos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.utils.txs.evaluate.utxos.$post(args, options))
}

export async function postIpfsAdd(
  args: InferRequestType<typeof client.ipfs.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipfs.add.$post(args, options))
}

export async function getIpfsGatewayIPFSPath(
  args: InferRequestType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipfs.gateway[':IPFS_path'].$get(args, options))
}

export async function postIpfsPinAddIPFSPath(
  args: InferRequestType<(typeof client.ipfs.pin.add)[':IPFS_path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipfs.pin.add[':IPFS_path'].$post(args, options))
}

export async function getIpfsPinList(
  args: InferRequestType<typeof client.ipfs.pin.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipfs.pin.list.$get(args, options))
}

export async function getIpfsPinListIPFSPath(
  args: InferRequestType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipfs.pin.list[':IPFS_path'].$get(args, options))
}

export async function postIpfsPinRemoveIPFSPath(
  args: InferRequestType<(typeof client.ipfs.pin.remove)[':IPFS_path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipfs.pin.remove[':IPFS_path'].$post(args, options))
}

export async function getMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.$get(undefined, options))
}

export async function getMetricsEndpoints(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.endpoints.$get(undefined, options))
}

export async function getNetwork(options?: ClientRequestOptions) {
  return await parseResponse(client.network.$get(undefined, options))
}

export async function getNetworkEras(options?: ClientRequestOptions) {
  return await parseResponse(client.network.eras.$get(undefined, options))
}
