import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdPcapsOwnershipOwnershipIdRoute,
  getAccountsAccountIdPcapsOwnershipRoute,
  getAccountsAccountIdPcapsPcapIdDownloadRoute,
  getAccountsAccountIdPcapsPcapIdRoute,
  getAccountsAccountIdPcapsRoute,
  postAccountsAccountIdPcapsOwnershipRoute,
  postAccountsAccountIdPcapsOwnershipValidateRoute,
  postAccountsAccountIdPcapsRoute,
  putAccountsAccountIdPcapsPcapIdStopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicPCAPCollectionHandler = app
  .openapi(getAccountsAccountIdPcapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPcapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPcapsOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPcapsOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPcapsOwnershipValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdPcapsOwnershipOwnershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPcapsPcapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPcapsPcapIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdPcapsPcapIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
