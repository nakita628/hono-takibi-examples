import { OpenAPIHono } from '@hono/zod-openapi'
import { getPetIdRoute, putPetIdRoute } from './routes'
import { getPetIdRouteHandler, putPetIdRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putPetIdRoute, putPetIdRouteHandler)
  .openapi(getPetIdRoute, getPetIdRouteHandler)

export default app
