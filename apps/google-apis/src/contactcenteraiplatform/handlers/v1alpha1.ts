import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha1NameRoute,
  getV1alpha1NameLocationsRoute,
  getV1alpha1NameOperationsRoute,
  getV1alpha1NameRoute,
  getV1alpha1ParentContactCentersRoute,
  getV1alpha1ParentQueryContactCenterQuotaRoute,
  patchV1alpha1NameRoute,
  postV1alpha1NameCancelRoute,
  postV1alpha1ParentContactCentersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1alpha1Handler = app
  .openapi(deleteV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentContactCentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentContactCentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentQueryContactCenterQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
