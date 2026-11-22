import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CustomObjectsCustomObjectKeyAccessRulesIdRoute,
  getApiV2CustomObjectsCustomObjectKeyAccessRulesDefinitionsRoute,
  getApiV2CustomObjectsCustomObjectKeyAccessRulesIdRoute,
  getApiV2CustomObjectsCustomObjectKeyAccessRulesRoute,
  getApiV2CustomObjectsCustomObjectKeyPermissionPoliciesIdRoute,
  getApiV2CustomObjectsCustomObjectKeyPermissionPoliciesRoute,
  patchApiV2CustomObjectsCustomObjectKeyAccessRulesIdRoute,
  patchApiV2CustomObjectsCustomObjectKeyPermissionPoliciesIdRoute,
  postApiV2CustomObjectsCustomObjectKeyAccessRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customObjectPermissionsHandler = app
  .openapi(getApiV2CustomObjectsCustomObjectKeyAccessRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomObjectsCustomObjectKeyAccessRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyAccessRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CustomObjectsCustomObjectKeyAccessRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyAccessRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyAccessRulesDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyPermissionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyPermissionPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CustomObjectsCustomObjectKeyPermissionPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
