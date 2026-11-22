import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCollectionsNamespaceSlugIdResourceGroupRoute,
  getApiCollectionsNamespaceSlugIdRoute,
  getApiCollectionsNamespaceSlugResourceGroupRoute,
  getApiCollectionsNamespaceSlugRoute,
  getApiCollectionsRoute,
  patchApiCollectionsNamespaceSlugIdRoute,
  patchApiCollectionsNamespaceSlugRoute,
  postApiCollectionsNamespaceSlugIdItemsRoute,
  postApiCollectionsNamespaceSlugIdResourceGroupRoute,
  postApiCollectionsNamespaceSlugItemsRoute,
  postApiCollectionsNamespaceSlugResourceGroupRoute,
  postApiCollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getApiCollectionsNamespaceSlugIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCollectionsNamespaceSlugIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionsNamespaceSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCollectionsNamespaceSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionsNamespaceSlugIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionsNamespaceSlugItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionsNamespaceSlugIdResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionsNamespaceSlugIdResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionsNamespaceSlugResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionsNamespaceSlugResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
