import { OpenAPIHono } from '@hono/zod-openapi'
import { deletePetsIdRoute, getPetsIdRoute, getPetsRoute, postPetsRoute } from './routes'
import {
  deletePetsIdRouteHandler,
  getPetsIdRouteHandler,
  getPetsRouteHandler,
  postPetsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getPetsRoute, getPetsRouteHandler)
  .openapi(postPetsRoute, postPetsRouteHandler)
  .openapi(getPetsIdRoute, getPetsIdRouteHandler)
  .openapi(deletePetsIdRoute, deletePetsIdRouteHandler)

export default app
