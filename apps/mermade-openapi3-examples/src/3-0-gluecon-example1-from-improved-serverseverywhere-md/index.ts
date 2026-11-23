import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteImagesFilenameRoute,
  getImagesFilenameRoute,
  getPassportsIdRoute,
  postPassportsIdRoute,
  putImagesFilenameRoute,
} from './routes'
import {
  deleteImagesFilenameRouteHandler,
  getImagesFilenameRouteHandler,
  getPassportsIdRouteHandler,
  postPassportsIdRouteHandler,
  putImagesFilenameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getPassportsIdRoute, getPassportsIdRouteHandler)
  .openapi(postPassportsIdRoute, postPassportsIdRouteHandler)
  .openapi(getImagesFilenameRoute, getImagesFilenameRouteHandler)
  .openapi(putImagesFilenameRoute, putImagesFilenameRouteHandler)
  .openapi(deleteImagesFilenameRoute, deleteImagesFilenameRouteHandler)

export default app
