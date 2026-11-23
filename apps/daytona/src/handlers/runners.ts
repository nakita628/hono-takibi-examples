import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRunnersIdRoute,
  getRunnersBySandboxSandboxIdRoute,
  getRunnersBySnapshotRefRoute,
  getRunnersIdFullRoute,
  getRunnersIdRoute,
  getRunnersMeRoute,
  getRunnersRoute,
  patchRunnersIdDrainingRoute,
  patchRunnersIdSchedulingRoute,
  postRunnersHealthcheckRoute,
  postRunnersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const runnersHandler = app
  .openapi(getRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRunnersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRunnersBySandboxSandboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRunnersBySnapshotRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRunnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRunnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRunnersIdFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRunnersIdSchedulingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRunnersIdDrainingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRunnersHealthcheckRoute, (c) => {
    throw new Error('Not implemented')
  })
