import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserUserIDAdditionalTransactionInformationCategoryUserDefinedRoute } from '../routes'

const app = new OpenAPIHono()

export const additionalTransactionInformationCategoryUserDefinedHandler = app.openapi(
  postUserUserIDAdditionalTransactionInformationCategoryUserDefinedRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
