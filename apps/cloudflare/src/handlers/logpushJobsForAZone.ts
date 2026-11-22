import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdLogpushJobsJobIdRoute,
  getZonesZoneIdLogpushDatasetsDatasetIdFieldsRoute,
  getZonesZoneIdLogpushDatasetsDatasetIdJobsRoute,
  getZonesZoneIdLogpushJobsJobIdRoute,
  getZonesZoneIdLogpushJobsRoute,
  postZonesZoneIdLogpushJobsRoute,
  postZonesZoneIdLogpushOwnershipRoute,
  postZonesZoneIdLogpushOwnershipValidateRoute,
  postZonesZoneIdLogpushValidateDestinationExistsRoute,
  postZonesZoneIdLogpushValidateDestinationRoute,
  postZonesZoneIdLogpushValidateOriginRoute,
  putZonesZoneIdLogpushJobsJobIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logpushJobsForAZoneHandler = app
  .openapi(getZonesZoneIdLogpushDatasetsDatasetIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdLogpushDatasetsDatasetIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdLogpushJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdLogpushJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdLogpushJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdLogpushJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdLogpushJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdLogpushOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdLogpushOwnershipValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdLogpushValidateDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdLogpushValidateDestinationExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdLogpushValidateOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
