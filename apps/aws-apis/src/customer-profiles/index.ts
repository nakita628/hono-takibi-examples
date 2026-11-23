import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainsDomainNameObjectTypesObjectTypeNameRoute,
  deleteDomainsDomainNameRoute,
  deleteDomainsDomainNameWorkflowsWorkflowIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  getDomainsDomainNameIdentityResolutionJobsJobIdRoute,
  getDomainsDomainNameIdentityResolutionJobsRoute,
  getDomainsDomainNameIntegrationsRoute,
  getDomainsDomainNameMatchesRoute,
  getDomainsDomainNameObjectTypesObjectTypeNameRoute,
  getDomainsDomainNameObjectTypesRoute,
  getDomainsDomainNameRoute,
  getDomainsDomainNameWorkflowsWorkflowIdRoute,
  getDomainsDomainNameWorkflowsWorkflowIdStepsRoute,
  getDomainsRoute,
  getTagsResourceArnRoute,
  getTemplatesRoute,
  getTemplatesTemplateIdRoute,
  postDomainsDomainNameIdentityResolutionJobsAutoMergingPreviewRoute,
  postDomainsDomainNameIntegrationsDeleteRoute,
  postDomainsDomainNameIntegrationsRoute,
  postDomainsDomainNameProfilesDeleteRoute,
  postDomainsDomainNameProfilesKeysDeleteRoute,
  postDomainsDomainNameProfilesKeysRoute,
  postDomainsDomainNameProfilesObjectsDeleteRoute,
  postDomainsDomainNameProfilesObjectsMergeRoute,
  postDomainsDomainNameProfilesObjectsRoute,
  postDomainsDomainNameProfilesRoute,
  postDomainsDomainNameProfilesSearchRoute,
  postDomainsDomainNameRoute,
  postDomainsDomainNameWorkflowsIntegrationsRoute,
  postDomainsDomainNameWorkflowsRoute,
  postIntegrationsRoute,
  postTagsResourceArnRoute,
  putDomainsDomainNameIntegrationsRoute,
  putDomainsDomainNameObjectTypesObjectTypeNameRoute,
  putDomainsDomainNameProfilesObjectsRoute,
  putDomainsDomainNameProfilesRoute,
  putDomainsDomainNameRoute,
} from './routes'
import {
  deleteDomainsDomainNameObjectTypesObjectTypeNameRouteHandler,
  deleteDomainsDomainNameRouteHandler,
  deleteDomainsDomainNameWorkflowsWorkflowIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getDomainsDomainNameIdentityResolutionJobsJobIdRouteHandler,
  getDomainsDomainNameIdentityResolutionJobsRouteHandler,
  getDomainsDomainNameIntegrationsRouteHandler,
  getDomainsDomainNameMatchesRouteHandler,
  getDomainsDomainNameObjectTypesObjectTypeNameRouteHandler,
  getDomainsDomainNameObjectTypesRouteHandler,
  getDomainsDomainNameRouteHandler,
  getDomainsDomainNameWorkflowsWorkflowIdRouteHandler,
  getDomainsDomainNameWorkflowsWorkflowIdStepsRouteHandler,
  getDomainsRouteHandler,
  getTagsResourceArnRouteHandler,
  getTemplatesRouteHandler,
  getTemplatesTemplateIdRouteHandler,
  postDomainsDomainNameIdentityResolutionJobsAutoMergingPreviewRouteHandler,
  postDomainsDomainNameIntegrationsDeleteRouteHandler,
  postDomainsDomainNameIntegrationsRouteHandler,
  postDomainsDomainNameProfilesDeleteRouteHandler,
  postDomainsDomainNameProfilesKeysDeleteRouteHandler,
  postDomainsDomainNameProfilesKeysRouteHandler,
  postDomainsDomainNameProfilesObjectsDeleteRouteHandler,
  postDomainsDomainNameProfilesObjectsMergeRouteHandler,
  postDomainsDomainNameProfilesObjectsRouteHandler,
  postDomainsDomainNameProfilesRouteHandler,
  postDomainsDomainNameProfilesSearchRouteHandler,
  postDomainsDomainNameRouteHandler,
  postDomainsDomainNameWorkflowsIntegrationsRouteHandler,
  postDomainsDomainNameWorkflowsRouteHandler,
  postIntegrationsRouteHandler,
  postTagsResourceArnRouteHandler,
  putDomainsDomainNameIntegrationsRouteHandler,
  putDomainsDomainNameObjectTypesObjectTypeNameRouteHandler,
  putDomainsDomainNameProfilesObjectsRouteHandler,
  putDomainsDomainNameProfilesRouteHandler,
  putDomainsDomainNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDomainsDomainNameProfilesKeysRoute, postDomainsDomainNameProfilesKeysRouteHandler)
  .openapi(postDomainsDomainNameRoute, postDomainsDomainNameRouteHandler)
  .openapi(deleteDomainsDomainNameRoute, deleteDomainsDomainNameRouteHandler)
  .openapi(getDomainsDomainNameRoute, getDomainsDomainNameRouteHandler)
  .openapi(putDomainsDomainNameRoute, putDomainsDomainNameRouteHandler)
  .openapi(
    postDomainsDomainNameWorkflowsIntegrationsRoute,
    postDomainsDomainNameWorkflowsIntegrationsRouteHandler,
  )
  .openapi(postDomainsDomainNameProfilesRoute, postDomainsDomainNameProfilesRouteHandler)
  .openapi(putDomainsDomainNameProfilesRoute, putDomainsDomainNameProfilesRouteHandler)
  .openapi(
    postDomainsDomainNameIntegrationsDeleteRoute,
    postDomainsDomainNameIntegrationsDeleteRouteHandler,
  )
  .openapi(
    postDomainsDomainNameProfilesDeleteRoute,
    postDomainsDomainNameProfilesDeleteRouteHandler,
  )
  .openapi(
    postDomainsDomainNameProfilesKeysDeleteRoute,
    postDomainsDomainNameProfilesKeysDeleteRouteHandler,
  )
  .openapi(
    postDomainsDomainNameProfilesObjectsDeleteRoute,
    postDomainsDomainNameProfilesObjectsDeleteRouteHandler,
  )
  .openapi(
    deleteDomainsDomainNameObjectTypesObjectTypeNameRoute,
    deleteDomainsDomainNameObjectTypesObjectTypeNameRouteHandler,
  )
  .openapi(
    getDomainsDomainNameObjectTypesObjectTypeNameRoute,
    getDomainsDomainNameObjectTypesObjectTypeNameRouteHandler,
  )
  .openapi(
    putDomainsDomainNameObjectTypesObjectTypeNameRoute,
    putDomainsDomainNameObjectTypesObjectTypeNameRouteHandler,
  )
  .openapi(
    deleteDomainsDomainNameWorkflowsWorkflowIdRoute,
    deleteDomainsDomainNameWorkflowsWorkflowIdRouteHandler,
  )
  .openapi(
    getDomainsDomainNameWorkflowsWorkflowIdRoute,
    getDomainsDomainNameWorkflowsWorkflowIdRouteHandler,
  )
  .openapi(
    postDomainsDomainNameIdentityResolutionJobsAutoMergingPreviewRoute,
    postDomainsDomainNameIdentityResolutionJobsAutoMergingPreviewRouteHandler,
  )
  .openapi(
    getDomainsDomainNameIdentityResolutionJobsJobIdRoute,
    getDomainsDomainNameIdentityResolutionJobsJobIdRouteHandler,
  )
  .openapi(postDomainsDomainNameIntegrationsRoute, postDomainsDomainNameIntegrationsRouteHandler)
  .openapi(getDomainsDomainNameIntegrationsRoute, getDomainsDomainNameIntegrationsRouteHandler)
  .openapi(putDomainsDomainNameIntegrationsRoute, putDomainsDomainNameIntegrationsRouteHandler)
  .openapi(getDomainsDomainNameMatchesRoute, getDomainsDomainNameMatchesRouteHandler)
  .openapi(getTemplatesTemplateIdRoute, getTemplatesTemplateIdRouteHandler)
  .openapi(
    getDomainsDomainNameWorkflowsWorkflowIdStepsRoute,
    getDomainsDomainNameWorkflowsWorkflowIdStepsRouteHandler,
  )
  .openapi(postIntegrationsRoute, postIntegrationsRouteHandler)
  .openapi(getDomainsRoute, getDomainsRouteHandler)
  .openapi(
    getDomainsDomainNameIdentityResolutionJobsRoute,
    getDomainsDomainNameIdentityResolutionJobsRouteHandler,
  )
  .openapi(getTemplatesRoute, getTemplatesRouteHandler)
  .openapi(getDomainsDomainNameObjectTypesRoute, getDomainsDomainNameObjectTypesRouteHandler)
  .openapi(
    postDomainsDomainNameProfilesObjectsRoute,
    postDomainsDomainNameProfilesObjectsRouteHandler,
  )
  .openapi(
    putDomainsDomainNameProfilesObjectsRoute,
    putDomainsDomainNameProfilesObjectsRouteHandler,
  )
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postDomainsDomainNameWorkflowsRoute, postDomainsDomainNameWorkflowsRouteHandler)
  .openapi(
    postDomainsDomainNameProfilesObjectsMergeRoute,
    postDomainsDomainNameProfilesObjectsMergeRouteHandler,
  )
  .openapi(
    postDomainsDomainNameProfilesSearchRoute,
    postDomainsDomainNameProfilesSearchRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
