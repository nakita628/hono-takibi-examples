import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4RunnerControllersIdRoute,
  deleteApiV4RunnerControllersIdScopesInstanceRoute,
  deleteApiV4RunnerControllersIdScopesRunnersRunnerIdRoute,
  getApiV4RunnerControllersIdRoute,
  getApiV4RunnerControllersIdScopesRoute,
  getApiV4RunnerControllersRoute,
  postApiV4RunnerControllersIdScopesInstanceRoute,
  postApiV4RunnerControllersIdScopesRunnersRunnerIdRoute,
  postApiV4RunnerControllersRoute,
  putApiV4RunnerControllersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const runnerControllersHandler = app
  .openapi(getApiV4RunnerControllersIdScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4RunnerControllersIdScopesInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4RunnerControllersIdScopesInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4RunnerControllersIdScopesRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4RunnerControllersIdScopesRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4RunnerControllersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4RunnerControllersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4RunnerControllersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4RunnerControllersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4RunnerControllersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
