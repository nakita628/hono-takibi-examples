import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingRoute,
  getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainRoute,
  getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsRoute,
  getV2CustomersCustomerIdCertificatesCertificateIdRoute,
  getV2CustomersCustomerIdCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2CustomersCustomerIdCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
