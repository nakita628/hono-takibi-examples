import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeploysDeployIdRoute,
  getDeploysDeployIdRoute,
  postDeploysDeployIdCancelRoute,
  postDeploysDeployIdLockRoute,
  postDeploysDeployIdUnlockRoute,
  putDeploysDeployIdEdgeFunctionsCodeShaRoute,
  putDeploysDeployIdFilesPathRoute,
  putDeploysDeployIdFunctionsNameRoute,
  putDeploysDeployIdServerCodeShaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deploysHandler = app
  .openapi(postDeploysDeployIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeploysDeployIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeploysDeployIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeploysDeployIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeploysDeployIdUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeploysDeployIdFilesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeploysDeployIdFunctionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeploysDeployIdServerCodeShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeploysDeployIdEdgeFunctionsCodeShaRoute, (c) => {
    throw new Error('Not implemented')
  })
