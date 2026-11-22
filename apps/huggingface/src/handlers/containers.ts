import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiContainersNamespaceRepoResourceGroupRoute,
  getApiContainersNamespaceRepoRoute,
  getApiContainersNamespaceRepoTreePathRoute,
  getApiContainersNamespaceRepoXetReadTokenRoute,
  getApiContainersNamespaceRepoXetWriteTokenRoute,
  getApiContainersNamespaceRoute,
  getApiRegistryTokenRoute,
  getContainersNamespaceRepoResolvePathRoute,
  postApiContainersNamespaceRepoBatchRoute,
  postApiContainersNamespaceRepoPathsInfoRoute,
  postApiContainersNamespaceRepoResourceGroupRoute,
  postApiContainersNamespaceRepoRoute,
  putApiContainersNamespaceRepoSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const containersHandler = app
  .openapi(getApiRegistryTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiContainersNamespaceRepoXetWriteTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiContainersNamespaceRepoXetReadTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiContainersNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiContainersNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiContainersNamespaceRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiContainersNamespaceRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiContainersNamespaceRepoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiContainersNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContainersNamespaceRepoResolvePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiContainersNamespaceRepoBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiContainersNamespaceRepoTreePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiContainersNamespaceRepoPathsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
