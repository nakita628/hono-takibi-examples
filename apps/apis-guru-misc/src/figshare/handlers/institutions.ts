import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountInstitutionRolesAccountIdGroupIdRoleIdRoute,
  getAccountCategoriesRoute,
  getAccountInstitutionAccountsRoute,
  getAccountInstitutionArticlesRoute,
  getAccountInstitutionCustomFieldsRoute,
  getAccountInstitutionEmbargoOptionsRoute,
  getAccountInstitutionGroupsGroupIdEmbargoOptionsRoute,
  getAccountInstitutionGroupsRoute,
  getAccountInstitutionReviewCurationIdCommentsRoute,
  getAccountInstitutionReviewCurationIdRoute,
  getAccountInstitutionReviewsRoute,
  getAccountInstitutionRolesAccountIdRoute,
  getAccountInstitutionRolesRoute,
  getAccountInstitutionRoute,
  getAccountInstitutionUsersAccountIdRoute,
  getInstitutionsInstitutionStringIdArticlesFilterByRoute,
  postAccountInstitutionAccountsRoute,
  postAccountInstitutionAccountsSearchRoute,
  postAccountInstitutionCustomFieldsCustomFieldIdItemsUploadRoute,
  postAccountInstitutionReviewCurationIdCommentsRoute,
  postAccountInstitutionRolesAccountIdRoute,
  postInstitutionHrfeedUploadRoute,
  putAccountInstitutionAccountsAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const institutionsHandler = app
  .openapi(getAccountCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountInstitutionAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountInstitutionAccountsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountInstitutionAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountInstitutionCustomFieldsCustomFieldIdItemsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionEmbargoOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionGroupsGroupIdEmbargoOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionReviewCurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionReviewCurationIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountInstitutionReviewCurationIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionRolesAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountInstitutionRolesAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountInstitutionRolesAccountIdGroupIdRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionUsersAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstitutionHrfeedUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstitutionsInstitutionStringIdArticlesFilterByRoute, (c) => {
    throw new Error('Not implemented')
  })
