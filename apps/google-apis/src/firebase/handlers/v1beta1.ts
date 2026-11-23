import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1AvailableProjectsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentAndroidAppsRoute,
  getV1beta1ParentAvailableLocationsRoute,
  getV1beta1ParentIosAppsRoute,
  getV1beta1ParentSearchAppsRoute,
  getV1beta1ParentShaRoute,
  getV1beta1ParentWebAppsRoute,
  getV1beta1ProjectsRoute,
  patchV1beta1NameRoute,
  postV1beta1NameRemoveRoute,
  postV1beta1NameUndeleteRoute,
  postV1beta1ParentAddGoogleAnalyticsRoute,
  postV1beta1ParentAndroidAppsRoute,
  postV1beta1ParentDefaultLocationFinalizeRoute,
  postV1beta1ParentIosAppsRoute,
  postV1beta1ParentRemoveAnalyticsRoute,
  postV1beta1ParentShaRoute,
  postV1beta1ParentWebAppsRoute,
  postV1beta1ProjectAddFirebaseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(getV1beta1AvailableProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentAndroidAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentAndroidAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentAvailableLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentDefaultLocationFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentIosAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentIosAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentWebAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentWebAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentAddGoogleAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentRemoveAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentSearchAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectAddFirebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
