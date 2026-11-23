import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersIdForecastCacheRoute,
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
  postUsersIdAccountsRoute,
  postUsersIdAttachmentsRoute,
  postUsersIdCategoriesRoute,
  postUsersIdInstitutionsRoute,
  putUsersIdAccountsRoute,
  putUsersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdBudgetSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdCategoryRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdForecastCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdInstitutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdInstitutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdSavedSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdTransactionAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdTrendAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
