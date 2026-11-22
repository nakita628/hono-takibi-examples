import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdIpRestrictionsIdRoute,
  getApiV3AccountsAccountIdIpRestrictionsIdRoute,
  getApiV3AccountsAccountIdIpRestrictionsIndexRoute,
  getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexRoute,
  getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdRoute,
  postApiV3AccountsAccountIdIpRestrictionsIndexRoute,
  postApiV3AccountsAccountIdIpRestrictionsSetIndexRoute,
  putApiV3AccountsAccountIdIpRestrictionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipRestrictionEndpointsHandler = app
  .openapi(getApiV3AccountsAccountIdIpRestrictionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdIpRestrictionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdIpRestrictionsSetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdIpRestrictionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3AccountsAccountIdIpRestrictionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdIpRestrictionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
