import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailDedicatedIpsIdRoute,
  getEmailDedicatedIpsIdRoute,
  getEmailDedicatedIpsRoute,
  patchEmailDedicatedIpsIdRoute,
  postEmailDedicatedIpsIdActionsCompleteWarmupRoute,
  postEmailDedicatedIpsIdActionsPauseWarmupRoute,
  postEmailDedicatedIpsIdActionsResumeWarmupRoute,
  postEmailDedicatedIpsIdActionsStartWarmupRoute,
  postEmailDedicatedIpsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dedicatedIPsHandler = app
  .openapi(getEmailDedicatedIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailDedicatedIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailDedicatedIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailDedicatedIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmailDedicatedIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailDedicatedIpsIdActionsCompleteWarmupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailDedicatedIpsIdActionsPauseWarmupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailDedicatedIpsIdActionsResumeWarmupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailDedicatedIpsIdActionsStartWarmupRoute, (c) => {
    throw new Error('Not implemented')
  })
