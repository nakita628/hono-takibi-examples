import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1NameGenerateAccessTokenRoute,
  postV1NameGenerateIdTokenRoute,
  postV1NameSignBlobRoute,
  postV1NameSignJwtRoute,
} from './routes'
import {
  postV1NameGenerateAccessTokenRouteHandler,
  postV1NameGenerateIdTokenRouteHandler,
  postV1NameSignBlobRouteHandler,
  postV1NameSignJwtRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1NameGenerateAccessTokenRoute, postV1NameGenerateAccessTokenRouteHandler)
  .openapi(postV1NameGenerateIdTokenRoute, postV1NameGenerateIdTokenRouteHandler)
  .openapi(postV1NameSignBlobRoute, postV1NameSignBlobRouteHandler)
  .openapi(postV1NameSignJwtRoute, postV1NameSignJwtRouteHandler)

export default app
