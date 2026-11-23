import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1GetIceServerConfigRoute, postV1SendAlexaOfferToMasterRoute } from './routes'
import {
  postV1GetIceServerConfigRouteHandler,
  postV1SendAlexaOfferToMasterRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1GetIceServerConfigRoute, postV1GetIceServerConfigRouteHandler)
  .openapi(postV1SendAlexaOfferToMasterRoute, postV1SendAlexaOfferToMasterRouteHandler)

export default app
