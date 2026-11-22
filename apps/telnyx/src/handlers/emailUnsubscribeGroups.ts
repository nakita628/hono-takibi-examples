import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailUnsubscribeGroupsIdRoute,
  deleteEmailUnsubscribeGroupsIdSuppressionsEmailRoute,
  getEmailUnsubscribeGroupsIdRoute,
  getEmailUnsubscribeGroupsIdSuppressionsRoute,
  getEmailUnsubscribeGroupsRoute,
  patchEmailUnsubscribeGroupsIdRoute,
  postEmailUnsubscribeGroupsIdSuppressionsRoute,
  postEmailUnsubscribeGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailUnsubscribeGroupsHandler = app
  .openapi(getEmailUnsubscribeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailUnsubscribeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailUnsubscribeGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailUnsubscribeGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmailUnsubscribeGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailUnsubscribeGroupsIdSuppressionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailUnsubscribeGroupsIdSuppressionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailUnsubscribeGroupsIdSuppressionsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
