import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlpValidatorsProximityWordsValidatorIdRoute,
  deleteAccountsAccountIdDlpValidatorsWorkerValidatorIdRoute,
  getAccountsAccountIdDlpValidatorsProximityWordsRoute,
  getAccountsAccountIdDlpValidatorsProximityWordsValidatorIdRoute,
  getAccountsAccountIdDlpValidatorsRoute,
  getAccountsAccountIdDlpValidatorsValidatorIdRoute,
  getAccountsAccountIdDlpValidatorsWorkerRoute,
  getAccountsAccountIdDlpValidatorsWorkerValidatorIdRoute,
  getAccountsAccountIdDlpValidatorsWorkerValidatorIdStatusRoute,
  postAccountsAccountIdDlpValidatorsProximityWordsRoute,
  postAccountsAccountIdDlpValidatorsWorkerRoute,
  putAccountsAccountIdDlpValidatorsProximityWordsValidatorIdRoute,
  putAccountsAccountIdDlpValidatorsWorkerValidatorIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpValidatorsHandler = app
  .openapi(getAccountsAccountIdDlpValidatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpValidatorsProximityWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpValidatorsProximityWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpValidatorsProximityWordsValidatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpValidatorsProximityWordsValidatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpValidatorsProximityWordsValidatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpValidatorsWorkerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpValidatorsWorkerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpValidatorsWorkerValidatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpValidatorsWorkerValidatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpValidatorsWorkerValidatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpValidatorsWorkerValidatorIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpValidatorsValidatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
