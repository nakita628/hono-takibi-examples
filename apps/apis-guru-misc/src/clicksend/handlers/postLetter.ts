import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePostReturnAddressesReturnAddressIdRoute,
  getPostLettersHistoryExportFilenameFilenameRoute,
  getPostLettersHistoryRoute,
  getPostReturnAddressesReturnAddressIdRoute,
  getPostReturnAddressesRoute,
  postPostLettersPriceRoute,
  postPostLettersSendRoute,
  postPostReturnAddressesRoute,
  putPostReturnAddressesReturnAddressIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postLetterHandler = app
  .openapi(getPostLettersHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostLettersHistoryExportFilenameFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostLettersPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostLettersSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostReturnAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostReturnAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePostReturnAddressesReturnAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostReturnAddressesReturnAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPostReturnAddressesReturnAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
