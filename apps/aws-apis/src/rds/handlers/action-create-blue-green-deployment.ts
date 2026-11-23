import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateBlueGreenDeploymentRoute,
  postActionCreateBlueGreenDeploymentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateBlueGreenDeploymentHandler = app
  .openapi(getActionCreateBlueGreenDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateBlueGreenDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
