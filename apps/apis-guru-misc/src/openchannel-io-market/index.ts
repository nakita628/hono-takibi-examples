import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appsFindAndModifyAppsHandler,
  customGatewayProcessPaymentsAndRefundsHandler,
  developerAccountsFindAndModifyDeveloperAccountsHandler,
  developersFindAndModifyDevelopersHandler,
  eventsFindEventsHandler,
  filesUploadFilesHandler,
  marketsThisMarketplaceHandler,
  ownershipFindOwnershipHandler,
  permissionAddAndRemovePermissionsHandler,
  reviewsFindAndModifyReviewsHandler,
  statsFindMarketplaceStatisticsHandler,
  stripeGatewayProcessPaymentsAndRefundsHandler,
  transactionsFindPaymentsAndRefundsHandler,
  userAccountsFindAndModifyUserAccountsHandler,
  usersFindAndModifyUsersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appsFindAndModifyAppsHandler)
  .route('/', customGatewayProcessPaymentsAndRefundsHandler)
  .route('/', developerAccountsFindAndModifyDeveloperAccountsHandler)
  .route('/', developersFindAndModifyDevelopersHandler)
  .route('/', eventsFindEventsHandler)
  .route('/', filesUploadFilesHandler)
  .route('/', marketsThisMarketplaceHandler)
  .route('/', ownershipFindOwnershipHandler)
  .route('/', permissionAddAndRemovePermissionsHandler)
  .route('/', reviewsFindAndModifyReviewsHandler)
  .route('/', statsFindMarketplaceStatisticsHandler)
  .route('/', stripeGatewayProcessPaymentsAndRefundsHandler)
  .route('/', transactionsFindPaymentsAndRefundsHandler)
  .route('/', userAccountsFindAndModifyUserAccountsHandler)
  .route('/', usersFindAndModifyUsersHandler)

export default app
