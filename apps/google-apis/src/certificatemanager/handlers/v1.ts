import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentCertificateIssuanceConfigsRoute,
  getV1ParentCertificateMapEntriesRoute,
  getV1ParentCertificateMapsRoute,
  getV1ParentCertificatesRoute,
  getV1ParentDnsAuthorizationsRoute,
  getV1ParentTrustConfigsRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1ParentCertificateIssuanceConfigsRoute,
  postV1ParentCertificateMapEntriesRoute,
  postV1ParentCertificateMapsRoute,
  postV1ParentCertificatesRoute,
  postV1ParentDnsAuthorizationsRoute,
  postV1ParentTrustConfigsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentCertificateIssuanceConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCertificateIssuanceConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentCertificateMapEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCertificateMapEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentCertificateMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCertificateMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDnsAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDnsAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentTrustConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentTrustConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
