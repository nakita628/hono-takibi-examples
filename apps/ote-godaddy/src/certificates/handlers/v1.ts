import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CertificatesCertificateIdCallbackRoute,
  getV1CertificatesCertificateIdActionsRoute,
  getV1CertificatesCertificateIdCallbackRoute,
  getV1CertificatesCertificateIdDownloadRoute,
  getV1CertificatesCertificateIdEmailHistoryRoute,
  getV1CertificatesCertificateIdRoute,
  getV1CertificatesCertificateIdSiteSealRoute,
  getV2CertificatesDownloadRoute,
  getV2CertificatesRoute,
  postV1CertificatesCertificateIdCancelRoute,
  postV1CertificatesCertificateIdEmailEmailIdResendEmailAddressRoute,
  postV1CertificatesCertificateIdEmailEmailIdResendRoute,
  postV1CertificatesCertificateIdEmailResendEmailAddressRoute,
  postV1CertificatesCertificateIdReissueRoute,
  postV1CertificatesCertificateIdRenewRoute,
  postV1CertificatesCertificateIdRevokeRoute,
  postV1CertificatesCertificateIdVerifyDomainControlRoute,
  postV1CertificatesRoute,
  postV1CertificatesValidateRoute,
  putV1CertificatesCertificateIdCallbackRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1CertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CertificatesValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CertificatesCertificateIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CertificatesCertificateIdCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CertificatesCertificateIdCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CertificatesCertificateIdCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CertificatesCertificateIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CertificatesCertificateIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CertificatesCertificateIdEmailHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CertificatesCertificateIdEmailResendEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CertificatesCertificateIdEmailEmailIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CertificatesCertificateIdEmailEmailIdResendEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CertificatesCertificateIdReissueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CertificatesCertificateIdRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CertificatesCertificateIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CertificatesCertificateIdSiteSealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CertificatesCertificateIdVerifyDomainControlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CertificatesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
