import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndividualsPartyIdBusinessNamesProductIdRoute,
  getIndividualsPartyIdBusinessNamesProductIdRoute,
  getIndividualsPartyIdBusinessNamesRoute,
  postIndividualsPartyIdBusinessNamesRoute,
  putIndividualsPartyIdBusinessNamesProductIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const individualsBusinessNamesHandler = app
  .openapi(getIndividualsPartyIdBusinessNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndividualsPartyIdBusinessNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndividualsPartyIdBusinessNamesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdBusinessNamesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndividualsPartyIdBusinessNamesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
