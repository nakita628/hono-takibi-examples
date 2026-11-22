import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV2ChannelsVoiceAgentsAgentIdTicketsTicketIdDisplayRoute,
  postApiV2ChannelsVoiceAgentsAgentIdUsersUserIdDisplayRoute,
  postApiV2ChannelsVoiceTicketsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicsHandler = app
  .openapi(postApiV2ChannelsVoiceAgentsAgentIdTicketsTicketIdDisplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ChannelsVoiceAgentsAgentIdUsersUserIdDisplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ChannelsVoiceTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
