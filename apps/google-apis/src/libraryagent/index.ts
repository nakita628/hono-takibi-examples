import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NameRoute,
  getV1ParentBooksRoute,
  getV1ShelvesRoute,
  postV1NameBorrowRoute,
  postV1NameReturnRoute,
} from './routes'
import {
  getV1NameRouteHandler,
  getV1ParentBooksRouteHandler,
  getV1ShelvesRouteHandler,
  postV1NameBorrowRouteHandler,
  postV1NameReturnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1ShelvesRoute, getV1ShelvesRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(postV1NameBorrowRoute, postV1NameBorrowRouteHandler)
  .openapi(postV1NameReturnRoute, postV1NameReturnRouteHandler)
  .openapi(getV1ParentBooksRoute, getV1ParentBooksRouteHandler)

export default app
