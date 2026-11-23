import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauth21AuthorizeRoute,
  getOauth21FilesIdRoute,
  getOauth21FilesIndexRoute,
  getOauth21FilesIssuedRoute,
  getOauth21FileUriRoute,
  getOauth21UserRoute,
  getOauth21XmlUriRoute,
  getOauth22FilesIssuedRoute,
  getOauth22XmlEaadhaarRoute,
  postAccount1PushuriRoute,
  postAccount2VerifyRoute,
  postOauth21CodeRoute,
  postOauth21FileUploadRoute,
  postOauth21PullDoctypeRoute,
  postOauth21PullIssuersRoute,
  postOauth21PullParametersRoute,
  postOauth21PullPulldocumentRoute,
  postOauth21RevokeRoute,
  postOauth21TokenRoute,
  postSignup1DemoauthverifyRoute,
  postSignup2DemoauthRoute,
  postStatistics1CountsRoute,
} from './routes'
import {
  getOauth21AuthorizeRouteHandler,
  getOauth21FilesIdRouteHandler,
  getOauth21FilesIndexRouteHandler,
  getOauth21FilesIssuedRouteHandler,
  getOauth21FileUriRouteHandler,
  getOauth21UserRouteHandler,
  getOauth21XmlUriRouteHandler,
  getOauth22FilesIssuedRouteHandler,
  getOauth22XmlEaadhaarRouteHandler,
  postAccount1PushuriRouteHandler,
  postAccount2VerifyRouteHandler,
  postOauth21CodeRouteHandler,
  postOauth21FileUploadRouteHandler,
  postOauth21PullDoctypeRouteHandler,
  postOauth21PullIssuersRouteHandler,
  postOauth21PullParametersRouteHandler,
  postOauth21PullPulldocumentRouteHandler,
  postOauth21RevokeRouteHandler,
  postOauth21TokenRouteHandler,
  postSignup1DemoauthverifyRouteHandler,
  postSignup2DemoauthRouteHandler,
  postStatistics1CountsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAccount1PushuriRoute, postAccount1PushuriRouteHandler)
  .openapi(postAccount2VerifyRoute, postAccount2VerifyRouteHandler)
  .openapi(getOauth21AuthorizeRoute, getOauth21AuthorizeRouteHandler)
  .openapi(postOauth21CodeRoute, postOauth21CodeRouteHandler)
  .openapi(postOauth21FileUploadRoute, postOauth21FileUploadRouteHandler)
  .openapi(getOauth21FileUriRoute, getOauth21FileUriRouteHandler)
  .openapi(getOauth21FilesIndexRoute, getOauth21FilesIndexRouteHandler)
  .openapi(getOauth21FilesIssuedRoute, getOauth21FilesIssuedRouteHandler)
  .openapi(getOauth21FilesIdRoute, getOauth21FilesIdRouteHandler)
  .openapi(postOauth21PullDoctypeRoute, postOauth21PullDoctypeRouteHandler)
  .openapi(postOauth21PullIssuersRoute, postOauth21PullIssuersRouteHandler)
  .openapi(postOauth21PullParametersRoute, postOauth21PullParametersRouteHandler)
  .openapi(postOauth21PullPulldocumentRoute, postOauth21PullPulldocumentRouteHandler)
  .openapi(postOauth21RevokeRoute, postOauth21RevokeRouteHandler)
  .openapi(postOauth21TokenRoute, postOauth21TokenRouteHandler)
  .openapi(getOauth21UserRoute, getOauth21UserRouteHandler)
  .openapi(getOauth21XmlUriRoute, getOauth21XmlUriRouteHandler)
  .openapi(getOauth22FilesIssuedRoute, getOauth22FilesIssuedRouteHandler)
  .openapi(getOauth22XmlEaadhaarRoute, getOauth22XmlEaadhaarRouteHandler)
  .openapi(postSignup1DemoauthverifyRoute, postSignup1DemoauthverifyRouteHandler)
  .openapi(postSignup2DemoauthRoute, postSignup2DemoauthRouteHandler)
  .openapi(postStatistics1CountsRoute, postStatistics1CountsRouteHandler)

export default app
