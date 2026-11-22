import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndividualsPartyIdLicensesProductIdRoute,
  getIndividualsPartyIdLicensesProductIdRoute,
  getIndividualsPartyIdLicensesRoute,
  postIndividualsPartyIdLicensesRoute,
  putIndividualsPartyIdLicensesProductIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const individualsLicensesHandler = app
  .openapi(getIndividualsPartyIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndividualsPartyIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndividualsPartyIdLicensesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdLicensesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndividualsPartyIdLicensesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
