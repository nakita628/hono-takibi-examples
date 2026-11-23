import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdRoute,
  deleteAppsAppIdVersionsVersionRoute,
  deleteDeveloperAccountsDeveloperAccountIdRoute,
  deleteDevelopersDeveloperIdRoute,
  deletePermissionAppsAppIdRoute,
  deleteReviewsReviewIdRoute,
  deleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRoute,
  deleteStripeGatewayUserUserIdCardsCardIdRoute,
  deleteTransactionsTransactionIdRoute,
  deleteUserAccountsUserAccountIdRoute,
  deleteUsersUserIdRoute,
  getAppsAppIdRoute,
  getAppsAppIdVersionsVersionRoute,
  getAppsBySafeNameSafeNameRoute,
  getAppsRoute,
  getAppsTextSearchRoute,
  getAppsVersionsRoute,
  getDeveloperAccountsDeveloperAccountIdRoute,
  getDeveloperAccountsRoute,
  getDevelopersDeveloperIdRoute,
  getDevelopersRoute,
  getEventsEventIdRoute,
  getFilesByIdOrUrlRoute,
  getFilesDownloadRoute,
  getFilesRoute,
  getMarketsThisRoute,
  getOwnershipOwnershipIdRoute,
  getOwnershipRoute,
  getPermissionAppsAppIdRoute,
  getReviewsReviewIdRoute,
  getReviewsRoute,
  getStatsSeriesPeriodFieldsRoute,
  getStatsTotalRoute,
  getStripeGatewayDeveloperDeveloperIdAccountsRoute,
  getStripeGatewayUserUserIdCardsRoute,
  getTransactionsRoute,
  getTransactionsTransactionIdRoute,
  getUserAccountsRoute,
  getUserAccountsUserAccountIdRoute,
  getUsersRoute,
  getUsersUserIdRoute,
  patchAppsAppIdVersionsVersionRoute,
  patchDeveloperAccountsDeveloperAccountIdRoute,
  patchDevelopersDeveloperIdRoute,
  patchOwnershipOwnershipIdRoute,
  patchReviewsReviewIdRoute,
  patchUserAccountsUserAccountIdRoute,
  patchUsersUserIdRoute,
  postAppsAppIdLiveRoute,
  postAppsAppIdPublishRoute,
  postAppsAppIdVersionsVersionRoute,
  postAppsAppIdVersionsVersionStatusRoute,
  postAppsRoute,
  postCustomGatewayPaymentOwnershipIdRoute,
  postCustomGatewayRefundOwnershipIdRoute,
  postDeveloperAccountsDeveloperAccountIdRoute,
  postDevelopersDeveloperIdRoute,
  postFilesRoute,
  postFilesUrlRoute,
  postOwnershipInstallRoute,
  postOwnershipOwnershipIdRoute,
  postOwnershipUninstallOwnershipIdRoute,
  postPermissionAppsAppIdRoute,
  postReviewsReviewIdRoute,
  postReviewsRoute,
  postStatsIncrementFieldRoute,
  postStripeGatewayDeveloperDeveloperIdAccountsRoute,
  postStripeGatewayUserUserIdCardsCardIdRoute,
  postStripeGatewayUserUserIdCardsRoute,
  postTransactionsTransactionIdRoute,
  postUserAccountsUserAccountIdRoute,
  postUsersUserIdRoute,
} from './routes'
import {
  deleteAppsAppIdRouteHandler,
  deleteAppsAppIdVersionsVersionRouteHandler,
  deleteDeveloperAccountsDeveloperAccountIdRouteHandler,
  deleteDevelopersDeveloperIdRouteHandler,
  deletePermissionAppsAppIdRouteHandler,
  deleteReviewsReviewIdRouteHandler,
  deleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRouteHandler,
  deleteStripeGatewayUserUserIdCardsCardIdRouteHandler,
  deleteTransactionsTransactionIdRouteHandler,
  deleteUserAccountsUserAccountIdRouteHandler,
  deleteUsersUserIdRouteHandler,
  getAppsAppIdRouteHandler,
  getAppsAppIdVersionsVersionRouteHandler,
  getAppsBySafeNameSafeNameRouteHandler,
  getAppsRouteHandler,
  getAppsTextSearchRouteHandler,
  getAppsVersionsRouteHandler,
  getDeveloperAccountsDeveloperAccountIdRouteHandler,
  getDeveloperAccountsRouteHandler,
  getDevelopersDeveloperIdRouteHandler,
  getDevelopersRouteHandler,
  getEventsEventIdRouteHandler,
  getFilesByIdOrUrlRouteHandler,
  getFilesDownloadRouteHandler,
  getFilesRouteHandler,
  getMarketsThisRouteHandler,
  getOwnershipOwnershipIdRouteHandler,
  getOwnershipRouteHandler,
  getPermissionAppsAppIdRouteHandler,
  getReviewsReviewIdRouteHandler,
  getReviewsRouteHandler,
  getStatsSeriesPeriodFieldsRouteHandler,
  getStatsTotalRouteHandler,
  getStripeGatewayDeveloperDeveloperIdAccountsRouteHandler,
  getStripeGatewayUserUserIdCardsRouteHandler,
  getTransactionsRouteHandler,
  getTransactionsTransactionIdRouteHandler,
  getUserAccountsRouteHandler,
  getUserAccountsUserAccountIdRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdRouteHandler,
  patchAppsAppIdVersionsVersionRouteHandler,
  patchDeveloperAccountsDeveloperAccountIdRouteHandler,
  patchDevelopersDeveloperIdRouteHandler,
  patchOwnershipOwnershipIdRouteHandler,
  patchReviewsReviewIdRouteHandler,
  patchUserAccountsUserAccountIdRouteHandler,
  patchUsersUserIdRouteHandler,
  postAppsAppIdLiveRouteHandler,
  postAppsAppIdPublishRouteHandler,
  postAppsAppIdVersionsVersionRouteHandler,
  postAppsAppIdVersionsVersionStatusRouteHandler,
  postAppsRouteHandler,
  postCustomGatewayPaymentOwnershipIdRouteHandler,
  postCustomGatewayRefundOwnershipIdRouteHandler,
  postDeveloperAccountsDeveloperAccountIdRouteHandler,
  postDevelopersDeveloperIdRouteHandler,
  postFilesRouteHandler,
  postFilesUrlRouteHandler,
  postOwnershipInstallRouteHandler,
  postOwnershipOwnershipIdRouteHandler,
  postOwnershipUninstallOwnershipIdRouteHandler,
  postPermissionAppsAppIdRouteHandler,
  postReviewsReviewIdRouteHandler,
  postReviewsRouteHandler,
  postStatsIncrementFieldRouteHandler,
  postStripeGatewayDeveloperDeveloperIdAccountsRouteHandler,
  postStripeGatewayUserUserIdCardsCardIdRouteHandler,
  postStripeGatewayUserUserIdCardsRouteHandler,
  postTransactionsTransactionIdRouteHandler,
  postUserAccountsUserAccountIdRouteHandler,
  postUsersUserIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAppsRoute, getAppsRouteHandler)
  .openapi(postAppsRoute, postAppsRouteHandler)
  .openapi(getAppsBySafeNameSafeNameRoute, getAppsBySafeNameSafeNameRouteHandler)
  .openapi(getAppsTextSearchRoute, getAppsTextSearchRouteHandler)
  .openapi(getAppsVersionsRoute, getAppsVersionsRouteHandler)
  .openapi(deleteAppsAppIdRoute, deleteAppsAppIdRouteHandler)
  .openapi(getAppsAppIdRoute, getAppsAppIdRouteHandler)
  .openapi(postAppsAppIdLiveRoute, postAppsAppIdLiveRouteHandler)
  .openapi(postAppsAppIdPublishRoute, postAppsAppIdPublishRouteHandler)
  .openapi(deleteAppsAppIdVersionsVersionRoute, deleteAppsAppIdVersionsVersionRouteHandler)
  .openapi(getAppsAppIdVersionsVersionRoute, getAppsAppIdVersionsVersionRouteHandler)
  .openapi(patchAppsAppIdVersionsVersionRoute, patchAppsAppIdVersionsVersionRouteHandler)
  .openapi(postAppsAppIdVersionsVersionRoute, postAppsAppIdVersionsVersionRouteHandler)
  .openapi(postAppsAppIdVersionsVersionStatusRoute, postAppsAppIdVersionsVersionStatusRouteHandler)
  .openapi(
    postCustomGatewayPaymentOwnershipIdRoute,
    postCustomGatewayPaymentOwnershipIdRouteHandler,
  )
  .openapi(postCustomGatewayRefundOwnershipIdRoute, postCustomGatewayRefundOwnershipIdRouteHandler)
  .openapi(getDeveloperAccountsRoute, getDeveloperAccountsRouteHandler)
  .openapi(
    deleteDeveloperAccountsDeveloperAccountIdRoute,
    deleteDeveloperAccountsDeveloperAccountIdRouteHandler,
  )
  .openapi(
    getDeveloperAccountsDeveloperAccountIdRoute,
    getDeveloperAccountsDeveloperAccountIdRouteHandler,
  )
  .openapi(
    patchDeveloperAccountsDeveloperAccountIdRoute,
    patchDeveloperAccountsDeveloperAccountIdRouteHandler,
  )
  .openapi(
    postDeveloperAccountsDeveloperAccountIdRoute,
    postDeveloperAccountsDeveloperAccountIdRouteHandler,
  )
  .openapi(getDevelopersRoute, getDevelopersRouteHandler)
  .openapi(deleteDevelopersDeveloperIdRoute, deleteDevelopersDeveloperIdRouteHandler)
  .openapi(getDevelopersDeveloperIdRoute, getDevelopersDeveloperIdRouteHandler)
  .openapi(patchDevelopersDeveloperIdRoute, patchDevelopersDeveloperIdRouteHandler)
  .openapi(postDevelopersDeveloperIdRoute, postDevelopersDeveloperIdRouteHandler)
  .openapi(getEventsEventIdRoute, getEventsEventIdRouteHandler)
  .openapi(getFilesRoute, getFilesRouteHandler)
  .openapi(postFilesRoute, postFilesRouteHandler)
  .openapi(getFilesByIdOrUrlRoute, getFilesByIdOrUrlRouteHandler)
  .openapi(getFilesDownloadRoute, getFilesDownloadRouteHandler)
  .openapi(postFilesUrlRoute, postFilesUrlRouteHandler)
  .openapi(getMarketsThisRoute, getMarketsThisRouteHandler)
  .openapi(getOwnershipRoute, getOwnershipRouteHandler)
  .openapi(postOwnershipInstallRoute, postOwnershipInstallRouteHandler)
  .openapi(postOwnershipUninstallOwnershipIdRoute, postOwnershipUninstallOwnershipIdRouteHandler)
  .openapi(getOwnershipOwnershipIdRoute, getOwnershipOwnershipIdRouteHandler)
  .openapi(patchOwnershipOwnershipIdRoute, patchOwnershipOwnershipIdRouteHandler)
  .openapi(postOwnershipOwnershipIdRoute, postOwnershipOwnershipIdRouteHandler)
  .openapi(deletePermissionAppsAppIdRoute, deletePermissionAppsAppIdRouteHandler)
  .openapi(getPermissionAppsAppIdRoute, getPermissionAppsAppIdRouteHandler)
  .openapi(postPermissionAppsAppIdRoute, postPermissionAppsAppIdRouteHandler)
  .openapi(getReviewsRoute, getReviewsRouteHandler)
  .openapi(postReviewsRoute, postReviewsRouteHandler)
  .openapi(deleteReviewsReviewIdRoute, deleteReviewsReviewIdRouteHandler)
  .openapi(getReviewsReviewIdRoute, getReviewsReviewIdRouteHandler)
  .openapi(patchReviewsReviewIdRoute, patchReviewsReviewIdRouteHandler)
  .openapi(postReviewsReviewIdRoute, postReviewsReviewIdRouteHandler)
  .openapi(postStatsIncrementFieldRoute, postStatsIncrementFieldRouteHandler)
  .openapi(getStatsSeriesPeriodFieldsRoute, getStatsSeriesPeriodFieldsRouteHandler)
  .openapi(getStatsTotalRoute, getStatsTotalRouteHandler)
  .openapi(
    getStripeGatewayDeveloperDeveloperIdAccountsRoute,
    getStripeGatewayDeveloperDeveloperIdAccountsRouteHandler,
  )
  .openapi(
    postStripeGatewayDeveloperDeveloperIdAccountsRoute,
    postStripeGatewayDeveloperDeveloperIdAccountsRouteHandler,
  )
  .openapi(
    deleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRoute,
    deleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRouteHandler,
  )
  .openapi(getStripeGatewayUserUserIdCardsRoute, getStripeGatewayUserUserIdCardsRouteHandler)
  .openapi(postStripeGatewayUserUserIdCardsRoute, postStripeGatewayUserUserIdCardsRouteHandler)
  .openapi(
    deleteStripeGatewayUserUserIdCardsCardIdRoute,
    deleteStripeGatewayUserUserIdCardsCardIdRouteHandler,
  )
  .openapi(
    postStripeGatewayUserUserIdCardsCardIdRoute,
    postStripeGatewayUserUserIdCardsCardIdRouteHandler,
  )
  .openapi(getTransactionsRoute, getTransactionsRouteHandler)
  .openapi(deleteTransactionsTransactionIdRoute, deleteTransactionsTransactionIdRouteHandler)
  .openapi(getTransactionsTransactionIdRoute, getTransactionsTransactionIdRouteHandler)
  .openapi(postTransactionsTransactionIdRoute, postTransactionsTransactionIdRouteHandler)
  .openapi(getUserAccountsRoute, getUserAccountsRouteHandler)
  .openapi(deleteUserAccountsUserAccountIdRoute, deleteUserAccountsUserAccountIdRouteHandler)
  .openapi(getUserAccountsUserAccountIdRoute, getUserAccountsUserAccountIdRouteHandler)
  .openapi(patchUserAccountsUserAccountIdRoute, patchUserAccountsUserAccountIdRouteHandler)
  .openapi(postUserAccountsUserAccountIdRoute, postUserAccountsUserAccountIdRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(patchUsersUserIdRoute, patchUsersUserIdRouteHandler)
  .openapi(postUsersUserIdRoute, postUsersUserIdRouteHandler)

export default app
