import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndividualsPartyIdElectronicAddressesAddressIdRoute,
  getIndividualsPartyIdElectronicAddressesAddressIdRoute,
  getIndividualsPartyIdElectronicAddressesRoute,
  postIndividualsPartyIdElectronicAddressesRoute,
  putIndividualsPartyIdElectronicAddressesAddressIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const individualsElectronicAddressesHandler = app
  .openapi(getIndividualsPartyIdElectronicAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndividualsPartyIdElectronicAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndividualsPartyIdElectronicAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdElectronicAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndividualsPartyIdElectronicAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
