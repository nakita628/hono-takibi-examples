import { OpenAPIHono } from '@hono/zod-openapi'
import { getContactsIdBannersRoute, postContactsIdBannersViewIdDismissRoute } from '../routes'

const app = new OpenAPIHono()

export const bannersHandler = app
  .openapi(getContactsIdBannersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsIdBannersViewIdDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
