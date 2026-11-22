import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalUrlMapsUrlMapRoute,
  getProjectsProjectAggregatedUrlMapsRoute,
  getProjectsProjectGlobalUrlMapsRoute,
  getProjectsProjectGlobalUrlMapsUrlMapRoute,
  patchProjectsProjectGlobalUrlMapsUrlMapRoute,
  postProjectsProjectGlobalUrlMapsRoute,
  postProjectsProjectGlobalUrlMapsUrlMapInvalidateCacheRoute,
  postProjectsProjectGlobalUrlMapsUrlMapValidateRoute,
  putProjectsProjectGlobalUrlMapsUrlMapRoute,
} from '../routes'

const app = new OpenAPIHono()

export const urlMapsHandler = app
  .openapi(getProjectsProjectAggregatedUrlMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalUrlMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalUrlMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalUrlMapsUrlMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalUrlMapsUrlMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalUrlMapsUrlMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectGlobalUrlMapsUrlMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalUrlMapsUrlMapInvalidateCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalUrlMapsUrlMapValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
