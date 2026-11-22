import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameGetConfigRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentJobsRoute,
  getV1ParentLocationsRoute,
  getV1ParentModelsRoute,
  getV1ParentStudiesRoute,
  getV1ParentTrialsRoute,
  getV1ParentVersionsRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameRoute,
  postV1NameAddMeasurementRoute,
  postV1NameCancelRoute,
  postV1NameCheckEarlyStoppingStateRoute,
  postV1NameCompleteRoute,
  postV1NameExplainRoute,
  postV1NamePredictRoute,
  postV1NameSetDefaultRoute,
  postV1NameStopRoute,
  postV1ParentJobsRoute,
  postV1ParentModelsRoute,
  postV1ParentStudiesRoute,
  postV1ParentTrialsListOptimalTrialsRoute,
  postV1ParentTrialsRoute,
  postV1ParentTrialsSuggestRoute,
  postV1ParentVersionsRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameAddMeasurementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCheckEarlyStoppingStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NamePredictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameSetDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentStudiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentStudiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentTrialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentTrialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentTrialsListOptimalTrialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentTrialsSuggestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentVersionsRoute, (c) => {
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
