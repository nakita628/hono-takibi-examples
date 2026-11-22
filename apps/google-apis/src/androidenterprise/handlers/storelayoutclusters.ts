import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storelayoutclustersHandler = app
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
