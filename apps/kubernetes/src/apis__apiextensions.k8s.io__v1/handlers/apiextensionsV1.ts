import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute,
  deleteApisApiextensionsK8sIoV1CustomresourcedefinitionsRoute,
  getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute,
  getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRoute,
  getApisApiextensionsK8sIoV1CustomresourcedefinitionsRoute,
  getApisApiextensionsK8sIoV1IndexRoute,
  getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameRoute,
  getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsRoute,
  patchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute,
  patchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRoute,
  postApisApiextensionsK8sIoV1CustomresourcedefinitionsRoute,
  putApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute,
  putApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiextensionsV1Handler = app
  .openapi(getApisApiextensionsK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisApiextensionsK8sIoV1CustomresourcedefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiextensionsK8sIoV1CustomresourcedefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisApiextensionsK8sIoV1CustomresourcedefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisApiextensionsK8sIoV1CustomresourcedefinitionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
