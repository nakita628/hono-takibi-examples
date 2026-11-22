import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelChannelNamePolicyRoute,
  deleteChannelChannelNameProgramProgramNameRoute,
  deleteChannelChannelNameRoute,
  getChannelChannelNamePolicyRoute,
  getChannelChannelNameProgramProgramNameRoute,
  getChannelChannelNameRoute,
  getChannelChannelNameScheduleRoute,
  postChannelChannelNameProgramProgramNameRoute,
  postChannelChannelNameRoute,
  putChannelChannelNamePolicyRoute,
  putChannelChannelNameProgramProgramNameRoute,
  putChannelChannelNameRoute,
  putChannelChannelNameStartRoute,
  putChannelChannelNameStopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelHandler = app
  .openapi(postChannelChannelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelChannelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelChannelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelChannelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelChannelNameProgramProgramNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelChannelNameProgramProgramNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelChannelNameProgramProgramNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelChannelNameProgramProgramNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelChannelNamePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelChannelNamePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelChannelNamePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelChannelNameScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelChannelNameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelChannelNameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
