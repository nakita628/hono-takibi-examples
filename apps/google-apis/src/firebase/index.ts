import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1AvailableProjectsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentAndroidAppsRoute,
  getV1beta1ParentAvailableLocationsRoute,
  getV1beta1ParentIosAppsRoute,
  getV1beta1ParentSearchAppsRoute,
  getV1beta1ParentShaRoute,
  getV1beta1ParentWebAppsRoute,
  getV1beta1ProjectsRoute,
  patchV1beta1NameRoute,
  postV1beta1NameRemoveRoute,
  postV1beta1NameUndeleteRoute,
  postV1beta1ParentAddGoogleAnalyticsRoute,
  postV1beta1ParentAndroidAppsRoute,
  postV1beta1ParentDefaultLocationFinalizeRoute,
  postV1beta1ParentIosAppsRoute,
  postV1beta1ParentRemoveAnalyticsRoute,
  postV1beta1ParentShaRoute,
  postV1beta1ParentWebAppsRoute,
  postV1beta1ProjectAddFirebaseRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1AvailableProjectsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentAndroidAppsRouteHandler,
  getV1beta1ParentAvailableLocationsRouteHandler,
  getV1beta1ParentIosAppsRouteHandler,
  getV1beta1ParentSearchAppsRouteHandler,
  getV1beta1ParentShaRouteHandler,
  getV1beta1ParentWebAppsRouteHandler,
  getV1beta1ProjectsRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1NameRemoveRouteHandler,
  postV1beta1NameUndeleteRouteHandler,
  postV1beta1ParentAddGoogleAnalyticsRouteHandler,
  postV1beta1ParentAndroidAppsRouteHandler,
  postV1beta1ParentDefaultLocationFinalizeRouteHandler,
  postV1beta1ParentIosAppsRouteHandler,
  postV1beta1ParentRemoveAnalyticsRouteHandler,
  postV1beta1ParentShaRouteHandler,
  postV1beta1ParentWebAppsRouteHandler,
  postV1beta1ProjectAddFirebaseRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1beta1AvailableProjectsRoute, getV1beta1AvailableProjectsRouteHandler)
  .openapi(getV1beta1ProjectsRoute, getV1beta1ProjectsRouteHandler)
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(postV1beta1NameRemoveRoute, postV1beta1NameRemoveRouteHandler)
  .openapi(postV1beta1NameUndeleteRoute, postV1beta1NameUndeleteRouteHandler)
  .openapi(getV1beta1ParentAndroidAppsRoute, getV1beta1ParentAndroidAppsRouteHandler)
  .openapi(postV1beta1ParentAndroidAppsRoute, postV1beta1ParentAndroidAppsRouteHandler)
  .openapi(getV1beta1ParentAvailableLocationsRoute, getV1beta1ParentAvailableLocationsRouteHandler)
  .openapi(
    postV1beta1ParentDefaultLocationFinalizeRoute,
    postV1beta1ParentDefaultLocationFinalizeRouteHandler,
  )
  .openapi(getV1beta1ParentIosAppsRoute, getV1beta1ParentIosAppsRouteHandler)
  .openapi(postV1beta1ParentIosAppsRoute, postV1beta1ParentIosAppsRouteHandler)
  .openapi(getV1beta1ParentShaRoute, getV1beta1ParentShaRouteHandler)
  .openapi(postV1beta1ParentShaRoute, postV1beta1ParentShaRouteHandler)
  .openapi(getV1beta1ParentWebAppsRoute, getV1beta1ParentWebAppsRouteHandler)
  .openapi(postV1beta1ParentWebAppsRoute, postV1beta1ParentWebAppsRouteHandler)
  .openapi(
    postV1beta1ParentAddGoogleAnalyticsRoute,
    postV1beta1ParentAddGoogleAnalyticsRouteHandler,
  )
  .openapi(postV1beta1ParentRemoveAnalyticsRoute, postV1beta1ParentRemoveAnalyticsRouteHandler)
  .openapi(getV1beta1ParentSearchAppsRoute, getV1beta1ParentSearchAppsRouteHandler)
  .openapi(postV1beta1ProjectAddFirebaseRoute, postV1beta1ProjectAddFirebaseRouteHandler)

export default app
