import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganisationsPartyIdAddressesAddressIdRoute,
  getOrganisationsPartyIdAddressesAddressIdRoute,
  getOrganisationsPartyIdAddressesRoute,
  postOrganisationsPartyIdAddressesRoute,
  putOrganisationsPartyIdAddressesAddressIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organisationsAddressesHandler = app
  .openapi(getOrganisationsPartyIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsPartyIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsPartyIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsPartyIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
