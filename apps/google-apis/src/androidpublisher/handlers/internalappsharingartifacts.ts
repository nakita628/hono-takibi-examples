import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApkRoute,
  postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internalappsharingartifactsHandler = app
  .openapi(
    postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApkRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
