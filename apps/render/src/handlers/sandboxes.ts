import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSandboxesRoute,
  getSandboxesSandboxIdExecsExecIdRoute,
  getSandboxesSandboxIdExecsRoute,
  getSandboxesSandboxIdRoute,
  postSandboxesRoute,
  postSandboxesSandboxIdFilesOperationTokenRoute,
  postSandboxesSandboxIdRunsOperationTokenRoute,
  postSandboxesSandboxIdSnapshotsRoute,
  postSandboxesSandboxIdSuspendRoute,
  postSandboxesSandboxIdTerminateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sandboxesHandler = app
  .openapi(postSandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxesSandboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxesSandboxIdExecsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxesSandboxIdExecsExecIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIdTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIdRunsOperationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIdFilesOperationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
