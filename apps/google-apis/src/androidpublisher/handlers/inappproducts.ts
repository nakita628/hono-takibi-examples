import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute,
  getAndroidpublisherV3ApplicationsPackageNameInappproductsRoute,
  getAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute,
  patchAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute,
  postAndroidpublisherV3ApplicationsPackageNameInappproductsRoute,
  putAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inappproductsHandler = app
  .openapi(getAndroidpublisherV3ApplicationsPackageNameInappproductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ApplicationsPackageNameInappproductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
