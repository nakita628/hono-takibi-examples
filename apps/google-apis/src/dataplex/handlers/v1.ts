import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentActionsRoute,
  getV1ParentAssetsRoute,
  getV1ParentAttributesRoute,
  getV1ParentContentitemsRoute,
  getV1ParentContentRoute,
  getV1ParentDataAttributeBindingsRoute,
  getV1ParentDataScansRoute,
  getV1ParentDataTaxonomiesRoute,
  getV1ParentEntitiesRoute,
  getV1ParentEnvironmentsRoute,
  getV1ParentJobsRoute,
  getV1ParentLakesRoute,
  getV1ParentPartitionsRoute,
  getV1ParentSessionsRoute,
  getV1ParentTasksRoute,
  getV1ParentZonesRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1NameRunRoute,
  postV1ParentAssetsRoute,
  postV1ParentAttributesRoute,
  postV1ParentContentitemsRoute,
  postV1ParentContentRoute,
  postV1ParentDataAttributeBindingsRoute,
  postV1ParentDataScansRoute,
  postV1ParentDataTaxonomiesRoute,
  postV1ParentEntitiesRoute,
  postV1ParentEnvironmentsRoute,
  postV1ParentLakesRoute,
  postV1ParentPartitionsRoute,
  postV1ParentTasksRoute,
  postV1ParentZonesRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
  putV1NameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentContentitemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentContentitemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDataAttributeBindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDataAttributeBindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDataScansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDataScansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDataTaxonomiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDataTaxonomiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentLakesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentLakesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentPartitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentPartitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
