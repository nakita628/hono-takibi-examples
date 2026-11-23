import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleRoute,
  getOwnerOwnerIDContextContextDecisionDecisionIDRoute,
  getOwnerOwnerIDContextContextDecisionRoute,
  getOwnerOwnerIDContextContextDecisionSettingsRoute,
  getOwnerOwnerIDContextContextPolicyBundlePolicyNameRoute,
  getOwnerOwnerIDContextContextPolicyBundleRoute,
  patchOwnerOwnerIDContextContextDecisionSettingsRoute,
  postOwnerOwnerIDContextContextDecisionRoute,
  postOwnerOwnerIDContextContextPolicyBundleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ownerHandler = app
  .openapi(getOwnerOwnerIDContextContextDecisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOwnerOwnerIDContextContextDecisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOwnerOwnerIDContextContextDecisionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOwnerOwnerIDContextContextDecisionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOwnerOwnerIDContextContextDecisionDecisionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOwnerOwnerIDContextContextPolicyBundleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOwnerOwnerIDContextContextPolicyBundleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOwnerOwnerIDContextContextPolicyBundlePolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
