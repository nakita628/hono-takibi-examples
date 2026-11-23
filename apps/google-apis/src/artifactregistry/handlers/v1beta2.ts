import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta2NameRoute,
  getV1beta2NameLocationsRoute,
  getV1beta2NameRoute,
  getV1beta2ParentFilesRoute,
  getV1beta2ParentPackagesRoute,
  getV1beta2ParentRepositoriesRoute,
  getV1beta2ParentTagsRoute,
  getV1beta2ParentVersionsRoute,
  getV1beta2ResourceGetIamPolicyRoute,
  patchV1beta2NameRoute,
  postV1beta2ParentAptArtifactsCreateRoute,
  postV1beta2ParentAptArtifactsImportRoute,
  postV1beta2ParentRepositoriesRoute,
  postV1beta2ParentTagsRoute,
  postV1beta2ParentYumArtifactsCreateRoute,
  postV1beta2ParentYumArtifactsImportRoute,
  postV1beta2ResourceSetIamPolicyRoute,
  postV1beta2ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta2Handler = app
  .openapi(deleteV1beta2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2ParentAptArtifactsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2ParentAptArtifactsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2ParentFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2ParentPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2ParentRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2ParentRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2ParentTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2ParentTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2ParentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2ParentYumArtifactsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2ParentYumArtifactsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
