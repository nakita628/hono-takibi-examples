import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OmnichannelContactRoute,
  getApiV1OmnichannelContactsChannelsRoute,
  getApiV1OmnichannelContactsCheckExistenceRoute,
  getApiV1OmnichannelContactSearchRoute,
  getApiV1OmnichannelContactsGetRoute,
  getApiV1OmnichannelContactsHistoryRoute,
  getApiV1OmnichannelContactsSearchRoute,
  postApiV1OmnichannelContactRoute,
  postApiV1OmnichannelContactsBlockRoute,
  postApiV1OmnichannelContactsConflictsRoute,
  postApiV1OmnichannelContactsRoute,
  postApiV1OmnichannelContactsUnblockRoute,
  postApiV1OmnichannelContactsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelContactsHandler = app
  .openapi(postApiV1OmnichannelContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OmnichannelContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OmnichannelContactSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OmnichannelContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OmnichannelContactsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OmnichannelContactsConflictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OmnichannelContactsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OmnichannelContactsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OmnichannelContactsChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OmnichannelContactsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OmnichannelContactsCheckExistenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OmnichannelContactsBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OmnichannelContactsUnblockRoute, (c) => {
    throw new Error('Not implemented')
  })
