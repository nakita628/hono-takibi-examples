import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DomainsDomainRoute,
  deleteV1DomainsDomainRoutesAddressRoute,
  getV1DomainsDomainAutoConfigureRoute,
  getV1DomainsDomainRoute,
  getV1DomainsDomainRoutesAddressRoute,
  getV1DomainsDomainRoutesRoute,
  getV1DomainsRoute,
  patchV1DomainsDomainRoute,
  patchV1DomainsDomainRoutesAddressRoute,
  postV1DomainsDomainAutoConfigureStartRoute,
  postV1DomainsDomainDiagnoseRoute,
  postV1DomainsDomainRoutesAddressTestRoute,
  postV1DomainsDomainRoutesRoute,
  postV1DomainsDomainVerifyRoute,
  postV1DomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getV1DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsDomainVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsDomainDiagnoseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsDomainRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsDomainRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsDomainRoutesAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DomainsDomainRoutesAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DomainsDomainRoutesAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsDomainRoutesAddressTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsDomainAutoConfigureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsDomainAutoConfigureStartRoute, (c) => {
    throw new Error('Not implemented')
  })
