import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RumConfigArchiveAppIdRoute,
  getApiV2RumConfigArchiveAppIdRoute,
  getApiV2RumConfigArchiveRoute,
  putApiV2RumConfigArchiveAppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rumManagedArchivesHandler = app
  .openapi(getApiV2RumConfigArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RumConfigArchiveAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumConfigArchiveAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RumConfigArchiveAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
