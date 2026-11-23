import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOwnershipOwnershipIdRoute,
  getOwnershipRoute,
  patchOwnershipOwnershipIdRoute,
  postOwnershipInstallRoute,
  postOwnershipOwnershipIdRoute,
  postOwnershipUninstallOwnershipIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ownershipHandler = app
  .openapi(getOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOwnershipInstallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOwnershipUninstallOwnershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOwnershipOwnershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOwnershipOwnershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOwnershipOwnershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
