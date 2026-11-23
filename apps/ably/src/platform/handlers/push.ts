import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePushChannelSubscriptionsRoute,
  deletePushDeviceRegistrationsDeviceIdRoute,
  deletePushDeviceRegistrationsRoute,
  getPushChannelsRoute,
  getPushChannelSubscriptionsRoute,
  getPushDeviceRegistrationsDeviceIdResetUpdateTokenRoute,
  getPushDeviceRegistrationsDeviceIdRoute,
  getPushDeviceRegistrationsRoute,
  patchPushDeviceRegistrationsDeviceIdRoute,
  postPushChannelSubscriptionsRoute,
  postPushDeviceRegistrationsRoute,
  postPushPublishRoute,
  putPushDeviceRegistrationsDeviceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pushHandler = app
  .openapi(getPushDeviceRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPushDeviceRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePushDeviceRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPushDeviceRegistrationsDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPushDeviceRegistrationsDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPushDeviceRegistrationsDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePushDeviceRegistrationsDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPushDeviceRegistrationsDeviceIdResetUpdateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPushChannelSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPushChannelSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePushChannelSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPushChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPushPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
