import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1CatalogsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentAssociationsRoute,
  getV1beta1ParentProductsRoute,
  getV1beta1ParentVersionsRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1CatalogsRoute,
  postV1beta1NameCopyRoute,
  postV1beta1NameUndeleteRoute,
  postV1beta1ParentAssociationsRoute,
  postV1beta1ParentProductsRoute,
  postV1beta1ParentVersionsRoute,
  postV1beta1ProductIconsUploadRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogsHandler = app
  .openapi(getV1beta1CatalogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1CatalogsRoute, (c) => {
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
  .openapi(postV1beta1NameCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProductIconsUploadRoute, (c) => {
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
