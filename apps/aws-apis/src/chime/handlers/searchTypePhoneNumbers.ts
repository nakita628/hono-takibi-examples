import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchTypePhoneNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const searchTypePhoneNumbersHandler = app.openapi(getSearchTypePhoneNumbersRoute, (c) => {
  throw new Error('Not implemented')
})
