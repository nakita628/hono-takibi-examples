import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainsDomainNameObjectTypesObjectTypeNameRoute,
  deleteDomainsDomainNameRoute,
  deleteDomainsDomainNameWorkflowsWorkflowIdRoute,
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
  putDomainsDomainNameIntegrationsRoute,
  putDomainsDomainNameObjectTypesObjectTypeNameRoute,
  putDomainsDomainNameProfilesObjectsRoute,
  putDomainsDomainNameProfilesRoute,
  putDomainsDomainNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(postDomainsDomainNameProfilesKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainNameWorkflowsIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainNameProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDomainsDomainNameProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainNameIntegrationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainNameProfilesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainNameProfilesKeysDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainNameProfilesObjectsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsDomainNameObjectTypesObjectTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainNameObjectTypesObjectTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDomainsDomainNameObjectTypesObjectTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsDomainNameWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainNameWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainNameIdentityResolutionJobsAutoMergingPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainNameIdentityResolutionJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainNameIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainNameIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDomainsDomainNameIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainNameMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainNameWorkflowsWorkflowIdStepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainNameIdentityResolutionJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainNameObjectTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainNameProfilesObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDomainsDomainNameProfilesObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainNameWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainNameProfilesObjectsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainNameProfilesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
