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
  getV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingRoute,
  getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainRoute,
  getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsRoute,
  getV2CustomersCustomerIdCertificatesCertificateIdRoute,
  getV2CustomersCustomerIdCertificatesRoute,
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
} from './routes'
import {
  deleteV1CertificatesCertificateIdCallbackRouteHandler,
  getV1CertificatesCertificateIdActionsRouteHandler,
  getV1CertificatesCertificateIdCallbackRouteHandler,
  getV1CertificatesCertificateIdDownloadRouteHandler,
  getV1CertificatesCertificateIdEmailHistoryRouteHandler,
  getV1CertificatesCertificateIdRouteHandler,
  getV1CertificatesCertificateIdSiteSealRouteHandler,
  getV2CertificatesDownloadRouteHandler,
  getV2CertificatesRouteHandler,
  getV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingRouteHandler,
  getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainRouteHandler,
  getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsRouteHandler,
  getV2CustomersCustomerIdCertificatesCertificateIdRouteHandler,
  getV2CustomersCustomerIdCertificatesRouteHandler,
  postV1CertificatesCertificateIdCancelRouteHandler,
  postV1CertificatesCertificateIdEmailEmailIdResendEmailAddressRouteHandler,
  postV1CertificatesCertificateIdEmailEmailIdResendRouteHandler,
  postV1CertificatesCertificateIdEmailResendEmailAddressRouteHandler,
  postV1CertificatesCertificateIdReissueRouteHandler,
  postV1CertificatesCertificateIdRenewRouteHandler,
  postV1CertificatesCertificateIdRevokeRouteHandler,
  postV1CertificatesCertificateIdVerifyDomainControlRouteHandler,
  postV1CertificatesRouteHandler,
  postV1CertificatesValidateRouteHandler,
  putV1CertificatesCertificateIdCallbackRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1CertificatesRoute, postV1CertificatesRouteHandler)
  .openapi(postV1CertificatesValidateRoute, postV1CertificatesValidateRouteHandler)
  .openapi(getV1CertificatesCertificateIdRoute, getV1CertificatesCertificateIdRouteHandler)
  .openapi(
    getV1CertificatesCertificateIdActionsRoute,
    getV1CertificatesCertificateIdActionsRouteHandler,
  )
  .openapi(
    deleteV1CertificatesCertificateIdCallbackRoute,
    deleteV1CertificatesCertificateIdCallbackRouteHandler,
  )
  .openapi(
    getV1CertificatesCertificateIdCallbackRoute,
    getV1CertificatesCertificateIdCallbackRouteHandler,
  )
  .openapi(
    putV1CertificatesCertificateIdCallbackRoute,
    putV1CertificatesCertificateIdCallbackRouteHandler,
  )
  .openapi(
    postV1CertificatesCertificateIdCancelRoute,
    postV1CertificatesCertificateIdCancelRouteHandler,
  )
  .openapi(
    getV1CertificatesCertificateIdDownloadRoute,
    getV1CertificatesCertificateIdDownloadRouteHandler,
  )
  .openapi(
    getV1CertificatesCertificateIdEmailHistoryRoute,
    getV1CertificatesCertificateIdEmailHistoryRouteHandler,
  )
  .openapi(
    postV1CertificatesCertificateIdEmailResendEmailAddressRoute,
    postV1CertificatesCertificateIdEmailResendEmailAddressRouteHandler,
  )
  .openapi(
    postV1CertificatesCertificateIdEmailEmailIdResendRoute,
    postV1CertificatesCertificateIdEmailEmailIdResendRouteHandler,
  )
  .openapi(
    postV1CertificatesCertificateIdEmailEmailIdResendEmailAddressRoute,
    postV1CertificatesCertificateIdEmailEmailIdResendEmailAddressRouteHandler,
  )
  .openapi(
    postV1CertificatesCertificateIdReissueRoute,
    postV1CertificatesCertificateIdReissueRouteHandler,
  )
  .openapi(
    postV1CertificatesCertificateIdRenewRoute,
    postV1CertificatesCertificateIdRenewRouteHandler,
  )
  .openapi(
    postV1CertificatesCertificateIdRevokeRoute,
    postV1CertificatesCertificateIdRevokeRouteHandler,
  )
  .openapi(
    getV1CertificatesCertificateIdSiteSealRoute,
    getV1CertificatesCertificateIdSiteSealRouteHandler,
  )
  .openapi(
    postV1CertificatesCertificateIdVerifyDomainControlRoute,
    postV1CertificatesCertificateIdVerifyDomainControlRouteHandler,
  )
  .openapi(getV2CertificatesRoute, getV2CertificatesRouteHandler)
  .openapi(getV2CertificatesDownloadRoute, getV2CertificatesDownloadRouteHandler)
  .openapi(
    getV2CustomersCustomerIdCertificatesRoute,
    getV2CustomersCustomerIdCertificatesRouteHandler,
  )
  .openapi(
    getV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingRoute,
    getV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingRouteHandler,
  )
  .openapi(
    getV2CustomersCustomerIdCertificatesCertificateIdRoute,
    getV2CustomersCustomerIdCertificatesCertificateIdRouteHandler,
  )
  .openapi(
    getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsRoute,
    getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsRouteHandler,
  )
  .openapi(
    getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainRoute,
    getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainRouteHandler,
  )

export default app
