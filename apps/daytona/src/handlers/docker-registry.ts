import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDockerRegistryIdRoute,
  getDockerRegistryIdRoute,
  getDockerRegistryRegistryPushAccessRoute,
  getDockerRegistryRoute,
  patchDockerRegistryIdRoute,
  postDockerRegistryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dockerRegistryHandler = app
  .openapi(getDockerRegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDockerRegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDockerRegistryRegistryPushAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDockerRegistryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDockerRegistryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDockerRegistryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
