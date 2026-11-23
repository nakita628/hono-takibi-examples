import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsStakeAddressAddressesAssetsRoute,
  getAccountsStakeAddressAddressesRoute,
  getAccountsStakeAddressAddressesTotalRoute,
  getAccountsStakeAddressDelegationsRoute,
  getAccountsStakeAddressHistoryRoute,
  getAccountsStakeAddressMirsRoute,
  getAccountsStakeAddressRegistrationsRoute,
  getAccountsStakeAddressRewardsRoute,
  getAccountsStakeAddressRoute,
  getAccountsStakeAddressTransactionsRoute,
  getAccountsStakeAddressUtxosRoute,
  getAccountsStakeAddressWithdrawalsRoute,
  getAddressesAddressExtendedRoute,
  getAddressesAddressRoute,
  getAddressesAddressTotalRoute,
  getAddressesAddressTransactionsRoute,
  getAddressesAddressTxsRoute,
  getAddressesAddressUtxosAssetRoute,
  getAddressesAddressUtxosRoute,
  getAssetsAssetAddressesRoute,
  getAssetsAssetHistoryRoute,
  getAssetsAssetRoute,
  getAssetsAssetTransactionsRoute,
  getAssetsAssetTxsRoute,
  getAssetsAssetUtxosRoute,
  getAssetsPolicyPolicyIdRoute,
  getAssetsRoute,
  getBlocksEpochEpochNumberSlotSlotNumberRoute,
  getBlocksHashOrNumberAddressesRoute,
  getBlocksHashOrNumberNextRoute,
  getBlocksHashOrNumberPreviousRoute,
  getBlocksHashOrNumberRoute,
  getBlocksHashOrNumberTxsCborRoute,
  getBlocksHashOrNumberTxsRoute,
  getBlocksLatestRoute,
  getBlocksLatestTxsCborRoute,
  getBlocksLatestTxsRoute,
  getBlocksSlotSlotNumberRoute,
  getEpochsLatestParametersRoute,
  getEpochsLatestRoute,
  getEpochsNumberBlocksPoolIdRoute,
  getEpochsNumberBlocksRoute,
  getEpochsNumberNextRoute,
  getEpochsNumberParametersRoute,
  getEpochsNumberPreviousRoute,
  getEpochsNumberRoute,
  getEpochsNumberStakesPoolIdRoute,
  getEpochsNumberStakesRoute,
  getGenesisRoute,
  getGovernanceCommitteeCcIdVotesRoute,
  getGovernanceCommitteeRoute,
  getGovernanceCommitteeVotesRoute,
  getGovernanceDrepsDrepIdDelegatorsRoute,
  getGovernanceDrepsDrepIdMetadataRoute,
  getGovernanceDrepsDrepIdRoute,
  getGovernanceDrepsDrepIdUpdatesRoute,
  getGovernanceDrepsDrepIdVotesRoute,
  getGovernanceDrepsRoute,
  getGovernanceProposalsGovActionIdMetadataRoute,
  getGovernanceProposalsGovActionIdParametersRoute,
  getGovernanceProposalsGovActionIdRoute,
  getGovernanceProposalsGovActionIdVotesRoute,
  getGovernanceProposalsGovActionIdWithdrawalsRoute,
  getGovernanceProposalsRoute,
  getGovernanceProposalsTxHashCertIndexMetadataRoute,
  getGovernanceProposalsTxHashCertIndexParametersRoute,
  getGovernanceProposalsTxHashCertIndexRoute,
  getGovernanceProposalsTxHashCertIndexVotesRoute,
  getGovernanceProposalsTxHashCertIndexWithdrawalsRoute,
  getHealthClockRoute,
  getHealthRoute,
  getIpfsGatewayIPFSPathRoute,
  getIpfsPinListIPFSPathRoute,
  getIpfsPinListRoute,
  getMempoolAddressesAddressRoute,
  getMempoolHashRoute,
  getMempoolRoute,
  getMetadataTxsLabelsLabelCborRoute,
  getMetadataTxsLabelsLabelRoute,
  getMetadataTxsLabelsRoute,
  getMetricsEndpointsRoute,
  getMetricsRoute,
  getNetworkErasRoute,
  getNetworkRoute,
  getPoolsExtendedRoute,
  getPoolsPoolIdBlocksRoute,
  getPoolsPoolIdDelegatorsRoute,
  getPoolsPoolIdHistoryRoute,
  getPoolsPoolIdMetadataRoute,
  getPoolsPoolIdRelaysRoute,
  getPoolsPoolIdRoute,
  getPoolsPoolIdUpdatesRoute,
  getPoolsPoolIdVotesRoute,
  getPoolsRetiredRoute,
  getPoolsRetiringRoute,
  getPoolsRoute,
  getRoute,
  getScriptsDatumDatumHashCborRoute,
  getScriptsDatumDatumHashRoute,
  getScriptsRoute,
  getScriptsScriptHashCborRoute,
  getScriptsScriptHashJsonRoute,
  getScriptsScriptHashRedeemersRoute,
  getScriptsScriptHashRoute,
  getScriptsScriptHashUtxosRoute,
  getTxsHashCborRoute,
  getTxsHashDelegationsRoute,
  getTxsHashMetadataCborRoute,
  getTxsHashMetadataRoute,
  getTxsHashMirsRoute,
  getTxsHashPoolRetiresRoute,
  getTxsHashPoolUpdatesRoute,
  getTxsHashRedeemersRoute,
  getTxsHashRequiredSignersRoute,
  getTxsHashRoute,
  getTxsHashStakesRoute,
  getTxsHashUtxosRoute,
  getTxsHashWithdrawalsRoute,
  getUtilsAddressesXpubXpubRoleIndexRoute,
  postIpfsAddRoute,
  postIpfsPinAddIPFSPathRoute,
  postIpfsPinRemoveIPFSPathRoute,
  postTxSubmitRoute,
  postUtilsTxsEvaluateRoute,
  postUtilsTxsEvaluateUtxosRoute,
} from './routes'
import {
  getAccountsStakeAddressAddressesAssetsRouteHandler,
  getAccountsStakeAddressAddressesRouteHandler,
  getAccountsStakeAddressAddressesTotalRouteHandler,
  getAccountsStakeAddressDelegationsRouteHandler,
  getAccountsStakeAddressHistoryRouteHandler,
  getAccountsStakeAddressMirsRouteHandler,
  getAccountsStakeAddressRegistrationsRouteHandler,
  getAccountsStakeAddressRewardsRouteHandler,
  getAccountsStakeAddressRouteHandler,
  getAccountsStakeAddressTransactionsRouteHandler,
  getAccountsStakeAddressUtxosRouteHandler,
  getAccountsStakeAddressWithdrawalsRouteHandler,
  getAddressesAddressExtendedRouteHandler,
  getAddressesAddressRouteHandler,
  getAddressesAddressTotalRouteHandler,
  getAddressesAddressTransactionsRouteHandler,
  getAddressesAddressTxsRouteHandler,
  getAddressesAddressUtxosAssetRouteHandler,
  getAddressesAddressUtxosRouteHandler,
  getAssetsAssetAddressesRouteHandler,
  getAssetsAssetHistoryRouteHandler,
  getAssetsAssetRouteHandler,
  getAssetsAssetTransactionsRouteHandler,
  getAssetsAssetTxsRouteHandler,
  getAssetsAssetUtxosRouteHandler,
  getAssetsPolicyPolicyIdRouteHandler,
  getAssetsRouteHandler,
  getBlocksEpochEpochNumberSlotSlotNumberRouteHandler,
  getBlocksHashOrNumberAddressesRouteHandler,
  getBlocksHashOrNumberNextRouteHandler,
  getBlocksHashOrNumberPreviousRouteHandler,
  getBlocksHashOrNumberRouteHandler,
  getBlocksHashOrNumberTxsCborRouteHandler,
  getBlocksHashOrNumberTxsRouteHandler,
  getBlocksLatestRouteHandler,
  getBlocksLatestTxsCborRouteHandler,
  getBlocksLatestTxsRouteHandler,
  getBlocksSlotSlotNumberRouteHandler,
  getEpochsLatestParametersRouteHandler,
  getEpochsLatestRouteHandler,
  getEpochsNumberBlocksPoolIdRouteHandler,
  getEpochsNumberBlocksRouteHandler,
  getEpochsNumberNextRouteHandler,
  getEpochsNumberParametersRouteHandler,
  getEpochsNumberPreviousRouteHandler,
  getEpochsNumberRouteHandler,
  getEpochsNumberStakesPoolIdRouteHandler,
  getEpochsNumberStakesRouteHandler,
  getGenesisRouteHandler,
  getGovernanceCommitteeCcIdVotesRouteHandler,
  getGovernanceCommitteeRouteHandler,
  getGovernanceCommitteeVotesRouteHandler,
  getGovernanceDrepsDrepIdDelegatorsRouteHandler,
  getGovernanceDrepsDrepIdMetadataRouteHandler,
  getGovernanceDrepsDrepIdRouteHandler,
  getGovernanceDrepsDrepIdUpdatesRouteHandler,
  getGovernanceDrepsDrepIdVotesRouteHandler,
  getGovernanceDrepsRouteHandler,
  getGovernanceProposalsGovActionIdMetadataRouteHandler,
  getGovernanceProposalsGovActionIdParametersRouteHandler,
  getGovernanceProposalsGovActionIdRouteHandler,
  getGovernanceProposalsGovActionIdVotesRouteHandler,
  getGovernanceProposalsGovActionIdWithdrawalsRouteHandler,
  getGovernanceProposalsRouteHandler,
  getGovernanceProposalsTxHashCertIndexMetadataRouteHandler,
  getGovernanceProposalsTxHashCertIndexParametersRouteHandler,
  getGovernanceProposalsTxHashCertIndexRouteHandler,
  getGovernanceProposalsTxHashCertIndexVotesRouteHandler,
  getGovernanceProposalsTxHashCertIndexWithdrawalsRouteHandler,
  getHealthClockRouteHandler,
  getHealthRouteHandler,
  getIpfsGatewayIPFSPathRouteHandler,
  getIpfsPinListIPFSPathRouteHandler,
  getIpfsPinListRouteHandler,
  getMempoolAddressesAddressRouteHandler,
  getMempoolHashRouteHandler,
  getMempoolRouteHandler,
  getMetadataTxsLabelsLabelCborRouteHandler,
  getMetadataTxsLabelsLabelRouteHandler,
  getMetadataTxsLabelsRouteHandler,
  getMetricsEndpointsRouteHandler,
  getMetricsRouteHandler,
  getNetworkErasRouteHandler,
  getNetworkRouteHandler,
  getPoolsExtendedRouteHandler,
  getPoolsPoolIdBlocksRouteHandler,
  getPoolsPoolIdDelegatorsRouteHandler,
  getPoolsPoolIdHistoryRouteHandler,
  getPoolsPoolIdMetadataRouteHandler,
  getPoolsPoolIdRelaysRouteHandler,
  getPoolsPoolIdRouteHandler,
  getPoolsPoolIdUpdatesRouteHandler,
  getPoolsPoolIdVotesRouteHandler,
  getPoolsRetiredRouteHandler,
  getPoolsRetiringRouteHandler,
  getPoolsRouteHandler,
  getRouteHandler,
  getScriptsDatumDatumHashCborRouteHandler,
  getScriptsDatumDatumHashRouteHandler,
  getScriptsRouteHandler,
  getScriptsScriptHashCborRouteHandler,
  getScriptsScriptHashJsonRouteHandler,
  getScriptsScriptHashRedeemersRouteHandler,
  getScriptsScriptHashRouteHandler,
  getScriptsScriptHashUtxosRouteHandler,
  getTxsHashCborRouteHandler,
  getTxsHashDelegationsRouteHandler,
  getTxsHashMetadataCborRouteHandler,
  getTxsHashMetadataRouteHandler,
  getTxsHashMirsRouteHandler,
  getTxsHashPoolRetiresRouteHandler,
  getTxsHashPoolUpdatesRouteHandler,
  getTxsHashRedeemersRouteHandler,
  getTxsHashRequiredSignersRouteHandler,
  getTxsHashRouteHandler,
  getTxsHashStakesRouteHandler,
  getTxsHashUtxosRouteHandler,
  getTxsHashWithdrawalsRouteHandler,
  getUtilsAddressesXpubXpubRoleIndexRouteHandler,
  postIpfsAddRouteHandler,
  postIpfsPinAddIPFSPathRouteHandler,
  postIpfsPinRemoveIPFSPathRouteHandler,
  postTxSubmitRouteHandler,
  postUtilsTxsEvaluateRouteHandler,
  postUtilsTxsEvaluateUtxosRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getHealthClockRoute, getHealthClockRouteHandler)
  .openapi(getBlocksLatestRoute, getBlocksLatestRouteHandler)
  .openapi(getBlocksLatestTxsRoute, getBlocksLatestTxsRouteHandler)
  .openapi(getBlocksLatestTxsCborRoute, getBlocksLatestTxsCborRouteHandler)
  .openapi(getBlocksHashOrNumberRoute, getBlocksHashOrNumberRouteHandler)
  .openapi(getBlocksHashOrNumberNextRoute, getBlocksHashOrNumberNextRouteHandler)
  .openapi(getBlocksHashOrNumberPreviousRoute, getBlocksHashOrNumberPreviousRouteHandler)
  .openapi(getBlocksSlotSlotNumberRoute, getBlocksSlotSlotNumberRouteHandler)
  .openapi(
    getBlocksEpochEpochNumberSlotSlotNumberRoute,
    getBlocksEpochEpochNumberSlotSlotNumberRouteHandler,
  )
  .openapi(getBlocksHashOrNumberTxsRoute, getBlocksHashOrNumberTxsRouteHandler)
  .openapi(getBlocksHashOrNumberTxsCborRoute, getBlocksHashOrNumberTxsCborRouteHandler)
  .openapi(getBlocksHashOrNumberAddressesRoute, getBlocksHashOrNumberAddressesRouteHandler)
  .openapi(getGenesisRoute, getGenesisRouteHandler)
  .openapi(getGovernanceCommitteeRoute, getGovernanceCommitteeRouteHandler)
  .openapi(getGovernanceCommitteeVotesRoute, getGovernanceCommitteeVotesRouteHandler)
  .openapi(getGovernanceCommitteeCcIdVotesRoute, getGovernanceCommitteeCcIdVotesRouteHandler)
  .openapi(getGovernanceDrepsRoute, getGovernanceDrepsRouteHandler)
  .openapi(getGovernanceDrepsDrepIdRoute, getGovernanceDrepsDrepIdRouteHandler)
  .openapi(getGovernanceDrepsDrepIdDelegatorsRoute, getGovernanceDrepsDrepIdDelegatorsRouteHandler)
  .openapi(getGovernanceDrepsDrepIdMetadataRoute, getGovernanceDrepsDrepIdMetadataRouteHandler)
  .openapi(getGovernanceDrepsDrepIdUpdatesRoute, getGovernanceDrepsDrepIdUpdatesRouteHandler)
  .openapi(getGovernanceDrepsDrepIdVotesRoute, getGovernanceDrepsDrepIdVotesRouteHandler)
  .openapi(getGovernanceProposalsRoute, getGovernanceProposalsRouteHandler)
  .openapi(
    getGovernanceProposalsTxHashCertIndexRoute,
    getGovernanceProposalsTxHashCertIndexRouteHandler,
  )
  .openapi(
    getGovernanceProposalsTxHashCertIndexParametersRoute,
    getGovernanceProposalsTxHashCertIndexParametersRouteHandler,
  )
  .openapi(
    getGovernanceProposalsTxHashCertIndexWithdrawalsRoute,
    getGovernanceProposalsTxHashCertIndexWithdrawalsRouteHandler,
  )
  .openapi(
    getGovernanceProposalsTxHashCertIndexVotesRoute,
    getGovernanceProposalsTxHashCertIndexVotesRouteHandler,
  )
  .openapi(
    getGovernanceProposalsTxHashCertIndexMetadataRoute,
    getGovernanceProposalsTxHashCertIndexMetadataRouteHandler,
  )
  .openapi(getGovernanceProposalsGovActionIdRoute, getGovernanceProposalsGovActionIdRouteHandler)
  .openapi(
    getGovernanceProposalsGovActionIdParametersRoute,
    getGovernanceProposalsGovActionIdParametersRouteHandler,
  )
  .openapi(
    getGovernanceProposalsGovActionIdWithdrawalsRoute,
    getGovernanceProposalsGovActionIdWithdrawalsRouteHandler,
  )
  .openapi(
    getGovernanceProposalsGovActionIdVotesRoute,
    getGovernanceProposalsGovActionIdVotesRouteHandler,
  )
  .openapi(
    getGovernanceProposalsGovActionIdMetadataRoute,
    getGovernanceProposalsGovActionIdMetadataRouteHandler,
  )
  .openapi(getEpochsLatestRoute, getEpochsLatestRouteHandler)
  .openapi(getEpochsLatestParametersRoute, getEpochsLatestParametersRouteHandler)
  .openapi(getEpochsNumberRoute, getEpochsNumberRouteHandler)
  .openapi(getEpochsNumberNextRoute, getEpochsNumberNextRouteHandler)
  .openapi(getEpochsNumberPreviousRoute, getEpochsNumberPreviousRouteHandler)
  .openapi(getEpochsNumberStakesRoute, getEpochsNumberStakesRouteHandler)
  .openapi(getEpochsNumberStakesPoolIdRoute, getEpochsNumberStakesPoolIdRouteHandler)
  .openapi(getEpochsNumberBlocksRoute, getEpochsNumberBlocksRouteHandler)
  .openapi(getEpochsNumberBlocksPoolIdRoute, getEpochsNumberBlocksPoolIdRouteHandler)
  .openapi(getEpochsNumberParametersRoute, getEpochsNumberParametersRouteHandler)
  .openapi(getTxsHashRoute, getTxsHashRouteHandler)
  .openapi(getTxsHashUtxosRoute, getTxsHashUtxosRouteHandler)
  .openapi(getTxsHashStakesRoute, getTxsHashStakesRouteHandler)
  .openapi(getTxsHashDelegationsRoute, getTxsHashDelegationsRouteHandler)
  .openapi(getTxsHashWithdrawalsRoute, getTxsHashWithdrawalsRouteHandler)
  .openapi(getTxsHashMirsRoute, getTxsHashMirsRouteHandler)
  .openapi(getTxsHashPoolUpdatesRoute, getTxsHashPoolUpdatesRouteHandler)
  .openapi(getTxsHashPoolRetiresRoute, getTxsHashPoolRetiresRouteHandler)
  .openapi(getTxsHashMetadataRoute, getTxsHashMetadataRouteHandler)
  .openapi(getTxsHashMetadataCborRoute, getTxsHashMetadataCborRouteHandler)
  .openapi(getTxsHashRedeemersRoute, getTxsHashRedeemersRouteHandler)
  .openapi(getTxsHashRequiredSignersRoute, getTxsHashRequiredSignersRouteHandler)
  .openapi(getTxsHashCborRoute, getTxsHashCborRouteHandler)
  .openapi(postTxSubmitRoute, postTxSubmitRouteHandler)
  .openapi(getAccountsStakeAddressRoute, getAccountsStakeAddressRouteHandler)
  .openapi(getAccountsStakeAddressRewardsRoute, getAccountsStakeAddressRewardsRouteHandler)
  .openapi(getAccountsStakeAddressHistoryRoute, getAccountsStakeAddressHistoryRouteHandler)
  .openapi(getAccountsStakeAddressDelegationsRoute, getAccountsStakeAddressDelegationsRouteHandler)
  .openapi(
    getAccountsStakeAddressRegistrationsRoute,
    getAccountsStakeAddressRegistrationsRouteHandler,
  )
  .openapi(getAccountsStakeAddressWithdrawalsRoute, getAccountsStakeAddressWithdrawalsRouteHandler)
  .openapi(getAccountsStakeAddressMirsRoute, getAccountsStakeAddressMirsRouteHandler)
  .openapi(getAccountsStakeAddressAddressesRoute, getAccountsStakeAddressAddressesRouteHandler)
  .openapi(
    getAccountsStakeAddressAddressesAssetsRoute,
    getAccountsStakeAddressAddressesAssetsRouteHandler,
  )
  .openapi(
    getAccountsStakeAddressAddressesTotalRoute,
    getAccountsStakeAddressAddressesTotalRouteHandler,
  )
  .openapi(getAccountsStakeAddressUtxosRoute, getAccountsStakeAddressUtxosRouteHandler)
  .openapi(
    getAccountsStakeAddressTransactionsRoute,
    getAccountsStakeAddressTransactionsRouteHandler,
  )
  .openapi(getMempoolRoute, getMempoolRouteHandler)
  .openapi(getMempoolHashRoute, getMempoolHashRouteHandler)
  .openapi(getMempoolAddressesAddressRoute, getMempoolAddressesAddressRouteHandler)
  .openapi(getMetadataTxsLabelsRoute, getMetadataTxsLabelsRouteHandler)
  .openapi(getMetadataTxsLabelsLabelRoute, getMetadataTxsLabelsLabelRouteHandler)
  .openapi(getMetadataTxsLabelsLabelCborRoute, getMetadataTxsLabelsLabelCborRouteHandler)
  .openapi(getAddressesAddressRoute, getAddressesAddressRouteHandler)
  .openapi(getAddressesAddressExtendedRoute, getAddressesAddressExtendedRouteHandler)
  .openapi(getAddressesAddressTotalRoute, getAddressesAddressTotalRouteHandler)
  .openapi(getAddressesAddressUtxosRoute, getAddressesAddressUtxosRouteHandler)
  .openapi(getAddressesAddressUtxosAssetRoute, getAddressesAddressUtxosAssetRouteHandler)
  .openapi(getAddressesAddressTxsRoute, getAddressesAddressTxsRouteHandler)
  .openapi(getAddressesAddressTransactionsRoute, getAddressesAddressTransactionsRouteHandler)
  .openapi(getPoolsRoute, getPoolsRouteHandler)
  .openapi(getPoolsExtendedRoute, getPoolsExtendedRouteHandler)
  .openapi(getPoolsRetiredRoute, getPoolsRetiredRouteHandler)
  .openapi(getPoolsRetiringRoute, getPoolsRetiringRouteHandler)
  .openapi(getPoolsPoolIdRoute, getPoolsPoolIdRouteHandler)
  .openapi(getPoolsPoolIdHistoryRoute, getPoolsPoolIdHistoryRouteHandler)
  .openapi(getPoolsPoolIdMetadataRoute, getPoolsPoolIdMetadataRouteHandler)
  .openapi(getPoolsPoolIdRelaysRoute, getPoolsPoolIdRelaysRouteHandler)
  .openapi(getPoolsPoolIdDelegatorsRoute, getPoolsPoolIdDelegatorsRouteHandler)
  .openapi(getPoolsPoolIdBlocksRoute, getPoolsPoolIdBlocksRouteHandler)
  .openapi(getPoolsPoolIdUpdatesRoute, getPoolsPoolIdUpdatesRouteHandler)
  .openapi(getPoolsPoolIdVotesRoute, getPoolsPoolIdVotesRouteHandler)
  .openapi(getAssetsRoute, getAssetsRouteHandler)
  .openapi(getAssetsAssetRoute, getAssetsAssetRouteHandler)
  .openapi(getAssetsAssetHistoryRoute, getAssetsAssetHistoryRouteHandler)
  .openapi(getAssetsAssetTxsRoute, getAssetsAssetTxsRouteHandler)
  .openapi(getAssetsAssetTransactionsRoute, getAssetsAssetTransactionsRouteHandler)
  .openapi(getAssetsAssetAddressesRoute, getAssetsAssetAddressesRouteHandler)
  .openapi(getAssetsAssetUtxosRoute, getAssetsAssetUtxosRouteHandler)
  .openapi(getAssetsPolicyPolicyIdRoute, getAssetsPolicyPolicyIdRouteHandler)
  .openapi(getScriptsRoute, getScriptsRouteHandler)
  .openapi(getScriptsScriptHashRoute, getScriptsScriptHashRouteHandler)
  .openapi(getScriptsScriptHashJsonRoute, getScriptsScriptHashJsonRouteHandler)
  .openapi(getScriptsScriptHashCborRoute, getScriptsScriptHashCborRouteHandler)
  .openapi(getScriptsScriptHashRedeemersRoute, getScriptsScriptHashRedeemersRouteHandler)
  .openapi(getScriptsScriptHashUtxosRoute, getScriptsScriptHashUtxosRouteHandler)
  .openapi(getScriptsDatumDatumHashRoute, getScriptsDatumDatumHashRouteHandler)
  .openapi(getScriptsDatumDatumHashCborRoute, getScriptsDatumDatumHashCborRouteHandler)
  .openapi(getUtilsAddressesXpubXpubRoleIndexRoute, getUtilsAddressesXpubXpubRoleIndexRouteHandler)
  .openapi(postUtilsTxsEvaluateRoute, postUtilsTxsEvaluateRouteHandler)
  .openapi(postUtilsTxsEvaluateUtxosRoute, postUtilsTxsEvaluateUtxosRouteHandler)
  .openapi(postIpfsAddRoute, postIpfsAddRouteHandler)
  .openapi(getIpfsGatewayIPFSPathRoute, getIpfsGatewayIPFSPathRouteHandler)
  .openapi(postIpfsPinAddIPFSPathRoute, postIpfsPinAddIPFSPathRouteHandler)
  .openapi(getIpfsPinListRoute, getIpfsPinListRouteHandler)
  .openapi(getIpfsPinListIPFSPathRoute, getIpfsPinListIPFSPathRouteHandler)
  .openapi(postIpfsPinRemoveIPFSPathRoute, postIpfsPinRemoveIPFSPathRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(getMetricsEndpointsRoute, getMetricsEndpointsRouteHandler)
  .openapi(getNetworkRoute, getNetworkRouteHandler)
  .openapi(getNetworkErasRoute, getNetworkErasRouteHandler)

export default app
