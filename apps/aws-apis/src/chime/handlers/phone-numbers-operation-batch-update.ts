import { OpenAPIHono } from '@hono/zod-openapi'
import { postPhoneNumbersOperationBatchUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const phoneNumbersOperationBatchUpdateHandler = app.openapi(
  postPhoneNumbersOperationBatchUpdateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
