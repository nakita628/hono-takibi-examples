import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteExternalLocationsNameRoute,
  getExternalLocationsNameRoute,
  getExternalLocationsRoute,
  patchExternalLocationsNameRoute,
  postExternalLocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalLocationsHandler = app
  .openapi(postExternalLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalLocationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExternalLocationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExternalLocationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
