import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storelayoutpagesHandler = app
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
