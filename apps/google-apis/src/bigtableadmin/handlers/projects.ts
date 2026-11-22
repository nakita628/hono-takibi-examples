import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameLocationsRoute,
  getV2NameRoute,
  getV2ParentAppProfilesRoute,
  getV2ParentBackupsRoute,
  getV2ParentClustersRoute,
  getV2ParentHotTabletsRoute,
  getV2ParentInstancesRoute,
  getV2ParentTablesRoute,
  patchV2NameRoute,
  postV2NameCheckConsistencyRoute,
  postV2NameDropRowRangeRoute,
  postV2NameGenerateConsistencyTokenRoute,
  postV2NameModifyColumnFamiliesRoute,
  postV2NameUndeleteRoute,
  postV2ParentAppProfilesRoute,
  postV2ParentBackupsCopyRoute,
  postV2ParentBackupsRoute,
  postV2ParentClustersRoute,
  postV2ParentInstancesRoute,
  postV2ParentTablesRestoreRoute,
  postV2ParentTablesRoute,
  postV2ResourceGetIamPolicyRoute,
  postV2ResourceSetIamPolicyRoute,
  postV2ResourceTestIamPermissionsRoute,
  putV2NameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameCheckConsistencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameDropRowRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameGenerateConsistencyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameModifyColumnFamiliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentAppProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentAppProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentBackupsCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentHotTabletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentTablesRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
