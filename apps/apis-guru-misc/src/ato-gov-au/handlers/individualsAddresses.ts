import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndividualsPartyIdAddressesAddressIdRoute,
  getIndividualsPartyIdAddressesAddressIdRoute,
  getIndividualsPartyIdAddressesRoute,
  postIndividualsPartyIdAddressesRoute,
  putIndividualsPartyIdAddressesAddressIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const individualsAddressesHandler = app
  .openapi(getIndividualsPartyIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndividualsPartyIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndividualsPartyIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndividualsPartyIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
