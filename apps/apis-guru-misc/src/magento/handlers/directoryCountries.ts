import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1DirectoryCountriesRoute } from '../routes'

const app = new OpenAPIHono()

export const directoryCountriesHandler = app.openapi(getV1DirectoryCountriesRoute, (c) => {
  throw new Error('Not implemented')
})
