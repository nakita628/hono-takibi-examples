import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBanksCategoriesIdCategoryRoute,
  deleteCategoriesKeywordsIdKeywordRoute,
  deleteConnectorsIdConnectorLogosIdLogoRoute,
  deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute,
  deleteUsersIdUserCategoriesFullIdFullRoute,
  deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountRoute,
  deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute,
  deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRoute,
  deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRoute,
  deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRoute,
  deleteUsersIdUserConnectionsIdConnectionAccountsRoute,
  deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRoute,
  deleteUsersIdUserTransactionsclustersIdTransactionsclusterRoute,
  getAccountTypesIdAccountTypeRoute,
  getAccountTypesRoute,
  getBanksIdConnectorConnectionsRoute,
  getBanksIdConnectorLogosMainRoute,
  getBanksIdConnectorLogosRoute,
  getBanksIdConnectorLogosThumbnailRoute,
  getCategoriesRoute,
  getConnectorsIdConnectorLogosMainRoute,
  getConnectorsIdConnectorLogosRoute,
  getConnectorsIdConnectorLogosThumbnailRoute,
  getInvoicingRoute,
  getProvidersIdConnectorConnectionsRoute,
  getProvidersIdConnectorLogosMainRoute,
  getProvidersIdConnectorLogosRoute,
  getProvidersIdConnectorLogosThumbnailRoute,
  getPsd2RegistrationsIdPsd2registrationLogsRoute,
  getPsd2RegistrationsIdPsd2RegistrationRoute,
  getPsd2RegistrationsRoute,
  getUsersIdUserAccountsIdAccountCategoriesRoute,
  getUsersIdUserAccountsIdAccountTransactionsclustersRoute,
  getUsersIdUserAccountTypesIdAccountTypeRoute,
  getUsersIdUserAccountTypesRoute,
  getUsersIdUserAlertsRoute,
  getUsersIdUserCategoriesFullRoute,
  getUsersIdUserCategoriesRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRoute,
  getUsersIdUserConnectionsIdConnectionAccountsRoute,
  getUsersIdUserConnectionsIdConnectionTransactionsclustersRoute,
  getUsersIdUserForecastRoute,
  getUsersIdUserTransactionsclustersRoute,
  postBanksCategoriesIdCategoryRoute,
  postBanksCategoriesRoute,
  postCategoriesKeywordsRoute,
  postCategorizeRoute,
  postConnectorsIdConnectorLogosRoute,
  postUsersIdUserAccountsIdAccountTransactionsclustersRoute,
  postUsersIdUserCategoriesFullRoute,
  postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRoute,
  postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRoute,
  postUsersIdUserConnectionsIdConnectionAccountsRoute,
  postUsersIdUserConnectionsIdConnectionTransactionsclustersRoute,
  postUsersIdUserTransactionsclustersRoute,
  putConnectorsIdConnectorLogosIdLogoRoute,
  putConnectorsIdConnectorLogosRoute,
  putConnectorsIdConnectorRoute,
  putConnectorsRoute,
  putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute,
  putUsersIdUserCategoriesFullIdFullRoute,
  putUsersIdUserConnectionsIdConnectionAccountsIdAccountRoute,
  putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute,
  putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRoute,
  putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRoute,
  putUsersIdUserConnectionsIdConnectionAccountsRoute,
  putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRoute,
  putUsersIdUserTransactionsclustersIdTransactionsclusterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const banksHandler = app
  .openapi(getAccountTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountTypesIdAccountTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBanksCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBanksCategoriesIdCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBanksCategoriesIdCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdConnectorConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdConnectorLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdConnectorLogosMainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdConnectorLogosThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCategoriesKeywordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCategoriesKeywordsIdKeywordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCategorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorsIdConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorsIdConnectorLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectorsIdConnectorLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorsIdConnectorLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorsIdConnectorLogosMainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorsIdConnectorLogosThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectorsIdConnectorLogosIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorsIdConnectorLogosIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdConnectorConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdConnectorLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdConnectorLogosMainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdConnectorLogosThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPsd2RegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPsd2RegistrationsIdPsd2RegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPsd2RegistrationsIdPsd2registrationLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserAccountTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserAccountTypesIdAccountTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserAccountsIdAccountCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserAccountsIdAccountTransactionsclustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdUserAccountsIdAccountTransactionsclustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserCategoriesFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdUserCategoriesFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdUserCategoriesFullIdFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdUserCategoriesFullIdFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdUserConnectionsIdConnectionAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserConnectionsIdConnectionAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdUserConnectionsIdConnectionAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdUserConnectionsIdConnectionAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdUserConnectionsIdConnectionAccountsIdAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersIdUserConnectionsIdConnectionTransactionsclustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdUserConnectionsIdConnectionTransactionsclustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersIdUserForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserTransactionsclustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdUserTransactionsclustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdUserTransactionsclustersIdTransactionsclusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdUserTransactionsclustersIdTransactionsclusterRoute, (c) => {
    throw new Error('Not implemented')
  })
