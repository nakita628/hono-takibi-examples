import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDAdditionalTransactionInformationCategoryRoute } from '../routes'

const app = new OpenAPIHono()

export const additionalTransactionInformationCategoryHandler = app.openapi(
  getUserUserIDAdditionalTransactionInformationCategoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
