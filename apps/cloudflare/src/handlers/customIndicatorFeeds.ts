import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdIntelIndicatorFeedsFeedIdDataRoute,
  getAccountsAccountIdIntelIndicatorFeedsFeedIdDownloadRoute,
  getAccountsAccountIdIntelIndicatorFeedsFeedIdRoute,
  getAccountsAccountIdIntelIndicatorFeedsFeedIdUploadsUploadIdRoute,
  getAccountsAccountIdIntelIndicatorFeedsPermissionsViewRoute,
  getAccountsAccountIdIntelIndicatorFeedsRoute,
  postAccountsAccountIdIntelIndicatorFeedsRoute,
  putAccountsAccountIdIntelIndicatorFeedsFeedIdRoute,
  putAccountsAccountIdIntelIndicatorFeedsFeedIdSnapshotRoute,
  putAccountsAccountIdIntelIndicatorFeedsPermissionsAddRoute,
  putAccountsAccountIdIntelIndicatorFeedsPermissionsCreateProviderRoute,
  putAccountsAccountIdIntelIndicatorFeedsPermissionsRemoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customIndicatorFeedsHandler = app
  .openapi(getAccountsAccountIdIntelIndicatorFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdIntelIndicatorFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdIntelIndicatorFeedsPermissionsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdIntelIndicatorFeedsPermissionsCreateProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdIntelIndicatorFeedsPermissionsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIntelIndicatorFeedsPermissionsViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIntelIndicatorFeedsFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdIntelIndicatorFeedsFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIntelIndicatorFeedsFeedIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIntelIndicatorFeedsFeedIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdIntelIndicatorFeedsFeedIdSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIntelIndicatorFeedsFeedIdUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
