import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionPreVerifiedPhoneNumberIDPartnersRoute } from '../routes'

const app = new OpenAPIHono()

export const preVerifiedPhoneNumberPartnersHandler = app.openapi(
  getVersionPreVerifiedPhoneNumberIDPartnersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
