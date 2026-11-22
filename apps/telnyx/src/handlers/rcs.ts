import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMessagesRcsDeeplinksAgentId2Route,
  getMessagesRcsDeeplinksAgentIdRoute,
  getMessagingRcsAgentsIdRoute,
  getMessagingRcsAgentsRoute,
  getMessagingRcsCapabilitiesAgentIdPhoneNumberRoute,
  patchMessagingRcsAgentsIdRoute,
  postMessagesRcsRoute,
  postMessagingRcsBulkCapabilitiesRoute,
  putMessagingRcsTestNumberInviteIdPhoneNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rcsHandler = app
  .openapi(postMessagesRcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesRcsDeeplinksAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesRcsDeeplinksAgentId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingRcsAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingRcsAgentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingRcsAgentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingRcsBulkCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingRcsCapabilitiesAgentIdPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMessagingRcsTestNumberInviteIdPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
