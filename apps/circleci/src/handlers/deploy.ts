import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeployComponentsComponentIdRoute,
  getDeployComponentsComponentIdVersionsRoute,
  getDeployComponentsRoute,
  getDeployEnvironmentsEnvironmentIdRoute,
  getDeployEnvironmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deployHandler = app
  .openapi(getDeployEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeployEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeployComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeployComponentsComponentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeployComponentsComponentIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
