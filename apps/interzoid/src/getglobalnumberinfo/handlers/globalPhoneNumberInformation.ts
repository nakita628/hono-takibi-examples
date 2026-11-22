import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetglobalnumberinfoRoute } from '../routes'

const app = new OpenAPIHono()

export const globalPhoneNumberInformationHandler = app.openapi(getGetglobalnumberinfoRoute, (c) => {
  throw new Error('Not implemented')
})
