import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDocumentIdAspectIdCivixIndexIdCivixDocumentIdRoute,
  getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRoute,
  getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRoute,
  getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentHandler = app
  .openapi(getDocumentIdAspectIdCivixIndexIdCivixDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRoute, (c) => {
    throw new Error('Not implemented')
  })
