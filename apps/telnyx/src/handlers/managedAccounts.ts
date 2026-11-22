import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getManagedAccountsAllocatableGlobalOutboundChannelsRoute,
  getManagedAccountsIdRoute,
  getManagedAccountsRoute,
  patchManagedAccountsIdRoute,
  patchManagedAccountsIdUpdateGlobalChannelLimitRoute,
  postManagedAccountsIdActionsDisableRoute,
  postManagedAccountsIdActionsEnableRoute,
  postManagedAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managedAccountsHandler = app
  .openapi(getManagedAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedAccountsAllocatableGlobalOutboundChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchManagedAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedAccountsIdActionsDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedAccountsIdActionsEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchManagedAccountsIdUpdateGlobalChannelLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
