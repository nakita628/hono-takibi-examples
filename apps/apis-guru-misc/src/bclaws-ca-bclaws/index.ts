import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContentAspectIdCivixDocumentIdRoute,
  getContentAspectIdRoute,
  getDocumentIdAspectIdCivixIndexIdCivixDocumentIdRoute,
  getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRoute,
  getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRoute,
  getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRoute,
  getSearchAspectIdFullsearchRoute,
} from './routes'
import {
  getContentAspectIdCivixDocumentIdRouteHandler,
  getContentAspectIdRouteHandler,
  getDocumentIdAspectIdCivixIndexIdCivixDocumentIdRouteHandler,
  getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRouteHandler,
  getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRouteHandler,
  getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRouteHandler,
  getSearchAspectIdFullsearchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getContentAspectIdRoute, getContentAspectIdRouteHandler)
  .openapi(getContentAspectIdCivixDocumentIdRoute, getContentAspectIdCivixDocumentIdRouteHandler)
  .openapi(
    getDocumentIdAspectIdCivixIndexIdCivixDocumentIdRoute,
    getDocumentIdAspectIdCivixIndexIdCivixDocumentIdRouteHandler,
  )
  .openapi(
    getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRoute,
    getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRouteHandler,
  )
  .openapi(
    getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRoute,
    getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRouteHandler,
  )
  .openapi(
    getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRoute,
    getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRouteHandler,
  )
  .openapi(getSearchAspectIdFullsearchRoute, getSearchAspectIdFullsearchRouteHandler)

export default app
