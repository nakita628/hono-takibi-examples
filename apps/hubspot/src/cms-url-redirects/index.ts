import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCmsUrlRedirects202609UrlMappingsIdRoute,
  deleteCmsUrlRedirects202609UrlRedirectIdRoute,
  getCmsUrlRedirects202609Route,
  getCmsUrlRedirects202609UrlMappingsIdRoute,
  getCmsUrlRedirects202609UrlMappingsRoute,
  getCmsUrlRedirects202609UrlRedirectIdRoute,
  patchCmsUrlRedirects202609UrlRedirectIdRoute,
  postCmsUrlRedirects202609Route,
  postCmsUrlRedirects202609UrlMappingsRoute,
} from './routes'
import {
  deleteCmsUrlRedirects202609UrlMappingsIdRouteHandler,
  deleteCmsUrlRedirects202609UrlRedirectIdRouteHandler,
  getCmsUrlRedirects202609RouteHandler,
  getCmsUrlRedirects202609UrlMappingsIdRouteHandler,
  getCmsUrlRedirects202609UrlMappingsRouteHandler,
  getCmsUrlRedirects202609UrlRedirectIdRouteHandler,
  patchCmsUrlRedirects202609UrlRedirectIdRouteHandler,
  postCmsUrlRedirects202609RouteHandler,
  postCmsUrlRedirects202609UrlMappingsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCmsUrlRedirects202609Route, getCmsUrlRedirects202609RouteHandler)
  .openapi(postCmsUrlRedirects202609Route, postCmsUrlRedirects202609RouteHandler)
  .openapi(
    getCmsUrlRedirects202609UrlMappingsRoute,
    getCmsUrlRedirects202609UrlMappingsRouteHandler,
  )
  .openapi(
    postCmsUrlRedirects202609UrlMappingsRoute,
    postCmsUrlRedirects202609UrlMappingsRouteHandler,
  )
  .openapi(
    getCmsUrlRedirects202609UrlMappingsIdRoute,
    getCmsUrlRedirects202609UrlMappingsIdRouteHandler,
  )
  .openapi(
    deleteCmsUrlRedirects202609UrlMappingsIdRoute,
    deleteCmsUrlRedirects202609UrlMappingsIdRouteHandler,
  )
  .openapi(
    getCmsUrlRedirects202609UrlRedirectIdRoute,
    getCmsUrlRedirects202609UrlRedirectIdRouteHandler,
  )
  .openapi(
    deleteCmsUrlRedirects202609UrlRedirectIdRoute,
    deleteCmsUrlRedirects202609UrlRedirectIdRouteHandler,
  )
  .openapi(
    patchCmsUrlRedirects202609UrlRedirectIdRoute,
    patchCmsUrlRedirects202609UrlRedirectIdRouteHandler,
  )

export default app
