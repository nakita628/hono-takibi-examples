import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteBlueGreenDeploymentRoute,
  postActionDeleteBlueGreenDeploymentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteBlueGreenDeploymentHandler = app
  .openapi(getActionDeleteBlueGreenDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteBlueGreenDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
