import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSwitchoverBlueGreenDeploymentRoute,
  postActionSwitchoverBlueGreenDeploymentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionSwitchoverBlueGreenDeploymentHandler = app
  .openapi(getActionSwitchoverBlueGreenDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSwitchoverBlueGreenDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
