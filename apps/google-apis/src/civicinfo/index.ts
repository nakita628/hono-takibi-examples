import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCivicinfoV2DivisionsRoute,
  getCivicinfoV2ElectionsRoute,
  getCivicinfoV2RepresentativesOcdIdRoute,
  getCivicinfoV2RepresentativesRoute,
  getCivicinfoV2VoterinfoRoute,
} from './routes'
import {
  getCivicinfoV2DivisionsRouteHandler,
  getCivicinfoV2ElectionsRouteHandler,
  getCivicinfoV2RepresentativesOcdIdRouteHandler,
  getCivicinfoV2RepresentativesRouteHandler,
  getCivicinfoV2VoterinfoRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCivicinfoV2DivisionsRoute, getCivicinfoV2DivisionsRouteHandler)
  .openapi(getCivicinfoV2ElectionsRoute, getCivicinfoV2ElectionsRouteHandler)
  .openapi(getCivicinfoV2RepresentativesRoute, getCivicinfoV2RepresentativesRouteHandler)
  .openapi(getCivicinfoV2RepresentativesOcdIdRoute, getCivicinfoV2RepresentativesOcdIdRouteHandler)
  .openapi(getCivicinfoV2VoterinfoRoute, getCivicinfoV2VoterinfoRouteHandler)

export default app
