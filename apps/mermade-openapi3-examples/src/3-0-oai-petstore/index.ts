import { OpenAPIHono } from '@hono/zod-openapi'
import { getPetsPetIdRoute, getPetsRoute, postPetsRoute } from './routes'
import { getPetsPetIdRouteHandler, getPetsRouteHandler, postPetsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getPetsRoute, getPetsRouteHandler)
  .openapi(postPetsRoute, postPetsRouteHandler)
  .openapi(getPetsPetIdRoute, getPetsPetIdRouteHandler)

export default app
