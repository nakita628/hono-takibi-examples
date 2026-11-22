import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DomainsDomainPrivacyRoute,
  deleteV1DomainsDomainRecordsTypeNameRoute,
  deleteV1DomainsDomainRoute,
  getV1DomainsAgreementsRoute,
  getV1DomainsAvailableRoute,
  getV1DomainsDomainRecordsTypeNameRoute,
  getV1DomainsDomainRoute,
  getV1DomainsPurchaseSchemaTldRoute,
  getV1DomainsRoute,
  getV1DomainsSuggestRoute,
  getV1DomainsTldsRoute,
  patchV1DomainsDomainContactsRoute,
  patchV1DomainsDomainRecordsRoute,
  patchV1DomainsDomainRoute,
  postV1DomainsAvailableRoute,
  postV1DomainsContactsValidateRoute,
  postV1DomainsDomainPrivacyPurchaseRoute,
  postV1DomainsDomainRenewRoute,
  postV1DomainsDomainTransferRoute,
  postV1DomainsDomainVerifyRegistrantEmailRoute,
  postV1DomainsPurchaseRoute,
  postV1DomainsPurchaseValidateRoute,
  putV1DomainsDomainRecordsRoute,
  putV1DomainsDomainRecordsTypeNameRoute,
  putV1DomainsDomainRecordsTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsContactsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsPurchaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsPurchaseSchemaTldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsPurchaseValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsSuggestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsTldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DomainsDomainContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DomainsDomainPrivacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsDomainPrivacyPurchaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DomainsDomainRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DomainsDomainRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DomainsDomainRecordsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DomainsDomainRecordsTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsDomainRecordsTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DomainsDomainRecordsTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsDomainRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsDomainTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsDomainVerifyRegistrantEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
