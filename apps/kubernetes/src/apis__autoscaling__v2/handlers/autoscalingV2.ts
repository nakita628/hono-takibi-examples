import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameRoute,
  deleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersRoute,
  getApisAutoscalingV2HorizontalpodautoscalersRoute,
  getApisAutoscalingV2IndexRoute,
  getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameRoute,
  getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusRoute,
  getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersRoute,
  getApisAutoscalingV2WatchHorizontalpodautoscalersRoute,
  getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameRoute,
  getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersRoute,
  patchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameRoute,
  patchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusRoute,
  postApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersRoute,
  putApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameRoute,
  putApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const autoscalingV2Handler = app
  .openapi(getApisAutoscalingV2IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAutoscalingV2HorizontalpodautoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusRoute,
    (c) => {},
  )
  .openapi(
    patchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusRoute,
    (c) => {},
  )
  .openapi(
    putApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusRoute,
    (c) => {},
  )
  .openapi(getApisAutoscalingV2WatchHorizontalpodautoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
