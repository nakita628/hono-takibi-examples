import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthLogoutTokenRoute,
  getAuthTokenBasicuserinformationRoute,
  getPatientmanagementDiagnosesRoute,
  getPatientmanagementLookuptypesRoute,
  getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRoute,
  getPatientUserIdBasicRoute,
  getUserUserIdAvailableobservationheadingsRoute,
  getUserUserIdObservationsCodePatiententeredRoute,
  getUserUserIdObservationsCodeRoute,
  getUserUserIdObservationsRoute,
  getUserUserIdPatiententeredobservationheadingsRoute,
  postAuthLoginRoute,
  postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRoute,
  postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesRoute,
  postPatientmanagementValidateRoute,
} from './routes'
import {
  deleteAuthLogoutTokenRouteHandler,
  getAuthTokenBasicuserinformationRouteHandler,
  getPatientmanagementDiagnosesRouteHandler,
  getPatientmanagementLookuptypesRouteHandler,
  getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRouteHandler,
  getPatientUserIdBasicRouteHandler,
  getUserUserIdAvailableobservationheadingsRouteHandler,
  getUserUserIdObservationsCodePatiententeredRouteHandler,
  getUserUserIdObservationsCodeRouteHandler,
  getUserUserIdObservationsRouteHandler,
  getUserUserIdPatiententeredobservationheadingsRouteHandler,
  postAuthLoginRouteHandler,
  postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRouteHandler,
  postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesRouteHandler,
  postPatientmanagementValidateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAuthLoginRoute, postAuthLoginRouteHandler)
  .openapi(deleteAuthLogoutTokenRoute, deleteAuthLogoutTokenRouteHandler)
  .openapi(getAuthTokenBasicuserinformationRoute, getAuthTokenBasicuserinformationRouteHandler)
  .openapi(getPatientUserIdBasicRoute, getPatientUserIdBasicRouteHandler)
  .openapi(getPatientmanagementDiagnosesRoute, getPatientmanagementDiagnosesRouteHandler)
  .openapi(getPatientmanagementLookuptypesRoute, getPatientmanagementLookuptypesRouteHandler)
  .openapi(postPatientmanagementValidateRoute, postPatientmanagementValidateRouteHandler)
  .openapi(
    getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRoute,
    getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRouteHandler,
  )
  .openapi(
    postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRoute,
    postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRouteHandler,
  )
  .openapi(
    postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesRoute,
    postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesRouteHandler,
  )
  .openapi(
    getUserUserIdAvailableobservationheadingsRoute,
    getUserUserIdAvailableobservationheadingsRouteHandler,
  )
  .openapi(getUserUserIdObservationsRoute, getUserUserIdObservationsRouteHandler)
  .openapi(getUserUserIdObservationsCodeRoute, getUserUserIdObservationsCodeRouteHandler)
  .openapi(
    getUserUserIdObservationsCodePatiententeredRoute,
    getUserUserIdObservationsCodePatiententeredRouteHandler,
  )
  .openapi(
    getUserUserIdPatiententeredobservationheadingsRoute,
    getUserUserIdPatiententeredobservationheadingsRouteHandler,
  )

export default app
