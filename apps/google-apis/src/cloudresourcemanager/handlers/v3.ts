import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3NameRoute,
  getV3EffectiveTagsRoute,
  getV3FoldersRoute,
  getV3FoldersSearchRoute,
  getV3LiensRoute,
  getV3NameRoute,
  getV3OrganizationsSearchRoute,
  getV3ParentTagHoldsRoute,
  getV3ProjectsRoute,
  getV3ProjectsSearchRoute,
  getV3TagBindingsRoute,
  getV3TagKeysNamespacedRoute,
  getV3TagKeysRoute,
  getV3TagValuesNamespacedRoute,
  getV3TagValuesRoute,
  patchV3NameRoute,
  postV3FoldersRoute,
  postV3LiensRoute,
  postV3NameMoveRoute,
  postV3NameUndeleteRoute,
  postV3ParentTagHoldsRoute,
  postV3ProjectsRoute,
  postV3ResourceGetIamPolicyRoute,
  postV3ResourceSetIamPolicyRoute,
  postV3ResourceTestIamPermissionsRoute,
  postV3TagBindingsRoute,
  postV3TagKeysRoute,
  postV3TagValuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(getV3EffectiveTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3FoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3FoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3FoldersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LiensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3LiensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3OrganizationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ProjectsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TagBindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3TagBindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3TagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TagKeysNamespacedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TagValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3TagValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TagValuesNamespacedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3NameMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3NameUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentTagHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentTagHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
