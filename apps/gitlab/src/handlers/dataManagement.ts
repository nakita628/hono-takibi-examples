import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4AdminDataManagementModelNameRecordIdentifierRoute,
  getApiV4AdminDataManagementModelNameRoute,
  putApiV4AdminDataManagementModelNameChecksumRoute,
  putApiV4AdminDataManagementModelNameRecordIdentifierChecksumRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataManagementHandler = app
  .openapi(getApiV4AdminDataManagementModelNameRecordIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminDataManagementModelNameRecordIdentifierChecksumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AdminDataManagementModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminDataManagementModelNameChecksumRoute, (c) => {
    throw new Error('Not implemented')
  })
