import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameRoute,
  deleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersRoute,
  getApisAutoscalingV1HorizontalpodautoscalersRoute,
  getApisAutoscalingV1IndexRoute,
  getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameRoute,
  getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusRoute,
  getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersRoute,
  getApisAutoscalingV1WatchHorizontalpodautoscalersRoute,
  getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameRoute,
  getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersRoute,
  patchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameRoute,
  patchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusRoute,
  postApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersRoute,
  putApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameRoute,
  putApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const autoscalingV1Handler = app
  .openapi(getApisAutoscalingV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAutoscalingV1HorizontalpodautoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAutoscalingV1WatchHorizontalpodautoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
