import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1OtherContactsRoute,
  getV1OtherContactsSearchRoute,
  postV1ResourceNameCopyOtherContactToMyContactsGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const otherContactsHandler = app
  .openapi(getV1OtherContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OtherContactsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceNameCopyOtherContactToMyContactsGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
