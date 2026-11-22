import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1DmCountersRoute,
  getApiV1DmFilesRoute,
  getApiV1DmHistoryRoute,
  getApiV1DmListEveryoneRoute,
  getApiV1DmListRoute,
  getApiV1DmMembersRoute,
  getApiV1DmMessagesOthersRoute,
  getApiV1DmMessagesRoute,
  postApiV1DmCloseRoute,
  postApiV1DmCreateRoute,
  postApiV1DmDeleteRoute,
  postApiV1DmOpenRoute,
  postApiV1DmSetTopicRoute,
  postApiV1ImBlockUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directMessagesHandler = app
  .openapi(postApiV1ImBlockUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DmCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmCountersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DmCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DmDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmListEveryoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DmMessagesOthersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DmOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DmSetTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
