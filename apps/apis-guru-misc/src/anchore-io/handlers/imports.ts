import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteImportsImagesOperationIdRoute,
  getImportsImagesOperationIdDockerfileRoute,
  getImportsImagesOperationIdImageConfigRoute,
  getImportsImagesOperationIdManifestRoute,
  getImportsImagesOperationIdPackagesRoute,
  getImportsImagesOperationIdParentManifestRoute,
  getImportsImagesOperationIdRoute,
  getImportsImagesRoute,
  postImportsImagesOperationIdDockerfileRoute,
  postImportsImagesOperationIdImageConfigRoute,
  postImportsImagesOperationIdManifestRoute,
  postImportsImagesOperationIdPackagesRoute,
  postImportsImagesOperationIdParentManifestRoute,
  postImportsImagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const importsHandler = app
  .openapi(getImportsImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImportsImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteImportsImagesOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImportsImagesOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImportsImagesOperationIdDockerfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImportsImagesOperationIdDockerfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImportsImagesOperationIdImageConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImportsImagesOperationIdImageConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImportsImagesOperationIdManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImportsImagesOperationIdManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImportsImagesOperationIdPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImportsImagesOperationIdPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImportsImagesOperationIdParentManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImportsImagesOperationIdParentManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
