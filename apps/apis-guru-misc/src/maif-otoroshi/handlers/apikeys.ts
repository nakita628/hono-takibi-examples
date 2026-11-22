import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiGroupsGroupIdApikeysClientIdQuotasRoute,
  deleteApiGroupsGroupIdApikeysClientIdRoute,
  deleteApiServicesServiceIdApikeysClientIdQuotasRoute,
  deleteApiServicesServiceIdApikeysClientIdRoute,
  getApiApikeysRoute,
  getApiGroupsGroupIdApikeysClientIdQuotasRoute,
  getApiGroupsGroupIdApikeysClientIdRoute,
  getApiGroupsGroupIdApikeysRoute,
  getApiServicesServiceIdApikeysClientIdGroupRoute,
  getApiServicesServiceIdApikeysClientIdQuotasRoute,
  getApiServicesServiceIdApikeysClientIdRoute,
  getApiServicesServiceIdApikeysRoute,
  patchApiGroupsGroupIdApikeysClientIdRoute,
  patchApiServicesServiceIdApikeysClientIdRoute,
  postApiGroupsGroupIdApikeysRoute,
  postApiServicesServiceIdApikeysRoute,
  putApiGroupsGroupIdApikeysClientIdRoute,
  putApiServicesServiceIdApikeysClientIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apikeysHandler = app
  .openapi(getApiApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGroupsGroupIdApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiGroupsGroupIdApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiGroupsGroupIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGroupsGroupIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiGroupsGroupIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiGroupsGroupIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiGroupsGroupIdApikeysClientIdQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGroupsGroupIdApikeysClientIdQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesServiceIdApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServicesServiceIdApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiServicesServiceIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesServiceIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiServicesServiceIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiServicesServiceIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesServiceIdApikeysClientIdGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiServicesServiceIdApikeysClientIdQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesServiceIdApikeysClientIdQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
