import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdProductsRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApproveRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrlRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapproveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrlRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapproveRoute, (c) => {
    throw new Error('Not implemented')
  })
