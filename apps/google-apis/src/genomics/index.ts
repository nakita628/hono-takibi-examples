import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2alpha1NameRoute,
  postV2alpha1IdCheckInRoute,
  postV2alpha1NameCancelRoute,
  postV2alpha1PipelinesRunRoute,
  postV2alpha1WorkersIdCheckInRoute,
} from './routes'
import {
  getV2alpha1NameRouteHandler,
  postV2alpha1IdCheckInRouteHandler,
  postV2alpha1NameCancelRouteHandler,
  postV2alpha1PipelinesRunRouteHandler,
  postV2alpha1WorkersIdCheckInRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2alpha1PipelinesRunRoute, postV2alpha1PipelinesRunRouteHandler)
  .openapi(postV2alpha1WorkersIdCheckInRoute, postV2alpha1WorkersIdCheckInRouteHandler)
  .openapi(postV2alpha1IdCheckInRoute, postV2alpha1IdCheckInRouteHandler)
  .openapi(getV2alpha1NameRoute, getV2alpha1NameRouteHandler)
  .openapi(postV2alpha1NameCancelRoute, postV2alpha1NameCancelRouteHandler)

export default app
