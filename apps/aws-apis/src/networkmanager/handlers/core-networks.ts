import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRoute,
  deleteCoreNetworksCoreNetworkIdRoute,
  getCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdRoute,
  getCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdRoute,
  getCoreNetworksCoreNetworkIdCoreNetworkPolicyRoute,
  getCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsRoute,
  getCoreNetworksCoreNetworkIdRoute,
  getCoreNetworksRoute,
  patchCoreNetworksCoreNetworkIdRoute,
  postCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecuteRoute,
  postCoreNetworksCoreNetworkIdCoreNetworkPolicyRoute,
  postCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestoreRoute,
  postCoreNetworksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const coreNetworksHandler = app
  .openapi(postCoreNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCoreNetworksCoreNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreNetworksCoreNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCoreNetworksCoreNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreNetworksCoreNetworkIdCoreNetworkPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreNetworksCoreNetworkIdCoreNetworkPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
