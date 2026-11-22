import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV21AccountsAccountIdConsumerDisclosureLangCodeRoute,
  getV21AccountsAccountIdConsumerDisclosureRoute,
  putV21AccountsAccountIdConsumerDisclosureLangCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountConsumerDisclosuresHandler = app
  .openapi(getV21AccountsAccountIdConsumerDisclosureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConsumerDisclosureLangCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdConsumerDisclosureLangCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
