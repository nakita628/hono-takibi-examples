import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3p1beta1NameRoute,
  getV3p1beta1NameCompleteRoute,
  getV3p1beta1NameRoute,
  getV3p1beta1ParentCompaniesRoute,
  getV3p1beta1ParentJobsRoute,
  patchV3p1beta1NameRoute,
  postV3p1beta1ParentClientEventsRoute,
  postV3p1beta1ParentCompaniesRoute,
  postV3p1beta1ParentJobsBatchDeleteRoute,
  postV3p1beta1ParentJobsRoute,
  postV3p1beta1ParentJobsSearchForAlertRoute,
  postV3p1beta1ParentJobsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV3p1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3p1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3p1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3p1beta1NameCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3p1beta1ParentClientEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3p1beta1ParentCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3p1beta1ParentCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3p1beta1ParentJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3p1beta1ParentJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3p1beta1ParentJobsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3p1beta1ParentJobsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3p1beta1ParentJobsSearchForAlertRoute, (c) => {
    throw new Error('Not implemented')
  })
