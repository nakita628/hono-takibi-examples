import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteSpeakersRoute, getSpeakersRoute, postSpeakersRoute } from './routes'
import {
  deleteSpeakersRouteHandler,
  getSpeakersRouteHandler,
  postSpeakersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSpeakersRoute, getSpeakersRouteHandler)
  .openapi(postSpeakersRoute, postSpeakersRouteHandler)
  .openapi(deleteSpeakersRoute, deleteSpeakersRouteHandler)

export default app
