import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV3LogImpressionsRoute,
  postV3LogPlayerReportsRoute,
  postV3SamplePlayableLocationsRoute,
} from './routes'
import {
  postV3LogImpressionsRouteHandler,
  postV3LogPlayerReportsRouteHandler,
  postV3SamplePlayableLocationsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV3LogImpressionsRoute, postV3LogImpressionsRouteHandler)
  .openapi(postV3LogPlayerReportsRoute, postV3LogPlayerReportsRouteHandler)
  .openapi(postV3SamplePlayableLocationsRoute, postV3SamplePlayableLocationsRouteHandler)

export default app
