import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlpDatasetsDatasetIdRoute,
  getAccountsAccountIdDlpDatasetsDatasetIdRoute,
  getAccountsAccountIdDlpDatasetsRoute,
  postAccountsAccountIdDlpDatasetsDatasetIdUploadRoute,
  postAccountsAccountIdDlpDatasetsDatasetIdUploadVersionRoute,
  postAccountsAccountIdDlpDatasetsDatasetIdVersionsVersionEntriesEntryIdRoute,
  postAccountsAccountIdDlpDatasetsDatasetIdVersionsVersionRoute,
  postAccountsAccountIdDlpDatasetsRoute,
  putAccountsAccountIdDlpDatasetsDatasetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpDatasetsHandler = app
  .openapi(getAccountsAccountIdDlpDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpDatasetsDatasetIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpDatasetsDatasetIdUploadVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpDatasetsDatasetIdVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpDatasetsDatasetIdVersionsVersionEntriesEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
