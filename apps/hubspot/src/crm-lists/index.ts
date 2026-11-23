import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmLists202609FoldersFolderIdRoute,
  deleteCrmLists202609ListIdMembershipsRoute,
  deleteCrmLists202609ListIdRoute,
  deleteCrmLists202609ListIdScheduleConversionRoute,
  getCrmLists202609FoldersRoute,
  getCrmLists202609IdmappingRoute,
  getCrmLists202609ListIdMembershipsJoinOrderRoute,
  getCrmLists202609ListIdMembershipsRoute,
  getCrmLists202609ListIdRoute,
  getCrmLists202609ListIdScheduleConversionRoute,
  getCrmLists202609ListIdSizeAndEditsHistoryBetweenRoute,
  getCrmLists202609ObjectTypeIdObjectTypeIdNameListNameRoute,
  getCrmLists202609RecordsObjectTypeIdRecordIdMembershipsRoute,
  getCrmLists202609Route,
  postCrmLists202609FoldersRoute,
  postCrmLists202609IdmappingRoute,
  postCrmLists202609RecordsMembershipsBatchReadRoute,
  postCrmLists202609Route,
  postCrmLists202609SearchRoute,
  putCrmLists202609FoldersFolderIdMoveNewParentFolderIdRoute,
  putCrmLists202609FoldersFolderIdRenameRoute,
  putCrmLists202609FoldersMoveListRoute,
  putCrmLists202609ListIdMembershipsAddAndRemoveRoute,
  putCrmLists202609ListIdMembershipsAddFromSourceListIdRoute,
  putCrmLists202609ListIdMembershipsAddRoute,
  putCrmLists202609ListIdMembershipsRemoveRoute,
  putCrmLists202609ListIdRestoreRoute,
  putCrmLists202609ListIdScheduleConversionRoute,
  putCrmLists202609ListIdUpdateListFiltersRoute,
  putCrmLists202609ListIdUpdateListNameRoute,
} from './routes'
import {
  deleteCrmLists202609FoldersFolderIdRouteHandler,
  deleteCrmLists202609ListIdMembershipsRouteHandler,
  deleteCrmLists202609ListIdRouteHandler,
  deleteCrmLists202609ListIdScheduleConversionRouteHandler,
  getCrmLists202609FoldersRouteHandler,
  getCrmLists202609IdmappingRouteHandler,
  getCrmLists202609ListIdMembershipsJoinOrderRouteHandler,
  getCrmLists202609ListIdMembershipsRouteHandler,
  getCrmLists202609ListIdRouteHandler,
  getCrmLists202609ListIdScheduleConversionRouteHandler,
  getCrmLists202609ListIdSizeAndEditsHistoryBetweenRouteHandler,
  getCrmLists202609ObjectTypeIdObjectTypeIdNameListNameRouteHandler,
  getCrmLists202609RecordsObjectTypeIdRecordIdMembershipsRouteHandler,
  getCrmLists202609RouteHandler,
  postCrmLists202609FoldersRouteHandler,
  postCrmLists202609IdmappingRouteHandler,
  postCrmLists202609RecordsMembershipsBatchReadRouteHandler,
  postCrmLists202609RouteHandler,
  postCrmLists202609SearchRouteHandler,
  putCrmLists202609FoldersFolderIdMoveNewParentFolderIdRouteHandler,
  putCrmLists202609FoldersFolderIdRenameRouteHandler,
  putCrmLists202609FoldersMoveListRouteHandler,
  putCrmLists202609ListIdMembershipsAddAndRemoveRouteHandler,
  putCrmLists202609ListIdMembershipsAddFromSourceListIdRouteHandler,
  putCrmLists202609ListIdMembershipsAddRouteHandler,
  putCrmLists202609ListIdMembershipsRemoveRouteHandler,
  putCrmLists202609ListIdRestoreRouteHandler,
  putCrmLists202609ListIdScheduleConversionRouteHandler,
  putCrmLists202609ListIdUpdateListFiltersRouteHandler,
  putCrmLists202609ListIdUpdateListNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmLists202609Route, getCrmLists202609RouteHandler)
  .openapi(postCrmLists202609Route, postCrmLists202609RouteHandler)
  .openapi(getCrmLists202609FoldersRoute, getCrmLists202609FoldersRouteHandler)
  .openapi(postCrmLists202609FoldersRoute, postCrmLists202609FoldersRouteHandler)
  .openapi(putCrmLists202609FoldersMoveListRoute, putCrmLists202609FoldersMoveListRouteHandler)
  .openapi(
    deleteCrmLists202609FoldersFolderIdRoute,
    deleteCrmLists202609FoldersFolderIdRouteHandler,
  )
  .openapi(
    putCrmLists202609FoldersFolderIdMoveNewParentFolderIdRoute,
    putCrmLists202609FoldersFolderIdMoveNewParentFolderIdRouteHandler,
  )
  .openapi(
    putCrmLists202609FoldersFolderIdRenameRoute,
    putCrmLists202609FoldersFolderIdRenameRouteHandler,
  )
  .openapi(getCrmLists202609IdmappingRoute, getCrmLists202609IdmappingRouteHandler)
  .openapi(postCrmLists202609IdmappingRoute, postCrmLists202609IdmappingRouteHandler)
  .openapi(
    getCrmLists202609ObjectTypeIdObjectTypeIdNameListNameRoute,
    getCrmLists202609ObjectTypeIdObjectTypeIdNameListNameRouteHandler,
  )
  .openapi(
    postCrmLists202609RecordsMembershipsBatchReadRoute,
    postCrmLists202609RecordsMembershipsBatchReadRouteHandler,
  )
  .openapi(
    getCrmLists202609RecordsObjectTypeIdRecordIdMembershipsRoute,
    getCrmLists202609RecordsObjectTypeIdRecordIdMembershipsRouteHandler,
  )
  .openapi(postCrmLists202609SearchRoute, postCrmLists202609SearchRouteHandler)
  .openapi(getCrmLists202609ListIdRoute, getCrmLists202609ListIdRouteHandler)
  .openapi(deleteCrmLists202609ListIdRoute, deleteCrmLists202609ListIdRouteHandler)
  .openapi(getCrmLists202609ListIdMembershipsRoute, getCrmLists202609ListIdMembershipsRouteHandler)
  .openapi(
    deleteCrmLists202609ListIdMembershipsRoute,
    deleteCrmLists202609ListIdMembershipsRouteHandler,
  )
  .openapi(
    putCrmLists202609ListIdMembershipsAddRoute,
    putCrmLists202609ListIdMembershipsAddRouteHandler,
  )
  .openapi(
    putCrmLists202609ListIdMembershipsAddAndRemoveRoute,
    putCrmLists202609ListIdMembershipsAddAndRemoveRouteHandler,
  )
  .openapi(
    putCrmLists202609ListIdMembershipsAddFromSourceListIdRoute,
    putCrmLists202609ListIdMembershipsAddFromSourceListIdRouteHandler,
  )
  .openapi(
    getCrmLists202609ListIdMembershipsJoinOrderRoute,
    getCrmLists202609ListIdMembershipsJoinOrderRouteHandler,
  )
  .openapi(
    putCrmLists202609ListIdMembershipsRemoveRoute,
    putCrmLists202609ListIdMembershipsRemoveRouteHandler,
  )
  .openapi(putCrmLists202609ListIdRestoreRoute, putCrmLists202609ListIdRestoreRouteHandler)
  .openapi(
    getCrmLists202609ListIdScheduleConversionRoute,
    getCrmLists202609ListIdScheduleConversionRouteHandler,
  )
  .openapi(
    putCrmLists202609ListIdScheduleConversionRoute,
    putCrmLists202609ListIdScheduleConversionRouteHandler,
  )
  .openapi(
    deleteCrmLists202609ListIdScheduleConversionRoute,
    deleteCrmLists202609ListIdScheduleConversionRouteHandler,
  )
  .openapi(
    getCrmLists202609ListIdSizeAndEditsHistoryBetweenRoute,
    getCrmLists202609ListIdSizeAndEditsHistoryBetweenRouteHandler,
  )
  .openapi(
    putCrmLists202609ListIdUpdateListFiltersRoute,
    putCrmLists202609ListIdUpdateListFiltersRouteHandler,
  )
  .openapi(
    putCrmLists202609ListIdUpdateListNameRoute,
    putCrmLists202609ListIdUpdateListNameRouteHandler,
  )

export default app
