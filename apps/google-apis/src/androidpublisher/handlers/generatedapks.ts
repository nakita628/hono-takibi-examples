import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadRoute,
  getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const generatedapksHandler = app
  .openapi(getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
