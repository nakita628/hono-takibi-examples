import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDatasetsv2DatasetIdRoute,
  deletePermissionGroupPermissionGroupIdRoute,
  deletePermissionGroupPermissionGroupIdUsersUserIdRoute,
  getCredentialsProgrammaticEnvironmentIdRoute,
  getDatasetsDatasetIdChangesetsv2ChangesetIdRoute,
  getDatasetsDatasetIdChangesetsv2Route,
  getDatasetsDatasetIdDataviewsv2DataviewIdRoute,
  getDatasetsDatasetIdDataviewsv2Route,
  getDatasetsv2DatasetIdRoute,
  getDatasetsv2Route,
  getPermissionGroupMaxResultsRoute,
  getPermissionGroupPermissionGroupIdRoute,
  getPermissionGroupPermissionGroupIdUsersMaxResultsRoute,
  getUserMaxResultsRoute,
  getUserUserIdPermissionGroupsMaxResultsRoute,
  getUserUserIdRoute,
  postDatasetsDatasetIdChangesetsv2Route,
  postDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetailsRoute,
  postDatasetsDatasetIdDataviewsv2Route,
  postDatasetsv2Route,
  postPermissionGroupPermissionGroupIdUsersUserIdRoute,
  postPermissionGroupRoute,
  postUserRoute,
  postUserUserIdDisableRoute,
  postUserUserIdEnableRoute,
  postUserUserIdPasswordRoute,
  postWorkingLocationV1Route,
  putDatasetsDatasetIdChangesetsv2ChangesetIdRoute,
  putDatasetsv2DatasetIdRoute,
  putPermissionGroupPermissionGroupIdRoute,
  putUserUserIdRoute,
} from './routes'
import {
  deleteDatasetsv2DatasetIdRouteHandler,
  deletePermissionGroupPermissionGroupIdRouteHandler,
  deletePermissionGroupPermissionGroupIdUsersUserIdRouteHandler,
  getCredentialsProgrammaticEnvironmentIdRouteHandler,
  getDatasetsDatasetIdChangesetsv2ChangesetIdRouteHandler,
  getDatasetsDatasetIdChangesetsv2RouteHandler,
  getDatasetsDatasetIdDataviewsv2DataviewIdRouteHandler,
  getDatasetsDatasetIdDataviewsv2RouteHandler,
  getDatasetsv2DatasetIdRouteHandler,
  getDatasetsv2RouteHandler,
  getPermissionGroupMaxResultsRouteHandler,
  getPermissionGroupPermissionGroupIdRouteHandler,
  getPermissionGroupPermissionGroupIdUsersMaxResultsRouteHandler,
  getUserMaxResultsRouteHandler,
  getUserUserIdPermissionGroupsMaxResultsRouteHandler,
  getUserUserIdRouteHandler,
  postDatasetsDatasetIdChangesetsv2RouteHandler,
  postDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetailsRouteHandler,
  postDatasetsDatasetIdDataviewsv2RouteHandler,
  postDatasetsv2RouteHandler,
  postPermissionGroupPermissionGroupIdUsersUserIdRouteHandler,
  postPermissionGroupRouteHandler,
  postUserRouteHandler,
  postUserUserIdDisableRouteHandler,
  postUserUserIdEnableRouteHandler,
  postUserUserIdPasswordRouteHandler,
  postWorkingLocationV1RouteHandler,
  putDatasetsDatasetIdChangesetsv2ChangesetIdRouteHandler,
  putDatasetsv2DatasetIdRouteHandler,
  putPermissionGroupPermissionGroupIdRouteHandler,
  putUserUserIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postPermissionGroupPermissionGroupIdUsersUserIdRoute,
    postPermissionGroupPermissionGroupIdUsersUserIdRouteHandler,
  )
  .openapi(
    deletePermissionGroupPermissionGroupIdUsersUserIdRoute,
    deletePermissionGroupPermissionGroupIdUsersUserIdRouteHandler,
  )
  .openapi(postDatasetsDatasetIdChangesetsv2Route, postDatasetsDatasetIdChangesetsv2RouteHandler)
  .openapi(getDatasetsDatasetIdChangesetsv2Route, getDatasetsDatasetIdChangesetsv2RouteHandler)
  .openapi(postDatasetsDatasetIdDataviewsv2Route, postDatasetsDatasetIdDataviewsv2RouteHandler)
  .openapi(getDatasetsDatasetIdDataviewsv2Route, getDatasetsDatasetIdDataviewsv2RouteHandler)
  .openapi(postDatasetsv2Route, postDatasetsv2RouteHandler)
  .openapi(getDatasetsv2Route, getDatasetsv2RouteHandler)
  .openapi(postPermissionGroupRoute, postPermissionGroupRouteHandler)
  .openapi(postUserRoute, postUserRouteHandler)
  .openapi(deleteDatasetsv2DatasetIdRoute, deleteDatasetsv2DatasetIdRouteHandler)
  .openapi(getDatasetsv2DatasetIdRoute, getDatasetsv2DatasetIdRouteHandler)
  .openapi(putDatasetsv2DatasetIdRoute, putDatasetsv2DatasetIdRouteHandler)
  .openapi(
    deletePermissionGroupPermissionGroupIdRoute,
    deletePermissionGroupPermissionGroupIdRouteHandler,
  )
  .openapi(
    getPermissionGroupPermissionGroupIdRoute,
    getPermissionGroupPermissionGroupIdRouteHandler,
  )
  .openapi(
    putPermissionGroupPermissionGroupIdRoute,
    putPermissionGroupPermissionGroupIdRouteHandler,
  )
  .openapi(postUserUserIdDisableRoute, postUserUserIdDisableRouteHandler)
  .openapi(postUserUserIdEnableRoute, postUserUserIdEnableRouteHandler)
  .openapi(
    getDatasetsDatasetIdChangesetsv2ChangesetIdRoute,
    getDatasetsDatasetIdChangesetsv2ChangesetIdRouteHandler,
  )
  .openapi(
    putDatasetsDatasetIdChangesetsv2ChangesetIdRoute,
    putDatasetsDatasetIdChangesetsv2ChangesetIdRouteHandler,
  )
  .openapi(
    getDatasetsDatasetIdDataviewsv2DataviewIdRoute,
    getDatasetsDatasetIdDataviewsv2DataviewIdRouteHandler,
  )
  .openapi(
    postDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetailsRoute,
    postDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetailsRouteHandler,
  )
  .openapi(
    getCredentialsProgrammaticEnvironmentIdRoute,
    getCredentialsProgrammaticEnvironmentIdRouteHandler,
  )
  .openapi(getUserUserIdRoute, getUserUserIdRouteHandler)
  .openapi(putUserUserIdRoute, putUserUserIdRouteHandler)
  .openapi(postWorkingLocationV1Route, postWorkingLocationV1RouteHandler)
  .openapi(getPermissionGroupMaxResultsRoute, getPermissionGroupMaxResultsRouteHandler)
  .openapi(
    getUserUserIdPermissionGroupsMaxResultsRoute,
    getUserUserIdPermissionGroupsMaxResultsRouteHandler,
  )
  .openapi(getUserMaxResultsRoute, getUserMaxResultsRouteHandler)
  .openapi(
    getPermissionGroupPermissionGroupIdUsersMaxResultsRoute,
    getPermissionGroupPermissionGroupIdUsersMaxResultsRouteHandler,
  )
  .openapi(postUserUserIdPasswordRoute, postUserUserIdPasswordRouteHandler)

export default app
