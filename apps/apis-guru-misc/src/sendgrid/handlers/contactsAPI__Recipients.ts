import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactdbRecipientsRecipientIdRoute,
  deleteContactdbRecipientsRoute,
  getContactdbRecipientsBillableCountRoute,
  getContactdbRecipientsCountRoute,
  getContactdbRecipientsRecipientIdListsRoute,
  getContactdbRecipientsRecipientIdRoute,
  getContactdbRecipientsRoute,
  getContactdbRecipientsSearchRoute,
  getContactdbStatusRoute,
  patchContactdbRecipientsRoute,
  postContactdbRecipientsRoute,
  postContactdbRecipientsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsAPI__RecipientsHandler = app
  .openapi(deleteContactdbRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchContactdbRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactdbRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbRecipientsBillableCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbRecipientsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbRecipientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactdbRecipientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactdbRecipientsRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbRecipientsRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbRecipientsRecipientIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
