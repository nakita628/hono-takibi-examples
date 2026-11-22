import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteImagesByIdImageIdRoute,
  deleteImagesImageDigestRoute,
  deleteImagesRoute,
  getImagesByIdImageIdCheckRoute,
  getImagesByIdImageIdContentCtypeRoute,
  getImagesByIdImageIdContentFilesRoute,
  getImagesByIdImageIdContentJavaRoute,
  getImagesByIdImageIdContentRoute,
  getImagesByIdImageIdRoute,
  getImagesByIdImageIdVulnRoute,
  getImagesByIdImageIdVulnVtypeRoute,
  getImagesImageDigestArtifactsFileContentSearchRoute,
  getImagesImageDigestArtifactsRetrievedFilesRoute,
  getImagesImageDigestArtifactsSecretSearchRoute,
  getImagesImageDigestCheckRoute,
  getImagesImageDigestContentCtypeRoute,
  getImagesImageDigestContentFilesRoute,
  getImagesImageDigestContentJavaRoute,
  getImagesImageDigestContentMalwareRoute,
  getImagesImageDigestContentRoute,
  getImagesImageDigestMetadataMtypeRoute,
  getImagesImageDigestMetadataRoute,
  getImagesImageDigestRoute,
  getImagesImageDigestSbomsNativeRoute,
  getImagesImageDigestVulnRoute,
  getImagesImageDigestVulnVtypeRoute,
  getImagesRoute,
  postImagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(deleteImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteImagesByIdImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesByIdImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesByIdImageIdCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesByIdImageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesByIdImageIdContentFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesByIdImageIdContentJavaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesByIdImageIdContentCtypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesByIdImageIdVulnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesByIdImageIdVulnVtypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteImagesImageDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageDigestArtifactsFileContentSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageDigestArtifactsRetrievedFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageDigestArtifactsSecretSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageDigestCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageDigestContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageDigestContentFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageDigestContentJavaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageDigestContentMalwareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageDigestContentCtypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageDigestMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageDigestMetadataMtypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageDigestSbomsNativeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageDigestVulnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageDigestVulnVtypeRoute, (c) => {
    throw new Error('Not implemented')
  })
