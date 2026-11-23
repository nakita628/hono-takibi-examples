import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFdxConsentsConsentIdRevocationRoute,
  getFdxConsentsConsentIdRoute,
  getFdxConsentsRoute,
  getFdxRecipientRecipientIdRoute,
  getFdxRecipientsRoute,
  postFdxNotificationsRoute,
  putFdxConsentsConsentIdRevocationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fdxHandler = app
  .openapi(postFdxNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFdxRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFdxConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFdxConsentsConsentIdRevocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFdxConsentsConsentIdRevocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFdxConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFdxRecipientRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
