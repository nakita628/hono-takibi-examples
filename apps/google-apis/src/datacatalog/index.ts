import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1EntriesLookupRoute,
  getV1beta1NameRoute,
  getV1beta1ParentEntriesRoute,
  getV1beta1ParentEntryGroupsRoute,
  getV1beta1ParentPolicyTagsRoute,
  getV1beta1ParentTagsRoute,
  getV1beta1ParentTaxonomiesExportRoute,
  getV1beta1ParentTaxonomiesRoute,
  patchV1beta1NameRoute,
  postV1beta1CatalogSearchRoute,
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
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1EntriesLookupRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentEntriesRouteHandler,
  getV1beta1ParentEntryGroupsRouteHandler,
  getV1beta1ParentPolicyTagsRouteHandler,
  getV1beta1ParentTagsRouteHandler,
  getV1beta1ParentTaxonomiesExportRouteHandler,
  getV1beta1ParentTaxonomiesRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1CatalogSearchRouteHandler,
  postV1beta1NameRenameRouteHandler,
  postV1beta1ParentEntriesRouteHandler,
  postV1beta1ParentEntryGroupsRouteHandler,
  postV1beta1ParentFieldsRouteHandler,
  postV1beta1ParentPolicyTagsRouteHandler,
  postV1beta1ParentTagsRouteHandler,
  postV1beta1ParentTagTemplatesRouteHandler,
  postV1beta1ParentTaxonomiesImportRouteHandler,
  postV1beta1ParentTaxonomiesRouteHandler,
  postV1beta1ResourceGetIamPolicyRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1beta1CatalogSearchRoute, postV1beta1CatalogSearchRouteHandler)
  .openapi(getV1beta1EntriesLookupRoute, getV1beta1EntriesLookupRouteHandler)
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(postV1beta1NameRenameRoute, postV1beta1NameRenameRouteHandler)
  .openapi(getV1beta1ParentEntriesRoute, getV1beta1ParentEntriesRouteHandler)
  .openapi(postV1beta1ParentEntriesRoute, postV1beta1ParentEntriesRouteHandler)
  .openapi(getV1beta1ParentEntryGroupsRoute, getV1beta1ParentEntryGroupsRouteHandler)
  .openapi(postV1beta1ParentEntryGroupsRoute, postV1beta1ParentEntryGroupsRouteHandler)
  .openapi(postV1beta1ParentFieldsRoute, postV1beta1ParentFieldsRouteHandler)
  .openapi(getV1beta1ParentPolicyTagsRoute, getV1beta1ParentPolicyTagsRouteHandler)
  .openapi(postV1beta1ParentPolicyTagsRoute, postV1beta1ParentPolicyTagsRouteHandler)
  .openapi(postV1beta1ParentTagTemplatesRoute, postV1beta1ParentTagTemplatesRouteHandler)
  .openapi(getV1beta1ParentTagsRoute, getV1beta1ParentTagsRouteHandler)
  .openapi(postV1beta1ParentTagsRoute, postV1beta1ParentTagsRouteHandler)
  .openapi(getV1beta1ParentTaxonomiesRoute, getV1beta1ParentTaxonomiesRouteHandler)
  .openapi(postV1beta1ParentTaxonomiesRoute, postV1beta1ParentTaxonomiesRouteHandler)
  .openapi(getV1beta1ParentTaxonomiesExportRoute, getV1beta1ParentTaxonomiesExportRouteHandler)
  .openapi(postV1beta1ParentTaxonomiesImportRoute, postV1beta1ParentTaxonomiesImportRouteHandler)
  .openapi(postV1beta1ResourceGetIamPolicyRoute, postV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )

export default app
