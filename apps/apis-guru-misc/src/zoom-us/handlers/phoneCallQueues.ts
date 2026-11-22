import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneCallQueuesCallQueueIdMembersMemberIdRoute,
  deletePhoneCallQueuesCallQueueIdMembersRoute,
  deletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberIdRoute,
  deletePhoneCallQueuesCallQueueIdPhoneNumbersRoute,
  deletePhoneCallQueuesCallQueueIdRoute,
  getPhoneCallQueuesCallQueueIdRecordingsRoute,
  getPhoneCallQueuesCallQueueIdRoute,
  getPhoneCallQueuesRoute,
  patchPhoneCallQueuesCallQueueIdRoute,
  postPhoneCallQueuesCallQueueIdMembersRoute,
  postPhoneCallQueuesCallQueueIdPhoneNumbersRoute,
  postPhoneCallQueuesRoute,
  putPhoneCallQueuesCallQueueIdManagerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneCallQueuesHandler = app
  .openapi(getPhoneCallQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneCallQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneCallQueuesCallQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneCallQueuesCallQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneCallQueuesCallQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPhoneCallQueuesCallQueueIdManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneCallQueuesCallQueueIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneCallQueuesCallQueueIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneCallQueuesCallQueueIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneCallQueuesCallQueueIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneCallQueuesCallQueueIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneCallQueuesCallQueueIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
