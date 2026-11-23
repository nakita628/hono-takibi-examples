import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentColumnSpecsRoute,
  getV1beta1ParentDatasetsRoute,
  getV1beta1ParentModelEvaluationsRoute,
  getV1beta1ParentModelsRoute,
  getV1beta1ParentTableSpecsRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1NameBatchPredictRoute,
  postV1beta1NameCancelRoute,
  postV1beta1NameDeployRoute,
  postV1beta1NameExportDataRoute,
  postV1beta1NameExportEvaluatedExamplesRoute,
  postV1beta1NameExportRoute,
  postV1beta1NameImportDataRoute,
  postV1beta1NamePredictRoute,
  postV1beta1NameUndeployRoute,
  postV1beta1NameWaitRoute,
  postV1beta1ParentDatasetsRoute,
  postV1beta1ParentModelsRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameBatchPredictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameDeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameExportDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameExportEvaluatedExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameImportDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NamePredictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameUndeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameWaitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentColumnSpecsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentModelEvaluationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentTableSpecsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
