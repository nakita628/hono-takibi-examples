import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsIdRoute,
  deleteAttachmentsIdRoute,
  deleteCategoriesIdRoute,
  deleteEventsIdRoute,
  deleteInstitutionsIdRoute,
  deleteTransactionsIdRoute,
  deleteTransactionsTransactionIdAttachmentsAttachmentIdRoute,
  deleteUsersIdForecastCacheRoute,
  getAccountsIdRoute,
  getAccountsIdTransactionsRoute,
  getAttachmentsIdRoute,
  getCategoriesIdRoute,
  getCategoriesIdTransactionsRoute,
  getCurrenciesIdRoute,
  getCurrenciesRoute,
  getEventsIdRoute,
  getInstitutionsIdAccountsRoute,
  getInstitutionsIdRoute,
  getMeRoute,
  getScenariosIdEventsRoute,
  getTimeZonesRoute,
  getTransactionAccountsIdRoute,
  getTransactionAccountsIdTransactionsRoute,
  getTransactionsIdAttachmentsRoute,
  getTransactionsIdRoute,
  getUsersIdAccountsRoute,
  getUsersIdAttachmentsRoute,
  getUsersIdBudgetRoute,
  getUsersIdBudgetSummaryRoute,
  getUsersIdCategoriesRoute,
  getUsersIdCategoryRulesRoute,
  getUsersIdEventsRoute,
  getUsersIdInstitutionsRoute,
  getUsersIdLabelsRoute,
  getUsersIdRoute,
  getUsersIdSavedSearchesRoute,
  getUsersIdTransactionAccountsRoute,
  getUsersIdTransactionsRoute,
  getUsersIdTrendAnalysisRoute,
  postCategoriesIdCategoryRulesRoute,
  postScenariosIdEventsRoute,
  postTransactionAccountsIdTransactionsRoute,
  postTransactionsIdAttachmentsRoute,
  postUsersIdAccountsRoute,
  postUsersIdAttachmentsRoute,
  postUsersIdCategoriesRoute,
  postUsersIdInstitutionsRoute,
  putAccountsIdRoute,
  putAttachmentsIdRoute,
  putCategoriesIdRoute,
  putEventsIdRoute,
  putInstitutionsIdRoute,
  putTransactionAccountsIdRoute,
  putTransactionsIdRoute,
  putUsersIdAccountsRoute,
  putUsersIdRoute,
} from './routes'
import {
  deleteAccountsIdRouteHandler,
  deleteAttachmentsIdRouteHandler,
  deleteCategoriesIdRouteHandler,
  deleteEventsIdRouteHandler,
  deleteInstitutionsIdRouteHandler,
  deleteTransactionsIdRouteHandler,
  deleteTransactionsTransactionIdAttachmentsAttachmentIdRouteHandler,
  deleteUsersIdForecastCacheRouteHandler,
  getAccountsIdRouteHandler,
  getAccountsIdTransactionsRouteHandler,
  getAttachmentsIdRouteHandler,
  getCategoriesIdRouteHandler,
  getCategoriesIdTransactionsRouteHandler,
  getCurrenciesIdRouteHandler,
  getCurrenciesRouteHandler,
  getEventsIdRouteHandler,
  getInstitutionsIdAccountsRouteHandler,
  getInstitutionsIdRouteHandler,
  getMeRouteHandler,
  getScenariosIdEventsRouteHandler,
  getTimeZonesRouteHandler,
  getTransactionAccountsIdRouteHandler,
  getTransactionAccountsIdTransactionsRouteHandler,
  getTransactionsIdAttachmentsRouteHandler,
  getTransactionsIdRouteHandler,
  getUsersIdAccountsRouteHandler,
  getUsersIdAttachmentsRouteHandler,
  getUsersIdBudgetRouteHandler,
  getUsersIdBudgetSummaryRouteHandler,
  getUsersIdCategoriesRouteHandler,
  getUsersIdCategoryRulesRouteHandler,
  getUsersIdEventsRouteHandler,
  getUsersIdInstitutionsRouteHandler,
  getUsersIdLabelsRouteHandler,
  getUsersIdRouteHandler,
  getUsersIdSavedSearchesRouteHandler,
  getUsersIdTransactionAccountsRouteHandler,
  getUsersIdTransactionsRouteHandler,
  getUsersIdTrendAnalysisRouteHandler,
  postCategoriesIdCategoryRulesRouteHandler,
  postScenariosIdEventsRouteHandler,
  postTransactionAccountsIdTransactionsRouteHandler,
  postTransactionsIdAttachmentsRouteHandler,
  postUsersIdAccountsRouteHandler,
  postUsersIdAttachmentsRouteHandler,
  postUsersIdCategoriesRouteHandler,
  postUsersIdInstitutionsRouteHandler,
  putAccountsIdRouteHandler,
  putAttachmentsIdRouteHandler,
  putCategoriesIdRouteHandler,
  putEventsIdRouteHandler,
  putInstitutionsIdRouteHandler,
  putTransactionAccountsIdRouteHandler,
  putTransactionsIdRouteHandler,
  putUsersIdAccountsRouteHandler,
  putUsersIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteAccountsIdRoute, deleteAccountsIdRouteHandler)
  .openapi(getAccountsIdRoute, getAccountsIdRouteHandler)
  .openapi(putAccountsIdRoute, putAccountsIdRouteHandler)
  .openapi(getAccountsIdTransactionsRoute, getAccountsIdTransactionsRouteHandler)
  .openapi(deleteAttachmentsIdRoute, deleteAttachmentsIdRouteHandler)
  .openapi(getAttachmentsIdRoute, getAttachmentsIdRouteHandler)
  .openapi(putAttachmentsIdRoute, putAttachmentsIdRouteHandler)
  .openapi(deleteCategoriesIdRoute, deleteCategoriesIdRouteHandler)
  .openapi(getCategoriesIdRoute, getCategoriesIdRouteHandler)
  .openapi(putCategoriesIdRoute, putCategoriesIdRouteHandler)
  .openapi(postCategoriesIdCategoryRulesRoute, postCategoriesIdCategoryRulesRouteHandler)
  .openapi(getCategoriesIdTransactionsRoute, getCategoriesIdTransactionsRouteHandler)
  .openapi(getCurrenciesRoute, getCurrenciesRouteHandler)
  .openapi(getCurrenciesIdRoute, getCurrenciesIdRouteHandler)
  .openapi(deleteEventsIdRoute, deleteEventsIdRouteHandler)
  .openapi(getEventsIdRoute, getEventsIdRouteHandler)
  .openapi(putEventsIdRoute, putEventsIdRouteHandler)
  .openapi(deleteInstitutionsIdRoute, deleteInstitutionsIdRouteHandler)
  .openapi(getInstitutionsIdRoute, getInstitutionsIdRouteHandler)
  .openapi(putInstitutionsIdRoute, putInstitutionsIdRouteHandler)
  .openapi(getInstitutionsIdAccountsRoute, getInstitutionsIdAccountsRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(getScenariosIdEventsRoute, getScenariosIdEventsRouteHandler)
  .openapi(postScenariosIdEventsRoute, postScenariosIdEventsRouteHandler)
  .openapi(getTimeZonesRoute, getTimeZonesRouteHandler)
  .openapi(getTransactionAccountsIdRoute, getTransactionAccountsIdRouteHandler)
  .openapi(putTransactionAccountsIdRoute, putTransactionAccountsIdRouteHandler)
  .openapi(
    getTransactionAccountsIdTransactionsRoute,
    getTransactionAccountsIdTransactionsRouteHandler,
  )
  .openapi(
    postTransactionAccountsIdTransactionsRoute,
    postTransactionAccountsIdTransactionsRouteHandler,
  )
  .openapi(deleteTransactionsIdRoute, deleteTransactionsIdRouteHandler)
  .openapi(getTransactionsIdRoute, getTransactionsIdRouteHandler)
  .openapi(putTransactionsIdRoute, putTransactionsIdRouteHandler)
  .openapi(getTransactionsIdAttachmentsRoute, getTransactionsIdAttachmentsRouteHandler)
  .openapi(postTransactionsIdAttachmentsRoute, postTransactionsIdAttachmentsRouteHandler)
  .openapi(
    deleteTransactionsTransactionIdAttachmentsAttachmentIdRoute,
    deleteTransactionsTransactionIdAttachmentsAttachmentIdRouteHandler,
  )
  .openapi(getUsersIdRoute, getUsersIdRouteHandler)
  .openapi(putUsersIdRoute, putUsersIdRouteHandler)
  .openapi(getUsersIdAccountsRoute, getUsersIdAccountsRouteHandler)
  .openapi(postUsersIdAccountsRoute, postUsersIdAccountsRouteHandler)
  .openapi(putUsersIdAccountsRoute, putUsersIdAccountsRouteHandler)
  .openapi(getUsersIdAttachmentsRoute, getUsersIdAttachmentsRouteHandler)
  .openapi(postUsersIdAttachmentsRoute, postUsersIdAttachmentsRouteHandler)
  .openapi(getUsersIdBudgetRoute, getUsersIdBudgetRouteHandler)
  .openapi(getUsersIdBudgetSummaryRoute, getUsersIdBudgetSummaryRouteHandler)
  .openapi(getUsersIdCategoriesRoute, getUsersIdCategoriesRouteHandler)
  .openapi(postUsersIdCategoriesRoute, postUsersIdCategoriesRouteHandler)
  .openapi(getUsersIdCategoryRulesRoute, getUsersIdCategoryRulesRouteHandler)
  .openapi(getUsersIdEventsRoute, getUsersIdEventsRouteHandler)
  .openapi(deleteUsersIdForecastCacheRoute, deleteUsersIdForecastCacheRouteHandler)
  .openapi(getUsersIdInstitutionsRoute, getUsersIdInstitutionsRouteHandler)
  .openapi(postUsersIdInstitutionsRoute, postUsersIdInstitutionsRouteHandler)
  .openapi(getUsersIdLabelsRoute, getUsersIdLabelsRouteHandler)
  .openapi(getUsersIdSavedSearchesRoute, getUsersIdSavedSearchesRouteHandler)
  .openapi(getUsersIdTransactionAccountsRoute, getUsersIdTransactionAccountsRouteHandler)
  .openapi(getUsersIdTransactionsRoute, getUsersIdTransactionsRouteHandler)
  .openapi(getUsersIdTrendAnalysisRoute, getUsersIdTrendAnalysisRouteHandler)

export default app
