import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
  getV1beta1ParentEntriesRoute,
  getV1beta1ParentEntryGroupsRoute,
  getV1beta1ParentPolicyTagsRoute,
  getV1beta1ParentTagsRoute,
  getV1beta1ParentTaxonomiesExportRoute,
  getV1beta1ParentTaxonomiesRoute,
  patchV1beta1NameRoute,
  postV1beta1NameRenameRoute,
  postV1beta1ParentEntriesRoute,
  postV1beta1ParentEntryGroupsRoute,
  postV1beta1ParentFieldsRoute,
  postV1beta1ParentPolicyTagsRoute,
  postV1beta1ParentTagsRoute,
  postV1beta1ParentTagTemplatesRoute,
  postV1beta1ParentTaxonomiesImportRoute,
  postV1beta1ParentTaxonomiesRoute,
  postV1beta1ResourceGetIamPolicyRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentEntryGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentEntryGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentPolicyTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentPolicyTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentTagTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentTaxonomiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentTaxonomiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentTaxonomiesExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentTaxonomiesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
