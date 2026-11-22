import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1DirectoryCountriesCountryIdRoute } from '../routes'

const app = new OpenAPIHono()

export const directoryCountriesCountryIdHandler = app.openapi(
  getV1DirectoryCountriesCountryIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
