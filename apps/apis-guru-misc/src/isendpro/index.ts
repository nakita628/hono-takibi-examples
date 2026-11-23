import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCampagneRoute,
  getCreditRoute,
  postComptageRoute,
  postDellistenoireRoute,
  postGetlistenoireRoute,
  postHlrRoute,
  postRepertoireRoute,
  postSetlistenoireRoute,
  postShortlinkRoute,
  postSmsmultiRoute,
  postSmsRoute,
  postSubaccountRoute,
  putRepertoireRoute,
  putSubaccountRoute,
} from './routes'
import {
  getCampagneRouteHandler,
  getCreditRouteHandler,
  postComptageRouteHandler,
  postDellistenoireRouteHandler,
  postGetlistenoireRouteHandler,
  postHlrRouteHandler,
  postRepertoireRouteHandler,
  postSetlistenoireRouteHandler,
  postShortlinkRouteHandler,
  postSmsmultiRouteHandler,
  postSmsRouteHandler,
  postSubaccountRouteHandler,
  putRepertoireRouteHandler,
  putSubaccountRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCampagneRoute, getCampagneRouteHandler)
  .openapi(postComptageRoute, postComptageRouteHandler)
  .openapi(getCreditRoute, getCreditRouteHandler)
  .openapi(postDellistenoireRoute, postDellistenoireRouteHandler)
  .openapi(postGetlistenoireRoute, postGetlistenoireRouteHandler)
  .openapi(postHlrRoute, postHlrRouteHandler)
  .openapi(postRepertoireRoute, postRepertoireRouteHandler)
  .openapi(putRepertoireRoute, putRepertoireRouteHandler)
  .openapi(postSetlistenoireRoute, postSetlistenoireRouteHandler)
  .openapi(postShortlinkRoute, postShortlinkRouteHandler)
  .openapi(postSmsRoute, postSmsRouteHandler)
  .openapi(postSmsmultiRoute, postSmsmultiRouteHandler)
  .openapi(postSubaccountRoute, postSubaccountRouteHandler)
  .openapi(putSubaccountRoute, putSubaccountRouteHandler)

export default app
