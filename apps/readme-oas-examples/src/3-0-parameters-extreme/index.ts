import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnythingAllParamTypesIdId2Route } from './routes'
import { postAnythingAllParamTypesIdId2RouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postAnythingAllParamTypesIdId2Route,
  postAnythingAllParamTypesIdId2RouteHandler,
)

export default app
