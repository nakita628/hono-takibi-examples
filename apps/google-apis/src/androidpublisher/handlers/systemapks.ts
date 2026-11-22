import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRoute,
  getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadRoute,
  getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdRoute,
  postAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemapksHandler = app
  .openapi(getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
