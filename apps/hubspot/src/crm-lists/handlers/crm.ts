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
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmLists202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmLists202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLists202609FoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmLists202609FoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmLists202609FoldersMoveListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmLists202609FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmLists202609FoldersFolderIdMoveNewParentFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmLists202609FoldersFolderIdRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLists202609IdmappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmLists202609IdmappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLists202609ObjectTypeIdObjectTypeIdNameListNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmLists202609RecordsMembershipsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLists202609RecordsObjectTypeIdRecordIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmLists202609SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLists202609ListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmLists202609ListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLists202609ListIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmLists202609ListIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmLists202609ListIdMembershipsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmLists202609ListIdMembershipsAddAndRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmLists202609ListIdMembershipsAddFromSourceListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLists202609ListIdMembershipsJoinOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmLists202609ListIdMembershipsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmLists202609ListIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLists202609ListIdScheduleConversionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmLists202609ListIdScheduleConversionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmLists202609ListIdScheduleConversionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLists202609ListIdSizeAndEditsHistoryBetweenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmLists202609ListIdUpdateListFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmLists202609ListIdUpdateListNameRoute, (c) => {
    throw new Error('Not implemented')
  })
