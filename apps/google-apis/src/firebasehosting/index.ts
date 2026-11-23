import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
  getV1beta1ParentChannelsRoute,
  getV1beta1ParentDomainsRoute,
  getV1beta1ParentFilesRoute,
  getV1beta1ParentReleasesRoute,
  getV1beta1ParentSitesRoute,
  getV1beta1ParentVersionsRoute,
  patchV1beta1NameRoute,
  postV1beta1ParentChannelsRoute,
  postV1beta1ParentDomainsRoute,
  postV1beta1ParentPopulateFilesRoute,
  postV1beta1ParentReleasesRoute,
  postV1beta1ParentSitesRoute,
  postV1beta1ParentVersionsCloneRoute,
  postV1beta1ParentVersionsRoute,
  putV1beta1NameRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentChannelsRouteHandler,
  getV1beta1ParentDomainsRouteHandler,
  getV1beta1ParentFilesRouteHandler,
  getV1beta1ParentReleasesRouteHandler,
  getV1beta1ParentSitesRouteHandler,
  getV1beta1ParentVersionsRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1ParentChannelsRouteHandler,
  postV1beta1ParentDomainsRouteHandler,
  postV1beta1ParentPopulateFilesRouteHandler,
  postV1beta1ParentReleasesRouteHandler,
  postV1beta1ParentSitesRouteHandler,
  postV1beta1ParentVersionsCloneRouteHandler,
  postV1beta1ParentVersionsRouteHandler,
  putV1beta1NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(putV1beta1NameRoute, putV1beta1NameRouteHandler)
  .openapi(getV1beta1ParentChannelsRoute, getV1beta1ParentChannelsRouteHandler)
  .openapi(postV1beta1ParentChannelsRoute, postV1beta1ParentChannelsRouteHandler)
  .openapi(getV1beta1ParentDomainsRoute, getV1beta1ParentDomainsRouteHandler)
  .openapi(postV1beta1ParentDomainsRoute, postV1beta1ParentDomainsRouteHandler)
  .openapi(getV1beta1ParentFilesRoute, getV1beta1ParentFilesRouteHandler)
  .openapi(getV1beta1ParentReleasesRoute, getV1beta1ParentReleasesRouteHandler)
  .openapi(postV1beta1ParentReleasesRoute, postV1beta1ParentReleasesRouteHandler)
  .openapi(getV1beta1ParentSitesRoute, getV1beta1ParentSitesRouteHandler)
  .openapi(postV1beta1ParentSitesRoute, postV1beta1ParentSitesRouteHandler)
  .openapi(getV1beta1ParentVersionsRoute, getV1beta1ParentVersionsRouteHandler)
  .openapi(postV1beta1ParentVersionsRoute, postV1beta1ParentVersionsRouteHandler)
  .openapi(postV1beta1ParentVersionsCloneRoute, postV1beta1ParentVersionsCloneRouteHandler)
  .openapi(postV1beta1ParentPopulateFilesRoute, postV1beta1ParentPopulateFilesRouteHandler)

export default app
