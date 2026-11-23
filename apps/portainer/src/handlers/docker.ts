import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDockerEnvironmentIdContainersContainerIdGpusRoute,
  getDockerEnvironmentIdDashboardRoute,
  getDockerEnvironmentIdImagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dockerHandler = app
  .openapi(getDockerEnvironmentIdContainersContainerIdGpusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDockerEnvironmentIdDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDockerEnvironmentIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
