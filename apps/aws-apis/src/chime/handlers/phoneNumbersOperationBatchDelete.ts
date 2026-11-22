import { OpenAPIHono } from '@hono/zod-openapi'
import { postPhoneNumbersOperationBatchDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const phoneNumbersOperationBatchDeleteHandler = app.openapi(
  postPhoneNumbersOperationBatchDeleteRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
