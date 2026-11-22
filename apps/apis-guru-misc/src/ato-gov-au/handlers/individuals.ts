import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndividualsPartyIdRoute,
  getIndividualsPartyIdRoute,
  getIndividualsRoute,
  postIndividualsRoute,
  putIndividualsPartyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const individualsHandler = app
  .openapi(getIndividualsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndividualsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndividualsPartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndividualsPartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
