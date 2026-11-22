import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1RegistrarDomainsDomainAuthCodeRoute,
  getV1RegistrarDomainsDomainAvailabilityRoute,
  getV1RegistrarDomainsDomainContactInfoSchemaRoute,
  getV1RegistrarDomainsDomainContactVerificationRoute,
  getV1RegistrarDomainsDomainPriceRoute,
  getV1RegistrarDomainsDomainTransferRoute,
  getV1RegistrarOrdersOrderIdRoute,
  getV1RegistrarTldsSupportedRoute,
  getV1RegistrarTldsTldPriceRoute,
  getV1RegistrarTldsTldRoute,
  patchV1RegistrarDomainsDomainAutoRenewRoute,
  patchV1RegistrarDomainsDomainNameserversRoute,
  postV1RegistrarDomainsAvailabilityRoute,
  postV1RegistrarDomainsBuyRoute,
  postV1RegistrarDomainsDomainBuyRoute,
  postV1RegistrarDomainsDomainRenewRoute,
  postV1RegistrarDomainsDomainTransferRoute,
  postV1RegistrarDomainsPriceRoute,
  postV1RegistrarDomainsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsRegistrarHandler = app
  .openapi(postV1RegistrarDomainsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarTldsSupportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarTldsTldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarTldsTldPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarDomainsDomainAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarDomainsDomainPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrarDomainsPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrarDomainsAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarDomainsDomainContactInfoSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarDomainsDomainAuthCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrarDomainsDomainBuyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrarDomainsBuyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrarDomainsDomainTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarDomainsDomainTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrarDomainsDomainRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1RegistrarDomainsDomainAutoRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1RegistrarDomainsDomainNameserversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarDomainsDomainContactVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
