import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdLogpushJobsJobIdRoute,
  deleteAccountsAccountIdLogpushJobsJobIdRoute,
  getAccountOrZoneAccountOrZoneIdLogpushDatasetsDatasetIdFieldsRoute,
  getAccountOrZoneAccountOrZoneIdLogpushDatasetsDatasetIdJobsRoute,
  getAccountOrZoneAccountOrZoneIdLogpushJobsJobIdRoute,
  getAccountOrZoneAccountOrZoneIdLogpushJobsRoute,
  getAccountsAccountIdLogpushDatasetsDatasetIdFieldsRoute,
  getAccountsAccountIdLogpushDatasetsDatasetIdJobsRoute,
  getAccountsAccountIdLogpushJobsJobIdRoute,
  getAccountsAccountIdLogpushJobsRoute,
  postAccountOrZoneAccountOrZoneIdLogpushJobsRoute,
  postAccountOrZoneAccountOrZoneIdLogpushOwnershipRoute,
  postAccountOrZoneAccountOrZoneIdLogpushOwnershipValidateRoute,
  postAccountOrZoneAccountOrZoneIdLogpushValidateDestinationExistsRoute,
  postAccountOrZoneAccountOrZoneIdLogpushValidateDestinationRoute,
  postAccountOrZoneAccountOrZoneIdLogpushValidateOriginRoute,
  postAccountsAccountIdLogpushJobsRoute,
  postAccountsAccountIdLogpushOwnershipRoute,
  postAccountsAccountIdLogpushOwnershipValidateRoute,
  postAccountsAccountIdLogpushValidateDestinationExistsRoute,
  postAccountsAccountIdLogpushValidateDestinationRoute,
  postAccountsAccountIdLogpushValidateOriginRoute,
  putAccountOrZoneAccountOrZoneIdLogpushJobsJobIdRoute,
  putAccountsAccountIdLogpushJobsJobIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logpushJobsForAnAccountHandler = app
  .openapi(getAccountsAccountIdLogpushDatasetsDatasetIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLogpushDatasetsDatasetIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLogpushJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLogpushJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdLogpushJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLogpushJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdLogpushJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLogpushOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLogpushOwnershipValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLogpushValidateDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLogpushValidateDestinationExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLogpushValidateOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdLogpushDatasetsDatasetIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdLogpushDatasetsDatasetIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdLogpushJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdLogpushJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdLogpushJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdLogpushJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdLogpushJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdLogpushOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdLogpushOwnershipValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdLogpushValidateDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdLogpushValidateDestinationExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdLogpushValidateOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
