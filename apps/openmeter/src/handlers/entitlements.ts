import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1GrantsGrantIdRoute,
  deleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRoute,
  deleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRoute,
  getApiV1CustomersCustomerIdOrKeyAccessRoute,
  getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueRoute,
  getApiV1EntitlementsEntitlementIdRoute,
  getApiV1EntitlementsRoute,
  getApiV1GrantsRoute,
  getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryRoute,
  getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
  getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRoute,
  getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRoute,
  getApiV1SubjectsSubjectIdOrKeyEntitlementsRoute,
  getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
  getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryRoute,
  getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRoute,
  getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRoute,
  getApiV2CustomersCustomerIdOrKeyEntitlementsRoute,
  getApiV2EntitlementsEntitlementIdRoute,
  getApiV2EntitlementsRoute,
  getApiV2GrantsRoute,
  postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
  postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetRoute,
  postApiV1SubjectsSubjectIdOrKeyEntitlementsRoute,
  postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
  postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetRoute,
  postApiV2CustomersCustomerIdOrKeyEntitlementsRoute,
  putApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRoute,
  putApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRoute,
} from '../routes'

const app = new OpenAPIHono()

export const entitlementsHandler = app
  .openapi(getApiV1CustomersCustomerIdOrKeyAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EntitlementsEntitlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1GrantsGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubjectsSubjectIdOrKeyEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubjectsSubjectIdOrKeyEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomersCustomerIdOrKeyEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomersCustomerIdOrKeyEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EntitlementsEntitlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
