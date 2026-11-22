import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBolderRentalHousingRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBolderRentalHousingHandler = app.openapi(
  getRepositorySearchTypeBolderRentalHousingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
