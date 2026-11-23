import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBadgesIdsRecipientsRoute,
  getBadgesIdsRoute,
  getBadgesNameRoute,
  getBadgesRecipientsRoute,
  getBadgesRoute,
  getBadgesTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const badgesHandler = app
  .openapi(getBadgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBadgesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBadgesRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBadgesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBadgesIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBadgesIdsRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
