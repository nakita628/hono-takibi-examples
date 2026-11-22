import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4RunnerControllersRunnerControllerIdTokensIdRoute,
  getApiV4RunnerControllersRunnerControllerIdTokensIdRoute,
  getApiV4RunnerControllersRunnerControllerIdTokensRoute,
  postApiV4RunnerControllersRunnerControllerIdTokensIdRotateRoute,
  postApiV4RunnerControllersRunnerControllerIdTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const runnerControllerTokensHandler = app
  .openapi(getApiV4RunnerControllersRunnerControllerIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4RunnerControllersRunnerControllerIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4RunnerControllersRunnerControllerIdTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4RunnerControllersRunnerControllerIdTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4RunnerControllersRunnerControllerIdTokensIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
