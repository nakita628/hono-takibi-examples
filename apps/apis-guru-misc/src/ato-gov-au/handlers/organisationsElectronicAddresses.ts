import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganisationsPartyIdElectronicAddressesAddressIdRoute,
  getOrganisationsPartyIdElectronicAddressesAddressIdRoute,
  getOrganisationsPartyIdElectronicAddressesRoute,
  postOrganisationsPartyIdElectronicAddressesRoute,
  putOrganisationsPartyIdElectronicAddressesAddressIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organisationsElectronicAddressesHandler = app
  .openapi(getOrganisationsPartyIdElectronicAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsPartyIdElectronicAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsPartyIdElectronicAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdElectronicAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsPartyIdElectronicAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
